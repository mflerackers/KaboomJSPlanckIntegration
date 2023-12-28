import { Vec2 as V2 } from "kaboom"
import { Box, CircleShape, BoxShape, PolygonShape, ChainShape, Vec2 } from 'planck'

export type ColliderOpt = {
    friction?: number
    bounciness?: number
    isTrigger?: boolean
}

export function collider(opt: ColliderOpt) {
    let fixture
    return {
        id: "collider",
        require: ["rigidBody"],
        add() {
            // TODO: anchor
            if (this.is("sprite") || this.is("rect")) {
                const w = (this.width || 61) / 20
                const h = (this.height || 53) / 20
                fixture = this.body.createFixture({
                    shape: new Box(w, h, Vec2(0, 0)),
                    density: 1,
                    friction: opt.friction || 0,
                    restitution: opt.bounciness || 0,
                    isSensor: opt.isTrigger,
                    
                })
            }
            else {
                fixture = this.body.createFixture({
                    shape: new Box(50 / 2, 4 / 2, Vec2(0, 0)),
                    density: 1,
                    friction: opt.friction || 0,
                    restitution: opt.bounciness || 0,
                    isSensor: opt.isTrigger
                })
            }
        },
        destroy() {
            this.body.destroyFixture(fixture);
        },
        /*draw() {
            let shape = fixture.getShape()
            switch (shape.m_type) {
                case "edge":
                    drawLine({
                        pos: p2k(this.body.m_xf.p),
                        p1: p2k(shape.m_vertex1),
                        p2: p2k(shape.m_vertex2),
                        width: 1,
                        color: rgb(0, 0, 255)
                    })
                    break
                case "chain":
                    drawLines({
                        pos: p2k(this.body.m_xf.p),
                        pts: shape.m_vertices.map(p => p2k(p)),
                        width: 1,
                        color: rgb(0, 0, 255)
                    })
                    break
                case "polygon":
                    drawLines({
                        pos: p2k(this.body.m_xf.p),
                        pts: shape.m_vertices.map(p => p2k(p)),
                        color: rgb(0, 0, 255)
                    })
                    break
                case "circle":
                    drawCircle({
                        pos: p2k(this.body.m_xf.p),
                        radius: shape.m_radius,
                        color: rgb(0, 0, 255)
                    })
                    break
                default:
                    console.log(`Unknown shape ${shape.m_type}`)
                    break
            }
        }*/
    }
}

export type CircleColliderOpt = ColliderOpt & {
    offset?: V2
    radius: number
}

export function circleCollider(opt: CircleColliderOpt) {
    let fixture
    return {
        id: "circleCollider",
        require: ["rigidBody"],
        add() {
            fixture = this.body.createFixture({
                shape: new CircleShape(opt.offset ? k2p(opt.offset) : Vec2(0, 0), opt.radius / 10),
                density: 1,
                friction: opt.friction || 0,
                restitution: opt.bounciness || 0,
                isSensor: opt.isTrigger
            })
        },
        destroy() {
            this.body.destroyFixture(fixture);
        }
    }
}

export type BoxColliderOpt = ColliderOpt & {
    offset?: V2
    size: V2
}

export function boxCollider(opt: BoxColliderOpt) {
    let fixture
    return {
        id: "boxCollider",
        require: ["rigidBody"],
        add() {
            fixture = this.body.createFixture({
                shape: new BoxShape(opt.size.x / 20, opt.size.y / 20, opt.offset ? k2p(opt.offset) : Vec2(0, 0), 0),
                density: 1,
                friction: opt.friction || 0,
                restitution: opt.bounciness || 0,
                isSensor: opt.isTrigger
            })
        },
        destroy() {
            this.body.destroyFixture(fixture);
        }
    }
}

export type PolygonColliderOpt = ColliderOpt & {
    offset?: V2
    points: V2[]
}

export function polygonCollider(opt: PolygonColliderOpt) {
    let fixture
    return {
        id: "polygonCollider",
        require: ["rigidBody"],
        add() {
            fixture = this.body.createFixture({
                shape: new PolygonShape(opt.points.map(p => k2p(p))),
                density: 1,
                friction: opt.friction || 0,
                restitution: opt.bounciness || 0,
                isSensor: opt.isTrigger
            })
        },
        destroy() {
            this.body.destroyFixture(fixture);
        }
    }
}

export type EdgeColliderOpt = ColliderOpt & {
    offset?: V2
    points: V2[]
}

export function edgeCollider(opt: EdgeColliderOpt) {
    let fixture
    return {
        id: "edgeCollider",
        require: ["rigidBody"],
        add() {
            fixture = this.body.createFixture({
                shape: new ChainShape(opt.points.map(p => k2p(p))),
                density: 1,
                friction: opt.friction || 0,
                restitution: opt.bounciness || 0,
                isSensor: opt.isTrigger
            })
        },
        destroy() {
            this.body.destroyFixture(fixture);
        }
    }
}