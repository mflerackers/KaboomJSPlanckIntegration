(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
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
      var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // node_modules/kaboom/dist/kaboom.mjs
  var yi = Object.defineProperty;
  var i = /* @__PURE__ */ __name((n2, e3) => yi(n2, "name", { value: e3, configurable: true }), "i");
  var gr = (() => {
    for (var n2 = new Uint8Array(128), e3 = 0; e3 < 64; e3++)
      n2[e3 < 26 ? e3 + 65 : e3 < 52 ? e3 + 71 : e3 < 62 ? e3 - 4 : e3 * 4 - 205] = e3;
    return (o) => {
      for (var c2 = o.length, g = new Uint8Array((c2 - (o[c2 - 1] == "=") - (o[c2 - 2] == "=")) * 3 / 4 | 0), m = 0, P3 = 0; m < c2; ) {
        var I = n2[o.charCodeAt(m++)], j = n2[o.charCodeAt(m++)], y = n2[o.charCodeAt(m++)], X = n2[o.charCodeAt(m++)];
        g[P3++] = I << 2 | j >> 4, g[P3++] = j << 4 | y >> 2, g[P3++] = y << 6 | X;
      }
      return g;
    };
  })();
  function Ge(n2) {
    return n2 * Math.PI / 180;
  }
  __name(Ge, "Ge");
  i(Ge, "deg2rad");
  function ot(n2) {
    return n2 * 180 / Math.PI;
  }
  __name(ot, "ot");
  i(ot, "rad2deg");
  function Le(n2, e3, o) {
    return e3 > o ? Le(n2, o, e3) : Math.min(Math.max(n2, e3), o);
  }
  __name(Le, "Le");
  i(Le, "clamp");
  function Ve(n2, e3, o) {
    if (typeof n2 == "number" && typeof e3 == "number")
      return n2 + (e3 - n2) * o;
    if (n2 instanceof v && e3 instanceof v)
      return n2.lerp(e3, o);
    if (n2 instanceof W && e3 instanceof W)
      return n2.lerp(e3, o);
    throw new Error(`Bad value for lerp(): ${n2}, ${e3}. Only number, Vec2 and Color is supported.`);
  }
  __name(Ve, "Ve");
  i(Ve, "lerp");
  function _e(n2, e3, o, c2, g) {
    return c2 + (n2 - e3) / (o - e3) * (g - c2);
  }
  __name(_e, "_e");
  i(_e, "map");
  function br(n2, e3, o, c2, g) {
    return Le(_e(n2, e3, o, c2, g), c2, g);
  }
  __name(br, "br");
  i(br, "mapc");
  var _a;
  var v = (/* @__PURE__ */ __name(_a = class {
    constructor(e3 = 0, o = e3) {
      __publicField(this, "x", 0);
      __publicField(this, "y", 0);
      this.x = e3, this.y = o;
    }
    static fromAngle(e3) {
      let o = Ge(e3);
      return new _a(Math.cos(o), Math.sin(o));
    }
    clone() {
      return new _a(this.x, this.y);
    }
    add(...e3) {
      let o = T(...e3);
      return new _a(this.x + o.x, this.y + o.y);
    }
    sub(...e3) {
      let o = T(...e3);
      return new _a(this.x - o.x, this.y - o.y);
    }
    scale(...e3) {
      let o = T(...e3);
      return new _a(this.x * o.x, this.y * o.y);
    }
    dist(...e3) {
      let o = T(...e3);
      return this.sub(o).len();
    }
    sdist(...e3) {
      let o = T(...e3);
      return this.sub(o).slen();
    }
    len() {
      return Math.sqrt(this.dot(this));
    }
    slen() {
      return this.dot(this);
    }
    unit() {
      let e3 = this.len();
      return e3 === 0 ? new _a(0) : this.scale(1 / e3);
    }
    normal() {
      return new _a(this.y, -this.x);
    }
    reflect(e3) {
      return this.sub(e3.scale(2 * this.dot(e3)));
    }
    project(e3) {
      return e3.scale(e3.dot(this) / e3.len());
    }
    reject(e3) {
      return this.sub(this.project(e3));
    }
    dot(e3) {
      return this.x * e3.x + this.y * e3.y;
    }
    cross(e3) {
      return this.x * e3.y - this.y * e3.x;
    }
    angle(...e3) {
      let o = T(...e3);
      return ot(Math.atan2(this.y - o.y, this.x - o.x));
    }
    angleBetween(...e3) {
      let o = T(...e3);
      return ot(Math.atan2(this.cross(o), this.dot(o)));
    }
    lerp(e3, o) {
      return new _a(Ve(this.x, e3.x, o), Ve(this.y, e3.y, o));
    }
    slerp(e3, o) {
      let c2 = this.dot(e3), g = this.cross(e3), m = Math.atan2(g, c2);
      return this.scale(Math.sin((1 - o) * m)).add(e3.scale(Math.sin(o * m))).scale(1 / g);
    }
    isZero() {
      return this.x === 0 && this.y === 0;
    }
    toFixed(e3) {
      return new _a(Number(this.x.toFixed(e3)), Number(this.y.toFixed(e3)));
    }
    transform(e3) {
      return e3.multVec2(this);
    }
    eq(e3) {
      return this.x === e3.x && this.y === e3.y;
    }
    bbox() {
      return new de(this, 0, 0);
    }
    toString() {
      return `vec2(${this.x.toFixed(2)}, ${this.y.toFixed(2)})`;
    }
  }, "n"), (() => {
    i(_a, "Vec2");
  })(), __publicField(_a, "LEFT", new _a(-1, 0)), __publicField(_a, "RIGHT", new _a(1, 0)), __publicField(_a, "UP", new _a(0, -1)), __publicField(_a, "DOWN", new _a(0, 1)), _a);
  function T(...n2) {
    if (n2.length === 1) {
      if (n2[0] instanceof v)
        return new v(n2[0].x, n2[0].y);
      if (Array.isArray(n2[0]) && n2[0].length === 2)
        return new v(...n2[0]);
    }
    return new v(...n2);
  }
  __name(T, "T");
  i(T, "vec2");
  var _a2;
  var W = (/* @__PURE__ */ __name(_a2 = class {
    constructor(e3, o, c2) {
      __publicField(this, "r", 255);
      __publicField(this, "g", 255);
      __publicField(this, "b", 255);
      this.r = Le(e3, 0, 255), this.g = Le(o, 0, 255), this.b = Le(c2, 0, 255);
    }
    static fromArray(e3) {
      return new _a2(e3[0], e3[1], e3[2]);
    }
    static fromHex(e3) {
      if (typeof e3 == "number")
        return new _a2(e3 >> 16 & 255, e3 >> 8 & 255, e3 >> 0 & 255);
      if (typeof e3 == "string") {
        let o = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e3);
        return new _a2(parseInt(o[1], 16), parseInt(o[2], 16), parseInt(o[3], 16));
      } else
        throw new Error("Invalid hex color format");
    }
    static fromHSL(e3, o, c2) {
      if (o == 0)
        return new _a2(255 * c2, 255 * c2, 255 * c2);
      let g = i((X, S, q) => (q < 0 && (q += 1), q > 1 && (q -= 1), q < 1 / 6 ? X + (S - X) * 6 * q : q < 1 / 2 ? S : q < 2 / 3 ? X + (S - X) * (2 / 3 - q) * 6 : X), "hue2rgb"), m = c2 < 0.5 ? c2 * (1 + o) : c2 + o - c2 * o, P3 = 2 * c2 - m, I = g(P3, m, e3 + 1 / 3), j = g(P3, m, e3), y = g(P3, m, e3 - 1 / 3);
      return new _a2(Math.round(I * 255), Math.round(j * 255), Math.round(y * 255));
    }
    clone() {
      return new _a2(this.r, this.g, this.b);
    }
    lighten(e3) {
      return new _a2(this.r + e3, this.g + e3, this.b + e3);
    }
    darken(e3) {
      return this.lighten(-e3);
    }
    invert() {
      return new _a2(255 - this.r, 255 - this.g, 255 - this.b);
    }
    mult(e3) {
      return new _a2(this.r * e3.r / 255, this.g * e3.g / 255, this.b * e3.b / 255);
    }
    lerp(e3, o) {
      return new _a2(Ve(this.r, e3.r, o), Ve(this.g, e3.g, o), Ve(this.b, e3.b, o));
    }
    toHSL() {
      let e3 = this.r / 255, o = this.g / 255, c2 = this.b / 255, g = Math.max(e3, o, c2), m = Math.min(e3, o, c2), P3 = (g + m) / 2, I = P3, j = P3;
      if (g == m)
        P3 = I = 0;
      else {
        let y = g - m;
        switch (I = j > 0.5 ? y / (2 - g - m) : y / (g + m), g) {
          case e3:
            P3 = (o - c2) / y + (o < c2 ? 6 : 0);
            break;
          case o:
            P3 = (c2 - e3) / y + 2;
            break;
          case c2:
            P3 = (e3 - o) / y + 4;
            break;
        }
        P3 /= 6;
      }
      return [P3, I, j];
    }
    eq(e3) {
      return this.r === e3.r && this.g === e3.g && this.b === e3.b;
    }
    toString() {
      return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }
    toHex() {
      return "#" + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
    }
  }, "n"), (() => {
    i(_a2, "Color");
  })(), __publicField(_a2, "RED", new _a2(255, 0, 0)), __publicField(_a2, "GREEN", new _a2(0, 255, 0)), __publicField(_a2, "BLUE", new _a2(0, 0, 255)), __publicField(_a2, "YELLOW", new _a2(255, 255, 0)), __publicField(_a2, "MAGENTA", new _a2(255, 0, 255)), __publicField(_a2, "CYAN", new _a2(0, 255, 255)), __publicField(_a2, "WHITE", new _a2(255, 255, 255)), __publicField(_a2, "BLACK", new _a2(0, 0, 0)), _a2);
  function J(...n2) {
    if (n2.length === 0)
      return new W(255, 255, 255);
    if (n2.length === 1) {
      if (n2[0] instanceof W)
        return n2[0].clone();
      if (typeof n2[0] == "string")
        return W.fromHex(n2[0]);
      if (Array.isArray(n2[0]) && n2[0].length === 3)
        return W.fromArray(n2[0]);
    }
    return new W(...n2);
  }
  __name(J, "J");
  i(J, "rgb");
  var vr = i((n2, e3, o) => W.fromHSL(n2, e3, o), "hsl2rgb");
  var _a3;
  var oe = (/* @__PURE__ */ __name(_a3 = class {
    constructor(e3, o, c2, g) {
      __publicField(this, "x", 0);
      __publicField(this, "y", 0);
      __publicField(this, "w", 1);
      __publicField(this, "h", 1);
      this.x = e3, this.y = o, this.w = c2, this.h = g;
    }
    scale(e3) {
      return new _a3(this.x + this.w * e3.x, this.y + this.h * e3.y, this.w * e3.w, this.h * e3.h);
    }
    pos() {
      return new v(this.x, this.y);
    }
    clone() {
      return new _a3(this.x, this.y, this.w, this.h);
    }
    eq(e3) {
      return this.x === e3.x && this.y === e3.y && this.w === e3.w && this.h === e3.h;
    }
    toString() {
      return `quad(${this.x}, ${this.y}, ${this.w}, ${this.h})`;
    }
  }, "n"), (() => {
    i(_a3, "Quad");
  })(), _a3);
  function ce(n2, e3, o, c2) {
    return new oe(n2, e3, o, c2);
  }
  __name(ce, "ce");
  i(ce, "quad");
  var _a4;
  var Ue = (/* @__PURE__ */ __name(_a4 = class {
    constructor(e3) {
      __publicField(this, "m", [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
      e3 && (this.m = e3);
    }
    static translate(e3) {
      return new _a4([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e3.x, e3.y, 0, 1]);
    }
    static scale(e3) {
      return new _a4([e3.x, 0, 0, 0, 0, e3.y, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    static rotateX(e3) {
      e3 = Ge(-e3);
      let o = Math.cos(e3), c2 = Math.sin(e3);
      return new _a4([1, 0, 0, 0, 0, o, -c2, 0, 0, c2, o, 0, 0, 0, 0, 1]);
    }
    static rotateY(e3) {
      e3 = Ge(-e3);
      let o = Math.cos(e3), c2 = Math.sin(e3);
      return new _a4([o, 0, c2, 0, 0, 1, 0, 0, -c2, 0, o, 0, 0, 0, 0, 1]);
    }
    static rotateZ(e3) {
      e3 = Ge(-e3);
      let o = Math.cos(e3), c2 = Math.sin(e3);
      return new _a4([o, -c2, 0, 0, c2, o, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
    }
    translate(e3) {
      return this.m[12] += this.m[0] * e3.x + this.m[4] * e3.y, this.m[13] += this.m[1] * e3.x + this.m[5] * e3.y, this.m[14] += this.m[2] * e3.x + this.m[6] * e3.y, this.m[15] += this.m[3] * e3.x + this.m[7] * e3.y, this;
    }
    scale(e3) {
      return this.m[0] *= e3.x, this.m[4] *= e3.y, this.m[1] *= e3.x, this.m[5] *= e3.y, this.m[2] *= e3.x, this.m[6] *= e3.y, this.m[3] *= e3.x, this.m[7] *= e3.y, this;
    }
    rotate(e3) {
      e3 = Ge(-e3);
      let o = Math.cos(e3), c2 = Math.sin(e3), g = this.m[0], m = this.m[1], P3 = this.m[4], I = this.m[5];
      return this.m[0] = g * o + m * c2, this.m[1] = -g * c2 + m * o, this.m[4] = P3 * o + I * c2, this.m[5] = -P3 * c2 + I * o, this;
    }
    mult(e3) {
      let o = [];
      for (let c2 = 0; c2 < 4; c2++)
        for (let g = 0; g < 4; g++)
          o[c2 * 4 + g] = this.m[0 * 4 + g] * e3.m[c2 * 4 + 0] + this.m[1 * 4 + g] * e3.m[c2 * 4 + 1] + this.m[2 * 4 + g] * e3.m[c2 * 4 + 2] + this.m[3 * 4 + g] * e3.m[c2 * 4 + 3];
      return new _a4(o);
    }
    multVec2(e3) {
      return new v(e3.x * this.m[0] + e3.y * this.m[4] + this.m[12], e3.x * this.m[1] + e3.y * this.m[5] + this.m[13]);
    }
    getTranslation() {
      return new v(this.m[12], this.m[13]);
    }
    getScale() {
      if (this.m[0] != 0 || this.m[1] != 0) {
        let e3 = this.m[0] * this.m[5] - this.m[1] * this.m[4], o = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
        return new v(o, e3 / o);
      } else if (this.m[4] != 0 || this.m[5] != 0) {
        let e3 = this.m[0] * this.m[5] - this.m[1] * this.m[4], o = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
        return new v(e3 / o, o);
      } else
        return new v(0, 0);
    }
    getRotation() {
      if (this.m[0] != 0 || this.m[1] != 0) {
        let e3 = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
        return ot(this.m[1] > 0 ? Math.acos(this.m[0] / e3) : -Math.acos(this.m[0] / e3));
      } else if (this.m[4] != 0 || this.m[5] != 0) {
        let e3 = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
        return ot(Math.PI / 2 - (this.m[5] > 0 ? Math.acos(-this.m[4] / e3) : -Math.acos(this.m[4] / e3)));
      } else
        return 0;
    }
    getSkew() {
      if (this.m[0] != 0 || this.m[1] != 0) {
        let e3 = Math.sqrt(this.m[0] * this.m[0] + this.m[1] * this.m[1]);
        return new v(Math.atan(this.m[0] * this.m[4] + this.m[1] * this.m[5]) / (e3 * e3), 0);
      } else if (this.m[4] != 0 || this.m[5] != 0) {
        let e3 = Math.sqrt(this.m[4] * this.m[4] + this.m[5] * this.m[5]);
        return new v(0, Math.atan(this.m[0] * this.m[4] + this.m[1] * this.m[5]) / (e3 * e3));
      } else
        return new v(0, 0);
    }
    invert() {
      let e3 = [], o = this.m[10] * this.m[15] - this.m[14] * this.m[11], c2 = this.m[9] * this.m[15] - this.m[13] * this.m[11], g = this.m[9] * this.m[14] - this.m[13] * this.m[10], m = this.m[8] * this.m[15] - this.m[12] * this.m[11], P3 = this.m[8] * this.m[14] - this.m[12] * this.m[10], I = this.m[8] * this.m[13] - this.m[12] * this.m[9], j = this.m[6] * this.m[15] - this.m[14] * this.m[7], y = this.m[5] * this.m[15] - this.m[13] * this.m[7], X = this.m[5] * this.m[14] - this.m[13] * this.m[6], S = this.m[4] * this.m[15] - this.m[12] * this.m[7], q = this.m[4] * this.m[14] - this.m[12] * this.m[6], E = this.m[5] * this.m[15] - this.m[13] * this.m[7], K = this.m[4] * this.m[13] - this.m[12] * this.m[5], Q2 = this.m[6] * this.m[11] - this.m[10] * this.m[7], te = this.m[5] * this.m[11] - this.m[9] * this.m[7], k = this.m[5] * this.m[10] - this.m[9] * this.m[6], pe = this.m[4] * this.m[11] - this.m[8] * this.m[7], C = this.m[4] * this.m[10] - this.m[8] * this.m[6], Ae = this.m[4] * this.m[9] - this.m[8] * this.m[5];
      e3[0] = this.m[5] * o - this.m[6] * c2 + this.m[7] * g, e3[4] = -(this.m[4] * o - this.m[6] * m + this.m[7] * P3), e3[8] = this.m[4] * c2 - this.m[5] * m + this.m[7] * I, e3[12] = -(this.m[4] * g - this.m[5] * P3 + this.m[6] * I), e3[1] = -(this.m[1] * o - this.m[2] * c2 + this.m[3] * g), e3[5] = this.m[0] * o - this.m[2] * m + this.m[3] * P3, e3[9] = -(this.m[0] * c2 - this.m[1] * m + this.m[3] * I), e3[13] = this.m[0] * g - this.m[1] * P3 + this.m[2] * I, e3[2] = this.m[1] * j - this.m[2] * y + this.m[3] * X, e3[6] = -(this.m[0] * j - this.m[2] * S + this.m[3] * q), e3[10] = this.m[0] * E - this.m[1] * S + this.m[3] * K, e3[14] = -(this.m[0] * X - this.m[1] * q + this.m[2] * K), e3[3] = -(this.m[1] * Q2 - this.m[2] * te + this.m[3] * k), e3[7] = this.m[0] * Q2 - this.m[2] * pe + this.m[3] * C, e3[11] = -(this.m[0] * te - this.m[1] * pe + this.m[3] * Ae), e3[15] = this.m[0] * k - this.m[1] * C + this.m[2] * Ae;
      let $ = this.m[0] * e3[0] + this.m[1] * e3[4] + this.m[2] * e3[8] + this.m[3] * e3[12];
      for (let Te = 0; Te < 4; Te++)
        for (let ye = 0; ye < 4; ye++)
          e3[Te * 4 + ye] *= 1 / $;
      return new _a4(e3);
    }
    clone() {
      return new _a4([...this.m]);
    }
    toString() {
      return this.m.toString();
    }
  }, "n"), (() => {
    i(_a4, "Mat4");
  })(), _a4);
  function In(n2, e3, o, c2 = (g) => -Math.cos(g)) {
    return n2 + (c2(o) + 1) / 2 * (e3 - n2);
  }
  __name(In, "In");
  i(In, "wave");
  var xi = 1103515245;
  var Ui = 12345;
  var wr = 2147483648;
  var _a5;
  var bt = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a5 = class {
    constructor(e3) {
      __publicField(this, "seed");
      this.seed = e3;
    }
    gen() {
      return this.seed = (xi * this.seed + Ui) % wr, this.seed / wr;
    }
    genNumber(e3, o) {
      return e3 + this.gen() * (o - e3);
    }
    genVec2(e3, o) {
      return new v(this.genNumber(e3.x, o.x), this.genNumber(e3.y, o.y));
    }
    genColor(e3, o) {
      return new W(this.genNumber(e3.r, o.r), this.genNumber(e3.g, o.g), this.genNumber(e3.b, o.b));
    }
    genAny(...e3) {
      if (e3.length === 0)
        return this.gen();
      if (e3.length === 1) {
        if (typeof e3[0] == "number")
          return this.genNumber(0, e3[0]);
        if (e3[0] instanceof v)
          return this.genVec2(T(0, 0), e3[0]);
        if (e3[0] instanceof W)
          return this.genColor(J(0, 0, 0), e3[0]);
      } else if (e3.length === 2) {
        if (typeof e3[0] == "number" && typeof e3[1] == "number")
          return this.genNumber(e3[0], e3[1]);
        if (e3[0] instanceof v && e3[1] instanceof v)
          return this.genVec2(e3[0], e3[1]);
        if (e3[0] instanceof W && e3[1] instanceof W)
          return this.genColor(e3[0], e3[1]);
      }
    }
  }, "_this"), (() => {
    i(_a5, "RNG");
  })(), _a5), "bt");
  var Bn = new bt(Date.now());
  function yr(n2) {
    return n2 != null && (Bn.seed = n2), Bn.seed;
  }
  __name(yr, "yr");
  i(yr, "randSeed");
  function xt(...n2) {
    return Bn.genAny(...n2);
  }
  __name(xt, "xt");
  i(xt, "rand");
  function Ln(...n2) {
    return Math.floor(xt(...n2));
  }
  __name(Ln, "Ln");
  i(Ln, "randi");
  function xr(n2) {
    return xt() <= n2;
  }
  __name(xr, "xr");
  i(xr, "chance");
  function Ur(n2) {
    return n2[Ln(n2.length)];
  }
  __name(Ur, "Ur");
  i(Ur, "choose");
  function Er(n2, e3) {
    return n2.pos.x + n2.width > e3.pos.x && n2.pos.x < e3.pos.x + e3.width && n2.pos.y + n2.height > e3.pos.y && n2.pos.y < e3.pos.y + e3.height;
  }
  __name(Er, "Er");
  i(Er, "testRectRect");
  function Ei(n2, e3) {
    if (n2.p1.x === n2.p2.x && n2.p1.y === n2.p2.y || e3.p1.x === e3.p2.x && e3.p1.y === e3.p2.y)
      return null;
    let o = (e3.p2.y - e3.p1.y) * (n2.p2.x - n2.p1.x) - (e3.p2.x - e3.p1.x) * (n2.p2.y - n2.p1.y);
    if (o === 0)
      return null;
    let c2 = ((e3.p2.x - e3.p1.x) * (n2.p1.y - e3.p1.y) - (e3.p2.y - e3.p1.y) * (n2.p1.x - e3.p1.x)) / o, g = ((n2.p2.x - n2.p1.x) * (n2.p1.y - e3.p1.y) - (n2.p2.y - n2.p1.y) * (n2.p1.x - e3.p1.x)) / o;
    return c2 < 0 || c2 > 1 || g < 0 || g > 1 ? null : c2;
  }
  __name(Ei, "Ei");
  i(Ei, "testLineLineT");
  function it(n2, e3) {
    let o = Ei(n2, e3);
    return o ? T(n2.p1.x + o * (n2.p2.x - n2.p1.x), n2.p1.y + o * (n2.p2.y - n2.p1.y)) : null;
  }
  __name(it, "it");
  i(it, "testLineLine");
  function Sr(n2, e3) {
    if (vt(n2, e3.p1) || vt(n2, e3.p2))
      return true;
    let o = n2.points();
    return !!it(e3, new Ie(o[0], o[1])) || !!it(e3, new Ie(o[1], o[2])) || !!it(e3, new Ie(o[2], o[3])) || !!it(e3, new Ie(o[3], o[0]));
  }
  __name(Sr, "Sr");
  i(Sr, "testRectLine");
  function vt(n2, e3) {
    return e3.x > n2.pos.x && e3.x < n2.pos.x + n2.width && e3.y > n2.pos.y && e3.y < n2.pos.y + n2.height;
  }
  __name(vt, "vt");
  i(vt, "testRectPoint");
  function Cr(n2, e3) {
    let o = e3.sub(n2.p1), c2 = n2.p2.sub(n2.p1);
    if (Math.abs(o.cross(c2)) > Number.EPSILON)
      return false;
    let g = o.dot(c2) / c2.dot(c2);
    return g >= 0 && g <= 1;
  }
  __name(Cr, "Cr");
  i(Cr, "testLinePoint");
  function Vn(n2, e3) {
    let o = n2.p2.sub(n2.p1), c2 = o.dot(o), g = n2.p1.sub(e3.center), m = 2 * o.dot(g), P3 = g.dot(g) - e3.radius * e3.radius, I = m * m - 4 * c2 * P3;
    if (c2 <= Number.EPSILON || I < 0)
      return false;
    if (I == 0) {
      let j = -m / (2 * c2);
      if (j >= 0 && j <= 1)
        return true;
    } else {
      let j = (-m + Math.sqrt(I)) / (2 * c2), y = (-m - Math.sqrt(I)) / (2 * c2);
      if (j >= 0 && j <= 1 || y >= 0 && y <= 1)
        return true;
    }
    return Ar(e3, n2.p1);
  }
  __name(Vn, "Vn");
  i(Vn, "testLineCircle");
  function Ar(n2, e3) {
    return n2.center.sdist(e3) < n2.radius * n2.radius;
  }
  __name(Ar, "Ar");
  i(Ar, "testCirclePoint");
  function Tr(n2, e3) {
    let o = e3.pts[e3.pts.length - 1];
    for (let c2 of e3.pts) {
      if (Vn(new Ie(o, c2), n2))
        return true;
      o = c2;
    }
    return Ar(n2, e3.pts[0]) ? true : _n(e3, n2.center);
  }
  __name(Tr, "Tr");
  i(Tr, "testCirclePolygon");
  function _n(n2, e3) {
    let o = false, c2 = n2.pts;
    for (let g = 0, m = c2.length - 1; g < c2.length; m = g++)
      c2[g].y > e3.y != c2[m].y > e3.y && e3.x < (c2[m].x - c2[g].x) * (e3.y - c2[g].y) / (c2[m].y - c2[g].y) + c2[g].x && (o = !o);
    return o;
  }
  __name(_n, "_n");
  i(_n, "testPolygonPoint");
  var _a6;
  var Ie = (/* @__PURE__ */ __name(_a6 = class {
    constructor(e3, o) {
      __publicField(this, "p1");
      __publicField(this, "p2");
      this.p1 = e3.clone(), this.p2 = o.clone();
    }
    transform(e3) {
      return new _a6(e3.multVec2(this.p1), e3.multVec2(this.p2));
    }
    bbox() {
      return de.fromPoints(this.p1, this.p2);
    }
    area() {
      return this.p1.dist(this.p2);
    }
    clone() {
      return new _a6(this.p1, this.p2);
    }
  }, "n"), (() => {
    i(_a6, "Line");
  })(), _a6);
  var _a7;
  var de = (/* @__PURE__ */ __name(_a7 = class {
    constructor(e3, o, c2) {
      __publicField(this, "pos");
      __publicField(this, "width");
      __publicField(this, "height");
      this.pos = e3.clone(), this.width = o, this.height = c2;
    }
    static fromPoints(e3, o) {
      return new _a7(e3.clone(), o.x - e3.x, o.y - e3.y);
    }
    center() {
      return new v(this.pos.x + this.width / 2, this.pos.y + this.height / 2);
    }
    points() {
      return [this.pos, this.pos.add(this.width, 0), this.pos.add(this.width, this.height), this.pos.add(0, this.height)];
    }
    transform(e3) {
      return new Ke(this.points().map((o) => e3.multVec2(o)));
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
    distToPoint(e3) {
      return Math.sqrt(this.sdistToPoint(e3));
    }
    sdistToPoint(e3) {
      let o = this.pos, c2 = this.pos.add(this.width, this.height), g = Math.max(o.x - e3.x, 0, e3.x - c2.x), m = Math.max(o.y - e3.y, 0, e3.y - c2.y);
      return g * g + m * m;
    }
  }, "n"), (() => {
    i(_a7, "Rect");
  })(), _a7);
  var _a8;
  var yt = (/* @__PURE__ */ __name(_a8 = class {
    constructor(e3, o) {
      __publicField(this, "center");
      __publicField(this, "radius");
      this.center = e3.clone(), this.radius = o;
    }
    transform(e3) {
      return new Fn(this.center, this.radius, this.radius).transform(e3);
    }
    bbox() {
      return de.fromPoints(this.center.sub(T(this.radius)), this.center.add(T(this.radius)));
    }
    area() {
      return this.radius * this.radius * Math.PI;
    }
    clone() {
      return new _a8(this.center, this.radius);
    }
  }, "n"), (() => {
    i(_a8, "Circle");
  })(), _a8);
  var _a9;
  var Fn = (/* @__PURE__ */ __name(_a9 = class {
    constructor(e3, o, c2) {
      __publicField(this, "center");
      __publicField(this, "radiusX");
      __publicField(this, "radiusY");
      this.center = e3.clone(), this.radiusX = o, this.radiusY = c2;
    }
    transform(e3) {
      return new _a9(e3.multVec2(this.center), e3.m[0] * this.radiusX, e3.m[5] * this.radiusY);
    }
    bbox() {
      return de.fromPoints(this.center.sub(T(this.radiusX, this.radiusY)), this.center.add(T(this.radiusX, this.radiusY)));
    }
    area() {
      return this.radiusX * this.radiusY * Math.PI;
    }
    clone() {
      return new _a9(this.center, this.radiusX, this.radiusY);
    }
  }, "n"), (() => {
    i(_a9, "Ellipse");
  })(), _a9);
  var _a10;
  var Ke = (/* @__PURE__ */ __name(_a10 = class {
    constructor(e3) {
      __publicField(this, "pts");
      if (e3.length < 3)
        throw new Error("Polygons should have at least 3 vertices");
      this.pts = e3;
    }
    transform(e3) {
      return new _a10(this.pts.map((o) => e3.multVec2(o)));
    }
    bbox() {
      let e3 = T(Number.MAX_VALUE), o = T(-Number.MAX_VALUE);
      for (let c2 of this.pts)
        e3.x = Math.min(e3.x, c2.x), o.x = Math.max(o.x, c2.x), e3.y = Math.min(e3.y, c2.y), o.y = Math.max(o.y, c2.y);
      return de.fromPoints(e3, o);
    }
    area() {
      let e3 = 0, o = this.pts.length;
      for (let c2 = 0; c2 < o; c2++) {
        let g = this.pts[c2], m = this.pts[(c2 + 1) % o];
        e3 += g.x * m.y * 0.5, e3 -= m.x * g.y * 0.5;
      }
      return Math.abs(e3);
    }
    clone() {
      return new _a10(this.pts.map((e3) => e3.clone()));
    }
  }, "n"), (() => {
    i(_a10, "Polygon");
  })(), _a10);
  function Or(n2, e3) {
    let o = Number.MAX_VALUE, c2 = T(0);
    for (let g of [n2, e3])
      for (let m = 0; m < g.pts.length; m++) {
        let P3 = g.pts[m], j = g.pts[(m + 1) % g.pts.length].sub(P3).normal().unit(), y = Number.MAX_VALUE, X = -Number.MAX_VALUE;
        for (let K = 0; K < n2.pts.length; K++) {
          let Q2 = n2.pts[K].dot(j);
          y = Math.min(y, Q2), X = Math.max(X, Q2);
        }
        let S = Number.MAX_VALUE, q = -Number.MAX_VALUE;
        for (let K = 0; K < e3.pts.length; K++) {
          let Q2 = e3.pts[K].dot(j);
          S = Math.min(S, Q2), q = Math.max(q, Q2);
        }
        let E = Math.min(X, q) - Math.max(y, S);
        if (E < 0)
          return null;
        if (E < Math.abs(o)) {
          let K = q - y, Q2 = S - X;
          o = Math.abs(K) < Math.abs(Q2) ? K : Q2, c2 = j.scale(o);
        }
      }
    return c2;
  }
  __name(Or, "Or");
  i(Or, "sat");
  var _a11;
  var Ut = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a11 = class extends Map {
    constructor(...e3) {
      super(...e3);
      __publicField(this, "lastID");
      this.lastID = 0;
    }
    push(e3) {
      let o = this.lastID;
      return this.set(o, e3), this.lastID++, o;
    }
    pushd(e3) {
      let o = this.push(e3);
      return () => this.delete(o);
    }
  }, "_this"), (() => {
    i(_a11, "Registry");
  })(), _a11), "Ut");
  var _a12;
  var ke = (/* @__PURE__ */ __name(_a12 = class {
    constructor(e3) {
      __publicField(this, "paused", false);
      __publicField(this, "cancel");
      this.cancel = e3;
    }
    static join(e3) {
      let o = new _a12(() => e3.forEach((c2) => c2.cancel()));
      return Object.defineProperty(o, "paused", { get: () => e3[0].paused, set: (c2) => e3.forEach((g) => g.paused = c2) }), o.paused = false, o;
    }
  }, "n"), (() => {
    i(_a12, "EventController");
  })(), _a12);
  var _a13;
  var be = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a13 = class {
    constructor() {
      __publicField(this, "handlers", new Ut());
    }
    add(e3) {
      let o = this.handlers.pushd((...g) => {
        c2.paused || e3(...g);
      }), c2 = new ke(o);
      return c2;
    }
    addOnce(e3) {
      let o = this.add((...c2) => {
        o.cancel(), e3(...c2);
      });
      return o;
    }
    next() {
      return new Promise((e3) => this.addOnce(e3));
    }
    trigger(...e3) {
      this.handlers.forEach((o) => o(...e3));
    }
    numListeners() {
      return this.handlers.size;
    }
    clear() {
      this.handlers.clear();
    }
  }, "_this"), (() => {
    i(_a13, "Event");
  })(), _a13), "be");
  var _a14;
  var Ne = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a14 = class {
    constructor() {
      __publicField(this, "handlers", {});
    }
    on(e3, o) {
      return this.handlers[e3] || (this.handlers[e3] = new be()), this.handlers[e3].add(o);
    }
    onOnce(e3, o) {
      let c2 = this.on(e3, (...g) => {
        c2.cancel(), o(...g);
      });
      return c2;
    }
    next(e3) {
      return new Promise((o) => {
        this.onOnce(e3, (...c2) => o(c2[0]));
      });
    }
    trigger(e3, ...o) {
      this.handlers[e3] && this.handlers[e3].trigger(...o);
    }
    remove(e3) {
      delete this.handlers[e3];
    }
    clear() {
      this.handlers = {};
    }
    numListeners(e3) {
      var _a26, _b;
      return (_b = (_a26 = this.handlers[e3]) == null ? void 0 : _a26.numListeners()) != null ? _b : 0;
    }
  }, "_this"), (() => {
    i(_a14, "EventHandler");
  })(), _a14), "Ne");
  function Wt(n2, e3) {
    if (n2 === e3)
      return true;
    let o = typeof n2, c2 = typeof e3;
    if (o !== c2)
      return false;
    if (o === "object" && c2 === "object" && n2 !== null && e3 !== null) {
      if (Array.isArray(n2) !== Array.isArray(e3))
        return false;
      let g = Object.keys(n2), m = Object.keys(e3);
      if (g.length !== m.length)
        return false;
      for (let P3 of g) {
        let I = n2[P3], j = e3[P3];
        if (!Wt(I, j))
          return false;
      }
      return true;
    }
    return false;
  }
  __name(Wt, "Wt");
  i(Wt, "deepEq");
  function Si(n2) {
    let e3 = window.atob(n2), o = e3.length, c2 = new Uint8Array(o);
    for (let g = 0; g < o; g++)
      c2[g] = e3.charCodeAt(g);
    return c2.buffer;
  }
  __name(Si, "Si");
  i(Si, "base64ToArrayBuffer");
  function Pr(n2) {
    return Si(n2.split(",")[1]);
  }
  __name(Pr, "Pr");
  i(Pr, "dataURLToArrayBuffer");
  function Xt(n2, e3) {
    let o = document.createElement("a");
    o.href = e3, o.download = n2, o.click();
  }
  __name(Xt, "Xt");
  i(Xt, "download");
  function kn(n2, e3) {
    Xt(n2, "data:text/plain;charset=utf-8," + e3);
  }
  __name(kn, "kn");
  i(kn, "downloadText");
  function Dr(n2, e3) {
    kn(n2, JSON.stringify(e3));
  }
  __name(Dr, "Dr");
  i(Dr, "downloadJSON");
  function Nn(n2, e3) {
    let o = URL.createObjectURL(e3);
    Xt(n2, o), URL.revokeObjectURL(o);
  }
  __name(Nn, "Nn");
  i(Nn, "downloadBlob");
  var jn = i((n2) => n2.match(/^data:\w+\/\w+;base64,.+/), "isDataURL");
  var Mr = i((n2) => n2.split(".").slice(0, -1).join("."), "getFileName");
  function Ee(n2, e3) {
    return (...o) => {
      let c2 = o.length;
      if (c2 === n2.length)
        return n2(...o);
      if (c2 === e3.length)
        return e3(...o);
    };
  }
  __name(Ee, "Ee");
  i(Ee, "overload2");
  var Gr = (() => {
    let n2 = 0;
    return () => n2++;
  })();
  var Br = i((n2) => n2 instanceof Error ? n2.message : String(n2), "getErrorMessage");
  var _a15;
  var Yt = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a15 = class {
    constructor(e3 = (o, c2) => o < c2) {
      __publicField(this, "_items");
      __publicField(this, "_compareFn");
      this._compareFn = e3, this._items = [];
    }
    insert(e3) {
      this._items.push(e3), this.moveUp(this._items.length - 1);
    }
    remove() {
      if (this._items.length === 0)
        return null;
      let e3 = this._items[0], o = this._items.pop();
      return this._items.length !== 0 && (this._items[0] = o, this.moveDown(0)), e3;
    }
    clear() {
      this._items.splice(0, this._items.length);
    }
    moveUp(e3) {
      for (; e3 > 0; ) {
        let o = Math.floor((e3 - 1) / 2);
        if (!this._compareFn(this._items[e3], this._items[o]) && this._items[e3] >= this._items[o])
          break;
        this.swap(e3, o), e3 = o;
      }
    }
    moveDown(e3) {
      for (; e3 < Math.floor(this._items.length / 2); ) {
        let o = 2 * e3 + 1;
        if (o < this._items.length - 1 && !this._compareFn(this._items[o], this._items[o + 1]) && ++o, this._compareFn(this._items[e3], this._items[o]))
          break;
        this.swap(e3, o), e3 = o;
      }
    }
    swap(e3, o) {
      [this._items[e3], this._items[o]] = [this._items[o], this._items[e3]];
    }
    get length() {
      return this._items.length;
    }
  }, "_this"), (() => {
    i(_a15, "BinaryHeap");
  })(), _a15), "Yt");
  var Ci = Object.freeze([776, 2359, 2367, 2984, 3007, 3021, 3633, 3635, 3648, 3657, 4352, 4449, 4520]);
  function Fr(n2) {
    if (typeof n2 != "string")
      throw new TypeError("string cannot be undefined or null");
    let e3 = [], o = 0, c2 = 0;
    for (; o < n2.length; ) {
      if (c2 += Ai(o + c2, n2), Gi(n2[o + c2]) && c2++, Pi(n2[o + c2]) && c2++, Di(n2[o + c2]) && c2++, Bi(n2[o + c2])) {
        c2++;
        continue;
      }
      e3.push(n2.substring(o, o + c2)), o += c2, c2 = 0;
    }
    return e3;
  }
  __name(Fr, "Fr");
  i(Fr, "runes");
  function Ai(n2, e3) {
    let o = e3[n2];
    if (!Ti(o) || n2 === e3.length - 1)
      return 1;
    let c2 = o + e3[n2 + 1], g = e3.substring(n2 + 2, n2 + 5);
    return Rr(c2) && Rr(g) ? 4 : Oi(c2) && Mi(g) ? e3.slice(n2).indexOf(String.fromCodePoint(917631)) + 2 : Ri(g) ? 4 : 2;
  }
  __name(Ai, "Ai");
  i(Ai, "nextUnits");
  function Ti(n2) {
    return n2 && tt(n2[0].charCodeAt(0), 55296, 56319);
  }
  __name(Ti, "Ti");
  i(Ti, "isFirstOfSurrogatePair");
  function Rr(n2) {
    return tt(Hn(n2), 127462, 127487);
  }
  __name(Rr, "Rr");
  i(Rr, "isRegionalIndicator");
  function Oi(n2) {
    return tt(Hn(n2), 127988, 127988);
  }
  __name(Oi, "Oi");
  i(Oi, "isSubdivisionFlag");
  function Ri(n2) {
    return tt(Hn(n2), 127995, 127999);
  }
  __name(Ri, "Ri");
  i(Ri, "isFitzpatrickModifier");
  function Pi(n2) {
    return typeof n2 == "string" && tt(n2.charCodeAt(0), 65024, 65039);
  }
  __name(Pi, "Pi");
  i(Pi, "isVariationSelector");
  function Di(n2) {
    return typeof n2 == "string" && tt(n2.charCodeAt(0), 8400, 8447);
  }
  __name(Di, "Di");
  i(Di, "isDiacriticalMark");
  function Mi(n2) {
    let e3 = n2.codePointAt(0);
    return typeof n2 == "string" && typeof e3 == "number" && tt(e3, 917504, 917631);
  }
  __name(Mi, "Mi");
  i(Mi, "isSupplementarySpecialpurposePlane");
  function Gi(n2) {
    return typeof n2 == "string" && Ci.includes(n2.charCodeAt(0));
  }
  __name(Gi, "Gi");
  i(Gi, "isGrapheme");
  function Bi(n2) {
    return typeof n2 == "string" && n2.charCodeAt(0) === 8205;
  }
  __name(Bi, "Bi");
  i(Bi, "isZeroWidthJoiner");
  function Hn(n2) {
    let e3 = n2.charCodeAt(0) - 55296, o = n2.charCodeAt(1) - 56320;
    return (e3 << 10) + o + 65536;
  }
  __name(Hn, "Hn");
  i(Hn, "codePointFromSurrogatePair");
  function tt(n2, e3, o) {
    return n2 >= e3 && n2 <= o;
  }
  __name(tt, "tt");
  i(tt, "betweenInclusive");
  var qn = { "Joy-Con L+R (STANDARD GAMEPAD Vendor: 057e Product: 200e)": { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "6": "ltrigger", "7": "rtrigger", "8": "select", "9": "start", "10": "lstick", "11": "rstick", "12": "dpad-up", "13": "dpad-down", "14": "dpad-left", "15": "dpad-right", "16": "home", "17": "capture" }, sticks: { left: { x: 0, y: 1 }, right: { x: 2, y: 3 } } }, "Joy-Con (L) (STANDARD GAMEPAD Vendor: 057e Product: 2006)": { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "9": "select", "10": "lstick", "16": "start" }, sticks: { left: { x: 0, y: 1 } } }, "Joy-Con (R) (STANDARD GAMEPAD Vendor: 057e Product: 2007)": { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "9": "start", "10": "lstick", "16": "select" }, sticks: { left: { x: 0, y: 1 } } }, "Pro Controller (STANDARD GAMEPAD Vendor: 057e Product: 2009)": { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "6": "ltrigger", "7": "rtrigger", "8": "select", "9": "start", "10": "lstick", "11": "rstick", "12": "dpad-up", "13": "dpad-down", "14": "dpad-left", "15": "dpad-right", "16": "home", "17": "capture" }, sticks: { left: { x: 0, y: 1 }, right: { x: 2, y: 3 } } }, default: { buttons: { "0": "south", "1": "east", "2": "west", "3": "north", "4": "lshoulder", "5": "rshoulder", "6": "ltrigger", "7": "rtrigger", "8": "select", "9": "start", "10": "lstick", "11": "rstick", "12": "dpad-up", "13": "dpad-down", "14": "dpad-left", "15": "dpad-right", "16": "home" }, sticks: { left: { x: 0, y: 1 }, right: { x: 2, y: 3 } } } };
  var _a16;
  var at = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a16 = class {
    constructor() {
      __publicField(this, "pressed", /* @__PURE__ */ new Set([]));
      __publicField(this, "pressedRepeat", /* @__PURE__ */ new Set([]));
      __publicField(this, "released", /* @__PURE__ */ new Set([]));
      __publicField(this, "down", /* @__PURE__ */ new Set([]));
    }
    update() {
      this.pressed.clear(), this.released.clear(), this.pressedRepeat.clear();
    }
    press(e3) {
      this.pressed.add(e3), this.pressedRepeat.add(e3), this.down.add(e3);
    }
    pressRepeat(e3) {
      this.pressedRepeat.add(e3);
    }
    release(e3) {
      this.down.delete(e3), this.pressed.delete(e3), this.released.add(e3);
    }
  }, "_this"), (() => {
    i(_a16, "ButtonState");
  })(), _a16), "at");
  var _a17;
  var $n = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a17 = class {
    constructor() {
      __publicField(this, "buttonState", new at());
      __publicField(this, "stickState", /* @__PURE__ */ new Map());
    }
  }, "_this"), (() => {
    i(_a17, "GamepadState");
  })(), _a17), "$n");
  var _a18;
  var zn = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a18 = class {
    constructor() {
      __publicField(this, "dts", []);
      __publicField(this, "timer", 0);
      __publicField(this, "fps", 0);
    }
    tick(e3) {
      this.dts.push(e3), this.timer += e3, this.timer >= 1 && (this.timer = 0, this.fps = Math.round(1 / (this.dts.reduce((o, c2) => o + c2) / this.dts.length)), this.dts = []);
    }
  }, "_this"), (() => {
    i(_a18, "FPSCounter");
  })(), _a18), "zn");
  var Ir = i((n2) => {
    if (!n2.canvas)
      throw new Error("Please provide a canvas");
    let e3 = { canvas: n2.canvas, loopID: null, stopped: false, dt: 0, time: 0, realTime: 0, fpsCounter: new zn(), timeScale: 1, skipTime: false, numFrames: 0, mousePos: new v(0), mouseDeltaPos: new v(0), keyState: new at(), mouseState: new at(), mergedGamepadState: new $n(), gamepadStates: /* @__PURE__ */ new Map(), gamepads: [], charInputted: [], isMouseMoved: false, lastWidth: n2.canvas.offsetWidth, lastHeight: n2.canvas.offsetHeight, events: new Ne() };
    function o() {
      return e3.dt * e3.timeScale;
    }
    __name(o, "o");
    i(o, "dt");
    function c2() {
      return e3.time;
    }
    __name(c2, "c");
    i(c2, "time");
    function g() {
      return e3.fpsCounter.fps;
    }
    __name(g, "g");
    i(g, "fps");
    function m() {
      return e3.numFrames;
    }
    __name(m, "m");
    i(m, "numFrames");
    function P3() {
      return e3.canvas.toDataURL();
    }
    __name(P3, "P");
    i(P3, "screenshot");
    function I(l) {
      e3.canvas.style.cursor = l;
    }
    __name(I, "I");
    i(I, "setCursor");
    function j() {
      return e3.canvas.style.cursor;
    }
    __name(j, "j");
    i(j, "getCursor");
    function y(l) {
      if (l)
        try {
          let x2 = e3.canvas.requestPointerLock();
          x2.catch && x2.catch((R) => console.error(R));
        } catch (x2) {
          console.error(x2);
        }
      else
        document.exitPointerLock();
    }
    __name(y, "y");
    i(y, "setCursorLocked");
    function X() {
      return !!document.pointerLockElement;
    }
    __name(X, "X");
    i(X, "isCursorLocked");
    function S(l) {
      l.requestFullscreen ? l.requestFullscreen() : l.webkitRequestFullscreen && l.webkitRequestFullscreen();
    }
    __name(S, "S");
    i(S, "enterFullscreen");
    function q() {
      document.exitFullscreen ? document.exitFullscreen() : document.webkitExitFullScreen && document.webkitExitFullScreen();
    }
    __name(q, "q");
    i(q, "exitFullscreen");
    function E() {
      return document.fullscreenElement || document.webkitFullscreenElement;
    }
    __name(E, "E");
    i(E, "getFullscreenElement");
    function K(l = true) {
      l ? S(e3.canvas) : q();
    }
    __name(K, "K");
    i(K, "setFullscreen");
    function Q2() {
      return !!E();
    }
    __name(Q2, "Q");
    i(Q2, "isFullscreen");
    function te() {
      e3.stopped = true;
      for (let l in se)
        e3.canvas.removeEventListener(l, se[l]);
      for (let l in le)
        document.removeEventListener(l, le[l]);
      for (let l in ae)
        window.removeEventListener(l, ae[l]);
      ge.disconnect();
    }
    __name(te, "te");
    i(te, "quit");
    function k(l) {
      e3.loopID !== null && cancelAnimationFrame(e3.loopID);
      let x2 = 0, R = i((L) => {
        if (e3.stopped)
          return;
        if (document.visibilityState !== "visible") {
          e3.loopID = requestAnimationFrame(R);
          return;
        }
        let he = L / 1e3, z = he - e3.realTime, Oe = n2.maxFPS ? 1 / n2.maxFPS : 0;
        e3.realTime = he, x2 += z, x2 > Oe && (e3.skipTime || (e3.dt = x2, e3.time += o(), e3.fpsCounter.tick(e3.dt)), x2 = 0, e3.skipTime = false, e3.numFrames++, ft(), l(), vn()), e3.loopID = requestAnimationFrame(R);
      }, "frame");
      R(0);
    }
    __name(k, "k");
    i(k, "run");
    function pe() {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0;
    }
    __name(pe, "pe");
    i(pe, "isTouchscreen");
    function C() {
      return e3.mousePos.clone();
    }
    __name(C, "C");
    i(C, "mousePos");
    function Ae() {
      return e3.mouseDeltaPos.clone();
    }
    __name(Ae, "Ae");
    i(Ae, "mouseDeltaPos");
    function $(l = "left") {
      return e3.mouseState.pressed.has(l);
    }
    __name($, "$");
    i($, "isMousePressed");
    function Te(l = "left") {
      return e3.mouseState.down.has(l);
    }
    __name(Te, "Te");
    i(Te, "isMouseDown");
    function ye(l = "left") {
      return e3.mouseState.released.has(l);
    }
    __name(ye, "ye");
    i(ye, "isMouseReleased");
    function Se() {
      return e3.isMouseMoved;
    }
    __name(Se, "Se");
    i(Se, "isMouseMoved");
    function st(l) {
      return l === void 0 ? e3.keyState.pressed.size > 0 : e3.keyState.pressed.has(l);
    }
    __name(st, "st");
    i(st, "isKeyPressed");
    function on(l) {
      return l === void 0 ? e3.keyState.pressedRepeat.size > 0 : e3.keyState.pressedRepeat.has(l);
    }
    __name(on, "on");
    i(on, "isKeyPressedRepeat");
    function Tt(l) {
      return l === void 0 ? e3.keyState.down.size > 0 : e3.keyState.down.has(l);
    }
    __name(Tt, "Tt");
    i(Tt, "isKeyDown");
    function Ot(l) {
      return l === void 0 ? e3.keyState.released.size > 0 : e3.keyState.released.has(l);
    }
    __name(Ot, "Ot");
    i(Ot, "isKeyReleased");
    function Rt(l) {
      return l === void 0 ? e3.mergedGamepadState.buttonState.pressed.size > 0 : e3.mergedGamepadState.buttonState.pressed.has(l);
    }
    __name(Rt, "Rt");
    i(Rt, "isGamepadButtonPressed");
    function Ye(l) {
      return l === void 0 ? e3.mergedGamepadState.buttonState.down.size > 0 : e3.mergedGamepadState.buttonState.down.has(l);
    }
    __name(Ye, "Ye");
    i(Ye, "isGamepadButtonDown");
    function an(l) {
      return l === void 0 ? e3.mergedGamepadState.buttonState.released.size > 0 : e3.mergedGamepadState.buttonState.released.has(l);
    }
    __name(an, "an");
    i(an, "isGamepadButtonReleased");
    function un(l) {
      return e3.events.on("resize", l);
    }
    __name(un, "un");
    i(un, "onResize");
    let cn = Ee((l) => e3.events.on("keyDown", l), (l, x2) => e3.events.on("keyDown", (R) => R === l && x2(l))), hn = Ee((l) => e3.events.on("keyPress", l), (l, x2) => e3.events.on("keyPress", (R) => R === l && x2(l))), ln = Ee((l) => e3.events.on("keyPressRepeat", l), (l, x2) => e3.events.on("keyPressRepeat", (R) => R === l && x2(l))), dn = Ee((l) => e3.events.on("keyRelease", l), (l, x2) => e3.events.on("keyRelease", (R) => R === l && x2(l))), Pt = Ee((l) => e3.events.on("mouseDown", (x2) => l(x2)), (l, x2) => e3.events.on("mouseDown", (R) => R === l && x2(R))), Dt = Ee((l) => e3.events.on("mousePress", (x2) => l(x2)), (l, x2) => e3.events.on("mousePress", (R) => R === l && x2(R))), Mt = Ee((l) => e3.events.on("mouseRelease", (x2) => l(x2)), (l, x2) => e3.events.on("mouseRelease", (R) => R === l && x2(R)));
    function Gt(l) {
      return e3.events.on("mouseMove", () => l(C(), Ae()));
    }
    __name(Gt, "Gt");
    i(Gt, "onMouseMove");
    function Bt(l) {
      return e3.events.on("charInput", l);
    }
    __name(Bt, "Bt");
    i(Bt, "onCharInput");
    function fn(l) {
      return e3.events.on("touchStart", l);
    }
    __name(fn, "fn");
    i(fn, "onTouchStart");
    function ct(l) {
      return e3.events.on("touchMove", l);
    }
    __name(ct, "ct");
    i(ct, "onTouchMove");
    function mn(l) {
      return e3.events.on("touchEnd", l);
    }
    __name(mn, "mn");
    i(mn, "onTouchEnd");
    function pn(l) {
      return e3.events.on("scroll", l);
    }
    __name(pn, "pn");
    i(pn, "onScroll");
    function Ft(l) {
      return e3.events.on("hide", l);
    }
    __name(Ft, "Ft");
    i(Ft, "onHide");
    function gn(l) {
      return e3.events.on("show", l);
    }
    __name(gn, "gn");
    i(gn, "onShow");
    function It(l, x2) {
      if (typeof l == "function")
        return e3.events.on("gamepadButtonDown", l);
      if (typeof l == "string" && typeof x2 == "function")
        return e3.events.on("gamepadButtonDown", (R) => R === l && x2(l));
    }
    __name(It, "It");
    i(It, "onGamepadButtonDown");
    function Lt(l, x2) {
      if (typeof l == "function")
        return e3.events.on("gamepadButtonPress", l);
      if (typeof l == "string" && typeof x2 == "function")
        return e3.events.on("gamepadButtonPress", (R) => R === l && x2(l));
    }
    __name(Lt, "Lt");
    i(Lt, "onGamepadButtonPress");
    function wn(l, x2) {
      if (typeof l == "function")
        return e3.events.on("gamepadButtonRelease", l);
      if (typeof l == "string" && typeof x2 == "function")
        return e3.events.on("gamepadButtonRelease", (R) => R === l && x2(l));
    }
    __name(wn, "wn");
    i(wn, "onGamepadButtonRelease");
    function ht(l, x2) {
      return e3.events.on("gamepadStick", (R, L) => R === l && x2(L));
    }
    __name(ht, "ht");
    i(ht, "onGamepadStick");
    function bn(l) {
      e3.events.on("gamepadConnect", l);
    }
    __name(bn, "bn");
    i(bn, "onGamepadConnect");
    function lt(l) {
      e3.events.on("gamepadDisconnect", l);
    }
    __name(lt, "lt");
    i(lt, "onGamepadDisconnect");
    function Pe(l) {
      return e3.mergedGamepadState.stickState.get(l) || new v(0);
    }
    __name(Pe, "Pe");
    i(Pe, "getGamepadStick");
    function dt2() {
      return [...e3.charInputted];
    }
    __name(dt2, "dt");
    i(dt2, "charInputted");
    function Vt() {
      return [...e3.gamepads];
    }
    __name(Vt, "Vt");
    i(Vt, "getGamepads");
    function ft() {
      e3.events.trigger("input"), e3.keyState.down.forEach((l) => e3.events.trigger("keyDown", l)), e3.mouseState.down.forEach((l) => e3.events.trigger("mouseDown", l)), He();
    }
    __name(ft, "ft");
    i(ft, "processInput");
    function vn() {
      e3.keyState.update(), e3.mouseState.update(), e3.mergedGamepadState.buttonState.update(), e3.mergedGamepadState.stickState.forEach((l, x2) => {
        e3.mergedGamepadState.stickState.set(x2, new v(0));
      }), e3.charInputted = [], e3.isMouseMoved = false, e3.gamepadStates.forEach((l) => {
        l.buttonState.update(), l.stickState.forEach((x2, R) => {
          l.stickState.set(R, new v(0));
        });
      });
    }
    __name(vn, "vn");
    i(vn, "resetInput");
    function _t(l) {
      let x2 = { index: l.index, isPressed: (R) => e3.gamepadStates.get(l.index).buttonState.pressed.has(R), isDown: (R) => e3.gamepadStates.get(l.index).buttonState.down.has(R), isReleased: (R) => e3.gamepadStates.get(l.index).buttonState.released.has(R), getStick: (R) => e3.gamepadStates.get(l.index).stickState.get(R) };
      return e3.gamepads.push(x2), e3.gamepadStates.set(l.index, { buttonState: new at(), stickState: /* @__PURE__ */ new Map([["left", new v(0)], ["right", new v(0)]]) }), x2;
    }
    __name(_t, "_t");
    i(_t, "registerGamepad");
    function ne(l) {
      e3.gamepads = e3.gamepads.filter((x2) => x2.index !== l.index), e3.gamepadStates.delete(l.index);
    }
    __name(ne, "ne");
    i(ne, "removeGamepad");
    function He() {
      var _a26, _b, _c;
      for (let l of navigator.getGamepads())
        l && !e3.gamepadStates.has(l.index) && _t(l);
      for (let l of e3.gamepads) {
        let x2 = navigator.getGamepads()[l.index], L = (_c = (_b = ((_a26 = n2.gamepads) != null ? _a26 : {})[x2.id]) != null ? _b : qn[x2.id]) != null ? _c : qn.default, he = e3.gamepadStates.get(l.index);
        for (let z = 0; z < x2.buttons.length; z++)
          x2.buttons[z].pressed ? (he.buttonState.down.has(L.buttons[z]) || (e3.mergedGamepadState.buttonState.press(L.buttons[z]), he.buttonState.press(L.buttons[z]), e3.events.trigger("gamepadButtonPress", L.buttons[z])), e3.events.trigger("gamepadButtonDown", L.buttons[z])) : he.buttonState.down.has(L.buttons[z]) && (e3.mergedGamepadState.buttonState.release(L.buttons[z]), he.buttonState.release(L.buttons[z]), e3.events.trigger("gamepadButtonRelease", L.buttons[z]));
        for (let z in L.sticks) {
          let Oe = L.sticks[z], $e = new v(x2.axes[Oe.x], x2.axes[Oe.y]);
          he.stickState.set(z, $e), e3.mergedGamepadState.stickState.set(z, $e), e3.events.trigger("gamepadStick", z, $e);
        }
      }
    }
    __name(He, "He");
    i(He, "processGamepad");
    let se = {}, le = {}, ae = {}, Be = n2.pixelDensity || window.devicePixelRatio || 1;
    se.mousemove = (l) => {
      let x2 = new v(l.offsetX, l.offsetY), R = new v(l.movementX, l.movementY);
      if (Q2()) {
        let L = e3.canvas.width / Be, he = e3.canvas.height / Be, z = window.innerWidth, Oe = window.innerHeight, $e = z / Oe, kt = L / he;
        if ($e > kt) {
          let De = Oe / he, Ce = (z - L * De) / 2;
          x2.x = _e(l.offsetX - Ce, 0, L * De, 0, L), x2.y = _e(l.offsetY, 0, he * De, 0, he);
        } else {
          let De = z / L, Ce = (Oe - he * De) / 2;
          x2.x = _e(l.offsetX, 0, L * De, 0, L), x2.y = _e(l.offsetY - Ce, 0, he * De, 0, he);
        }
      }
      e3.events.onOnce("input", () => {
        e3.isMouseMoved = true, e3.mousePos = x2, e3.mouseDeltaPos = R, e3.events.trigger("mouseMove");
      });
    };
    let We = ["left", "middle", "right", "back", "forward"];
    se.mousedown = (l) => {
      e3.events.onOnce("input", () => {
        let x2 = We[l.button];
        x2 && (e3.mouseState.press(x2), e3.events.trigger("mousePress", x2));
      });
    }, se.mouseup = (l) => {
      e3.events.onOnce("input", () => {
        let x2 = We[l.button];
        x2 && (e3.mouseState.release(x2), e3.events.trigger("mouseRelease", x2));
      });
    };
    let yn = /* @__PURE__ */ new Set([" ", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Tab"]), qe = { ArrowLeft: "left", ArrowRight: "right", ArrowUp: "up", ArrowDown: "down", " ": "space" };
    se.keydown = (l) => {
      yn.has(l.key) && l.preventDefault(), e3.events.onOnce("input", () => {
        let x2 = qe[l.key] || l.key.toLowerCase();
        x2.length === 1 ? (e3.events.trigger("charInput", x2), e3.charInputted.push(x2)) : x2 === "space" && (e3.events.trigger("charInput", " "), e3.charInputted.push(" ")), l.repeat ? (e3.keyState.pressRepeat(x2), e3.events.trigger("keyPressRepeat", x2)) : (e3.keyState.press(x2), e3.events.trigger("keyPressRepeat", x2), e3.events.trigger("keyPress", x2));
      });
    }, se.keyup = (l) => {
      e3.events.onOnce("input", () => {
        let x2 = qe[l.key] || l.key.toLowerCase();
        e3.keyState.release(x2), e3.events.trigger("keyRelease", x2);
      });
    }, se.touchstart = (l) => {
      l.preventDefault(), e3.events.onOnce("input", () => {
        let x2 = [...l.changedTouches], R = e3.canvas.getBoundingClientRect();
        n2.touchToMouse !== false && (e3.mousePos = new v(x2[0].clientX - R.x, x2[0].clientY - R.y), e3.mouseState.press("left"), e3.events.trigger("mousePress", "left")), x2.forEach((L) => {
          e3.events.trigger("touchStart", new v(L.clientX - R.x, L.clientY - R.y), L);
        });
      });
    }, se.touchmove = (l) => {
      l.preventDefault(), e3.events.onOnce("input", () => {
        let x2 = [...l.changedTouches], R = e3.canvas.getBoundingClientRect();
        n2.touchToMouse !== false && (e3.mousePos = new v(x2[0].clientX - R.x, x2[0].clientY - R.y), e3.events.trigger("mouseMove")), x2.forEach((L) => {
          e3.events.trigger("touchMove", new v(L.clientX - R.x, L.clientY - R.y), L);
        });
      });
    }, se.touchend = (l) => {
      e3.events.onOnce("input", () => {
        let x2 = [...l.changedTouches], R = e3.canvas.getBoundingClientRect();
        n2.touchToMouse !== false && (e3.mousePos = new v(x2[0].clientX - R.x, x2[0].clientY - R.y), e3.mouseState.release("left"), e3.events.trigger("mouseRelease", "left")), x2.forEach((L) => {
          e3.events.trigger("touchEnd", new v(L.clientX - R.x, L.clientY - R.y), L);
        });
      });
    }, se.touchcancel = (l) => {
      e3.events.onOnce("input", () => {
        let x2 = [...l.changedTouches], R = e3.canvas.getBoundingClientRect();
        n2.touchToMouse !== false && (e3.mousePos = new v(x2[0].clientX - R.x, x2[0].clientY - R.y), e3.mouseState.release("left"), e3.events.trigger("mouseRelease", "left")), x2.forEach((L) => {
          e3.events.trigger("touchEnd", new v(L.clientX - R.x, L.clientY - R.y), L);
        });
      });
    }, se.wheel = (l) => {
      l.preventDefault(), e3.events.onOnce("input", () => {
        e3.events.trigger("scroll", new v(l.deltaX, l.deltaY));
      });
    }, se.contextmenu = (l) => l.preventDefault(), le.visibilitychange = () => {
      document.visibilityState === "visible" ? (e3.skipTime = true, e3.events.trigger("show")) : e3.events.trigger("hide");
    }, ae.gamepadconnected = (l) => {
      let x2 = _t(l.gamepad);
      e3.events.onOnce("input", () => {
        e3.events.trigger("gamepadConnect", x2);
      });
    }, ae.gamepaddisconnected = (l) => {
      let x2 = Vt().filter((R) => R.index === l.gamepad.index)[0];
      ne(l.gamepad), e3.events.onOnce("input", () => {
        e3.events.trigger("gamepadDisconnect", x2);
      });
    };
    for (let l in se)
      e3.canvas.addEventListener(l, se[l]);
    for (let l in le)
      document.addEventListener(l, le[l]);
    for (let l in ae)
      window.addEventListener(l, ae[l]);
    let ge = new ResizeObserver((l) => {
      for (let x2 of l)
        if (x2.target === e3.canvas) {
          if (e3.lastWidth === e3.canvas.offsetWidth && e3.lastHeight === e3.canvas.offsetHeight)
            return;
          e3.lastWidth = e3.canvas.offsetWidth, e3.lastHeight = e3.canvas.offsetHeight, e3.events.onOnce("input", () => {
            e3.events.trigger("resize");
          });
        }
    });
    return ge.observe(e3.canvas), { dt: o, time: c2, run: k, canvas: e3.canvas, fps: g, numFrames: m, quit: te, setFullscreen: K, isFullscreen: Q2, setCursor: I, screenshot: P3, getGamepads: Vt, getCursor: j, setCursorLocked: y, isCursorLocked: X, isTouchscreen: pe, mousePos: C, mouseDeltaPos: Ae, isKeyDown: Tt, isKeyPressed: st, isKeyPressedRepeat: on, isKeyReleased: Ot, isMouseDown: Te, isMousePressed: $, isMouseReleased: ye, isMouseMoved: Se, isGamepadButtonPressed: Rt, isGamepadButtonDown: Ye, isGamepadButtonReleased: an, getGamepadStick: Pe, charInputted: dt2, onResize: un, onKeyDown: cn, onKeyPress: hn, onKeyPressRepeat: ln, onKeyRelease: dn, onMouseDown: Pt, onMousePress: Dt, onMouseRelease: Mt, onMouseMove: Gt, onCharInput: Bt, onTouchStart: fn, onTouchMove: ct, onTouchEnd: mn, onScroll: pn, onHide: Ft, onShow: gn, onGamepadButtonDown: It, onGamepadButtonPress: Lt, onGamepadButtonRelease: wn, onGamepadStick: ht, onGamepadConnect: bn, onGamepadDisconnect: lt, events: e3.events };
  }, "default");
  var _a19;
  var Re = (/* @__PURE__ */ __name(_a19 = class {
    constructor(e3, o, c2, g = {}) {
      __publicField(this, "ctx");
      __publicField(this, "src", null);
      __publicField(this, "glTex");
      __publicField(this, "width");
      __publicField(this, "height");
      var _a26, _b, _c;
      this.ctx = e3;
      let m = e3.gl;
      this.glTex = e3.gl.createTexture(), e3.onDestroy(() => this.free()), this.width = o, this.height = c2;
      let P3 = (_b = { linear: m.LINEAR, nearest: m.NEAREST }[(_a26 = g.filter) != null ? _a26 : e3.opts.texFilter]) != null ? _b : m.NEAREST, I = (_c = { repeat: m.REPEAT, clampToEadge: m.CLAMP_TO_EDGE }[g.wrap]) != null ? _c : m.CLAMP_TO_EDGE;
      this.bind(), o && c2 && m.texImage2D(m.TEXTURE_2D, 0, m.RGBA, o, c2, 0, m.RGBA, m.UNSIGNED_BYTE, null), m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MIN_FILTER, P3), m.texParameteri(m.TEXTURE_2D, m.TEXTURE_MAG_FILTER, P3), m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_S, I), m.texParameteri(m.TEXTURE_2D, m.TEXTURE_WRAP_T, I), this.unbind();
    }
    static fromImage(e3, o, c2 = {}) {
      let g = new _a19(e3, o.width, o.height, c2);
      return g.update(o), g.src = o, g;
    }
    update(e3, o = 0, c2 = 0) {
      let g = this.ctx.gl;
      this.bind(), g.texSubImage2D(g.TEXTURE_2D, 0, o, c2, g.RGBA, g.UNSIGNED_BYTE, e3), this.unbind();
    }
    bind() {
      this.ctx.pushTexture2D(this.glTex);
    }
    unbind() {
      this.ctx.popTexture2D();
    }
    free() {
      this.ctx.gl.deleteTexture(this.glTex);
    }
  }, "n"), (() => {
    i(_a19, "Texture");
  })(), _a19);
  var _a20;
  var rt = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a20 = class {
    constructor(e3, o, c2, g = {}) {
      __publicField(this, "ctx");
      __publicField(this, "tex");
      __publicField(this, "glFramebuffer");
      __publicField(this, "glRenderbuffer");
      this.ctx = e3;
      let m = e3.gl;
      e3.onDestroy(() => this.free()), this.tex = new Re(e3, o, c2, g), this.glFramebuffer = m.createFramebuffer(), this.glRenderbuffer = m.createRenderbuffer(), this.bind(), m.renderbufferStorage(m.RENDERBUFFER, m.DEPTH_STENCIL, o, c2), m.framebufferTexture2D(m.FRAMEBUFFER, m.COLOR_ATTACHMENT0, m.TEXTURE_2D, this.tex.glTex, 0), m.framebufferRenderbuffer(m.FRAMEBUFFER, m.DEPTH_STENCIL_ATTACHMENT, m.RENDERBUFFER, this.glRenderbuffer), this.unbind();
    }
    get width() {
      return this.tex.width;
    }
    get height() {
      return this.tex.height;
    }
    toImageData() {
      let e3 = this.ctx.gl, o = new Uint8ClampedArray(this.width * this.height * 4);
      this.bind(), e3.readPixels(0, 0, this.width, this.height, e3.RGBA, e3.UNSIGNED_BYTE, o), this.unbind();
      let c2 = this.width * 4, g = new Uint8Array(c2);
      for (let m = 0; m < (this.height / 2 | 0); m++) {
        let P3 = m * c2, I = (this.height - m - 1) * c2;
        g.set(o.subarray(P3, P3 + c2)), o.copyWithin(P3, I, I + c2), o.set(g, I);
      }
      return new ImageData(o, this.width, this.height);
    }
    toDataURL() {
      let e3 = document.createElement("canvas"), o = e3.getContext("2d");
      return e3.width = this.width, e3.height = this.height, o.putImageData(this.toImageData(), 0, 0), e3.toDataURL();
    }
    draw(e3) {
      this.bind(), e3(), this.unbind();
    }
    bind() {
      this.ctx.pushFramebuffer(this.glFramebuffer), this.ctx.pushRenderbuffer(this.glRenderbuffer), this.ctx.pushViewport({ x: 0, y: 0, w: this.width, h: this.height });
    }
    unbind() {
      this.ctx.popFramebuffer(), this.ctx.popRenderbuffer(), this.ctx.popViewport();
    }
    free() {
      let e3 = this.ctx.gl;
      e3.deleteFramebuffer(this.glFramebuffer), e3.deleteRenderbuffer(this.glRenderbuffer), this.tex.free();
    }
  }, "_this"), (() => {
    i(_a20, "FrameBuffer");
  })(), _a20), "rt");
  var _a21;
  var Jt = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a21 = class {
    constructor(e3, o, c2, g) {
      __publicField(this, "ctx");
      __publicField(this, "glProgram");
      this.ctx = e3, e3.onDestroy(() => this.free());
      let m = e3.gl, P3 = m.createShader(m.VERTEX_SHADER), I = m.createShader(m.FRAGMENT_SHADER);
      m.shaderSource(P3, o), m.shaderSource(I, c2), m.compileShader(P3), m.compileShader(I);
      let j = m.createProgram();
      if (this.glProgram = j, m.attachShader(j, P3), m.attachShader(j, I), g.forEach((y, X) => m.bindAttribLocation(j, X, y)), m.linkProgram(j), !m.getProgramParameter(j, m.LINK_STATUS)) {
        let y = m.getShaderInfoLog(P3);
        if (y)
          throw new Error("VERTEX SHADER " + y);
        let X = m.getShaderInfoLog(I);
        if (X)
          throw new Error("FRAGMENT SHADER " + X);
      }
      m.deleteShader(P3), m.deleteShader(I);
    }
    bind() {
      this.ctx.pushProgram(this.glProgram);
    }
    unbind() {
      this.ctx.popProgram();
    }
    send(e3) {
      let o = this.ctx.gl;
      for (let c2 in e3) {
        let g = e3[c2], m = o.getUniformLocation(this.glProgram, c2);
        typeof g == "number" ? o.uniform1f(m, g) : g instanceof Ue ? o.uniformMatrix4fv(m, false, new Float32Array(g.m)) : g instanceof W ? o.uniform3f(m, g.r, g.g, g.b) : g instanceof v && o.uniform2f(m, g.x, g.y);
      }
    }
    free() {
      this.ctx.gl.deleteProgram(this.glProgram);
    }
  }, "_this"), (() => {
    i(_a21, "Shader");
  })(), _a21), "Jt");
  var _a22;
  var Qt = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a22 = class {
    constructor(e3, o, c2, g) {
      __publicField(this, "ctx");
      __publicField(this, "glVBuf");
      __publicField(this, "glIBuf");
      __publicField(this, "vqueue", []);
      __publicField(this, "iqueue", []);
      __publicField(this, "stride");
      __publicField(this, "maxVertices");
      __publicField(this, "maxIndices");
      __publicField(this, "vertexFormat");
      __publicField(this, "numDraws", 0);
      __publicField(this, "curPrimitive", null);
      __publicField(this, "curTex", null);
      __publicField(this, "curShader", null);
      __publicField(this, "curUniform", {});
      let m = e3.gl;
      this.vertexFormat = o, this.ctx = e3, this.stride = o.reduce((P3, I) => P3 + I.size, 0), this.maxVertices = c2, this.maxIndices = g, this.glVBuf = m.createBuffer(), e3.pushArrayBuffer(this.glVBuf), m.bufferData(m.ARRAY_BUFFER, c2 * 4, m.DYNAMIC_DRAW), e3.popArrayBuffer(), this.glIBuf = m.createBuffer(), e3.pushElementArrayBuffer(this.glIBuf), m.bufferData(m.ELEMENT_ARRAY_BUFFER, g * 4, m.DYNAMIC_DRAW), e3.popElementArrayBuffer();
    }
    push(e3, o, c2, g, m = null, P3 = {}) {
      (e3 !== this.curPrimitive || m !== this.curTex || g !== this.curShader || !Wt(this.curUniform, P3) || this.vqueue.length + o.length * this.stride > this.maxVertices || this.iqueue.length + c2.length > this.maxIndices) && this.flush();
      let I = this.vqueue.length / this.stride;
      for (let j of o)
        this.vqueue.push(j);
      for (let j of c2)
        this.iqueue.push(j + I);
      this.curPrimitive = e3, this.curShader = g, this.curTex = m, this.curUniform = P3;
    }
    flush() {
      var _a26, _b;
      if (!this.curPrimitive || !this.curShader || this.vqueue.length === 0 || this.iqueue.length === 0)
        return;
      let e3 = this.ctx.gl;
      this.ctx.pushArrayBuffer(this.glVBuf), e3.bufferSubData(e3.ARRAY_BUFFER, 0, new Float32Array(this.vqueue)), this.ctx.pushElementArrayBuffer(this.glIBuf), e3.bufferSubData(e3.ELEMENT_ARRAY_BUFFER, 0, new Uint16Array(this.iqueue)), this.ctx.setVertexFormat(this.vertexFormat), this.curShader.bind(), this.curShader.send(this.curUniform), (_a26 = this.curTex) == null ? void 0 : _a26.bind(), e3.drawElements(this.curPrimitive, this.iqueue.length, e3.UNSIGNED_SHORT, 0), (_b = this.curTex) == null ? void 0 : _b.unbind(), this.curShader.unbind(), this.ctx.popArrayBuffer(), this.ctx.popElementArrayBuffer(), this.vqueue = [], this.iqueue = [], this.numDraws++;
    }
    free() {
      let e3 = this.ctx.gl;
      e3.deleteBuffer(this.glVBuf), e3.deleteBuffer(this.glIBuf);
    }
  }, "_this"), (() => {
    i(_a22, "BatchRenderer");
  })(), _a22), "Qt");
  function nt(n2) {
    let e3 = [], o = i((m) => {
      e3.push(m), n2(m);
    }, "push"), c2 = i(() => {
      var _a26;
      e3.pop(), n2((_a26 = g()) != null ? _a26 : null);
    }, "pop"), g = i(() => e3[e3.length - 1], "cur");
    return [o, c2, g];
  }
  __name(nt, "nt");
  i(nt, "genStack");
  function Kn(n2, e3 = {}) {
    let o = [];
    function c2($) {
      o.push($);
    }
    __name(c2, "c");
    i(c2, "onDestroy");
    function g() {
      o.forEach(($) => $()), n2.getExtension("WEBGL_lose_context").loseContext();
    }
    __name(g, "g");
    i(g, "destroy");
    let m = null;
    function P3($) {
      if (Wt($, m))
        return;
      m = $;
      let Te = $.reduce((ye, Se) => ye + Se.size, 0);
      $.reduce((ye, Se, st) => (n2.vertexAttribPointer(st, Se.size, n2.FLOAT, false, Te * 4, ye), n2.enableVertexAttribArray(st), ye + Se.size * 4), 0);
    }
    __name(P3, "P");
    i(P3, "setVertexFormat");
    let [I, j] = nt(($) => n2.bindTexture(n2.TEXTURE_2D, $)), [y, X] = nt(($) => n2.bindBuffer(n2.ARRAY_BUFFER, $)), [S, q] = nt(($) => n2.bindBuffer(n2.ELEMENT_ARRAY_BUFFER, $)), [E, K] = nt(($) => n2.bindFramebuffer(n2.FRAMEBUFFER, $)), [Q2, te] = nt(($) => n2.bindRenderbuffer(n2.RENDERBUFFER, $)), [k, pe] = nt(({ x: $, y: Te, w: ye, h: Se }) => {
      n2.viewport($, Te, ye, Se);
    }), [C, Ae] = nt(($) => n2.useProgram($));
    return k({ x: 0, y: 0, w: n2.drawingBufferWidth, h: n2.drawingBufferHeight }), { gl: n2, opts: e3, onDestroy: c2, destroy: g, pushTexture2D: I, popTexture2D: j, pushArrayBuffer: y, popArrayBuffer: X, pushElementArrayBuffer: S, popElementArrayBuffer: q, pushFramebuffer: E, popFramebuffer: K, pushRenderbuffer: Q2, popRenderbuffer: te, pushViewport: k, popViewport: pe, pushProgram: C, popProgram: Ae, setVertexFormat: P3 };
  }
  __name(Kn, "Kn");
  i(Kn, "initGfx");
  var _a23;
  var ve = (/* @__PURE__ */ __name(_a23 = class {
    constructor(e3) {
      __publicField(this, "loaded", false);
      __publicField(this, "data", null);
      __publicField(this, "error", null);
      __publicField(this, "onLoadEvents", new be());
      __publicField(this, "onErrorEvents", new be());
      __publicField(this, "onFinishEvents", new be());
      e3.then((o) => {
        this.data = o, this.onLoadEvents.trigger(o);
      }).catch((o) => {
        if (this.error = o, this.onErrorEvents.numListeners() > 0)
          this.onErrorEvents.trigger(o);
        else
          throw o;
      }).finally(() => {
        this.onFinishEvents.trigger(), this.loaded = true;
      });
    }
    static loaded(e3) {
      let o = new _a23(Promise.resolve(e3));
      return o.data = e3, o.loaded = true, o;
    }
    onLoad(e3) {
      return this.loaded && this.data ? e3(this.data) : this.onLoadEvents.add(e3), this;
    }
    onError(e3) {
      return this.loaded && this.error ? e3(this.error) : this.onErrorEvents.add(e3), this;
    }
    onFinish(e3) {
      return this.loaded ? e3() : this.onFinishEvents.add(e3), this;
    }
    then(e3) {
      return this.onLoad(e3);
    }
    catch(e3) {
      return this.onError(e3);
    }
    finally(e3) {
      return this.onFinish(e3);
    }
  }, "n"), (() => {
    i(_a23, "Asset");
  })(), _a23);
  var _a24;
  var je = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a24 = class {
    constructor() {
      __publicField(this, "assets", /* @__PURE__ */ new Map());
      __publicField(this, "lastUID", 0);
    }
    add(e3, o) {
      let c2 = e3 != null ? e3 : this.lastUID++ + "", g = new ve(o);
      return this.assets.set(c2, g), g;
    }
    addLoaded(e3, o) {
      let c2 = e3 != null ? e3 : this.lastUID++ + "", g = ve.loaded(o);
      return this.assets.set(c2, g), g;
    }
    get(e3) {
      return this.assets.get(e3);
    }
    progress() {
      if (this.assets.size === 0)
        return 1;
      let e3 = 0;
      return this.assets.forEach((o) => {
        o.loaded && e3++;
      }), e3 / this.assets.size;
    }
  }, "_this"), (() => {
    i(_a24, "AssetBucket");
  })(), _a24), "je");
  function Yn(n2) {
    return fetch(n2).then((e3) => {
      if (!e3.ok)
        throw new Error(`Failed to fetch "${n2}"`);
      return e3;
    });
  }
  __name(Yn, "Yn");
  i(Yn, "fetchURL");
  function Et(n2) {
    return Yn(n2).then((e3) => e3.json());
  }
  __name(Et, "Et");
  i(Et, "fetchJSON");
  function Lr(n2) {
    return Yn(n2).then((e3) => e3.text());
  }
  __name(Lr, "Lr");
  i(Lr, "fetchText");
  function Vr(n2) {
    return Yn(n2).then((e3) => e3.arrayBuffer());
  }
  __name(Vr, "Vr");
  i(Vr, "fetchArrayBuffer");
  function St(n2) {
    let e3 = new Image();
    return e3.crossOrigin = "anonymous", e3.src = n2, new Promise((o, c2) => {
      e3.onload = () => o(e3), e3.onerror = () => c2(new Error(`Failed to load image from "${n2}"`));
    });
  }
  __name(St, "St");
  i(St, "loadImg");
  var Zt = 2.5949095;
  var _r = 1.70158 + 1;
  var kr = 2 * Math.PI / 3;
  var Nr = 2 * Math.PI / 4.5;
  var en = { linear: (n2) => n2, easeInSine: (n2) => 1 - Math.cos(n2 * Math.PI / 2), easeOutSine: (n2) => Math.sin(n2 * Math.PI / 2), easeInOutSine: (n2) => -(Math.cos(Math.PI * n2) - 1) / 2, easeInQuad: (n2) => n2 * n2, easeOutQuad: (n2) => 1 - (1 - n2) * (1 - n2), easeInOutQuad: (n2) => n2 < 0.5 ? 2 * n2 * n2 : 1 - Math.pow(-2 * n2 + 2, 2) / 2, easeInCubic: (n2) => n2 * n2 * n2, easeOutCubic: (n2) => 1 - Math.pow(1 - n2, 3), easeInOutCubic: (n2) => n2 < 0.5 ? 4 * n2 * n2 * n2 : 1 - Math.pow(-2 * n2 + 2, 3) / 2, easeInQuart: (n2) => n2 * n2 * n2 * n2, easeOutQuart: (n2) => 1 - Math.pow(1 - n2, 4), easeInOutQuart: (n2) => n2 < 0.5 ? 8 * n2 * n2 * n2 * n2 : 1 - Math.pow(-2 * n2 + 2, 4) / 2, easeInQuint: (n2) => n2 * n2 * n2 * n2 * n2, easeOutQuint: (n2) => 1 - Math.pow(1 - n2, 5), easeInOutQuint: (n2) => n2 < 0.5 ? 16 * n2 * n2 * n2 * n2 * n2 : 1 - Math.pow(-2 * n2 + 2, 5) / 2, easeInExpo: (n2) => n2 === 0 ? 0 : Math.pow(2, 10 * n2 - 10), easeOutExpo: (n2) => n2 === 1 ? 1 : 1 - Math.pow(2, -10 * n2), easeInOutExpo: (n2) => n2 === 0 ? 0 : n2 === 1 ? 1 : n2 < 0.5 ? Math.pow(2, 20 * n2 - 10) / 2 : (2 - Math.pow(2, -20 * n2 + 10)) / 2, easeInCirc: (n2) => 1 - Math.sqrt(1 - Math.pow(n2, 2)), easeOutCirc: (n2) => Math.sqrt(1 - Math.pow(n2 - 1, 2)), easeInOutCirc: (n2) => n2 < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * n2, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * n2 + 2, 2)) + 1) / 2, easeInBack: (n2) => _r * n2 * n2 * n2 - 1.70158 * n2 * n2, easeOutBack: (n2) => 1 + _r * Math.pow(n2 - 1, 3) + 1.70158 * Math.pow(n2 - 1, 2), easeInOutBack: (n2) => n2 < 0.5 ? Math.pow(2 * n2, 2) * ((Zt + 1) * 2 * n2 - Zt) / 2 : (Math.pow(2 * n2 - 2, 2) * ((Zt + 1) * (n2 * 2 - 2) + Zt) + 2) / 2, easeInElastic: (n2) => n2 === 0 ? 0 : n2 === 1 ? 1 : -Math.pow(2, 10 * n2 - 10) * Math.sin((n2 * 10 - 10.75) * kr), easeOutElastic: (n2) => n2 === 0 ? 0 : n2 === 1 ? 1 : Math.pow(2, -10 * n2) * Math.sin((n2 * 10 - 0.75) * kr) + 1, easeInOutElastic: (n2) => n2 === 0 ? 0 : n2 === 1 ? 1 : n2 < 0.5 ? -(Math.pow(2, 20 * n2 - 10) * Math.sin((20 * n2 - 11.125) * Nr)) / 2 : Math.pow(2, -20 * n2 + 10) * Math.sin((20 * n2 - 11.125) * Nr) / 2 + 1, easeInBounce: (n2) => 1 - en.easeOutBounce(1 - n2), easeOutBounce: (n2) => n2 < 1 / 2.75 ? 7.5625 * n2 * n2 : n2 < 2 / 2.75 ? 7.5625 * (n2 -= 1.5 / 2.75) * n2 + 0.75 : n2 < 2.5 / 2.75 ? 7.5625 * (n2 -= 2.25 / 2.75) * n2 + 0.9375 : 7.5625 * (n2 -= 2.625 / 2.75) * n2 + 0.984375, easeInOutBounce: (n2) => n2 < 0.5 ? (1 - en.easeOutBounce(1 - 2 * n2)) / 2 : (1 + en.easeOutBounce(2 * n2 - 1)) / 2 };
  var Ct = en;
  var _a25;
  var At = /* @__PURE__ */ __name((/* @__PURE__ */ __name(_a25 = class {
    constructor(e3, o, c2) {
      __publicField(this, "textures", []);
      __publicField(this, "canvas");
      __publicField(this, "c2d");
      __publicField(this, "x", 0);
      __publicField(this, "y", 0);
      __publicField(this, "curHeight", 0);
      __publicField(this, "gfx");
      this.gfx = e3, this.canvas = document.createElement("canvas"), this.canvas.width = o, this.canvas.height = c2, this.textures = [Re.fromImage(e3, this.canvas)], this.c2d = this.canvas.getContext("2d");
    }
    add(e3) {
      if (e3.width > this.canvas.width || e3.height > this.canvas.height)
        throw new Error(`Texture size (${e3.width} x ${e3.height}) exceeds limit (${this.canvas.width} x ${this.canvas.height})`);
      this.x + e3.width > this.canvas.width && (this.x = 0, this.y += this.curHeight, this.curHeight = 0), this.y + e3.height > this.canvas.height && (this.c2d.clearRect(0, 0, this.canvas.width, this.canvas.height), this.textures.push(Re.fromImage(this.gfx, this.canvas)), this.x = 0, this.y = 0, this.curHeight = 0);
      let o = this.textures[this.textures.length - 1], c2 = new v(this.x, this.y);
      return this.x += e3.width, e3.height > this.curHeight && (this.curHeight = e3.height), e3 instanceof ImageData ? this.c2d.putImageData(e3, c2.x, c2.y) : this.c2d.drawImage(e3, c2.x, c2.y), o.update(this.canvas), [o, new oe(c2.x / this.canvas.width, c2.y / this.canvas.height, e3.width / this.canvas.width, e3.height / this.canvas.height)];
    }
    free() {
      for (let e3 of this.textures)
        e3.free();
    }
  }, "_this"), (() => {
    i(_a25, "TexPacker");
  })(), _a25), "At");
  var jr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAA1CAYAAADyMeOEAAAAAXNSR0IArs4c6QAAAoVJREFUaIHdm7txwkAQhheGAqACiCHzOKQDQrqgILpwSAeEDBnEUAF0gCMxZ7G72qce/mec2Lpf9+3unaS78wgSNZ8uX5729+d1FNWXUuGmXlBOUUEIMckEpeQJgBu6C+BSFngztBR2vd+ovY+7g+p6LbgaWgJrAeUkDYIUXgXdBBwNi6kpABJwMTQH3AZsXRR8GHTfgEth8E3gjdAUcNewpbTgY85sCMCUuOokozE0YM0YRzM9NGAAXd8+omAF5h4lnmBRvpSnZHyLoLEbaN+aKB9KWv/KWw0tAbbANnlG+UvB2dm77NxxdwgBpjrF/d7rW9cbmpvio2A5z8iAYpVU8pGZlo6/2+MSco2lHfd3rv9jAP038e1xef9o2mjvYb2OqpqKE81028/jeietlSEVO5FRWsxWsJit1G3aFpW8iWe5RwpiCZAk25QvV6nz6fIlynRGuTd5WqpJ4guAlDfVKBK87hXljflgv1ON6fV+4+5gVlA17SfeG0heKqQd4l4jI/wrmaA9N9R4ar+wpHJDZyrrfcH0nB66PqAzPi76pn+faSyJk/vzOorYhGurQrzj/P68jtBMawHaHBIR9xoD5O34dy0qQOSYHvqExq2TpT2nf76+w7y251OYF0CRaU+J920TwLUa6inx6OxE6g80lu2ux7Y2eJLF/rCXE6zEPdnenk9o+4ih9AEdnW2q81HXl5LuU6OTl2fXUhqganbXAGq3g6jJOWV/OnoesO6YqqEB/GdNsjf7uHtwj2DzmRNpp7iOZfm6D9oAxB6Yi1gC4oIYeo4MIPdopEQRB+cAko5J1tW386HpB2Kz1eop4Epdwls/kgZ1sh8gZsEjdcWkr//D8Qu3Z3l5Nl1NtAAAAABJRU5ErkJggg==";
  var Hr = gr("SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAASAAAeMwAUFBQUFCIiIiIiIjAwMDAwPj4+Pj4+TExMTExZWVlZWVlnZ2dnZ3V1dXV1dYODg4ODkZGRkZGRn5+fn5+frKysrKy6urq6urrIyMjIyNbW1tbW1uTk5OTk8vLy8vLy//////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAQKAAAAAAAAHjOZTf9/AAAAAAAAAAAAAAAAAAAAAP/7kGQAAANUMEoFPeACNQV40KEYABEY41g5vAAA9RjpZxRwAImU+W8eshaFpAQgALAAYALATx/nYDYCMJ0HITQYYA7AH4c7MoGsnCMU5pnW+OQnBcDrQ9Xx7w37/D+PimYavV8elKUpT5fqx5VjV6vZ38eJR48eRKa9KUp7v396UgPHkQwMAAAAAA//8MAOp39CECAAhlIEEIIECBAgTT1oj///tEQYT0wgEIYxgDC09aIiE7u7u7uIiIz+LtoIQGE/+XAGYLjpTAIOGYYy0ZACgDgSNFxC7YYiINocwERjAEDhIy0mRoGwAE7lOTBsGhj1qrXNCU9GrgwSPr80jj0dIpT9DRUNHKJbRxiWSiifVHuD2b0EbjLkOUzSXztP3uE1JpHzV6NPq+f3P5T0/f/lNH7lWTavQ5Xz1yLVe653///qf93B7f/vMdaKJAAJAMAIwIMAHMpzDkoYwD8CR717zVb8/p54P3MikXGCEWhQOEAOAdP6v8b8oNL/EzdnROC8Zo+z+71O8VVAGIKFEglKbidkoLam0mAFiwo0ZoVExf/7kmQLgAQyZFxvPWAENcVKXeK0ABAk2WFMaSNIzBMptBYfArbkZgpWjEQpcmjxQoG2qREWQcvpzuuIm29THt3ElhDNlrXV///XTGbm7Kbx0ymcRX///x7GVvquf5vk/dPs0Wi5Td1vggDxqbNII4bAPTU3Ix5h9FJTe7zv1LHG/uPsPrvth0ejchVzVT3giirs6sQAACgQAAIAdaXbRAYra/2t0//3HwqLKIlBOJhOg4BzAOkt+MOL6H8nlNvKyi3rOnqP//zf6AATwBAKIcHKixxwjl1TjDVIrvTqdmKQOFQBUBDwZ1EhHlDEGEVyGQWBAHrcJgRSXYbkvHK/8/6rbYjs4Qj0C8mRy2hwRv/82opGT55fROgRoBTjanaiQiMRHUu1/P3V9yGFffaVv78U1/6l/kpo0cz73vuSv/9GeaqDVRA5bWdHRKQKIEAAAAoIktKeEmdQFKN5sguv/ZSC0oxCAR7CzcJgEsd8cA0M/x0tzv15E7//5L5KCqoIAAmBFIKM1UxYtMMFjLKESTE8lhaelUyCBYeA2IN4rK1iDt//+5JkEgAkZzlVq29D8DJDWo0YLLARwPFZrL0PyLsUazTAlpI+hKSx01VSOfbjXg0iW9/jVPDleLJ15QQA4Okdc5ByMDFIeuCCE5CvevwBGH8YibiX9FtaIIgUikF42wrZw6ZJ6WlHrA+Ki5++NNMeYH1lEkwwJAIJB4ugVFguXFc20Vd/FLlvq1GSiSwAFABABABA47k6BFeNvxEQZO9v3L1IE4iEVElfrXmEmlyWIyGslFA55gH/sW7////o9AAFIBIIAAIUMzYTTNkgsAmYObfwQyzplrOmYvq0BKCKNN+nUTbvD7cJzvHxrEWG5QqvP8U1vFx6CwE8NoRc2ADBeEb/HoXh60N7ST8nw9QiiGoYvf/r6GtC9+vLwXHjaSkIp3iupC5+Nii81Zhu85pNYbFvrf+UFThDOYYY26off+W6b//73GTiN9xDfl0AAwBAiMBO8qsDBPOZtuT/dTbjVVbY/KSGH6ppHwKv/6X+s8gUCN/lODzv////GQAGAMQAADlXAUCBJiY0wFQZusYQOaQzaTwDBTcx0IvVp8m7uxKp//uSZBMCBHRI1eNPLHAyxNqWGeoYUIEnWYyxD8DUFSn0l6iojcd+oEOkzV6uWqyHNzjqmv+7V5xGUfY9yEmbziTzjRscm9OqFQp1PKFrqu3PX/7YuGtDU6bt0OUTpv38rdc+37dVDQLKUchaJ853E9edNDGqWwsYz1VoiSStEJtZvw6+sNqFWqaIXJjQCGAAGWAYVwmag/x3BRJw1wYF7IzVqDcNzn85d//FzK7IgwbQwccLoB4AsF8Nj/1ESRUAAVJwAFh0YOFEhmSJEHKQRDyhszgLUpHIgFrb5cySFg5jv10ImlYuvaaGBItfXqnNPmic+XNkmb5fW49vdhq97nQMQyGIlM2v8oQSrxKSxE4F1WqrduqvuJCRof1R7Gsre9KszUVF1/t3PzH2tnp+iSUG3rDwGNcDzxCGA8atuQF0paZAAkAhAQAEAC240yJV+nJgUrqq8axAYtVpYjZyFGb13/17jwiClQDaCdytZpyHHf1R/EG/+lUAgAAAChhmJvioVGGBCFgqdpsGAkUUrbTstwTCJgLQpFIsELW7t/68Iv/7kmQUgAQ9NFO9aeAAPAU6RKwUABClY2e5hoARGpDvPydCAsY8WO10fSvUOnfT98+n/l/6/+hxslhQ1DEOaevNKGocvIYba8WJpaP/15pX0NQ1DUNn/////k6lPp/N61rBi8RJFfERV3IgrqDsJA64sjCoKxDDQ9xEcWDpMBDwVFDIAEIAAzryxsjGi4q/oWpixKjhklAF4pUrDPjFhFVupDFZ/t/t0YPAygUBhADPR/KLCKJ8h2Oxhpxz/zNRAAFl0MAZLAYEAiVbEiz36LSgZ5QoQVat69KNy8FyM5Z80ACHAzgnISEkxUSJIDyBSwi5KF4mjBl4xJdbrG9ComLrL8YATiodhQKCkj6ROdyg1y5XmZlvMVmpJzYppJDwLi/Lp9vT3TfmimOGpuezi2U/9FNav0zX9Oja2r//8+hvuihuQAAMAVmqFgAgCcuboAEAAAUcqy8ca0BHBmwbFkED0CNA1YYDPkhcQrRJxcY3BzfxxltAz9vX62Xl3plAzWmRO+FkZyH///1qAAEjQBAACUpgU5o2AIBmFBGMamrGg0b/+5JkC4ADxyLWb2ngAEEkGofsoACP7U1JLaxTkOqFaKhspGgnW3SGC56ZgUJGCRnLOmIJAkuNBgvwU4Ocf8CJK9UsafH9/Frj///365XSoME+DZMw5UNjrMbVoeIj9EL91IuQ5KHyl5V2LCpdIdESgafOHxVGkAlkHuakmix/gN8+BP/sKguLAAoAtUjtvaoeEADwr3OK11E4KBlojgeQNQBJ4MvCAd/4t/xMMzeLhQGQ1//6tQu5BaBOGCT6U4aafvXZ//4iAPAAAAbLkgIlQmMSLA2H1CVNAlWwyVvKIQIxOSK1NWxs4MBUATlKrAkIMPAjCAdS6MVFzuURWa/+/qQWEGsA6EEpiBEJb9Q21lAHoBoD0B6aAPhyt+bG3muoXIN3RLadXxUfr/ohjGFF/p97eqNI5noKAqYLNPpUTDSI9/TmA6B+YAAADgA0Y4lxTW1SQfOQuDDDI0KTTuIrF5qoJrUFhUFAsg+AT2hbkaRZYGIjBKVDIa5VgNN/9P/rCDsBJbYJRKpCA1ArAkigIeYY61AjE+jubyiZFZ3+L789//uSZBCABHVj2entNmw1JXokLycYEFTFVa0wz4DYjKs08J2Q+r4n3lgbWaaMwMLEjFW88F39brqPF83cv1mCSJeY3Q2uiQxhBJxCBeR1D2LQRsYQcZUTzdNll8+OwZBsIwSgl45ymaHX603Mz7JmZuvt71GDTN66zev/+cLn/b5imV8pAHkg61FIJchBSG+zycgAZgADD6F1iQQRXRWmWS6bDIIgyBCZEcdl/KgXGmVKFv/vl8ry/5bLypf//U5jhYDhL9X/pAA0AKBIAAKgGtGXGGWJgEoF2JNsHlKfSKLRhGBAgIuWZKIJCFpF1VBhkB+EfzEyMUJdWuMrEZoPZ5BfF3/Nu62riIdjoO4AAKD2sTrDmpZZaYysf/810TitAVvn9xtFucieiaEy54YqiIO6RqkGAm5wVO0bFB0sDTdNxYGekKktR4KAAfAwUIgI8Ci6aXgtwbhPWAC+CKExAFydNtYGXNZoQjUsXv/9vKjgmdwieb+h7kHvPoc//0FaCACAATKFC4Y9ammklidbaiJNPBhGWTNhFSgdtalK12lpl//7kmQRAFN2NFI7TBvwNKNaTRsFGBWdfV2tPNcYvBHpgPKJsc8IUcTCxY3HSvUVNTWe/Z3YWlrJ0yrNRUiT19aprA7E+mPP+ZmC3/CsheOJXhc/9VJb3UZnphUBcqZUZQth1i3XqtPYu2Sy1s8DV9ZYACAAASAAHgFkQcOqgB5utFHFh3kSi4USs0yk4iOClREmjvdG+upaiLcRA6/9QGbOfxF/8sEAQAVG0G07YFMihKR4EXJCkRdX9isueLqUMRAQdhDZmv3KeR0nPqRVrZmSIXDt+BBSR7qqbKQcB98W9qiMb55preHIStxFWPE4lAyI+BKz2iSxonpvMR5DgKxTH6vGGXAbYCaAnJUW4W07EesQqbfqdbo4qNnPxSpn1H8eahszc/y9//dn1V7D/OYpn1szQKAPXTMlO/rO//u7JriJXbld7aP33v6RXYg/COIDzTWkTspg6Ay1YaDSwKxrP/LfIikHjmO871POf/kEAseAgoPEi9/0ZziNwfxVKy9qAEGEEAAq1EcOamDEGHAA0iao8k31rz2MiLNEik6VQ37/+5JkEAgEYU5WU0M3MDjDe0o9IjiOzSVM7aCzEM2GqXD8pFB0zxMcHCQNHtZD+R+pMWZxOJ/otEZTvVN/MeU12xTVcL+f2YaiNJTVoPd6SvzEnKel5GXOzEaazgdChnP2jOAwpfyRpVlQwoJBwpN1L1DL////6TVWcoepf7CVWrpEWiym5lR5U0BSMlxQC4qByOyQIAEuJfIriWixDqRgMfVZWuvRowjR9BzP5lZlT/+YG50CsSBG////////liXDQVMxEaBkbzKAAACnDIAstY7iK7gGSF7SIDexaTtPOHABk9YcmJEACmo50pgWal22etroBpYoVqtU6OPqvlf0c4QCAfLk9P/FJs4KCQMf6ECZyA6BwqqyJ0rMYj56k1/UlTIx1V3Rt5NF71D4qlptDC8VMgQVHFDlQnDFi06qQgKQAAIK4TxxJGFGYJuZNGXRdpq7IW/DYpPIQRFJLAc+qn1E0XYdOkQVJT+z8Lvff//8vbKAWTIBBUUdM6cOhlDry7x4dAkJXIBhbO3HSMMMGBQ9K9/JNfu09PjTO64wYEcR//uSZBeABP5g11NPRVwzQ4r8PMJVj7j9UU2wUwDPjeq0Z5w675D9+uDdL2QsuIry2lZtwn/pJYyRRjANEOQxNWw8mU7Tq+vueV7JrX/Pg7VIkEuZT5dwd85MVoq5lpStNICkBAcFR88//58KO8Zjt2PIGxWl1cVfXeNGH18SReNT//hYliWtQuNluxyxONbm4U+lpkAgpyE7yAIYUjIaqHmARJ0GQTtmH60xdwFp/u253XBCxD0f/lBcguCALn//Y5nqEv//1h4BAAwgAA5gcHmpIplgeW9fAOM6RFZUywrsGAiRmKkanQnCFBjYoPDS7bjwtPTkVI8D/P8VVLcTUz65n7PW2s3tNYHgEul4tBaIz0A9RgJAyAMI4/i0fpQKjhX9S+qIa0vmc4CZit/0/3UTDGeKNpkk0nu2rUE2ag8WErhE/kgAiQCJKQEYBA5Wn6CxHoIUh6dQ46nLIuwFk4S/LaDQxXu7Yf/pf//lwJB0S/Ff/4C///EiBEiAAAIAMnpngiIABAdMpKigkXaUwhLEGvpiofmXW57h2XAZO3CMRv/7kmQUAEOHQlHraRTQMkQp6GWFZBTVU1lNPTPYyIyocYeUoNgLBWAs1jPkTv/tXBaeZ/tbD/nAGP8/xT0SNEi5zof0KIVEzVe9r5lZOol7kyaXMYS4J/ZS3djp//UaeVyR0mUMlTgfz8XqMzIEgAQQ6UNQ1DSE0/C16OvyaocF4ijAGFci0FSYqCUSaWs6t9F6/699DKvMgMoK1//kSbvxtyBN27I7mdXgNMAW75sRU1UwUHYG5axI2tFIFpkgx7nnK+1JmRKjqeAd5Ph0QAL4QAnirmiPlg0yBDlrb/d3ngtA65rb999+8vdDCfnJuJAYIl285zklpVbrKpk1PEzrOY9NZUgyz6OiOsKt5qG/g2ibxSZ+/eTI/NB8n4ev//n2nIw85GAdwuJL7kYnnAbpcf1RBKH6b2U4RWP8dmWH5snsAFYwADBgAopKdzFJq4Jlmotloh/m4QpTSvJRE3nYZHephoqBhVf+P7vQ9BPlwZCP+3//+hdy5uUwS3LDEgQx4cdIgvDEBR1YqymCsSbKzRy2aQmSv+AAcAgAkvzPfuX/+5JkFQAj6VFX00Zr5DllOhhgpn4MmSs+zSRRiO8U5tWklYgSLKfs+Xheb/+6WaAQCKTztNeJ382MUltZNnjSJoFrCqB6C4mFcwJpJD4Oc8dLDXMTh9k1/rmTopfzqv9AvHWfOuZJlEvHSVMjyjpkVucKSzxJVQBgAAIo8DGqRdYCXPckFYg+dH9A/qUyljrtpxH9RJX/Z3Vv6uFkPg4M2jf3CL09QrwOrMt69n//8UFEAAMHWdhg1CcjyVBwiArOYlDL5NPY6x8ZLFBCGi6SVTKX5nqdSEFjebnv2zHdt0dj6xvORsSFzwqRNTJSZIrrlpXcURNL9WW7krBgr5jPMaGcvJ5v0N1s19CV7+7fvQfjySX2QECWUgKgeJCIif4WRBZ/6archpDkzE7oWctK3zEHP9Smeai8oeHkM6AK7pGjtOgeFv40ugqNd+Iv///uAZAMgAAAUeSWhLPpdwk3iXpBw43hOVIp1gliUOSaeZcZeZhLAH9TtD56wUpBduzLF5v5qViTH6o+I0+8Z1asaLgKVAohlpB72DgAQBQxEd3g//uSZCiAA6k0UdMPQfA+xcnBYON8E3WDVU0w1ZjPDSmo8IniHAFDNnkXF3B94gicH5d8MFw+IHZwufxOf/8gsHw+XrD4Jn8T4RAyQiABNBQg/3giEWuZ42mVFB3kkXNjhqBg1CghEUbN3/7/KBhyqNueef/MIDBClP3YRnKLiIlEFzf//0g+4zKpRIKTpqQgUtnHGFw6RSLN421iGcYapqFxny/capK9r9v+2BSy/RU1yZxa2eGaWK07ijfcxeiO3iuHJvjbXzts+Ny+XyFnsne1h0qG4mAaN6xRGaLVxKPlrri0Bg9oXGyxcw8JRBPkUzC8v451vVd9liSX85JMrmkVNwxOCwUg298////7ks//L409/hwMRIozKiIckXtjzDaAMTBcAACAwLGargPSEgEJZN/EFjfF/VKgaMYKMbwtf/T0UCGGfjfOAZ2frCigYdwh/+sGlQBxhCAAAUHkDPqOdmmUdAVYl3IhrEfR8qZFjLYEPOyzVGvm6lNUJCk2PNazwFxaijk+ZEaiTehoJGuDh6zN/EVP8BCLD/88BoY7Xv/7kmQlgBNmMtNTL0FwOGZJ/WHiKAyhJU+soE3A3JnmAa2oaCIru/+RrEHMTphxQ0X/LzoVy4gKhYl6ZUlklW7CLRVoYmgABwCRMAAMA/poCiEEYLsBVodWcVZ18+CcAfH165U4Xgh7/X1/BAQF6GN/BwQ/+D9S9P6wII//CoANYFYCBAKlGQDKhVjjylKARw2mPAtp8JjcQHggQswVsOEKsF6AIBWvmpIFdSZvRVv/LHWEy0+txMxu+VK9gEqG5pWf6GNGU4UBVkfd+bsj/6lZE0fkOpAqAOvyUO9oo+IiEtcLKOGzhhSGa4MYINHWoQsFr8zzmow0tRILkqz5/+vFxl/oZX/+qGW//xiLjR3xcGn//0QLkTQJh1UA8MAQAEXC/YxODKTDUEhrASs1512GRp+dRFFdTWIRaOXrve1eNjTNpreqQYrC9NBlQc1f8YO2po8bnH6qffuRvU7taiNF3baokE0YpmjRCHRclWBb9NCHKHpERwHRG3pqgXklq4sBpLjGvmekg8Y7SjM1FZopIM8IhB6dtMr8aKsdovh4FW//+5JkQ4CjTDdSU0gtIDiE+YBrKgwNbSVJTCBPwN8N5ZW8NKDnhRB8AXCm//KAsBUCwKU//oJQnET+UP3/zpYRocAAABJkVzzIuoLGEaDoxfsNva12EUdxhJMGFQioSg8GxKsLm8kWEmExJuNidarkk+OTXc0i2OZEq2v+tZr/MDZRS0I7LfRpHdlsiF6m/mEjk+XlK10UqtKYUwNgMx24hUtCJLfpM3ExUeKDYjClgZAzAjQ0qlNQBTsGpk9zSRkCiKkRGp572VXsPYChGvxhAuYkDYZK//jSRgto2mTf6+PJqgAAgIAAAACYZE6aZOHhYkYlcbpeYQq1RgLO4U8TIlL1sGw+iKZi5Kzc/bKT0yXrIUMES89RCWy8oWlxqIQlKANLFpT/KjUrK+UCYbZqGnjVj29aO5dzofWAskRX5eJWPi4kf/aRVjy3Wlyg2AnMYIDSTLwZUTASIzflPWUwwlUnIFMnGiyABeaXJcN91PmQJCLzmvUJkFOHCrX/+6O///IHnT4tT9YYBoNMQ09GfKIErwdwChNz1Qy5+5S/wWeY//uSZF+C03UyT2tMO0A3RRkhY20KzQjDMszhA8DjlGOBp5y4ZCS3ica52GIGiryv7FAaSDVZSXKFTiir+GvGiuK4rjgwPVTddso+W/42a4ueJJHDYtfj6YoKknnjzRgKA0fBIRZOSsprJqnoNN73ps/Z9DVgbKNbMGmRzrYBMAZCPUANkAZQ0syAC2ubK1NF90+WoesBpnhY8qwVDkNb/5Uof6//418TgElCSgAIgyAAQBHEmiaQFPIRmfAMELffpo0IflyEuAAQnSnKvwTlVlnIgOAAGS3P3IydjXPSh/CaVRqpSNCjQqDvPM+fLcuN+WgqNix6CoHomUWTT86JjziRSZ3yjnq+dIldKPU11KUuf6wAASMAAJxE+MlyktgE9UGSxjEx6RR0v1s9bWZ+EJSrGtjqUIhklG3J8eLRn/2U/nv7f///+7/6gBQgEAMUijVMwweWWMyYM/PLXuc7DptIQmBARMRCxXjEIcTNDQgSSeHpUNXO7dRSOllJPvnY7yzaO1hmUjsKvHe99fOxrabMX7mGTi5tsNkZVZLndzxse//7kmR7ABM2O0pbKTvQN4NI+WGFPA2ZESs1pYAAvA0jVrJwAHfbr/c6//vW790dzX36QNBRlDv/6QQAU3V64yUgBEAYc/lI8e5bm+Z9+j+4aaj4tFrb//iker/4a12b/V//q//9v+7vAEAAAAMqZTGd5gL4f54o6ZebKNrR/zWVYUEVYVVv8BuAV2OUT+DUQgkJ8J1Ey4ZbFCiAwgwzMSdHV4jQR+OoPWEASaPkyYq+PsQFFJCsEEJtOiUjI/+GRhtC2DnizTMXATJig9Ey/kAJMrkHGYJ8gpLjmJOYoskpav+ShRJInyGGZVJMihDi6pIxRZJJel/8iZPkYiREnyKE0akTL5QNSqT5iiySS9Ja2SV//5ME0ak//+4KgAAABgQBAADAMDgYCAEgCteQ0fZH6+ICXA357+MPfhR/+ywRf/U///LVTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVX/+5JknQAFoWhGLm5gBClBmT3GiAAAAAGkHAAAIAAANIOAAARVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV");
  var qr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOcAAACDCAYAAAB2kQxsAAAAAXNSR0IArs4c6QAABdRJREFUeJzt3d3N3TYMgGG16ADdoAhyl7UyV9bqXRB0g2zQXgRGDcOWSIoUaX3vAwQBknMk/4gWLcnHrQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDEb9kb8FH99eeXf6Wf/efn35ynDyj1pEsb6G6NUxOYZ7sdB/QtPdnWRnn29gbKMYDUspPs0SgPb22cHANo/JG9AZF6wWBp3JLgeir36bvff3x9LOvzp2/dbSFA97bk5I4a9VMD7TXOUcP0uJ+d6emu5d6V1QvMs5nj8FZPx37X/b2TFpzShtnafeP0DipJMFnLnN3/w1OQ7tZgP+pA4VVKcHo0TG36KNULKGt5XsHZmi1APS5WM2Vqg0i7vbsG6YcIznN9vRTxXHavgdxtv6Tc3vc1pAHqdaG6ipwKYprpf1sFp6aH0gRTrxxLubPB2avHu+c/l3mICvqnsr//+Cq+qGrK1Xw/wzbBaRkNvSv3yew9cq+cu89L6nu6F/cMzCgzF1ftANlbe+Otp1IkDVxyVfbo6Z481f3507dhvXfbrk3HpdtjKTNqKuio8678c7mzF6ns6arfMyrVNoA75wMfNU2hKSeCx3Fq7dc+SPfDc39H9Vqn2CT//4bsYeT1PecOJyGSJdh6PZOlbElPZz2PHtlD1cUeS4LT4z5IOihwfNaD5ERm9qxH/dZ7Vmt9M999CtCZbdLUP/p3r2zFQ0paG8lr4Eb6+ZWBcSeq/qhyK6bXUfXOSgtO7/tOb9eT1NveqKttpYbiyXu/euV51JV16/T6e86zyF5TUp731V5Sp+Z7M71h9QvFNWWuvr0Sy4LzLfNvrel6zRX1e+hN2VzrnNlfaYD0xhCs++851lDh3vNV95xe6YvHgb8bwbNcuc+f09wbaUj2dzYgjz93//5kh94t0quCM8OKK6glKKuM0EYHfhUZWd8WwenZa0rLsp6s2YY66o0k9WUvS4NManBaGuo1eDIHgUZ1ePdkntsfFaCz5VZJdStsxyt7ziMNXHEAK5yk1mqmhrMPf1fcp57Vqe3SqZTMEduZhqAZyaywFne0DVHngHTZ11bznE88l/1lBZ9meP8851plWkBCO7drmQvWnL/sY/fKtFaqN3iy6iofsQxNktJnTMgfPXJUz3w3VaP5vOQ7Iyszvy2DczSi+aYFET2jINUEqFcAS4+rV480WlwRWXe07dLa0YGvfl9kmbTvPZJ1TXGvn4t4yuRp+2aMgk27wkm63DIztU3vOVfueC8wK4zKWtK0M+nvJXmOdlt65MgFFCva06qsKz044SvjIiN5TjLaaHxhtNyyouXBGZ1WSn66Ivt+M7pRZAWoZsDq+t2emeM1am/WtHxFG9runrO1/n1CxLK7CilxJM/H4bwuTJJBvWtgvm0gcNu01uvpd8la1soLE7xkpYDea4Ot6W3GOSzRc3o/qHw2M9qmXWA+uw+jbd0hyO9Yz0+vJ9QGcO/8ZV2YUqYVPN8dImXp3aJ/w1XTGGYfKZN+P7IXiXqO1uINLzFOm/Pz+BV4C03PNEqpZl//ELXP1ro8nhLyKLPHMyAiXyvh4cMFZ2uyAJXc62gzgJl1nhrSLMEzcLx+5qQnIhgqv6qhTHC2Zmus1tUuowCVDkRU6j0jgiJqhLPSSq2q7wMtMSBkdbcQWjNCq2nMlRrTnajAPP/t+c5Sj3K8VNueQ+pGzaa2MyOb2sZseW2dpL6ZnjMzfeQFt/Fe3XP2WIfGvRY6a569jCJ9TaIlcCS9KQE5p1TP2VrMbwLNDlZEvpE5AkGxh9f2nLO/QOetytIwAnMf6SfS2ns+jaZ6B4i2sWvSvF0HWOAj/aRGNFAaPXbw2rS2Rzr0T/ChshKNM3qd4135BCaqK9VAKy+lAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/4DBC0k0jFtF9wAAAAASUVORK5CYII=";
  var $r = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOcAAACDCAYAAAB2kQxsAAAAAXNSR0IArs4c6QAABqxJREFUeJztnU1yFDkQRtMEB+AG7Fk6fBPO6ZsQLGc/N5gbMAtosJvqKv2kpPxS763A0W5XSXqVqZ+SngzgF58/fflx/7N///vnacW1gBkFD2Z2LOYNBF3Dx9UXAGs5kxLWwhNxU2qlJHrOhwLfkNZoiaBzIa3dCFJYLXgSboKXmETPeVDQyamR8vX55fe/v37/9vBzCDoH0tqktEpZ+t0IOh4KOBm16euZmETPtVDAiRgRLRF0HRRuEkrFrE1hzR4Lipxj+bD6AqCPz5++/Bgp5tXfdv1CeAdPPmFmSkn0nE+a0drdFm6XiOkdKWEuKRptTXqlLuqqFNaM6Dkb+T5nbb+npo8WjZVinqFantFJk9bWojaRThq7HzKN8wiPJ7aCoJHEZN5zHvJp7RE1DTV6SnZ1fa/PL1MjJtF5HmnT2tJF3GZ/BIj05I8ULUtR6ypER7ogjxpw61rRGxEal4KYjNyORzatbUlHSxr06tFcBTHPiN5NUEJWzlZKG/aKRqYk5tl1IKgPafucZ7w+vxSluLP6olHnL6MQQfYV6bpk/+BRZXm+cXHEiApSipZHlE6tRBDMkxmyysl5VsmtjXiFoJmiZU35ZWK0oNv1OY+omSv0GDDKJCaMI42cHg25dvFCi6QZxVS6ViVSpLUz38A4oiS9ySjlW2althGWKZrN6XNuOVpbwq0ReIzqZhfTrHwE/PZZuEYqcnqO0tZQGxVqRylprLGIEDXNkLOKEakbYsYiiphmiQaEZuD9BghixiKSmGYJIueqBt4TRZEyHtHENCNyNtMaRREzHhHFNBOKnKv7myVcVXKka4WfRBXTjMjpypl8iBmP6MsOmed0Bgk1UHjxXlpORIAWIqeybyGtha1QEdNMRM5s7wLCGpTENBORE6AXNTHNkBM2QFFMM4F5ToX5TYiLqphmRE7YmMhimiEnJEb9XBdJOUlp4Qp1Mc1E5QQ4I/qyvFJCy8n8JnijEjXNAi3fQ0TwIEM6e2OqnAgII8kkptkgOZEQZlN6BquZjqhVFxlBOkZq4Z6WASAFQQ8jZwQJ70FK8CTiaeb3fDSLJyMiwiwiS/q0SkwEBE+85jYjSTpcTiSE2WQRtVlOpAMVemVdtjXmlZxICFlQk/TJjHcmYS96JJ0p6KmcZggKeWmVdPopYwgKuxJVUuQE+EU0Sd99KYICxJH0ry9DUIA/rFy3WyWnGYLCnqyQ9PCXERTgmJmSPvwlBAU4p1bUWklPP1yytA9JYWdGRtLLDyEowDUjomiRwQgKUIZnJC3OgREUoByPSDpkDyEkBfhJj6RNQ7xEUYA6aiS9Cdo8SUoUBaijVtCuFQwICtBGiajdawARFKCNK0HdVtEjKUAd0+Q0q9v/FklhJ1rmP4e8JEoUBejfq2jYNgtEUdgJzwN7u6dSSkBQyMSME7O7FyHUQpoLCqw8rv5o+d6Uw3NvfzjagUkAZvOlLH1lLMyx8wCzWBEhW3ZDmLZ7NTsrwCpmyui5A1+IPidigjcjhZy14/vytBYxwRsPMVcf/2c2QU72wQUVIgj5lqFyIiZEJ5qQb1me1gLMJLKM93wY9cVETYiGkphmg+RETFhJljY2LHICQB/uchI1AXxwlRMxAfwgrYVtUHvxwk1OoiaAL8MjJ2ICtOEip1q6APnJEBS6VwiRzp4vtM5YBvf3m/EeI8DyvUZK33z4+v1bqsZ7dN+3n2W6zwgMO44hY0X1vIqkXh419x7lXh9ds8oyviFyRqmcXrxf2FUtF89ymFkG6nI2p7WZB4FGvUWfLcVt4ahsdy+TR7ifz6lc0F5v0GfalmXldpE3esrr6PrTR84sjNjS4kpQhQhaUi4lD6KR1xK9DHupfoKoR02vSFDy9FWNoKVivv1/lG7OfZkqR043OZUbWgmtFaomaGl51ZTHCnFv5bqNnFGjZvRtEFUEHSHmI1ZHWgVBXZ5+sxvX7ANlPChpjKsknSllKaPlRU4nZo0Yjq6wiIJGFPMML2mj3M8ZRRe4QkzF6FhCJEFbBn4i0iKswn11yenZiLLKeMRqQdWiZSmlkqrcV9d0gPfksAcqBW+2ZqAoq5gZGSrnTtGwlVmCIqUepxWxerj7iIyNZ7SgiKmJhJw7NJpRgiKmLuHl3KnReA4UIaU+y+WkcbzHQ1DEzMGQ9aJH0BDK6RE0y9wlTDp2HuppERQxc0FFBaZGUMTMB5UlQG/fHyk1odJEaBUUMXWh4oSoFRQxtaHyxMi2uBseQwUKciUoYuaAShTlkaCImQcqUph7QREzF/8DSS/2GZ2/N/sAAAAASUVORK5CYII=";
  var ki = "3000.1.17";
  var zr = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
  var tn = "topleft";
  var Kr = 64;
  var Ni = "monospace";
  var nn = "monospace";
  var ji = 36;
  var rn = 64;
  var sn = 256;
  var Yr = 2048;
  var Wr = 2048;
  var Xr = 2048;
  var Jr = 2048;
  var Qr = 0.1;
  var Hi = 64;
  var Wn = "linear";
  var qi = 8;
  var $i = 4;
  var Qn = [{ name: "a_pos", size: 2 }, { name: "a_uv", size: 2 }, { name: "a_color", size: 4 }];
  var zi = Qn.reduce((n2, e3) => n2 + e3.size, 0);
  var Zr = 2048;
  var Ki = Zr * 4 * zi;
  var Yi = Zr * 6;
  var Wi = `
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
  var Xi = `
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
  var Xn = `
vec4 vert(vec2 pos, vec2 uv, vec4 color) {
	return def_vert();
}
`;
  var Jn = `
vec4 frag(vec2 pos, vec2 uv, vec4 color, sampler2D tex) {
	return def_frag();
}
`;
  var Ji = /* @__PURE__ */ new Set(["id", "require"]);
  var Qi = /* @__PURE__ */ new Set(["add", "update", "draw", "destroy", "inspect", "drawInspect"]);
  function ut(n2) {
    switch (n2) {
      case "topleft":
        return new v(-1, -1);
      case "top":
        return new v(0, -1);
      case "topright":
        return new v(1, -1);
      case "left":
        return new v(-1, 0);
      case "center":
        return new v(0, 0);
      case "right":
        return new v(1, 0);
      case "botleft":
        return new v(-1, 1);
      case "bot":
        return new v(0, 1);
      case "botright":
        return new v(1, 1);
      default:
        return n2;
    }
  }
  __name(ut, "ut");
  i(ut, "anchorPt");
  function Zi(n2) {
    switch (n2) {
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
  __name(Zi, "Zi");
  i(Zi, "alignPt");
  function eo(n2) {
    return n2.createBuffer(1, 1, 44100);
  }
  __name(eo, "eo");
  i(eo, "createEmptyAudioBuffer");
  var zo = i((n2 = {}) => {
    var _a26, _b, _c;
    let e3 = (_a26 = n2.root) != null ? _a26 : document.body;
    e3 === document.body && (document.body.style.width = "100%", document.body.style.height = "100%", document.body.style.margin = "0px", document.documentElement.style.width = "100%", document.documentElement.style.height = "100%");
    let o = (_b = n2.canvas) != null ? _b : (() => {
      let t = document.createElement("canvas");
      return e3.appendChild(t), t;
    })(), c2 = (_c = n2.scale) != null ? _c : 1, g = n2.width && n2.height && !n2.stretch && !n2.letterbox;
    g ? (o.width = n2.width * c2, o.height = n2.height * c2) : (o.width = o.parentElement.offsetWidth, o.height = o.parentElement.offsetHeight);
    let m = ["outline: none", "cursor: default"];
    if (g) {
      let t = o.width, r = o.height;
      m.push(`width: ${t}px`), m.push(`height: ${r}px`);
    } else
      m.push("width: 100%"), m.push("height: 100%");
    n2.crisp && (m.push("image-rendering: pixelated"), m.push("image-rendering: crisp-edges")), o.style.cssText = m.join(";");
    let P3 = n2.pixelDensity || window.devicePixelRatio;
    o.width *= P3, o.height *= P3, o.tabIndex = 0;
    let I = document.createElement("canvas");
    I.width = sn, I.height = sn;
    let j = I.getContext("2d", { willReadFrequently: true }), y = Ir({ canvas: o, touchToMouse: n2.touchToMouse, gamepads: n2.gamepads, pixelDensity: n2.pixelDensity, maxFPS: n2.maxFPS }), X = [], S = y.canvas.getContext("webgl", { antialias: true, depth: true, stencil: true, alpha: true, preserveDrawingBuffer: true }), q = Kn(S, { texFilter: n2.texFilter }), E = (() => {
      var _a27, _b2;
      let t = ht(Xn, Jn), r = Re.fromImage(q, new ImageData(new Uint8ClampedArray([255, 255, 255, 255]), 1, 1)), s2 = n2.width && n2.height ? new rt(q, n2.width * P3 * c2, n2.height * P3 * c2) : new rt(q, S.drawingBufferWidth, S.drawingBufferHeight), u = null, a2 = 1;
      n2.background && (u = J(n2.background), a2 = Array.isArray(n2.background) ? n2.background[3] : 1, S.clearColor(u.r / 255, u.g / 255, u.b / 255, a2 != null ? a2 : 1)), S.enable(S.BLEND), S.blendFuncSeparate(S.SRC_ALPHA, S.ONE_MINUS_SRC_ALPHA, S.ONE, S.ONE_MINUS_SRC_ALPHA);
      let h = new Qt(q, Qn, Ki, Yi), f = Re.fromImage(q, new ImageData(new Uint8ClampedArray([128, 128, 128, 255, 190, 190, 190, 255, 190, 190, 190, 255, 128, 128, 128, 255]), 2, 2), { wrap: "repeat", filter: "nearest" });
      return { lastDrawCalls: 0, defShader: t, defTex: r, frameBuffer: s2, postShader: null, postShaderUniform: null, renderer: h, transform: new Ue(), transformStack: [], bgTex: f, bgColor: u, bgAlpha: a2, width: (_a27 = n2.width) != null ? _a27 : S.drawingBufferWidth / P3 / c2, height: (_b2 = n2.height) != null ? _b2 : S.drawingBufferHeight / P3 / c2, viewport: { x: 0, y: 0, width: S.drawingBufferWidth, height: S.drawingBufferHeight }, fixed: false };
    })();
    const _K = class {
      constructor(r, s2, u = {}, a2 = null) {
        __publicField(this, "tex");
        __publicField(this, "frames", [new oe(0, 0, 1, 1)]);
        __publicField(this, "anims", {});
        __publicField(this, "slice9", null);
        this.tex = r, s2 && (this.frames = s2), this.anims = u, this.slice9 = a2;
      }
      get width() {
        return this.tex.width * this.frames[0].w;
      }
      get height() {
        return this.tex.height * this.frames[0].h;
      }
      static from(r, s2 = {}) {
        return typeof r == "string" ? _K.fromURL(r, s2) : Promise.resolve(_K.fromImage(r, s2));
      }
      static fromImage(r, s2 = {}) {
        let [u, a2] = k.packer.add(r), h = s2.frames ? s2.frames.map((f) => new oe(a2.x + f.x * a2.w, a2.y + f.y * a2.h, f.w * a2.w, f.h * a2.h)) : Tt(s2.sliceX || 1, s2.sliceY || 1, a2.x, a2.y, a2.w, a2.h);
        return new _K(u, h, s2.anims, s2.slice9);
      }
      static fromURL(r, s2 = {}) {
        return St(r).then((u) => _K.fromImage(u, s2));
      }
    };
    let K = _K;
    __name(K, "K");
    (() => {
      i(_K, "SpriteData");
    })();
    const _Q = class {
      constructor(r) {
        __publicField(this, "buf");
        this.buf = r;
      }
      static fromArrayBuffer(r) {
        return new Promise((s2, u) => te.ctx.decodeAudioData(r, s2, u)).then((s2) => new _Q(s2));
      }
      static fromURL(r) {
        return jn(r) ? _Q.fromArrayBuffer(Pr(r)) : Vr(r).then((s2) => _Q.fromArrayBuffer(s2));
      }
    };
    let Q2 = _Q;
    __name(Q2, "Q");
    (() => {
      i(_Q, "SoundData");
    })();
    let te = (() => {
      let t = new (window.AudioContext || window.webkitAudioContext)(), r = t.createGain();
      r.connect(t.destination);
      let s2 = new Q2(eo(t));
      return t.decodeAudioData(Hr.buffer.slice(0)).then((u) => {
        s2.buf = u;
      }).catch((u) => {
        console.error("Failed to load burp: ", u);
      }), { ctx: t, masterNode: r, burpSnd: s2 };
    })(), k = { urlPrefix: "", sprites: new je(), fonts: new je(), bitmapFonts: new je(), sounds: new je(), shaders: new je(), custom: new je(), packer: new At(q, Xr, Jr), loaded: false };
    function pe(t) {
      return typeof t != "string" || jn(t) ? t : k.urlPrefix + t;
    }
    __name(pe, "pe");
    i(pe, "fixURL");
    let C = { events: new Ne(), objEvents: new Ne(), root: Un([]), gravity: 0, scenes: {}, logs: [], cam: { pos: null, scale: new v(1), angle: 0, shake: 0, transform: new Ue() } };
    C.root.use(An());
    function Ae(t) {
      return k.custom.add(null, t);
    }
    __name(Ae, "Ae");
    i(Ae, "load");
    function $() {
      let t = [k.sprites, k.sounds, k.shaders, k.fonts, k.bitmapFonts, k.custom];
      return t.reduce((r, s2) => r + s2.progress(), 0) / t.length;
    }
    __name($, "$");
    i($, "loadProgress");
    function Te(t) {
      return t !== void 0 && (k.urlPrefix = t), k.urlPrefix;
    }
    __name(Te, "Te");
    i(Te, "loadRoot");
    function ye(t, r) {
      return k.custom.add(t, Et(r));
    }
    __name(ye, "ye");
    i(ye, "loadJSON");
    const _Se = class {
      constructor(r, s2 = {}) {
        __publicField(this, "fontface");
        __publicField(this, "filter", Wn);
        __publicField(this, "outline", null);
        __publicField(this, "size", rn);
        var _a27, _b2;
        if (this.fontface = r, this.filter = (_a27 = s2.filter) != null ? _a27 : Wn, this.size = (_b2 = s2.size) != null ? _b2 : rn, this.size > sn)
          throw new Error(`Max font size: ${sn}`);
        s2.outline && (this.outline = { width: 1, color: J(0, 0, 0) }, typeof s2.outline == "number" ? this.outline.width = s2.outline : typeof s2.outline == "object" && (s2.outline.width && (this.outline.width = s2.outline.width), s2.outline.color && (this.outline.color = s2.outline.color)));
      }
    };
    let Se = _Se;
    __name(Se, "Se");
    (() => {
      i(_Se, "FontData");
    })();
    function st(t, r, s2 = {}) {
      let u = new FontFace(t, typeof r == "string" ? `url(${r})` : r);
      return document.fonts.add(u), k.fonts.add(t, u.load().catch((a2) => {
        throw new Error(`Failed to load font from "${r}": ${a2}`);
      }).then((a2) => new Se(a2, s2)));
    }
    __name(st, "st");
    i(st, "loadFont");
    function on(t, r, s2, u, a2 = {}) {
      return k.bitmapFonts.add(t, St(r).then((h) => {
        var _a27;
        return bn(Re.fromImage(q, h, a2), s2, u, (_a27 = a2.chars) != null ? _a27 : zr);
      }));
    }
    __name(on, "on");
    i(on, "loadBitmapFont");
    function Tt(t = 1, r = 1, s2 = 0, u = 0, a2 = 1, h = 1) {
      let f = [], b2 = a2 / t, p = h / r;
      for (let d2 = 0; d2 < r; d2++)
        for (let w = 0; w < t; w++)
          f.push(new oe(s2 + w * b2, u + d2 * p, b2, p));
      return f;
    }
    __name(Tt, "Tt");
    i(Tt, "slice");
    function Ot(t, r) {
      return t = pe(t), Ae(typeof r == "string" ? new Promise((s2, u) => {
        Et(r).then((a2) => {
          Ot(t, a2).then(s2).catch(u);
        });
      }) : K.from(t).then((s2) => {
        let u = {};
        for (let a2 in r) {
          let h = r[a2], f = s2.frames[0], b2 = Xr * f.w, p = Jr * f.h, d2 = h.frames ? h.frames.map((A) => new oe(f.x + (h.x + A.x) / b2 * f.w, f.y + (h.y + A.y) / p * f.h, A.w / b2 * f.w, A.h / p * f.h)) : Tt(h.sliceX || 1, h.sliceY || 1, f.x + h.x / b2 * f.w, f.y + h.y / p * f.h, h.width / b2 * f.w, h.height / p * f.h), w = new K(s2.tex, d2, h.anims);
          k.sprites.addLoaded(a2, w), u[a2] = w;
        }
        return u;
      }));
    }
    __name(Ot, "Ot");
    i(Ot, "loadSpriteAtlas");
    function Rt(t, r = {}) {
      let s2 = document.createElement("canvas"), u = t[0].width, a2 = t[0].height;
      s2.width = u * t.length, s2.height = a2;
      let h = s2.getContext("2d");
      t.forEach((b2, p) => {
        b2 instanceof ImageData ? h.putImageData(b2, p * u, 0) : h.drawImage(b2, p * u, 0);
      });
      let f = h.getImageData(0, 0, t.length * u, a2);
      return K.fromImage(f, __spreadProps(__spreadValues({}, r), { sliceX: t.length, sliceY: 1 }));
    }
    __name(Rt, "Rt");
    i(Rt, "createSpriteSheet");
    function Ye(t, r, s2 = { sliceX: 1, sliceY: 1, anims: {} }) {
      return r = pe(r), Array.isArray(r) ? r.some((u) => typeof u == "string") ? k.sprites.add(t, Promise.all(r.map((u) => typeof u == "string" ? St(u) : Promise.resolve(u))).then((u) => Rt(u, s2))) : k.sprites.addLoaded(t, Rt(r, s2)) : typeof r == "string" ? k.sprites.add(t, K.from(r, s2)) : k.sprites.addLoaded(t, K.fromImage(r, s2));
    }
    __name(Ye, "Ye");
    i(Ye, "loadSprite");
    function an(t, r) {
      return r = pe(r), k.sprites.add(t, new Promise((s2) => __async(this, null, function* () {
        let u = typeof r == "string" ? yield Et(r) : r, a2 = yield Promise.all(u.frames.map(St)), h = document.createElement("canvas");
        h.width = u.width, h.height = u.height * u.frames.length;
        let f = h.getContext("2d");
        a2.forEach((p, d2) => {
          f.drawImage(p, 0, d2 * u.height);
        });
        let b2 = yield Ye(null, h, { sliceY: u.frames.length, anims: u.anims });
        s2(b2);
      })));
    }
    __name(an, "an");
    i(an, "loadPedit");
    function un(t, r, s2) {
      r = pe(r), s2 = pe(s2), typeof r == "string" && !s2 && (s2 = Mr(r) + ".json");
      let u = typeof s2 == "string" ? Et(s2) : Promise.resolve(s2);
      return k.sprites.add(t, u.then((a2) => {
        let h = a2.meta.size, f = a2.frames.map((p) => new oe(p.frame.x / h.w, p.frame.y / h.h, p.frame.w / h.w, p.frame.h / h.h)), b2 = {};
        for (let p of a2.meta.frameTags)
          p.from === p.to ? b2[p.name] = p.from : b2[p.name] = { from: p.from, to: p.to, speed: 10, loop: true, pingpong: p.direction === "pingpong" };
        return K.from(r, { frames: f, anims: b2 });
      }));
    }
    __name(un, "un");
    i(un, "loadAseprite");
    function cn(t, r, s2) {
      return k.shaders.addLoaded(t, ht(r, s2));
    }
    __name(cn, "cn");
    i(cn, "loadShader");
    function hn(t, r, s2) {
      r = pe(r), s2 = pe(s2);
      let u = i((h) => h ? Lr(h) : Promise.resolve(null), "resolveUrl"), a2 = Promise.all([u(r), u(s2)]).then(([h, f]) => ht(h, f));
      return k.shaders.add(t, a2);
    }
    __name(hn, "hn");
    i(hn, "loadShaderURL");
    function ln(t, r) {
      return r = pe(r), k.sounds.add(t, typeof r == "string" ? Q2.fromURL(r) : Q2.fromArrayBuffer(r));
    }
    __name(ln, "ln");
    i(ln, "loadSound");
    function dn(t = "bean") {
      return Ye(t, jr);
    }
    __name(dn, "dn");
    i(dn, "loadBean");
    function Pt(t) {
      return k.sprites.get(t);
    }
    __name(Pt, "Pt");
    i(Pt, "getSprite");
    function Dt(t) {
      return k.sounds.get(t);
    }
    __name(Dt, "Dt");
    i(Dt, "getSound");
    function Mt(t) {
      return k.fonts.get(t);
    }
    __name(Mt, "Mt");
    i(Mt, "getFont");
    function Gt(t) {
      return k.bitmapFonts.get(t);
    }
    __name(Gt, "Gt");
    i(Gt, "getBitmapFont");
    function Bt(t) {
      return k.shaders.get(t);
    }
    __name(Bt, "Bt");
    i(Bt, "getShader");
    function fn(t) {
      return k.custom.get(t);
    }
    __name(fn, "fn");
    i(fn, "getAsset");
    function ct(t) {
      if (typeof t == "string") {
        let r = Pt(t);
        if (r)
          return r;
        if ($() < 1)
          return null;
        throw new Error(`Sprite not found: ${t}`);
      } else {
        if (t instanceof K)
          return ve.loaded(t);
        if (t instanceof ve)
          return t;
        throw new Error(`Invalid sprite: ${t}`);
      }
    }
    __name(ct, "ct");
    i(ct, "resolveSprite");
    function mn(t) {
      if (typeof t == "string") {
        let r = Dt(t);
        if (r)
          return r;
        if ($() < 1)
          return null;
        throw new Error(`Sound not found: ${t}`);
      } else {
        if (t instanceof Q2)
          return ve.loaded(t);
        if (t instanceof ve)
          return t;
        throw new Error(`Invalid sound: ${t}`);
      }
    }
    __name(mn, "mn");
    i(mn, "resolveSound");
    function pn(t) {
      var _a27;
      if (!t)
        return E.defShader;
      if (typeof t == "string") {
        let r = Bt(t);
        if (r)
          return (_a27 = r.data) != null ? _a27 : r;
        if ($() < 1)
          return null;
        throw new Error(`Shader not found: ${t}`);
      } else if (t instanceof ve)
        return t.data ? t.data : t;
      return t;
    }
    __name(pn, "pn");
    i(pn, "resolveShader");
    function Ft(t) {
      var _a27, _b2, _c2;
      if (!t)
        return Ft((_a27 = n2.font) != null ? _a27 : Ni);
      if (typeof t == "string") {
        let r = Gt(t), s2 = Mt(t);
        if (r)
          return (_b2 = r.data) != null ? _b2 : r;
        if (s2)
          return (_c2 = s2.data) != null ? _c2 : s2;
        if (document.fonts.check(`${rn}px ${t}`))
          return t;
        if ($() < 1)
          return null;
        throw new Error(`Font not found: ${t}`);
      } else if (t instanceof ve)
        return t.data ? t.data : t;
      return t;
    }
    __name(Ft, "Ft");
    i(Ft, "resolveFont");
    function gn(t) {
      return t !== void 0 && (te.masterNode.gain.value = t), te.masterNode.gain.value;
    }
    __name(gn, "gn");
    i(gn, "volume");
    function It(t, r = {}) {
      var _a27, _b2, _c2, _d, _e2;
      let s2 = te.ctx, u = (_a27 = r.paused) != null ? _a27 : false, a2 = s2.createBufferSource(), h = new be(), f = s2.createGain(), b2 = (_b2 = r.seek) != null ? _b2 : 0, p = 0, d2 = 0, w = false;
      a2.loop = !!r.loop, a2.detune.value = (_c2 = r.detune) != null ? _c2 : 0, a2.playbackRate.value = (_d = r.speed) != null ? _d : 1, a2.connect(f), a2.onended = () => {
        var _a28;
        N() >= ((_a28 = a2.buffer) == null ? void 0 : _a28.duration) && h.trigger();
      }, f.connect(te.masterNode), f.gain.value = (_e2 = r.volume) != null ? _e2 : 1;
      let A = i((M) => {
        a2.buffer = M.buf, u || (p = s2.currentTime, a2.start(0, b2), w = true);
      }, "start"), D = mn(t);
      D instanceof ve && D.onLoad(A);
      let N = i(() => {
        if (!a2.buffer)
          return 0;
        let M = u ? d2 - p : s2.currentTime - p, O = a2.buffer.duration;
        return a2.loop ? M % O : Math.min(M, O);
      }, "getTime"), _ = i((M) => {
        let O = s2.createBufferSource();
        return O.buffer = M.buffer, O.loop = M.loop, O.playbackRate.value = M.playbackRate.value, O.detune.value = M.detune.value, O.onended = M.onended, O.connect(f), O;
      }, "cloneNode");
      return { stop() {
        this.paused = true, this.seek(0);
      }, set paused(M) {
        if (u !== M)
          if (u = M, M)
            w && (a2.stop(), w = false), d2 = s2.currentTime;
          else {
            a2 = _(a2);
            let O = d2 - p;
            a2.start(0, O), w = true, p = s2.currentTime - O, d2 = 0;
          }
      }, get paused() {
        return u;
      }, play(M = 0) {
        this.seek(M), this.paused = false;
      }, seek(M) {
        var _a28;
        ((_a28 = a2.buffer) == null ? void 0 : _a28.duration) && (M > a2.buffer.duration || (u ? (a2 = _(a2), p = d2 - M) : (a2.stop(), a2 = _(a2), p = s2.currentTime - M, a2.start(0, M), w = true, d2 = 0)));
      }, set speed(M) {
        a2.playbackRate.value = M;
      }, get speed() {
        return a2.playbackRate.value;
      }, set detune(M) {
        a2.detune.value = M;
      }, get detune() {
        return a2.detune.value;
      }, set volume(M) {
        f.gain.value = Math.max(M, 0);
      }, get volume() {
        return f.gain.value;
      }, set loop(M) {
        a2.loop = M;
      }, get loop() {
        return a2.loop;
      }, duration() {
        var _a28, _b3;
        return (_b3 = (_a28 = a2.buffer) == null ? void 0 : _a28.duration) != null ? _b3 : 0;
      }, time() {
        return N() % this.duration();
      }, onEnd(M) {
        return h.add(M);
      }, then(M) {
        return this.onEnd(M);
      } };
    }
    __name(It, "It");
    i(It, "play");
    function Lt(t) {
      return It(te.burpSnd, t);
    }
    __name(Lt, "Lt");
    i(Lt, "burp");
    function wn(t, r) {
      return new rt(q, t, r);
    }
    __name(wn, "wn");
    i(wn, "makeCanvas");
    function ht(t = Xn, r = Jn) {
      let s2 = Wi.replace("{{user}}", t != null ? t : Xn), u = Xi.replace("{{user}}", r != null ? r : Jn);
      try {
        return new Jt(q, s2, u, Qn.map((a2) => a2.name));
      } catch (a2) {
        let f = new RegExp("(?<type>^\\w+) SHADER ERROR: 0:(?<line>\\d+): (?<msg>.+)"), b2 = Br(a2).match(f), p = Number(b2.groups.line) - 14, d2 = b2.groups.msg.trim(), w = b2.groups.type.toLowerCase();
        throw new Error(`${w} shader line ${p}: ${d2}`);
      }
    }
    __name(ht, "ht");
    i(ht, "makeShader");
    function bn(t, r, s2, u) {
      let a2 = t.width / r, h = {}, f = u.split("").entries();
      for (let [b2, p] of f)
        h[p] = new oe(b2 % a2 * r, Math.floor(b2 / a2) * s2, r, s2);
      return { tex: t, map: h, size: s2 };
    }
    __name(bn, "bn");
    i(bn, "makeFont");
    function lt(t, r, s2, u = E.defTex, a2 = E.defShader, h = {}) {
      let f = pn(a2);
      if (!f || f instanceof ve)
        return;
      let b2 = E.fixed || s2 ? E.transform : C.cam.transform.mult(E.transform), p = [];
      for (let d2 of t) {
        let w = vn(b2.multVec2(d2.pos));
        p.push(w.x, w.y, d2.uv.x, d2.uv.y, d2.color.r / 255, d2.color.g / 255, d2.color.b / 255, d2.opacity);
      }
      E.renderer.push(S.TRIANGLES, p, r, f, u, h);
    }
    __name(lt, "lt");
    i(lt, "drawRaw");
    function Pe() {
      E.renderer.flush();
    }
    __name(Pe, "Pe");
    i(Pe, "flush");
    function dt2() {
      S.clear(S.COLOR_BUFFER_BIT), E.frameBuffer.bind(), S.clear(S.COLOR_BUFFER_BIT), E.bgColor || Ce(() => {
        Be({ width: we(), height: xe(), quad: new oe(0, 0, we() / Kr, xe() / Kr), tex: E.bgTex, fixed: true });
      }), E.renderer.numDraws = 0, E.fixed = false, E.transformStack.length = 0, E.transform = new Ue();
    }
    __name(dt2, "dt");
    i(dt2, "frameStart");
    function Vt(t, r) {
      E.postShader = t, E.postShaderUniform = r != null ? r : null;
    }
    __name(Vt, "Vt");
    i(Vt, "usePostEffect");
    function ft() {
      Pe(), E.lastDrawCalls = E.renderer.numDraws, E.frameBuffer.unbind(), S.viewport(0, 0, S.drawingBufferWidth, S.drawingBufferHeight);
      let t = E.width, r = E.height;
      E.width = S.drawingBufferWidth / P3, E.height = S.drawingBufferHeight / P3, We({ flipY: true, tex: E.frameBuffer.tex, pos: new v(E.viewport.x, E.viewport.y), width: E.viewport.width, height: E.viewport.height, shader: E.postShader, uniform: typeof E.postShaderUniform == "function" ? E.postShaderUniform() : E.postShaderUniform, fixed: true }), Pe(), E.width = t, E.height = r;
    }
    __name(ft, "ft");
    i(ft, "frameEnd");
    function vn(t) {
      return new v(t.x / we() * 2 - 1, -t.y / xe() * 2 + 1);
    }
    __name(vn, "vn");
    i(vn, "screen2ndc");
    function _t(t) {
      E.transform = t.clone();
    }
    __name(_t, "_t");
    i(_t, "pushMatrix");
    function ne(...t) {
      if (t[0] === void 0)
        return;
      let r = T(...t);
      r.x === 0 && r.y === 0 || E.transform.translate(r);
    }
    __name(ne, "ne");
    i(ne, "pushTranslate");
    function He(...t) {
      if (t[0] === void 0)
        return;
      let r = T(...t);
      r.x === 1 && r.y === 1 || E.transform.scale(r);
    }
    __name(He, "He");
    i(He, "pushScale");
    function se(t) {
      t && E.transform.rotate(t);
    }
    __name(se, "se");
    i(se, "pushRotate");
    function le() {
      E.transformStack.push(E.transform.clone());
    }
    __name(le, "le");
    i(le, "pushTransform");
    function ae() {
      E.transformStack.length > 0 && (E.transform = E.transformStack.pop());
    }
    __name(ae, "ae");
    i(ae, "popTransform");
    function Be(t) {
      var _a27;
      if (t.width === void 0 || t.height === void 0)
        throw new Error('drawUVQuad() requires property "width" and "height".');
      if (t.width <= 0 || t.height <= 0)
        return;
      let r = t.width, s2 = t.height, a2 = ut(t.anchor || tn).scale(new v(r, s2).scale(-0.5)), h = t.quad || new oe(0, 0, 1, 1), f = t.color || J(255, 255, 255), b2 = (_a27 = t.opacity) != null ? _a27 : 1, p = t.tex ? Qr / t.tex.width : 0, d2 = t.tex ? Qr / t.tex.height : 0, w = h.x + p, A = h.y + d2, D = h.w - p * 2, N = h.h - d2 * 2;
      le(), ne(t.pos), se(t.angle), He(t.scale), ne(a2), lt([{ pos: new v(-r / 2, s2 / 2), uv: new v(t.flipX ? w + D : w, t.flipY ? A : A + N), color: f, opacity: b2 }, { pos: new v(-r / 2, -s2 / 2), uv: new v(t.flipX ? w + D : w, t.flipY ? A + N : A), color: f, opacity: b2 }, { pos: new v(r / 2, -s2 / 2), uv: new v(t.flipX ? w : w + D, t.flipY ? A + N : A), color: f, opacity: b2 }, { pos: new v(r / 2, s2 / 2), uv: new v(t.flipX ? w : w + D, t.flipY ? A : A + N), color: f, opacity: b2 }], [0, 1, 3, 1, 2, 3], t.fixed, t.tex, t.shader, t.uniform), ae();
    }
    __name(Be, "Be");
    i(Be, "drawUVQuad");
    function We(t) {
      var _a27;
      if (!t.tex)
        throw new Error('drawTexture() requires property "tex".');
      let r = (_a27 = t.quad) != null ? _a27 : new oe(0, 0, 1, 1), s2 = t.tex.width * r.w, u = t.tex.height * r.h, a2 = new v(1);
      if (t.tiled) {
        let h = Math.ceil((t.width || s2) / s2), f = Math.ceil((t.height || u) / u), p = ut(t.anchor || tn).add(new v(1, 1)).scale(0.5).scale(h * s2, f * u);
        for (let d2 = 0; d2 < h; d2++)
          for (let w = 0; w < f; w++)
            Be(Object.assign({}, t, { pos: (t.pos || new v(0)).add(new v(s2 * d2, u * w)).sub(p), scale: a2.scale(t.scale || new v(1)), tex: t.tex, quad: r, width: s2, height: u, anchor: "topleft" }));
      } else
        t.width && t.height ? (a2.x = t.width / s2, a2.y = t.height / u) : t.width ? (a2.x = t.width / s2, a2.y = a2.x) : t.height && (a2.y = t.height / u, a2.x = a2.y), Be(Object.assign({}, t, { scale: a2.scale(t.scale || new v(1)), tex: t.tex, quad: r, width: s2, height: u }));
    }
    __name(We, "We");
    i(We, "drawTexture");
    function yn(t) {
      var _a27, _b2, _c2;
      if (!t.sprite)
        throw new Error('drawSprite() requires property "sprite"');
      let r = ct(t.sprite);
      if (!r || !r.data)
        return;
      let s2 = r.data.frames[(_a27 = t.frame) != null ? _a27 : 0];
      if (!s2)
        throw new Error(`Frame not found: ${(_b2 = t.frame) != null ? _b2 : 0}`);
      We(Object.assign({}, t, { tex: r.data.tex, quad: s2.scale((_c2 = t.quad) != null ? _c2 : new oe(0, 0, 1, 1)) }));
    }
    __name(yn, "yn");
    i(yn, "drawSprite");
    function qe(t, r, s2, u, a2, h = 1) {
      u = Ge(u % 360), a2 = Ge(a2 % 360), a2 <= u && (a2 += Math.PI * 2);
      let f = [], b2 = Math.ceil((a2 - u) / Ge(8) * h), p = (a2 - u) / b2;
      for (let d2 = u; d2 < a2; d2 += p)
        f.push(t.add(r * Math.cos(d2), s2 * Math.sin(d2)));
      return f.push(t.add(r * Math.cos(a2), s2 * Math.sin(a2))), f;
    }
    __name(qe, "qe");
    i(qe, "getArcPts");
    function ge(t) {
      if (t.width === void 0 || t.height === void 0)
        throw new Error('drawRect() requires property "width" and "height".');
      if (t.width <= 0 || t.height <= 0)
        return;
      let r = t.width, s2 = t.height, a2 = ut(t.anchor || tn).add(1, 1).scale(new v(r, s2).scale(-0.5)), h = [new v(0, 0), new v(r, 0), new v(r, s2), new v(0, s2)];
      if (t.radius) {
        let f = Math.min(Math.min(r, s2) / 2, t.radius);
        h = [new v(f, 0), new v(r - f, 0), ...qe(new v(r - f, f), f, f, 270, 360), new v(r, f), new v(r, s2 - f), ...qe(new v(r - f, s2 - f), f, f, 0, 90), new v(r - f, s2), new v(f, s2), ...qe(new v(f, s2 - f), f, f, 90, 180), new v(0, s2 - f), new v(0, f), ...qe(new v(f, f), f, f, 180, 270)];
      }
      z(Object.assign({}, t, __spreadValues({ offset: a2, pts: h }, t.gradient ? { colors: t.horizontal ? [t.gradient[0], t.gradient[1], t.gradient[1], t.gradient[0]] : [t.gradient[0], t.gradient[0], t.gradient[1], t.gradient[1]] } : {})));
    }
    __name(ge, "ge");
    i(ge, "drawRect");
    function l(t) {
      let { p1: r, p2: s2 } = t;
      if (!r || !s2)
        throw new Error('drawLine() requires properties "p1" and "p2".');
      let u = t.width || 1, a2 = s2.sub(r).unit().normal().scale(u * 0.5), h = [r.sub(a2), r.add(a2), s2.add(a2), s2.sub(a2)].map((f) => {
        var _a27, _b2;
        return { pos: new v(f.x, f.y), uv: new v(0), color: (_a27 = t.color) != null ? _a27 : W.WHITE, opacity: (_b2 = t.opacity) != null ? _b2 : 1 };
      });
      lt(h, [0, 1, 3, 1, 2, 3], t.fixed, E.defTex, t.shader, t.uniform);
    }
    __name(l, "l");
    i(l, "drawLine");
    function x2(t) {
      let r = t.pts;
      if (!r)
        throw new Error('drawLines() requires property "pts".');
      if (!(r.length < 2))
        if (t.radius && r.length >= 3) {
          let s2 = r[0].sdist(r[1]);
          for (let a2 = 1; a2 < r.length - 1; a2++)
            s2 = Math.min(r[a2].sdist(r[a2 + 1]), s2);
          let u = Math.min(t.radius, Math.sqrt(s2) / 2);
          l(Object.assign({}, t, { p1: r[0], p2: r[1] }));
          for (let a2 = 1; a2 < r.length - 2; a2++) {
            let h = r[a2], f = r[a2 + 1];
            l(Object.assign({}, t, { p1: h, p2: f }));
          }
          l(Object.assign({}, t, { p1: r[r.length - 2], p2: r[r.length - 1] }));
        } else
          for (let s2 = 0; s2 < r.length - 1; s2++)
            l(Object.assign({}, t, { p1: r[s2], p2: r[s2 + 1] })), t.join !== "none" && L(Object.assign({}, t, { pos: r[s2], radius: t.width / 2 }));
    }
    __name(x2, "x");
    i(x2, "drawLines");
    function R(t) {
      if (!t.p1 || !t.p2 || !t.p3)
        throw new Error('drawTriangle() requires properties "p1", "p2" and "p3".');
      return z(Object.assign({}, t, { pts: [t.p1, t.p2, t.p3] }));
    }
    __name(R, "R");
    i(R, "drawTriangle");
    function L(t) {
      if (typeof t.radius != "number")
        throw new Error('drawCircle() requires property "radius".');
      t.radius !== 0 && he(Object.assign({}, t, { radiusX: t.radius, radiusY: t.radius, angle: 0 }));
    }
    __name(L, "L");
    i(L, "drawCircle");
    function he(t) {
      var _a27, _b2, _c2;
      if (t.radiusX === void 0 || t.radiusY === void 0)
        throw new Error('drawEllipse() requires properties "radiusX" and "radiusY".');
      if (t.radiusX === 0 || t.radiusY === 0)
        return;
      let r = (_a27 = t.start) != null ? _a27 : 0, s2 = (_b2 = t.end) != null ? _b2 : 360, u = ut((_c2 = t.anchor) != null ? _c2 : "center").scale(new v(-t.radiusX, -t.radiusY)), a2 = qe(u, t.radiusX, t.radiusY, r, s2, t.resolution);
      a2.unshift(u);
      let h = Object.assign({}, t, __spreadValues({ pts: a2, radius: 0 }, t.gradient ? { colors: [t.gradient[0], ...Array(a2.length - 1).fill(t.gradient[1])] } : {}));
      if (s2 - r >= 360 && t.outline) {
        t.fill !== false && z(Object.assign(h, { outline: null })), z(Object.assign(h, { pts: a2.slice(1), fill: false }));
        return;
      }
      z(h);
    }
    __name(he, "he");
    i(he, "drawEllipse");
    function z(t) {
      var _a27, _b2;
      if (!t.pts)
        throw new Error('drawPolygon() requires property "pts".');
      let r = t.pts.length;
      if (!(r < 3)) {
        if (le(), ne(t.pos), He(t.scale), se(t.angle), ne(t.offset), t.fill !== false) {
          let s2 = (_a27 = t.color) != null ? _a27 : W.WHITE, u = t.pts.map((h, f) => {
            var _a28;
            return { pos: new v(h.x, h.y), uv: new v(0, 0), color: t.colors && t.colors[f] ? t.colors[f].mult(s2) : s2, opacity: (_a28 = t.opacity) != null ? _a28 : 1 };
          }), a2 = [...Array(r - 2).keys()].map((h) => [0, h + 1, h + 2]).flat();
          lt(u, (_b2 = t.indices) != null ? _b2 : a2, t.fixed, E.defTex, t.shader, t.uniform);
        }
        t.outline && x2({ pts: [...t.pts, t.pts[0]], radius: t.radius, width: t.outline.width, color: t.outline.color, join: t.outline.join, uniform: t.uniform, fixed: t.fixed, opacity: t.opacity }), ae();
      }
    }
    __name(z, "z");
    i(z, "drawPolygon");
    function Oe(t, r, s2) {
      Pe(), S.clear(S.STENCIL_BUFFER_BIT), S.enable(S.STENCIL_TEST), S.stencilFunc(S.NEVER, 1, 255), S.stencilOp(S.REPLACE, S.REPLACE, S.REPLACE), r(), Pe(), S.stencilFunc(s2, 1, 255), S.stencilOp(S.KEEP, S.KEEP, S.KEEP), t(), Pe(), S.disable(S.STENCIL_TEST);
    }
    __name(Oe, "Oe");
    i(Oe, "drawStenciled");
    function $e(t, r) {
      Oe(t, r, S.EQUAL);
    }
    __name($e, "$e");
    i($e, "drawMasked");
    function kt(t, r) {
      Oe(t, r, S.NOTEQUAL);
    }
    __name(kt, "kt");
    i(kt, "drawSubtracted");
    function De() {
      return (E.viewport.width + E.viewport.height) / (E.width + E.height);
    }
    __name(De, "De");
    i(De, "getViewportScale");
    function Ce(t) {
      Pe();
      let r = E.width, s2 = E.height;
      E.width = E.viewport.width, E.height = E.viewport.height, t(), Pe(), E.width = r, E.height = s2;
    }
    __name(Ce, "Ce");
    i(Ce, "drawUnscaled");
    function Zn(t, r) {
      r.pos && (t.pos = t.pos.add(r.pos)), r.scale && (t.scale = t.scale.scale(T(r.scale))), r.angle && (t.angle += r.angle), r.color && t.ch.length === 1 && (t.color = t.color.mult(r.color)), r.opacity && (t.opacity *= r.opacity);
    }
    __name(Zn, "Zn");
    i(Zn, "applyCharTransform");
    let er = new RegExp("\\[(?<style>\\w+)\\](?<text>.*?)\\[\\/\\k<style>\\]", "g");
    function es(t) {
      let r = {}, s2 = t.replace(er, "$2"), u = 0;
      for (let a2 of t.matchAll(er)) {
        let h = a2.index - u;
        for (let f = 0; f < a2.groups.text.length; f++)
          r[f + h] = [a2.groups.style];
        u += a2[0].length - a2.groups.text.length;
      }
      return { charStyleMap: r, text: s2 };
    }
    __name(es, "es");
    i(es, "compileStyledText");
    let xn = {};
    function Xe(t) {
      var _a27, _b2, _c2, _d, _e2, _f, _g, _h, _i, _j, _k;
      if (t.text === void 0)
        throw new Error('formatText() requires property "text".');
      let r = Ft(t.font);
      if (t.text === "" || r instanceof ve || !r)
        return { width: 0, height: 0, chars: [], opt: t };
      let { charStyleMap: s2, text: u } = es(t.text + ""), a2 = Fr(u);
      if (r instanceof Se || typeof r == "string") {
        let Z = r instanceof Se ? r.fontface.family : r, H = r instanceof Se ? { outline: r.outline, filter: r.filter } : { outline: null, filter: Wn }, V = (_a27 = xn[Z]) != null ? _a27 : { font: { tex: new Re(q, Yr, Wr, { filter: H.filter }), map: {}, size: rn }, cursor: new v(0), outline: H.outline };
        xn[Z] || (xn[Z] = V), r = V.font;
        for (let fe of a2)
          if (!V.font.map[fe]) {
            let U = j;
            U.clearRect(0, 0, I.width, I.height), U.font = `${r.size}px ${Z}`, U.textBaseline = "top", U.textAlign = "left", U.fillStyle = "#ffffff";
            let G = U.measureText(fe), B = Math.ceil(G.width), F = r.size;
            V.outline && (U.lineJoin = "round", U.lineWidth = V.outline.width * 2, U.strokeStyle = V.outline.color.toHex(), U.strokeText(fe, V.outline.width, V.outline.width), B += V.outline.width * 2, F += V.outline.width * 3), U.fillText(fe, (_c2 = (_b2 = V.outline) == null ? void 0 : _b2.width) != null ? _c2 : 0, (_e2 = (_d = V.outline) == null ? void 0 : _d.width) != null ? _e2 : 0);
            let Y = U.getImageData(0, 0, B, F);
            if (V.cursor.x + B > Yr && (V.cursor.x = 0, V.cursor.y += F, V.cursor.y > Wr))
              throw new Error("Font atlas exceeds character limit");
            r.tex.update(Y, V.cursor.x, V.cursor.y), r.map[fe] = new oe(V.cursor.x, V.cursor.y, B, F), V.cursor.x += B;
          }
      }
      let h = t.size || r.size, f = T((_f = t.scale) != null ? _f : 1).scale(h / r.size), b2 = (_g = t.lineSpacing) != null ? _g : 0, p = (_h = t.letterSpacing) != null ? _h : 0, d2 = 0, w = 0, A = 0, D = [], N = [], _ = 0, M = null, O = null;
      for (; _ < a2.length; ) {
        let Z = a2[_];
        if (Z === `
`)
          A += h + b2, D.push({ width: d2 - p, chars: N }), M = null, O = null, d2 = 0, N = [];
        else {
          let H = r.map[Z];
          if (H) {
            let V = H.w * f.x;
            t.width && d2 + V > t.width && (A += h + b2, M != null && (_ -= N.length - M, Z = a2[_], H = r.map[Z], V = H.w * f.x, N = N.slice(0, M - 1), d2 = O), M = null, O = null, D.push({ width: d2 - p, chars: N }), d2 = 0, N = []), N.push({ tex: r.tex, width: H.w, height: H.h, quad: new oe(H.x / r.tex.width, H.y / r.tex.height, H.w / r.tex.width, H.h / r.tex.height), ch: Z, pos: new v(d2, A), opacity: (_i = t.opacity) != null ? _i : 1, color: (_j = t.color) != null ? _j : W.WHITE, scale: T(f), angle: 0 }), Z === " " && (M = N.length, O = d2), d2 += V, w = Math.max(w, d2), d2 += p;
          }
        }
        _++;
      }
      D.push({ width: d2 - p, chars: N }), A += h, t.width && (w = t.width);
      let ie2 = [];
      for (let Z of D) {
        let H = (w - Z.width) * Zi((_k = t.align) != null ? _k : "left");
        for (let V of Z.chars) {
          let fe = r.map[V.ch], U = ie2.length;
          if (V.pos = V.pos.add(H, 0).add(fe.w * f.x * 0.5, fe.h * f.y * 0.5), t.transform) {
            let G = typeof t.transform == "function" ? t.transform(U, V.ch) : t.transform;
            G && Zn(V, G);
          }
          if (s2[U]) {
            let G = s2[U];
            for (let B of G) {
              let F = t.styles[B], Y = typeof F == "function" ? F(U, V.ch) : F;
              Y && Zn(V, Y);
            }
          }
          ie2.push(V);
        }
      }
      return { width: w, height: A, chars: ie2, opt: t };
    }
    __name(Xe, "Xe");
    i(Xe, "formatText");
    function tr(t) {
      Je(Xe(t));
    }
    __name(tr, "tr");
    i(tr, "drawText");
    function Je(t) {
      var _a27;
      le(), ne(t.opt.pos), se(t.opt.angle), ne(ut((_a27 = t.opt.anchor) != null ? _a27 : "topleft").add(1, 1).scale(t.width, t.height).scale(-0.5)), t.chars.forEach((r) => {
        Be({ tex: r.tex, width: r.width, height: r.height, pos: r.pos, scale: r.scale, angle: r.angle, color: r.color, opacity: r.opacity, quad: r.quad, anchor: "center", uniform: t.opt.uniform, shader: t.opt.shader, fixed: t.opt.fixed });
      }), ae();
    }
    __name(Je, "Je");
    i(Je, "drawFormattedText");
    function we() {
      return E.width;
    }
    __name(we, "we");
    i(we, "width");
    function xe() {
      return E.height;
    }
    __name(xe, "xe");
    i(xe, "height");
    function ts(t) {
      return new v((t.x - E.viewport.x) * we() / E.viewport.width, (t.y - E.viewport.y) * xe() / E.viewport.height);
    }
    __name(ts, "ts");
    i(ts, "windowToContent");
    function ns(t) {
      return new v(t.x * E.viewport.width / E.width, t.y * E.viewport.height / E.height);
    }
    __name(ns, "ns");
    i(ns, "contentToView");
    function Nt() {
      return ts(y.mousePos());
    }
    __name(Nt, "Nt");
    i(Nt, "mousePos");
    let nr = false, re = { inspect: false, timeScale: 1, showLog: true, fps: () => y.fps(), numFrames: () => y.numFrames(), stepFrame: dr, drawCalls: () => E.lastDrawCalls, clearLog: () => C.logs = [], log: (t) => {
      var _a27;
      let r = (_a27 = n2.logMax) != null ? _a27 : qi;
      C.logs.unshift({ msg: t, time: y.time() }), C.logs.length > r && (C.logs = C.logs.slice(0, r));
    }, error: (t) => re.log(new Error(t.toString ? t.toString() : t)), curRecording: null, numObjects: () => On("*", { recursive: true }).length, get paused() {
      return nr;
    }, set paused(t) {
      nr = t, t ? te.ctx.suspend() : te.ctx.resume();
    } };
    function Me() {
      return y.dt() * re.timeScale;
    }
    __name(Me, "Me");
    i(Me, "dt");
    function rs(...t) {
      return t.length > 0 && (C.cam.pos = T(...t)), C.cam.pos ? C.cam.pos.clone() : zt();
    }
    __name(rs, "rs");
    i(rs, "camPos");
    function ss(...t) {
      return t.length > 0 && (C.cam.scale = T(...t)), C.cam.scale.clone();
    }
    __name(ss, "ss");
    i(ss, "camScale");
    function is(t) {
      return t !== void 0 && (C.cam.angle = t), C.cam.angle;
    }
    __name(is, "is");
    i(is, "camRot");
    function os(t = 12) {
      C.cam.shake += t;
    }
    __name(os, "os");
    i(os, "shake");
    function rr(t) {
      return C.cam.transform.multVec2(t);
    }
    __name(rr, "rr");
    i(rr, "toScreen");
    function sr(t) {
      return C.cam.transform.invert().multVec2(t);
    }
    __name(sr, "sr");
    i(sr, "toWorld");
    function jt(t) {
      let r = new Ue();
      return t.pos && r.translate(t.pos), t.scale && r.scale(t.scale), t.angle && r.rotate(t.angle), t.parent ? r.mult(t.parent.transform) : r;
    }
    __name(jt, "jt");
    i(jt, "calcTransform");
    function Un(t = []) {
      let r = /* @__PURE__ */ new Map(), s2 = {}, u = new Ne(), a2 = [], h = null, f = false, b2 = { id: Gr(), hidden: false, transform: new Ue(), children: [], parent: null, set paused(d2) {
        if (d2 !== f) {
          f = d2;
          for (let w of a2)
            w.paused = d2;
        }
      }, get paused() {
        return f;
      }, add(d2 = []) {
        let w = Array.isArray(d2) ? Un(d2) : d2;
        if (w.parent)
          throw new Error("Cannot add a game obj that already has a parent.");
        return w.parent = this, w.transform = jt(w), this.children.push(w), w.trigger("add", w), C.events.trigger("add", w), w;
      }, readd(d2) {
        let w = this.children.indexOf(d2);
        return w !== -1 && (this.children.splice(w, 1), this.children.push(d2)), d2;
      }, remove(d2) {
        let w = this.children.indexOf(d2);
        if (w !== -1) {
          d2.parent = null, this.children.splice(w, 1);
          let A = i((D) => {
            D.trigger("destroy"), C.events.trigger("destroy", D), D.children.forEach((N) => A(N));
          }, "trigger");
          A(d2);
        }
      }, removeAll(d2) {
        if (d2)
          this.get(d2).forEach((w) => this.remove(w));
        else
          for (let w of [...this.children])
            this.remove(w);
      }, update() {
        this.paused || (this.children.sort((d2, w) => {
          var _a27, _b2;
          return ((_a27 = d2.z) != null ? _a27 : 0) - ((_b2 = w.z) != null ? _b2 : 0);
        }).forEach((d2) => d2.update()), this.trigger("update"));
      }, draw() {
        if (this.hidden)
          return;
        this.canvas && this.canvas.bind();
        let d2 = E.fixed;
        this.fixed && (E.fixed = true), le(), ne(this.pos), He(this.scale), se(this.angle);
        let w = this.children.sort((A, D) => {
          var _a27, _b2;
          return ((_a27 = A.z) != null ? _a27 : 0) - ((_b2 = D.z) != null ? _b2 : 0);
        });
        if (this.mask) {
          let A = { intersect: $e, subtract: kt }[this.mask];
          if (!A)
            throw new Error(`Invalid mask func: "${this.mask}"`);
          A(() => {
            w.forEach((D) => D.draw());
          }, () => {
            this.trigger("draw");
          });
        } else
          this.trigger("draw"), w.forEach((A) => A.draw());
        ae(), E.fixed = d2, this.canvas && this.canvas.unbind();
      }, drawInspect() {
        this.hidden || (le(), ne(this.pos), He(this.scale), se(this.angle), this.children.sort((d2, w) => {
          var _a27, _b2;
          return ((_a27 = d2.z) != null ? _a27 : 0) - ((_b2 = w.z) != null ? _b2 : 0);
        }).forEach((d2) => d2.drawInspect()), this.trigger("drawInspect"), ae());
      }, use(d2) {
        if (!d2)
          return;
        if (typeof d2 == "string")
          return this.use({ id: d2 });
        let w = [];
        d2.id && (this.unuse(d2.id), s2[d2.id] = [], w = s2[d2.id], r.set(d2.id, d2));
        for (let D in d2) {
          if (Ji.has(D))
            continue;
          let N = Object.getOwnPropertyDescriptor(d2, D);
          if (typeof N.value == "function" && (d2[D] = d2[D].bind(this)), N.set && Object.defineProperty(d2, D, { set: N.set.bind(this) }), N.get && Object.defineProperty(d2, D, { get: N.get.bind(this) }), Qi.has(D)) {
            let _ = D === "add" ? () => {
              h = i((M) => w.push(M), "onCurCompCleanup"), d2[D](), h = null;
            } : d2[D];
            w.push(this.on(D, _).cancel);
          } else if (this[D] === void 0)
            Object.defineProperty(this, D, { get: () => d2[D], set: (_) => d2[D] = _, configurable: true, enumerable: true }), w.push(() => delete this[D]);
          else
            throw new Error(`Duplicate component property: "${D}"`);
        }
        let A = i(() => {
          if (d2.require) {
            for (let D of d2.require)
              if (!this.c(D))
                throw new Error(`Component "${d2.id}" requires component "${D}"`);
          }
        }, "checkDeps");
        d2.destroy && w.push(d2.destroy.bind(this)), this.exists() ? (A(), d2.add && (h = i((D) => w.push(D), "onCurCompCleanup"), d2.add.call(this), h = null)) : d2.require && w.push(this.on("add", A).cancel);
      }, unuse(d2) {
        s2[d2] && (s2[d2].forEach((w) => w()), delete s2[d2]), r.has(d2) && r.delete(d2);
      }, c(d2) {
        return r.get(d2);
      }, get(d2, w = {}) {
        let A = w.recursive ? this.children.flatMap(i(/* @__PURE__ */ __name(function D(N) {
          return [N, ...N.children.flatMap(D)];
        }, "D"), "recurse")) : this.children;
        if (A = A.filter((D) => d2 ? D.is(d2) : true), w.liveUpdate) {
          let D = i((_) => w.recursive ? this.isAncestorOf(_) : _.parent === this, "isChild"), N = [];
          N.push(En((_) => {
            D(_) && _.is(d2) && A.push(_);
          })), N.push(ir((_) => {
            if (D(_) && _.is(d2)) {
              let M = A.findIndex((O) => O.id === _.id);
              M !== -1 && A.splice(M, 1);
            }
          })), this.onDestroy(() => {
            for (let _ of N)
              _.cancel();
          });
        }
        return A;
      }, isAncestorOf(d2) {
        return d2.parent ? d2.parent === this || this.isAncestorOf(d2.parent) : false;
      }, exists() {
        return C.root.isAncestorOf(this);
      }, is(d2) {
        if (d2 === "*")
          return true;
        if (Array.isArray(d2)) {
          for (let w of d2)
            if (!this.c(w))
              return false;
          return true;
        } else
          return this.c(d2) != null;
      }, on(d2, w) {
        let A = u.on(d2, w.bind(this));
        return h && h(() => A.cancel()), A;
      }, trigger(d2, ...w) {
        u.trigger(d2, ...w), C.objEvents.trigger(d2, this, ...w);
      }, destroy() {
        this.parent && this.parent.remove(this);
      }, inspect() {
        let d2 = {};
        for (let [w, A] of r)
          d2[w] = A.inspect ? A.inspect() : null;
        return d2;
      }, onAdd(d2) {
        return this.on("add", d2);
      }, onUpdate(d2) {
        return this.on("update", d2);
      }, onDraw(d2) {
        return this.on("draw", d2);
      }, onDestroy(d2) {
        return this.on("destroy", d2);
      }, clearEvents() {
        u.clear();
      } }, p = ["onKeyPress", "onKeyPressRepeat", "onKeyDown", "onKeyRelease", "onMousePress", "onMouseDown", "onMouseRelease", "onMouseMove", "onCharInput", "onMouseMove", "onTouchStart", "onTouchMove", "onTouchEnd", "onScroll", "onGamepadButtonPress", "onGamepadButtonDown", "onGamepadButtonRelease", "onGamepadStick"];
      for (let d2 of p)
        b2[d2] = (...w) => {
          let A = y[d2](...w);
          return a2.push(A), b2.onDestroy(() => A.cancel()), A;
        };
      for (let d2 of t)
        b2.use(d2);
      return b2;
    }
    __name(Un, "Un");
    i(Un, "make");
    function ze(t, r, s2) {
      return C.objEvents[t] || (C.objEvents[t] = new Ut()), C.objEvents.on(t, (u, ...a2) => {
        u.is(r) && s2(u, ...a2);
      });
    }
    __name(ze, "ze");
    i(ze, "on");
    let as = Ee((t) => {
      let r = gt([{ update: t }]);
      return { get paused() {
        return r.paused;
      }, set paused(s2) {
        r.paused = s2;
      }, cancel: () => r.destroy() };
    }, (t, r) => ze("update", t, r)), us = Ee((t) => {
      let r = gt([{ draw: t }]);
      return { get paused() {
        return r.hidden;
      }, set paused(s2) {
        r.hidden = s2;
      }, cancel: () => r.destroy() };
    }, (t, r) => ze("draw", t, r)), En = Ee((t) => C.events.on("add", t), (t, r) => ze("add", t, r)), ir = Ee((t) => C.events.on("destroy", t), (t, r) => ze("destroy", t, r));
    function cs(t, r, s2) {
      return ze("collide", t, (u, a2, h) => a2.is(r) && s2(u, a2, h));
    }
    __name(cs, "cs");
    i(cs, "onCollide");
    function hs(t, r, s2) {
      return ze("collideUpdate", t, (u, a2, h) => a2.is(r) && s2(u, a2, h));
    }
    __name(hs, "hs");
    i(hs, "onCollideUpdate");
    function ls(t, r, s2) {
      return ze("collideEnd", t, (u, a2, h) => a2.is(r) && s2(u, a2, h));
    }
    __name(ls, "ls");
    i(ls, "onCollideEnd");
    function Ht(t, r) {
      On(t, { recursive: true }).forEach(r), En(t, r);
    }
    __name(Ht, "Ht");
    i(Ht, "forAllCurrentAndFuture");
    let ds = Ee((t) => y.onMousePress(t), (t, r) => {
      let s2 = [];
      return Ht(t, (u) => {
        if (!u.area)
          throw new Error("onClick() requires the object to have area() component");
        s2.push(u.onClick(() => r(u)));
      }), ke.join(s2);
    });
    function fs(t, r) {
      let s2 = [];
      return Ht(t, (u) => {
        if (!u.area)
          throw new Error("onHover() requires the object to have area() component");
        s2.push(u.onHover(() => r(u)));
      }), ke.join(s2);
    }
    __name(fs, "fs");
    i(fs, "onHover");
    function ms(t, r) {
      let s2 = [];
      return Ht(t, (u) => {
        if (!u.area)
          throw new Error("onHoverUpdate() requires the object to have area() component");
        s2.push(u.onHoverUpdate(() => r(u)));
      }), ke.join(s2);
    }
    __name(ms, "ms");
    i(ms, "onHoverUpdate");
    function ps(t, r) {
      let s2 = [];
      return Ht(t, (u) => {
        if (!u.area)
          throw new Error("onHoverEnd() requires the object to have area() component");
        s2.push(u.onHoverEnd(() => r(u)));
      }), ke.join(s2);
    }
    __name(ps, "ps");
    i(ps, "onHoverEnd");
    function gs(t) {
      C.gravity = t;
    }
    __name(gs, "gs");
    i(gs, "setGravity");
    function ws() {
      return C.gravity;
    }
    __name(ws, "ws");
    i(ws, "getGravity");
    function bs(...t) {
      t.length === 1 || t.length === 2 ? (E.bgColor = J(t[0]), t[1] && (E.bgAlpha = t[1])) : (t.length === 3 || t.length === 4) && (E.bgColor = J(t[0], t[1], t[2]), t[3] && (E.bgAlpha = t[3])), S.clearColor(E.bgColor.r / 255, E.bgColor.g / 255, E.bgColor.b / 255, E.bgAlpha);
    }
    __name(bs, "bs");
    i(bs, "setBackground");
    function vs() {
      return E.bgColor.clone();
    }
    __name(vs, "vs");
    i(vs, "getBackground");
    function qt(...t) {
      return { id: "pos", pos: T(...t), moveBy(...r) {
        this.pos = this.pos.add(T(...r));
      }, move(...r) {
        this.moveBy(T(...r).scale(Me()));
      }, moveTo(...r) {
        if (typeof r[0] == "number" && typeof r[1] == "number")
          return this.moveTo(T(r[0], r[1]), r[2]);
        let s2 = r[0], u = r[1];
        if (u === void 0) {
          this.pos = T(s2);
          return;
        }
        let a2 = s2.sub(this.pos);
        if (a2.len() <= u * Me()) {
          this.pos = T(s2);
          return;
        }
        this.move(a2.unit().scale(u));
      }, worldPos() {
        return this.parent ? this.parent.transform.multVec2(this.pos) : this.pos;
      }, screenPos() {
        let r = this.worldPos();
        return pt(this) ? r : rr(r);
      }, inspect() {
        return `(${Math.round(this.pos.x)}, ${Math.round(this.pos.y)})`;
      }, drawInspect() {
        L({ color: J(255, 0, 0), radius: 4 / De() });
      } };
    }
    __name(qt, "qt");
    i(qt, "pos");
    function $t(...t) {
      return t.length === 0 ? $t(1) : { id: "scale", scale: T(...t), scaleTo(...r) {
        this.scale = T(...r);
      }, scaleBy(...r) {
        this.scale.scale(T(...r));
      }, inspect() {
        return `(${mt(this.scale.x, 2)}, ${mt(this.scale.y, 2)})`;
      } };
    }
    __name($t, "$t");
    i($t, "scale");
    function ys(t) {
      return { id: "rotate", angle: t != null ? t : 0, rotateBy(r) {
        this.angle += r;
      }, rotateTo(r) {
        this.angle = r;
      }, inspect() {
        return `${Math.round(this.angle)}`;
      } };
    }
    __name(ys, "ys");
    i(ys, "rotate");
    function xs(...t) {
      return { id: "color", color: J(...t), inspect() {
        return this.color.toString();
      } };
    }
    __name(xs, "xs");
    i(xs, "color");
    function mt(t, r) {
      return Number(t.toFixed(r));
    }
    __name(mt, "mt");
    i(mt, "toFixed");
    function Us(t) {
      return { id: "opacity", opacity: t != null ? t : 1, inspect() {
        return `${mt(this.opacity, 1)}`;
      }, fadeOut(r = 1, s2 = Ct.linear) {
        return Rn(this.opacity, 0, r, (u) => this.opacity = u, s2);
      } };
    }
    __name(Us, "Us");
    i(Us, "opacity");
    function Sn(t) {
      if (!t)
        throw new Error("Please define an anchor");
      return { id: "anchor", anchor: t, inspect() {
        return typeof this.anchor == "string" ? this.anchor : this.anchor.toString();
      } };
    }
    __name(Sn, "Sn");
    i(Sn, "anchor");
    function Es(t) {
      return { id: "z", z: t, inspect() {
        return `${this.z}`;
      } };
    }
    __name(Es, "Es");
    i(Es, "z");
    function Ss(t, r) {
      return { id: "follow", require: ["pos"], follow: { obj: t, offset: r != null ? r : T(0) }, add() {
        t.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
      }, update() {
        t.exists() && (this.pos = this.follow.obj.pos.add(this.follow.offset));
      } };
    }
    __name(Ss, "Ss");
    i(Ss, "follow");
    function Cs(t, r) {
      let s2 = typeof t == "number" ? v.fromAngle(t) : t.unit();
      return { id: "move", require: ["pos"], update() {
        this.move(s2.scale(r));
      } };
    }
    __name(Cs, "Cs");
    i(Cs, "move");
    let As = 200;
    function Ts(t = {}) {
      var _a27;
      let r = (_a27 = t.distance) != null ? _a27 : As, s2 = false;
      return { id: "offscreen", require: ["pos"], isOffScreen() {
        let u = this.screenPos(), a2 = new de(T(0), we(), xe());
        return !vt(a2, u) && a2.sdistToPoint(u) > r * r;
      }, onExitScreen(u) {
        return this.on("exitView", u);
      }, onEnterScreen(u) {
        return this.on("enterView", u);
      }, update() {
        this.isOffScreen() ? (s2 || (this.trigger("exitView"), s2 = true), t.hide && (this.hidden = true), t.pause && (this.paused = true), t.destroy && this.destroy()) : (s2 && (this.trigger("enterView"), s2 = false), t.hide && (this.hidden = false), t.pause && (this.paused = false));
      } };
    }
    __name(Ts, "Ts");
    i(Ts, "offscreen");
    function pt(t) {
      return t.fixed ? true : t.parent ? pt(t.parent) : false;
    }
    __name(pt, "pt");
    i(pt, "isFixed");
    function Os(t = {}) {
      var _a27, _b2, _c2, _d;
      let r = {}, s2 = /* @__PURE__ */ new Set();
      return { id: "area", collisionIgnore: (_a27 = t.collisionIgnore) != null ? _a27 : [], add() {
        this.area.cursor && this.onHover(() => y.setCursor(this.area.cursor)), this.onCollideUpdate((u, a2) => {
          r[u.id] || this.trigger("collide", u, a2), r[u.id] = a2, s2.add(u.id);
        });
      }, update() {
        for (let u in r)
          s2.has(Number(u)) || (this.trigger("collideEnd", r[u].target), delete r[u]);
        s2.clear();
      }, drawInspect() {
        let u = this.localArea();
        le(), He(this.area.scale), ne(this.area.offset);
        let a2 = { outline: { width: 4 / De(), color: J(0, 0, 255) }, anchor: this.anchor, fill: false, fixed: pt(this) };
        u instanceof de ? ge(__spreadProps(__spreadValues({}, a2), { pos: u.pos, width: u.width, height: u.height })) : u instanceof Ke ? z(__spreadProps(__spreadValues({}, a2), { pts: u.pts })) : u instanceof yt && L(__spreadProps(__spreadValues({}, a2), { pos: u.center, radius: u.radius })), ae();
      }, area: { shape: (_b2 = t.shape) != null ? _b2 : null, scale: t.scale ? T(t.scale) : T(1), offset: (_c2 = t.offset) != null ? _c2 : T(0), cursor: (_d = t.cursor) != null ? _d : null }, isClicked() {
        return y.isMousePressed() && this.isHovering();
      }, isHovering() {
        let u = pt(this) ? Nt() : sr(Nt());
        return this.hasPoint(u);
      }, checkCollision(u) {
        var _a28;
        return (_a28 = r[u.id]) != null ? _a28 : null;
      }, getCollisions() {
        return Object.values(r);
      }, isColliding(u) {
        return !!r[u.id];
      }, isOverlapping(u) {
        let a2 = r[u.id];
        return a2 && a2.hasOverlap();
      }, onClick(u) {
        let a2 = y.onMousePress("left", () => {
          this.isHovering() && u();
        });
        return this.onDestroy(() => a2.cancel()), a2;
      }, onHover(u) {
        let a2 = false;
        return this.onUpdate(() => {
          a2 ? a2 = this.isHovering() : this.isHovering() && (a2 = true, u());
        });
      }, onHoverUpdate(u) {
        return this.onUpdate(() => {
          this.isHovering() && u();
        });
      }, onHoverEnd(u) {
        let a2 = false;
        return this.onUpdate(() => {
          a2 ? this.isHovering() || (a2 = false, u()) : a2 = this.isHovering();
        });
      }, onCollide(u, a2) {
        if (typeof u == "function" && a2 === void 0)
          return this.on("collide", u);
        if (typeof u == "string")
          return this.onCollide((h, f) => {
            h.is(u) && a2(h, f);
          });
      }, onCollideUpdate(u, a2) {
        if (typeof u == "function" && a2 === void 0)
          return this.on("collideUpdate", u);
        if (typeof u == "string")
          return this.on("collideUpdate", (h, f) => h.is(u) && a2(h, f));
      }, onCollideEnd(u, a2) {
        if (typeof u == "function" && a2 === void 0)
          return this.on("collideEnd", u);
        if (typeof u == "string")
          return this.on("collideEnd", (h) => h.is(u) && a2(h));
      }, hasPoint(u) {
        return _n(this.worldArea(), u);
      }, resolveCollision(u) {
        let a2 = this.checkCollision(u);
        a2 && !a2.resolved && (this.pos = this.pos.add(a2.displacement), a2.resolved = true);
      }, localArea() {
        return this.area.shape ? this.area.shape : this.renderArea();
      }, worldArea() {
        var _a28;
        let u = this.localArea();
        if (!(u instanceof Ke || u instanceof de))
          throw new Error("Only support polygon and rect shapes for now");
        let a2 = this.transform.clone().scale(T((_a28 = this.area.scale) != null ? _a28 : 1)).translate(this.area.offset);
        if (u instanceof de) {
          let h = ut(this.anchor || tn).add(1, 1).scale(-0.5).scale(u.width, u.height);
          a2.translate(h);
        }
        return u.transform(a2);
      }, screenArea() {
        let u = this.worldArea();
        return pt(this) ? u : u.transform(C.cam.transform);
      } };
    }
    __name(Os, "Os");
    i(Os, "area");
    function Qe(t) {
      return { color: t.color, opacity: t.opacity, anchor: t.anchor, outline: t.outline, shader: t.shader, uniform: t.uniform };
    }
    __name(Qe, "Qe");
    i(Qe, "getRenderProps");
    function Cn(t, r = {}) {
      var _a27, _b2, _c2;
      let s2 = null, u = null, a2 = null, h = new be();
      if (!t)
        throw new Error("Please pass the resource name or data to sprite()");
      let f = i((b2, p, d2, w) => {
        let A = T(1, 1);
        return d2 && w ? (A.x = d2 / (b2.width * p.w), A.y = w / (b2.height * p.h)) : d2 ? (A.x = d2 / (b2.width * p.w), A.y = A.x) : w && (A.y = w / (b2.height * p.h), A.x = A.y), A;
      }, "calcTexScale");
      return { id: "sprite", width: 0, height: 0, frame: r.frame || 0, quad: r.quad || new oe(0, 0, 1, 1), animSpeed: (_a27 = r.animSpeed) != null ? _a27 : 1, flipX: (_b2 = r.flipX) != null ? _b2 : false, flipY: (_c2 = r.flipY) != null ? _c2 : false, draw() {
        var _a28, _b3, _c3;
        if (!s2)
          return;
        let b2 = s2.frames[(_a28 = this.frame) != null ? _a28 : 0];
        if (!b2)
          throw new Error(`Frame not found: ${(_b3 = this.frame) != null ? _b3 : 0}`);
        if (s2.slice9) {
          let { left: p, right: d2, top: w, bottom: A } = s2.slice9, D = s2.tex.width * b2.w, N = s2.tex.height * b2.h, _ = this.width - p - d2, M = this.height - w - A, O = p / D, ie2 = d2 / D, Z = 1 - O - ie2, H = w / N, V = A / N, fe = 1 - H - V, U = [ce(0, 0, O, H), ce(O, 0, Z, H), ce(O + Z, 0, ie2, H), ce(0, H, O, fe), ce(O, H, Z, fe), ce(O + Z, H, ie2, fe), ce(0, H + fe, O, V), ce(O, H + fe, Z, V), ce(O + Z, H + fe, ie2, V), ce(0, 0, p, w), ce(p, 0, _, w), ce(p + _, 0, d2, w), ce(0, w, p, M), ce(p, w, _, M), ce(p + _, w, d2, M), ce(0, w + M, p, A), ce(p, w + M, _, A), ce(p + _, w + M, d2, A)];
          for (let G = 0; G < 9; G++) {
            let B = U[G], F = U[G + 9];
            We(Object.assign(Qe(this), { pos: F.pos(), tex: s2.tex, quad: b2.scale(B), flipX: this.flipX, flipY: this.flipY, tiled: r.tiled, width: F.w, height: F.h }));
          }
        } else
          We(Object.assign(Qe(this), { tex: s2.tex, quad: b2.scale((_c3 = this.quad) != null ? _c3 : new oe(0, 0, 1, 1)), flipX: this.flipX, flipY: this.flipY, tiled: r.tiled, width: this.width, height: this.height }));
      }, add() {
        let b2 = i((d2) => {
          let w = d2.frames[0].clone();
          r.quad && (w = w.scale(r.quad));
          let A = f(d2.tex, w, r.width, r.height);
          this.width = d2.tex.width * w.w * A.x, this.height = d2.tex.height * w.h * A.y, r.anim && this.play(r.anim), s2 = d2, h.trigger(s2);
        }, "setSpriteData"), p = ct(t);
        p ? p.onLoad(b2) : Tn(() => b2(ct(t).data));
      }, update() {
        if (!u)
          return;
        let b2 = s2.anims[u.name];
        if (typeof b2 == "number") {
          this.frame = b2;
          return;
        }
        if (b2.speed === 0)
          throw new Error("Sprite anim speed cannot be 0");
        u.timer += Me() * this.animSpeed, u.timer >= 1 / u.speed && (u.timer = 0, this.frame += a2, (this.frame < Math.min(b2.from, b2.to) || this.frame > Math.max(b2.from, b2.to)) && (u.loop ? u.pingpong ? (this.frame -= a2, a2 *= -1, this.frame += a2) : this.frame = b2.from : (this.frame = b2.to, u.onEnd(), this.stop())));
      }, play(b2, p = {}) {
        var _a28, _b3, _c3, _d, _e2, _f, _g;
        if (!s2) {
          h.add(() => this.play(b2, p));
          return;
        }
        let d2 = s2.anims[b2];
        if (d2 === void 0)
          throw new Error(`Anim not found: ${b2}`);
        u && this.stop(), u = typeof d2 == "number" ? { name: b2, timer: 0, loop: false, pingpong: false, speed: 0, onEnd: () => {
        } } : { name: b2, timer: 0, loop: (_b3 = (_a28 = p.loop) != null ? _a28 : d2.loop) != null ? _b3 : false, pingpong: (_d = (_c3 = p.pingpong) != null ? _c3 : d2.pingpong) != null ? _d : false, speed: (_f = (_e2 = p.speed) != null ? _e2 : d2.speed) != null ? _f : 10, onEnd: (_g = p.onEnd) != null ? _g : () => {
        } }, a2 = typeof d2 == "number" ? null : d2.from < d2.to ? 1 : -1, this.frame = typeof d2 == "number" ? d2 : d2.from, this.trigger("animStart", b2);
      }, stop() {
        if (!u)
          return;
        let b2 = u.name;
        u = null, this.trigger("animEnd", b2);
      }, numFrames() {
        var _a28;
        return (_a28 = s2 == null ? void 0 : s2.frames.length) != null ? _a28 : 0;
      }, curAnim() {
        return u == null ? void 0 : u.name;
      }, onAnimEnd(b2) {
        return this.on("animEnd", b2);
      }, onAnimStart(b2) {
        return this.on("animStart", b2);
      }, renderArea() {
        return new de(T(0), this.width, this.height);
      }, inspect() {
        if (typeof t == "string")
          return `"${t}"`;
      } };
    }
    __name(Cn, "Cn");
    i(Cn, "sprite");
    function Rs(t, r = {}) {
      var _a27, _b2;
      function s2(a2) {
        var _a28, _b3;
        let h = Xe(Object.assign(Qe(a2), { text: a2.text + "", size: a2.textSize, font: a2.font, width: r.width && a2.width, align: a2.align, letterSpacing: a2.letterSpacing, lineSpacing: a2.lineSpacing, transform: a2.textTransform, styles: a2.textStyles }));
        return r.width || (a2.width = h.width / (((_a28 = a2.scale) == null ? void 0 : _a28.x) || 1)), a2.height = h.height / (((_b3 = a2.scale) == null ? void 0 : _b3.y) || 1), h;
      }
      __name(s2, "s");
      i(s2, "update");
      let u = { id: "text", set text(a2) {
        t = a2, s2(this);
      }, get text() {
        return t;
      }, textSize: (_a27 = r.size) != null ? _a27 : ji, font: r.font, width: (_b2 = r.width) != null ? _b2 : 0, height: 0, align: r.align, lineSpacing: r.lineSpacing, letterSpacing: r.letterSpacing, textTransform: r.transform, textStyles: r.styles, add() {
        Tn(() => s2(this));
      }, draw() {
        Je(s2(this));
      }, renderArea() {
        return new de(T(0), this.width, this.height);
      } };
      return s2(u), u;
    }
    __name(Rs, "Rs");
    i(Rs, "text");
    function Ps(t, r = {}) {
      if (t.length < 3)
        throw new Error(`Polygon's need more than two points, ${t.length} points provided`);
      return { id: "polygon", pts: t, colors: r.colors, radius: r.radius, draw() {
        z(Object.assign(Qe(this), { pts: this.pts, colors: this.colors, radius: this.radius, fill: r.fill }));
      }, renderArea() {
        return new Ke(this.pts);
      }, inspect() {
        return this.pts.map((s2) => `[${s2.x},${s2.y}]`).join(",");
      } };
    }
    __name(Ps, "Ps");
    i(Ps, "polygon");
    function Ds(t, r, s2 = {}) {
      return { id: "rect", width: t, height: r, radius: s2.radius || 0, draw() {
        ge(Object.assign(Qe(this), { width: this.width, height: this.height, radius: this.radius, fill: s2.fill }));
      }, renderArea() {
        return new de(T(0), this.width, this.height);
      }, inspect() {
        return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
      } };
    }
    __name(Ds, "Ds");
    i(Ds, "rect");
    function Ms(t, r) {
      return { id: "rect", width: t, height: r, draw() {
        Be(Object.assign(Qe(this), { width: this.width, height: this.height }));
      }, renderArea() {
        return new de(T(0), this.width, this.height);
      }, inspect() {
        return `${Math.ceil(this.width)}, ${Math.ceil(this.height)}`;
      } };
    }
    __name(Ms, "Ms");
    i(Ms, "uvquad");
    function Gs(t, r = {}) {
      return { id: "circle", radius: t, draw() {
        L(Object.assign(Qe(this), { radius: this.radius, fill: r.fill }));
      }, renderArea() {
        return new de(new v(this.anchor ? 0 : -this.radius), this.radius * 2, this.radius * 2);
      }, inspect() {
        return `${Math.ceil(this.radius)}`;
      } };
    }
    __name(Gs, "Gs");
    i(Gs, "circle");
    function Bs(t = 1, r = J(0, 0, 0)) {
      return { id: "outline", outline: { width: t, color: r } };
    }
    __name(Bs, "Bs");
    i(Bs, "outline");
    function An() {
      return { id: "timer", wait(t, r) {
        let s2 = [];
        r && s2.push(r);
        let u = 0, a2 = this.onUpdate(() => {
          u += Me(), u >= t && (s2.forEach((h) => h()), a2.cancel());
        });
        return { get paused() {
          return a2.paused;
        }, set paused(h) {
          a2.paused = h;
        }, cancel: a2.cancel, onEnd(h) {
          s2.push(h);
        }, then(h) {
          return this.onEnd(h), this;
        } };
      }, loop(t, r) {
        let s2 = null, u = i(() => {
          s2 = this.wait(t, u), r();
        }, "newAction");
        return s2 = this.wait(0, u), { get paused() {
          return s2.paused;
        }, set paused(a2) {
          s2.paused = a2;
        }, cancel: () => s2.cancel() };
      }, tween(t, r, s2, u, a2 = Ct.linear) {
        let h = 0, f = [], b2 = this.onUpdate(() => {
          h += Me();
          let p = Math.min(h / s2, 1);
          u(Ve(t, r, a2(p))), p === 1 && (b2.cancel(), u(r), f.forEach((d2) => d2()));
        });
        return { get paused() {
          return b2.paused;
        }, set paused(p) {
          b2.paused = p;
        }, onEnd(p) {
          f.push(p);
        }, then(p) {
          return this.onEnd(p), this;
        }, cancel() {
          b2.cancel();
        }, finish() {
          b2.cancel(), u(r), f.forEach((p) => p());
        } };
      } };
    }
    __name(An, "An");
    i(An, "timer");
    let Fs = 640, Is = 65536;
    function Ls(t = {}) {
      var _a27, _b2, _c2, _d;
      let r = null, s2 = null, u = false;
      return { id: "body", require: ["pos", "area"], vel: new v(0), jumpForce: (_a27 = t.jumpForce) != null ? _a27 : Fs, gravityScale: (_b2 = t.gravityScale) != null ? _b2 : 1, isStatic: (_c2 = t.isStatic) != null ? _c2 : false, mass: (_d = t.mass) != null ? _d : 1, add() {
        if (this.mass === 0)
          throw new Error("Can't set body mass to 0");
        this.onCollideUpdate((a2, h) => {
          if (a2.is("body") && !h.resolved && (this.trigger("beforePhysicsResolve", h), a2.trigger("beforePhysicsResolve", h.reverse()), !h.resolved && !(this.isStatic && a2.isStatic))) {
            if (!this.isStatic && !a2.isStatic) {
              let f = this.mass + a2.mass;
              this.pos = this.pos.add(h.displacement.scale(a2.mass / f)), a2.pos = a2.pos.add(h.displacement.scale(-this.mass / f)), this.transform = jt(this), a2.transform = jt(a2);
            } else {
              let f = !this.isStatic && a2.isStatic ? h : h.reverse();
              f.source.pos = f.source.pos.add(f.displacement), f.source.transform = jt(f.source);
            }
            h.resolved = true, this.trigger("physicsResolve", h), a2.trigger("physicsResolve", h.reverse());
          }
        }), this.onPhysicsResolve((a2) => {
          C.gravity && (a2.isBottom() && this.isFalling() ? (this.vel.y = 0, r = a2.target, s2 = a2.target.pos, u ? u = false : this.trigger("ground", r)) : a2.isTop() && this.isJumping() && (this.vel.y = 0, this.trigger("headbutt", a2.target)));
        });
      }, update() {
        var _a28;
        if (!C.gravity || this.isStatic)
          return;
        if (u && (r = null, s2 = null, this.trigger("fallOff"), u = false), r)
          if (!this.isColliding(r) || !r.exists() || !r.is("body"))
            u = true;
          else {
            !r.pos.eq(s2) && t.stickToPlatform !== false && this.moveBy(r.pos.sub(s2)), s2 = r.pos;
            return;
          }
        let a2 = this.vel.y;
        this.vel.y += C.gravity * this.gravityScale * Me(), this.vel.y = Math.min(this.vel.y, (_a28 = t.maxVelocity) != null ? _a28 : Is), a2 < 0 && this.vel.y >= 0 && this.trigger("fall"), this.move(this.vel);
      }, onPhysicsResolve(a2) {
        return this.on("physicsResolve", a2);
      }, onBeforePhysicsResolve(a2) {
        return this.on("beforePhysicsResolve", a2);
      }, curPlatform() {
        return r;
      }, isGrounded() {
        return r !== null;
      }, isFalling() {
        return this.vel.y > 0;
      }, isJumping() {
        return this.vel.y < 0;
      }, jump(a2) {
        r = null, s2 = null, this.vel.y = -a2 || -this.jumpForce;
      }, onGround(a2) {
        return this.on("ground", a2);
      }, onFall(a2) {
        return this.on("fall", a2);
      }, onFallOff(a2) {
        return this.on("fallOff", a2);
      }, onHeadbutt(a2) {
        return this.on("headbutt", a2);
      } };
    }
    __name(Ls, "Ls");
    i(Ls, "body");
    function Vs(t = 2) {
      let r = t;
      return { id: "doubleJump", require: ["body"], numJumps: t, add() {
        this.onGround(() => {
          r = this.numJumps;
        });
      }, doubleJump(s2) {
        r <= 0 || (r < this.numJumps && this.trigger("doubleJump"), r--, this.jump(s2));
      }, onDoubleJump(s2) {
        return this.on("doubleJump", s2);
      }, inspect() {
        return `${r}`;
      } };
    }
    __name(Vs, "Vs");
    i(Vs, "doubleJump");
    function _s(t, r) {
      return __spreadValues({ id: "shader", shader: t }, typeof r == "function" ? { uniform: r(), update() {
        this.uniform = r();
      } } : { uniform: r });
    }
    __name(_s, "_s");
    i(_s, "shader");
    function ks() {
      return { id: "fixed", fixed: true };
    }
    __name(ks, "ks");
    i(ks, "fixed");
    function or(t) {
      return { id: "stay", stay: true, scenesToStay: t };
    }
    __name(or, "or");
    i(or, "stay");
    function Ns(t, r) {
      if (t == null)
        throw new Error("health() requires the initial amount of hp");
      return { id: "health", hurt(s2 = 1) {
        this.setHP(t - s2), this.trigger("hurt", s2);
      }, heal(s2 = 1) {
        let u = t;
        this.setHP(t + s2), this.trigger("heal", t - u);
      }, hp() {
        return t;
      }, maxHP() {
        return r != null ? r : null;
      }, setMaxHP(s2) {
        r = s2;
      }, setHP(s2) {
        t = r ? Math.min(r, s2) : s2, t <= 0 && this.trigger("death");
      }, onHurt(s2) {
        return this.on("hurt", s2);
      }, onHeal(s2) {
        return this.on("heal", s2);
      }, onDeath(s2) {
        return this.on("death", s2);
      }, inspect() {
        return `${t}`;
      } };
    }
    __name(Ns, "Ns");
    i(Ns, "health");
    function js(t, r = {}) {
      var _a27;
      if (t == null)
        throw new Error("lifespan() requires time");
      let s2 = (_a27 = r.fade) != null ? _a27 : 0;
      return { id: "lifespan", add() {
        return __async(this, null, function* () {
          yield hr(t), s2 > 0 && this.opacity && (yield Rn(this.opacity, 0, s2, (u) => this.opacity = u, Ct.linear)), this.destroy();
        });
      } };
    }
    __name(js, "js");
    i(js, "lifespan");
    function Hs(t, r, s2) {
      if (!t)
        throw new Error("state() requires an initial state");
      let u = {};
      function a2(p) {
        u[p] || (u[p] = { enter: new be(), end: new be(), update: new be(), draw: new be() });
      }
      __name(a2, "a");
      i(a2, "initStateEvents");
      function h(p, d2, w) {
        return a2(d2), u[d2][p].add(w);
      }
      __name(h, "h");
      i(h, "on");
      function f(p, d2, ...w) {
        a2(d2), u[d2][p].trigger(...w);
      }
      __name(f, "f");
      i(f, "trigger");
      let b2 = false;
      return { id: "state", state: t, enterState(p, ...d2) {
        if (b2 = true, r && !r.includes(p))
          throw new Error(`State not found: ${p}`);
        let w = this.state;
        if (s2) {
          if (!(s2 == null ? void 0 : s2[w]))
            return;
          let A = typeof s2[w] == "string" ? [s2[w]] : s2[w];
          if (!A.includes(p))
            throw new Error(`Cannot transition state from "${w}" to "${p}". Available transitions: ${A.map((D) => `"${D}"`).join(", ")}`);
        }
        f("end", w, ...d2), this.state = p, f("enter", p, ...d2), f("enter", `${w} -> ${p}`, ...d2);
      }, onStateTransition(p, d2, w) {
        return h("enter", `${p} -> ${d2}`, w);
      }, onStateEnter(p, d2) {
        return h("enter", p, d2);
      }, onStateUpdate(p, d2) {
        return h("update", p, d2);
      }, onStateDraw(p, d2) {
        return h("draw", p, d2);
      }, onStateEnd(p, d2) {
        return h("end", p, d2);
      }, update() {
        b2 || (f("enter", t), b2 = true), f("update", this.state);
      }, draw() {
        f("draw", this.state);
      }, inspect() {
        return this.state;
      } };
    }
    __name(Hs, "Hs");
    i(Hs, "state");
    function qs(t = 1) {
      let r = 0, s2 = false;
      return { require: ["opacity"], add() {
        this.opacity = 0;
      }, update() {
        s2 || (r += Me(), this.opacity = _e(r, 0, t, 0, 1), r >= t && (this.opacity = 1, s2 = true));
      } };
    }
    __name(qs, "qs");
    i(qs, "fadeIn");
    function $s(t = "intersect") {
      return { id: "mask", mask: t };
    }
    __name($s, "$s");
    i($s, "mask");
    function zs(t) {
      return { add() {
        this.canvas = t;
      } };
    }
    __name(zs, "zs");
    i(zs, "drawon");
    function Tn(t) {
      k.loaded ? t() : C.events.on("load", t);
    }
    __name(Tn, "Tn");
    i(Tn, "onLoad");
    function Ks(t, r) {
      C.scenes[t] = r;
    }
    __name(Ks, "Ks");
    i(Ks, "scene");
    function Ys(t, ...r) {
      if (!C.scenes[t])
        throw new Error(`Scene not found: ${t}`);
      C.events.onOnce("frameEnd", () => {
        C.events.trigger("sceneLeave", t), y.events.clear(), C.events.clear(), C.objEvents.clear(), [...C.root.children].forEach((s2) => {
          (!s2.stay || s2.scenesToStay && !s2.scenesToStay.includes(t)) && C.root.remove(s2);
        }), C.root.clearEvents(), pr(), C.cam = { pos: null, scale: T(1), angle: 0, shake: 0, transform: new Ue() }, C.scenes[t](...r);
      });
    }
    __name(Ys, "Ys");
    i(Ys, "go");
    function Ws(t) {
      return C.events.on("sceneLeave", t);
    }
    __name(Ws, "Ws");
    i(Ws, "onSceneLeave");
    function Xs(t, r) {
      try {
        return JSON.parse(window.localStorage[t]);
      } catch (e4) {
        return r ? (ar(t, r), r) : null;
      }
    }
    __name(Xs, "Xs");
    i(Xs, "getData");
    function ar(t, r) {
      window.localStorage[t] = JSON.stringify(r);
    }
    __name(ar, "ar");
    i(ar, "setData");
    function ur(t, ...r) {
      let s2 = t(Ze), u;
      typeof s2 == "function" ? u = s2(...r)(Ze) : u = s2;
      for (let a2 in u)
        Ze[a2] = u[a2], n2.global !== false && (window[a2] = u[a2]);
      return Ze;
    }
    __name(ur, "ur");
    i(ur, "plug");
    function zt() {
      return T(we() / 2, xe() / 2);
    }
    __name(zt, "zt");
    i(zt, "center");
    let Js;
    ((O) => (O[O.None = 0] = "None", O[O.Left = 1] = "Left", O[O.Top = 2] = "Top", O[O.LeftTop = 3] = "LeftTop", O[O.Right = 4] = "Right", O[O.Horizontal = 5] = "Horizontal", O[O.RightTop = 6] = "RightTop", O[O.HorizontalTop = 7] = "HorizontalTop", O[O.Bottom = 8] = "Bottom", O[O.LeftBottom = 9] = "LeftBottom", O[O.Vertical = 10] = "Vertical", O[O.LeftVertical = 11] = "LeftVertical", O[O.RightBottom = 12] = "RightBottom", O[O.HorizontalBottom = 13] = "HorizontalBottom", O[O.RightVertical = 14] = "RightVertical", O[O.All = 15] = "All"))(Js || (Js = {}));
    function cr(t = {}) {
      var _a27, _b2, _c2, _d;
      let r = T(0), s2 = (_a27 = t.isObstacle) != null ? _a27 : false, u = (_b2 = t.cost) != null ? _b2 : 0, a2 = (_c2 = t.edges) != null ? _c2 : [], h = i(() => {
        let b2 = { left: 1, top: 2, right: 4, bottom: 8 };
        return a2.map((p) => b2[p] || 0).reduce((p, d2) => p | d2, 0);
      }, "getEdgeMask"), f = h();
      return { id: "tile", tilePosOffset: (_d = t.offset) != null ? _d : T(0), set tilePos(b2) {
        let p = this.getLevel();
        r = b2.clone(), this.pos = T(this.tilePos.x * p.tileWidth(), this.tilePos.y * p.tileHeight()).add(this.tilePosOffset);
      }, get tilePos() {
        return r;
      }, set isObstacle(b2) {
        s2 !== b2 && (s2 = b2, this.getLevel().invalidateNavigationMap());
      }, get isObstacle() {
        return s2;
      }, set cost(b2) {
        u !== b2 && (u = b2, this.getLevel().invalidateNavigationMap());
      }, get cost() {
        return u;
      }, set edges(b2) {
        a2 = b2, f = h(), this.getLevel().invalidateNavigationMap();
      }, get edges() {
        return a2;
      }, get edgeMask() {
        return f;
      }, getLevel() {
        return this.parent;
      }, moveLeft() {
        this.tilePos = this.tilePos.add(T(-1, 0));
      }, moveRight() {
        this.tilePos = this.tilePos.add(T(1, 0));
      }, moveUp() {
        this.tilePos = this.tilePos.add(T(0, -1));
      }, moveDown() {
        this.tilePos = this.tilePos.add(T(0, 1));
      } };
    }
    __name(cr, "cr");
    i(cr, "tile");
    function Qs(t, r) {
      var _a27;
      if (!r.tileWidth || !r.tileHeight)
        throw new Error("Must provide tileWidth and tileHeight.");
      let s2 = gt([qt((_a27 = r.pos) != null ? _a27 : T(0))]), u = t.length, a2 = 0, h = null, f = null, b2 = null, p = null, d2 = i((U) => U.x + U.y * a2, "tile2Hash"), w = i((U) => T(Math.floor(U % a2), Math.floor(U / a2)), "hash2Tile"), A = i(() => {
        h = [];
        for (let U of s2.children)
          D(U);
      }, "createSpatialMap"), D = i((U) => {
        let G = d2(U.tilePos);
        h[G] ? h[G].push(U) : h[G] = [U];
      }, "insertIntoSpatialMap"), N = i((U) => {
        let G = d2(U.tilePos);
        if (h[G]) {
          let B = h[G].indexOf(U);
          B >= 0 && h[G].splice(B, 1);
        }
      }, "removeFromSpatialMap"), _ = i(() => {
        let U = false;
        for (let G of s2.children) {
          let B = s2.pos2Tile(G.pos);
          (G.tilePos.x != B.x || G.tilePos.y != B.y) && (U = true, N(G), G.tilePos.x = B.x, G.tilePos.y = B.y, D(G));
        }
        U && s2.trigger("spatial_map_changed");
      }, "updateSpatialMap"), M = i(() => {
        let U = s2.getSpatialMap(), G = s2.numRows() * s2.numColumns();
        f ? f.length = G : f = new Array(G), f.fill(1, 0, G);
        for (let B = 0; B < U.length; B++) {
          let F = U[B];
          if (F) {
            let Y = 0;
            for (let ee of F)
              if (ee.isObstacle) {
                Y = 1 / 0;
                break;
              } else
                Y += ee.cost;
            f[B] = Y || 1;
          }
        }
      }, "createCostMap"), O = i(() => {
        let U = s2.getSpatialMap(), G = s2.numRows() * s2.numColumns();
        b2 ? b2.length = G : b2 = new Array(G), b2.fill(15, 0, G);
        for (let B = 0; B < U.length; B++) {
          let F = U[B];
          if (F) {
            let Y = F.length, ee = 15;
            for (let ue = 0; ue < Y; ue++)
              ee |= F[ue].edgeMask;
            b2[B] = ee;
          }
        }
      }, "createEdgeMap"), ie2 = i(() => {
        let U = s2.numRows() * s2.numColumns(), G = i((F, Y) => {
          let ee = [];
          for (ee.push(F); ee.length > 0; ) {
            let ue = ee.pop();
            V(ue).forEach((me) => {
              p[me] < 0 && (p[me] = Y, ee.push(me));
            });
          }
        }, "traverse");
        p ? p.length = U : p = new Array(U), p.fill(-1, 0, U);
        let B = 0;
        for (let F = 0; F < f.length; F++) {
          if (p[F] >= 0) {
            B++;
            continue;
          }
          G(F, B), B++;
        }
      }, "createConnectivityMap"), Z = i((U, G) => f[G], "getCost"), H = i((U, G) => {
        let B = w(U), F = w(G);
        return B.dist(F);
      }, "getHeuristic"), V = i((U, G) => {
        let B = [], F = Math.floor(U % a2), Y = F > 0 && b2[U] & 1 && f[U - 1] !== 1 / 0, ee = U >= a2 && b2[U] & 2 && f[U - a2] !== 1 / 0, ue = F < a2 - 1 && b2[U] & 4 && f[U + 1] !== 1 / 0, me = U < a2 * u - a2 - 1 && b2[U] & 8 && f[U + a2] !== 1 / 0;
        return G ? (Y && (ee && B.push(U - a2 - 1), B.push(U - 1), me && B.push(U + a2 - 1)), ee && B.push(U - a2), ue && (ee && B.push(U - a2 + 1), B.push(U + 1), me && B.push(U + a2 + 1)), me && B.push(U + a2)) : (Y && B.push(U - 1), ee && B.push(U - a2), ue && B.push(U + 1), me && B.push(U + a2)), B;
      }, "getNeighbours"), fe = { id: "level", tileWidth() {
        return r.tileWidth;
      }, tileHeight() {
        return r.tileHeight;
      }, spawn(U, ...G) {
        let B = T(...G), F = (() => {
          if (typeof U == "string") {
            if (r.tiles[U]) {
              if (typeof r.tiles[U] != "function")
                throw new Error("Level symbol def must be a function returning a component list");
              return r.tiles[U](B);
            } else if (r.wildcardTile)
              return r.wildcardTile(U, B);
          } else {
            if (Array.isArray(U))
              return U;
            throw new Error("Expected a symbol or a component list");
          }
        })();
        if (!F)
          return null;
        let Y = false, ee = false;
        for (let me of F)
          me.id === "tile" && (ee = true), me.id === "pos" && (Y = true);
        Y || F.push(qt()), ee || F.push(cr());
        let ue = s2.add(F);
        return Y && (ue.tilePosOffset = ue.pos.clone()), ue.tilePos = B, h && (D(ue), this.trigger("spatial_map_changed"), this.trigger("navigation_map_invalid")), ue;
      }, numColumns() {
        return a2;
      }, numRows() {
        return u;
      }, levelWidth() {
        return a2 * this.tileWidth();
      }, levelHeight() {
        return u * this.tileHeight();
      }, tile2Pos(...U) {
        return T(...U).scale(this.tileWidth(), this.tileHeight());
      }, pos2Tile(...U) {
        let G = T(...U);
        return T(Math.floor(G.x / this.tileWidth()), Math.floor(G.y / this.tileHeight()));
      }, getSpatialMap() {
        return h || A(), h;
      }, onSpatialMapChanged(U) {
        return this.on("spatial_map_changed", U);
      }, onNavigationMapInvalid(U) {
        return this.on("navigation_map_invalid", U);
      }, getAt(U) {
        h || A();
        let G = d2(U);
        return h[G] || [];
      }, update() {
        h && _();
      }, invalidateNavigationMap() {
        f = null, b2 = null, p = null;
      }, onNavigationMapChanged(U) {
        return this.on("navigation_map_changed", U);
      }, getTilePath(U, G, B = {}) {
        var _a28;
        if (f || M(), b2 || O(), p || ie2(), U.x < 0 || U.x >= a2 || U.y < 0 || U.y >= u || G.x < 0 || G.x >= a2 || G.y < 0 || G.y >= u)
          return null;
        let F = d2(U), Y = d2(G);
        if (f[Y] === 1 / 0)
          return null;
        if (F === Y)
          return [];
        if (p[F] != -1 && p[F] !== p[Y])
          return null;
        let ee = new Yt((Fe, Mn) => Fe.cost < Mn.cost);
        ee.insert({ cost: 0, node: F });
        let ue = /* @__PURE__ */ new Map();
        ue.set(F, F);
        let me = /* @__PURE__ */ new Map();
        for (me.set(F, 0); ee.length !== 0; ) {
          let Fe = (_a28 = ee.remove()) == null ? void 0 : _a28.node;
          if (Fe === Y)
            break;
          let Mn = V(Fe, B.allowDiagonals);
          for (let et of Mn) {
            let Gn = (me.get(Fe) || 0) + Z(Fe, et) + H(et, Y);
            (!me.has(et) || Gn < me.get(et)) && (me.set(et, Gn), ee.insert({ cost: Gn, node: et }), ue.set(et, Fe));
          }
        }
        let Dn = [], wt = Y, vi = w(wt);
        for (Dn.push(vi); wt !== F; ) {
          wt = ue.get(wt);
          let Fe = w(wt);
          Dn.push(Fe);
        }
        return Dn.reverse();
      }, getPath(U, G, B = {}) {
        let F = this.tileWidth(), Y = this.tileHeight(), ee = this.getTilePath(this.pos2Tile(U), this.pos2Tile(G), B);
        return ee ? [U, ...ee.slice(1, -1).map((ue) => ue.scale(F, Y).add(F / 2, Y / 2)), G] : null;
      } };
      return s2.use(fe), s2.onNavigationMapInvalid(() => {
        s2.invalidateNavigationMap(), s2.trigger("navigation_map_changed");
      }), t.forEach((U, G) => {
        let B = U.split("");
        a2 = Math.max(B.length, a2), B.forEach((F, Y) => {
          s2.spawn(F, T(Y, G));
        });
      }), s2;
    }
    __name(Qs, "Qs");
    i(Qs, "addLevel");
    function Zs(t = {}) {
      var _a27, _b2;
      let r = null, s2 = null, u = null, a2 = null;
      return { id: "agent", require: ["pos", "tile"], agentSpeed: (_a27 = t.speed) != null ? _a27 : 100, allowDiagonals: (_b2 = t.allowDiagonals) != null ? _b2 : true, getDistanceToTarget() {
        return r ? this.pos.dist(r) : 0;
      }, getNextLocation() {
        return s2 && u ? s2[u] : null;
      }, getPath() {
        return s2 ? s2.slice() : null;
      }, getTarget() {
        return r;
      }, isNavigationFinished() {
        return s2 ? u === null : true;
      }, isTargetReachable() {
        return s2 !== null;
      }, isTargetReached() {
        return r ? this.pos.eq(r) : true;
      }, setTarget(h) {
        r = h, s2 = this.getLevel().getPath(this.pos, r, { allowDiagonals: this.allowDiagonals }), u = s2 ? 0 : null, s2 ? (a2 || (a2 = this.getLevel().onNavigationMapChanged(() => {
          s2 && u !== null && (s2 = this.getLevel().getPath(this.pos, r, { allowDiagonals: this.allowDiagonals }), u = s2 ? 0 : null, s2 ? this.trigger("navigation-next", this, s2[u]) : this.trigger("navigation-ended", this));
        }), this.onDestroy(() => a2.cancel())), this.trigger("navigation-started", this), this.trigger("navigation-next", this, s2[u])) : this.trigger("navigation-ended", this);
      }, update() {
        if (s2 && u !== null) {
          if (this.pos.sdist(s2[u]) < 2)
            if (u === s2.length - 1) {
              this.pos = r.clone(), u = null, this.trigger("navigation-ended", this), this.trigger("target-reached", this);
              return;
            } else
              u++, this.trigger("navigation-next", this, s2[u]);
          this.moveTo(s2[u], this.agentSpeed);
        }
      }, onNavigationStarted(h) {
        return this.on("navigation-started", h);
      }, onNavigationNext(h) {
        return this.on("navigation-next", h);
      }, onNavigationEnded(h) {
        return this.on("navigation-ended", h);
      }, onTargetReached(h) {
        return this.on("target-reached", h);
      }, inspect() {
        return JSON.stringify({ target: JSON.stringify(r), path: JSON.stringify(s2) });
      } };
    }
    __name(Zs, "Zs");
    i(Zs, "agent");
    function ei(t) {
      let r = y.canvas.captureStream(t), s2 = te.ctx.createMediaStreamDestination();
      te.masterNode.connect(s2);
      let u = new MediaRecorder(r), a2 = [];
      return u.ondataavailable = (h) => {
        h.data.size > 0 && a2.push(h.data);
      }, u.onerror = () => {
        te.masterNode.disconnect(s2), r.getTracks().forEach((h) => h.stop());
      }, u.start(), { resume() {
        u.resume();
      }, pause() {
        u.pause();
      }, stop() {
        return u.stop(), te.masterNode.disconnect(s2), r.getTracks().forEach((h) => h.stop()), new Promise((h) => {
          u.onstop = () => {
            h(new Blob(a2, { type: "video/mp4" }));
          };
        });
      }, download(h = "kaboom.mp4") {
        this.stop().then((f) => Nn(h, f));
      } };
    }
    __name(ei, "ei");
    i(ei, "record");
    function ti() {
      return document.activeElement === y.canvas;
    }
    __name(ti, "ti");
    i(ti, "isFocused");
    function ni(t) {
      t.destroy();
    }
    __name(ni, "ni");
    i(ni, "destroy");
    let gt = C.root.add.bind(C.root), ri = C.root.readd.bind(C.root), si = C.root.removeAll.bind(C.root), On = C.root.get.bind(C.root), hr = C.root.wait.bind(C.root), ii = C.root.loop.bind(C.root), Rn = C.root.tween.bind(C.root);
    function lr(t = 2, r = 1) {
      let s2 = 0;
      return { require: ["scale"], update() {
        let u = Math.sin(s2 * t) * r;
        u < 0 && this.destroy(), this.scale = T(u), s2 += Me();
      } };
    }
    __name(lr, "lr");
    i(lr, "boom");
    let oi = Ye(null, qr), ai = Ye(null, $r);
    function ui(t, r = {}) {
      var _a27, _b2;
      let s2 = gt([qt(t), or()]), u = (r.speed || 1) * 5, a2 = r.scale || 1;
      s2.add([Cn(ai), $t(0), Sn("center"), lr(u, a2), ...(_a27 = r.comps) != null ? _a27 : []]);
      let h = s2.add([Cn(oi), $t(0), Sn("center"), An(), ...(_b2 = r.comps) != null ? _b2 : []]);
      return h.wait(0.4 / u, () => h.use(lr(u, a2))), h.onDestroy(() => s2.destroy()), s2;
    }
    __name(ui, "ui");
    i(ui, "addKaboom");
    function dr() {
      C.root.update();
    }
    __name(dr, "dr");
    i(dr, "updateFrame");
    const _Pn = class {
      constructor(r, s2, u, a2 = false) {
        __publicField(this, "source");
        __publicField(this, "target");
        __publicField(this, "displacement");
        __publicField(this, "resolved", false);
        this.source = r, this.target = s2, this.displacement = u, this.resolved = a2;
      }
      reverse() {
        return new _Pn(this.target, this.source, this.displacement.scale(-1), this.resolved);
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
    let Pn = _Pn;
    __name(Pn, "Pn");
    (() => {
      i(_Pn, "Collision");
    })();
    function ci() {
      let t = {}, r = n2.hashGridSize || Hi, s2 = new Ue(), u = [];
      function a2(h) {
        if (u.push(s2.clone()), h.pos && s2.translate(h.pos), h.scale && s2.scale(h.scale), h.angle && s2.rotate(h.angle), h.transform = s2.clone(), h.c("area") && !h.paused) {
          let f = h, p = f.worldArea().bbox(), d2 = Math.floor(p.pos.x / r), w = Math.floor(p.pos.y / r), A = Math.ceil((p.pos.x + p.width) / r), D = Math.ceil((p.pos.y + p.height) / r), N = /* @__PURE__ */ new Set();
          for (let _ = d2; _ <= A; _++)
            for (let M = w; M <= D; M++)
              if (!t[_])
                t[_] = {}, t[_][M] = [f];
              else if (!t[_][M])
                t[_][M] = [f];
              else {
                let O = t[_][M];
                e:
                  for (let ie2 of O) {
                    if (ie2.paused || !ie2.exists() || N.has(ie2.id))
                      continue;
                    for (let H of f.collisionIgnore)
                      if (ie2.is(H))
                        continue e;
                    for (let H of ie2.collisionIgnore)
                      if (f.is(H))
                        continue e;
                    let Z = Or(f.worldArea(), ie2.worldArea());
                    if (Z) {
                      let H = new Pn(f, ie2, Z);
                      f.trigger("collideUpdate", ie2, H);
                      let V = H.reverse();
                      V.resolved = H.resolved, ie2.trigger("collideUpdate", f, V);
                    }
                    N.add(ie2.id);
                  }
                O.push(f);
              }
        }
        h.children.forEach(a2), s2 = u.pop();
      }
      __name(a2, "a");
      i(a2, "checkObj"), a2(C.root);
    }
    __name(ci, "ci");
    i(ci, "checkFrame");
    function hi() {
      var _a27;
      let t = C.cam, r = v.fromAngle(xt(0, 360)).scale(t.shake);
      t.shake = Ve(t.shake, 0, 5 * Me()), t.transform = new Ue().translate(zt()).scale(t.scale).rotate(t.angle).translate(((_a27 = t.pos) != null ? _a27 : zt()).scale(-1).add(r)), C.root.draw(), Pe();
    }
    __name(hi, "hi");
    i(hi, "drawFrame");
    function li() {
      let t = $();
      C.events.numListeners("loading") > 0 ? C.events.trigger("loading", t) : Ce(() => {
        let r = we() / 2, s2 = 24, u = T(we() / 2, xe() / 2).sub(T(r / 2, s2 / 2));
        ge({ pos: T(0), width: we(), height: xe(), color: J(0, 0, 0) }), ge({ pos: u, width: r, height: s2, fill: false, outline: { width: 4 } }), ge({ pos: u, width: r * t, height: s2 });
      });
    }
    __name(li, "li");
    i(li, "drawLoadScreen");
    function fr(t, r) {
      Ce(() => {
        let s2 = T(8);
        le(), ne(t);
        let u = Xe({ text: r, font: nn, size: 16, pos: s2, color: J(255, 255, 255), fixed: true }), a2 = u.width + s2.x * 2, h = u.height + s2.x * 2;
        t.x + a2 >= we() && ne(T(-a2, 0)), t.y + h >= xe() && ne(T(0, -h)), ge({ width: a2, height: h, color: J(0, 0, 0), radius: 4, opacity: 0.8, fixed: true }), Je(u), ae();
      });
    }
    __name(fr, "fr");
    i(fr, "drawInspectText");
    function di() {
      if (re.inspect) {
        let t = null;
        for (let r of C.root.get("*", { recursive: true }))
          if (r.c("area") && r.isHovering()) {
            t = r;
            break;
          }
        if (C.root.drawInspect(), t) {
          let r = [], s2 = t.inspect();
          for (let u in s2)
            s2[u] ? r.push(`${u}: ${s2[u]}`) : r.push(`${u}`);
          fr(ns(Nt()), r.join(`
`));
        }
        fr(T(8), `FPS: ${re.fps()}`);
      }
      re.paused && Ce(() => {
        le(), ne(we(), 0), ne(-8, 8);
        let t = 32;
        ge({ width: t, height: t, anchor: "topright", color: J(0, 0, 0), opacity: 0.8, radius: 4, fixed: true });
        for (let r = 1; r <= 2; r++)
          ge({ width: 4, height: t * 0.6, anchor: "center", pos: T(-t / 3 * r, t * 0.5), color: J(255, 255, 255), radius: 2, fixed: true });
        ae();
      }), re.timeScale !== 1 && Ce(() => {
        le(), ne(we(), xe()), ne(-8, -8);
        let t = 8, r = Xe({ text: re.timeScale.toFixed(1), font: nn, size: 16, color: J(255, 255, 255), pos: T(-t), anchor: "botright", fixed: true });
        ge({ width: r.width + t * 2 + t * 4, height: r.height + t * 2, anchor: "botright", color: J(0, 0, 0), opacity: 0.8, radius: 4, fixed: true });
        for (let s2 = 0; s2 < 2; s2++) {
          let u = re.timeScale < 1;
          R({ p1: T(-r.width - t * (u ? 2 : 3.5), -t), p2: T(-r.width - t * (u ? 2 : 3.5), -t - r.height), p3: T(-r.width - t * (u ? 3.5 : 2), -t - r.height / 2), pos: T(-s2 * t * 1 + (u ? -t * 0.5 : 0), 0), color: J(255, 255, 255), fixed: true });
        }
        Je(r), ae();
      }), re.curRecording && Ce(() => {
        le(), ne(0, xe()), ne(24, -24), L({ radius: 12, color: J(255, 0, 0), opacity: In(0, 1, y.time() * 4), fixed: true }), ae();
      }), re.showLog && C.logs.length > 0 && Ce(() => {
        var _a27;
        le(), ne(0, xe()), ne(8, -8);
        let t = 8, r = [];
        for (let u of C.logs) {
          let a2 = "", h = u.msg instanceof Error ? "error" : "info";
          a2 += `[time]${u.time.toFixed(2)}[/time]`, a2 += " ", a2 += `[${h}]${((_a27 = u.msg) == null ? void 0 : _a27.toString) ? u.msg.toString() : u.msg}[/${h}]`, r.push(a2);
        }
        C.logs = C.logs.filter((u) => y.time() - u.time < (n2.logTime || $i));
        let s2 = Xe({ text: r.join(`
`), font: nn, pos: T(t, -t), anchor: "botleft", size: 16, width: we() * 0.6, lineSpacing: t / 2, fixed: true, styles: { time: { color: J(127, 127, 127) }, info: { color: J(255, 255, 255) }, error: { color: J(255, 0, 127) } } });
        ge({ width: s2.width + t * 2, height: s2.height + t * 2, anchor: "botleft", color: J(0, 0, 0), radius: 4, opacity: 0.8, fixed: true }), Je(s2), ae();
      });
    }
    __name(di, "di");
    i(di, "drawDebug");
    function fi(t) {
      C.events.on("loading", t);
    }
    __name(fi, "fi");
    i(fi, "onLoading");
    function mi(t) {
      y.onResize(t);
    }
    __name(mi, "mi");
    i(mi, "onResize");
    function pi(t) {
      C.events.on("error", t);
    }
    __name(pi, "pi");
    i(pi, "onError");
    function gi(t) {
      console.error(t), te.ctx.suspend(), y.run(() => {
        dt2(), Ce(() => {
          let u = we(), a2 = xe(), h = { size: 36, width: u - 32 * 2, letterSpacing: 4, lineSpacing: 4, font: nn, fixed: true };
          ge({ width: u, height: a2, color: J(0, 0, 255), fixed: true });
          let f = Xe(__spreadProps(__spreadValues({}, h), { text: "Error", pos: T(32), color: J(255, 128, 0), fixed: true }));
          Je(f), tr(__spreadProps(__spreadValues({}, h), { text: t.message, pos: T(32, 32 + f.height + 16), fixed: true })), ae(), C.events.trigger("error", t);
        }), ft();
      });
    }
    __name(gi, "gi");
    i(gi, "handleErr");
    function wi(t) {
      X.push(t);
    }
    __name(wi, "wi");
    i(wi, "onCleanup");
    function bi() {
      C.events.onOnce("frameEnd", () => {
        y.quit(), S.clear(S.COLOR_BUFFER_BIT | S.DEPTH_BUFFER_BIT | S.STENCIL_BUFFER_BIT);
        let t = S.getParameter(S.MAX_TEXTURE_IMAGE_UNITS);
        for (let r = 0; r < t; r++)
          S.activeTexture(S.TEXTURE0 + r), S.bindTexture(S.TEXTURE_2D, null), S.bindTexture(S.TEXTURE_CUBE_MAP, null);
        S.bindBuffer(S.ARRAY_BUFFER, null), S.bindBuffer(S.ELEMENT_ARRAY_BUFFER, null), S.bindRenderbuffer(S.RENDERBUFFER, null), S.bindFramebuffer(S.FRAMEBUFFER, null), q.destroy(), X.forEach((r) => r());
      });
    }
    __name(bi, "bi");
    i(bi, "quit");
    let Kt = true;
    y.run(() => {
      try {
        k.loaded || $() === 1 && !Kt && (k.loaded = true, C.events.trigger("load")), !k.loaded && n2.loadingScreen !== false || Kt ? (dt2(), li(), ft()) : (re.paused || dr(), ci(), dt2(), hi(), n2.debug !== false && di(), ft()), Kt && (Kt = false), C.events.trigger("frameEnd");
      } catch (t) {
        gi(t);
      }
    });
    function mr() {
      let t = P3, r = S.drawingBufferWidth / t, s2 = S.drawingBufferHeight / t;
      if (n2.letterbox) {
        if (!n2.width || !n2.height)
          throw new Error("Letterboxing requires width and height defined.");
        let u = r / s2, a2 = n2.width / n2.height;
        if (u > a2) {
          let h = s2 * a2, f = (r - h) / 2;
          E.viewport = { x: f, y: 0, width: h, height: s2 };
        } else {
          let h = r / a2, f = (s2 - h) / 2;
          E.viewport = { x: 0, y: f, width: r, height: h };
        }
        return;
      }
      if (n2.stretch && (!n2.width || !n2.height))
        throw new Error("Stretching requires width and height defined.");
      E.viewport = { x: 0, y: 0, width: r, height: s2 };
    }
    __name(mr, "mr");
    i(mr, "updateViewport");
    function pr() {
      y.onHide(() => {
        n2.backgroundAudio || te.ctx.suspend();
      }), y.onShow(() => {
        !n2.backgroundAudio && !re.paused && te.ctx.resume();
      }), y.onResize(() => {
        if (y.isFullscreen())
          return;
        let t = n2.width && n2.height;
        t && !n2.stretch && !n2.letterbox || (o.width = o.offsetWidth * P3, o.height = o.offsetHeight * P3, mr(), t || (E.frameBuffer.free(), E.frameBuffer = new rt(q, S.drawingBufferWidth, S.drawingBufferHeight), E.width = S.drawingBufferWidth / P3, E.height = S.drawingBufferHeight / P3));
      }), n2.debug !== false && (y.onKeyPress("f1", () => re.inspect = !re.inspect), y.onKeyPress("f2", () => re.clearLog()), y.onKeyPress("f8", () => re.paused = !re.paused), y.onKeyPress("f7", () => {
        re.timeScale = mt(Le(re.timeScale - 0.2, 0, 2), 1);
      }), y.onKeyPress("f9", () => {
        re.timeScale = mt(Le(re.timeScale + 0.2, 0, 2), 1);
      }), y.onKeyPress("f10", () => re.stepFrame())), n2.burp && y.onKeyPress("b", () => Lt());
    }
    __name(pr, "pr");
    i(pr, "initEvents"), mr(), pr();
    let Ze = { VERSION: ki, loadRoot: Te, loadProgress: $, loadSprite: Ye, loadSpriteAtlas: Ot, loadSound: ln, loadBitmapFont: on, loadFont: st, loadShader: cn, loadShaderURL: hn, loadAseprite: un, loadPedit: an, loadBean: dn, loadJSON: ye, load: Ae, getSprite: Pt, getSound: Dt, getFont: Mt, getBitmapFont: Gt, getShader: Bt, getAsset: fn, Asset: ve, SpriteData: K, SoundData: Q2, width: we, height: xe, center: zt, dt: Me, time: y.time, screenshot: y.screenshot, record: ei, isFocused: ti, setCursor: y.setCursor, getCursor: y.getCursor, setCursorLocked: y.setCursorLocked, isCursorLocked: y.isCursorLocked, setFullscreen: y.setFullscreen, isFullscreen: y.isFullscreen, isTouchscreen: y.isTouchscreen, onLoad: Tn, onLoading: fi, onResize: mi, onGamepadConnect: y.onGamepadConnect, onGamepadDisconnect: y.onGamepadDisconnect, onError: pi, onCleanup: wi, camPos: rs, camScale: ss, camRot: is, shake: os, toScreen: rr, toWorld: sr, setGravity: gs, getGravity: ws, setBackground: bs, getBackground: vs, getGamepads: y.getGamepads, add: gt, make: Un, destroy: ni, destroyAll: si, get: On, readd: ri, pos: qt, scale: $t, rotate: ys, color: xs, opacity: Us, anchor: Sn, area: Os, sprite: Cn, text: Rs, polygon: Ps, rect: Ds, circle: Gs, uvquad: Ms, outline: Bs, body: Ls, doubleJump: Vs, shader: _s, timer: An, fixed: ks, stay: or, health: Ns, lifespan: js, z: Es, move: Cs, offscreen: Ts, follow: Ss, state: Hs, fadeIn: qs, mask: $s, drawon: zs, tile: cr, agent: Zs, on: ze, onUpdate: as, onDraw: us, onAdd: En, onDestroy: ir, onClick: ds, onCollide: cs, onCollideUpdate: hs, onCollideEnd: ls, onHover: fs, onHoverUpdate: ms, onHoverEnd: ps, onKeyDown: y.onKeyDown, onKeyPress: y.onKeyPress, onKeyPressRepeat: y.onKeyPressRepeat, onKeyRelease: y.onKeyRelease, onMouseDown: y.onMouseDown, onMousePress: y.onMousePress, onMouseRelease: y.onMouseRelease, onMouseMove: y.onMouseMove, onCharInput: y.onCharInput, onTouchStart: y.onTouchStart, onTouchMove: y.onTouchMove, onTouchEnd: y.onTouchEnd, onScroll: y.onScroll, onHide: y.onHide, onShow: y.onShow, onGamepadButtonDown: y.onGamepadButtonDown, onGamepadButtonPress: y.onGamepadButtonPress, onGamepadButtonRelease: y.onGamepadButtonRelease, onGamepadStick: y.onGamepadStick, mousePos: Nt, mouseDeltaPos: y.mouseDeltaPos, isKeyDown: y.isKeyDown, isKeyPressed: y.isKeyPressed, isKeyPressedRepeat: y.isKeyPressedRepeat, isKeyReleased: y.isKeyReleased, isMouseDown: y.isMouseDown, isMousePressed: y.isMousePressed, isMouseReleased: y.isMouseReleased, isMouseMoved: y.isMouseMoved, isGamepadButtonPressed: y.isGamepadButtonPressed, isGamepadButtonDown: y.isGamepadButtonDown, isGamepadButtonReleased: y.isGamepadButtonReleased, getGamepadStick: y.getGamepadStick, charInputted: y.charInputted, loop: ii, wait: hr, play: It, volume: gn, burp: Lt, audioCtx: te.ctx, Line: Ie, Rect: de, Circle: yt, Polygon: Ke, Vec2: v, Color: W, Mat4: Ue, Quad: oe, RNG: bt, rand: xt, randi: Ln, randSeed: yr, vec2: T, rgb: J, hsl2rgb: vr, quad: ce, choose: Ur, chance: xr, lerp: Ve, tween: Rn, easings: Ct, map: _e, mapc: br, wave: In, deg2rad: Ge, rad2deg: ot, clamp: Le, testLineLine: it, testRectRect: Er, testRectLine: Sr, testRectPoint: vt, testCirclePolygon: Tr, testLinePoint: Cr, testLineCircle: Vn, drawSprite: yn, drawText: tr, formatText: Xe, drawRect: ge, drawLine: l, drawLines: x2, drawTriangle: R, drawCircle: L, drawEllipse: he, drawUVQuad: Be, drawPolygon: z, drawFormattedText: Je, drawMasked: $e, drawSubtracted: kt, pushTransform: le, popTransform: ae, pushTranslate: ne, pushScale: He, pushRotate: se, pushMatrix: _t, usePostEffect: Vt, makeCanvas: wn, debug: re, scene: Ks, go: Ys, onSceneLeave: Ws, addLevel: Qs, getData: Xs, setData: ar, download: Xt, downloadJSON: Dr, downloadText: kn, downloadBlob: Nn, plug: ur, ASCII_CHARS: zr, canvas: y.canvas, addKaboom: ui, LEFT: v.LEFT, RIGHT: v.RIGHT, UP: v.UP, DOWN: v.DOWN, RED: W.RED, GREEN: W.GREEN, BLUE: W.BLUE, YELLOW: W.YELLOW, MAGENTA: W.MAGENTA, CYAN: W.CYAN, WHITE: W.WHITE, BLACK: W.BLACK, quit: bi, Event: be, EventHandler: Ne, EventController: ke };
    if (n2.plugins && n2.plugins.forEach(ur), n2.global !== false)
      for (let t in Ze)
        window[t] = Ze[t];
    return n2.focus !== false && y.canvas.focus(), Ze;
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
      for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
        s2 = arguments[i2];
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
      for (var i2 = 0; i2 < symbols.length; i2++) {
        var symbol = symbols[i2];
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
  function nextPowerOfTwo(x2) {
    x2 |= x2 >> 1;
    x2 |= x2 >> 2;
    x2 |= x2 >> 4;
    x2 |= x2 >> 8;
    x2 |= x2 >> 16;
    return x2 + 1;
  }
  __name(nextPowerOfTwo, "nextPowerOfTwo");
  function isPowerOfTwo(x2) {
    return x2 > 0 && (x2 & x2 - 1) === 0;
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
    function Vec22(x2, y) {
      if (!(this instanceof Vec22)) {
        return new Vec22(x2, y);
      }
      if (typeof x2 === "undefined") {
        this.x = 0;
        this.y = 0;
      } else if (typeof x2 === "object") {
        this.x = x2.x;
        this.y = x2.y;
      } else {
        this.x = x2;
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
    Vec22.neo = function(x2, y) {
      var obj = Object.create(Vec22.prototype);
      obj.x = x2;
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
    Vec22.assert = function(o) {
    };
    Vec22.prototype.clone = function() {
      return Vec22.clone(this);
    };
    Vec22.prototype.setZero = function() {
      this.x = 0;
      this.y = 0;
      return this;
    };
    Vec22.prototype.set = function(x2, y) {
      if (typeof x2 === "object") {
        this.x = x2.x;
        this.y = x2.y;
      } else {
        this.x = x2;
        this.y = y;
      }
      return this;
    };
    Vec22.prototype.setNum = function(x2, y) {
      this.x = x2;
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
      var x2 = a2 * v3.x + b2 * w.x;
      var y = a2 * v3.y + b2 * w.y;
      this.x = x2;
      this.y = y;
      return this;
    };
    Vec22.prototype.setMul = function(a2, v3) {
      var x2 = a2 * v3.x;
      var y = a2 * v3.y;
      this.x = x2;
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
      var x2 = a2 * v3.x + b2 * w.x;
      var y = a2 * v3.y + b2 * w.y;
      this.x += x2;
      this.y += y;
      return this;
    };
    Vec22.prototype.addMul = function(a2, v3) {
      var x2 = a2 * v3.x;
      var y = a2 * v3.y;
      this.x += x2;
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
      var x2 = a2 * v3.x + b2 * w.x;
      var y = a2 * v3.y + b2 * w.y;
      this.x -= x2;
      this.y -= y;
      return this;
    };
    Vec22.prototype.subMul = function(a2, v3) {
      var x2 = a2 * v3.x;
      var y = a2 * v3.y;
      this.x -= x2;
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
    Vec22.scaleFn = function(x2, y) {
      return function(v3) {
        return Vec22.neo(v3.x * x2, v3.y * y);
      };
    };
    Vec22.translateFn = function(x2, y) {
      return function(v3) {
        return Vec22.neo(v3.x + x2, v3.y + y);
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
    AABB2.assert = function(o) {
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
        for (var i2 = 0; i2 < count; ++i2) {
          var aabbi = nodes[i2].aabb;
          for (var j = i2 + 1; j < count; ++j) {
            var aabbj = nodes[j].aabb;
            var cost = AABB.combinedPerimeter(aabbi, aabbj);
            if (cost < minCost) {
              iMin = i2;
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
        var i2 = this.parents.length - 1;
        var node = this.parents[i2];
        if (this.states[i2] === 0) {
          this.states[i2] = 1;
          return node;
        }
        if (this.states[i2] === 1) {
          this.states[i2] = 2;
          if (node.child1) {
            this.parents.push(node.child1);
            this.states.push(1);
            return node.child1;
          }
        }
        if (this.states[i2] === 2) {
          this.states[i2] = 3;
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
      for (var i2 = 0; i2 < this.m_moveBuffer.length; ++i2) {
        if (this.m_moveBuffer[i2] === proxyId) {
          this.m_moveBuffer[i2] = null;
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
  function vec22(x2, y) {
    return { x: x2, y };
  }
  __name(vec22, "vec2");
  function rotation(angle) {
    return { s: math_sin$2(angle), c: math_cos$2(angle) };
  }
  __name(rotation, "rotation");
  function setVec2(out, x2, y) {
    out.x = x2;
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
  function plusVec2(out, w) {
    out.x += w.x;
    out.y += w.y;
    return out;
  }
  __name(plusVec2, "plusVec2");
  function addVec2(out, v3, w) {
    out.x = v3.x + w.x;
    out.y = v3.x + w.y;
    return out;
  }
  __name(addVec2, "addVec2");
  function minusVec2(out, w) {
    out.x -= w.x;
    out.y -= w.y;
    return out;
  }
  __name(minusVec2, "minusVec2");
  function subVec2(out, v3, w) {
    out.x = v3.x - w.x;
    out.y = v3.y - w.y;
    return out;
  }
  __name(subVec2, "subVec2");
  function mulVec2(out, m) {
    out.x *= m;
    out.y *= m;
    return out;
  }
  __name(mulVec2, "mulVec2");
  function scaleVec2(out, m, w) {
    out.x = m * w.x;
    out.y = m * w.y;
    return out;
  }
  __name(scaleVec2, "scaleVec2");
  function plusScaleVec2(out, m, w) {
    out.x += m * w.x;
    out.y += m * w.y;
    return out;
  }
  __name(plusScaleVec2, "plusScaleVec2");
  function minusScaleVec2(out, m, w) {
    out.x -= m * w.x;
    out.y -= m * w.y;
    return out;
  }
  __name(minusScaleVec2, "minusScaleVec2");
  function combine2Vec2(out, am, a2, bm, b2) {
    out.x = am * a2.x + bm * b2.x;
    out.y = am * a2.y + bm * b2.y;
    return out;
  }
  __name(combine2Vec2, "combine2Vec2");
  function combine3Vec2(out, am, a2, bm, b2, cm, c2) {
    out.x = am * a2.x + bm * b2.x + cm * c2.x;
    out.y = am * a2.y + bm * b2.y + cm * c2.y;
    return out;
  }
  __name(combine3Vec2, "combine3Vec2");
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
    var x2 = w * v3.y;
    var y = -w * v3.x;
    out.x = x2;
    out.y = y;
    return out;
  }
  __name(crossVec2Num, "crossVec2Num");
  function crossNumVec2(out, w, v3) {
    var x2 = -w * v3.y;
    var y = w * v3.x;
    out.x = x2;
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
  function derotVec2(out, q, v3) {
    var x2 = q.c * v3.x + q.s * v3.y;
    var y = -q.s * v3.x + q.c * v3.y;
    out.x = x2;
    out.y = y;
    return out;
  }
  __name(derotVec2, "derotVec2");
  function rerotVec2(out, before, after, v3) {
    var x0 = before.c * v3.x + before.s * v3.y;
    var y0 = -before.s * v3.x + before.c * v3.y;
    var x2 = after.c * x0 - after.s * y0;
    var y = after.s * x0 + after.c * y0;
    out.x = x2;
    out.y = y;
    return out;
  }
  __name(rerotVec2, "rerotVec2");
  function transform(x2, y, a2) {
    return { p: vec22(x2, y), q: rotation(a2) };
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
    var x2 = xf2.q.c * v3.x - xf2.q.s * v3.y + xf2.p.x;
    var y = xf2.q.s * v3.x + xf2.q.c * v3.y + xf2.p.y;
    out.x = x2;
    out.y = y;
    return out;
  }
  __name(transformVec2, "transformVec2");
  function detransformVec2(out, xf2, v3) {
    var px = v3.x - xf2.p.x;
    var py = v3.y - xf2.p.y;
    var x2 = xf2.q.c * px + xf2.q.s * py;
    var y = -xf2.q.s * px + xf2.q.c * py;
    out.x = x2;
    out.y = y;
    return out;
  }
  __name(detransformVec2, "detransformVec2");
  function retransformVec2(out, from, to, v3) {
    var x0 = from.q.c * v3.x - from.q.s * v3.y + from.p.x;
    var y0 = from.q.s * v3.x + from.q.c * v3.y + from.p.y;
    var px = x0 - to.p.x;
    var py = y0 - to.p.y;
    var x2 = to.q.c * px + to.q.s * py;
    var y = -to.q.s * px + to.q.c * py;
    out.x = x2;
    out.y = y;
    return out;
  }
  __name(retransformVec2, "retransformVec2");
  function detransformTransform(out, a2, b2) {
    var c2 = a2.q.c * b2.q.c + a2.q.s * b2.q.s;
    var s2 = a2.q.c * b2.q.s - a2.q.s * b2.q.c;
    var x2 = a2.q.c * (b2.p.x - a2.p.x) + a2.q.s * (b2.p.y - a2.p.y);
    var y = -a2.q.s * (b2.p.x - a2.p.x) + a2.q.c * (b2.p.y - a2.p.y);
    out.q.c = c2;
    out.q.s = s2;
    out.p.x = x2;
    out.p.y = y;
    return out;
  }
  __name(detransformTransform, "detransformTransform");
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
    Rot2.assert = function(o) {
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
        var qr2 = Rot2.identity();
        qr2.s = rot.s * m.c + rot.c * m.s;
        qr2.c = rot.c * m.c - rot.s * m.s;
        return qr2;
      } else if ("x" in m && "y" in m) {
        return Vec2.neo(rot.c * m.x - rot.s * m.y, rot.s * m.x + rot.c * m.y);
      }
    };
    Rot2.mulRot = function(rot, m) {
      var qr2 = Rot2.identity();
      qr2.s = rot.s * m.c + rot.c * m.s;
      qr2.c = rot.c * m.c - rot.s * m.s;
      return qr2;
    };
    Rot2.mulVec2 = function(rot, m) {
      return Vec2.neo(rot.c * m.x - rot.s * m.y, rot.s * m.x + rot.c * m.y);
    };
    Rot2.mulSub = function(rot, v3, w) {
      var x2 = rot.c * (v3.x - w.x) - rot.s * (v3.y - w.y);
      var y = rot.s * (v3.x - w.x) + rot.c * (v3.y - w.y);
      return Vec2.neo(x2, y);
    };
    Rot2.mulT = function(rot, m) {
      if ("c" in m && "s" in m) {
        var qr2 = Rot2.identity();
        qr2.s = rot.c * m.s - rot.s * m.c;
        qr2.c = rot.c * m.c + rot.s * m.s;
        return qr2;
      } else if ("x" in m && "y" in m) {
        return Vec2.neo(rot.c * m.x + rot.s * m.y, -rot.s * m.x + rot.c * m.y);
      }
    };
    Rot2.mulTRot = function(rot, m) {
      var qr2 = Rot2.identity();
      qr2.s = rot.c * m.s - rot.s * m.c;
      qr2.c = rot.c * m.c + rot.s * m.s;
      return qr2;
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
      combine2Vec2(xf2.p, 1 - beta, this.c0, beta, this.c);
      minusVec2(xf2.p, rotVec2(temp$7, xf2.q, this.localCenter));
    };
    Sweep2.prototype.advance = function(alpha) {
      var beta = (alpha - this.alpha0) / (1 - this.alpha0);
      combine2Vec2(this.c0, beta, this.c, 1 - beta, this.c0);
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
    Transform2.assert = function(o) {
    };
    Transform2.mul = function(a2, b2) {
      if (Array.isArray(b2)) {
        var arr = [];
        for (var i2 = 0; i2 < b2.length; i2++) {
          arr[i2] = Transform2.mul(a2, b2[i2]);
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
      for (var i2 = 0; i2 < b2.length; i2++) {
        arr[i2] = Transform2.mul(a2, b2[i2]);
      }
      return arr;
    };
    Transform2.mulFn = function(a2) {
      return function(b2) {
        return Transform2.mul(a2, b2);
      };
    };
    Transform2.mulVec2 = function(a2, b2) {
      var x2 = a2.q.c * b2.x - a2.q.s * b2.y + a2.p.x;
      var y = a2.q.s * b2.x + a2.q.c * b2.y + a2.p.y;
      return Vec2.neo(x2, y);
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
      var x2 = a2.q.c * px + a2.q.s * py;
      var y = -a2.q.s * px + a2.q.c * py;
      return Vec2.neo(x2, y);
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
      this.style = {};
      this.appData = {};
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
      this.style = {};
      this.appData = {};
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
      for (var i2 = 0; i2 < childCount; ++i2) {
        this.m_proxies[i2] = new FixtureProxy(this, i2);
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
      for (var i2 = 0; i2 < childCount; ++i2) {
        this.m_proxies[i2] = new FixtureProxy(this, i2);
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
      for (var i2 = 0; i2 < this.m_proxyCount; ++i2) {
        var proxy = this.m_proxies[i2];
        this.m_shape.computeAABB(proxy.aabb, xf2, i2);
        proxy.proxyId = broadPhase.createProxy(proxy.aabb, proxy);
      }
    };
    Fixture2.prototype.destroyProxies = function(broadPhase) {
      for (var i2 = 0; i2 < this.m_proxyCount; ++i2) {
        var proxy = this.m_proxies[i2];
        broadPhase.destroyProxy(proxy.proxyId);
        proxy.proxyId = null;
      }
      this.m_proxyCount = 0;
    };
    Fixture2.prototype.synchronize = function(broadPhase, xf1, xf2) {
      for (var i2 = 0; i2 < this.m_proxyCount; ++i2) {
        var proxy = this.m_proxies[i2];
        this.m_shape.computeAABB(synchronize_aabb1, xf1, proxy.childIndex);
        this.m_shape.computeAABB(synchronize_aabb2, xf2, proxy.childIndex);
        proxy.aabb.combine(synchronize_aabb1, synchronize_aabb2);
        subVec2(displacement, xf2.p, xf1.p);
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
      for (var i2 = 0; i2 < this.m_proxyCount; ++i2) {
        broadPhase.touchProxy(this.m_proxies[i2].proxyId);
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
      this.style = {};
      this.appData = {};
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
        for (var i2 = data.fixtures.length - 1; i2 >= 0; i2--) {
          var fixture = restore(Fixture, data.fixtures[i2], body);
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
        for (var i2 = 0; i2 < f.m_proxyCount; ++i2) {
          broadPhase.touchProxy(f.m_proxies[i2].proxyId);
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
        plusScaleVec2(localCenter, massData.mass, massData.center);
        this.m_I += massData.I;
      }
      if (this.m_mass > 0) {
        this.m_invMass = 1 / this.m_mass;
        scaleVec2(localCenter, this.m_invMass, localCenter);
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
      subVec2(shift, this.m_sweep.c, oldCenter);
      crossNumVec2(temp$6, this.m_angularVelocity, shift);
      plusVec2(this.m_linearVelocity, temp$6);
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
      subVec2(shift, this.m_sweep.c, oldCenter);
      crossNumVec2(temp$6, this.m_angularVelocity, shift);
      plusVec2(this.m_linearVelocity, temp$6);
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
      this.style = {};
      this.appData = {};
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
    Joint2.prototype._resetAnchors = function(def) {
      return this._reset(def);
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
      for (var i2 = 0; i2 < saveCount; ++i2) {
        saveA[i2] = vertices[i2].indexA;
        saveB[i2] = vertices[i2].indexB;
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
      vertex.indexA = proxyA.getSupport(derotVec2(temp$5, xfA2.q, scaleVec2(temp$5, -1, d2)));
      transformVec2(vertex.wA, xfA2, proxyA.getVertex(vertex.indexA));
      vertex.indexB = proxyB.getSupport(derotVec2(temp$5, xfB2.q, d2));
      transformVec2(vertex.wB, xfB2, proxyB.getVertex(vertex.indexB));
      subVec2(vertex.w, vertex.wB, vertex.wA);
      ++iter;
      ++stats.gjkIters;
      var duplicate = false;
      for (var i2 = 0; i2 < saveCount; ++i2) {
        if (vertex.indexA === saveA[i2] && vertex.indexB === saveB[i2]) {
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
        subVec2(normal$4, output2.pointB, output2.pointA);
        normalizeVec2(normal$4);
        plusScaleVec2(output2.pointA, rA2, normal$4);
        minusScaleVec2(output2.pointB, rB2, normal$4);
      } else {
        var p = subVec2(temp$5, output2.pointA, output2.pointB);
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
      for (var i2 = 0; i2 < this.m_count; ++i2) {
        var value = dotVec2(this.m_vertices[i2], d2);
        if (value > bestValue) {
          bestIndex = i2;
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
      for (var i2 = 0; i2 < this.m_count; ++i2) {
        var v3 = this.m_v[i2];
        v3.indexA = cache2.indexA[i2];
        v3.indexB = cache2.indexB[i2];
        var wALocal = proxyA.getVertex(v3.indexA);
        var wBLocal = proxyB.getVertex(v3.indexB);
        transformVec2(v3.wA, transformA, wALocal);
        transformVec2(v3.wB, transformB, wBLocal);
        subVec2(v3.w, v3.wB, v3.wA);
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
        subVec2(v3.w, v3.wB, v3.wA);
        v3.a = 1;
        this.m_count = 1;
      }
    };
    Simplex2.prototype.writeCache = function(cache2) {
      cache2.metric = this.getMetric();
      cache2.count = this.m_count;
      for (var i2 = 0; i2 < this.m_count; ++i2) {
        cache2.indexA[i2] = this.m_v[i2].indexA;
        cache2.indexB[i2] = this.m_v[i2].indexB;
      }
    };
    Simplex2.prototype.getSearchDirection = function() {
      var v13 = this.m_v1;
      var v23 = this.m_v2;
      this.m_v3;
      switch (this.m_count) {
        case 1:
          return setVec2(searchDirection_reuse, -v13.w.x, -v13.w.y);
        case 2: {
          subVec2(e12, v23.w, v13.w);
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
      var v23 = this.m_v2;
      this.m_v3;
      switch (this.m_count) {
        case 0:
          return zeroVec2(closestPoint_reuse);
        case 1:
          return copyVec2(closestPoint_reuse, v13.w);
        case 2:
          return combine2Vec2(closestPoint_reuse, v13.a, v13.w, v23.a, v23.w);
        case 3:
          return zeroVec2(closestPoint_reuse);
        default:
          return zeroVec2(closestPoint_reuse);
      }
    };
    Simplex2.prototype.getWitnessPoints = function(pA2, pB2) {
      var v13 = this.m_v1;
      var v23 = this.m_v2;
      var v3 = this.m_v3;
      switch (this.m_count) {
        case 0:
          break;
        case 1:
          copyVec2(pA2, v13.wA);
          copyVec2(pB2, v13.wB);
          break;
        case 2:
          combine2Vec2(pA2, v13.a, v13.wA, v23.a, v23.wA);
          combine2Vec2(pB2, v13.a, v13.wB, v23.a, v23.wB);
          break;
        case 3:
          combine3Vec2(pA2, v13.a, v13.wA, v23.a, v23.wA, v3.a, v3.wA);
          copyVec2(pB2, pA2);
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
          return crossVec2Vec2(subVec2(temp1, this.m_v2.w, this.m_v1.w), subVec2(temp2, this.m_v3.w, this.m_v1.w));
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
      subVec2(e12, w2, w1);
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
      subVec2(e12, w2, w1);
      var w1e12 = dotVec2(w1, e12);
      var w2e12 = dotVec2(w2, e12);
      var d12_1 = w2e12;
      var d12_2 = -w1e12;
      subVec2(e13, w3, w1);
      var w1e13 = dotVec2(w1, e13);
      var w3e13 = dotVec2(w3, e13);
      var d13_1 = w3e13;
      var d13_2 = -w1e13;
      subVec2(e23, w3, w2);
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
        subVec2(this.m_axis, pointB$2, pointA$2);
        var s2 = normalizeVec2Length(this.m_axis);
        return s2;
      } else if (cache2.indexA[0] === cache2.indexA[1]) {
        this.m_type = SeparationFunctionType.e_faceB;
        var localPointB1 = proxyB.getVertex(cache2.indexB[0]);
        var localPointB2 = proxyB.getVertex(cache2.indexB[1]);
        crossVec2Num(this.m_axis, subVec2(temp$4, localPointB2, localPointB1), 1);
        normalizeVec2(this.m_axis);
        rotVec2(normal$3, xfB$1.q, this.m_axis);
        combine2Vec2(this.m_localPoint, 0.5, localPointB1, 0.5, localPointB2);
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
        crossVec2Num(this.m_axis, subVec2(temp$4, localPointA2, localPointA1), 1);
        normalizeVec2(this.m_axis);
        rotVec2(normal$3, xfA$1.q, this.m_axis);
        combine2Vec2(this.m_localPoint, 0.5, localPointA1, 0.5, localPointA2);
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
            derotVec2(axisA, xfA$1.q, this.m_axis);
            derotVec2(axisB, xfB$1.q, scaleVec2(temp$4, -1, this.m_axis));
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
            derotVec2(axisB, xfB$1.q, scaleVec2(temp$4, -1, normal$3));
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
            derotVec2(axisA, xfA$1.q, scaleVec2(temp$4, -1, normal$3));
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
  var v2 = vec22(0, 0);
  var translation = vec22(0, 0);
  var input = new TOIInput();
  var output = new TOIOutput();
  var backup = new Sweep();
  var backup1 = new Sweep();
  var backup2 = new Sweep();
  var ContactImpulse = function() {
    function ContactImpulse3(contact) {
      this.contact = contact;
      this.normals = [];
      this.tangents = [];
    }
    __name(ContactImpulse3, "ContactImpulse");
    ContactImpulse3.prototype.recycle = function() {
      this.normals.length = 0;
      this.tangents.length = 0;
    };
    Object.defineProperty(ContactImpulse3.prototype, "normalImpulses", {
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
    Object.defineProperty(ContactImpulse3.prototype, "tangentImpulses", {
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
    return ContactImpulse3;
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
          for (var je2 = b2.m_jointList; je2; je2 = je2.next) {
            if (je2.joint.m_islandFlag == true) {
              continue;
            }
            var other = je2.other;
            if (other.isActive() == false) {
              continue;
            }
            this.addJoint(je2.joint);
            je2.joint.m_islandFlag = true;
            if (other.m_islandFlag) {
              continue;
            }
            stack.push(other);
            other.m_islandFlag = true;
          }
        }
        this.solveIsland(step);
        for (var i2 = 0; i2 < this.m_bodies.length; ++i2) {
          var b2 = this.m_bodies[i2];
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
      for (var i2 = 0; i2 < this.m_bodies.length; ++i2) {
        var body = this.m_bodies[i2];
        copyVec2(c, body.m_sweep.c);
        var a2 = body.m_sweep.a;
        copyVec2(v2, body.m_linearVelocity);
        var w = body.m_angularVelocity;
        copyVec2(body.m_sweep.c0, body.m_sweep.c);
        body.m_sweep.a0 = body.m_sweep.a;
        if (body.isDynamic()) {
          plusScaleVec2(v2, h * body.m_gravityScale, gravity);
          plusScaleVec2(v2, h * body.m_invMass, body.m_force);
          w += h * body.m_invI * body.m_torque;
          scaleVec2(v2, 1 / (1 + h * body.m_linearDamping), v2);
          w *= 1 / (1 + h * body.m_angularDamping);
        }
        copyVec2(body.c_position.c, c);
        body.c_position.a = a2;
        copyVec2(body.c_velocity.v, v2);
        body.c_velocity.w = w;
      }
      for (var i2 = 0; i2 < this.m_contacts.length; ++i2) {
        var contact = this.m_contacts[i2];
        contact.initConstraint(step);
      }
      for (var i2 = 0; i2 < this.m_contacts.length; ++i2) {
        var contact = this.m_contacts[i2];
        contact.initVelocityConstraint(step);
      }
      if (step.warmStarting) {
        for (var i2 = 0; i2 < this.m_contacts.length; ++i2) {
          var contact = this.m_contacts[i2];
          contact.warmStartConstraint(step);
        }
      }
      for (var i2 = 0; i2 < this.m_joints.length; ++i2) {
        var joint = this.m_joints[i2];
        joint.initVelocityConstraints(step);
      }
      for (var i2 = 0; i2 < step.velocityIterations; ++i2) {
        for (var j = 0; j < this.m_joints.length; ++j) {
          var joint = this.m_joints[j];
          joint.solveVelocityConstraints(step);
        }
        for (var j = 0; j < this.m_contacts.length; ++j) {
          var contact = this.m_contacts[j];
          contact.solveVelocityConstraint(step);
        }
      }
      for (var i2 = 0; i2 < this.m_contacts.length; ++i2) {
        var contact = this.m_contacts[i2];
        contact.storeConstraintImpulses(step);
      }
      for (var i2 = 0; i2 < this.m_bodies.length; ++i2) {
        var body = this.m_bodies[i2];
        copyVec2(c, body.c_position.c);
        var a2 = body.c_position.a;
        copyVec2(v2, body.c_velocity.v);
        var w = body.c_velocity.w;
        scaleVec2(translation, h, v2);
        var translationLengthSqr = lengthSqrVec2(translation);
        if (translationLengthSqr > SettingsInternal.maxTranslationSquared) {
          var ratio = SettingsInternal.maxTranslation / math_sqrt$3(translationLengthSqr);
          mulVec2(v2, ratio);
        }
        var rotation2 = h * w;
        if (rotation2 * rotation2 > SettingsInternal.maxRotationSquared) {
          var ratio = SettingsInternal.maxRotation / math_abs$6(rotation2);
          w *= ratio;
        }
        plusScaleVec2(c, h, v2);
        a2 += h * w;
        copyVec2(body.c_position.c, c);
        body.c_position.a = a2;
        copyVec2(body.c_velocity.v, v2);
        body.c_velocity.w = w;
      }
      var positionSolved = false;
      for (var i2 = 0; i2 < step.positionIterations; ++i2) {
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
      for (var i2 = 0; i2 < this.m_bodies.length; ++i2) {
        var body = this.m_bodies[i2];
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
        for (var i2 = 0; i2 < this.m_bodies.length; ++i2) {
          var body = this.m_bodies[i2];
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
          for (var i2 = 0; i2 < this.m_bodies.length; ++i2) {
            var body = this.m_bodies[i2];
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
        for (var i2 = 0; i2 < bodies.length; ++i2) {
          var body = bodies[i2];
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
        for (var i2 = 0; i2 < this.m_bodies.length; ++i2) {
          var body = this.m_bodies[i2];
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
      for (var i2 = 0; i2 < this.m_bodies.length; ++i2) {
        var body = this.m_bodies[i2];
        copyVec2(body.c_position.c, body.m_sweep.c);
        body.c_position.a = body.m_sweep.a;
        copyVec2(body.c_velocity.v, body.m_linearVelocity);
        body.c_velocity.w = body.m_angularVelocity;
      }
      for (var i2 = 0; i2 < this.m_contacts.length; ++i2) {
        var contact = this.m_contacts[i2];
        contact.initConstraint(subStep);
      }
      for (var i2 = 0; i2 < subStep.positionIterations; ++i2) {
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
      var i2;
      copyVec2(toiA.m_sweep.c0, toiA.c_position.c);
      toiA.m_sweep.a0 = toiA.c_position.a;
      copyVec2(toiB.m_sweep.c0, toiB.c_position.c);
      toiB.m_sweep.a0 = toiB.c_position.a;
      for (var i2 = 0; i2 < this.m_contacts.length; ++i2) {
        var contact = this.m_contacts[i2];
        contact.initVelocityConstraint(subStep);
      }
      for (var i2 = 0; i2 < subStep.velocityIterations; ++i2) {
        for (var j = 0; j < this.m_contacts.length; ++j) {
          var contact = this.m_contacts[j];
          contact.solveVelocityConstraint(subStep);
        }
      }
      var h = subStep.dt;
      for (var i2 = 0; i2 < this.m_bodies.length; ++i2) {
        var body = this.m_bodies[i2];
        copyVec2(c, body.c_position.c);
        var a2 = body.c_position.a;
        copyVec2(v2, body.c_velocity.v);
        var w = body.c_velocity.w;
        scaleVec2(translation, h, v2);
        var translationLengthSqr = lengthSqrVec2(translation);
        if (translationLengthSqr > SettingsInternal.maxTranslationSquared) {
          var ratio = SettingsInternal.maxTranslation / math_sqrt$3(translationLengthSqr);
          mulVec2(v2, ratio);
        }
        var rotation2 = h * w;
        if (rotation2 * rotation2 > SettingsInternal.maxRotationSquared) {
          var ratio = SettingsInternal.maxRotation / math_abs$6(rotation2);
          w *= ratio;
        }
        plusScaleVec2(c, h, v2);
        a2 += h * w;
        copyVec2(body.c_position.c, c);
        body.c_position.a = a2;
        copyVec2(body.c_velocity.v, v2);
        body.c_velocity.w = w;
        copyVec2(body.m_sweep.c, c);
        body.m_sweep.a = a2;
        copyVec2(body.m_linearVelocity, v2);
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
    Mat222.assert = function(o) {
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
        var x2 = mx.ex.x * v3.x + mx.ey.x * v3.y;
        var y = mx.ex.y * v3.x + mx.ey.y * v3.y;
        return Vec2.neo(x2, y);
      } else if (v3 && "ex" in v3 && "ey" in v3) {
        var a2 = mx.ex.x * v3.ex.x + mx.ey.x * v3.ex.y;
        var b2 = mx.ex.x * v3.ey.x + mx.ey.x * v3.ey.y;
        var c2 = mx.ex.y * v3.ex.x + mx.ey.y * v3.ex.y;
        var d2 = mx.ex.y * v3.ey.x + mx.ey.y * v3.ey.y;
        return new Mat222(a2, b2, c2, d2);
      }
    };
    Mat222.mulVec2 = function(mx, v3) {
      var x2 = mx.ex.x * v3.x + mx.ey.x * v3.y;
      var y = mx.ex.y * v3.x + mx.ey.y * v3.y;
      return Vec2.neo(x2, y);
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
    ClipVertex2.prototype.set = function(o) {
      copyVec2(this.v, o.v);
      this.id.set(o.id);
    };
    ClipVertex2.prototype.recycle = function() {
      zeroVec2(this.v);
      this.id.recycle();
    };
    return ClipVertex2;
  }();
  var Manifold = function() {
    function Manifold3() {
      this.localNormal = vec22(0, 0);
      this.localPoint = vec22(0, 0);
      this.points = [new ManifoldPoint(), new ManifoldPoint()];
      this.pointCount = 0;
    }
    __name(Manifold3, "Manifold");
    Manifold3.prototype.set = function(that) {
      this.type = that.type;
      copyVec2(this.localNormal, that.localNormal);
      copyVec2(this.localPoint, that.localPoint);
      this.pointCount = that.pointCount;
      this.points[0].set(that.points[0]);
      this.points[1].set(that.points[1]);
    };
    Manifold3.prototype.recycle = function() {
      this.type = ManifoldType.e_unset;
      zeroVec2(this.localNormal);
      zeroVec2(this.localPoint);
      this.pointCount = 0;
      this.points[0].recycle();
      this.points[1].recycle();
    };
    Manifold3.prototype.getWorldManifold = function(wm, xfA2, radiusA, xfB2, radiusB) {
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
          subVec2(dist, pointB$1, pointA$1);
          var lengthSqr = lengthSqrVec2(dist);
          if (lengthSqr > EPSILON * EPSILON) {
            var length_1 = math_sqrt$2(lengthSqr);
            scaleVec2(normal3, 1 / length_1, dist);
          }
          combine2Vec2(cA$1, 1, pointA$1, radiusA, normal3);
          combine2Vec2(cB$1, 1, pointB$1, -radiusB, normal3);
          combine2Vec2(points[0], 0.5, cA$1, 0.5, cB$1);
          separations[0] = dotVec2(subVec2(temp$3, cB$1, cA$1), normal3);
          break;
        }
        case ManifoldType.e_faceA: {
          rotVec2(normal3, xfA2.q, this.localNormal);
          transformVec2(planePoint$2, xfA2, this.localPoint);
          for (var i2 = 0; i2 < this.pointCount; ++i2) {
            var manifoldPoint = this.points[i2];
            transformVec2(clipPoint$1, xfB2, manifoldPoint.localPoint);
            combine2Vec2(cA$1, 1, clipPoint$1, radiusA - dotVec2(subVec2(temp$3, clipPoint$1, planePoint$2), normal3), normal3);
            combine2Vec2(cB$1, 1, clipPoint$1, -radiusB, normal3);
            combine2Vec2(points[i2], 0.5, cA$1, 0.5, cB$1);
            separations[i2] = dotVec2(subVec2(temp$3, cB$1, cA$1), normal3);
          }
          break;
        }
        case ManifoldType.e_faceB: {
          rotVec2(normal3, xfB2.q, this.localNormal);
          transformVec2(planePoint$2, xfB2, this.localPoint);
          for (var i2 = 0; i2 < this.pointCount; ++i2) {
            var manifoldPoint = this.points[i2];
            transformVec2(clipPoint$1, xfA2, manifoldPoint.localPoint);
            combine2Vec2(cB$1, 1, clipPoint$1, radiusB - dotVec2(subVec2(temp$3, clipPoint$1, planePoint$2), normal3), normal3);
            combine2Vec2(cA$1, 1, clipPoint$1, -radiusA, normal3);
            combine2Vec2(points[i2], 0.5, cA$1, 0.5, cB$1);
            separations[i2] = dotVec2(subVec2(temp$3, cA$1, cB$1), normal3);
          }
          negVec2(normal3);
          break;
        }
      }
      return wm;
    };
    Manifold3.clipSegmentToLine = clipSegmentToLine;
    Manifold3.ClipVertex = ClipVertex;
    Manifold3.getPointStates = getPointStates;
    Manifold3.PointState = PointState;
    return Manifold3;
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
    for (var i2 = 0; i2 < manifold1.pointCount; ++i2) {
      var id = manifold1.points[i2].id;
      state1[i2] = PointState.removeState;
      for (var j = 0; j < manifold2.pointCount; ++j) {
        if (manifold2.points[j].id.key === id.key) {
          state1[i2] = PointState.persistState;
          break;
        }
      }
    }
    for (var i2 = 0; i2 < manifold2.pointCount; ++i2) {
      var id = manifold2.points[i2].id;
      state2[i2] = PointState.addState;
      for (var j = 0; j < manifold1.pointCount; ++j) {
        if (manifold1.points[j].id.key === id.key) {
          state2[i2] = PointState.persistState;
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
      combine2Vec2(vOut[numOut].v, 1 - interp, vIn[0].v, interp, vIn[1].v);
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
  var x = vec22(0, 0);
  var d = vec22(0, 0);
  var P1 = vec22(0, 0);
  var P2 = vec22(0, 0);
  var temp$2 = vec22(0, 0);
  var Contact = function() {
    function Contact3() {
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
    __name(Contact3, "Contact");
    Contact3.prototype.initialize = function(fA, indexA, fB, indexB, evaluateFcn) {
      this.m_fixtureA = fA;
      this.m_fixtureB = fB;
      this.m_indexA = indexA;
      this.m_indexB = indexB;
      this.m_evaluateFcn = evaluateFcn;
      this.m_friction = mixFriction(this.m_fixtureA.m_friction, this.m_fixtureB.m_friction);
      this.m_restitution = mixRestitution(this.m_fixtureA.m_restitution, this.m_fixtureB.m_restitution);
    };
    Contact3.prototype.recycle = function() {
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
      for (var _i = 0, _a26 = this.v_points; _i < _a26.length; _i++) {
        var point_1 = _a26[_i];
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
    Contact3.prototype.initConstraint = function(step) {
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
    Contact3.prototype.getManifold = function() {
      return this.m_manifold;
    };
    Contact3.prototype.getWorldManifold = function(worldManifold2) {
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
    Contact3.prototype.setEnabled = function(flag) {
      this.m_enabledFlag = !!flag;
    };
    Contact3.prototype.isEnabled = function() {
      return this.m_enabledFlag;
    };
    Contact3.prototype.isTouching = function() {
      return this.m_touchingFlag;
    };
    Contact3.prototype.getNext = function() {
      return this.m_next;
    };
    Contact3.prototype.getFixtureA = function() {
      return this.m_fixtureA;
    };
    Contact3.prototype.getFixtureB = function() {
      return this.m_fixtureB;
    };
    Contact3.prototype.getChildIndexA = function() {
      return this.m_indexA;
    };
    Contact3.prototype.getChildIndexB = function() {
      return this.m_indexB;
    };
    Contact3.prototype.flagForFiltering = function() {
      this.m_filterFlag = true;
    };
    Contact3.prototype.setFriction = function(friction) {
      this.m_friction = friction;
    };
    Contact3.prototype.getFriction = function() {
      return this.m_friction;
    };
    Contact3.prototype.resetFriction = function() {
      var fixtureA = this.m_fixtureA;
      var fixtureB = this.m_fixtureB;
      if (fixtureA === null || fixtureB === null)
        return;
      this.m_friction = mixFriction(fixtureA.m_friction, fixtureB.m_friction);
    };
    Contact3.prototype.setRestitution = function(restitution) {
      this.m_restitution = restitution;
    };
    Contact3.prototype.getRestitution = function() {
      return this.m_restitution;
    };
    Contact3.prototype.resetRestitution = function() {
      var fixtureA = this.m_fixtureA;
      var fixtureB = this.m_fixtureB;
      if (fixtureA === null || fixtureB === null)
        return;
      this.m_restitution = mixRestitution(fixtureA.m_restitution, fixtureB.m_restitution);
    };
    Contact3.prototype.setTangentSpeed = function(speed) {
      this.m_tangentSpeed = speed;
    };
    Contact3.prototype.getTangentSpeed = function() {
      return this.m_tangentSpeed;
    };
    Contact3.prototype.evaluate = function(manifold, xfA2, xfB2) {
      var fixtureA = this.m_fixtureA;
      var fixtureB = this.m_fixtureB;
      if (fixtureA === null || fixtureB === null)
        return;
      this.m_evaluateFcn(manifold, xfA2, fixtureA, this.m_indexA, xfB2, fixtureB, this.m_indexB);
    };
    Contact3.prototype.update = function(listener) {
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
        for (var i2 = 0; i2 < this.m_manifold.pointCount; ++i2) {
          var nmp = this.m_manifold.points[i2];
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
    Contact3.prototype.solvePositionConstraint = function(step) {
      return this._solvePositionConstraint(step, null, null);
    };
    Contact3.prototype.solvePositionConstraintTOI = function(step, toiA, toiB) {
      return this._solvePositionConstraint(step, toiA, toiB);
    };
    Contact3.prototype._solvePositionConstraint = function(step, toiA, toiB) {
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
            subVec2(normal$2, pointB, pointA);
            normalizeVec2(normal$2);
            combine2Vec2(point, 0.5, pointA, 0.5, pointB);
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
        subVec2(rA, point, cA);
        subVec2(rB, point, cB);
        minSeparation = math_min$4(minSeparation, separation);
        var baumgarte = toi ? SettingsInternal.toiBaugarte : SettingsInternal.baumgarte;
        var linearSlop = SettingsInternal.linearSlop;
        var maxLinearCorrection = SettingsInternal.maxLinearCorrection;
        var C = clamp(baumgarte * (separation + linearSlop), -maxLinearCorrection, 0);
        var rnA = crossVec2Vec2(rA, normal$2);
        var rnB = crossVec2Vec2(rB, normal$2);
        var K = mA + mB + iA * rnA * rnA + iB * rnB * rnB;
        var impulse = K > 0 ? -C / K : 0;
        scaleVec2(P$1, impulse, normal$2);
        minusScaleVec2(cA, mA, P$1);
        aA -= iA * crossVec2Vec2(rA, P$1);
        plusScaleVec2(cB, mB, P$1);
        aB += iB * crossVec2Vec2(rB, P$1);
      }
      copyVec2(positionA.c, cA);
      positionA.a = aA;
      copyVec2(positionB.c, cB);
      positionB.a = aB;
      return minSeparation;
    };
    Contact3.prototype.initVelocityConstraint = function(step) {
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
        subVec2(vcp.rA, wmp, cA);
        subVec2(vcp.rB, wmp, cB);
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
    Contact3.prototype.warmStartConstraint = function(step) {
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
        combine2Vec2(P$1, vcp.normalImpulse, normal$2, vcp.tangentImpulse, tangent$1);
        wA -= iA * crossVec2Vec2(vcp.rA, P$1);
        minusScaleVec2(vA, mA, P$1);
        wB += iB * crossVec2Vec2(vcp.rB, P$1);
        plusScaleVec2(vB, mB, P$1);
      }
      copyVec2(velocityA.v, vA);
      velocityA.w = wA;
      copyVec2(velocityB.v, vB);
      velocityB.w = wB;
    };
    Contact3.prototype.storeConstraintImpulses = function(step) {
      var manifold = this.m_manifold;
      for (var j = 0; j < this.v_pointCount; ++j) {
        manifold.points[j].normalImpulse = this.v_points[j].normalImpulse;
        manifold.points[j].tangentImpulse = this.v_points[j].tangentImpulse;
      }
    };
    Contact3.prototype.solveVelocityConstraint = function(step) {
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
        plusVec2(dv, vB);
        plusVec2(dv, crossNumVec2(temp$2, wB, vcp.rB));
        minusVec2(dv, vA);
        minusVec2(dv, crossNumVec2(temp$2, wA, vcp.rA));
        var vt2 = dotVec2(dv, tangent$1) - this.v_tangentSpeed;
        var lambda = vcp.tangentMass * -vt2;
        var maxFriction = friction * vcp.normalImpulse;
        var newImpulse = clamp(vcp.tangentImpulse + lambda, -maxFriction, maxFriction);
        lambda = newImpulse - vcp.tangentImpulse;
        vcp.tangentImpulse = newImpulse;
        scaleVec2(P$1, lambda, tangent$1);
        minusScaleVec2(vA, mA, P$1);
        wA -= iA * crossVec2Vec2(vcp.rA, P$1);
        plusScaleVec2(vB, mB, P$1);
        wB += iB * crossVec2Vec2(vcp.rB, P$1);
      }
      if (this.v_pointCount == 1 || step.blockSolve == false) {
        for (var i2 = 0; i2 < this.v_pointCount; ++i2) {
          var vcp = this.v_points[i2];
          zeroVec2(dv);
          plusVec2(dv, vB);
          plusVec2(dv, crossNumVec2(temp$2, wB, vcp.rB));
          minusVec2(dv, vA);
          minusVec2(dv, crossNumVec2(temp$2, wA, vcp.rA));
          var vn = dotVec2(dv, normal$2);
          var lambda = -vcp.normalMass * (vn - vcp.velocityBias);
          var newImpulse = math_max$2(vcp.normalImpulse + lambda, 0);
          lambda = newImpulse - vcp.normalImpulse;
          vcp.normalImpulse = newImpulse;
          scaleVec2(P$1, lambda, normal$2);
          minusScaleVec2(vA, mA, P$1);
          wA -= iA * crossVec2Vec2(vcp.rA, P$1);
          plusScaleVec2(vB, mB, P$1);
          wB += iB * crossVec2Vec2(vcp.rB, P$1);
        }
      } else {
        var vcp1 = this.v_points[0];
        var vcp2 = this.v_points[1];
        setVec2(a, vcp1.normalImpulse, vcp2.normalImpulse);
        zeroVec2(dv1);
        plusVec2(dv1, vB);
        plusVec2(dv1, crossNumVec2(temp$2, wB, vcp1.rB));
        minusVec2(dv1, vA);
        minusVec2(dv1, crossNumVec2(temp$2, wA, vcp1.rA));
        zeroVec2(dv2);
        plusVec2(dv2, vB);
        plusVec2(dv2, crossNumVec2(temp$2, wB, vcp2.rB));
        minusVec2(dv2, vA);
        minusVec2(dv2, crossNumVec2(temp$2, wA, vcp2.rA));
        var vn1 = dotVec2(dv1, normal$2);
        var vn2 = dotVec2(dv2, normal$2);
        setVec2(b, vn1 - vcp1.velocityBias, vn2 - vcp2.velocityBias);
        b.x -= this.v_K.ex.x * a.x + this.v_K.ey.x * a.y;
        b.y -= this.v_K.ex.y * a.x + this.v_K.ey.y * a.y;
        while (true) {
          zeroVec2(x);
          x.x = -(this.v_normalMass.ex.x * b.x + this.v_normalMass.ey.x * b.y);
          x.y = -(this.v_normalMass.ex.y * b.x + this.v_normalMass.ey.y * b.y);
          if (x.x >= 0 && x.y >= 0) {
            subVec2(d, x, a);
            scaleVec2(P1, d.x, normal$2);
            scaleVec2(P2, d.y, normal$2);
            combine3Vec2(vA, -mA, P1, -mA, P2, 1, vA);
            wA -= iA * (crossVec2Vec2(vcp1.rA, P1) + crossVec2Vec2(vcp2.rA, P2));
            combine3Vec2(vB, mB, P1, mB, P2, 1, vB);
            wB += iB * (crossVec2Vec2(vcp1.rB, P1) + crossVec2Vec2(vcp2.rB, P2));
            vcp1.normalImpulse = x.x;
            vcp2.normalImpulse = x.y;
            break;
          }
          x.x = -vcp1.normalMass * b.x;
          x.y = 0;
          vn1 = 0;
          vn2 = this.v_K.ex.y * x.x + b.y;
          if (x.x >= 0 && vn2 >= 0) {
            subVec2(d, x, a);
            scaleVec2(P1, d.x, normal$2);
            scaleVec2(P2, d.y, normal$2);
            combine3Vec2(vA, -mA, P1, -mA, P2, 1, vA);
            wA -= iA * (crossVec2Vec2(vcp1.rA, P1) + crossVec2Vec2(vcp2.rA, P2));
            combine3Vec2(vB, mB, P1, mB, P2, 1, vB);
            wB += iB * (crossVec2Vec2(vcp1.rB, P1) + crossVec2Vec2(vcp2.rB, P2));
            vcp1.normalImpulse = x.x;
            vcp2.normalImpulse = x.y;
            break;
          }
          x.x = 0;
          x.y = -vcp2.normalMass * b.y;
          vn1 = this.v_K.ey.x * x.y + b.x;
          vn2 = 0;
          if (x.y >= 0 && vn1 >= 0) {
            subVec2(d, x, a);
            scaleVec2(P1, d.x, normal$2);
            scaleVec2(P2, d.y, normal$2);
            combine3Vec2(vA, -mA, P1, -mA, P2, 1, vA);
            wA -= iA * (crossVec2Vec2(vcp1.rA, P1) + crossVec2Vec2(vcp2.rA, P2));
            combine3Vec2(vB, mB, P1, mB, P2, 1, vB);
            wB += iB * (crossVec2Vec2(vcp1.rB, P1) + crossVec2Vec2(vcp2.rB, P2));
            vcp1.normalImpulse = x.x;
            vcp2.normalImpulse = x.y;
            break;
          }
          x.x = 0;
          x.y = 0;
          vn1 = b.x;
          vn2 = b.y;
          if (vn1 >= 0 && vn2 >= 0) {
            subVec2(d, x, a);
            scaleVec2(P1, d.x, normal$2);
            scaleVec2(P2, d.y, normal$2);
            combine3Vec2(vA, -mA, P1, -mA, P2, 1, vA);
            wA -= iA * (crossVec2Vec2(vcp1.rA, P1) + crossVec2Vec2(vcp2.rA, P2));
            combine3Vec2(vB, mB, P1, mB, P2, 1, vB);
            wB += iB * (crossVec2Vec2(vcp1.rB, P1) + crossVec2Vec2(vcp2.rB, P2));
            vcp1.normalImpulse = x.x;
            vcp2.normalImpulse = x.y;
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
    Contact3.addType = function(type1, type2, callback) {
      s_registers[type1] = s_registers[type1] || {};
      s_registers[type1][type2] = callback;
    };
    Contact3.create = function(fixtureA, indexA, fixtureB, indexB) {
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
    Contact3.destroy = function(contact, listener) {
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
    return Contact3;
  }();
  var DEFAULTS$b = {
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
      if (!def) {
        def = {};
      } else if (Vec2.isValid(def)) {
        def = { gravity: def };
      }
      def = options(def, DEFAULTS$b);
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
        for (var i2 = data.bodies.length - 1; i2 >= 0; i2 -= 1) {
          world2._addBody(restore(Body, data.bodies[i2], world2));
        }
      }
      if (data.joints) {
        for (var i2 = data.joints.length - 1; i2 >= 0; i2--) {
          world2.createJoint(restore(Joint, data.joints[i2], world2));
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
      this.m_gravity.set(gravity);
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
      var je2 = b2.m_jointList;
      while (je2) {
        var je0 = je2;
        je2 = je2.next;
        this.publish("remove-joint", je0.joint);
        this.destroyJoint(je0.joint);
        b2.m_jointList = je2;
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
    function Vec32(x2, y, z) {
      if (!(this instanceof Vec32)) {
        return new Vec32(x2, y, z);
      }
      if (typeof x2 === "undefined") {
        this.x = 0;
        this.y = 0;
        this.z = 0;
      } else if (typeof x2 === "object") {
        this.x = x2.x;
        this.y = x2.y;
        this.z = x2.z;
      } else {
        this.x = x2;
        this.y = y;
        this.z = z;
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
    Vec32.neo = function(x2, y, z) {
      var obj = Object.create(Vec32.prototype);
      obj.x = x2;
      obj.y = y;
      obj.z = z;
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
    Vec32.assert = function(o) {
    };
    Vec32.prototype.setZero = function() {
      this.x = 0;
      this.y = 0;
      this.z = 0;
      return this;
    };
    Vec32.prototype.set = function(x2, y, z) {
      this.x = x2;
      this.y = y;
      this.z = z;
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
    function EdgeShape2(v13, v23) {
      var _this = this;
      if (!(_this instanceof EdgeShape2)) {
        return new EdgeShape2(v13, v23);
      }
      _this = _super.call(this) || this;
      _this.m_type = EdgeShape2.TYPE;
      _this.m_radius = SettingsInternal.polygonRadius;
      _this.m_vertex1 = v13 ? Vec2.clone(v13) : Vec2.zero();
      _this.m_vertex2 = v23 ? Vec2.clone(v23) : Vec2.zero();
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
    EdgeShape2.prototype._set = function(v13, v23) {
      this.m_vertex1.setVec2(v13);
      this.m_vertex2.setVec2(v23);
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
      var v23 = this.m_vertex2;
      var e3 = Vec2.sub(v23, v13);
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
      var r = Vec2.sub(v23, v13);
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
      combine2Vec2(massData.center, 0.5, this.m_vertex1, 0.5, this.m_vertex2);
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
  var v22 = vec22(0, 0);
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
        for (var i2 = 0; i2 < data.vertices.length; i2++) {
          vertices.push(restore(Vec2, data.vertices[i2]));
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
      for (var i2 = 1; i2 < vertices.length; ++i2) {
        vertices[i2 - 1];
        vertices[i2];
      }
      this.m_vertices = [];
      this.m_count = vertices.length + 1;
      for (var i2 = 0; i2 < vertices.length; ++i2) {
        this.m_vertices[i2] = Vec2.clone(vertices[i2]);
      }
      this.m_vertices[vertices.length] = Vec2.clone(vertices[0]);
      this.m_prevVertex = this.m_vertices[this.m_count - 2];
      this.m_nextVertex = this.m_vertices[1];
      this.m_hasPrevVertex = true;
      this.m_hasNextVertex = true;
      return this;
    };
    ChainShape2.prototype._createChain = function(vertices) {
      for (var i2 = 1; i2 < vertices.length; ++i2) {
        vertices[i2 - 1];
        vertices[i2];
      }
      this.m_count = vertices.length;
      for (var i2 = 0; i2 < vertices.length; ++i2) {
        this.m_vertices[i2] = Vec2.clone(vertices[i2]);
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
      transformVec2(v22, xf2, this.getVertex(childIndex + 1));
      AABB.combinePoints(aabb, v1$1, v22);
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
        for (var i2 = 0; i2 < data.vertices.length; i2++) {
          vertices.push(restore(Vec2, data.vertices[i2]));
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
      for (var i2 = 0; i2 < this.m_count; i2++) {
        clone.m_vertices.push(this.m_vertices[i2].clone());
      }
      for (var i2 = 0; i2 < this.m_normals.length; i2++) {
        clone.m_normals.push(this.m_normals[i2].clone());
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
      var ps = [];
      for (var i2 = 0; i2 < n2; ++i2) {
        var v3 = vertices[i2];
        var unique = true;
        for (var j = 0; j < ps.length; ++j) {
          if (Vec2.distanceSquared(v3, ps[j]) < 0.25 * SettingsInternal.linearSlopSquared) {
            unique = false;
            break;
          }
        }
        if (unique) {
          ps.push(Vec2.clone(v3));
        }
      }
      n2 = ps.length;
      if (n2 < 3) {
        this._setAsBox(1, 1);
        return;
      }
      var i0 = 0;
      var x0 = ps[0].x;
      for (var i2 = 1; i2 < n2; ++i2) {
        var x2 = ps[i2].x;
        if (x2 > x0 || x2 === x0 && ps[i2].y < ps[i0].y) {
          i0 = i2;
          x0 = x2;
        }
      }
      var hull = [];
      var m = 0;
      var ih = i0;
      while (true) {
        hull[m] = ih;
        var ie2 = 0;
        for (var j = 1; j < n2; ++j) {
          if (ie2 === ih) {
            ie2 = j;
            continue;
          }
          var r = Vec2.sub(ps[ie2], ps[hull[m]]);
          var v3 = Vec2.sub(ps[j], ps[hull[m]]);
          var c2 = Vec2.crossVec2Vec2(r, v3);
          if (c2 < 0) {
            ie2 = j;
          }
          if (c2 === 0 && v3.lengthSquared() > r.lengthSquared()) {
            ie2 = j;
          }
        }
        ++m;
        ih = ie2;
        if (ie2 === i0) {
          break;
        }
      }
      if (m < 3) {
        this._setAsBox(1, 1);
        return;
      }
      this.m_count = m;
      this.m_vertices = [];
      for (var i2 = 0; i2 < m; ++i2) {
        this.m_vertices[i2] = ps[hull[i2]];
      }
      for (var i2 = 0; i2 < m; ++i2) {
        var i1 = i2;
        var i22 = i2 + 1 < m ? i2 + 1 : 0;
        var edge = Vec2.sub(this.m_vertices[i22], this.m_vertices[i1]);
        this.m_normals[i2] = Vec2.crossVec2Num(edge, 1);
        this.m_normals[i2].normalize();
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
        for (var i2 = 0; i2 < this.m_count; ++i2) {
          this.m_vertices[i2] = Transform.mulVec2(xf2, this.m_vertices[i2]);
          this.m_normals[i2] = Rot.mulVec2(xf2.q, this.m_normals[i2]);
        }
      }
    };
    PolygonShape2.prototype.testPoint = function(xf2, p) {
      var pLocal = detransformVec2(temp$1, xf2, p);
      for (var i2 = 0; i2 < this.m_count; ++i2) {
        var dot = dotVec2(this.m_normals[i2], pLocal) - dotVec2(this.m_normals[i2], this.m_vertices[i2]);
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
      for (var i2 = 0; i2 < this.m_count; ++i2) {
        var numerator = Vec2.dot(this.m_normals[i2], Vec2.sub(this.m_vertices[i2], p1));
        var denominator = Vec2.dot(this.m_normals[i2], d2);
        if (denominator == 0) {
          if (numerator < 0) {
            return false;
          }
        } else {
          if (denominator < 0 && numerator < lower * denominator) {
            lower = numerator / denominator;
            index = i2;
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
      for (var i2 = 0; i2 < this.m_count; ++i2) {
        var v3 = transformVec2(temp$1, xf2, this.m_vertices[i2]);
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
      for (var i2 = 0; i2 < this.m_count; ++i2) {
        plusVec2(s, this.m_vertices[i2]);
      }
      scaleVec2(s, 1 / this.m_count, s);
      var k_inv3 = 1 / 3;
      for (var i2 = 0; i2 < this.m_count; ++i2) {
        subVec2(e1$1, this.m_vertices[i2], s);
        if (i2 + 1 < this.m_count) {
          subVec2(e2$1, this.m_vertices[i2 + 1], s);
        } else {
          subVec2(e2$1, this.m_vertices[0], s);
        }
        var D = crossVec2Vec2(e1$1, e2$1);
        var triangleArea = 0.5 * D;
        area += triangleArea;
        combine2Vec2(temp$1, triangleArea * k_inv3, e1$1, triangleArea * k_inv3, e2$1);
        plusVec2(center, temp$1);
        var ex1 = e1$1.x;
        var ey1 = e1$1.y;
        var ex2 = e2$1.x;
        var ey2 = e2$1.y;
        var intx2 = ex1 * ex1 + ex2 * ex1 + ex2 * ex2;
        var inty2 = ey1 * ey1 + ey2 * ey1 + ey2 * ey2;
        I += 0.25 * k_inv3 * D * (intx2 + inty2);
      }
      massData.mass = density * area;
      scaleVec2(center, 1 / area, center);
      addVec2(massData.center, center, s);
      massData.I = density * I;
      massData.I += massData.mass * (dotVec2(massData.center, massData.center) - dotVec2(center, center));
    };
    PolygonShape2.prototype.validate = function() {
      for (var i2 = 0; i2 < this.m_count; ++i2) {
        var i1 = i2;
        var i22 = i2 < this.m_count - 1 ? i1 + 1 : 0;
        var p = this.m_vertices[i1];
        subVec2(e$1, this.m_vertices[i22], p);
        for (var j = 0; j < this.m_count; ++j) {
          if (j == i1 || j == i22) {
            continue;
          }
          var c2 = crossVec2Vec2(e$1, subVec2(temp$1, this.m_vertices[j], p));
          if (c2 < 0) {
            return false;
          }
        }
      }
      return true;
    };
    PolygonShape2.prototype.computeDistanceProxy = function(proxy) {
      for (var i2 = 0; i2 < this.m_count; ++i2) {
        proxy.m_vertices[i2] = this.m_vertices[i2];
      }
      proxy.m_vertices.length = this.m_count;
      proxy.m_count = this.m_count;
      proxy.m_radius = this.m_radius;
    };
    PolygonShape2.TYPE = "polygon";
    return PolygonShape2;
  }(Shape);
  function computeCentroid(vs, count) {
    var c2 = Vec2.zero();
    var area = 0;
    var pRef = Vec2.zero();
    var i2;
    var inv3 = 1 / 3;
    for (var i2 = 0; i2 < count; ++i2) {
      var p1 = pRef;
      var p2 = vs[i2];
      var p3 = i2 + 1 < count ? vs[i2 + 1] : vs[0];
      var e1_1 = Vec2.sub(p2, p1);
      var e2_1 = Vec2.sub(p3, p1);
      var D = Vec2.crossVec2Vec2(e1_1, e2_1);
      var triangleArea = 0.5 * D;
      area += triangleArea;
      combine3Vec2(temp$1, 1, p1, 1, p2, 1, p3);
      plusScaleVec2(c2, triangleArea * inv3, temp$1);
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
    DistanceJoint2.prototype._reset = function(def) {
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
      if (Number.isFinite(def.frequencyHz)) {
        this.m_frequencyHz = def.frequencyHz;
      }
      if (Number.isFinite(def.dampingRatio)) {
        this.m_dampingRatio = def.dampingRatio;
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
    FrictionJoint2.prototype._reset = function(def) {
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
      if (Number.isFinite(def.maxForce)) {
        this.m_maxForce = def.maxForce;
      }
      if (Number.isFinite(def.maxTorque)) {
        this.m_maxTorque = def.maxTorque;
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
    Mat332.assert = function(o) {
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
        var x2 = a2.ex.x * b2.x + a2.ey.x * b2.y + a2.ez.x * b2.z;
        var y = a2.ex.y * b2.x + a2.ey.y * b2.y + a2.ez.y * b2.z;
        var z = a2.ex.z * b2.x + a2.ey.z * b2.y + a2.ez.z * b2.z;
        return new Vec3(x2, y, z);
      } else if (b2 && "y" in b2 && "x" in b2) {
        var x2 = a2.ex.x * b2.x + a2.ey.x * b2.y;
        var y = a2.ex.y * b2.x + a2.ey.y * b2.y;
        return Vec2.neo(x2, y);
      }
    };
    Mat332.mulVec3 = function(a2, b2) {
      var x2 = a2.ex.x * b2.x + a2.ey.x * b2.y + a2.ez.x * b2.z;
      var y = a2.ex.y * b2.x + a2.ey.y * b2.y + a2.ez.y * b2.z;
      var z = a2.ex.z * b2.x + a2.ey.z * b2.y + a2.ez.z * b2.z;
      return new Vec3(x2, y, z);
    };
    Mat332.mulVec2 = function(a2, b2) {
      var x2 = a2.ex.x * b2.x + a2.ey.x * b2.y;
      var y = a2.ex.y * b2.x + a2.ey.y * b2.y;
      return Vec2.neo(x2, y);
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
      var _a26, _b, _c, _d, _e2, _f;
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
      _this.m_lowerAngle = (_a26 = def.lowerAngle) !== null && _a26 !== void 0 ? _a26 : DEFAULTS$8.lowerAngle;
      _this.m_upperAngle = (_b = def.upperAngle) !== null && _b !== void 0 ? _b : DEFAULTS$8.upperAngle;
      _this.m_maxMotorTorque = (_c = def.maxMotorTorque) !== null && _c !== void 0 ? _c : DEFAULTS$8.maxMotorTorque;
      _this.m_motorSpeed = (_d = def.motorSpeed) !== null && _d !== void 0 ? _d : DEFAULTS$8.motorSpeed;
      _this.m_enableLimit = (_e2 = def.enableLimit) !== null && _e2 !== void 0 ? _e2 : DEFAULTS$8.enableLimit;
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
    RevoluteJoint2.prototype._reset = function(def) {
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
      if (Number.isFinite(def.referenceAngle)) {
        this.m_referenceAngle = def.referenceAngle;
      }
      if (def.enableLimit !== void 0) {
        this.m_enableLimit = def.enableLimit;
      }
      if (Number.isFinite(def.lowerAngle)) {
        this.m_lowerAngle = def.lowerAngle;
      }
      if (Number.isFinite(def.upperAngle)) {
        this.m_upperAngle = def.upperAngle;
      }
      if (Number.isFinite(def.maxMotorTorque)) {
        this.m_maxMotorTorque = def.maxMotorTorque;
      }
      if (Number.isFinite(def.motorSpeed)) {
        this.m_motorSpeed = def.motorSpeed;
      }
      if (def.enableMotor !== void 0) {
        this.m_enableMotor = def.enableMotor;
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
    PrismaticJoint2.prototype._reset = function(def) {
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
      if (Number.isFinite(def.referenceAngle)) {
        this.m_referenceAngle = def.referenceAngle;
      }
      if (typeof def.enableLimit !== "undefined") {
        this.m_enableLimit = !!def.enableLimit;
      }
      if (Number.isFinite(def.lowerTranslation)) {
        this.m_lowerTranslation = def.lowerTranslation;
      }
      if (Number.isFinite(def.upperTranslation)) {
        this.m_upperTranslation = def.upperTranslation;
      }
      if (typeof def.enableMotor !== "undefined") {
        this.m_enableMotor = !!def.enableMotor;
      }
      if (Number.isFinite(def.maxMotorForce)) {
        this.m_maxMotorForce = def.maxMotorForce;
      }
      if (Number.isFinite(def.motorSpeed)) {
        this.m_motorSpeed = def.motorSpeed;
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
    GearJoint2.prototype._reset = function(def) {
      if (Number.isFinite(def.ratio)) {
        this.m_ratio = def.ratio;
      }
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
      _this.m_linearOffset = Vec2.isValid(def.linearOffset) ? Vec2.clone(def.linearOffset) : bodyA.getLocalPoint(bodyB.getPosition());
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
    MotorJoint2.prototype._reset = function(def) {
      if (Number.isFinite(def.angularOffset)) {
        this.m_angularOffset = def.angularOffset;
      }
      if (Number.isFinite(def.maxForce)) {
        this.m_maxForce = def.maxForce;
      }
      if (Number.isFinite(def.maxTorque)) {
        this.m_maxTorque = def.maxTorque;
      }
      if (Number.isFinite(def.correctionFactor)) {
        this.m_correctionFactor = def.correctionFactor;
      }
      if (Vec2.isValid(def.linearOffset)) {
        this.m_linearOffset.set(def.linearOffset);
      }
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
    MouseJoint2.prototype._reset = function(def) {
      if (Number.isFinite(def.maxForce)) {
        this.m_maxForce = def.maxForce;
      }
      if (Number.isFinite(def.frequencyHz)) {
        this.m_frequencyHz = def.frequencyHz;
      }
      if (Number.isFinite(def.dampingRatio)) {
        this.m_dampingRatio = def.dampingRatio;
      }
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
    PulleyJoint2.prototype._reset = function(def) {
      if (Vec2.isValid(def.groundAnchorA)) {
        this.m_groundAnchorA.set(def.groundAnchorA);
      }
      if (Vec2.isValid(def.groundAnchorB)) {
        this.m_groundAnchorB.set(def.groundAnchorB);
      }
      if (Vec2.isValid(def.localAnchorA)) {
        this.m_localAnchorA.set(def.localAnchorA);
      } else if (Vec2.isValid(def.anchorA)) {
        this.m_localAnchorA.set(this.m_bodyA.getLocalPoint(def.anchorA));
      }
      if (Vec2.isValid(def.localAnchorB)) {
        this.m_localAnchorB.set(def.localAnchorB);
      } else if (Vec2.isValid(def.anchorB)) {
        this.m_localAnchorB.set(this.m_bodyB.getLocalPoint(def.anchorB));
      }
      if (Number.isFinite(def.lengthA)) {
        this.m_lengthA = def.lengthA;
      }
      if (Number.isFinite(def.lengthB)) {
        this.m_lengthB = def.lengthB;
      }
      if (Number.isFinite(def.ratio)) {
        this.m_ratio = def.ratio;
      }
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
    RopeJoint2.prototype._reset = function(def) {
      if (Number.isFinite(def.maxLength)) {
        this.m_maxLength = def.maxLength;
      }
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
    WeldJoint2.prototype._reset = function(def) {
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
      if (Number.isFinite(def.frequencyHz)) {
        this.m_frequencyHz = def.frequencyHz;
      }
      if (Number.isFinite(def.dampingRatio)) {
        this.m_dampingRatio = def.dampingRatio;
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
    WheelJoint2.prototype._reset = function(def) {
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
      if (def.enableMotor !== void 0) {
        this.m_enableMotor = def.enableMotor;
      }
      if (Number.isFinite(def.maxMotorTorque)) {
        this.m_maxMotorTorque = def.maxMotorTorque;
      }
      if (Number.isFinite(def.motorSpeed)) {
        this.m_motorSpeed = def.motorSpeed;
      }
      if (Number.isFinite(def.frequencyHz)) {
        this.m_frequencyHz = def.frequencyHz;
      }
      if (Number.isFinite(def.dampingRatio)) {
        this.m_dampingRatio = def.dampingRatio;
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
    var _a26;
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
    var CLASS_BY_TYPE_PROP = (_a26 = {}, _a26[Body.STATIC] = Body, _a26[Body.DYNAMIC] = Body, _a26[Body.KINEMATIC] = Body, _a26[ChainShape.TYPE] = ChainShape, _a26[BoxShape.TYPE] = BoxShape, _a26[EdgeShape.TYPE] = EdgeShape, _a26[PolygonShape.TYPE] = PolygonShape, _a26[CircleShape.TYPE] = CircleShape, _a26[DistanceJoint.TYPE] = DistanceJoint, _a26[FrictionJoint.TYPE] = FrictionJoint, _a26[GearJoint.TYPE] = GearJoint, _a26[MotorJoint.TYPE] = MotorJoint, _a26[MouseJoint.TYPE] = MouseJoint, _a26[PrismaticJoint.TYPE] = PrismaticJoint, _a26[PulleyJoint.TYPE] = PulleyJoint, _a26[RevoluteJoint.TYPE] = RevoluteJoint, _a26[RopeJoint.TYPE] = RopeJoint, _a26[WeldJoint.TYPE] = WeldJoint, _a26[WheelJoint.TYPE] = WheelJoint, _a26);
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
    Testbed2.start = function(world2) {
      var testbed = Testbed2.mount();
      testbed.start(world2);
      return testbed;
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
    subVec2(e, B, A);
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
        subVec2(e1, B1, A1);
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
        subVec2(e2, B2, A2);
        var v23 = dotVec2(e2, Q) - dotVec2(e2, A2);
        if (v23 > 0) {
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
    combine2Vec2(P, u / den, A, v3 / den, B);
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
    detransformTransform(xf$1, xf2, xf1);
    var bestIndex = 0;
    var maxSeparation2 = -Infinity;
    for (var i2 = 0; i2 < count1; ++i2) {
      rotVec2(n$1, xf$1.q, n1s[i2]);
      transformVec2(v1, xf$1, v1s[i2]);
      var si = Infinity;
      for (var j = 0; j < count2; ++j) {
        var sij = dotVec2(n$1, v2s[j]) - dotVec2(n$1, v1);
        if (sij < si) {
          si = sij;
        }
      }
      if (si > maxSeparation2) {
        maxSeparation2 = si;
        bestIndex = i2;
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
    for (var i2 = 0; i2 < count2; ++i2) {
      var dot = dotVec2(normal1$1, normals2[i2]);
      if (dot < minDot) {
        minDot = dot;
        index = i2;
      }
    }
    var i1 = index;
    var i22 = i1 + 1 < count2 ? i1 + 1 : 0;
    transformVec2(clipVertex[0].v, xf2, vertices2[i1]);
    clipVertex[0].id.setFeatures(edge12, ContactFeatureType.e_face, i1, ContactFeatureType.e_vertex);
    transformVec2(clipVertex[1].v, xf2, vertices2[i22]);
    clipVertex[1].id.setFeatures(edge12, ContactFeatureType.e_face, i22, ContactFeatureType.e_vertex);
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
    subVec2(localTangent, v12, v11);
    normalizeVec2(localTangent);
    crossVec2Num(localNormal, localTangent, 1);
    combine2Vec2(planePoint, 0.5, v11, 0.5, v12);
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
    for (var i2 = 0; i2 < clipPoints2$1.length; ++i2) {
      var separation = dotVec2(normal$1, clipPoints2$1[i2].v) - frontOffset;
      if (separation <= totalRadius) {
        var cp = manifold.points[pointCount];
        detransformVec2(cp.localPoint, xf2, clipPoints2$1[i2].v);
        cp.id.set(clipPoints2$1[i2].id);
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
    for (var i2 = 0; i2 < vertexCount; ++i2) {
      var s2 = dotVec2(normals[i2], cLocal) - dotVec2(normals[i2], vertices[i2]);
      if (s2 > radius) {
        return;
      }
      if (s2 > separation) {
        separation = s2;
        normalIndex = i2;
      }
    }
    var vertIndex1 = normalIndex;
    var vertIndex2 = vertIndex1 + 1 < vertexCount ? vertIndex1 + 1 : 0;
    var v13 = vertices[vertIndex1];
    var v23 = vertices[vertIndex2];
    if (separation < EPSILON) {
      manifold.pointCount = 1;
      manifold.type = ManifoldType.e_faceA;
      copyVec2(manifold.localNormal, normals[normalIndex]);
      combine2Vec2(manifold.localPoint, 0.5, v13, 0.5, v23);
      copyVec2(manifold.points[0].localPoint, circleB.m_p);
      manifold.points[0].id.setFeatures(0, ContactFeatureType.e_vertex, 0, ContactFeatureType.e_vertex);
      return;
    }
    var u1 = dotVec2(cLocal, v23) - dotVec2(cLocal, v13) - dotVec2(v13, v23) + dotVec2(v13, v13);
    var u2 = dotVec2(cLocal, v13) - dotVec2(cLocal, v23) - dotVec2(v23, v13) + dotVec2(v23, v23);
    if (u1 <= 0) {
      if (distSqrVec2(cLocal, v13) > radius * radius) {
        return;
      }
      manifold.pointCount = 1;
      manifold.type = ManifoldType.e_faceA;
      subVec2(manifold.localNormal, cLocal, v13);
      normalizeVec2(manifold.localNormal);
      copyVec2(manifold.localPoint, v13);
      copyVec2(manifold.points[0].localPoint, circleB.m_p);
      manifold.points[0].id.setFeatures(0, ContactFeatureType.e_vertex, 0, ContactFeatureType.e_vertex);
    } else if (u2 <= 0) {
      if (distSqrVec2(cLocal, v23) > radius * radius) {
        return;
      }
      manifold.pointCount = 1;
      manifold.type = ManifoldType.e_faceA;
      subVec2(manifold.localNormal, cLocal, v23);
      normalizeVec2(manifold.localNormal);
      copyVec2(manifold.localPoint, v23);
      copyVec2(manifold.points[0].localPoint, circleB.m_p);
      manifold.points[0].id.setFeatures(0, ContactFeatureType.e_vertex, 0, ContactFeatureType.e_vertex);
    } else {
      combine2Vec2(faceCenter, 0.5, v13, 0.5, v23);
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
      for (var i2 = 0; i2 < SettingsInternal.maxPolygonVertices; i2++) {
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
  var ie = [new ClipVertex(), new ClipVertex()];
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
    detransformTransform(xf, xfA2, xfB2);
    transformVec2(centroidB, xf, polygonB.m_centroid);
    var v0 = edgeA.m_vertex0;
    var v13 = edgeA.m_vertex1;
    var v23 = edgeA.m_vertex2;
    var v3 = edgeA.m_vertex3;
    var hasVertex0 = edgeA.m_hasVertex0;
    var hasVertex3 = edgeA.m_hasVertex3;
    subVec2(edge1, v23, v13);
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
      subVec2(edge0, v13, v0);
      normalizeVec2(edge0);
      setVec2(normal0, edge0.y, -edge0.x);
      convex1 = crossVec2Vec2(edge0, edge1) >= 0;
      offset0 = Vec2.dot(normal0, centroidB) - Vec2.dot(normal0, v0);
    }
    if (hasVertex3) {
      subVec2(edge2, v3, v23);
      normalizeVec2(edge2);
      setVec2(normal2, edge2.y, -edge2.x);
      convex2 = Vec2.crossVec2Vec2(edge1, edge2) > 0;
      offset2 = Vec2.dot(normal2, centroidB) - Vec2.dot(normal2, v23);
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
          scaleVec2(normal, -1, normal1);
          scaleVec2(lowerLimit, -1, normal1);
          scaleVec2(upperLimit, -1, normal1);
        }
      } else if (convex1) {
        front = offset0 >= 0 || offset1 >= 0 && offset2 >= 0;
        if (front) {
          copyVec2(normal, normal1);
          copyVec2(lowerLimit, normal0);
          copyVec2(upperLimit, normal1);
        } else {
          scaleVec2(normal, -1, normal1);
          scaleVec2(lowerLimit, -1, normal2);
          scaleVec2(upperLimit, -1, normal1);
        }
      } else if (convex2) {
        front = offset2 >= 0 || offset0 >= 0 && offset1 >= 0;
        if (front) {
          copyVec2(normal, normal1);
          copyVec2(lowerLimit, normal1);
          copyVec2(upperLimit, normal2);
        } else {
          scaleVec2(normal, -1, normal1);
          scaleVec2(lowerLimit, -1, normal1);
          scaleVec2(upperLimit, -1, normal0);
        }
      } else {
        front = offset0 >= 0 && offset1 >= 0 && offset2 >= 0;
        if (front) {
          copyVec2(normal, normal1);
          copyVec2(lowerLimit, normal1);
          copyVec2(upperLimit, normal1);
        } else {
          scaleVec2(normal, -1, normal1);
          scaleVec2(lowerLimit, -1, normal2);
          scaleVec2(upperLimit, -1, normal0);
        }
      }
    } else if (hasVertex0) {
      if (convex1) {
        front = offset0 >= 0 || offset1 >= 0;
        if (front) {
          copyVec2(normal, normal1);
          copyVec2(lowerLimit, normal0);
          scaleVec2(upperLimit, -1, normal1);
        } else {
          scaleVec2(normal, -1, normal1);
          copyVec2(lowerLimit, normal1);
          scaleVec2(upperLimit, -1, normal1);
        }
      } else {
        front = offset0 >= 0 && offset1 >= 0;
        if (front) {
          copyVec2(normal, normal1);
          copyVec2(lowerLimit, normal1);
          scaleVec2(upperLimit, -1, normal1);
        } else {
          scaleVec2(normal, -1, normal1);
          copyVec2(lowerLimit, normal1);
          scaleVec2(upperLimit, -1, normal0);
        }
      }
    } else if (hasVertex3) {
      if (convex2) {
        front = offset1 >= 0 || offset2 >= 0;
        if (front) {
          copyVec2(normal, normal1);
          scaleVec2(lowerLimit, -1, normal1);
          copyVec2(upperLimit, normal2);
        } else {
          scaleVec2(normal, -1, normal1);
          scaleVec2(lowerLimit, -1, normal1);
          copyVec2(upperLimit, normal1);
        }
      } else {
        front = offset1 >= 0 && offset2 >= 0;
        if (front) {
          copyVec2(normal, normal1);
          scaleVec2(lowerLimit, -1, normal1);
          copyVec2(upperLimit, normal1);
        } else {
          scaleVec2(normal, -1, normal1);
          scaleVec2(lowerLimit, -1, normal2);
          copyVec2(upperLimit, normal1);
        }
      }
    } else {
      front = offset1 >= 0;
      if (front) {
        copyVec2(normal, normal1);
        scaleVec2(lowerLimit, -1, normal1);
        scaleVec2(upperLimit, -1, normal1);
      } else {
        scaleVec2(normal, -1, normal1);
        copyVec2(lowerLimit, normal1);
        copyVec2(upperLimit, normal1);
      }
    }
    polygonBA.count = polygonB.m_count;
    for (var i2 = 0; i2 < polygonB.m_count; ++i2) {
      transformVec2(polygonBA.vertices[i2], xf, polygonB.m_vertices[i2]);
      rotVec2(polygonBA.normals[i2], xf.q, polygonB.m_normals[i2]);
    }
    var radius = polygonB.m_radius + edgeA.m_radius;
    manifold.pointCount = 0;
    {
      edgeAxis.type = EPAxisType.e_edgeA;
      edgeAxis.index = front ? 0 : 1;
      edgeAxis.separation = Infinity;
      for (var i2 = 0; i2 < polygonBA.count; ++i2) {
        var v4 = polygonBA.vertices[i2];
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
      for (var i2 = 0; i2 < polygonBA.count; ++i2) {
        scaleVec2(n, -1, polygonBA.normals[i2]);
        var s1 = dotVec2(n, polygonBA.vertices[i2]) - dotVec2(n, v13);
        var s22 = dotVec2(n, polygonBA.vertices[i2]) - dotVec2(n, v23);
        var s2 = math_min(s1, s22);
        if (s2 > radius) {
          polygonAxis.type = EPAxisType.e_edgeB;
          polygonAxis.index = i2;
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
          polygonAxis.index = i2;
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
    ie[0].recycle(), ie[1].recycle();
    if (primaryAxis.type == EPAxisType.e_edgeA) {
      manifold.type = ManifoldType.e_faceA;
      var bestIndex = 0;
      var bestValue = dotVec2(normal, polygonBA.normals[0]);
      for (var i2 = 1; i2 < polygonBA.count; ++i2) {
        var value = dotVec2(normal, polygonBA.normals[i2]);
        if (value < bestValue) {
          bestValue = value;
          bestIndex = i2;
        }
      }
      var i1 = bestIndex;
      var i22 = i1 + 1 < polygonBA.count ? i1 + 1 : 0;
      copyVec2(ie[0].v, polygonBA.vertices[i1]);
      ie[0].id.setFeatures(0, ContactFeatureType.e_face, i1, ContactFeatureType.e_vertex);
      copyVec2(ie[1].v, polygonBA.vertices[i22]);
      ie[1].id.setFeatures(0, ContactFeatureType.e_face, i22, ContactFeatureType.e_vertex);
      if (front) {
        rf.i1 = 0;
        rf.i2 = 1;
        copyVec2(rf.v1, v13);
        copyVec2(rf.v2, v23);
        copyVec2(rf.normal, normal1);
      } else {
        rf.i1 = 1;
        rf.i2 = 0;
        copyVec2(rf.v1, v23);
        copyVec2(rf.v2, v13);
        scaleVec2(rf.normal, -1, normal1);
      }
    } else {
      manifold.type = ManifoldType.e_faceB;
      copyVec2(ie[0].v, v13);
      ie[0].id.setFeatures(0, ContactFeatureType.e_vertex, primaryAxis.index, ContactFeatureType.e_face);
      copyVec2(ie[1].v, v23);
      ie[1].id.setFeatures(0, ContactFeatureType.e_vertex, primaryAxis.index, ContactFeatureType.e_face);
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
    var np1 = clipSegmentToLine(clipPoints1, ie, rf.sideNormal1, rf.sideOffset1, rf.i1);
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
    for (var i2 = 0; i2 < SettingsInternal.maxManifoldPoints; ++i2) {
      var separation = dotVec2(rf.normal, clipPoints2[i2].v) - dotVec2(rf.normal, rf.v1);
      if (separation <= radius) {
        var cp = manifold.points[pointCount];
        if (primaryAxis.type == EPAxisType.e_edgeA) {
          detransformVec2(cp.localPoint, xf, clipPoints2[i2].v);
          cp.id.set(clipPoints2[i2].id);
        } else {
          copyVec2(cp.localPoint, clipPoints2[i2].v);
          cp.id.set(clipPoints2[i2].id);
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
  function planckIntegration(k) {
    world.on("pre-solve", function(contact, oldManifold2) {
      const bodyA = contact.getFixtureA().getBody().getUserData();
      const bodyB = contact.getFixtureB().getBody().getUserData();
      if (bodyA.is("platformEffector") || bodyA.is("surfaceEffector")) {
        bodyA.trigger("collision_pre_solve", bodyB, contact, oldManifold2);
      }
      if (bodyB.is("platformEffector") || bodyB.is("surfaceEffector")) {
        bodyB.trigger("collision_pre_solve", bodyA, contact, oldManifold2);
      }
    });
    return {};
  }
  __name(planckIntegration, "planckIntegration");

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
        var _a26;
        joint = world.createJoint(new DistanceJoint({
          collideConnected: (_a26 = opt.enableCollision) != null ? _a26 : true,
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
        var _a26;
        ground = world.createBody();
        joint = world.createJoint(new MouseJoint({
          collideConnected: (_a26 = opt.enableCollision) != null ? _a26 : true,
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
  function surfaceEffector(opt) {
    var _a26, _b, _c, _d, _e2, _f;
    let forceScale = (_a26 = opt.forceScale) != null ? _a26 : 1;
    let speed = ((_b = opt.speed) != null ? _b : 1) / 10;
    let speedVariation = ((_c = opt.speedVariation) != null ? _c : 0) / 10;
    let useBounce = (_d = opt.useBounce) != null ? _d : true;
    let useContactForce = (_e2 = opt.useContactForce) != null ? _e2 : true;
    let useFriction = (_f = opt.useFriction) != null ? _f : true;
    return {
      id: "surfaceEffector",
      require: ["rigidBody", "collider"],
      add() {
        this.on("collision_pre_solve", (other, contact, oldManifold2) => {
          contact.setTangentSpeed(speed + (Math.random() - 0.5) * speedVariation);
          if (!useBounce) {
            contact.setRestitution(0);
          }
          if (!useFriction) {
            contact.setFriction(0);
          }
        });
      },
      get forceScale() {
        return forceScale;
      },
      set forceScale(value) {
        forceScale = value;
      },
      get speed() {
        return speed;
      },
      set speed(value) {
        speed = value;
      },
      get speedVariation() {
        return speedVariation;
      },
      set speedVariation(value) {
        speedVariation = value;
      },
      get useBounce() {
        return useBounce;
      },
      set useBounce(value) {
        useBounce = value;
      },
      get useContactForce() {
        return useContactForce;
      },
      set useContactForce(value) {
        useContactForce = value;
      },
      get useFriction() {
        return useFriction;
      },
      set useFriction(value) {
        useFriction = value;
      }
    };
  }
  __name(surfaceEffector, "surfaceEffector");

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
          linearDamping: opt.linearDrag || 0,
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
      get angularDrag() {
        return _body ? _body.getAngularDamping() : 0;
      },
      set angularDrag(value) {
        _body.setAngularDamping(value);
      },
      get angularVelocity() {
        return _body ? _body.getAngularVelocity() : 0;
      },
      set angularVelocity(value) {
        _body.setAngularVelocity(value);
      },
      get attachedColliderCount() {
        return 1;
      },
      get bodyType() {
        return _body.getType();
      },
      get centerOfMass() {
        return p2k(_body.getLocalCenter());
      },
      get collisionDetectionMode() {
        return _body.isBullet() ? "continuous" : "discrete";
      },
      get linearDrag() {
        return _body.getLinearDamping();
      },
      set linearDrag(value) {
        _body.setLinearDamping(value);
      },
      get freezeRotation() {
        return _body.isFixedRotation();
      },
      set freezeRotation(value) {
        _body.setFixedRotation(value);
      },
      get gravityScale() {
        return _body.getGravityScale();
      },
      set gravityScale(value) {
        _body.setGravityScale(value);
      },
      get inertia() {
        return _body.getInertia();
      },
      get isKinematic() {
        return _body.isKinematic();
      },
      get mass() {
        return _body.getMass();
      },
      get position() {
        return p2k(_body.getPosition());
      },
      get rotation() {
        return _body.getAngle();
      },
      get simulated() {
        return _body.isActive();
      },
      set simulated(value) {
        _body.setActive(value);
      },
      get totalForce() {
        return vec2();
      },
      get totalTorque() {
        return 0;
      },
      get velocity() {
        return p2k(_body.getLinearVelocity());
      },
      set velocity(value) {
        _body.setLinearVelocity(k2p(value));
      },
      get worldCenterOfMass() {
        return p2k(_body.getWorldCenter());
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
  zo({
    plugins: [planckIntegration]
  });
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
    circleCollider({ radius: 25, friction: 0.5 })
  ]);
  add([
    rect(300, 40),
    anchor("center"),
    pos(200, 300),
    rotate(0),
    rigidBody({ type: "static" }),
    collider({ friction: 0.5 }),
    surfaceEffector({ speed: 100 })
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
 * Planck.js v1.0.0
 * @license The MIT license
 * @copyright Copyright (c) 2023 Erin Catto, Ali Shakiba
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
