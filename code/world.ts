import { Vec2 as V2, KaboomCtx } from "kaboom"
import "kaboom/global"
import { World, Vec2, Contact, Manifold, ContactImpulse } from 'planck'

export function p2k(v: Vec2) {
    return vec2(v.x * 10, v.y * 10)
}

export function k2p(v: V2) {
    return Vec2(v.x / 10, v.y / 10)
}

export let world = new World({
    gravity: Vec2(0.0, 2400 / 100),
});

world.on('begin-contact', function(contact) {
    const bodyA = contact.getFixtureA().getBody().getUserData()
    const bodyB = contact.getFixtureB().getBody().getUserData()
    bodyA.trigger("collision_enter", bodyB)
    bodyB.trigger("collision_enter", bodyA)
})

world.on('end-contact', function(contact) {
    const bodyA = contact.getFixtureA().getBody().getUserData()
    const bodyB = contact.getFixtureB().getBody().getUserData()
    bodyA.trigger("collision_exit", bodyB)
    bodyB.trigger("collision_exit", bodyA)
})

export function planckIntegration(k: KaboomCtx) {
    world.on('pre-solve', function(contact, oldManifold) {
        const bodyA = contact.getFixtureA().getBody().getUserData()
        const bodyB = contact.getFixtureB().getBody().getUserData()
        if (bodyA.is("platformEffector") || bodyA.is("surfaceEffector")) {
            bodyA.trigger("collision_pre_solve", bodyB, contact, oldManifold)
        }
        if (bodyB.is("platformEffector") || bodyB.is("surfaceEffector")) {
            bodyB.trigger("collision_pre_solve", bodyA, contact, oldManifold)
        }
    })

    /*world.on('post-solve', function(contact, contactImpulse) {
        
    })*/

    return {}
}
