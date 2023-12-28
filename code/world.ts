import { Vec2 as V2 } from "kaboom"
import { World, Vec2 } from 'planck'

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

world.on('pre-solve', function(contact, oldManifold) {
  /* handle pre-solve event */
})

world.on('post-solve', function(contact, contactImpulse) {
  /* handle post-solve event */
})
