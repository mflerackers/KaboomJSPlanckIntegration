import { Comp, Vec2 as V2 } from "kaboom"
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

export interface RigidBodyComp extends Comp {
    body: Body
    applyForce(force: V2): void
    applyForce(force: V2, point: V2): void
    applyTorque(torque: number): void
    applyLinearImpulse(impulse: V2,): void
    applyLinearImpulse(impulse: V2, point: V2): void
    applyAngularImpulse(impulse: number): void
    jump(force: number): void
    onCollisionEnter(callback: CollissionCallback): void
    onCollisionStay(callback: CollissionCallback): void
    onCollisionExit(callback: CollissionCallback): void
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
        applyForce(force: V2, point: V2 | null = null) {
            const p = point ? Vec2(point.x, point.y) : this.body.getPosition()
            _body.applyForce(Vec2(force.x, force.y), p)
        },
        applyTorque(torque: number) {
            _body.applyTorque(torque)
        },
        applyLinearImpulse(impulse: V2, point: V2 | null = null) {
            const p = point ? Vec2(point.x, point.y) : this.body.getPosition()
            _body.applyLinearImpulse(Vec2(impulse.x, impulse.y), p)
        },
        applyAngularImpulse(impulse: number) {
            _body.applyAngularImpulse(impulse)
        },
        jump(force: number) {
            this.applyLinearImpulse(vec2(0, -force))
        },
        onCollisionEnter(callback: CollissionCallback) {
            this.on("collide_enter", callback)
        },
    onCollisionStay(callback: CollissionCallback) {
        this.on("collide_stay", callback)
    },
    onCollisionExit(callback: CollissionCallback) {
        this.on("collide_exit", callback)
    }
        
    }
}