import { GameObj, Comp, Vec2 as V2 } from "kaboom"
import { BodyType, Vec2, Body } from 'planck'
import { k2p, p2k, world } from "./world"

export type CollisiondetectionMode = "discrete" | "continuous"

export type RigidBodyOpt = {
    type: BodyType
    mass?: number
    drag?: number
    angularDrag?: number
    gravityScale?: number
    freezeRotation?: boolean
    collisionDetectionMode?: CollisiondetectionMode
}

type CollissionCallback = (body: GameObj) => void

export type ForceMode = "force" | "impulse"

export interface RigidBodyComp extends Comp {
    body: Body
    
    addForce(force: V2): void
    addForce(force: V2, mode: ForceMode): void
    addForceAtPosition(force: V2, position: V2): void
    addForceAtPosition(force: V2, position: V2, mode: ForceMode): void
    addRelativeForce(force: V2): void
    addRelativeForce(force: V2, mode: ForceMode): void
    addTorque(torque: number): void
    addTorque(torque: number, mode: ForceMode): void
    
    getPoint(point: V2): V2
    getRelativePoint(relativePoint: V2): V2
    getRelativePointVelocity(relativePoint: V2): V2
    getVector(vector: V2): V2
    getRelativeVector(relativeVector: V2): V2
    
    isAwake: boolean
    isSleeping: boolean
    sleep(): void
    wakeUp(): void
    
    onCollisionEnter(callback: CollissionCallback): void
    onCollisionStay(callback: CollissionCallback): void
    onCollisionExit(callback: CollissionCallback): void

    jump(force: number): void
}

export function rigidBody(opt: RigidBodyOpt): RigidBodyComp {
    let _body: Body
    return {
        id: "rigidBody",
        require: ["pos", "rotate"],
        get body() { return _body },
        add() {
            _body = world.createBody({
                type: opt.type || "dynamic",
                position: k2p(this.pos),
                angle: deg2rad(this.angle || 0),
                linearDamping: opt.drag || 0,
                angularDamping: opt.angularDrag || 0,
                gravityScale: opt.gravityScale || 1,
                fixedRotation: opt.freezeRotation || false,
                bullet: opt.collisionDetectionMode === "continuous",
                userData: this
            })
        },
        destroy() {
            world.destroyBody(_body);
        },
        update() {
            this.pos = p2k(_body.getPosition())
            this.angle = rad2deg(_body.getAngle())
        },
        /*draw() {
            drawRect({
                pos: p2k(_body.getPosition()).sub(2,2).sub(this.pos),
                width: 4,
                height: 4,
                angle: this.angle,
                color: RED,
            })
        },*/
        addForce(force: V2, mode: ForceMode = "force") {
            if (mode === "force") {
                _body.applyForce(k2p(force), _body.getPosition())
            }
            else {
                _body.applyLinearImpulse(k2p(force), _body.getPosition())
            }
        },
        addForceAtPosition(force: V2, position: V2, mode: ForceMode = "force") {
            if (mode === "force") {
                _body.applyForce(k2p(force), k2p(position))
            }
            else {
                _body.applyLinearImpulse(k2p(force), k2p(position))
            }
        },
        addRelativeForce(force: V2, mode: ForceMode = "force") {
            if (mode === "force") {
                _body.applyForce(_body.getWorldVector(k2p(force)), _body.getPosition())
            }
            else {
                _body.applyLinearImpulse(_body.getWorldVector(k2p(force)), _body.getPosition())
            }
        },
        addTorque(torque: number, mode: ForceMode = "force") {
            if (mode === "force") {
                _body.applyTorque(torque)
            }
            else {
                _body.applyAngularImpulse(torque)
            }
        },
        
        getPoint(point: V2) {
            return p2k(_body.getLocalPoint(k2p(point)))
        },
        getRelativePoint(relativePoint: V2) {
            return p2k(_body.getWorldPoint(k2p(relativePoint)))
        },
        getRelativePointVelocity(relativePoint: V2) {
            return p2k(_body.getLinearVelocityFromLocalPoint(k2p(relativePoint)))
        },
        getVector(vector: V2) {
            return p2k(_body.getLocalVector(k2p(vector)))
        },
        getRelativeVector(relativeVector: V2) {
            return p2k(_body.getWorldVector(k2p(relativeVector)))
        },

        get isAwake() { return _body.isAwake() },
        get isSleeping() { return !_body.isAwake() },
        sleep() { _body.setAwake(false) },
        wakeUp() { _body.setAwake(true) },

        onCollisionEnter(callback: CollissionCallback) {
            this.on("collide_enter", callback)
        },
        onCollisionStay(callback: CollissionCallback) {
            this.on("collide_stay", callback)
        },
        onCollisionExit(callback: CollissionCallback) {
            this.on("collide_exit", callback)
        },
        
        jump(force: number) {
            this.addForce(vec2(0, -force), "impulse")
        }
    }
}