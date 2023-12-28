import kaboom from "kaboom"
import "kaboom/global"
import { collider, circleCollider } from "./collider"
import { springJoint, targetJoint } from "./joint"
import { pointEffector } from "./effectors"
import { rigidBody } from "./rigid_body"
import { world } from "./world"

// initialize context
kaboom()

onUpdate(() => {
    const timeStep = 1 / 60
    const velocityIterations = 10
    const positionIterations = 8
    world.step(timeStep, velocityIterations, positionIterations)
})

// load assets
loadSprite("bean", "sprites/bean.png")

// add a character to screen
const bean = add([
    sprite("bean"),
    anchor("center"),
    pos(200, 40),
    rotate(0),
    rigidBody({ type: "dynamic", freezeRotation: true }),
    circleCollider({ radius: 25, friction: 0.5 }),
    pointEffector({ forceMagnitude: -1000, forceMode: "inverseLinear", distanceScale: 0.1 }),
])

add([
    rect(300, 40),
    anchor("center"),
    pos(200, 300),
    rotate(0),
    rigidBody({ type: "static" }),
    collider({ friction: 0.5 })
])

add([
    rect(4, 4),
    anchor("center"),
    pos(200, 10),
    rotate(0),
    rigidBody({ type: "static" }),
    collider({ friction: 0.5 }),
    springJoint({
        anchor: vec2(0, 0),
        connectedObject: bean,
        connectedObjectAnchor: vec2(0, -25),
        distance: 100,
        dampingRatio: 0.5,
        frequency: 4
    }),
    {
        draw() {
            drawLine({
                p1: vec2(),
                p2: bean.pos.sub(this.pos),
                width: 4,
                color: rgb(0, 0, 255)
            })
        }
    }
])

loop(1, () => {
    add([
        sprite("bean"),
        anchor("center"),
        pos(rand(0, 400), 40),
        rotate(0),
        rigidBody({ type: "dynamic", freezeRotation: false }),
        circleCollider({ radius: 25, friction: 0.5 }),
        offscreen({ destroy: true })
    ])
})

onKeyPress("space", () => {
    bean.jump(500)
})

onKeyDown("right", () => {
    bean.applyForce(vec2(500, 0))
})

onKeyDown("left", () => {
    bean.applyForce(vec2(-500, 0))
})

onMousePress(() => {
    bean.use(targetJoint({ dampingRatio: 0.5, frequency: 5, maxForce: 10000 }))
    bean.target = mousePos()
})

onMouseMove(() => {
    if (bean.is("targetJoint")) {
        bean.target = mousePos()
    }
})

onMouseRelease(() => {
    bean.unuse("targetJoint")
})

loop(1, () => {
    console.log(center().angle(mousePos()))
})