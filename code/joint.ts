import { Comp, Vec2 as V2, GameObj, EventController } from "kaboom"
import { Vec2, DistanceJoint, RevoluteJoint, MouseJoint } from 'planck'
import { k2p, p2k, world } from "./world"
import { RigidBodyComp } from "./rigid_body"

export type DistanceJointOpt = {
    connectedObject: GameObj<RigidBodyComp>
    anchor: V2
    connectedObjectAnchor: V2
    enableCollision?: boolean
    distance?: number
}

export interface DistanceJointComp extends Comp {
    distance: number
}

export function distanceJoint(opt: DistanceJointOpt): DistanceJointComp {
    let joint: DistanceJoint | null
    return {
        id: "distanceJoint",
        require: ["rigidBody"],
        add() {
            joint = world.createJoint(new DistanceJoint({
                collideConnected: opt.enableCollision ?? true,
                bodyA: this.body,
                bodyB: opt.connectedObject.body,
                localAnchorA: k2p(opt.anchor),
                localAnchorB: k2p(opt.connectedObjectAnchor)
            }))
            if (joint && opt.distance) {
                joint.setLength(opt.distance / 10)
            }
        },
        destroy() {
            if (joint) {
                world.destroyJoint(joint)
            }
        },
        get distance() {
            return joint ? joint.getLength() * 10 : 0
        },
        set distance(d: number) {
            if (joint) { joint.setLength(d / 10) }
        },
    }
}

export type HingeJointOpt = {
    connectedObject: GameObj<RigidBodyComp>
    anchor: V2
    connectedObjectAnchor: V2
    enableCollision?: boolean
    limits?: { min: number, max: number }
    //limitState	Gets the state of the joint limit.
    motor?: { maxMotorTorque: number, motorSpeed: number }
    referenceAngle: number
    useLimits?: boolean
    useMotor?: boolean
    breakForce?: number
}

export interface HingeJointComp extends Comp {
    jointAngle: number
    jointSpeed: number
    GetReactionForce(): V2
    GetReactionTorque(): number
    onJointBreak(callback: (j: RevoluteJoint) => void): EventController
}

export function hingeJoint(opt: HingeJointOpt): HingeJointComp {
    let joint: RevoluteJoint | null
    return {
        id: "distanceJoint",
        require: ["rigidBody"],
        add() {
            joint = world.createJoint(new RevoluteJoint({
                collideConnected: opt.enableCollision ?? true,
                bodyA: this.body,
                bodyB: opt.connectedObject.body,
                localAnchorA: k2p(opt.anchor),
                localAnchorB: k2p(opt.connectedObjectAnchor),
                lowerAngle: opt.limits?.min,
                upperAngle: opt.limits?.max,
                enableLimit: opt.useLimits,
                maxMotorTorque: opt.motor?.maxMotorTorque,
                motorSpeed: opt.motor?.motorSpeed,
                enableMotor: opt.useMotor,
                referenceAngle: opt.referenceAngle
            }))
        },
        destroy() {
            if (joint) {
                world.destroyJoint(joint)
            }
        },
        update() {
            if (opt.breakForce && this.GetReactionForce() > opt.breakForce) {
                this.trigger("jointbreak", this)
            }
        },
        onJointBreak(callback: (j: RevoluteJoint) => void) {
            return this.on("jointbreak", callback)
        },
        GetReactionForce() {
            return joint ? p2k(joint.getReactionForce(1 / dt())) : vec2()
        },
        GetReactionTorque() {
            return joint ? joint.getReactionTorque(1 / dt()) : 0
        },
        get jointAngle() {
            return joint ? joint.getJointAngle() : 0
        },
        get jointSpeed() {
            return joint ? joint.getJointSpeed() : 0
        }
    }
}

export type SpringJointOpt = {
    connectedObject: GameObj<RigidBodyComp>
    anchor: V2
    connectedObjectAnchor: V2
    enableCollision?: boolean
    distance?: number
    dampingRatio: number
    frequency: number
}

export interface SpringJointComp extends Comp {
    dampingRatio: number
    distance?: number
    frequency: number
}

export function springJoint(opt: SpringJointOpt): SpringJointComp {
    let joint: DistanceJoint | null
    return {
        id: "distanceJoint",
        require: ["rigidBody"],
        add() {
            joint = world.createJoint(new DistanceJoint({
                collideConnected: opt.enableCollision ?? true,
                bodyA: this.body,
                bodyB: opt.connectedObject.body,
                localAnchorA: k2p(opt.anchor),
                localAnchorB: k2p(opt.connectedObjectAnchor),
                dampingRatio: opt.dampingRatio,
                frequencyHz: opt.frequency
            }))
            if (joint && opt.distance) {
                joint.setLength(opt.distance / 10)
            }
        },
        destroy() {
            if (joint) {
                world.destroyJoint(joint)
            }
        },
        get dampingRatio() {
            return joint ? joint.getDampingRatio() : 0
        },
        set dampingRatio(d: number) {
            if (joint) { joint.setDampingRatio(d) }
        },
        get distance() {
            return joint ? joint.getLength() * 10 : 0
        },
        set distance(d: number) {
            if (joint) { joint.setLength(d / 10) }
        },
        get frequency() {
            return joint ? joint.getFrequency() : 0
        },
        set frequency(f: number) {
            if (joint) { joint.setFrequency(f) }
        },
    }
}

export type TargetJointOpt = {
    anchor?: V2
    enableCollision?: boolean
    dampingRatio: number
    frequency: number,
    maxForce?: number
}

export interface TargetJointComp extends Comp {
    dampingRatio: number
    frequency: number
    target: V2
}

export function targetJoint(opt: TargetJointOpt): TargetJointComp {
    let joint: MouseJoint | null
    let ground
    return {
        id: "targetJoint",
        require: ["rigidBody"],
        add() {
            ground = world.createBody();
            joint = world.createJoint(new MouseJoint({
                collideConnected: opt.enableCollision ?? true,
                bodyA: ground,
                bodyB: this.body,
                target: opt.anchor ? Vec2(opt.anchor.x, opt.anchor.y) : this.body.getWorldCenter(),
                dampingRatio: opt.dampingRatio,
                frequencyHz: opt.frequency,
                maxForce: opt.maxForce || 0
            }))
        },
        destroy() {
            if (ground) {
                world.destroyBody(ground);
            }
            if (joint) {
                world.destroyJoint(joint)
            }
        },
        get dampingRatio() {
            return joint ? joint.getDampingRatio() : 0
        },
        set dampingRatio(d: number) {
            if (joint) { joint.setDampingRatio(d) }
        },
        get frequency() {
            return joint ? joint.getFrequency() : 0
        },
        set frequency(f: number) {
            if (joint) { joint.setFrequency(f) }
        },
        get target() {
            return joint ? p2k(joint.getTarget()) : vec2()
        },
        set target(t: V2) {
            if (joint) { joint.setTarget(k2p(t)) }
        },
    }
}