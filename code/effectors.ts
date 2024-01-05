import { Comp, Vec2 as V2 } from "kaboom"

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
    drag?: number
    angularDrag?: number
    forceMode: ForceMode
}

export interface PointEffectorComp extends Comp {
    forceMagnitude: number
    forceVariation: number
    distanceScale: number
    drag: number
    angularDrag: number
    forceMode: ForceMode
}

export function pointEffector(opt: PointEffectorOpt): PointEffectorComp {
    let forceMagnitude = opt.forceMagnitude ?? 0
    let forceVariation = opt.forceVariation ?? 0
    let distanceScale = opt.distanceScale || 1
    let drag = opt.drag ?? 0
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
        get drag() {
            return drag
        },
        set drag(value: number) {
            drag = value
        },
        get angularDrag() {
            return angularDrag
        },
        set angularDrag(value) {
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
