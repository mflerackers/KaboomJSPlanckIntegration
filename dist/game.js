(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __pow = Math.pow;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a2, b2) => {
    for (var prop in b2 || (b2 = {}))
      if (__hasOwnProp.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b2)) {
        if (__propIsEnum.call(b2, prop))
          __defNormalProp(a2, prop, b2[prop]);
      }
    return a2;
  };
  var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e3) {
          reject(e3);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e3) {
          reject(e3);
        }
      };
      var step = (x3) => x3.done ? resolve(x3.value) : Promise.resolve(x3.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/kaboom/dist/kaboom.mjs
  var wi = Object.defineProperty;
  var o = /* @__PURE__ */ __name((r, t) => wi(r, "name", { value: t, configurable: true }), "o");
  var ps = (() => {
    for (var r = new Uint8Array(128), t = 0; t < 64; t++)
      r[t < 26 ? t + 65 : t < 52 ? t + 71 : t < 62 ? t - 4 : t * 4 - 205] = t;
    return (u) => {
      for (var p = u.length, E = new Uint8Array((p - (u[p - 1] == "=") - (u[p - 2] == "=")) * 3 / 4 | 0), M = 0, L = 0; M < p; ) {
        var q = r[u.charCodeAt(M++)], Y = r[u.charCodeAt(M++)], U = r[u.charCodeAt(M++)], Q2 = r[u.charCodeAt(M++)];
        E[L++] = q << 2 | Y >> 4, E[L++] = Y << 4 | U >> 2, E[L++] = U << 6 | Q2;
      }
      return E;
    };
  })();
  function Ae(r) {
    return r * Math.PI / 180;
  }
  __name(Ae, "Ae");
  o(Ae, "deg2rad");
  function st(r) {
    return r * 180 / Math.PI;
  }
  __name(st, "st");
  o(st, "rad2deg");
  function Ge(r, t, u) {
    return t > u ? Ge(r, u, t) : Math.min(Math.max(r, t), u);
  }
  __name(Ge, "Ge");
  o(Ge, "clamp");
  function Oe(r, t, u) {
    if (typeof r == "number" && typeof t == "number")
      return r + (t - r) * u;
    if (r instanceof x && t instanceof x)
      return r.lerp(t, u);
    if (r instanceof z && t instanceof z)
      return r.lerp(t, u);
    throw new Error(`Bad value for lerp(): ${r}, ${t}. Only number, Vec2 and Color is supported.`);
  }
  __name(Oe, "Oe");
  o(Oe, "lerp");
  function Fe(r, t, u, p, E) {
    return p + (r - t) / (u - t) * (E - p);
  }
  __name(Fe, "Fe");
  o(Fe, "map");
  function ws(r, t, u, p, E) {
    return Ge(Fe(r, t, u, p, E), p, E);
  }
  __name(ws, "ws");
  o(ws, "mapc");
  var _a;
  var x = (/* @__PURE__ */ __name(_a = class {
    constructor(t = 0, u = t) {
      __publicField(this, "x", 0);
      __publicField(this, "y", 0);
      this.x = t, this.y = u;
    }
    static fromAngle(t) {
      let u = Ae(t);
      return new _a(Math.cos(u), Math.sin(u));
    }
    clone() {
      return new _a(this.x, this.y);
    }
    add(...t) {
      let u = S(...t);
      return new _a(this.x + u.x, this.y + u.y);
    }
    sub(...t) {
      let u = S(...t);
      return new _a(this.x - u.x, this.y - u.y);
    }
    scale(...t) {
      let u = S(...t);
      return new _a(this.x * u.x, this.y * u.y);
    }
    dist(...t) {
      let u = S(...t);
      return this.sub(u).len();
    }
    sdist(...t) {
      let u = S(...t);
      return this.sub(u).slen();
    }
    len() {
      return Math.sqrt(this.dot(this));
    }
    slen() {
      return this.dot(this);
    }
    unit() {
      let t = this.len();
      return t === 0 ? new _a(0) : this.scale(1 / t);
    }
    normal() {
      return new _a(this.y, -this.x);
    }
    reflect(t) {
      return this.sub(t.scale(2 * this.dot(t)));
    }
    project(t) {
      return t.scale(t.dot(this) / t.len());
    }
    reject(t) {
      return this.sub(this.project(t));
    }
    dot(t) {
      return this.x * t.x + this.y * t.y;
    }
    cross(t) {
      return this.x * t.y - this.y * t.x;
    }
    angle(...t) {
      let u = S(...t);
      return st(Math.atan2(this.y - u.y, this.x - u.x));
    }
    angleBetween(...t) {
      let u = S(...t);
      return st(Math.atan2(this.cross(u), this.dot(u)));
    }
    lerp(t, u) {
      return new _a(Oe(this.x, t.x, u), Oe(this.y, t.y, u));
    }
    slerp(t, u) {
      let p = this.dot(t), E = this.cross(t), M = Math.atan2(E, p);
      return this.scale(Math.sin((1 - u) * M)).add(t.scale(Math.sin(u * M))).scale(1 / E);
    }
    isZero() {
      return this.x === 0 && this.y === 0;
    }
    toFixed(t) {
      return new _a(Number(this.x.toFixed(t)), Number(this.y.toFixed(t)));
    }
    transform(t) {
      return t.multVec2(this);
    }
    eq(t) {
      return this.x === t.x && this.y === t.y;
    }
    bbox() {
      return new ce(this, 0, 0);
    }
    toString() {
      return `vec2(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
    }
  }, "r"), (() => {
    o(_a, "Vec2");
  })(), __publicField(_a, "LEFT", new _a(-1, 0)), __publicField(_a, "RIGHT", new _a(1, 0)), __publicField(_a, "UP", new _a(0, -1)), __publicField(_a, "DOWN", new _a(0, 1)), _a);
  function S(...r) {
    if (r.length === 1) {
      if (r[0] instanceof x)
        return new x(r[0].x, r[0].y);
      if (Array.isArray(r[0]) && r[0].length === 2)
        return new x(...r[0]);
    }
    return new x(...r);
  }
  __name(S, "S");
  o(S, "vec2");
  var _a2;
  var z = (/* @__PURE__ */ __name(_a2 = class {
    constructor(t, u, p) {
      __publicField(this, "r", 255);
      __publicField(this, "g", 255);
      __publicField(this, "b", 255);
      this.r = Ge(t, 0, 255), this.g = Ge(u, 0, 255), this.b = Ge(p, 0, 255);
    }
    static fromArray(t) {
      return new _a2(t[0], t[1], t[2]);
    }
    static fromHex(t) {
      if (typeof t == "number")
        return new _a2(t >> 16 & 255, t >> 8 & 255, t >> 0 & 255);
      if (typeof t == "string") {
        let u = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
        return new _a2(parseInt(u[1], 16), parseInt(u[2], 16), parseInt(u[3], 16));
      } else
        throw new Error("Invalid hex color format");
    }
    static fromHSL(t, u, p) {
      if (u == 0)
        return new _a2(255 * p, 255 * p, 255 * p);
      let E = o((Q2, h, Z) => (Z < 0 && (Z += 1), Z > 1 && (Z -= 1), Z < 1 / 6 ? Q2 + (h - Q2) * 6 * Z : Z < 1 / 2 ? h : Z < 2 / 3 ? Q2 + (h - Q2) * (2 / 3 - Z) * 6 : Q2), "hue2rgb"), M = p < 0.5 ? p * (1 + u) : p + u - p * u, L = 2 * p - M, q = E(L, M, t + 1 / 3), Y = E(L, M, t), U = E(L, M, t - 1 / 3);
      return new _a2(Math.round(q * 255), Math.round(Y * 255), Math.round(U * 255));
    }
    clone() {
      return new _a2(this.r, this.g, this.b);
    }
    lighten(t) {
      return new _a2(this.r + t, this.g + t, this.b + t);
    }
    darken(t) {
      return this.lighten(-t);
    }
    invert() {
      return new _a2(255 - this.r, 255 - this.g, 255 - this.b);
    }
    mult(t) {
      return new _a2(this.r * t.r / 255, this.g * t.g / 255, this.b * t.b / 255);
    }
    lerp(t, u) {
      return new _a2(Oe(this.r, t.r, u), Oe(this.g, t.g, u), Oe(this.b, t.b, u));
    }
    toHSL() {
      let t = this.r / 255, u = this.g / 255, p = this.b / 255, E = Math.max(t, u, p), M = Math.min(t, u, p), L = (E + M) / 2, q = L, Y = L;
      if (E == M)
        L = q = 0;
      else {
        let U = E - M;
        switch (q = Y > 0.5 ? U / (2 - E - M) : U / (E + M), E) {
          case t:
            L = (u - p) / U + (u < p ? 6 : 0);
            break;
          case u:
            L = (p - t) / U + 2;
            break;
          case p:
            L = (t - u) / U + 4;
            break;
        }
        L /= 6;
      }
      return [L, q, Y];
    }
    eq(t) {
      return this.r === t.r && this.g === t.g && this.b === t.b;
    }
    toString() {
      return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
    toHex() {
      return "#" + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
    }
  }, "r"), (() => {
    o(_a2, "Color");
  })(), __publicField(_a2, "RED", new _a2(255, 0, 0)), __publicField(_a2, "GREEN", new _a2(0, 255, 0)), __publicField(_a2, "BLUE", new _a2(0, 0, 255)), __publicField(_a2, "YELLOW", new _a2(255, 255, 0)), __publicField(_a2, "MAGENTA", new _a2(255, 0, 255)), __publicField(_a2, "CYAN", new _a2(0, 255, 255)), __publicField(_a2, "WHITE", new _a2(255, 255, 255)), __publicField(_a2, "BLACK", new _a2(0, 0, 0)), _a2);
  function J(...r) {
    if (r.length === 0)
      return new z(255, 255, 255);
    if (r.length === 1) {
      if (r[0] instanceof z)
        return r[0].clone();
      if (typeof r[0] == "string")
        return z.fromHex(r[0]);
      if (Array.isArray(r[0]) && r[0].length === 3)
        return z.fromArray(r[0]);
    }
    return new z(...r);
  }
  __name(J, "J");
  o(J, "rgb");
  var bs = o((r, t, u) => z.fromHSL(r, t, u), "hsl2rgb");
  var _a3;
  var re = (/* @__PURE__ */ __name(_a3 = class {
    constructor(t, u, p, E) {
      __publicField(this, "x", 0);
      __publicField(this, "y", 0);
      __publicField(this, "w", 1);
      __publicField(this, "h", 1);
      this.x = t, this.y = u, this.w = p, this.h = E;
    }
    scale(t) {
      return new _a3(this.x + this.w * t.x, this.y + this.h * t.y, this.w * t.w, this.h * t.h);
    }
    pos() {
      return new x(this.x, this.y);
    }
    clone() {
      return new _a3(this.x, this.y, this.w, this.h);
    }
    eq(t) {
      return this.x === t.x && this.y === t.y && this.w === t.w && this.h === t.h;
    }
    toString() {
      return `quad(${this.x}, ${this.y}, ${this.w}, ${this.h})`;
    }
  }, "r"), (() => {
    o(_a3, "Quad");
  })(), _a3);
  function ie(r, t, u, p) {
    return new re(r, t, u, p);
  }
  __name(ie, "ie");
  o(ie, "quad");
  var _a4;
  var Ue = (/* @__PURE__ */ __name(_a4 = class {
    constructor(t) {
      __publicField(this, "m", [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
      t && (this.m = t);
    }
    static translate(t) {
      return new _a4([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t.x, t.y, 0, 1]);
    }
    static scale(t) {
      return new _a4([t.x, 0, 0, 0, 0, t.y, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    static rotateX(t) {
      t = Ae(-t);
      let u = Math.cos(t), p = Math.sin(t);
      return new _a4([1, 0, 0, 0, 0, u, -p, 0, 0, p, u, 0, 0, 0, 0, 1]);
    }
    static rotateY(t) {
      t = Ae(-t);
      let u = Math.cos(t), p = Math.sin(t);
      return new _a4([u, 0, p, 0, 0, 1, 0, 0, -p, 0, u, 0, 0, 0, 0, 1]);
    }
    static rotateZ(t) {
      t = Ae(-t);
      let u = Math.cos(t), p = Math.sin(t);
      return new _a4([u, -p, 0, 0, p, u, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    translate(t) {
      return this.m[12] += this.m[0] * t.x + this.m[4] * t.y, this.m[13] += this.m[1] * t.x + this.m[5] * t.y, this.m[14] += this.m[2] * t.x + this.m[6] * t.y, this.m[15] += this.m[3] * t.x + this.m[7] * t.y, this;
    }
    scale(t) {
      return this.m[0] *= t.x, this.m[4] *= t.y, this.m[1] *= t.x, this.m[5] *= t.y, this.m[2] *= t.x, this.m[6] *= t.y, this.m[3] *= t.x, this.m[7] *= t.y, this;
    }
    rotate(t) {
      t = Ae(-t);
      let u = Math.cos(t), p = Math.sin(t), E = this.m[0], M = this.m[1], L = this.m[4], q = this.m[5];
      return this.m[0] = E * u + M * p, this.m[1] = -E * p + M * u, this.m[4] = L * u + q * p, this.m[5] = -L * p + q * u, this;
    }
    mult(t) {
      let u = [];
      for (let p = 0; p < 4; p++)
        for (let E = 0; E < 4; E++)
          u[p * 4 + E] = this.m[0 * 4 + E] * t.m[p * 4 + 0] + this.m[1 * 4 + E] * t.m[p * 4 + 1] + this.m[2 * 4 + E] * t.m[p * 4 + 2] + this.m[3 * 4 + E] * t.m[p * 4 + 3];
      return new _a4(u);
    }
    multVec2(t) {
      return new x(t.x * this.m[0] + t.y * this.m[4] + this.m[12], t.x * this.m[1] + t.y * this.m[5] + this.m[13]);
    }
    getTranslation() {
      return new x(this.m[12], this.m[13]);
    }
    getScale() {
      if (this.m[0] != 0 || this.m[1] != 0) {
        let t = this.m[0] * this.m[5] - this.m[1] * this.m[4], u = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
        return new x(u, t / u);
      } else if (this.m[4] != 0 || this.m[5] != 0) {
        let t = this.m[0] * this.m[5] - this.m[1] * this.m[4], u = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
        return new x(t / u, u);
      } else
        return new x(0, 0);
    }
    getRotation() {
      if (this.m[0] != 0 || this.m[1] != 0) {
        let t = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
        return st(this.m[1] > 0 ? Math.acos(this.m[0] / t) : -Math.acos(this.m[0] / t));
      } else if (this.m[4] != 0 || this.m[5] != 0) {
        let t = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
        return st(Math.PI / 2 - (this.m[5] > 0 ? Math.acos(-this.m[4] / t) : -Math.acos(this.m[4] / t)));
      } else
        return 0;
    }
    getSkew() {
      if (this.m[0] != 0 || this.m[1] != 0) {
        let t = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
        return new x(Math.atan(this.m[0] * this.m[4] + this.m[1] * this.m[5]) / (t * t), 0);
      } else if (this.m[4] != 0 || this.m[5] != 0) {
        let t = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
        return new x(0, Math.atan(this.m[0] * this.m[4] + this.m[1] * this.m[5]) / (t * t));
      } else
        return new x(0, 0);
    }
    invert() {
      let t = [], u = this.m[10] * this.m[15] - this.m[14] * this.m[11], p = this.m[9] * this.m[15] - this.m[13] * this.m[11], E = this.m[9] * this.m[14] - this.m[13] * this.m[10], M = this.m[8] * this.m[15] - this.m[12] * this.m[11], L = this.m[8] * this.m[14] - this.m[12] * this.m[10], q = this.m[8] * this.m[13] - this.m[12] * this.m[9], Y = this.m[6] * this.m[15] - this.m[14] * this.m[7], U = this.m[5] * this.m[15] - this.m[13] * this.m[7], Q2 = this.m[5] * this.m[14] - this.m[13] * this.m[6], h = this.m[4] * this.m[15] - this.m[12] * this.m[7], Z = this.m[4] * this.m[14] - this.m[12] * this.m[6], Pe = this.m[5] * this.m[15] - this.m[13] * this.m[7], ae = this.m[4] * this.m[13] - this.m[12] * this.m[5], de = this.m[6] * this.m[11] - this.m[10] * this.m[7], pe = this.m[5] * this.m[11] - this.m[9] * this.m[7], G = this.m[5] * this.m[10] - this.m[9] * this.m[6], Xe = this.m[4] * this.m[11] - this.m[8] * this.m[7], Ie = this.m[4] * this.m[10] - this.m[8] * this.m[6], b2 = this.m[4] * this.m[9] - this.m[8] * this.m[5];
      t[0] = this.m[5] * u - this.m[6] * p + this.m[7] * E, t[4] = -(this.m[4] * u - this.m[6] * M + this.m[7] * L), t[8] = this.m[4] * p - this.m[5] * M + this.m[7] * q, t[12] = -(this.m[4] * E - this.m[5] * L + this.m[6] * q), t[1] = -(this.m[1] * u - this.m[2] * p + this.m[3] * E), t[5] = this.m[0] * u - this.m[2] * M + this.m[3] * L, t[9] = -(this.m[0] * p - this.m[1] * M + this.m[3] * q), t[13] = this.m[0] * E - this.m[1] * L + this.m[2] * q, t[2] = this.m[1] * Y - this.m[2] * U + this.m[3] * Q2, t[6] = -(this.m[0] * Y - this.m[2] * h + this.m[3] * Z), t[10] = this.m[0] * Pe - this.m[1] * h + this.m[3] * ae, t[14] = -(this.m[0] * Q2 - this.m[1] * Z + this.m[2] * ae), t[3] = -(this.m[1] * de - this.m[2] * pe + this.m[3] * G), t[7] = this.m[0] * de - this.m[2] * Xe + this.m[3] * Ie, t[11] = -(this.m[0] * pe - this.m[1] * Xe + this.m[3] * b2), t[15] = this.m[0] * G - this.m[1] * Ie + this.m[2] * b2;
      let ue = this.m[0] * t[0] + this.m[1] * t[4] + this.m[2] * t[8] + this.m[3] * t[12];
      for (let ge = 0; ge < 4; ge++)
        for (let ee = 0; ee < 4; ee++)
          t[ge * 4 + ee] *= 1 / ue;
      return new _a4(t);
    }
    clone() {
      return new _a4([...this.m]);
    }
    toString() {
      return this.m.toString();
    }
  }, "r"), (() => {
    o(_a4, "Mat4");
  })(), _a4);
  function Rn(r, t, u, p = (E) => -Math.cos(E)) {
    return r + (p(u) + 1) / 2 * (t - r);
  }
  __name(Rn, "Rn");
  o(Rn, "wave");
  var bi = 1103515245;
  var vi = 12345;
  var gs = 2147483648;
  var _a5;
  var wt = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a5 = class {
    constructor(t) {
      __publicField(this, "seed");
      this.seed = t;
    }
    gen() {
      return this.seed = (bi * this.seed + vi) % gs, this.seed / gs;
    }
    genNumber(t, u) {
      return t + this.gen() * (u - t);
    }
    genVec2(t, u) {
      return new x(this.genNumber(t.x, u.x), this.genNumber(t.y, u.y));
    }
    genColor(t, u) {
      return new z(this.genNumber(t.r, u.r), this.genNumber(t.g, u.g), this.genNumber(t.b, u.b));
    }
    genAny(...t) {
      if (t.length === 0)
        return this.gen();
      if (t.length === 1) {
        if (typeof t[0] == "number")
          return this.genNumber(0, t[0]);
        if (t[0] instanceof x)
          return this.genVec2(S(0, 0), t[0]);
        if (t[0] instanceof z)
          return this.genColor(J(0, 0, 0), t[0]);
      } else if (t.length === 2) {
        if (typeof t[0] == "number" && typeof t[1] == "number")
          return this.genNumber(t[0], t[1]);
        if (t[0] instanceof x && t[1] instanceof x)
          return this.genVec2(t[0], t[1]);
        if (t[0] instanceof z && t[1] instanceof z)
          return this.genColor(t[0], t[1]);
      }
    }
  }, "_this"), (() => {
    o(_a5, "RNG");
  })(), _a5), "wt");
  var Pn = new wt(Date.now());
  function vs(r) {
    return r != null && (Pn.seed = r), Pn.seed;
  }
  __name(vs, "vs");
  o(vs, "randSeed");
  function yt(...r) {
    return Pn.genAny(...r);
  }
  __name(yt, "yt");
  o(yt, "rand");
  function Dn(...r) {
    return Math.floor(yt(...r));
  }
  __name(Dn, "Dn");
  o(Dn, "randi");
  function ys(r) {
    return yt() <= r;
  }
  __name(ys, "ys");
  o(ys, "chance");
  function xs(r) {
    return r[Dn(r.length)];
  }
  __name(xs, "xs");
  o(xs, "choose");
  function Us(r, t) {
    return r.pos.x + r.width > t.pos.x && r.pos.x < t.pos.x + t.width && r.pos.y + r.height > t.pos.y && r.pos.y < t.pos.y + t.height;
  }
  __name(Us, "Us");
  o(Us, "testRectRect");
  function yi(r, t) {
    if (r.p1.x === r.p2.x && r.p1.y === r.p2.y || t.p1.x === t.p2.x && t.p1.y === t.p2.y)
      return null;
    let u = (t.p2.y - t.p1.y) * (r.p2.x - r.p1.x) - (t.p2.x - t.p1.x) * (r.p2.y - r.p1.y);
    if (u === 0)
      return null;
    let p = ((t.p2.x - t.p1.x) * (r.p1.y - t.p1.y) - (t.p2.y - t.p1.y) * (r.p1.x - t.p1.x)) / u, E = ((r.p2.x - r.p1.x) * (r.p1.y - t.p1.y) - (r.p2.y - r.p1.y) * (r.p1.x - t.p1.x)) / u;
    return p < 0 || p > 1 || E < 0 || E > 1 ? null : p;
  }
  __name(yi, "yi");
  o(yi, "testLineLineT");
  function nt(r, t) {
    let u = yi(r, t);
    return u ? S(r.p1.x + u * (r.p2.x - r.p1.x), r.p1.y + u * (r.p2.y - r.p1.y)) : null;
  }
  __name(nt, "nt");
  o(nt, "testLineLine");
  function Es(r, t) {
    if (bt(r, t.p1) || bt(r, t.p2))
      return true;
    let u = r.points();
    return !!nt(t, new De(u[0], u[1])) || !!nt(t, new De(u[1], u[2])) || !!nt(t, new De(u[2], u[3])) || !!nt(t, new De(u[3], u[0]));
  }
  __name(Es, "Es");
  o(Es, "testRectLine");
  function bt(r, t) {
    return t.x > r.pos.x && t.x < r.pos.x + r.width && t.y > r.pos.y && t.y < r.pos.y + r.height;
  }
  __name(bt, "bt");
  o(bt, "testRectPoint");
  function Cs(r, t) {
    let u = t.sub(r.p1), p = r.p2.sub(r.p1);
    if (Math.abs(u.cross(p)) > Number.EPSILON)
      return false;
    let E = u.dot(p) / p.dot(p);
    return E >= 0 && E <= 1;
  }
  __name(Cs, "Cs");
  o(Cs, "testLinePoint");
  function Gn(r, t) {
    let u = r.p2.sub(r.p1), p = u.dot(u), E = r.p1.sub(t.center), M = 2 * u.dot(E), L = E.dot(E) - t.radius * t.radius, q = M * M - 4 * p * L;
    if (p <= Number.EPSILON || q < 0)
      return false;
    if (q == 0) {
      let Y = -M / (2 * p);
      if (Y >= 0 && Y <= 1)
        return true;
    } else {
      let Y = (-M + Math.sqrt(q)) / (2 * p), U = (-M - Math.sqrt(q)) / (2 * p);
      if (Y >= 0 && Y <= 1 || U >= 0 && U <= 1)
        return true;
    }
    return Ss(t, r.p1);
  }
  __name(Gn, "Gn");
  o(Gn, "testLineCircle");
  function Ss(r, t) {
    return r.center.sdist(t) < r.radius * r.radius;
  }
  __name(Ss, "Ss");
  o(Ss, "testCirclePoint");
  function Ts(r, t) {
    let u = t.pts[t.pts.length - 1];
    for (let p of t.pts) {
      if (Gn(new De(u, p), r))
        return true;
      u = p;
    }
    return Ss(r, t.pts[0]) ? true : Fn(t, r.center);
  }
  __name(Ts, "Ts");
  o(Ts, "testCirclePolygon");
  function Fn(r, t) {
    let u = false, p = r.pts;
    for (let E = 0, M = p.length - 1; E < p.length; M = E++)
      p[E].y > t.y != p[M].y > t.y && t.x < (p[M].x - p[E].x) * (t.y - p[E].y) / (p[M].y - p[E].y) + p[E].x && (u = !u);
    return u;
  }
  __name(Fn, "Fn");
  o(Fn, "testPolygonPoint");
  var _a6;
  var De = (/* @__PURE__ */ __name(_a6 = class {
    constructor(t, u) {
      __publicField(this, "p1");
      __publicField(this, "p2");
      this.p1 = t.clone(), this.p2 = u.clone();
    }
    transform(t) {
      return new _a6(t.multVec2(this.p1), t.multVec2(this.p2));
    }
    bbox() {
      return ce.fromPoints(this.p1, this.p2);
    }
    area() {
      return this.p1.dist(this.p2);
    }
    clone() {
      return new _a6(this.p1, this.p2);
    }
  }, "r"), (() => {
    o(_a6, "Line");
  })(), _a6);
  var _a7;
  var ce = (/* @__PURE__ */ __name(_a7 = class {
    constructor(t, u, p) {
      __publicField(this, "pos");
      __publicField(this, "width");
      __publicField(this, "height");
      this.pos = t.clone(), this.width = u, this.height = p;
    }
    static fromPoints(t, u) {
      return new _a7(t.clone(), u.x - t.x, u.y - t.y);
    }
    center() {
      return new x(this.pos.x + this.width / 2, this.pos.y + this.height / 2);
    }
    points() {
      return [this.pos, this.pos.add(this.width, 0), this.pos.add(this.width, this.height), this.pos.add(0, this.height)];
    }
    transform(t) {
      return new Ye(this.points().map((u) => t.multVec2(u)));
    }
    bbox() {
      return this.clone();
    }
    area() {
      return this.width * this.height;
    }
    clone() {
      return new _a7(this.pos.clone(), this.width, this.height);
    }
    distToPoint(t) {
      return Math.sqrt(this.sdistToPoint(t));
    }
    sdistToPoint(t) {
      let u = this.pos, p = this.pos.add(this.width, this.height), E = Math.max(u.x - t.x, 0, t.x - p.x), M = Math.max(u.y - t.y, 0, t.y - p.y);
      return E * E + M * M;
    }
  }, "r"), (() => {
    o(_a7, "Rect");
  })(), _a7);
  var _a8;
  var vt = (/* @__PURE__ */ __name(_a8 = class {
    constructor(t, u) {
      __publicField(this, "center");
      __publicField(this, "radius");
      this.center = t.clone(), this.radius = u;
    }
    transform(t) {
      return new Mn(this.center, this.radius, this.radius).transform(t);
    }
    bbox() {
      return ce.fromPoints(this.center.sub(S(this.radius)), this.center.add(S(this.radius)));
    }
    area() {
      return this.radius * this.radius * Math.PI;
    }
    clone() {
      return new _a8(this.center, this.radius);
    }
  }, "r"), (() => {
    o(_a8, "Circle");
  })(), _a8);
  var _a9;
  var Mn = (/* @__PURE__ */ __name(_a9 = class {
    constructor(t, u, p) {
      __publicField(this, "center");
      __publicField(this, "radiusX");
      __publicField(this, "radiusY");
      this.center = t.clone(), this.radiusX = u, this.radiusY = p;
    }
    transform(t) {
      return new _a9(t.multVec2(this.center), t.m[0] * this.radiusX, t.m[5] * this.radiusY);
    }
    bbox() {
      return ce.fromPoints(this.center.sub(S(this.radiusX, this.radiusY)), this.center.add(S(this.radiusX, this.radiusY)));
    }
    area() {
      return this.radiusX * this.radiusY * Math.PI;
    }
    clone() {
      return new _a9(this.center, this.radiusX, this.radiusY);
    }
  }, "r"), (() => {
    o(_a9, "Ellipse");
  })(), _a9);
  var _a10;
  var Ye = (/* @__PURE__ */ __name(_a10 = class {
    constructor(t) {
      __publicField(this, "pts");
      if (t.length < 3)
        throw new Error("Polygons should have at least 3 vertices");
      this.pts = t;
    }
    transform(t) {
      return new _a10(this.pts.map((u) => t.multVec2(u)));
    }
    bbox() {
      let t = S(Number.MAX_VALUE), u = S(-Number.MAX_VALUE);
      for (let p of this.pts)
        t.x = Math.min(t.x, p.x), u.x = Math.max(u.x, p.x), t.y = Math.min(t.y, p.y), u.y = Math.max(u.y, p.y);
      return ce.fromPoints(t, u);
    }
    area() {
      let t = 0, u = this.pts.length;
      for (let p = 0; p < u; p++) {
        let E = this.pts[p], M = this.pts[(p + 1) % u];
        t += E.x * M.y * 0.5, t -= M.x * E.y * 0.5;
      }
      return Math.abs(t);
    }
    clone() {
      return new _a10(this.pts.map((t) => t.clone()));
    }
  }, "r"), (() => {
    o(_a10, "Polygon");
  })(), _a10);
  function As(r, t) {
    let u = Number.MAX_VALUE, p = S(0);
    for (let E of [r, t])
      for (let M = 0; M < E.pts.length; M++) {
        let L = E.pts[M], Y = E.pts[(M + 1) % E.pts.length].sub(L).normal().unit(), U = Number.MAX_VALUE, Q2 = -Number.MAX_VALUE;
        for (let ae = 0; ae < r.pts.length; ae++) {
          let de = r.pts[ae].dot(Y);
          U = Math.min(U, de), Q2 = Math.max(Q2, de);
        }
        let h = Number.MAX_VALUE, Z = -Number.MAX_VALUE;
        for (let ae = 0; ae < t.pts.length; ae++) {
          let de = t.pts[ae].dot(Y);
          h = Math.min(h, de), Z = Math.max(Z, de);
        }
        let Pe = Math.min(Q2, Z) - Math.max(U, h);
        if (Pe < 0)
          return null;
        if (Pe < Math.abs(u)) {
          let ae = Z - U, de = h - Q2;
          u = Math.abs(ae) < Math.abs(de) ? ae : de, p = Y.scale(u);
        }
      }
    return p;
  }
  __name(As, "As");
  o(As, "sat");
  var _a11;
  var xt = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a11 = class extends Map {
    constructor(...t) {
      super(...t);
      __publicField(this, "lastID");
      this.lastID = 0;
    }
    push(t) {
      let u = this.lastID;
      return this.set(u, t), this.lastID++, u;
    }
    pushd(t) {
      let u = this.push(t);
      return () => this.delete(u);
    }
  }, "_this"), (() => {
    o(_a11, "IDList");
  })(), _a11), "xt");
  var _a12;
  var Be = (/* @__PURE__ */ __name(_a12 = class {
    constructor(t) {
      __publicField(this, "paused", false);
      __publicField(this, "cancel");
      this.cancel = t;
    }
    static join(t) {
      let u = new _a12(() => t.forEach((p) => p.cancel()));
      return Object.defineProperty(u, "paused", { get: () => t[0].paused, set: (p) => t.forEach((E) => E.paused = p) }), u.paused = false, u;
    }
  }, "r"), (() => {
    o(_a12, "EventController");
  })(), _a12);
  var _a13;
  var ye = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a13 = class {
    constructor() {
      __publicField(this, "handlers", new xt());
    }
    add(t) {
      let u = this.handlers.pushd((...E) => {
        p.paused || t(...E);
      }), p = new Be(u);
      return p;
    }
    addOnce(t) {
      let u = this.add((...p) => {
        u.cancel(), t(...p);
      });
      return u;
    }
    next() {
      return new Promise((t) => this.addOnce(t));
    }
    trigger(...t) {
      this.handlers.forEach((u) => u(...t));
    }
    numListeners() {
      return this.handlers.size;
    }
    clear() {
      this.handlers.clear();
    }
  }, "_this"), (() => {
    o(_a13, "Event");
  })(), _a13), "ye");
  var _a14;
  var Le = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a14 = class {
    constructor() {
      __publicField(this, "handlers", {});
    }
    on(t, u) {
      return this.handlers[t] || (this.handlers[t] = new ye()), this.handlers[t].add(u);
    }
    onOnce(t, u) {
      let p = this.on(t, (...E) => {
        p.cancel(), u(...E);
      });
      return p;
    }
    next(t) {
      return new Promise((u) => {
        this.onOnce(t, (...p) => u(p[0]));
      });
    }
    trigger(t, ...u) {
      this.handlers[t] && this.handlers[t].trigger(...u);
    }
    remove(t) {
      delete this.handlers[t];
    }
    clear() {
      this.handlers = {};
    }
    numListeners(t) {
      var _a20, _b;
      return (_b = (_a20 = this.handlers[t]) == null ? void 0 : _a20.numListeners()) != null ? _b : 0;
    }
  }, "_this"), (() => {
    o(_a14, "EventHandler");
  })(), _a14), "Le");
  function Bn(r, t) {
    let u = typeof r, p = typeof t;
    if (u !== p)
      return false;
    if (u === "object" && p === "object" && r !== null && t !== null) {
      let E = Object.keys(r), M = Object.keys(t);
      if (E.length !== M.length)
        return false;
      for (let L of E) {
        let q = r[L], Y = t[L];
        if (!(typeof q == "function" && typeof Y == "function") && !Bn(q, Y))
          return false;
      }
      return true;
    }
    return r === t;
  }
  __name(Bn, "Bn");
  o(Bn, "deepEq");
  function xi(r) {
    let t = window.atob(r), u = t.length, p = new Uint8Array(u);
    for (let E = 0; E < u; E++)
      p[E] = t.charCodeAt(E);
    return p.buffer;
  }
  __name(xi, "xi");
  o(xi, "base64ToArrayBuffer");
  function Os(r) {
    return xi(r.split(",")[1]);
  }
  __name(Os, "Os");
  o(Os, "dataURLToArrayBuffer");
  function Kt(r, t) {
    let u = document.createElement("a");
    u.href = t, u.download = r, u.click();
  }
  __name(Kt, "Kt");
  o(Kt, "download");
  function Ln(r, t) {
    Kt(r, "data:text/plain;charset=utf-8," + t);
  }
  __name(Ln, "Ln");
  o(Ln, "downloadText");
  function Ps(r, t) {
    Ln(r, JSON.stringify(t));
  }
  __name(Ps, "Ps");
  o(Ps, "downloadJSON");
  function In(r, t) {
    let u = URL.createObjectURL(t);
    Kt(r, u), URL.revokeObjectURL(u);
  }
  __name(In, "In");
  o(In, "downloadBlob");
  var Vn = o((r) => r.match(/^data:\w+\/\w+;base64,.+/), "isDataURL");
  var Ms = o((r) => r.split(".").pop(), "getExt");
  var Rs = (() => {
    let r = 0;
    return () => r++;
  })();
  var _a15;
  var $t = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a15 = class {
    constructor(t = (u, p) => u < p) {
      __publicField(this, "_items");
      __publicField(this, "_compareFn");
      this._compareFn = t, this._items = [];
    }
    insert(t) {
      this._items.push(t), this.moveUp(this._items.length - 1);
    }
    remove() {
      if (this._items.length === 0)
        return null;
      let t = this._items[0], u = this._items.pop();
      return this._items.length !== 0 && (this._items[0] = u, this.moveDown(0)), t;
    }
    clear() {
      this._items.splice(0, this._items.length);
    }
    moveUp(t) {
      for (; t > 0; ) {
        let u = Math.floor((t - 1) / 2);
        if (!this._compareFn(this._items[t], this._items[u]) && this._items[t] >= this._items[u])
          break;
        this.swap(t, u), t = u;
      }
    }
    moveDown(t) {
      for (; t < Math.floor(this._items.length / 2); ) {
        let u = 2 * t + 1;
        if (u < this._items.length - 1 && !this._compareFn(this._items[u], this._items[u + 1]) && ++u, this._compareFn(this._items[t], this._items[u]))
          break;
        this.swap(t, u), t = u;
      }
    }
    swap(t, u) {
      [this._items[t], this._items[u]] = [this._items[u], this._items[t]];
    }
    get length() {
      return this._items.length;
    }
  }, "_this"), (() => {
    o(_a15, "BinaryHeap");
  })(), _a15), "$t");
  var kn = { "Joy-Con L+R (STANDARD GAMEPAD Vendor: 057e Product: 200e)": { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "6": "ltrigger", "7": "rtrigger", "8": "select", "9": "start", "10": "lstick", "11": "rstick", "12": "dpad-up", "13": "dpad-down", "14": "dpad-left", "15": "dpad-right", "16": "home", "17": "capture" }, sticks: { left: { x: 0, y: 1 }, right: { x: 2, y: 3 } } }, "Joy-Con (L) (STANDARD GAMEPAD Vendor: 057e Product: 2006)": { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "9": "select", "10": "lstick", "16": "start" }, sticks: { left: { x: 0, y: 1 } } }, "Joy-Con (R) (STANDARD GAMEPAD Vendor: 057e Product: 2007)": { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "9": "start", "10": "lstick", "16": "select" }, sticks: { left: { x: 0, y: 1 } } }, "Pro Controller (STANDARD GAMEPAD Vendor: 057e Product: 2009)": { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "6": "ltrigger", "7": "rtrigger", "8": "select", "9": "start", "10": "lstick", "11": "rstick", "12": "dpad-up", "13": "dpad-down", "14": "dpad-left", "15": "dpad-right", "16": "home", "17": "capture" }, sticks: { left: { x: 0, y: 1 }, right: { x: 2, y: 3 } } }, default: { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "6": "ltrigger", "7": "rtrigger", "8": "select", "9": "start", "10": "lstick", "11": "rstick", "12": "dpad-up", "13": "dpad-down", "14": "dpad-left", "15": "dpad-right", "16": "home" }, sticks: { left: { x: 0, y: 1 }, right: { x: 2, y: 3 } } } };
  var _a16;
  var rt = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a16 = class {
    constructor() {
      __publicField(this, "pressed", /* @__PURE__ */ new Set([]));
      __publicField(this, "pressedRepeat", /* @__PURE__ */ new Set([]));
      __publicField(this, "released", /* @__PURE__ */ new Set([]));
      __publicField(this, "down", /* @__PURE__ */ new Set([]));
    }
    update() {
      this.pressed.clear(), this.released.clear(), this.pressedRepeat.clear();
    }
    press(t) {
      this.pressed.add(t), this.pressedRepeat.add(t), this.down.add(t);
    }
    pressRepeat(t) {
      this.pressedRepeat.add(t);
    }
    release(t) {
      this.down.delete(t), this.pressed.delete(t), this.released.add(t);
    }
  }, "_this"), (() => {
    o(_a16, "ButtonState");
  })(), _a16), "rt");
  var _a17;
  var jn = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a17 = class {
    constructor() {
      __publicField(this, "buttonState", new rt());
      __publicField(this, "stickState", /* @__PURE__ */ new Map());
    }
  }, "_this"), (() => {
    o(_a17, "GamepadState");
  })(), _a17), "jn");
  var _a18;
  var Nn = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a18 = class {
    constructor() {
      __publicField(this, "dts", []);
      __publicField(this, "timer", 0);
      __publicField(this, "fps", 0);
    }
    tick(t) {
      this.dts.push(t), this.timer += t, this.timer >= 1 && (this.timer = 0, this.fps = Math.round(1 / (this.dts.reduce((u, p) => u + p) / this.dts.length)), this.dts = []);
    }
  }, "_this"), (() => {
    o(_a18, "FPSCounter");
  })(), _a18), "Nn");
  var Ds = o((r) => {
    if (!r.canvas)
      throw new Error("Please provide a canvas");
    let t = { canvas: r.canvas, loopID: null, stopped: false, dt: 0, time: 0, realTime: 0, fpsCounter: new Nn(), timeScale: 1, skipTime: false, numFrames: 0, mousePos: new x(0), mouseDeltaPos: new x(0), keyState: new rt(), mouseState: new rt(), mergedGamepadState: new jn(), gamepadStates: /* @__PURE__ */ new Map(), gamepads: [], charInputted: [], isMouseMoved: false, lastWidth: r.canvas.offsetWidth, lastHeight: r.canvas.offsetHeight, events: new Le() };
    function u() {
      return t.canvas;
    }
    __name(u, "u");
    o(u, "canvas");
    function p() {
      return t.dt * t.timeScale;
    }
    __name(p, "p");
    o(p, "dt");
    function E() {
      return t.time;
    }
    __name(E, "E");
    o(E, "time");
    function M() {
      return t.fpsCounter.fps;
    }
    __name(M, "M");
    o(M, "fps");
    function L() {
      return t.numFrames;
    }
    __name(L, "L");
    o(L, "numFrames");
    function q() {
      return t.canvas.toDataURL();
    }
    __name(q, "q");
    o(q, "screenshot");
    function Y(d2) {
      t.canvas.style.cursor = d2;
    }
    __name(Y, "Y");
    o(Y, "setCursor");
    function U() {
      return t.canvas.style.cursor;
    }
    __name(U, "U");
    o(U, "getCursor");
    function Q2(d2) {
      if (d2)
        try {
          let v3 = t.canvas.requestPointerLock();
          v3.catch && v3.catch((T) => console.error(T));
        } catch (v3) {
          console.error(v3);
        }
      else
        document.exitPointerLock();
    }
    __name(Q2, "Q");
    o(Q2, "setCursorLocked");
    function h() {
      return !!document.pointerLockElement;
    }
    __name(h, "h");
    o(h, "isCursorLocked");
    function Z(d2) {
      d2.requestFullscreen ? d2.requestFullscreen() : d2.webkitRequestFullscreen && d2.webkitRequestFullscreen();
    }
    __name(Z, "Z");
    o(Z, "enterFullscreen");
    function Pe() {
      document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullScreen && document.webkitExitFullScreen();
    }
    __name(Pe, "Pe");
    o(Pe, "exitFullscreen");
    function ae() {
      return document.fullscreenElement || document.webkitFullscreenElement;
    }
    __name(ae, "ae");
    o(ae, "getFullscreenElement");
    function de(d2 = true) {
      d2 ? Z(t.canvas) : Pe();
    }
    __name(de, "de");
    o(de, "setFullscreen");
    function pe() {
      return !!ae();
    }
    __name(pe, "pe");
    o(pe, "isFullscreen");
    function G() {
      t.stopped = true;
      for (let d2 in oe)
        t.canvas.removeEventListener(d2, oe[d2]);
      for (let d2 in _e)
        document.removeEventListener(d2, _e[d2]);
      for (let d2 in Se)
        window.removeEventListener(d2, Se[d2]);
      Lt.disconnect();
    }
    __name(G, "G");
    o(G, "quit");
    function Xe(d2) {
      t.loopID !== null && cancelAnimationFrame(t.loopID);
      let v3 = 0, T = o((I) => {
        if (t.stopped)
          return;
        if (document.visibilityState !== "visible") {
          t.loopID = requestAnimationFrame(T);
          return;
        }
        let K = I / 1e3, _ = K - t.realTime, we = r.maxFPS ? 1 / r.maxFPS : 0;
        t.realTime = K, v3 += _, v3 > we && (t.skipTime || (t.dt = v3, t.time += p(), t.fpsCounter.tick(t.dt)), v3 = 0, t.skipTime = false, t.numFrames++, dn(), d2(), Dt()), t.loopID = requestAnimationFrame(T);
      }, "frame");
      T(0);
    }
    __name(Xe, "Xe");
    o(Xe, "run");
    function Ie() {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    }
    __name(Ie, "Ie");
    o(Ie, "isTouchscreen");
    function b2() {
      return t.mousePos.clone();
    }
    __name(b2, "b");
    o(b2, "mousePos");
    function ue() {
      return t.mouseDeltaPos.clone();
    }
    __name(ue, "ue");
    o(ue, "mouseDeltaPos");
    function ge(d2 = "left") {
      return t.mouseState.pressed.has(d2);
    }
    __name(ge, "ge");
    o(ge, "isMousePressed");
    function ee(d2 = "left") {
      return t.mouseState.down.has(d2);
    }
    __name(ee, "ee");
    o(ee, "isMouseDown");
    function fe(d2 = "left") {
      return t.mouseState.released.has(d2);
    }
    __name(fe, "fe");
    o(fe, "isMouseReleased");
    function Ve() {
      return t.isMouseMoved;
    }
    __name(Ve, "Ve");
    o(Ve, "isMouseMoved");
    function N(d2) {
      return d2 === void 0 ? t.keyState.pressed.size > 0 : t.keyState.pressed.has(d2);
    }
    __name(N, "N");
    o(N, "isKeyPressed");
    function A(d2) {
      return d2 === void 0 ? t.keyState.pressedRepeat.size > 0 : t.keyState.pressedRepeat.has(d2);
    }
    __name(A, "A");
    o(A, "isKeyPressedRepeat");
    function at(d2) {
      return d2 === void 0 ? t.keyState.down.size > 0 : t.keyState.down.has(d2);
    }
    __name(at, "at");
    o(at, "isKeyDown");
    function Me(d2) {
      return d2 === void 0 ? t.keyState.released.size > 0 : t.keyState.released.has(d2);
    }
    __name(Me, "Me");
    o(Me, "isKeyReleased");
    function Qt(d2) {
      return d2 === void 0 ? t.mergedGamepadState.buttonState.pressed.size > 0 : t.mergedGamepadState.buttonState.pressed.has(d2);
    }
    __name(Qt, "Qt");
    o(Qt, "isGamepadButtonPressed");
    function ut(d2) {
      return d2 === void 0 ? t.mergedGamepadState.buttonState.down.size > 0 : t.mergedGamepadState.buttonState.down.has(d2);
    }
    __name(ut, "ut");
    o(ut, "isGamepadButtonDown");
    function We(d2) {
      return d2 === void 0 ? t.mergedGamepadState.buttonState.released.size > 0 : t.mergedGamepadState.buttonState.released.has(d2);
    }
    __name(We, "We");
    o(We, "isGamepadButtonReleased");
    function Zt(d2) {
      return t.events.on("resize", d2);
    }
    __name(Zt, "Zt");
    o(Zt, "onResize");
    let en = o((d2, v3) => {
      if (typeof d2 == "function")
        return t.events.on("keyDown", d2);
      if (typeof d2 == "string" && typeof v3 == "function")
        return t.events.on("keyDown", (T) => T === d2 && v3(d2));
    }, "onKeyDown"), Je = o((d2, v3) => {
      if (typeof d2 == "function")
        return t.events.on("keyPress", d2);
      if (typeof d2 == "string" && typeof v3 == "function")
        return t.events.on("keyPress", (T) => T === d2 && v3(d2));
    }, "onKeyPress"), tn = o((d2, v3) => {
      if (typeof d2 == "function")
        return t.events.on("keyPressRepeat", d2);
      if (typeof d2 == "string" && typeof v3 == "function")
        return t.events.on("keyPressRepeat", (T) => T === d2 && v3(d2));
    }, "onKeyPressRepeat"), Qe = o((d2, v3) => {
      if (typeof d2 == "function")
        return t.events.on("keyRelease", d2);
      if (typeof d2 == "string" && typeof v3 == "function")
        return t.events.on("keyRelease", (T) => T === d2 && v3(d2));
    }, "onKeyRelease");
    function nn(d2, v3) {
      return typeof d2 == "function" ? t.events.on("mouseDown", (T) => d2(T)) : t.events.on("mouseDown", (T) => T === d2 && v3(T));
    }
    __name(nn, "nn");
    o(nn, "onMouseDown");
    function sn(d2, v3) {
      return typeof d2 == "function" ? t.events.on("mousePress", (T) => d2(T)) : t.events.on("mousePress", (T) => T === d2 && v3(T));
    }
    __name(sn, "sn");
    o(sn, "onMousePress");
    function Et(d2, v3) {
      return typeof d2 == "function" ? t.events.on("mouseRelease", (T) => d2(T)) : t.events.on("mouseRelease", (T) => T === d2 && v3(T));
    }
    __name(Et, "Et");
    o(Et, "onMouseRelease");
    function Ct(d2) {
      return t.events.on("mouseMove", () => d2(b2(), ue()));
    }
    __name(Ct, "Ct");
    o(Ct, "onMouseMove");
    function St(d2) {
      return t.events.on("charInput", d2);
    }
    __name(St, "St");
    o(St, "onCharInput");
    function Ne(d2) {
      return t.events.on("touchStart", d2);
    }
    __name(Ne, "Ne");
    o(Ne, "onTouchStart");
    function rn(d2) {
      return t.events.on("touchMove", d2);
    }
    __name(rn, "rn");
    o(rn, "onTouchMove");
    function on(d2) {
      return t.events.on("touchEnd", d2);
    }
    __name(on, "on");
    o(on, "onTouchEnd");
    function an(d2) {
      return t.events.on("scroll", d2);
    }
    __name(an, "an");
    o(an, "onScroll");
    function un(d2) {
      return t.events.on("hide", d2);
    }
    __name(un, "un");
    o(un, "onHide");
    function cn(d2) {
      return t.events.on("show", d2);
    }
    __name(cn, "cn");
    o(cn, "onShow");
    function ln(d2, v3) {
      if (typeof d2 == "function")
        return t.events.on("gamepadButtonDown", d2);
      if (typeof d2 == "string" && typeof v3 == "function")
        return t.events.on("gamepadButtonDown", (T) => T === d2 && v3(d2));
    }
    __name(ln, "ln");
    o(ln, "onGamepadButtonDown");
    function Tt(d2, v3) {
      if (typeof d2 == "function")
        return t.events.on("gamepadButtonPress", d2);
      if (typeof d2 == "string" && typeof v3 == "function")
        return t.events.on("gamepadButtonPress", (T) => T === d2 && v3(d2));
    }
    __name(Tt, "Tt");
    o(Tt, "onGamepadButtonPress");
    function At(d2, v3) {
      if (typeof d2 == "function")
        return t.events.on("gamepadButtonRelease", d2);
      if (typeof d2 == "string" && typeof v3 == "function")
        return t.events.on("gamepadButtonRelease", (T) => T === d2 && v3(d2));
    }
    __name(At, "At");
    o(At, "onGamepadButtonRelease");
    function Ot(d2, v3) {
      return t.events.on("gamepadStick", (T, I) => T === d2 && v3(I));
    }
    __name(Ot, "Ot");
    o(Ot, "onGamepadStick");
    function Pt(d2) {
      t.events.on("gamepadConnect", d2);
    }
    __name(Pt, "Pt");
    o(Pt, "onGamepadConnect");
    function Mt(d2) {
      t.events.on("gamepadDisconnect", d2);
    }
    __name(Mt, "Mt");
    o(Mt, "onGamepadDisconnect");
    function hn(d2) {
      return t.mergedGamepadState.stickState.get(d2) || new x(0);
    }
    __name(hn, "hn");
    o(hn, "getGamepadStick");
    function ct() {
      return [...t.charInputted];
    }
    __name(ct, "ct");
    o(ct, "charInputted");
    function Rt() {
      return [...t.gamepads];
    }
    __name(Rt, "Rt");
    o(Rt, "getGamepads");
    function dn() {
      t.events.trigger("input"), t.keyState.down.forEach((d2) => t.events.trigger("keyDown", d2)), t.mouseState.down.forEach((d2) => t.events.trigger("mouseDown", d2)), Bt();
    }
    __name(dn, "dn");
    o(dn, "processInput");
    function Dt() {
      t.keyState.update(), t.mouseState.update(), t.mergedGamepadState.buttonState.update(), t.mergedGamepadState.stickState.forEach((d2, v3) => {
        t.mergedGamepadState.stickState.set(v3, new x(0));
      }), t.charInputted = [], t.isMouseMoved = false, t.gamepadStates.forEach((d2) => {
        d2.buttonState.update(), d2.stickState.forEach((v3, T) => {
          d2.stickState.set(T, new x(0));
        });
      });
    }
    __name(Dt, "Dt");
    o(Dt, "resetInput");
    function Gt(d2) {
      let v3 = { index: d2.index, isPressed: (T) => t.gamepadStates.get(d2.index).buttonState.pressed.has(T), isDown: (T) => t.gamepadStates.get(d2.index).buttonState.down.has(T), isReleased: (T) => t.gamepadStates.get(d2.index).buttonState.released.has(T), getStick: (T) => t.gamepadStates.get(d2.index).stickState.get(T) };
      return t.gamepads.push(v3), t.gamepadStates.set(d2.index, { buttonState: new rt(), stickState: /* @__PURE__ */ new Map([["left", new x(0)], ["right", new x(0)]]) }), v3;
    }
    __name(Gt, "Gt");
    o(Gt, "registerGamepad");
    function Ft(d2) {
      t.gamepads = t.gamepads.filter((v3) => v3.index !== d2.index), t.gamepadStates.delete(d2.index);
    }
    __name(Ft, "Ft");
    o(Ft, "removeGamepad");
    function Bt() {
      var _a20, _b, _c;
      for (let d2 of navigator.getGamepads())
        d2 && !t.gamepadStates.has(d2.index) && Gt(d2);
      for (let d2 of t.gamepads) {
        let v3 = navigator.getGamepads()[d2.index], I = (_c = (_b = ((_a20 = r.gamepads) != null ? _a20 : {})[v3.id]) != null ? _b : kn[v3.id]) != null ? _c : kn.default, K = t.gamepadStates.get(d2.index);
        for (let _ = 0; _ < v3.buttons.length; _++)
          v3.buttons[_].pressed ? (K.buttonState.down.has(I.buttons[_]) || (t.mergedGamepadState.buttonState.press(I.buttons[_]), K.buttonState.press(I.buttons[_]), t.events.trigger("gamepadButtonPress", I.buttons[_])), t.events.trigger("gamepadButtonDown", I.buttons[_])) : K.buttonState.down.has(I.buttons[_]) && (t.mergedGamepadState.buttonState.release(I.buttons[_]), K.buttonState.release(I.buttons[_]), t.events.trigger("gamepadButtonRelease", I.buttons[_]));
        for (let _ in I.sticks) {
          let we = I.sticks[_], Te = new x(v3.axes[we.x], v3.axes[we.y]);
          K.stickState.set(_, Te), t.mergedGamepadState.stickState.set(_, Te), t.events.trigger("gamepadStick", _, Te);
        }
      }
    }
    __name(Bt, "Bt");
    o(Bt, "processGamepad");
    let oe = {}, _e = {}, Se = {}, Ee = r.pixelDensity || window.devicePixelRatio || 1;
    oe.mousemove = (d2) => {
      let v3 = new x(d2.offsetX, d2.offsetY), T = new x(d2.movementX, d2.movementY);
      if (pe()) {
        let I = t.canvas.width / Ee, K = t.canvas.height / Ee, _ = window.innerWidth, we = window.innerHeight, Te = _ / we, mn = I / K;
        if (Te > mn) {
          let xe = we / K, me = (_ - I * xe) / 2;
          v3.x = Fe(d2.offsetX - me, 0, I * xe, 0, I), v3.y = Fe(d2.offsetY, 0, K * xe, 0, K);
        } else {
          let xe = _ / I, me = (we - K * xe) / 2;
          v3.x = Fe(d2.offsetX, 0, I * xe, 0, I), v3.y = Fe(d2.offsetY - me, 0, K * xe, 0, K);
        }
      }
      t.events.onOnce("input", () => {
        t.isMouseMoved = true, t.mousePos = v3, t.mouseDeltaPos = T, t.events.trigger("mouseMove");
      });
    };
    let lt = ["left", "middle", "right", "back", "forward"];
    oe.mousedown = (d2) => {
      t.events.onOnce("input", () => {
        let v3 = lt[d2.button];
        v3 && (t.mouseState.press(v3), t.events.trigger("mousePress", v3));
      });
    }, oe.mouseup = (d2) => {
      t.events.onOnce("input", () => {
        let v3 = lt[d2.button];
        v3 && (t.mouseState.release(v3), t.events.trigger("mouseRelease", v3));
      });
    };
    let fn = /* @__PURE__ */ new Set([" ", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Tab"]), ht = { ArrowLeft: "left", ArrowRight: "right", ArrowUp: "up", ArrowDown: "down", " ": "space" };
    oe.keydown = (d2) => {
      fn.has(d2.key) && d2.preventDefault(), t.events.onOnce("input", () => {
        let v3 = ht[d2.key] || d2.key.toLowerCase();
        v3.length === 1 ? (t.events.trigger("charInput", v3), t.charInputted.push(v3)) : v3 === "space" && (t.events.trigger("charInput", " "), t.charInputted.push(" ")), d2.repeat ? (t.keyState.pressRepeat(v3), t.events.trigger("keyPressRepeat", v3)) : (t.keyState.press(v3), t.events.trigger("keyPressRepeat", v3), t.events.trigger("keyPress", v3));
      });
    }, oe.keyup = (d2) => {
      t.events.onOnce("input", () => {
        let v3 = ht[d2.key] || d2.key.toLowerCase();
        t.keyState.release(v3), t.events.trigger("keyRelease", v3);
      });
    }, oe.touchstart = (d2) => {
      d2.preventDefault(), t.events.onOnce("input", () => {
        let v3 = [...d2.changedTouches], T = t.canvas.getBoundingClientRect();
        r.touchToMouse !== false && (t.mousePos = new x(v3[0].clientX - T.x, v3[0].clientY - T.y), t.mouseState.press("left"), t.events.trigger("mousePress", "left")), v3.forEach((I) => {
          t.events.trigger("touchStart", new x(I.clientX - T.x, I.clientY - T.y), I);
        });
      });
    }, oe.touchmove = (d2) => {
      d2.preventDefault(), t.events.onOnce("input", () => {
        let v3 = [...d2.changedTouches], T = t.canvas.getBoundingClientRect();
        r.touchToMouse !== false && (t.mousePos = new x(v3[0].clientX - T.x, v3[0].clientY - T.y), t.events.trigger("mouseMove")), v3.forEach((I) => {
          t.events.trigger("touchMove", new x(I.clientX - T.x, I.clientY - T.y), I);
        });
      });
    }, oe.touchend = (d2) => {
      t.events.onOnce("input", () => {
        let v3 = [...d2.changedTouches], T = t.canvas.getBoundingClientRect();
        r.touchToMouse !== false && (t.mousePos = new x(v3[0].clientX - T.x, v3[0].clientY - T.y), t.mouseState.release("left"), t.events.trigger("mouseRelease", "left")), v3.forEach((I) => {
          t.events.trigger("touchEnd", new x(I.clientX - T.x, I.clientY - T.y), I);
        });
      });
    }, oe.touchcancel = (d2) => {
      t.events.onOnce("input", () => {
        let v3 = [...d2.changedTouches], T = t.canvas.getBoundingClientRect();
        r.touchToMouse !== false && (t.mousePos = new x(v3[0].clientX - T.x, v3[0].clientY - T.y), t.mouseState.release("left"), t.events.trigger("mouseRelease", "left")), v3.forEach((I) => {
          t.events.trigger("touchEnd", new x(I.clientX - T.x, I.clientY - T.y), I);
        });
      });
    }, oe.wheel = (d2) => {
      d2.preventDefault(), t.events.onOnce("input", () => {
        t.events.trigger("scroll", new x(d2.deltaX, d2.deltaY));
      });
    }, oe.contextmenu = (d2) => d2.preventDefault(), _e.visibilitychange = () => {
      document.visibilityState === "visible" ? (t.skipTime = true, t.events.trigger("show")) : t.events.trigger("hide");
    }, Se.gamepadconnected = (d2) => {
      let v3 = Gt(d2.gamepad);
      t.events.onOnce("input", () => {
        t.events.trigger("gamepadConnect", v3);
      });
    }, Se.gamepaddisconnected = (d2) => {
      let v3 = Rt().filter((T) => T.index === d2.gamepad.index)[0];
      Ft(d2.gamepad), t.events.onOnce("input", () => {
        t.events.trigger("gamepadDisconnect", v3);
      });
    };
    for (let d2 in oe)
      t.canvas.addEventListener(d2, oe[d2]);
    for (let d2 in _e)
      document.addEventListener(d2, _e[d2]);
    for (let d2 in Se)
      window.addEventListener(d2, Se[d2]);
    let Lt = new ResizeObserver((d2) => {
      for (let v3 of d2)
        if (v3.target === t.canvas) {
          if (t.lastWidth === t.canvas.offsetWidth && t.lastHeight === t.canvas.offsetHeight)
            return;
          t.lastWidth = t.canvas.offsetWidth, t.lastHeight = t.canvas.offsetHeight, t.events.onOnce("input", () => {
            t.events.trigger("resize");
          });
        }
    });
    return Lt.observe(t.canvas), { dt: p, time: E, run: Xe, canvas: u, fps: M, numFrames: L, quit: G, setFullscreen: de, isFullscreen: pe, setCursor: Y, screenshot: q, getGamepads: Rt, getCursor: U, setCursorLocked: Q2, isCursorLocked: h, isTouchscreen: Ie, mousePos: b2, mouseDeltaPos: ue, isKeyDown: at, isKeyPressed: N, isKeyPressedRepeat: A, isKeyReleased: Me, isMouseDown: ee, isMousePressed: ge, isMouseReleased: fe, isMouseMoved: Ve, isGamepadButtonPressed: Qt, isGamepadButtonDown: ut, isGamepadButtonReleased: We, getGamepadStick: hn, charInputted: ct, onResize: Zt, onKeyDown: en, onKeyPress: Je, onKeyPressRepeat: tn, onKeyRelease: Qe, onMouseDown: nn, onMousePress: sn, onMouseRelease: Et, onMouseMove: Ct, onCharInput: St, onTouchStart: Ne, onTouchMove: rn, onTouchEnd: on, onScroll: an, onHide: un, onShow: cn, onGamepadButtonDown: ln, onGamepadButtonPress: Tt, onGamepadButtonRelease: At, onGamepadStick: Ot, onGamepadConnect: Pt, onGamepadDisconnect: Mt, events: t.events };
  }, "default");
  var zt = 2.5949095;
  var Gs = 1.70158 + 1;
  var Fs = 2 * Math.PI / 3;
  var Bs = 2 * Math.PI / 4.5;
  var Yt = { linear: (r) => r, easeInSine: (r) => 1 - Math.cos(r * Math.PI / 2), easeOutSine: (r) => Math.sin(r * Math.PI / 2), easeInOutSine: (r) => -(Math.cos(Math.PI * r) - 1) / 2, easeInQuad: (r) => r * r, easeOutQuad: (r) => 1 - (1 - r) * (1 - r), easeInOutQuad: (r) => r < 0.5 ? 2 * r * r : 1 - Math.pow(-2 * r + 2, 2) / 2, easeInCubic: (r) => r * r * r, easeOutCubic: (r) => 1 - Math.pow(1 - r, 3), easeInOutCubic: (r) => r < 0.5 ? 4 * r * r * r : 1 - Math.pow(-2 * r + 2, 3) / 2, easeInQuart: (r) => r * r * r * r, easeOutQuart: (r) => 1 - Math.pow(1 - r, 4), easeInOutQuart: (r) => r < 0.5 ? 8 * r * r * r * r : 1 - Math.pow(-2 * r + 2, 4) / 2, easeInQuint: (r) => r * r * r * r * r, easeOutQuint: (r) => 1 - Math.pow(1 - r, 5), easeInOutQuint: (r) => r < 0.5 ? 16 * r * r * r * r * r : 1 - Math.pow(-2 * r + 2, 5) / 2, easeInExpo: (r) => r === 0 ? 0 : Math.pow(2, 10 * r - 10), easeOutExpo: (r) => r === 1 ? 1 : 1 - Math.pow(2, -10 * r), easeInOutExpo: (r) => r === 0 ? 0 : r === 1 ? 1 : r < 0.5 ? Math.pow(2, 20 * r - 10) / 2 : (2 - Math.pow(2, -20 * r + 10)) / 2, easeInCirc: (r) => 1 - Math.sqrt(1 - Math.pow(r, 2)), easeOutCirc: (r) => Math.sqrt(1 - Math.pow(r - 1, 2)), easeInOutCirc: (r) => r < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * r, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * r + 2, 2)) + 1) / 2, easeInBack: (r) => Gs * r * r * r - 1.70158 * r * r, easeOutBack: (r) => 1 + Gs * Math.pow(r - 1, 3) + 1.70158 * Math.pow(r - 1, 2), easeInOutBack: (r) => r < 0.5 ? Math.pow(2 * r, 2) * ((zt + 1) * 2 * r - zt) / 2 : (Math.pow(2 * r - 2, 2) * ((zt + 1) * (r * 2 - 2) + zt) + 2) / 2, easeInElastic: (r) => r === 0 ? 0 : r === 1 ? 1 : -Math.pow(2, 10 * r - 10) * Math.sin((r * 10 - 10.75) * Fs), easeOutElastic: (r) => r === 0 ? 0 : r === 1 ? 1 : Math.pow(2, -10 * r) * Math.sin((r * 10 - 0.75) * Fs) + 1, easeInOutElastic: (r) => r === 0 ? 0 : r === 1 ? 1 : r < 0.5 ? -(Math.pow(2, 20 * r - 10) * Math.sin((20 * r - 11.125) * Bs)) / 2 : Math.pow(2, -20 * r + 10) * Math.sin((20 * r - 11.125) * Bs) / 2 + 1, easeInBounce: (r) => 1 - Yt.easeOutBounce(1 - r), easeOutBounce: (r) => r < 1 / 2.75 ? 7.5625 * r * r : r < 2 / 2.75 ? 7.5625 * (r -= 1.5 / 2.75) * r + 0.75 : r < 2.5 / 2.75 ? 7.5625 * (r -= 2.25 / 2.75) * r + 0.9375 : 7.5625 * (r -= 2.625 / 2.75) * r + 0.984375, easeInOutBounce: (r) => r < 0.5 ? (1 - Yt.easeOutBounce(1 - 2 * r)) / 2 : (1 + Yt.easeOutBounce(2 * r - 1)) / 2 };
  var it = Yt;
  var _a19;
  var Ut = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a19 = class {
    constructor(t, u) {
      __publicField(this, "time");
      __publicField(this, "action");
      __publicField(this, "finished", false);
      __publicField(this, "paused", false);
      this.time = t, this.action = u;
    }
    tick(t) {
      return this.finished || this.paused ? false : (this.time -= t, this.time <= 0 ? (this.action(), this.finished = true, this.time = 0, true) : false);
    }
    reset(t) {
      this.time = t, this.finished = false;
    }
  }, "_this"), (() => {
    o(_a19, "Timer");
  })(), _a19), "Ut");
  var Ls = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA1CAYAAADyMeOEAAAAAXNSR0IArs4c6QAAAoVJREFUaIHdm7txwkAQhheGAqACiCHzOKQDQrqgILpwSAeEDBnEUAF0gCMxZ7G72qce/mec2Lpf9+3unaS78wgSNZ8uX5729+d1FNWXUuGmXlBOUUEIMckEpeQJgBu6C+BSFngztBR2vd+ovY+7g+p6LbgaWgJrAeUkDYIUXgXdBBwNi6kpABJwMTQH3AZsXRR8GHTfgEth8E3gjdAUcNewpbTgY85sCMCUuOokozE0YM0YRzM9NGAAXd8+omAF5h4lnmBRvpSnZHyLoLEbaN+aKB9KWv/KWw0tAbbANnlG+UvB2dm77NxxdwgBpjrF/d7rW9cbmpvio2A5z8iAYpVU8pGZlo6/2+MSco2lHfd3rv9jAP038e1xef9o2mjvYb2OqpqKE81028/jeietlSEVO5FRWsxWsJit1G3aFpW8iWe5RwpiCZAk25QvV6nz6fIlynRGuTd5WqpJ4guAlDfVKBK87hXljflgv1ON6fV+4+5gVlA17SfeG0heKqQd4l4jI/wrmaA9N9R4ar+wpHJDZyrrfcH0nB66PqAzPi76pn+faSyJk/vzOorYhGurQrzj/P68jtBMawHaHBIR9xoD5O34dy0qQOSYHvqExq2TpT2nf76+w7y251OYF0CRaU+J920TwLUa6inx6OxE6g80lu2ux7Y2eJLF/rCXE6zEPdnenk9o+4ih9AEdnW2q81HXl5LuU6OTl2fXUhqganbXAGq3g6jJOWV/OnoesO6YqqEB/GdNsjf7uHtwj2DzmRNpp7iOZfm6D9oAxB6Yi1gC4oIYeo4MIPdopEQRB+cAko5J1tW386HpB2Kz1eop4Epdwls/kgZ1sh8gZsEjdcWkr//D8Qu3Z3l5Nl1NtAAAAABJRU5ErkJggg==";
  var Is = ps("SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAASAAAeMwAUFBQUFCIiIiIiIjAwMDAwPj4+Pj4+TExMTExZWVlZWVlnZ2dnZ3V1dXV1dYODg4ODkZGRkZGRn5+fn5+frKysrKy6urq6urrIyMjIyNbW1tbW1uTk5OTk8vLy8vLy//////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAQKAAAAAAAAHjOZTf9/AAAAAAAAAAAAAAAAAAAAAP/7kGQAAANUMEoFPeACNQV40KEYABEY41g5vAAA9RjpZxRwAImU+W8eshaFpAQgALAAYALATx/nYDYCMJ0HITQYYA7AH4c7MoGsnCMU5pnW+OQnBcDrQ9Xx7w37/D+PimYavV8elKUpT5fqx5VjV6vZ38eJR48eRKa9KUp7v396UgPHkQwMAAAAAA//8MAOp39CECAAhlIEEIIECBAgTT1oj///tEQYT0wgEIYxgDC09aIiE7u7u7uIiIz+LtoIQGE/+XAGYLjpTAIOGYYy0ZACgDgSNFxC7YYiINocwERjAEDhIy0mRoGwAE7lOTBsGhj1qrXNCU9GrgwSPr80jj0dIpT9DRUNHKJbRxiWSiifVHuD2b0EbjLkOUzSXztP3uE1JpHzV6NPq+f3P5T0/f/lNH7lWTavQ5Xz1yLVe653///qf93B7f/vMdaKJAAJAMAIwIMAHMpzDkoYwD8CR717zVb8/p54P3MikXGCEWhQOEAOAdP6v8b8oNL/EzdnROC8Zo+z+71O8VVAGIKFEglKbidkoLam0mAFiwo0ZoVExf/7kmQLgAQyZFxvPWAENcVKXeK0ABAk2WFMaSNIzBMptBYfArbkZgpWjEQpcmjxQoG2qREWQcvpzuuIm29THt3ElhDNlrXV///XTGbm7Kbx0ymcRX///x7GVvquf5vk/dPs0Wi5Td1vggDxqbNII4bAPTU3Ix5h9FJTe7zv1LHG/uPsPrvth0ejchVzVT3giirs6sQAACgQAAIAdaXbRAYra/2t0//3HwqLKIlBOJhOg4BzAOkt+MOL6H8nlNvKyi3rOnqP//zf6AATwBAKIcHKixxwjl1TjDVIrvTqdmKQOFQBUBDwZ1EhHlDEGEVyGQWBAHrcJgRSXYbkvHK/8/6rbYjs4Qj0C8mRy2hwRv/82opGT55fROgRoBTjanaiQiMRHUu1/P3V9yGFffaVv78U1/6l/kpo0cz73vuSv/9GeaqDVRA5bWdHRKQKIEAAAAoIktKeEmdQFKN5sguv/ZSC0oxCAR7CzcJgEsd8cA0M/x0tzv15E7//5L5KCqoIAAmBFIKM1UxYtMMFjLKESTE8lhaelUyCBYeA2IN4rK1iDt//+5JkEgAkZzlVq29D8DJDWo0YLLARwPFZrL0PyLsUazTAlpI+hKSx01VSOfbjXg0iW9/jVPDleLJ15QQA4Okdc5ByMDFIeuCCE5CvevwBGH8YibiX9FtaIIgUikF42wrZw6ZJ6WlHrA+Ki5++NNMeYH1lEkwwJAIJB4ugVFguXFc20Vd/FLlvq1GSiSwAFABABABA47k6BFeNvxEQZO9v3L1IE4iEVElfrXmEmlyWIyGslFA55gH/sW7////o9AAFIBIIAAIUMzYTTNkgsAmYObfwQyzplrOmYvq0BKCKNN+nUTbvD7cJzvHxrEWG5QqvP8U1vFx6CwE8NoRc2ADBeEb/HoXh60N7ST8nw9QiiGoYvf/r6GtC9+vLwXHjaSkIp3iupC5+Nii81Zhu85pNYbFvrf+UFThDOYYY26off+W6b//73GTiN9xDfl0AAwBAiMBO8qsDBPOZtuT/dTbjVVbY/KSGH6ppHwKv/6X+s8gUCN/lODzv////GQAGAMQAADlXAUCBJiY0wFQZusYQOaQzaTwDBTcx0IvVp8m7uxKp//uSZBMCBHRI1eNPLHAyxNqWGeoYUIEnWYyxD8DUFSn0l6iojcd+oEOkzV6uWqyHNzjqmv+7V5xGUfY9yEmbziTzjRscm9OqFQp1PKFrqu3PX/7YuGtDU6bt0OUTpv38rdc+37dVDQLKUchaJ853E9edNDGqWwsYz1VoiSStEJtZvw6+sNqFWqaIXJjQCGAAGWAYVwmag/x3BRJw1wYF7IzVqDcNzn85d//FzK7IgwbQwccLoB4AsF8Nj/1ESRUAAVJwAFh0YOFEhmSJEHKQRDyhszgLUpHIgFrb5cySFg5jv10ImlYuvaaGBItfXqnNPmic+XNkmb5fW49vdhq97nQMQyGIlM2v8oQSrxKSxE4F1WqrduqvuJCRof1R7Gsre9KszUVF1/t3PzH2tnp+iSUG3rDwGNcDzxCGA8atuQF0paZAAkAhAQAEAC240yJV+nJgUrqq8axAYtVpYjZyFGb13/17jwiClQDaCdytZpyHHf1R/EG/+lUAgAAAChhmJvioVGGBCFgqdpsGAkUUrbTstwTCJgLQpFIsELW7t/68Iv/7kmQUgAQ9NFO9aeAAPAU6RKwUABClY2e5hoARGpDvPydCAsY8WO10fSvUOnfT98+n/l/6/+hxslhQ1DEOaevNKGocvIYba8WJpaP/15pX0NQ1DUNn/////k6lPp/N61rBi8RJFfERV3IgrqDsJA64sjCoKxDDQ9xEcWDpMBDwVFDIAEIAAzryxsjGi4q/oWpixKjhklAF4pUrDPjFhFVupDFZ/t/t0YPAygUBhADPR/KLCKJ8h2Oxhpxz/zNRAAFl0MAZLAYEAiVbEiz36LSgZ5QoQVat69KNy8FyM5Z80ACHAzgnISEkxUSJIDyBSwi5KF4mjBl4xJdbrG9ComLrL8YATiodhQKCkj6ROdyg1y5XmZlvMVmpJzYppJDwLi/Lp9vT3TfmimOGpuezi2U/9FNav0zX9Oja2r//8+hvuihuQAAMAVmqFgAgCcuboAEAAAUcqy8ca0BHBmwbFkED0CNA1YYDPkhcQrRJxcY3BzfxxltAz9vX62Xl3plAzWmRO+FkZyH///1qAAEjQBAACUpgU5o2AIBmFBGMamrGg0b/+5JkC4ADxyLWb2ngAEEkGofsoACP7U1JLaxTkOqFaKhspGgnW3SGC56ZgUJGCRnLOmIJAkuNBgvwU4Ocf8CJK9UsafH9/Frj///365XSoME+DZMw5UNjrMbVoeIj9EL91IuQ5KHyl5V2LCpdIdESgafOHxVGkAlkHuakmix/gN8+BP/sKguLAAoAtUjtvaoeEADwr3OK11E4KBlojgeQNQBJ4MvCAd/4t/xMMzeLhQGQ1//6tQu5BaBOGCT6U4aafvXZ//4iAPAAAAbLkgIlQmMSLA2H1CVNAlWwyVvKIQIxOSK1NWxs4MBUATlKrAkIMPAjCAdS6MVFzuURWa/+/qQWEGsA6EEpiBEJb9Q21lAHoBoD0B6aAPhyt+bG3muoXIN3RLadXxUfr/ohjGFF/p97eqNI5noKAqYLNPpUTDSI9/TmA6B+YAAADgA0Y4lxTW1SQfOQuDDDI0KTTuIrF5qoJrUFhUFAsg+AT2hbkaRZYGIjBKVDIa5VgNN/9P/rCDsBJbYJRKpCA1ArAkigIeYY61AjE+jubyiZFZ3+L789//uSZBCABHVj2entNmw1JXokLycYEFTFVa0wz4DYjKs08J2Q+r4n3lgbWaaMwMLEjFW88F39brqPF83cv1mCSJeY3Q2uiQxhBJxCBeR1D2LQRsYQcZUTzdNll8+OwZBsIwSgl45ymaHX603Mz7JmZuvt71GDTN66zev/+cLn/b5imV8pAHkg61FIJchBSG+zycgAZgADD6F1iQQRXRWmWS6bDIIgyBCZEcdl/KgXGmVKFv/vl8ry/5bLypf//U5jhYDhL9X/pAA0AKBIAAKgGtGXGGWJgEoF2JNsHlKfSKLRhGBAgIuWZKIJCFpF1VBhkB+EfzEyMUJdWuMrEZoPZ5BfF3/Nu62riIdjoO4AAKD2sTrDmpZZaYysf/810TitAVvn9xtFucieiaEy54YqiIO6RqkGAm5wVO0bFB0sDTdNxYGekKktR4KAAfAwUIgI8Ci6aXgtwbhPWAC+CKExAFydNtYGXNZoQjUsXv/9vKjgmdwieb+h7kHvPoc//0FaCACAATKFC4Y9ammklidbaiJNPBhGWTNhFSgdtalK12lpl//7kmQRAFN2NFI7TBvwNKNaTRsFGBWdfV2tPNcYvBHpgPKJsc8IUcTCxY3HSvUVNTWe/Z3YWlrJ0yrNRUiT19aprA7E+mPP+ZmC3/CsheOJXhc/9VJb3UZnphUBcqZUZQth1i3XqtPYu2Sy1s8DV9ZYACAAASAAHgFkQcOqgB5utFHFh3kSi4USs0yk4iOClREmjvdG+upaiLcRA6/9QGbOfxF/8sEAQAVG0G07YFMihKR4EXJCkRdX9isueLqUMRAQdhDZmv3KeR0nPqRVrZmSIXDt+BBSR7qqbKQcB98W9qiMb55preHIStxFWPE4lAyI+BKz2iSxonpvMR5DgKxTH6vGGXAbYCaAnJUW4W07EesQqbfqdbo4qNnPxSpn1H8eahszc/y9//dn1V7D/OYpn1szQKAPXTMlO/rO//u7JriJXbld7aP33v6RXYg/COIDzTWkTspg6Ay1YaDSwKxrP/LfIikHjmO871POf/kEAseAgoPEi9/0ZziNwfxVKy9qAEGEEAAq1EcOamDEGHAA0iao8k31rz2MiLNEik6VQ37/+5JkEAgEYU5WU0M3MDjDe0o9IjiOzSVM7aCzEM2GqXD8pFB0zxMcHCQNHtZD+R+pMWZxOJ/otEZTvVN/MeU12xTVcL+f2YaiNJTVoPd6SvzEnKel5GXOzEaazgdChnP2jOAwpfyRpVlQwoJBwpN1L1DL////6TVWcoepf7CVWrpEWiym5lR5U0BSMlxQC4qByOyQIAEuJfIriWixDqRgMfVZWuvRowjR9BzP5lZlT/+YG50CsSBG////////liXDQVMxEaBkbzKAAACnDIAstY7iK7gGSF7SIDexaTtPOHABk9YcmJEACmo50pgWal22etroBpYoVqtU6OPqvlf0c4QCAfLk9P/FJs4KCQMf6ECZyA6BwqqyJ0rMYj56k1/UlTIx1V3Rt5NF71D4qlptDC8VMgQVHFDlQnDFi06qQgKQAAIK4TxxJGFGYJuZNGXRdpq7IW/DYpPIQRFJLAc+qn1E0XYdOkQVJT+z8Lvff//8vbKAWTIBBUUdM6cOhlDry7x4dAkJXIBhbO3HSMMMGBQ9K9/JNfu09PjTO64wYEcR//uSZBeABP5g11NPRVwzQ4r8PMJVj7j9UU2wUwDPjeq0Z5w675D9+uDdL2QsuIry2lZtwn/pJYyRRjANEOQxNWw8mU7Tq+vueV7JrX/Pg7VIkEuZT5dwd85MVoq5lpStNICkBAcFR88//58KO8Zjt2PIGxWl1cVfXeNGH18SReNT//hYliWtQuNluxyxONbm4U+lpkAgpyE7yAIYUjIaqHmARJ0GQTtmH60xdwFp/u253XBCxD0f/lBcguCALn//Y5nqEv//1h4BAAwgAA5gcHmpIplgeW9fAOM6RFZUywrsGAiRmKkanQnCFBjYoPDS7bjwtPTkVI8D/P8VVLcTUz65n7PW2s3tNYHgEul4tBaIz0A9RgJAyAMI4/i0fpQKjhX9S+qIa0vmc4CZit/0/3UTDGeKNpkk0nu2rUE2ag8WErhE/kgAiQCJKQEYBA5Wn6CxHoIUh6dQ46nLIuwFk4S/LaDQxXu7Yf/pf//lwJB0S/Ff/4C///EiBEiAAAIAMnpngiIABAdMpKigkXaUwhLEGvpiofmXW57h2XAZO3CMRv/7kmQUAEOHQlHraRTQMkQp6GWFZBTVU1lNPTPYyIyocYeUoNgLBWAs1jPkTv/tXBaeZ/tbD/nAGP8/xT0SNEi5zof0KIVEzVe9r5lZOol7kyaXMYS4J/ZS3djp//UaeVyR0mUMlTgfz8XqMzIEgAQQ6UNQ1DSE0/C16OvyaocF4ijAGFci0FSYqCUSaWs6t9F6/699DKvMgMoK1//kSbvxtyBN27I7mdXgNMAW75sRU1UwUHYG5axI2tFIFpkgx7nnK+1JmRKjqeAd5Ph0QAL4QAnirmiPlg0yBDlrb/d3ngtA65rb999+8vdDCfnJuJAYIl285zklpVbrKpk1PEzrOY9NZUgyz6OiOsKt5qG/g2ibxSZ+/eTI/NB8n4ev//n2nIw85GAdwuJL7kYnnAbpcf1RBKH6b2U4RWP8dmWH5snsAFYwADBgAopKdzFJq4Jlmotloh/m4QpTSvJRE3nYZHephoqBhVf+P7vQ9BPlwZCP+3//+hdy5uUwS3LDEgQx4cdIgvDEBR1YqymCsSbKzRy2aQmSv+AAcAgAkvzPfuX/+5JkFQAj6VFX00Zr5DllOhhgpn4MmSs+zSRRiO8U5tWklYgSLKfs+Xheb/+6WaAQCKTztNeJ382MUltZNnjSJoFrCqB6C4mFcwJpJD4Oc8dLDXMTh9k1/rmTopfzqv9AvHWfOuZJlEvHSVMjyjpkVucKSzxJVQBgAAIo8DGqRdYCXPckFYg+dH9A/qUyljrtpxH9RJX/Z3Vv6uFkPg4M2jf3CL09QrwOrMt69n//8UFEAAMHWdhg1CcjyVBwiArOYlDL5NPY6x8ZLFBCGi6SVTKX5nqdSEFjebnv2zHdt0dj6xvORsSFzwqRNTJSZIrrlpXcURNL9WW7krBgr5jPMaGcvJ5v0N1s19CV7+7fvQfjySX2QECWUgKgeJCIif4WRBZ/6archpDkzE7oWctK3zEHP9Smeai8oeHkM6AK7pGjtOgeFv40ugqNd+Iv///uAZAMgAAAUeSWhLPpdwk3iXpBw43hOVIp1gliUOSaeZcZeZhLAH9TtD56wUpBduzLF5v5qViTH6o+I0+8Z1asaLgKVAohlpB72DgAQBQxEd3g//uSZCiAA6k0UdMPQfA+xcnBYON8E3WDVU0w1ZjPDSmo8IniHAFDNnkXF3B94gicH5d8MFw+IHZwufxOf/8gsHw+XrD4Jn8T4RAyQiABNBQg/3giEWuZ42mVFB3kkXNjhqBg1CghEUbN3/7/KBhyqNueef/MIDBClP3YRnKLiIlEFzf//0g+4zKpRIKTpqQgUtnHGFw6RSLN421iGcYapqFxny/capK9r9v+2BSy/RU1yZxa2eGaWK07ijfcxeiO3iuHJvjbXzts+Ny+XyFnsne1h0qG4mAaN6xRGaLVxKPlrri0Bg9oXGyxcw8JRBPkUzC8v451vVd9liSX85JMrmkVNwxOCwUg298////7ks//L409/hwMRIozKiIckXtjzDaAMTBcAACAwLGargPSEgEJZN/EFjfF/VKgaMYKMbwtf/T0UCGGfjfOAZ2frCigYdwh/+sGlQBxhCAAAUHkDPqOdmmUdAVYl3IhrEfR8qZFjLYEPOyzVGvm6lNUJCk2PNazwFxaijk+ZEaiTehoJGuDh6zN/EVP8BCLD/88BoY7Xv/7kmQlgBNmMtNTL0FwOGZJ/WHiKAyhJU+soE3A3JnmAa2oaCIru/+RrEHMTphxQ0X/LzoVy4gKhYl6ZUlklW7CLRVoYmgABwCRMAAMA/poCiEEYLsBVodWcVZ18+CcAfH165U4Xgh7/X1/BAQF6GN/BwQ/+D9S9P6wII//CoANYFYCBAKlGQDKhVjjylKARw2mPAtp8JjcQHggQswVsOEKsF6AIBWvmpIFdSZvRVv/LHWEy0+txMxu+VK9gEqG5pWf6GNGU4UBVkfd+bsj/6lZE0fkOpAqAOvyUO9oo+IiEtcLKOGzhhSGa4MYINHWoQsFr8zzmow0tRILkqz5/+vFxl/oZX/+qGW//xiLjR3xcGn//0QLkTQJh1UA8MAQAEXC/YxODKTDUEhrASs1512GRp+dRFFdTWIRaOXrve1eNjTNpreqQYrC9NBlQc1f8YO2po8bnH6qffuRvU7taiNF3baokE0YpmjRCHRclWBb9NCHKHpERwHRG3pqgXklq4sBpLjGvmekg8Y7SjM1FZopIM8IhB6dtMr8aKsdovh4FW//+5JkQ4CjTDdSU0gtIDiE+YBrKgwNbSVJTCBPwN8N5ZW8NKDnhRB8AXCm//KAsBUCwKU//oJQnET+UP3/zpYRocAAABJkVzzIuoLGEaDoxfsNva12EUdxhJMGFQioSg8GxKsLm8kWEmExJuNidarkk+OTXc0i2OZEq2v+tZr/MDZRS0I7LfRpHdlsiF6m/mEjk+XlK10UqtKYUwNgMx24hUtCJLfpM3ExUeKDYjClgZAzAjQ0qlNQBTsGpk9zSRkCiKkRGp572VXsPYChGvxhAuYkDYZK//jSRgto2mTf6+PJqgAAgIAAAACYZE6aZOHhYkYlcbpeYQq1RgLO4U8TIlL1sGw+iKZi5Kzc/bKT0yXrIUMES89RCWy8oWlxqIQlKANLFpT/KjUrK+UCYbZqGnjVj29aO5dzofWAskRX5eJWPi4kf/aRVjy3Wlyg2AnMYIDSTLwZUTASIzflPWUwwlUnIFMnGiyABeaXJcN91PmQJCLzmvUJkFOHCrX/+6O///IHnT4tT9YYBoNMQ09GfKIErwdwChNz1Qy5+5S/wWeY//uSZF+C03UyT2tMO0A3RRkhY20KzQjDMszhA8DjlGOBp5y4ZCS3ica52GIGiryv7FAaSDVZSXKFTiir+GvGiuK4rjgwPVTddso+W/42a4ueJJHDYtfj6YoKknnjzRgKA0fBIRZOSsprJqnoNN73ps/Z9DVgbKNbMGmRzrYBMAZCPUANkAZQ0syAC2ubK1NF90+WoesBpnhY8qwVDkNb/5Uof6//418TgElCSgAIgyAAQBHEmiaQFPIRmfAMELffpo0IflyEuAAQnSnKvwTlVlnIgOAAGS3P3IydjXPSh/CaVRqpSNCjQqDvPM+fLcuN+WgqNix6CoHomUWTT86JjziRSZ3yjnq+dIldKPU11KUuf6wAASMAAJxE+MlyktgE9UGSxjEx6RR0v1s9bWZ+EJSrGtjqUIhklG3J8eLRn/2U/nv7f///+7/6gBQgEAMUijVMwweWWMyYM/PLXuc7DptIQmBARMRCxXjEIcTNDQgSSeHpUNXO7dRSOllJPvnY7yzaO1hmUjsKvHe99fOxrabMX7mGTi5tsNkZVZLndzxse//7kmR7ABM2O0pbKTvQN4NI+WGFPA2ZESs1pYAAvA0jVrJwAHfbr/c6//vW790dzX36QNBRlDv/6QQAU3V64yUgBEAYc/lI8e5bm+Z9+j+4aaj4tFrb//iker/4a12b/V//q//9v+7vAEAAAAMqZTGd5gL4f54o6ZebKNrR/zWVYUEVYVVv8BuAV2OUT+DUQgkJ8J1Ey4ZbFCiAwgwzMSdHV4jQR+OoPWEASaPkyYq+PsQFFJCsEEJtOiUjI/+GRhtC2DnizTMXATJig9Ey/kAJMrkHGYJ8gpLjmJOYoskpav+ShRJInyGGZVJMihDi6pIxRZJJel/8iZPkYiREnyKE0akTL5QNSqT5iiySS9Ja2SV//5ME0ak//+4KgAAABgQBAADAMDgYCAEgCteQ0fZH6+ICXA357+MPfhR/+ywRf/U///LVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5JknQAFoWhGLm5gBClBmT3GiAAAAAGkHAAAIAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
  var Vs = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOcAAACDCAYAAAB2kQxsAAAAAXNSR0IArs4c6QAABdRJREFUeJzt3d3N3TYMgGG16ADdoAhyl7UyV9bqXRB0g2zQXgRGDcOWSIoUaX3vAwQBknMk/4gWLcnHrQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDEb9kb8FH99eeXf6Wf/efn35ynDyj1pEsb6G6NUxOYZ7sdB/QtPdnWRnn29gbKMYDUspPs0SgPb22cHANo/JG9AZF6wWBp3JLgeir36bvff3x9LOvzp2/dbSFA97bk5I4a9VMD7TXOUcP0uJ+d6emu5d6V1QvMs5nj8FZPx37X/b2TFpzShtnafeP0DipJMFnLnN3/w1OQ7tZgP+pA4VVKcHo0TG36KNULKGt5XsHZmi1APS5WM2Vqg0i7vbsG6YcIznN9vRTxXHavgdxtv6Tc3vc1pAHqdaG6ipwKYprpf1sFp6aH0gRTrxxLubPB2avHu+c/l3mICvqnsr//+Cq+qGrK1Xw/wzbBaRkNvSv3yew9cq+cu89L6nu6F/cMzCgzF1ftANlbe+Otp1IkDVxyVfbo6Z481f3507dhvXfbrk3HpdtjKTNqKuio8678c7mzF6ns6arfMyrVNoA75wMfNU2hKSeCx3Fq7dc+SPfDc39H9Vqn2CT//4bsYeT1PecOJyGSJdh6PZOlbElPZz2PHtlD1cUeS4LT4z5IOihwfNaD5ERm9qxH/dZ7Vmt9M999CtCZbdLUP/p3r2zFQ0paG8lr4Eb6+ZWBcSeq/qhyK6bXUfXOSgtO7/tOb9eT1NveqKttpYbiyXu/euV51JV16/T6e86zyF5TUp731V5Sp+Z7M71h9QvFNWWuvr0Sy4LzLfNvrel6zRX1e+hN2VzrnNlfaYD0xhCs++851lDh3vNV95xe6YvHgb8bwbNcuc+f09wbaUj2dzYgjz93//5kh94t0quCM8OKK6glKKuM0EYHfhUZWd8WwenZa0rLsp6s2YY66o0k9WUvS4NManBaGuo1eDIHgUZ1ePdkntsfFaCz5VZJdStsxyt7ziMNXHEAK5yk1mqmhrMPf1fcp57Vqe3SqZTMEduZhqAZyaywFne0DVHngHTZ11bznE88l/1lBZ9meP8851plWkBCO7drmQvWnL/sY/fKtFaqN3iy6iofsQxNktJnTMgfPXJUz3w3VaP5vOQ7Iyszvy2DczSi+aYFET2jINUEqFcAS4+rV480WlwRWXe07dLa0YGvfl9kmbTvPZJ1TXGvn4t4yuRp+2aMgk27wkm63DIztU3vOVfueC8wK4zKWtK0M+nvJXmOdlt65MgFFCva06qsKz044SvjIiN5TjLaaHxhtNyyouXBGZ1WSn66Ivt+M7pRZAWoZsDq+t2emeM1am/WtHxFG9runrO1/n1CxLK7CilxJM/H4bwuTJJBvWtgvm0gcNu01uvpd8la1soLE7xkpYDea4Ot6W3GOSzRc3o/qHw2M9qmXWA+uw+jbd0hyO9Yz0+vJ9QGcO/8ZV2YUqYVPN8dImXp3aJ/w1XTGGYfKZN+P7IXiXqO1uINLzFOm/Pz+BV4C03PNEqpZl//ELXP1ro8nhLyKLPHMyAiXyvh4cMFZ2uyAJXc62gzgJl1nhrSLMEzcLx+5qQnIhgqv6qhTHC2Zmus1tUuowCVDkRU6j0jgiJqhLPSSq2q7wMtMSBkdbcQWjNCq2nMlRrTnajAPP/t+c5Sj3K8VNueQ+pGzaa2MyOb2sZseW2dpL6ZnjMzfeQFt/Fe3XP2WIfGvRY6a569jCJ9TaIlcCS9KQE5p1TP2VrMbwLNDlZEvpE5AkGxh9f2nLO/QOetytIwAnMf6SfS2ns+jaZ6B4i2sWvSvF0HWOAj/aRGNFAaPXbw2rS2Rzr0T/ChshKNM3qd4135BCaqK9VAKy+lAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/4DBC0k0jFtF9wAAAAASUVORK5CYII=";
  var ks = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOcAAACDCAYAAAB2kQxsAAAAAXNSR0IArs4c6QAABqxJREFUeJztnU1yFDkQRtMEB+AG7Fk6fBPO6ZsQLGc/N5gbMAtosJvqKv2kpPxS763A0W5XSXqVqZ+SngzgF58/fflx/7N///vnacW1gBkFD2Z2LOYNBF3Dx9UXAGs5kxLWwhNxU2qlJHrOhwLfkNZoiaBzIa3dCFJYLXgSboKXmETPeVDQyamR8vX55fe/v37/9vBzCDoH0tqktEpZ+t0IOh4KOBm16euZmETPtVDAiRgRLRF0HRRuEkrFrE1hzR4Lipxj+bD6AqCPz5++/Bgp5tXfdv1CeAdPPmFmSkn0nE+a0drdFm6XiOkdKWEuKRptTXqlLuqqFNaM6Dkb+T5nbb+npo8WjZVinqFantFJk9bWojaRThq7HzKN8wiPJ7aCoJHEZN5zHvJp7RE1DTV6SnZ1fa/PL1MjJtF5HmnT2tJF3GZ/BIj05I8ULUtR6ypER7ogjxpw61rRGxEal4KYjNyORzatbUlHSxr06tFcBTHPiN5NUEJWzlZKG/aKRqYk5tl1IKgPafucZ7w+vxSluLP6olHnL6MQQfYV6bpk/+BRZXm+cXHEiApSipZHlE6tRBDMkxmyysl5VsmtjXiFoJmiZU35ZWK0oNv1OY+omSv0GDDKJCaMI42cHg25dvFCi6QZxVS6ViVSpLUz38A4oiS9ySjlW2althGWKZrN6XNuOVpbwq0ReIzqZhfTrHwE/PZZuEYqcnqO0tZQGxVqRylprLGIEDXNkLOKEakbYsYiiphmiQaEZuD9BghixiKSmGYJIueqBt4TRZEyHtHENCNyNtMaRREzHhHFNBOKnKv7myVcVXKka4WfRBXTjMjpypl8iBmP6MsOmed0Bgk1UHjxXlpORIAWIqeybyGtha1QEdNMRM5s7wLCGpTENBORE6AXNTHNkBM2QFFMM4F5ToX5TYiLqphmRE7YmMhimiEnJEb9XBdJOUlp4Qp1Mc1E5QQ4I/qyvFJCy8n8JnijEjXNAi3fQ0TwIEM6e2OqnAgII8kkptkgOZEQZlN6BquZjqhVFxlBOkZq4Z6WASAFQQ8jZwQJ70FK8CTiaeb3fDSLJyMiwiwiS/q0SkwEBE+85jYjSTpcTiSE2WQRtVlOpAMVemVdtjXmlZxICFlQk/TJjHcmYS96JJ0p6KmcZggKeWmVdPopYwgKuxJVUuQE+EU0Sd99KYICxJH0ry9DUIA/rFy3WyWnGYLCnqyQ9PCXERTgmJmSPvwlBAU4p1bUWklPP1yytA9JYWdGRtLLDyEowDUjomiRwQgKUIZnJC3OgREUoByPSDpkDyEkBfhJj6RNQ7xEUYA6aiS9Cdo8SUoUBaijVtCuFQwICtBGiajdawARFKCNK0HdVtEjKUAd0+Q0q9v/FklhJ1rmP4e8JEoUBejfq2jYNgtEUdgJzwN7u6dSSkBQyMSME7O7FyHUQpoLCqw8rv5o+d6Uw3NvfzjagUkAZvOlLH1lLMyx8wCzWBEhW3ZDmLZ7NTsrwCpmyui5A1+IPidigjcjhZy14/vytBYxwRsPMVcf/2c2QU72wQUVIgj5lqFyIiZEJ5qQb1me1gLMJLKM93wY9cVETYiGkphmg+RETFhJljY2LHICQB/uchI1AXxwlRMxAfwgrYVtUHvxwk1OoiaAL8MjJ2ICtOEip1q6APnJEBS6VwiRzp4vtM5YBvf3m/EeI8DyvUZK33z4+v1bqsZ7dN+3n2W6zwgMO44hY0X1vIqkXh419x7lXh9ds8oyviFyRqmcXrxf2FUtF89ymFkG6nI2p7WZB4FGvUWfLcVt4ahsdy+TR7ifz6lc0F5v0GfalmXldpE3esrr6PrTR84sjNjS4kpQhQhaUi4lD6KR1xK9DHupfoKoR02vSFDy9FWNoKVivv1/lG7OfZkqR043OZUbWgmtFaomaGl51ZTHCnFv5bqNnFGjZvRtEFUEHSHmI1ZHWgVBXZ5+sxvX7ANlPChpjKsknSllKaPlRU4nZo0Yjq6wiIJGFPMML2mj3M8ZRRe4QkzF6FhCJEFbBn4i0iKswn11yenZiLLKeMRqQdWiZSmlkqrcV9d0gPfksAcqBW+2ZqAoq5gZGSrnTtGwlVmCIqUepxWxerj7iIyNZ7SgiKmJhJw7NJpRgiKmLuHl3KnReA4UIaU+y+WkcbzHQ1DEzMGQ9aJH0BDK6RE0y9wlTDp2HuppERQxc0FFBaZGUMTMB5UlQG/fHyk1odJEaBUUMXWh4oSoFRQxtaHyxMi2uBseQwUKciUoYuaAShTlkaCImQcqUph7QREzF/8DSS/2GZ2/N/sAAAAASUVORK5CYII=";
  var Ai = "3000.1.12";
  var js = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
  var Xt = "topleft";
  var Ns = 64;
  var Oi = "monospace";
  var Wt = "monospace";
  var Pi = 36;
  var _s = 64;
  var Hs = 256;
  var qs = 2048;
  var $s = 2048;
  var Ks = 2048;
  var zs = 2048;
  var Ys = 0.1;
  var Mi = 64;
  var _n = "nearest";
  var Ri = 8;
  var Di = 4;
  var Js = [{ name: "a_pos", size: 2 }, { name: "a_uv", size: 2 }, { name: "a_color", size: 4 }];
  var Jt = Js.reduce((r, t) => r + t.size, 0);
  var Qs = 2048;
  var Xs = Qs * 4 * Jt;
  var Ws = Qs * 6;
  var Gi = `
attribute vec2 a_pos;
attribute vec2 a_uv;
attribute vec4 a_color;

varying vec2 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

vec4 def_vert() {
	return vec4(a_pos, 0.0, 1.0);
}

{{user}}

void main() {
	vec4 pos = vert(a_pos, a_uv, a_color);
	v_pos = a_pos;
	v_uv = a_uv;
	v_color = a_color;
	gl_Position = pos;
}
`;
  var Fi = `
precision mediump float;

varying vec2 v_pos;
varying vec2 v_uv;
varying vec4 v_color;

uniform sampler2D u_tex;

vec4 def_frag() {
	return v_color * texture2D(u_tex, v_uv);
}

{{user}}

void main() {
	gl_FragColor = frag(v_pos, v_uv, v_color, u_tex);
	if (gl_FragColor.a == 0.0) {
		discard;
	}
}
`;
  var Hn = `
vec4 vert(vec2 pos, vec2 uv, vec4 color) {
	return def_vert();
}
`;
  var qn = `
vec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {
	return def_frag();
}
`;
  var Bi = /* @__PURE__ */ new Set(["id", "require"]);
  var Li = /* @__PURE__ */ new Set(["add", "update", "draw", "destroy", "inspect", "drawInspect"]);
  function ot(r) {
    switch (r) {
      case "topleft":
        return new x(-1, -1);
      case "top":
        return new x(0, -1);
      case "topright":
        return new x(1, -1);
      case "left":
        return new x(-1, 0);
      case "center":
        return new x(0, 0);
      case "right":
        return new x(1, 0);
      case "botleft":
        return new x(-1, 1);
      case "bot":
        return new x(0, 1);
      case "botright":
        return new x(1, 1);
      default:
        return r;
    }
  }
  __name(ot, "ot");
  o(ot, "anchorPt");
  function Ii(r) {
    switch (r) {
      case "left":
        return 0;
      case "center":
        return 0.5;
      case "right":
        return 1;
      default:
        return 0;
    }
  }
  __name(Ii, "Ii");
  o(Ii, "alignPt");
  function Vi(r) {
    return r.createBuffer(1, 1, 44100);
  }
  __name(Vi, "Vi");
  o(Vi, "createEmptyAudioBuffer");
  var bo = o((r = {}) => {
    var _a20, _b, _c;
    let t = (_a20 = r.root) != null ? _a20 : document.body;
    t === document.body && (document.body.style.width = "100%", document.body.style.height = "100%", document.body.style.margin = "0px", document.documentElement.style.width = "100%", document.documentElement.style.height = "100%");
    let u = (_b = r.canvas) != null ? _b : (() => {
      let e3 = document.createElement("canvas");
      return t.appendChild(e3), e3;
    })(), p = (_c = r.scale) != null ? _c : 1, E = r.width && r.height && !r.stretch && !r.letterbox;
    E ? (u.width = r.width * p, u.height = r.height * p) : (u.width = u.parentElement.offsetWidth, u.height = u.parentElement.offsetHeight);
    let M = ["outline: none", "cursor: default"];
    if (E) {
      let e3 = u.width, n2 = u.height;
      M.push(`width: ${e3}px`), M.push(`height: ${n2}px`);
    } else
      M.push("width: 100%"), M.push("height: 100%");
    r.crisp && (M.push("image-rendering: pixelated"), M.push("image-rendering: crisp-edges")), u.style.cssText = M.join(";");
    let L = r.pixelDensity || window.devicePixelRatio;
    u.width *= L, u.height *= L, u.tabIndex = 0;
    let q = document.createElement("canvas");
    q.width = Hs, q.height = Hs;
    let Y = q.getContext("2d", { willReadFrequently: true }), U = Ds({ canvas: u, touchToMouse: r.touchToMouse, gamepads: r.gamepads, pixelDensity: r.pixelDensity, maxFPS: r.maxFPS }), Q2 = [], h = U.canvas().getContext("webgl", { antialias: true, depth: true, stencil: true, alpha: true, preserveDrawingBuffer: true });
    function Z(e3) {
      let n2 = {};
      return { cur: (s2) => {
        var _a21;
        let i = (_a21 = n2[s2]) != null ? _a21 : [];
        return i[i.length - 1];
      }, push: (s2, i) => {
        n2[s2] || (n2[s2] = []), n2[s2].push(i), e3(s2, i);
      }, pop: (s2) => {
        var _a21;
        let i = n2[s2];
        if (!i)
          throw new Error(`Unknown WebGL type: ${s2}`);
        if (i.length <= 0)
          throw new Error("Can't unbind texture when there's no texture bound");
        i.pop(), e3(s2, (_a21 = i[i.length - 1]) != null ? _a21 : null);
      } };
    }
    __name(Z, "Z");
    o(Z, "genBindFunc");
    let Pe = Z(h.bindTexture.bind(h)), ae = Z(h.bindFramebuffer.bind(h)), de = Z(h.bindRenderbuffer.bind(h));
    const _pe = class {
      constructor(n2, s2, i = {}) {
        __publicField(this, "src", null);
        __publicField(this, "glTex");
        __publicField(this, "width");
        __publicField(this, "height");
        this.glTex = h.createTexture(), Q2.push(() => this.free()), this.bind(), n2 && s2 && h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, n2, s2, 0, h.RGBA, h.UNSIGNED_BYTE, null), this.width = n2, this.height = s2;
        let a2 = (() => {
          var _a21;
          switch ((_a21 = i.filter) != null ? _a21 : r.texFilter) {
            case "linear":
              return h.LINEAR;
            case "nearest":
              return h.NEAREST;
            default:
              return h.NEAREST;
          }
        })(), c2 = (() => {
          switch (i.wrap) {
            case "repeat":
              return h.REPEAT;
            case "clampToEdge":
              return h.CLAMP_TO_EDGE;
            default:
              return h.CLAMP_TO_EDGE;
          }
        })();
        h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, a2), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, a2), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, c2), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, c2), this.unbind();
      }
      static fromImage(n2, s2 = {}) {
        let i = new _pe(0, 0, s2);
        return i.bind(), h.texImage2D(h.TEXTURE_2D, 0, h.RGBA, h.RGBA, h.UNSIGNED_BYTE, n2), i.width = n2.width, i.height = n2.height, i.unbind(), i.src = n2, i;
      }
      update(n2, s2 = 0, i = 0) {
        this.bind(), h.texSubImage2D(h.TEXTURE_2D, 0, s2, i, h.RGBA, h.UNSIGNED_BYTE, n2), this.unbind();
      }
      bind() {
        Pe.push(h.TEXTURE_2D, this.glTex);
      }
      unbind() {
        Pe.pop(h.TEXTURE_2D);
      }
      free() {
        h.deleteTexture(this.glTex);
      }
    };
    let pe = _pe;
    __name(pe, "pe");
    (() => {
      o(_pe, "Texture");
    })();
    const _G = class extends Error {
      constructor(n2) {
        super(n2), this.name = "KaboomError";
      }
    };
    let G = _G;
    __name(G, "G");
    (() => {
      o(_G, "KaboomError");
    })();
    const _Xe = class {
      constructor(n2, s2) {
        __publicField(this, "tex");
        __publicField(this, "canvas");
        __publicField(this, "ctx");
        __publicField(this, "x", 0);
        __publicField(this, "y", 0);
        __publicField(this, "curHeight", 0);
        this.canvas = document.createElement("canvas"), this.canvas.width = n2, this.canvas.height = s2, this.tex = pe.fromImage(this.canvas), this.ctx = this.canvas.getContext("2d");
      }
      add(n2) {
        if (n2.width > this.canvas.width || n2.height > this.canvas.height)
          throw new G(`Texture size (${n2.width} x ${n2.height}) exceeds limit (${this.canvas.width} x ${this.canvas.height})`);
        this.x + n2.width > this.canvas.width && (this.x = 0, this.y += this.curHeight, this.curHeight = 0), this.y + n2.height > this.canvas.height && (this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.tex = pe.fromImage(this.canvas), this.x = 0, this.y = 0, this.curHeight = 0);
        let s2 = new x(this.x, this.y);
        return this.x += n2.width, n2.height > this.curHeight && (this.curHeight = n2.height), n2 instanceof ImageData ? this.ctx.putImageData(n2, s2.x, s2.y) : this.ctx.drawImage(n2, s2.x, s2.y), this.tex.update(this.canvas), [this.tex, new re(s2.x / this.canvas.width, s2.y / this.canvas.height, n2.width / this.canvas.width, n2.height / this.canvas.height)];
      }
    };
    let Xe = _Xe;
    __name(Xe, "Xe");
    (() => {
      o(_Xe, "TexPacker");
    })();
    const _Ie = class {
      constructor(n2, s2, i = {}) {
        __publicField(this, "tex");
        __publicField(this, "glFramebuffer");
        __publicField(this, "glRenderbuffer");
        this.tex = new pe(n2, s2, i), this.glFramebuffer = h.createFramebuffer(), this.glRenderbuffer = h.createRenderbuffer(), Q2.push(() => this.free()), this.bind(), h.renderbufferStorage(h.RENDERBUFFER, h.DEPTH_STENCIL, n2, s2), h.framebufferTexture2D(h.FRAMEBUFFER, h.COLOR_ATTACHMENT0, h.TEXTURE_2D, this.tex.glTex, 0), h.framebufferRenderbuffer(h.FRAMEBUFFER, h.DEPTH_STENCIL_ATTACHMENT, h.RENDERBUFFER, this.glRenderbuffer), this.unbind();
      }
      get width() {
        return this.tex.width;
      }
      get height() {
        return this.tex.height;
      }
      toImageData() {
        let n2 = new Uint8ClampedArray(this.width * this.height * 4);
        this.bind(), h.readPixels(0, 0, this.width, this.height, h.RGBA, h.UNSIGNED_BYTE, n2), this.unbind();
        let s2 = this.width * 4, i = new Uint8Array(s2);
        for (let a2 = 0; a2 < (this.height / 2 | 0); a2++) {
          let c2 = a2 * s2, f = (this.height - a2 - 1) * s2;
          i.set(n2.subarray(c2, c2 + s2)), n2.copyWithin(c2, f, f + s2), n2.set(i, f);
        }
        return new ImageData(n2, this.width, this.height);
      }
      toDataURL() {
        let n2 = document.createElement("canvas"), s2 = n2.getContext("2d");
        return n2.width = this.width, n2.height = this.height, s2.putImageData(this.toImageData(), 0, 0), n2.toDataURL();
      }
      bind() {
        ae.push(h.FRAMEBUFFER, this.glFramebuffer), de.push(h.RENDERBUFFER, this.glRenderbuffer);
      }
      unbind() {
        ae.pop(h.FRAMEBUFFER), de.pop(h.RENDERBUFFER);
      }
      free() {
        h.deleteFramebuffer(this.glFramebuffer), h.deleteRenderbuffer(this.glRenderbuffer), this.tex.free();
      }
    };
    let Ie = _Ie;
    __name(Ie, "Ie");
    (() => {
      o(_Ie, "FrameBuffer");
    })();
    let b2 = (() => {
      var _a21, _b2, _c2;
      let e3 = oe(Hn, qn), n2 = pe.fromImage(new ImageData(new Uint8ClampedArray([255, 255, 255, 255]), 1, 1)), s2 = r.width && r.height ? new Ie(r.width * L * p, r.height * L * p) : new Ie(h.drawingBufferWidth, h.drawingBufferHeight), i = null, a2 = 1;
      r.background && (i = z.fromArray(r.background), a2 = (_a21 = r.background[3]) != null ? _a21 : 1, h.clearColor(i.r / 255, i.g / 255, i.b / 255, a2)), h.enable(h.BLEND), h.blendFuncSeparate(h.SRC_ALPHA, h.ONE_MINUS_SRC_ALPHA, h.ONE, h.ONE_MINUS_SRC_ALPHA);
      let c2 = h.createBuffer();
      h.bindBuffer(h.ARRAY_BUFFER, c2), h.bufferData(h.ARRAY_BUFFER, Xs * 4, h.DYNAMIC_DRAW), Js.reduce((m, l, g) => (h.vertexAttribPointer(g, l.size, h.FLOAT, false, Jt * 4, m), h.enableVertexAttribArray(g), m + l.size * 4), 0), h.bindBuffer(h.ARRAY_BUFFER, null);
      let f = h.createBuffer();
      h.bindBuffer(h.ELEMENT_ARRAY_BUFFER, f), h.bufferData(h.ELEMENT_ARRAY_BUFFER, Ws * 4, h.DYNAMIC_DRAW), h.bindBuffer(h.ELEMENT_ARRAY_BUFFER, null);
      let w = pe.fromImage(new ImageData(new Uint8ClampedArray([128, 128, 128, 255, 190, 190, 190, 255, 190, 190, 190, 255, 128, 128, 128, 255]), 2, 2), { wrap: "repeat", filter: "nearest" });
      return { drawCalls: 0, lastDrawCalls: 0, defShader: e3, curShader: e3, frameBuffer: s2, postShader: null, postShaderUniform: null, defTex: n2, curTex: n2, curUniform: {}, vbuf: c2, ibuf: f, vqueue: [], iqueue: [], transform: new Ue(), transformStack: [], bgTex: w, bgColor: i, bgAlpha: a2, width: (_b2 = r.width) != null ? _b2 : h.drawingBufferWidth / L / p, height: (_c2 = r.height) != null ? _c2 : h.drawingBufferHeight / L / p, viewport: { x: 0, y: 0, width: h.drawingBufferWidth, height: h.drawingBufferHeight }, fixed: false };
    })();
    const _ue = class {
      constructor(n2, s2, i = {}, a2 = null) {
        __publicField(this, "tex");
        __publicField(this, "frames", [new re(0, 0, 1, 1)]);
        __publicField(this, "anims", {});
        __publicField(this, "slice9", null);
        this.tex = n2, s2 && (this.frames = s2), this.anims = i, this.slice9 = a2;
      }
      get width() {
        return this.tex.width * this.frames[0].w;
      }
      get height() {
        return this.tex.height * this.frames[0].h;
      }
      static from(n2, s2 = {}) {
        return typeof n2 == "string" ? _ue.fromURL(n2, s2) : Promise.resolve(_ue.fromImage(n2, s2));
      }
      static fromImage(n2, s2 = {}) {
        let [i, a2] = N.packer.add(n2), c2 = s2.frames ? s2.frames.map((f) => new re(a2.x + f.x * a2.w, a2.y + f.y * a2.h, f.w * a2.w, f.h * a2.h)) : Et(s2.sliceX || 1, s2.sliceY || 1, a2.x, a2.y, a2.w, a2.h);
        return new _ue(i, c2, s2.anims, s2.slice9);
      }
      static fromURL(n2, s2 = {}) {
        return Je(n2).then((i) => _ue.fromImage(i, s2));
      }
    };
    let ue = _ue;
    __name(ue, "ue");
    (() => {
      o(_ue, "SpriteData");
    })();
    const _ge = class {
      constructor(n2) {
        __publicField(this, "buf");
        this.buf = n2;
      }
      static fromArrayBuffer(n2) {
        return new Promise((s2, i) => ee.ctx.decodeAudioData(n2, s2, i)).then((s2) => new _ge(s2));
      }
      static fromURL(n2) {
        return Vn(n2) ? _ge.fromArrayBuffer(Os(n2)) : en(n2).then((s2) => _ge.fromArrayBuffer(s2));
      }
    };
    let ge = _ge;
    __name(ge, "ge");
    (() => {
      o(_ge, "SoundData");
    })();
    let ee = (() => {
      let e3 = new (window.AudioContext || window.webkitAudioContext)(), n2 = e3.createGain();
      n2.connect(e3.destination);
      let s2 = new ge(Vi(e3));
      return e3.decodeAudioData(Is.buffer.slice(0)).then((i) => {
        s2.buf = i;
      }).catch((i) => {
        console.error("Failed to load burp: ", i);
      }), { ctx: e3, masterNode: n2, burpSnd: s2 };
    })();
    const _fe = class {
      constructor(n2) {
        __publicField(this, "loaded", false);
        __publicField(this, "data", null);
        __publicField(this, "error", null);
        __publicField(this, "onLoadEvents", new ye());
        __publicField(this, "onErrorEvents", new ye());
        __publicField(this, "onFinishEvents", new ye());
        n2.then((s2) => {
          this.data = s2, this.onLoadEvents.trigger(s2);
        }).catch((s2) => {
          if (this.error = s2, this.onErrorEvents.numListeners() > 0)
            this.onErrorEvents.trigger(s2);
          else
            throw s2;
        }).finally(() => {
          this.onFinishEvents.trigger(), this.loaded = true;
        });
      }
      static loaded(n2) {
        let s2 = new _fe(Promise.resolve(n2));
        return s2.data = n2, s2.loaded = true, s2;
      }
      onLoad(n2) {
        return this.loaded && this.data ? n2(this.data) : this.onLoadEvents.add(n2), this;
      }
      onError(n2) {
        return this.loaded && this.error ? n2(this.error) : this.onErrorEvents.add(n2), this;
      }
      onFinish(n2) {
        return this.loaded ? n2() : this.onFinishEvents.add(n2), this;
      }
      then(n2) {
        return this.onLoad(n2);
      }
      catch(n2) {
        return this.onError(n2);
      }
      finally(n2) {
        return this.onFinish(n2);
      }
    };
    let fe = _fe;
    __name(fe, "fe");
    (() => {
      o(_fe, "Asset");
    })();
    const _Ve = class {
      constructor() {
        __publicField(this, "assets", /* @__PURE__ */ new Map());
        __publicField(this, "lastUID", 0);
      }
      add(n2, s2) {
        let i = n2 != null ? n2 : this.lastUID++ + "", a2 = new fe(s2);
        return this.assets.set(i, a2), a2;
      }
      addLoaded(n2, s2) {
        let i = n2 != null ? n2 : this.lastUID++ + "", a2 = fe.loaded(s2);
        return this.assets.set(i, a2), a2;
      }
      get(n2) {
        return this.assets.get(n2);
      }
      progress() {
        if (this.assets.size === 0)
          return 1;
        let n2 = 0;
        return this.assets.forEach((s2) => {
          s2.loaded && n2++;
        }), n2 / this.assets.size;
      }
    };
    let Ve = _Ve;
    __name(Ve, "Ve");
    (() => {
      o(_Ve, "AssetBucket");
    })();
    let N = { urlPrefix: "", sprites: new Ve(), fonts: new Ve(), bitmapFonts: new Ve(), sounds: new Ve(), shaders: new Ve(), custom: new Ve(), packer: new Xe(Ks, zs), loaded: false }, A = { events: new Le(), objEvents: new Le(), root: gn([]), gravity: 0, scenes: {}, logs: [], cam: { pos: null, scale: new x(1), angle: 0, shake: 0, transform: new Ue() } };
    function at(e3) {
      return N.custom.add(null, e3);
    }
    __name(at, "at");
    o(at, "load");
    function Me() {
      let e3 = [N.sprites, N.sounds, N.shaders, N.fonts, N.bitmapFonts, N.custom];
      return e3.reduce((n2, s2) => n2 + s2.progress(), 0) / e3.length;
    }
    __name(Me, "Me");
    o(Me, "loadProgress");
    function Qt(e3) {
      return e3 !== void 0 && (N.urlPrefix = e3), N.urlPrefix;
    }
    __name(Qt, "Qt");
    o(Qt, "loadRoot");
    function ut(e3) {
      let n2 = N.urlPrefix + e3;
      return fetch(n2).then((s2) => {
        if (!s2.ok)
          throw new G(`Failed to fetch "${n2}"`);
        return s2;
      });
    }
    __name(ut, "ut");
    o(ut, "fetchURL");
    function We(e3) {
      return ut(e3).then((n2) => n2.json());
    }
    __name(We, "We");
    o(We, "fetchJSON");
    function Zt(e3) {
      return ut(e3).then((n2) => n2.text());
    }
    __name(Zt, "Zt");
    o(Zt, "fetchText");
    function en(e3) {
      return ut(e3).then((n2) => n2.arrayBuffer());
    }
    __name(en, "en");
    o(en, "fetchArrayBuffer");
    function Je(e3) {
      let n2 = new Image();
      return n2.crossOrigin = "anonymous", n2.src = Vn(e3) ? e3 : N.urlPrefix + e3, new Promise((s2, i) => {
        n2.onload = () => s2(n2), n2.onerror = () => i(new G(`Failed to load image from "${e3}"`));
      });
    }
    __name(Je, "Je");
    o(Je, "loadImg");
    function tn(e3, n2) {
      return N.custom.add(e3, We(n2));
    }
    __name(tn, "tn");
    o(tn, "loadJSON");
    const _Qe = class {
      constructor(n2, s2 = {}) {
        __publicField(this, "fontface");
        __publicField(this, "filter", _n);
        __publicField(this, "outline", null);
        var _a21;
        this.fontface = n2, this.filter = (_a21 = s2.filter) != null ? _a21 : _n, s2.outline && (this.outline = { width: 1, color: J(0, 0, 0) }, typeof s2.outline == "number" ? this.outline.width = s2.outline : typeof s2.outline == "object" && (s2.outline.width && (this.outline.width = s2.outline.width), s2.outline.color && (this.outline.color = s2.outline.color)));
      }
    };
    let Qe = _Qe;
    __name(Qe, "Qe");
    (() => {
      o(_Qe, "FontData");
    })();
    function nn(e3, n2, s2 = {}) {
      let i = new FontFace(e3, typeof n2 == "string" ? `url(${n2})` : n2);
      return document.fonts.add(i), N.fonts.add(e3, i.load().catch((a2) => {
        throw new G(`Failed to load font from "${n2}": ${a2}`);
      }).then((a2) => new Qe(a2, s2)));
    }
    __name(nn, "nn");
    o(nn, "loadFont");
    function sn(e3, n2, s2, i, a2 = {}) {
      return N.bitmapFonts.add(e3, Je(n2).then((c2) => {
        var _a21;
        return _e(pe.fromImage(c2, a2), s2, i, (_a21 = a2.chars) != null ? _a21 : js);
      }));
    }
    __name(sn, "sn");
    o(sn, "loadBitmapFont");
    function Et(e3 = 1, n2 = 1, s2 = 0, i = 0, a2 = 1, c2 = 1) {
      let f = [], w = a2 / e3, m = c2 / n2;
      for (let l = 0; l < n2; l++)
        for (let g = 0; g < e3; g++)
          f.push(new re(s2 + g * w, i + l * m, w, m));
      return f;
    }
    __name(Et, "Et");
    o(Et, "slice");
    function Ct(e3, n2) {
      return at(typeof n2 == "string" ? new Promise((s2, i) => {
        We(n2).then((a2) => {
          Ct(e3, a2).then(s2).catch(i);
        });
      }) : ue.from(e3).then((s2) => {
        let i = {};
        for (let a2 in n2) {
          let c2 = n2[a2], f = s2.frames[0], w = Ks * f.w, m = zs * f.h, l = c2.frames ? c2.frames.map((C) => new re(f.x + (c2.x + C.x) / w * f.w, f.y + (c2.y + C.y) / m * f.h, C.w / w * f.w, C.h / m * f.h)) : Et(c2.sliceX || 1, c2.sliceY || 1, f.x + c2.x / w * f.w, f.y + c2.y / m * f.h, c2.width / w * f.w, c2.height / m * f.h), g = new ue(s2.tex, l, c2.anims);
          N.sprites.addLoaded(a2, g), i[a2] = g;
        }
        return i;
      }));
    }
    __name(Ct, "Ct");
    o(Ct, "loadSpriteAtlas");
    function St(e3, n2 = {}) {
      let s2 = document.createElement("canvas"), i = e3[0].width, a2 = e3[0].height;
      s2.width = i * e3.length, s2.height = a2;
      let c2 = s2.getContext("2d");
      e3.forEach((w, m) => {
        w instanceof ImageData ? c2.putImageData(w, m * i, 0) : c2.drawImage(w, m * i, 0);
      });
      let f = c2.getImageData(0, 0, e3.length * i, a2);
      return ue.fromImage(f, __spreadProps(__spreadValues({}, n2), { sliceX: e3.length, sliceY: 1 }));
    }
    __name(St, "St");
    o(St, "createSpriteSheet");
    function Ne(e3, n2, s2 = { sliceX: 1, sliceY: 1, anims: {} }) {
      return Array.isArray(n2) ? n2.some((i) => typeof i == "string") ? N.sprites.add(e3, Promise.all(n2.map((i) => typeof i == "string" ? Je(i) : Promise.resolve(i))).then((i) => St(i, s2))) : N.sprites.addLoaded(e3, St(n2, s2)) : typeof n2 == "string" ? N.sprites.add(e3, ue.from(n2, s2)) : N.sprites.addLoaded(e3, ue.fromImage(n2, s2));
    }
    __name(Ne, "Ne");
    o(Ne, "loadSprite");
    function rn(e3, n2) {
      return N.sprites.add(e3, new Promise((s2) => __async(this, null, function* () {
        let i = typeof n2 == "string" ? yield We(n2) : n2, a2 = yield Promise.all(i.frames.map(Je)), c2 = document.createElement("canvas");
        c2.width = i.width, c2.height = i.height * i.frames.length;
        let f = c2.getContext("2d");
        a2.forEach((m, l) => {
          f.drawImage(m, 0, l * i.height);
        });
        let w = yield Ne(null, c2, { sliceY: i.frames.length, anims: i.anims });
        s2(w);
      })));
    }
    __name(rn, "rn");
    o(rn, "loadPedit");
    function on(e3, n2, s2) {
      typeof n2 == "string" && !s2 && (s2 = n2.replace(new RegExp(`${Ms(n2)}$`), "json"));
      let i = typeof s2 == "string" ? We(s2) : Promise.resolve(s2);
      return N.sprites.add(e3, i.then((a2) => {
        let c2 = a2.meta.size, f = a2.frames.map((m) => new re(m.frame.x / c2.w, m.frame.y / c2.h, m.frame.w / c2.w, m.frame.h / c2.h)), w = {};
        for (let m of a2.meta.frameTags)
          m.from === m.to ? w[m.name] = m.from : w[m.name] = { from: m.from, to: m.to, speed: 10, loop: true, pingpong: m.direction === "pingpong" };
        return ue.from(n2, { frames: f, anims: w });
      }));
    }
    __name(on, "on");
    o(on, "loadAseprite");
    function an(e3, n2, s2) {
      return N.shaders.addLoaded(e3, oe(n2, s2));
    }
    __name(an, "an");
    o(an, "loadShader");
    function un(e3, n2, s2) {
      let i = o((c2) => c2 ? Zt(c2) : Promise.resolve(null), "resolveUrl"), a2 = Promise.all([i(n2), i(s2)]).then(([c2, f]) => oe(c2, f));
      return N.shaders.add(e3, a2);
    }
    __name(un, "un");
    o(un, "loadShaderURL");
    function cn(e3, n2) {
      return N.sounds.add(e3, typeof n2 == "string" ? ge.fromURL(n2) : ge.fromArrayBuffer(n2));
    }
    __name(cn, "cn");
    o(cn, "loadSound");
    function ln(e3 = "bean") {
      return Ne(e3, Ls);
    }
    __name(ln, "ln");
    o(ln, "loadBean");
    function Tt(e3) {
      return N.sprites.get(e3);
    }
    __name(Tt, "Tt");
    o(Tt, "getSprite");
    function At(e3) {
      return N.sounds.get(e3);
    }
    __name(At, "At");
    o(At, "getSound");
    function Ot(e3) {
      return N.fonts.get(e3);
    }
    __name(Ot, "Ot");
    o(Ot, "getFont");
    function Pt(e3) {
      return N.bitmapFonts.get(e3);
    }
    __name(Pt, "Pt");
    o(Pt, "getBitmapFont");
    function Mt(e3) {
      return N.shaders.get(e3);
    }
    __name(Mt, "Mt");
    o(Mt, "getShader");
    function hn(e3) {
      return N.custom.get(e3);
    }
    __name(hn, "hn");
    o(hn, "getAsset");
    function ct(e3) {
      if (typeof e3 == "string") {
        let n2 = Tt(e3);
        if (n2)
          return n2;
        if (Me() < 1)
          return null;
        throw new G(`Sprite not found: ${e3}`);
      } else {
        if (e3 instanceof ue)
          return fe.loaded(e3);
        if (e3 instanceof fe)
          return e3;
        throw new G(`Invalid sprite: ${e3}`);
      }
    }
    __name(ct, "ct");
    o(ct, "resolveSprite");
    function Rt(e3) {
      if (typeof e3 == "string") {
        let n2 = At(e3);
        if (n2)
          return n2;
        if (Me() < 1)
          return null;
        throw new G(`Sound not found: ${e3}`);
      } else {
        if (e3 instanceof ge)
          return fe.loaded(e3);
        if (e3 instanceof fe)
          return e3;
        throw new G(`Invalid sound: ${e3}`);
      }
    }
    __name(Rt, "Rt");
    o(Rt, "resolveSound");
    function dn(e3) {
      var _a21;
      if (!e3)
        return b2.defShader;
      if (typeof e3 == "string") {
        let n2 = Mt(e3);
        if (n2)
          return (_a21 = n2.data) != null ? _a21 : n2;
        if (Me() < 1)
          return null;
        throw new G(`Shader not found: ${e3}`);
      } else if (e3 instanceof fe)
        return e3.data ? e3.data : e3;
      return e3;
    }
    __name(dn, "dn");
    o(dn, "resolveShader");
    function Dt(e3) {
      var _a21, _b2, _c2;
      if (!e3)
        return Dt((_a21 = r.font) != null ? _a21 : Oi);
      if (typeof e3 == "string") {
        let n2 = Pt(e3), s2 = Ot(e3);
        if (n2)
          return (_b2 = n2.data) != null ? _b2 : n2;
        if (s2)
          return (_c2 = s2.data) != null ? _c2 : s2;
        if (document.fonts.check(`${_s}px ${e3}`))
          return e3;
        if (Me() < 1)
          return null;
        throw new G(`Font not found: ${e3}`);
      } else if (e3 instanceof fe)
        return e3.data ? e3.data : e3;
      return e3;
    }
    __name(Dt, "Dt");
    o(Dt, "resolveFont");
    function Gt(e3) {
      return e3 !== void 0 && (ee.masterNode.gain.value = e3), ee.masterNode.gain.value;
    }
    __name(Gt, "Gt");
    o(Gt, "volume");
    function Ft(e3, n2 = {}) {
      var _a21, _b2, _c2, _d, _e2;
      let s2 = ee.ctx, i = (_a21 = n2.paused) != null ? _a21 : false, a2 = s2.createBufferSource(), c2 = new ye(), f = s2.createGain(), w = (_b2 = n2.seek) != null ? _b2 : 0, m = 0, l = 0, g = false;
      a2.loop = !!n2.loop, a2.detune.value = (_c2 = n2.detune) != null ? _c2 : 0, a2.playbackRate.value = (_d = n2.speed) != null ? _d : 1, a2.connect(f), a2.onended = () => {
        var _a22;
        k() >= ((_a22 = a2.buffer) == null ? void 0 : _a22.duration) && c2.trigger();
      }, f.connect(ee.masterNode), f.gain.value = (_e2 = n2.volume) != null ? _e2 : 1;
      let C = o((R) => {
        a2.buffer = R.buf, i || (m = s2.currentTime, a2.start(0, w), g = true);
      }, "start"), P3 = Rt(e3);
      P3 instanceof fe && P3.onLoad(C);
      let k = o(() => {
        if (!a2.buffer)
          return 0;
        let R = i ? l - m : s2.currentTime - m, O = a2.buffer.duration;
        return a2.loop ? R % O : Math.min(R, O);
      }, "getTime"), j = o((R) => {
        let O = s2.createBufferSource();
        return O.buffer = R.buffer, O.loop = R.loop, O.playbackRate.value = R.playbackRate.value, O.detune.value = R.detune.value, O.onended = R.onended, O.connect(f), O;
      }, "cloneNode");
      return { stop() {
        this.paused = true, this.seek(0);
      }, set paused(R) {
        if (i !== R)
          if (i = R, R)
            g && (a2.stop(), g = false), l = s2.currentTime;
          else {
            a2 = j(a2);
            let O = l - m;
            a2.start(0, O), g = true, m = s2.currentTime - O, l = 0;
          }
      }, get paused() {
        return i;
      }, play(R = 0) {
        this.seek(R), this.paused = false;
      }, seek(R) {
        var _a22;
        ((_a22 = a2.buffer) == null ? void 0 : _a22.duration) && (R > a2.buffer.duration || (i ? (a2 = j(a2), m = l - R) : (a2.stop(), a2 = j(a2), m = s2.currentTime - R, a2.start(0, R), g = true, l = 0)));
      }, set speed(R) {
        a2.playbackRate.value = R;
      }, get speed() {
        return a2.playbackRate.value;
      }, set detune(R) {
        a2.detune.value = R;
      }, get detune() {
        return a2.detune.value;
      }, set volume(R) {
        f.gain.value = Math.max(R, 0);
      }, get volume() {
        return f.gain.value;
      }, set loop(R) {
        a2.loop = R;
      }, get loop() {
        return a2.loop;
      }, duration() {
        var _a22, _b3;
        return (_b3 = (_a22 = a2.buffer) == null ? void 0 : _a22.duration) != null ? _b3 : 0;
      }, time() {
        return k() % this.duration();
      }, onEnd(R) {
        return c2.add(R);
      }, then(R) {
        return this.onEnd(R);
      } };
    }
    __name(Ft, "Ft");
    o(Ft, "play");
    function Bt(e3) {
      return Ft(ee.burpSnd, e3);
    }
    __name(Bt, "Bt");
    o(Bt, "burp");
    function oe(e3 = Hn, n2 = qn) {
      let s2 = Gi.replace("{{user}}", e3 != null ? e3 : Hn), i = Fi.replace("{{user}}", n2 != null ? n2 : qn), a2 = h.createShader(h.VERTEX_SHADER), c2 = h.createShader(h.FRAGMENT_SHADER);
      h.shaderSource(a2, s2), h.shaderSource(c2, i), h.compileShader(a2), h.compileShader(c2);
      let f = h.createProgram();
      if (Q2.push(() => h.deleteProgram(f)), h.attachShader(f, a2), h.attachShader(f, c2), h.bindAttribLocation(f, 0, "a_pos"), h.bindAttribLocation(f, 1, "a_uv"), h.bindAttribLocation(f, 2, "a_color"), h.linkProgram(f), !h.getProgramParameter(f, h.LINK_STATUS)) {
        let w = o((C) => {
          let P3 = new RegExp("^ERROR:\\s0:(?<line>\\d+):\\s(?<msg>.+)"), k = C.match(P3);
          return { line: Number(k.groups.line), msg: k.groups.msg.replace(/\n\0$/, "") };
        }, "formatShaderError"), m = h.getShaderInfoLog(a2), l = h.getShaderInfoLog(c2), g = "";
        if (m) {
          let C = w(m);
          g += `Vertex shader line ${C.line - 14}: ${C.msg}`;
        }
        if (l) {
          let C = w(l);
          g += `Fragment shader line ${C.line - 14}: ${C.msg}`;
        }
        throw new G(g);
      }
      return h.deleteShader(a2), h.deleteShader(c2), { bind() {
        h.useProgram(f);
      }, unbind() {
        h.useProgram(null);
      }, free() {
        h.deleteProgram(f);
      }, send(w) {
        for (let m in w) {
          let l = w[m], g = h.getUniformLocation(f, m);
          typeof l == "number" ? h.uniform1f(g, l) : l instanceof Ue ? h.uniformMatrix4fv(g, false, new Float32Array(l.m)) : l instanceof z ? h.uniform3f(g, l.r, l.g, l.b) : l instanceof x && h.uniform2f(g, l.x, l.y);
        }
      } };
    }
    __name(oe, "oe");
    o(oe, "makeShader");
    function _e(e3, n2, s2, i) {
      let a2 = e3.width / n2, c2 = {}, f = i.split("").entries();
      for (let [w, m] of f)
        c2[m] = new re(w % a2 * n2, Math.floor(w / a2) * s2, n2, s2);
      return { tex: e3, map: c2, size: s2 };
    }
    __name(_e, "_e");
    o(_e, "makeFont");
    function Se(e3, n2, s2, i = b2.defTex, a2 = b2.defShader, c2 = {}) {
      let f = dn(a2);
      if (!f || f instanceof fe)
        return;
      (i !== b2.curTex || f !== b2.curShader || !Bn(b2.curUniform, c2) || b2.vqueue.length + e3.length * Jt > Xs || b2.iqueue.length + n2.length > Ws) && Ee();
      let w = b2.fixed || s2 ? b2.transform : A.cam.transform.mult(b2.transform);
      for (let m of e3) {
        let l = Lt(w.multVec2(m.pos));
        b2.vqueue.push(l.x, l.y, m.uv.x, m.uv.y, m.color.r / 255, m.color.g / 255, m.color.b / 255, m.opacity);
      }
      for (let m of n2)
        b2.iqueue.push(m + b2.vqueue.length / Jt - e3.length);
      b2.curTex = i, b2.curShader = f, b2.curUniform = c2;
    }
    __name(Se, "Se");
    o(Se, "drawRaw");
    function Ee() {
      !b2.curTex || !b2.curShader || b2.vqueue.length === 0 || b2.iqueue.length === 0 || (h.bindBuffer(h.ARRAY_BUFFER, b2.vbuf), h.bufferSubData(h.ARRAY_BUFFER, 0, new Float32Array(b2.vqueue)), h.bindBuffer(h.ELEMENT_ARRAY_BUFFER, b2.ibuf), h.bufferSubData(h.ELEMENT_ARRAY_BUFFER, 0, new Uint16Array(b2.iqueue)), b2.curShader.bind(), b2.curShader.send(b2.curUniform), b2.curTex.bind(), h.drawElements(h.TRIANGLES, b2.iqueue.length, h.UNSIGNED_SHORT, 0), b2.curTex.unbind(), b2.curShader.unbind(), h.bindBuffer(h.ARRAY_BUFFER, null), h.bindBuffer(h.ELEMENT_ARRAY_BUFFER, null), b2.vqueue.length = 0, b2.iqueue.length = 0, b2.drawCalls++);
    }
    __name(Ee, "Ee");
    o(Ee, "flush");
    function lt() {
      h.clear(h.COLOR_BUFFER_BIT), b2.frameBuffer.bind(), h.viewport(0, 0, b2.frameBuffer.width, b2.frameBuffer.height), h.clear(h.COLOR_BUFFER_BIT), b2.bgColor || ke(() => {
        we({ width: be(), height: ve(), quad: new re(0, 0, be() / Ns, ve() / Ns), tex: b2.bgTex, fixed: true });
      }), b2.drawCalls = 0, b2.fixed = false, b2.transformStack.length = 0, b2.transform = new Ue();
    }
    __name(lt, "lt");
    o(lt, "frameStart");
    function fn(e3, n2) {
      b2.postShader = e3, b2.postShaderUniform = n2 != null ? n2 : null;
    }
    __name(fn, "fn");
    o(fn, "usePostEffect");
    function ht() {
      Ee(), b2.lastDrawCalls = b2.drawCalls, b2.frameBuffer.unbind(), h.viewport(0, 0, h.drawingBufferWidth, h.drawingBufferHeight);
      let e3 = b2.width, n2 = b2.height;
      b2.width = h.drawingBufferWidth / L, b2.height = h.drawingBufferHeight / L, Te({ flipY: true, tex: b2.frameBuffer.tex, pos: new x(b2.viewport.x, b2.viewport.y), width: b2.viewport.width, height: b2.viewport.height, shader: b2.postShader, uniform: typeof b2.postShaderUniform == "function" ? b2.postShaderUniform() : b2.postShaderUniform, fixed: true }), Ee(), b2.width = e3, b2.height = n2;
    }
    __name(ht, "ht");
    o(ht, "frameEnd");
    function Lt(e3) {
      return new x(e3.x / be() * 2 - 1, -e3.y / ve() * 2 + 1);
    }
    __name(Lt, "Lt");
    o(Lt, "screen2ndc");
    function d2(e3) {
      b2.transform = e3.clone();
    }
    __name(d2, "d");
    o(d2, "pushMatrix");
    function v3(...e3) {
      if (e3[0] === void 0)
        return;
      let n2 = S(...e3);
      n2.x === 0 && n2.y === 0 || b2.transform.translate(n2);
    }
    __name(v3, "v");
    o(v3, "pushTranslate");
    function T(...e3) {
      if (e3[0] === void 0)
        return;
      let n2 = S(...e3);
      n2.x === 1 && n2.y === 1 || b2.transform.scale(n2);
    }
    __name(T, "T");
    o(T, "pushScale");
    function I(e3) {
      e3 && b2.transform.rotate(e3);
    }
    __name(I, "I");
    o(I, "pushRotate");
    function K() {
      b2.transformStack.push(b2.transform.clone());
    }
    __name(K, "K");
    o(K, "pushTransform");
    function _() {
      b2.transformStack.length > 0 && (b2.transform = b2.transformStack.pop());
    }
    __name(_, "_");
    o(_, "popTransform");
    function we(e3) {
      var _a21;
      if (e3.width === void 0 || e3.height === void 0)
        throw new G('drawUVQuad() requires property "width" and "height".');
      if (e3.width <= 0 || e3.height <= 0)
        return;
      let n2 = e3.width, s2 = e3.height, a2 = ot(e3.anchor || Xt).scale(new x(n2, s2).scale(-0.5)), c2 = e3.quad || new re(0, 0, 1, 1), f = e3.color || J(255, 255, 255), w = (_a21 = e3.opacity) != null ? _a21 : 1, m = e3.tex ? Ys / e3.tex.width : 0, l = e3.tex ? Ys / e3.tex.height : 0, g = c2.x + m, C = c2.y + l, P3 = c2.w - m * 2, k = c2.h - l * 2;
      K(), v3(e3.pos), I(e3.angle), T(e3.scale), v3(a2), Se([{ pos: new x(-n2 / 2, s2 / 2), uv: new x(e3.flipX ? g + P3 : g, e3.flipY ? C : C + k), color: f, opacity: w }, { pos: new x(-n2 / 2, -s2 / 2), uv: new x(e3.flipX ? g + P3 : g, e3.flipY ? C + k : C), color: f, opacity: w }, { pos: new x(n2 / 2, -s2 / 2), uv: new x(e3.flipX ? g : g + P3, e3.flipY ? C + k : C), color: f, opacity: w }, { pos: new x(n2 / 2, s2 / 2), uv: new x(e3.flipX ? g : g + P3, e3.flipY ? C : C + k), color: f, opacity: w }], [0, 1, 3, 1, 2, 3], e3.fixed, e3.tex, e3.shader, e3.uniform), _();
    }
    __name(we, "we");
    o(we, "drawUVQuad");
    function Te(e3) {
      var _a21;
      if (!e3.tex)
        throw new G('drawTexture() requires property "tex".');
      let n2 = (_a21 = e3.quad) != null ? _a21 : new re(0, 0, 1, 1), s2 = e3.tex.width * n2.w, i = e3.tex.height * n2.h, a2 = new x(1);
      if (e3.tiled) {
        let c2 = Math.ceil((e3.width || s2) / s2), f = Math.ceil((e3.height || i) / i), m = ot(e3.anchor || Xt).add(new x(1, 1)).scale(0.5).scale(c2 * s2, f * i);
        for (let l = 0; l < c2; l++)
          for (let g = 0; g < f; g++)
            we(Object.assign({}, e3, { pos: (e3.pos || new x(0)).add(new x(s2 * l, i * g)).sub(m), scale: a2.scale(e3.scale || new x(1)), tex: e3.tex, quad: n2, width: s2, height: i, anchor: "topleft" }));
      } else
        e3.width && e3.height ? (a2.x = e3.width / s2, a2.y = e3.height / i) : e3.width ? (a2.x = e3.width / s2, a2.y = a2.x) : e3.height && (a2.y = e3.height / i, a2.x = a2.y), we(Object.assign({}, e3, { scale: a2.scale(e3.scale || new x(1)), tex: e3.tex, quad: n2, width: s2, height: i }));
    }
    __name(Te, "Te");
    o(Te, "drawTexture");
    function mn(e3) {
      var _a21, _b2, _c2;
      if (!e3.sprite)
        throw new G('drawSprite() requires property "sprite"');
      let n2 = ct(e3.sprite);
      if (!n2 || !n2.data)
        return;
      let s2 = n2.data.frames[(_a21 = e3.frame) != null ? _a21 : 0];
      if (!s2)
        throw new G(`Frame not found: ${(_b2 = e3.frame) != null ? _b2 : 0}`);
      Te(Object.assign({}, e3, { tex: n2.data.tex, quad: s2.scale((_c2 = e3.quad) != null ? _c2 : new re(0, 0, 1, 1)) }));
    }
    __name(mn, "mn");
    o(mn, "drawSprite");
    function xe(e3, n2, s2, i, a2, c2 = 1) {
      i = Ae(i % 360), a2 = Ae(a2 % 360), a2 <= i && (a2 += Math.PI * 2);
      let f = [], w = Math.ceil((a2 - i) / Ae(8) * c2), m = (a2 - i) / w;
      for (let l = i; l < a2; l += m)
        f.push(e3.add(n2 * Math.cos(l), s2 * Math.sin(l)));
      return f.push(e3.add(n2 * Math.cos(a2), s2 * Math.sin(a2))), f;
    }
    __name(xe, "xe");
    o(xe, "getArcPts");
    function me(e3) {
      if (e3.width === void 0 || e3.height === void 0)
        throw new G('drawRect() requires property "width" and "height".');
      if (e3.width <= 0 || e3.height <= 0)
        return;
      let n2 = e3.width, s2 = e3.height, a2 = ot(e3.anchor || Xt).add(1, 1).scale(new x(n2, s2).scale(-0.5)), c2 = [new x(0, 0), new x(n2, 0), new x(n2, s2), new x(0, s2)];
      if (e3.radius) {
        let f = Math.min(Math.min(n2, s2) / 2, e3.radius);
        c2 = [new x(f, 0), new x(n2 - f, 0), ...xe(new x(n2 - f, f), f, f, 270, 360), new x(n2, f), new x(n2, s2 - f), ...xe(new x(n2 - f, s2 - f), f, f, 0, 90), new x(n2 - f, s2), new x(f, s2), ...xe(new x(f, s2 - f), f, f, 90, 180), new x(0, s2 - f), new x(0, f), ...xe(new x(f, f), f, f, 180, 270)];
      }
      He(Object.assign({}, e3, __spreadValues({ offset: a2, pts: c2 }, e3.gradient ? { colors: e3.horizontal ? [e3.gradient[0], e3.gradient[1], e3.gradient[1], e3.gradient[0]] : [e3.gradient[0], e3.gradient[0], e3.gradient[1], e3.gradient[1]] } : {})));
    }
    __name(me, "me");
    o(me, "drawRect");
    function dt2(e3) {
      let { p1: n2, p2: s2 } = e3;
      if (!n2 || !s2)
        throw new G('drawLine() requires properties "p1" and "p2".');
      let i = e3.width || 1, a2 = s2.sub(n2).unit().normal().scale(i * 0.5), c2 = [n2.sub(a2), n2.add(a2), s2.add(a2), s2.sub(a2)].map((f) => {
        var _a21, _b2;
        return { pos: new x(f.x, f.y), uv: new x(0), color: (_a21 = e3.color) != null ? _a21 : z.WHITE, opacity: (_b2 = e3.opacity) != null ? _b2 : 1 };
      });
      Se(c2, [0, 1, 3, 1, 2, 3], e3.fixed, b2.defTex, e3.shader, e3.uniform);
    }
    __name(dt2, "dt");
    o(dt2, "drawLine");
    function $n(e3) {
      let n2 = e3.pts;
      if (!n2)
        throw new G('drawLines() requires property "pts".');
      if (!(n2.length < 2))
        if (e3.radius && n2.length >= 3) {
          let s2 = n2[0].sdist(n2[1]);
          for (let a2 = 1; a2 < n2.length - 1; a2++)
            s2 = Math.min(n2[a2].sdist(n2[a2 + 1]), s2);
          let i = Math.min(e3.radius, Math.sqrt(s2) / 2);
          dt2(Object.assign({}, e3, { p1: n2[0], p2: n2[1] }));
          for (let a2 = 1; a2 < n2.length - 2; a2++) {
            let c2 = n2[a2], f = n2[a2 + 1];
            dt2(Object.assign({}, e3, { p1: c2, p2: f }));
          }
          dt2(Object.assign({}, e3, { p1: n2[n2.length - 2], p2: n2[n2.length - 1] }));
        } else
          for (let s2 = 0; s2 < n2.length - 1; s2++)
            dt2(Object.assign({}, e3, { p1: n2[s2], p2: n2[s2 + 1] })), e3.join !== "none" && Ze(Object.assign({}, e3, { pos: n2[s2], radius: e3.width / 2 }));
    }
    __name($n, "$n");
    o($n, "drawLines");
    function Kn(e3) {
      if (!e3.p1 || !e3.p2 || !e3.p3)
        throw new G('drawPolygon() requires properties "p1", "p2" and "p3".');
      return He(Object.assign({}, e3, { pts: [e3.p1, e3.p2, e3.p3] }));
    }
    __name(Kn, "Kn");
    o(Kn, "drawTriangle");
    function Ze(e3) {
      if (typeof e3.radius != "number")
        throw new G('drawCircle() requires property "radius".');
      e3.radius !== 0 && zn(Object.assign({}, e3, { radiusX: e3.radius, radiusY: e3.radius, angle: 0 }));
    }
    __name(Ze, "Ze");
    o(Ze, "drawCircle");
    function zn(e3) {
      var _a21, _b2, _c2;
      if (e3.radiusX === void 0 || e3.radiusY === void 0)
        throw new G('drawEllipse() requires properties "radiusX" and "radiusY".');
      if (e3.radiusX === 0 || e3.radiusY === 0)
        return;
      let n2 = (_a21 = e3.start) != null ? _a21 : 0, s2 = (_b2 = e3.end) != null ? _b2 : 360, i = ot((_c2 = e3.anchor) != null ? _c2 : "center").scale(new x(-e3.radiusX, -e3.radiusY)), a2 = xe(i, e3.radiusX, e3.radiusY, n2, s2, e3.resolution);
      a2.unshift(i);
      let c2 = Object.assign({}, e3, __spreadValues({ pts: a2, radius: 0 }, e3.gradient ? { colors: [e3.gradient[0], ...Array(a2.length - 1).fill(e3.gradient[1])] } : {}));
      if (s2 - n2 >= 360 && e3.outline) {
        e3.fill !== false && He(Object.assign(c2, { outline: null })), He(Object.assign(c2, { pts: a2.slice(1), fill: false }));
        return;
      }
      He(c2);
    }
    __name(zn, "zn");
    o(zn, "drawEllipse");
    function He(e3) {
      var _a21, _b2;
      if (!e3.pts)
        throw new G('drawPolygon() requires property "pts".');
      let n2 = e3.pts.length;
      if (!(n2 < 3)) {
        if (K(), v3(e3.pos), T(e3.scale), I(e3.angle), v3(e3.offset), e3.fill !== false) {
          let s2 = (_a21 = e3.color) != null ? _a21 : z.WHITE, i = e3.pts.map((c2, f) => {
            var _a22, _b3;
            return { pos: new x(c2.x, c2.y), uv: new x(0, 0), color: e3.colors ? (_a22 = e3.colors[f]) != null ? _a22 : s2 : s2, opacity: (_b3 = e3.opacity) != null ? _b3 : 1 };
          }), a2 = [...Array(n2 - 2).keys()].map((c2) => [0, c2 + 1, c2 + 2]).flat();
          Se(i, (_b2 = e3.indices) != null ? _b2 : a2, e3.fixed, b2.defTex, e3.shader, e3.uniform);
        }
        e3.outline && $n({ pts: [...e3.pts, e3.pts[0]], radius: e3.radius, width: e3.outline.width, color: e3.outline.color, join: e3.outline.join, uniform: e3.uniform, fixed: e3.fixed, opacity: e3.opacity }), _();
      }
    }
    __name(He, "He");
    o(He, "drawPolygon");
    function Yn(e3, n2, s2) {
      Ee(), h.clear(h.STENCIL_BUFFER_BIT), h.enable(h.STENCIL_TEST), h.stencilFunc(h.NEVER, 1, 255), h.stencilOp(h.REPLACE, h.REPLACE, h.REPLACE), n2(), Ee(), h.stencilFunc(s2, 1, 255), h.stencilOp(h.KEEP, h.KEEP, h.KEEP), e3(), Ee(), h.disable(h.STENCIL_TEST);
    }
    __name(Yn, "Yn");
    o(Yn, "drawStenciled");
    function Xn(e3, n2) {
      Yn(e3, n2, h.EQUAL);
    }
    __name(Xn, "Xn");
    o(Xn, "drawMasked");
    function Wn(e3, n2) {
      Yn(e3, n2, h.NOTEQUAL);
    }
    __name(Wn, "Wn");
    o(Wn, "drawSubtracted");
    function Jn() {
      return (b2.viewport.width + b2.viewport.height) / (b2.width + b2.height);
    }
    __name(Jn, "Jn");
    o(Jn, "getViewportScale");
    function ke(e3) {
      Ee();
      let n2 = b2.width, s2 = b2.height;
      b2.width = b2.viewport.width, b2.height = b2.viewport.height, e3(), Ee(), b2.width = n2, b2.height = s2;
    }
    __name(ke, "ke");
    o(ke, "drawUnscaled");
    function Qn(e3, n2) {
      n2.pos && (e3.pos = e3.pos.add(n2.pos)), n2.scale && (e3.scale = e3.scale.scale(S(n2.scale))), n2.angle && (e3.angle += n2.angle), n2.color && (e3.color = e3.color.mult(n2.color)), n2.opacity && (e3.opacity *= n2.opacity);
    }
    __name(Qn, "Qn");
    o(Qn, "applyCharTransform");
    let Zn = new RegExp("\\[(?<style>\\w+)\\](?<text>.*?)\\[\\/\\k<style>\\]", "g");
    function Zs(e3) {
      let n2 = {}, s2 = e3.replace(Zn, "$2"), i = 0;
      for (let a2 of e3.matchAll(Zn)) {
        let c2 = a2.index - i;
        for (let f = 0; f < a2.groups.text.length; f++)
          n2[f + c2] = [a2.groups.style];
        i += a2[0].length - a2.groups.text.length;
      }
      return { charStyleMap: n2, text: s2 };
    }
    __name(Zs, "Zs");
    o(Zs, "compileStyledText");
    let pn = {};
    function qe(e3) {
      var _a21, _b2, _c2, _d, _e2, _f, _g, _h, _i, _j, _k;
      if (e3.text === void 0)
        throw new G('formatText() requires property "text".');
      let n2 = Dt(e3.font);
      if (e3.text === "" || n2 instanceof fe || !n2)
        return { width: 0, height: 0, chars: [], opt: e3 };
      let { charStyleMap: s2, text: i } = Zs(e3.text + ""), a2 = i.split("");
      if (n2 instanceof Qe || typeof n2 == "string") {
        let X = n2 instanceof Qe ? n2.fontface.family : n2, H = n2 instanceof Qe ? { outline: n2.outline, filter: n2.filter } : { outline: null, filter: _n }, V = (_a21 = pn[X]) != null ? _a21 : { font: { tex: new pe(qs, $s, { filter: H.filter }), map: {}, size: _s }, cursor: new x(0), outline: H.outline };
        pn[X] || (pn[X] = V), n2 = V.font;
        for (let le of a2)
          if (!V.font.map[le]) {
            let y = Y;
            y.clearRect(0, 0, q.width, q.height), y.font = `${n2.size}px ${X}`, y.textBaseline = "top", y.textAlign = "left", y.fillStyle = "#ffffff";
            let D = y.measureText(le), F = Math.ceil(D.width), B = n2.size;
            V.outline && (y.lineJoin = "round", y.lineWidth = V.outline.width * 2, y.strokeStyle = V.outline.color.toHex(), y.strokeText(le, V.outline.width, V.outline.width), F += V.outline.width * 2, B += V.outline.width * 3), y.fillText(le, (_c2 = (_b2 = V.outline) == null ? void 0 : _b2.width) != null ? _c2 : 0, (_e2 = (_d = V.outline) == null ? void 0 : _d.width) != null ? _e2 : 0);
            let $ = y.getImageData(0, 0, F, B);
            if (V.cursor.x + F > qs && (V.cursor.x = 0, V.cursor.y += B, V.cursor.y > $s))
              throw new G("Font atlas exceeds character limit");
            n2.tex.update($, V.cursor.x, V.cursor.y), n2.map[le] = new re(V.cursor.x, V.cursor.y, F, B), V.cursor.x += F;
          }
      }
      let c2 = e3.size || n2.size, f = S((_f = e3.scale) != null ? _f : 1).scale(c2 / n2.size), w = (_g = e3.lineSpacing) != null ? _g : 0, m = (_h = e3.letterSpacing) != null ? _h : 0, l = 0, g = 0, C = 0, P3 = [], k = [], j = 0, R = null, O = null;
      for (; j < a2.length; ) {
        let X = a2[j];
        if (X === `
`)
          C += c2 + w, P3.push({ width: l - m, chars: k }), R = null, O = null, l = 0, k = [];
        else {
          let H = n2.map[X];
          if (H) {
            let V = H.w * f.x;
            e3.width && l + V > e3.width && (C += c2 + w, R != null && (j -= k.length - R, X = a2[j], H = n2.map[X], V = H.w * f.x, k = k.slice(0, R - 1), l = O), R = null, O = null, P3.push({ width: l - m, chars: k }), l = 0, k = []), k.push({ tex: n2.tex, width: H.w, height: H.h, quad: new re(H.x / n2.tex.width, H.y / n2.tex.height, H.w / n2.tex.width, H.h / n2.tex.height), ch: X, pos: new x(l, C), opacity: (_i = e3.opacity) != null ? _i : 1, color: (_j = e3.color) != null ? _j : z.WHITE, scale: S(f), angle: 0 }), X === " " && (R = k.length, O = l), l += V, g = Math.max(g, l), l += m;
          }
        }
        j++;
      }
      P3.push({ width: l - m, chars: k }), C += c2, e3.width && (g = e3.width);
      let ne = [];
      for (let X of P3) {
        let H = (g - X.width) * Ii((_k = e3.align) != null ? _k : "left");
        for (let V of X.chars) {
          let le = n2.map[V.ch], y = ne.length;
          if (V.pos = V.pos.add(H, 0).add(le.w * f.x * 0.5, le.h * f.y * 0.5), e3.transform) {
            let D = typeof e3.transform == "function" ? e3.transform(y, V.ch) : e3.transform;
            D && Qn(V, D);
          }
          if (s2[y]) {
            let D = s2[y];
            for (let F of D) {
              let B = e3.styles[F], $ = typeof B == "function" ? B(y, V.ch) : B;
              $ && Qn(V, $);
            }
          }
          ne.push(V);
        }
      }
      return { width: g, height: C, chars: ne, opt: e3 };
    }
    __name(qe, "qe");
    o(qe, "formatText");
    function es(e3) {
      $e(qe(e3));
    }
    __name(es, "es");
    o(es, "drawText");
    function $e(e3) {
      var _a21;
      K(), v3(e3.opt.pos), I(e3.opt.angle), v3(ot((_a21 = e3.opt.anchor) != null ? _a21 : "topleft").add(1, 1).scale(e3.width, e3.height).scale(-0.5)), e3.chars.forEach((n2) => {
        we({ tex: n2.tex, width: n2.width, height: n2.height, pos: n2.pos, scale: n2.scale, angle: n2.angle, color: n2.color, opacity: n2.opacity, quad: n2.quad, anchor: "center", uniform: e3.opt.uniform, shader: e3.opt.shader, fixed: e3.opt.fixed });
      }), _();
    }
    __name($e, "$e");
    o($e, "drawFormattedText");
    function be() {
      return b2.width;
    }
    __name(be, "be");
    o(be, "width");
    function ve() {
      return b2.height;
    }
    __name(ve, "ve");
    o(ve, "height");
    let et = {};
    function er(e3) {
      return new x((e3.x - b2.viewport.x) * be() / b2.viewport.width, (e3.y - b2.viewport.y) * ve() / b2.viewport.height);
    }
    __name(er, "er");
    o(er, "windowToContent");
    function tr(e3) {
      return new x(e3.x * b2.viewport.width / b2.width, e3.y * b2.viewport.height / b2.height);
    }
    __name(tr, "tr");
    o(tr, "contentToView");
    function It() {
      return er(U.mousePos());
    }
    __name(It, "It");
    o(It, "mousePos"), et.error = (e3) => {
      e3.error && e3.error instanceof G ? Cn(e3.error) : e3 instanceof G && Cn(e3);
    }, et.unhandledrejection = (e3) => {
      e3.reason instanceof G && Cn(e3.reason);
    };
    for (let e3 in et)
      window.addEventListener(e3, et[e3]);
    let ts = false, te = { inspect: false, timeScale: 1, showLog: true, fps: () => U.fps(), numFrames: () => U.numFrames(), stepFrame: hs, drawCalls: () => b2.lastDrawCalls, clearLog: () => A.logs = [], log: (e3) => {
      var _a21;
      let n2 = (_a21 = r.logMax) != null ? _a21 : Ri;
      A.logs.unshift({ msg: e3, time: U.time() }), A.logs.length > n2 && (A.logs = A.logs.slice(0, n2));
    }, error: (e3) => te.log(new G(e3.toString ? e3.toString() : e3)), curRecording: null, numObjects: () => Un("*", { recursive: true }).length, get paused() {
      return ts;
    }, set paused(e3) {
      ts = e3, e3 ? ee.ctx.suspend() : ee.ctx.resume();
    } };
    function Ce() {
      return U.dt() * te.timeScale;
    }
    __name(Ce, "Ce");
    o(Ce, "dt");
    function nr(...e3) {
      return e3.length > 0 && (A.cam.pos = S(...e3)), A.cam.pos ? A.cam.pos.clone() : Ht();
    }
    __name(nr, "nr");
    o(nr, "camPos");
    function sr(...e3) {
      return e3.length > 0 && (A.cam.scale = S(...e3)), A.cam.scale.clone();
    }
    __name(sr, "sr");
    o(sr, "camScale");
    function rr(e3) {
      return e3 !== void 0 && (A.cam.angle = e3), A.cam.angle;
    }
    __name(rr, "rr");
    o(rr, "camRot");
    function ir(e3 = 12) {
      A.cam.shake += e3;
    }
    __name(ir, "ir");
    o(ir, "shake");
    function ns(e3) {
      return A.cam.transform.multVec2(e3);
    }
    __name(ns, "ns");
    o(ns, "toScreen");
    function ss(e3) {
      return A.cam.transform.invert().multVec2(e3);
    }
    __name(ss, "ss");
    o(ss, "toWorld");
    function Vt(e3) {
      let n2 = new Ue();
      return e3.pos && n2.translate(e3.pos), e3.scale && n2.scale(e3.scale), e3.angle && n2.rotate(e3.angle), e3.parent ? n2.mult(e3.parent.transform) : n2;
    }
    __name(Vt, "Vt");
    o(Vt, "calcTransform");
    function gn(e3 = []) {
      let n2 = /* @__PURE__ */ new Map(), s2 = {}, i = new Le(), a2 = [], c2 = null, f = false, w = { id: Rs(), hidden: false, transform: new Ue(), children: [], parent: null, set paused(l) {
        if (l !== f) {
          f = l;
          for (let g of a2)
            g.paused = l;
        }
      }, get paused() {
        return f;
      }, add(l = []) {
        let g = Array.isArray(l) ? gn(l) : l;
        if (g.parent)
          throw new G("Cannot add a game obj that already has a parent.");
        return g.parent = this, g.transform = Vt(g), this.children.push(g), g.trigger("add", g), A.events.trigger("add", g), g;
      }, readd(l) {
        let g = this.children.indexOf(l);
        return g !== -1 && (this.children.splice(g, 1), this.children.push(l)), l;
      }, remove(l) {
        let g = this.children.indexOf(l);
        if (g !== -1) {
          l.parent = null, this.children.splice(g, 1);
          let C = o((P3) => {
            P3.trigger("destroy"), A.events.trigger("destroy", P3), P3.children.forEach((k) => C(k));
          }, "trigger");
          C(l);
        }
      }, removeAll(l) {
        if (l)
          this.get(l).forEach((g) => this.remove(g));
        else
          for (let g of [...this.children])
            this.remove(g);
      }, update() {
        this.paused || (this.children.sort((l, g) => {
          var _a21, _b2;
          return ((_a21 = l.z) != null ? _a21 : 0) - ((_b2 = g.z) != null ? _b2 : 0);
        }).forEach((l) => l.update()), this.trigger("update"));
      }, draw() {
        if (this.hidden)
          return;
        let l = b2.fixed;
        this.fixed && (b2.fixed = true), K(), v3(this.pos), T(this.scale), I(this.angle);
        let g = this.children.sort((C, P3) => {
          var _a21, _b2;
          return ((_a21 = C.z) != null ? _a21 : 0) - ((_b2 = P3.z) != null ? _b2 : 0);
        });
        if (this.mask) {
          let C = { intersect: Xn, subtract: Wn }[this.mask];
          if (!C)
            throw new G(`Invalid mask func: "${this.mask}"`);
          C(() => {
            g.forEach((P3) => P3.draw());
          }, () => {
            this.trigger("draw");
          });
        } else
          this.trigger("draw"), g.forEach((C) => C.draw());
        _(), b2.fixed = l;
      }, drawInspect() {
        this.hidden || (K(), v3(this.pos), T(this.scale), I(this.angle), this.children.sort((l, g) => {
          var _a21, _b2;
          return ((_a21 = l.z) != null ? _a21 : 0) - ((_b2 = g.z) != null ? _b2 : 0);
        }).forEach((l) => l.drawInspect()), this.trigger("drawInspect"), _());
      }, use(l) {
        if (!l)
          return;
        if (typeof l == "string")
          return this.use({ id: l });
        let g = [];
        l.id && (this.unuse(l.id), s2[l.id] = [], g = s2[l.id], n2.set(l.id, l));
        for (let P3 in l) {
          if (Bi.has(P3))
            continue;
          let k = Object.getOwnPropertyDescriptor(l, P3);
          if (typeof k.value == "function" && (l[P3] = l[P3].bind(this)), k.set && Object.defineProperty(l, P3, { set: k.set.bind(this) }), k.get && Object.defineProperty(l, P3, { get: k.get.bind(this) }), Li.has(P3)) {
            let j = P3 === "add" ? () => {
              c2 = o((R) => g.push(R), "onCurCompCleanup"), l[P3](), c2 = null;
            } : l[P3];
            g.push(this.on(P3, j).cancel);
          } else if (this[P3] === void 0)
            Object.defineProperty(this, P3, { get: () => l[P3], set: (j) => l[P3] = j, configurable: true, enumerable: true }), g.push(() => delete this[P3]);
          else
            throw new G(`Duplicate component property: "${P3}"`);
        }
        let C = o(() => {
          if (l.require) {
            for (let P3 of l.require)
              if (!this.c(P3))
                throw new G(`Component "${l.id}" requires component "${P3}"`);
          }
        }, "checkDeps");
        l.destroy && g.push(l.destroy.bind(this)), this.exists() ? (C(), l.add && (c2 = o((P3) => g.push(P3), "onCurCompCleanup"), l.add.call(this), c2 = null)) : l.require && g.push(this.on("add", C).cancel);
      }, unuse(l) {
        s2[l] && (s2[l].forEach((g) => g()), delete s2[l]), n2.has(l) && n2.delete(l);
      }, c(l) {
        return n2.get(l);
      }, get(l, g = {}) {
        let C = g.recursive ? this.children.flatMap(o(/* @__PURE__ */ __name(function P3(k) {
          return [k, ...k.children.flatMap(P3)];
        }, "P"), "recurse")) : this.children;
        if (C = C.filter((P3) => l ? P3.is(l) : true), g.liveUpdate) {
          let P3 = o((j) => g.recursive ? this.isAncestorOf(j) : j.parent === this, "isChild"), k = [];
          k.push(bn((j) => {
            P3(j) && j.is(l) && C.push(j);
          })), k.push(rs((j) => {
            if (P3(j) && j.is(l)) {
              let R = C.findIndex((O) => O.id === j.id);
              R !== -1 && C.splice(R, 1);
            }
          })), this.onDestroy(() => {
            for (let j of k)
              j.cancel();
          });
        }
        return C;
      }, isAncestorOf(l) {
        return l.parent ? l.parent === this || this.isAncestorOf(l.parent) : false;
      }, exists() {
        return A.root.isAncestorOf(this);
      }, is(l) {
        if (l === "*")
          return true;
        if (Array.isArray(l)) {
          for (let g of l)
            if (!this.c(g))
              return false;
          return true;
        } else
          return this.c(l) != null;
      }, on(l, g) {
        let C = i.on(l, g.bind(this));
        return c2 && c2(() => C.cancel()), C;
      }, trigger(l, ...g) {
        i.trigger(l, ...g), A.objEvents.trigger(l, this, ...g);
      }, destroy() {
        this.parent && this.parent.remove(this);
      }, inspect() {
        let l = {};
        for (let [g, C] of n2)
          l[g] = C.inspect ? C.inspect() : null;
        return l;
      }, onAdd(l) {
        return this.on("add", l);
      }, onUpdate(l) {
        return this.on("update", l);
      }, onDraw(l) {
        return this.on("draw", l);
      }, onDestroy(l) {
        return this.on("destroy", l);
      }, clearEvents() {
        i.clear();
      } }, m = ["onKeyPress", "onKeyPressRepeat", "onKeyDown", "onKeyRelease", "onMousePress", "onMouseDown", "onMouseRelease", "onMouseMove", "onCharInput", "onMouseMove", "onTouchStart", "onTouchMove", "onTouchEnd", "onScroll", "onGamepadButtonPress", "onGamepadButtonDown", "onGamepadButtonRelease", "onGamepadStick"];
      for (let l of m)
        w[l] = (...g) => {
          let C = U[l](...g);
          return a2.push(C), w.onDestroy(() => C.cancel()), C;
        };
      for (let l of e3)
        w.use(l);
      return w;
    }
    __name(gn, "gn");
    o(gn, "make");
    function je(e3, n2, s2) {
      return A.objEvents[e3] || (A.objEvents[e3] = new xt()), A.objEvents.on(e3, (i, ...a2) => {
        i.is(n2) && s2(i, ...a2);
      });
    }
    __name(je, "je");
    o(je, "on");
    let wn = o((e3, n2) => {
      if (typeof e3 == "function" && n2 === void 0) {
        let s2 = pt([{ update: e3 }]);
        return { get paused() {
          return s2.paused;
        }, set paused(i) {
          s2.paused = i;
        }, cancel: () => s2.destroy() };
      } else if (typeof e3 == "string")
        return je("update", e3, n2);
    }, "onUpdate"), or = o((e3, n2) => {
      if (typeof e3 == "function" && n2 === void 0) {
        let s2 = pt([{ draw: e3 }]);
        return { get paused() {
          return s2.hidden;
        }, set paused(i) {
          s2.hidden = i;
        }, cancel: () => s2.destroy() };
      } else if (typeof e3 == "string")
        return je("draw", e3, n2);
    }, "onDraw");
    function bn(e3, n2) {
      if (typeof e3 == "function" && n2 === void 0)
        return A.events.on("add", e3);
      if (typeof e3 == "string")
        return je("add", e3, n2);
    }
    __name(bn, "bn");
    o(bn, "onAdd");
    function rs(e3, n2) {
      if (typeof e3 == "function" && n2 === void 0)
        return A.events.on("destroy", e3);
      if (typeof e3 == "string")
        return je("destroy", e3, n2);
    }
    __name(rs, "rs");
    o(rs, "onDestroy");
    function ar(e3, n2, s2) {
      return je("collide", e3, (i, a2, c2) => a2.is(n2) && s2(i, a2, c2));
    }
    __name(ar, "ar");
    o(ar, "onCollide");
    function ur(e3, n2, s2) {
      return je("collideUpdate", e3, (i, a2, c2) => a2.is(n2) && s2(i, a2, c2));
    }
    __name(ur, "ur");
    o(ur, "onCollideUpdate");
    function cr(e3, n2, s2) {
      return je("collideEnd", e3, (i, a2, c2) => a2.is(n2) && s2(i, a2, c2));
    }
    __name(cr, "cr");
    o(cr, "onCollideEnd");
    function kt(e3, n2) {
      Un(e3, { recursive: true }).forEach(n2), bn(e3, n2);
    }
    __name(kt, "kt");
    o(kt, "forAllCurrentAndFuture");
    function lr(e3, n2) {
      if (typeof e3 == "function")
        return U.onMousePress(e3);
      {
        let s2 = [];
        return kt(e3, (i) => {
          if (!i.area)
            throw new G("onClick() requires the object to have area() component");
          s2.push(i.onClick(() => n2(i)));
        }), Be.join(s2);
      }
    }
    __name(lr, "lr");
    o(lr, "onClick");
    function hr(e3, n2) {
      let s2 = [];
      return kt(e3, (i) => {
        if (!i.area)
          throw new G("onHover() requires the object to have area() component");
        s2.push(i.onHover(() => n2(i)));
      }), Be.join(s2);
    }
    __name(hr, "hr");
    o(hr, "onHover");
    function dr(e3, n2) {
      let s2 = [];
      return kt(e3, (i) => {
        if (!i.area)
          throw new G("onHoverUpdate() requires the object to have area() component");
        s2.push(i.onHoverUpdate(() => n2(i)));
      }), Be.join(s2);
    }
    __name(dr, "dr");
    o(dr, "onHoverUpdate");
    function fr(e3, n2) {
      let s2 = [];
      return kt(e3, (i) => {
        if (!i.area)
          throw new G("onHoverEnd() requires the object to have area() component");
        s2.push(i.onHoverEnd(() => n2(i)));
      }), Be.join(s2);
    }
    __name(fr, "fr");
    o(fr, "onHoverEnd");
    function jt(e3, n2) {
      let s2 = 0, i = [];
      n2 && i.push(n2);
      let a2 = wn(() => {
        s2 += Ce(), s2 >= e3 && (a2.cancel(), i.forEach((c2) => c2()));
      });
      return { paused: a2.paused, cancel: a2.cancel, onEnd(c2) {
        i.push(c2);
      }, then(c2) {
        return this.onEnd(c2), this;
      } };
    }
    __name(jt, "jt");
    o(jt, "wait");
    function mr(e3, n2) {
      let s2 = null, i = o(() => {
        s2 = jt(e3, i), n2();
      }, "newAction");
      return s2 = jt(0, i), { get paused() {
        return s2.paused;
      }, set paused(a2) {
        s2.paused = a2;
      }, cancel: () => s2.cancel() };
    }
    __name(mr, "mr");
    o(mr, "loop");
    function pr() {
      U.onKeyPress("f1", () => {
        te.inspect = !te.inspect;
      }), U.onKeyPress("f2", () => {
        te.clearLog();
      }), U.onKeyPress("f8", () => {
        te.paused = !te.paused;
      }), U.onKeyPress("f7", () => {
        te.timeScale = ft(Ge(te.timeScale - 0.2, 0, 2), 1);
      }), U.onKeyPress("f9", () => {
        te.timeScale = ft(Ge(te.timeScale + 0.2, 0, 2), 1);
      }), U.onKeyPress("f10", () => {
        te.stepFrame();
      });
    }
    __name(pr, "pr");
    o(pr, "enterDebugMode");
    function gr() {
      U.onKeyPress("b", () => Bt());
    }
    __name(gr, "gr");
    o(gr, "enterBurpMode");
    function wr(e3) {
      A.gravity = e3;
    }
    __name(wr, "wr");
    o(wr, "setGravity");
    function br() {
      return A.gravity;
    }
    __name(br, "br");
    o(br, "getGravity");
    function vr(...e3) {
      e3.length === 1 || e3.length === 2 ? (b2.bgColor = J(e3[0]), e3[1] && (b2.bgAlpha = e3[1])) : (e3.length === 3 || e3.length === 4) && (b2.bgColor = J(e3[0], e3[1], e3[2]), e3[3] && (b2.bgAlpha = e3[3])), h.clearColor(b2.bgColor.r / 255, b2.bgColor.g / 255, b2.bgColor.b / 255, b2.bgAlpha);
    }
    __name(vr, "vr");
    o(vr, "setBackground");
    function yr() {
      return b2.bgColor.clone();
    }
    __name(yr, "yr");
    o(yr, "getBackground");
    function Nt(...e3) {
      return { id: "pos", pos: S(...e3), moveBy(...n2) {
        this.pos = this.pos.add(S(...n2));
      }, move(...n2) {
        this.moveBy(S(...n2).scale(Ce()));
      }, moveTo(...n2) {
        if (typeof n2[0] == "number" && typeof n2[1] == "number")
          return this.moveTo(S(n2[0], n2[1]), n2[2]);
        let s2 = n2[0], i = n2[1];
        if (i === void 0) {
          this.pos = S(s2);
          return;
        }
        let a2 = s2.sub(this.pos);
        if (a2.len() <= i * Ce()) {
          this.pos = S(s2);
          return;
        }
        this.move(a2.unit().scale(i));
      }, worldPos() {
        return this.parent ? this.parent.transform.multVec2(this.pos) : this.pos;
      }, screenPos() {
        let n2 = this.worldPos();
        return mt(this) ? n2 : ns(n2);
      }, inspect() {
        return `(${Math.round(this.pos.x)}, ${Math.round(this.pos.y)})`;
      }, drawInspect() {
        Ze({ color: J(255, 0, 0), radius: 4 / Jn() });
      } };
    }
    __name(Nt, "Nt");
    o(Nt, "pos");
    function _t(...e3) {
      return e3.length === 0 ? _t(1) : { id: "scale", scale: S(...e3), scaleTo(...n2) {
        this.scale = S(...n2);
      }, scaleBy(...n2) {
        this.scale.scale(S(...n2));
      }, inspect() {
        return `(${ft(this.scale.x, 2)}, ${ft(this.scale.y, 2)})`;
      } };
    }
    __name(_t, "_t");
    o(_t, "scale");
    function xr(e3) {
      return { id: "rotate", angle: e3 != null ? e3 : 0, rotateBy(n2) {
        this.angle += n2;
      }, rotateTo(n2) {
        this.angle = n2;
      }, inspect() {
        return `${Math.round(this.angle)}`;
      } };
    }
    __name(xr, "xr");
    o(xr, "rotate");
    function Ur(...e3) {
      return { id: "color", color: J(...e3), inspect() {
        return this.color.toString();
      } };
    }
    __name(Ur, "Ur");
    o(Ur, "color");
    function ft(e3, n2) {
      return Number(e3.toFixed(n2));
    }
    __name(ft, "ft");
    o(ft, "toFixed");
    function Er(e3) {
      return { id: "opacity", opacity: e3 != null ? e3 : 1, inspect() {
        return `${ft(this.opacity, 1)}`;
      }, fadeOut(n2 = 1, s2 = it.linear) {
        return Sn(this.opacity, 0, n2, (i) => this.opacity = i, s2);
      } };
    }
    __name(Er, "Er");
    o(Er, "opacity");
    function vn(e3) {
      if (!e3)
        throw new G("Please define an anchor");
      return { id: "anchor", anchor: e3, inspect() {
        return typeof this.anchor == "string" ? this.anchor : this.anchor.toString();
      } };
    }
    __name(vn, "vn");
    o(vn, "anchor");
    function Cr(e3) {
      return { id: "z", z: e3, inspect() {
        return `${this.z}`;
      } };
    }
    __name(Cr, "Cr");
    o(Cr, "z");
    function Sr(e3, n2) {
      return { id: "follow", require: ["pos"], follow: { obj: e3, offset: n2 != null ? n2 : S(0) }, add() {
        e3.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
      }, update() {
        e3.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
      } };
    }
    __name(Sr, "Sr");
    o(Sr, "follow");
    function Tr(e3, n2) {
      let s2 = typeof e3 == "number" ? x.fromAngle(e3) : e3.unit();
      return { id: "move", require: ["pos"], update() {
        this.move(s2.scale(n2));
      } };
    }
    __name(Tr, "Tr");
    o(Tr, "move");
    let Ar = 200;
    function Or(e3 = {}) {
      var _a21;
      let n2 = (_a21 = e3.distance) != null ? _a21 : Ar, s2 = false;
      return { id: "offscreen", require: ["pos"], isOffScreen() {
        let i = this.screenPos(), a2 = new ce(S(0), be(), ve());
        return !bt(a2, i) && a2.sdistToPoint(i) > n2 * n2;
      }, onExitScreen(i) {
        return this.on("exitView", i);
      }, onEnterScreen(i) {
        return this.on("enterView", i);
      }, update() {
        this.isOffScreen() ? (s2 || (this.trigger("exitView"), s2 = true), e3.hide && (this.hidden = true), e3.pause && (this.paused = true), e3.destroy && this.destroy()) : (s2 && (this.trigger("enterView"), s2 = false), e3.hide && (this.hidden = false), e3.pause && (this.paused = false));
      } };
    }
    __name(Or, "Or");
    o(Or, "offscreen");
    function mt(e3) {
      return e3.fixed ? true : e3.parent ? mt(e3.parent) : false;
    }
    __name(mt, "mt");
    o(mt, "isFixed");
    function Pr(e3 = {}) {
      var _a21, _b2, _c2, _d;
      let n2 = {}, s2 = /* @__PURE__ */ new Set();
      return { id: "area", collisionIgnore: (_a21 = e3.collisionIgnore) != null ? _a21 : [], add() {
        this.area.cursor && this.onHover(() => U.setCursor(this.area.cursor)), this.onCollideUpdate((i, a2) => {
          n2[i.id] || this.trigger("collide", i, a2), n2[i.id] = a2, s2.add(i.id);
        });
      }, update() {
        for (let i in n2)
          s2.has(Number(i)) || (this.trigger("collideEnd", n2[i].target), delete n2[i]);
        s2.clear();
      }, drawInspect() {
        let i = this.localArea();
        K(), T(this.area.scale), v3(this.area.offset);
        let a2 = { outline: { width: 4 / Jn(), color: J(0, 0, 255) }, anchor: this.anchor, fill: false, fixed: mt(this) };
        i instanceof ce ? me(__spreadProps(__spreadValues({}, a2), { pos: i.pos, width: i.width, height: i.height })) : i instanceof Ye ? He(__spreadProps(__spreadValues({}, a2), { pts: i.pts })) : i instanceof vt && Ze(__spreadProps(__spreadValues({}, a2), { pos: i.center, radius: i.radius })), _();
      }, area: { shape: (_b2 = e3.shape) != null ? _b2 : null, scale: e3.scale ? S(e3.scale) : S(1), offset: (_c2 = e3.offset) != null ? _c2 : S(0), cursor: (_d = e3.cursor) != null ? _d : null }, isClicked() {
        return U.isMousePressed() && this.isHovering();
      }, isHovering() {
        let i = mt(this) ? It() : ss(It());
        return this.hasPoint(i);
      }, checkCollision(i) {
        var _a22;
        return (_a22 = n2[i.id]) != null ? _a22 : null;
      }, getCollisions() {
        return Object.values(n2);
      }, isColliding(i) {
        return !!n2[i.id];
      }, isOverlapping(i) {
        let a2 = n2[i.id];
        return a2 && a2.hasOverlap();
      }, onClick(i) {
        let a2 = U.onMousePress("left", () => {
          this.isHovering() && i();
        });
        return this.onDestroy(() => a2.cancel()), a2;
      }, onHover(i) {
        let a2 = false;
        return this.onUpdate(() => {
          a2 ? a2 = this.isHovering() : this.isHovering() && (a2 = true, i());
        });
      }, onHoverUpdate(i) {
        return this.onUpdate(() => {
          this.isHovering() && i();
        });
      }, onHoverEnd(i) {
        let a2 = false;
        return this.onUpdate(() => {
          a2 ? this.isHovering() || (a2 = false, i()) : a2 = this.isHovering();
        });
      }, onCollide(i, a2) {
        if (typeof i == "function" && a2 === void 0)
          return this.on("collide", i);
        if (typeof i == "string")
          return this.onCollide((c2, f) => {
            c2.is(i) && a2(c2, f);
          });
      }, onCollideUpdate(i, a2) {
        if (typeof i == "function" && a2 === void 0)
          return this.on("collideUpdate", i);
        if (typeof i == "string")
          return this.on("collideUpdate", (c2, f) => c2.is(i) && a2(c2, f));
      }, onCollideEnd(i, a2) {
        if (typeof i == "function" && a2 === void 0)
          return this.on("collideEnd", i);
        if (typeof i == "string")
          return this.on("collideEnd", (c2) => c2.is(i) && a2(c2));
      }, hasPoint(i) {
        return Fn(this.worldArea(), i);
      }, resolveCollision(i) {
        let a2 = this.checkCollision(i);
        a2 && !a2.resolved && (this.pos = this.pos.add(a2.displacement), a2.resolved = true);
      }, localArea() {
        return this.area.shape ? this.area.shape : this.renderArea();
      }, worldArea() {
        var _a22;
        let i = this.localArea();
        if (!(i instanceof Ye || i instanceof ce))
          throw new G("Only support polygon and rect shapes for now");
        let a2 = this.transform.clone().scale(S((_a22 = this.area.scale) != null ? _a22 : 1)).translate(this.area.offset);
        if (i instanceof ce) {
          let c2 = ot(this.anchor || Xt).add(1, 1).scale(-0.5).scale(i.width, i.height);
          a2.translate(c2);
        }
        return i.transform(a2);
      }, screenArea() {
        let i = this.worldArea();
        return mt(this) ? i : i.transform(A.cam.transform);
      } };
    }
    __name(Pr, "Pr");
    o(Pr, "area");
    function tt(e3) {
      return { color: e3.color, opacity: e3.opacity, anchor: e3.anchor, outline: e3.outline, shader: e3.shader, uniform: e3.uniform };
    }
    __name(tt, "tt");
    o(tt, "getRenderProps");
    function yn(e3, n2 = {}) {
      var _a21, _b2, _c2;
      let s2 = null, i = null, a2 = null, c2 = new ye();
      if (!e3)
        throw new G("Please pass the resource name or data to sprite()");
      let f = o((w, m, l, g) => {
        let C = S(1, 1);
        return l && g ? (C.x = l / (w.width * m.w), C.y = g / (w.height * m.h)) : l ? (C.x = l / (w.width * m.w), C.y = C.x) : g && (C.y = g / (w.height * m.h), C.x = C.y), C;
      }, "calcTexScale");
      return { id: "sprite", width: 0, height: 0, frame: n2.frame || 0, quad: n2.quad || new re(0, 0, 1, 1), animSpeed: (_a21 = n2.animSpeed) != null ? _a21 : 1, flipX: (_b2 = n2.flipX) != null ? _b2 : false, flipY: (_c2 = n2.flipY) != null ? _c2 : false, draw() {
        var _a22, _b3, _c3;
        if (!s2)
          return;
        let w = s2.frames[(_a22 = this.frame) != null ? _a22 : 0];
        if (!w)
          throw new G(`Frame not found: ${(_b3 = this.frame) != null ? _b3 : 0}`);
        if (s2.slice9) {
          let { left: m, right: l, top: g, bottom: C } = s2.slice9, P3 = s2.tex.width * w.w, k = s2.tex.height * w.h, j = this.width - m - l, R = this.height - g - C, O = m / P3, ne = l / P3, X = 1 - O - ne, H = g / k, V = C / k, le = 1 - H - V, y = [ie(0, 0, O, H), ie(O, 0, X, H), ie(O + X, 0, ne, H), ie(0, H, O, le), ie(O, H, X, le), ie(O + X, H, ne, le), ie(0, H + le, O, V), ie(O, H + le, X, V), ie(O + X, H + le, ne, V), ie(0, 0, m, g), ie(m, 0, j, g), ie(m + j, 0, l, g), ie(0, g, m, R), ie(m, g, j, R), ie(m + j, g, l, R), ie(0, g + R, m, C), ie(m, g + R, j, C), ie(m + j, g + R, l, C)];
          for (let D = 0; D < 9; D++) {
            let F = y[D], B = y[D + 9];
            Te(Object.assign(tt(this), { pos: B.pos(), tex: s2.tex, quad: w.scale(F), flipX: this.flipX, flipY: this.flipY, tiled: n2.tiled, width: B.w, height: B.h }));
          }
        } else
          Te(Object.assign(tt(this), { tex: s2.tex, quad: w.scale((_c3 = this.quad) != null ? _c3 : new re(0, 0, 1, 1)), flipX: this.flipX, flipY: this.flipY, tiled: n2.tiled, width: this.width, height: this.height }));
      }, add() {
        let w = o((l) => {
          let g = l.frames[0].clone();
          n2.quad && (g = g.scale(n2.quad));
          let C = f(l.tex, g, n2.width, n2.height);
          this.width = l.tex.width * g.w * C.x, this.height = l.tex.height * g.h * C.y, n2.anim && this.play(n2.anim), s2 = l, c2.trigger(s2);
        }, "setSpriteData"), m = ct(e3);
        m ? m.onLoad(w) : xn(() => w(ct(e3).data));
      }, update() {
        if (!i)
          return;
        let w = s2.anims[i.name];
        if (typeof w == "number") {
          this.frame = w;
          return;
        }
        if (w.speed === 0)
          throw new G("Sprite anim speed cannot be 0");
        i.timer += Ce() * this.animSpeed, i.timer >= 1 / i.speed && (i.timer = 0, this.frame += a2, (this.frame < Math.min(w.from, w.to) || this.frame > Math.max(w.from, w.to)) && (i.loop ? i.pingpong ? (this.frame -= a2, a2 *= -1, this.frame += a2) : this.frame = w.from : (this.frame = w.to, i.onEnd(), this.stop())));
      }, play(w, m = {}) {
        var _a22, _b3, _c3, _d, _e2, _f, _g;
        if (!s2) {
          c2.add(() => this.play(w, m));
          return;
        }
        let l = s2.anims[w];
        if (l === void 0)
          throw new G(`Anim not found: ${w}`);
        i && this.stop(), i = typeof l == "number" ? { name: w, timer: 0, loop: false, pingpong: false, speed: 0, onEnd: () => {
        } } : { name: w, timer: 0, loop: (_b3 = (_a22 = m.loop) != null ? _a22 : l.loop) != null ? _b3 : false, pingpong: (_d = (_c3 = m.pingpong) != null ? _c3 : l.pingpong) != null ? _d : false, speed: (_f = (_e2 = m.speed) != null ? _e2 : l.speed) != null ? _f : 10, onEnd: (_g = m.onEnd) != null ? _g : () => {
        } }, a2 = typeof l == "number" ? null : l.from < l.to ? 1 : -1, this.frame = typeof l == "number" ? l : l.from, this.trigger("animStart", w);
      }, stop() {
        if (!i)
          return;
        let w = i.name;
        i = null, this.trigger("animEnd", w);
      }, numFrames() {
        var _a22;
        return (_a22 = s2 == null ? void 0 : s2.frames.length) != null ? _a22 : 0;
      }, curAnim() {
        return i == null ? void 0 : i.name;
      }, onAnimEnd(w) {
        return this.on("animEnd", w);
      }, onAnimStart(w) {
        return this.on("animStart", w);
      }, renderArea() {
        return new ce(S(0), this.width, this.height);
      }, inspect() {
        if (typeof e3 == "string")
          return `"${e3}"`;
      } };
    }
    __name(yn, "yn");
    o(yn, "sprite");
    function Mr(e3, n2 = {}) {
      var _a21, _b2;
      function s2(a2) {
        var _a22, _b3;
        let c2 = qe(Object.assign(tt(a2), { text: a2.text + "", size: a2.textSize, font: a2.font, width: n2.width && a2.width, align: a2.align, letterSpacing: a2.letterSpacing, lineSpacing: a2.lineSpacing, transform: a2.textTransform, styles: a2.textStyles }));
        return n2.width || (a2.width = c2.width / (((_a22 = a2.scale) == null ? void 0 : _a22.x) || 1)), a2.height = c2.height / (((_b3 = a2.scale) == null ? void 0 : _b3.y) || 1), c2;
      }
      __name(s2, "s");
      o(s2, "update");
      let i = { id: "text", set text(a2) {
        e3 = a2, s2(this);
      }, get text() {
        return e3;
      }, textSize: (_a21 = n2.size) != null ? _a21 : Pi, font: n2.font, width: (_b2 = n2.width) != null ? _b2 : 0, height: 0, align: n2.align, lineSpacing: n2.lineSpacing, letterSpacing: n2.letterSpacing, textTransform: n2.transform, textStyles: n2.styles, add() {
        xn(() => s2(this));
      }, draw() {
        $e(s2(this));
      }, renderArea() {
        return new ce(S(0), this.width, this.height);
      } };
      return s2(i), i;
    }
    __name(Mr, "Mr");
    o(Mr, "text");
    function Rr(e3, n2, s2 = {}) {
      return { id: "rect", width: e3, height: n2, radius: s2.radius || 0, draw() {
        me(Object.assign(tt(this), { width: this.width, height: this.height, radius: this.radius, fill: s2.fill }));
      }, renderArea() {
        return new ce(S(0), this.width, this.height);
      }, inspect() {
        return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
      } };
    }
    __name(Rr, "Rr");
    o(Rr, "rect");
    function Dr(e3, n2) {
      return { id: "rect", width: e3, height: n2, draw() {
        we(Object.assign(tt(this), { width: this.width, height: this.height }));
      }, renderArea() {
        return new ce(S(0), this.width, this.height);
      }, inspect() {
        return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
      } };
    }
    __name(Dr, "Dr");
    o(Dr, "uvquad");
    function Gr(e3, n2 = {}) {
      return { id: "circle", radius: e3, draw() {
        Ze(Object.assign(tt(this), { radius: this.radius, fill: n2.fill }));
      }, renderArea() {
        return new ce(new x(this.anchor ? 0 : -this.radius), this.radius * 2, this.radius * 2);
      }, inspect() {
        return `${Math.ceil(this.radius)}`;
      } };
    }
    __name(Gr, "Gr");
    o(Gr, "circle");
    function Fr(e3 = 1, n2 = J(0, 0, 0)) {
      return { id: "outline", outline: { width: e3, color: n2 } };
    }
    __name(Fr, "Fr");
    o(Fr, "outline");
    function is() {
      return { id: "timer", wait(e3, n2) {
        let s2 = [];
        n2 && s2.push(n2);
        let i = 0, a2 = this.onUpdate(() => {
          i += Ce(), i >= e3 && (s2.forEach((c2) => c2()), a2.cancel());
        });
        return { get paused() {
          return a2.paused;
        }, set paused(c2) {
          a2.paused = c2;
        }, cancel: a2.cancel, onEnd(c2) {
          s2.push(c2);
        }, then(c2) {
          return this.onEnd(c2), this;
        } };
      }, loop(e3, n2) {
        let s2 = null, i = o(() => {
          s2 = this.wait(e3, i), n2();
        }, "newAction");
        return s2 = this.wait(0, i), { get paused() {
          return s2.paused;
        }, set paused(a2) {
          s2.paused = a2;
        }, cancel: () => s2.cancel() };
      }, tween(e3, n2, s2, i, a2 = it.linear) {
        let c2 = 0, f = [], w = this.onUpdate(() => {
          c2 += Ce();
          let m = Math.min(c2 / s2, 1);
          i(Oe(e3, n2, a2(m))), m === 1 && (w.cancel(), i(n2), f.forEach((l) => l()));
        });
        return { get paused() {
          return w.paused;
        }, set paused(m) {
          w.paused = m;
        }, onEnd(m) {
          f.push(m);
        }, then(m) {
          return this.onEnd(m), this;
        }, cancel() {
          w.cancel();
        }, finish() {
          w.cancel(), i(n2), f.forEach((m) => m());
        } };
      } };
    }
    __name(is, "is");
    o(is, "timer");
    let Br = 640, Lr = 65536;
    function Ir(e3 = {}) {
      var _a21, _b2, _c2, _d;
      let n2 = S(0), s2 = null, i = null, a2 = false;
      return { id: "body", require: ["pos", "area"], jumpForce: (_a21 = e3.jumpForce) != null ? _a21 : Br, gravityScale: (_b2 = e3.gravityScale) != null ? _b2 : 1, isStatic: (_c2 = e3.isStatic) != null ? _c2 : false, mass: (_d = e3.mass) != null ? _d : 1, add() {
        if (this.mass === 0)
          throw new G("Can't set body mass to 0");
        this.onCollideUpdate((c2, f) => {
          if (c2.is("body") && !f.resolved && (this.trigger("beforePhysicsResolve", f), c2.trigger("beforePhysicsResolve", f.reverse()), !f.resolved && !(this.isStatic && c2.isStatic))) {
            if (!this.isStatic && !c2.isStatic) {
              let w = this.mass + c2.mass;
              this.pos = this.pos.add(f.displacement.scale(c2.mass / w)), c2.pos = c2.pos.add(f.displacement.scale(-this.mass / w)), this.transform = Vt(this), c2.transform = Vt(c2);
            } else {
              let w = !this.isStatic && c2.isStatic ? f : f.reverse();
              w.source.pos = w.source.pos.add(w.displacement), w.source.transform = Vt(w.source);
            }
            f.resolved = true, this.trigger("physicsResolve", f), c2.trigger("physicsResolve", f.reverse());
          }
        }), this.onPhysicsResolve((c2) => {
          A.gravity && (c2.isBottom() && this.isFalling() ? (n2.y = 0, s2 = c2.target, i = c2.target.pos, a2 ? a2 = false : this.trigger("ground", s2)) : c2.isTop() && this.isJumping() && (n2.y = 0, this.trigger("headbutt", c2.target)));
        });
      }, update() {
        var _a22;
        if (!A.gravity || this.isStatic)
          return;
        if (a2 && (s2 = null, i = null, this.trigger("fallOff"), a2 = false), s2)
          if (!this.isOverlapping(s2) || !s2.exists() || !s2.is("body"))
            a2 = true;
          else {
            !s2.pos.eq(i) && e3.stickToPlatform !== false && this.moveBy(s2.pos.sub(i)), i = s2.pos;
            return;
          }
        let c2 = n2.y;
        n2.y += A.gravity * this.gravityScale * Ce(), n2.y = Math.min(n2.y, (_a22 = e3.maxVelocity) != null ? _a22 : Lr), c2 < 0 && n2.y >= 0 && this.trigger("fall"), this.move(n2);
      }, onPhysicsResolve(c2) {
        return this.on("physicsResolve", c2);
      }, onBeforePhysicsResolve(c2) {
        return this.on("beforePhysicsResolve", c2);
      }, curPlatform() {
        return s2;
      }, isGrounded() {
        return s2 !== null;
      }, isFalling() {
        return n2.y > 0;
      }, isJumping() {
        return n2.y < 0;
      }, jump(c2) {
        s2 = null, i = null, n2.y = -c2 || -this.jumpForce;
      }, onGround(c2) {
        return this.on("ground", c2);
      }, onFall(c2) {
        return this.on("fall", c2);
      }, onFallOff(c2) {
        return this.on("fallOff", c2);
      }, onHeadbutt(c2) {
        return this.on("headbutt", c2);
      } };
    }
    __name(Ir, "Ir");
    o(Ir, "body");
    function Vr(e3 = 2) {
      let n2 = e3;
      return { id: "doubleJump", require: ["body"], numJumps: e3, add() {
        this.onGround(() => {
          n2 = this.numJumps;
        });
      }, doubleJump(s2) {
        n2 <= 0 || (n2 < this.numJumps && this.trigger("doubleJump"), n2--, this.jump(s2));
      }, onDoubleJump(s2) {
        return this.on("doubleJump", s2);
      }, inspect() {
        return `${n2}`;
      } };
    }
    __name(Vr, "Vr");
    o(Vr, "doubleJump");
    function kr(e3, n2) {
      return __spreadValues({ id: "shader", shader: e3 }, typeof n2 == "function" ? { uniform: n2(), update() {
        this.uniform = n2();
      } } : { uniform: n2 });
    }
    __name(kr, "kr");
    o(kr, "shader");
    function jr() {
      return { id: "fixed", fixed: true };
    }
    __name(jr, "jr");
    o(jr, "fixed");
    function os(e3) {
      return { id: "stay", stay: true, scenesToStay: e3 };
    }
    __name(os, "os");
    o(os, "stay");
    function Nr(e3) {
      if (e3 == null)
        throw new G("health() requires the initial amount of hp");
      let n2 = e3;
      return { id: "health", hurt(s2 = 1) {
        this.setHP(e3 - s2), this.trigger("hurt", s2);
      }, heal(s2 = 1) {
        this.setHP(e3 + s2), this.trigger("heal", s2);
      }, hp() {
        return e3;
      }, maxHP() {
        return n2;
      }, setHP(s2) {
        e3 = s2, e3 <= 0 && this.trigger("death");
      }, onHurt(s2) {
        return this.on("hurt", s2);
      }, onHeal(s2) {
        return this.on("heal", s2);
      }, onDeath(s2) {
        return this.on("death", s2);
      }, inspect() {
        return `${e3}`;
      } };
    }
    __name(Nr, "Nr");
    o(Nr, "health");
    function _r(e3, n2 = {}) {
      var _a21;
      if (e3 == null)
        throw new G("lifespan() requires time");
      let s2 = (_a21 = n2.fade) != null ? _a21 : 0;
      return { id: "lifespan", add() {
        return __async(this, null, function* () {
          yield jt(e3), s2 > 0 && this.opacity && (yield Sn(this.opacity, 0, s2, (i) => this.opacity = i, it.linear)), this.destroy();
        });
      } };
    }
    __name(_r, "_r");
    o(_r, "lifespan");
    function Hr(e3, n2, s2) {
      if (!e3)
        throw new G("state() requires an initial state");
      let i = {};
      function a2(m) {
        i[m] || (i[m] = { enter: new ye(), end: new ye(), update: new ye(), draw: new ye() });
      }
      __name(a2, "a");
      o(a2, "initStateEvents");
      function c2(m, l, g) {
        return a2(l), i[l][m].add(g);
      }
      __name(c2, "c");
      o(c2, "on");
      function f(m, l, ...g) {
        a2(l), i[l][m].trigger(...g);
      }
      __name(f, "f");
      o(f, "trigger");
      let w = false;
      return { id: "state", state: e3, enterState(m, ...l) {
        if (w = true, n2 && !n2.includes(m))
          throw new G(`State not found: ${m}`);
        let g = this.state;
        if (s2) {
          if (!(s2 == null ? void 0 : s2[g]))
            return;
          let C = typeof s2[g] == "string" ? [s2[g]] : s2[g];
          if (!C.includes(m))
            throw new G(`Cannot transition state from "${g}" to "${m}". Available transitions: ${C.map((P3) => `"${P3}"`).join(", ")}`);
        }
        f("end", g, ...l), this.state = m, f("enter", m, ...l), f("enter", `${g} -> ${m}`, ...l);
      }, onStateTransition(m, l, g) {
        return c2("enter", `${m} -> ${l}`, g);
      }, onStateEnter(m, l) {
        return c2("enter", m, l);
      }, onStateUpdate(m, l) {
        return c2("update", m, l);
      }, onStateDraw(m, l) {
        return c2("draw", m, l);
      }, onStateEnd(m, l) {
        return c2("end", m, l);
      }, update() {
        w || (f("enter", e3), w = true), f("update", this.state);
      }, draw() {
        f("draw", this.state);
      }, inspect() {
        return this.state;
      } };
    }
    __name(Hr, "Hr");
    o(Hr, "state");
    function qr(e3 = 1) {
      let n2 = 0, s2 = false;
      return { require: ["opacity"], add() {
        this.opacity = 0;
      }, update() {
        s2 || (n2 += Ce(), this.opacity = Fe(n2, 0, e3, 0, 1), n2 >= e3 && (this.opacity = 1, s2 = true));
      } };
    }
    __name(qr, "qr");
    o(qr, "fadeIn");
    function $r(e3 = "intersect") {
      return { id: "mask", mask: e3 };
    }
    __name($r, "$r");
    o($r, "mask");
    function xn(e3) {
      N.loaded ? e3() : A.events.on("load", e3);
    }
    __name(xn, "xn");
    o(xn, "onLoad");
    function Kr(e3, n2) {
      A.scenes[e3] = n2;
    }
    __name(Kr, "Kr");
    o(Kr, "scene");
    function zr(e3, ...n2) {
      if (!A.scenes[e3])
        throw new G(`Scene not found: ${e3}`);
      A.events.onOnce("frameEnd", () => {
        A.events.trigger("sceneLeave", e3), U.events.clear(), A.events.clear(), A.objEvents.clear(), [...A.root.children].forEach((s2) => {
          (!s2.stay || s2.scenesToStay && !s2.scenesToStay.includes(e3)) && A.root.remove(s2);
        }), A.root.clearEvents(), ms(), A.cam = { pos: null, scale: S(1), angle: 0, shake: 0, transform: new Ue() }, A.scenes[e3](...n2);
      });
    }
    __name(zr, "zr");
    o(zr, "go");
    function Yr(e3) {
      return A.events.on("sceneLeave", e3);
    }
    __name(Yr, "Yr");
    o(Yr, "onSceneLeave");
    function Xr(e3, n2) {
      try {
        return JSON.parse(window.localStorage[e3]);
      } catch (e4) {
        return n2 ? (as(e3, n2), n2) : null;
      }
    }
    __name(Xr, "Xr");
    o(Xr, "getData");
    function as(e3, n2) {
      window.localStorage[e3] = JSON.stringify(n2);
    }
    __name(as, "as");
    o(as, "setData");
    function us(e3, ...n2) {
      let s2 = e3(Ke), i;
      typeof s2 == "function" ? i = s2(...n2)(Ke) : i = s2;
      for (let a2 in i)
        Ke[a2] = i[a2], r.global !== false && (window[a2] = i[a2]);
      return Ke;
    }
    __name(us, "us");
    o(us, "plug");
    function Ht() {
      return S(be() / 2, ve() / 2);
    }
    __name(Ht, "Ht");
    o(Ht, "center");
    let Wr;
    ((O) => (O[O.None = 0] = "None", O[O.Left = 1] = "Left", O[O.Top = 2] = "Top", O[O.LeftTop = 3] = "LeftTop", O[O.Right = 4] = "Right", O[O.Horizontal = 5] = "Horizontal", O[O.RightTop = 6] = "RightTop", O[O.HorizontalTop = 7] = "HorizontalTop", O[O.Bottom = 8] = "Bottom", O[O.LeftBottom = 9] = "LeftBottom", O[O.Vertical = 10] = "Vertical", O[O.LeftVertical = 11] = "LeftVertical", O[O.RightBottom = 12] = "RightBottom", O[O.HorizontalBottom = 13] = "HorizontalBottom", O[O.RightVertical = 14] = "RightVertical", O[O.All = 15] = "All"))(Wr || (Wr = {}));
    function cs(e3 = {}) {
      var _a21, _b2, _c2, _d;
      let n2 = S(0), s2 = (_a21 = e3.isObstacle) != null ? _a21 : false, i = (_b2 = e3.cost) != null ? _b2 : 0, a2 = (_c2 = e3.edges) != null ? _c2 : [], c2 = o(() => {
        let w = { left: 1, top: 2, right: 4, bottom: 8 };
        return a2.map((m) => w[m] || 0).reduce((m, l) => m | l, 0);
      }, "getEdgeMask"), f = c2();
      return { id: "tile", tilePosOffset: (_d = e3.offset) != null ? _d : S(0), set tilePos(w) {
        let m = this.getLevel();
        n2 = w.clone(), this.pos = S(this.tilePos.x * m.tileWidth(), this.tilePos.y * m.tileHeight()).add(this.tilePosOffset);
      }, get tilePos() {
        return n2;
      }, set isObstacle(w) {
        s2 !== w && (s2 = w, this.getLevel().invalidateNavigationMap());
      }, get isObstacle() {
        return s2;
      }, set cost(w) {
        i !== w && (i = w, this.getLevel().invalidateNavigationMap());
      }, get cost() {
        return i;
      }, set edges(w) {
        a2 = w, f = c2(), this.getLevel().invalidateNavigationMap();
      }, get edges() {
        return a2;
      }, get edgeMask() {
        return f;
      }, getLevel() {
        return this.parent;
      }, moveLeft() {
        this.tilePos = this.tilePos.add(S(-1, 0));
      }, moveRight() {
        this.tilePos = this.tilePos.add(S(1, 0));
      }, moveUp() {
        this.tilePos = this.tilePos.add(S(0, -1));
      }, moveDown() {
        this.tilePos = this.tilePos.add(S(0, 1));
      } };
    }
    __name(cs, "cs");
    o(cs, "tile");
    function Jr(e3, n2) {
      var _a21;
      if (!n2.tileWidth || !n2.tileHeight)
        throw new G("Must provide tileWidth and tileHeight.");
      let s2 = pt([Nt((_a21 = n2.pos) != null ? _a21 : S(0))]), i = e3.length, a2 = 0, c2 = null, f = null, w = null, m = null, l = o((y) => y.x + y.y * a2, "tile2Hash"), g = o((y) => S(Math.floor(y % a2), Math.floor(y / a2)), "hash2Tile"), C = o(() => {
        c2 = [];
        for (let y of s2.children)
          P3(y);
      }, "createSpatialMap"), P3 = o((y) => {
        let D = l(y.tilePos);
        c2[D] ? c2[D].push(y) : c2[D] = [y];
      }, "insertIntoSpatialMap"), k = o((y) => {
        let D = l(y.tilePos);
        if (c2[D]) {
          let F = c2[D].indexOf(y);
          F >= 0 && c2[D].splice(F, 1);
        }
      }, "removeFromSpatialMap"), j = o(() => {
        let y = false;
        for (let D of s2.children) {
          let F = s2.pos2Tile(D.pos);
          (D.tilePos.x != F.x || D.tilePos.y != F.y) && (y = true, k(D), D.tilePos.x = F.x, D.tilePos.y = F.y, P3(D));
        }
        y && s2.trigger("spatial_map_changed");
      }, "updateSpatialMap"), R = o(() => {
        let y = s2.getSpatialMap(), D = s2.numRows() * s2.numColumns();
        f ? f.length = D : f = new Array(D), f.fill(1, 0, D);
        for (let F = 0; F < y.length; F++) {
          let B = y[F];
          if (B) {
            let $ = 0;
            for (let W of B)
              if (W.isObstacle) {
                $ = 1 / 0;
                break;
              } else
                $ += W.cost;
            f[F] = $ || 1;
          }
        }
      }, "createCostMap"), O = o(() => {
        let y = s2.getSpatialMap(), D = s2.numRows() * s2.numColumns();
        w ? w.length = D : w = new Array(D), w.fill(15, 0, D);
        for (let F = 0; F < y.length; F++) {
          let B = y[F];
          if (B) {
            let $ = B.length, W = 15;
            for (let se = 0; se < $; se++)
              W |= B[se].edgeMask;
            w[F] = W;
          }
        }
      }, "createEdgeMap"), ne = o(() => {
        let y = s2.numRows() * s2.numColumns(), D = o((B, $) => {
          let W = [];
          for (W.push(B); W.length > 0; ) {
            let se = W.pop();
            V(se).forEach((he) => {
              m[he] < 0 && (m[he] = $, W.push(he));
            });
          }
        }, "traverse");
        m ? m.length = y : m = new Array(y), m.fill(-1, 0, y);
        let F = 0;
        for (let B = 0; B < f.length; B++) {
          if (m[B] >= 0) {
            F++;
            continue;
          }
          D(B, F), F++;
        }
      }, "createConnectivityMap"), X = o((y, D) => f[D], "getCost"), H = o((y, D) => {
        let F = g(y), B = g(D);
        return F.dist(B);
      }, "getHeuristic"), V = o((y, D) => {
        let F = [], B = Math.floor(y % a2), $ = B > 0 && w[y] & 1 && f[y - 1] !== 1 / 0, W = y >= a2 && w[y] & 2 && f[y - a2] !== 1 / 0, se = B < a2 - 1 && w[y] & 4 && f[y + 1] !== 1 / 0, he = y < a2 * i - a2 - 1 && w[y] & 8 && f[y + a2] !== 1 / 0;
        return D ? ($ && (W && F.push(y - a2 - 1), F.push(y - 1), he && F.push(y + a2 - 1)), W && F.push(y - a2), se && (W && F.push(y - a2 + 1), F.push(y + 1), he && F.push(y + a2 + 1)), he && F.push(y + a2)) : ($ && F.push(y - 1), W && F.push(y - a2), se && F.push(y + 1), he && F.push(y + a2)), F;
      }, "getNeighbours"), le = { id: "level", tileWidth() {
        return n2.tileWidth;
      }, tileHeight() {
        return n2.tileHeight;
      }, spawn(y, ...D) {
        let F = S(...D), B = (() => {
          if (typeof y == "string") {
            if (n2.tiles[y]) {
              if (typeof n2.tiles[y] != "function")
                throw new G("Level symbol def must be a function returning a component list");
              return n2.tiles[y](F);
            } else if (n2.wildcardTile)
              return n2.wildcardTile(y, F);
          } else {
            if (Array.isArray(y))
              return y;
            throw new G("Expected a symbol or a component list");
          }
        })();
        if (!B)
          return null;
        let $ = false, W = false;
        for (let he of B)
          he.id === "tile" && (W = true), he.id === "pos" && ($ = true);
        $ || B.push(Nt()), W || B.push(cs());
        let se = s2.add(B);
        return $ && (se.tilePosOffset = se.pos.clone()), se.tilePos = F, c2 && (P3(se), this.trigger("spatial_map_changed"), this.trigger("navigation_map_invalid")), se;
      }, numColumns() {
        return a2;
      }, numRows() {
        return i;
      }, levelWidth() {
        return a2 * this.tileWidth();
      }, levelHeight() {
        return i * this.tileHeight();
      }, tile2Pos(...y) {
        return S(...y).scale(this.tileWidth(), this.tileHeight());
      }, pos2Tile(...y) {
        let D = S(...y);
        return S(Math.floor(D.x / this.tileWidth()), Math.floor(D.y / this.tileHeight()));
      }, getSpatialMap() {
        return c2 || C(), c2;
      }, onSpatialMapChanged(y) {
        return this.on("spatial_map_changed", y);
      }, onNavigationMapInvalid(y) {
        return this.on("navigation_map_invalid", y);
      }, getAt(y) {
        c2 || C();
        let D = l(y);
        return c2[D] || [];
      }, update() {
        c2 && j();
      }, invalidateNavigationMap() {
        f = null, w = null, m = null;
      }, onNavigationMapChanged(y) {
        return this.on("navigation_map_changed", y);
      }, getTilePath(y, D, F = {}) {
        var _a22;
        if (f || R(), w || O(), m || ne(), y.x < 0 || y.x >= a2 || y.y < 0 || y.y >= i || D.x < 0 || D.x >= a2 || D.y < 0 || D.y >= i)
          return null;
        let B = l(y), $ = l(D);
        if (f[$] === 1 / 0)
          return null;
        if (B === $)
          return [];
        if (m[B] != -1 && m[B] !== m[$])
          return null;
        let W = new $t((Re, An) => Re.cost < An.cost);
        W.insert({ cost: 0, node: B });
        let se = /* @__PURE__ */ new Map();
        se.set(B, B);
        let he = /* @__PURE__ */ new Map();
        for (he.set(B, 0); W.length !== 0; ) {
          let Re = (_a22 = W.remove()) == null ? void 0 : _a22.node;
          if (Re === $)
            break;
          let An = V(Re, F.allowDiagonals);
          for (let ze of An) {
            let On = (he.get(Re) || 0) + X(Re, ze) + H(ze, $);
            (!he.has(ze) || On < he.get(ze)) && (he.set(ze, On), W.insert({ cost: On, node: ze }), se.set(ze, Re));
          }
        }
        let Tn = [], gt = $, gi = g(gt);
        for (Tn.push(gi); gt !== B; ) {
          gt = se.get(gt);
          let Re = g(gt);
          Tn.push(Re);
        }
        return Tn.reverse();
      }, getPath(y, D, F = {}) {
        let B = this.tileWidth(), $ = this.tileHeight(), W = this.getTilePath(this.pos2Tile(y), this.pos2Tile(D), F);
        return W ? [y, ...W.slice(1, -1).map((se) => se.scale(B, $).add(B / 2, $ / 2)), D] : null;
      } };
      return s2.use(le), s2.onNavigationMapInvalid(() => {
        s2.invalidateNavigationMap(), s2.trigger("navigation_map_changed");
      }), e3.forEach((y, D) => {
        let F = y.split("");
        a2 = Math.max(F.length, a2), F.forEach((B, $) => {
          s2.spawn(B, S($, D));
        });
      }), s2;
    }
    __name(Jr, "Jr");
    o(Jr, "addLevel");
    function Qr(e3 = {}) {
      var _a21, _b2;
      let n2 = null, s2 = null, i = null, a2 = null;
      return { id: "agent", require: ["pos", "tile"], agentSpeed: (_a21 = e3.speed) != null ? _a21 : 100, allowDiagonals: (_b2 = e3.allowDiagonals) != null ? _b2 : true, getDistanceToTarget() {
        return n2 ? this.pos.dist(n2) : 0;
      }, getNextLocation() {
        return s2 && i ? s2[i] : null;
      }, getPath() {
        return s2 ? s2.slice() : null;
      }, getTarget() {
        return n2;
      }, isNavigationFinished() {
        return s2 ? i === null : true;
      }, isTargetReachable() {
        return s2 !== null;
      }, isTargetReached() {
        return n2 ? this.pos.eq(n2) : true;
      }, setTarget(c2) {
        n2 = c2, s2 = this.getLevel().getPath(this.pos, n2, { allowDiagonals: this.allowDiagonals }), i = s2 ? 0 : null, s2 ? (a2 || (a2 = this.getLevel().onNavigationMapChanged(() => {
          s2 && i !== null && (s2 = this.getLevel().getPath(this.pos, n2, { allowDiagonals: this.allowDiagonals }), i = s2 ? 0 : null, s2 ? this.trigger("navigation-next", this, s2[i]) : this.trigger("navigation-ended", this));
        }), this.onDestroy(() => a2.cancel())), this.trigger("navigation-started", this), this.trigger("navigation-next", this, s2[i])) : this.trigger("navigation-ended", this);
      }, update() {
        if (s2 && i !== null) {
          if (this.pos.sdist(s2[i]) < 2)
            if (i === s2.length - 1) {
              this.pos = n2.clone(), i = null, this.trigger("navigation-ended", this), this.trigger("target-reached", this);
              return;
            } else
              i++, this.trigger("navigation-next", this, s2[i]);
          this.moveTo(s2[i], this.agentSpeed);
        }
      }, onNavigationStarted(c2) {
        return this.on("navigation-started", c2);
      }, onNavigationNext(c2) {
        return this.on("navigation-next", c2);
      }, onNavigationEnded(c2) {
        return this.on("navigation-ended", c2);
      }, onTargetReached(c2) {
        return this.on("target-reached", c2);
      }, inspect() {
        return JSON.stringify({ target: JSON.stringify(n2), path: JSON.stringify(s2) });
      } };
    }
    __name(Qr, "Qr");
    o(Qr, "agent");
    function Zr(e3) {
      let n2 = U.canvas().captureStream(e3), s2 = ee.ctx.createMediaStreamDestination();
      ee.masterNode.connect(s2);
      let i = new MediaRecorder(n2), a2 = [];
      return i.ondataavailable = (c2) => {
        c2.data.size > 0 && a2.push(c2.data);
      }, i.onerror = () => {
        ee.masterNode.disconnect(s2), n2.getTracks().forEach((c2) => c2.stop());
      }, i.start(), { resume() {
        i.resume();
      }, pause() {
        i.pause();
      }, stop() {
        return i.stop(), ee.masterNode.disconnect(s2), n2.getTracks().forEach((c2) => c2.stop()), new Promise((c2) => {
          i.onstop = () => {
            c2(new Blob(a2, { type: "video/mp4" }));
          };
        });
      }, download(c2 = "kaboom.mp4") {
        this.stop().then((f) => In(c2, f));
      } };
    }
    __name(Zr, "Zr");
    o(Zr, "record");
    function ei() {
      return document.activeElement === U.canvas();
    }
    __name(ei, "ei");
    o(ei, "isFocused");
    function ti(e3) {
      e3.destroy();
    }
    __name(ti, "ti");
    o(ti, "destroy");
    let pt = A.root.add.bind(A.root), ni = A.root.readd.bind(A.root), si = A.root.removeAll.bind(A.root), Un = A.root.get.bind(A.root);
    function ls(e3 = 2, n2 = 1) {
      let s2 = 0;
      return { id: "boom", require: ["scale"], update() {
        let i = Math.sin(s2 * e3) * n2;
        i < 0 && this.destroy(), this.scale = S(i), s2 += Ce();
      } };
    }
    __name(ls, "ls");
    o(ls, "boom");
    let ri = Ne(null, Vs), ii = Ne(null, ks);
    function oi(e3, n2 = {}) {
      var _a21, _b2;
      let s2 = pt([Nt(e3), os()]), i = (n2.speed || 1) * 5, a2 = n2.scale || 1;
      s2.add([yn(ii), _t(0), vn("center"), ls(i, a2), ...(_a21 = n2.comps) != null ? _a21 : []]);
      let c2 = s2.add([yn(ri), _t(0), vn("center"), is(), ...(_b2 = n2.comps) != null ? _b2 : []]);
      return c2.wait(0.4 / i, () => c2.use(ls(i, a2))), c2.onDestroy(() => s2.destroy()), s2;
    }
    __name(oi, "oi");
    o(oi, "addKaboom");
    function hs() {
      A.root.update();
    }
    __name(hs, "hs");
    o(hs, "updateFrame");
    const _En = class {
      constructor(n2, s2, i, a2 = false) {
        __publicField(this, "source");
        __publicField(this, "target");
        __publicField(this, "displacement");
        __publicField(this, "resolved", false);
        this.source = n2, this.target = s2, this.displacement = i, this.resolved = a2;
      }
      reverse() {
        return new _En(this.target, this.source, this.displacement.scale(-1), this.resolved);
      }
      hasOverlap() {
        return !this.displacement.isZero();
      }
      isLeft() {
        return this.displacement.x > 0;
      }
      isRight() {
        return this.displacement.x < 0;
      }
      isTop() {
        return this.displacement.y > 0;
      }
      isBottom() {
        return this.displacement.y < 0;
      }
      preventResolution() {
        this.resolved = true;
      }
    };
    let En = _En;
    __name(En, "En");
    (() => {
      o(_En, "Collision");
    })();
    function ai() {
      let e3 = {}, n2 = r.hashGridSize || Mi, s2 = new Ue(), i = [];
      function a2(c2) {
        if (i.push(s2.clone()), c2.pos && s2.translate(c2.pos), c2.scale && s2.scale(c2.scale), c2.angle && s2.rotate(c2.angle), c2.transform = s2.clone(), c2.c("area") && !c2.paused) {
          let f = c2, m = f.worldArea().bbox(), l = Math.floor(m.pos.x / n2), g = Math.floor(m.pos.y / n2), C = Math.ceil((m.pos.x + m.width) / n2), P3 = Math.ceil((m.pos.y + m.height) / n2), k = /* @__PURE__ */ new Set();
          for (let j = l; j <= C; j++)
            for (let R = g; R <= P3; R++)
              if (!e3[j])
                e3[j] = {}, e3[j][R] = [f];
              else if (!e3[j][R])
                e3[j][R] = [f];
              else {
                let O = e3[j][R];
                e:
                  for (let ne of O) {
                    if (ne.paused || !ne.exists() || k.has(ne.id))
                      continue;
                    for (let H of f.collisionIgnore)
                      if (ne.is(H))
                        continue e;
                    for (let H of ne.collisionIgnore)
                      if (f.is(H))
                        continue e;
                    let X = As(f.worldArea(), ne.worldArea());
                    if (X) {
                      let H = new En(f, ne, X);
                      f.trigger("collideUpdate", ne, H);
                      let V = H.reverse();
                      V.resolved = H.resolved, ne.trigger("collideUpdate", f, V);
                    }
                    k.add(ne.id);
                  }
                O.push(f);
              }
        }
        c2.children.forEach(a2), s2 = i.pop();
      }
      __name(a2, "a");
      o(a2, "checkObj"), a2(A.root);
    }
    __name(ai, "ai");
    o(ai, "checkFrame");
    function ui() {
      var _a21;
      let e3 = A.cam, n2 = x.fromAngle(yt(0, 360)).scale(e3.shake);
      e3.shake = Oe(e3.shake, 0, 5 * Ce()), e3.transform = new Ue().translate(Ht()).scale(e3.scale).rotate(e3.angle).translate(((_a21 = e3.pos) != null ? _a21 : Ht()).scale(-1).add(n2)), A.root.draw(), Ee();
    }
    __name(ui, "ui");
    o(ui, "drawFrame");
    function ci() {
      let e3 = Me();
      A.events.numListeners("loading") > 0 ? A.events.trigger("loading", e3) : ke(() => {
        let n2 = be() / 2, s2 = 24, i = S(be() / 2, ve() / 2).sub(S(n2 / 2, s2 / 2));
        me({ pos: S(0), width: be(), height: ve(), color: J(0, 0, 0) }), me({ pos: i, width: n2, height: s2, fill: false, outline: { width: 4 } }), me({ pos: i, width: n2 * e3, height: s2 });
      });
    }
    __name(ci, "ci");
    o(ci, "drawLoadScreen");
    function ds(e3, n2) {
      ke(() => {
        let s2 = S(8);
        K(), v3(e3);
        let i = qe({ text: n2, font: Wt, size: 16, pos: s2, color: J(255, 255, 255), fixed: true }), a2 = i.width + s2.x * 2, c2 = i.height + s2.x * 2;
        e3.x + a2 >= be() && v3(S(-a2, 0)), e3.y + c2 >= ve() && v3(S(0, -c2)), me({ width: a2, height: c2, color: J(0, 0, 0), radius: 4, opacity: 0.8, fixed: true }), $e(i), _();
      });
    }
    __name(ds, "ds");
    o(ds, "drawInspectText");
    function li() {
      if (te.inspect) {
        let e3 = null;
        for (let n2 of A.root.get("*", { recursive: true }))
          if (n2.c("area") && n2.isHovering()) {
            e3 = n2;
            break;
          }
        if (A.root.drawInspect(), e3) {
          let n2 = [], s2 = e3.inspect();
          for (let i in s2)
            s2[i] ? n2.push(`${i}: ${s2[i]}`) : n2.push(`${i}`);
          ds(tr(It()), n2.join(`
`));
        }
        ds(S(8), `FPS: ${te.fps()}`);
      }
      te.paused && ke(() => {
        K(), v3(be(), 0), v3(-8, 8);
        let e3 = 32;
        me({ width: e3, height: e3, anchor: "topright", color: J(0, 0, 0), opacity: 0.8, radius: 4, fixed: true });
        for (let n2 = 1; n2 <= 2; n2++)
          me({ width: 4, height: e3 * 0.6, anchor: "center", pos: S(-e3 / 3 * n2, e3 * 0.5), color: J(255, 255, 255), radius: 2, fixed: true });
        _();
      }), te.timeScale !== 1 && ke(() => {
        K(), v3(be(), ve()), v3(-8, -8);
        let e3 = 8, n2 = qe({ text: te.timeScale.toFixed(1), font: Wt, size: 16, color: J(255, 255, 255), pos: S(-e3), anchor: "botright", fixed: true });
        me({ width: n2.width + e3 * 2 + e3 * 4, height: n2.height + e3 * 2, anchor: "botright", color: J(0, 0, 0), opacity: 0.8, radius: 4, fixed: true });
        for (let s2 = 0; s2 < 2; s2++) {
          let i = te.timeScale < 1;
          Kn({ p1: S(-n2.width - e3 * (i ? 2 : 3.5), -e3), p2: S(-n2.width - e3 * (i ? 2 : 3.5), -e3 - n2.height), p3: S(-n2.width - e3 * (i ? 3.5 : 2), -e3 - n2.height / 2), pos: S(-s2 * e3 * 1 + (i ? -e3 * 0.5 : 0), 0), color: J(255, 255, 255), fixed: true });
        }
        $e(n2), _();
      }), te.curRecording && ke(() => {
        K(), v3(0, ve()), v3(24, -24), Ze({ radius: 12, color: J(255, 0, 0), opacity: Rn(0, 1, U.time() * 4), fixed: true }), _();
      }), te.showLog && A.logs.length > 0 && ke(() => {
        var _a21;
        K(), v3(0, ve()), v3(8, -8);
        let e3 = 8, n2 = [];
        for (let i of A.logs) {
          let a2 = "", c2 = i.msg instanceof Error ? "error" : "info";
          a2 += `[time]${i.time.toFixed(2)}[/time]`, a2 += " ", a2 += `[${c2}]${((_a21 = i.msg) == null ? void 0 : _a21.toString) ? i.msg.toString() : i.msg}[/${c2}]`, n2.push(a2);
        }
        A.logs = A.logs.filter((i) => U.time() - i.time < (r.logTime || Di));
        let s2 = qe({ text: n2.join(`
`), font: Wt, pos: S(e3, -e3), anchor: "botleft", size: 16, width: be() * 0.6, lineSpacing: e3 / 2, fixed: true, styles: { time: { color: J(127, 127, 127) }, info: { color: J(255, 255, 255) }, error: { color: J(255, 0, 127) } } });
        me({ width: s2.width + e3 * 2, height: s2.height + e3 * 2, anchor: "botleft", color: J(0, 0, 0), radius: 4, opacity: 0.8, fixed: true }), $e(s2), _();
      });
    }
    __name(li, "li");
    o(li, "drawDebug");
    function hi(e3) {
      A.events.on("loading", e3);
    }
    __name(hi, "hi");
    o(hi, "onLoading");
    function di(e3) {
      U.onResize(e3);
    }
    __name(di, "di");
    o(di, "onResize");
    function fi(e3) {
      A.events.on("error", e3);
    }
    __name(fi, "fi");
    o(fi, "onError");
    function Cn(e3) {
      ee.ctx.suspend(), U.run(() => {
        ke(() => {
          let i = be(), a2 = ve(), c2 = { size: 36, width: i - 32 * 2, letterSpacing: 4, lineSpacing: 4, font: Wt, fixed: true };
          me({ width: i, height: a2, color: J(0, 0, 255), fixed: true });
          let f = qe(__spreadProps(__spreadValues({}, c2), { text: "Error", pos: S(32), color: J(255, 128, 0), fixed: true }));
          $e(f), es(__spreadProps(__spreadValues({}, c2), { text: e3.message, pos: S(32, 32 + f.height + 16), fixed: true })), _(), A.events.trigger("error", e3);
        });
      });
    }
    __name(Cn, "Cn");
    o(Cn, "handleErr");
    function mi(e3) {
      Q2.push(e3);
    }
    __name(mi, "mi");
    o(mi, "onCleanup");
    function pi() {
      A.events.onOnce("frameEnd", () => {
        U.quit();
        for (let n2 in et)
          window.removeEventListener(n2, et[n2]);
        h.clear(h.COLOR_BUFFER_BIT | h.DEPTH_BUFFER_BIT | h.STENCIL_BUFFER_BIT);
        let e3 = h.getParameter(h.MAX_TEXTURE_IMAGE_UNITS);
        for (let n2 = 0; n2 < e3; n2++)
          h.activeTexture(h.TEXTURE0 + n2), h.bindTexture(h.TEXTURE_2D, null), h.bindTexture(h.TEXTURE_CUBE_MAP, null);
        h.bindBuffer(h.ARRAY_BUFFER, null), h.bindBuffer(h.ELEMENT_ARRAY_BUFFER, null), h.bindRenderbuffer(h.RENDERBUFFER, null), h.bindFramebuffer(h.FRAMEBUFFER, null), Q2.forEach((n2) => n2()), h.deleteBuffer(b2.vbuf), h.deleteBuffer(b2.ibuf);
      });
    }
    __name(pi, "pi");
    o(pi, "quit");
    function Sn(e3, n2, s2, i, a2 = it.linear) {
      let c2 = 0, f = [], w = wn(() => {
        c2 += Ce();
        let m = Math.min(c2 / s2, 1);
        i(Oe(e3, n2, a2(m))), m === 1 && (w.cancel(), i(n2), f.forEach((l) => l()));
      });
      return { get paused() {
        return w.paused;
      }, set paused(m) {
        w.paused = m;
      }, onEnd(m) {
        f.push(m);
      }, then(m) {
        return this.onEnd(m), this;
      }, cancel() {
        w.cancel();
      }, finish() {
        w.cancel(), i(n2), f.forEach((m) => m());
      } };
    }
    __name(Sn, "Sn");
    o(Sn, "tween");
    let qt = true;
    U.run(() => {
      N.loaded || Me() === 1 && !qt && (N.loaded = true, A.events.trigger("load")), !N.loaded && r.loadingScreen !== false || qt ? (lt(), ci(), ht()) : (te.paused || hs(), ai(), lt(), ui(), r.debug !== false && li(), ht()), qt && (qt = false), A.events.trigger("frameEnd");
    });
    function fs() {
      let e3 = L, n2 = h.drawingBufferWidth / e3, s2 = h.drawingBufferHeight / e3;
      if (r.letterbox) {
        if (!r.width || !r.height)
          throw new G("Letterboxing requires width and height defined.");
        let i = n2 / s2, a2 = r.width / r.height;
        if (i > a2) {
          let c2 = s2 * a2, f = (n2 - c2) / 2;
          b2.viewport = { x: f, y: 0, width: c2, height: s2 };
        } else {
          let c2 = n2 / a2, f = (s2 - c2) / 2;
          b2.viewport = { x: 0, y: f, width: n2, height: c2 };
        }
        return;
      }
      if (r.stretch && (!r.width || !r.height))
        throw new G("Stretching requires width and height defined.");
      b2.viewport = { x: 0, y: 0, width: n2, height: s2 };
    }
    __name(fs, "fs");
    o(fs, "updateViewport");
    function ms() {
      U.onHide(() => {
        r.backgroundAudio || ee.ctx.suspend();
      }), U.onShow(() => {
        r.backgroundAudio || ee.ctx.resume();
      }), U.onResize(() => {
        if (U.isFullscreen())
          return;
        let e3 = r.width && r.height;
        e3 && !r.stretch && !r.letterbox || (u.width = u.offsetWidth * L, u.height = u.offsetHeight * L, fs(), e3 || (b2.frameBuffer.free(), b2.frameBuffer = new Ie(h.drawingBufferWidth, h.drawingBufferHeight), b2.width = h.drawingBufferWidth / L, b2.height = h.drawingBufferHeight / L));
      }), r.debug !== false && pr(), r.burp && gr();
    }
    __name(ms, "ms");
    o(ms, "initEvents"), fs(), ms();
    let Ke = { VERSION: Ai, loadRoot: Qt, loadProgress: Me, loadSprite: Ne, loadSpriteAtlas: Ct, loadSound: cn, loadBitmapFont: sn, loadFont: nn, loadShader: an, loadShaderURL: un, loadAseprite: on, loadPedit: rn, loadBean: ln, loadJSON: tn, load: at, getSprite: Tt, getSound: At, getFont: Ot, getBitmapFont: Pt, getShader: Mt, getAsset: hn, Asset: fe, SpriteData: ue, SoundData: ge, width: be, height: ve, center: Ht, dt: Ce, time: U.time, screenshot: U.screenshot, record: Zr, isFocused: ei, setCursor: U.setCursor, getCursor: U.getCursor, setCursorLocked: U.setCursorLocked, isCursorLocked: U.isCursorLocked, setFullscreen: U.setFullscreen, isFullscreen: U.isFullscreen, isTouchscreen: U.isTouchscreen, onLoad: xn, onLoading: hi, onResize: di, onGamepadConnect: U.onGamepadConnect, onGamepadDisconnect: U.onGamepadDisconnect, onError: fi, onCleanup: mi, camPos: nr, camScale: sr, camRot: rr, shake: ir, toScreen: ns, toWorld: ss, setGravity: wr, getGravity: br, setBackground: vr, getBackground: yr, getGamepads: U.getGamepads, add: pt, make: gn, destroy: ti, destroyAll: si, get: Un, readd: ni, pos: Nt, scale: _t, rotate: xr, color: Ur, opacity: Er, anchor: vn, area: Pr, sprite: yn, text: Mr, rect: Rr, circle: Gr, uvquad: Dr, outline: Fr, body: Ir, doubleJump: Vr, shader: kr, timer: is, fixed: jr, stay: os, health: Nr, lifespan: _r, z: Cr, move: Tr, offscreen: Or, follow: Sr, state: Hr, fadeIn: qr, mask: $r, tile: cs, agent: Qr, on: je, onUpdate: wn, onDraw: or, onAdd: bn, onDestroy: rs, onClick: lr, onCollide: ar, onCollideUpdate: ur, onCollideEnd: cr, onHover: hr, onHoverUpdate: dr, onHoverEnd: fr, onKeyDown: U.onKeyDown, onKeyPress: U.onKeyPress, onKeyPressRepeat: U.onKeyPressRepeat, onKeyRelease: U.onKeyRelease, onMouseDown: U.onMouseDown, onMousePress: U.onMousePress, onMouseRelease: U.onMouseRelease, onMouseMove: U.onMouseMove, onCharInput: U.onCharInput, onTouchStart: U.onTouchStart, onTouchMove: U.onTouchMove, onTouchEnd: U.onTouchEnd, onScroll: U.onScroll, onHide: U.onHide, onShow: U.onShow, onGamepadButtonDown: U.onGamepadButtonDown, onGamepadButtonPress: U.onGamepadButtonPress, onGamepadButtonRelease: U.onGamepadButtonRelease, onGamepadStick: U.onGamepadStick, mousePos: It, mouseDeltaPos: U.mouseDeltaPos, isKeyDown: U.isKeyDown, isKeyPressed: U.isKeyPressed, isKeyPressedRepeat: U.isKeyPressedRepeat, isKeyReleased: U.isKeyReleased, isMouseDown: U.isMouseDown, isMousePressed: U.isMousePressed, isMouseReleased: U.isMouseReleased, isMouseMoved: U.isMouseMoved, isGamepadButtonPressed: U.isGamepadButtonPressed, isGamepadButtonDown: U.isGamepadButtonDown, isGamepadButtonReleased: U.isGamepadButtonReleased, charInputted: U.charInputted, loop: mr, wait: jt, play: Ft, volume: Gt, burp: Bt, audioCtx: ee.ctx, Timer: Ut, Line: De, Rect: ce, Circle: vt, Polygon: Ye, Vec2: x, Color: z, Mat4: Ue, Quad: re, RNG: wt, rand: yt, randi: Dn, randSeed: vs, vec2: S, rgb: J, hsl2rgb: bs, quad: ie, choose: xs, chance: ys, lerp: Oe, tween: Sn, easings: it, map: Fe, mapc: ws, wave: Rn, deg2rad: Ae, rad2deg: st, clamp: Ge, testLineLine: nt, testRectRect: Us, testRectLine: Es, testRectPoint: bt, testCirclePolygon: Ts, testLinePoint: Cs, testLineCircle: Gn, drawSprite: mn, drawText: es, formatText: qe, drawRect: me, drawLine: dt2, drawLines: $n, drawTriangle: Kn, drawCircle: Ze, drawEllipse: zn, drawUVQuad: we, drawPolygon: He, drawFormattedText: $e, drawMasked: Xn, drawSubtracted: Wn, pushTransform: K, popTransform: _, pushTranslate: v3, pushScale: T, pushRotate: I, pushMatrix: d2, usePostEffect: fn, debug: te, scene: Kr, go: zr, onSceneLeave: Yr, addLevel: Jr, getData: Xr, setData: as, download: Kt, downloadJSON: Ps, downloadText: Ln, downloadBlob: In, plug: us, ASCII_CHARS: js, canvas: U.canvas(), addKaboom: oi, LEFT: x.LEFT, RIGHT: x.RIGHT, UP: x.UP, DOWN: x.DOWN, RED: z.RED, GREEN: z.GREEN, BLUE: z.BLUE, YELLOW: z.YELLOW, MAGENTA: z.MAGENTA, CYAN: z.CYAN, WHITE: z.WHITE, BLACK: z.BLACK, quit: pi, Event: ye, EventHandler: Le, EventController: Be, KaboomError: G };
    if (r.plugins && r.plugins.forEach(us), r.global !== false)
      for (let e3 in Ke)
        window[e3] = Ke[e3];
    return r.focus !== false && U.canvas().focus(), Ke;
  }, "default");

  // node_modules/planck/dist/planck.mjs
  var extendStatics = /* @__PURE__ */ __name(function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p in b3)
        if (Object.prototype.hasOwnProperty.call(b3, p))
          d3[p] = b3[p];
    };
    return extendStatics(d2, b2);
  }, "extendStatics");
  function __extends(d2, b2) {
    if (typeof b2 !== "function" && b2 !== null)
      throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    __name(__, "__");
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  }
  __name(__extends, "__extends");
  var __assign = /* @__PURE__ */ __name(function() {
    __assign = Object.assign || /* @__PURE__ */ __name(function __assign2(t) {
      for (var s2, i = 1, n2 = arguments.length; i < n2; i++) {
        s2 = arguments[i];
        for (var p in s2)
          if (Object.prototype.hasOwnProperty.call(s2, p))
            t[p] = s2[p];
      }
      return t;
    }, "__assign");
    return __assign.apply(this, arguments);
  }, "__assign");
  var options = /* @__PURE__ */ __name(function(input2, defaults) {
    if (input2 === null || typeof input2 === "undefined") {
      input2 = {};
    }
    var output2 = __assign({}, input2);
    for (var key in defaults) {
      if (defaults.hasOwnProperty(key) && typeof input2[key] === "undefined") {
        output2[key] = defaults[key];
      }
    }
    if (typeof Object.getOwnPropertySymbols === "function") {
      var symbols = Object.getOwnPropertySymbols(defaults);
      for (var i = 0; i < symbols.length; i++) {
        var symbol = symbols[i];
        if (defaults.propertyIsEnumerable(symbol) && typeof input2[symbol] === "undefined") {
          output2[symbol] = defaults[symbol];
        }
      }
    }
    return output2;
  }, "options");
  var math_random = Math.random;
  var EPSILON = 1e-9;
  var isFinite = Number.isFinite;
  function nextPowerOfTwo(x3) {
    x3 |= x3 >> 1;
    x3 |= x3 >> 2;
    x3 |= x3 >> 4;
    x3 |= x3 >> 8;
    x3 |= x3 >> 16;
    return x3 + 1;
  }
  __name(nextPowerOfTwo, "nextPowerOfTwo");
  function isPowerOfTwo(x3) {
    return x3 > 0 && (x3 & x3 - 1) === 0;
  }
  __name(isPowerOfTwo, "isPowerOfTwo");
  function mod(num, min, max) {
    if (typeof min === "undefined") {
      max = 1;
      min = 0;
    } else if (typeof max === "undefined") {
      max = min;
      min = 0;
    }
    if (max > min) {
      num = (num - min) % (max - min);
      return num + (num < 0 ? max : min);
    } else {
      num = (num - max) % (min - max);
      return num + (num <= 0 ? min : max);
    }
  }
  __name(mod, "mod");
  function clamp(num, min, max) {
    if (num < min) {
      return min;
    } else if (num > max) {
      return max;
    } else {
      return num;
    }
  }
  __name(clamp, "clamp");
  function random(min, max) {
    if (typeof min === "undefined") {
      max = 1;
      min = 0;
    } else if (typeof max === "undefined") {
      max = min;
      min = 0;
    }
    return min === max ? min : math_random() * (max - min) + min;
  }
  __name(random, "random");
  var math = Object.create(Math);
  math.EPSILON = EPSILON;
  math.isFinite = isFinite;
  math.nextPowerOfTwo = nextPowerOfTwo;
  math.isPowerOfTwo = isPowerOfTwo;
  math.mod = mod;
  math.clamp = clamp;
  math.random = random;
  var math_abs$9 = Math.abs;
  var math_sqrt$5 = Math.sqrt;
  var math_max$8 = Math.max;
  var math_min$8 = Math.min;
  var Vec2 = function() {
    function Vec22(x3, y) {
      if (!(this instanceof Vec22)) {
        return new Vec22(x3, y);
      }
      if (typeof x3 === "undefined") {
        this.x = 0;
        this.y = 0;
      } else if (typeof x3 === "object") {
        this.x = x3.x;
        this.y = x3.y;
      } else {
        this.x = x3;
        this.y = y;
      }
    }
    __name(Vec22, "Vec2");
    Vec22.prototype._serialize = function() {
      return {
        x: this.x,
        y: this.y
      };
    };
    Vec22._deserialize = function(data) {
      var obj = Object.create(Vec22.prototype);
      obj.x = data.x;
      obj.y = data.y;
      return obj;
    };
    Vec22.zero = function() {
      var obj = Object.create(Vec22.prototype);
      obj.x = 0;
      obj.y = 0;
      return obj;
    };
    Vec22.neo = function(x3, y) {
      var obj = Object.create(Vec22.prototype);
      obj.x = x3;
      obj.y = y;
      return obj;
    };
    Vec22.clone = function(v3) {
      return Vec22.neo(v3.x, v3.y);
    };
    Vec22.prototype.toString = function() {
      return JSON.stringify(this);
    };
    Vec22.isValid = function(obj) {
      if (obj === null || typeof obj === "undefined") {
        return false;
      }
      return Number.isFinite(obj.x) && Number.isFinite(obj.y);
    };
    Vec22.assert = function(o2) {
    };
    Vec22.prototype.clone = function() {
      return Vec22.clone(this);
    };
    Vec22.prototype.setZero = function() {
      this.x = 0;
      this.y = 0;
      return this;
    };
    Vec22.prototype.set = function(x3, y) {
      if (typeof x3 === "object") {
        this.x = x3.x;
        this.y = x3.y;
      } else {
        this.x = x3;
        this.y = y;
      }
      return this;
    };
    Vec22.prototype.setNum = function(x3, y) {
      this.x = x3;
      this.y = y;
      return this;
    };
    Vec22.prototype.setVec2 = function(value) {
      this.x = value.x;
      this.y = value.y;
      return this;
    };
    Vec22.prototype.wSet = function(a2, v3, b2, w) {
      if (typeof b2 !== "undefined" || typeof w !== "undefined") {
        return this.setCombine(a2, v3, b2, w);
      } else {
        return this.setMul(a2, v3);
      }
    };
    Vec22.prototype.setCombine = function(a2, v3, b2, w) {
      var x3 = a2 * v3.x + b2 * w.x;
      var y = a2 * v3.y + b2 * w.y;
      this.x = x3;
      this.y = y;
      return this;
    };
    Vec22.prototype.setMul = function(a2, v3) {
      var x3 = a2 * v3.x;
      var y = a2 * v3.y;
      this.x = x3;
      this.y = y;
      return this;
    };
    Vec22.prototype.add = function(w) {
      this.x += w.x;
      this.y += w.y;
      return this;
    };
    Vec22.prototype.wAdd = function(a2, v3, b2, w) {
      if (typeof b2 !== "undefined" || typeof w !== "undefined") {
        return this.addCombine(a2, v3, b2, w);
      } else {
        return this.addMul(a2, v3);
      }
    };
    Vec22.prototype.addCombine = function(a2, v3, b2, w) {
      var x3 = a2 * v3.x + b2 * w.x;
      var y = a2 * v3.y + b2 * w.y;
      this.x += x3;
      this.y += y;
      return this;
    };
    Vec22.prototype.addMul = function(a2, v3) {
      var x3 = a2 * v3.x;
      var y = a2 * v3.y;
      this.x += x3;
      this.y += y;
      return this;
    };
    Vec22.prototype.wSub = function(a2, v3, b2, w) {
      if (typeof b2 !== "undefined" || typeof w !== "undefined") {
        return this.subCombine(a2, v3, b2, w);
      } else {
        return this.subMul(a2, v3);
      }
    };
    Vec22.prototype.subCombine = function(a2, v3, b2, w) {
      var x3 = a2 * v3.x + b2 * w.x;
      var y = a2 * v3.y + b2 * w.y;
      this.x -= x3;
      this.y -= y;
      return this;
    };
    Vec22.prototype.subMul = function(a2, v3) {
      var x3 = a2 * v3.x;
      var y = a2 * v3.y;
      this.x -= x3;
      this.y -= y;
      return this;
    };
    Vec22.prototype.sub = function(w) {
      this.x -= w.x;
      this.y -= w.y;
      return this;
    };
    Vec22.prototype.mul = function(m) {
      this.x *= m;
      this.y *= m;
      return this;
    };
    Vec22.prototype.length = function() {
      return Vec22.lengthOf(this);
    };
    Vec22.prototype.lengthSquared = function() {
      return Vec22.lengthSquared(this);
    };
    Vec22.prototype.normalize = function() {
      var length = this.length();
      if (length < EPSILON) {
        return 0;
      }
      var invLength = 1 / length;
      this.x *= invLength;
      this.y *= invLength;
      return length;
    };
    Vec22.lengthOf = function(v3) {
      return math_sqrt$5(v3.x * v3.x + v3.y * v3.y);
    };
    Vec22.lengthSquared = function(v3) {
      return v3.x * v3.x + v3.y * v3.y;
    };
    Vec22.distance = function(v3, w) {
      var dx = v3.x - w.x;
      var dy = v3.y - w.y;
      return math_sqrt$5(dx * dx + dy * dy);
    };
    Vec22.distanceSquared = function(v3, w) {
      var dx = v3.x - w.x;
      var dy = v3.y - w.y;
      return dx * dx + dy * dy;
    };
    Vec22.areEqual = function(v3, w) {
      return v3 === w || typeof w === "object" && w !== null && v3.x === w.x && v3.y === w.y;
    };
    Vec22.skew = function(v3) {
      return Vec22.neo(-v3.y, v3.x);
    };
    Vec22.dot = function(v3, w) {
      return v3.x * w.x + v3.y * w.y;
    };
    Vec22.cross = function(v3, w) {
      if (typeof w === "number") {
        return Vec22.neo(w * v3.y, -w * v3.x);
      } else if (typeof v3 === "number") {
        return Vec22.neo(-v3 * w.y, v3 * w.x);
      } else {
        return v3.x * w.y - v3.y * w.x;
      }
    };
    Vec22.crossVec2Vec2 = function(v3, w) {
      return v3.x * w.y - v3.y * w.x;
    };
    Vec22.crossVec2Num = function(v3, w) {
      return Vec22.neo(w * v3.y, -w * v3.x);
    };
    Vec22.crossNumVec2 = function(v3, w) {
      return Vec22.neo(-v3 * w.y, v3 * w.x);
    };
    Vec22.addCross = function(a2, v3, w) {
      if (typeof w === "number") {
        return Vec22.neo(w * v3.y + a2.x, -w * v3.x + a2.y);
      } else if (typeof v3 === "number") {
        return Vec22.neo(-v3 * w.y + a2.x, v3 * w.x + a2.y);
      }
    };
    Vec22.addCrossVec2Num = function(a2, v3, w) {
      return Vec22.neo(w * v3.y + a2.x, -w * v3.x + a2.y);
    };
    Vec22.addCrossNumVec2 = function(a2, v3, w) {
      return Vec22.neo(-v3 * w.y + a2.x, v3 * w.x + a2.y);
    };
    Vec22.add = function(v3, w) {
      return Vec22.neo(v3.x + w.x, v3.y + w.y);
    };
    Vec22.wAdd = function(a2, v3, b2, w) {
      if (typeof b2 !== "undefined" || typeof w !== "undefined") {
        return Vec22.combine(a2, v3, b2, w);
      } else {
        return Vec22.mulNumVec2(a2, v3);
      }
    };
    Vec22.combine = function(a2, v3, b2, w) {
      return Vec22.zero().setCombine(a2, v3, b2, w);
    };
    Vec22.sub = function(v3, w) {
      return Vec22.neo(v3.x - w.x, v3.y - w.y);
    };
    Vec22.mul = function(a2, b2) {
      if (typeof a2 === "object") {
        return Vec22.neo(a2.x * b2, a2.y * b2);
      } else if (typeof b2 === "object") {
        return Vec22.neo(a2 * b2.x, a2 * b2.y);
      }
    };
    Vec22.mulVec2Num = function(a2, b2) {
      return Vec22.neo(a2.x * b2, a2.y * b2);
    };
    Vec22.mulNumVec2 = function(a2, b2) {
      return Vec22.neo(a2 * b2.x, a2 * b2.y);
    };
    Vec22.prototype.neg = function() {
      this.x = -this.x;
      this.y = -this.y;
      return this;
    };
    Vec22.neg = function(v3) {
      return Vec22.neo(-v3.x, -v3.y);
    };
    Vec22.abs = function(v3) {
      return Vec22.neo(math_abs$9(v3.x), math_abs$9(v3.y));
    };
    Vec22.mid = function(v3, w) {
      return Vec22.neo((v3.x + w.x) * 0.5, (v3.y + w.y) * 0.5);
    };
    Vec22.upper = function(v3, w) {
      return Vec22.neo(math_max$8(v3.x, w.x), math_max$8(v3.y, w.y));
    };
    Vec22.lower = function(v3, w) {
      return Vec22.neo(math_min$8(v3.x, w.x), math_min$8(v3.y, w.y));
    };
    Vec22.prototype.clamp = function(max) {
      var lengthSqr = this.x * this.x + this.y * this.y;
      if (lengthSqr > max * max) {
        var scale = max / math_sqrt$5(lengthSqr);
        this.x *= scale;
        this.y *= scale;
      }
      return this;
    };
    Vec22.clamp = function(v3, max) {
      var r = Vec22.neo(v3.x, v3.y);
      r.clamp(max);
      return r;
    };
    Vec22.scaleFn = function(x3, y) {
      return function(v3) {
        return Vec22.neo(v3.x * x3, v3.y * y);
      };
    };
    Vec22.translateFn = function(x3, y) {
      return function(v3) {
        return Vec22.neo(v3.x + x3, v3.y + y);
      };
    };
    return Vec22;
  }();
  var math_max$7 = Math.max;
  var math_min$7 = Math.min;
  var AABB = function() {
    function AABB2(lower, upper) {
      if (!(this instanceof AABB2)) {
        return new AABB2(lower, upper);
      }
      this.lowerBound = Vec2.zero();
      this.upperBound = Vec2.zero();
      if (typeof lower === "object") {
        this.lowerBound.setVec2(lower);
      }
      if (typeof upper === "object") {
        this.upperBound.setVec2(upper);
      } else if (typeof lower === "object") {
        this.upperBound.setVec2(lower);
      }
    }
    __name(AABB2, "AABB");
    AABB2.prototype.isValid = function() {
      return AABB2.isValid(this);
    };
    AABB2.isValid = function(obj) {
      if (obj === null || typeof obj === "undefined") {
        return false;
      }
      return Vec2.isValid(obj.lowerBound) && Vec2.isValid(obj.upperBound) && Vec2.sub(obj.upperBound, obj.lowerBound).lengthSquared() >= 0;
    };
    AABB2.assert = function(o2) {
    };
    AABB2.prototype.getCenter = function() {
      return Vec2.neo((this.lowerBound.x + this.upperBound.x) * 0.5, (this.lowerBound.y + this.upperBound.y) * 0.5);
    };
    AABB2.prototype.getExtents = function() {
      return Vec2.neo((this.upperBound.x - this.lowerBound.x) * 0.5, (this.upperBound.y - this.lowerBound.y) * 0.5);
    };
    AABB2.prototype.getPerimeter = function() {
      return 2 * (this.upperBound.x - this.lowerBound.x + this.upperBound.y - this.lowerBound.y);
    };
    AABB2.prototype.combine = function(a2, b2) {
      b2 = b2 || this;
      var lowerA = a2.lowerBound;
      var upperA = a2.upperBound;
      var lowerB = b2.lowerBound;
      var upperB = b2.upperBound;
      var lowerX = math_min$7(lowerA.x, lowerB.x);
      var lowerY = math_min$7(lowerA.y, lowerB.y);
      var upperX = math_max$7(upperB.x, upperA.x);
      var upperY = math_max$7(upperB.y, upperA.y);
      this.lowerBound.setNum(lowerX, lowerY);
      this.upperBound.setNum(upperX, upperY);
    };
    AABB2.prototype.combinePoints = function(a2, b2) {
      this.lowerBound.setNum(math_min$7(a2.x, b2.x), math_min$7(a2.y, b2.y));
      this.upperBound.setNum(math_max$7(a2.x, b2.x), math_max$7(a2.y, b2.y));
    };
    AABB2.prototype.set = function(aabb) {
      this.lowerBound.setNum(aabb.lowerBound.x, aabb.lowerBound.y);
      this.upperBound.setNum(aabb.upperBound.x, aabb.upperBound.y);
    };
    AABB2.prototype.contains = function(aabb) {
      var result = true;
      result = result && this.lowerBound.x <= aabb.lowerBound.x;
      result = result && this.lowerBound.y <= aabb.lowerBound.y;
      result = result && aabb.upperBound.x <= this.upperBound.x;
      result = result && aabb.upperBound.y <= this.upperBound.y;
      return result;
    };
    AABB2.prototype.extend = function(value) {
      AABB2.extend(this, value);
      return this;
    };
    AABB2.extend = function(out, value) {
      out.lowerBound.x -= value;
      out.lowerBound.y -= value;
      out.upperBound.x += value;
      out.upperBound.y += value;
      return out;
    };
    AABB2.testOverlap = function(a2, b2) {
      var d1x = b2.lowerBound.x - a2.upperBound.x;
      var d2x = a2.lowerBound.x - b2.upperBound.x;
      var d1y = b2.lowerBound.y - a2.upperBound.y;
      var d2y = a2.lowerBound.y - b2.upperBound.y;
      if (d1x > 0 || d1y > 0 || d2x > 0 || d2y > 0) {
        return false;
      }
      return true;
    };
    AABB2.areEqual = function(a2, b2) {
      return Vec2.areEqual(a2.lowerBound, b2.lowerBound) && Vec2.areEqual(a2.upperBound, b2.upperBound);
    };
    AABB2.diff = function(a2, b2) {
      var wD = math_max$7(0, math_min$7(a2.upperBound.x, b2.upperBound.x) - math_max$7(b2.lowerBound.x, a2.lowerBound.x));
      var hD = math_max$7(0, math_min$7(a2.upperBound.y, b2.upperBound.y) - math_max$7(b2.lowerBound.y, a2.lowerBound.y));
      var wA = a2.upperBound.x - a2.lowerBound.x;
      var hA = a2.upperBound.y - a2.lowerBound.y;
      var wB = b2.upperBound.x - b2.lowerBound.x;
      var hB = b2.upperBound.y - b2.lowerBound.y;
      return wA * hA + wB * hB - wD * hD;
    };
    AABB2.prototype.rayCast = function(output2, input2) {
      var tmin = -Infinity;
      var tmax = Infinity;
      var p = input2.p1;
      var d2 = Vec2.sub(input2.p2, input2.p1);
      var absD = Vec2.abs(d2);
      var normal3 = Vec2.zero();
      for (var f = "x"; f !== null; f = f === "x" ? "y" : null) {
        if (absD.x < EPSILON) {
          if (p[f] < this.lowerBound[f] || this.upperBound[f] < p[f]) {
            return false;
          }
        } else {
          var inv_d = 1 / d2[f];
          var t1 = (this.lowerBound[f] - p[f]) * inv_d;
          var t2 = (this.upperBound[f] - p[f]) * inv_d;
          var s2 = -1;
          if (t1 > t2) {
            var temp3 = t1;
            t1 = t2;
            t2 = temp3;
            s2 = 1;
          }
          if (t1 > tmin) {
            normal3.setZero();
            normal3[f] = s2;
            tmin = t1;
          }
          tmax = math_min$7(tmax, t2);
          if (tmin > tmax) {
            return false;
          }
        }
      }
      if (tmin < 0 || input2.maxFraction < tmin) {
        return false;
      }
      output2.fraction = tmin;
      output2.normal = normal3;
      return true;
    };
    AABB2.prototype.toString = function() {
      return JSON.stringify(this);
    };
    AABB2.combinePoints = function(out, a2, b2) {
      out.lowerBound.x = math_min$7(a2.x, b2.x);
      out.lowerBound.y = math_min$7(a2.y, b2.y);
      out.upperBound.x = math_max$7(a2.x, b2.x);
      out.upperBound.y = math_max$7(a2.y, b2.y);
      return out;
    };
    AABB2.combinedPerimeter = function(a2, b2) {
      var lx = math_min$7(a2.lowerBound.x, b2.lowerBound.x);
      var ly = math_min$7(a2.lowerBound.y, b2.lowerBound.y);
      var ux = math_max$7(a2.upperBound.x, b2.upperBound.x);
      var uy = math_max$7(a2.upperBound.y, b2.upperBound.y);
      return 2 * (ux - lx + uy - ly);
    };
    return AABB2;
  }();
  var math_PI$6 = Math.PI;
  var Settings = function() {
    function Settings2() {
    }
    __name(Settings2, "Settings");
    Object.defineProperty(Settings2, "polygonRadius", {
      get: function() {
        return 2 * Settings2.linearSlop;
      },
      enumerable: false,
      configurable: true
    });
    Settings2.lengthUnitsPerMeter = 1;
    Settings2.maxManifoldPoints = 2;
    Settings2.maxPolygonVertices = 12;
    Settings2.aabbExtension = 0.1;
    Settings2.aabbMultiplier = 2;
    Settings2.linearSlop = 5e-3;
    Settings2.angularSlop = 2 / 180 * math_PI$6;
    Settings2.maxSubSteps = 8;
    Settings2.maxTOIContacts = 32;
    Settings2.maxTOIIterations = 20;
    Settings2.maxDistanceIterations = 20;
    Settings2.velocityThreshold = 1;
    Settings2.maxLinearCorrection = 0.2;
    Settings2.maxAngularCorrection = 8 / 180 * math_PI$6;
    Settings2.maxTranslation = 2;
    Settings2.maxRotation = 0.5 * math_PI$6;
    Settings2.baumgarte = 0.2;
    Settings2.toiBaugarte = 0.75;
    Settings2.timeToSleep = 0.5;
    Settings2.linearSleepTolerance = 0.01;
    Settings2.angularSleepTolerance = 2 / 180 * math_PI$6;
    return Settings2;
  }();
  var SettingsInternal = function() {
    function SettingsInternal2() {
    }
    __name(SettingsInternal2, "SettingsInternal");
    Object.defineProperty(SettingsInternal2, "maxManifoldPoints", {
      get: function() {
        return Settings.maxManifoldPoints;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(SettingsInternal2, "maxPolygonVertices", {
      get: function() {
        return Settings.maxPolygonVertices;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(SettingsInternal2, "aabbExtension", {
      get: function() {
        return Settings.aabbExtension * Settings.lengthUnitsPerMeter;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(SettingsInternal2, "aabbMultiplier", {
      get: function() {
        return Settings.aabbMultiplier;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(SettingsInternal2, "linearSlop", {
      get: function() {
        return Settings.linearSlop * Settings.lengthUnitsPerMeter;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(SettingsInternal2, "linearSlopSquared", {
      get: function() {
        return Settings.linearSlop * Settings.lengthUnitsPerMeter * Settings.linearSlop * Settings.lengthUnitsPerMeter;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(SettingsInternal2, "angularSlop", {
      get: function() {
        return Settings.angularSlop;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(SettingsInternal2, "polygonRadius", {
      get: function() {
        return 2 * Settings.linearSlop;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(SettingsInternal2, "maxSubSteps", {
      get: function() {
        return Settings.maxSubSteps;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(SettingsInternal2, "maxTOIContacts", {
      get: function() {
        return Settings.maxTOIContacts;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(SettingsInternal2, "maxTOIIterations", {
      get: function() {
        return Settings.maxTOIIterations;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(SettingsInternal2, "maxDistanceIterations", {
      get: function() {
        return Settings.maxDistanceIterations;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(SettingsInternal2, "velocityThreshold", {
      get: function() {
        return Settings.velocityThreshold * Settings.lengthUnitsPerMeter;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(SettingsInternal2, "maxLinearCorrection", {
      get: function() {
        return Settings.maxLinearCorrection * Settings.lengthUnitsPerMeter;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(SettingsInternal2, "maxAngularCorrection", {
      get: function() {
        return Settings.maxAngularCorrection;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(SettingsInternal2, "maxTranslation", {
      get: function() {
        return Settings.maxTranslation * Settings.lengthUnitsPerMeter;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(SettingsInternal2, "maxTranslationSquared", {
      get: function() {
        return Settings.maxTranslation * Settings.lengthUnitsPerMeter * Settings.maxTranslation * Settings.lengthUnitsPerMeter;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(SettingsInternal2, "maxRotation", {
      get: function() {
        return Settings.maxRotation;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(SettingsInternal2, "maxRotationSquared", {
      get: function() {
        return Settings.maxRotation * Settings.maxRotation;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(SettingsInternal2, "baumgarte", {
      get: function() {
        return Settings.baumgarte;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(SettingsInternal2, "toiBaugarte", {
      get: function() {
        return Settings.toiBaugarte;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(SettingsInternal2, "timeToSleep", {
      get: function() {
        return Settings.timeToSleep;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(SettingsInternal2, "linearSleepTolerance", {
      get: function() {
        return Settings.linearSleepTolerance * Settings.lengthUnitsPerMeter;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(SettingsInternal2, "linearSleepToleranceSqr", {
      get: function() {
        return Settings.linearSleepTolerance * Settings.lengthUnitsPerMeter * Settings.linearSleepTolerance * Settings.lengthUnitsPerMeter;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(SettingsInternal2, "angularSleepTolerance", {
      get: function() {
        return Settings.angularSleepTolerance;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(SettingsInternal2, "angularSleepToleranceSqr", {
      get: function() {
        return Settings.angularSleepTolerance * Settings.angularSleepTolerance;
      },
      enumerable: false,
      configurable: true
    });
    return SettingsInternal2;
  }();
  var Pool = function() {
    function Pool2(opts) {
      this._list = [];
      this._max = Infinity;
      this._hasCreateFn = false;
      this._createCount = 0;
      this._hasAllocateFn = false;
      this._allocateCount = 0;
      this._hasReleaseFn = false;
      this._releaseCount = 0;
      this._hasDisposeFn = false;
      this._disposeCount = 0;
      this._list = [];
      this._max = opts.max || this._max;
      this._createFn = opts.create;
      this._hasCreateFn = typeof this._createFn === "function";
      this._allocateFn = opts.allocate;
      this._hasAllocateFn = typeof this._allocateFn === "function";
      this._releaseFn = opts.release;
      this._hasReleaseFn = typeof this._releaseFn === "function";
      this._disposeFn = opts.dispose;
      this._hasDisposeFn = typeof this._disposeFn === "function";
    }
    __name(Pool2, "Pool");
    Pool2.prototype.max = function(n2) {
      if (typeof n2 === "number") {
        this._max = n2;
        return this;
      }
      return this._max;
    };
    Pool2.prototype.size = function() {
      return this._list.length;
    };
    Pool2.prototype.allocate = function() {
      var item;
      if (this._list.length > 0) {
        item = this._list.shift();
      } else {
        this._createCount++;
        if (this._hasCreateFn) {
          item = this._createFn();
        } else {
          item = {};
        }
      }
      this._allocateCount++;
      if (this._hasAllocateFn) {
        this._allocateFn(item);
      }
      return item;
    };
    Pool2.prototype.release = function(item) {
      if (this._list.length < this._max) {
        this._releaseCount++;
        if (this._hasReleaseFn) {
          this._releaseFn(item);
        }
        this._list.push(item);
      } else {
        this._disposeCount++;
        if (this._hasDisposeFn) {
          item = this._disposeFn(item);
        }
      }
    };
    Pool2.prototype.toString = function() {
      return " +" + this._createCount + " >" + this._allocateCount + " <" + this._releaseCount + " -" + this._disposeCount + " =" + this._list.length + "/" + this._max;
    };
    return Pool2;
  }();
  var math_abs$8 = Math.abs;
  var math_max$6 = Math.max;
  var TreeNode = function() {
    function TreeNode2(id) {
      this.aabb = new AABB();
      this.userData = null;
      this.parent = null;
      this.child1 = null;
      this.child2 = null;
      this.height = -1;
      this.id = id;
    }
    __name(TreeNode2, "TreeNode");
    TreeNode2.prototype.toString = function() {
      return this.id + ": " + this.userData;
    };
    TreeNode2.prototype.isLeaf = function() {
      return this.child1 == null;
    };
    return TreeNode2;
  }();
  var poolTreeNode = new Pool({
    create: function() {
      return new TreeNode();
    },
    release: function(node) {
      node.userData = null;
      node.parent = null;
      node.child1 = null;
      node.child2 = null;
      node.height = -1;
      node.id = void 0;
    }
  });
  var DynamicTree = function() {
    function DynamicTree2() {
      this.inputPool = new Pool({
        create: function() {
          return {};
        },
        release: function(stack) {
        }
      });
      this.stackPool = new Pool({
        create: function() {
          return [];
        },
        release: function(stack) {
          stack.length = 0;
        }
      });
      this.iteratorPool = new Pool({
        create: function() {
          return new Iterator();
        },
        release: function(iterator) {
          iterator.close();
        }
      });
      this.m_root = null;
      this.m_nodes = {};
      this.m_lastProxyId = 0;
    }
    __name(DynamicTree2, "DynamicTree");
    DynamicTree2.prototype.getUserData = function(id) {
      var node = this.m_nodes[id];
      return node.userData;
    };
    DynamicTree2.prototype.getFatAABB = function(id) {
      var node = this.m_nodes[id];
      return node.aabb;
    };
    DynamicTree2.prototype.allocateNode = function() {
      var node = poolTreeNode.allocate();
      node.id = ++this.m_lastProxyId;
      this.m_nodes[node.id] = node;
      return node;
    };
    DynamicTree2.prototype.freeNode = function(node) {
      delete this.m_nodes[node.id];
      poolTreeNode.release(node);
    };
    DynamicTree2.prototype.createProxy = function(aabb, userData) {
      var node = this.allocateNode();
      node.aabb.set(aabb);
      AABB.extend(node.aabb, SettingsInternal.aabbExtension);
      node.userData = userData;
      node.height = 0;
      this.insertLeaf(node);
      return node.id;
    };
    DynamicTree2.prototype.destroyProxy = function(id) {
      var node = this.m_nodes[id];
      this.removeLeaf(node);
      this.freeNode(node);
    };
    DynamicTree2.prototype.moveProxy = function(id, aabb, d2) {
      var node = this.m_nodes[id];
      if (node.aabb.contains(aabb)) {
        return false;
      }
      this.removeLeaf(node);
      node.aabb.set(aabb);
      aabb = node.aabb;
      AABB.extend(aabb, SettingsInternal.aabbExtension);
      if (d2.x < 0) {
        aabb.lowerBound.x += d2.x * SettingsInternal.aabbMultiplier;
      } else {
        aabb.upperBound.x += d2.x * SettingsInternal.aabbMultiplier;
      }
      if (d2.y < 0) {
        aabb.lowerBound.y += d2.y * SettingsInternal.aabbMultiplier;
      } else {
        aabb.upperBound.y += d2.y * SettingsInternal.aabbMultiplier;
      }
      this.insertLeaf(node);
      return true;
    };
    DynamicTree2.prototype.insertLeaf = function(leaf) {
      if (this.m_root == null) {
        this.m_root = leaf;
        this.m_root.parent = null;
        return;
      }
      var leafAABB = leaf.aabb;
      var index = this.m_root;
      while (!index.isLeaf()) {
        var child1 = index.child1;
        var child2 = index.child2;
        var area = index.aabb.getPerimeter();
        var combinedArea = AABB.combinedPerimeter(index.aabb, leafAABB);
        var cost = 2 * combinedArea;
        var inheritanceCost = 2 * (combinedArea - area);
        var newArea1 = AABB.combinedPerimeter(leafAABB, child1.aabb);
        var cost1 = newArea1 + inheritanceCost;
        if (!child1.isLeaf()) {
          var oldArea = child1.aabb.getPerimeter();
          cost1 -= oldArea;
        }
        var newArea2 = AABB.combinedPerimeter(leafAABB, child2.aabb);
        var cost2 = newArea2 + inheritanceCost;
        if (!child2.isLeaf()) {
          var oldArea = child2.aabb.getPerimeter();
          cost2 -= oldArea;
        }
        if (cost < cost1 && cost < cost2) {
          break;
        }
        if (cost1 < cost2) {
          index = child1;
        } else {
          index = child2;
        }
      }
      var sibling = index;
      var oldParent = sibling.parent;
      var newParent = this.allocateNode();
      newParent.parent = oldParent;
      newParent.userData = null;
      newParent.aabb.combine(leafAABB, sibling.aabb);
      newParent.height = sibling.height + 1;
      if (oldParent != null) {
        if (oldParent.child1 === sibling) {
          oldParent.child1 = newParent;
        } else {
          oldParent.child2 = newParent;
        }
        newParent.child1 = sibling;
        newParent.child2 = leaf;
        sibling.parent = newParent;
        leaf.parent = newParent;
      } else {
        newParent.child1 = sibling;
        newParent.child2 = leaf;
        sibling.parent = newParent;
        leaf.parent = newParent;
        this.m_root = newParent;
      }
      index = leaf.parent;
      while (index != null) {
        index = this.balance(index);
        var child1 = index.child1;
        var child2 = index.child2;
        index.height = 1 + math_max$6(child1.height, child2.height);
        index.aabb.combine(child1.aabb, child2.aabb);
        index = index.parent;
      }
    };
    DynamicTree2.prototype.removeLeaf = function(leaf) {
      if (leaf === this.m_root) {
        this.m_root = null;
        return;
      }
      var parent = leaf.parent;
      var grandParent = parent.parent;
      var sibling;
      if (parent.child1 === leaf) {
        sibling = parent.child2;
      } else {
        sibling = parent.child1;
      }
      if (grandParent != null) {
        if (grandParent.child1 === parent) {
          grandParent.child1 = sibling;
        } else {
          grandParent.child2 = sibling;
        }
        sibling.parent = grandParent;
        this.freeNode(parent);
        var index = grandParent;
        while (index != null) {
          index = this.balance(index);
          var child1 = index.child1;
          var child2 = index.child2;
          index.aabb.combine(child1.aabb, child2.aabb);
          index.height = 1 + math_max$6(child1.height, child2.height);
          index = index.parent;
        }
      } else {
        this.m_root = sibling;
        sibling.parent = null;
        this.freeNode(parent);
      }
    };
    DynamicTree2.prototype.balance = function(iA) {
      var A = iA;
      if (A.isLeaf() || A.height < 2) {
        return iA;
      }
      var B = A.child1;
      var C = A.child2;
      var balance = C.height - B.height;
      if (balance > 1) {
        var F = C.child1;
        var G = C.child2;
        C.child1 = A;
        C.parent = A.parent;
        A.parent = C;
        if (C.parent != null) {
          if (C.parent.child1 === iA) {
            C.parent.child1 = C;
          } else {
            C.parent.child2 = C;
          }
        } else {
          this.m_root = C;
        }
        if (F.height > G.height) {
          C.child2 = F;
          A.child2 = G;
          G.parent = A;
          A.aabb.combine(B.aabb, G.aabb);
          C.aabb.combine(A.aabb, F.aabb);
          A.height = 1 + math_max$6(B.height, G.height);
          C.height = 1 + math_max$6(A.height, F.height);
        } else {
          C.child2 = G;
          A.child2 = F;
          F.parent = A;
          A.aabb.combine(B.aabb, F.aabb);
          C.aabb.combine(A.aabb, G.aabb);
          A.height = 1 + math_max$6(B.height, F.height);
          C.height = 1 + math_max$6(A.height, G.height);
        }
        return C;
      }
      if (balance < -1) {
        var D = B.child1;
        var E = B.child2;
        B.child1 = A;
        B.parent = A.parent;
        A.parent = B;
        if (B.parent != null) {
          if (B.parent.child1 === A) {
            B.parent.child1 = B;
          } else {
            B.parent.child2 = B;
          }
        } else {
          this.m_root = B;
        }
        if (D.height > E.height) {
          B.child2 = D;
          A.child1 = E;
          E.parent = A;
          A.aabb.combine(C.aabb, E.aabb);
          B.aabb.combine(A.aabb, D.aabb);
          A.height = 1 + math_max$6(C.height, E.height);
          B.height = 1 + math_max$6(A.height, D.height);
        } else {
          B.child2 = E;
          A.child1 = D;
          D.parent = A;
          A.aabb.combine(C.aabb, D.aabb);
          B.aabb.combine(A.aabb, E.aabb);
          A.height = 1 + math_max$6(C.height, D.height);
          B.height = 1 + math_max$6(A.height, E.height);
        }
        return B;
      }
      return A;
    };
    DynamicTree2.prototype.getHeight = function() {
      if (this.m_root == null) {
        return 0;
      }
      return this.m_root.height;
    };
    DynamicTree2.prototype.getAreaRatio = function() {
      if (this.m_root == null) {
        return 0;
      }
      var root = this.m_root;
      var rootArea = root.aabb.getPerimeter();
      var totalArea = 0;
      var node;
      var it2 = this.iteratorPool.allocate().preorder(this.m_root);
      while (node = it2.next()) {
        if (node.height < 0) {
          continue;
        }
        totalArea += node.aabb.getPerimeter();
      }
      this.iteratorPool.release(it2);
      return totalArea / rootArea;
    };
    DynamicTree2.prototype.computeHeight = function(id) {
      var node;
      if (typeof id !== "undefined") {
        node = this.m_nodes[id];
      } else {
        node = this.m_root;
      }
      if (node.isLeaf()) {
        return 0;
      }
      var height1 = this.computeHeight(node.child1.id);
      var height2 = this.computeHeight(node.child2.id);
      return 1 + math_max$6(height1, height2);
    };
    DynamicTree2.prototype.validateStructure = function(node) {
      if (node == null) {
        return;
      }
      if (node === this.m_root)
        ;
      var child1 = node.child1;
      var child2 = node.child2;
      if (node.isLeaf()) {
        return;
      }
      this.validateStructure(child1);
      this.validateStructure(child2);
    };
    DynamicTree2.prototype.validateMetrics = function(node) {
      if (node == null) {
        return;
      }
      var child1 = node.child1;
      var child2 = node.child2;
      if (node.isLeaf()) {
        return;
      }
      child1.height;
      child2.height;
      var aabb = new AABB();
      aabb.combine(child1.aabb, child2.aabb);
      this.validateMetrics(child1);
      this.validateMetrics(child2);
    };
    DynamicTree2.prototype.validate = function() {
      return;
    };
    DynamicTree2.prototype.getMaxBalance = function() {
      var maxBalance = 0;
      var node;
      var it2 = this.iteratorPool.allocate().preorder(this.m_root);
      while (node = it2.next()) {
        if (node.height <= 1) {
          continue;
        }
        var balance = math_abs$8(node.child2.height - node.child1.height);
        maxBalance = math_max$6(maxBalance, balance);
      }
      this.iteratorPool.release(it2);
      return maxBalance;
    };
    DynamicTree2.prototype.rebuildBottomUp = function() {
      var nodes = [];
      var count = 0;
      var node;
      var it2 = this.iteratorPool.allocate().preorder(this.m_root);
      while (node = it2.next()) {
        if (node.height < 0) {
          continue;
        }
        if (node.isLeaf()) {
          node.parent = null;
          nodes[count] = node;
          ++count;
        } else {
          this.freeNode(node);
        }
      }
      this.iteratorPool.release(it2);
      while (count > 1) {
        var minCost = Infinity;
        var iMin = -1;
        var jMin = -1;
        for (var i = 0; i < count; ++i) {
          var aabbi = nodes[i].aabb;
          for (var j = i + 1; j < count; ++j) {
            var aabbj = nodes[j].aabb;
            var cost = AABB.combinedPerimeter(aabbi, aabbj);
            if (cost < minCost) {
              iMin = i;
              jMin = j;
              minCost = cost;
            }
          }
        }
        var child1 = nodes[iMin];
        var child2 = nodes[jMin];
        var parent_1 = this.allocateNode();
        parent_1.child1 = child1;
        parent_1.child2 = child2;
        parent_1.height = 1 + math_max$6(child1.height, child2.height);
        parent_1.aabb.combine(child1.aabb, child2.aabb);
        parent_1.parent = null;
        child1.parent = parent_1;
        child2.parent = parent_1;
        nodes[jMin] = nodes[count - 1];
        nodes[iMin] = parent_1;
        --count;
      }
      this.m_root = nodes[0];
    };
    DynamicTree2.prototype.shiftOrigin = function(newOrigin) {
      var node;
      var it2 = this.iteratorPool.allocate().preorder(this.m_root);
      while (node = it2.next()) {
        var aabb = node.aabb;
        aabb.lowerBound.x -= newOrigin.x;
        aabb.lowerBound.y -= newOrigin.y;
        aabb.upperBound.x -= newOrigin.x;
        aabb.upperBound.y -= newOrigin.y;
      }
      this.iteratorPool.release(it2);
    };
    DynamicTree2.prototype.query = function(aabb, queryCallback) {
      var stack = this.stackPool.allocate();
      stack.push(this.m_root);
      while (stack.length > 0) {
        var node = stack.pop();
        if (node == null) {
          continue;
        }
        if (AABB.testOverlap(node.aabb, aabb)) {
          if (node.isLeaf()) {
            var proceed = queryCallback(node.id);
            if (proceed === false) {
              return;
            }
          } else {
            stack.push(node.child1);
            stack.push(node.child2);
          }
        }
      }
      this.stackPool.release(stack);
    };
    DynamicTree2.prototype.rayCast = function(input2, rayCastCallback) {
      var p1 = input2.p1;
      var p2 = input2.p2;
      var r = Vec2.sub(p2, p1);
      r.normalize();
      var v3 = Vec2.crossNumVec2(1, r);
      var abs_v = Vec2.abs(v3);
      var maxFraction = input2.maxFraction;
      var segmentAABB = new AABB();
      var t = Vec2.combine(1 - maxFraction, p1, maxFraction, p2);
      segmentAABB.combinePoints(p1, t);
      var stack = this.stackPool.allocate();
      var subInput = this.inputPool.allocate();
      stack.push(this.m_root);
      while (stack.length > 0) {
        var node = stack.pop();
        if (node == null) {
          continue;
        }
        if (AABB.testOverlap(node.aabb, segmentAABB) === false) {
          continue;
        }
        var c2 = node.aabb.getCenter();
        var h = node.aabb.getExtents();
        var separation = math_abs$8(Vec2.dot(v3, Vec2.sub(p1, c2))) - Vec2.dot(abs_v, h);
        if (separation > 0) {
          continue;
        }
        if (node.isLeaf()) {
          subInput.p1 = Vec2.clone(input2.p1);
          subInput.p2 = Vec2.clone(input2.p2);
          subInput.maxFraction = maxFraction;
          var value = rayCastCallback(subInput, node.id);
          if (value === 0) {
            return;
          }
          if (value > 0) {
            maxFraction = value;
            t = Vec2.combine(1 - maxFraction, p1, maxFraction, p2);
            segmentAABB.combinePoints(p1, t);
          }
        } else {
          stack.push(node.child1);
          stack.push(node.child2);
        }
      }
      this.stackPool.release(stack);
      this.inputPool.release(subInput);
    };
    return DynamicTree2;
  }();
  var Iterator = function() {
    function Iterator2() {
      this.parents = [];
      this.states = [];
    }
    __name(Iterator2, "Iterator");
    Iterator2.prototype.preorder = function(root) {
      this.parents.length = 0;
      this.parents.push(root);
      this.states.length = 0;
      this.states.push(0);
      return this;
    };
    Iterator2.prototype.next = function() {
      while (this.parents.length > 0) {
        var i = this.parents.length - 1;
        var node = this.parents[i];
        if (this.states[i] === 0) {
          this.states[i] = 1;
          return node;
        }
        if (this.states[i] === 1) {
          this.states[i] = 2;
          if (node.child1) {
            this.parents.push(node.child1);
            this.states.push(1);
            return node.child1;
          }
        }
        if (this.states[i] === 2) {
          this.states[i] = 3;
          if (node.child2) {
            this.parents.push(node.child2);
            this.states.push(1);
            return node.child2;
          }
        }
        this.parents.pop();
        this.states.pop();
      }
    };
    Iterator2.prototype.close = function() {
      this.parents.length = 0;
    };
    return Iterator2;
  }();
  var math_max$5 = Math.max;
  var math_min$6 = Math.min;
  var BroadPhase = function() {
    function BroadPhase2() {
      var _this = this;
      this.m_tree = new DynamicTree();
      this.m_moveBuffer = [];
      this.query = function(aabb, queryCallback) {
        _this.m_tree.query(aabb, queryCallback);
      };
      this.queryCallback = function(proxyId) {
        if (proxyId === _this.m_queryProxyId) {
          return true;
        }
        var proxyIdA = math_min$6(proxyId, _this.m_queryProxyId);
        var proxyIdB = math_max$5(proxyId, _this.m_queryProxyId);
        var userDataA = _this.m_tree.getUserData(proxyIdA);
        var userDataB = _this.m_tree.getUserData(proxyIdB);
        _this.m_callback(userDataA, userDataB);
        return true;
      };
    }
    __name(BroadPhase2, "BroadPhase");
    BroadPhase2.prototype.getUserData = function(proxyId) {
      return this.m_tree.getUserData(proxyId);
    };
    BroadPhase2.prototype.testOverlap = function(proxyIdA, proxyIdB) {
      var aabbA = this.m_tree.getFatAABB(proxyIdA);
      var aabbB = this.m_tree.getFatAABB(proxyIdB);
      return AABB.testOverlap(aabbA, aabbB);
    };
    BroadPhase2.prototype.getFatAABB = function(proxyId) {
      return this.m_tree.getFatAABB(proxyId);
    };
    BroadPhase2.prototype.getProxyCount = function() {
      return this.m_moveBuffer.length;
    };
    BroadPhase2.prototype.getTreeHeight = function() {
      return this.m_tree.getHeight();
    };
    BroadPhase2.prototype.getTreeBalance = function() {
      return this.m_tree.getMaxBalance();
    };
    BroadPhase2.prototype.getTreeQuality = function() {
      return this.m_tree.getAreaRatio();
    };
    BroadPhase2.prototype.rayCast = function(input2, rayCastCallback) {
      this.m_tree.rayCast(input2, rayCastCallback);
    };
    BroadPhase2.prototype.shiftOrigin = function(newOrigin) {
      this.m_tree.shiftOrigin(newOrigin);
    };
    BroadPhase2.prototype.createProxy = function(aabb, userData) {
      var proxyId = this.m_tree.createProxy(aabb, userData);
      this.bufferMove(proxyId);
      return proxyId;
    };
    BroadPhase2.prototype.destroyProxy = function(proxyId) {
      this.unbufferMove(proxyId);
      this.m_tree.destroyProxy(proxyId);
    };
    BroadPhase2.prototype.moveProxy = function(proxyId, aabb, displacement2) {
      var changed = this.m_tree.moveProxy(proxyId, aabb, displacement2);
      if (changed) {
        this.bufferMove(proxyId);
      }
    };
    BroadPhase2.prototype.touchProxy = function(proxyId) {
      this.bufferMove(proxyId);
    };
    BroadPhase2.prototype.bufferMove = function(proxyId) {
      this.m_moveBuffer.push(proxyId);
    };
    BroadPhase2.prototype.unbufferMove = function(proxyId) {
      for (var i = 0; i < this.m_moveBuffer.length; ++i) {
        if (this.m_moveBuffer[i] === proxyId) {
          this.m_moveBuffer[i] = null;
        }
      }
    };
    BroadPhase2.prototype.updatePairs = function(addPairCallback) {
      this.m_callback = addPairCallback;
      while (this.m_moveBuffer.length > 0) {
        this.m_queryProxyId = this.m_moveBuffer.pop();
        if (this.m_queryProxyId === null) {
          continue;
        }
        var fatAABB = this.m_tree.getFatAABB(this.m_queryProxyId);
        this.m_tree.query(fatAABB, this.queryCallback);
      }
    };
    return BroadPhase2;
  }();
  var math_sin$2 = Math.sin;
  var math_cos$2 = Math.cos;
  var math_sqrt$4 = Math.sqrt;
  function vec22(x3, y) {
    return { x: x3, y };
  }
  __name(vec22, "vec2");
  function rotation(angle) {
    return { s: math_sin$2(angle), c: math_cos$2(angle) };
  }
  __name(rotation, "rotation");
  function setVec2(out, x3, y) {
    out.x = x3;
    out.y = y;
    return out;
  }
  __name(setVec2, "setVec2");
  function copyVec2(out, w) {
    out.x = w.x;
    out.y = w.y;
    return out;
  }
  __name(copyVec2, "copyVec2");
  function zeroVec2(out) {
    out.x = 0;
    out.y = 0;
    return out;
  }
  __name(zeroVec2, "zeroVec2");
  function negVec2(out) {
    out.x = -out.x;
    out.y = -out.y;
    return out;
  }
  __name(negVec2, "negVec2");
  function addVec2(out, w) {
    out.x += w.x;
    out.y += w.y;
    return out;
  }
  __name(addVec2, "addVec2");
  function sumVec2(out, v3, w) {
    out.x = v3.x + w.x;
    out.y = v3.x + w.y;
    return out;
  }
  __name(sumVec2, "sumVec2");
  function subVec2(out, w) {
    out.x -= w.x;
    out.y -= w.y;
    return out;
  }
  __name(subVec2, "subVec2");
  function diffVec2(out, v3, w) {
    out.x = v3.x - w.x;
    out.y = v3.y - w.y;
    return out;
  }
  __name(diffVec2, "diffVec2");
  function scaleVec2(out, m) {
    out.x *= m;
    out.y *= m;
    return out;
  }
  __name(scaleVec2, "scaleVec2");
  function setMulVec2(out, m, w) {
    out.x = m * w.x;
    out.y = m * w.y;
    return out;
  }
  __name(setMulVec2, "setMulVec2");
  function addMulVec2(out, m, w) {
    out.x += m * w.x;
    out.y += m * w.y;
    return out;
  }
  __name(addMulVec2, "addMulVec2");
  function subMulVec2(out, m, w) {
    out.x -= m * w.x;
    out.y -= m * w.y;
    return out;
  }
  __name(subMulVec2, "subMulVec2");
  function combineVec2(out, am, a2, bm, b2) {
    out.x = am * a2.x + bm * b2.x;
    out.y = am * a2.y + bm * b2.y;
    return out;
  }
  __name(combineVec2, "combineVec2");
  function normalizeVec2Length(out) {
    var length = math_sqrt$4(out.x * out.x + out.y * out.y);
    if (length !== 0) {
      var invLength = 1 / length;
      out.x *= invLength;
      out.y *= invLength;
    }
    return length;
  }
  __name(normalizeVec2Length, "normalizeVec2Length");
  function normalizeVec2(out) {
    var length = math_sqrt$4(out.x * out.x + out.y * out.y);
    if (length > 0) {
      var invLength = 1 / length;
      out.x *= invLength;
      out.y *= invLength;
    }
    return out;
  }
  __name(normalizeVec2, "normalizeVec2");
  function crossVec2Num(out, v3, w) {
    var x3 = w * v3.y;
    var y = -w * v3.x;
    out.x = x3;
    out.y = y;
    return out;
  }
  __name(crossVec2Num, "crossVec2Num");
  function crossNumVec2(out, w, v3) {
    var x3 = -w * v3.y;
    var y = w * v3.x;
    out.x = x3;
    out.y = y;
    return out;
  }
  __name(crossNumVec2, "crossNumVec2");
  function crossVec2Vec2(a2, b2) {
    return a2.x * b2.y - a2.y * b2.x;
  }
  __name(crossVec2Vec2, "crossVec2Vec2");
  function dotVec2(a2, b2) {
    return a2.x * b2.x + a2.y * b2.y;
  }
  __name(dotVec2, "dotVec2");
  function lengthSqrVec2(a2) {
    return a2.x * a2.x + a2.y * a2.y;
  }
  __name(lengthSqrVec2, "lengthSqrVec2");
  function distVec2(a2, b2) {
    var dx = a2.x - b2.x;
    var dy = a2.y - b2.y;
    return math_sqrt$4(dx * dx + dy * dy);
  }
  __name(distVec2, "distVec2");
  function distSqrVec2(a2, b2) {
    var dx = a2.x - b2.x;
    var dy = a2.y - b2.y;
    return dx * dx + dy * dy;
  }
  __name(distSqrVec2, "distSqrVec2");
  function setRotAngle(out, a2) {
    out.c = math_cos$2(a2);
    out.s = math_sin$2(a2);
    return out;
  }
  __name(setRotAngle, "setRotAngle");
  function rotVec2(out, q, v3) {
    out.x = q.c * v3.x - q.s * v3.y;
    out.y = q.s * v3.x + q.c * v3.y;
    return out;
  }
  __name(rotVec2, "rotVec2");
  function invRotVec2(out, q, v3) {
    var x3 = q.c * v3.x + q.s * v3.y;
    var y = -q.s * v3.x + q.c * v3.y;
    out.x = x3;
    out.y = y;
    return out;
  }
  __name(invRotVec2, "invRotVec2");
  function rerotVec2(out, before, after, v3) {
    var x0 = before.c * v3.x + before.s * v3.y;
    var y0 = -before.s * v3.x + before.c * v3.y;
    var x3 = after.c * x0 - after.s * y0;
    var y = after.s * x0 + after.c * y0;
    out.x = x3;
    out.y = y;
    return out;
  }
  __name(rerotVec2, "rerotVec2");
  function transform(x3, y, a2) {
    return { p: vec22(x3, y), q: rotation(a2) };
  }
  __name(transform, "transform");
  function copyTransform(out, transform2) {
    out.p.x = transform2.p.x;
    out.p.y = transform2.p.y;
    out.q.s = transform2.q.s;
    out.q.c = transform2.q.c;
    return out;
  }
  __name(copyTransform, "copyTransform");
  function transformVec2(out, xf2, v3) {
    var x3 = xf2.q.c * v3.x - xf2.q.s * v3.y + xf2.p.x;
    var y = xf2.q.s * v3.x + xf2.q.c * v3.y + xf2.p.y;
    out.x = x3;
    out.y = y;
    return out;
  }
  __name(transformVec2, "transformVec2");
  function invTransformVec2(out, xf2, v3) {
    var px = v3.x - xf2.p.x;
    var py = v3.y - xf2.p.y;
    var x3 = xf2.q.c * px + xf2.q.s * py;
    var y = -xf2.q.s * px + xf2.q.c * py;
    out.x = x3;
    out.y = y;
    return out;
  }
  __name(invTransformVec2, "invTransformVec2");
  function retransformVec2(out, from, to, v3) {
    var x0 = from.q.c * v3.x - from.q.s * v3.y + from.p.x;
    var y0 = from.q.s * v3.x + from.q.c * v3.y + from.p.y;
    var px = x0 - to.p.x;
    var py = y0 - to.p.y;
    var x3 = to.q.c * px + to.q.s * py;
    var y = -to.q.s * px + to.q.c * py;
    out.x = x3;
    out.y = y;
    return out;
  }
  __name(retransformVec2, "retransformVec2");
  function invTransformTransform(out, a2, b2) {
    var c2 = a2.q.c * b2.q.c + a2.q.s * b2.q.s;
    var s2 = a2.q.c * b2.q.s - a2.q.s * b2.q.c;
    var x3 = a2.q.c * (b2.p.x - a2.p.x) + a2.q.s * (b2.p.y - a2.p.y);
    var y = -a2.q.s * (b2.p.x - a2.p.x) + a2.q.c * (b2.p.y - a2.p.y);
    out.q.c = c2;
    out.q.s = s2;
    out.p.x = x3;
    out.p.y = y;
    return out;
  }
  __name(invTransformTransform, "invTransformTransform");
  var math_sin$1 = Math.sin;
  var math_cos$1 = Math.cos;
  var math_atan2$1 = Math.atan2;
  var Rot = function() {
    function Rot2(angle) {
      if (!(this instanceof Rot2)) {
        return new Rot2(angle);
      }
      if (typeof angle === "number") {
        this.setAngle(angle);
      } else if (typeof angle === "object") {
        this.setRot(angle);
      } else {
        this.setIdentity();
      }
    }
    __name(Rot2, "Rot");
    Rot2.neo = function(angle) {
      var obj = Object.create(Rot2.prototype);
      obj.setAngle(angle);
      return obj;
    };
    Rot2.clone = function(rot) {
      var obj = Object.create(Rot2.prototype);
      obj.s = rot.s;
      obj.c = rot.c;
      return obj;
    };
    Rot2.identity = function() {
      var obj = Object.create(Rot2.prototype);
      obj.s = 0;
      obj.c = 1;
      return obj;
    };
    Rot2.isValid = function(obj) {
      if (obj === null || typeof obj === "undefined") {
        return false;
      }
      return Number.isFinite(obj.s) && Number.isFinite(obj.c);
    };
    Rot2.assert = function(o2) {
    };
    Rot2.prototype.setIdentity = function() {
      this.s = 0;
      this.c = 1;
    };
    Rot2.prototype.set = function(angle) {
      if (typeof angle === "object") {
        this.s = angle.s;
        this.c = angle.c;
      } else {
        this.s = math_sin$1(angle);
        this.c = math_cos$1(angle);
      }
    };
    Rot2.prototype.setRot = function(angle) {
      this.s = angle.s;
      this.c = angle.c;
    };
    Rot2.prototype.setAngle = function(angle) {
      this.s = math_sin$1(angle);
      this.c = math_cos$1(angle);
    };
    Rot2.prototype.getAngle = function() {
      return math_atan2$1(this.s, this.c);
    };
    Rot2.prototype.getXAxis = function() {
      return Vec2.neo(this.c, this.s);
    };
    Rot2.prototype.getYAxis = function() {
      return Vec2.neo(-this.s, this.c);
    };
    Rot2.mul = function(rot, m) {
      if ("c" in m && "s" in m) {
        var qr = Rot2.identity();
        qr.s = rot.s * m.c + rot.c * m.s;
        qr.c = rot.c * m.c - rot.s * m.s;
        return qr;
      } else if ("x" in m && "y" in m) {
        return Vec2.neo(rot.c * m.x - rot.s * m.y, rot.s * m.x + rot.c * m.y);
      }
    };
    Rot2.mulRot = function(rot, m) {
      var qr = Rot2.identity();
      qr.s = rot.s * m.c + rot.c * m.s;
      qr.c = rot.c * m.c - rot.s * m.s;
      return qr;
    };
    Rot2.mulVec2 = function(rot, m) {
      return Vec2.neo(rot.c * m.x - rot.s * m.y, rot.s * m.x + rot.c * m.y);
    };
    Rot2.mulSub = function(rot, v3, w) {
      var x3 = rot.c * (v3.x - w.x) - rot.s * (v3.y - w.y);
      var y = rot.s * (v3.x - w.x) + rot.c * (v3.y - w.y);
      return Vec2.neo(x3, y);
    };
    Rot2.mulT = function(rot, m) {
      if ("c" in m && "s" in m) {
        var qr = Rot2.identity();
        qr.s = rot.c * m.s - rot.s * m.c;
        qr.c = rot.c * m.c + rot.s * m.s;
        return qr;
      } else if ("x" in m && "y" in m) {
        return Vec2.neo(rot.c * m.x + rot.s * m.y, -rot.s * m.x + rot.c * m.y);
      }
    };
    Rot2.mulTRot = function(rot, m) {
      var qr = Rot2.identity();
      qr.s = rot.c * m.s - rot.s * m.c;
      qr.c = rot.c * m.c + rot.s * m.s;
      return qr;
    };
    Rot2.mulTVec2 = function(rot, m) {
      return Vec2.neo(rot.c * m.x + rot.s * m.y, -rot.s * m.x + rot.c * m.y);
    };
    return Rot2;
  }();
  var math_atan2 = Math.atan2;
  var math_PI$5 = Math.PI;
  var temp$7 = vec22(0, 0);
  var Sweep = function() {
    function Sweep2() {
      this.localCenter = Vec2.zero();
      this.c = Vec2.zero();
      this.a = 0;
      this.alpha0 = 0;
      this.c0 = Vec2.zero();
      this.a0 = 0;
    }
    __name(Sweep2, "Sweep");
    Sweep2.prototype.recycle = function() {
      zeroVec2(this.localCenter);
      zeroVec2(this.c);
      this.a = 0;
      this.alpha0 = 0;
      zeroVec2(this.c0);
      this.a0 = 0;
    };
    Sweep2.prototype.setTransform = function(xf2) {
      transformVec2(temp$7, xf2, this.localCenter);
      copyVec2(this.c, temp$7);
      copyVec2(this.c0, temp$7);
      this.a = this.a0 = math_atan2(xf2.q.s, xf2.q.c);
    };
    Sweep2.prototype.setLocalCenter = function(localCenter2, xf2) {
      copyVec2(this.localCenter, localCenter2);
      transformVec2(temp$7, xf2, this.localCenter);
      copyVec2(this.c, temp$7);
      copyVec2(this.c0, temp$7);
    };
    Sweep2.prototype.getTransform = function(xf2, beta) {
      if (beta === void 0) {
        beta = 0;
      }
      setRotAngle(xf2.q, (1 - beta) * this.a0 + beta * this.a);
      combineVec2(xf2.p, 1 - beta, this.c0, beta, this.c);
      subVec2(xf2.p, rotVec2(temp$7, xf2.q, this.localCenter));
    };
    Sweep2.prototype.advance = function(alpha) {
      var beta = (alpha - this.alpha0) / (1 - this.alpha0);
      combineVec2(this.c0, beta, this.c, 1 - beta, this.c0);
      this.a0 = beta * this.a + (1 - beta) * this.a0;
      this.alpha0 = alpha;
    };
    Sweep2.prototype.forward = function() {
      this.a0 = this.a;
      copyVec2(this.c0, this.c);
    };
    Sweep2.prototype.normalize = function() {
      var a0 = mod(this.a0, -math_PI$5, +math_PI$5);
      this.a -= this.a0 - a0;
      this.a0 = a0;
    };
    Sweep2.prototype.set = function(that) {
      copyVec2(this.localCenter, that.localCenter);
      copyVec2(this.c, that.c);
      this.a = that.a;
      this.alpha0 = that.alpha0;
      copyVec2(this.c0, that.c0);
      this.a0 = that.a0;
    };
    return Sweep2;
  }();
  var Transform = function() {
    function Transform2(position, rotation2) {
      if (!(this instanceof Transform2)) {
        return new Transform2(position, rotation2);
      }
      this.p = Vec2.zero();
      this.q = Rot.identity();
      if (typeof position !== "undefined") {
        this.p.setVec2(position);
      }
      if (typeof rotation2 !== "undefined") {
        this.q.setAngle(rotation2);
      }
    }
    __name(Transform2, "Transform");
    Transform2.clone = function(xf2) {
      var obj = Object.create(Transform2.prototype);
      obj.p = Vec2.clone(xf2.p);
      obj.q = Rot.clone(xf2.q);
      return obj;
    };
    Transform2.neo = function(position, rotation2) {
      var obj = Object.create(Transform2.prototype);
      obj.p = Vec2.clone(position);
      obj.q = Rot.clone(rotation2);
      return obj;
    };
    Transform2.identity = function() {
      var obj = Object.create(Transform2.prototype);
      obj.p = Vec2.zero();
      obj.q = Rot.identity();
      return obj;
    };
    Transform2.prototype.setIdentity = function() {
      this.p.setZero();
      this.q.setIdentity();
    };
    Transform2.prototype.set = function(a2, b2) {
      if (typeof b2 === "undefined") {
        this.p.set(a2.p);
        this.q.set(a2.q);
      } else {
        this.p.set(a2);
        this.q.set(b2);
      }
    };
    Transform2.prototype.setNum = function(position, rotation2) {
      this.p.setVec2(position);
      this.q.setAngle(rotation2);
    };
    Transform2.prototype.setTransform = function(xf2) {
      this.p.setVec2(xf2.p);
      this.q.setRot(xf2.q);
    };
    Transform2.isValid = function(obj) {
      if (obj === null || typeof obj === "undefined") {
        return false;
      }
      return Vec2.isValid(obj.p) && Rot.isValid(obj.q);
    };
    Transform2.assert = function(o2) {
    };
    Transform2.mul = function(a2, b2) {
      if (Array.isArray(b2)) {
        var arr = [];
        for (var i = 0; i < b2.length; i++) {
          arr[i] = Transform2.mul(a2, b2[i]);
        }
        return arr;
      } else if ("x" in b2 && "y" in b2) {
        return Transform2.mulVec2(a2, b2);
      } else if ("p" in b2 && "q" in b2) {
        return Transform2.mulXf(a2, b2);
      }
    };
    Transform2.mulAll = function(a2, b2) {
      var arr = [];
      for (var i = 0; i < b2.length; i++) {
        arr[i] = Transform2.mul(a2, b2[i]);
      }
      return arr;
    };
    Transform2.mulFn = function(a2) {
      return function(b2) {
        return Transform2.mul(a2, b2);
      };
    };
    Transform2.mulVec2 = function(a2, b2) {
      var x3 = a2.q.c * b2.x - a2.q.s * b2.y + a2.p.x;
      var y = a2.q.s * b2.x + a2.q.c * b2.y + a2.p.y;
      return Vec2.neo(x3, y);
    };
    Transform2.mulXf = function(a2, b2) {
      var xf2 = Transform2.identity();
      xf2.q = Rot.mulRot(a2.q, b2.q);
      xf2.p = Vec2.add(Rot.mulVec2(a2.q, b2.p), a2.p);
      return xf2;
    };
    Transform2.mulT = function(a2, b2) {
      if ("x" in b2 && "y" in b2) {
        return Transform2.mulTVec2(a2, b2);
      } else if ("p" in b2 && "q" in b2) {
        return Transform2.mulTXf(a2, b2);
      }
    };
    Transform2.mulTVec2 = function(a2, b2) {
      var px = b2.x - a2.p.x;
      var py = b2.y - a2.p.y;
      var x3 = a2.q.c * px + a2.q.s * py;
      var y = -a2.q.s * px + a2.q.c * py;
      return Vec2.neo(x3, y);
    };
    Transform2.mulTXf = function(a2, b2) {
      var xf2 = Transform2.identity();
      xf2.q.setRot(Rot.mulTRot(a2.q, b2.q));
      xf2.p.setVec2(Rot.mulTVec2(a2.q, Vec2.sub(b2.p, a2.p)));
      return xf2;
    };
    return Transform2;
  }();
  var Velocity = function() {
    function Velocity2() {
      this.v = Vec2.zero();
      this.w = 0;
    }
    __name(Velocity2, "Velocity");
    return Velocity2;
  }();
  var math_sin = Math.sin;
  var math_cos = Math.cos;
  var Position = function() {
    function Position2() {
      this.c = Vec2.zero();
      this.a = 0;
    }
    __name(Position2, "Position");
    Position2.prototype.getTransform = function(xf2, p) {
      xf2.q.c = math_cos(this.a);
      xf2.q.s = math_sin(this.a);
      xf2.p.x = this.c.x - (xf2.q.c * p.x - xf2.q.s * p.y);
      xf2.p.y = this.c.y - (xf2.q.s * p.x + xf2.q.c * p.y);
      return xf2;
    };
    return Position2;
  }();
  function getTransform(xf2, p, c2, a2) {
    xf2.q.c = math_cos(a2);
    xf2.q.s = math_sin(a2);
    xf2.p.x = c2.x - (xf2.q.c * p.x - xf2.q.s * p.y);
    xf2.p.y = c2.y - (xf2.q.s * p.x + xf2.q.c * p.y);
    return xf2;
  }
  __name(getTransform, "getTransform");
  var Shape = function() {
    function Shape2() {
    }
    __name(Shape2, "Shape");
    Shape2.isValid = function(obj) {
      if (obj === null || typeof obj === "undefined") {
        return false;
      }
      return typeof obj.m_type === "string" && typeof obj.m_radius === "number";
    };
    return Shape2;
  }();
  var synchronize_aabb1 = new AABB();
  var synchronize_aabb2 = new AABB();
  var displacement = vec22(0, 0);
  var FixtureDefDefault = {
    userData: null,
    friction: 0.2,
    restitution: 0,
    density: 0,
    isSensor: false,
    filterGroupIndex: 0,
    filterCategoryBits: 1,
    filterMaskBits: 65535
  };
  var FixtureProxy = function() {
    function FixtureProxy2(fixture, childIndex) {
      this.aabb = new AABB();
      this.fixture = fixture;
      this.childIndex = childIndex;
      this.proxyId;
    }
    __name(FixtureProxy2, "FixtureProxy");
    return FixtureProxy2;
  }();
  var Fixture = function() {
    function Fixture2(body, shape, def) {
      if (shape.shape) {
        def = shape;
        shape = shape.shape;
      } else if (typeof def === "number") {
        def = { density: def };
      }
      def = options(def, FixtureDefDefault);
      this.m_body = body;
      this.m_friction = def.friction;
      this.m_restitution = def.restitution;
      this.m_density = def.density;
      this.m_isSensor = def.isSensor;
      this.m_filterGroupIndex = def.filterGroupIndex;
      this.m_filterCategoryBits = def.filterCategoryBits;
      this.m_filterMaskBits = def.filterMaskBits;
      this.m_shape = shape;
      this.m_next = null;
      this.m_proxies = [];
      this.m_proxyCount = 0;
      var childCount = this.m_shape.getChildCount();
      for (var i = 0; i < childCount; ++i) {
        this.m_proxies[i] = new FixtureProxy(this, i);
      }
      this.m_userData = def.userData;
    }
    __name(Fixture2, "Fixture");
    Fixture2.prototype._reset = function() {
      var body = this.getBody();
      var broadPhase = body.m_world.m_broadPhase;
      this.destroyProxies(broadPhase);
      if (this.m_shape._reset) {
        this.m_shape._reset();
      }
      var childCount = this.m_shape.getChildCount();
      for (var i = 0; i < childCount; ++i) {
        this.m_proxies[i] = new FixtureProxy(this, i);
      }
      this.createProxies(broadPhase, body.m_xf);
      body.resetMassData();
    };
    Fixture2.prototype._serialize = function() {
      return {
        friction: this.m_friction,
        restitution: this.m_restitution,
        density: this.m_density,
        isSensor: this.m_isSensor,
        filterGroupIndex: this.m_filterGroupIndex,
        filterCategoryBits: this.m_filterCategoryBits,
        filterMaskBits: this.m_filterMaskBits,
        shape: this.m_shape
      };
    };
    Fixture2._deserialize = function(data, body, restore) {
      var shape = restore(Shape, data.shape);
      var fixture = shape && new Fixture2(body, shape, data);
      return fixture;
    };
    Fixture2.prototype.getType = function() {
      return this.m_shape.m_type;
    };
    Fixture2.prototype.getShape = function() {
      return this.m_shape;
    };
    Fixture2.prototype.isSensor = function() {
      return this.m_isSensor;
    };
    Fixture2.prototype.setSensor = function(sensor) {
      if (sensor != this.m_isSensor) {
        this.m_body.setAwake(true);
        this.m_isSensor = sensor;
      }
    };
    Fixture2.prototype.getUserData = function() {
      return this.m_userData;
    };
    Fixture2.prototype.setUserData = function(data) {
      this.m_userData = data;
    };
    Fixture2.prototype.getBody = function() {
      return this.m_body;
    };
    Fixture2.prototype.getNext = function() {
      return this.m_next;
    };
    Fixture2.prototype.getDensity = function() {
      return this.m_density;
    };
    Fixture2.prototype.setDensity = function(density) {
      this.m_density = density;
    };
    Fixture2.prototype.getFriction = function() {
      return this.m_friction;
    };
    Fixture2.prototype.setFriction = function(friction) {
      this.m_friction = friction;
    };
    Fixture2.prototype.getRestitution = function() {
      return this.m_restitution;
    };
    Fixture2.prototype.setRestitution = function(restitution) {
      this.m_restitution = restitution;
    };
    Fixture2.prototype.testPoint = function(p) {
      return this.m_shape.testPoint(this.m_body.getTransform(), p);
    };
    Fixture2.prototype.rayCast = function(output2, input2, childIndex) {
      return this.m_shape.rayCast(output2, input2, this.m_body.getTransform(), childIndex);
    };
    Fixture2.prototype.getMassData = function(massData) {
      this.m_shape.computeMass(massData, this.m_density);
    };
    Fixture2.prototype.getAABB = function(childIndex) {
      return this.m_proxies[childIndex].aabb;
    };
    Fixture2.prototype.createProxies = function(broadPhase, xf2) {
      this.m_proxyCount = this.m_shape.getChildCount();
      for (var i = 0; i < this.m_proxyCount; ++i) {
        var proxy = this.m_proxies[i];
        this.m_shape.computeAABB(proxy.aabb, xf2, i);
        proxy.proxyId = broadPhase.createProxy(proxy.aabb, proxy);
      }
    };
    Fixture2.prototype.destroyProxies = function(broadPhase) {
      for (var i = 0; i < this.m_proxyCount; ++i) {
        var proxy = this.m_proxies[i];
        broadPhase.destroyProxy(proxy.proxyId);
        proxy.proxyId = null;
      }
      this.m_proxyCount = 0;
    };
    Fixture2.prototype.synchronize = function(broadPhase, xf1, xf2) {
      for (var i = 0; i < this.m_proxyCount; ++i) {
        var proxy = this.m_proxies[i];
        this.m_shape.computeAABB(synchronize_aabb1, xf1, proxy.childIndex);
        this.m_shape.computeAABB(synchronize_aabb2, xf2, proxy.childIndex);
        proxy.aabb.combine(synchronize_aabb1, synchronize_aabb2);
        diffVec2(displacement, xf2.p, xf1.p);
        broadPhase.moveProxy(proxy.proxyId, proxy.aabb, displacement);
      }
    };
    Fixture2.prototype.setFilterData = function(filter) {
      this.m_filterGroupIndex = filter.groupIndex;
      this.m_filterCategoryBits = filter.categoryBits;
      this.m_filterMaskBits = filter.maskBits;
      this.refilter();
    };
    Fixture2.prototype.getFilterGroupIndex = function() {
      return this.m_filterGroupIndex;
    };
    Fixture2.prototype.setFilterGroupIndex = function(groupIndex) {
      this.m_filterGroupIndex = groupIndex;
      this.refilter();
    };
    Fixture2.prototype.getFilterCategoryBits = function() {
      return this.m_filterCategoryBits;
    };
    Fixture2.prototype.setFilterCategoryBits = function(categoryBits) {
      this.m_filterCategoryBits = categoryBits;
      this.refilter();
    };
    Fixture2.prototype.getFilterMaskBits = function() {
      return this.m_filterMaskBits;
    };
    Fixture2.prototype.setFilterMaskBits = function(maskBits) {
      this.m_filterMaskBits = maskBits;
      this.refilter();
    };
    Fixture2.prototype.refilter = function() {
      if (this.m_body == null) {
        return;
      }
      var edge = this.m_body.getContactList();
      while (edge) {
        var contact = edge.contact;
        var fixtureA = contact.getFixtureA();
        var fixtureB = contact.getFixtureB();
        if (fixtureA == this || fixtureB == this) {
          contact.flagForFiltering();
        }
        edge = edge.next;
      }
      var world2 = this.m_body.getWorld();
      if (world2 == null) {
        return;
      }
      var broadPhase = world2.m_broadPhase;
      for (var i = 0; i < this.m_proxyCount; ++i) {
        broadPhase.touchProxy(this.m_proxies[i].proxyId);
      }
    };
    Fixture2.prototype.shouldCollide = function(that) {
      if (that.m_filterGroupIndex === this.m_filterGroupIndex && that.m_filterGroupIndex !== 0) {
        return that.m_filterGroupIndex > 0;
      }
      var collideA = (that.m_filterMaskBits & this.m_filterCategoryBits) !== 0;
      var collideB = (that.m_filterCategoryBits & this.m_filterMaskBits) !== 0;
      var collide = collideA && collideB;
      return collide;
    };
    return Fixture2;
  }();
  var STATIC = "static";
  var KINEMATIC = "kinematic";
  var DYNAMIC = "dynamic";
  var oldCenter = vec22(0, 0);
  var localCenter = vec22(0, 0);
  var shift = vec22(0, 0);
  var temp$6 = vec22(0, 0);
  var xf$2 = transform(0, 0, 0);
  var BodyDefDefault = {
    type: STATIC,
    position: Vec2.zero(),
    angle: 0,
    linearVelocity: Vec2.zero(),
    angularVelocity: 0,
    linearDamping: 0,
    angularDamping: 0,
    fixedRotation: false,
    bullet: false,
    gravityScale: 1,
    allowSleep: true,
    awake: true,
    active: true,
    userData: null
  };
  var Body = function() {
    function Body2(world2, def) {
      def = options(def, BodyDefDefault);
      this.m_world = world2;
      this.m_awakeFlag = def.awake;
      this.m_autoSleepFlag = def.allowSleep;
      this.m_bulletFlag = def.bullet;
      this.m_fixedRotationFlag = def.fixedRotation;
      this.m_activeFlag = def.active;
      this.m_islandFlag = false;
      this.m_toiFlag = false;
      this.m_userData = def.userData;
      this.m_type = def.type;
      if (this.m_type == DYNAMIC) {
        this.m_mass = 1;
        this.m_invMass = 1;
      } else {
        this.m_mass = 0;
        this.m_invMass = 0;
      }
      this.m_I = 0;
      this.m_invI = 0;
      this.m_xf = Transform.identity();
      this.m_xf.p.setVec2(def.position);
      this.m_xf.q.setAngle(def.angle);
      this.m_sweep = new Sweep();
      this.m_sweep.setTransform(this.m_xf);
      this.c_velocity = new Velocity();
      this.c_position = new Position();
      this.m_force = Vec2.zero();
      this.m_torque = 0;
      this.m_linearVelocity = Vec2.clone(def.linearVelocity);
      this.m_angularVelocity = def.angularVelocity;
      this.m_linearDamping = def.linearDamping;
      this.m_angularDamping = def.angularDamping;
      this.m_gravityScale = def.gravityScale;
      this.m_sleepTime = 0;
      this.m_jointList = null;
      this.m_contactList = null;
      this.m_fixtureList = null;
      this.m_prev = null;
      this.m_next = null;
      this.m_destroyed = false;
    }
    __name(Body2, "Body");
    Body2.prototype._serialize = function() {
      var fixtures = [];
      for (var f = this.m_fixtureList; f; f = f.m_next) {
        fixtures.push(f);
      }
      return {
        type: this.m_type,
        bullet: this.m_bulletFlag,
        position: this.m_xf.p,
        angle: this.m_xf.q.getAngle(),
        linearVelocity: this.m_linearVelocity,
        angularVelocity: this.m_angularVelocity,
        fixtures
      };
    };
    Body2._deserialize = function(data, world2, restore) {
      var body = new Body2(world2, data);
      if (data.fixtures) {
        for (var i = data.fixtures.length - 1; i >= 0; i--) {
          var fixture = restore(Fixture, data.fixtures[i], body);
          body._addFixture(fixture);
        }
      }
      return body;
    };
    Body2.prototype.isWorldLocked = function() {
      return this.m_world && this.m_world.isLocked() ? true : false;
    };
    Body2.prototype.getWorld = function() {
      return this.m_world;
    };
    Body2.prototype.getNext = function() {
      return this.m_next;
    };
    Body2.prototype.setUserData = function(data) {
      this.m_userData = data;
    };
    Body2.prototype.getUserData = function() {
      return this.m_userData;
    };
    Body2.prototype.getFixtureList = function() {
      return this.m_fixtureList;
    };
    Body2.prototype.getJointList = function() {
      return this.m_jointList;
    };
    Body2.prototype.getContactList = function() {
      return this.m_contactList;
    };
    Body2.prototype.isStatic = function() {
      return this.m_type == STATIC;
    };
    Body2.prototype.isDynamic = function() {
      return this.m_type == DYNAMIC;
    };
    Body2.prototype.isKinematic = function() {
      return this.m_type == KINEMATIC;
    };
    Body2.prototype.setStatic = function() {
      this.setType(STATIC);
      return this;
    };
    Body2.prototype.setDynamic = function() {
      this.setType(DYNAMIC);
      return this;
    };
    Body2.prototype.setKinematic = function() {
      this.setType(KINEMATIC);
      return this;
    };
    Body2.prototype.getType = function() {
      return this.m_type;
    };
    Body2.prototype.setType = function(type) {
      if (this.isWorldLocked() == true) {
        return;
      }
      if (this.m_type == type) {
        return;
      }
      this.m_type = type;
      this.resetMassData();
      if (this.m_type == STATIC) {
        this.m_linearVelocity.setZero();
        this.m_angularVelocity = 0;
        this.m_sweep.forward();
        this.synchronizeFixtures();
      }
      this.setAwake(true);
      this.m_force.setZero();
      this.m_torque = 0;
      var ce2 = this.m_contactList;
      while (ce2) {
        var ce0 = ce2;
        ce2 = ce2.next;
        this.m_world.destroyContact(ce0.contact);
      }
      this.m_contactList = null;
      var broadPhase = this.m_world.m_broadPhase;
      for (var f = this.m_fixtureList; f; f = f.m_next) {
        for (var i = 0; i < f.m_proxyCount; ++i) {
          broadPhase.touchProxy(f.m_proxies[i].proxyId);
        }
      }
    };
    Body2.prototype.isBullet = function() {
      return this.m_bulletFlag;
    };
    Body2.prototype.setBullet = function(flag) {
      this.m_bulletFlag = !!flag;
    };
    Body2.prototype.isSleepingAllowed = function() {
      return this.m_autoSleepFlag;
    };
    Body2.prototype.setSleepingAllowed = function(flag) {
      this.m_autoSleepFlag = !!flag;
      if (this.m_autoSleepFlag == false) {
        this.setAwake(true);
      }
    };
    Body2.prototype.isAwake = function() {
      return this.m_awakeFlag;
    };
    Body2.prototype.setAwake = function(flag) {
      if (flag) {
        this.m_awakeFlag = true;
        this.m_sleepTime = 0;
      } else {
        this.m_awakeFlag = false;
        this.m_sleepTime = 0;
        this.m_linearVelocity.setZero();
        this.m_angularVelocity = 0;
        this.m_force.setZero();
        this.m_torque = 0;
      }
    };
    Body2.prototype.isActive = function() {
      return this.m_activeFlag;
    };
    Body2.prototype.setActive = function(flag) {
      if (flag == this.m_activeFlag) {
        return;
      }
      this.m_activeFlag = !!flag;
      if (this.m_activeFlag) {
        var broadPhase = this.m_world.m_broadPhase;
        for (var f = this.m_fixtureList; f; f = f.m_next) {
          f.createProxies(broadPhase, this.m_xf);
        }
        this.m_world.m_newFixture = true;
      } else {
        var broadPhase = this.m_world.m_broadPhase;
        for (var f = this.m_fixtureList; f; f = f.m_next) {
          f.destroyProxies(broadPhase);
        }
        var ce2 = this.m_contactList;
        while (ce2) {
          var ce0 = ce2;
          ce2 = ce2.next;
          this.m_world.destroyContact(ce0.contact);
        }
        this.m_contactList = null;
      }
    };
    Body2.prototype.isFixedRotation = function() {
      return this.m_fixedRotationFlag;
    };
    Body2.prototype.setFixedRotation = function(flag) {
      if (this.m_fixedRotationFlag == flag) {
        return;
      }
      this.m_fixedRotationFlag = !!flag;
      this.m_angularVelocity = 0;
      this.resetMassData();
    };
    Body2.prototype.getTransform = function() {
      return this.m_xf;
    };
    Body2.prototype.setTransform = function(position, angle) {
      if (this.isWorldLocked() == true) {
        return;
      }
      this.m_xf.setNum(position, angle);
      this.m_sweep.setTransform(this.m_xf);
      var broadPhase = this.m_world.m_broadPhase;
      for (var f = this.m_fixtureList; f; f = f.m_next) {
        f.synchronize(broadPhase, this.m_xf, this.m_xf);
      }
      this.setAwake(true);
    };
    Body2.prototype.synchronizeTransform = function() {
      this.m_sweep.getTransform(this.m_xf, 1);
    };
    Body2.prototype.synchronizeFixtures = function() {
      this.m_sweep.getTransform(xf$2, 0);
      var broadPhase = this.m_world.m_broadPhase;
      for (var f = this.m_fixtureList; f; f = f.m_next) {
        f.synchronize(broadPhase, xf$2, this.m_xf);
      }
    };
    Body2.prototype.advance = function(alpha) {
      this.m_sweep.advance(alpha);
      copyVec2(this.m_sweep.c, this.m_sweep.c0);
      this.m_sweep.a = this.m_sweep.a0;
      this.m_sweep.getTransform(this.m_xf, 1);
    };
    Body2.prototype.getPosition = function() {
      return this.m_xf.p;
    };
    Body2.prototype.setPosition = function(p) {
      this.setTransform(p, this.m_sweep.a);
    };
    Body2.prototype.getAngle = function() {
      return this.m_sweep.a;
    };
    Body2.prototype.setAngle = function(angle) {
      this.setTransform(this.m_xf.p, angle);
    };
    Body2.prototype.getWorldCenter = function() {
      return this.m_sweep.c;
    };
    Body2.prototype.getLocalCenter = function() {
      return this.m_sweep.localCenter;
    };
    Body2.prototype.getLinearVelocity = function() {
      return this.m_linearVelocity;
    };
    Body2.prototype.getLinearVelocityFromWorldPoint = function(worldPoint) {
      var localCenter2 = Vec2.sub(worldPoint, this.m_sweep.c);
      return Vec2.add(this.m_linearVelocity, Vec2.crossNumVec2(this.m_angularVelocity, localCenter2));
    };
    Body2.prototype.getLinearVelocityFromLocalPoint = function(localPoint) {
      return this.getLinearVelocityFromWorldPoint(this.getWorldPoint(localPoint));
    };
    Body2.prototype.setLinearVelocity = function(v3) {
      if (this.m_type == STATIC) {
        return;
      }
      if (Vec2.dot(v3, v3) > 0) {
        this.setAwake(true);
      }
      this.m_linearVelocity.setVec2(v3);
    };
    Body2.prototype.getAngularVelocity = function() {
      return this.m_angularVelocity;
    };
    Body2.prototype.setAngularVelocity = function(w) {
      if (this.m_type == STATIC) {
        return;
      }
      if (w * w > 0) {
        this.setAwake(true);
      }
      this.m_angularVelocity = w;
    };
    Body2.prototype.getLinearDamping = function() {
      return this.m_linearDamping;
    };
    Body2.prototype.setLinearDamping = function(linearDamping) {
      this.m_linearDamping = linearDamping;
    };
    Body2.prototype.getAngularDamping = function() {
      return this.m_angularDamping;
    };
    Body2.prototype.setAngularDamping = function(angularDamping) {
      this.m_angularDamping = angularDamping;
    };
    Body2.prototype.getGravityScale = function() {
      return this.m_gravityScale;
    };
    Body2.prototype.setGravityScale = function(scale) {
      this.m_gravityScale = scale;
    };
    Body2.prototype.getMass = function() {
      return this.m_mass;
    };
    Body2.prototype.getInertia = function() {
      return this.m_I + this.m_mass * Vec2.dot(this.m_sweep.localCenter, this.m_sweep.localCenter);
    };
    Body2.prototype.getMassData = function(data) {
      data.mass = this.m_mass;
      data.I = this.getInertia();
      copyVec2(data.center, this.m_sweep.localCenter);
    };
    Body2.prototype.resetMassData = function() {
      this.m_mass = 0;
      this.m_invMass = 0;
      this.m_I = 0;
      this.m_invI = 0;
      zeroVec2(this.m_sweep.localCenter);
      if (this.isStatic() || this.isKinematic()) {
        copyVec2(this.m_sweep.c0, this.m_xf.p);
        copyVec2(this.m_sweep.c, this.m_xf.p);
        this.m_sweep.a0 = this.m_sweep.a;
        return;
      }
      zeroVec2(localCenter);
      for (var f = this.m_fixtureList; f; f = f.m_next) {
        if (f.m_density == 0) {
          continue;
        }
        var massData = {
          mass: 0,
          center: vec22(0, 0),
          I: 0
        };
        f.getMassData(massData);
        this.m_mass += massData.mass;
        addMulVec2(localCenter, massData.mass, massData.center);
        this.m_I += massData.I;
      }
      if (this.m_mass > 0) {
        this.m_invMass = 1 / this.m_mass;
        setMulVec2(localCenter, this.m_invMass, localCenter);
      } else {
        this.m_mass = 1;
        this.m_invMass = 1;
      }
      if (this.m_I > 0 && this.m_fixedRotationFlag == false) {
        this.m_I -= this.m_mass * dotVec2(localCenter, localCenter);
        this.m_invI = 1 / this.m_I;
      } else {
        this.m_I = 0;
        this.m_invI = 0;
      }
      copyVec2(oldCenter, this.m_sweep.c);
      this.m_sweep.setLocalCenter(localCenter, this.m_xf);
      diffVec2(shift, this.m_sweep.c, oldCenter);
      crossNumVec2(temp$6, this.m_angularVelocity, shift);
      addVec2(this.m_linearVelocity, temp$6);
    };
    Body2.prototype.setMassData = function(massData) {
      if (this.isWorldLocked() == true) {
        return;
      }
      if (this.m_type != DYNAMIC) {
        return;
      }
      this.m_invMass = 0;
      this.m_I = 0;
      this.m_invI = 0;
      this.m_mass = massData.mass;
      if (this.m_mass <= 0) {
        this.m_mass = 1;
      }
      this.m_invMass = 1 / this.m_mass;
      if (massData.I > 0 && this.m_fixedRotationFlag == false) {
        this.m_I = massData.I - this.m_mass * dotVec2(massData.center, massData.center);
        this.m_invI = 1 / this.m_I;
      }
      copyVec2(oldCenter, this.m_sweep.c);
      this.m_sweep.setLocalCenter(massData.center, this.m_xf);
      diffVec2(shift, this.m_sweep.c, oldCenter);
      crossNumVec2(temp$6, this.m_angularVelocity, shift);
      addVec2(this.m_linearVelocity, temp$6);
    };
    Body2.prototype.applyForce = function(force, point2, wake) {
      if (wake === void 0) {
        wake = true;
      }
      if (this.m_type != DYNAMIC) {
        return;
      }
      if (wake && this.m_awakeFlag == false) {
        this.setAwake(true);
      }
      if (this.m_awakeFlag) {
        this.m_force.add(force);
        this.m_torque += Vec2.crossVec2Vec2(Vec2.sub(point2, this.m_sweep.c), force);
      }
    };
    Body2.prototype.applyForceToCenter = function(force, wake) {
      if (wake === void 0) {
        wake = true;
      }
      if (this.m_type != DYNAMIC) {
        return;
      }
      if (wake && this.m_awakeFlag == false) {
        this.setAwake(true);
      }
      if (this.m_awakeFlag) {
        this.m_force.add(force);
      }
    };
    Body2.prototype.applyTorque = function(torque, wake) {
      if (wake === void 0) {
        wake = true;
      }
      if (this.m_type != DYNAMIC) {
        return;
      }
      if (wake && this.m_awakeFlag == false) {
        this.setAwake(true);
      }
      if (this.m_awakeFlag) {
        this.m_torque += torque;
      }
    };
    Body2.prototype.applyLinearImpulse = function(impulse, point2, wake) {
      if (wake === void 0) {
        wake = true;
      }
      if (this.m_type != DYNAMIC) {
        return;
      }
      if (wake && this.m_awakeFlag == false) {
        this.setAwake(true);
      }
      if (this.m_awakeFlag) {
        this.m_linearVelocity.addMul(this.m_invMass, impulse);
        this.m_angularVelocity += this.m_invI * Vec2.crossVec2Vec2(Vec2.sub(point2, this.m_sweep.c), impulse);
      }
    };
    Body2.prototype.applyAngularImpulse = function(impulse, wake) {
      if (wake === void 0) {
        wake = true;
      }
      if (this.m_type != DYNAMIC) {
        return;
      }
      if (wake && this.m_awakeFlag == false) {
        this.setAwake(true);
      }
      if (this.m_awakeFlag) {
        this.m_angularVelocity += this.m_invI * impulse;
      }
    };
    Body2.prototype.shouldCollide = function(that) {
      if (this.m_type != DYNAMIC && that.m_type != DYNAMIC) {
        return false;
      }
      for (var jn2 = this.m_jointList; jn2; jn2 = jn2.next) {
        if (jn2.other == that) {
          if (jn2.joint.m_collideConnected == false) {
            return false;
          }
        }
      }
      return true;
    };
    Body2.prototype._addFixture = function(fixture) {
      if (this.isWorldLocked() == true) {
        return null;
      }
      if (this.m_activeFlag) {
        var broadPhase = this.m_world.m_broadPhase;
        fixture.createProxies(broadPhase, this.m_xf);
      }
      fixture.m_next = this.m_fixtureList;
      this.m_fixtureList = fixture;
      if (fixture.m_density > 0) {
        this.resetMassData();
      }
      this.m_world.m_newFixture = true;
      return fixture;
    };
    Body2.prototype.createFixture = function(shape, fixdef) {
      if (this.isWorldLocked() == true) {
        return null;
      }
      var fixture = new Fixture(this, shape, fixdef);
      this._addFixture(fixture);
      return fixture;
    };
    Body2.prototype.destroyFixture = function(fixture) {
      if (this.isWorldLocked() == true) {
        return;
      }
      if (this.m_fixtureList === fixture) {
        this.m_fixtureList = fixture.m_next;
      } else {
        var node = this.m_fixtureList;
        while (node != null) {
          if (node.m_next === fixture) {
            node.m_next = fixture.m_next;
            break;
          }
          node = node.m_next;
        }
      }
      var edge = this.m_contactList;
      while (edge) {
        var c2 = edge.contact;
        edge = edge.next;
        var fixtureA = c2.getFixtureA();
        var fixtureB = c2.getFixtureB();
        if (fixture == fixtureA || fixture == fixtureB) {
          this.m_world.destroyContact(c2);
        }
      }
      if (this.m_activeFlag) {
        var broadPhase = this.m_world.m_broadPhase;
        fixture.destroyProxies(broadPhase);
      }
      fixture.m_body = null;
      fixture.m_next = null;
      this.m_world.publish("remove-fixture", fixture);
      this.resetMassData();
    };
    Body2.prototype.getWorldPoint = function(localPoint) {
      return Transform.mulVec2(this.m_xf, localPoint);
    };
    Body2.prototype.getWorldVector = function(localVector) {
      return Rot.mulVec2(this.m_xf.q, localVector);
    };
    Body2.prototype.getLocalPoint = function(worldPoint) {
      return Transform.mulTVec2(this.m_xf, worldPoint);
    };
    Body2.prototype.getLocalVector = function(worldVector) {
      return Rot.mulTVec2(this.m_xf.q, worldVector);
    };
    Body2.STATIC = "static";
    Body2.KINEMATIC = "kinematic";
    Body2.DYNAMIC = "dynamic";
    return Body2;
  }();
  var JointEdge = function() {
    function JointEdge2() {
      this.other = null;
      this.joint = null;
      this.prev = null;
      this.next = null;
    }
    __name(JointEdge2, "JointEdge");
    return JointEdge2;
  }();
  var Joint = function() {
    function Joint2(def, bodyA, bodyB) {
      this.m_type = "unknown-joint";
      this.m_prev = null;
      this.m_next = null;
      this.m_edgeA = new JointEdge();
      this.m_edgeB = new JointEdge();
      this.m_islandFlag = false;
      bodyA = "bodyA" in def ? def.bodyA : bodyA;
      bodyB = "bodyB" in def ? def.bodyB : bodyB;
      this.m_bodyA = bodyA;
      this.m_bodyB = bodyB;
      this.m_collideConnected = !!def.collideConnected;
      this.m_userData = def.userData;
    }
    __name(Joint2, "Joint");
    Joint2.prototype.isActive = function() {
      return this.m_bodyA.isActive() && this.m_bodyB.isActive();
    };
    Joint2.prototype.getType = function() {
      return this.m_type;
    };
    Joint2.prototype.getBodyA = function() {
      return this.m_bodyA;
    };
    Joint2.prototype.getBodyB = function() {
      return this.m_bodyB;
    };
    Joint2.prototype.getNext = function() {
      return this.m_next;
    };
    Joint2.prototype.getUserData = function() {
      return this.m_userData;
    };
    Joint2.prototype.setUserData = function(data) {
      this.m_userData = data;
    };
    Joint2.prototype.getCollideConnected = function() {
      return this.m_collideConnected;
    };
    Joint2.prototype.shiftOrigin = function(newOrigin) {
    };
    return Joint2;
  }();
  var stats = {
    gjkCalls: 0,
    gjkIters: 0,
    gjkMaxIters: 0,
    toiTime: 0,
    toiMaxTime: 0,
    toiCalls: 0,
    toiIters: 0,
    toiMaxIters: 0,
    toiRootIters: 0,
    toiMaxRootIters: 0,
    toString: function(newline) {
      newline = typeof newline === "string" ? newline : "\n";
      var string = "";
      for (var name_1 in this) {
        if (typeof this[name_1] !== "function" && typeof this[name_1] !== "object") {
          string += name_1 + ": " + this[name_1] + newline;
        }
      }
      return string;
    }
  };
  var now = /* @__PURE__ */ __name(function() {
    return Date.now();
  }, "now");
  var diff = /* @__PURE__ */ __name(function(time) {
    return Date.now() - time;
  }, "diff");
  var Timer = {
    now,
    diff
  };
  var math_max$4 = Math.max;
  var temp$5 = vec22(0, 0);
  var normal$4 = vec22(0, 0);
  var e12 = vec22(0, 0);
  var e13 = vec22(0, 0);
  var e23 = vec22(0, 0);
  var temp1 = vec22(0, 0);
  var temp2 = vec22(0, 0);
  stats.gjkCalls = 0;
  stats.gjkIters = 0;
  stats.gjkMaxIters = 0;
  var DistanceInput = function() {
    function DistanceInput2() {
      this.proxyA = new DistanceProxy();
      this.proxyB = new DistanceProxy();
      this.transformA = Transform.identity();
      this.transformB = Transform.identity();
      this.useRadii = false;
    }
    __name(DistanceInput2, "DistanceInput");
    DistanceInput2.prototype.recycle = function() {
      this.proxyA.recycle();
      this.proxyB.recycle();
      this.transformA.setIdentity();
      this.transformB.setIdentity();
      this.useRadii = false;
    };
    return DistanceInput2;
  }();
  var DistanceOutput = function() {
    function DistanceOutput2() {
      this.pointA = vec22(0, 0);
      this.pointB = vec22(0, 0);
      this.distance = 0;
      this.iterations = 0;
    }
    __name(DistanceOutput2, "DistanceOutput");
    DistanceOutput2.prototype.recycle = function() {
      zeroVec2(this.pointA);
      zeroVec2(this.pointB);
      this.distance = 0;
      this.iterations = 0;
    };
    return DistanceOutput2;
  }();
  var SimplexCache = function() {
    function SimplexCache2() {
      this.metric = 0;
      this.indexA = [];
      this.indexB = [];
      this.count = 0;
    }
    __name(SimplexCache2, "SimplexCache");
    SimplexCache2.prototype.recycle = function() {
      this.metric = 0;
      this.indexA.length = 0;
      this.indexB.length = 0;
      this.count = 0;
    };
    return SimplexCache2;
  }();
  var Distance = /* @__PURE__ */ __name(function(output2, cache2, input2) {
    ++stats.gjkCalls;
    var proxyA = input2.proxyA;
    var proxyB = input2.proxyB;
    var xfA2 = input2.transformA;
    var xfB2 = input2.transformB;
    simplex.recycle();
    simplex.readCache(cache2, proxyA, xfA2, proxyB, xfB2);
    var vertices = simplex.m_v;
    var k_maxIters = SettingsInternal.maxDistanceIterations;
    var saveA = [];
    var saveB = [];
    var saveCount = 0;
    var iter = 0;
    while (iter < k_maxIters) {
      saveCount = simplex.m_count;
      for (var i = 0; i < saveCount; ++i) {
        saveA[i] = vertices[i].indexA;
        saveB[i] = vertices[i].indexB;
      }
      simplex.solve();
      if (simplex.m_count === 3) {
        break;
      }
      var d2 = simplex.getSearchDirection();
      if (lengthSqrVec2(d2) < EPSILON * EPSILON) {
        break;
      }
      var vertex = vertices[simplex.m_count];
      vertex.indexA = proxyA.getSupport(invRotVec2(temp$5, xfA2.q, setMulVec2(temp$5, -1, d2)));
      transformVec2(vertex.wA, xfA2, proxyA.getVertex(vertex.indexA));
      vertex.indexB = proxyB.getSupport(invRotVec2(temp$5, xfB2.q, d2));
      transformVec2(vertex.wB, xfB2, proxyB.getVertex(vertex.indexB));
      diffVec2(vertex.w, vertex.wB, vertex.wA);
      ++iter;
      ++stats.gjkIters;
      var duplicate = false;
      for (var i = 0; i < saveCount; ++i) {
        if (vertex.indexA === saveA[i] && vertex.indexB === saveB[i]) {
          duplicate = true;
          break;
        }
      }
      if (duplicate) {
        break;
      }
      ++simplex.m_count;
    }
    stats.gjkMaxIters = math_max$4(stats.gjkMaxIters, iter);
    simplex.getWitnessPoints(output2.pointA, output2.pointB);
    output2.distance = distVec2(output2.pointA, output2.pointB);
    output2.iterations = iter;
    simplex.writeCache(cache2);
    if (input2.useRadii) {
      var rA2 = proxyA.m_radius;
      var rB2 = proxyB.m_radius;
      if (output2.distance > rA2 + rB2 && output2.distance > EPSILON) {
        output2.distance -= rA2 + rB2;
        diffVec2(normal$4, output2.pointB, output2.pointA);
        normalizeVec2(normal$4);
        addMulVec2(output2.pointA, rA2, normal$4);
        subMulVec2(output2.pointB, rB2, normal$4);
      } else {
        var p = diffVec2(temp$5, output2.pointA, output2.pointB);
        copyVec2(output2.pointA, p);
        copyVec2(output2.pointB, p);
        output2.distance = 0;
      }
    }
  }, "Distance");
  var DistanceProxy = function() {
    function DistanceProxy2() {
      this.m_vertices = [];
      this.m_count = 0;
      this.m_radius = 0;
    }
    __name(DistanceProxy2, "DistanceProxy");
    DistanceProxy2.prototype.recycle = function() {
      this.m_vertices.length = 0;
      this.m_count = 0;
      this.m_radius = 0;
    };
    DistanceProxy2.prototype.getVertexCount = function() {
      return this.m_count;
    };
    DistanceProxy2.prototype.getVertex = function(index) {
      return this.m_vertices[index];
    };
    DistanceProxy2.prototype.getSupport = function(d2) {
      var bestIndex = -1;
      var bestValue = -Infinity;
      for (var i = 0; i < this.m_count; ++i) {
        var value = dotVec2(this.m_vertices[i], d2);
        if (value > bestValue) {
          bestIndex = i;
          bestValue = value;
        }
      }
      return bestIndex;
    };
    DistanceProxy2.prototype.getSupportVertex = function(d2) {
      return this.m_vertices[this.getSupport(d2)];
    };
    DistanceProxy2.prototype.set = function(shape, index) {
      shape.computeDistanceProxy(this, index);
    };
    DistanceProxy2.prototype.setVertices = function(vertices, count, radius) {
      this.m_vertices = vertices;
      this.m_count = count;
      this.m_radius = radius;
    };
    return DistanceProxy2;
  }();
  var SimplexVertex = function() {
    function SimplexVertex2() {
      this.wA = vec22(0, 0);
      this.indexA = 0;
      this.wB = vec22(0, 0);
      this.indexB = 0;
      this.w = vec22(0, 0);
      this.a = 0;
    }
    __name(SimplexVertex2, "SimplexVertex");
    SimplexVertex2.prototype.recycle = function() {
      this.indexA = 0;
      this.indexB = 0;
      zeroVec2(this.wA);
      zeroVec2(this.wB);
      zeroVec2(this.w);
      this.a = 0;
    };
    SimplexVertex2.prototype.set = function(v3) {
      this.indexA = v3.indexA;
      this.indexB = v3.indexB;
      copyVec2(this.wA, v3.wA);
      copyVec2(this.wB, v3.wB);
      copyVec2(this.w, v3.w);
      this.a = v3.a;
    };
    return SimplexVertex2;
  }();
  var searchDirection_reuse = vec22(0, 0);
  var closestPoint_reuse = vec22(0, 0);
  var Simplex = function() {
    function Simplex2() {
      this.m_v1 = new SimplexVertex();
      this.m_v2 = new SimplexVertex();
      this.m_v3 = new SimplexVertex();
      this.m_v = [this.m_v1, this.m_v2, this.m_v3];
    }
    __name(Simplex2, "Simplex");
    Simplex2.prototype.recycle = function() {
      this.m_v1.recycle();
      this.m_v2.recycle();
      this.m_v3.recycle();
      this.m_count = 0;
    };
    Simplex2.prototype.toString = function() {
      if (this.m_count === 3) {
        return [
          "+" + this.m_count,
          this.m_v1.a,
          this.m_v1.wA.x,
          this.m_v1.wA.y,
          this.m_v1.wB.x,
          this.m_v1.wB.y,
          this.m_v2.a,
          this.m_v2.wA.x,
          this.m_v2.wA.y,
          this.m_v2.wB.x,
          this.m_v2.wB.y,
          this.m_v3.a,
          this.m_v3.wA.x,
          this.m_v3.wA.y,
          this.m_v3.wB.x,
          this.m_v3.wB.y
        ].toString();
      } else if (this.m_count === 2) {
        return [
          "+" + this.m_count,
          this.m_v1.a,
          this.m_v1.wA.x,
          this.m_v1.wA.y,
          this.m_v1.wB.x,
          this.m_v1.wB.y,
          this.m_v2.a,
          this.m_v2.wA.x,
          this.m_v2.wA.y,
          this.m_v2.wB.x,
          this.m_v2.wB.y
        ].toString();
      } else if (this.m_count === 1) {
        return [
          "+" + this.m_count,
          this.m_v1.a,
          this.m_v1.wA.x,
          this.m_v1.wA.y,
          this.m_v1.wB.x,
          this.m_v1.wB.y
        ].toString();
      } else {
        return "+" + this.m_count;
      }
    };
    Simplex2.prototype.readCache = function(cache2, proxyA, transformA, proxyB, transformB) {
      this.m_count = cache2.count;
      for (var i = 0; i < this.m_count; ++i) {
        var v3 = this.m_v[i];
        v3.indexA = cache2.indexA[i];
        v3.indexB = cache2.indexB[i];
        var wALocal = proxyA.getVertex(v3.indexA);
        var wBLocal = proxyB.getVertex(v3.indexB);
        transformVec2(v3.wA, transformA, wALocal);
        transformVec2(v3.wB, transformB, wBLocal);
        diffVec2(v3.w, v3.wB, v3.wA);
        v3.a = 0;
      }
      if (this.m_count > 1) {
        var metric1 = cache2.metric;
        var metric2 = this.getMetric();
        if (metric2 < 0.5 * metric1 || 2 * metric1 < metric2 || metric2 < EPSILON) {
          this.m_count = 0;
        }
      }
      if (this.m_count === 0) {
        var v3 = this.m_v[0];
        v3.indexA = 0;
        v3.indexB = 0;
        var wALocal = proxyA.getVertex(0);
        var wBLocal = proxyB.getVertex(0);
        transformVec2(v3.wA, transformA, wALocal);
        transformVec2(v3.wB, transformB, wBLocal);
        diffVec2(v3.w, v3.wB, v3.wA);
        v3.a = 1;
        this.m_count = 1;
      }
    };
    Simplex2.prototype.writeCache = function(cache2) {
      cache2.metric = this.getMetric();
      cache2.count = this.m_count;
      for (var i = 0; i < this.m_count; ++i) {
        cache2.indexA[i] = this.m_v[i].indexA;
        cache2.indexB[i] = this.m_v[i].indexB;
      }
    };
    Simplex2.prototype.getSearchDirection = function() {
      var v13 = this.m_v1;
      var v22 = this.m_v2;
      this.m_v3;
      switch (this.m_count) {
        case 1:
          return setVec2(searchDirection_reuse, -v13.w.x, -v13.w.y);
        case 2: {
          diffVec2(e12, v22.w, v13.w);
          var sgn = -crossVec2Vec2(e12, v13.w);
          if (sgn > 0) {
            return setVec2(searchDirection_reuse, -e12.y, e12.x);
          } else {
            return setVec2(searchDirection_reuse, e12.y, -e12.x);
          }
        }
        default:
          return zeroVec2(searchDirection_reuse);
      }
    };
    Simplex2.prototype.getClosestPoint = function() {
      var v13 = this.m_v1;
      var v22 = this.m_v2;
      this.m_v3;
      switch (this.m_count) {
        case 0:
          return zeroVec2(closestPoint_reuse);
        case 1:
          return copyVec2(closestPoint_reuse, v13.w);
        case 2:
          return combineVec2(closestPoint_reuse, v13.a, v13.w, v22.a, v22.w);
        case 3:
          return zeroVec2(closestPoint_reuse);
        default:
          return zeroVec2(closestPoint_reuse);
      }
    };
    Simplex2.prototype.getWitnessPoints = function(pA2, pB2) {
      var v13 = this.m_v1;
      var v22 = this.m_v2;
      var v3 = this.m_v3;
      switch (this.m_count) {
        case 0:
          break;
        case 1:
          copyVec2(pA2, v13.wA);
          copyVec2(pB2, v13.wB);
          break;
        case 2:
          combineVec2(pA2, v13.a, v13.wA, v22.a, v22.wA);
          combineVec2(pB2, v13.a, v13.wB, v22.a, v22.wB);
          break;
        case 3:
          pB2.x = pA2.x = v13.a * v13.wA.x + v22.a * v22.wA.x + v3.a * v3.wA.x;
          pB2.y = pA2.y = v13.a * v13.wA.y + v22.a * v22.wA.y + v3.a * v3.wA.y;
          break;
      }
    };
    Simplex2.prototype.getMetric = function() {
      switch (this.m_count) {
        case 0:
          return 0;
        case 1:
          return 0;
        case 2:
          return distVec2(this.m_v1.w, this.m_v2.w);
        case 3:
          return crossVec2Vec2(diffVec2(temp1, this.m_v2.w, this.m_v1.w), diffVec2(temp2, this.m_v3.w, this.m_v1.w));
        default:
          return 0;
      }
    };
    Simplex2.prototype.solve = function() {
      switch (this.m_count) {
        case 1:
          break;
        case 2:
          this.solve2();
          break;
        case 3:
          this.solve3();
          break;
      }
    };
    Simplex2.prototype.solve2 = function() {
      var w1 = this.m_v1.w;
      var w2 = this.m_v2.w;
      diffVec2(e12, w2, w1);
      var d12_2 = -dotVec2(w1, e12);
      if (d12_2 <= 0) {
        this.m_v1.a = 1;
        this.m_count = 1;
        return;
      }
      var d12_1 = dotVec2(w2, e12);
      if (d12_1 <= 0) {
        this.m_v2.a = 1;
        this.m_count = 1;
        this.m_v1.set(this.m_v2);
        return;
      }
      var inv_d12 = 1 / (d12_1 + d12_2);
      this.m_v1.a = d12_1 * inv_d12;
      this.m_v2.a = d12_2 * inv_d12;
      this.m_count = 2;
    };
    Simplex2.prototype.solve3 = function() {
      var w1 = this.m_v1.w;
      var w2 = this.m_v2.w;
      var w3 = this.m_v3.w;
      diffVec2(e12, w2, w1);
      var w1e12 = dotVec2(w1, e12);
      var w2e12 = dotVec2(w2, e12);
      var d12_1 = w2e12;
      var d12_2 = -w1e12;
      diffVec2(e13, w3, w1);
      var w1e13 = dotVec2(w1, e13);
      var w3e13 = dotVec2(w3, e13);
      var d13_1 = w3e13;
      var d13_2 = -w1e13;
      diffVec2(e23, w3, w2);
      var w2e23 = dotVec2(w2, e23);
      var w3e23 = dotVec2(w3, e23);
      var d23_1 = w3e23;
      var d23_2 = -w2e23;
      var n123 = crossVec2Vec2(e12, e13);
      var d123_1 = n123 * crossVec2Vec2(w2, w3);
      var d123_2 = n123 * crossVec2Vec2(w3, w1);
      var d123_3 = n123 * crossVec2Vec2(w1, w2);
      if (d12_2 <= 0 && d13_2 <= 0) {
        this.m_v1.a = 1;
        this.m_count = 1;
        return;
      }
      if (d12_1 > 0 && d12_2 > 0 && d123_3 <= 0) {
        var inv_d12 = 1 / (d12_1 + d12_2);
        this.m_v1.a = d12_1 * inv_d12;
        this.m_v2.a = d12_2 * inv_d12;
        this.m_count = 2;
        return;
      }
      if (d13_1 > 0 && d13_2 > 0 && d123_2 <= 0) {
        var inv_d13 = 1 / (d13_1 + d13_2);
        this.m_v1.a = d13_1 * inv_d13;
        this.m_v3.a = d13_2 * inv_d13;
        this.m_count = 2;
        this.m_v2.set(this.m_v3);
        return;
      }
      if (d12_1 <= 0 && d23_2 <= 0) {
        this.m_v2.a = 1;
        this.m_count = 1;
        this.m_v1.set(this.m_v2);
        return;
      }
      if (d13_1 <= 0 && d23_1 <= 0) {
        this.m_v3.a = 1;
        this.m_count = 1;
        this.m_v1.set(this.m_v3);
        return;
      }
      if (d23_1 > 0 && d23_2 > 0 && d123_1 <= 0) {
        var inv_d23 = 1 / (d23_1 + d23_2);
        this.m_v2.a = d23_1 * inv_d23;
        this.m_v3.a = d23_2 * inv_d23;
        this.m_count = 2;
        this.m_v1.set(this.m_v3);
        return;
      }
      var inv_d123 = 1 / (d123_1 + d123_2 + d123_3);
      this.m_v1.a = d123_1 * inv_d123;
      this.m_v2.a = d123_2 * inv_d123;
      this.m_v3.a = d123_3 * inv_d123;
      this.m_count = 3;
    };
    return Simplex2;
  }();
  var simplex = new Simplex();
  var input$1 = new DistanceInput();
  var cache$1 = new SimplexCache();
  var output$1 = new DistanceOutput();
  var testOverlap = /* @__PURE__ */ __name(function(shapeA, indexA, shapeB, indexB, xfA2, xfB2) {
    input$1.recycle();
    input$1.proxyA.set(shapeA, indexA);
    input$1.proxyB.set(shapeB, indexB);
    copyTransform(input$1.transformA, xfA2);
    copyTransform(input$1.transformB, xfB2);
    input$1.useRadii = true;
    output$1.recycle();
    cache$1.recycle();
    Distance(output$1, cache$1, input$1);
    return output$1.distance < 10 * EPSILON;
  }, "testOverlap");
  Distance.testOverlap = testOverlap;
  Distance.Input = DistanceInput;
  Distance.Output = DistanceOutput;
  Distance.Proxy = DistanceProxy;
  Distance.Cache = SimplexCache;
  var ShapeCastInput = function() {
    function ShapeCastInput2() {
      this.proxyA = new DistanceProxy();
      this.proxyB = new DistanceProxy();
      this.transformA = Transform.identity();
      this.transformB = Transform.identity();
      this.translationB = Vec2.zero();
    }
    __name(ShapeCastInput2, "ShapeCastInput");
    ShapeCastInput2.prototype.recycle = function() {
      this.proxyA.recycle();
      this.proxyB.recycle();
      this.transformA.setIdentity();
      this.transformB.setIdentity();
      zeroVec2(this.translationB);
    };
    return ShapeCastInput2;
  }();
  var ShapeCastOutput = function() {
    function ShapeCastOutput2() {
      this.point = Vec2.zero();
      this.normal = Vec2.zero();
      this.lambda = 1;
      this.iterations = 0;
    }
    __name(ShapeCastOutput2, "ShapeCastOutput");
    return ShapeCastOutput2;
  }();
  var math_abs$7 = Math.abs;
  var math_max$3 = Math.max;
  var TOIInput = function() {
    function TOIInput2() {
      this.proxyA = new DistanceProxy();
      this.proxyB = new DistanceProxy();
      this.sweepA = new Sweep();
      this.sweepB = new Sweep();
    }
    __name(TOIInput2, "TOIInput");
    TOIInput2.prototype.recycle = function() {
      this.proxyA.recycle();
      this.proxyB.recycle();
      this.sweepA.recycle();
      this.sweepB.recycle();
      this.tMax = -1;
    };
    return TOIInput2;
  }();
  var TOIOutputState;
  (function(TOIOutputState2) {
    TOIOutputState2[TOIOutputState2["e_unset"] = -1] = "e_unset";
    TOIOutputState2[TOIOutputState2["e_unknown"] = 0] = "e_unknown";
    TOIOutputState2[TOIOutputState2["e_failed"] = 1] = "e_failed";
    TOIOutputState2[TOIOutputState2["e_overlapped"] = 2] = "e_overlapped";
    TOIOutputState2[TOIOutputState2["e_touching"] = 3] = "e_touching";
    TOIOutputState2[TOIOutputState2["e_separated"] = 4] = "e_separated";
  })(TOIOutputState || (TOIOutputState = {}));
  var TOIOutput = function() {
    function TOIOutput2() {
      this.state = TOIOutputState.e_unset;
      this.t = -1;
    }
    __name(TOIOutput2, "TOIOutput");
    TOIOutput2.prototype.recycle = function() {
      this.state = TOIOutputState.e_unset;
      this.t = -1;
    };
    return TOIOutput2;
  }();
  stats.toiTime = 0;
  stats.toiMaxTime = 0;
  stats.toiCalls = 0;
  stats.toiIters = 0;
  stats.toiMaxIters = 0;
  stats.toiRootIters = 0;
  stats.toiMaxRootIters = 0;
  var distanceInput = new DistanceInput();
  var distanceOutput = new DistanceOutput();
  var cache = new SimplexCache();
  var xfA$1 = transform(0, 0, 0);
  var xfB$1 = transform(0, 0, 0);
  var temp$4 = vec22(0, 0);
  var pointA$2 = vec22(0, 0);
  var pointB$2 = vec22(0, 0);
  var normal$3 = vec22(0, 0);
  var axisA = vec22(0, 0);
  var axisB = vec22(0, 0);
  var localPointA = vec22(0, 0);
  var localPointB = vec22(0, 0);
  var TimeOfImpact = /* @__PURE__ */ __name(function(output2, input2) {
    var timer = Timer.now();
    ++stats.toiCalls;
    output2.state = TOIOutputState.e_unknown;
    output2.t = input2.tMax;
    var proxyA = input2.proxyA;
    var proxyB = input2.proxyB;
    var sweepA = input2.sweepA;
    var sweepB = input2.sweepB;
    sweepA.normalize();
    sweepB.normalize();
    var tMax = input2.tMax;
    var totalRadius = proxyA.m_radius + proxyB.m_radius;
    var target = math_max$3(SettingsInternal.linearSlop, totalRadius - 3 * SettingsInternal.linearSlop);
    var tolerance = 0.25 * SettingsInternal.linearSlop;
    var t1 = 0;
    var k_maxIterations = SettingsInternal.maxTOIIterations;
    var iter = 0;
    cache.recycle();
    distanceInput.proxyA.setVertices(proxyA.m_vertices, proxyA.m_count, proxyA.m_radius);
    distanceInput.proxyB.setVertices(proxyB.m_vertices, proxyB.m_count, proxyB.m_radius);
    distanceInput.useRadii = false;
    while (true) {
      sweepA.getTransform(xfA$1, t1);
      sweepB.getTransform(xfB$1, t1);
      copyTransform(distanceInput.transformA, xfA$1);
      copyTransform(distanceInput.transformB, xfB$1);
      Distance(distanceOutput, cache, distanceInput);
      if (distanceOutput.distance <= 0) {
        output2.state = TOIOutputState.e_overlapped;
        output2.t = 0;
        break;
      }
      if (distanceOutput.distance < target + tolerance) {
        output2.state = TOIOutputState.e_touching;
        output2.t = t1;
        break;
      }
      separationFunction.initialize(cache, proxyA, sweepA, proxyB, sweepB, t1);
      var done = false;
      var t2 = tMax;
      var pushBackIter = 0;
      while (true) {
        var s2 = separationFunction.findMinSeparation(t2);
        if (s2 > target + tolerance) {
          output2.state = TOIOutputState.e_separated;
          output2.t = tMax;
          done = true;
          break;
        }
        if (s2 > target - tolerance) {
          t1 = t2;
          break;
        }
        var s1 = separationFunction.evaluate(t1);
        if (s1 < target - tolerance) {
          output2.state = TOIOutputState.e_failed;
          output2.t = t1;
          done = true;
          break;
        }
        if (s1 <= target + tolerance) {
          output2.state = TOIOutputState.e_touching;
          output2.t = t1;
          done = true;
          break;
        }
        var rootIterCount = 0;
        var a1 = t1;
        var a2 = t2;
        while (true) {
          var t = void 0;
          if (rootIterCount & 1) {
            t = a1 + (target - s1) * (a2 - a1) / (s2 - s1);
          } else {
            t = 0.5 * (a1 + a2);
          }
          ++rootIterCount;
          ++stats.toiRootIters;
          var s3 = separationFunction.evaluate(t);
          if (math_abs$7(s3 - target) < tolerance) {
            t2 = t;
            break;
          }
          if (s3 > target) {
            a1 = t;
            s1 = s3;
          } else {
            a2 = t;
            s2 = s3;
          }
          if (rootIterCount === 50) {
            break;
          }
        }
        stats.toiMaxRootIters = math_max$3(stats.toiMaxRootIters, rootIterCount);
        ++pushBackIter;
        if (pushBackIter === SettingsInternal.maxPolygonVertices) {
          break;
        }
      }
      ++iter;
      ++stats.toiIters;
      if (done) {
        break;
      }
      if (iter === k_maxIterations) {
        output2.state = TOIOutputState.e_failed;
        output2.t = t1;
        break;
      }
    }
    stats.toiMaxIters = math_max$3(stats.toiMaxIters, iter);
    var time = Timer.diff(timer);
    stats.toiMaxTime = math_max$3(stats.toiMaxTime, time);
    stats.toiTime += time;
    separationFunction.recycle();
  }, "TimeOfImpact");
  var SeparationFunctionType;
  (function(SeparationFunctionType2) {
    SeparationFunctionType2[SeparationFunctionType2["e_unset"] = -1] = "e_unset";
    SeparationFunctionType2[SeparationFunctionType2["e_points"] = 1] = "e_points";
    SeparationFunctionType2[SeparationFunctionType2["e_faceA"] = 2] = "e_faceA";
    SeparationFunctionType2[SeparationFunctionType2["e_faceB"] = 3] = "e_faceB";
  })(SeparationFunctionType || (SeparationFunctionType = {}));
  var SeparationFunction = function() {
    function SeparationFunction2() {
      this.m_proxyA = null;
      this.m_proxyB = null;
      this.m_sweepA = null;
      this.m_sweepB = null;
      this.m_type = SeparationFunctionType.e_unset;
      this.m_localPoint = vec22(0, 0);
      this.m_axis = vec22(0, 0);
      this.indexA = -1;
      this.indexB = -1;
    }
    __name(SeparationFunction2, "SeparationFunction");
    SeparationFunction2.prototype.recycle = function() {
      this.m_proxyA = null;
      this.m_proxyB = null;
      this.m_sweepA = null;
      this.m_sweepB = null;
      this.m_type = SeparationFunctionType.e_unset;
      zeroVec2(this.m_localPoint);
      zeroVec2(this.m_axis);
      this.indexA = -1;
      this.indexB = -1;
    };
    SeparationFunction2.prototype.initialize = function(cache2, proxyA, sweepA, proxyB, sweepB, t1) {
      var count = cache2.count;
      this.m_proxyA = proxyA;
      this.m_proxyB = proxyB;
      this.m_sweepA = sweepA;
      this.m_sweepB = sweepB;
      this.m_sweepA.getTransform(xfA$1, t1);
      this.m_sweepB.getTransform(xfB$1, t1);
      if (count === 1) {
        this.m_type = SeparationFunctionType.e_points;
        var localPointA_1 = this.m_proxyA.getVertex(cache2.indexA[0]);
        var localPointB_1 = this.m_proxyB.getVertex(cache2.indexB[0]);
        transformVec2(pointA$2, xfA$1, localPointA_1);
        transformVec2(pointB$2, xfB$1, localPointB_1);
        diffVec2(this.m_axis, pointB$2, pointA$2);
        var s2 = normalizeVec2Length(this.m_axis);
        return s2;
      } else if (cache2.indexA[0] === cache2.indexA[1]) {
        this.m_type = SeparationFunctionType.e_faceB;
        var localPointB1 = proxyB.getVertex(cache2.indexB[0]);
        var localPointB2 = proxyB.getVertex(cache2.indexB[1]);
        crossVec2Num(this.m_axis, diffVec2(temp$4, localPointB2, localPointB1), 1);
        normalizeVec2(this.m_axis);
        rotVec2(normal$3, xfB$1.q, this.m_axis);
        combineVec2(this.m_localPoint, 0.5, localPointB1, 0.5, localPointB2);
        transformVec2(pointB$2, xfB$1, this.m_localPoint);
        var localPointA_2 = proxyA.getVertex(cache2.indexA[0]);
        var pointA_1 = Transform.mulVec2(xfA$1, localPointA_2);
        var s2 = dotVec2(pointA_1, normal$3) - dotVec2(pointB$2, normal$3);
        if (s2 < 0) {
          negVec2(this.m_axis);
          s2 = -s2;
        }
        return s2;
      } else {
        this.m_type = SeparationFunctionType.e_faceA;
        var localPointA1 = this.m_proxyA.getVertex(cache2.indexA[0]);
        var localPointA2 = this.m_proxyA.getVertex(cache2.indexA[1]);
        crossVec2Num(this.m_axis, diffVec2(temp$4, localPointA2, localPointA1), 1);
        normalizeVec2(this.m_axis);
        rotVec2(normal$3, xfA$1.q, this.m_axis);
        combineVec2(this.m_localPoint, 0.5, localPointA1, 0.5, localPointA2);
        transformVec2(pointA$2, xfA$1, this.m_localPoint);
        var localPointB_2 = this.m_proxyB.getVertex(cache2.indexB[0]);
        transformVec2(pointB$2, xfB$1, localPointB_2);
        var s2 = dotVec2(pointB$2, normal$3) - dotVec2(pointA$2, normal$3);
        if (s2 < 0) {
          negVec2(this.m_axis);
          s2 = -s2;
        }
        return s2;
      }
    };
    SeparationFunction2.prototype.compute = function(find, t) {
      this.m_sweepA.getTransform(xfA$1, t);
      this.m_sweepB.getTransform(xfB$1, t);
      switch (this.m_type) {
        case SeparationFunctionType.e_points: {
          if (find) {
            invRotVec2(axisA, xfA$1.q, this.m_axis);
            invRotVec2(axisB, xfB$1.q, setMulVec2(temp$4, -1, this.m_axis));
            this.indexA = this.m_proxyA.getSupport(axisA);
            this.indexB = this.m_proxyB.getSupport(axisB);
          }
          copyVec2(localPointA, this.m_proxyA.getVertex(this.indexA));
          copyVec2(localPointB, this.m_proxyB.getVertex(this.indexB));
          transformVec2(pointA$2, xfA$1, localPointA);
          transformVec2(pointB$2, xfB$1, localPointB);
          var sep = dotVec2(pointB$2, this.m_axis) - dotVec2(pointA$2, this.m_axis);
          return sep;
        }
        case SeparationFunctionType.e_faceA: {
          rotVec2(normal$3, xfA$1.q, this.m_axis);
          transformVec2(pointA$2, xfA$1, this.m_localPoint);
          if (find) {
            invRotVec2(axisB, xfB$1.q, setMulVec2(temp$4, -1, normal$3));
            this.indexA = -1;
            this.indexB = this.m_proxyB.getSupport(axisB);
          }
          copyVec2(localPointB, this.m_proxyB.getVertex(this.indexB));
          transformVec2(pointB$2, xfB$1, localPointB);
          var sep = dotVec2(pointB$2, normal$3) - dotVec2(pointA$2, normal$3);
          return sep;
        }
        case SeparationFunctionType.e_faceB: {
          rotVec2(normal$3, xfB$1.q, this.m_axis);
          transformVec2(pointB$2, xfB$1, this.m_localPoint);
          if (find) {
            invRotVec2(axisA, xfA$1.q, setMulVec2(temp$4, -1, normal$3));
            this.indexB = -1;
            this.indexA = this.m_proxyA.getSupport(axisA);
          }
          copyVec2(localPointA, this.m_proxyA.getVertex(this.indexA));
          transformVec2(pointA$2, xfA$1, localPointA);
          var sep = dotVec2(pointA$2, normal$3) - dotVec2(pointB$2, normal$3);
          return sep;
        }
        default:
          if (find) {
            this.indexA = -1;
            this.indexB = -1;
          }
          return 0;
      }
    };
    SeparationFunction2.prototype.findMinSeparation = function(t) {
      return this.compute(true, t);
    };
    SeparationFunction2.prototype.evaluate = function(t) {
      return this.compute(false, t);
    };
    return SeparationFunction2;
  }();
  var separationFunction = new SeparationFunction();
  TimeOfImpact.Input = TOIInput;
  TimeOfImpact.Output = TOIOutput;
  var math_abs$6 = Math.abs;
  var math_sqrt$3 = Math.sqrt;
  var math_min$5 = Math.min;
  var TimeStep = function() {
    function TimeStep2() {
      this.dt = 0;
      this.inv_dt = 0;
      this.velocityIterations = 0;
      this.positionIterations = 0;
      this.warmStarting = false;
      this.blockSolve = true;
      this.inv_dt0 = 0;
      this.dtRatio = 1;
    }
    __name(TimeStep2, "TimeStep");
    TimeStep2.prototype.reset = function(dt2) {
      if (this.dt > 0) {
        this.inv_dt0 = this.inv_dt;
      }
      this.dt = dt2;
      this.inv_dt = dt2 == 0 ? 0 : 1 / dt2;
      this.dtRatio = dt2 * this.inv_dt0;
    };
    return TimeStep2;
  }();
  var s_subStep = new TimeStep();
  var c = vec22(0, 0);
  var v = vec22(0, 0);
  var translation = vec22(0, 0);
  var input = new TOIInput();
  var output = new TOIOutput();
  var backup = new Sweep();
  var backup1 = new Sweep();
  var backup2 = new Sweep();
  var ContactImpulse = function() {
    function ContactImpulse2(contact) {
      this.contact = contact;
      this.normals = [];
      this.tangents = [];
    }
    __name(ContactImpulse2, "ContactImpulse");
    ContactImpulse2.prototype.recycle = function() {
      this.normals.length = 0;
      this.tangents.length = 0;
    };
    Object.defineProperty(ContactImpulse2.prototype, "normalImpulses", {
      get: function() {
        var contact = this.contact;
        var normals = this.normals;
        normals.length = 0;
        for (var p = 0; p < contact.v_points.length; ++p) {
          normals.push(contact.v_points[p].normalImpulse);
        }
        return normals;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(ContactImpulse2.prototype, "tangentImpulses", {
      get: function() {
        var contact = this.contact;
        var tangents = this.tangents;
        tangents.length = 0;
        for (var p = 0; p < contact.v_points.length; ++p) {
          tangents.push(contact.v_points[p].tangentImpulse);
        }
        return tangents;
      },
      enumerable: false,
      configurable: true
    });
    return ContactImpulse2;
  }();
  var Solver = function() {
    function Solver2(world2) {
      this.m_world = world2;
      this.m_stack = [];
      this.m_bodies = [];
      this.m_contacts = [];
      this.m_joints = [];
    }
    __name(Solver2, "Solver");
    Solver2.prototype.clear = function() {
      this.m_stack.length = 0;
      this.m_bodies.length = 0;
      this.m_contacts.length = 0;
      this.m_joints.length = 0;
    };
    Solver2.prototype.addBody = function(body) {
      this.m_bodies.push(body);
    };
    Solver2.prototype.addContact = function(contact) {
      this.m_contacts.push(contact);
    };
    Solver2.prototype.addJoint = function(joint) {
      this.m_joints.push(joint);
    };
    Solver2.prototype.solveWorld = function(step) {
      var world2 = this.m_world;
      for (var b2 = world2.m_bodyList; b2; b2 = b2.m_next) {
        b2.m_islandFlag = false;
      }
      for (var c_1 = world2.m_contactList; c_1; c_1 = c_1.m_next) {
        c_1.m_islandFlag = false;
      }
      for (var j = world2.m_jointList; j; j = j.m_next) {
        j.m_islandFlag = false;
      }
      var stack = this.m_stack;
      for (var seed = world2.m_bodyList; seed; seed = seed.m_next) {
        if (seed.m_islandFlag) {
          continue;
        }
        if (seed.isAwake() == false || seed.isActive() == false) {
          continue;
        }
        if (seed.isStatic()) {
          continue;
        }
        this.clear();
        stack.push(seed);
        seed.m_islandFlag = true;
        while (stack.length > 0) {
          var b2 = stack.pop();
          this.addBody(b2);
          b2.m_awakeFlag = true;
          if (b2.isStatic()) {
            continue;
          }
          for (var ce2 = b2.m_contactList; ce2; ce2 = ce2.next) {
            var contact = ce2.contact;
            if (contact.m_islandFlag) {
              continue;
            }
            if (contact.isEnabled() == false || contact.isTouching() == false) {
              continue;
            }
            var sensorA = contact.m_fixtureA.m_isSensor;
            var sensorB = contact.m_fixtureB.m_isSensor;
            if (sensorA || sensorB) {
              continue;
            }
            this.addContact(contact);
            contact.m_islandFlag = true;
            var other = ce2.other;
            if (other.m_islandFlag) {
              continue;
            }
            stack.push(other);
            other.m_islandFlag = true;
          }
          for (var je = b2.m_jointList; je; je = je.next) {
            if (je.joint.m_islandFlag == true) {
              continue;
            }
            var other = je.other;
            if (other.isActive() == false) {
              continue;
            }
            this.addJoint(je.joint);
            je.joint.m_islandFlag = true;
            if (other.m_islandFlag) {
              continue;
            }
            stack.push(other);
            other.m_islandFlag = true;
          }
        }
        this.solveIsland(step);
        for (var i = 0; i < this.m_bodies.length; ++i) {
          var b2 = this.m_bodies[i];
          if (b2.isStatic()) {
            b2.m_islandFlag = false;
          }
        }
      }
    };
    Solver2.prototype.solveIsland = function(step) {
      var world2 = this.m_world;
      var gravity = world2.m_gravity;
      var allowSleep = world2.m_allowSleep;
      var h = step.dt;
      for (var i = 0; i < this.m_bodies.length; ++i) {
        var body = this.m_bodies[i];
        copyVec2(c, body.m_sweep.c);
        var a2 = body.m_sweep.a;
        copyVec2(v, body.m_linearVelocity);
        var w = body.m_angularVelocity;
        copyVec2(body.m_sweep.c0, body.m_sweep.c);
        body.m_sweep.a0 = body.m_sweep.a;
        if (body.isDynamic()) {
          addMulVec2(v, h * body.m_gravityScale, gravity);
          addMulVec2(v, h * body.m_invMass, body.m_force);
          w += h * body.m_invI * body.m_torque;
          setMulVec2(v, 1 / (1 + h * body.m_linearDamping), v);
          w *= 1 / (1 + h * body.m_angularDamping);
        }
        copyVec2(body.c_position.c, c);
        body.c_position.a = a2;
        copyVec2(body.c_velocity.v, v);
        body.c_velocity.w = w;
      }
      for (var i = 0; i < this.m_contacts.length; ++i) {
        var contact = this.m_contacts[i];
        contact.initConstraint(step);
      }
      for (var i = 0; i < this.m_contacts.length; ++i) {
        var contact = this.m_contacts[i];
        contact.initVelocityConstraint(step);
      }
      if (step.warmStarting) {
        for (var i = 0; i < this.m_contacts.length; ++i) {
          var contact = this.m_contacts[i];
          contact.warmStartConstraint(step);
        }
      }
      for (var i = 0; i < this.m_joints.length; ++i) {
        var joint = this.m_joints[i];
        joint.initVelocityConstraints(step);
      }
      for (var i = 0; i < step.velocityIterations; ++i) {
        for (var j = 0; j < this.m_joints.length; ++j) {
          var joint = this.m_joints[j];
          joint.solveVelocityConstraints(step);
        }
        for (var j = 0; j < this.m_contacts.length; ++j) {
          var contact = this.m_contacts[j];
          contact.solveVelocityConstraint(step);
        }
      }
      for (var i = 0; i < this.m_contacts.length; ++i) {
        var contact = this.m_contacts[i];
        contact.storeConstraintImpulses(step);
      }
      for (var i = 0; i < this.m_bodies.length; ++i) {
        var body = this.m_bodies[i];
        copyVec2(c, body.c_position.c);
        var a2 = body.c_position.a;
        copyVec2(v, body.c_velocity.v);
        var w = body.c_velocity.w;
        setMulVec2(translation, h, v);
        var translationLengthSqr = lengthSqrVec2(translation);
        if (translationLengthSqr > SettingsInternal.maxTranslationSquared) {
          var ratio = SettingsInternal.maxTranslation / math_sqrt$3(translationLengthSqr);
          scaleVec2(v, ratio);
        }
        var rotation2 = h * w;
        if (rotation2 * rotation2 > SettingsInternal.maxRotationSquared) {
          var ratio = SettingsInternal.maxRotation / math_abs$6(rotation2);
          w *= ratio;
        }
        addMulVec2(c, h, v);
        a2 += h * w;
        copyVec2(body.c_position.c, c);
        body.c_position.a = a2;
        copyVec2(body.c_velocity.v, v);
        body.c_velocity.w = w;
      }
      var positionSolved = false;
      for (var i = 0; i < step.positionIterations; ++i) {
        var minSeparation = 0;
        for (var j = 0; j < this.m_contacts.length; ++j) {
          var contact = this.m_contacts[j];
          var separation = contact.solvePositionConstraint(step);
          minSeparation = math_min$5(minSeparation, separation);
        }
        var contactsOkay = minSeparation >= -3 * SettingsInternal.linearSlop;
        var jointsOkay = true;
        for (var j = 0; j < this.m_joints.length; ++j) {
          var joint = this.m_joints[j];
          var jointOkay = joint.solvePositionConstraints(step);
          jointsOkay = jointsOkay && jointOkay;
        }
        if (contactsOkay && jointsOkay) {
          positionSolved = true;
          break;
        }
      }
      for (var i = 0; i < this.m_bodies.length; ++i) {
        var body = this.m_bodies[i];
        copyVec2(body.m_sweep.c, body.c_position.c);
        body.m_sweep.a = body.c_position.a;
        copyVec2(body.m_linearVelocity, body.c_velocity.v);
        body.m_angularVelocity = body.c_velocity.w;
        body.synchronizeTransform();
      }
      this.postSolveIsland();
      if (allowSleep) {
        var minSleepTime = Infinity;
        var linTolSqr = SettingsInternal.linearSleepToleranceSqr;
        var angTolSqr = SettingsInternal.angularSleepToleranceSqr;
        for (var i = 0; i < this.m_bodies.length; ++i) {
          var body = this.m_bodies[i];
          if (body.isStatic()) {
            continue;
          }
          if (body.m_autoSleepFlag == false || body.m_angularVelocity * body.m_angularVelocity > angTolSqr || lengthSqrVec2(body.m_linearVelocity) > linTolSqr) {
            body.m_sleepTime = 0;
            minSleepTime = 0;
          } else {
            body.m_sleepTime += h;
            minSleepTime = math_min$5(minSleepTime, body.m_sleepTime);
          }
        }
        if (minSleepTime >= SettingsInternal.timeToSleep && positionSolved) {
          for (var i = 0; i < this.m_bodies.length; ++i) {
            var body = this.m_bodies[i];
            body.setAwake(false);
          }
        }
      }
    };
    Solver2.prototype.solveWorldTOI = function(step) {
      var world2 = this.m_world;
      if (world2.m_stepComplete) {
        for (var b2 = world2.m_bodyList; b2; b2 = b2.m_next) {
          b2.m_islandFlag = false;
          b2.m_sweep.alpha0 = 0;
        }
        for (var c_2 = world2.m_contactList; c_2; c_2 = c_2.m_next) {
          c_2.m_toiFlag = false;
          c_2.m_islandFlag = false;
          c_2.m_toiCount = 0;
          c_2.m_toi = 1;
        }
      }
      while (true) {
        var minContact = null;
        var minAlpha = 1;
        for (var c_3 = world2.m_contactList; c_3; c_3 = c_3.m_next) {
          if (c_3.isEnabled() == false) {
            continue;
          }
          if (c_3.m_toiCount > SettingsInternal.maxSubSteps) {
            continue;
          }
          var alpha = 1;
          if (c_3.m_toiFlag) {
            alpha = c_3.m_toi;
          } else {
            var fA_1 = c_3.getFixtureA();
            var fB_1 = c_3.getFixtureB();
            if (fA_1.isSensor() || fB_1.isSensor()) {
              continue;
            }
            var bA_1 = fA_1.getBody();
            var bB_1 = fB_1.getBody();
            var activeA = bA_1.isAwake() && !bA_1.isStatic();
            var activeB = bB_1.isAwake() && !bB_1.isStatic();
            if (activeA == false && activeB == false) {
              continue;
            }
            var collideA = bA_1.isBullet() || !bA_1.isDynamic();
            var collideB = bB_1.isBullet() || !bB_1.isDynamic();
            if (collideA == false && collideB == false) {
              continue;
            }
            var alpha0 = bA_1.m_sweep.alpha0;
            if (bA_1.m_sweep.alpha0 < bB_1.m_sweep.alpha0) {
              alpha0 = bB_1.m_sweep.alpha0;
              bA_1.m_sweep.advance(alpha0);
            } else if (bB_1.m_sweep.alpha0 < bA_1.m_sweep.alpha0) {
              alpha0 = bA_1.m_sweep.alpha0;
              bB_1.m_sweep.advance(alpha0);
            }
            var indexA = c_3.getChildIndexA();
            var indexB = c_3.getChildIndexB();
            bA_1.m_sweep;
            bB_1.m_sweep;
            input.proxyA.set(fA_1.getShape(), indexA);
            input.proxyB.set(fB_1.getShape(), indexB);
            input.sweepA.set(bA_1.m_sweep);
            input.sweepB.set(bB_1.m_sweep);
            input.tMax = 1;
            TimeOfImpact(output, input);
            var beta = output.t;
            if (output.state == TOIOutputState.e_touching) {
              alpha = math_min$5(alpha0 + (1 - alpha0) * beta, 1);
            } else {
              alpha = 1;
            }
            c_3.m_toi = alpha;
            c_3.m_toiFlag = true;
          }
          if (alpha < minAlpha) {
            minContact = c_3;
            minAlpha = alpha;
          }
        }
        if (minContact == null || 1 - 10 * EPSILON < minAlpha) {
          world2.m_stepComplete = true;
          break;
        }
        var fA = minContact.getFixtureA();
        var fB = minContact.getFixtureB();
        var bA = fA.getBody();
        var bB = fB.getBody();
        backup1.set(bA.m_sweep);
        backup2.set(bB.m_sweep);
        bA.advance(minAlpha);
        bB.advance(minAlpha);
        minContact.update(world2);
        minContact.m_toiFlag = false;
        ++minContact.m_toiCount;
        if (minContact.isEnabled() == false || minContact.isTouching() == false) {
          minContact.setEnabled(false);
          bA.m_sweep.set(backup1);
          bB.m_sweep.set(backup2);
          bA.synchronizeTransform();
          bB.synchronizeTransform();
          continue;
        }
        bA.setAwake(true);
        bB.setAwake(true);
        this.clear();
        this.addBody(bA);
        this.addBody(bB);
        this.addContact(minContact);
        bA.m_islandFlag = true;
        bB.m_islandFlag = true;
        minContact.m_islandFlag = true;
        var bodies = [bA, bB];
        for (var i = 0; i < bodies.length; ++i) {
          var body = bodies[i];
          if (body.isDynamic()) {
            for (var ce2 = body.m_contactList; ce2; ce2 = ce2.next) {
              var contact = ce2.contact;
              if (contact.m_islandFlag) {
                continue;
              }
              var other = ce2.other;
              if (other.isDynamic() && !body.isBullet() && !other.isBullet()) {
                continue;
              }
              var sensorA = contact.m_fixtureA.m_isSensor;
              var sensorB = contact.m_fixtureB.m_isSensor;
              if (sensorA || sensorB) {
                continue;
              }
              backup.set(other.m_sweep);
              if (other.m_islandFlag == false) {
                other.advance(minAlpha);
              }
              contact.update(world2);
              if (contact.isEnabled() == false || contact.isTouching() == false) {
                other.m_sweep.set(backup);
                other.synchronizeTransform();
                continue;
              }
              contact.m_islandFlag = true;
              this.addContact(contact);
              if (other.m_islandFlag) {
                continue;
              }
              other.m_islandFlag = true;
              if (!other.isStatic()) {
                other.setAwake(true);
              }
              this.addBody(other);
            }
          }
        }
        s_subStep.reset((1 - minAlpha) * step.dt);
        s_subStep.dtRatio = 1;
        s_subStep.positionIterations = 20;
        s_subStep.velocityIterations = step.velocityIterations;
        s_subStep.warmStarting = false;
        this.solveIslandTOI(s_subStep, bA, bB);
        for (var i = 0; i < this.m_bodies.length; ++i) {
          var body = this.m_bodies[i];
          body.m_islandFlag = false;
          if (!body.isDynamic()) {
            continue;
          }
          body.synchronizeFixtures();
          for (var ce2 = body.m_contactList; ce2; ce2 = ce2.next) {
            ce2.contact.m_toiFlag = false;
            ce2.contact.m_islandFlag = false;
          }
        }
        world2.findNewContacts();
        if (world2.m_subStepping) {
          world2.m_stepComplete = false;
          break;
        }
      }
    };
    Solver2.prototype.solveIslandTOI = function(subStep, toiA, toiB) {
      for (var i = 0; i < this.m_bodies.length; ++i) {
        var body = this.m_bodies[i];
        copyVec2(body.c_position.c, body.m_sweep.c);
        body.c_position.a = body.m_sweep.a;
        copyVec2(body.c_velocity.v, body.m_linearVelocity);
        body.c_velocity.w = body.m_angularVelocity;
      }
      for (var i = 0; i < this.m_contacts.length; ++i) {
        var contact = this.m_contacts[i];
        contact.initConstraint(subStep);
      }
      for (var i = 0; i < subStep.positionIterations; ++i) {
        var minSeparation = 0;
        for (var j = 0; j < this.m_contacts.length; ++j) {
          var contact = this.m_contacts[j];
          var separation = contact.solvePositionConstraintTOI(subStep, toiA, toiB);
          minSeparation = math_min$5(minSeparation, separation);
        }
        var contactsOkay = minSeparation >= -1.5 * SettingsInternal.linearSlop;
        if (contactsOkay) {
          break;
        }
      }
      var i;
      copyVec2(toiA.m_sweep.c0, toiA.c_position.c);
      toiA.m_sweep.a0 = toiA.c_position.a;
      copyVec2(toiB.m_sweep.c0, toiB.c_position.c);
      toiB.m_sweep.a0 = toiB.c_position.a;
      for (var i = 0; i < this.m_contacts.length; ++i) {
        var contact = this.m_contacts[i];
        contact.initVelocityConstraint(subStep);
      }
      for (var i = 0; i < subStep.velocityIterations; ++i) {
        for (var j = 0; j < this.m_contacts.length; ++j) {
          var contact = this.m_contacts[j];
          contact.solveVelocityConstraint(subStep);
        }
      }
      var h = subStep.dt;
      for (var i = 0; i < this.m_bodies.length; ++i) {
        var body = this.m_bodies[i];
        copyVec2(c, body.c_position.c);
        var a2 = body.c_position.a;
        copyVec2(v, body.c_velocity.v);
        var w = body.c_velocity.w;
        setMulVec2(translation, h, v);
        var translationLengthSqr = lengthSqrVec2(translation);
        if (translationLengthSqr > SettingsInternal.maxTranslationSquared) {
          var ratio = SettingsInternal.maxTranslation / math_sqrt$3(translationLengthSqr);
          scaleVec2(v, ratio);
        }
        var rotation2 = h * w;
        if (rotation2 * rotation2 > SettingsInternal.maxRotationSquared) {
          var ratio = SettingsInternal.maxRotation / math_abs$6(rotation2);
          w *= ratio;
        }
        addMulVec2(c, h, v);
        a2 += h * w;
        copyVec2(body.c_position.c, c);
        body.c_position.a = a2;
        copyVec2(body.c_velocity.v, v);
        body.c_velocity.w = w;
        copyVec2(body.m_sweep.c, c);
        body.m_sweep.a = a2;
        copyVec2(body.m_linearVelocity, v);
        body.m_angularVelocity = w;
        body.synchronizeTransform();
      }
      this.postSolveIsland();
    };
    Solver2.prototype.postSolveIsland = function() {
      for (var c_5 = 0; c_5 < this.m_contacts.length; ++c_5) {
        var contact = this.m_contacts[c_5];
        this.m_world.postSolve(contact, contact.m_impulse);
      }
    };
    return Solver2;
  }();
  Solver.TimeStep = TimeStep;
  var Mat22 = function() {
    function Mat222(a2, b2, c2, d2) {
      if (typeof a2 === "object" && a2 !== null) {
        this.ex = Vec2.clone(a2);
        this.ey = Vec2.clone(b2);
      } else if (typeof a2 === "number") {
        this.ex = Vec2.neo(a2, c2);
        this.ey = Vec2.neo(b2, d2);
      } else {
        this.ex = Vec2.zero();
        this.ey = Vec2.zero();
      }
    }
    __name(Mat222, "Mat22");
    Mat222.prototype.toString = function() {
      return JSON.stringify(this);
    };
    Mat222.isValid = function(obj) {
      if (obj === null || typeof obj === "undefined") {
        return false;
      }
      return Vec2.isValid(obj.ex) && Vec2.isValid(obj.ey);
    };
    Mat222.assert = function(o2) {
    };
    Mat222.prototype.set = function(a2, b2, c2, d2) {
      if (typeof a2 === "number" && typeof b2 === "number" && typeof c2 === "number" && typeof d2 === "number") {
        this.ex.setNum(a2, c2);
        this.ey.setNum(b2, d2);
      } else if (typeof a2 === "object" && typeof b2 === "object") {
        this.ex.setVec2(a2);
        this.ey.setVec2(b2);
      } else if (typeof a2 === "object") {
        this.ex.setVec2(a2.ex);
        this.ey.setVec2(a2.ey);
      } else
        ;
    };
    Mat222.prototype.setIdentity = function() {
      this.ex.x = 1;
      this.ey.x = 0;
      this.ex.y = 0;
      this.ey.y = 1;
    };
    Mat222.prototype.setZero = function() {
      this.ex.x = 0;
      this.ey.x = 0;
      this.ex.y = 0;
      this.ey.y = 0;
    };
    Mat222.prototype.getInverse = function() {
      var a2 = this.ex.x;
      var b2 = this.ey.x;
      var c2 = this.ex.y;
      var d2 = this.ey.y;
      var det = a2 * d2 - b2 * c2;
      if (det !== 0) {
        det = 1 / det;
      }
      var imx = new Mat222();
      imx.ex.x = det * d2;
      imx.ey.x = -det * b2;
      imx.ex.y = -det * c2;
      imx.ey.y = det * a2;
      return imx;
    };
    Mat222.prototype.solve = function(v3) {
      var a2 = this.ex.x;
      var b2 = this.ey.x;
      var c2 = this.ex.y;
      var d2 = this.ey.y;
      var det = a2 * d2 - b2 * c2;
      if (det !== 0) {
        det = 1 / det;
      }
      var w = Vec2.zero();
      w.x = det * (d2 * v3.x - b2 * v3.y);
      w.y = det * (a2 * v3.y - c2 * v3.x);
      return w;
    };
    Mat222.mul = function(mx, v3) {
      if (v3 && "x" in v3 && "y" in v3) {
        var x3 = mx.ex.x * v3.x + mx.ey.x * v3.y;
        var y = mx.ex.y * v3.x + mx.ey.y * v3.y;
        return Vec2.neo(x3, y);
      } else if (v3 && "ex" in v3 && "ey" in v3) {
        var a2 = mx.ex.x * v3.ex.x + mx.ey.x * v3.ex.y;
        var b2 = mx.ex.x * v3.ey.x + mx.ey.x * v3.ey.y;
        var c2 = mx.ex.y * v3.ex.x + mx.ey.y * v3.ex.y;
        var d2 = mx.ex.y * v3.ey.x + mx.ey.y * v3.ey.y;
        return new Mat222(a2, b2, c2, d2);
      }
    };
    Mat222.mulVec2 = function(mx, v3) {
      var x3 = mx.ex.x * v3.x + mx.ey.x * v3.y;
      var y = mx.ex.y * v3.x + mx.ey.y * v3.y;
      return Vec2.neo(x3, y);
    };
    Mat222.mulMat22 = function(mx, v3) {
      var a2 = mx.ex.x * v3.ex.x + mx.ey.x * v3.ex.y;
      var b2 = mx.ex.x * v3.ey.x + mx.ey.x * v3.ey.y;
      var c2 = mx.ex.y * v3.ex.x + mx.ey.y * v3.ex.y;
      var d2 = mx.ex.y * v3.ey.x + mx.ey.y * v3.ey.y;
      return new Mat222(a2, b2, c2, d2);
    };
    Mat222.mulT = function(mx, v3) {
      if (v3 && "x" in v3 && "y" in v3) {
        return Vec2.neo(Vec2.dot(v3, mx.ex), Vec2.dot(v3, mx.ey));
      } else if (v3 && "ex" in v3 && "ey" in v3) {
        var c1 = Vec2.neo(Vec2.dot(mx.ex, v3.ex), Vec2.dot(mx.ey, v3.ex));
        var c2 = Vec2.neo(Vec2.dot(mx.ex, v3.ey), Vec2.dot(mx.ey, v3.ey));
        return new Mat222(c1, c2);
      }
    };
    Mat222.mulTVec2 = function(mx, v3) {
      return Vec2.neo(Vec2.dot(v3, mx.ex), Vec2.dot(v3, mx.ey));
    };
    Mat222.mulTMat22 = function(mx, v3) {
      var c1 = Vec2.neo(Vec2.dot(mx.ex, v3.ex), Vec2.dot(mx.ey, v3.ex));
      var c2 = Vec2.neo(Vec2.dot(mx.ex, v3.ey), Vec2.dot(mx.ey, v3.ey));
      return new Mat222(c1, c2);
    };
    Mat222.abs = function(mx) {
      return new Mat222(Vec2.abs(mx.ex), Vec2.abs(mx.ey));
    };
    Mat222.add = function(mx1, mx2) {
      return new Mat222(Vec2.add(mx1.ex, mx2.ex), Vec2.add(mx1.ey, mx2.ey));
    };
    return Mat222;
  }();
  var math_sqrt$2 = Math.sqrt;
  var pointA$1 = vec22(0, 0);
  var pointB$1 = vec22(0, 0);
  var temp$3 = vec22(0, 0);
  var cA$1 = vec22(0, 0);
  var cB$1 = vec22(0, 0);
  var dist = vec22(0, 0);
  var planePoint$2 = vec22(0, 0);
  var clipPoint$1 = vec22(0, 0);
  var ManifoldType;
  (function(ManifoldType2) {
    ManifoldType2[ManifoldType2["e_unset"] = -1] = "e_unset";
    ManifoldType2[ManifoldType2["e_circles"] = 0] = "e_circles";
    ManifoldType2[ManifoldType2["e_faceA"] = 1] = "e_faceA";
    ManifoldType2[ManifoldType2["e_faceB"] = 2] = "e_faceB";
  })(ManifoldType || (ManifoldType = {}));
  var ContactFeatureType;
  (function(ContactFeatureType2) {
    ContactFeatureType2[ContactFeatureType2["e_unset"] = -1] = "e_unset";
    ContactFeatureType2[ContactFeatureType2["e_vertex"] = 0] = "e_vertex";
    ContactFeatureType2[ContactFeatureType2["e_face"] = 1] = "e_face";
  })(ContactFeatureType || (ContactFeatureType = {}));
  var PointState;
  (function(PointState2) {
    PointState2[PointState2["nullState"] = 0] = "nullState";
    PointState2[PointState2["addState"] = 1] = "addState";
    PointState2[PointState2["persistState"] = 2] = "persistState";
    PointState2[PointState2["removeState"] = 3] = "removeState";
  })(PointState || (PointState = {}));
  var ClipVertex = function() {
    function ClipVertex2() {
      this.v = vec22(0, 0);
      this.id = new ContactID();
    }
    __name(ClipVertex2, "ClipVertex");
    ClipVertex2.prototype.set = function(o2) {
      copyVec2(this.v, o2.v);
      this.id.set(o2.id);
    };
    ClipVertex2.prototype.recycle = function() {
      zeroVec2(this.v);
      this.id.recycle();
    };
    return ClipVertex2;
  }();
  var Manifold = function() {
    function Manifold2() {
      this.localNormal = vec22(0, 0);
      this.localPoint = vec22(0, 0);
      this.points = [new ManifoldPoint(), new ManifoldPoint()];
      this.pointCount = 0;
    }
    __name(Manifold2, "Manifold");
    Manifold2.prototype.set = function(that) {
      this.type = that.type;
      copyVec2(this.localNormal, that.localNormal);
      copyVec2(this.localPoint, that.localPoint);
      this.pointCount = that.pointCount;
      this.points[0].set(that.points[0]);
      this.points[1].set(that.points[1]);
    };
    Manifold2.prototype.recycle = function() {
      this.type = ManifoldType.e_unset;
      zeroVec2(this.localNormal);
      zeroVec2(this.localPoint);
      this.pointCount = 0;
      this.points[0].recycle();
      this.points[1].recycle();
    };
    Manifold2.prototype.getWorldManifold = function(wm, xfA2, radiusA, xfB2, radiusB) {
      if (this.pointCount == 0) {
        return wm;
      }
      wm = wm || new WorldManifold();
      wm.pointCount = this.pointCount;
      var normal3 = wm.normal;
      var points = wm.points;
      var separations = wm.separations;
      switch (this.type) {
        case ManifoldType.e_circles: {
          setVec2(normal3, 1, 0);
          var manifoldPoint = this.points[0];
          transformVec2(pointA$1, xfA2, this.localPoint);
          transformVec2(pointB$1, xfB2, manifoldPoint.localPoint);
          diffVec2(dist, pointB$1, pointA$1);
          var lengthSqr = lengthSqrVec2(dist);
          if (lengthSqr > EPSILON * EPSILON) {
            var length_1 = math_sqrt$2(lengthSqr);
            setMulVec2(normal3, 1 / length_1, dist);
          }
          combineVec2(cA$1, 1, pointA$1, radiusA, normal3);
          combineVec2(cB$1, 1, pointB$1, -radiusB, normal3);
          combineVec2(points[0], 0.5, cA$1, 0.5, cB$1);
          separations[0] = dotVec2(diffVec2(temp$3, cB$1, cA$1), normal3);
          break;
        }
        case ManifoldType.e_faceA: {
          rotVec2(normal3, xfA2.q, this.localNormal);
          transformVec2(planePoint$2, xfA2, this.localPoint);
          for (var i = 0; i < this.pointCount; ++i) {
            var manifoldPoint = this.points[i];
            transformVec2(clipPoint$1, xfB2, manifoldPoint.localPoint);
            combineVec2(cA$1, 1, clipPoint$1, radiusA - dotVec2(diffVec2(temp$3, clipPoint$1, planePoint$2), normal3), normal3);
            combineVec2(cB$1, 1, clipPoint$1, -radiusB, normal3);
            combineVec2(points[i], 0.5, cA$1, 0.5, cB$1);
            separations[i] = dotVec2(diffVec2(temp$3, cB$1, cA$1), normal3);
          }
          break;
        }
        case ManifoldType.e_faceB: {
          rotVec2(normal3, xfB2.q, this.localNormal);
          transformVec2(planePoint$2, xfB2, this.localPoint);
          for (var i = 0; i < this.pointCount; ++i) {
            var manifoldPoint = this.points[i];
            transformVec2(clipPoint$1, xfA2, manifoldPoint.localPoint);
            combineVec2(cB$1, 1, clipPoint$1, radiusB - dotVec2(diffVec2(temp$3, clipPoint$1, planePoint$2), normal3), normal3);
            combineVec2(cA$1, 1, clipPoint$1, -radiusA, normal3);
            combineVec2(points[i], 0.5, cA$1, 0.5, cB$1);
            separations[i] = dotVec2(diffVec2(temp$3, cA$1, cB$1), normal3);
          }
          negVec2(normal3);
          break;
        }
      }
      return wm;
    };
    Manifold2.clipSegmentToLine = clipSegmentToLine;
    Manifold2.ClipVertex = ClipVertex;
    Manifold2.getPointStates = getPointStates;
    Manifold2.PointState = PointState;
    return Manifold2;
  }();
  var ManifoldPoint = function() {
    function ManifoldPoint2() {
      this.localPoint = vec22(0, 0);
      this.normalImpulse = 0;
      this.tangentImpulse = 0;
      this.id = new ContactID();
    }
    __name(ManifoldPoint2, "ManifoldPoint");
    ManifoldPoint2.prototype.set = function(that) {
      copyVec2(this.localPoint, that.localPoint);
      this.normalImpulse = that.normalImpulse;
      this.tangentImpulse = that.tangentImpulse;
      this.id.set(that.id);
    };
    ManifoldPoint2.prototype.recycle = function() {
      zeroVec2(this.localPoint);
      this.normalImpulse = 0;
      this.tangentImpulse = 0;
      this.id.recycle();
    };
    return ManifoldPoint2;
  }();
  var ContactID = function() {
    function ContactID2() {
      this.key = -1;
      this.indexA = -1;
      this.indexB = -1;
      this.typeA = ContactFeatureType.e_unset;
      this.typeB = ContactFeatureType.e_unset;
    }
    __name(ContactID2, "ContactID");
    ContactID2.prototype.setFeatures = function(indexA, typeA, indexB, typeB) {
      this.indexA = indexA;
      this.indexB = indexB;
      this.typeA = typeA;
      this.typeB = typeB;
      this.key = this.indexA + this.indexB * 4 + this.typeA * 16 + this.typeB * 64;
    };
    ContactID2.prototype.set = function(that) {
      this.indexA = that.indexA;
      this.indexB = that.indexB;
      this.typeA = that.typeA;
      this.typeB = that.typeB;
      this.key = this.indexA + this.indexB * 4 + this.typeA * 16 + this.typeB * 64;
    };
    ContactID2.prototype.swapFeatures = function() {
      var indexA = this.indexA;
      var indexB = this.indexB;
      var typeA = this.typeA;
      var typeB = this.typeB;
      this.indexA = indexB;
      this.indexB = indexA;
      this.typeA = typeB;
      this.typeB = typeA;
      this.key = this.indexA + this.indexB * 4 + this.typeA * 16 + this.typeB * 64;
    };
    ContactID2.prototype.recycle = function() {
      this.indexA = 0;
      this.indexB = 0;
      this.typeA = ContactFeatureType.e_unset;
      this.typeB = ContactFeatureType.e_unset;
      this.key = -1;
    };
    return ContactID2;
  }();
  var WorldManifold = function() {
    function WorldManifold2() {
      this.normal = vec22(0, 0);
      this.points = [vec22(0, 0), vec22(0, 0)];
      this.separations = [0, 0];
      this.pointCount = 0;
    }
    __name(WorldManifold2, "WorldManifold");
    WorldManifold2.prototype.recycle = function() {
      zeroVec2(this.normal);
      zeroVec2(this.points[0]);
      zeroVec2(this.points[1]);
      this.separations[0] = 0;
      this.separations[1] = 0;
      this.pointCount = 0;
    };
    return WorldManifold2;
  }();
  function getPointStates(state1, state2, manifold1, manifold2) {
    for (var i = 0; i < manifold1.pointCount; ++i) {
      var id = manifold1.points[i].id;
      state1[i] = PointState.removeState;
      for (var j = 0; j < manifold2.pointCount; ++j) {
        if (manifold2.points[j].id.key === id.key) {
          state1[i] = PointState.persistState;
          break;
        }
      }
    }
    for (var i = 0; i < manifold2.pointCount; ++i) {
      var id = manifold2.points[i].id;
      state2[i] = PointState.addState;
      for (var j = 0; j < manifold1.pointCount; ++j) {
        if (manifold1.points[j].id.key === id.key) {
          state2[i] = PointState.persistState;
          break;
        }
      }
    }
  }
  __name(getPointStates, "getPointStates");
  function clipSegmentToLine(vOut, vIn, normal3, offset, vertexIndexA) {
    var numOut = 0;
    var distance0 = dotVec2(normal3, vIn[0].v) - offset;
    var distance1 = dotVec2(normal3, vIn[1].v) - offset;
    if (distance0 <= 0)
      vOut[numOut++].set(vIn[0]);
    if (distance1 <= 0)
      vOut[numOut++].set(vIn[1]);
    if (distance0 * distance1 < 0) {
      var interp = distance0 / (distance0 - distance1);
      combineVec2(vOut[numOut].v, 1 - interp, vIn[0].v, interp, vIn[1].v);
      vOut[numOut].id.setFeatures(vertexIndexA, ContactFeatureType.e_vertex, vIn[0].id.indexB, ContactFeatureType.e_face);
      ++numOut;
    }
    return numOut;
  }
  __name(clipSegmentToLine, "clipSegmentToLine");
  var math_sqrt$1 = Math.sqrt;
  var math_max$2 = Math.max;
  var math_min$4 = Math.min;
  var contactPool = new Pool({
    create: function() {
      return new Contact();
    },
    release: function(contact) {
      contact.recycle();
    }
  });
  var oldManifold = new Manifold();
  var worldManifold = new WorldManifold();
  var ContactEdge = function() {
    function ContactEdge2(contact) {
      this.prev = null;
      this.next = null;
      this.other = null;
      this.contact = contact;
    }
    __name(ContactEdge2, "ContactEdge");
    ContactEdge2.prototype.recycle = function() {
      this.prev = null;
      this.next = null;
      this.other = null;
    };
    return ContactEdge2;
  }();
  function mixFriction(friction1, friction2) {
    return math_sqrt$1(friction1 * friction2);
  }
  __name(mixFriction, "mixFriction");
  function mixRestitution(restitution1, restitution2) {
    return restitution1 > restitution2 ? restitution1 : restitution2;
  }
  __name(mixRestitution, "mixRestitution");
  var s_registers = [];
  var VelocityConstraintPoint = function() {
    function VelocityConstraintPoint2() {
      this.rA = vec22(0, 0);
      this.rB = vec22(0, 0);
      this.normalImpulse = 0;
      this.tangentImpulse = 0;
      this.normalMass = 0;
      this.tangentMass = 0;
      this.velocityBias = 0;
    }
    __name(VelocityConstraintPoint2, "VelocityConstraintPoint");
    VelocityConstraintPoint2.prototype.recycle = function() {
      zeroVec2(this.rA);
      zeroVec2(this.rB);
      this.normalImpulse = 0;
      this.tangentImpulse = 0;
      this.normalMass = 0;
      this.tangentMass = 0;
      this.velocityBias = 0;
    };
    return VelocityConstraintPoint2;
  }();
  var cA = vec22(0, 0);
  var vA = vec22(0, 0);
  var cB = vec22(0, 0);
  var vB = vec22(0, 0);
  var tangent$1 = vec22(0, 0);
  var xfA = transform(0, 0, 0);
  var xfB = transform(0, 0, 0);
  var pointA = vec22(0, 0);
  var pointB = vec22(0, 0);
  var clipPoint = vec22(0, 0);
  var planePoint$1 = vec22(0, 0);
  var rA = vec22(0, 0);
  var rB = vec22(0, 0);
  var P$1 = vec22(0, 0);
  var normal$2 = vec22(0, 0);
  var point = vec22(0, 0);
  var dv = vec22(0, 0);
  var dv1 = vec22(0, 0);
  var dv2 = vec22(0, 0);
  var b = vec22(0, 0);
  var a = vec22(0, 0);
  var x2 = vec22(0, 0);
  var d = vec22(0, 0);
  var P1 = vec22(0, 0);
  var P2 = vec22(0, 0);
  var temp$2 = vec22(0, 0);
  var Contact = function() {
    function Contact2() {
      this.m_nodeA = new ContactEdge(this);
      this.m_nodeB = new ContactEdge(this);
      this.m_fixtureA = null;
      this.m_fixtureB = null;
      this.m_indexA = -1;
      this.m_indexB = -1;
      this.m_evaluateFcn = null;
      this.m_manifold = new Manifold();
      this.m_prev = null;
      this.m_next = null;
      this.m_toi = 1;
      this.m_toiCount = 0;
      this.m_toiFlag = false;
      this.m_friction = 0;
      this.m_restitution = 0;
      this.m_tangentSpeed = 0;
      this.m_enabledFlag = true;
      this.m_islandFlag = false;
      this.m_touchingFlag = false;
      this.m_filterFlag = false;
      this.m_bulletHitFlag = false;
      this.m_impulse = new ContactImpulse(this);
      this.v_points = [new VelocityConstraintPoint(), new VelocityConstraintPoint()];
      this.v_normal = vec22(0, 0);
      this.v_normalMass = new Mat22();
      this.v_K = new Mat22();
      this.v_pointCount = 0;
      this.v_tangentSpeed = 0;
      this.v_friction = 0;
      this.v_restitution = 0;
      this.v_invMassA = 0;
      this.v_invMassB = 0;
      this.v_invIA = 0;
      this.v_invIB = 0;
      this.p_localPoints = [vec22(0, 0), vec22(0, 0)];
      this.p_localNormal = vec22(0, 0);
      this.p_localPoint = vec22(0, 0);
      this.p_localCenterA = vec22(0, 0);
      this.p_localCenterB = vec22(0, 0);
      this.p_type = ManifoldType.e_unset;
      this.p_radiusA = 0;
      this.p_radiusB = 0;
      this.p_pointCount = 0;
      this.p_invMassA = 0;
      this.p_invMassB = 0;
      this.p_invIA = 0;
      this.p_invIB = 0;
    }
    __name(Contact2, "Contact");
    Contact2.prototype.initialize = function(fA, indexA, fB, indexB, evaluateFcn) {
      this.m_fixtureA = fA;
      this.m_fixtureB = fB;
      this.m_indexA = indexA;
      this.m_indexB = indexB;
      this.m_evaluateFcn = evaluateFcn;
      this.m_friction = mixFriction(this.m_fixtureA.m_friction, this.m_fixtureB.m_friction);
      this.m_restitution = mixRestitution(this.m_fixtureA.m_restitution, this.m_fixtureB.m_restitution);
    };
    Contact2.prototype.recycle = function() {
      this.m_nodeA.recycle();
      this.m_nodeB.recycle();
      this.m_fixtureA = null;
      this.m_fixtureB = null;
      this.m_indexA = -1;
      this.m_indexB = -1;
      this.m_evaluateFcn = null;
      this.m_manifold.recycle();
      this.m_prev = null;
      this.m_next = null;
      this.m_toi = 1;
      this.m_toiCount = 0;
      this.m_toiFlag = false;
      this.m_friction = 0;
      this.m_restitution = 0;
      this.m_tangentSpeed = 0;
      this.m_enabledFlag = true;
      this.m_islandFlag = false;
      this.m_touchingFlag = false;
      this.m_filterFlag = false;
      this.m_bulletHitFlag = false;
      this.m_impulse.recycle();
      for (var _i = 0, _a20 = this.v_points; _i < _a20.length; _i++) {
        var point_1 = _a20[_i];
        point_1.recycle();
      }
      zeroVec2(this.v_normal);
      this.v_normalMass.setZero();
      this.v_K.setZero();
      this.v_pointCount = 0;
      this.v_tangentSpeed = 0;
      this.v_friction = 0;
      this.v_restitution = 0;
      this.v_invMassA = 0;
      this.v_invMassB = 0;
      this.v_invIA = 0;
      this.v_invIB = 0;
      for (var _b = 0, _c = this.p_localPoints; _b < _c.length; _b++) {
        var point_2 = _c[_b];
        zeroVec2(point_2);
      }
      zeroVec2(this.p_localNormal);
      zeroVec2(this.p_localPoint);
      zeroVec2(this.p_localCenterA);
      zeroVec2(this.p_localCenterB);
      this.p_type = ManifoldType.e_unset;
      this.p_radiusA = 0;
      this.p_radiusB = 0;
      this.p_pointCount = 0;
      this.p_invMassA = 0;
      this.p_invMassB = 0;
      this.p_invIA = 0;
      this.p_invIB = 0;
    };
    Contact2.prototype.initConstraint = function(step) {
      var fixtureA = this.m_fixtureA;
      var fixtureB = this.m_fixtureB;
      if (fixtureA === null || fixtureB === null)
        return;
      var bodyA = fixtureA.m_body;
      var bodyB = fixtureB.m_body;
      if (bodyA === null || bodyB === null)
        return;
      var shapeA = fixtureA.m_shape;
      var shapeB = fixtureB.m_shape;
      if (shapeA === null || shapeB === null)
        return;
      var manifold = this.m_manifold;
      var pointCount = manifold.pointCount;
      this.v_invMassA = bodyA.m_invMass;
      this.v_invMassB = bodyB.m_invMass;
      this.v_invIA = bodyA.m_invI;
      this.v_invIB = bodyB.m_invI;
      this.v_friction = this.m_friction;
      this.v_restitution = this.m_restitution;
      this.v_tangentSpeed = this.m_tangentSpeed;
      this.v_pointCount = pointCount;
      this.v_K.setZero();
      this.v_normalMass.setZero();
      this.p_invMassA = bodyA.m_invMass;
      this.p_invMassB = bodyB.m_invMass;
      this.p_invIA = bodyA.m_invI;
      this.p_invIB = bodyB.m_invI;
      copyVec2(this.p_localCenterA, bodyA.m_sweep.localCenter);
      copyVec2(this.p_localCenterB, bodyB.m_sweep.localCenter);
      this.p_radiusA = shapeA.m_radius;
      this.p_radiusB = shapeB.m_radius;
      this.p_type = manifold.type;
      copyVec2(this.p_localNormal, manifold.localNormal);
      copyVec2(this.p_localPoint, manifold.localPoint);
      this.p_pointCount = pointCount;
      for (var j = 0; j < SettingsInternal.maxManifoldPoints; ++j) {
        this.v_points[j].recycle();
        zeroVec2(this.p_localPoints[j]);
      }
      for (var j = 0; j < pointCount; ++j) {
        var cp = manifold.points[j];
        var vcp = this.v_points[j];
        if (step.warmStarting) {
          vcp.normalImpulse = step.dtRatio * cp.normalImpulse;
          vcp.tangentImpulse = step.dtRatio * cp.tangentImpulse;
        }
        copyVec2(this.p_localPoints[j], cp.localPoint);
      }
    };
    Contact2.prototype.getManifold = function() {
      return this.m_manifold;
    };
    Contact2.prototype.getWorldManifold = function(worldManifold2) {
      var fixtureA = this.m_fixtureA;
      var fixtureB = this.m_fixtureB;
      if (fixtureA === null || fixtureB === null)
        return;
      var bodyA = fixtureA.m_body;
      var bodyB = fixtureB.m_body;
      if (bodyA === null || bodyB === null)
        return;
      var shapeA = fixtureA.m_shape;
      var shapeB = fixtureB.m_shape;
      if (shapeA === null || shapeB === null)
        return;
      return this.m_manifold.getWorldManifold(worldManifold2, bodyA.getTransform(), shapeA.m_radius, bodyB.getTransform(), shapeB.m_radius);
    };
    Contact2.prototype.setEnabled = function(flag) {
      this.m_enabledFlag = !!flag;
    };
    Contact2.prototype.isEnabled = function() {
      return this.m_enabledFlag;
    };
    Contact2.prototype.isTouching = function() {
      return this.m_touchingFlag;
    };
    Contact2.prototype.getNext = function() {
      return this.m_next;
    };
    Contact2.prototype.getFixtureA = function() {
      return this.m_fixtureA;
    };
    Contact2.prototype.getFixtureB = function() {
      return this.m_fixtureB;
    };
    Contact2.prototype.getChildIndexA = function() {
      return this.m_indexA;
    };
    Contact2.prototype.getChildIndexB = function() {
      return this.m_indexB;
    };
    Contact2.prototype.flagForFiltering = function() {
      this.m_filterFlag = true;
    };
    Contact2.prototype.setFriction = function(friction) {
      this.m_friction = friction;
    };
    Contact2.prototype.getFriction = function() {
      return this.m_friction;
    };
    Contact2.prototype.resetFriction = function() {
      var fixtureA = this.m_fixtureA;
      var fixtureB = this.m_fixtureB;
      if (fixtureA === null || fixtureB === null)
        return;
      this.m_friction = mixFriction(fixtureA.m_friction, fixtureB.m_friction);
    };
    Contact2.prototype.setRestitution = function(restitution) {
      this.m_restitution = restitution;
    };
    Contact2.prototype.getRestitution = function() {
      return this.m_restitution;
    };
    Contact2.prototype.resetRestitution = function() {
      var fixtureA = this.m_fixtureA;
      var fixtureB = this.m_fixtureB;
      if (fixtureA === null || fixtureB === null)
        return;
      this.m_restitution = mixRestitution(fixtureA.m_restitution, fixtureB.m_restitution);
    };
    Contact2.prototype.setTangentSpeed = function(speed) {
      this.m_tangentSpeed = speed;
    };
    Contact2.prototype.getTangentSpeed = function() {
      return this.m_tangentSpeed;
    };
    Contact2.prototype.evaluate = function(manifold, xfA2, xfB2) {
      var fixtureA = this.m_fixtureA;
      var fixtureB = this.m_fixtureB;
      if (fixtureA === null || fixtureB === null)
        return;
      this.m_evaluateFcn(manifold, xfA2, fixtureA, this.m_indexA, xfB2, fixtureB, this.m_indexB);
    };
    Contact2.prototype.update = function(listener) {
      var fixtureA = this.m_fixtureA;
      var fixtureB = this.m_fixtureB;
      if (fixtureA === null || fixtureB === null)
        return;
      var bodyA = fixtureA.m_body;
      var bodyB = fixtureB.m_body;
      if (bodyA === null || bodyB === null)
        return;
      var shapeA = fixtureA.m_shape;
      var shapeB = fixtureB.m_shape;
      if (shapeA === null || shapeB === null)
        return;
      this.m_enabledFlag = true;
      var touching = false;
      var wasTouching = this.m_touchingFlag;
      var sensorA = fixtureA.m_isSensor;
      var sensorB = fixtureB.m_isSensor;
      var sensor = sensorA || sensorB;
      var xfA2 = bodyA.m_xf;
      var xfB2 = bodyB.m_xf;
      if (sensor) {
        touching = testOverlap(shapeA, this.m_indexA, shapeB, this.m_indexB, xfA2, xfB2);
        this.m_manifold.pointCount = 0;
      } else {
        oldManifold.recycle();
        oldManifold.set(this.m_manifold);
        this.m_manifold.recycle();
        this.evaluate(this.m_manifold, xfA2, xfB2);
        touching = this.m_manifold.pointCount > 0;
        for (var i = 0; i < this.m_manifold.pointCount; ++i) {
          var nmp = this.m_manifold.points[i];
          nmp.normalImpulse = 0;
          nmp.tangentImpulse = 0;
          for (var j = 0; j < oldManifold.pointCount; ++j) {
            var omp = oldManifold.points[j];
            if (omp.id.key === nmp.id.key) {
              nmp.normalImpulse = omp.normalImpulse;
              nmp.tangentImpulse = omp.tangentImpulse;
              break;
            }
          }
        }
        if (touching !== wasTouching) {
          bodyA.setAwake(true);
          bodyB.setAwake(true);
        }
      }
      this.m_touchingFlag = touching;
      var hasListener = typeof listener === "object" && listener !== null;
      if (!wasTouching && touching && hasListener) {
        listener.beginContact(this);
      }
      if (wasTouching && !touching && hasListener) {
        listener.endContact(this);
      }
      if (!sensor && touching && hasListener && oldManifold) {
        listener.preSolve(this, oldManifold);
      }
    };
    Contact2.prototype.solvePositionConstraint = function(step) {
      return this._solvePositionConstraint(step, null, null);
    };
    Contact2.prototype.solvePositionConstraintTOI = function(step, toiA, toiB) {
      return this._solvePositionConstraint(step, toiA, toiB);
    };
    Contact2.prototype._solvePositionConstraint = function(step, toiA, toiB) {
      var toi = toiA !== null && toiB !== null ? true : false;
      var minSeparation = 0;
      var fixtureA = this.m_fixtureA;
      var fixtureB = this.m_fixtureB;
      if (fixtureA === null || fixtureB === null)
        return minSeparation;
      var bodyA = fixtureA.m_body;
      var bodyB = fixtureB.m_body;
      if (bodyA === null || bodyB === null)
        return minSeparation;
      bodyA.c_velocity;
      bodyB.c_velocity;
      var positionA = bodyA.c_position;
      var positionB = bodyB.c_position;
      var localCenterA = this.p_localCenterA;
      var localCenterB = this.p_localCenterB;
      var mA = 0;
      var iA = 0;
      if (!toi || (bodyA === toiA || bodyA === toiB)) {
        mA = this.p_invMassA;
        iA = this.p_invIA;
      }
      var mB = 0;
      var iB = 0;
      if (!toi || (bodyB === toiA || bodyB === toiB)) {
        mB = this.p_invMassB;
        iB = this.p_invIB;
      }
      copyVec2(cA, positionA.c);
      var aA = positionA.a;
      copyVec2(cB, positionB.c);
      var aB = positionB.a;
      for (var j = 0; j < this.p_pointCount; ++j) {
        getTransform(xfA, localCenterA, cA, aA);
        getTransform(xfB, localCenterB, cB, aB);
        var separation = void 0;
        switch (this.p_type) {
          case ManifoldType.e_circles: {
            transformVec2(pointA, xfA, this.p_localPoint);
            transformVec2(pointB, xfB, this.p_localPoints[0]);
            diffVec2(normal$2, pointB, pointA);
            normalizeVec2(normal$2);
            combineVec2(point, 0.5, pointA, 0.5, pointB);
            separation = dotVec2(pointB, normal$2) - dotVec2(pointA, normal$2) - this.p_radiusA - this.p_radiusB;
            break;
          }
          case ManifoldType.e_faceA: {
            rotVec2(normal$2, xfA.q, this.p_localNormal);
            transformVec2(planePoint$1, xfA, this.p_localPoint);
            transformVec2(clipPoint, xfB, this.p_localPoints[j]);
            separation = dotVec2(clipPoint, normal$2) - dotVec2(planePoint$1, normal$2) - this.p_radiusA - this.p_radiusB;
            copyVec2(point, clipPoint);
            break;
          }
          case ManifoldType.e_faceB: {
            rotVec2(normal$2, xfB.q, this.p_localNormal);
            transformVec2(planePoint$1, xfB, this.p_localPoint);
            transformVec2(clipPoint, xfA, this.p_localPoints[j]);
            separation = dotVec2(clipPoint, normal$2) - dotVec2(planePoint$1, normal$2) - this.p_radiusA - this.p_radiusB;
            copyVec2(point, clipPoint);
            negVec2(normal$2);
            break;
          }
          default: {
            return minSeparation;
          }
        }
        diffVec2(rA, point, cA);
        diffVec2(rB, point, cB);
        minSeparation = math_min$4(minSeparation, separation);
        var baumgarte = toi ? SettingsInternal.toiBaugarte : SettingsInternal.baumgarte;
        var linearSlop = SettingsInternal.linearSlop;
        var maxLinearCorrection = SettingsInternal.maxLinearCorrection;
        var C = clamp(baumgarte * (separation + linearSlop), -maxLinearCorrection, 0);
        var rnA = crossVec2Vec2(rA, normal$2);
        var rnB = crossVec2Vec2(rB, normal$2);
        var K = mA + mB + iA * rnA * rnA + iB * rnB * rnB;
        var impulse = K > 0 ? -C / K : 0;
        setMulVec2(P$1, impulse, normal$2);
        subMulVec2(cA, mA, P$1);
        aA -= iA * crossVec2Vec2(rA, P$1);
        addMulVec2(cB, mB, P$1);
        aB += iB * crossVec2Vec2(rB, P$1);
      }
      copyVec2(positionA.c, cA);
      positionA.a = aA;
      copyVec2(positionB.c, cB);
      positionB.a = aB;
      return minSeparation;
    };
    Contact2.prototype.initVelocityConstraint = function(step) {
      var fixtureA = this.m_fixtureA;
      var fixtureB = this.m_fixtureB;
      if (fixtureA === null || fixtureB === null)
        return;
      var bodyA = fixtureA.m_body;
      var bodyB = fixtureB.m_body;
      if (bodyA === null || bodyB === null)
        return;
      var velocityA = bodyA.c_velocity;
      var velocityB = bodyB.c_velocity;
      var positionA = bodyA.c_position;
      var positionB = bodyB.c_position;
      var radiusA = this.p_radiusA;
      var radiusB = this.p_radiusB;
      var manifold = this.m_manifold;
      var mA = this.v_invMassA;
      var mB = this.v_invMassB;
      var iA = this.v_invIA;
      var iB = this.v_invIB;
      var localCenterA = this.p_localCenterA;
      var localCenterB = this.p_localCenterB;
      copyVec2(cA, positionA.c);
      var aA = positionA.a;
      copyVec2(vA, velocityA.v);
      var wA = velocityA.w;
      copyVec2(cB, positionB.c);
      var aB = positionB.a;
      copyVec2(vB, velocityB.v);
      var wB = velocityB.w;
      getTransform(xfA, localCenterA, cA, aA);
      getTransform(xfB, localCenterB, cB, aB);
      worldManifold.recycle();
      manifold.getWorldManifold(worldManifold, xfA, radiusA, xfB, radiusB);
      copyVec2(this.v_normal, worldManifold.normal);
      for (var j = 0; j < this.v_pointCount; ++j) {
        var vcp = this.v_points[j];
        var wmp = worldManifold.points[j];
        diffVec2(vcp.rA, wmp, cA);
        diffVec2(vcp.rB, wmp, cB);
        var rnA = crossVec2Vec2(vcp.rA, this.v_normal);
        var rnB = crossVec2Vec2(vcp.rB, this.v_normal);
        var kNormal = mA + mB + iA * rnA * rnA + iB * rnB * rnB;
        vcp.normalMass = kNormal > 0 ? 1 / kNormal : 0;
        crossVec2Num(tangent$1, this.v_normal, 1);
        var rtA = crossVec2Vec2(vcp.rA, tangent$1);
        var rtB = crossVec2Vec2(vcp.rB, tangent$1);
        var kTangent = mA + mB + iA * rtA * rtA + iB * rtB * rtB;
        vcp.tangentMass = kTangent > 0 ? 1 / kTangent : 0;
        vcp.velocityBias = 0;
        var vRel = 0;
        vRel += dotVec2(this.v_normal, vB);
        vRel += dotVec2(this.v_normal, crossNumVec2(temp$2, wB, vcp.rB));
        vRel -= dotVec2(this.v_normal, vA);
        vRel -= dotVec2(this.v_normal, crossNumVec2(temp$2, wA, vcp.rA));
        if (vRel < -SettingsInternal.velocityThreshold) {
          vcp.velocityBias = -this.v_restitution * vRel;
        }
      }
      if (this.v_pointCount == 2 && step.blockSolve) {
        var vcp1 = this.v_points[0];
        var vcp2 = this.v_points[1];
        var rn1A = crossVec2Vec2(vcp1.rA, this.v_normal);
        var rn1B = crossVec2Vec2(vcp1.rB, this.v_normal);
        var rn2A = crossVec2Vec2(vcp2.rA, this.v_normal);
        var rn2B = crossVec2Vec2(vcp2.rB, this.v_normal);
        var k11 = mA + mB + iA * rn1A * rn1A + iB * rn1B * rn1B;
        var k22 = mA + mB + iA * rn2A * rn2A + iB * rn2B * rn2B;
        var k12 = mA + mB + iA * rn1A * rn2A + iB * rn1B * rn2B;
        var k_maxConditionNumber = 1e3;
        if (k11 * k11 < k_maxConditionNumber * (k11 * k22 - k12 * k12)) {
          this.v_K.ex.setNum(k11, k12);
          this.v_K.ey.setNum(k12, k22);
          var a_1 = this.v_K.ex.x;
          var b_1 = this.v_K.ey.x;
          var c2 = this.v_K.ex.y;
          var d_1 = this.v_K.ey.y;
          var det = a_1 * d_1 - b_1 * c2;
          if (det !== 0) {
            det = 1 / det;
          }
          this.v_normalMass.ex.x = det * d_1;
          this.v_normalMass.ey.x = -det * b_1;
          this.v_normalMass.ex.y = -det * c2;
          this.v_normalMass.ey.y = det * a_1;
        } else {
          this.v_pointCount = 1;
        }
      }
      copyVec2(positionA.c, cA);
      positionA.a = aA;
      copyVec2(velocityA.v, vA);
      velocityA.w = wA;
      copyVec2(positionB.c, cB);
      positionB.a = aB;
      copyVec2(velocityB.v, vB);
      velocityB.w = wB;
    };
    Contact2.prototype.warmStartConstraint = function(step) {
      var fixtureA = this.m_fixtureA;
      var fixtureB = this.m_fixtureB;
      if (fixtureA === null || fixtureB === null)
        return;
      var bodyA = fixtureA.m_body;
      var bodyB = fixtureB.m_body;
      if (bodyA === null || bodyB === null)
        return;
      var velocityA = bodyA.c_velocity;
      var velocityB = bodyB.c_velocity;
      bodyA.c_position;
      bodyB.c_position;
      var mA = this.v_invMassA;
      var iA = this.v_invIA;
      var mB = this.v_invMassB;
      var iB = this.v_invIB;
      copyVec2(vA, velocityA.v);
      var wA = velocityA.w;
      copyVec2(vB, velocityB.v);
      var wB = velocityB.w;
      copyVec2(normal$2, this.v_normal);
      crossVec2Num(tangent$1, normal$2, 1);
      for (var j = 0; j < this.v_pointCount; ++j) {
        var vcp = this.v_points[j];
        combineVec2(P$1, vcp.normalImpulse, normal$2, vcp.tangentImpulse, tangent$1);
        wA -= iA * crossVec2Vec2(vcp.rA, P$1);
        subMulVec2(vA, mA, P$1);
        wB += iB * crossVec2Vec2(vcp.rB, P$1);
        addMulVec2(vB, mB, P$1);
      }
      copyVec2(velocityA.v, vA);
      velocityA.w = wA;
      copyVec2(velocityB.v, vB);
      velocityB.w = wB;
    };
    Contact2.prototype.storeConstraintImpulses = function(step) {
      var manifold = this.m_manifold;
      for (var j = 0; j < this.v_pointCount; ++j) {
        manifold.points[j].normalImpulse = this.v_points[j].normalImpulse;
        manifold.points[j].tangentImpulse = this.v_points[j].tangentImpulse;
      }
    };
    Contact2.prototype.solveVelocityConstraint = function(step) {
      var fixtureA = this.m_fixtureA;
      var fixtureB = this.m_fixtureB;
      if (fixtureA === null || fixtureB === null)
        return;
      var bodyA = fixtureA.m_body;
      var bodyB = fixtureB.m_body;
      if (bodyA === null || bodyB === null)
        return;
      var velocityA = bodyA.c_velocity;
      bodyA.c_position;
      var velocityB = bodyB.c_velocity;
      bodyB.c_position;
      var mA = this.v_invMassA;
      var iA = this.v_invIA;
      var mB = this.v_invMassB;
      var iB = this.v_invIB;
      copyVec2(vA, velocityA.v);
      var wA = velocityA.w;
      copyVec2(vB, velocityB.v);
      var wB = velocityB.w;
      copyVec2(normal$2, this.v_normal);
      crossVec2Num(tangent$1, normal$2, 1);
      var friction = this.v_friction;
      for (var j = 0; j < this.v_pointCount; ++j) {
        var vcp = this.v_points[j];
        zeroVec2(dv);
        addVec2(dv, vB);
        addVec2(dv, crossNumVec2(temp$2, wB, vcp.rB));
        subVec2(dv, vA);
        subVec2(dv, crossNumVec2(temp$2, wA, vcp.rA));
        var vt2 = dotVec2(dv, tangent$1) - this.v_tangentSpeed;
        var lambda = vcp.tangentMass * -vt2;
        var maxFriction = friction * vcp.normalImpulse;
        var newImpulse = clamp(vcp.tangentImpulse + lambda, -maxFriction, maxFriction);
        lambda = newImpulse - vcp.tangentImpulse;
        vcp.tangentImpulse = newImpulse;
        setMulVec2(P$1, lambda, tangent$1);
        subMulVec2(vA, mA, P$1);
        wA -= iA * crossVec2Vec2(vcp.rA, P$1);
        addMulVec2(vB, mB, P$1);
        wB += iB * crossVec2Vec2(vcp.rB, P$1);
      }
      if (this.v_pointCount == 1 || step.blockSolve == false) {
        for (var i = 0; i < this.v_pointCount; ++i) {
          var vcp = this.v_points[i];
          zeroVec2(dv);
          addVec2(dv, vB);
          addVec2(dv, crossNumVec2(temp$2, wB, vcp.rB));
          subVec2(dv, vA);
          subVec2(dv, crossNumVec2(temp$2, wA, vcp.rA));
          var vn = dotVec2(dv, normal$2);
          var lambda = -vcp.normalMass * (vn - vcp.velocityBias);
          var newImpulse = math_max$2(vcp.normalImpulse + lambda, 0);
          lambda = newImpulse - vcp.normalImpulse;
          vcp.normalImpulse = newImpulse;
          setMulVec2(P$1, lambda, normal$2);
          subMulVec2(vA, mA, P$1);
          wA -= iA * crossVec2Vec2(vcp.rA, P$1);
          addMulVec2(vB, mB, P$1);
          wB += iB * crossVec2Vec2(vcp.rB, P$1);
        }
      } else {
        var vcp1 = this.v_points[0];
        var vcp2 = this.v_points[1];
        setVec2(a, vcp1.normalImpulse, vcp2.normalImpulse);
        zeroVec2(dv1);
        addVec2(dv1, vB);
        addVec2(dv1, crossNumVec2(temp$2, wB, vcp1.rB));
        subVec2(dv1, vA);
        subVec2(dv1, crossNumVec2(temp$2, wA, vcp1.rA));
        zeroVec2(dv2);
        addVec2(dv2, vB);
        addVec2(dv2, crossNumVec2(temp$2, wB, vcp2.rB));
        subVec2(dv2, vA);
        subVec2(dv2, crossNumVec2(temp$2, wA, vcp2.rA));
        var vn1 = dotVec2(dv1, normal$2);
        var vn2 = dotVec2(dv2, normal$2);
        setVec2(b, vn1 - vcp1.velocityBias, vn2 - vcp2.velocityBias);
        b.x -= this.v_K.ex.x * a.x + this.v_K.ey.x * a.y;
        b.y -= this.v_K.ex.y * a.x + this.v_K.ey.y * a.y;
        while (true) {
          zeroVec2(x2);
          x2.x = -(this.v_normalMass.ex.x * b.x + this.v_normalMass.ey.x * b.y);
          x2.y = -(this.v_normalMass.ex.y * b.x + this.v_normalMass.ey.y * b.y);
          if (x2.x >= 0 && x2.y >= 0) {
            diffVec2(d, x2, a);
            setMulVec2(P1, d.x, normal$2);
            setMulVec2(P2, d.y, normal$2);
            subMulVec2(vA, mA, P1);
            subMulVec2(vA, mA, P2);
            wA -= iA * (crossVec2Vec2(vcp1.rA, P1) + crossVec2Vec2(vcp2.rA, P2));
            addMulVec2(vB, mB, P1);
            addMulVec2(vB, mB, P2);
            wB += iB * (crossVec2Vec2(vcp1.rB, P1) + crossVec2Vec2(vcp2.rB, P2));
            vcp1.normalImpulse = x2.x;
            vcp2.normalImpulse = x2.y;
            break;
          }
          x2.x = -vcp1.normalMass * b.x;
          x2.y = 0;
          vn1 = 0;
          vn2 = this.v_K.ex.y * x2.x + b.y;
          if (x2.x >= 0 && vn2 >= 0) {
            diffVec2(d, x2, a);
            setMulVec2(P1, d.x, normal$2);
            setMulVec2(P2, d.y, normal$2);
            subMulVec2(vA, mA, P1);
            subMulVec2(vA, mA, P2);
            wA -= iA * (crossVec2Vec2(vcp1.rA, P1) + crossVec2Vec2(vcp2.rA, P2));
            addMulVec2(vB, mB, P1);
            addMulVec2(vB, mB, P2);
            wB += iB * (crossVec2Vec2(vcp1.rB, P1) + crossVec2Vec2(vcp2.rB, P2));
            vcp1.normalImpulse = x2.x;
            vcp2.normalImpulse = x2.y;
            break;
          }
          x2.x = 0;
          x2.y = -vcp2.normalMass * b.y;
          vn1 = this.v_K.ey.x * x2.y + b.x;
          vn2 = 0;
          if (x2.y >= 0 && vn1 >= 0) {
            diffVec2(d, x2, a);
            setMulVec2(P1, d.x, normal$2);
            setMulVec2(P2, d.y, normal$2);
            subMulVec2(vA, mA, P1);
            subMulVec2(vA, mA, P2);
            wA -= iA * (crossVec2Vec2(vcp1.rA, P1) + crossVec2Vec2(vcp2.rA, P2));
            addMulVec2(vB, mB, P1);
            addMulVec2(vB, mB, P2);
            wB += iB * (crossVec2Vec2(vcp1.rB, P1) + crossVec2Vec2(vcp2.rB, P2));
            vcp1.normalImpulse = x2.x;
            vcp2.normalImpulse = x2.y;
            break;
          }
          x2.x = 0;
          x2.y = 0;
          vn1 = b.x;
          vn2 = b.y;
          if (vn1 >= 0 && vn2 >= 0) {
            diffVec2(d, x2, a);
            setMulVec2(P1, d.x, normal$2);
            setMulVec2(P2, d.y, normal$2);
            subMulVec2(vA, mA, P1);
            subMulVec2(vA, mA, P2);
            wA -= iA * (crossVec2Vec2(vcp1.rA, P1) + crossVec2Vec2(vcp2.rA, P2));
            addMulVec2(vB, mB, P1);
            addMulVec2(vB, mB, P2);
            wB += iB * (crossVec2Vec2(vcp1.rB, P1) + crossVec2Vec2(vcp2.rB, P2));
            vcp1.normalImpulse = x2.x;
            vcp2.normalImpulse = x2.y;
            break;
          }
          break;
        }
      }
      copyVec2(velocityA.v, vA);
      velocityA.w = wA;
      copyVec2(velocityB.v, vB);
      velocityB.w = wB;
    };
    Contact2.addType = function(type1, type2, callback) {
      s_registers[type1] = s_registers[type1] || {};
      s_registers[type1][type2] = callback;
    };
    Contact2.create = function(fixtureA, indexA, fixtureB, indexB) {
      var typeA = fixtureA.m_shape.m_type;
      var typeB = fixtureB.m_shape.m_type;
      var contact = contactPool.allocate();
      var evaluateFcn;
      if (evaluateFcn = s_registers[typeA] && s_registers[typeA][typeB]) {
        contact.initialize(fixtureA, indexA, fixtureB, indexB, evaluateFcn);
      } else if (evaluateFcn = s_registers[typeB] && s_registers[typeB][typeA]) {
        contact.initialize(fixtureB, indexB, fixtureA, indexA, evaluateFcn);
      } else {
        return null;
      }
      fixtureA = contact.m_fixtureA;
      fixtureB = contact.m_fixtureB;
      indexA = contact.getChildIndexA();
      indexB = contact.getChildIndexB();
      var bodyA = fixtureA.m_body;
      var bodyB = fixtureB.m_body;
      contact.m_nodeA.contact = contact;
      contact.m_nodeA.other = bodyB;
      contact.m_nodeA.prev = null;
      contact.m_nodeA.next = bodyA.m_contactList;
      if (bodyA.m_contactList != null) {
        bodyA.m_contactList.prev = contact.m_nodeA;
      }
      bodyA.m_contactList = contact.m_nodeA;
      contact.m_nodeB.contact = contact;
      contact.m_nodeB.other = bodyA;
      contact.m_nodeB.prev = null;
      contact.m_nodeB.next = bodyB.m_contactList;
      if (bodyB.m_contactList != null) {
        bodyB.m_contactList.prev = contact.m_nodeB;
      }
      bodyB.m_contactList = contact.m_nodeB;
      if (fixtureA.isSensor() == false && fixtureB.isSensor() == false) {
        bodyA.setAwake(true);
        bodyB.setAwake(true);
      }
      return contact;
    };
    Contact2.destroy = function(contact, listener) {
      var fixtureA = contact.m_fixtureA;
      var fixtureB = contact.m_fixtureB;
      if (fixtureA === null || fixtureB === null)
        return;
      var bodyA = fixtureA.m_body;
      var bodyB = fixtureB.m_body;
      if (bodyA === null || bodyB === null)
        return;
      if (contact.isTouching()) {
        listener.endContact(contact);
      }
      if (contact.m_nodeA.prev) {
        contact.m_nodeA.prev.next = contact.m_nodeA.next;
      }
      if (contact.m_nodeA.next) {
        contact.m_nodeA.next.prev = contact.m_nodeA.prev;
      }
      if (contact.m_nodeA == bodyA.m_contactList) {
        bodyA.m_contactList = contact.m_nodeA.next;
      }
      if (contact.m_nodeB.prev) {
        contact.m_nodeB.prev.next = contact.m_nodeB.next;
      }
      if (contact.m_nodeB.next) {
        contact.m_nodeB.next.prev = contact.m_nodeB.prev;
      }
      if (contact.m_nodeB == bodyB.m_contactList) {
        bodyB.m_contactList = contact.m_nodeB.next;
      }
      if (contact.m_manifold.pointCount > 0 && !fixtureA.m_isSensor && !fixtureB.m_isSensor) {
        bodyA.setAwake(true);
        bodyB.setAwake(true);
      }
      contactPool.release(contact);
    };
    return Contact2;
  }();
  var WorldDefDefault = {
    gravity: Vec2.zero(),
    allowSleep: true,
    warmStarting: true,
    continuousPhysics: true,
    subStepping: false,
    blockSolve: true,
    velocityIterations: 8,
    positionIterations: 3
  };
  var World = function() {
    function World2(def) {
      if (!(this instanceof World2)) {
        return new World2(def);
      }
      this.s_step = new TimeStep();
      if (def && Vec2.isValid(def)) {
        def = { gravity: def };
      }
      def = options(def, WorldDefDefault);
      this.m_solver = new Solver(this);
      this.m_broadPhase = new BroadPhase();
      this.m_contactList = null;
      this.m_contactCount = 0;
      this.m_bodyList = null;
      this.m_bodyCount = 0;
      this.m_jointList = null;
      this.m_jointCount = 0;
      this.m_stepComplete = true;
      this.m_allowSleep = def.allowSleep;
      this.m_gravity = Vec2.clone(def.gravity);
      this.m_clearForces = true;
      this.m_newFixture = false;
      this.m_locked = false;
      this.m_warmStarting = def.warmStarting;
      this.m_continuousPhysics = def.continuousPhysics;
      this.m_subStepping = def.subStepping;
      this.m_blockSolve = def.blockSolve;
      this.m_velocityIterations = def.velocityIterations;
      this.m_positionIterations = def.positionIterations;
      this.m_t = 0;
    }
    __name(World2, "World");
    World2.prototype._serialize = function() {
      var bodies = [];
      var joints = [];
      for (var b2 = this.getBodyList(); b2; b2 = b2.getNext()) {
        bodies.push(b2);
      }
      for (var j = this.getJointList(); j; j = j.getNext()) {
        if (typeof j._serialize === "function") {
          joints.push(j);
        }
      }
      return {
        gravity: this.m_gravity,
        bodies,
        joints
      };
    };
    World2._deserialize = function(data, context, restore) {
      if (!data) {
        return new World2();
      }
      var world2 = new World2(data.gravity);
      if (data.bodies) {
        for (var i = data.bodies.length - 1; i >= 0; i -= 1) {
          world2._addBody(restore(Body, data.bodies[i], world2));
        }
      }
      if (data.joints) {
        for (var i = data.joints.length - 1; i >= 0; i--) {
          world2.createJoint(restore(Joint, data.joints[i], world2));
        }
      }
      return world2;
    };
    World2.prototype.getBodyList = function() {
      return this.m_bodyList;
    };
    World2.prototype.getJointList = function() {
      return this.m_jointList;
    };
    World2.prototype.getContactList = function() {
      return this.m_contactList;
    };
    World2.prototype.getBodyCount = function() {
      return this.m_bodyCount;
    };
    World2.prototype.getJointCount = function() {
      return this.m_jointCount;
    };
    World2.prototype.getContactCount = function() {
      return this.m_contactCount;
    };
    World2.prototype.setGravity = function(gravity) {
      this.m_gravity = gravity;
    };
    World2.prototype.getGravity = function() {
      return this.m_gravity;
    };
    World2.prototype.isLocked = function() {
      return this.m_locked;
    };
    World2.prototype.setAllowSleeping = function(flag) {
      if (flag == this.m_allowSleep) {
        return;
      }
      this.m_allowSleep = flag;
      if (this.m_allowSleep == false) {
        for (var b2 = this.m_bodyList; b2; b2 = b2.m_next) {
          b2.setAwake(true);
        }
      }
    };
    World2.prototype.getAllowSleeping = function() {
      return this.m_allowSleep;
    };
    World2.prototype.setWarmStarting = function(flag) {
      this.m_warmStarting = flag;
    };
    World2.prototype.getWarmStarting = function() {
      return this.m_warmStarting;
    };
    World2.prototype.setContinuousPhysics = function(flag) {
      this.m_continuousPhysics = flag;
    };
    World2.prototype.getContinuousPhysics = function() {
      return this.m_continuousPhysics;
    };
    World2.prototype.setSubStepping = function(flag) {
      this.m_subStepping = flag;
    };
    World2.prototype.getSubStepping = function() {
      return this.m_subStepping;
    };
    World2.prototype.setAutoClearForces = function(flag) {
      this.m_clearForces = flag;
    };
    World2.prototype.getAutoClearForces = function() {
      return this.m_clearForces;
    };
    World2.prototype.clearForces = function() {
      for (var body = this.m_bodyList; body; body = body.getNext()) {
        body.m_force.setZero();
        body.m_torque = 0;
      }
    };
    World2.prototype.queryAABB = function(aabb, callback) {
      var broadPhase = this.m_broadPhase;
      this.m_broadPhase.query(aabb, function(proxyId) {
        var proxy = broadPhase.getUserData(proxyId);
        return callback(proxy.fixture);
      });
    };
    World2.prototype.rayCast = function(point1, point2, callback) {
      var broadPhase = this.m_broadPhase;
      this.m_broadPhase.rayCast({
        maxFraction: 1,
        p1: point1,
        p2: point2
      }, function(input2, proxyId) {
        var proxy = broadPhase.getUserData(proxyId);
        var fixture = proxy.fixture;
        var index = proxy.childIndex;
        var output2 = {};
        var hit = fixture.rayCast(output2, input2, index);
        if (hit) {
          var fraction = output2.fraction;
          var point3 = Vec2.add(Vec2.mulNumVec2(1 - fraction, input2.p1), Vec2.mulNumVec2(fraction, input2.p2));
          return callback(fixture, point3, output2.normal, fraction);
        }
        return input2.maxFraction;
      });
    };
    World2.prototype.getProxyCount = function() {
      return this.m_broadPhase.getProxyCount();
    };
    World2.prototype.getTreeHeight = function() {
      return this.m_broadPhase.getTreeHeight();
    };
    World2.prototype.getTreeBalance = function() {
      return this.m_broadPhase.getTreeBalance();
    };
    World2.prototype.getTreeQuality = function() {
      return this.m_broadPhase.getTreeQuality();
    };
    World2.prototype.shiftOrigin = function(newOrigin) {
      if (this.m_locked) {
        return;
      }
      for (var b2 = this.m_bodyList; b2; b2 = b2.m_next) {
        b2.m_xf.p.sub(newOrigin);
        b2.m_sweep.c0.sub(newOrigin);
        b2.m_sweep.c.sub(newOrigin);
      }
      for (var j = this.m_jointList; j; j = j.m_next) {
        j.shiftOrigin(newOrigin);
      }
      this.m_broadPhase.shiftOrigin(newOrigin);
    };
    World2.prototype._addBody = function(body) {
      if (this.isLocked()) {
        return;
      }
      body.m_prev = null;
      body.m_next = this.m_bodyList;
      if (this.m_bodyList) {
        this.m_bodyList.m_prev = body;
      }
      this.m_bodyList = body;
      ++this.m_bodyCount;
    };
    World2.prototype.createBody = function(arg1, arg2) {
      if (this.isLocked()) {
        return null;
      }
      var def = {};
      if (!arg1)
        ;
      else if (Vec2.isValid(arg1)) {
        def = { position: arg1, angle: arg2 };
      } else if (typeof arg1 === "object") {
        def = arg1;
      }
      var body = new Body(this, def);
      this._addBody(body);
      return body;
    };
    World2.prototype.createDynamicBody = function(arg1, arg2) {
      var def = {};
      if (!arg1)
        ;
      else if (Vec2.isValid(arg1)) {
        def = { position: arg1, angle: arg2 };
      } else if (typeof arg1 === "object") {
        def = arg1;
      }
      def.type = "dynamic";
      return this.createBody(def);
    };
    World2.prototype.createKinematicBody = function(arg1, arg2) {
      var def = {};
      if (!arg1)
        ;
      else if (Vec2.isValid(arg1)) {
        def = { position: arg1, angle: arg2 };
      } else if (typeof arg1 === "object") {
        def = arg1;
      }
      def.type = "kinematic";
      return this.createBody(def);
    };
    World2.prototype.destroyBody = function(b2) {
      if (this.isLocked()) {
        return;
      }
      if (b2.m_destroyed) {
        return false;
      }
      var je = b2.m_jointList;
      while (je) {
        var je0 = je;
        je = je.next;
        this.publish("remove-joint", je0.joint);
        this.destroyJoint(je0.joint);
        b2.m_jointList = je;
      }
      b2.m_jointList = null;
      var ce2 = b2.m_contactList;
      while (ce2) {
        var ce0 = ce2;
        ce2 = ce2.next;
        this.destroyContact(ce0.contact);
        b2.m_contactList = ce2;
      }
      b2.m_contactList = null;
      var f = b2.m_fixtureList;
      while (f) {
        var f0 = f;
        f = f.m_next;
        this.publish("remove-fixture", f0);
        f0.destroyProxies(this.m_broadPhase);
        b2.m_fixtureList = f;
      }
      b2.m_fixtureList = null;
      if (b2.m_prev) {
        b2.m_prev.m_next = b2.m_next;
      }
      if (b2.m_next) {
        b2.m_next.m_prev = b2.m_prev;
      }
      if (b2 == this.m_bodyList) {
        this.m_bodyList = b2.m_next;
      }
      b2.m_destroyed = true;
      --this.m_bodyCount;
      this.publish("remove-body", b2);
      return true;
    };
    World2.prototype.createJoint = function(joint) {
      if (this.isLocked()) {
        return null;
      }
      joint.m_prev = null;
      joint.m_next = this.m_jointList;
      if (this.m_jointList) {
        this.m_jointList.m_prev = joint;
      }
      this.m_jointList = joint;
      ++this.m_jointCount;
      joint.m_edgeA.joint = joint;
      joint.m_edgeA.other = joint.m_bodyB;
      joint.m_edgeA.prev = null;
      joint.m_edgeA.next = joint.m_bodyA.m_jointList;
      if (joint.m_bodyA.m_jointList)
        joint.m_bodyA.m_jointList.prev = joint.m_edgeA;
      joint.m_bodyA.m_jointList = joint.m_edgeA;
      joint.m_edgeB.joint = joint;
      joint.m_edgeB.other = joint.m_bodyA;
      joint.m_edgeB.prev = null;
      joint.m_edgeB.next = joint.m_bodyB.m_jointList;
      if (joint.m_bodyB.m_jointList)
        joint.m_bodyB.m_jointList.prev = joint.m_edgeB;
      joint.m_bodyB.m_jointList = joint.m_edgeB;
      if (joint.m_collideConnected == false) {
        for (var edge = joint.m_bodyB.getContactList(); edge; edge = edge.next) {
          if (edge.other == joint.m_bodyA) {
            edge.contact.flagForFiltering();
          }
        }
      }
      return joint;
    };
    World2.prototype.destroyJoint = function(joint) {
      if (this.isLocked()) {
        return;
      }
      if (joint.m_prev) {
        joint.m_prev.m_next = joint.m_next;
      }
      if (joint.m_next) {
        joint.m_next.m_prev = joint.m_prev;
      }
      if (joint == this.m_jointList) {
        this.m_jointList = joint.m_next;
      }
      var bodyA = joint.m_bodyA;
      var bodyB = joint.m_bodyB;
      bodyA.setAwake(true);
      bodyB.setAwake(true);
      if (joint.m_edgeA.prev) {
        joint.m_edgeA.prev.next = joint.m_edgeA.next;
      }
      if (joint.m_edgeA.next) {
        joint.m_edgeA.next.prev = joint.m_edgeA.prev;
      }
      if (joint.m_edgeA == bodyA.m_jointList) {
        bodyA.m_jointList = joint.m_edgeA.next;
      }
      joint.m_edgeA.prev = null;
      joint.m_edgeA.next = null;
      if (joint.m_edgeB.prev) {
        joint.m_edgeB.prev.next = joint.m_edgeB.next;
      }
      if (joint.m_edgeB.next) {
        joint.m_edgeB.next.prev = joint.m_edgeB.prev;
      }
      if (joint.m_edgeB == bodyB.m_jointList) {
        bodyB.m_jointList = joint.m_edgeB.next;
      }
      joint.m_edgeB.prev = null;
      joint.m_edgeB.next = null;
      --this.m_jointCount;
      if (joint.m_collideConnected == false) {
        var edge = bodyB.getContactList();
        while (edge) {
          if (edge.other == bodyA) {
            edge.contact.flagForFiltering();
          }
          edge = edge.next;
        }
      }
      this.publish("remove-joint", joint);
    };
    World2.prototype.step = function(timeStep, velocityIterations, positionIterations) {
      this.publish("pre-step", timeStep);
      if ((velocityIterations | 0) !== velocityIterations) {
        velocityIterations = 0;
      }
      velocityIterations = velocityIterations || this.m_velocityIterations;
      positionIterations = positionIterations || this.m_positionIterations;
      if (this.m_newFixture) {
        this.findNewContacts();
        this.m_newFixture = false;
      }
      this.m_locked = true;
      this.s_step.reset(timeStep);
      this.s_step.velocityIterations = velocityIterations;
      this.s_step.positionIterations = positionIterations;
      this.s_step.warmStarting = this.m_warmStarting;
      this.s_step.blockSolve = this.m_blockSolve;
      this.updateContacts();
      if (this.m_stepComplete && timeStep > 0) {
        this.m_solver.solveWorld(this.s_step);
        for (var b2 = this.m_bodyList; b2; b2 = b2.getNext()) {
          if (b2.m_islandFlag == false) {
            continue;
          }
          if (b2.isStatic()) {
            continue;
          }
          b2.synchronizeFixtures();
        }
        this.findNewContacts();
      }
      if (this.m_continuousPhysics && timeStep > 0) {
        this.m_solver.solveWorldTOI(this.s_step);
      }
      if (this.m_clearForces) {
        this.clearForces();
      }
      this.m_locked = false;
      this.publish("post-step", timeStep);
    };
    World2.prototype.findNewContacts = function() {
      var _this = this;
      this.m_broadPhase.updatePairs(function(proxyA, proxyB) {
        return _this.createContact(proxyA, proxyB);
      });
    };
    World2.prototype.createContact = function(proxyA, proxyB) {
      var fixtureA = proxyA.fixture;
      var fixtureB = proxyB.fixture;
      var indexA = proxyA.childIndex;
      var indexB = proxyB.childIndex;
      var bodyA = fixtureA.getBody();
      var bodyB = fixtureB.getBody();
      if (bodyA == bodyB) {
        return;
      }
      var edge = bodyB.getContactList();
      while (edge) {
        if (edge.other == bodyA) {
          var fA = edge.contact.getFixtureA();
          var fB = edge.contact.getFixtureB();
          var iA = edge.contact.getChildIndexA();
          var iB = edge.contact.getChildIndexB();
          if (fA == fixtureA && fB == fixtureB && iA == indexA && iB == indexB) {
            return;
          }
          if (fA == fixtureB && fB == fixtureA && iA == indexB && iB == indexA) {
            return;
          }
        }
        edge = edge.next;
      }
      if (bodyB.shouldCollide(bodyA) == false) {
        return;
      }
      if (fixtureB.shouldCollide(fixtureA) == false) {
        return;
      }
      var contact = Contact.create(fixtureA, indexA, fixtureB, indexB);
      if (contact == null) {
        return;
      }
      contact.m_prev = null;
      if (this.m_contactList != null) {
        contact.m_next = this.m_contactList;
        this.m_contactList.m_prev = contact;
      }
      this.m_contactList = contact;
      ++this.m_contactCount;
    };
    World2.prototype.updateContacts = function() {
      var c2;
      var next_c = this.m_contactList;
      while (c2 = next_c) {
        next_c = c2.getNext();
        var fixtureA = c2.getFixtureA();
        var fixtureB = c2.getFixtureB();
        var indexA = c2.getChildIndexA();
        var indexB = c2.getChildIndexB();
        var bodyA = fixtureA.getBody();
        var bodyB = fixtureB.getBody();
        if (c2.m_filterFlag) {
          if (bodyB.shouldCollide(bodyA) == false) {
            this.destroyContact(c2);
            continue;
          }
          if (fixtureB.shouldCollide(fixtureA) == false) {
            this.destroyContact(c2);
            continue;
          }
          c2.m_filterFlag = false;
        }
        var activeA = bodyA.isAwake() && !bodyA.isStatic();
        var activeB = bodyB.isAwake() && !bodyB.isStatic();
        if (activeA == false && activeB == false) {
          continue;
        }
        var proxyIdA = fixtureA.m_proxies[indexA].proxyId;
        var proxyIdB = fixtureB.m_proxies[indexB].proxyId;
        var overlap = this.m_broadPhase.testOverlap(proxyIdA, proxyIdB);
        if (overlap == false) {
          this.destroyContact(c2);
          continue;
        }
        c2.update(this);
      }
    };
    World2.prototype.destroyContact = function(contact) {
      if (contact.m_prev) {
        contact.m_prev.m_next = contact.m_next;
      }
      if (contact.m_next) {
        contact.m_next.m_prev = contact.m_prev;
      }
      if (contact == this.m_contactList) {
        this.m_contactList = contact.m_next;
      }
      Contact.destroy(contact, this);
      --this.m_contactCount;
    };
    World2.prototype.on = function(name, listener) {
      if (typeof name !== "string" || typeof listener !== "function") {
        return this;
      }
      if (!this._listeners) {
        this._listeners = {};
      }
      if (!this._listeners[name]) {
        this._listeners[name] = [];
      }
      this._listeners[name].push(listener);
      return this;
    };
    World2.prototype.off = function(name, listener) {
      if (typeof name !== "string" || typeof listener !== "function") {
        return this;
      }
      var listeners = this._listeners && this._listeners[name];
      if (!listeners || !listeners.length) {
        return this;
      }
      var index = listeners.indexOf(listener);
      if (index >= 0) {
        listeners.splice(index, 1);
      }
      return this;
    };
    World2.prototype.publish = function(name, arg1, arg2, arg3) {
      var listeners = this._listeners && this._listeners[name];
      if (!listeners || !listeners.length) {
        return 0;
      }
      for (var l = 0; l < listeners.length; l++) {
        listeners[l].call(this, arg1, arg2, arg3);
      }
      return listeners.length;
    };
    World2.prototype.beginContact = function(contact) {
      this.publish("begin-contact", contact);
    };
    World2.prototype.endContact = function(contact) {
      this.publish("end-contact", contact);
    };
    World2.prototype.preSolve = function(contact, oldManifold2) {
      this.publish("pre-solve", contact, oldManifold2);
    };
    World2.prototype.postSolve = function(contact, impulse) {
      this.publish("post-solve", contact, impulse);
    };
    return World2;
  }();
  var Vec3 = function() {
    function Vec32(x3, y, z2) {
      if (!(this instanceof Vec32)) {
        return new Vec32(x3, y, z2);
      }
      if (typeof x3 === "undefined") {
        this.x = 0;
        this.y = 0;
        this.z = 0;
      } else if (typeof x3 === "object") {
        this.x = x3.x;
        this.y = x3.y;
        this.z = x3.z;
      } else {
        this.x = x3;
        this.y = y;
        this.z = z2;
      }
    }
    __name(Vec32, "Vec3");
    Vec32.prototype._serialize = function() {
      return {
        x: this.x,
        y: this.y,
        z: this.z
      };
    };
    Vec32._deserialize = function(data) {
      var obj = Object.create(Vec32.prototype);
      obj.x = data.x;
      obj.y = data.y;
      obj.z = data.z;
      return obj;
    };
    Vec32.neo = function(x3, y, z2) {
      var obj = Object.create(Vec32.prototype);
      obj.x = x3;
      obj.y = y;
      obj.z = z2;
      return obj;
    };
    Vec32.zero = function() {
      var obj = Object.create(Vec32.prototype);
      obj.x = 0;
      obj.y = 0;
      obj.z = 0;
      return obj;
    };
    Vec32.clone = function(v3) {
      return Vec32.neo(v3.x, v3.y, v3.z);
    };
    Vec32.prototype.toString = function() {
      return JSON.stringify(this);
    };
    Vec32.isValid = function(obj) {
      if (obj === null || typeof obj === "undefined") {
        return false;
      }
      return Number.isFinite(obj.x) && Number.isFinite(obj.y) && Number.isFinite(obj.z);
    };
    Vec32.assert = function(o2) {
    };
    Vec32.prototype.setZero = function() {
      this.x = 0;
      this.y = 0;
      this.z = 0;
      return this;
    };
    Vec32.prototype.set = function(x3, y, z2) {
      this.x = x3;
      this.y = y;
      this.z = z2;
      return this;
    };
    Vec32.prototype.add = function(w) {
      this.x += w.x;
      this.y += w.y;
      this.z += w.z;
      return this;
    };
    Vec32.prototype.sub = function(w) {
      this.x -= w.x;
      this.y -= w.y;
      this.z -= w.z;
      return this;
    };
    Vec32.prototype.mul = function(m) {
      this.x *= m;
      this.y *= m;
      this.z *= m;
      return this;
    };
    Vec32.areEqual = function(v3, w) {
      return v3 === w || typeof v3 === "object" && v3 !== null && typeof w === "object" && w !== null && v3.x === w.x && v3.y === w.y && v3.z === w.z;
    };
    Vec32.dot = function(v3, w) {
      return v3.x * w.x + v3.y * w.y + v3.z * w.z;
    };
    Vec32.cross = function(v3, w) {
      return new Vec32(v3.y * w.z - v3.z * w.y, v3.z * w.x - v3.x * w.z, v3.x * w.y - v3.y * w.x);
    };
    Vec32.add = function(v3, w) {
      return new Vec32(v3.x + w.x, v3.y + w.y, v3.z + w.z);
    };
    Vec32.sub = function(v3, w) {
      return new Vec32(v3.x - w.x, v3.y - w.y, v3.z - w.z);
    };
    Vec32.mul = function(v3, m) {
      return new Vec32(m * v3.x, m * v3.y, m * v3.z);
    };
    Vec32.prototype.neg = function() {
      this.x = -this.x;
      this.y = -this.y;
      this.z = -this.z;
      return this;
    };
    Vec32.neg = function(v3) {
      return new Vec32(-v3.x, -v3.y, -v3.z);
    };
    return Vec32;
  }();
  var v1$2 = vec22(0, 0);
  var v2$1 = vec22(0, 0);
  var EdgeShape = function(_super) {
    __extends(EdgeShape2, _super);
    function EdgeShape2(v13, v22) {
      var _this = this;
      if (!(_this instanceof EdgeShape2)) {
        return new EdgeShape2(v13, v22);
      }
      _this = _super.call(this) || this;
      _this.m_type = EdgeShape2.TYPE;
      _this.m_radius = SettingsInternal.polygonRadius;
      _this.m_vertex1 = v13 ? Vec2.clone(v13) : Vec2.zero();
      _this.m_vertex2 = v22 ? Vec2.clone(v22) : Vec2.zero();
      _this.m_vertex0 = Vec2.zero();
      _this.m_vertex3 = Vec2.zero();
      _this.m_hasVertex0 = false;
      _this.m_hasVertex3 = false;
      return _this;
    }
    __name(EdgeShape2, "EdgeShape");
    EdgeShape2.prototype._serialize = function() {
      return {
        type: this.m_type,
        vertex1: this.m_vertex1,
        vertex2: this.m_vertex2,
        vertex0: this.m_vertex0,
        vertex3: this.m_vertex3,
        hasVertex0: this.m_hasVertex0,
        hasVertex3: this.m_hasVertex3
      };
    };
    EdgeShape2._deserialize = function(data) {
      var shape = new EdgeShape2(data.vertex1, data.vertex2);
      if (shape.m_hasVertex0) {
        shape.setPrevVertex(data.vertex0);
      }
      if (shape.m_hasVertex3) {
        shape.setNextVertex(data.vertex3);
      }
      return shape;
    };
    EdgeShape2.prototype._reset = function() {
    };
    EdgeShape2.prototype.getRadius = function() {
      return this.m_radius;
    };
    EdgeShape2.prototype.getType = function() {
      return this.m_type;
    };
    EdgeShape2.prototype.setNext = function(v3) {
      return this.setNextVertex(v3);
    };
    EdgeShape2.prototype.setNextVertex = function(v3) {
      if (v3) {
        this.m_vertex3.setVec2(v3);
        this.m_hasVertex3 = true;
      } else {
        this.m_vertex3.setZero();
        this.m_hasVertex3 = false;
      }
      return this;
    };
    EdgeShape2.prototype.getNextVertex = function() {
      return this.m_vertex3;
    };
    EdgeShape2.prototype.setPrev = function(v3) {
      return this.setPrevVertex(v3);
    };
    EdgeShape2.prototype.setPrevVertex = function(v3) {
      if (v3) {
        this.m_vertex0.setVec2(v3);
        this.m_hasVertex0 = true;
      } else {
        this.m_vertex0.setZero();
        this.m_hasVertex0 = false;
      }
      return this;
    };
    EdgeShape2.prototype.getPrevVertex = function() {
      return this.m_vertex0;
    };
    EdgeShape2.prototype._set = function(v13, v22) {
      this.m_vertex1.setVec2(v13);
      this.m_vertex2.setVec2(v22);
      this.m_hasVertex0 = false;
      this.m_hasVertex3 = false;
      return this;
    };
    EdgeShape2.prototype._clone = function() {
      var clone = new EdgeShape2();
      clone.m_type = this.m_type;
      clone.m_radius = this.m_radius;
      clone.m_vertex1.setVec2(this.m_vertex1);
      clone.m_vertex2.setVec2(this.m_vertex2);
      clone.m_vertex0.setVec2(this.m_vertex0);
      clone.m_vertex3.setVec2(this.m_vertex3);
      clone.m_hasVertex0 = this.m_hasVertex0;
      clone.m_hasVertex3 = this.m_hasVertex3;
      return clone;
    };
    EdgeShape2.prototype.getChildCount = function() {
      return 1;
    };
    EdgeShape2.prototype.testPoint = function(xf2, p) {
      return false;
    };
    EdgeShape2.prototype.rayCast = function(output2, input2, xf2, childIndex) {
      var p1 = Rot.mulTVec2(xf2.q, Vec2.sub(input2.p1, xf2.p));
      var p2 = Rot.mulTVec2(xf2.q, Vec2.sub(input2.p2, xf2.p));
      var d2 = Vec2.sub(p2, p1);
      var v13 = this.m_vertex1;
      var v22 = this.m_vertex2;
      var e3 = Vec2.sub(v22, v13);
      var normal3 = Vec2.neo(e3.y, -e3.x);
      normal3.normalize();
      var numerator = Vec2.dot(normal3, Vec2.sub(v13, p1));
      var denominator = Vec2.dot(normal3, d2);
      if (denominator == 0) {
        return false;
      }
      var t = numerator / denominator;
      if (t < 0 || input2.maxFraction < t) {
        return false;
      }
      var q = Vec2.add(p1, Vec2.mulNumVec2(t, d2));
      var r = Vec2.sub(v22, v13);
      var rr = Vec2.dot(r, r);
      if (rr == 0) {
        return false;
      }
      var s2 = Vec2.dot(Vec2.sub(q, v13), r) / rr;
      if (s2 < 0 || 1 < s2) {
        return false;
      }
      output2.fraction = t;
      if (numerator > 0) {
        output2.normal = Rot.mulVec2(xf2.q, normal3).neg();
      } else {
        output2.normal = Rot.mulVec2(xf2.q, normal3);
      }
      return true;
    };
    EdgeShape2.prototype.computeAABB = function(aabb, xf2, childIndex) {
      transformVec2(v1$2, xf2, this.m_vertex1);
      transformVec2(v2$1, xf2, this.m_vertex2);
      AABB.combinePoints(aabb, v1$2, v2$1);
      AABB.extend(aabb, this.m_radius);
    };
    EdgeShape2.prototype.computeMass = function(massData, density) {
      massData.mass = 0;
      combineVec2(massData.center, 0.5, this.m_vertex1, 0.5, this.m_vertex2);
      massData.I = 0;
    };
    EdgeShape2.prototype.computeDistanceProxy = function(proxy) {
      proxy.m_vertices[0] = this.m_vertex1;
      proxy.m_vertices[1] = this.m_vertex2;
      proxy.m_vertices.length = 2;
      proxy.m_count = 2;
      proxy.m_radius = this.m_radius;
    };
    EdgeShape2.TYPE = "edge";
    return EdgeShape2;
  }(Shape);
  var v1$1 = vec22(0, 0);
  var v2 = vec22(0, 0);
  var ChainShape = function(_super) {
    __extends(ChainShape2, _super);
    function ChainShape2(vertices, loop2) {
      var _this = this;
      if (!(_this instanceof ChainShape2)) {
        return new ChainShape2(vertices, loop2);
      }
      _this = _super.call(this) || this;
      _this.m_type = ChainShape2.TYPE;
      _this.m_radius = SettingsInternal.polygonRadius;
      _this.m_vertices = [];
      _this.m_count = 0;
      _this.m_prevVertex = null;
      _this.m_nextVertex = null;
      _this.m_hasPrevVertex = false;
      _this.m_hasNextVertex = false;
      _this.m_isLoop = !!loop2;
      if (vertices && vertices.length) {
        if (loop2) {
          _this._createLoop(vertices);
        } else {
          _this._createChain(vertices);
        }
      }
      return _this;
    }
    __name(ChainShape2, "ChainShape");
    ChainShape2.prototype._serialize = function() {
      var data = {
        type: this.m_type,
        vertices: this.m_vertices,
        isLoop: this.m_isLoop,
        hasPrevVertex: this.m_hasPrevVertex,
        hasNextVertex: this.m_hasNextVertex,
        prevVertex: null,
        nextVertex: null
      };
      if (this.m_prevVertex) {
        data.prevVertex = this.m_prevVertex;
      }
      if (this.m_nextVertex) {
        data.nextVertex = this.m_nextVertex;
      }
      return data;
    };
    ChainShape2._deserialize = function(data, fixture, restore) {
      var vertices = [];
      if (data.vertices) {
        for (var i = 0; i < data.vertices.length; i++) {
          vertices.push(restore(Vec2, data.vertices[i]));
        }
      }
      var shape = new ChainShape2(vertices, data.isLoop);
      if (data.prevVertex) {
        shape.setPrevVertex(data.prevVertex);
      }
      if (data.nextVertex) {
        shape.setNextVertex(data.nextVertex);
      }
      return shape;
    };
    ChainShape2.prototype.getType = function() {
      return this.m_type;
    };
    ChainShape2.prototype.getRadius = function() {
      return this.m_radius;
    };
    ChainShape2.prototype._createLoop = function(vertices) {
      if (vertices.length < 3) {
        return;
      }
      for (var i = 1; i < vertices.length; ++i) {
        vertices[i - 1];
        vertices[i];
      }
      this.m_vertices = [];
      this.m_count = vertices.length + 1;
      for (var i = 0; i < vertices.length; ++i) {
        this.m_vertices[i] = Vec2.clone(vertices[i]);
      }
      this.m_vertices[vertices.length] = Vec2.clone(vertices[0]);
      this.m_prevVertex = this.m_vertices[this.m_count - 2];
      this.m_nextVertex = this.m_vertices[1];
      this.m_hasPrevVertex = true;
      this.m_hasNextVertex = true;
      return this;
    };
    ChainShape2.prototype._createChain = function(vertices) {
      for (var i = 1; i < vertices.length; ++i) {
        vertices[i - 1];
        vertices[i];
      }
      this.m_count = vertices.length;
      for (var i = 0; i < vertices.length; ++i) {
        this.m_vertices[i] = Vec2.clone(vertices[i]);
      }
      this.m_hasPrevVertex = false;
      this.m_hasNextVertex = false;
      this.m_prevVertex = null;
      this.m_nextVertex = null;
      return this;
    };
    ChainShape2.prototype._reset = function() {
      if (this.m_isLoop) {
        this._createLoop(this.m_vertices);
      } else {
        this._createChain(this.m_vertices);
      }
    };
    ChainShape2.prototype.setPrevVertex = function(prevVertex) {
      this.m_prevVertex = prevVertex;
      this.m_hasPrevVertex = true;
    };
    ChainShape2.prototype.getPrevVertex = function() {
      return this.m_prevVertex;
    };
    ChainShape2.prototype.setNextVertex = function(nextVertex) {
      this.m_nextVertex = nextVertex;
      this.m_hasNextVertex = true;
    };
    ChainShape2.prototype.getNextVertex = function() {
      return this.m_nextVertex;
    };
    ChainShape2.prototype._clone = function() {
      var clone = new ChainShape2();
      clone._createChain(this.m_vertices);
      clone.m_type = this.m_type;
      clone.m_radius = this.m_radius;
      clone.m_prevVertex = this.m_prevVertex;
      clone.m_nextVertex = this.m_nextVertex;
      clone.m_hasPrevVertex = this.m_hasPrevVertex;
      clone.m_hasNextVertex = this.m_hasNextVertex;
      return clone;
    };
    ChainShape2.prototype.getChildCount = function() {
      return this.m_count - 1;
    };
    ChainShape2.prototype.getChildEdge = function(edge, childIndex) {
      edge.m_type = EdgeShape.TYPE;
      edge.m_radius = this.m_radius;
      edge.m_vertex1 = this.m_vertices[childIndex];
      edge.m_vertex2 = this.m_vertices[childIndex + 1];
      if (childIndex > 0) {
        edge.m_vertex0 = this.m_vertices[childIndex - 1];
        edge.m_hasVertex0 = true;
      } else {
        edge.m_vertex0 = this.m_prevVertex;
        edge.m_hasVertex0 = this.m_hasPrevVertex;
      }
      if (childIndex < this.m_count - 2) {
        edge.m_vertex3 = this.m_vertices[childIndex + 2];
        edge.m_hasVertex3 = true;
      } else {
        edge.m_vertex3 = this.m_nextVertex;
        edge.m_hasVertex3 = this.m_hasNextVertex;
      }
    };
    ChainShape2.prototype.getVertex = function(index) {
      if (index < this.m_count) {
        return this.m_vertices[index];
      } else {
        return this.m_vertices[0];
      }
    };
    ChainShape2.prototype.isLoop = function() {
      return this.m_isLoop;
    };
    ChainShape2.prototype.testPoint = function(xf2, p) {
      return false;
    };
    ChainShape2.prototype.rayCast = function(output2, input2, xf2, childIndex) {
      var edgeShape = new EdgeShape(this.getVertex(childIndex), this.getVertex(childIndex + 1));
      return edgeShape.rayCast(output2, input2, xf2, 0);
    };
    ChainShape2.prototype.computeAABB = function(aabb, xf2, childIndex) {
      transformVec2(v1$1, xf2, this.getVertex(childIndex));
      transformVec2(v2, xf2, this.getVertex(childIndex + 1));
      AABB.combinePoints(aabb, v1$1, v2);
    };
    ChainShape2.prototype.computeMass = function(massData, density) {
      massData.mass = 0;
      zeroVec2(massData.center);
      massData.I = 0;
    };
    ChainShape2.prototype.computeDistanceProxy = function(proxy, childIndex) {
      proxy.m_vertices[0] = this.getVertex(childIndex);
      proxy.m_vertices[1] = this.getVertex(childIndex + 1);
      proxy.m_count = 2;
      proxy.m_radius = this.m_radius;
    };
    ChainShape2.TYPE = "chain";
    return ChainShape2;
  }(Shape);
  var math_max$1 = Math.max;
  var math_min$3 = Math.min;
  var temp$1 = vec22(0, 0);
  var e$1 = vec22(0, 0);
  var e1$1 = vec22(0, 0);
  var e2$1 = vec22(0, 0);
  var center = vec22(0, 0);
  var s = vec22(0, 0);
  var PolygonShape = function(_super) {
    __extends(PolygonShape2, _super);
    function PolygonShape2(vertices) {
      var _this = this;
      if (!(_this instanceof PolygonShape2)) {
        return new PolygonShape2(vertices);
      }
      _this = _super.call(this) || this;
      _this.m_type = PolygonShape2.TYPE;
      _this.m_radius = SettingsInternal.polygonRadius;
      _this.m_centroid = Vec2.zero();
      _this.m_vertices = [];
      _this.m_normals = [];
      _this.m_count = 0;
      if (vertices && vertices.length) {
        _this._set(vertices);
      }
      return _this;
    }
    __name(PolygonShape2, "PolygonShape");
    PolygonShape2.prototype._serialize = function() {
      return {
        type: this.m_type,
        vertices: this.m_vertices
      };
    };
    PolygonShape2._deserialize = function(data, fixture, restore) {
      var vertices = [];
      if (data.vertices) {
        for (var i = 0; i < data.vertices.length; i++) {
          vertices.push(restore(Vec2, data.vertices[i]));
        }
      }
      var shape = new PolygonShape2(vertices);
      return shape;
    };
    PolygonShape2.prototype.getType = function() {
      return this.m_type;
    };
    PolygonShape2.prototype.getRadius = function() {
      return this.m_radius;
    };
    PolygonShape2.prototype._clone = function() {
      var clone = new PolygonShape2();
      clone.m_type = this.m_type;
      clone.m_radius = this.m_radius;
      clone.m_count = this.m_count;
      clone.m_centroid.setVec2(this.m_centroid);
      for (var i = 0; i < this.m_count; i++) {
        clone.m_vertices.push(this.m_vertices[i].clone());
      }
      for (var i = 0; i < this.m_normals.length; i++) {
        clone.m_normals.push(this.m_normals[i].clone());
      }
      return clone;
    };
    PolygonShape2.prototype.getChildCount = function() {
      return 1;
    };
    PolygonShape2.prototype._reset = function() {
      this._set(this.m_vertices);
    };
    PolygonShape2.prototype._set = function(vertices) {
      if (vertices.length < 3) {
        this._setAsBox(1, 1);
        return;
      }
      var n2 = math_min$3(vertices.length, SettingsInternal.maxPolygonVertices);
      var ps2 = [];
      for (var i = 0; i < n2; ++i) {
        var v3 = vertices[i];
        var unique = true;
        for (var j = 0; j < ps2.length; ++j) {
          if (Vec2.distanceSquared(v3, ps2[j]) < 0.25 * SettingsInternal.linearSlopSquared) {
            unique = false;
            break;
          }
        }
        if (unique) {
          ps2.push(Vec2.clone(v3));
        }
      }
      n2 = ps2.length;
      if (n2 < 3) {
        this._setAsBox(1, 1);
        return;
      }
      var i0 = 0;
      var x0 = ps2[0].x;
      for (var i = 1; i < n2; ++i) {
        var x3 = ps2[i].x;
        if (x3 > x0 || x3 === x0 && ps2[i].y < ps2[i0].y) {
          i0 = i;
          x0 = x3;
        }
      }
      var hull = [];
      var m = 0;
      var ih = i0;
      while (true) {
        hull[m] = ih;
        var ie3 = 0;
        for (var j = 1; j < n2; ++j) {
          if (ie3 === ih) {
            ie3 = j;
            continue;
          }
          var r = Vec2.sub(ps2[ie3], ps2[hull[m]]);
          var v3 = Vec2.sub(ps2[j], ps2[hull[m]]);
          var c2 = Vec2.crossVec2Vec2(r, v3);
          if (c2 < 0) {
            ie3 = j;
          }
          if (c2 === 0 && v3.lengthSquared() > r.lengthSquared()) {
            ie3 = j;
          }
        }
        ++m;
        ih = ie3;
        if (ie3 === i0) {
          break;
        }
      }
      if (m < 3) {
        this._setAsBox(1, 1);
        return;
      }
      this.m_count = m;
      this.m_vertices = [];
      for (var i = 0; i < m; ++i) {
        this.m_vertices[i] = ps2[hull[i]];
      }
      for (var i = 0; i < m; ++i) {
        var i1 = i;
        var i2 = i + 1 < m ? i + 1 : 0;
        var edge = Vec2.sub(this.m_vertices[i2], this.m_vertices[i1]);
        this.m_normals[i] = Vec2.crossVec2Num(edge, 1);
        this.m_normals[i].normalize();
      }
      this.m_centroid = computeCentroid(this.m_vertices, m);
    };
    PolygonShape2.prototype._setAsBox = function(hx, hy, center2, angle) {
      this.m_vertices[0] = Vec2.neo(hx, -hy);
      this.m_vertices[1] = Vec2.neo(hx, hy);
      this.m_vertices[2] = Vec2.neo(-hx, hy);
      this.m_vertices[3] = Vec2.neo(-hx, -hy);
      this.m_normals[0] = Vec2.neo(1, 0);
      this.m_normals[1] = Vec2.neo(0, 1);
      this.m_normals[2] = Vec2.neo(-1, 0);
      this.m_normals[3] = Vec2.neo(0, -1);
      this.m_count = 4;
      if (center2 && Vec2.isValid(center2)) {
        angle = angle || 0;
        copyVec2(this.m_centroid, center2);
        var xf2 = Transform.identity();
        xf2.p.setVec2(center2);
        xf2.q.setAngle(angle);
        for (var i = 0; i < this.m_count; ++i) {
          this.m_vertices[i] = Transform.mulVec2(xf2, this.m_vertices[i]);
          this.m_normals[i] = Rot.mulVec2(xf2.q, this.m_normals[i]);
        }
      }
    };
    PolygonShape2.prototype.testPoint = function(xf2, p) {
      var pLocal = invTransformVec2(temp$1, xf2, p);
      for (var i = 0; i < this.m_count; ++i) {
        var dot = dotVec2(this.m_normals[i], pLocal) - dotVec2(this.m_normals[i], this.m_vertices[i]);
        if (dot > 0) {
          return false;
        }
      }
      return true;
    };
    PolygonShape2.prototype.rayCast = function(output2, input2, xf2, childIndex) {
      var p1 = Rot.mulTVec2(xf2.q, Vec2.sub(input2.p1, xf2.p));
      var p2 = Rot.mulTVec2(xf2.q, Vec2.sub(input2.p2, xf2.p));
      var d2 = Vec2.sub(p2, p1);
      var lower = 0;
      var upper = input2.maxFraction;
      var index = -1;
      for (var i = 0; i < this.m_count; ++i) {
        var numerator = Vec2.dot(this.m_normals[i], Vec2.sub(this.m_vertices[i], p1));
        var denominator = Vec2.dot(this.m_normals[i], d2);
        if (denominator == 0) {
          if (numerator < 0) {
            return false;
          }
        } else {
          if (denominator < 0 && numerator < lower * denominator) {
            lower = numerator / denominator;
            index = i;
          } else if (denominator > 0 && numerator < upper * denominator) {
            upper = numerator / denominator;
          }
        }
        if (upper < lower) {
          return false;
        }
      }
      if (index >= 0) {
        output2.fraction = lower;
        output2.normal = Rot.mulVec2(xf2.q, this.m_normals[index]);
        return true;
      }
      return false;
    };
    PolygonShape2.prototype.computeAABB = function(aabb, xf2, childIndex) {
      var minX = Infinity;
      var minY = Infinity;
      var maxX = -Infinity;
      var maxY = -Infinity;
      for (var i = 0; i < this.m_count; ++i) {
        var v3 = transformVec2(temp$1, xf2, this.m_vertices[i]);
        minX = math_min$3(minX, v3.x);
        maxX = math_max$1(maxX, v3.x);
        minY = math_min$3(minY, v3.y);
        maxY = math_max$1(maxY, v3.y);
      }
      setVec2(aabb.lowerBound, minX - this.m_radius, minY - this.m_radius);
      setVec2(aabb.upperBound, maxX + this.m_radius, maxY + this.m_radius);
    };
    PolygonShape2.prototype.computeMass = function(massData, density) {
      zeroVec2(center);
      var area = 0;
      var I = 0;
      zeroVec2(s);
      for (var i = 0; i < this.m_count; ++i) {
        addVec2(s, this.m_vertices[i]);
      }
      setMulVec2(s, 1 / this.m_count, s);
      var k_inv3 = 1 / 3;
      for (var i = 0; i < this.m_count; ++i) {
        diffVec2(e1$1, this.m_vertices[i], s);
        if (i + 1 < this.m_count) {
          diffVec2(e2$1, this.m_vertices[i + 1], s);
        } else {
          diffVec2(e2$1, this.m_vertices[0], s);
        }
        var D = crossVec2Vec2(e1$1, e2$1);
        var triangleArea = 0.5 * D;
        area += triangleArea;
        combineVec2(center, 1, center, triangleArea * k_inv3, e1$1);
        combineVec2(center, 1, center, triangleArea * k_inv3, e2$1);
        var ex1 = e1$1.x;
        var ey1 = e1$1.y;
        var ex2 = e2$1.x;
        var ey2 = e2$1.y;
        var intx2 = ex1 * ex1 + ex2 * ex1 + ex2 * ex2;
        var inty2 = ey1 * ey1 + ey2 * ey1 + ey2 * ey2;
        I += 0.25 * k_inv3 * D * (intx2 + inty2);
      }
      massData.mass = density * area;
      setMulVec2(center, 1 / area, center);
      sumVec2(massData.center, center, s);
      massData.I = density * I;
      massData.I += massData.mass * (dotVec2(massData.center, massData.center) - dotVec2(center, center));
    };
    PolygonShape2.prototype.validate = function() {
      for (var i = 0; i < this.m_count; ++i) {
        var i1 = i;
        var i2 = i < this.m_count - 1 ? i1 + 1 : 0;
        var p = this.m_vertices[i1];
        diffVec2(e$1, this.m_vertices[i2], p);
        for (var j = 0; j < this.m_count; ++j) {
          if (j == i1 || j == i2) {
            continue;
          }
          var c2 = crossVec2Vec2(e$1, diffVec2(temp$1, this.m_vertices[j], p));
          if (c2 < 0) {
            return false;
          }
        }
      }
      return true;
    };
    PolygonShape2.prototype.computeDistanceProxy = function(proxy) {
      for (var i = 0; i < this.m_count; ++i) {
        proxy.m_vertices[i] = this.m_vertices[i];
      }
      proxy.m_vertices.length = this.m_count;
      proxy.m_count = this.m_count;
      proxy.m_radius = this.m_radius;
    };
    PolygonShape2.TYPE = "polygon";
    return PolygonShape2;
  }(Shape);
  function computeCentroid(vs2, count) {
    var c2 = Vec2.zero();
    var area = 0;
    var pRef = Vec2.zero();
    var i;
    var inv3 = 1 / 3;
    for (var i = 0; i < count; ++i) {
      var p1 = pRef;
      var p2 = vs2[i];
      var p3 = i + 1 < count ? vs2[i + 1] : vs2[0];
      var e1_1 = Vec2.sub(p2, p1);
      var e2_1 = Vec2.sub(p3, p1);
      var D = Vec2.crossVec2Vec2(e1_1, e2_1);
      var triangleArea = 0.5 * D;
      area += triangleArea;
      c2.addMul(triangleArea * inv3, p1);
      c2.addMul(triangleArea * inv3, p2);
      c2.addMul(triangleArea * inv3, p3);
    }
    c2.mul(1 / area);
    return c2;
  }
  __name(computeCentroid, "computeCentroid");
  var BoxShape = function(_super) {
    __extends(BoxShape2, _super);
    function BoxShape2(hx, hy, center2, angle) {
      var _this = this;
      if (!(_this instanceof BoxShape2)) {
        return new BoxShape2(hx, hy, center2, angle);
      }
      _this = _super.call(this) || this;
      _this._setAsBox(hx, hy, center2, angle);
      return _this;
    }
    __name(BoxShape2, "BoxShape");
    BoxShape2.TYPE = "polygon";
    return BoxShape2;
  }(PolygonShape);
  var Box = BoxShape;
  var math_sqrt = Math.sqrt;
  var math_PI$4 = Math.PI;
  var temp = vec22(0, 0);
  var CircleShape = function(_super) {
    __extends(CircleShape2, _super);
    function CircleShape2(a2, b2) {
      var _this = this;
      if (!(_this instanceof CircleShape2)) {
        return new CircleShape2(a2, b2);
      }
      _this = _super.call(this) || this;
      _this.m_type = CircleShape2.TYPE;
      _this.m_p = Vec2.zero();
      _this.m_radius = 1;
      if (typeof a2 === "object" && Vec2.isValid(a2)) {
        _this.m_p.setVec2(a2);
        if (typeof b2 === "number") {
          _this.m_radius = b2;
        }
      } else if (typeof a2 === "number") {
        _this.m_radius = a2;
      }
      return _this;
    }
    __name(CircleShape2, "CircleShape");
    CircleShape2.prototype._serialize = function() {
      return {
        type: this.m_type,
        p: this.m_p,
        radius: this.m_radius
      };
    };
    CircleShape2._deserialize = function(data) {
      return new CircleShape2(data.p, data.radius);
    };
    CircleShape2.prototype._reset = function() {
    };
    CircleShape2.prototype.getType = function() {
      return this.m_type;
    };
    CircleShape2.prototype.getRadius = function() {
      return this.m_radius;
    };
    CircleShape2.prototype.getCenter = function() {
      return this.m_p;
    };
    CircleShape2.prototype._clone = function() {
      var clone = new CircleShape2();
      clone.m_type = this.m_type;
      clone.m_radius = this.m_radius;
      clone.m_p = this.m_p.clone();
      return clone;
    };
    CircleShape2.prototype.getChildCount = function() {
      return 1;
    };
    CircleShape2.prototype.testPoint = function(xf2, p) {
      var center2 = transformVec2(temp, xf2, this.m_p);
      return distSqrVec2(p, center2) <= this.m_radius * this.m_radius;
    };
    CircleShape2.prototype.rayCast = function(output2, input2, xf2, childIndex) {
      var position = Vec2.add(xf2.p, Rot.mulVec2(xf2.q, this.m_p));
      var s2 = Vec2.sub(input2.p1, position);
      var b2 = Vec2.dot(s2, s2) - this.m_radius * this.m_radius;
      var r = Vec2.sub(input2.p2, input2.p1);
      var c2 = Vec2.dot(s2, r);
      var rr = Vec2.dot(r, r);
      var sigma = c2 * c2 - rr * b2;
      if (sigma < 0 || rr < EPSILON) {
        return false;
      }
      var a2 = -(c2 + math_sqrt(sigma));
      if (0 <= a2 && a2 <= input2.maxFraction * rr) {
        a2 /= rr;
        output2.fraction = a2;
        output2.normal = Vec2.add(s2, Vec2.mulNumVec2(a2, r));
        output2.normal.normalize();
        return true;
      }
      return false;
    };
    CircleShape2.prototype.computeAABB = function(aabb, xf2, childIndex) {
      var p = transformVec2(temp, xf2, this.m_p);
      setVec2(aabb.lowerBound, p.x - this.m_radius, p.y - this.m_radius);
      setVec2(aabb.upperBound, p.x + this.m_radius, p.y + this.m_radius);
    };
    CircleShape2.prototype.computeMass = function(massData, density) {
      massData.mass = density * math_PI$4 * this.m_radius * this.m_radius;
      copyVec2(massData.center, this.m_p);
      massData.I = massData.mass * (0.5 * this.m_radius * this.m_radius + lengthSqrVec2(this.m_p));
    };
    CircleShape2.prototype.computeDistanceProxy = function(proxy) {
      proxy.m_vertices[0] = this.m_p;
      proxy.m_vertices.length = 1;
      proxy.m_count = 1;
      proxy.m_radius = this.m_radius;
    };
    CircleShape2.TYPE = "circle";
    return CircleShape2;
  }(Shape);
  var math_abs$5 = Math.abs;
  var math_PI$3 = Math.PI;
  var DEFAULTS$a = {
    frequencyHz: 0,
    dampingRatio: 0
  };
  var DistanceJoint = function(_super) {
    __extends(DistanceJoint2, _super);
    function DistanceJoint2(def, bodyA, bodyB, anchorA, anchorB) {
      var _this = this;
      if (!(_this instanceof DistanceJoint2)) {
        return new DistanceJoint2(def, bodyA, bodyB, anchorA, anchorB);
      }
      if (bodyB && anchorA && "m_type" in anchorA && "x" in bodyB && "y" in bodyB) {
        var temp3 = bodyB;
        bodyB = anchorA;
        anchorA = temp3;
      }
      def = options(def, DEFAULTS$a);
      _this = _super.call(this, def, bodyA, bodyB) || this;
      bodyA = _this.m_bodyA;
      bodyB = _this.m_bodyB;
      _this.m_type = DistanceJoint2.TYPE;
      _this.m_localAnchorA = Vec2.clone(anchorA ? bodyA.getLocalPoint(anchorA) : def.localAnchorA || Vec2.zero());
      _this.m_localAnchorB = Vec2.clone(anchorB ? bodyB.getLocalPoint(anchorB) : def.localAnchorB || Vec2.zero());
      _this.m_length = Number.isFinite(def.length) ? def.length : Vec2.distance(bodyA.getWorldPoint(_this.m_localAnchorA), bodyB.getWorldPoint(_this.m_localAnchorB));
      _this.m_frequencyHz = def.frequencyHz;
      _this.m_dampingRatio = def.dampingRatio;
      _this.m_impulse = 0;
      _this.m_gamma = 0;
      _this.m_bias = 0;
      return _this;
    }
    __name(DistanceJoint2, "DistanceJoint");
    DistanceJoint2.prototype._serialize = function() {
      return {
        type: this.m_type,
        bodyA: this.m_bodyA,
        bodyB: this.m_bodyB,
        collideConnected: this.m_collideConnected,
        frequencyHz: this.m_frequencyHz,
        dampingRatio: this.m_dampingRatio,
        localAnchorA: this.m_localAnchorA,
        localAnchorB: this.m_localAnchorB,
        length: this.m_length,
        impulse: this.m_impulse,
        gamma: this.m_gamma,
        bias: this.m_bias
      };
    };
    DistanceJoint2._deserialize = function(data, world2, restore) {
      data = __assign({}, data);
      data.bodyA = restore(Body, data.bodyA, world2);
      data.bodyB = restore(Body, data.bodyB, world2);
      var joint = new DistanceJoint2(data);
      return joint;
    };
    DistanceJoint2.prototype._setAnchors = function(def) {
      if (def.anchorA) {
        this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(def.anchorA));
      } else if (def.localAnchorA) {
        this.m_localAnchorA.setVec2(def.localAnchorA);
      }
      if (def.anchorB) {
        this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(def.anchorB));
      } else if (def.localAnchorB) {
        this.m_localAnchorB.setVec2(def.localAnchorB);
      }
      if (def.length > 0) {
        this.m_length = +def.length;
      } else if (def.length < 0)
        ;
      else if (def.anchorA || def.anchorA || def.anchorA || def.anchorA) {
        this.m_length = Vec2.distance(this.m_bodyA.getWorldPoint(this.m_localAnchorA), this.m_bodyB.getWorldPoint(this.m_localAnchorB));
      }
    };
    DistanceJoint2.prototype.getLocalAnchorA = function() {
      return this.m_localAnchorA;
    };
    DistanceJoint2.prototype.getLocalAnchorB = function() {
      return this.m_localAnchorB;
    };
    DistanceJoint2.prototype.setLength = function(length) {
      this.m_length = length;
    };
    DistanceJoint2.prototype.getLength = function() {
      return this.m_length;
    };
    DistanceJoint2.prototype.setFrequency = function(hz) {
      this.m_frequencyHz = hz;
    };
    DistanceJoint2.prototype.getFrequency = function() {
      return this.m_frequencyHz;
    };
    DistanceJoint2.prototype.setDampingRatio = function(ratio) {
      this.m_dampingRatio = ratio;
    };
    DistanceJoint2.prototype.getDampingRatio = function() {
      return this.m_dampingRatio;
    };
    DistanceJoint2.prototype.getAnchorA = function() {
      return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
    };
    DistanceJoint2.prototype.getAnchorB = function() {
      return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
    };
    DistanceJoint2.prototype.getReactionForce = function(inv_dt) {
      return Vec2.mulNumVec2(this.m_impulse, this.m_u).mul(inv_dt);
    };
    DistanceJoint2.prototype.getReactionTorque = function(inv_dt) {
      return 0;
    };
    DistanceJoint2.prototype.initVelocityConstraints = function(step) {
      this.m_localCenterA = this.m_bodyA.m_sweep.localCenter;
      this.m_localCenterB = this.m_bodyB.m_sweep.localCenter;
      this.m_invMassA = this.m_bodyA.m_invMass;
      this.m_invMassB = this.m_bodyB.m_invMass;
      this.m_invIA = this.m_bodyA.m_invI;
      this.m_invIB = this.m_bodyB.m_invI;
      var cA2 = this.m_bodyA.c_position.c;
      var aA = this.m_bodyA.c_position.a;
      var vA2 = this.m_bodyA.c_velocity.v;
      var wA = this.m_bodyA.c_velocity.w;
      var cB2 = this.m_bodyB.c_position.c;
      var aB = this.m_bodyB.c_position.a;
      var vB2 = this.m_bodyB.c_velocity.v;
      var wB = this.m_bodyB.c_velocity.w;
      var qA = Rot.neo(aA);
      var qB = Rot.neo(aB);
      this.m_rA = Rot.mulVec2(qA, Vec2.sub(this.m_localAnchorA, this.m_localCenterA));
      this.m_rB = Rot.mulVec2(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));
      this.m_u = Vec2.sub(Vec2.add(cB2, this.m_rB), Vec2.add(cA2, this.m_rA));
      var length = this.m_u.length();
      if (length > SettingsInternal.linearSlop) {
        this.m_u.mul(1 / length);
      } else {
        this.m_u.setNum(0, 0);
      }
      var crAu = Vec2.crossVec2Vec2(this.m_rA, this.m_u);
      var crBu = Vec2.crossVec2Vec2(this.m_rB, this.m_u);
      var invMass = this.m_invMassA + this.m_invIA * crAu * crAu + this.m_invMassB + this.m_invIB * crBu * crBu;
      this.m_mass = invMass != 0 ? 1 / invMass : 0;
      if (this.m_frequencyHz > 0) {
        var C = length - this.m_length;
        var omega = 2 * math_PI$3 * this.m_frequencyHz;
        var d2 = 2 * this.m_mass * this.m_dampingRatio * omega;
        var k = this.m_mass * omega * omega;
        var h = step.dt;
        this.m_gamma = h * (d2 + h * k);
        this.m_gamma = this.m_gamma != 0 ? 1 / this.m_gamma : 0;
        this.m_bias = C * h * k * this.m_gamma;
        invMass += this.m_gamma;
        this.m_mass = invMass != 0 ? 1 / invMass : 0;
      } else {
        this.m_gamma = 0;
        this.m_bias = 0;
      }
      if (step.warmStarting) {
        this.m_impulse *= step.dtRatio;
        var P3 = Vec2.mulNumVec2(this.m_impulse, this.m_u);
        vA2.subMul(this.m_invMassA, P3);
        wA -= this.m_invIA * Vec2.crossVec2Vec2(this.m_rA, P3);
        vB2.addMul(this.m_invMassB, P3);
        wB += this.m_invIB * Vec2.crossVec2Vec2(this.m_rB, P3);
      } else {
        this.m_impulse = 0;
      }
      this.m_bodyA.c_velocity.v.setVec2(vA2);
      this.m_bodyA.c_velocity.w = wA;
      this.m_bodyB.c_velocity.v.setVec2(vB2);
      this.m_bodyB.c_velocity.w = wB;
    };
    DistanceJoint2.prototype.solveVelocityConstraints = function(step) {
      var vA2 = this.m_bodyA.c_velocity.v;
      var wA = this.m_bodyA.c_velocity.w;
      var vB2 = this.m_bodyB.c_velocity.v;
      var wB = this.m_bodyB.c_velocity.w;
      var vpA = Vec2.add(vA2, Vec2.crossNumVec2(wA, this.m_rA));
      var vpB = Vec2.add(vB2, Vec2.crossNumVec2(wB, this.m_rB));
      var Cdot = Vec2.dot(this.m_u, vpB) - Vec2.dot(this.m_u, vpA);
      var impulse = -this.m_mass * (Cdot + this.m_bias + this.m_gamma * this.m_impulse);
      this.m_impulse += impulse;
      var P3 = Vec2.mulNumVec2(impulse, this.m_u);
      vA2.subMul(this.m_invMassA, P3);
      wA -= this.m_invIA * Vec2.crossVec2Vec2(this.m_rA, P3);
      vB2.addMul(this.m_invMassB, P3);
      wB += this.m_invIB * Vec2.crossVec2Vec2(this.m_rB, P3);
      this.m_bodyA.c_velocity.v.setVec2(vA2);
      this.m_bodyA.c_velocity.w = wA;
      this.m_bodyB.c_velocity.v.setVec2(vB2);
      this.m_bodyB.c_velocity.w = wB;
    };
    DistanceJoint2.prototype.solvePositionConstraints = function(step) {
      if (this.m_frequencyHz > 0) {
        return true;
      }
      var cA2 = this.m_bodyA.c_position.c;
      var aA = this.m_bodyA.c_position.a;
      var cB2 = this.m_bodyB.c_position.c;
      var aB = this.m_bodyB.c_position.a;
      var qA = Rot.neo(aA);
      var qB = Rot.neo(aB);
      var rA2 = Rot.mulSub(qA, this.m_localAnchorA, this.m_localCenterA);
      var rB2 = Rot.mulSub(qB, this.m_localAnchorB, this.m_localCenterB);
      var u = Vec2.sub(Vec2.add(cB2, rB2), Vec2.add(cA2, rA2));
      var length = u.normalize();
      var C = clamp(length - this.m_length, -SettingsInternal.maxLinearCorrection, SettingsInternal.maxLinearCorrection);
      var impulse = -this.m_mass * C;
      var P3 = Vec2.mulNumVec2(impulse, u);
      cA2.subMul(this.m_invMassA, P3);
      aA -= this.m_invIA * Vec2.crossVec2Vec2(rA2, P3);
      cB2.addMul(this.m_invMassB, P3);
      aB += this.m_invIB * Vec2.crossVec2Vec2(rB2, P3);
      this.m_bodyA.c_position.c.setVec2(cA2);
      this.m_bodyA.c_position.a = aA;
      this.m_bodyB.c_position.c.setVec2(cB2);
      this.m_bodyB.c_position.a = aB;
      return math_abs$5(C) < SettingsInternal.linearSlop;
    };
    DistanceJoint2.TYPE = "distance-joint";
    return DistanceJoint2;
  }(Joint);
  var DEFAULTS$9 = {
    maxForce: 0,
    maxTorque: 0
  };
  var FrictionJoint = function(_super) {
    __extends(FrictionJoint2, _super);
    function FrictionJoint2(def, bodyA, bodyB, anchor2) {
      var _this = this;
      if (!(_this instanceof FrictionJoint2)) {
        return new FrictionJoint2(def, bodyA, bodyB, anchor2);
      }
      def = options(def, DEFAULTS$9);
      _this = _super.call(this, def, bodyA, bodyB) || this;
      bodyA = _this.m_bodyA;
      bodyB = _this.m_bodyB;
      _this.m_type = FrictionJoint2.TYPE;
      _this.m_localAnchorA = Vec2.clone(anchor2 ? bodyA.getLocalPoint(anchor2) : def.localAnchorA || Vec2.zero());
      _this.m_localAnchorB = Vec2.clone(anchor2 ? bodyB.getLocalPoint(anchor2) : def.localAnchorB || Vec2.zero());
      _this.m_linearImpulse = Vec2.zero();
      _this.m_angularImpulse = 0;
      _this.m_maxForce = def.maxForce;
      _this.m_maxTorque = def.maxTorque;
      return _this;
    }
    __name(FrictionJoint2, "FrictionJoint");
    FrictionJoint2.prototype._serialize = function() {
      return {
        type: this.m_type,
        bodyA: this.m_bodyA,
        bodyB: this.m_bodyB,
        collideConnected: this.m_collideConnected,
        maxForce: this.m_maxForce,
        maxTorque: this.m_maxTorque,
        localAnchorA: this.m_localAnchorA,
        localAnchorB: this.m_localAnchorB
      };
    };
    FrictionJoint2._deserialize = function(data, world2, restore) {
      data = __assign({}, data);
      data.bodyA = restore(Body, data.bodyA, world2);
      data.bodyB = restore(Body, data.bodyB, world2);
      var joint = new FrictionJoint2(data);
      return joint;
    };
    FrictionJoint2.prototype._setAnchors = function(def) {
      if (def.anchorA) {
        this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(def.anchorA));
      } else if (def.localAnchorA) {
        this.m_localAnchorA.setVec2(def.localAnchorA);
      }
      if (def.anchorB) {
        this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(def.anchorB));
      } else if (def.localAnchorB) {
        this.m_localAnchorB.setVec2(def.localAnchorB);
      }
    };
    FrictionJoint2.prototype.getLocalAnchorA = function() {
      return this.m_localAnchorA;
    };
    FrictionJoint2.prototype.getLocalAnchorB = function() {
      return this.m_localAnchorB;
    };
    FrictionJoint2.prototype.setMaxForce = function(force) {
      this.m_maxForce = force;
    };
    FrictionJoint2.prototype.getMaxForce = function() {
      return this.m_maxForce;
    };
    FrictionJoint2.prototype.setMaxTorque = function(torque) {
      this.m_maxTorque = torque;
    };
    FrictionJoint2.prototype.getMaxTorque = function() {
      return this.m_maxTorque;
    };
    FrictionJoint2.prototype.getAnchorA = function() {
      return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
    };
    FrictionJoint2.prototype.getAnchorB = function() {
      return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
    };
    FrictionJoint2.prototype.getReactionForce = function(inv_dt) {
      return Vec2.mulNumVec2(inv_dt, this.m_linearImpulse);
    };
    FrictionJoint2.prototype.getReactionTorque = function(inv_dt) {
      return inv_dt * this.m_angularImpulse;
    };
    FrictionJoint2.prototype.initVelocityConstraints = function(step) {
      this.m_localCenterA = this.m_bodyA.m_sweep.localCenter;
      this.m_localCenterB = this.m_bodyB.m_sweep.localCenter;
      this.m_invMassA = this.m_bodyA.m_invMass;
      this.m_invMassB = this.m_bodyB.m_invMass;
      this.m_invIA = this.m_bodyA.m_invI;
      this.m_invIB = this.m_bodyB.m_invI;
      var aA = this.m_bodyA.c_position.a;
      var vA2 = this.m_bodyA.c_velocity.v;
      var wA = this.m_bodyA.c_velocity.w;
      var aB = this.m_bodyB.c_position.a;
      var vB2 = this.m_bodyB.c_velocity.v;
      var wB = this.m_bodyB.c_velocity.w;
      var qA = Rot.neo(aA);
      var qB = Rot.neo(aB);
      this.m_rA = Rot.mulVec2(qA, Vec2.sub(this.m_localAnchorA, this.m_localCenterA));
      this.m_rB = Rot.mulVec2(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));
      var mA = this.m_invMassA;
      var mB = this.m_invMassB;
      var iA = this.m_invIA;
      var iB = this.m_invIB;
      var K = new Mat22();
      K.ex.x = mA + mB + iA * this.m_rA.y * this.m_rA.y + iB * this.m_rB.y * this.m_rB.y;
      K.ex.y = -iA * this.m_rA.x * this.m_rA.y - iB * this.m_rB.x * this.m_rB.y;
      K.ey.x = K.ex.y;
      K.ey.y = mA + mB + iA * this.m_rA.x * this.m_rA.x + iB * this.m_rB.x * this.m_rB.x;
      this.m_linearMass = K.getInverse();
      this.m_angularMass = iA + iB;
      if (this.m_angularMass > 0) {
        this.m_angularMass = 1 / this.m_angularMass;
      }
      if (step.warmStarting) {
        this.m_linearImpulse.mul(step.dtRatio);
        this.m_angularImpulse *= step.dtRatio;
        var P3 = Vec2.neo(this.m_linearImpulse.x, this.m_linearImpulse.y);
        vA2.subMul(mA, P3);
        wA -= iA * (Vec2.crossVec2Vec2(this.m_rA, P3) + this.m_angularImpulse);
        vB2.addMul(mB, P3);
        wB += iB * (Vec2.crossVec2Vec2(this.m_rB, P3) + this.m_angularImpulse);
      } else {
        this.m_linearImpulse.setZero();
        this.m_angularImpulse = 0;
      }
      this.m_bodyA.c_velocity.v = vA2;
      this.m_bodyA.c_velocity.w = wA;
      this.m_bodyB.c_velocity.v = vB2;
      this.m_bodyB.c_velocity.w = wB;
    };
    FrictionJoint2.prototype.solveVelocityConstraints = function(step) {
      var vA2 = this.m_bodyA.c_velocity.v;
      var wA = this.m_bodyA.c_velocity.w;
      var vB2 = this.m_bodyB.c_velocity.v;
      var wB = this.m_bodyB.c_velocity.w;
      var mA = this.m_invMassA;
      var mB = this.m_invMassB;
      var iA = this.m_invIA;
      var iB = this.m_invIB;
      var h = step.dt;
      {
        var Cdot = wB - wA;
        var impulse = -this.m_angularMass * Cdot;
        var oldImpulse = this.m_angularImpulse;
        var maxImpulse = h * this.m_maxTorque;
        this.m_angularImpulse = clamp(this.m_angularImpulse + impulse, -maxImpulse, maxImpulse);
        impulse = this.m_angularImpulse - oldImpulse;
        wA -= iA * impulse;
        wB += iB * impulse;
      }
      {
        var Cdot = Vec2.sub(Vec2.add(vB2, Vec2.crossNumVec2(wB, this.m_rB)), Vec2.add(vA2, Vec2.crossNumVec2(wA, this.m_rA)));
        var impulse = Vec2.neg(Mat22.mulVec2(this.m_linearMass, Cdot));
        var oldImpulse = this.m_linearImpulse;
        this.m_linearImpulse.add(impulse);
        var maxImpulse = h * this.m_maxForce;
        if (this.m_linearImpulse.lengthSquared() > maxImpulse * maxImpulse) {
          this.m_linearImpulse.normalize();
          this.m_linearImpulse.mul(maxImpulse);
        }
        impulse = Vec2.sub(this.m_linearImpulse, oldImpulse);
        vA2.subMul(mA, impulse);
        wA -= iA * Vec2.crossVec2Vec2(this.m_rA, impulse);
        vB2.addMul(mB, impulse);
        wB += iB * Vec2.crossVec2Vec2(this.m_rB, impulse);
      }
      this.m_bodyA.c_velocity.v = vA2;
      this.m_bodyA.c_velocity.w = wA;
      this.m_bodyB.c_velocity.v = vB2;
      this.m_bodyB.c_velocity.w = wB;
    };
    FrictionJoint2.prototype.solvePositionConstraints = function(step) {
      return true;
    };
    FrictionJoint2.TYPE = "friction-joint";
    return FrictionJoint2;
  }(Joint);
  var Mat33 = function() {
    function Mat332(a2, b2, c2) {
      if (typeof a2 === "object" && a2 !== null) {
        this.ex = Vec3.clone(a2);
        this.ey = Vec3.clone(b2);
        this.ez = Vec3.clone(c2);
      } else {
        this.ex = Vec3.zero();
        this.ey = Vec3.zero();
        this.ez = Vec3.zero();
      }
    }
    __name(Mat332, "Mat33");
    Mat332.prototype.toString = function() {
      return JSON.stringify(this);
    };
    Mat332.isValid = function(obj) {
      if (obj === null || typeof obj === "undefined") {
        return false;
      }
      return Vec3.isValid(obj.ex) && Vec3.isValid(obj.ey) && Vec3.isValid(obj.ez);
    };
    Mat332.assert = function(o2) {
    };
    Mat332.prototype.setZero = function() {
      this.ex.setZero();
      this.ey.setZero();
      this.ez.setZero();
      return this;
    };
    Mat332.prototype.solve33 = function(v3) {
      var cross_x = this.ey.y * this.ez.z - this.ey.z * this.ez.y;
      var cross_y = this.ey.z * this.ez.x - this.ey.x * this.ez.z;
      var cross_z = this.ey.x * this.ez.y - this.ey.y * this.ez.x;
      var det = this.ex.x * cross_x + this.ex.y * cross_y + this.ex.z * cross_z;
      if (det !== 0) {
        det = 1 / det;
      }
      var r = new Vec3();
      cross_x = this.ey.y * this.ez.z - this.ey.z * this.ez.y;
      cross_y = this.ey.z * this.ez.x - this.ey.x * this.ez.z;
      cross_z = this.ey.x * this.ez.y - this.ey.y * this.ez.x;
      r.x = det * (v3.x * cross_x + v3.y * cross_y + v3.z * cross_z);
      cross_x = v3.y * this.ez.z - v3.z * this.ez.y;
      cross_y = v3.z * this.ez.x - v3.x * this.ez.z;
      cross_z = v3.x * this.ez.y - v3.y * this.ez.x;
      r.y = det * (this.ex.x * cross_x + this.ex.y * cross_y + this.ex.z * cross_z);
      cross_x = this.ey.y * v3.z - this.ey.z * v3.y;
      cross_y = this.ey.z * v3.x - this.ey.x * v3.z;
      cross_z = this.ey.x * v3.y - this.ey.y * v3.x;
      r.z = det * (this.ex.x * cross_x + this.ex.y * cross_y + this.ex.z * cross_z);
      return r;
    };
    Mat332.prototype.solve22 = function(v3) {
      var a11 = this.ex.x;
      var a12 = this.ey.x;
      var a21 = this.ex.y;
      var a22 = this.ey.y;
      var det = a11 * a22 - a12 * a21;
      if (det !== 0) {
        det = 1 / det;
      }
      var r = Vec2.zero();
      r.x = det * (a22 * v3.x - a12 * v3.y);
      r.y = det * (a11 * v3.y - a21 * v3.x);
      return r;
    };
    Mat332.prototype.getInverse22 = function(M) {
      var a2 = this.ex.x;
      var b2 = this.ey.x;
      var c2 = this.ex.y;
      var d2 = this.ey.y;
      var det = a2 * d2 - b2 * c2;
      if (det !== 0) {
        det = 1 / det;
      }
      M.ex.x = det * d2;
      M.ey.x = -det * b2;
      M.ex.z = 0;
      M.ex.y = -det * c2;
      M.ey.y = det * a2;
      M.ey.z = 0;
      M.ez.x = 0;
      M.ez.y = 0;
      M.ez.z = 0;
    };
    Mat332.prototype.getSymInverse33 = function(M) {
      var det = Vec3.dot(this.ex, Vec3.cross(this.ey, this.ez));
      if (det !== 0) {
        det = 1 / det;
      }
      var a11 = this.ex.x;
      var a12 = this.ey.x;
      var a13 = this.ez.x;
      var a22 = this.ey.y;
      var a23 = this.ez.y;
      var a33 = this.ez.z;
      M.ex.x = det * (a22 * a33 - a23 * a23);
      M.ex.y = det * (a13 * a23 - a12 * a33);
      M.ex.z = det * (a12 * a23 - a13 * a22);
      M.ey.x = M.ex.y;
      M.ey.y = det * (a11 * a33 - a13 * a13);
      M.ey.z = det * (a13 * a12 - a11 * a23);
      M.ez.x = M.ex.z;
      M.ez.y = M.ey.z;
      M.ez.z = det * (a11 * a22 - a12 * a12);
    };
    Mat332.mul = function(a2, b2) {
      if (b2 && "z" in b2 && "y" in b2 && "x" in b2) {
        var x3 = a2.ex.x * b2.x + a2.ey.x * b2.y + a2.ez.x * b2.z;
        var y = a2.ex.y * b2.x + a2.ey.y * b2.y + a2.ez.y * b2.z;
        var z2 = a2.ex.z * b2.x + a2.ey.z * b2.y + a2.ez.z * b2.z;
        return new Vec3(x3, y, z2);
      } else if (b2 && "y" in b2 && "x" in b2) {
        var x3 = a2.ex.x * b2.x + a2.ey.x * b2.y;
        var y = a2.ex.y * b2.x + a2.ey.y * b2.y;
        return Vec2.neo(x3, y);
      }
    };
    Mat332.mulVec3 = function(a2, b2) {
      var x3 = a2.ex.x * b2.x + a2.ey.x * b2.y + a2.ez.x * b2.z;
      var y = a2.ex.y * b2.x + a2.ey.y * b2.y + a2.ez.y * b2.z;
      var z2 = a2.ex.z * b2.x + a2.ey.z * b2.y + a2.ez.z * b2.z;
      return new Vec3(x3, y, z2);
    };
    Mat332.mulVec2 = function(a2, b2) {
      var x3 = a2.ex.x * b2.x + a2.ey.x * b2.y;
      var y = a2.ex.y * b2.x + a2.ey.y * b2.y;
      return Vec2.neo(x3, y);
    };
    Mat332.add = function(a2, b2) {
      return new Mat332(Vec3.add(a2.ex, b2.ex), Vec3.add(a2.ey, b2.ey), Vec3.add(a2.ez, b2.ez));
    };
    return Mat332;
  }();
  var math_abs$4 = Math.abs;
  var LimitState$2;
  (function(LimitState2) {
    LimitState2[LimitState2["inactiveLimit"] = 0] = "inactiveLimit";
    LimitState2[LimitState2["atLowerLimit"] = 1] = "atLowerLimit";
    LimitState2[LimitState2["atUpperLimit"] = 2] = "atUpperLimit";
    LimitState2[LimitState2["equalLimits"] = 3] = "equalLimits";
  })(LimitState$2 || (LimitState$2 = {}));
  var DEFAULTS$8 = {
    lowerAngle: 0,
    upperAngle: 0,
    maxMotorTorque: 0,
    motorSpeed: 0,
    enableLimit: false,
    enableMotor: false
  };
  var RevoluteJoint = function(_super) {
    __extends(RevoluteJoint2, _super);
    function RevoluteJoint2(def, bodyA, bodyB, anchor2) {
      var _a20, _b, _c, _d, _e, _f;
      var _this = this;
      if (!(_this instanceof RevoluteJoint2)) {
        return new RevoluteJoint2(def, bodyA, bodyB, anchor2);
      }
      def = def !== null && def !== void 0 ? def : {};
      _this = _super.call(this, def, bodyA, bodyB) || this;
      bodyA = _this.m_bodyA;
      bodyB = _this.m_bodyB;
      _this.m_mass = new Mat33();
      _this.m_limitState = LimitState$2.inactiveLimit;
      _this.m_type = RevoluteJoint2.TYPE;
      if (Vec2.isValid(anchor2)) {
        _this.m_localAnchorA = bodyA.getLocalPoint(anchor2);
      } else if (Vec2.isValid(def.localAnchorA)) {
        _this.m_localAnchorA = Vec2.clone(def.localAnchorA);
      } else {
        _this.m_localAnchorA = Vec2.zero();
      }
      if (Vec2.isValid(anchor2)) {
        _this.m_localAnchorB = bodyB.getLocalPoint(anchor2);
      } else if (Vec2.isValid(def.localAnchorB)) {
        _this.m_localAnchorB = Vec2.clone(def.localAnchorB);
      } else {
        _this.m_localAnchorB = Vec2.zero();
      }
      if (Number.isFinite(def.referenceAngle)) {
        _this.m_referenceAngle = def.referenceAngle;
      } else {
        _this.m_referenceAngle = bodyB.getAngle() - bodyA.getAngle();
      }
      _this.m_impulse = new Vec3();
      _this.m_motorImpulse = 0;
      _this.m_lowerAngle = (_a20 = def.lowerAngle) !== null && _a20 !== void 0 ? _a20 : DEFAULTS$8.lowerAngle;
      _this.m_upperAngle = (_b = def.upperAngle) !== null && _b !== void 0 ? _b : DEFAULTS$8.upperAngle;
      _this.m_maxMotorTorque = (_c = def.maxMotorTorque) !== null && _c !== void 0 ? _c : DEFAULTS$8.maxMotorTorque;
      _this.m_motorSpeed = (_d = def.motorSpeed) !== null && _d !== void 0 ? _d : DEFAULTS$8.motorSpeed;
      _this.m_enableLimit = (_e = def.enableLimit) !== null && _e !== void 0 ? _e : DEFAULTS$8.enableLimit;
      _this.m_enableMotor = (_f = def.enableMotor) !== null && _f !== void 0 ? _f : DEFAULTS$8.enableMotor;
      return _this;
    }
    __name(RevoluteJoint2, "RevoluteJoint");
    RevoluteJoint2.prototype._serialize = function() {
      return {
        type: this.m_type,
        bodyA: this.m_bodyA,
        bodyB: this.m_bodyB,
        collideConnected: this.m_collideConnected,
        lowerAngle: this.m_lowerAngle,
        upperAngle: this.m_upperAngle,
        maxMotorTorque: this.m_maxMotorTorque,
        motorSpeed: this.m_motorSpeed,
        enableLimit: this.m_enableLimit,
        enableMotor: this.m_enableMotor,
        localAnchorA: this.m_localAnchorA,
        localAnchorB: this.m_localAnchorB,
        referenceAngle: this.m_referenceAngle
      };
    };
    RevoluteJoint2._deserialize = function(data, world2, restore) {
      data = __assign({}, data);
      data.bodyA = restore(Body, data.bodyA, world2);
      data.bodyB = restore(Body, data.bodyB, world2);
      var joint = new RevoluteJoint2(data);
      return joint;
    };
    RevoluteJoint2.prototype._setAnchors = function(def) {
      if (def.anchorA) {
        this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(def.anchorA));
      } else if (def.localAnchorA) {
        this.m_localAnchorA.setVec2(def.localAnchorA);
      }
      if (def.anchorB) {
        this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(def.anchorB));
      } else if (def.localAnchorB) {
        this.m_localAnchorB.setVec2(def.localAnchorB);
      }
    };
    RevoluteJoint2.prototype.getLocalAnchorA = function() {
      return this.m_localAnchorA;
    };
    RevoluteJoint2.prototype.getLocalAnchorB = function() {
      return this.m_localAnchorB;
    };
    RevoluteJoint2.prototype.getReferenceAngle = function() {
      return this.m_referenceAngle;
    };
    RevoluteJoint2.prototype.getJointAngle = function() {
      var bA = this.m_bodyA;
      var bB = this.m_bodyB;
      return bB.m_sweep.a - bA.m_sweep.a - this.m_referenceAngle;
    };
    RevoluteJoint2.prototype.getJointSpeed = function() {
      var bA = this.m_bodyA;
      var bB = this.m_bodyB;
      return bB.m_angularVelocity - bA.m_angularVelocity;
    };
    RevoluteJoint2.prototype.isMotorEnabled = function() {
      return this.m_enableMotor;
    };
    RevoluteJoint2.prototype.enableMotor = function(flag) {
      if (flag == this.m_enableMotor)
        return;
      this.m_bodyA.setAwake(true);
      this.m_bodyB.setAwake(true);
      this.m_enableMotor = flag;
    };
    RevoluteJoint2.prototype.getMotorTorque = function(inv_dt) {
      return inv_dt * this.m_motorImpulse;
    };
    RevoluteJoint2.prototype.setMotorSpeed = function(speed) {
      if (speed == this.m_motorSpeed)
        return;
      this.m_bodyA.setAwake(true);
      this.m_bodyB.setAwake(true);
      this.m_motorSpeed = speed;
    };
    RevoluteJoint2.prototype.getMotorSpeed = function() {
      return this.m_motorSpeed;
    };
    RevoluteJoint2.prototype.setMaxMotorTorque = function(torque) {
      if (torque == this.m_maxMotorTorque)
        return;
      this.m_bodyA.setAwake(true);
      this.m_bodyB.setAwake(true);
      this.m_maxMotorTorque = torque;
    };
    RevoluteJoint2.prototype.getMaxMotorTorque = function() {
      return this.m_maxMotorTorque;
    };
    RevoluteJoint2.prototype.isLimitEnabled = function() {
      return this.m_enableLimit;
    };
    RevoluteJoint2.prototype.enableLimit = function(flag) {
      if (flag != this.m_enableLimit) {
        this.m_bodyA.setAwake(true);
        this.m_bodyB.setAwake(true);
        this.m_enableLimit = flag;
        this.m_impulse.z = 0;
      }
    };
    RevoluteJoint2.prototype.getLowerLimit = function() {
      return this.m_lowerAngle;
    };
    RevoluteJoint2.prototype.getUpperLimit = function() {
      return this.m_upperAngle;
    };
    RevoluteJoint2.prototype.setLimits = function(lower, upper) {
      if (lower != this.m_lowerAngle || upper != this.m_upperAngle) {
        this.m_bodyA.setAwake(true);
        this.m_bodyB.setAwake(true);
        this.m_impulse.z = 0;
        this.m_lowerAngle = lower;
        this.m_upperAngle = upper;
      }
    };
    RevoluteJoint2.prototype.getAnchorA = function() {
      return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
    };
    RevoluteJoint2.prototype.getAnchorB = function() {
      return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
    };
    RevoluteJoint2.prototype.getReactionForce = function(inv_dt) {
      return Vec2.neo(this.m_impulse.x, this.m_impulse.y).mul(inv_dt);
    };
    RevoluteJoint2.prototype.getReactionTorque = function(inv_dt) {
      return inv_dt * this.m_impulse.z;
    };
    RevoluteJoint2.prototype.initVelocityConstraints = function(step) {
      this.m_localCenterA = this.m_bodyA.m_sweep.localCenter;
      this.m_localCenterB = this.m_bodyB.m_sweep.localCenter;
      this.m_invMassA = this.m_bodyA.m_invMass;
      this.m_invMassB = this.m_bodyB.m_invMass;
      this.m_invIA = this.m_bodyA.m_invI;
      this.m_invIB = this.m_bodyB.m_invI;
      var aA = this.m_bodyA.c_position.a;
      var vA2 = this.m_bodyA.c_velocity.v;
      var wA = this.m_bodyA.c_velocity.w;
      var aB = this.m_bodyB.c_position.a;
      var vB2 = this.m_bodyB.c_velocity.v;
      var wB = this.m_bodyB.c_velocity.w;
      var qA = Rot.neo(aA);
      var qB = Rot.neo(aB);
      this.m_rA = Rot.mulVec2(qA, Vec2.sub(this.m_localAnchorA, this.m_localCenterA));
      this.m_rB = Rot.mulVec2(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));
      var mA = this.m_invMassA;
      var mB = this.m_invMassB;
      var iA = this.m_invIA;
      var iB = this.m_invIB;
      var fixedRotation = iA + iB === 0;
      this.m_mass.ex.x = mA + mB + this.m_rA.y * this.m_rA.y * iA + this.m_rB.y * this.m_rB.y * iB;
      this.m_mass.ey.x = -this.m_rA.y * this.m_rA.x * iA - this.m_rB.y * this.m_rB.x * iB;
      this.m_mass.ez.x = -this.m_rA.y * iA - this.m_rB.y * iB;
      this.m_mass.ex.y = this.m_mass.ey.x;
      this.m_mass.ey.y = mA + mB + this.m_rA.x * this.m_rA.x * iA + this.m_rB.x * this.m_rB.x * iB;
      this.m_mass.ez.y = this.m_rA.x * iA + this.m_rB.x * iB;
      this.m_mass.ex.z = this.m_mass.ez.x;
      this.m_mass.ey.z = this.m_mass.ez.y;
      this.m_mass.ez.z = iA + iB;
      this.m_motorMass = iA + iB;
      if (this.m_motorMass > 0) {
        this.m_motorMass = 1 / this.m_motorMass;
      }
      if (this.m_enableMotor == false || fixedRotation) {
        this.m_motorImpulse = 0;
      }
      if (this.m_enableLimit && fixedRotation == false) {
        var jointAngle = aB - aA - this.m_referenceAngle;
        if (math_abs$4(this.m_upperAngle - this.m_lowerAngle) < 2 * SettingsInternal.angularSlop) {
          this.m_limitState = LimitState$2.equalLimits;
        } else if (jointAngle <= this.m_lowerAngle) {
          if (this.m_limitState != LimitState$2.atLowerLimit) {
            this.m_impulse.z = 0;
          }
          this.m_limitState = LimitState$2.atLowerLimit;
        } else if (jointAngle >= this.m_upperAngle) {
          if (this.m_limitState != LimitState$2.atUpperLimit) {
            this.m_impulse.z = 0;
          }
          this.m_limitState = LimitState$2.atUpperLimit;
        } else {
          this.m_limitState = LimitState$2.inactiveLimit;
          this.m_impulse.z = 0;
        }
      } else {
        this.m_limitState = LimitState$2.inactiveLimit;
      }
      if (step.warmStarting) {
        this.m_impulse.mul(step.dtRatio);
        this.m_motorImpulse *= step.dtRatio;
        var P3 = Vec2.neo(this.m_impulse.x, this.m_impulse.y);
        vA2.subMul(mA, P3);
        wA -= iA * (Vec2.crossVec2Vec2(this.m_rA, P3) + this.m_motorImpulse + this.m_impulse.z);
        vB2.addMul(mB, P3);
        wB += iB * (Vec2.crossVec2Vec2(this.m_rB, P3) + this.m_motorImpulse + this.m_impulse.z);
      } else {
        this.m_impulse.setZero();
        this.m_motorImpulse = 0;
      }
      this.m_bodyA.c_velocity.v = vA2;
      this.m_bodyA.c_velocity.w = wA;
      this.m_bodyB.c_velocity.v = vB2;
      this.m_bodyB.c_velocity.w = wB;
    };
    RevoluteJoint2.prototype.solveVelocityConstraints = function(step) {
      var vA2 = this.m_bodyA.c_velocity.v;
      var wA = this.m_bodyA.c_velocity.w;
      var vB2 = this.m_bodyB.c_velocity.v;
      var wB = this.m_bodyB.c_velocity.w;
      var mA = this.m_invMassA;
      var mB = this.m_invMassB;
      var iA = this.m_invIA;
      var iB = this.m_invIB;
      var fixedRotation = iA + iB === 0;
      if (this.m_enableMotor && this.m_limitState != LimitState$2.equalLimits && fixedRotation == false) {
        var Cdot = wB - wA - this.m_motorSpeed;
        var impulse = -this.m_motorMass * Cdot;
        var oldImpulse = this.m_motorImpulse;
        var maxImpulse = step.dt * this.m_maxMotorTorque;
        this.m_motorImpulse = clamp(this.m_motorImpulse + impulse, -maxImpulse, maxImpulse);
        impulse = this.m_motorImpulse - oldImpulse;
        wA -= iA * impulse;
        wB += iB * impulse;
      }
      if (this.m_enableLimit && this.m_limitState != LimitState$2.inactiveLimit && fixedRotation == false) {
        var Cdot1 = Vec2.zero();
        Cdot1.addCombine(1, vB2, 1, Vec2.crossNumVec2(wB, this.m_rB));
        Cdot1.subCombine(1, vA2, 1, Vec2.crossNumVec2(wA, this.m_rA));
        var Cdot2 = wB - wA;
        var Cdot = new Vec3(Cdot1.x, Cdot1.y, Cdot2);
        var impulse = Vec3.neg(this.m_mass.solve33(Cdot));
        if (this.m_limitState == LimitState$2.equalLimits) {
          this.m_impulse.add(impulse);
        } else if (this.m_limitState == LimitState$2.atLowerLimit) {
          var newImpulse = this.m_impulse.z + impulse.z;
          if (newImpulse < 0) {
            var rhs = Vec2.combine(-1, Cdot1, this.m_impulse.z, Vec2.neo(this.m_mass.ez.x, this.m_mass.ez.y));
            var reduced = this.m_mass.solve22(rhs);
            impulse.x = reduced.x;
            impulse.y = reduced.y;
            impulse.z = -this.m_impulse.z;
            this.m_impulse.x += reduced.x;
            this.m_impulse.y += reduced.y;
            this.m_impulse.z = 0;
          } else {
            this.m_impulse.add(impulse);
          }
        } else if (this.m_limitState == LimitState$2.atUpperLimit) {
          var newImpulse = this.m_impulse.z + impulse.z;
          if (newImpulse > 0) {
            var rhs = Vec2.combine(-1, Cdot1, this.m_impulse.z, Vec2.neo(this.m_mass.ez.x, this.m_mass.ez.y));
            var reduced = this.m_mass.solve22(rhs);
            impulse.x = reduced.x;
            impulse.y = reduced.y;
            impulse.z = -this.m_impulse.z;
            this.m_impulse.x += reduced.x;
            this.m_impulse.y += reduced.y;
            this.m_impulse.z = 0;
          } else {
            this.m_impulse.add(impulse);
          }
        }
        var P3 = Vec2.neo(impulse.x, impulse.y);
        vA2.subMul(mA, P3);
        wA -= iA * (Vec2.crossVec2Vec2(this.m_rA, P3) + impulse.z);
        vB2.addMul(mB, P3);
        wB += iB * (Vec2.crossVec2Vec2(this.m_rB, P3) + impulse.z);
      } else {
        var Cdot = Vec2.zero();
        Cdot.addCombine(1, vB2, 1, Vec2.crossNumVec2(wB, this.m_rB));
        Cdot.subCombine(1, vA2, 1, Vec2.crossNumVec2(wA, this.m_rA));
        var impulse = this.m_mass.solve22(Vec2.neg(Cdot));
        this.m_impulse.x += impulse.x;
        this.m_impulse.y += impulse.y;
        vA2.subMul(mA, impulse);
        wA -= iA * Vec2.crossVec2Vec2(this.m_rA, impulse);
        vB2.addMul(mB, impulse);
        wB += iB * Vec2.crossVec2Vec2(this.m_rB, impulse);
      }
      this.m_bodyA.c_velocity.v = vA2;
      this.m_bodyA.c_velocity.w = wA;
      this.m_bodyB.c_velocity.v = vB2;
      this.m_bodyB.c_velocity.w = wB;
    };
    RevoluteJoint2.prototype.solvePositionConstraints = function(step) {
      var cA2 = this.m_bodyA.c_position.c;
      var aA = this.m_bodyA.c_position.a;
      var cB2 = this.m_bodyB.c_position.c;
      var aB = this.m_bodyB.c_position.a;
      var qA = Rot.neo(aA);
      var qB = Rot.neo(aB);
      var angularError = 0;
      var positionError = 0;
      var fixedRotation = this.m_invIA + this.m_invIB == 0;
      if (this.m_enableLimit && this.m_limitState != LimitState$2.inactiveLimit && fixedRotation == false) {
        var angle = aB - aA - this.m_referenceAngle;
        var limitImpulse = 0;
        if (this.m_limitState == LimitState$2.equalLimits) {
          var C = clamp(angle - this.m_lowerAngle, -SettingsInternal.maxAngularCorrection, SettingsInternal.maxAngularCorrection);
          limitImpulse = -this.m_motorMass * C;
          angularError = math_abs$4(C);
        } else if (this.m_limitState == LimitState$2.atLowerLimit) {
          var C = angle - this.m_lowerAngle;
          angularError = -C;
          C = clamp(C + SettingsInternal.angularSlop, -SettingsInternal.maxAngularCorrection, 0);
          limitImpulse = -this.m_motorMass * C;
        } else if (this.m_limitState == LimitState$2.atUpperLimit) {
          var C = angle - this.m_upperAngle;
          angularError = C;
          C = clamp(C - SettingsInternal.angularSlop, 0, SettingsInternal.maxAngularCorrection);
          limitImpulse = -this.m_motorMass * C;
        }
        aA -= this.m_invIA * limitImpulse;
        aB += this.m_invIB * limitImpulse;
      }
      {
        qA.setAngle(aA);
        qB.setAngle(aB);
        var rA2 = Rot.mulVec2(qA, Vec2.sub(this.m_localAnchorA, this.m_localCenterA));
        var rB2 = Rot.mulVec2(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));
        var C = Vec2.zero();
        C.addCombine(1, cB2, 1, rB2);
        C.subCombine(1, cA2, 1, rA2);
        positionError = C.length();
        var mA = this.m_invMassA;
        var mB = this.m_invMassB;
        var iA = this.m_invIA;
        var iB = this.m_invIB;
        var K = new Mat22();
        K.ex.x = mA + mB + iA * rA2.y * rA2.y + iB * rB2.y * rB2.y;
        K.ex.y = -iA * rA2.x * rA2.y - iB * rB2.x * rB2.y;
        K.ey.x = K.ex.y;
        K.ey.y = mA + mB + iA * rA2.x * rA2.x + iB * rB2.x * rB2.x;
        var impulse = Vec2.neg(K.solve(C));
        cA2.subMul(mA, impulse);
        aA -= iA * Vec2.crossVec2Vec2(rA2, impulse);
        cB2.addMul(mB, impulse);
        aB += iB * Vec2.crossVec2Vec2(rB2, impulse);
      }
      this.m_bodyA.c_position.c.setVec2(cA2);
      this.m_bodyA.c_position.a = aA;
      this.m_bodyB.c_position.c.setVec2(cB2);
      this.m_bodyB.c_position.a = aB;
      return positionError <= SettingsInternal.linearSlop && angularError <= SettingsInternal.angularSlop;
    };
    RevoluteJoint2.TYPE = "revolute-joint";
    return RevoluteJoint2;
  }(Joint);
  var math_abs$3 = Math.abs;
  var math_max = Math.max;
  var math_min$2 = Math.min;
  var LimitState$1;
  (function(LimitState2) {
    LimitState2[LimitState2["inactiveLimit"] = 0] = "inactiveLimit";
    LimitState2[LimitState2["atLowerLimit"] = 1] = "atLowerLimit";
    LimitState2[LimitState2["atUpperLimit"] = 2] = "atUpperLimit";
    LimitState2[LimitState2["equalLimits"] = 3] = "equalLimits";
  })(LimitState$1 || (LimitState$1 = {}));
  var DEFAULTS$7 = {
    enableLimit: false,
    lowerTranslation: 0,
    upperTranslation: 0,
    enableMotor: false,
    maxMotorForce: 0,
    motorSpeed: 0
  };
  var PrismaticJoint = function(_super) {
    __extends(PrismaticJoint2, _super);
    function PrismaticJoint2(def, bodyA, bodyB, anchor2, axis) {
      var _this = this;
      if (!(_this instanceof PrismaticJoint2)) {
        return new PrismaticJoint2(def, bodyA, bodyB, anchor2, axis);
      }
      def = options(def, DEFAULTS$7);
      _this = _super.call(this, def, bodyA, bodyB) || this;
      bodyA = _this.m_bodyA;
      bodyB = _this.m_bodyB;
      _this.m_type = PrismaticJoint2.TYPE;
      _this.m_localAnchorA = Vec2.clone(anchor2 ? bodyA.getLocalPoint(anchor2) : def.localAnchorA || Vec2.zero());
      _this.m_localAnchorB = Vec2.clone(anchor2 ? bodyB.getLocalPoint(anchor2) : def.localAnchorB || Vec2.zero());
      _this.m_localXAxisA = Vec2.clone(axis ? bodyA.getLocalVector(axis) : def.localAxisA || Vec2.neo(1, 0));
      _this.m_localXAxisA.normalize();
      _this.m_localYAxisA = Vec2.crossNumVec2(1, _this.m_localXAxisA);
      _this.m_referenceAngle = Number.isFinite(def.referenceAngle) ? def.referenceAngle : bodyB.getAngle() - bodyA.getAngle();
      _this.m_impulse = new Vec3();
      _this.m_motorMass = 0;
      _this.m_motorImpulse = 0;
      _this.m_lowerTranslation = def.lowerTranslation;
      _this.m_upperTranslation = def.upperTranslation;
      _this.m_maxMotorForce = def.maxMotorForce;
      _this.m_motorSpeed = def.motorSpeed;
      _this.m_enableLimit = def.enableLimit;
      _this.m_enableMotor = def.enableMotor;
      _this.m_limitState = LimitState$1.inactiveLimit;
      _this.m_axis = Vec2.zero();
      _this.m_perp = Vec2.zero();
      _this.m_K = new Mat33();
      return _this;
    }
    __name(PrismaticJoint2, "PrismaticJoint");
    PrismaticJoint2.prototype._serialize = function() {
      return {
        type: this.m_type,
        bodyA: this.m_bodyA,
        bodyB: this.m_bodyB,
        collideConnected: this.m_collideConnected,
        lowerTranslation: this.m_lowerTranslation,
        upperTranslation: this.m_upperTranslation,
        maxMotorForce: this.m_maxMotorForce,
        motorSpeed: this.m_motorSpeed,
        enableLimit: this.m_enableLimit,
        enableMotor: this.m_enableMotor,
        localAnchorA: this.m_localAnchorA,
        localAnchorB: this.m_localAnchorB,
        localAxisA: this.m_localXAxisA,
        referenceAngle: this.m_referenceAngle
      };
    };
    PrismaticJoint2._deserialize = function(data, world2, restore) {
      data = __assign({}, data);
      data.bodyA = restore(Body, data.bodyA, world2);
      data.bodyB = restore(Body, data.bodyB, world2);
      data.localAxisA = Vec2.clone(data.localAxisA);
      var joint = new PrismaticJoint2(data);
      return joint;
    };
    PrismaticJoint2.prototype._setAnchors = function(def) {
      if (def.anchorA) {
        this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(def.anchorA));
      } else if (def.localAnchorA) {
        this.m_localAnchorA.setVec2(def.localAnchorA);
      }
      if (def.anchorB) {
        this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(def.anchorB));
      } else if (def.localAnchorB) {
        this.m_localAnchorB.setVec2(def.localAnchorB);
      }
      if (def.localAxisA) {
        this.m_localXAxisA.setVec2(def.localAxisA);
        this.m_localYAxisA.setVec2(Vec2.crossNumVec2(1, def.localAxisA));
      }
    };
    PrismaticJoint2.prototype.getLocalAnchorA = function() {
      return this.m_localAnchorA;
    };
    PrismaticJoint2.prototype.getLocalAnchorB = function() {
      return this.m_localAnchorB;
    };
    PrismaticJoint2.prototype.getLocalAxisA = function() {
      return this.m_localXAxisA;
    };
    PrismaticJoint2.prototype.getReferenceAngle = function() {
      return this.m_referenceAngle;
    };
    PrismaticJoint2.prototype.getJointTranslation = function() {
      var pA2 = this.m_bodyA.getWorldPoint(this.m_localAnchorA);
      var pB2 = this.m_bodyB.getWorldPoint(this.m_localAnchorB);
      var d2 = Vec2.sub(pB2, pA2);
      var axis = this.m_bodyA.getWorldVector(this.m_localXAxisA);
      var translation2 = Vec2.dot(d2, axis);
      return translation2;
    };
    PrismaticJoint2.prototype.getJointSpeed = function() {
      var bA = this.m_bodyA;
      var bB = this.m_bodyB;
      var rA2 = Rot.mulVec2(bA.m_xf.q, Vec2.sub(this.m_localAnchorA, bA.m_sweep.localCenter));
      var rB2 = Rot.mulVec2(bB.m_xf.q, Vec2.sub(this.m_localAnchorB, bB.m_sweep.localCenter));
      var p1 = Vec2.add(bA.m_sweep.c, rA2);
      var p2 = Vec2.add(bB.m_sweep.c, rB2);
      var d2 = Vec2.sub(p2, p1);
      var axis = Rot.mulVec2(bA.m_xf.q, this.m_localXAxisA);
      var vA2 = bA.m_linearVelocity;
      var vB2 = bB.m_linearVelocity;
      var wA = bA.m_angularVelocity;
      var wB = bB.m_angularVelocity;
      var speed = Vec2.dot(d2, Vec2.crossNumVec2(wA, axis)) + Vec2.dot(axis, Vec2.sub(Vec2.addCrossNumVec2(vB2, wB, rB2), Vec2.addCrossNumVec2(vA2, wA, rA2)));
      return speed;
    };
    PrismaticJoint2.prototype.isLimitEnabled = function() {
      return this.m_enableLimit;
    };
    PrismaticJoint2.prototype.enableLimit = function(flag) {
      if (flag != this.m_enableLimit) {
        this.m_bodyA.setAwake(true);
        this.m_bodyB.setAwake(true);
        this.m_enableLimit = flag;
        this.m_impulse.z = 0;
      }
    };
    PrismaticJoint2.prototype.getLowerLimit = function() {
      return this.m_lowerTranslation;
    };
    PrismaticJoint2.prototype.getUpperLimit = function() {
      return this.m_upperTranslation;
    };
    PrismaticJoint2.prototype.setLimits = function(lower, upper) {
      if (lower != this.m_lowerTranslation || upper != this.m_upperTranslation) {
        this.m_bodyA.setAwake(true);
        this.m_bodyB.setAwake(true);
        this.m_lowerTranslation = lower;
        this.m_upperTranslation = upper;
        this.m_impulse.z = 0;
      }
    };
    PrismaticJoint2.prototype.isMotorEnabled = function() {
      return this.m_enableMotor;
    };
    PrismaticJoint2.prototype.enableMotor = function(flag) {
      if (flag == this.m_enableMotor)
        return;
      this.m_bodyA.setAwake(true);
      this.m_bodyB.setAwake(true);
      this.m_enableMotor = flag;
    };
    PrismaticJoint2.prototype.setMotorSpeed = function(speed) {
      if (speed == this.m_motorSpeed)
        return;
      this.m_bodyA.setAwake(true);
      this.m_bodyB.setAwake(true);
      this.m_motorSpeed = speed;
    };
    PrismaticJoint2.prototype.setMaxMotorForce = function(force) {
      if (force == this.m_maxMotorForce)
        return;
      this.m_bodyA.setAwake(true);
      this.m_bodyB.setAwake(true);
      this.m_maxMotorForce = force;
    };
    PrismaticJoint2.prototype.getMaxMotorForce = function() {
      return this.m_maxMotorForce;
    };
    PrismaticJoint2.prototype.getMotorSpeed = function() {
      return this.m_motorSpeed;
    };
    PrismaticJoint2.prototype.getMotorForce = function(inv_dt) {
      return inv_dt * this.m_motorImpulse;
    };
    PrismaticJoint2.prototype.getAnchorA = function() {
      return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
    };
    PrismaticJoint2.prototype.getAnchorB = function() {
      return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
    };
    PrismaticJoint2.prototype.getReactionForce = function(inv_dt) {
      return Vec2.combine(this.m_impulse.x, this.m_perp, this.m_motorImpulse + this.m_impulse.z, this.m_axis).mul(inv_dt);
    };
    PrismaticJoint2.prototype.getReactionTorque = function(inv_dt) {
      return inv_dt * this.m_impulse.y;
    };
    PrismaticJoint2.prototype.initVelocityConstraints = function(step) {
      this.m_localCenterA = this.m_bodyA.m_sweep.localCenter;
      this.m_localCenterB = this.m_bodyB.m_sweep.localCenter;
      this.m_invMassA = this.m_bodyA.m_invMass;
      this.m_invMassB = this.m_bodyB.m_invMass;
      this.m_invIA = this.m_bodyA.m_invI;
      this.m_invIB = this.m_bodyB.m_invI;
      var cA2 = this.m_bodyA.c_position.c;
      var aA = this.m_bodyA.c_position.a;
      var vA2 = this.m_bodyA.c_velocity.v;
      var wA = this.m_bodyA.c_velocity.w;
      var cB2 = this.m_bodyB.c_position.c;
      var aB = this.m_bodyB.c_position.a;
      var vB2 = this.m_bodyB.c_velocity.v;
      var wB = this.m_bodyB.c_velocity.w;
      var qA = Rot.neo(aA);
      var qB = Rot.neo(aB);
      var rA2 = Rot.mulVec2(qA, Vec2.sub(this.m_localAnchorA, this.m_localCenterA));
      var rB2 = Rot.mulVec2(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));
      var d2 = Vec2.zero();
      d2.addCombine(1, cB2, 1, rB2);
      d2.subCombine(1, cA2, 1, rA2);
      var mA = this.m_invMassA;
      var mB = this.m_invMassB;
      var iA = this.m_invIA;
      var iB = this.m_invIB;
      {
        this.m_axis = Rot.mulVec2(qA, this.m_localXAxisA);
        this.m_a1 = Vec2.crossVec2Vec2(Vec2.add(d2, rA2), this.m_axis);
        this.m_a2 = Vec2.crossVec2Vec2(rB2, this.m_axis);
        this.m_motorMass = mA + mB + iA * this.m_a1 * this.m_a1 + iB * this.m_a2 * this.m_a2;
        if (this.m_motorMass > 0) {
          this.m_motorMass = 1 / this.m_motorMass;
        }
      }
      {
        this.m_perp = Rot.mulVec2(qA, this.m_localYAxisA);
        this.m_s1 = Vec2.crossVec2Vec2(Vec2.add(d2, rA2), this.m_perp);
        this.m_s2 = Vec2.crossVec2Vec2(rB2, this.m_perp);
        Vec2.crossVec2Vec2(rA2, this.m_perp);
        var k11 = mA + mB + iA * this.m_s1 * this.m_s1 + iB * this.m_s2 * this.m_s2;
        var k12 = iA * this.m_s1 + iB * this.m_s2;
        var k13 = iA * this.m_s1 * this.m_a1 + iB * this.m_s2 * this.m_a2;
        var k22 = iA + iB;
        if (k22 == 0) {
          k22 = 1;
        }
        var k23 = iA * this.m_a1 + iB * this.m_a2;
        var k33 = mA + mB + iA * this.m_a1 * this.m_a1 + iB * this.m_a2 * this.m_a2;
        this.m_K.ex.set(k11, k12, k13);
        this.m_K.ey.set(k12, k22, k23);
        this.m_K.ez.set(k13, k23, k33);
      }
      if (this.m_enableLimit) {
        var jointTranslation = Vec2.dot(this.m_axis, d2);
        if (math_abs$3(this.m_upperTranslation - this.m_lowerTranslation) < 2 * SettingsInternal.linearSlop) {
          this.m_limitState = LimitState$1.equalLimits;
        } else if (jointTranslation <= this.m_lowerTranslation) {
          if (this.m_limitState != LimitState$1.atLowerLimit) {
            this.m_limitState = LimitState$1.atLowerLimit;
            this.m_impulse.z = 0;
          }
        } else if (jointTranslation >= this.m_upperTranslation) {
          if (this.m_limitState != LimitState$1.atUpperLimit) {
            this.m_limitState = LimitState$1.atUpperLimit;
            this.m_impulse.z = 0;
          }
        } else {
          this.m_limitState = LimitState$1.inactiveLimit;
          this.m_impulse.z = 0;
        }
      } else {
        this.m_limitState = LimitState$1.inactiveLimit;
        this.m_impulse.z = 0;
      }
      if (this.m_enableMotor == false) {
        this.m_motorImpulse = 0;
      }
      if (step.warmStarting) {
        this.m_impulse.mul(step.dtRatio);
        this.m_motorImpulse *= step.dtRatio;
        var P3 = Vec2.combine(this.m_impulse.x, this.m_perp, this.m_motorImpulse + this.m_impulse.z, this.m_axis);
        var LA = this.m_impulse.x * this.m_s1 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a1;
        var LB = this.m_impulse.x * this.m_s2 + this.m_impulse.y + (this.m_motorImpulse + this.m_impulse.z) * this.m_a2;
        vA2.subMul(mA, P3);
        wA -= iA * LA;
        vB2.addMul(mB, P3);
        wB += iB * LB;
      } else {
        this.m_impulse.setZero();
        this.m_motorImpulse = 0;
      }
      this.m_bodyA.c_velocity.v.setVec2(vA2);
      this.m_bodyA.c_velocity.w = wA;
      this.m_bodyB.c_velocity.v.setVec2(vB2);
      this.m_bodyB.c_velocity.w = wB;
    };
    PrismaticJoint2.prototype.solveVelocityConstraints = function(step) {
      var vA2 = this.m_bodyA.c_velocity.v;
      var wA = this.m_bodyA.c_velocity.w;
      var vB2 = this.m_bodyB.c_velocity.v;
      var wB = this.m_bodyB.c_velocity.w;
      var mA = this.m_invMassA;
      var mB = this.m_invMassB;
      var iA = this.m_invIA;
      var iB = this.m_invIB;
      if (this.m_enableMotor && this.m_limitState != LimitState$1.equalLimits) {
        var Cdot = Vec2.dot(this.m_axis, Vec2.sub(vB2, vA2)) + this.m_a2 * wB - this.m_a1 * wA;
        var impulse = this.m_motorMass * (this.m_motorSpeed - Cdot);
        var oldImpulse = this.m_motorImpulse;
        var maxImpulse = step.dt * this.m_maxMotorForce;
        this.m_motorImpulse = clamp(this.m_motorImpulse + impulse, -maxImpulse, maxImpulse);
        impulse = this.m_motorImpulse - oldImpulse;
        var P3 = Vec2.mulNumVec2(impulse, this.m_axis);
        var LA = impulse * this.m_a1;
        var LB = impulse * this.m_a2;
        vA2.subMul(mA, P3);
        wA -= iA * LA;
        vB2.addMul(mB, P3);
        wB += iB * LB;
      }
      var Cdot1 = Vec2.zero();
      Cdot1.x += Vec2.dot(this.m_perp, vB2) + this.m_s2 * wB;
      Cdot1.x -= Vec2.dot(this.m_perp, vA2) + this.m_s1 * wA;
      Cdot1.y = wB - wA;
      if (this.m_enableLimit && this.m_limitState != LimitState$1.inactiveLimit) {
        var Cdot2 = 0;
        Cdot2 += Vec2.dot(this.m_axis, vB2) + this.m_a2 * wB;
        Cdot2 -= Vec2.dot(this.m_axis, vA2) + this.m_a1 * wA;
        var Cdot = new Vec3(Cdot1.x, Cdot1.y, Cdot2);
        var f1 = Vec3.clone(this.m_impulse);
        var df = this.m_K.solve33(Vec3.neg(Cdot));
        this.m_impulse.add(df);
        if (this.m_limitState == LimitState$1.atLowerLimit) {
          this.m_impulse.z = math_max(this.m_impulse.z, 0);
        } else if (this.m_limitState == LimitState$1.atUpperLimit) {
          this.m_impulse.z = math_min$2(this.m_impulse.z, 0);
        }
        var b2 = Vec2.combine(-1, Cdot1, -(this.m_impulse.z - f1.z), Vec2.neo(this.m_K.ez.x, this.m_K.ez.y));
        var f2r = Vec2.add(this.m_K.solve22(b2), Vec2.neo(f1.x, f1.y));
        this.m_impulse.x = f2r.x;
        this.m_impulse.y = f2r.y;
        df = Vec3.sub(this.m_impulse, f1);
        var P3 = Vec2.combine(df.x, this.m_perp, df.z, this.m_axis);
        var LA = df.x * this.m_s1 + df.y + df.z * this.m_a1;
        var LB = df.x * this.m_s2 + df.y + df.z * this.m_a2;
        vA2.subMul(mA, P3);
        wA -= iA * LA;
        vB2.addMul(mB, P3);
        wB += iB * LB;
      } else {
        var df = this.m_K.solve22(Vec2.neg(Cdot1));
        this.m_impulse.x += df.x;
        this.m_impulse.y += df.y;
        var P3 = Vec2.mulNumVec2(df.x, this.m_perp);
        var LA = df.x * this.m_s1 + df.y;
        var LB = df.x * this.m_s2 + df.y;
        vA2.subMul(mA, P3);
        wA -= iA * LA;
        vB2.addMul(mB, P3);
        wB += iB * LB;
      }
      this.m_bodyA.c_velocity.v = vA2;
      this.m_bodyA.c_velocity.w = wA;
      this.m_bodyB.c_velocity.v = vB2;
      this.m_bodyB.c_velocity.w = wB;
    };
    PrismaticJoint2.prototype.solvePositionConstraints = function(step) {
      var cA2 = this.m_bodyA.c_position.c;
      var aA = this.m_bodyA.c_position.a;
      var cB2 = this.m_bodyB.c_position.c;
      var aB = this.m_bodyB.c_position.a;
      var qA = Rot.neo(aA);
      var qB = Rot.neo(aB);
      var mA = this.m_invMassA;
      var mB = this.m_invMassB;
      var iA = this.m_invIA;
      var iB = this.m_invIB;
      var rA2 = Rot.mulVec2(qA, Vec2.sub(this.m_localAnchorA, this.m_localCenterA));
      var rB2 = Rot.mulVec2(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));
      var d2 = Vec2.sub(Vec2.add(cB2, rB2), Vec2.add(cA2, rA2));
      var axis = Rot.mulVec2(qA, this.m_localXAxisA);
      var a1 = Vec2.crossVec2Vec2(Vec2.add(d2, rA2), axis);
      var a2 = Vec2.crossVec2Vec2(rB2, axis);
      var perp2 = Rot.mulVec2(qA, this.m_localYAxisA);
      var s1 = Vec2.crossVec2Vec2(Vec2.add(d2, rA2), perp2);
      var s2 = Vec2.crossVec2Vec2(rB2, perp2);
      var impulse = new Vec3();
      var C1 = Vec2.zero();
      C1.x = Vec2.dot(perp2, d2);
      C1.y = aB - aA - this.m_referenceAngle;
      var linearError = math_abs$3(C1.x);
      var angularError = math_abs$3(C1.y);
      var linearSlop = SettingsInternal.linearSlop;
      var maxLinearCorrection = SettingsInternal.maxLinearCorrection;
      var active = false;
      var C2 = 0;
      if (this.m_enableLimit) {
        var translation2 = Vec2.dot(axis, d2);
        if (math_abs$3(this.m_upperTranslation - this.m_lowerTranslation) < 2 * linearSlop) {
          C2 = clamp(translation2, -maxLinearCorrection, maxLinearCorrection);
          linearError = math_max(linearError, math_abs$3(translation2));
          active = true;
        } else if (translation2 <= this.m_lowerTranslation) {
          C2 = clamp(translation2 - this.m_lowerTranslation + linearSlop, -maxLinearCorrection, 0);
          linearError = Math.max(linearError, this.m_lowerTranslation - translation2);
          active = true;
        } else if (translation2 >= this.m_upperTranslation) {
          C2 = clamp(translation2 - this.m_upperTranslation - linearSlop, 0, maxLinearCorrection);
          linearError = Math.max(linearError, translation2 - this.m_upperTranslation);
          active = true;
        }
      }
      if (active) {
        var k11 = mA + mB + iA * s1 * s1 + iB * s2 * s2;
        var k12 = iA * s1 + iB * s2;
        var k13 = iA * s1 * a1 + iB * s2 * a2;
        var k22 = iA + iB;
        if (k22 == 0) {
          k22 = 1;
        }
        var k23 = iA * a1 + iB * a2;
        var k33 = mA + mB + iA * a1 * a1 + iB * a2 * a2;
        var K = new Mat33();
        K.ex.set(k11, k12, k13);
        K.ey.set(k12, k22, k23);
        K.ez.set(k13, k23, k33);
        var C = new Vec3();
        C.x = C1.x;
        C.y = C1.y;
        C.z = C2;
        impulse = K.solve33(Vec3.neg(C));
      } else {
        var k11 = mA + mB + iA * s1 * s1 + iB * s2 * s2;
        var k12 = iA * s1 + iB * s2;
        var k22 = iA + iB;
        if (k22 == 0) {
          k22 = 1;
        }
        var K = new Mat22();
        K.ex.setNum(k11, k12);
        K.ey.setNum(k12, k22);
        var impulse1 = K.solve(Vec2.neg(C1));
        impulse.x = impulse1.x;
        impulse.y = impulse1.y;
        impulse.z = 0;
      }
      var P3 = Vec2.combine(impulse.x, perp2, impulse.z, axis);
      var LA = impulse.x * s1 + impulse.y + impulse.z * a1;
      var LB = impulse.x * s2 + impulse.y + impulse.z * a2;
      cA2.subMul(mA, P3);
      aA -= iA * LA;
      cB2.addMul(mB, P3);
      aB += iB * LB;
      this.m_bodyA.c_position.c = cA2;
      this.m_bodyA.c_position.a = aA;
      this.m_bodyB.c_position.c = cB2;
      this.m_bodyB.c_position.a = aB;
      return linearError <= SettingsInternal.linearSlop && angularError <= SettingsInternal.angularSlop;
    };
    PrismaticJoint2.TYPE = "prismatic-joint";
    return PrismaticJoint2;
  }(Joint);
  var DEFAULTS$6 = {
    ratio: 1
  };
  var GearJoint = function(_super) {
    __extends(GearJoint2, _super);
    function GearJoint2(def, bodyA, bodyB, joint1, joint2, ratio) {
      var _this = this;
      if (!(_this instanceof GearJoint2)) {
        return new GearJoint2(def, bodyA, bodyB, joint1, joint2, ratio);
      }
      def = options(def, DEFAULTS$6);
      _this = _super.call(this, def, bodyA, bodyB) || this;
      bodyA = _this.m_bodyA;
      bodyB = _this.m_bodyB;
      _this.m_type = GearJoint2.TYPE;
      _this.m_joint1 = joint1 ? joint1 : def.joint1;
      _this.m_joint2 = joint2 ? joint2 : def.joint2;
      _this.m_ratio = Number.isFinite(ratio) ? ratio : def.ratio;
      _this.m_type1 = _this.m_joint1.getType();
      _this.m_type2 = _this.m_joint2.getType();
      var coordinateA;
      var coordinateB;
      _this.m_bodyC = _this.m_joint1.getBodyA();
      _this.m_bodyA = _this.m_joint1.getBodyB();
      var xfA2 = _this.m_bodyA.m_xf;
      var aA = _this.m_bodyA.m_sweep.a;
      var xfC = _this.m_bodyC.m_xf;
      var aC = _this.m_bodyC.m_sweep.a;
      if (_this.m_type1 === RevoluteJoint.TYPE) {
        var revolute = _this.m_joint1;
        _this.m_localAnchorC = revolute.m_localAnchorA;
        _this.m_localAnchorA = revolute.m_localAnchorB;
        _this.m_referenceAngleA = revolute.m_referenceAngle;
        _this.m_localAxisC = Vec2.zero();
        coordinateA = aA - aC - _this.m_referenceAngleA;
      } else {
        var prismatic = _this.m_joint1;
        _this.m_localAnchorC = prismatic.m_localAnchorA;
        _this.m_localAnchorA = prismatic.m_localAnchorB;
        _this.m_referenceAngleA = prismatic.m_referenceAngle;
        _this.m_localAxisC = prismatic.m_localXAxisA;
        var pC = _this.m_localAnchorC;
        var pA2 = Rot.mulTVec2(xfC.q, Vec2.add(Rot.mulVec2(xfA2.q, _this.m_localAnchorA), Vec2.sub(xfA2.p, xfC.p)));
        coordinateA = Vec2.dot(pA2, _this.m_localAxisC) - Vec2.dot(pC, _this.m_localAxisC);
      }
      _this.m_bodyD = _this.m_joint2.getBodyA();
      _this.m_bodyB = _this.m_joint2.getBodyB();
      var xfB2 = _this.m_bodyB.m_xf;
      var aB = _this.m_bodyB.m_sweep.a;
      var xfD = _this.m_bodyD.m_xf;
      var aD = _this.m_bodyD.m_sweep.a;
      if (_this.m_type2 === RevoluteJoint.TYPE) {
        var revolute = _this.m_joint2;
        _this.m_localAnchorD = revolute.m_localAnchorA;
        _this.m_localAnchorB = revolute.m_localAnchorB;
        _this.m_referenceAngleB = revolute.m_referenceAngle;
        _this.m_localAxisD = Vec2.zero();
        coordinateB = aB - aD - _this.m_referenceAngleB;
      } else {
        var prismatic = _this.m_joint2;
        _this.m_localAnchorD = prismatic.m_localAnchorA;
        _this.m_localAnchorB = prismatic.m_localAnchorB;
        _this.m_referenceAngleB = prismatic.m_referenceAngle;
        _this.m_localAxisD = prismatic.m_localXAxisA;
        var pD = _this.m_localAnchorD;
        var pB2 = Rot.mulTVec2(xfD.q, Vec2.add(Rot.mulVec2(xfB2.q, _this.m_localAnchorB), Vec2.sub(xfB2.p, xfD.p)));
        coordinateB = Vec2.dot(pB2, _this.m_localAxisD) - Vec2.dot(pD, _this.m_localAxisD);
      }
      _this.m_constant = coordinateA + _this.m_ratio * coordinateB;
      _this.m_impulse = 0;
      return _this;
    }
    __name(GearJoint2, "GearJoint");
    GearJoint2.prototype._serialize = function() {
      return {
        type: this.m_type,
        bodyA: this.m_bodyA,
        bodyB: this.m_bodyB,
        collideConnected: this.m_collideConnected,
        joint1: this.m_joint1,
        joint2: this.m_joint2,
        ratio: this.m_ratio
      };
    };
    GearJoint2._deserialize = function(data, world2, restore) {
      data = __assign({}, data);
      data.bodyA = restore(Body, data.bodyA, world2);
      data.bodyB = restore(Body, data.bodyB, world2);
      data.joint1 = restore(Joint, data.joint1, world2);
      data.joint2 = restore(Joint, data.joint2, world2);
      var joint = new GearJoint2(data);
      return joint;
    };
    GearJoint2.prototype.getJoint1 = function() {
      return this.m_joint1;
    };
    GearJoint2.prototype.getJoint2 = function() {
      return this.m_joint2;
    };
    GearJoint2.prototype.setRatio = function(ratio) {
      this.m_ratio = ratio;
    };
    GearJoint2.prototype.getRatio = function() {
      return this.m_ratio;
    };
    GearJoint2.prototype.getAnchorA = function() {
      return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
    };
    GearJoint2.prototype.getAnchorB = function() {
      return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
    };
    GearJoint2.prototype.getReactionForce = function(inv_dt) {
      return Vec2.mulNumVec2(this.m_impulse, this.m_JvAC).mul(inv_dt);
    };
    GearJoint2.prototype.getReactionTorque = function(inv_dt) {
      var L = this.m_impulse * this.m_JwA;
      return inv_dt * L;
    };
    GearJoint2.prototype.initVelocityConstraints = function(step) {
      this.m_lcA = this.m_bodyA.m_sweep.localCenter;
      this.m_lcB = this.m_bodyB.m_sweep.localCenter;
      this.m_lcC = this.m_bodyC.m_sweep.localCenter;
      this.m_lcD = this.m_bodyD.m_sweep.localCenter;
      this.m_mA = this.m_bodyA.m_invMass;
      this.m_mB = this.m_bodyB.m_invMass;
      this.m_mC = this.m_bodyC.m_invMass;
      this.m_mD = this.m_bodyD.m_invMass;
      this.m_iA = this.m_bodyA.m_invI;
      this.m_iB = this.m_bodyB.m_invI;
      this.m_iC = this.m_bodyC.m_invI;
      this.m_iD = this.m_bodyD.m_invI;
      var aA = this.m_bodyA.c_position.a;
      var vA2 = this.m_bodyA.c_velocity.v;
      var wA = this.m_bodyA.c_velocity.w;
      var aB = this.m_bodyB.c_position.a;
      var vB2 = this.m_bodyB.c_velocity.v;
      var wB = this.m_bodyB.c_velocity.w;
      var aC = this.m_bodyC.c_position.a;
      var vC = this.m_bodyC.c_velocity.v;
      var wC = this.m_bodyC.c_velocity.w;
      var aD = this.m_bodyD.c_position.a;
      var vD = this.m_bodyD.c_velocity.v;
      var wD = this.m_bodyD.c_velocity.w;
      var qA = Rot.neo(aA);
      var qB = Rot.neo(aB);
      var qC = Rot.neo(aC);
      var qD = Rot.neo(aD);
      this.m_mass = 0;
      if (this.m_type1 == RevoluteJoint.TYPE) {
        this.m_JvAC = Vec2.zero();
        this.m_JwA = 1;
        this.m_JwC = 1;
        this.m_mass += this.m_iA + this.m_iC;
      } else {
        var u = Rot.mulVec2(qC, this.m_localAxisC);
        var rC = Rot.mulSub(qC, this.m_localAnchorC, this.m_lcC);
        var rA2 = Rot.mulSub(qA, this.m_localAnchorA, this.m_lcA);
        this.m_JvAC = u;
        this.m_JwC = Vec2.crossVec2Vec2(rC, u);
        this.m_JwA = Vec2.crossVec2Vec2(rA2, u);
        this.m_mass += this.m_mC + this.m_mA + this.m_iC * this.m_JwC * this.m_JwC + this.m_iA * this.m_JwA * this.m_JwA;
      }
      if (this.m_type2 == RevoluteJoint.TYPE) {
        this.m_JvBD = Vec2.zero();
        this.m_JwB = this.m_ratio;
        this.m_JwD = this.m_ratio;
        this.m_mass += this.m_ratio * this.m_ratio * (this.m_iB + this.m_iD);
      } else {
        var u = Rot.mulVec2(qD, this.m_localAxisD);
        var rD = Rot.mulSub(qD, this.m_localAnchorD, this.m_lcD);
        var rB2 = Rot.mulSub(qB, this.m_localAnchorB, this.m_lcB);
        this.m_JvBD = Vec2.mulNumVec2(this.m_ratio, u);
        this.m_JwD = this.m_ratio * Vec2.crossVec2Vec2(rD, u);
        this.m_JwB = this.m_ratio * Vec2.crossVec2Vec2(rB2, u);
        this.m_mass += this.m_ratio * this.m_ratio * (this.m_mD + this.m_mB) + this.m_iD * this.m_JwD * this.m_JwD + this.m_iB * this.m_JwB * this.m_JwB;
      }
      this.m_mass = this.m_mass > 0 ? 1 / this.m_mass : 0;
      if (step.warmStarting) {
        vA2.addMul(this.m_mA * this.m_impulse, this.m_JvAC);
        wA += this.m_iA * this.m_impulse * this.m_JwA;
        vB2.addMul(this.m_mB * this.m_impulse, this.m_JvBD);
        wB += this.m_iB * this.m_impulse * this.m_JwB;
        vC.subMul(this.m_mC * this.m_impulse, this.m_JvAC);
        wC -= this.m_iC * this.m_impulse * this.m_JwC;
        vD.subMul(this.m_mD * this.m_impulse, this.m_JvBD);
        wD -= this.m_iD * this.m_impulse * this.m_JwD;
      } else {
        this.m_impulse = 0;
      }
      this.m_bodyA.c_velocity.v.setVec2(vA2);
      this.m_bodyA.c_velocity.w = wA;
      this.m_bodyB.c_velocity.v.setVec2(vB2);
      this.m_bodyB.c_velocity.w = wB;
      this.m_bodyC.c_velocity.v.setVec2(vC);
      this.m_bodyC.c_velocity.w = wC;
      this.m_bodyD.c_velocity.v.setVec2(vD);
      this.m_bodyD.c_velocity.w = wD;
    };
    GearJoint2.prototype.solveVelocityConstraints = function(step) {
      var vA2 = this.m_bodyA.c_velocity.v;
      var wA = this.m_bodyA.c_velocity.w;
      var vB2 = this.m_bodyB.c_velocity.v;
      var wB = this.m_bodyB.c_velocity.w;
      var vC = this.m_bodyC.c_velocity.v;
      var wC = this.m_bodyC.c_velocity.w;
      var vD = this.m_bodyD.c_velocity.v;
      var wD = this.m_bodyD.c_velocity.w;
      var Cdot = Vec2.dot(this.m_JvAC, vA2) - Vec2.dot(this.m_JvAC, vC) + Vec2.dot(this.m_JvBD, vB2) - Vec2.dot(this.m_JvBD, vD);
      Cdot += this.m_JwA * wA - this.m_JwC * wC + (this.m_JwB * wB - this.m_JwD * wD);
      var impulse = -this.m_mass * Cdot;
      this.m_impulse += impulse;
      vA2.addMul(this.m_mA * impulse, this.m_JvAC);
      wA += this.m_iA * impulse * this.m_JwA;
      vB2.addMul(this.m_mB * impulse, this.m_JvBD);
      wB += this.m_iB * impulse * this.m_JwB;
      vC.subMul(this.m_mC * impulse, this.m_JvAC);
      wC -= this.m_iC * impulse * this.m_JwC;
      vD.subMul(this.m_mD * impulse, this.m_JvBD);
      wD -= this.m_iD * impulse * this.m_JwD;
      this.m_bodyA.c_velocity.v.setVec2(vA2);
      this.m_bodyA.c_velocity.w = wA;
      this.m_bodyB.c_velocity.v.setVec2(vB2);
      this.m_bodyB.c_velocity.w = wB;
      this.m_bodyC.c_velocity.v.setVec2(vC);
      this.m_bodyC.c_velocity.w = wC;
      this.m_bodyD.c_velocity.v.setVec2(vD);
      this.m_bodyD.c_velocity.w = wD;
    };
    GearJoint2.prototype.solvePositionConstraints = function(step) {
      var cA2 = this.m_bodyA.c_position.c;
      var aA = this.m_bodyA.c_position.a;
      var cB2 = this.m_bodyB.c_position.c;
      var aB = this.m_bodyB.c_position.a;
      var cC = this.m_bodyC.c_position.c;
      var aC = this.m_bodyC.c_position.a;
      var cD = this.m_bodyD.c_position.c;
      var aD = this.m_bodyD.c_position.a;
      var qA = Rot.neo(aA);
      var qB = Rot.neo(aB);
      var qC = Rot.neo(aC);
      var qD = Rot.neo(aD);
      var linearError = 0;
      var coordinateA;
      var coordinateB;
      var JvAC;
      var JvBD;
      var JwA;
      var JwB;
      var JwC;
      var JwD;
      var mass = 0;
      if (this.m_type1 == RevoluteJoint.TYPE) {
        JvAC = Vec2.zero();
        JwA = 1;
        JwC = 1;
        mass += this.m_iA + this.m_iC;
        coordinateA = aA - aC - this.m_referenceAngleA;
      } else {
        var u = Rot.mulVec2(qC, this.m_localAxisC);
        var rC = Rot.mulSub(qC, this.m_localAnchorC, this.m_lcC);
        var rA2 = Rot.mulSub(qA, this.m_localAnchorA, this.m_lcA);
        JvAC = u;
        JwC = Vec2.crossVec2Vec2(rC, u);
        JwA = Vec2.crossVec2Vec2(rA2, u);
        mass += this.m_mC + this.m_mA + this.m_iC * JwC * JwC + this.m_iA * JwA * JwA;
        var pC = Vec2.sub(this.m_localAnchorC, this.m_lcC);
        var pA2 = Rot.mulTVec2(qC, Vec2.add(rA2, Vec2.sub(cA2, cC)));
        coordinateA = Vec2.dot(Vec2.sub(pA2, pC), this.m_localAxisC);
      }
      if (this.m_type2 == RevoluteJoint.TYPE) {
        JvBD = Vec2.zero();
        JwB = this.m_ratio;
        JwD = this.m_ratio;
        mass += this.m_ratio * this.m_ratio * (this.m_iB + this.m_iD);
        coordinateB = aB - aD - this.m_referenceAngleB;
      } else {
        var u = Rot.mulVec2(qD, this.m_localAxisD);
        var rD = Rot.mulSub(qD, this.m_localAnchorD, this.m_lcD);
        var rB2 = Rot.mulSub(qB, this.m_localAnchorB, this.m_lcB);
        JvBD = Vec2.mulNumVec2(this.m_ratio, u);
        JwD = this.m_ratio * Vec2.crossVec2Vec2(rD, u);
        JwB = this.m_ratio * Vec2.crossVec2Vec2(rB2, u);
        mass += this.m_ratio * this.m_ratio * (this.m_mD + this.m_mB) + this.m_iD * JwD * JwD + this.m_iB * JwB * JwB;
        var pD = Vec2.sub(this.m_localAnchorD, this.m_lcD);
        var pB2 = Rot.mulTVec2(qD, Vec2.add(rB2, Vec2.sub(cB2, cD)));
        coordinateB = Vec2.dot(pB2, this.m_localAxisD) - Vec2.dot(pD, this.m_localAxisD);
      }
      var C = coordinateA + this.m_ratio * coordinateB - this.m_constant;
      var impulse = 0;
      if (mass > 0) {
        impulse = -C / mass;
      }
      cA2.addMul(this.m_mA * impulse, JvAC);
      aA += this.m_iA * impulse * JwA;
      cB2.addMul(this.m_mB * impulse, JvBD);
      aB += this.m_iB * impulse * JwB;
      cC.subMul(this.m_mC * impulse, JvAC);
      aC -= this.m_iC * impulse * JwC;
      cD.subMul(this.m_mD * impulse, JvBD);
      aD -= this.m_iD * impulse * JwD;
      this.m_bodyA.c_position.c.setVec2(cA2);
      this.m_bodyA.c_position.a = aA;
      this.m_bodyB.c_position.c.setVec2(cB2);
      this.m_bodyB.c_position.a = aB;
      this.m_bodyC.c_position.c.setVec2(cC);
      this.m_bodyC.c_position.a = aC;
      this.m_bodyD.c_position.c.setVec2(cD);
      this.m_bodyD.c_position.a = aD;
      return linearError < SettingsInternal.linearSlop;
    };
    GearJoint2.TYPE = "gear-joint";
    return GearJoint2;
  }(Joint);
  var DEFAULTS$5 = {
    maxForce: 1,
    maxTorque: 1,
    correctionFactor: 0.3
  };
  var MotorJoint = function(_super) {
    __extends(MotorJoint2, _super);
    function MotorJoint2(def, bodyA, bodyB) {
      var _this = this;
      if (!(_this instanceof MotorJoint2)) {
        return new MotorJoint2(def, bodyA, bodyB);
      }
      def = options(def, DEFAULTS$5);
      _this = _super.call(this, def, bodyA, bodyB) || this;
      bodyA = _this.m_bodyA;
      bodyB = _this.m_bodyB;
      _this.m_type = MotorJoint2.TYPE;
      _this.m_linearOffset = Number.isFinite(def.linearOffset) ? Vec2.clone(def.linearOffset) : bodyA.getLocalPoint(bodyB.getPosition());
      _this.m_angularOffset = Number.isFinite(def.angularOffset) ? def.angularOffset : bodyB.getAngle() - bodyA.getAngle();
      _this.m_linearImpulse = Vec2.zero();
      _this.m_angularImpulse = 0;
      _this.m_maxForce = def.maxForce;
      _this.m_maxTorque = def.maxTorque;
      _this.m_correctionFactor = def.correctionFactor;
      return _this;
    }
    __name(MotorJoint2, "MotorJoint");
    MotorJoint2.prototype._serialize = function() {
      return {
        type: this.m_type,
        bodyA: this.m_bodyA,
        bodyB: this.m_bodyB,
        collideConnected: this.m_collideConnected,
        maxForce: this.m_maxForce,
        maxTorque: this.m_maxTorque,
        correctionFactor: this.m_correctionFactor,
        linearOffset: this.m_linearOffset,
        angularOffset: this.m_angularOffset
      };
    };
    MotorJoint2._deserialize = function(data, world2, restore) {
      data = __assign({}, data);
      data.bodyA = restore(Body, data.bodyA, world2);
      data.bodyB = restore(Body, data.bodyB, world2);
      var joint = new MotorJoint2(data);
      return joint;
    };
    MotorJoint2.prototype._setAnchors = function(def) {
    };
    MotorJoint2.prototype.setMaxForce = function(force) {
      this.m_maxForce = force;
    };
    MotorJoint2.prototype.getMaxForce = function() {
      return this.m_maxForce;
    };
    MotorJoint2.prototype.setMaxTorque = function(torque) {
      this.m_maxTorque = torque;
    };
    MotorJoint2.prototype.getMaxTorque = function() {
      return this.m_maxTorque;
    };
    MotorJoint2.prototype.setCorrectionFactor = function(factor) {
      this.m_correctionFactor = factor;
    };
    MotorJoint2.prototype.getCorrectionFactor = function() {
      return this.m_correctionFactor;
    };
    MotorJoint2.prototype.setLinearOffset = function(linearOffset) {
      if (linearOffset.x != this.m_linearOffset.x || linearOffset.y != this.m_linearOffset.y) {
        this.m_bodyA.setAwake(true);
        this.m_bodyB.setAwake(true);
        this.m_linearOffset.set(linearOffset);
      }
    };
    MotorJoint2.prototype.getLinearOffset = function() {
      return this.m_linearOffset;
    };
    MotorJoint2.prototype.setAngularOffset = function(angularOffset) {
      if (angularOffset != this.m_angularOffset) {
        this.m_bodyA.setAwake(true);
        this.m_bodyB.setAwake(true);
        this.m_angularOffset = angularOffset;
      }
    };
    MotorJoint2.prototype.getAngularOffset = function() {
      return this.m_angularOffset;
    };
    MotorJoint2.prototype.getAnchorA = function() {
      return this.m_bodyA.getPosition();
    };
    MotorJoint2.prototype.getAnchorB = function() {
      return this.m_bodyB.getPosition();
    };
    MotorJoint2.prototype.getReactionForce = function(inv_dt) {
      return Vec2.mulNumVec2(inv_dt, this.m_linearImpulse);
    };
    MotorJoint2.prototype.getReactionTorque = function(inv_dt) {
      return inv_dt * this.m_angularImpulse;
    };
    MotorJoint2.prototype.initVelocityConstraints = function(step) {
      this.m_localCenterA = this.m_bodyA.m_sweep.localCenter;
      this.m_localCenterB = this.m_bodyB.m_sweep.localCenter;
      this.m_invMassA = this.m_bodyA.m_invMass;
      this.m_invMassB = this.m_bodyB.m_invMass;
      this.m_invIA = this.m_bodyA.m_invI;
      this.m_invIB = this.m_bodyB.m_invI;
      var cA2 = this.m_bodyA.c_position.c;
      var aA = this.m_bodyA.c_position.a;
      var vA2 = this.m_bodyA.c_velocity.v;
      var wA = this.m_bodyA.c_velocity.w;
      var cB2 = this.m_bodyB.c_position.c;
      var aB = this.m_bodyB.c_position.a;
      var vB2 = this.m_bodyB.c_velocity.v;
      var wB = this.m_bodyB.c_velocity.w;
      var qA = Rot.neo(aA);
      var qB = Rot.neo(aB);
      this.m_rA = Rot.mulVec2(qA, Vec2.sub(this.m_linearOffset, this.m_localCenterA));
      this.m_rB = Rot.mulVec2(qB, Vec2.neg(this.m_localCenterB));
      var mA = this.m_invMassA;
      var mB = this.m_invMassB;
      var iA = this.m_invIA;
      var iB = this.m_invIB;
      var K = new Mat22();
      K.ex.x = mA + mB + iA * this.m_rA.y * this.m_rA.y + iB * this.m_rB.y * this.m_rB.y;
      K.ex.y = -iA * this.m_rA.x * this.m_rA.y - iB * this.m_rB.x * this.m_rB.y;
      K.ey.x = K.ex.y;
      K.ey.y = mA + mB + iA * this.m_rA.x * this.m_rA.x + iB * this.m_rB.x * this.m_rB.x;
      this.m_linearMass = K.getInverse();
      this.m_angularMass = iA + iB;
      if (this.m_angularMass > 0) {
        this.m_angularMass = 1 / this.m_angularMass;
      }
      this.m_linearError = Vec2.zero();
      this.m_linearError.addCombine(1, cB2, 1, this.m_rB);
      this.m_linearError.subCombine(1, cA2, 1, this.m_rA);
      this.m_angularError = aB - aA - this.m_angularOffset;
      if (step.warmStarting) {
        this.m_linearImpulse.mul(step.dtRatio);
        this.m_angularImpulse *= step.dtRatio;
        var P3 = Vec2.neo(this.m_linearImpulse.x, this.m_linearImpulse.y);
        vA2.subMul(mA, P3);
        wA -= iA * (Vec2.crossVec2Vec2(this.m_rA, P3) + this.m_angularImpulse);
        vB2.addMul(mB, P3);
        wB += iB * (Vec2.crossVec2Vec2(this.m_rB, P3) + this.m_angularImpulse);
      } else {
        this.m_linearImpulse.setZero();
        this.m_angularImpulse = 0;
      }
      this.m_bodyA.c_velocity.v = vA2;
      this.m_bodyA.c_velocity.w = wA;
      this.m_bodyB.c_velocity.v = vB2;
      this.m_bodyB.c_velocity.w = wB;
    };
    MotorJoint2.prototype.solveVelocityConstraints = function(step) {
      var vA2 = this.m_bodyA.c_velocity.v;
      var wA = this.m_bodyA.c_velocity.w;
      var vB2 = this.m_bodyB.c_velocity.v;
      var wB = this.m_bodyB.c_velocity.w;
      var mA = this.m_invMassA;
      var mB = this.m_invMassB;
      var iA = this.m_invIA;
      var iB = this.m_invIB;
      var h = step.dt;
      var inv_h = step.inv_dt;
      {
        var Cdot = wB - wA + inv_h * this.m_correctionFactor * this.m_angularError;
        var impulse = -this.m_angularMass * Cdot;
        var oldImpulse = this.m_angularImpulse;
        var maxImpulse = h * this.m_maxTorque;
        this.m_angularImpulse = clamp(this.m_angularImpulse + impulse, -maxImpulse, maxImpulse);
        impulse = this.m_angularImpulse - oldImpulse;
        wA -= iA * impulse;
        wB += iB * impulse;
      }
      {
        var Cdot = Vec2.zero();
        Cdot.addCombine(1, vB2, 1, Vec2.crossNumVec2(wB, this.m_rB));
        Cdot.subCombine(1, vA2, 1, Vec2.crossNumVec2(wA, this.m_rA));
        Cdot.addMul(inv_h * this.m_correctionFactor, this.m_linearError);
        var impulse = Vec2.neg(Mat22.mulVec2(this.m_linearMass, Cdot));
        var oldImpulse = Vec2.clone(this.m_linearImpulse);
        this.m_linearImpulse.add(impulse);
        var maxImpulse = h * this.m_maxForce;
        this.m_linearImpulse.clamp(maxImpulse);
        impulse = Vec2.sub(this.m_linearImpulse, oldImpulse);
        vA2.subMul(mA, impulse);
        wA -= iA * Vec2.crossVec2Vec2(this.m_rA, impulse);
        vB2.addMul(mB, impulse);
        wB += iB * Vec2.crossVec2Vec2(this.m_rB, impulse);
      }
      this.m_bodyA.c_velocity.v = vA2;
      this.m_bodyA.c_velocity.w = wA;
      this.m_bodyB.c_velocity.v = vB2;
      this.m_bodyB.c_velocity.w = wB;
    };
    MotorJoint2.prototype.solvePositionConstraints = function(step) {
      return true;
    };
    MotorJoint2.TYPE = "motor-joint";
    return MotorJoint2;
  }(Joint);
  var math_PI$2 = Math.PI;
  var DEFAULTS$4 = {
    maxForce: 0,
    frequencyHz: 5,
    dampingRatio: 0.7
  };
  var MouseJoint = function(_super) {
    __extends(MouseJoint2, _super);
    function MouseJoint2(def, bodyA, bodyB, target) {
      var _this = this;
      if (!(_this instanceof MouseJoint2)) {
        return new MouseJoint2(def, bodyA, bodyB, target);
      }
      def = options(def, DEFAULTS$4);
      _this = _super.call(this, def, bodyA, bodyB) || this;
      bodyA = _this.m_bodyA;
      bodyB = _this.m_bodyB;
      _this.m_type = MouseJoint2.TYPE;
      if (Vec2.isValid(target)) {
        _this.m_targetA = Vec2.clone(target);
      } else if (Vec2.isValid(def.target)) {
        _this.m_targetA = Vec2.clone(def.target);
      } else {
        _this.m_targetA = Vec2.zero();
      }
      _this.m_localAnchorB = Transform.mulTVec2(bodyB.getTransform(), _this.m_targetA);
      _this.m_maxForce = def.maxForce;
      _this.m_impulse = Vec2.zero();
      _this.m_frequencyHz = def.frequencyHz;
      _this.m_dampingRatio = def.dampingRatio;
      _this.m_beta = 0;
      _this.m_gamma = 0;
      _this.m_rB = Vec2.zero();
      _this.m_localCenterB = Vec2.zero();
      _this.m_invMassB = 0;
      _this.m_invIB = 0;
      _this.m_mass = new Mat22();
      _this.m_C = Vec2.zero();
      return _this;
    }
    __name(MouseJoint2, "MouseJoint");
    MouseJoint2.prototype._serialize = function() {
      return {
        type: this.m_type,
        bodyA: this.m_bodyA,
        bodyB: this.m_bodyB,
        collideConnected: this.m_collideConnected,
        target: this.m_targetA,
        maxForce: this.m_maxForce,
        frequencyHz: this.m_frequencyHz,
        dampingRatio: this.m_dampingRatio,
        _localAnchorB: this.m_localAnchorB
      };
    };
    MouseJoint2._deserialize = function(data, world2, restore) {
      data = __assign({}, data);
      data.bodyA = restore(Body, data.bodyA, world2);
      data.bodyB = restore(Body, data.bodyB, world2);
      data.target = Vec2.clone(data.target);
      var joint = new MouseJoint2(data);
      if (data._localAnchorB) {
        joint.m_localAnchorB = data._localAnchorB;
      }
      return joint;
    };
    MouseJoint2.prototype.setTarget = function(target) {
      if (Vec2.areEqual(target, this.m_targetA))
        return;
      this.m_bodyB.setAwake(true);
      this.m_targetA.set(target);
    };
    MouseJoint2.prototype.getTarget = function() {
      return this.m_targetA;
    };
    MouseJoint2.prototype.setMaxForce = function(force) {
      this.m_maxForce = force;
    };
    MouseJoint2.prototype.getMaxForce = function() {
      return this.m_maxForce;
    };
    MouseJoint2.prototype.setFrequency = function(hz) {
      this.m_frequencyHz = hz;
    };
    MouseJoint2.prototype.getFrequency = function() {
      return this.m_frequencyHz;
    };
    MouseJoint2.prototype.setDampingRatio = function(ratio) {
      this.m_dampingRatio = ratio;
    };
    MouseJoint2.prototype.getDampingRatio = function() {
      return this.m_dampingRatio;
    };
    MouseJoint2.prototype.getAnchorA = function() {
      return Vec2.clone(this.m_targetA);
    };
    MouseJoint2.prototype.getAnchorB = function() {
      return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
    };
    MouseJoint2.prototype.getReactionForce = function(inv_dt) {
      return Vec2.mulNumVec2(inv_dt, this.m_impulse);
    };
    MouseJoint2.prototype.getReactionTorque = function(inv_dt) {
      return inv_dt * 0;
    };
    MouseJoint2.prototype.shiftOrigin = function(newOrigin) {
      this.m_targetA.sub(newOrigin);
    };
    MouseJoint2.prototype.initVelocityConstraints = function(step) {
      this.m_localCenterB = this.m_bodyB.m_sweep.localCenter;
      this.m_invMassB = this.m_bodyB.m_invMass;
      this.m_invIB = this.m_bodyB.m_invI;
      var position = this.m_bodyB.c_position;
      var velocity = this.m_bodyB.c_velocity;
      var cB2 = position.c;
      var aB = position.a;
      var vB2 = velocity.v;
      var wB = velocity.w;
      var qB = Rot.neo(aB);
      var mass = this.m_bodyB.getMass();
      var omega = 2 * math_PI$2 * this.m_frequencyHz;
      var d2 = 2 * mass * this.m_dampingRatio * omega;
      var k = mass * (omega * omega);
      var h = step.dt;
      this.m_gamma = h * (d2 + h * k);
      if (this.m_gamma != 0) {
        this.m_gamma = 1 / this.m_gamma;
      }
      this.m_beta = h * k * this.m_gamma;
      this.m_rB = Rot.mulVec2(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));
      var K = new Mat22();
      K.ex.x = this.m_invMassB + this.m_invIB * this.m_rB.y * this.m_rB.y + this.m_gamma;
      K.ex.y = -this.m_invIB * this.m_rB.x * this.m_rB.y;
      K.ey.x = K.ex.y;
      K.ey.y = this.m_invMassB + this.m_invIB * this.m_rB.x * this.m_rB.x + this.m_gamma;
      this.m_mass = K.getInverse();
      this.m_C.setVec2(cB2);
      this.m_C.addCombine(1, this.m_rB, -1, this.m_targetA);
      this.m_C.mul(this.m_beta);
      wB *= 0.98;
      if (step.warmStarting) {
        this.m_impulse.mul(step.dtRatio);
        vB2.addMul(this.m_invMassB, this.m_impulse);
        wB += this.m_invIB * Vec2.crossVec2Vec2(this.m_rB, this.m_impulse);
      } else {
        this.m_impulse.setZero();
      }
      velocity.v.setVec2(vB2);
      velocity.w = wB;
    };
    MouseJoint2.prototype.solveVelocityConstraints = function(step) {
      var velocity = this.m_bodyB.c_velocity;
      var vB2 = Vec2.clone(velocity.v);
      var wB = velocity.w;
      var Cdot = Vec2.crossNumVec2(wB, this.m_rB);
      Cdot.add(vB2);
      Cdot.addCombine(1, this.m_C, this.m_gamma, this.m_impulse);
      Cdot.neg();
      var impulse = Mat22.mulVec2(this.m_mass, Cdot);
      var oldImpulse = Vec2.clone(this.m_impulse);
      this.m_impulse.add(impulse);
      var maxImpulse = step.dt * this.m_maxForce;
      this.m_impulse.clamp(maxImpulse);
      impulse = Vec2.sub(this.m_impulse, oldImpulse);
      vB2.addMul(this.m_invMassB, impulse);
      wB += this.m_invIB * Vec2.crossVec2Vec2(this.m_rB, impulse);
      velocity.v.setVec2(vB2);
      velocity.w = wB;
    };
    MouseJoint2.prototype.solvePositionConstraints = function(step) {
      return true;
    };
    MouseJoint2.TYPE = "mouse-joint";
    return MouseJoint2;
  }(Joint);
  var math_abs$2 = Math.abs;
  var DEFAULTS$3 = {
    collideConnected: true
  };
  var PulleyJoint = function(_super) {
    __extends(PulleyJoint2, _super);
    function PulleyJoint2(def, bodyA, bodyB, groundA, groundB, anchorA, anchorB, ratio) {
      var _this = this;
      if (!(_this instanceof PulleyJoint2)) {
        return new PulleyJoint2(def, bodyA, bodyB, groundA, groundB, anchorA, anchorB, ratio);
      }
      def = options(def, DEFAULTS$3);
      _this = _super.call(this, def, bodyA, bodyB) || this;
      bodyA = _this.m_bodyA;
      bodyB = _this.m_bodyB;
      _this.m_type = PulleyJoint2.TYPE;
      _this.m_groundAnchorA = Vec2.clone(groundA ? groundA : def.groundAnchorA || Vec2.neo(-1, 1));
      _this.m_groundAnchorB = Vec2.clone(groundB ? groundB : def.groundAnchorB || Vec2.neo(1, 1));
      _this.m_localAnchorA = Vec2.clone(anchorA ? bodyA.getLocalPoint(anchorA) : def.localAnchorA || Vec2.neo(-1, 0));
      _this.m_localAnchorB = Vec2.clone(anchorB ? bodyB.getLocalPoint(anchorB) : def.localAnchorB || Vec2.neo(1, 0));
      _this.m_lengthA = Number.isFinite(def.lengthA) ? def.lengthA : Vec2.distance(anchorA, groundA);
      _this.m_lengthB = Number.isFinite(def.lengthB) ? def.lengthB : Vec2.distance(anchorB, groundB);
      _this.m_ratio = Number.isFinite(ratio) ? ratio : def.ratio;
      _this.m_constant = _this.m_lengthA + _this.m_ratio * _this.m_lengthB;
      _this.m_impulse = 0;
      return _this;
    }
    __name(PulleyJoint2, "PulleyJoint");
    PulleyJoint2.prototype._serialize = function() {
      return {
        type: this.m_type,
        bodyA: this.m_bodyA,
        bodyB: this.m_bodyB,
        collideConnected: this.m_collideConnected,
        groundAnchorA: this.m_groundAnchorA,
        groundAnchorB: this.m_groundAnchorB,
        localAnchorA: this.m_localAnchorA,
        localAnchorB: this.m_localAnchorB,
        lengthA: this.m_lengthA,
        lengthB: this.m_lengthB,
        ratio: this.m_ratio
      };
    };
    PulleyJoint2._deserialize = function(data, world2, restore) {
      data = __assign({}, data);
      data.bodyA = restore(Body, data.bodyA, world2);
      data.bodyB = restore(Body, data.bodyB, world2);
      var joint = new PulleyJoint2(data);
      return joint;
    };
    PulleyJoint2.prototype.getGroundAnchorA = function() {
      return this.m_groundAnchorA;
    };
    PulleyJoint2.prototype.getGroundAnchorB = function() {
      return this.m_groundAnchorB;
    };
    PulleyJoint2.prototype.getLengthA = function() {
      return this.m_lengthA;
    };
    PulleyJoint2.prototype.getLengthB = function() {
      return this.m_lengthB;
    };
    PulleyJoint2.prototype.getRatio = function() {
      return this.m_ratio;
    };
    PulleyJoint2.prototype.getCurrentLengthA = function() {
      var p = this.m_bodyA.getWorldPoint(this.m_localAnchorA);
      var s2 = this.m_groundAnchorA;
      return Vec2.distance(p, s2);
    };
    PulleyJoint2.prototype.getCurrentLengthB = function() {
      var p = this.m_bodyB.getWorldPoint(this.m_localAnchorB);
      var s2 = this.m_groundAnchorB;
      return Vec2.distance(p, s2);
    };
    PulleyJoint2.prototype.shiftOrigin = function(newOrigin) {
      this.m_groundAnchorA.sub(newOrigin);
      this.m_groundAnchorB.sub(newOrigin);
    };
    PulleyJoint2.prototype.getAnchorA = function() {
      return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
    };
    PulleyJoint2.prototype.getAnchorB = function() {
      return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
    };
    PulleyJoint2.prototype.getReactionForce = function(inv_dt) {
      return Vec2.mulNumVec2(this.m_impulse, this.m_uB).mul(inv_dt);
    };
    PulleyJoint2.prototype.getReactionTorque = function(inv_dt) {
      return 0;
    };
    PulleyJoint2.prototype.initVelocityConstraints = function(step) {
      this.m_localCenterA = this.m_bodyA.m_sweep.localCenter;
      this.m_localCenterB = this.m_bodyB.m_sweep.localCenter;
      this.m_invMassA = this.m_bodyA.m_invMass;
      this.m_invMassB = this.m_bodyB.m_invMass;
      this.m_invIA = this.m_bodyA.m_invI;
      this.m_invIB = this.m_bodyB.m_invI;
      var cA2 = this.m_bodyA.c_position.c;
      var aA = this.m_bodyA.c_position.a;
      var vA2 = this.m_bodyA.c_velocity.v;
      var wA = this.m_bodyA.c_velocity.w;
      var cB2 = this.m_bodyB.c_position.c;
      var aB = this.m_bodyB.c_position.a;
      var vB2 = this.m_bodyB.c_velocity.v;
      var wB = this.m_bodyB.c_velocity.w;
      var qA = Rot.neo(aA);
      var qB = Rot.neo(aB);
      this.m_rA = Rot.mulVec2(qA, Vec2.sub(this.m_localAnchorA, this.m_localCenterA));
      this.m_rB = Rot.mulVec2(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));
      this.m_uA = Vec2.sub(Vec2.add(cA2, this.m_rA), this.m_groundAnchorA);
      this.m_uB = Vec2.sub(Vec2.add(cB2, this.m_rB), this.m_groundAnchorB);
      var lengthA = this.m_uA.length();
      var lengthB = this.m_uB.length();
      if (lengthA > 10 * SettingsInternal.linearSlop) {
        this.m_uA.mul(1 / lengthA);
      } else {
        this.m_uA.setZero();
      }
      if (lengthB > 10 * SettingsInternal.linearSlop) {
        this.m_uB.mul(1 / lengthB);
      } else {
        this.m_uB.setZero();
      }
      var ruA = Vec2.crossVec2Vec2(this.m_rA, this.m_uA);
      var ruB = Vec2.crossVec2Vec2(this.m_rB, this.m_uB);
      var mA = this.m_invMassA + this.m_invIA * ruA * ruA;
      var mB = this.m_invMassB + this.m_invIB * ruB * ruB;
      this.m_mass = mA + this.m_ratio * this.m_ratio * mB;
      if (this.m_mass > 0) {
        this.m_mass = 1 / this.m_mass;
      }
      if (step.warmStarting) {
        this.m_impulse *= step.dtRatio;
        var PA = Vec2.mulNumVec2(-this.m_impulse, this.m_uA);
        var PB = Vec2.mulNumVec2(-this.m_ratio * this.m_impulse, this.m_uB);
        vA2.addMul(this.m_invMassA, PA);
        wA += this.m_invIA * Vec2.crossVec2Vec2(this.m_rA, PA);
        vB2.addMul(this.m_invMassB, PB);
        wB += this.m_invIB * Vec2.crossVec2Vec2(this.m_rB, PB);
      } else {
        this.m_impulse = 0;
      }
      this.m_bodyA.c_velocity.v = vA2;
      this.m_bodyA.c_velocity.w = wA;
      this.m_bodyB.c_velocity.v = vB2;
      this.m_bodyB.c_velocity.w = wB;
    };
    PulleyJoint2.prototype.solveVelocityConstraints = function(step) {
      var vA2 = this.m_bodyA.c_velocity.v;
      var wA = this.m_bodyA.c_velocity.w;
      var vB2 = this.m_bodyB.c_velocity.v;
      var wB = this.m_bodyB.c_velocity.w;
      var vpA = Vec2.add(vA2, Vec2.crossNumVec2(wA, this.m_rA));
      var vpB = Vec2.add(vB2, Vec2.crossNumVec2(wB, this.m_rB));
      var Cdot = -Vec2.dot(this.m_uA, vpA) - this.m_ratio * Vec2.dot(this.m_uB, vpB);
      var impulse = -this.m_mass * Cdot;
      this.m_impulse += impulse;
      var PA = Vec2.mulNumVec2(-impulse, this.m_uA);
      var PB = Vec2.mulNumVec2(-this.m_ratio * impulse, this.m_uB);
      vA2.addMul(this.m_invMassA, PA);
      wA += this.m_invIA * Vec2.crossVec2Vec2(this.m_rA, PA);
      vB2.addMul(this.m_invMassB, PB);
      wB += this.m_invIB * Vec2.crossVec2Vec2(this.m_rB, PB);
      this.m_bodyA.c_velocity.v = vA2;
      this.m_bodyA.c_velocity.w = wA;
      this.m_bodyB.c_velocity.v = vB2;
      this.m_bodyB.c_velocity.w = wB;
    };
    PulleyJoint2.prototype.solvePositionConstraints = function(step) {
      var cA2 = this.m_bodyA.c_position.c;
      var aA = this.m_bodyA.c_position.a;
      var cB2 = this.m_bodyB.c_position.c;
      var aB = this.m_bodyB.c_position.a;
      var qA = Rot.neo(aA);
      var qB = Rot.neo(aB);
      var rA2 = Rot.mulVec2(qA, Vec2.sub(this.m_localAnchorA, this.m_localCenterA));
      var rB2 = Rot.mulVec2(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));
      var uA = Vec2.sub(Vec2.add(cA2, this.m_rA), this.m_groundAnchorA);
      var uB = Vec2.sub(Vec2.add(cB2, this.m_rB), this.m_groundAnchorB);
      var lengthA = uA.length();
      var lengthB = uB.length();
      if (lengthA > 10 * SettingsInternal.linearSlop) {
        uA.mul(1 / lengthA);
      } else {
        uA.setZero();
      }
      if (lengthB > 10 * SettingsInternal.linearSlop) {
        uB.mul(1 / lengthB);
      } else {
        uB.setZero();
      }
      var ruA = Vec2.crossVec2Vec2(rA2, uA);
      var ruB = Vec2.crossVec2Vec2(rB2, uB);
      var mA = this.m_invMassA + this.m_invIA * ruA * ruA;
      var mB = this.m_invMassB + this.m_invIB * ruB * ruB;
      var mass = mA + this.m_ratio * this.m_ratio * mB;
      if (mass > 0) {
        mass = 1 / mass;
      }
      var C = this.m_constant - lengthA - this.m_ratio * lengthB;
      var linearError = math_abs$2(C);
      var impulse = -mass * C;
      var PA = Vec2.mulNumVec2(-impulse, uA);
      var PB = Vec2.mulNumVec2(-this.m_ratio * impulse, uB);
      cA2.addMul(this.m_invMassA, PA);
      aA += this.m_invIA * Vec2.crossVec2Vec2(rA2, PA);
      cB2.addMul(this.m_invMassB, PB);
      aB += this.m_invIB * Vec2.crossVec2Vec2(rB2, PB);
      this.m_bodyA.c_position.c = cA2;
      this.m_bodyA.c_position.a = aA;
      this.m_bodyB.c_position.c = cB2;
      this.m_bodyB.c_position.a = aB;
      return linearError < SettingsInternal.linearSlop;
    };
    PulleyJoint2.TYPE = "pulley-joint";
    return PulleyJoint2;
  }(Joint);
  var math_min$1 = Math.min;
  var LimitState;
  (function(LimitState2) {
    LimitState2[LimitState2["inactiveLimit"] = 0] = "inactiveLimit";
    LimitState2[LimitState2["atLowerLimit"] = 1] = "atLowerLimit";
    LimitState2[LimitState2["atUpperLimit"] = 2] = "atUpperLimit";
    LimitState2[LimitState2["equalLimits"] = 3] = "equalLimits";
  })(LimitState || (LimitState = {}));
  var DEFAULTS$2 = {
    maxLength: 0
  };
  var RopeJoint = function(_super) {
    __extends(RopeJoint2, _super);
    function RopeJoint2(def, bodyA, bodyB, anchor2) {
      var _this = this;
      if (!(_this instanceof RopeJoint2)) {
        return new RopeJoint2(def, bodyA, bodyB, anchor2);
      }
      def = options(def, DEFAULTS$2);
      _this = _super.call(this, def, bodyA, bodyB) || this;
      bodyA = _this.m_bodyA;
      bodyB = _this.m_bodyB;
      _this.m_type = RopeJoint2.TYPE;
      _this.m_localAnchorA = Vec2.clone(anchor2 ? bodyA.getLocalPoint(anchor2) : def.localAnchorA || Vec2.neo(-1, 0));
      _this.m_localAnchorB = Vec2.clone(anchor2 ? bodyB.getLocalPoint(anchor2) : def.localAnchorB || Vec2.neo(1, 0));
      _this.m_maxLength = def.maxLength;
      _this.m_mass = 0;
      _this.m_impulse = 0;
      _this.m_length = 0;
      _this.m_state = LimitState.inactiveLimit;
      return _this;
    }
    __name(RopeJoint2, "RopeJoint");
    RopeJoint2.prototype._serialize = function() {
      return {
        type: this.m_type,
        bodyA: this.m_bodyA,
        bodyB: this.m_bodyB,
        collideConnected: this.m_collideConnected,
        localAnchorA: this.m_localAnchorA,
        localAnchorB: this.m_localAnchorB,
        maxLength: this.m_maxLength
      };
    };
    RopeJoint2._deserialize = function(data, world2, restore) {
      data = __assign({}, data);
      data.bodyA = restore(Body, data.bodyA, world2);
      data.bodyB = restore(Body, data.bodyB, world2);
      var joint = new RopeJoint2(data);
      return joint;
    };
    RopeJoint2.prototype.getLocalAnchorA = function() {
      return this.m_localAnchorA;
    };
    RopeJoint2.prototype.getLocalAnchorB = function() {
      return this.m_localAnchorB;
    };
    RopeJoint2.prototype.setMaxLength = function(length) {
      this.m_maxLength = length;
    };
    RopeJoint2.prototype.getMaxLength = function() {
      return this.m_maxLength;
    };
    RopeJoint2.prototype.getLimitState = function() {
      return this.m_state;
    };
    RopeJoint2.prototype.getAnchorA = function() {
      return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
    };
    RopeJoint2.prototype.getAnchorB = function() {
      return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
    };
    RopeJoint2.prototype.getReactionForce = function(inv_dt) {
      return Vec2.mulNumVec2(this.m_impulse, this.m_u).mul(inv_dt);
    };
    RopeJoint2.prototype.getReactionTorque = function(inv_dt) {
      return 0;
    };
    RopeJoint2.prototype.initVelocityConstraints = function(step) {
      this.m_localCenterA = this.m_bodyA.m_sweep.localCenter;
      this.m_localCenterB = this.m_bodyB.m_sweep.localCenter;
      this.m_invMassA = this.m_bodyA.m_invMass;
      this.m_invMassB = this.m_bodyB.m_invMass;
      this.m_invIA = this.m_bodyA.m_invI;
      this.m_invIB = this.m_bodyB.m_invI;
      var cA2 = this.m_bodyA.c_position.c;
      var aA = this.m_bodyA.c_position.a;
      var vA2 = this.m_bodyA.c_velocity.v;
      var wA = this.m_bodyA.c_velocity.w;
      var cB2 = this.m_bodyB.c_position.c;
      var aB = this.m_bodyB.c_position.a;
      var vB2 = this.m_bodyB.c_velocity.v;
      var wB = this.m_bodyB.c_velocity.w;
      var qA = Rot.neo(aA);
      var qB = Rot.neo(aB);
      this.m_rA = Rot.mulSub(qA, this.m_localAnchorA, this.m_localCenterA);
      this.m_rB = Rot.mulSub(qB, this.m_localAnchorB, this.m_localCenterB);
      this.m_u = Vec2.zero();
      this.m_u.addCombine(1, cB2, 1, this.m_rB);
      this.m_u.subCombine(1, cA2, 1, this.m_rA);
      this.m_length = this.m_u.length();
      var C = this.m_length - this.m_maxLength;
      if (C > 0) {
        this.m_state = LimitState.atUpperLimit;
      } else {
        this.m_state = LimitState.inactiveLimit;
      }
      if (this.m_length > SettingsInternal.linearSlop) {
        this.m_u.mul(1 / this.m_length);
      } else {
        this.m_u.setZero();
        this.m_mass = 0;
        this.m_impulse = 0;
        return;
      }
      var crA = Vec2.crossVec2Vec2(this.m_rA, this.m_u);
      var crB = Vec2.crossVec2Vec2(this.m_rB, this.m_u);
      var invMass = this.m_invMassA + this.m_invIA * crA * crA + this.m_invMassB + this.m_invIB * crB * crB;
      this.m_mass = invMass != 0 ? 1 / invMass : 0;
      if (step.warmStarting) {
        this.m_impulse *= step.dtRatio;
        var P3 = Vec2.mulNumVec2(this.m_impulse, this.m_u);
        vA2.subMul(this.m_invMassA, P3);
        wA -= this.m_invIA * Vec2.crossVec2Vec2(this.m_rA, P3);
        vB2.addMul(this.m_invMassB, P3);
        wB += this.m_invIB * Vec2.crossVec2Vec2(this.m_rB, P3);
      } else {
        this.m_impulse = 0;
      }
      this.m_bodyA.c_velocity.v.setVec2(vA2);
      this.m_bodyA.c_velocity.w = wA;
      this.m_bodyB.c_velocity.v.setVec2(vB2);
      this.m_bodyB.c_velocity.w = wB;
    };
    RopeJoint2.prototype.solveVelocityConstraints = function(step) {
      var vA2 = this.m_bodyA.c_velocity.v;
      var wA = this.m_bodyA.c_velocity.w;
      var vB2 = this.m_bodyB.c_velocity.v;
      var wB = this.m_bodyB.c_velocity.w;
      var vpA = Vec2.addCrossNumVec2(vA2, wA, this.m_rA);
      var vpB = Vec2.addCrossNumVec2(vB2, wB, this.m_rB);
      var C = this.m_length - this.m_maxLength;
      var Cdot = Vec2.dot(this.m_u, Vec2.sub(vpB, vpA));
      if (C < 0) {
        Cdot += step.inv_dt * C;
      }
      var impulse = -this.m_mass * Cdot;
      var oldImpulse = this.m_impulse;
      this.m_impulse = math_min$1(0, this.m_impulse + impulse);
      impulse = this.m_impulse - oldImpulse;
      var P3 = Vec2.mulNumVec2(impulse, this.m_u);
      vA2.subMul(this.m_invMassA, P3);
      wA -= this.m_invIA * Vec2.crossVec2Vec2(this.m_rA, P3);
      vB2.addMul(this.m_invMassB, P3);
      wB += this.m_invIB * Vec2.crossVec2Vec2(this.m_rB, P3);
      this.m_bodyA.c_velocity.v = vA2;
      this.m_bodyA.c_velocity.w = wA;
      this.m_bodyB.c_velocity.v = vB2;
      this.m_bodyB.c_velocity.w = wB;
    };
    RopeJoint2.prototype.solvePositionConstraints = function(step) {
      var cA2 = this.m_bodyA.c_position.c;
      var aA = this.m_bodyA.c_position.a;
      var cB2 = this.m_bodyB.c_position.c;
      var aB = this.m_bodyB.c_position.a;
      var qA = Rot.neo(aA);
      var qB = Rot.neo(aB);
      var rA2 = Rot.mulSub(qA, this.m_localAnchorA, this.m_localCenterA);
      var rB2 = Rot.mulSub(qB, this.m_localAnchorB, this.m_localCenterB);
      var u = Vec2.zero();
      u.addCombine(1, cB2, 1, rB2);
      u.subCombine(1, cA2, 1, rA2);
      var length = u.normalize();
      var C = length - this.m_maxLength;
      C = clamp(C, 0, SettingsInternal.maxLinearCorrection);
      var impulse = -this.m_mass * C;
      var P3 = Vec2.mulNumVec2(impulse, u);
      cA2.subMul(this.m_invMassA, P3);
      aA -= this.m_invIA * Vec2.crossVec2Vec2(rA2, P3);
      cB2.addMul(this.m_invMassB, P3);
      aB += this.m_invIB * Vec2.crossVec2Vec2(rB2, P3);
      this.m_bodyA.c_position.c.setVec2(cA2);
      this.m_bodyA.c_position.a = aA;
      this.m_bodyB.c_position.c.setVec2(cB2);
      this.m_bodyB.c_position.a = aB;
      return length - this.m_maxLength < SettingsInternal.linearSlop;
    };
    RopeJoint2.TYPE = "rope-joint";
    return RopeJoint2;
  }(Joint);
  var math_abs$1 = Math.abs;
  var math_PI$1 = Math.PI;
  var DEFAULTS$1 = {
    frequencyHz: 0,
    dampingRatio: 0
  };
  var WeldJoint = function(_super) {
    __extends(WeldJoint2, _super);
    function WeldJoint2(def, bodyA, bodyB, anchor2) {
      var _this = this;
      if (!(_this instanceof WeldJoint2)) {
        return new WeldJoint2(def, bodyA, bodyB, anchor2);
      }
      def = options(def, DEFAULTS$1);
      _this = _super.call(this, def, bodyA, bodyB) || this;
      bodyA = _this.m_bodyA;
      bodyB = _this.m_bodyB;
      _this.m_type = WeldJoint2.TYPE;
      _this.m_localAnchorA = Vec2.clone(anchor2 ? bodyA.getLocalPoint(anchor2) : def.localAnchorA || Vec2.zero());
      _this.m_localAnchorB = Vec2.clone(anchor2 ? bodyB.getLocalPoint(anchor2) : def.localAnchorB || Vec2.zero());
      _this.m_referenceAngle = Number.isFinite(def.referenceAngle) ? def.referenceAngle : bodyB.getAngle() - bodyA.getAngle();
      _this.m_frequencyHz = def.frequencyHz;
      _this.m_dampingRatio = def.dampingRatio;
      _this.m_impulse = new Vec3();
      _this.m_bias = 0;
      _this.m_gamma = 0;
      _this.m_rA;
      _this.m_rB;
      _this.m_localCenterA;
      _this.m_localCenterB;
      _this.m_invMassA;
      _this.m_invMassB;
      _this.m_invIA;
      _this.m_invIB;
      _this.m_mass = new Mat33();
      return _this;
    }
    __name(WeldJoint2, "WeldJoint");
    WeldJoint2.prototype._serialize = function() {
      return {
        type: this.m_type,
        bodyA: this.m_bodyA,
        bodyB: this.m_bodyB,
        collideConnected: this.m_collideConnected,
        frequencyHz: this.m_frequencyHz,
        dampingRatio: this.m_dampingRatio,
        localAnchorA: this.m_localAnchorA,
        localAnchorB: this.m_localAnchorB,
        referenceAngle: this.m_referenceAngle
      };
    };
    WeldJoint2._deserialize = function(data, world2, restore) {
      data = __assign({}, data);
      data.bodyA = restore(Body, data.bodyA, world2);
      data.bodyB = restore(Body, data.bodyB, world2);
      var joint = new WeldJoint2(data);
      return joint;
    };
    WeldJoint2.prototype._setAnchors = function(def) {
      if (def.anchorA) {
        this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(def.anchorA));
      } else if (def.localAnchorA) {
        this.m_localAnchorA.setVec2(def.localAnchorA);
      }
      if (def.anchorB) {
        this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(def.anchorB));
      } else if (def.localAnchorB) {
        this.m_localAnchorB.setVec2(def.localAnchorB);
      }
    };
    WeldJoint2.prototype.getLocalAnchorA = function() {
      return this.m_localAnchorA;
    };
    WeldJoint2.prototype.getLocalAnchorB = function() {
      return this.m_localAnchorB;
    };
    WeldJoint2.prototype.getReferenceAngle = function() {
      return this.m_referenceAngle;
    };
    WeldJoint2.prototype.setFrequency = function(hz) {
      this.m_frequencyHz = hz;
    };
    WeldJoint2.prototype.getFrequency = function() {
      return this.m_frequencyHz;
    };
    WeldJoint2.prototype.setDampingRatio = function(ratio) {
      this.m_dampingRatio = ratio;
    };
    WeldJoint2.prototype.getDampingRatio = function() {
      return this.m_dampingRatio;
    };
    WeldJoint2.prototype.getAnchorA = function() {
      return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
    };
    WeldJoint2.prototype.getAnchorB = function() {
      return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
    };
    WeldJoint2.prototype.getReactionForce = function(inv_dt) {
      return Vec2.neo(this.m_impulse.x, this.m_impulse.y).mul(inv_dt);
    };
    WeldJoint2.prototype.getReactionTorque = function(inv_dt) {
      return inv_dt * this.m_impulse.z;
    };
    WeldJoint2.prototype.initVelocityConstraints = function(step) {
      this.m_localCenterA = this.m_bodyA.m_sweep.localCenter;
      this.m_localCenterB = this.m_bodyB.m_sweep.localCenter;
      this.m_invMassA = this.m_bodyA.m_invMass;
      this.m_invMassB = this.m_bodyB.m_invMass;
      this.m_invIA = this.m_bodyA.m_invI;
      this.m_invIB = this.m_bodyB.m_invI;
      var aA = this.m_bodyA.c_position.a;
      var vA2 = this.m_bodyA.c_velocity.v;
      var wA = this.m_bodyA.c_velocity.w;
      var aB = this.m_bodyB.c_position.a;
      var vB2 = this.m_bodyB.c_velocity.v;
      var wB = this.m_bodyB.c_velocity.w;
      var qA = Rot.neo(aA);
      var qB = Rot.neo(aB);
      this.m_rA = Rot.mulVec2(qA, Vec2.sub(this.m_localAnchorA, this.m_localCenterA));
      this.m_rB = Rot.mulVec2(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));
      var mA = this.m_invMassA;
      var mB = this.m_invMassB;
      var iA = this.m_invIA;
      var iB = this.m_invIB;
      var K = new Mat33();
      K.ex.x = mA + mB + this.m_rA.y * this.m_rA.y * iA + this.m_rB.y * this.m_rB.y * iB;
      K.ey.x = -this.m_rA.y * this.m_rA.x * iA - this.m_rB.y * this.m_rB.x * iB;
      K.ez.x = -this.m_rA.y * iA - this.m_rB.y * iB;
      K.ex.y = K.ey.x;
      K.ey.y = mA + mB + this.m_rA.x * this.m_rA.x * iA + this.m_rB.x * this.m_rB.x * iB;
      K.ez.y = this.m_rA.x * iA + this.m_rB.x * iB;
      K.ex.z = K.ez.x;
      K.ey.z = K.ez.y;
      K.ez.z = iA + iB;
      if (this.m_frequencyHz > 0) {
        K.getInverse22(this.m_mass);
        var invM = iA + iB;
        var m = invM > 0 ? 1 / invM : 0;
        var C = aB - aA - this.m_referenceAngle;
        var omega = 2 * math_PI$1 * this.m_frequencyHz;
        var d2 = 2 * m * this.m_dampingRatio * omega;
        var k = m * omega * omega;
        var h = step.dt;
        this.m_gamma = h * (d2 + h * k);
        this.m_gamma = this.m_gamma != 0 ? 1 / this.m_gamma : 0;
        this.m_bias = C * h * k * this.m_gamma;
        invM += this.m_gamma;
        this.m_mass.ez.z = invM != 0 ? 1 / invM : 0;
      } else if (K.ez.z == 0) {
        K.getInverse22(this.m_mass);
        this.m_gamma = 0;
        this.m_bias = 0;
      } else {
        K.getSymInverse33(this.m_mass);
        this.m_gamma = 0;
        this.m_bias = 0;
      }
      if (step.warmStarting) {
        this.m_impulse.mul(step.dtRatio);
        var P3 = Vec2.neo(this.m_impulse.x, this.m_impulse.y);
        vA2.subMul(mA, P3);
        wA -= iA * (Vec2.crossVec2Vec2(this.m_rA, P3) + this.m_impulse.z);
        vB2.addMul(mB, P3);
        wB += iB * (Vec2.crossVec2Vec2(this.m_rB, P3) + this.m_impulse.z);
      } else {
        this.m_impulse.setZero();
      }
      this.m_bodyA.c_velocity.v = vA2;
      this.m_bodyA.c_velocity.w = wA;
      this.m_bodyB.c_velocity.v = vB2;
      this.m_bodyB.c_velocity.w = wB;
    };
    WeldJoint2.prototype.solveVelocityConstraints = function(step) {
      var vA2 = this.m_bodyA.c_velocity.v;
      var wA = this.m_bodyA.c_velocity.w;
      var vB2 = this.m_bodyB.c_velocity.v;
      var wB = this.m_bodyB.c_velocity.w;
      var mA = this.m_invMassA;
      var mB = this.m_invMassB;
      var iA = this.m_invIA;
      var iB = this.m_invIB;
      if (this.m_frequencyHz > 0) {
        var Cdot2 = wB - wA;
        var impulse2 = -this.m_mass.ez.z * (Cdot2 + this.m_bias + this.m_gamma * this.m_impulse.z);
        this.m_impulse.z += impulse2;
        wA -= iA * impulse2;
        wB += iB * impulse2;
        var Cdot1 = Vec2.zero();
        Cdot1.addCombine(1, vB2, 1, Vec2.crossNumVec2(wB, this.m_rB));
        Cdot1.subCombine(1, vA2, 1, Vec2.crossNumVec2(wA, this.m_rA));
        var impulse1 = Vec2.neg(Mat33.mulVec2(this.m_mass, Cdot1));
        this.m_impulse.x += impulse1.x;
        this.m_impulse.y += impulse1.y;
        var P3 = Vec2.clone(impulse1);
        vA2.subMul(mA, P3);
        wA -= iA * Vec2.crossVec2Vec2(this.m_rA, P3);
        vB2.addMul(mB, P3);
        wB += iB * Vec2.crossVec2Vec2(this.m_rB, P3);
      } else {
        var Cdot1 = Vec2.zero();
        Cdot1.addCombine(1, vB2, 1, Vec2.crossNumVec2(wB, this.m_rB));
        Cdot1.subCombine(1, vA2, 1, Vec2.crossNumVec2(wA, this.m_rA));
        var Cdot2 = wB - wA;
        var Cdot = new Vec3(Cdot1.x, Cdot1.y, Cdot2);
        var impulse = Vec3.neg(Mat33.mulVec3(this.m_mass, Cdot));
        this.m_impulse.add(impulse);
        var P3 = Vec2.neo(impulse.x, impulse.y);
        vA2.subMul(mA, P3);
        wA -= iA * (Vec2.crossVec2Vec2(this.m_rA, P3) + impulse.z);
        vB2.addMul(mB, P3);
        wB += iB * (Vec2.crossVec2Vec2(this.m_rB, P3) + impulse.z);
      }
      this.m_bodyA.c_velocity.v = vA2;
      this.m_bodyA.c_velocity.w = wA;
      this.m_bodyB.c_velocity.v = vB2;
      this.m_bodyB.c_velocity.w = wB;
    };
    WeldJoint2.prototype.solvePositionConstraints = function(step) {
      var cA2 = this.m_bodyA.c_position.c;
      var aA = this.m_bodyA.c_position.a;
      var cB2 = this.m_bodyB.c_position.c;
      var aB = this.m_bodyB.c_position.a;
      var qA = Rot.neo(aA);
      var qB = Rot.neo(aB);
      var mA = this.m_invMassA;
      var mB = this.m_invMassB;
      var iA = this.m_invIA;
      var iB = this.m_invIB;
      var rA2 = Rot.mulVec2(qA, Vec2.sub(this.m_localAnchorA, this.m_localCenterA));
      var rB2 = Rot.mulVec2(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));
      var positionError;
      var angularError;
      var K = new Mat33();
      K.ex.x = mA + mB + rA2.y * rA2.y * iA + rB2.y * rB2.y * iB;
      K.ey.x = -rA2.y * rA2.x * iA - rB2.y * rB2.x * iB;
      K.ez.x = -rA2.y * iA - rB2.y * iB;
      K.ex.y = K.ey.x;
      K.ey.y = mA + mB + rA2.x * rA2.x * iA + rB2.x * rB2.x * iB;
      K.ez.y = rA2.x * iA + rB2.x * iB;
      K.ex.z = K.ez.x;
      K.ey.z = K.ez.y;
      K.ez.z = iA + iB;
      if (this.m_frequencyHz > 0) {
        var C1 = Vec2.zero();
        C1.addCombine(1, cB2, 1, rB2);
        C1.subCombine(1, cA2, 1, rA2);
        positionError = C1.length();
        angularError = 0;
        var P3 = Vec2.neg(K.solve22(C1));
        cA2.subMul(mA, P3);
        aA -= iA * Vec2.crossVec2Vec2(rA2, P3);
        cB2.addMul(mB, P3);
        aB += iB * Vec2.crossVec2Vec2(rB2, P3);
      } else {
        var C1 = Vec2.zero();
        C1.addCombine(1, cB2, 1, rB2);
        C1.subCombine(1, cA2, 1, rA2);
        var C2 = aB - aA - this.m_referenceAngle;
        positionError = C1.length();
        angularError = math_abs$1(C2);
        var C = new Vec3(C1.x, C1.y, C2);
        var impulse = new Vec3();
        if (K.ez.z > 0) {
          impulse = Vec3.neg(K.solve33(C));
        } else {
          var impulse2 = Vec2.neg(K.solve22(C1));
          impulse.set(impulse2.x, impulse2.y, 0);
        }
        var P3 = Vec2.neo(impulse.x, impulse.y);
        cA2.subMul(mA, P3);
        aA -= iA * (Vec2.crossVec2Vec2(rA2, P3) + impulse.z);
        cB2.addMul(mB, P3);
        aB += iB * (Vec2.crossVec2Vec2(rB2, P3) + impulse.z);
      }
      this.m_bodyA.c_position.c = cA2;
      this.m_bodyA.c_position.a = aA;
      this.m_bodyB.c_position.c = cB2;
      this.m_bodyB.c_position.a = aB;
      return positionError <= SettingsInternal.linearSlop && angularError <= SettingsInternal.angularSlop;
    };
    WeldJoint2.TYPE = "weld-joint";
    return WeldJoint2;
  }(Joint);
  var math_abs = Math.abs;
  var math_PI = Math.PI;
  var DEFAULTS = {
    enableMotor: false,
    maxMotorTorque: 0,
    motorSpeed: 0,
    frequencyHz: 2,
    dampingRatio: 0.7
  };
  var WheelJoint = function(_super) {
    __extends(WheelJoint2, _super);
    function WheelJoint2(def, bodyA, bodyB, anchor2, axis) {
      var _this = this;
      if (!(_this instanceof WheelJoint2)) {
        return new WheelJoint2(def, bodyA, bodyB, anchor2, axis);
      }
      def = options(def, DEFAULTS);
      _this = _super.call(this, def, bodyA, bodyB) || this;
      bodyA = _this.m_bodyA;
      bodyB = _this.m_bodyB;
      _this.m_ax = Vec2.zero();
      _this.m_ay = Vec2.zero();
      _this.m_type = WheelJoint2.TYPE;
      _this.m_localAnchorA = Vec2.clone(anchor2 ? bodyA.getLocalPoint(anchor2) : def.localAnchorA || Vec2.zero());
      _this.m_localAnchorB = Vec2.clone(anchor2 ? bodyB.getLocalPoint(anchor2) : def.localAnchorB || Vec2.zero());
      if (Vec2.isValid(axis)) {
        _this.m_localXAxisA = bodyA.getLocalVector(axis);
      } else if (Vec2.isValid(def.localAxisA)) {
        _this.m_localXAxisA = Vec2.clone(def.localAxisA);
      } else if (Vec2.isValid(def.localAxis)) {
        _this.m_localXAxisA = Vec2.clone(def.localAxis);
      } else {
        _this.m_localXAxisA = Vec2.neo(1, 0);
      }
      _this.m_localYAxisA = Vec2.crossNumVec2(1, _this.m_localXAxisA);
      _this.m_mass = 0;
      _this.m_impulse = 0;
      _this.m_motorMass = 0;
      _this.m_motorImpulse = 0;
      _this.m_springMass = 0;
      _this.m_springImpulse = 0;
      _this.m_maxMotorTorque = def.maxMotorTorque;
      _this.m_motorSpeed = def.motorSpeed;
      _this.m_enableMotor = def.enableMotor;
      _this.m_frequencyHz = def.frequencyHz;
      _this.m_dampingRatio = def.dampingRatio;
      _this.m_bias = 0;
      _this.m_gamma = 0;
      return _this;
    }
    __name(WheelJoint2, "WheelJoint");
    WheelJoint2.prototype._serialize = function() {
      return {
        type: this.m_type,
        bodyA: this.m_bodyA,
        bodyB: this.m_bodyB,
        collideConnected: this.m_collideConnected,
        enableMotor: this.m_enableMotor,
        maxMotorTorque: this.m_maxMotorTorque,
        motorSpeed: this.m_motorSpeed,
        frequencyHz: this.m_frequencyHz,
        dampingRatio: this.m_dampingRatio,
        localAnchorA: this.m_localAnchorA,
        localAnchorB: this.m_localAnchorB,
        localAxisA: this.m_localXAxisA
      };
    };
    WheelJoint2._deserialize = function(data, world2, restore) {
      data = __assign({}, data);
      data.bodyA = restore(Body, data.bodyA, world2);
      data.bodyB = restore(Body, data.bodyB, world2);
      var joint = new WheelJoint2(data);
      return joint;
    };
    WheelJoint2.prototype._setAnchors = function(def) {
      if (def.anchorA) {
        this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(def.anchorA));
      } else if (def.localAnchorA) {
        this.m_localAnchorA.setVec2(def.localAnchorA);
      }
      if (def.anchorB) {
        this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(def.anchorB));
      } else if (def.localAnchorB) {
        this.m_localAnchorB.setVec2(def.localAnchorB);
      }
      if (def.localAxisA) {
        this.m_localXAxisA.setVec2(def.localAxisA);
        this.m_localYAxisA.setVec2(Vec2.crossNumVec2(1, def.localAxisA));
      }
    };
    WheelJoint2.prototype.getLocalAnchorA = function() {
      return this.m_localAnchorA;
    };
    WheelJoint2.prototype.getLocalAnchorB = function() {
      return this.m_localAnchorB;
    };
    WheelJoint2.prototype.getLocalAxisA = function() {
      return this.m_localXAxisA;
    };
    WheelJoint2.prototype.getJointTranslation = function() {
      var bA = this.m_bodyA;
      var bB = this.m_bodyB;
      var pA2 = bA.getWorldPoint(this.m_localAnchorA);
      var pB2 = bB.getWorldPoint(this.m_localAnchorB);
      var d2 = Vec2.sub(pB2, pA2);
      var axis = bA.getWorldVector(this.m_localXAxisA);
      var translation2 = Vec2.dot(d2, axis);
      return translation2;
    };
    WheelJoint2.prototype.getJointSpeed = function() {
      var wA = this.m_bodyA.m_angularVelocity;
      var wB = this.m_bodyB.m_angularVelocity;
      return wB - wA;
    };
    WheelJoint2.prototype.isMotorEnabled = function() {
      return this.m_enableMotor;
    };
    WheelJoint2.prototype.enableMotor = function(flag) {
      if (flag == this.m_enableMotor)
        return;
      this.m_bodyA.setAwake(true);
      this.m_bodyB.setAwake(true);
      this.m_enableMotor = flag;
    };
    WheelJoint2.prototype.setMotorSpeed = function(speed) {
      if (speed == this.m_motorSpeed)
        return;
      this.m_bodyA.setAwake(true);
      this.m_bodyB.setAwake(true);
      this.m_motorSpeed = speed;
    };
    WheelJoint2.prototype.getMotorSpeed = function() {
      return this.m_motorSpeed;
    };
    WheelJoint2.prototype.setMaxMotorTorque = function(torque) {
      if (torque == this.m_maxMotorTorque)
        return;
      this.m_bodyA.setAwake(true);
      this.m_bodyB.setAwake(true);
      this.m_maxMotorTorque = torque;
    };
    WheelJoint2.prototype.getMaxMotorTorque = function() {
      return this.m_maxMotorTorque;
    };
    WheelJoint2.prototype.getMotorTorque = function(inv_dt) {
      return inv_dt * this.m_motorImpulse;
    };
    WheelJoint2.prototype.setSpringFrequencyHz = function(hz) {
      this.m_frequencyHz = hz;
    };
    WheelJoint2.prototype.getSpringFrequencyHz = function() {
      return this.m_frequencyHz;
    };
    WheelJoint2.prototype.setSpringDampingRatio = function(ratio) {
      this.m_dampingRatio = ratio;
    };
    WheelJoint2.prototype.getSpringDampingRatio = function() {
      return this.m_dampingRatio;
    };
    WheelJoint2.prototype.getAnchorA = function() {
      return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
    };
    WheelJoint2.prototype.getAnchorB = function() {
      return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
    };
    WheelJoint2.prototype.getReactionForce = function(inv_dt) {
      return Vec2.combine(this.m_impulse, this.m_ay, this.m_springImpulse, this.m_ax).mul(inv_dt);
    };
    WheelJoint2.prototype.getReactionTorque = function(inv_dt) {
      return inv_dt * this.m_motorImpulse;
    };
    WheelJoint2.prototype.initVelocityConstraints = function(step) {
      this.m_localCenterA = this.m_bodyA.m_sweep.localCenter;
      this.m_localCenterB = this.m_bodyB.m_sweep.localCenter;
      this.m_invMassA = this.m_bodyA.m_invMass;
      this.m_invMassB = this.m_bodyB.m_invMass;
      this.m_invIA = this.m_bodyA.m_invI;
      this.m_invIB = this.m_bodyB.m_invI;
      var mA = this.m_invMassA;
      var mB = this.m_invMassB;
      var iA = this.m_invIA;
      var iB = this.m_invIB;
      var cA2 = this.m_bodyA.c_position.c;
      var aA = this.m_bodyA.c_position.a;
      var vA2 = this.m_bodyA.c_velocity.v;
      var wA = this.m_bodyA.c_velocity.w;
      var cB2 = this.m_bodyB.c_position.c;
      var aB = this.m_bodyB.c_position.a;
      var vB2 = this.m_bodyB.c_velocity.v;
      var wB = this.m_bodyB.c_velocity.w;
      var qA = Rot.neo(aA);
      var qB = Rot.neo(aB);
      var rA2 = Rot.mulVec2(qA, Vec2.sub(this.m_localAnchorA, this.m_localCenterA));
      var rB2 = Rot.mulVec2(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));
      var d2 = Vec2.zero();
      d2.addCombine(1, cB2, 1, rB2);
      d2.subCombine(1, cA2, 1, rA2);
      {
        this.m_ay = Rot.mulVec2(qA, this.m_localYAxisA);
        this.m_sAy = Vec2.crossVec2Vec2(Vec2.add(d2, rA2), this.m_ay);
        this.m_sBy = Vec2.crossVec2Vec2(rB2, this.m_ay);
        this.m_mass = mA + mB + iA * this.m_sAy * this.m_sAy + iB * this.m_sBy * this.m_sBy;
        if (this.m_mass > 0) {
          this.m_mass = 1 / this.m_mass;
        }
      }
      this.m_springMass = 0;
      this.m_bias = 0;
      this.m_gamma = 0;
      if (this.m_frequencyHz > 0) {
        this.m_ax = Rot.mulVec2(qA, this.m_localXAxisA);
        this.m_sAx = Vec2.crossVec2Vec2(Vec2.add(d2, rA2), this.m_ax);
        this.m_sBx = Vec2.crossVec2Vec2(rB2, this.m_ax);
        var invMass = mA + mB + iA * this.m_sAx * this.m_sAx + iB * this.m_sBx * this.m_sBx;
        if (invMass > 0) {
          this.m_springMass = 1 / invMass;
          var C = Vec2.dot(d2, this.m_ax);
          var omega = 2 * math_PI * this.m_frequencyHz;
          var damp = 2 * this.m_springMass * this.m_dampingRatio * omega;
          var k = this.m_springMass * omega * omega;
          var h = step.dt;
          this.m_gamma = h * (damp + h * k);
          if (this.m_gamma > 0) {
            this.m_gamma = 1 / this.m_gamma;
          }
          this.m_bias = C * h * k * this.m_gamma;
          this.m_springMass = invMass + this.m_gamma;
          if (this.m_springMass > 0) {
            this.m_springMass = 1 / this.m_springMass;
          }
        }
      } else {
        this.m_springImpulse = 0;
      }
      if (this.m_enableMotor) {
        this.m_motorMass = iA + iB;
        if (this.m_motorMass > 0) {
          this.m_motorMass = 1 / this.m_motorMass;
        }
      } else {
        this.m_motorMass = 0;
        this.m_motorImpulse = 0;
      }
      if (step.warmStarting) {
        this.m_impulse *= step.dtRatio;
        this.m_springImpulse *= step.dtRatio;
        this.m_motorImpulse *= step.dtRatio;
        var P3 = Vec2.combine(this.m_impulse, this.m_ay, this.m_springImpulse, this.m_ax);
        var LA = this.m_impulse * this.m_sAy + this.m_springImpulse * this.m_sAx + this.m_motorImpulse;
        var LB = this.m_impulse * this.m_sBy + this.m_springImpulse * this.m_sBx + this.m_motorImpulse;
        vA2.subMul(this.m_invMassA, P3);
        wA -= this.m_invIA * LA;
        vB2.addMul(this.m_invMassB, P3);
        wB += this.m_invIB * LB;
      } else {
        this.m_impulse = 0;
        this.m_springImpulse = 0;
        this.m_motorImpulse = 0;
      }
      this.m_bodyA.c_velocity.v.setVec2(vA2);
      this.m_bodyA.c_velocity.w = wA;
      this.m_bodyB.c_velocity.v.setVec2(vB2);
      this.m_bodyB.c_velocity.w = wB;
    };
    WheelJoint2.prototype.solveVelocityConstraints = function(step) {
      var mA = this.m_invMassA;
      var mB = this.m_invMassB;
      var iA = this.m_invIA;
      var iB = this.m_invIB;
      var vA2 = this.m_bodyA.c_velocity.v;
      var wA = this.m_bodyA.c_velocity.w;
      var vB2 = this.m_bodyB.c_velocity.v;
      var wB = this.m_bodyB.c_velocity.w;
      {
        var Cdot = Vec2.dot(this.m_ax, vB2) - Vec2.dot(this.m_ax, vA2) + this.m_sBx * wB - this.m_sAx * wA;
        var impulse = -this.m_springMass * (Cdot + this.m_bias + this.m_gamma * this.m_springImpulse);
        this.m_springImpulse += impulse;
        var P3 = Vec2.mulNumVec2(impulse, this.m_ax);
        var LA = impulse * this.m_sAx;
        var LB = impulse * this.m_sBx;
        vA2.subMul(mA, P3);
        wA -= iA * LA;
        vB2.addMul(mB, P3);
        wB += iB * LB;
      }
      {
        var Cdot = wB - wA - this.m_motorSpeed;
        var impulse = -this.m_motorMass * Cdot;
        var oldImpulse = this.m_motorImpulse;
        var maxImpulse = step.dt * this.m_maxMotorTorque;
        this.m_motorImpulse = clamp(this.m_motorImpulse + impulse, -maxImpulse, maxImpulse);
        impulse = this.m_motorImpulse - oldImpulse;
        wA -= iA * impulse;
        wB += iB * impulse;
      }
      {
        var Cdot = Vec2.dot(this.m_ay, vB2) - Vec2.dot(this.m_ay, vA2) + this.m_sBy * wB - this.m_sAy * wA;
        var impulse = -this.m_mass * Cdot;
        this.m_impulse += impulse;
        var P3 = Vec2.mulNumVec2(impulse, this.m_ay);
        var LA = impulse * this.m_sAy;
        var LB = impulse * this.m_sBy;
        vA2.subMul(mA, P3);
        wA -= iA * LA;
        vB2.addMul(mB, P3);
        wB += iB * LB;
      }
      this.m_bodyA.c_velocity.v.setVec2(vA2);
      this.m_bodyA.c_velocity.w = wA;
      this.m_bodyB.c_velocity.v.setVec2(vB2);
      this.m_bodyB.c_velocity.w = wB;
    };
    WheelJoint2.prototype.solvePositionConstraints = function(step) {
      var cA2 = this.m_bodyA.c_position.c;
      var aA = this.m_bodyA.c_position.a;
      var cB2 = this.m_bodyB.c_position.c;
      var aB = this.m_bodyB.c_position.a;
      var qA = Rot.neo(aA);
      var qB = Rot.neo(aB);
      var rA2 = Rot.mulVec2(qA, Vec2.sub(this.m_localAnchorA, this.m_localCenterA));
      var rB2 = Rot.mulVec2(qB, Vec2.sub(this.m_localAnchorB, this.m_localCenterB));
      var d2 = Vec2.zero();
      d2.addCombine(1, cB2, 1, rB2);
      d2.subCombine(1, cA2, 1, rA2);
      var ay = Rot.mulVec2(qA, this.m_localYAxisA);
      var sAy = Vec2.crossVec2Vec2(Vec2.add(d2, rA2), ay);
      var sBy = Vec2.crossVec2Vec2(rB2, ay);
      var C = Vec2.dot(d2, ay);
      var k = this.m_invMassA + this.m_invMassB + this.m_invIA * this.m_sAy * this.m_sAy + this.m_invIB * this.m_sBy * this.m_sBy;
      var impulse = k != 0 ? -C / k : 0;
      var P3 = Vec2.mulNumVec2(impulse, ay);
      var LA = impulse * sAy;
      var LB = impulse * sBy;
      cA2.subMul(this.m_invMassA, P3);
      aA -= this.m_invIA * LA;
      cB2.addMul(this.m_invMassB, P3);
      aB += this.m_invIB * LB;
      this.m_bodyA.c_position.c.setVec2(cA2);
      this.m_bodyA.c_position.a = aA;
      this.m_bodyB.c_position.c.setVec2(cB2);
      this.m_bodyB.c_position.a = aB;
      return math_abs(C) <= SettingsInternal.linearSlop;
    };
    WheelJoint2.TYPE = "wheel-joint";
    return WheelJoint2;
  }(Joint);
  var SID = 0;
  function Serializer(opts) {
    var _a20;
    opts = opts || {};
    var rootClass = opts.rootClass || World;
    var preSerialize = opts.preSerialize || function(obj) {
      return obj;
    };
    var postSerialize = opts.postSerialize || function(data, obj) {
      return data;
    };
    var preDeserialize = opts.preDeserialize || function(data) {
      return data;
    };
    var postDeserialize = opts.postDeserialize || function(obj, data) {
      return obj;
    };
    var refTypes = {
      World,
      Body,
      Joint,
      Fixture,
      Shape
    };
    var restoreTypes = __assign({
      Vec2,
      Vec3
    }, refTypes);
    var CLASS_BY_TYPE_PROP = (_a20 = {}, _a20[Body.STATIC] = Body, _a20[Body.DYNAMIC] = Body, _a20[Body.KINEMATIC] = Body, _a20[ChainShape.TYPE] = ChainShape, _a20[BoxShape.TYPE] = BoxShape, _a20[EdgeShape.TYPE] = EdgeShape, _a20[PolygonShape.TYPE] = PolygonShape, _a20[CircleShape.TYPE] = CircleShape, _a20[DistanceJoint.TYPE] = DistanceJoint, _a20[FrictionJoint.TYPE] = FrictionJoint, _a20[GearJoint.TYPE] = GearJoint, _a20[MotorJoint.TYPE] = MotorJoint, _a20[MouseJoint.TYPE] = MouseJoint, _a20[PrismaticJoint.TYPE] = PrismaticJoint, _a20[PulleyJoint.TYPE] = PulleyJoint, _a20[RevoluteJoint.TYPE] = RevoluteJoint, _a20[RopeJoint.TYPE] = RopeJoint, _a20[WeldJoint.TYPE] = WeldJoint, _a20[WheelJoint.TYPE] = WheelJoint, _a20);
    this.toJson = function(root) {
      var json = [];
      var queue = [root];
      var refMap = {};
      function storeRef(value, typeName) {
        value.__sid = value.__sid || ++SID;
        if (!refMap[value.__sid]) {
          queue.push(value);
          var index = json.length + queue.length;
          var ref = {
            refIndex: index,
            refType: typeName
          };
          refMap[value.__sid] = ref;
        }
        return refMap[value.__sid];
      }
      __name(storeRef, "storeRef");
      function serialize(obj2) {
        obj2 = preSerialize(obj2);
        var data = obj2._serialize();
        data = postSerialize(data, obj2);
        return data;
      }
      __name(serialize, "serialize");
      function toJson(value, top) {
        if (typeof value !== "object" || value === null) {
          return value;
        }
        if (typeof value._serialize === "function") {
          if (value !== top) {
            for (var typeName in refTypes) {
              if (value instanceof refTypes[typeName]) {
                return storeRef(value, typeName);
              }
            }
          }
          value = serialize(value);
        }
        if (Array.isArray(value)) {
          var newValue = [];
          for (var key = 0; key < value.length; key++) {
            newValue[key] = toJson(value[key]);
          }
          value = newValue;
        } else {
          var newValue = {};
          for (var key in value) {
            if (value.hasOwnProperty(key)) {
              newValue[key] = toJson(value[key]);
            }
          }
          value = newValue;
        }
        return value;
      }
      __name(toJson, "toJson");
      while (queue.length) {
        var obj = queue.shift();
        var str = toJson(obj, obj);
        json.push(str);
      }
      return json;
    };
    this.fromJson = function(json) {
      var refMap = {};
      function findDeserilizer(data, cls) {
        if (!cls || !cls._deserialize) {
          cls = CLASS_BY_TYPE_PROP[data.type];
        }
        return cls && cls._deserialize;
      }
      __name(findDeserilizer, "findDeserilizer");
      function deserialize(cls, data, ctx) {
        var deserializer = findDeserilizer(data, cls);
        if (!deserializer) {
          return;
        }
        data = preDeserialize(data);
        var obj = deserializer(data, ctx, restoreRef);
        obj = postDeserialize(obj, data);
        return obj;
      }
      __name(deserialize, "deserialize");
      function restoreRef(cls, ref, ctx) {
        if (!ref.refIndex) {
          return cls && cls._deserialize && deserialize(cls, ref, ctx);
        }
        cls = restoreTypes[ref.refType] || cls;
        var index = ref.refIndex;
        if (!refMap[index]) {
          var data = json[index];
          var obj = deserialize(cls, data, ctx);
          refMap[index] = obj;
        }
        return refMap[index];
      }
      __name(restoreRef, "restoreRef");
      var root = rootClass._deserialize(json[0], null, restoreRef);
      return root;
    };
  }
  __name(Serializer, "Serializer");
  var serializer = new Serializer();
  Serializer.toJson = serializer.toJson;
  Serializer.fromJson = serializer.fromJson;
  var Testbed = function() {
    function Testbed2() {
      this.width = 80;
      this.height = 60;
      this.x = 0;
      this.y = -10;
      this.scaleY = -1;
      this.hz = 60;
      this.speed = 1;
      this.ratio = 16;
      this.background = "#222222";
      this.activeKeys = {};
      this.step = function(dt2, t) {
        return;
      };
      this.keydown = function(keyCode, label) {
        return;
      };
      this.keyup = function(keyCode, label) {
        return;
      };
      this.statusText = "";
      this.statusMap = {};
    }
    __name(Testbed2, "Testbed");
    Testbed2.mount = function(options2) {
      throw new Error("Not implemented");
    };
    Testbed2.prototype.status = function(a2, b2) {
      if (typeof b2 !== "undefined") {
        var key_1 = a2;
        var value_1 = b2;
        if (typeof value_1 !== "function" && typeof value_1 !== "object") {
          this.statusMap[key_1] = value_1;
        }
      } else if (a2 && typeof a2 === "object") {
        for (var key_2 in a2) {
          var value_2 = a2[key_2];
          if (typeof value_2 !== "function" && typeof value_2 !== "object") {
            this.statusMap[key_2] = value_2;
          }
        }
      } else if (typeof a2 === "string") {
        this.statusText = a2;
      }
      var newline = "\n";
      var text = this.statusText || "";
      for (var key in this.statusMap) {
        var value = this.statusMap[key];
        if (typeof value === "function")
          continue;
        text += (text && newline) + key + ": " + value;
      }
      this._status(text);
    };
    Testbed2.prototype.info = function(text) {
      this._info(text);
    };
    Testbed2.prototype.color = function(r, g, b2) {
      r = r * 256 | 0;
      g = g * 256 | 0;
      b2 = b2 * 256 | 0;
      return "rgb(" + r + ", " + g + ", " + b2 + ")";
    };
    return Testbed2;
  }();
  Contact.addType(CircleShape.TYPE, CircleShape.TYPE, CircleCircleContact);
  function CircleCircleContact(manifold, xfA2, fixtureA, indexA, xfB2, fixtureB, indexB) {
    CollideCircles(manifold, fixtureA.getShape(), xfA2, fixtureB.getShape(), xfB2);
  }
  __name(CircleCircleContact, "CircleCircleContact");
  var pA = vec22(0, 0);
  var pB = vec22(0, 0);
  var CollideCircles = /* @__PURE__ */ __name(function(manifold, circleA, xfA2, circleB, xfB2) {
    manifold.pointCount = 0;
    transformVec2(pA, xfA2, circleA.m_p);
    transformVec2(pB, xfB2, circleB.m_p);
    var distSqr = distSqrVec2(pB, pA);
    var rA2 = circleA.m_radius;
    var rB2 = circleB.m_radius;
    var radius = rA2 + rB2;
    if (distSqr > radius * radius) {
      return;
    }
    manifold.type = ManifoldType.e_circles;
    copyVec2(manifold.localPoint, circleA.m_p);
    zeroVec2(manifold.localNormal);
    manifold.pointCount = 1;
    copyVec2(manifold.points[0].localPoint, circleB.m_p);
    manifold.points[0].id.setFeatures(0, ContactFeatureType.e_vertex, 0, ContactFeatureType.e_vertex);
  }, "CollideCircles");
  Contact.addType(EdgeShape.TYPE, CircleShape.TYPE, EdgeCircleContact);
  Contact.addType(ChainShape.TYPE, CircleShape.TYPE, ChainCircleContact);
  function EdgeCircleContact(manifold, xfA2, fixtureA, indexA, xfB2, fixtureB, indexB) {
    var shapeA = fixtureA.getShape();
    var shapeB = fixtureB.getShape();
    CollideEdgeCircle(manifold, shapeA, xfA2, shapeB, xfB2);
  }
  __name(EdgeCircleContact, "EdgeCircleContact");
  function ChainCircleContact(manifold, xfA2, fixtureA, indexA, xfB2, fixtureB, indexB) {
    var chain = fixtureA.getShape();
    var edge = new EdgeShape();
    chain.getChildEdge(edge, indexA);
    var shapeA = edge;
    var shapeB = fixtureB.getShape();
    CollideEdgeCircle(manifold, shapeA, xfA2, shapeB, xfB2);
  }
  __name(ChainCircleContact, "ChainCircleContact");
  var e = vec22(0, 0);
  var e1 = vec22(0, 0);
  var e2 = vec22(0, 0);
  var Q = vec22(0, 0);
  var P = vec22(0, 0);
  var n$2 = vec22(0, 0);
  var CollideEdgeCircle = /* @__PURE__ */ __name(function(manifold, edgeA, xfA2, circleB, xfB2) {
    manifold.pointCount = 0;
    retransformVec2(Q, xfB2, xfA2, circleB.m_p);
    var A = edgeA.m_vertex1;
    var B = edgeA.m_vertex2;
    diffVec2(e, B, A);
    var u = dotVec2(e, B) - dotVec2(e, Q);
    var v3 = dotVec2(e, Q) - dotVec2(e, A);
    var radius = edgeA.m_radius + circleB.m_radius;
    if (v3 <= 0) {
      copyVec2(P, A);
      var dd_1 = distSqrVec2(Q, A);
      if (dd_1 > radius * radius) {
        return;
      }
      if (edgeA.m_hasVertex0) {
        var A1 = edgeA.m_vertex0;
        var B1 = A;
        diffVec2(e1, B1, A1);
        var u1 = dotVec2(e1, B1) - dotVec2(e1, Q);
        if (u1 > 0) {
          return;
        }
      }
      manifold.type = ManifoldType.e_circles;
      zeroVec2(manifold.localNormal);
      copyVec2(manifold.localPoint, P);
      manifold.pointCount = 1;
      copyVec2(manifold.points[0].localPoint, circleB.m_p);
      manifold.points[0].id.setFeatures(0, ContactFeatureType.e_vertex, 0, ContactFeatureType.e_vertex);
      return;
    }
    if (u <= 0) {
      copyVec2(P, B);
      var dd_2 = distSqrVec2(Q, P);
      if (dd_2 > radius * radius) {
        return;
      }
      if (edgeA.m_hasVertex3) {
        var B2 = edgeA.m_vertex3;
        var A2 = B;
        diffVec2(e2, B2, A2);
        var v22 = dotVec2(e2, Q) - dotVec2(e2, A2);
        if (v22 > 0) {
          return;
        }
      }
      manifold.type = ManifoldType.e_circles;
      zeroVec2(manifold.localNormal);
      copyVec2(manifold.localPoint, P);
      manifold.pointCount = 1;
      copyVec2(manifold.points[0].localPoint, circleB.m_p);
      manifold.points[0].id.setFeatures(1, ContactFeatureType.e_vertex, 0, ContactFeatureType.e_vertex);
      return;
    }
    var den = lengthSqrVec2(e);
    combineVec2(P, u / den, A, v3 / den, B);
    var dd = distSqrVec2(Q, P);
    if (dd > radius * radius) {
      return;
    }
    crossNumVec2(n$2, 1, e);
    if (dotVec2(n$2, Q) - dotVec2(n$2, A) < 0) {
      negVec2(n$2);
    }
    normalizeVec2(n$2);
    manifold.type = ManifoldType.e_faceA;
    copyVec2(manifold.localNormal, n$2);
    copyVec2(manifold.localPoint, A);
    manifold.pointCount = 1;
    copyVec2(manifold.points[0].localPoint, circleB.m_p);
    manifold.points[0].id.setFeatures(0, ContactFeatureType.e_face, 0, ContactFeatureType.e_vertex);
  }, "CollideEdgeCircle");
  var incidentEdge = [new ClipVertex(), new ClipVertex()];
  var clipPoints1$1 = [new ClipVertex(), new ClipVertex()];
  var clipPoints2$1 = [new ClipVertex(), new ClipVertex()];
  var clipSegmentToLineNormal = vec22(0, 0);
  var v1 = vec22(0, 0);
  var n$1 = vec22(0, 0);
  var xf$1 = transform(0, 0, 0);
  var v11 = vec22(0, 0);
  var v12 = vec22(0, 0);
  var localTangent = vec22(0, 0);
  var localNormal = vec22(0, 0);
  var planePoint = vec22(0, 0);
  var tangent = vec22(0, 0);
  var normal$1 = vec22(0, 0);
  var normal1$1 = vec22(0, 0);
  Contact.addType(PolygonShape.TYPE, PolygonShape.TYPE, PolygonContact);
  function PolygonContact(manifold, xfA2, fixtureA, indexA, xfB2, fixtureB, indexB) {
    CollidePolygons(manifold, fixtureA.getShape(), xfA2, fixtureB.getShape(), xfB2);
  }
  __name(PolygonContact, "PolygonContact");
  function findMaxSeparation(poly1, xf1, poly2, xf2, output2) {
    var count1 = poly1.m_count;
    var count2 = poly2.m_count;
    var n1s = poly1.m_normals;
    var v1s = poly1.m_vertices;
    var v2s = poly2.m_vertices;
    invTransformTransform(xf$1, xf2, xf1);
    var bestIndex = 0;
    var maxSeparation2 = -Infinity;
    for (var i = 0; i < count1; ++i) {
      rotVec2(n$1, xf$1.q, n1s[i]);
      transformVec2(v1, xf$1, v1s[i]);
      var si = Infinity;
      for (var j = 0; j < count2; ++j) {
        var sij = dotVec2(n$1, v2s[j]) - dotVec2(n$1, v1);
        if (sij < si) {
          si = sij;
        }
      }
      if (si > maxSeparation2) {
        maxSeparation2 = si;
        bestIndex = i;
      }
    }
    output2.maxSeparation = maxSeparation2;
    output2.bestIndex = bestIndex;
  }
  __name(findMaxSeparation, "findMaxSeparation");
  function findIncidentEdge(clipVertex, poly1, xf1, edge12, poly2, xf2) {
    var normals1 = poly1.m_normals;
    var count2 = poly2.m_count;
    var vertices2 = poly2.m_vertices;
    var normals2 = poly2.m_normals;
    rerotVec2(normal1$1, xf2.q, xf1.q, normals1[edge12]);
    var index = 0;
    var minDot = Infinity;
    for (var i = 0; i < count2; ++i) {
      var dot = dotVec2(normal1$1, normals2[i]);
      if (dot < minDot) {
        minDot = dot;
        index = i;
      }
    }
    var i1 = index;
    var i2 = i1 + 1 < count2 ? i1 + 1 : 0;
    transformVec2(clipVertex[0].v, xf2, vertices2[i1]);
    clipVertex[0].id.setFeatures(edge12, ContactFeatureType.e_face, i1, ContactFeatureType.e_vertex);
    transformVec2(clipVertex[1].v, xf2, vertices2[i2]);
    clipVertex[1].id.setFeatures(edge12, ContactFeatureType.e_face, i2, ContactFeatureType.e_vertex);
  }
  __name(findIncidentEdge, "findIncidentEdge");
  var maxSeparation = {
    maxSeparation: 0,
    bestIndex: 0
  };
  var CollidePolygons = /* @__PURE__ */ __name(function(manifold, polyA, xfA2, polyB, xfB2) {
    manifold.pointCount = 0;
    var totalRadius = polyA.m_radius + polyB.m_radius;
    findMaxSeparation(polyA, xfA2, polyB, xfB2, maxSeparation);
    var edgeA = maxSeparation.bestIndex;
    var separationA = maxSeparation.maxSeparation;
    if (separationA > totalRadius)
      return;
    findMaxSeparation(polyB, xfB2, polyA, xfA2, maxSeparation);
    var edgeB = maxSeparation.bestIndex;
    var separationB = maxSeparation.maxSeparation;
    if (separationB > totalRadius)
      return;
    var poly1;
    var poly2;
    var xf1;
    var xf2;
    var edge12;
    var flip;
    var k_tol = 0.1 * SettingsInternal.linearSlop;
    if (separationB > separationA + k_tol) {
      poly1 = polyB;
      poly2 = polyA;
      xf1 = xfB2;
      xf2 = xfA2;
      edge12 = edgeB;
      manifold.type = ManifoldType.e_faceB;
      flip = true;
    } else {
      poly1 = polyA;
      poly2 = polyB;
      xf1 = xfA2;
      xf2 = xfB2;
      edge12 = edgeA;
      manifold.type = ManifoldType.e_faceA;
      flip = false;
    }
    incidentEdge[0].recycle(), incidentEdge[1].recycle();
    findIncidentEdge(incidentEdge, poly1, xf1, edge12, poly2, xf2);
    var count1 = poly1.m_count;
    var vertices1 = poly1.m_vertices;
    var iv1 = edge12;
    var iv2 = edge12 + 1 < count1 ? edge12 + 1 : 0;
    copyVec2(v11, vertices1[iv1]);
    copyVec2(v12, vertices1[iv2]);
    diffVec2(localTangent, v12, v11);
    normalizeVec2(localTangent);
    crossVec2Num(localNormal, localTangent, 1);
    combineVec2(planePoint, 0.5, v11, 0.5, v12);
    rotVec2(tangent, xf1.q, localTangent);
    crossVec2Num(normal$1, tangent, 1);
    transformVec2(v11, xf1, v11);
    transformVec2(v12, xf1, v12);
    var frontOffset = dotVec2(normal$1, v11);
    var sideOffset1 = -dotVec2(tangent, v11) + totalRadius;
    var sideOffset2 = dotVec2(tangent, v12) + totalRadius;
    clipPoints1$1[0].recycle(), clipPoints1$1[1].recycle();
    clipPoints2$1[0].recycle(), clipPoints2$1[1].recycle();
    setVec2(clipSegmentToLineNormal, -tangent.x, -tangent.y);
    var np1 = clipSegmentToLine(clipPoints1$1, incidentEdge, clipSegmentToLineNormal, sideOffset1, iv1);
    if (np1 < 2) {
      return;
    }
    setVec2(clipSegmentToLineNormal, tangent.x, tangent.y);
    var np2 = clipSegmentToLine(clipPoints2$1, clipPoints1$1, clipSegmentToLineNormal, sideOffset2, iv2);
    if (np2 < 2) {
      return;
    }
    copyVec2(manifold.localNormal, localNormal);
    copyVec2(manifold.localPoint, planePoint);
    var pointCount = 0;
    for (var i = 0; i < clipPoints2$1.length; ++i) {
      var separation = dotVec2(normal$1, clipPoints2$1[i].v) - frontOffset;
      if (separation <= totalRadius) {
        var cp = manifold.points[pointCount];
        invTransformVec2(cp.localPoint, xf2, clipPoints2$1[i].v);
        cp.id.set(clipPoints2$1[i].id);
        if (flip) {
          cp.id.swapFeatures();
        }
        ++pointCount;
      }
    }
    manifold.pointCount = pointCount;
  }, "CollidePolygons");
  Contact.addType(PolygonShape.TYPE, CircleShape.TYPE, PolygonCircleContact);
  function PolygonCircleContact(manifold, xfA2, fixtureA, indexA, xfB2, fixtureB, indexB) {
    CollidePolygonCircle(manifold, fixtureA.getShape(), xfA2, fixtureB.getShape(), xfB2);
  }
  __name(PolygonCircleContact, "PolygonCircleContact");
  var cLocal = vec22(0, 0);
  var faceCenter = vec22(0, 0);
  var CollidePolygonCircle = /* @__PURE__ */ __name(function(manifold, polygonA, xfA2, circleB, xfB2) {
    manifold.pointCount = 0;
    retransformVec2(cLocal, xfB2, xfA2, circleB.m_p);
    var normalIndex = 0;
    var separation = -Infinity;
    var radius = polygonA.m_radius + circleB.m_radius;
    var vertexCount = polygonA.m_count;
    var vertices = polygonA.m_vertices;
    var normals = polygonA.m_normals;
    for (var i = 0; i < vertexCount; ++i) {
      var s2 = dotVec2(normals[i], cLocal) - dotVec2(normals[i], vertices[i]);
      if (s2 > radius) {
        return;
      }
      if (s2 > separation) {
        separation = s2;
        normalIndex = i;
      }
    }
    var vertIndex1 = normalIndex;
    var vertIndex2 = vertIndex1 + 1 < vertexCount ? vertIndex1 + 1 : 0;
    var v13 = vertices[vertIndex1];
    var v22 = vertices[vertIndex2];
    if (separation < EPSILON) {
      manifold.pointCount = 1;
      manifold.type = ManifoldType.e_faceA;
      copyVec2(manifold.localNormal, normals[normalIndex]);
      combineVec2(manifold.localPoint, 0.5, v13, 0.5, v22);
      copyVec2(manifold.points[0].localPoint, circleB.m_p);
      manifold.points[0].id.setFeatures(0, ContactFeatureType.e_vertex, 0, ContactFeatureType.e_vertex);
      return;
    }
    var u1 = dotVec2(cLocal, v22) - dotVec2(cLocal, v13) - dotVec2(v13, v22) + dotVec2(v13, v13);
    var u2 = dotVec2(cLocal, v13) - dotVec2(cLocal, v22) - dotVec2(v22, v13) + dotVec2(v22, v22);
    if (u1 <= 0) {
      if (distSqrVec2(cLocal, v13) > radius * radius) {
        return;
      }
      manifold.pointCount = 1;
      manifold.type = ManifoldType.e_faceA;
      diffVec2(manifold.localNormal, cLocal, v13);
      normalizeVec2(manifold.localNormal);
      copyVec2(manifold.localPoint, v13);
      copyVec2(manifold.points[0].localPoint, circleB.m_p);
      manifold.points[0].id.setFeatures(0, ContactFeatureType.e_vertex, 0, ContactFeatureType.e_vertex);
    } else if (u2 <= 0) {
      if (distSqrVec2(cLocal, v22) > radius * radius) {
        return;
      }
      manifold.pointCount = 1;
      manifold.type = ManifoldType.e_faceA;
      diffVec2(manifold.localNormal, cLocal, v22);
      normalizeVec2(manifold.localNormal);
      copyVec2(manifold.localPoint, v22);
      copyVec2(manifold.points[0].localPoint, circleB.m_p);
      manifold.points[0].id.setFeatures(0, ContactFeatureType.e_vertex, 0, ContactFeatureType.e_vertex);
    } else {
      combineVec2(faceCenter, 0.5, v13, 0.5, v22);
      var separation_1 = dotVec2(cLocal, normals[vertIndex1]) - dotVec2(faceCenter, normals[vertIndex1]);
      if (separation_1 > radius) {
        return;
      }
      manifold.pointCount = 1;
      manifold.type = ManifoldType.e_faceA;
      copyVec2(manifold.localNormal, normals[vertIndex1]);
      copyVec2(manifold.localPoint, faceCenter);
      copyVec2(manifold.points[0].localPoint, circleB.m_p);
      manifold.points[0].id.setFeatures(0, ContactFeatureType.e_vertex, 0, ContactFeatureType.e_vertex);
    }
  }, "CollidePolygonCircle");
  var math_min = Math.min;
  Contact.addType(EdgeShape.TYPE, PolygonShape.TYPE, EdgePolygonContact);
  Contact.addType(ChainShape.TYPE, PolygonShape.TYPE, ChainPolygonContact);
  function EdgePolygonContact(manifold, xfA2, fA, indexA, xfB2, fB, indexB) {
    CollideEdgePolygon(manifold, fA.getShape(), xfA2, fB.getShape(), xfB2);
  }
  __name(EdgePolygonContact, "EdgePolygonContact");
  var edge_reuse = new EdgeShape();
  function ChainPolygonContact(manifold, xfA2, fA, indexA, xfB2, fB, indexB) {
    var chain = fA.getShape();
    chain.getChildEdge(edge_reuse, indexA);
    CollideEdgePolygon(manifold, edge_reuse, xfA2, fB.getShape(), xfB2);
  }
  __name(ChainPolygonContact, "ChainPolygonContact");
  var EPAxisType;
  (function(EPAxisType2) {
    EPAxisType2[EPAxisType2["e_unknown"] = -1] = "e_unknown";
    EPAxisType2[EPAxisType2["e_edgeA"] = 1] = "e_edgeA";
    EPAxisType2[EPAxisType2["e_edgeB"] = 2] = "e_edgeB";
  })(EPAxisType || (EPAxisType = {}));
  var VertexType;
  (function(VertexType2) {
    VertexType2[VertexType2["e_isolated"] = 0] = "e_isolated";
    VertexType2[VertexType2["e_concave"] = 1] = "e_concave";
    VertexType2[VertexType2["e_convex"] = 2] = "e_convex";
  })(VertexType || (VertexType = {}));
  var EPAxis = function() {
    function EPAxis2() {
    }
    __name(EPAxis2, "EPAxis");
    return EPAxis2;
  }();
  var TempPolygon = function() {
    function TempPolygon2() {
      this.vertices = [];
      this.normals = [];
      this.count = 0;
      for (var i = 0; i < SettingsInternal.maxPolygonVertices; i++) {
        this.vertices.push(vec22(0, 0));
        this.normals.push(vec22(0, 0));
      }
    }
    __name(TempPolygon2, "TempPolygon");
    return TempPolygon2;
  }();
  var ReferenceFace = function() {
    function ReferenceFace2() {
      this.v1 = vec22(0, 0);
      this.v2 = vec22(0, 0);
      this.normal = vec22(0, 0);
      this.sideNormal1 = vec22(0, 0);
      this.sideNormal2 = vec22(0, 0);
    }
    __name(ReferenceFace2, "ReferenceFace");
    ReferenceFace2.prototype.recycle = function() {
      zeroVec2(this.v1);
      zeroVec2(this.v2);
      zeroVec2(this.normal);
      zeroVec2(this.sideNormal1);
      zeroVec2(this.sideNormal2);
    };
    return ReferenceFace2;
  }();
  var clipPoints1 = [new ClipVertex(), new ClipVertex()];
  var clipPoints2 = [new ClipVertex(), new ClipVertex()];
  var ie2 = [new ClipVertex(), new ClipVertex()];
  var edgeAxis = new EPAxis();
  var polygonAxis = new EPAxis();
  var polygonBA = new TempPolygon();
  var rf = new ReferenceFace();
  var centroidB = vec22(0, 0);
  var edge0 = vec22(0, 0);
  var edge1 = vec22(0, 0);
  var edge2 = vec22(0, 0);
  var xf = transform(0, 0, 0);
  var normal = vec22(0, 0);
  var normal0 = vec22(0, 0);
  var normal1 = vec22(0, 0);
  var normal2 = vec22(0, 0);
  var lowerLimit = vec22(0, 0);
  var upperLimit = vec22(0, 0);
  var perp = vec22(0, 0);
  var n = vec22(0, 0);
  var CollideEdgePolygon = /* @__PURE__ */ __name(function(manifold, edgeA, xfA2, polygonB, xfB2) {
    invTransformTransform(xf, xfA2, xfB2);
    transformVec2(centroidB, xf, polygonB.m_centroid);
    var v0 = edgeA.m_vertex0;
    var v13 = edgeA.m_vertex1;
    var v22 = edgeA.m_vertex2;
    var v3 = edgeA.m_vertex3;
    var hasVertex0 = edgeA.m_hasVertex0;
    var hasVertex3 = edgeA.m_hasVertex3;
    diffVec2(edge1, v22, v13);
    normalizeVec2(edge1);
    setVec2(normal1, edge1.y, -edge1.x);
    var offset1 = dotVec2(normal1, centroidB) - dotVec2(normal1, v13);
    var offset0 = 0;
    var offset2 = 0;
    var convex1 = false;
    var convex2 = false;
    zeroVec2(normal0);
    zeroVec2(normal2);
    if (hasVertex0) {
      diffVec2(edge0, v13, v0);
      normalizeVec2(edge0);
      setVec2(normal0, edge0.y, -edge0.x);
      convex1 = crossVec2Vec2(edge0, edge1) >= 0;
      offset0 = Vec2.dot(normal0, centroidB) - Vec2.dot(normal0, v0);
    }
    if (hasVertex3) {
      diffVec2(edge2, v3, v22);
      normalizeVec2(edge2);
      setVec2(normal2, edge2.y, -edge2.x);
      convex2 = Vec2.crossVec2Vec2(edge1, edge2) > 0;
      offset2 = Vec2.dot(normal2, centroidB) - Vec2.dot(normal2, v22);
    }
    var front;
    zeroVec2(normal);
    zeroVec2(lowerLimit);
    zeroVec2(upperLimit);
    if (hasVertex0 && hasVertex3) {
      if (convex1 && convex2) {
        front = offset0 >= 0 || offset1 >= 0 || offset2 >= 0;
        if (front) {
          copyVec2(normal, normal1);
          copyVec2(lowerLimit, normal0);
          copyVec2(upperLimit, normal2);
        } else {
          setMulVec2(normal, -1, normal1);
          setMulVec2(lowerLimit, -1, normal1);
          setMulVec2(upperLimit, -1, normal1);
        }
      } else if (convex1) {
        front = offset0 >= 0 || offset1 >= 0 && offset2 >= 0;
        if (front) {
          copyVec2(normal, normal1);
          copyVec2(lowerLimit, normal0);
          copyVec2(upperLimit, normal1);
        } else {
          setMulVec2(normal, -1, normal1);
          setMulVec2(lowerLimit, -1, normal2);
          setMulVec2(upperLimit, -1, normal1);
        }
      } else if (convex2) {
        front = offset2 >= 0 || offset0 >= 0 && offset1 >= 0;
        if (front) {
          copyVec2(normal, normal1);
          copyVec2(lowerLimit, normal1);
          copyVec2(upperLimit, normal2);
        } else {
          setMulVec2(normal, -1, normal1);
          setMulVec2(lowerLimit, -1, normal1);
          setMulVec2(upperLimit, -1, normal0);
        }
      } else {
        front = offset0 >= 0 && offset1 >= 0 && offset2 >= 0;
        if (front) {
          copyVec2(normal, normal1);
          copyVec2(lowerLimit, normal1);
          copyVec2(upperLimit, normal1);
        } else {
          setMulVec2(normal, -1, normal1);
          setMulVec2(lowerLimit, -1, normal2);
          setMulVec2(upperLimit, -1, normal0);
        }
      }
    } else if (hasVertex0) {
      if (convex1) {
        front = offset0 >= 0 || offset1 >= 0;
        if (front) {
          copyVec2(normal, normal1);
          copyVec2(lowerLimit, normal0);
          setMulVec2(upperLimit, -1, normal1);
        } else {
          setMulVec2(normal, -1, normal1);
          copyVec2(lowerLimit, normal1);
          setMulVec2(upperLimit, -1, normal1);
        }
      } else {
        front = offset0 >= 0 && offset1 >= 0;
        if (front) {
          copyVec2(normal, normal1);
          copyVec2(lowerLimit, normal1);
          setMulVec2(upperLimit, -1, normal1);
        } else {
          setMulVec2(normal, -1, normal1);
          copyVec2(lowerLimit, normal1);
          setMulVec2(upperLimit, -1, normal0);
        }
      }
    } else if (hasVertex3) {
      if (convex2) {
        front = offset1 >= 0 || offset2 >= 0;
        if (front) {
          copyVec2(normal, normal1);
          setMulVec2(lowerLimit, -1, normal1);
          copyVec2(upperLimit, normal2);
        } else {
          setMulVec2(normal, -1, normal1);
          setMulVec2(lowerLimit, -1, normal1);
          copyVec2(upperLimit, normal1);
        }
      } else {
        front = offset1 >= 0 && offset2 >= 0;
        if (front) {
          copyVec2(normal, normal1);
          setMulVec2(lowerLimit, -1, normal1);
          copyVec2(upperLimit, normal1);
        } else {
          setMulVec2(normal, -1, normal1);
          setMulVec2(lowerLimit, -1, normal2);
          copyVec2(upperLimit, normal1);
        }
      }
    } else {
      front = offset1 >= 0;
      if (front) {
        copyVec2(normal, normal1);
        setMulVec2(lowerLimit, -1, normal1);
        setMulVec2(upperLimit, -1, normal1);
      } else {
        setMulVec2(normal, -1, normal1);
        copyVec2(lowerLimit, normal1);
        copyVec2(upperLimit, normal1);
      }
    }
    polygonBA.count = polygonB.m_count;
    for (var i = 0; i < polygonB.m_count; ++i) {
      transformVec2(polygonBA.vertices[i], xf, polygonB.m_vertices[i]);
      rotVec2(polygonBA.normals[i], xf.q, polygonB.m_normals[i]);
    }
    var radius = polygonB.m_radius + edgeA.m_radius;
    manifold.pointCount = 0;
    {
      edgeAxis.type = EPAxisType.e_edgeA;
      edgeAxis.index = front ? 0 : 1;
      edgeAxis.separation = Infinity;
      for (var i = 0; i < polygonBA.count; ++i) {
        var v4 = polygonBA.vertices[i];
        var s2 = dotVec2(normal, v4) - dotVec2(normal, v13);
        if (s2 < edgeAxis.separation) {
          edgeAxis.separation = s2;
        }
      }
    }
    if (edgeAxis.type == EPAxisType.e_unknown) {
      return;
    }
    if (edgeAxis.separation > radius) {
      return;
    }
    {
      polygonAxis.type = EPAxisType.e_unknown;
      polygonAxis.index = -1;
      polygonAxis.separation = -Infinity;
      setVec2(perp, -normal.y, normal.x);
      for (var i = 0; i < polygonBA.count; ++i) {
        setMulVec2(n, -1, polygonBA.normals[i]);
        var s1 = dotVec2(n, polygonBA.vertices[i]) - dotVec2(n, v13);
        var s22 = dotVec2(n, polygonBA.vertices[i]) - dotVec2(n, v22);
        var s2 = math_min(s1, s22);
        if (s2 > radius) {
          polygonAxis.type = EPAxisType.e_edgeB;
          polygonAxis.index = i;
          polygonAxis.separation = s2;
          break;
        }
        if (dotVec2(n, perp) >= 0) {
          if (dotVec2(n, normal) - dotVec2(upperLimit, normal) < -SettingsInternal.angularSlop) {
            continue;
          }
        } else {
          if (dotVec2(n, normal) - dotVec2(lowerLimit, normal) < -SettingsInternal.angularSlop) {
            continue;
          }
        }
        if (s2 > polygonAxis.separation) {
          polygonAxis.type = EPAxisType.e_edgeB;
          polygonAxis.index = i;
          polygonAxis.separation = s2;
        }
      }
    }
    if (polygonAxis.type != EPAxisType.e_unknown && polygonAxis.separation > radius) {
      return;
    }
    var k_relativeTol = 0.98;
    var k_absoluteTol = 1e-3;
    var primaryAxis;
    if (polygonAxis.type == EPAxisType.e_unknown) {
      primaryAxis = edgeAxis;
    } else if (polygonAxis.separation > k_relativeTol * edgeAxis.separation + k_absoluteTol) {
      primaryAxis = polygonAxis;
    } else {
      primaryAxis = edgeAxis;
    }
    ie2[0].recycle(), ie2[1].recycle();
    if (primaryAxis.type == EPAxisType.e_edgeA) {
      manifold.type = ManifoldType.e_faceA;
      var bestIndex = 0;
      var bestValue = dotVec2(normal, polygonBA.normals[0]);
      for (var i = 1; i < polygonBA.count; ++i) {
        var value = dotVec2(normal, polygonBA.normals[i]);
        if (value < bestValue) {
          bestValue = value;
          bestIndex = i;
        }
      }
      var i1 = bestIndex;
      var i2 = i1 + 1 < polygonBA.count ? i1 + 1 : 0;
      copyVec2(ie2[0].v, polygonBA.vertices[i1]);
      ie2[0].id.setFeatures(0, ContactFeatureType.e_face, i1, ContactFeatureType.e_vertex);
      copyVec2(ie2[1].v, polygonBA.vertices[i2]);
      ie2[1].id.setFeatures(0, ContactFeatureType.e_face, i2, ContactFeatureType.e_vertex);
      if (front) {
        rf.i1 = 0;
        rf.i2 = 1;
        copyVec2(rf.v1, v13);
        copyVec2(rf.v2, v22);
        copyVec2(rf.normal, normal1);
      } else {
        rf.i1 = 1;
        rf.i2 = 0;
        copyVec2(rf.v1, v22);
        copyVec2(rf.v2, v13);
        setMulVec2(rf.normal, -1, normal1);
      }
    } else {
      manifold.type = ManifoldType.e_faceB;
      copyVec2(ie2[0].v, v13);
      ie2[0].id.setFeatures(0, ContactFeatureType.e_vertex, primaryAxis.index, ContactFeatureType.e_face);
      copyVec2(ie2[1].v, v22);
      ie2[1].id.setFeatures(0, ContactFeatureType.e_vertex, primaryAxis.index, ContactFeatureType.e_face);
      rf.i1 = primaryAxis.index;
      rf.i2 = rf.i1 + 1 < polygonBA.count ? rf.i1 + 1 : 0;
      copyVec2(rf.v1, polygonBA.vertices[rf.i1]);
      copyVec2(rf.v2, polygonBA.vertices[rf.i2]);
      copyVec2(rf.normal, polygonBA.normals[rf.i1]);
    }
    setVec2(rf.sideNormal1, rf.normal.y, -rf.normal.x);
    setVec2(rf.sideNormal2, -rf.sideNormal1.x, -rf.sideNormal1.y);
    rf.sideOffset1 = dotVec2(rf.sideNormal1, rf.v1);
    rf.sideOffset2 = dotVec2(rf.sideNormal2, rf.v2);
    clipPoints1[0].recycle(), clipPoints1[1].recycle();
    clipPoints2[0].recycle(), clipPoints2[1].recycle();
    var np1 = clipSegmentToLine(clipPoints1, ie2, rf.sideNormal1, rf.sideOffset1, rf.i1);
    if (np1 < SettingsInternal.maxManifoldPoints) {
      return;
    }
    var np2 = clipSegmentToLine(clipPoints2, clipPoints1, rf.sideNormal2, rf.sideOffset2, rf.i2);
    if (np2 < SettingsInternal.maxManifoldPoints) {
      return;
    }
    if (primaryAxis.type == EPAxisType.e_edgeA) {
      copyVec2(manifold.localNormal, rf.normal);
      copyVec2(manifold.localPoint, rf.v1);
    } else {
      copyVec2(manifold.localNormal, polygonB.m_normals[rf.i1]);
      copyVec2(manifold.localPoint, polygonB.m_vertices[rf.i1]);
    }
    var pointCount = 0;
    for (var i = 0; i < SettingsInternal.maxManifoldPoints; ++i) {
      var separation = dotVec2(rf.normal, clipPoints2[i].v) - dotVec2(rf.normal, rf.v1);
      if (separation <= radius) {
        var cp = manifold.points[pointCount];
        if (primaryAxis.type == EPAxisType.e_edgeA) {
          invTransformVec2(cp.localPoint, xf, clipPoints2[i].v);
          cp.id.set(clipPoints2[i].id);
        } else {
          copyVec2(cp.localPoint, clipPoints2[i].v);
          cp.id.set(clipPoints2[i].id);
          cp.id.swapFeatures();
        }
        ++pointCount;
      }
    }
    manifold.pointCount = pointCount;
  }, "CollideEdgePolygon");

  // code/world.ts
  function p2k(v3) {
    return vec2(v3.x * 10, v3.y * 10);
  }
  __name(p2k, "p2k");
  function k2p(v3) {
    return Vec2(v3.x / 10, v3.y / 10);
  }
  __name(k2p, "k2p");
  var world = new World({
    gravity: Vec2(0, 2400 / 100)
  });
  world.on("begin-contact", function(contact) {
    const bodyA = contact.getFixtureA().getBody().getUserData();
    const bodyB = contact.getFixtureB().getBody().getUserData();
    bodyA.trigger("collision_enter", bodyB);
    bodyB.trigger("collision_enter", bodyA);
  });
  world.on("end-contact", function(contact) {
    const bodyA = contact.getFixtureA().getBody().getUserData();
    const bodyB = contact.getFixtureB().getBody().getUserData();
    bodyA.trigger("collision_exit", bodyB);
    bodyB.trigger("collision_exit", bodyA);
  });
  world.on("pre-solve", function(contact, oldManifold2) {
  });
  world.on("post-solve", function(contact, contactImpulse) {
  });

  // code/collider.ts
  function collider(opt) {
    let _fixture;
    return {
      id: "collider",
      require: ["rigidBody"],
      add() {
        if (this.is("sprite") || this.is("rect")) {
          const w = (this.width || 61) / 20;
          const h = (this.height || 53) / 20;
          _fixture = this.body.createFixture({
            shape: new Box(w, h, Vec2(0, 0)),
            density: 1,
            friction: opt.friction || 0,
            restitution: opt.bounciness || 0,
            isSensor: opt.isTrigger
          });
        } else {
          _fixture = this.body.createFixture({
            shape: new Box(50 / 2, 4 / 2, Vec2(0, 0)),
            density: 1,
            friction: opt.friction || 0,
            restitution: opt.bounciness || 0,
            isSensor: opt.isTrigger
          });
        }
      },
      destroy() {
        this.body.destroyFixture(_fixture);
      }
    };
  }
  __name(collider, "collider");
  function circleCollider(opt) {
    let _fixture;
    return {
      id: "circleCollider",
      require: ["rigidBody"],
      add() {
        _fixture = this.body.createFixture({
          shape: new CircleShape(opt.offset ? k2p(opt.offset) : Vec2(0, 0), opt.radius / 10),
          density: 1,
          friction: opt.friction || 0,
          restitution: opt.bounciness || 0,
          isSensor: opt.isTrigger
        });
      },
      destroy() {
        this.body.destroyFixture(_fixture);
      }
    };
  }
  __name(circleCollider, "circleCollider");

  // code/joint.ts
  function springJoint(opt) {
    let joint;
    return {
      id: "distanceJoint",
      require: ["rigidBody"],
      add() {
        var _a20;
        joint = world.createJoint(new DistanceJoint({
          collideConnected: (_a20 = opt.enableCollision) != null ? _a20 : true,
          bodyA: this.body,
          bodyB: opt.connectedObject.body,
          localAnchorA: k2p(opt.anchor),
          localAnchorB: k2p(opt.connectedObjectAnchor),
          dampingRatio: opt.dampingRatio,
          frequencyHz: opt.frequency
        }));
        if (joint && opt.distance) {
          joint.setLength(opt.distance / 10);
        }
      },
      destroy() {
        if (joint) {
          world.destroyJoint(joint);
        }
      },
      get dampingRatio() {
        return joint ? joint.getDampingRatio() : 0;
      },
      set dampingRatio(d2) {
        if (joint) {
          joint.setDampingRatio(d2);
        }
      },
      get distance() {
        return joint ? joint.getLength() * 10 : 0;
      },
      set distance(d2) {
        if (joint) {
          joint.setLength(d2 / 10);
        }
      },
      get frequency() {
        return joint ? joint.getFrequency() : 0;
      },
      set frequency(f) {
        if (joint) {
          joint.setFrequency(f);
        }
      }
    };
  }
  __name(springJoint, "springJoint");
  function targetJoint(opt) {
    let joint;
    let ground;
    return {
      id: "targetJoint",
      require: ["rigidBody"],
      add() {
        var _a20;
        ground = world.createBody();
        joint = world.createJoint(new MouseJoint({
          collideConnected: (_a20 = opt.enableCollision) != null ? _a20 : true,
          bodyA: ground,
          bodyB: this.body,
          target: opt.anchor ? Vec2(opt.anchor.x, opt.anchor.y) : this.body.getWorldCenter(),
          dampingRatio: opt.dampingRatio,
          frequencyHz: opt.frequency,
          maxForce: opt.maxForce || 0
        }));
      },
      destroy() {
        if (ground) {
          world.destroyBody(ground);
        }
        if (joint) {
          world.destroyJoint(joint);
        }
      },
      get dampingRatio() {
        return joint ? joint.getDampingRatio() : 0;
      },
      set dampingRatio(d2) {
        if (joint) {
          joint.setDampingRatio(d2);
        }
      },
      get frequency() {
        return joint ? joint.getFrequency() : 0;
      },
      set frequency(f) {
        if (joint) {
          joint.setFrequency(f);
        }
      },
      get target() {
        return joint ? p2k(joint.getTarget()) : vec2();
      },
      set target(t) {
        if (joint) {
          joint.setTarget(k2p(t));
        }
      }
    };
  }
  __name(targetJoint, "targetJoint");

  // code/effectors.ts
  function pointEffector(opt) {
    var _a20, _b, _c, _d, _e;
    let forceMagnitude = (_a20 = opt.forceMagnitude) != null ? _a20 : 0;
    let forceVariation = (_b = opt.forceVariation) != null ? _b : 0;
    let distanceScale = opt.distanceScale || 1;
    let drag = (_c = opt.drag) != null ? _c : 0;
    let angularDrag = (_d = opt.angularDrag) != null ? _d : 0;
    let forceMode = (_e = opt.forceMode) != null ? _e : "constant";
    return {
      id: "pointEffector",
      require: ["rigidBody"],
      update() {
        get("rigidBody").forEach((rb) => {
          if (rb !== this) {
            const v3 = rb.pos.sub(this.pos);
            const l = v3.len();
            const d2 = l * distanceScale / 10;
            const s2 = forceMode === "constant" ? 1 : forceMode === "inverseLinear" ? 1 / d2 : 1 / __pow(d2, 2);
            rb.addForce(v3.scale(forceMagnitude * s2 / l));
          }
        });
      },
      get forceMagnitude() {
        return forceMagnitude;
      },
      set forceMagnitude(value) {
        forceMagnitude = value;
      },
      get forceVariation() {
        return forceVariation;
      },
      set forceVariation(value) {
        forceVariation = value;
      },
      get distanceScale() {
        return distanceScale;
      },
      set distanceScale(value) {
        distanceScale = value;
      },
      get drag() {
        return drag;
      },
      set drag(value) {
        drag = value;
      },
      get angularDrag() {
        return angularDrag;
      },
      set angularDrag(value) {
        angularDrag = value;
      },
      get forceMode() {
        return forceMode;
      },
      set forceMode(value) {
        forceMode = value;
      }
    };
  }
  __name(pointEffector, "pointEffector");

  // code/rigid_body.ts
  function rigidBody(opt) {
    let _body;
    return {
      id: "rigidBody",
      require: ["pos", "rotate"],
      get body() {
        return _body;
      },
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
        });
      },
      destroy() {
        world.destroyBody(_body);
      },
      update() {
        this.pos = p2k(_body.getPosition());
        this.angle = rad2deg(_body.getAngle());
      },
      addForce(force, mode = "force") {
        if (mode === "force") {
          _body.applyForce(k2p(force), _body.getPosition());
        } else {
          _body.applyLinearImpulse(k2p(force), _body.getPosition());
        }
      },
      addForceAtPosition(force, position, mode = "force") {
        if (mode === "force") {
          _body.applyForce(k2p(force), k2p(position));
        } else {
          _body.applyLinearImpulse(k2p(force), k2p(position));
        }
      },
      addRelativeForce(force, mode = "force") {
        if (mode === "force") {
          _body.applyForce(_body.getWorldVector(k2p(force)), _body.getPosition());
        } else {
          _body.applyLinearImpulse(_body.getWorldVector(k2p(force)), _body.getPosition());
        }
      },
      addTorque(torque, mode = "force") {
        if (mode === "force") {
          _body.applyTorque(torque);
        } else {
          _body.applyAngularImpulse(torque);
        }
      },
      getPoint(point2) {
        return p2k(_body.getLocalPoint(k2p(point2)));
      },
      getRelativePoint(relativePoint) {
        return p2k(_body.getWorldPoint(k2p(relativePoint)));
      },
      getRelativePointVelocity(relativePoint) {
        return p2k(_body.getLinearVelocityFromLocalPoint(k2p(relativePoint)));
      },
      getVector(vector) {
        return p2k(_body.getLocalVector(k2p(vector)));
      },
      getRelativeVector(relativeVector) {
        return p2k(_body.getWorldVector(k2p(relativeVector)));
      },
      get isAwake() {
        return _body.isAwake();
      },
      get isSleeping() {
        return !_body.isAwake();
      },
      sleep() {
        _body.setAwake(false);
      },
      wakeUp() {
        _body.setAwake(true);
      },
      onCollisionEnter(callback) {
        this.on("collide_enter", callback);
      },
      onCollisionStay(callback) {
        this.on("collide_stay", callback);
      },
      onCollisionExit(callback) {
        this.on("collide_exit", callback);
      },
      jump(force) {
        this.addForce(vec2(0, -force), "impulse");
      }
    };
  }
  __name(rigidBody, "rigidBody");

  // code/main.ts
  bo();
  onUpdate(() => {
    const timeStep = 1 / 60;
    const velocityIterations = 10;
    const positionIterations = 8;
    world.step(timeStep, velocityIterations, positionIterations);
  });
  loadSprite("bean", "sprites/bean.png");
  var bean = add([
    sprite("bean"),
    anchor("center"),
    pos(200, 40),
    rotate(0),
    rigidBody({ type: "dynamic", freezeRotation: true }),
    circleCollider({ radius: 25, friction: 0.5 }),
    pointEffector({ forceMagnitude: -1e4, forceMode: "inverseLinear", distanceScale: 0.1 })
  ]);
  add([
    rect(300, 40),
    anchor("center"),
    pos(200, 300),
    rotate(0),
    rigidBody({ type: "static" }),
    collider({ friction: 0.5 })
  ]);
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
        });
      }
    }
  ]);
  loop(1, () => {
    add([
      sprite("bean"),
      anchor("center"),
      pos(rand(0, 400), 40),
      rotate(0),
      rigidBody({ type: "dynamic", freezeRotation: false }),
      circleCollider({ radius: 25, friction: 0.5 }),
      offscreen({ destroy: true })
    ]);
  });
  onKeyPress("space", () => {
    bean.jump(500);
  });
  onKeyDown("right", () => {
    bean.addForce(vec2(500, 0));
  });
  onKeyDown("left", () => {
    bean.addForce(vec2(-500, 0));
  });
  onMousePress(() => {
    bean.use(targetJoint({ dampingRatio: 0.5, frequency: 5, maxForce: 1e4 }));
    bean.target = mousePos();
  });
  onMouseMove(() => {
    if (bean.is("targetJoint")) {
      bean.target = mousePos();
    }
  });
  onMouseRelease(() => {
    bean.unuse("targetJoint");
  });
})();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/**
 * Planck.js v1.0.0-beta.16
 * @license The MIT license
 * @copyright Copyright (c) 2021 Erin Catto, Ali Shakiba
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
//# sourceMappingURL=game.js.map
