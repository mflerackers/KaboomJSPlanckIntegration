import { Comp, Vec2 as V2, GameObj } from "kaboom"
import { Contact, Manifold, Vec2 } from "planck"
import { RigidBodyComp } from "./rigid_body"

export type ConstantForceOpt = {
    force: V2
    relativeForce: V2
    torque: number
}

export interface ConstantForceComp extends Comp {
    force: V2
    relativeForce: V2
    torque: number
}

export function constantForce(opt: ConstantForceOpt): ConstantForceComp {
    let _force = opt.force
    let _relativeForce = opt.relativeForce
    let _torque = opt.torque
    return {
        id: "constantForce",
        require: ["rigidBody"],
        update() {
            if (_force) {
                this.applyForce(_force)
            }
        },
        get force() {
            return _force
        },
        set force(value: V2) {
            _force = value
        },
        get relativeForce() {
            return _relativeForce
        },
        set relativeForce(value: V2) {
            _relativeForce = value
        },
        get torque() {
            return _torque
        },
        set torque(value: number) {
            _torque = value
        }
    }
}

export type ForceMode = "constant" | "inverseLinear" | "inverseSquared"

export type PointEffectorOpt = {
    forceMagnitude: number
    forceVariation?: number
    distanceScale?: number
    linearDrag?: number
    angularDrag?: number
    forceMode: ForceMode
}

export interface PointEffectorComp extends Comp {
    forceMagnitude: number
    forceVariation: number
    distanceScale: number
    effectorLinearDrag: number
    effectorAngularDrag: number
    forceMode: ForceMode
}

export function pointEffector(opt: PointEffectorOpt): PointEffectorComp {
    let forceMagnitude = opt.forceMagnitude ?? 0
    let forceVariation = opt.forceVariation ?? 0
    let distanceScale = opt.distanceScale || 1
    let linearDrag = opt.linearDrag ?? 0
    let angularDrag = opt.angularDrag ?? 0
    let forceMode = opt.forceMode ?? "constant"
    return {
        id: "pointEffector",
        require: ["rigidBody"],
        update() {
            get("rigidBody").forEach((rb) => {
                if (rb !== this) {
                    const v = rb.pos.sub(this.pos)
                    const l = v.len()
                    const d = l * distanceScale / 10
                    const s = forceMode === "constant" ? 1 : forceMode === "inverseLinear" ? 1 / d : 1 / d ** 2
                    rb.addForce(v.scale(forceMagnitude * s / l))
                }
            })
        },
        get forceMagnitude() {
            return forceMagnitude
        },
        set forceMagnitude(value: number) {
            forceMagnitude = value
        },
        get forceVariation() {
            return forceVariation
        },
        set forceVariation(value: number) {
            forceVariation = value
        },
        get distanceScale() {
            return distanceScale
        },
        set distanceScale(value: number) {
            distanceScale = value
        },
        get effectorLinearDrag() {
            return linearDrag
        },
        set effectorLinearDrag(value: number) {
            linearDrag = value
        },
        get effectorAngularDrag() {
            return angularDrag
        },
        set effectorAngularDrag(value) {
            angularDrag = value
        },
        get forceMode() {
            return forceMode
        },
        set forceMode(value: ForceMode) {
            forceMode = value
        }
    }
}

export type PlatformEffectorOpt = {
    rotationalOffset?: number
    sideArc?: number
    surfaceArc?: number
    useOneWay?: boolean
    useOneWayGrouping?: boolean
    useSideBounce?: boolean
    useSideFriction?: boolean
}

export interface PlatformEffectorComp extends Comp {
    rotationalOffset: number
    sideArc: number
    surfaceArc: number
    useOneWay: boolean
    useOneWayGrouping: boolean
    useSideBounce: boolean
    useSideFriction: boolean
}

export function platformEffector(opt: PlatformEffectorOpt): PlatformEffectorComp {
    let rotationalOffset = opt.rotationalOffset ?? 0
    let sideArc = opt.sideArc ?? 1
    let surfaceArc = opt.surfaceArc ?? 180
    let useOneWay = opt.useOneWay ?? false
    let useOneWayGrouping = opt.useOneWay ?? false
    let useSideBounce = opt.useSideBounce ?? false
    let useSideFriction = opt.useSideFriction ?? false
    return {
        id: "platformEffector",
        require: ["rigidBody", "collider"],
        add() {
            this.on("collision_pre_solve", (other: GameObj<RigidBodyComp>, contact: Contact, oldManifold: Manifold) => {
                if (useOneWay) {
                    const v = other.body.getLinearVelocity()
                    const up = Vec2(0, -1)
                    const angle = rad2deg(Math.atan2(Vec2.cross(v, up), Vec2.dot(v, up)))
                    if (Math.abs(angle) > surfaceArc / 2) {
                        contact.setEnabled(false)
                    }
                }
            })
        },
        get rotationalOffset() {
            return rotationalOffset
        },
        set rotationalOffset(value: number) {
            rotationalOffset = value

        },
        get sideArc() {
            return sideArc
        },
        set sideArc(value: number) {
            sideArc = value
        },
        get surfaceArc() {
            return surfaceArc
        },
        set surfaceArc(value: number) {
            surfaceArc = value
        },
        get useOneWay() {
            return useOneWay
        },
        set useOneWay(value: boolean) {
            useOneWay = value
        },
        get useOneWayGrouping() {
            return useOneWayGrouping
        },
        set useOneWayGrouping(value: boolean) {
            useOneWayGrouping = value
        },
        get useSideBounce() {
            return useSideBounce
        },
        set useSideBounce(value: boolean) {
            useSideBounce = value
        },
        get useSideFriction() {
            return useSideFriction
        },
        set useSideFriction(value: boolean) {
            useSideFriction = value
        },
    }
}

export type SurfaceEffectorOpt = {
    forceScale?: number
    speed?: number
    speedVariation?: number
    useBounce?: boolean
    useContactForce?: boolean
    useFriction?: boolean
}

export interface SurfaceEffectorComp extends Comp {
    forceScale: number
    speed: number
    speedVariation: number
    useBounce: boolean
    useContactForce?: boolean
    useFriction?: boolean
}

export function surfaceEffector(opt: SurfaceEffectorOpt): SurfaceEffectorComp {
    let forceScale = opt.forceScale ?? 1
    let speed = (opt.speed ?? 1) / 10
    let speedVariation = (opt.speedVariation ?? 0) / 10
    let useBounce = opt.useBounce ?? true
    let useContactForce = opt.useContactForce ?? true
    let useFriction = opt.useFriction ?? true
    return {
        id: "surfaceEffector",
        require: ["rigidBody", "collider"],
        add() {
            this.on("collision_pre_solve", (other: GameObj<RigidBodyComp>, contact: Contact, oldManifold: Manifold) => {
                contact.setTangentSpeed(speed + (Math.random() - 0.5) * speedVariation)
                if (!useBounce) {
                    contact.setRestitution(0)
                }
                if (!useFriction) {
                    contact.setFriction(0)
                }
            })
        },
        get forceScale() {
            return forceScale
        },
        set forceScale(value: number) {
            forceScale = value
        },
        get speed() {
            return speed
        },
        set speed(value: number) {
            speed = value
        },
        get speedVariation() {
            return speedVariation
        },
        set speedVariation(value: number) {
            speedVariation = value
        },
        get useBounce() {
            return useBounce
        },
        set useBounce(value: boolean) {
            useBounce = value
        },
        get useContactForce() {
            return useContactForce
        },
        set useContactForce(value: boolean) {
            useContactForce = value
        },
        get useFriction() {
            return useFriction
        },
        set useFriction(value: boolean) {
            useFriction = value
        }
    }
}

/*
Buoyancy

// Cut a convex polygon in 2 polygons
cut(a, b) {
    const left = []
    const right = []
    const ab = b.sub(a);
    let prev = this.points[this.points.length-1];
    let ap = prev.sub(a);
    let wasLeft = ab.cross(ap) > 0;
    this.points.forEach((p,i)=>{
        ap = p.sub(a);
        const isLeft = ab.cross(ap) > 0;
        if (wasLeft != isLeft) {
            const intersection = segmentLineIntersection(prev, p, a, b);
            left.push(intersection);
            right.push(intersection);
            wasLeft = isLeft;
        }
        (isLeft ? left : right).push(p);
        prev = p;
    })
    const result = [];
    result.push(left.length ? new Polygon(left) : null);
    result.push(right.length ? new Polygon(right) : null);
    return result;
}

const area = new Polygon(shape.points);
    const cut = area.cut(new Vector(0, 100), new Vector(this.width, 100));
    const surfaceArea = cut[1];
    const submergedArea = cut[0];

    object.submergedArea = submergedArea

    if (submergedArea) {
        this.applyBuoyancy(object, submergedArea, FLUID_DENSITY, new Vector(0, GRAVITY * 10));
        this.applyDrag(object, submergedArea, FLUID_DENSITY);
    }
});

applyBuoyancy(object, submergedArea, fluidDensity, gravity) {
    // Our area is 100 times larger than the area in the physics engine
    const displacedMass = fluidDensity * submergedArea.area / 100;
    // Gravity is 10 times larger, so factors work out
    const buoyancyForce = gravity.neg.mul(displacedMass);
    object.applyForce(buoyancyForce, submergedArea.center);
}

applyDrag(object, submergedArea, fluidDensity) {
    const velocity = object.linearVelocity;
    const speed = velocity.mag;
    const dragMagnitude = fluidDensity * speed;
    const dragForce = velocity.neg.mul(dragMagnitude);
    object.applyForce(dragForce, submergedArea.center);

    // The area is 100 times smaller in the physics engine
    const angularDrag = submergedArea.area / 100 * -object.angularVelocity;
    object.applyTorque(angularDrag);
}
*/