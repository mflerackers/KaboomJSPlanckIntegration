import { GameObj, Comp, Vec2 as V2 } from "kaboom"
import "kaboom/global"
import { Vec2, Body } from 'planck'
import { k2p, p2k, world } from "./world"

export type CollisiondetectionMode = "discrete" | "continuous"

export type BodyType = "static" | "kinematic" | "dynamic"

export type RigidBodyOpt = {
    type: BodyType
    mass?: number
    linearDrag?: number
    angularDrag?: number
    gravityScale?: number
    freezeRotation?: boolean
    collisionDetectionMode?: CollisiondetectionMode
}

type CollissionCallback = (body: GameObj) => void

export type ForceMode = "force" | "impulse"

export interface RigidBodyComp extends Comp {
    body: Body

    angularDrag: number
    angularVelocity: number
    attachedColliderCount: number
    bodyType: BodyType
    centerOfMass: V2
    collisionDetectionMode: CollisiondetectionMode
    //constraints
    linearDrag: number
    freezeRotation: boolean
    gravityScale: number
    inertia: number
    isKinematic: boolean
    mass: number
    position: V2
    rotation: number
    simulated: boolean
    totalForce: V2
    totalTorque: number
    velocity: V2
    worldCenterOfMass: V2

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
                linearDamping: opt.linearDrag || 0,
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
        // Properties
        get angularDrag() { return _body ? _body.getAngularDamping() : 0 },
        set angularDrag(value: number) { _body.setAngularDamping(value) },
        get angularVelocity() { return _body ? _body.getAngularVelocity() : 0 },
        set angularVelocity(value: number) { _body.setAngularVelocity(value) },
        get attachedColliderCount() { return 1 },
        get bodyType() { return _body.getType() as BodyType },
        get centerOfMass() { return p2k(_body.getLocalCenter()) },
        get collisionDetectionMode() { return _body.isBullet() ? "continuous" : "discrete" },
        get linearDrag() { return _body.getLinearDamping() },
        set linearDrag(value: number) { _body.setLinearDamping(value) },
        get freezeRotation() { return _body.isFixedRotation() },
        set freezeRotation(value: boolean) { _body.setFixedRotation(value) },
        get gravityScale() { return _body.getGravityScale() },
        set gravityScale(value: number) { _body.setGravityScale(value) },
        get inertia() { return _body.getInertia() },
        get isKinematic() { return _body.isKinematic() },
        get mass() { return _body.getMass() },
        get position() { return p2k(_body.getPosition()) },
        get rotation() { return _body.getAngle() },
        get simulated() { return _body.isActive() },
        set simulated(value: boolean) { _body.setActive(value) },
        get totalForce() { return vec2() },
        get totalTorque() { return 0 },
        get velocity() { return p2k(_body.getLinearVelocity()) },
        set velocity(value: V2) { _body.setLinearVelocity(k2p(value)) },
        get worldCenterOfMass() { return p2k(_body.getWorldCenter()) },
        // Forces
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
        // Conversions
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
        // Sleeping
        get isAwake() { return _body.isAwake() },
        get isSleeping() { return !_body.isAwake() },
        sleep() { _body.setAwake(false) },
        wakeUp() { _body.setAwake(true) },
        // Events
        onCollisionEnter(callback: CollissionCallback) {
            this.on("collide_enter", callback)
        },
        onCollisionStay(callback: CollissionCallback) {
            this.on("collide_stay", callback)
        },
        onCollisionExit(callback: CollissionCallback) {
            this.on("collide_exit", callback)
        },
        // Kaboom
        jump(force: number) {
            this.addForce(vec2(0, -force), "impulse")
        }
    }
}