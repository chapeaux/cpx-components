function e(t) {
    return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e1) {
        return typeof e1;
    } : function(e1) {
        return e1 && "function" == typeof Symbol && e1.constructor === Symbol && e1 !== Symbol.prototype ? "symbol" : typeof e1;
    })(t);
}
function t28(e1, t1) {
    if (!(e1 instanceof t1)) throw new TypeError("Cannot call a class as a function");
}
function n55(e1, t1) {
    for(var n1 = 0; n1 < t1.length; n1++){
        var r = t1[n1];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e1, r.key, r);
    }
}
function r84(e1, t1, r1) {
    return t1 && n55(e1.prototype, t1), r1 && n55(e1, r1), e1;
}
function i22(e1, t1, n1) {
    return t1 in e1 ? Object.defineProperty(e1, t1, {
        value: n1,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e1[t1] = n1, e1;
}
function a22(e1, t1) {
    return (function(e2) {
        if (Array.isArray(e2)) return e2;
    })(e1) || (function(e2, t2) {
        var n1 = [], r1 = !0, i1 = !1, a1 = void 0;
        try {
            for(var o, s = e2[Symbol.iterator](); !(r1 = (o = s.next()).done) && (n1.push(o.value), !t2 || n1.length !== t2); r1 = !0);
        } catch (e3) {
            i1 = !0, a1 = e3;
        } finally{
            try {
                r1 || null == s.return || s.return();
            } finally{
                if (i1) throw a1;
            }
        }
        return n1;
    })(e1, t1) || (function() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
    })();
}
var o = "undefined" == typeof window ? null : window, s = o ? o.navigator : null, l45 = (o && o.document, e("")), u52 = e({
}), c = e(function() {
}), d67 = "undefined" == typeof HTMLElement ? "undefined" : e(HTMLElement), h = function(e1) {
    return e1 && e1.instanceString && f(e1.instanceString) ? e1.instanceString() : null;
}, p = function(t1) {
    return null != t1 && e(t1) == l45;
}, f = function(t1) {
    return null != t1 && e(t1) === c;
}, g25 = function(e1) {
    return !b1(e1) && (Array.isArray ? Array.isArray(e1) : null != e1 && e1 instanceof Array);
}, v1 = function(t1) {
    return null != t1 && e(t1) === u52 && !g25(t1) && t1.constructor === Object;
}, y1 = function(t1) {
    return null != t1 && e(t1) === e(1) && !isNaN(t1);
}, m24 = function(e1) {
    return "undefined" === d67 ? void 0 : null != e1 && e1 instanceof HTMLElement;
}, b1 = function(e1) {
    return x(e1) || w(e1);
}, x = function(e1) {
    return "collection" === h(e1) && e1._private.single;
}, w = function(e1) {
    return "collection" === h(e1) && !e1._private.single;
}, E = function(e1) {
    return "core" === h(e1);
}, k = function(e1) {
    return "stylesheet" === h(e1);
}, C = function(e1) {
    return null == e1 || !("" !== e1 && !e1.match(/^\s+$/));
}, S19 = function(t1) {
    return (function(t2) {
        return null != t2 && e(t2) === u52;
    })(t1) && f(t1.then);
}, P21 = function(e1, t1) {
    t1 || (t1 = function() {
        if (1 === arguments.length) return arguments[0];
        if (0 === arguments.length) return "undefined";
        for(var e2 = [], t2 = 0; t2 < arguments.length; t2++)e2.push(arguments[t2]);
        return e2.join("$");
    });
    var n1 = function n2() {
        var r1, i1 = this, a1 = arguments, o1 = t1.apply(i1, a1), s1 = n2.cache;
        return (r1 = s1[o1]) || (r1 = s1[o1] = e1.apply(i1, a1)), r1;
    };
    return n1.cache = {
    }, n1;
}, D = P21(function(e1) {
    return e1.replace(/([A-Z])/g, function(e2) {
        return "-" + e2.toLowerCase();
    });
}), T = P21(function(e1) {
    return e1.replace(/(-\w)/g, function(e2) {
        return e2[1].toUpperCase();
    });
}), M = P21(function(e1, t1) {
    return e1 + t1[0].toUpperCase() + t1.substring(1);
}, function(e1, t1) {
    return e1 + "$" + t1;
}), B = function(e1) {
    return C(e1) ? e1 : e1.charAt(0).toUpperCase() + e1.substring(1);
}, _ = "(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))", N = function(e1, t1) {
    return e1 < t1 ? -1 : e1 > t1 ? 1 : 0;
}, I10 = null != Object.assign ? Object.assign.bind(Object) : function(e1) {
    for(var t1 = arguments, n1 = 1; n1 < t1.length; n1++){
        var r1 = t1[n1];
        if (null != r1) for(var i1 = Object.keys(r1), a1 = 0; a1 < i1.length; a1++){
            var o1 = i1[a1];
            e1[o1] = r1[o1];
        }
    }
    return e1;
}, z = function(e1) {
    return (g25(e1) ? e1 : null) || (function(e2) {
        return L[e2.toLowerCase()];
    })(e1) || (function(e2) {
        if ((4 === e2.length || 7 === e2.length) && "#" === e2[0]) {
            var t1, n1, r2;
            return 4 === e2.length ? (t1 = parseInt(e2[1] + e2[1], 16), n1 = parseInt(e2[2] + e2[2], 16), r2 = parseInt(e2[3] + e2[3], 16)) : (t1 = parseInt(e2[1] + e2[2], 16), n1 = parseInt(e2[3] + e2[4], 16), r2 = parseInt(e2[5] + e2[6], 16)), [
                t1,
                n1,
                r2
            ];
        }
    })(e1) || (function(e2) {
        var t2, n2 = new RegExp("^rgb[a]?\\(((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%]?)\\s*,\\s*((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%]?)\\s*,\\s*((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%]?)(?:\\s*,\\s*((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))))?\\)$").exec(e2);
        if (n2) {
            t2 = [];
            for(var r3 = [], i2 = 1; i2 <= 3; i2++){
                var a2 = n2[i2];
                if ("%" === a2[a2.length - 1] && (r3[i2] = !0), a2 = parseFloat(a2), r3[i2] && (a2 = a2 / 100 * 255), a2 < 0 || a2 > 255) return;
                t2.push(Math.floor(a2));
            }
            var o2 = r3[1] || r3[2] || r3[3], s1 = r3[1] && r3[2] && r3[3];
            if (o2 && !s1) return;
            var l1 = n2[4];
            if ((void 0) !== l1) {
                if ((l1 = parseFloat(l1)) < 0 || l1 > 1) return;
                t2.push(l1);
            }
        }
        return t2;
    })(e1) || (function(e2) {
        var t2, n2, r4, i3, a3, o3, s2, l2;
        function u1(e3, t3, n3) {
            return n3 < 0 && (n3 += 1), n3 > 1 && (n3 -= 1), n3 < 1 / 6 ? e3 + 6 * (t3 - e3) * n3 : n3 < 0.5 ? t3 : n3 < 2 / 3 ? e3 + (t3 - e3) * (2 / 3 - n3) * 6 : e3;
        }
        var c1 = new RegExp("^hsl[a]?\\(((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?)))\\s*,\\s*((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%])\\s*,\\s*((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%])(?:\\s*,\\s*((?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))))?\\)$").exec(e2);
        if (c1) {
            if ((n2 = parseInt(c1[1])) < 0 ? n2 = (360 - -1 * n2 % 360) % 360 : n2 > 360 && (n2 %= 360), n2 /= 360, (r4 = parseFloat(c1[2])) < 0 || r4 > 100) return;
            if (r4 /= 100, (i3 = parseFloat(c1[3])) < 0 || i3 > 100) return;
            if (i3 /= 100, (void 0) !== (a3 = c1[4]) && ((a3 = parseFloat(a3)) < 0 || a3 > 1)) return;
            if (0 === r4) o3 = s2 = l2 = Math.round(255 * i3);
            else {
                var d1 = i3 < 0.5 ? i3 * (1 + r4) : i3 + r4 - i3 * r4, h1 = 2 * i3 - d1;
                o3 = Math.round(255 * u1(h1, d1, n2 + 1 / 3)), s2 = Math.round(255 * u1(h1, d1, n2)), l2 = Math.round(255 * u1(h1, d1, n2 - 1 / 3));
            }
            t2 = [
                o3,
                s2,
                l2,
                a3
            ];
        }
        return t2;
    })(e1);
}, L = {
    transparent: [
        0,
        0,
        0,
        0
    ],
    aliceblue: [
        240,
        248,
        255
    ],
    antiquewhite: [
        250,
        235,
        215
    ],
    aqua: [
        0,
        255,
        255
    ],
    aquamarine: [
        127,
        255,
        212
    ],
    azure: [
        240,
        255,
        255
    ],
    beige: [
        245,
        245,
        220
    ],
    bisque: [
        255,
        228,
        196
    ],
    black: [
        0,
        0,
        0
    ],
    blanchedalmond: [
        255,
        235,
        205
    ],
    blue: [
        0,
        0,
        255
    ],
    blueviolet: [
        138,
        43,
        226
    ],
    brown: [
        165,
        42,
        42
    ],
    burlywood: [
        222,
        184,
        135
    ],
    cadetblue: [
        95,
        158,
        160
    ],
    chartreuse: [
        127,
        255,
        0
    ],
    chocolate: [
        210,
        105,
        30
    ],
    coral: [
        255,
        127,
        80
    ],
    cornflowerblue: [
        100,
        149,
        237
    ],
    cornsilk: [
        255,
        248,
        220
    ],
    crimson: [
        220,
        20,
        60
    ],
    cyan: [
        0,
        255,
        255
    ],
    darkblue: [
        0,
        0,
        139
    ],
    darkcyan: [
        0,
        139,
        139
    ],
    darkgoldenrod: [
        184,
        134,
        11
    ],
    darkgray: [
        169,
        169,
        169
    ],
    darkgreen: [
        0,
        100,
        0
    ],
    darkgrey: [
        169,
        169,
        169
    ],
    darkkhaki: [
        189,
        183,
        107
    ],
    darkmagenta: [
        139,
        0,
        139
    ],
    darkolivegreen: [
        85,
        107,
        47
    ],
    darkorange: [
        255,
        140,
        0
    ],
    darkorchid: [
        153,
        50,
        204
    ],
    darkred: [
        139,
        0,
        0
    ],
    darksalmon: [
        233,
        150,
        122
    ],
    darkseagreen: [
        143,
        188,
        143
    ],
    darkslateblue: [
        72,
        61,
        139
    ],
    darkslategray: [
        47,
        79,
        79
    ],
    darkslategrey: [
        47,
        79,
        79
    ],
    darkturquoise: [
        0,
        206,
        209
    ],
    darkviolet: [
        148,
        0,
        211
    ],
    deeppink: [
        255,
        20,
        147
    ],
    deepskyblue: [
        0,
        191,
        255
    ],
    dimgray: [
        105,
        105,
        105
    ],
    dimgrey: [
        105,
        105,
        105
    ],
    dodgerblue: [
        30,
        144,
        255
    ],
    firebrick: [
        178,
        34,
        34
    ],
    floralwhite: [
        255,
        250,
        240
    ],
    forestgreen: [
        34,
        139,
        34
    ],
    fuchsia: [
        255,
        0,
        255
    ],
    gainsboro: [
        220,
        220,
        220
    ],
    ghostwhite: [
        248,
        248,
        255
    ],
    gold: [
        255,
        215,
        0
    ],
    goldenrod: [
        218,
        165,
        32
    ],
    gray: [
        128,
        128,
        128
    ],
    grey: [
        128,
        128,
        128
    ],
    green: [
        0,
        128,
        0
    ],
    greenyellow: [
        173,
        255,
        47
    ],
    honeydew: [
        240,
        255,
        240
    ],
    hotpink: [
        255,
        105,
        180
    ],
    indianred: [
        205,
        92,
        92
    ],
    indigo: [
        75,
        0,
        130
    ],
    ivory: [
        255,
        255,
        240
    ],
    khaki: [
        240,
        230,
        140
    ],
    lavender: [
        230,
        230,
        250
    ],
    lavenderblush: [
        255,
        240,
        245
    ],
    lawngreen: [
        124,
        252,
        0
    ],
    lemonchiffon: [
        255,
        250,
        205
    ],
    lightblue: [
        173,
        216,
        230
    ],
    lightcoral: [
        240,
        128,
        128
    ],
    lightcyan: [
        224,
        255,
        255
    ],
    lightgoldenrodyellow: [
        250,
        250,
        210
    ],
    lightgray: [
        211,
        211,
        211
    ],
    lightgreen: [
        144,
        238,
        144
    ],
    lightgrey: [
        211,
        211,
        211
    ],
    lightpink: [
        255,
        182,
        193
    ],
    lightsalmon: [
        255,
        160,
        122
    ],
    lightseagreen: [
        32,
        178,
        170
    ],
    lightskyblue: [
        135,
        206,
        250
    ],
    lightslategray: [
        119,
        136,
        153
    ],
    lightslategrey: [
        119,
        136,
        153
    ],
    lightsteelblue: [
        176,
        196,
        222
    ],
    lightyellow: [
        255,
        255,
        224
    ],
    lime: [
        0,
        255,
        0
    ],
    limegreen: [
        50,
        205,
        50
    ],
    linen: [
        250,
        240,
        230
    ],
    magenta: [
        255,
        0,
        255
    ],
    maroon: [
        128,
        0,
        0
    ],
    mediumaquamarine: [
        102,
        205,
        170
    ],
    mediumblue: [
        0,
        0,
        205
    ],
    mediumorchid: [
        186,
        85,
        211
    ],
    mediumpurple: [
        147,
        112,
        219
    ],
    mediumseagreen: [
        60,
        179,
        113
    ],
    mediumslateblue: [
        123,
        104,
        238
    ],
    mediumspringgreen: [
        0,
        250,
        154
    ],
    mediumturquoise: [
        72,
        209,
        204
    ],
    mediumvioletred: [
        199,
        21,
        133
    ],
    midnightblue: [
        25,
        25,
        112
    ],
    mintcream: [
        245,
        255,
        250
    ],
    mistyrose: [
        255,
        228,
        225
    ],
    moccasin: [
        255,
        228,
        181
    ],
    navajowhite: [
        255,
        222,
        173
    ],
    navy: [
        0,
        0,
        128
    ],
    oldlace: [
        253,
        245,
        230
    ],
    olive: [
        128,
        128,
        0
    ],
    olivedrab: [
        107,
        142,
        35
    ],
    orange: [
        255,
        165,
        0
    ],
    orangered: [
        255,
        69,
        0
    ],
    orchid: [
        218,
        112,
        214
    ],
    palegoldenrod: [
        238,
        232,
        170
    ],
    palegreen: [
        152,
        251,
        152
    ],
    paleturquoise: [
        175,
        238,
        238
    ],
    palevioletred: [
        219,
        112,
        147
    ],
    papayawhip: [
        255,
        239,
        213
    ],
    peachpuff: [
        255,
        218,
        185
    ],
    peru: [
        205,
        133,
        63
    ],
    pink: [
        255,
        192,
        203
    ],
    plum: [
        221,
        160,
        221
    ],
    powderblue: [
        176,
        224,
        230
    ],
    purple: [
        128,
        0,
        128
    ],
    red: [
        255,
        0,
        0
    ],
    rosybrown: [
        188,
        143,
        143
    ],
    royalblue: [
        65,
        105,
        225
    ],
    saddlebrown: [
        139,
        69,
        19
    ],
    salmon: [
        250,
        128,
        114
    ],
    sandybrown: [
        244,
        164,
        96
    ],
    seagreen: [
        46,
        139,
        87
    ],
    seashell: [
        255,
        245,
        238
    ],
    sienna: [
        160,
        82,
        45
    ],
    silver: [
        192,
        192,
        192
    ],
    skyblue: [
        135,
        206,
        235
    ],
    slateblue: [
        106,
        90,
        205
    ],
    slategray: [
        112,
        128,
        144
    ],
    slategrey: [
        112,
        128,
        144
    ],
    snow: [
        255,
        250,
        250
    ],
    springgreen: [
        0,
        255,
        127
    ],
    steelblue: [
        70,
        130,
        180
    ],
    tan: [
        210,
        180,
        140
    ],
    teal: [
        0,
        128,
        128
    ],
    thistle: [
        216,
        191,
        216
    ],
    tomato: [
        255,
        99,
        71
    ],
    turquoise: [
        64,
        224,
        208
    ],
    violet: [
        238,
        130,
        238
    ],
    wheat: [
        245,
        222,
        179
    ],
    white: [
        255,
        255,
        255
    ],
    whitesmoke: [
        245,
        245,
        245
    ],
    yellow: [
        255,
        255,
        0
    ],
    yellowgreen: [
        154,
        205,
        50
    ]
}, A = function(e1) {
    for(var t2 = e1.map, n2 = e1.keys, r4 = n2.length, i3 = 0; i3 < r4; i3++){
        var a3 = n2[i3];
        if (v1(a3)) throw Error("Tried to set map with object key");
        i3 < n2.length - 1 ? (null == t2[a3] && (t2[a3] = {
        }), t2 = t2[a3]) : t2[a3] = e1.value;
    }
}, O = function(e1) {
    for(var t2 = e1.map, n2 = e1.keys, r4 = n2.length, i3 = 0; i3 < r4; i3++){
        var a4 = n2[i3];
        if (v1(a4)) throw Error("Tried to get map with object key");
        if (null == (t2 = t2[a4])) return t2;
    }
    return t2;
}, R = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {
};
var V = /^\s+|\s+$/g, F = /^[-+]0x[0-9a-f]+$/i, q = /^0b[01]+$/i, j = /^0o[0-7]+$/i, Y = parseInt, X = "object" == typeof R && R && R.Object === Object && R, W = "object" == typeof self && self && self.Object === Object && self, H = X || W || Function("return this")(), K = Object.prototype.toString, G = Math.max, Z = Math.min, U = function() {
    return H.Date.now();
};
function $(e1) {
    var t2 = typeof e1;
    return !!e1 && ("object" == t2 || "function" == t2);
}
function Q(e1) {
    if ("number" == typeof e1) return e1;
    if ((function(e2) {
        return "symbol" == typeof e2 || (function(e3) {
            return !!e3 && "object" == typeof e3;
        })(e2) && "[object Symbol]" == K.call(e2);
    })(e1)) return NaN;
    if ($(e1)) {
        var t2 = "function" == typeof e1.valueOf ? e1.valueOf() : e1;
        e1 = $(t2) ? t2 + "" : t2;
    }
    if ("string" != typeof e1) return 0 === e1 ? e1 : +e1;
    e1 = e1.replace(V, "");
    var n2 = q.test(e1);
    return n2 || j.test(e1) ? Y(e1.slice(2), n2 ? 2 : 8) : F.test(e1) ? NaN : +e1;
}
var J = function(e1, t3, n2) {
    var r4, i3, a5, o3, s2, l2, u1 = 0, c1 = !1, d2 = !1, h2 = !0;
    if ("function" != typeof e1) throw new TypeError("Expected a function");
    function p1(t4) {
        var n3 = r4, a6 = i3;
        return r4 = i3 = void 0, u1 = t4, o3 = e1.apply(a6, n3);
    }
    function f1(e2) {
        return u1 = e2, s2 = setTimeout(v2, t3), c1 ? p1(e2) : o3;
    }
    function g1(e2) {
        var n3 = e2 - l2;
        return (void 0) === l2 || n3 >= t3 || n3 < 0 || d2 && e2 - u1 >= a5;
    }
    function v2() {
        var e2 = U();
        if (g1(e2)) return y2(e2);
        s2 = setTimeout(v2, function(e3) {
            var n3 = t3 - (e3 - l2);
            return d2 ? Z(n3, a5 - (e3 - u1)) : n3;
        }(e2));
    }
    function y2(e2) {
        return s2 = void 0, h2 && r4 ? p1(e2) : (r4 = i3 = void 0, o3);
    }
    function m1() {
        var e2 = U(), n3 = g1(e2);
        if (r4 = arguments, i3 = this, l2 = e2, n3) {
            if ((void 0) === s2) return f1(l2);
            if (d2) return s2 = setTimeout(v2, t3), p1(l2);
        }
        return (void 0) === s2 && (s2 = setTimeout(v2, t3)), o3;
    }
    return t3 = Q(t3) || 0, $(n2) && (c1 = !!n2.leading, a5 = (d2 = "maxWait" in n2) ? G(Q(n2.maxWait) || 0, t3) : a5, h2 = "trailing" in n2 ? !!n2.trailing : h2), m1.cancel = function() {
        (void 0) !== s2 && clearTimeout(s2), u1 = 0, r4 = l2 = i3 = s2 = void 0;
    }, m1.flush = function() {
        return (void 0) === s2 ? o3 : y2(U());
    }, m1;
}, ee3 = o ? o.performance : null, te = ee3 && ee3.now ? function() {
    return ee3.now();
} : function() {
    return Date.now();
}, ne = function() {
    if (o) {
        if (o.requestAnimationFrame) return function(e1) {
            o.requestAnimationFrame(e1);
        };
        if (o.mozRequestAnimationFrame) return function(e1) {
            o.mozRequestAnimationFrame(e1);
        };
        if (o.webkitRequestAnimationFrame) return function(e1) {
            o.webkitRequestAnimationFrame(e1);
        };
        if (o.msRequestAnimationFrame) return function(e1) {
            o.msRequestAnimationFrame(e1);
        };
    }
    return function(e1) {
        e1 && setTimeout(function() {
            e1(te());
        }, 1000 / 60);
    };
}(), re = function(e1) {
    return ne(e1);
}, ie = te, ae2 = 65599, oe = function(e1) {
    for(var t3, n2 = arguments.length > 1 && (void 0) !== arguments[1] ? arguments[1] : 9261, r4 = n2; !(t3 = e1.next()).done;)r4 = r4 * ae2 + t3.value | 0;
    return r4;
}, se = function(e1) {
    var t3 = arguments.length > 1 && (void 0) !== arguments[1] ? arguments[1] : 9261;
    return t3 * ae2 + e1 | 0;
}, le = function(e1) {
    var t3 = arguments.length > 1 && (void 0) !== arguments[1] ? arguments[1] : 5381;
    return (t3 << 5) + t3 + e1 | 0;
}, ue = function(e1) {
    return 2097152 * e1[0] + e1[1];
}, ce = function(e1, t3) {
    return [
        se(e1[0], t3[0]),
        le(e1[1], t3[1])
    ];
}, de = function(e1, t3) {
    var n2 = {
        value: 0,
        done: !1
    }, r4 = 0, i3 = e1.length;
    return oe({
        next: function() {
            return r4 < i3 ? n2.value = e1.charCodeAt(r4++) : n2.done = !0, n2;
        }
    }, t3);
}, he = function() {
    return pe(arguments);
}, pe = function(e1) {
    for(var t3, n2 = 0; n2 < e1.length; n2++){
        var r4 = e1[n2];
        t3 = 0 === n2 ? de(r4) : de(r4, t3);
    }
    return t3;
}, fe = !0, ge = null != console.warn, ve = null != console.trace, ye = Number.MAX_SAFE_INTEGER || 9007199254740991, me = function() {
    return !0;
}, be = function() {
    return !1;
}, xe = function() {
    return 0;
}, we = function() {
}, Ee = function(e1) {
    throw new Error(e1);
}, ke = function(e1) {
    if ((void 0) === e1) return fe;
    fe = !!e1;
}, Ce = function(e1) {
    ke() && (ge ? console.warn(e1) : (console.log(e1), ve && console.trace()));
}, Se = function(e1) {
    return null == e1 ? e1 : g25(e1) ? e1.slice() : v1(e1) ? (function(e2) {
        return I10({
        }, e2);
    })(e1) : e1;
}, Pe = function(e1, t3) {
    for(t3 = e1 = ""; (e1++) < 36; t3 += 51 * e1 & 52 ? (15 ^ e1 ? 8 ^ Math.random() * (20 ^ e1 ? 16 : 4) : 4).toString(16) : "-");
    return t3;
}, De = {
}, Te = function() {
    return De;
}, Me = function(e1) {
    var t3 = Object.keys(e1);
    return function(n2) {
        for(var r5 = {
        }, i3 = 0; i3 < t3.length; i3++){
            var a5 = t3[i3], o3 = null == n2 ? void 0 : n2[a5];
            r5[a5] = (void 0) === o3 ? e1[a5] : o3;
        }
        return r5;
    };
}, Be = function(e1, t3, n2) {
    for(var r5 = e1.length - 1; r5 >= 0 && (e1[r5] !== t3 || (e1.splice(r5, 1), !n2)); r5--);
}, _e = function(e1) {
    e1.splice(0, e1.length);
}, Ne = function(e1, t3, n2) {
    return n2 && (t3 = M(n2, t3)), e1[t3];
}, Ie = function(e1, t3, n2, r5) {
    n2 && (t3 = M(n2, t3)), e1[t3] = r5;
}, ze = "undefined" != typeof Map ? Map : function() {
    function e1() {
        t28(this, e1), this._obj = {
        };
    }
    return r84(e1, [
        {
            key: "set",
            value: function(e2, t3) {
                return this._obj[e2] = t3, this;
            }
        },
        {
            key: "delete",
            value: function(e2) {
                return this._obj[e2] = void 0, this;
            }
        },
        {
            key: "clear",
            value: function() {
                this._obj = {
                };
            }
        },
        {
            key: "has",
            value: function(e2) {
                return (void 0) !== this._obj[e2];
            }
        },
        {
            key: "get",
            value: function(e2) {
                return this._obj[e2];
            }
        }
    ]), e1;
}(), Le = function() {
    function e1(n2) {
        if (t28(this, e1), this._obj = Object.create(null), this.size = 0, null != n2) {
            var r5;
            r5 = null != n2.instanceString && n2.instanceString() === this.instanceString() ? n2.toArray() : n2;
            for(var i3 = 0; i3 < r5.length; i3++)this.add(r5[i3]);
        }
    }
    return r84(e1, [
        {
            key: "instanceString",
            value: function() {
                return "set";
            }
        },
        {
            key: "add",
            value: function(e2) {
                var t3 = this._obj;
                1 !== t3[e2] && (t3[e2] = 1, this.size++);
            }
        },
        {
            key: "delete",
            value: function(e2) {
                var t3 = this._obj;
                1 === t3[e2] && (t3[e2] = 0, this.size--);
            }
        },
        {
            key: "clear",
            value: function() {
                this._obj = Object.create(null);
            }
        },
        {
            key: "has",
            value: function(e2) {
                return 1 === this._obj[e2];
            }
        },
        {
            key: "toArray",
            value: function() {
                var e2 = this;
                return Object.keys(this._obj).filter(function(t3) {
                    return e2.has(t3);
                });
            }
        },
        {
            key: "forEach",
            value: function(e2, t3) {
                return this.toArray().forEach(e2, t3);
            }
        }
    ]), e1;
}(), Ae = "undefined" !== ("undefined" == typeof Set ? "undefined" : e(Set)) ? Set : Le, Oe = function(e1, t3) {
    var n2 = !(arguments.length > 2 && (void 0) !== arguments[2]) || arguments[2];
    if ((void 0) !== e1 && (void 0) !== t3 && E(e1)) {
        var r6 = t3.group;
        if (null == r6 && (r6 = t3.data && null != t3.data.source && null != t3.data.target ? "edges" : "nodes"), "nodes" === r6 || "edges" === r6) {
            this.length = 1, this[0] = this;
            var i4 = this._private = {
                cy: e1,
                single: !0,
                data: t3.data || {
                },
                position: t3.position || {
                    x: 0,
                    y: 0
                },
                autoWidth: void 0,
                autoHeight: void 0,
                autoPadding: void 0,
                compoundBoundsClean: !1,
                listeners: [],
                group: r6,
                style: {
                },
                rstyle: {
                },
                styleCxts: [],
                styleKeys: {
                },
                removed: !0,
                selected: !!t3.selected,
                selectable: (void 0) === t3.selectable || !!t3.selectable,
                locked: !!t3.locked,
                grabbed: !1,
                grabbable: (void 0) === t3.grabbable || !!t3.grabbable,
                pannable: (void 0) === t3.pannable ? "edges" === r6 : !!t3.pannable,
                active: !1,
                classes: new Ae,
                animation: {
                    current: [],
                    queue: []
                },
                rscratch: {
                },
                scratch: t3.scratch || {
                },
                edges: [],
                children: [],
                parent: null,
                traversalCache: {
                },
                backgrounding: !1,
                bbCache: null,
                bbCacheShift: {
                    x: 0,
                    y: 0
                },
                bodyBounds: null,
                overlayBounds: null,
                labelBounds: {
                    all: null,
                    source: null,
                    target: null,
                    main: null
                },
                arrowBounds: {
                    source: null,
                    target: null,
                    "mid-source": null,
                    "mid-target": null
                }
            };
            if (null == i4.position.x && (i4.position.x = 0), null == i4.position.y && (i4.position.y = 0), t3.renderedPosition) {
                var a6 = t3.renderedPosition, o4 = e1.pan(), s2 = e1.zoom();
                i4.position = {
                    x: (a6.x - o4.x) / s2,
                    y: (a6.y - o4.y) / s2
                };
            }
            var l2 = [];
            g25(t3.classes) ? l2 = t3.classes : p(t3.classes) && (l2 = t3.classes.split(/\s+/));
            for(var u1 = 0, c1 = l2.length; u1 < c1; u1++){
                var d2 = l2[u1];
                d2 && "" !== d2 && i4.classes.add(d2);
            }
            this.createEmitter();
            var h2 = t3.style || t3.css;
            h2 && (Ce("Setting a `style` bypass at element creation should be done only when absolutely necessary.  Try to use the stylesheet instead."), this.style(h2)), ((void 0) === n2 || n2) && this.restore();
        } else Ee("An element must be of type `nodes` or `edges`; you specified `" + r6 + "`");
    } else Ee("An element must have a core reference and parameters set");
}, Re = function(e1) {
    return e1 = {
        bfs: e1.bfs || !e1.dfs,
        dfs: e1.dfs || !e1.bfs
    }, function(t3, n2, r7) {
        var i5;
        v1(t3) && !b1(t3) && (t3 = (i5 = t3).roots || i5.root, n2 = i5.visit, r7 = i5.directed), r7 = 2 !== arguments.length || f(n2) ? r7 : n2, n2 = f(n2) ? n2 : function() {
        };
        for(var a7, o5 = this._private.cy, s3 = t3 = p(t3) ? this.filter(t3) : t3, l3 = [], u2 = [], c2 = {
        }, d3 = {
        }, h3 = {
        }, g1 = 0, y2 = this.byGroup(), m1 = y2.nodes, x1 = y2.edges, w1 = 0; w1 < s3.length; w1++){
            var E1 = s3[w1], k1 = E1.id();
            E1.isNode() && (l3.unshift(E1), e1.bfs && (h3[k1] = !0, u2.push(E1)), d3[k1] = 0);
        }
        var C1 = function() {
            var t4 = e1.bfs ? l3.shift() : l3.pop(), i6 = t4.id();
            if (e1.dfs) {
                if (h3[i6]) return "continue";
                h3[i6] = !0, u2.push(t4);
            }
            var o6, s4 = d3[i6], p1 = c2[i6], f1 = null != p1 ? p1.source() : null, v2 = null != p1 ? p1.target() : null, y3 = null == p1 ? void 0 : t4.same(f1) ? v2[0] : f1[0];
            if (!0 === (o6 = n2(t4, p1, y3, g1++, s4))) return a7 = t4, "break";
            if (!1 === o6) return "break";
            for(var b1 = t4.connectedEdges().filter(function(e2) {
                return (!r7 || e2.source().same(t4)) && x1.has(e2);
            }), w2 = 0; w2 < b1.length; w2++){
                var E2 = b1[w2], k2 = E2.connectedNodes().filter(function(e2) {
                    return !e2.same(t4) && m1.has(e2);
                }), C2 = k2.id();
                0 === k2.length || h3[C2] || (k2 = k2[0], l3.push(k2), e1.bfs && (h3[C2] = !0, u2.push(k2)), c2[C2] = E2, d3[C2] = d3[i6] + 1);
            }
        };
        e: for(; 0 !== l3.length;){
            var S1 = C1();
            switch(S1){
                case "continue": continue;
                case "break": break e;
            }
        }
        for(var P1 = o5.collection(), D1 = 0; D1 < u2.length; D1++){
            var T1 = u2[D1], M1 = c2[T1.id()];
            null != M1 && P1.push(M1), P1.push(T1);
        }
        return {
            path: o5.collection(P1),
            found: o5.collection(a7)
        };
    };
}, Ve = {
    breadthFirstSearch: Re({
        bfs: !0
    }),
    depthFirstSearch: Re({
        dfs: !0
    })
};
Ve.bfs = Ve.breadthFirstSearch, Ve.dfs = Ve.depthFirstSearch;
var Fe = function(e1, t3) {
    return e1(t3 = {
        exports: {
        }
    }, t3.exports), t3.exports;
}(function(e1, t3) {
    (function() {
        var t4, n2, r7, i5, a7, o5, s3, l3, u2, c2, d3, h3, p1, f1, g1;
        r7 = Math.floor, c2 = Math.min, n2 = function(e2, t5) {
            return e2 < t5 ? -1 : e2 > t5 ? 1 : 0;
        }, u2 = function(e2, t5, i6, a8, o6) {
            var s4;
            if (null == i6 && (i6 = 0), null == o6 && (o6 = n2), i6 < 0) throw new Error("lo must be non-negative");
            for(null == a8 && (a8 = e2.length); i6 < a8;)o6(t5, e2[s4 = r7((i6 + a8) / 2)]) < 0 ? a8 = s4 : i6 = s4 + 1;
            return [].splice.apply(e2, [
                i6,
                i6 - i6
            ].concat(t5)), t5;
        }, o5 = function(e2, t5, r8) {
            return null == r8 && (r8 = n2), e2.push(t5), f1(e2, 0, e2.length - 1, r8);
        }, a7 = function(e2, t5) {
            var r8, i6;
            return null == t5 && (t5 = n2), r8 = e2.pop(), e2.length ? (i6 = e2[0], e2[0] = r8, g1(e2, 0, t5)) : i6 = r8, i6;
        }, l3 = function(e2, t5, r8) {
            var i6;
            return null == r8 && (r8 = n2), i6 = e2[0], e2[0] = t5, g1(e2, 0, r8), i6;
        }, s3 = function(e2, t5, r8) {
            var i6;
            return null == r8 && (r8 = n2), e2.length && r8(e2[0], t5) < 0 && (t5 = (i6 = [
                e2[0],
                t5
            ])[0], e2[0] = i6[1], g1(e2, 0, r8)), t5;
        }, i5 = function(e2, t5) {
            var i6, a8, o6, s4, l4, u3;
            for(null == t5 && (t5 = n2), l4 = [], a8 = 0, o6 = (s4 = (function() {
                u3 = [];
                for(var t6 = 0, n3 = r7(e2.length / 2); 0 <= n3 ? t6 < n3 : t6 > n3; 0 <= n3 ? t6++ : t6--)u3.push(t6);
                return u3;
            }).apply(this).reverse()).length; a8 < o6; a8++)i6 = s4[a8], l4.push(g1(e2, i6, t5));
            return l4;
        }, p1 = function(e2, t5, r8) {
            var i6;
            if (null == r8 && (r8 = n2), -1 !== (i6 = e2.indexOf(t5))) return f1(e2, 0, i6, r8), g1(e2, i6, r8);
        }, d3 = function(e2, t5, r8) {
            var a8, o6, l4, u3, c3;
            if (null == r8 && (r8 = n2), !(o6 = e2.slice(0, t5)).length) return o6;
            for(i5(o6, r8), l4 = 0, u3 = (c3 = e2.slice(t5)).length; l4 < u3; l4++)a8 = c3[l4], s3(o6, a8, r8);
            return o6.sort(r8).reverse();
        }, h3 = function(e2, t5, r8) {
            var o6, s4, l4, d4, h4, p2, f2, g2, v2;
            if (null == r8 && (r8 = n2), 10 * t5 <= e2.length) {
                if (!(l4 = e2.slice(0, t5).sort(r8)).length) return l4;
                for(s4 = l4[l4.length - 1], d4 = 0, p2 = (f2 = e2.slice(t5)).length; d4 < p2; d4++)r8(o6 = f2[d4], s4) < 0 && (u2(l4, o6, 0, null, r8), l4.pop(), s4 = l4[l4.length - 1]);
                return l4;
            }
            for(i5(e2, r8), v2 = [], h4 = 0, g2 = c2(t5, e2.length); 0 <= g2 ? h4 < g2 : h4 > g2; 0 <= g2 ? ++h4 : --h4)v2.push(a7(e2, r8));
            return v2;
        }, f1 = function(e2, t5, r8, i6) {
            var a8, o6, s4;
            for(null == i6 && (i6 = n2), a8 = e2[r8]; r8 > t5 && i6(a8, o6 = e2[s4 = r8 - 1 >> 1]) < 0;)e2[r8] = o6, r8 = s4;
            return e2[r8] = a8;
        }, g1 = function(e2, t5, r8) {
            var i6, a8, o6, s4, l4;
            for(null == r8 && (r8 = n2), a8 = e2.length, l4 = t5, o6 = e2[t5], i6 = 2 * t5 + 1; i6 < a8;)(s4 = i6 + 1) < a8 && !(r8(e2[i6], e2[s4]) < 0) && (i6 = s4), e2[t5] = e2[i6], i6 = 2 * (t5 = i6) + 1;
            return e2[t5] = o6, f1(e2, l4, t5, r8);
        }, t4 = (function() {
            function e2(e3) {
                this.cmp = null != e3 ? e3 : n2, this.nodes = [];
            }
            return e2.push = o5, e2.pop = a7, e2.replace = l3, e2.pushpop = s3, e2.heapify = i5, e2.updateItem = p1, e2.nlargest = d3, e2.nsmallest = h3, e2.prototype.push = function(e3) {
                return o5(this.nodes, e3, this.cmp);
            }, e2.prototype.pop = function() {
                return a7(this.nodes, this.cmp);
            }, e2.prototype.peek = function() {
                return this.nodes[0];
            }, e2.prototype.contains = function(e3) {
                return -1 !== this.nodes.indexOf(e3);
            }, e2.prototype.replace = function(e3) {
                return l3(this.nodes, e3, this.cmp);
            }, e2.prototype.pushpop = function(e3) {
                return s3(this.nodes, e3, this.cmp);
            }, e2.prototype.heapify = function() {
                return i5(this.nodes, this.cmp);
            }, e2.prototype.updateItem = function(e3) {
                return p1(this.nodes, e3, this.cmp);
            }, e2.prototype.clear = function() {
                return this.nodes = [];
            }, e2.prototype.empty = function() {
                return 0 === this.nodes.length;
            }, e2.prototype.size = function() {
                return this.nodes.length;
            }, e2.prototype.clone = function() {
                var t5;
                return (t5 = new e2).nodes = this.nodes.slice(0), t5;
            }, e2.prototype.toArray = function() {
                return this.nodes.slice(0);
            }, e2.prototype.insert = e2.prototype.push, e2.prototype.top = e2.prototype.peek, e2.prototype.front = e2.prototype.peek, e2.prototype.has = e2.prototype.contains, e2.prototype.copy = e2.prototype.clone, e2;
        })(), e1.exports = t4;
    }).call(R);
}), qe = Me({
    root: null,
    weight: function(e1) {
        return 1;
    },
    directed: !1
}), je = {
    dijkstra: function(e1) {
        if (!v1(e1)) {
            var t3 = arguments;
            e1 = {
                root: t3[0],
                weight: t3[1],
                directed: t3[2]
            };
        }
        var n2 = qe(e1), r7 = n2.root, i5 = n2.weight, a7 = n2.directed, o5 = this, s3 = i5, l3 = p(r7) ? this.filter(r7)[0] : r7[0], u2 = {
        }, c2 = {
        }, d3 = {
        }, h3 = this.byGroup(), f1 = h3.nodes, g1 = h3.edges;
        g1.unmergeBy(function(e2) {
            return e2.isLoop();
        });
        for(var y2 = function(e2) {
            return u2[e2.id()];
        }, m1 = function(e2, t4) {
            u2[e2.id()] = t4, b2.updateItem(e2);
        }, b2 = new Fe(function(e2, t4) {
            return y2(e2) - y2(t4);
        }), x1 = 0; x1 < f1.length; x1++){
            var w1 = f1[x1];
            u2[w1.id()] = w1.same(l3) ? 0 : 1 / 0, b2.push(w1);
        }
        for(var E3 = function(e2, t4) {
            for(var n3, r8 = (a7 ? e2.edgesTo(t4) : e2.edgesWith(t4)).intersect(g1), i6 = 1 / 0, o6 = 0; o6 < r8.length; o6++){
                var l4 = r8[o6], u3 = s3(l4);
                (u3 < i6 || !n3) && (i6 = u3, n3 = l4);
            }
            return {
                edge: n3,
                dist: i6
            };
        }; b2.size() > 0;){
            var k3 = b2.pop(), C1 = y2(k3), S2 = k3.id();
            if (d3[S2] = C1, C1 !== 1 / 0) for(var P1 = k3.neighborhood().intersect(f1), D1 = 0; D1 < P1.length; D1++){
                var T2 = P1[D1], M2 = T2.id(), B1 = E3(k3, T2), _1 = C1 + B1.dist;
                _1 < y2(T2) && (m1(T2, _1), c2[M2] = {
                    node: k3,
                    edge: B1.edge
                });
            }
        }
        return {
            distanceTo: function(e2) {
                var t4 = p(e2) ? f1.filter(e2)[0] : e2[0];
                return d3[t4.id()];
            },
            pathTo: function(e2) {
                var t4 = p(e2) ? f1.filter(e2)[0] : e2[0], n3 = [], r8 = t4, i6 = r8.id();
                if (t4.length > 0) for(n3.unshift(t4); c2[i6];){
                    var a8 = c2[i6];
                    n3.unshift(a8.edge), n3.unshift(a8.node), i6 = (r8 = a8.node).id();
                }
                return o5.spawn(n3);
            }
        };
    }
}, Ye = {
    kruskal: function(e1) {
        e1 = e1 || function(e2) {
            return 1;
        };
        for(var t4 = this.byGroup(), n2 = t4.nodes, r7 = t4.edges, i5 = n2.length, a7 = new Array(i5), o5 = n2, s3 = function(e2) {
            for(var t5 = 0; t5 < a7.length; t5++){
                if (a7[t5].has(e2)) return t5;
            }
        }, l3 = 0; l3 < i5; l3++)a7[l3] = this.spawn(n2[l3]);
        for(var u2 = r7.sort(function(t5, n3) {
            return e1(t5) - e1(n3);
        }), c2 = 0; c2 < u2.length; c2++){
            var d3 = u2[c2], h3 = d3.source()[0], p1 = d3.target()[0], f1 = s3(h3), g1 = s3(p1), v2 = a7[f1], y2 = a7[g1];
            f1 !== g1 && (o5.merge(d3), v2.merge(y2), a7.splice(g1, 1));
        }
        return o5;
    }
}, Xe = Me({
    root: null,
    goal: null,
    weight: function(e1) {
        return 1;
    },
    heuristic: function(e1) {
        return 0;
    },
    directed: !1
}), We = {
    aStar: function(e1) {
        var t4 = this.cy(), n2 = Xe(e1), r7 = n2.root, i5 = n2.goal, a7 = n2.heuristic, o5 = n2.directed, s3 = n2.weight;
        r7 = t4.collection(r7)[0], i5 = t4.collection(i5)[0];
        var l3, u2, c2 = r7.id(), d4 = i5.id(), h4 = {
        }, p2 = {
        }, f2 = {
        }, g2 = new Fe(function(e2, t5) {
            return p2[e2.id()] - p2[t5.id()];
        }), v3 = new Ae, y3 = {
        }, m1 = {
        }, b2 = function(e2, t5) {
            g2.push(e2), v3.add(t5);
        };
        b2(r7, c2), h4[c2] = 0, p2[c2] = a7(r7);
        for(var x1, w2 = 0; g2.size() > 0;){
            if (l3 = g2.pop(), u2 = l3.id(), v3.delete(u2), w2++, u2 === d4) {
                for(var E3 = [], k4 = i5, C3 = d4, S3 = m1[C3]; E3.unshift(k4), null != S3 && E3.unshift(S3), null != (k4 = y3[C3]);)S3 = m1[C3 = k4.id()];
                return {
                    found: !0,
                    distance: h4[u2],
                    path: this.spawn(E3),
                    steps: w2
                };
            }
            f2[u2] = !0;
            for(var P2 = l3._private.edges, D2 = 0; D2 < P2.length; D2++){
                var T3 = P2[D2];
                if (this.hasElementWithId(T3.id()) && (!o5 || T3.data("source") === u2)) {
                    var M3 = T3.source(), B2 = T3.target(), _2 = M3.id() !== u2 ? M3 : B2, N1 = _2.id();
                    if (this.hasElementWithId(N1) && !f2[N1]) {
                        var I1 = h4[u2] + s3(T3);
                        x1 = N1, v3.has(x1) ? I1 < h4[N1] && (h4[N1] = I1, p2[N1] = I1 + a7(_2), y3[N1] = l3, m1[N1] = T3) : (h4[N1] = I1, p2[N1] = I1 + a7(_2), b2(_2, N1), y3[N1] = l3, m1[N1] = T3);
                    }
                }
            }
        }
        return {
            found: !1,
            distance: void 0,
            path: void 0,
            steps: w2
        };
    }
}, He = Me({
    weight: function(e1) {
        return 1;
    },
    directed: !1
}), Ke = {
    floydWarshall: function(e1) {
        for(var t4 = this.cy(), n2 = He(e1), r7 = n2.weight, i5 = n2.directed, a7 = r7, o5 = this.byGroup(), s3 = o5.nodes, l3 = o5.edges, u2 = s3.length, c2 = u2 * u2, d4 = function(e2) {
            return s3.indexOf(e2);
        }, h4 = function(e2) {
            return s3[e2];
        }, f2 = new Array(c2), g2 = 0; g2 < c2; g2++){
            var v3 = g2 % u2, y3 = (g2 - v3) / u2;
            f2[g2] = y3 === v3 ? 0 : 1 / 0;
        }
        for(var m1 = new Array(c2), b2 = new Array(c2), x1 = 0; x1 < l3.length; x1++){
            var w2 = l3[x1], E4 = w2.source()[0], k5 = w2.target()[0];
            if (E4 !== k5) {
                var C4 = d4(E4), S4 = d4(k5), P3 = C4 * u2 + S4, D3 = a7(w2);
                if (f2[P3] > D3 && (f2[P3] = D3, m1[P3] = S4, b2[P3] = w2), !i5) {
                    var T4 = S4 * u2 + C4;
                    !i5 && f2[T4] > D3 && (f2[T4] = D3, m1[T4] = C4, b2[T4] = w2);
                }
            }
        }
        for(var M4 = 0; M4 < u2; M4++)for(var B3 = 0; B3 < u2; B3++)for(var _3 = B3 * u2 + M4, N2 = 0; N2 < u2; N2++){
            var I2 = B3 * u2 + N2, z1 = M4 * u2 + N2;
            f2[_3] + f2[z1] < f2[I2] && (f2[I2] = f2[_3] + f2[z1], m1[I2] = m1[_3]);
        }
        var L1 = function(e2) {
            return d4(function(e3) {
                return (p(e3) ? t4.filter(e3) : e3)[0];
            }(e2));
        };
        return {
            distance: function(e2, t5) {
                var n3 = L1(e2), r8 = L1(t5);
                return f2[n3 * u2 + r8];
            },
            path: function(e2, n3) {
                var r8 = L1(e2), i6 = L1(n3), a9 = h4(r8);
                if (r8 === i6) return a9.collection();
                if (null == m1[r8 * u2 + i6]) return t4.collection();
                var o6, s4 = t4.collection(), l5 = r8;
                for(s4.merge(a9); r8 !== i6;)l5 = r8, r8 = m1[r8 * u2 + i6], o6 = b2[l5 * u2 + r8], s4.merge(o6), s4.merge(h4(r8));
                return s4;
            }
        };
    }
}, Ge = Me({
    weight: function(e1) {
        return 1;
    },
    directed: !1,
    root: null
}), Ze = {
    bellmanFord: function(e1) {
        var t4 = this, n2 = Ge(e1), r7 = n2.weight, i5 = n2.directed, a7 = n2.root, o5 = r7, s3 = this, l3 = this.cy(), u2 = this.byGroup(), c2 = u2.edges, d4 = u2.nodes, h4 = d4.length, f2 = new ze, g2 = !1;
        a7 = l3.collection(a7)[0], c2.unmergeBy(function(e2) {
            return e2.isLoop();
        });
        for(var v4 = c2.length, y4 = function(e2) {
            var t5 = f2.get(e2.id());
            return t5 || (t5 = {
            }, f2.set(e2.id(), t5)), t5;
        }, m1 = function(e2) {
            return (p(e2) ? l3.$(e2) : e2)[0];
        }, b2 = 0; b2 < h4; b2++){
            var x1 = d4[b2], w3 = y4(x1);
            x1.same(a7) ? w3.dist = 0 : w3.dist = 1 / 0, w3.pred = null, w3.edge = null;
        }
        for(var E5 = !1, k6 = function(e2, t5, n3, r8, i6, a9) {
            var o6 = r8.dist + a9;
            o6 < i6.dist && !n3.same(r8.edge) && (i6.dist = o6, i6.pred = e2, i6.edge = n3, E5 = !0);
        }, C5 = 1; C5 < h4; C5++){
            E5 = !1;
            for(var S5 = 0; S5 < v4; S5++){
                var P4 = c2[S5], D4 = P4.source(), T5 = P4.target(), M4 = o5(P4), B3 = y4(D4), _3 = y4(T5);
                k6(D4, 0, P4, B3, _3, M4), i5 || k6(T5, 0, P4, _3, B3, M4);
            }
            if (!E5) break;
        }
        if (E5) for(var N2 = 0; N2 < v4; N2++){
            var I3 = c2[N2], z2 = I3.source(), L1 = I3.target(), A1 = o5(I3), O1 = y4(z2).dist, R1 = y4(L1).dist;
            if (O1 + A1 < R1 || !i5 && R1 + A1 < O1) {
                Ce("Graph contains a negative weight cycle for Bellman-Ford"), g2 = !0;
                break;
            }
        }
        return {
            distanceTo: function(e2) {
                return y4(m1(e2)).dist;
            },
            pathTo: function(e2) {
                for(var n3 = arguments.length > 1 && (void 0) !== arguments[1] ? arguments[1] : a7, r8 = m1(e2), i6 = [], o6 = r8;;){
                    if (null == o6) return t4.spawn();
                    var l5 = y4(o6), u4 = l5.edge, c3 = l5.pred;
                    if (i6.unshift(o6[0]), o6.same(n3) && i6.length > 0) break;
                    null != u4 && i6.unshift(u4), o6 = c3;
                }
                return s3.spawn(i6);
            },
            hasNegativeWeightCycle: g2,
            negativeWeightCycles: []
        };
    }
}, Ue = Math.sqrt(2), $e = function(e1, t4, n2) {
    0 === n2.length && Ee("Karger-Stein must be run on a connected (sub)graph");
    for(var r7 = n2[e1], i5 = r7[1], a7 = r7[2], o5 = t4[i5], s3 = t4[a7], l3 = n2, u2 = l3.length - 1; u2 >= 0; u2--){
        var c2 = l3[u2], d4 = c2[1], h4 = c2[2];
        (t4[d4] === o5 && t4[h4] === s3 || t4[d4] === s3 && t4[h4] === o5) && l3.splice(u2, 1);
    }
    for(var p2 = 0; p2 < l3.length; p2++){
        var f2 = l3[p2];
        f2[1] === s3 ? (l3[p2] = f2.slice(), l3[p2][1] = o5) : f2[2] === s3 && (l3[p2] = f2.slice(), l3[p2][2] = o5);
    }
    for(var g2 = 0; g2 < t4.length; g2++)t4[g2] === s3 && (t4[g2] = o5);
    return l3;
}, Qe = function(e1, t4, n2, r7) {
    for(; n2 > r7;){
        var i5 = Math.floor(Math.random() * t4.length);
        t4 = $e(i5, e1, t4), n2--;
    }
    return t4;
}, Je = {
    kargerStein: function() {
        var e1 = this, t4 = this.byGroup(), n2 = t4.nodes, r7 = t4.edges;
        r7.unmergeBy(function(e2) {
            return e2.isLoop();
        });
        var i6 = n2.length, a7 = r7.length, o5 = Math.ceil(Math.pow(Math.log(i6) / Math.LN2, 2)), s3 = Math.floor(i6 / Ue);
        if (!(i6 < 2)) {
            for(var l3 = [], u2 = 0; u2 < a7; u2++){
                var c4 = r7[u2];
                l3.push([
                    u2,
                    n2.indexOf(c4.source()),
                    n2.indexOf(c4.target())
                ]);
            }
            for(var d5 = 1 / 0, h5 = [], p2 = new Array(i6), f3 = new Array(i6), g2 = new Array(i6), v4 = function(e2, t5) {
                for(var n3 = 0; n3 < i6; n3++)t5[n3] = e2[n3];
            }, y4 = 0; y4 <= o5; y4++){
                for(var m1 = 0; m1 < i6; m1++)f3[m1] = m1;
                var b2 = Qe(f3, l3.slice(), i6, s3), x2 = b2.slice();
                v4(f3, g2);
                var w4 = Qe(f3, b2, s3, 2), E5 = Qe(g2, x2, s3, 2);
                w4.length <= E5.length && w4.length < d5 ? (d5 = w4.length, h5 = w4, v4(f3, p2)) : E5.length <= w4.length && E5.length < d5 && (d5 = E5.length, h5 = E5, v4(g2, p2));
            }
            for(var k6 = this.spawn(h5.map(function(e2) {
                return r7[e2[0]];
            })), C5 = this.spawn(), S6 = this.spawn(), P5 = p2[0], D5 = 0; D5 < p2.length; D5++){
                var T6 = p2[D5], M5 = n2[D5];
                T6 === P5 ? C5.merge(M5) : S6.merge(M5);
            }
            var B4 = function(t5) {
                var n3 = e1.spawn();
                return t5.forEach(function(t6) {
                    n3.merge(t6), t6.connectedEdges().forEach(function(t7) {
                        e1.contains(t7) && !k6.contains(t7) && n3.merge(t7);
                    });
                }), n3;
            }, _4 = [
                B4(C5),
                B4(S6)
            ];
            return {
                cut: k6,
                components: _4,
                partition1: C5,
                partition2: S6
            };
        }
        Ee("At least 2 nodes are required for Karger-Stein algorithm");
    }
}, et = function(e1, t4, n2) {
    return {
        x: e1.x * t4 + n2.x,
        y: e1.y * t4 + n2.y
    };
}, tt = function(e1, t4, n2) {
    return {
        x: (e1.x - n2.x) / t4,
        y: (e1.y - n2.y) / t4
    };
}, nt = function(e1) {
    return {
        x: e1[0],
        y: e1[1]
    };
}, rt = function(e1, t4) {
    return Math.atan2(t4, e1) - Math.PI / 2;
}, it = Math.log2 || function(e1) {
    return Math.log(e1) / Math.log(2);
}, at = function(e1) {
    return e1 > 0 ? 1 : e1 < 0 ? -1 : 0;
}, ot = function(e1, t4) {
    return Math.sqrt(st(e1, t4));
}, st = function(e1, t4) {
    var n2 = t4.x - e1.x, r7 = t4.y - e1.y;
    return n2 * n2 + r7 * r7;
}, lt = function(e1) {
    for(var t4 = e1.length, n2 = 0, r7 = 0; r7 < t4; r7++)n2 += e1[r7];
    for(var i6 = 0; i6 < t4; i6++)e1[i6] = e1[i6] / n2;
    return e1;
}, ut = function(e1, t4, n2, r7) {
    return (1 - r7) * (1 - r7) * e1 + 2 * (1 - r7) * r7 * t4 + r7 * r7 * n2;
}, ct = function(e1, t4, n2, r7) {
    return {
        x: ut(e1.x, t4.x, n2.x, r7),
        y: ut(e1.y, t4.y, n2.y, r7)
    };
}, dt = function(e1, t4, n2) {
    return Math.max(e1, Math.min(n2, t4));
}, ht = function(e1) {
    if (null == e1) return {
        x1: 1 / 0,
        y1: 1 / 0,
        x2: -1 / 0,
        y2: -1 / 0,
        w: 0,
        h: 0
    };
    if (null != e1.x1 && null != e1.y1) {
        if (null != e1.x2 && null != e1.y2 && e1.x2 >= e1.x1 && e1.y2 >= e1.y1) return {
            x1: e1.x1,
            y1: e1.y1,
            x2: e1.x2,
            y2: e1.y2,
            w: e1.x2 - e1.x1,
            h: e1.y2 - e1.y1
        };
        if (null != e1.w && null != e1.h && e1.w >= 0 && e1.h >= 0) return {
            x1: e1.x1,
            y1: e1.y1,
            x2: e1.x1 + e1.w,
            y2: e1.y1 + e1.h,
            w: e1.w,
            h: e1.h
        };
    }
}, pt = function(e1, t4, n2) {
    e1.x1 = Math.min(e1.x1, t4), e1.x2 = Math.max(e1.x2, t4), e1.w = e1.x2 - e1.x1, e1.y1 = Math.min(e1.y1, n2), e1.y2 = Math.max(e1.y2, n2), e1.h = e1.y2 - e1.y1;
}, ft = function(e1) {
    var t4 = arguments.length > 1 && (void 0) !== arguments[1] ? arguments[1] : 0;
    return e1.x1 -= t4, e1.x2 += t4, e1.y1 -= t4, e1.y2 += t4, e1.w = e1.x2 - e1.x1, e1.h = e1.y2 - e1.y1, e1;
}, gt = function(e1) {
    var t4, n2, r7, i6, o5 = arguments.length > 1 && (void 0) !== arguments[1] ? arguments[1] : [
        0
    ];
    if (1 === o5.length) t4 = n2 = r7 = i6 = o5[0];
    else if (2 === o5.length) t4 = r7 = o5[0], i6 = n2 = o5[1];
    else if (4 === o5.length) {
        var s3 = a22(o5, 4);
        t4 = s3[0], n2 = s3[1], r7 = s3[2], i6 = s3[3];
    }
    return e1.x1 -= i6, e1.x2 += n2, e1.y1 -= t4, e1.y2 += r7, e1.w = e1.x2 - e1.x1, e1.h = e1.y2 - e1.y1, e1;
}, vt = function(e1, t4) {
    e1.x1 = t4.x1, e1.y1 = t4.y1, e1.x2 = t4.x2, e1.y2 = t4.y2, e1.w = e1.x2 - e1.x1, e1.h = e1.y2 - e1.y1;
}, yt = function(e1, t4) {
    return !(e1.x1 > t4.x2) && !(t4.x1 > e1.x2) && !(e1.x2 < t4.x1) && !(t4.x2 < e1.x1) && !(e1.y2 < t4.y1) && !(t4.y2 < e1.y1) && !(e1.y1 > t4.y2) && !(t4.y1 > e1.y2);
}, mt = function(e1, t4, n2) {
    return e1.x1 <= t4 && t4 <= e1.x2 && e1.y1 <= n2 && n2 <= e1.y2;
}, bt = function(e1, t4) {
    return mt(e1, t4.x1, t4.y1) && mt(e1, t4.x2, t4.y2);
}, xt = function(e1, t4, n2, r7, i6, a7, o5) {
    var s4, l6 = Rt(i6, a7), u5 = i6 / 2, c5 = a7 / 2, d6 = r7 - c5 - o5;
    if ((s4 = Nt(e1, t4, n2, r7, n2 - u5 + l6 - o5, d6, n2 + u5 - l6 + o5, d6, !1)).length > 0) return s4;
    var h6 = n2 + u5 + o5;
    if ((s4 = Nt(e1, t4, n2, r7, h6, r7 - c5 + l6 - o5, h6, r7 + c5 - l6 + o5, !1)).length > 0) return s4;
    var p3 = r7 + c5 + o5;
    if ((s4 = Nt(e1, t4, n2, r7, n2 - u5 + l6 - o5, p3, n2 + u5 - l6 + o5, p3, !1)).length > 0) return s4;
    var f4, g3 = n2 - u5 - o5;
    if ((s4 = Nt(e1, t4, n2, r7, g3, r7 - c5 + l6 - o5, g3, r7 + c5 - l6 + o5, !1)).length > 0) return s4;
    var v5 = n2 - u5 + l6, y5 = r7 - c5 + l6;
    if ((f4 = Bt(e1, t4, n2, r7, v5, y5, l6 + o5)).length > 0 && f4[0] <= v5 && f4[1] <= y5) return [
        f4[0],
        f4[1]
    ];
    var m2 = n2 + u5 - l6, b3 = r7 - c5 + l6;
    if ((f4 = Bt(e1, t4, n2, r7, m2, b3, l6 + o5)).length > 0 && f4[0] >= m2 && f4[1] <= b3) return [
        f4[0],
        f4[1]
    ];
    var x3 = n2 + u5 - l6, w5 = r7 + c5 - l6;
    if ((f4 = Bt(e1, t4, n2, r7, x3, w5, l6 + o5)).length > 0 && f4[0] >= x3 && f4[1] >= w5) return [
        f4[0],
        f4[1]
    ];
    var E6 = n2 - u5 + l6, k7 = r7 + c5 - l6;
    return (f4 = Bt(e1, t4, n2, r7, E6, k7, l6 + o5)).length > 0 && f4[0] <= E6 && f4[1] >= k7 ? [
        f4[0],
        f4[1]
    ] : [];
}, wt = function(e1, t4, n2, r7, i6, a7, o5) {
    var s4 = o5, l6 = Math.min(n2, i6), u5 = Math.max(n2, i6), c5 = Math.min(r7, a7), d6 = Math.max(r7, a7);
    return l6 - s4 <= e1 && e1 <= u5 + s4 && c5 - s4 <= t4 && t4 <= d6 + s4;
}, Et = function(e1, t4, n2, r7, i6, a7, o5, s4, l6) {
    var u5 = Math.min(n2, o5, i6) - l6, c5 = Math.max(n2, o5, i6) + l6, d6 = Math.min(r7, s4, a7) - l6, h6 = Math.max(r7, s4, a7) + l6;
    return !(e1 < u5 || e1 > c5 || t4 < d6 || t4 > h6);
}, kt = function(e1, t4, n2, r7, i6, a7, o5, s4) {
    var l6 = [];
    !function(e2, t5, n3, r8, i7) {
        var a9, o6, s5, l7, u5, c5, d6, h6;
        0 === e2 && (e2 = 0.00001), s5 = -27 * (r8 /= e2) + (t5 /= e2) * (9 * (n3 /= e2) - t5 * t5 * 2), a9 = (o6 = (3 * n3 - t5 * t5) / 9) * o6 * o6 + (s5 /= 54) * s5, i7[1] = 0, d6 = t5 / 3, a9 > 0 ? (u5 = (u5 = s5 + Math.sqrt(a9)) < 0 ? -Math.pow(-u5, 1 / 3) : Math.pow(u5, 1 / 3), c5 = (c5 = s5 - Math.sqrt(a9)) < 0 ? -Math.pow(-c5, 1 / 3) : Math.pow(c5, 1 / 3), i7[0] = -d6 + u5 + c5, d6 += (u5 + c5) / 2, i7[4] = i7[2] = -d6, d6 = Math.sqrt(3) * (-c5 + u5) / 2, i7[3] = d6, i7[5] = -d6) : (i7[5] = i7[3] = 0, 0 === a9 ? (h6 = s5 < 0 ? -Math.pow(-s5, 1 / 3) : Math.pow(s5, 1 / 3), i7[0] = 2 * h6 - d6, i7[4] = i7[2] = -(h6 + d6)) : (l7 = (o6 = -o6) * o6 * o6, l7 = Math.acos(s5 / Math.sqrt(l7)), h6 = 2 * Math.sqrt(o6), i7[0] = -d6 + h6 * Math.cos(l7 / 3), i7[2] = -d6 + h6 * Math.cos((l7 + 2 * Math.PI) / 3), i7[4] = -d6 + h6 * Math.cos((l7 + 4 * Math.PI) / 3)));
    }(1 * n2 * n2 - 4 * n2 * i6 + 2 * n2 * o5 + 4 * i6 * i6 - 4 * i6 * o5 + o5 * o5 + r7 * r7 - 4 * r7 * a7 + 2 * r7 * s4 + 4 * a7 * a7 - 4 * a7 * s4 + s4 * s4, 9 * n2 * i6 - 3 * n2 * n2 - 3 * n2 * o5 - 6 * i6 * i6 + 3 * i6 * o5 + 9 * r7 * a7 - 3 * r7 * r7 - 3 * r7 * s4 - 6 * a7 * a7 + 3 * a7 * s4, 3 * n2 * n2 - 6 * n2 * i6 + n2 * o5 - n2 * e1 + 2 * i6 * i6 + 2 * i6 * e1 - o5 * e1 + 3 * r7 * r7 - 6 * r7 * a7 + r7 * s4 - r7 * t4 + 2 * a7 * a7 + 2 * a7 * t4 - s4 * t4, 1 * n2 * i6 - n2 * n2 + n2 * e1 - i6 * e1 + r7 * a7 - r7 * r7 + r7 * t4 - a7 * t4, l6);
    for(var u5 = [], c5 = 0; c5 < 6; c5 += 2)Math.abs(l6[c5 + 1]) < 0.0000001 && l6[c5] >= 0 && l6[c5] <= 1 && u5.push(l6[c5]);
    u5.push(1), u5.push(0);
    for(var d6, h6, p3, f4 = -1, g3 = 0; g3 < u5.length; g3++)d6 = Math.pow(1 - u5[g3], 2) * n2 + 2 * (1 - u5[g3]) * u5[g3] * i6 + u5[g3] * u5[g3] * o5, h6 = Math.pow(1 - u5[g3], 2) * r7 + 2 * (1 - u5[g3]) * u5[g3] * a7 + u5[g3] * u5[g3] * s4, p3 = Math.pow(d6 - e1, 2) + Math.pow(h6 - t4, 2), f4 >= 0 ? p3 < f4 && (f4 = p3) : f4 = p3;
    return f4;
}, Ct = function(e1, t4, n2, r7, i6, a7) {
    var o5 = [
        e1 - n2,
        t4 - r7
    ], s4 = [
        i6 - n2,
        a7 - r7
    ], l6 = s4[0] * s4[0] + s4[1] * s4[1], u5 = o5[0] * o5[0] + o5[1] * o5[1], c5 = o5[0] * s4[0] + o5[1] * s4[1], d6 = c5 * c5 / l6;
    return c5 < 0 ? u5 : d6 > l6 ? (e1 - i6) * (e1 - i6) + (t4 - a7) * (t4 - a7) : u5 - d6;
}, St = function(e1, t4, n2) {
    for(var r7, i6, a7, o5, s4 = 0, l6 = 0; l6 < n2.length / 2; l6++)if (r7 = n2[2 * l6], i6 = n2[2 * l6 + 1], l6 + 1 < n2.length / 2 ? (a7 = n2[2 * (l6 + 1)], o5 = n2[2 * (l6 + 1) + 1]) : (a7 = n2[2 * (l6 + 1 - n2.length / 2)], o5 = n2[2 * (l6 + 1 - n2.length / 2) + 1]), r7 == e1 && a7 == e1) ;
    else {
        if (!(r7 >= e1 && e1 >= a7 || r7 <= e1 && e1 <= a7)) continue;
        (e1 - r7) / (a7 - r7) * (o5 - i6) + i6 > t4 && s4++;
    }
    return s4 % 2 != 0;
}, Pt = function(e1, t4, n2, r7, i6, a7, o5, s4, l6) {
    var u5, c5 = new Array(n2.length);
    null != s4[0] ? (u5 = Math.atan(s4[1] / s4[0]), s4[0] < 0 ? u5 += Math.PI / 2 : u5 = -u5 - Math.PI / 2) : u5 = s4;
    for(var d6, h6 = Math.cos(-u5), p3 = Math.sin(-u5), f4 = 0; f4 < c5.length / 2; f4++)c5[2 * f4] = a7 / 2 * (n2[2 * f4] * h6 - n2[2 * f4 + 1] * p3), c5[2 * f4 + 1] = o5 / 2 * (n2[2 * f4 + 1] * h6 + n2[2 * f4] * p3), c5[2 * f4] += r7, c5[2 * f4 + 1] += i6;
    if (l6 > 0) {
        var g3 = Tt(c5, -l6);
        d6 = Dt(g3);
    } else d6 = c5;
    return St(e1, t4, d6);
}, Dt = function(e1) {
    for(var t4, n2, r7, i6, a7, o5, s4, l6, u5 = new Array(e1.length / 2), c5 = 0; c5 < e1.length / 4; c5++){
        t4 = e1[4 * c5], n2 = e1[4 * c5 + 1], r7 = e1[4 * c5 + 2], i6 = e1[4 * c5 + 3], c5 < e1.length / 4 - 1 ? (a7 = e1[4 * (c5 + 1)], o5 = e1[4 * (c5 + 1) + 1], s4 = e1[4 * (c5 + 1) + 2], l6 = e1[4 * (c5 + 1) + 3]) : (a7 = e1[0], o5 = e1[1], s4 = e1[2], l6 = e1[3]);
        var d6 = Nt(t4, n2, r7, i6, a7, o5, s4, l6, !0);
        u5[2 * c5] = d6[0], u5[2 * c5 + 1] = d6[1];
    }
    return u5;
}, Tt = function(e1, t4) {
    for(var n2, r7, i6, a7, o5 = new Array(2 * e1.length), s4 = 0; s4 < e1.length / 2; s4++){
        n2 = e1[2 * s4], r7 = e1[2 * s4 + 1], s4 < e1.length / 2 - 1 ? (i6 = e1[2 * (s4 + 1)], a7 = e1[2 * (s4 + 1) + 1]) : (i6 = e1[0], a7 = e1[1]);
        var l6 = a7 - r7, u5 = -(i6 - n2), c5 = Math.sqrt(l6 * l6 + u5 * u5), d7 = l6 / c5, h6 = u5 / c5;
        o5[4 * s4] = n2 + d7 * t4, o5[4 * s4 + 1] = r7 + h6 * t4, o5[4 * s4 + 2] = i6 + d7 * t4, o5[4 * s4 + 3] = a7 + h6 * t4;
    }
    return o5;
}, Mt = function(e1, t4, n2, r7, i6, a7, o5) {
    return e1 -= i6, t4 -= a7, (e1 /= n2 / 2 + o5) * e1 + (t4 /= r7 / 2 + o5) * t4 <= 1;
}, Bt = function(e1, t4, n2, r7, i6, a7, o5) {
    var s4 = [
        n2 - e1,
        r7 - t4
    ], l7 = [
        e1 - i6,
        t4 - a7
    ], u6 = s4[0] * s4[0] + s4[1] * s4[1], c6 = 2 * (l7[0] * s4[0] + l7[1] * s4[1]), d8 = c6 * c6 - 4 * u6 * (l7[0] * l7[0] + l7[1] * l7[1] - o5 * o5);
    if (d8 < 0) return [];
    var h7 = (-c6 + Math.sqrt(d8)) / (2 * u6), p3 = (-c6 - Math.sqrt(d8)) / (2 * u6), f4 = Math.min(h7, p3), g4 = Math.max(h7, p3), v5 = [];
    if (f4 >= 0 && f4 <= 1 && v5.push(f4), g4 >= 0 && g4 <= 1 && v5.push(g4), 0 === v5.length) return [];
    var y5 = v5[0] * s4[0] + e1, m2 = v5[0] * s4[1] + t4;
    return v5.length > 1 ? v5[0] == v5[1] ? [
        y5,
        m2
    ] : [
        y5,
        m2,
        v5[1] * s4[0] + e1,
        v5[1] * s4[1] + t4
    ] : [
        y5,
        m2
    ];
}, _t = function(e1, t4, n2) {
    return t4 <= e1 && e1 <= n2 || n2 <= e1 && e1 <= t4 ? e1 : e1 <= t4 && t4 <= n2 || n2 <= t4 && t4 <= e1 ? t4 : n2;
}, Nt = function(e1, t4, n2, r7, i6, a7, o5, s4, l7) {
    var u6 = e1 - i6, c6 = n2 - e1, d8 = o5 - i6, h7 = t4 - a7, p3 = r7 - t4, f4 = s4 - a7, g4 = d8 * h7 - f4 * u6, v5 = c6 * h7 - p3 * u6, y5 = f4 * c6 - d8 * p3;
    if (0 !== y5) {
        var m2 = g4 / y5, b3 = v5 / y5;
        return -0.001 <= m2 && m2 <= 1.001 && -0.001 <= b3 && b3 <= 1.001 || l7 ? [
            e1 + m2 * c6,
            t4 + m2 * p3
        ] : [];
    }
    return 0 === g4 || 0 === v5 ? _t(e1, n2, o5) === o5 ? [
        o5,
        s4
    ] : _t(e1, n2, i6) === i6 ? [
        i6,
        a7
    ] : _t(i6, o5, n2) === n2 ? [
        n2,
        r7
    ] : [] : [];
}, It = function(e1, t4, n2, r7, i6, a7, o5, s4) {
    var l7, u6, c6, d8, h7, p3, f4 = [], g4 = new Array(n2.length), v5 = !0;
    if (null == a7 && (v5 = !1), v5) {
        for(var y5 = 0; y5 < g4.length / 2; y5++)g4[2 * y5] = n2[2 * y5] * a7 + r7, g4[2 * y5 + 1] = n2[2 * y5 + 1] * o5 + i6;
        if (s4 > 0) {
            var m3 = Tt(g4, -s4);
            u6 = Dt(m3);
        } else u6 = g4;
    } else u6 = n2;
    for(var b4 = 0; b4 < u6.length / 2; b4++)c6 = u6[2 * b4], d8 = u6[2 * b4 + 1], b4 < u6.length / 2 - 1 ? (h7 = u6[2 * (b4 + 1)], p3 = u6[2 * (b4 + 1) + 1]) : (h7 = u6[0], p3 = u6[1]), 0 !== (l7 = Nt(e1, t4, r7, i6, c6, d8, h7, p3)).length && f4.push(l7[0], l7[1]);
    return f4;
}, zt = function(e1, t4, n2) {
    var r7 = [
        e1[0] - t4[0],
        e1[1] - t4[1]
    ], i6 = Math.sqrt(r7[0] * r7[0] + r7[1] * r7[1]), a7 = (i6 - n2) / i6;
    return a7 < 0 && (a7 = 0.00001), [
        t4[0] + a7 * r7[0],
        t4[1] + a7 * r7[1]
    ];
}, Lt = function(e1, t4) {
    var n2 = Ot(e1, t4);
    return n2 = At(n2);
}, At = function(e1) {
    for(var t4, n2, r7 = e1.length / 2, i6 = 1 / 0, a7 = 1 / 0, o5 = -1 / 0, s4 = -1 / 0, l7 = 0; l7 < r7; l7++)t4 = e1[2 * l7], n2 = e1[2 * l7 + 1], i6 = Math.min(i6, t4), o5 = Math.max(o5, t4), a7 = Math.min(a7, n2), s4 = Math.max(s4, n2);
    for(var u6 = 2 / (o5 - i6), c6 = 2 / (s4 - a7), d8 = 0; d8 < r7; d8++)t4 = e1[2 * d8] = e1[2 * d8] * u6, n2 = e1[2 * d8 + 1] = e1[2 * d8 + 1] * c6, i6 = Math.min(i6, t4), o5 = Math.max(o5, t4), a7 = Math.min(a7, n2), s4 = Math.max(s4, n2);
    if (a7 < -1) for(var h7 = 0; h7 < r7; h7++)n2 = e1[2 * h7 + 1] = e1[2 * h7 + 1] + (-1 - a7);
    return e1;
}, Ot = function(e1, t4) {
    var n2 = 1 / e1 * 2 * Math.PI, r7 = e1 % 2 == 0 ? Math.PI / 2 + n2 / 2 : Math.PI / 2;
    r7 += t4;
    for(var i6, a7 = new Array(2 * e1), o5 = 0; o5 < e1; o5++)i6 = o5 * n2 + r7, a7[2 * o5] = Math.cos(i6), a7[2 * o5 + 1] = Math.sin(-i6);
    return a7;
}, Rt = function(e1, t4) {
    return Math.min(e1 / 4, t4 / 4, 8);
}, Vt = function(e1, t4) {
    return Math.min(e1 / 10, t4 / 10, 8);
}, Ft = function(e1, t4) {
    return {
        heightOffset: Math.min(15, 0.05 * t4),
        widthOffset: Math.min(100, 0.25 * e1),
        ctrlPtOffsetPct: 0.05
    };
}, qt = Me({
    dampingFactor: 0.8,
    precision: 0.000001,
    iterations: 200,
    weight: function(e1) {
        return 1;
    }
}), jt = {
    pageRank: function(e1) {
        for(var t4 = qt(e1), n2 = t4.dampingFactor, r7 = t4.precision, i6 = t4.iterations, a7 = t4.weight, o5 = this._private.cy, s4 = this.byGroup(), l7 = s4.nodes, u6 = s4.edges, c6 = l7.length, d8 = c6 * c6, h7 = u6.length, p3 = new Array(d8), f4 = new Array(c6), g4 = (1 - n2) / c6, v5 = 0; v5 < c6; v5++){
            for(var y6 = 0; y6 < c6; y6++){
                p3[v5 * c6 + y6] = 0;
            }
            f4[v5] = 0;
        }
        for(var m4 = 0; m4 < h7; m4++){
            var b4 = u6[m4], x3 = b4.data("source"), w5 = b4.data("target");
            if (x3 !== w5) {
                var E6 = l7.indexOfId(x3), k7 = l7.indexOfId(w5), C6 = a7(b4);
                p3[k7 * c6 + E6] += C6, f4[E6] += C6;
            }
        }
        for(var S7 = 1 / c6 + g4, P6 = 0; P6 < c6; P6++)if (0 === f4[P6]) for(var D6 = 0; D6 < c6; D6++){
            p3[D6 * c6 + P6] = S7;
        }
        else for(var T7 = 0; T7 < c6; T7++){
            var M6 = T7 * c6 + P6;
            p3[M6] = p3[M6] / f4[P6] + g4;
        }
        for(var B5, _5 = new Array(c6), N2 = new Array(c6), I4 = 0; I4 < c6; I4++)_5[I4] = 1;
        for(var z3 = 0; z3 < i6; z3++){
            for(var L2 = 0; L2 < c6; L2++)N2[L2] = 0;
            for(var A2 = 0; A2 < c6; A2++)for(var O2 = 0; O2 < c6; O2++){
                var R2 = A2 * c6 + O2;
                N2[A2] += p3[R2] * _5[O2];
            }
            lt(N2), B5 = _5, _5 = N2, N2 = B5;
            for(var V1 = 0, F1 = 0; F1 < c6; F1++){
                var q1 = B5[F1] - _5[F1];
                V1 += q1 * q1;
            }
            if (V1 < r7) break;
        }
        return {
            rank: function(e2) {
                return e2 = o5.collection(e2)[0], _5[l7.indexOf(e2)];
            }
        };
    }
}, Yt = Me({
    root: null,
    weight: function(e1) {
        return 1;
    },
    directed: !1,
    alpha: 0
}), Xt = {
    degreeCentralityNormalized: function(e1) {
        e1 = Yt(e1);
        var t4 = this.cy(), n2 = this.nodes(), r7 = n2.length;
        if (e1.directed) {
            for(var i6 = {
            }, a7 = {
            }, o5 = 0, s4 = 0, l7 = 0; l7 < r7; l7++){
                var u6 = n2[l7], c6 = u6.id();
                e1.root = u6;
                var d8 = this.degreeCentrality(e1);
                o5 < d8.indegree && (o5 = d8.indegree), s4 < d8.outdegree && (s4 = d8.outdegree), i6[c6] = d8.indegree, a7[c6] = d8.outdegree;
            }
            return {
                indegree: function(e2) {
                    return 0 == o5 ? 0 : (p(e2) && (e2 = t4.filter(e2)), i6[e2.id()] / o5);
                },
                outdegree: function(e2) {
                    return 0 === s4 ? 0 : (p(e2) && (e2 = t4.filter(e2)), a7[e2.id()] / s4);
                }
            };
        }
        for(var h7 = {
        }, f4 = 0, g4 = 0; g4 < r7; g4++){
            var v5 = n2[g4];
            e1.root = v5;
            var y7 = this.degreeCentrality(e1);
            f4 < y7.degree && (f4 = y7.degree), h7[v5.id()] = y7.degree;
        }
        return {
            degree: function(e2) {
                return 0 === f4 ? 0 : (p(e2) && (e2 = t4.filter(e2)), h7[e2.id()] / f4);
            }
        };
    },
    degreeCentrality: function(e1) {
        e1 = Yt(e1);
        var t4 = this.cy(), n2 = this, r7 = e1, i7 = r7.root, a9 = r7.weight, o6 = r7.directed, s5 = r7.alpha;
        if (i7 = t4.collection(i7)[0], o6) {
            for(var l8 = i7.connectedEdges(), u7 = l8.filter(function(e2) {
                return e2.target().same(i7) && n2.has(e2);
            }), c7 = l8.filter(function(e2) {
                return e2.source().same(i7) && n2.has(e2);
            }), d9 = u7.length, h7 = c7.length, p3 = 0, f4 = 0, g4 = 0; g4 < u7.length; g4++)p3 += a9(u7[g4]);
            for(var v6 = 0; v6 < c7.length; v6++)f4 += a9(c7[v6]);
            return {
                indegree: Math.pow(d9, 1 - s5) * Math.pow(p3, s5),
                outdegree: Math.pow(h7, 1 - s5) * Math.pow(f4, s5)
            };
        }
        for(var y8 = i7.connectedEdges().intersection(n2), m4 = y8.length, b5 = 0, x4 = 0; x4 < y8.length; x4++)b5 += a9(y8[x4]);
        return {
            degree: Math.pow(m4, 1 - s5) * Math.pow(b5, s5)
        };
    }
};
Xt.dc = Xt.degreeCentrality, Xt.dcn = Xt.degreeCentralityNormalised = Xt.degreeCentralityNormalized;
var Wt = Me({
    harmonic: !0,
    weight: function() {
        return 1;
    },
    directed: !1,
    root: null
}), Ht = {
    closenessCentralityNormalized: function(e1) {
        for(var t4 = Wt(e1), n2 = t4.harmonic, r7 = t4.weight, i7 = t4.directed, a9 = this.cy(), o6 = {
        }, s5 = 0, l9 = this.nodes(), u8 = this.floydWarshall({
            weight: r7,
            directed: i7
        }), c8 = 0; c8 < l9.length; c8++){
            for(var d10 = 0, h8 = l9[c8], f5 = 0; f5 < l9.length; f5++)if (c8 !== f5) {
                var g5 = u8.distance(h8, l9[f5]);
                d10 += n2 ? 1 / g5 : g5;
            }
            n2 || (d10 = 1 / d10), s5 < d10 && (s5 = d10), o6[h8.id()] = d10;
        }
        return {
            closeness: function(e2) {
                return 0 == s5 ? 0 : (e2 = p(e2) ? a9.filter(e2)[0].id() : e2.id(), o6[e2] / s5);
            }
        };
    },
    closenessCentrality: function(e1) {
        var t4 = Wt(e1), n2 = t4.root, r7 = t4.weight, i7 = t4.directed, a9 = t4.harmonic;
        n2 = this.filter(n2)[0];
        for(var o6 = this.dijkstra({
            root: n2,
            weight: r7,
            directed: i7
        }), s5 = 0, l9 = this.nodes(), u8 = 0; u8 < l9.length; u8++){
            var c8 = l9[u8];
            if (!c8.same(n2)) {
                var d11 = o6.distanceTo(c8);
                s5 += a9 ? 1 / d11 : d11;
            }
        }
        return a9 ? s5 : 1 / s5;
    }
};
Ht.cc = Ht.closenessCentrality, Ht.ccn = Ht.closenessCentralityNormalised = Ht.closenessCentralityNormalized;
var Kt = Me({
    weight: null,
    directed: !1
}), Gt = {
    betweennessCentrality: function(e1) {
        for(var t4 = Kt(e1), n2 = t4.directed, r7 = t4.weight, i7 = null != r7, a9 = this.cy(), o6 = this.nodes(), s5 = {
        }, l9 = {
        }, u8 = 0, c9 = function(e2, t5) {
            l9[e2] = t5, t5 > u8 && (u8 = t5);
        }, d12 = function(e2) {
            return l9[e2];
        }, h9 = 0; h9 < o6.length; h9++){
            var p4 = o6[h9], f6 = p4.id();
            s5[f6] = n2 ? p4.outgoers().nodes() : p4.openNeighborhood().nodes(), c9(f6, 0);
        }
        for(var g6 = function(e2) {
            for(var t5 = o6[e2].id(), n3 = [], l10 = {
            }, u9 = {
            }, h10 = {
            }, p5 = new Fe(function(e3, t6) {
                return h10[e3] - h10[t6];
            }), f7 = 0; f7 < o6.length; f7++){
                var g7 = o6[f7].id();
                l10[g7] = [], u9[g7] = 0, h10[g7] = 1 / 0;
            }
            for(u9[t5] = 1, h10[t5] = 0, p5.push(t5); !p5.empty();){
                var v7 = p5.pop();
                if (n3.push(v7), i7) for(var y8 = 0; y8 < s5[v7].length; y8++){
                    var m4 = s5[v7][y8], b5 = a9.getElementById(v7), x4 = void 0;
                    x4 = b5.edgesTo(m4).length > 0 ? b5.edgesTo(m4)[0] : m4.edgesTo(b5)[0];
                    var w6 = r7(x4);
                    m4 = m4.id(), h10[m4] > h10[v7] + w6 && (h10[m4] = h10[v7] + w6, p5.nodes.indexOf(m4) < 0 ? p5.push(m4) : p5.updateItem(m4), u9[m4] = 0, l10[m4] = []), h10[m4] == h10[v7] + w6 && (u9[m4] = u9[m4] + u9[v7], l10[m4].push(v7));
                }
                else for(var E7 = 0; E7 < s5[v7].length; E7++){
                    var k8 = s5[v7][E7].id();
                    h10[k8] == 1 / 0 && (p5.push(k8), h10[k8] = h10[v7] + 1), h10[k8] == h10[v7] + 1 && (u9[k8] = u9[k8] + u9[v7], l10[k8].push(v7));
                }
            }
            for(var C7 = {
            }, S7 = 0; S7 < o6.length; S7++)C7[o6[S7].id()] = 0;
            for(; n3.length > 0;){
                for(var P6 = n3.pop(), D6 = 0; D6 < l10[P6].length; D6++){
                    var T7 = l10[P6][D6];
                    C7[T7] = C7[T7] + u9[T7] / u9[P6] * (1 + C7[P6]);
                }
                P6 != o6[e2].id() && c9(P6, d12(P6) + C7[P6]);
            }
        }, v8 = 0; v8 < o6.length; v8++)g6(v8);
        var y9 = {
            betweenness: function(e2) {
                var t5 = a9.collection(e2).id();
                return d12(t5);
            },
            betweennessNormalized: function(e2) {
                if (0 == u8) return 0;
                var t5 = a9.collection(e2).id();
                return d12(t5) / u8;
            }
        };
        return y9.betweennessNormalised = y9.betweennessNormalized, y9;
    }
};
Gt.bc = Gt.betweennessCentrality;
var Zt = Me({
    expandFactor: 2,
    inflateFactor: 2,
    multFactor: 1,
    maxIterations: 20,
    attributes: [
        function(e1) {
            return 1;
        }
    ]
}), Ut = function(e1, t4) {
    for(var n2 = 0, r7 = 0; r7 < t4.length; r7++)n2 += t4[r7](e1);
    return n2;
}, $t = function(e1, t4) {
    for(var n2, r7 = 0; r7 < t4; r7++){
        n2 = 0;
        for(var i7 = 0; i7 < t4; i7++)n2 += e1[i7 * t4 + r7];
        for(var a9 = 0; a9 < t4; a9++)e1[a9 * t4 + r7] = e1[a9 * t4 + r7] / n2;
    }
}, Qt = function(e1, t4, n2) {
    for(var r7 = new Array(n2 * n2), i8 = 0; i8 < n2; i8++){
        for(var a10 = 0; a10 < n2; a10++)r7[i8 * n2 + a10] = 0;
        for(var o6 = 0; o6 < n2; o6++)for(var s5 = 0; s5 < n2; s5++)r7[i8 * n2 + s5] += e1[i8 * n2 + o6] * t4[o6 * n2 + s5];
    }
    return r7;
}, Jt = function(e1, t4, n2) {
    for(var r7 = e1.slice(0), i8 = 1; i8 < n2; i8++)e1 = Qt(e1, r7, t4);
    return e1;
}, en = function(e1, t4, n2) {
    for(var r7 = new Array(t4 * t4), i8 = 0; i8 < t4 * t4; i8++)r7[i8] = Math.pow(e1[i8], n2);
    return $t(r7, t4), r7;
}, tn = function(e1, t4, n2, r7) {
    for(var i8 = 0; i8 < n2; i8++){
        if (Math.round(e1[i8] * Math.pow(10, r7)) / Math.pow(10, r7) !== Math.round(t4[i8] * Math.pow(10, r7)) / Math.pow(10, r7)) return !1;
    }
    return !0;
}, nn = function(e1, t4) {
    for(var n2 = 0; n2 < e1.length; n2++)if (!t4[n2] || e1[n2].id() !== t4[n2].id()) return !1;
    return !0;
}, rn = function(e1) {
    for(var t4 = this.nodes(), n2 = this.edges(), r7 = this.cy(), i8 = function(e2) {
        return Zt(e2);
    }(e1), a11 = {
    }, o7 = 0; o7 < t4.length; o7++)a11[t4[o7].id()] = o7;
    for(var s6, l9 = t4.length, u8 = l9 * l9, c9 = new Array(u8), d12 = 0; d12 < u8; d12++)c9[d12] = 0;
    for(var h9 = 0; h9 < n2.length; h9++){
        var p5 = n2[h9], f7 = a11[p5.source().id()], g6 = a11[p5.target().id()], v8 = Ut(p5, i8.attributes);
        c9[f7 * l9 + g6] += v8, c9[g6 * l9 + f7] += v8;
    }
    !function(e2, t5, n3) {
        for(var r8 = 0; r8 < t5; r8++)e2[r8 * t5 + r8] = n3;
    }(c9, l9, i8.multFactor), $t(c9, l9);
    for(var y9 = !0, m5 = 0; y9 && m5 < i8.maxIterations;)y9 = !1, s6 = Jt(c9, l9, i8.expandFactor), c9 = en(s6, l9, i8.inflateFactor), tn(c9, s6, u8, 4) || (y9 = !0), m5++;
    var b6 = function(e2, t5, n3, r8) {
        for(var i9 = [], a12 = 0; a12 < t5; a12++){
            for(var o8 = [], s7 = 0; s7 < t5; s7++)Math.round(1000 * e2[a12 * t5 + s7]) / 1000 > 0 && o8.push(n3[s7]);
            0 !== o8.length && i9.push(r8.collection(o8));
        }
        return i9;
    }(c9, l9, t4, r7);
    return b6 = (function(e2) {
        for(var t5 = 0; t5 < e2.length; t5++)for(var n3 = 0; n3 < e2.length; n3++)t5 != n3 && nn(e2[t5], e2[n3]) && e2.splice(n3, 1);
        return e2;
    })(b6);
}, an = {
    markovClustering: rn,
    mcl: rn
}, on = function(e1) {
    return e1;
}, sn = function(e1, t4) {
    return Math.abs(t4 - e1);
}, ln = function(e1, t4, n2) {
    return e1 + sn(t4, n2);
}, un = function(e1, t4, n2) {
    return e1 + Math.pow(n2 - t4, 2);
}, cn = function(e1) {
    return Math.sqrt(e1);
}, dn = function(e1, t4, n2) {
    return Math.max(e1, sn(t4, n2));
}, hn = function(e1, t4, n2, r7, i8) {
    for(var a11 = arguments.length > 5 && (void 0) !== arguments[5] ? arguments[5] : on, o7 = r7, s6 = 0; s6 < e1; s6++)o7 = i8(o7, t4(s6), n2(s6));
    return a11(o7);
}, pn = {
    euclidean: function(e1, t4, n2) {
        return e1 >= 2 ? hn(e1, t4, n2, 0, un, cn) : hn(e1, t4, n2, 0, ln);
    },
    squaredEuclidean: function(e1, t4, n2) {
        return hn(e1, t4, n2, 0, un);
    },
    manhattan: function(e1, t4, n2) {
        return hn(e1, t4, n2, 0, ln);
    },
    max: function(e1, t4, n2) {
        return hn(e1, t4, n2, -1 / 0, dn);
    }
};
function fn(e1, t4, n2, r7, i8, a11) {
    var o7;
    return o7 = f(e1) ? e1 : pn[e1] || pn.euclidean, 0 === t4 && f(e1) ? o7(i8, a11) : o7(t4, n2, r7, i8, a11);
}
pn["squared-euclidean"] = pn.squaredEuclidean, pn.squaredeuclidean = pn.squaredEuclidean;
var gn = Me({
    k: 2,
    m: 2,
    sensitivityThreshold: 0.0001,
    distance: "euclidean",
    maxIterations: 10,
    attributes: [],
    testMode: !1,
    testCentroids: null
}), vn = function(e1) {
    return gn(e1);
}, yn = function(e1, t4, n2, r7, i8) {
    var a11 = "kMedoids" !== i8 ? function(e2) {
        return n2[e2];
    } : function(e2) {
        return r7[e2](n2);
    }, o7 = n2, s6 = t4;
    return fn(e1, r7.length, a11, function(e2) {
        return r7[e2](t4);
    }, o7, s6);
}, mn = function(e1, t4, n2) {
    for(var r7 = n2.length, i8 = new Array(r7), a11 = new Array(r7), o7 = new Array(t4), s6 = null, l9 = 0; l9 < r7; l9++)i8[l9] = e1.min(n2[l9]).value, a11[l9] = e1.max(n2[l9]).value;
    for(var u8 = 0; u8 < t4; u8++){
        s6 = [];
        for(var c9 = 0; c9 < r7; c9++)s6[c9] = Math.random() * (a11[c9] - i8[c9]) + i8[c9];
        o7[u8] = s6;
    }
    return o7;
}, bn = function(e1, t4, n2, r7, i8) {
    for(var a11 = 1 / 0, o7 = 0, s6 = 0; s6 < t4.length; s6++){
        var l9 = yn(n2, e1, t4[s6], r7, i8);
        l9 < a11 && (a11 = l9, o7 = s6);
    }
    return o7;
}, xn = function(e1, t4, n2) {
    for(var r7 = [], i8 = null, a11 = 0; a11 < t4.length; a11++)n2[(i8 = t4[a11]).id()] === e1 && r7.push(i8);
    return r7;
}, wn = function(e1, t4, n2) {
    for(var r7 = 0; r7 < e1.length; r7++)for(var i8 = 0; i8 < e1[r7].length; i8++){
        if (Math.abs(e1[r7][i8] - t4[r7][i8]) > n2) return !1;
    }
    return !0;
}, En = function(e1, t4, n2) {
    for(var r7 = 0; r7 < n2; r7++)if (e1 === t4[r7]) return !0;
    return !1;
}, kn = function(e1, t4) {
    var n2 = new Array(t4);
    if (e1.length < 50) for(var r7 = 0; r7 < t4; r7++){
        for(var i8 = e1[Math.floor(Math.random() * e1.length)]; En(i8, n2, r7);)i8 = e1[Math.floor(Math.random() * e1.length)];
        n2[r7] = i8;
    }
    else for(var a11 = 0; a11 < t4; a11++)n2[a11] = e1[Math.floor(Math.random() * e1.length)];
    return n2;
}, Cn = function(e1, t4, n2) {
    for(var r7 = 0, i9 = 0; i9 < t4.length; i9++)r7 += yn("manhattan", t4[i9], e1, n2, "kMedoids");
    return r7;
}, Sn = function(e1, t4, n2, r7, i9) {
    for(var a11, o7, s6 = 0; s6 < t4.length; s6++)for(var l10 = 0; l10 < e1.length; l10++)r7[s6][l10] = Math.pow(n2[s6][l10], i9.m);
    for(var u8 = 0; u8 < e1.length; u8++)for(var c10 = 0; c10 < i9.attributes.length; c10++){
        a11 = 0, o7 = 0;
        for(var d12 = 0; d12 < t4.length; d12++)a11 += r7[d12][u8] * i9.attributes[c10](t4[d12]), o7 += r7[d12][u8];
        e1[u8][c10] = a11 / o7;
    }
}, Pn = function(e1, t4, n2, r7, i9) {
    for(var a11 = 0; a11 < e1.length; a11++)t4[a11] = e1[a11].slice();
    for(var o7, s6, l10, u8 = 2 / (i9.m - 1), c10 = 0; c10 < n2.length; c10++)for(var d13 = 0; d13 < r7.length; d13++){
        o7 = 0;
        for(var h9 = 0; h9 < n2.length; h9++)s6 = yn(i9.distance, r7[d13], n2[c10], i9.attributes, "cmeans"), l10 = yn(i9.distance, r7[d13], n2[h9], i9.attributes, "cmeans"), o7 += Math.pow(s6 / l10, u8);
        e1[d13][c10] = 1 / o7;
    }
}, Dn = function(e1) {
    var t4, n2, r7, i9, a11 = this.cy(), o7 = this.nodes(), s6 = vn(e1);
    r7 = new Array(o7.length);
    for(var l10 = 0; l10 < o7.length; l10++)r7[l10] = new Array(s6.k);
    n2 = new Array(o7.length);
    for(var u8 = 0; u8 < o7.length; u8++)n2[u8] = new Array(s6.k);
    for(var c10 = 0; c10 < o7.length; c10++){
        for(var d13 = 0, h10 = 0; h10 < s6.k; h10++)n2[c10][h10] = Math.random(), d13 += n2[c10][h10];
        for(var p6 = 0; p6 < s6.k; p6++)n2[c10][p6] = n2[c10][p6] / d13;
    }
    t4 = new Array(s6.k);
    for(var f8 = 0; f8 < s6.k; f8++)t4[f8] = new Array(s6.attributes.length);
    i9 = new Array(o7.length);
    for(var g8 = 0; g8 < o7.length; g8++)i9[g8] = new Array(s6.k);
    for(var v9 = !0, y9 = 0; v9 && y9 < s6.maxIterations;)v9 = !1, Sn(t4, o7, n2, i9, s6), Pn(n2, r7, t4, o7, s6), wn(n2, r7, s6.sensitivityThreshold) || (v9 = !0), y9++;
    return {
        clusters: (function(e2, t5, n3, r8) {
            for(var i10, a12, o9 = new Array(n3.k), s8 = 0; s8 < o9.length; s8++)o9[s8] = [];
            for(var l11 = 0; l11 < t5.length; l11++){
                i10 = -1 / 0, a12 = -1;
                for(var u9 = 0; u9 < t5[0].length; u9++)t5[l11][u9] > i10 && (i10 = t5[l11][u9], a12 = u9);
                o9[a12].push(e2[l11]);
            }
            for(var c11 = 0; c11 < o9.length; c11++)o9[c11] = r8.collection(o9[c11]);
            return o9;
        })(o7, n2, s6, a11),
        degreeOfMembership: n2
    };
}, Tn = {
    kMeans: function(t4) {
        var n2, r7 = this.cy(), i9 = this.nodes(), a11 = null, o7 = vn(t4), s6 = new Array(o7.k), l10 = {
        };
        n2 = o7.testMode ? "number" == typeof o7.testCentroids ? mn(i9, o7.k, o7.attributes) : "object" === e(o7.testCentroids) ? o7.testCentroids : mn(i9, o7.k, o7.attributes) : mn(i9, o7.k, o7.attributes);
        for(var u8, c10, d14, h11 = !0, p7 = 0; h11 && p7 < o7.maxIterations;){
            for(var f8 = 0; f8 < i9.length; f8++)l10[(a11 = i9[f8]).id()] = bn(a11, n2, o7.distance, o7.attributes, "kMeans");
            h11 = !1;
            for(var g8 = 0; g8 < o7.k; g8++){
                var v9 = xn(g8, i9, l10);
                if (0 !== v9.length) {
                    for(var y9 = o7.attributes.length, m5 = n2[g8], b6 = new Array(y9), x5 = new Array(y9), w7 = 0; w7 < y9; w7++){
                        x5[w7] = 0;
                        for(var E8 = 0; E8 < v9.length; E8++)a11 = v9[E8], x5[w7] += o7.attributes[w7](a11);
                        b6[w7] = x5[w7] / v9.length, u8 = b6[w7], c10 = m5[w7], d14 = o7.sensitivityThreshold, Math.abs(c10 - u8) <= d14 || (h11 = !0);
                    }
                    n2[g8] = b6, s6[g8] = r7.collection(v9);
                }
            }
            p7++;
        }
        return s6;
    },
    kMedoids: function(t4) {
        var n2, r7, i9 = this.cy(), a11 = this.nodes(), o7 = null, s6 = vn(t4), l10 = new Array(s6.k), u8 = {
        }, c10 = new Array(s6.k);
        s6.testMode ? "number" == typeof s6.testCentroids || (n2 = "object" === e(s6.testCentroids) ? s6.testCentroids : kn(a11, s6.k)) : n2 = kn(a11, s6.k);
        for(var d14 = !0, h11 = 0; d14 && h11 < s6.maxIterations;){
            for(var p7 = 0; p7 < a11.length; p7++)u8[(o7 = a11[p7]).id()] = bn(o7, n2, s6.distance, s6.attributes, "kMedoids");
            d14 = !1;
            for(var f9 = 0; f9 < n2.length; f9++){
                var g9 = xn(f9, a11, u8);
                if (0 !== g9.length) {
                    c10[f9] = Cn(n2[f9], g9, s6.attributes);
                    for(var v10 = 0; v10 < g9.length; v10++)(r7 = Cn(g9[v10], g9, s6.attributes)) < c10[f9] && (c10[f9] = r7, n2[f9] = g9[v10], d14 = !0);
                    l10[f9] = i9.collection(g9);
                }
            }
            h11++;
        }
        return l10;
    },
    fuzzyCMeans: Dn,
    fcm: Dn
}, Mn = Me({
    distance: "euclidean",
    linkage: "min",
    mode: "threshold",
    threshold: 1 / 0,
    addDendrogram: !1,
    dendrogramDepth: 0,
    attributes: []
}), Bn = {
    single: "min",
    complete: "max"
}, _n = function(e1, t4, n2, r7, i9) {
    for(var a11, o7 = 0, s6 = 1 / 0, l10 = i9.attributes, u8 = function(e2, t5) {
        return fn(i9.distance, l10.length, function(t6) {
            return l10[t6](e2);
        }, function(e3) {
            return l10[e3](t5);
        }, e2, t5);
    }, c10 = 0; c10 < e1.length; c10++){
        var d14 = e1[c10].key, h11 = n2[d14][r7[d14]];
        h11 < s6 && (o7 = d14, s6 = h11);
    }
    if ("threshold" === i9.mode && s6 >= i9.threshold || "dendrogram" === i9.mode && 1 === e1.length) return !1;
    var p8, f10 = t4[o7], g10 = t4[r7[o7]];
    p8 = "dendrogram" === i9.mode ? {
        left: f10,
        right: g10,
        key: f10.key
    } : {
        value: f10.value.concat(g10.value),
        key: f10.key
    }, e1[f10.index] = p8, e1.splice(g10.index, 1), t4[f10.key] = p8;
    for(var v11 = 0; v11 < e1.length; v11++){
        var y10 = e1[v11];
        f10.key === y10.key ? a11 = 1 / 0 : "min" === i9.linkage ? (a11 = n2[f10.key][y10.key], n2[f10.key][y10.key] > n2[g10.key][y10.key] && (a11 = n2[g10.key][y10.key])) : "max" === i9.linkage ? (a11 = n2[f10.key][y10.key], n2[f10.key][y10.key] < n2[g10.key][y10.key] && (a11 = n2[g10.key][y10.key])) : a11 = "mean" === i9.linkage ? (n2[f10.key][y10.key] * f10.size + n2[g10.key][y10.key] * g10.size) / (f10.size + g10.size) : "dendrogram" === i9.mode ? u8(y10.value, f10.value) : u8(y10.value[0], f10.value[0]), n2[f10.key][y10.key] = n2[y10.key][f10.key] = a11;
    }
    for(var m6 = 0; m6 < e1.length; m6++){
        var b7 = e1[m6].key;
        if (r7[b7] === f10.key || r7[b7] === g10.key) {
            for(var x6 = b7, w8 = 0; w8 < e1.length; w8++){
                var E9 = e1[w8].key;
                n2[b7][E9] < n2[b7][x6] && (x6 = E9);
            }
            r7[b7] = x6;
        }
        e1[m6].index = m6;
    }
    return f10.key = g10.key = f10.index = g10.index = null, !0;
}, Nn = function e1(t4, n2, r7) {
    t4 && (t4.value ? n2.push(t4.value) : (t4.left && e1(t4.left, n2), t4.right && e1(t4.right, n2)));
}, In = function(e2) {
    for(var t4 = this.cy(), n2 = this.nodes(), r7 = function(e3) {
        var t5 = Mn(e3), n3 = Bn[t5.linkage];
        return null != n3 && (t5.linkage = n3), t5;
    }(e2), i9 = r7.attributes, a11 = function(e3, t5) {
        return fn(r7.distance, i9.length, function(t6) {
            return i9[t6](e3);
        }, function(e4) {
            return i9[e4](t5);
        }, e3, t5);
    }, o7 = [], s6 = [], l10 = [], u8 = [], c10 = 0; c10 < n2.length; c10++){
        var d15 = {
            value: "dendrogram" === r7.mode ? n2[c10] : [
                n2[c10]
            ],
            key: c10,
            index: c10
        };
        o7[c10] = d15, u8[c10] = d15, s6[c10] = [], l10[c10] = 0;
    }
    for(var h12 = 0; h12 < o7.length; h12++)for(var p8 = 0; p8 <= h12; p8++){
        var f10 = void 0;
        f10 = "dendrogram" === r7.mode ? h12 === p8 ? 1 / 0 : a11(o7[h12].value, o7[p8].value) : h12 === p8 ? 1 / 0 : a11(o7[h12].value[0], o7[p8].value[0]), s6[h12][p8] = f10, s6[p8][h12] = f10, f10 < s6[h12][l10[h12]] && (l10[h12] = p8);
    }
    for(var g10, v11 = _n(o7, u8, s6, l10, r7); v11;)v11 = _n(o7, u8, s6, l10, r7);
    return "dendrogram" === r7.mode ? (g10 = (function e3(t5, n3, r8) {
        if (!t5) return [];
        var i10 = [], a12 = [], o9 = [];
        return 0 === n3 ? (t5.left && Nn(t5.left, i10), t5.right && Nn(t5.right, a12), o9 = i10.concat(a12), [
            r8.collection(o9)
        ]) : 1 === n3 ? t5.value ? [
            r8.collection(t5.value)
        ] : (t5.left && Nn(t5.left, i10), t5.right && Nn(t5.right, a12), [
            r8.collection(i10),
            r8.collection(a12)
        ]) : t5.value ? [
            r8.collection(t5.value)
        ] : (t5.left && (i10 = e3(t5.left, n3 - 1, r8)), t5.right && (a12 = e3(t5.right, n3 - 1, r8)), i10.concat(a12));
    })(o7[0], r7.dendrogramDepth, t4), r7.addDendrogram && (function e4(t5, n3) {
        if (!t5) return "";
        if (t5.left && t5.right) {
            var r8 = e4(t5.left, n3), i10 = e4(t5.right, n3), a12 = n3.add({
                group: "nodes",
                data: {
                    id: r8 + "," + i10
                }
            });
            return n3.add({
                group: "edges",
                data: {
                    source: r8,
                    target: a12.id()
                }
            }), n3.add({
                group: "edges",
                data: {
                    source: i10,
                    target: a12.id()
                }
            }), a12.id();
        }
        return t5.value ? t5.value.id() : void 0;
    })(o7[0], t4)) : (g10 = new Array(o7.length), o7.forEach(function(e5, n3) {
        e5.key = e5.index = null, g10[n3] = t4.collection(e5.value);
    })), g10;
}, zn = {
    hierarchicalClustering: In,
    hca: In
}, Ln = Me({
    distance: "euclidean",
    preference: "median",
    damping: 0.8,
    maxIterations: 1000,
    minIterations: 100,
    attributes: []
}), An = function(e2, t4, n2, r7) {
    var i9 = function(e3, t5) {
        return r7[t5](e3);
    };
    return -fn(e2, r7.length, function(e3) {
        return i9(t4, e3);
    }, function(e3) {
        return i9(n2, e3);
    }, t4, n2);
}, On = function(e2, t4) {
    return "median" === t4 ? (function(e3) {
        var t5 = arguments.length > 1 && (void 0) !== arguments[1] ? arguments[1] : 0, n2 = arguments.length > 2 && (void 0) !== arguments[2] ? arguments[2] : e3.length, r7 = !(arguments.length > 3 && (void 0) !== arguments[3]) || arguments[3], i9 = !(arguments.length > 4 && (void 0) !== arguments[4]) || arguments[4], a11 = !(arguments.length > 5 && (void 0) !== arguments[5]) || arguments[5];
        r7 ? e3 = e3.slice(t5, n2) : (n2 < e3.length && e3.splice(n2, e3.length - n2), t5 > 0 && e3.splice(0, t5));
        for(var o7 = 0, s6 = e3.length - 1; s6 >= 0; s6--){
            var l10 = e3[s6];
            a11 ? isFinite(l10) || (e3[s6] = -1 / 0, o7++) : e3.splice(s6, 1);
        }
        i9 && e3.sort(function(e4, t6) {
            return e4 - t6;
        });
        var u8 = e3.length, c10 = Math.floor(u8 / 2);
        return u8 % 2 != 0 ? e3[c10 + 1 + o7] : (e3[c10 - 1 + o7] + e3[c10 + o7]) / 2;
    })(e2) : "mean" === t4 ? (function(e3) {
        for(var t5 = arguments.length > 1 && (void 0) !== arguments[1] ? arguments[1] : 0, n2 = arguments.length > 2 && (void 0) !== arguments[2] ? arguments[2] : e3.length, r7 = 0, i9 = 0, a11 = t5; a11 < n2; a11++){
            var o7 = e3[a11];
            isFinite(o7) && (r7 += o7, i9++);
        }
        return r7 / i9;
    })(e2) : "min" === t4 ? (function(e3) {
        for(var t5 = arguments.length > 1 && (void 0) !== arguments[1] ? arguments[1] : 0, n2 = arguments.length > 2 && (void 0) !== arguments[2] ? arguments[2] : e3.length, r7 = 1 / 0, i9 = t5; i9 < n2; i9++){
            var a11 = e3[i9];
            isFinite(a11) && (r7 = Math.min(a11, r7));
        }
        return r7;
    })(e2) : "max" === t4 ? (function(e3) {
        for(var t5 = arguments.length > 1 && (void 0) !== arguments[1] ? arguments[1] : 0, n2 = arguments.length > 2 && (void 0) !== arguments[2] ? arguments[2] : e3.length, r7 = -1 / 0, i9 = t5; i9 < n2; i9++){
            var a13 = e3[i9];
            isFinite(a13) && (r7 = Math.max(a13, r7));
        }
        return r7;
    })(e2) : t4;
}, Rn = function(e2, t4, n2) {
    for(var r7 = [], i9 = 0; i9 < e2; i9++){
        for(var a14 = -1, o9 = -1 / 0, s6 = 0; s6 < n2.length; s6++){
            var l11 = n2[s6];
            t4[i9 * e2 + l11] > o9 && (a14 = l11, o9 = t4[i9 * e2 + l11]);
        }
        a14 > 0 && r7.push(a14);
    }
    for(var u8 = 0; u8 < n2.length; u8++)r7[n2[u8]] = n2[u8];
    return r7;
}, Vn = function(e2) {
    for(var t4, n2, r7, i9, a15, o10, s8 = this.cy(), l12 = this.nodes(), u8 = function(e3) {
        var t5 = e3.damping, n3 = e3.preference;
        0.5 <= t5 && t5 < 1 || Ee("Damping must range on [0.5, 1).  Got: ".concat(t5));
        var r9 = [
            "median",
            "mean",
            "min",
            "max"
        ];
        return r9.some(function(e4) {
            return e4 === n3;
        }) || y1(n3) || Ee("Preference must be one of [".concat(r9.map(function(e4) {
            return "'".concat(e4, "'");
        }).join(", "), "] or a number.  Got: ").concat(n3)), Ln(e3);
    }(e2), c10 = {
    }, d16 = 0; d16 < l12.length; d16++)c10[l12[d16].id()] = d16;
    n2 = (t4 = l12.length) * t4, r7 = new Array(n2);
    for(var h12 = 0; h12 < n2; h12++)r7[h12] = -1 / 0;
    for(var p8 = 0; p8 < t4; p8++)for(var f11 = 0; f11 < t4; f11++)p8 !== f11 && (r7[p8 * t4 + f11] = An(u8.distance, l12[p8], l12[f11], u8.attributes));
    i9 = On(r7, u8.preference);
    for(var g10 = 0; g10 < t4; g10++)r7[g10 * t4 + g10] = i9;
    a15 = new Array(n2);
    for(var v11 = 0; v11 < n2; v11++)a15[v11] = 0;
    o10 = new Array(n2);
    for(var m6 = 0; m6 < n2; m6++)o10[m6] = 0;
    for(var b8 = new Array(t4), x7 = new Array(t4), w9 = new Array(t4), E10 = 0; E10 < t4; E10++)b8[E10] = 0, x7[E10] = 0, w9[E10] = 0;
    for(var k9, C7 = new Array(t4 * u8.minIterations), S7 = 0; S7 < C7.length; S7++)C7[S7] = 0;
    for(k9 = 0; k9 < u8.maxIterations; k9++){
        for(var P7 = 0; P7 < t4; P7++){
            for(var D7 = -1 / 0, T8 = -1 / 0, M7 = -1, B5 = 0, _5 = 0; _5 < t4; _5++)b8[_5] = a15[P7 * t4 + _5], (B5 = o10[P7 * t4 + _5] + r7[P7 * t4 + _5]) >= D7 ? (T8 = D7, D7 = B5, M7 = _5) : B5 > T8 && (T8 = B5);
            for(var N2 = 0; N2 < t4; N2++)a15[P7 * t4 + N2] = (1 - u8.damping) * (r7[P7 * t4 + N2] - D7) + u8.damping * b8[N2];
            a15[P7 * t4 + M7] = (1 - u8.damping) * (r7[P7 * t4 + M7] - T8) + u8.damping * b8[M7];
        }
        for(var I4 = 0; I4 < t4; I4++){
            for(var z3 = 0, L3 = 0; L3 < t4; L3++)b8[L3] = o10[L3 * t4 + I4], x7[L3] = Math.max(0, a15[L3 * t4 + I4]), z3 += x7[L3];
            z3 -= x7[I4], x7[I4] = a15[I4 * t4 + I4], z3 += x7[I4];
            for(var A3 = 0; A3 < t4; A3++)o10[A3 * t4 + I4] = (1 - u8.damping) * Math.min(0, z3 - x7[A3]) + u8.damping * b8[A3];
            o10[I4 * t4 + I4] = (1 - u8.damping) * (z3 - x7[I4]) + u8.damping * b8[I4];
        }
        for(var O3 = 0, R3 = 0; R3 < t4; R3++){
            var V2 = o10[R3 * t4 + R3] + a15[R3 * t4 + R3] > 0 ? 1 : 0;
            C7[k9 % u8.minIterations * t4 + R3] = V2, O3 += V2;
        }
        if (O3 > 0 && (k9 >= u8.minIterations - 1 || k9 == u8.maxIterations - 1)) {
            for(var F2 = 0, q2 = 0; q2 < t4; q2++){
                w9[q2] = 0;
                for(var j1 = 0; j1 < u8.minIterations; j1++)w9[q2] += C7[j1 * t4 + q2];
                0 !== w9[q2] && w9[q2] !== u8.minIterations || F2++;
            }
            if (F2 === t4) break;
        }
    }
    for(var Y1 = function(e3, t5, n3) {
        for(var r9 = [], i11 = 0; i11 < e3; i11++)t5[i11 * e3 + i11] + n3[i11 * e3 + i11] > 0 && r9.push(i11);
        return r9;
    }(t4, a15, o10), X1 = function(e3, t5, n3) {
        for(var r9 = Rn(e3, t5, n3), i11 = 0; i11 < n3.length; i11++){
            for(var a16 = [], o11 = 0; o11 < r9.length; o11++)r9[o11] === n3[i11] && a16.push(o11);
            for(var s9 = -1, l13 = -1 / 0, u10 = 0; u10 < a16.length; u10++){
                for(var c11 = 0, d17 = 0; d17 < a16.length; d17++)c11 += t5[a16[d17] * e3 + a16[u10]];
                c11 > l13 && (s9 = u10, l13 = c11);
            }
            n3[i11] = a16[s9];
        }
        return r9 = Rn(e3, t5, n3);
    }(t4, r7, Y1), W1 = {
    }, H1 = 0; H1 < Y1.length; H1++)W1[Y1[H1]] = [];
    for(var K1 = 0; K1 < l12.length; K1++){
        var G1 = X1[c10[l12[K1].id()]];
        null != G1 && W1[G1].push(l12[K1]);
    }
    for(var Z1 = new Array(Y1.length), U1 = 0; U1 < Y1.length; U1++)Z1[U1] = s8.collection(W1[Y1[U1]]);
    return Z1;
}, Fn = {
    affinityPropagation: Vn,
    ap: Vn
}, qn = Me({
    root: void 0,
    directed: !1
}), jn = function() {
    var e2 = this, t4 = {
    }, n2 = 0, r7 = 0, i9 = [], a15 = [], o10 = {
    }, s8 = function s10(l12, u8, c10) {
        l12 === c10 && (r7 += 1), t4[u8] = {
            id: n2,
            low: n2++,
            cutVertex: !1
        };
        var d16, h12, p8, f11, g10 = e2.getElementById(u8).connectedEdges().intersection(e2);
        0 === g10.size() ? i9.push(e2.spawn(e2.getElementById(u8))) : g10.forEach(function(n3) {
            d16 = n3.source().id(), h12 = n3.target().id(), (p8 = d16 === u8 ? h12 : d16) !== c10 && (f11 = n3.id(), o10[f11] || (o10[f11] = !0, a15.push({
                x: u8,
                y: p8,
                edge: n3
            })), p8 in t4 ? t4[u8].low = Math.min(t4[u8].low, t4[p8].id) : (s10(l12, p8, u8), t4[u8].low = Math.min(t4[u8].low, t4[p8].low), t4[u8].id <= t4[p8].low && (t4[u8].cutVertex = !0, (function(n4, r9) {
                for(var o12 = a15.length - 1, s11 = [], l14 = e2.spawn(); a15[o12].x != n4 || a15[o12].y != r9;)s11.push(a15.pop().edge), o12--;
                s11.push(a15.pop().edge), s11.forEach(function(n5) {
                    var r10 = n5.connectedNodes().intersection(e2);
                    l14.merge(n5), r10.forEach(function(n6) {
                        var r11 = n6.id(), i11 = n6.connectedEdges().intersection(e2);
                        l14.merge(n6), t4[r11].cutVertex ? l14.merge(i11.filter(function(e3) {
                            return e3.isLoop();
                        })) : l14.merge(i11);
                    });
                }), i9.push(l14);
            })(u8, p8))));
        });
    };
    e2.forEach(function(e3) {
        if (e3.isNode()) {
            var n3 = e3.id();
            n3 in t4 || (r7 = 0, s8(n3, n3), t4[n3].cutVertex = r7 > 1);
        }
    });
    var l12 = Object.keys(t4).filter(function(e3) {
        return t4[e3].cutVertex;
    }).map(function(t5) {
        return e2.getElementById(t5);
    });
    return {
        cut: e2.spawn(l12),
        components: i9
    };
}, Yn = function() {
    var e2 = this, t4 = {
    }, n2 = 0, r7 = [], i9 = [], a15 = e2.spawn(e2);
    return e2.forEach(function(o10) {
        if (o10.isNode()) {
            var s8 = o10.id();
            s8 in t4 || (function o12(s10) {
                if (i9.push(s10), t4[s10] = {
                    index: n2,
                    low: n2++,
                    explored: !1
                }, e2.getElementById(s10).connectedEdges().intersection(e2).forEach(function(e3) {
                    var n4 = e3.target().id();
                    n4 !== s10 && (n4 in t4 || o12(n4), t4[n4].explored || (t4[s10].low = Math.min(t4[s10].low, t4[n4].low)));
                }), t4[s10].index === t4[s10].low) {
                    for(var l12 = e2.spawn();;){
                        var u8 = i9.pop();
                        if (l12.merge(e2.getElementById(u8)), t4[u8].low = t4[s10].index, t4[u8].explored = !0, u8 === s10) break;
                    }
                    var c10 = l12.edgesWith(l12), d16 = l12.merge(c10);
                    r7.push(d16), a15 = a15.difference(d16);
                }
            })(s8);
        }
    }), {
        cut: a15,
        components: r7
    };
}, Xn = {
};
[
    Ve,
    je,
    Ye,
    We,
    Ke,
    Ze,
    Je,
    jt,
    Xt,
    Ht,
    Gt,
    an,
    Tn,
    zn,
    Fn,
    {
        hierholzer: function(e2) {
            if (!v1(e2)) {
                var t4 = arguments;
                e2 = {
                    root: t4[0],
                    directed: t4[1]
                };
            }
            var n2, r7, i9, a15 = qn(e2), o10 = a15.root, s10 = a15.directed, l14 = this, u11 = !1;
            o10 && (i9 = p(o10) ? this.filter(o10)[0].id() : o10[0].id());
            var c12 = {
            }, d18 = {
            };
            s10 ? l14.forEach(function(e3) {
                var t5 = e3.id();
                if (e3.isNode()) {
                    var i11 = e3.indegree(!0), a17 = e3.outdegree(!0), o12 = i11 - a17, s11 = a17 - i11;
                    1 == o12 ? n2 ? u11 = !0 : n2 = t5 : 1 == s11 ? r7 ? u11 = !0 : r7 = t5 : (s11 > 1 || o12 > 1) && (u11 = !0), c12[t5] = [], e3.outgoers().forEach(function(e4) {
                        e4.isEdge() && c12[t5].push(e4.id());
                    });
                } else d18[t5] = [
                    void 0,
                    e3.target().id()
                ];
            }) : l14.forEach(function(e3) {
                var t5 = e3.id();
                e3.isNode() ? (e3.degree(!0) % 2 && (n2 ? r7 ? u11 = !0 : r7 = t5 : n2 = t5), c12[t5] = [], e3.connectedEdges().forEach(function(e4) {
                    return c12[t5].push(e4.id());
                })) : d18[t5] = [
                    e3.source().id(),
                    e3.target().id()
                ];
            });
            var h12 = {
                found: !1,
                trail: void 0
            };
            if (u11) return h12;
            if (r7 && n2) {
                if (s10) {
                    if (i9 && r7 != i9) return h12;
                    i9 = r7;
                } else {
                    if (i9 && r7 != i9 && n2 != i9) return h12;
                    i9 || (i9 = r7);
                }
            } else i9 || (i9 = l14[0].id());
            var f11 = function(e3) {
                for(var t5, n4, r9, i12 = e3, a18 = [
                    e3
                ]; c12[i12].length;)t5 = c12[i12].shift(), n4 = d18[t5][0], i12 != (r9 = d18[t5][1]) ? (c12[r9] = c12[r9].filter(function(e4) {
                    return e4 != t5;
                }), i12 = r9) : s10 || i12 == n4 || (c12[n4] = c12[n4].filter(function(e4) {
                    return e4 != t5;
                }), i12 = n4), a18.unshift(t5), a18.unshift(i12);
                return a18;
            }, g10 = [], y11 = [];
            for(y11 = f11(i9); 1 != y11.length;)0 == c12[y11[0]].length ? (g10.unshift(l14.getElementById(y11.shift())), g10.unshift(l14.getElementById(y11.shift()))) : y11 = f11(y11.shift()).concat(y11);
            for(var m6 in g10.unshift(l14.getElementById(y11.shift())), c12)if (c12[m6].length) return h12;
            return h12.found = !0, h12.trail = this.spawn(g10, !0), h12;
        }
    },
    {
        hopcroftTarjanBiconnected: jn,
        htbc: jn,
        htb: jn,
        hopcroftTarjanBiconnectedComponents: jn
    },
    {
        tarjanStronglyConnected: Yn,
        tsc: Yn,
        tscc: Yn,
        tarjanStronglyConnectedComponents: Yn
    }
].forEach(function(e2) {
    I10(Xn, e2);
});
var Wn = function e2(t5) {
    if (!(this instanceof e2)) return new e2(t5);
    this.id = "Thenable/1.0.7", this.state = 0, this.fulfillValue = void 0, this.rejectReason = void 0, this.onFulfilled = [], this.onRejected = [], this.proxy = {
        then: this.then.bind(this)
    }, "function" == typeof t5 && t5.call(this, this.fulfill.bind(this), this.reject.bind(this));
};
Wn.prototype = {
    fulfill: function(e3) {
        return Hn(this, 1, "fulfillValue", e3);
    },
    reject: function(e3) {
        return Hn(this, 2, "rejectReason", e3);
    },
    then: function(e3, t5) {
        var n2 = new Wn;
        return this.onFulfilled.push(Zn(e3, n2, "fulfill")), this.onRejected.push(Zn(t5, n2, "reject")), Kn(this), n2.proxy;
    }
};
var Hn = function(e3, t5, n2, r7) {
    return 0 === e3.state && (e3.state = t5, e3[n2] = r7, Kn(e3)), e3;
}, Kn = function(e3) {
    1 === e3.state ? Gn(e3, "onFulfilled", e3.fulfillValue) : 2 === e3.state && Gn(e3, "onRejected", e3.rejectReason);
}, Gn = function(e3, t5, n2) {
    if (0 !== e3[t5].length) {
        var r7 = e3[t5];
        e3[t5] = [];
        var i9 = function() {
            for(var e4 = 0; e4 < r7.length; e4++)r7[e4](n2);
        };
        "function" == typeof setImmediate ? setImmediate(i9) : setTimeout(i9, 0);
    }
}, Zn = function(e3, t5, n2) {
    return function(r9) {
        if ("function" != typeof e3) t5[n2].call(t5, r9);
        else {
            var i12;
            try {
                i12 = e3(r9);
            } catch (e4) {
                return void t5.reject(e4);
            }
            Un(t5, i12);
        }
    };
}, Un = function t5(n2, r9) {
    if (n2 !== r9 && n2.proxy !== r9) {
        var i13;
        if ("object" === e(r9) && null !== r9 || "function" == typeof r9) try {
            i13 = r9.then;
        } catch (e3) {
            return void n2.reject(e3);
        }
        if ("function" != typeof i13) n2.fulfill(r9);
        else {
            var a15 = !1;
            try {
                i13.call(r9, function(e3) {
                    a15 || (a15 = !0, e3 === r9 ? n2.reject(new TypeError("circular thenable chain")) : t5(n2, e3));
                }, function(e3) {
                    a15 || (a15 = !0, n2.reject(e3));
                });
            } catch (e3) {
                a15 || n2.reject(e3);
            }
        }
    } else n2.reject(new TypeError("cannot resolve promise with itself"));
};
Wn.all = function(e3) {
    return new Wn(function(t6, n2) {
        for(var r9 = new Array(e3.length), i14 = 0, a18 = function(n4, a19) {
            r9[n4] = a19, (++i14) === e3.length && t6(r9);
        }, o10 = 0; o10 < e3.length; o10++)!function(t7) {
            var r10 = e3[t7];
            null != r10 && null != r10.then ? r10.then(function(e4) {
                a18(t7, e4);
            }, function(e4) {
                n2(e4);
            }) : a18(t7, r10);
        }(o10);
    });
}, Wn.resolve = function(e3) {
    return new Wn(function(t6, n2) {
        t6(e3);
    });
}, Wn.reject = function(e3) {
    return new Wn(function(t6, n2) {
        n2(e3);
    });
};
var $n = "undefined" != typeof Promise ? Promise : Wn, Qn = function(e3, t6, n2) {
    var r9 = E(e3), i14 = !r9, a18 = this._private = I10({
        duration: 1000
    }, t6, n2);
    if (a18.target = e3, a18.style = a18.style || a18.css, a18.started = !1, a18.playing = !1, a18.hooked = !1, a18.applying = !1, a18.progress = 0, a18.completes = [], a18.frames = [], a18.complete && f(a18.complete) && a18.completes.push(a18.complete), i14) {
        var o10 = e3.position();
        a18.startPosition = a18.startPosition || {
            x: o10.x,
            y: o10.y
        }, a18.startStyle = a18.startStyle || e3.cy().style().getAnimationStartStyle(e3, a18.style);
    }
    if (r9) {
        var s10 = e3.pan();
        a18.startPan = {
            x: s10.x,
            y: s10.y
        }, a18.startZoom = e3.zoom();
    }
    this.length = 1, this[0] = this;
}, Jn = Qn.prototype;
I10(Jn, {
    instanceString: function() {
        return "animation";
    },
    hook: function() {
        var e3 = this._private;
        if (!e3.hooked) {
            var t6 = e3.target._private.animation;
            (e3.queue ? t6.queue : t6.current).push(this), b1(e3.target) && e3.target.cy().addToAnimationPool(e3.target), e3.hooked = !0;
        }
        return this;
    },
    play: function() {
        var e3 = this._private;
        return 1 === e3.progress && (e3.progress = 0), e3.playing = !0, e3.started = !1, e3.stopped = !1, this.hook(), this;
    },
    playing: function() {
        return this._private.playing;
    },
    apply: function() {
        var e3 = this._private;
        return e3.applying = !0, e3.started = !1, e3.stopped = !1, this.hook(), this;
    },
    applying: function() {
        return this._private.applying;
    },
    pause: function() {
        var e3 = this._private;
        return e3.playing = !1, e3.started = !1, this;
    },
    stop: function() {
        var e3 = this._private;
        return e3.playing = !1, e3.started = !1, e3.stopped = !0, this;
    },
    rewind: function() {
        return this.progress(0);
    },
    fastforward: function() {
        return this.progress(1);
    },
    time: function(e3) {
        var t7 = this._private;
        return (void 0) === e3 ? t7.progress * t7.duration : this.progress(e3 / t7.duration);
    },
    progress: function(e3) {
        var t7 = this._private, n2 = t7.playing;
        return (void 0) === e3 ? t7.progress : (n2 && this.pause(), t7.progress = e3, t7.started = !1, n2 && this.play(), this);
    },
    completed: function() {
        return 1 === this._private.progress;
    },
    reverse: function() {
        var e3 = this._private, t7 = e3.playing;
        t7 && this.pause(), e3.progress = 1 - e3.progress, e3.started = !1;
        var n2 = function(t8, n4) {
            var r9 = e3[t8];
            null != r9 && (e3[t8] = e3[n4], e3[n4] = r9);
        };
        if (n2("zoom", "startZoom"), n2("pan", "startPan"), n2("position", "startPosition"), e3.style) for(var r9 = 0; r9 < e3.style.length; r9++){
            var i14 = e3.style[r9], a18 = i14.name, o13 = e3.startStyle[a18];
            e3.startStyle[a18] = i14, e3.style[r9] = o13;
        }
        return t7 && this.play(), this;
    },
    promise: function(e3) {
        var t7, n2 = this._private;
        switch(e3){
            case "frame":
                t7 = n2.frames;
                break;
            default:
            case "complete":
            case "completed":
                t7 = n2.completes;
        }
        return new $n(function(e4, n4) {
            t7.push(function() {
                e4();
            });
        });
    }
}), Jn.complete = Jn.completed, Jn.run = Jn.play, Jn.running = Jn.playing;
var er = {
};
[
    {
        animated: function() {
            return function() {
                var e3 = (void 0) !== this.length ? this : [
                    this
                ];
                if (!(this._private.cy || this).styleEnabled()) return !1;
                var t7 = e3[0];
                return t7 ? t7._private.animation.current.length > 0 : void 0;
            };
        },
        clearQueue: function() {
            return function() {
                var e3 = (void 0) !== this.length ? this : [
                    this
                ];
                if (!(this._private.cy || this).styleEnabled()) return this;
                for(var t7 = 0; t7 < e3.length; t7++){
                    e3[t7]._private.animation.queue = [];
                }
                return this;
            };
        },
        delay: function() {
            return function(e3, t7) {
                return (this._private.cy || this).styleEnabled() ? this.animate({
                    delay: e3,
                    duration: e3,
                    complete: t7
                }) : this;
            };
        },
        delayAnimation: function() {
            return function(e3, t7) {
                return (this._private.cy || this).styleEnabled() ? this.animation({
                    delay: e3,
                    duration: e3,
                    complete: t7
                }) : this;
            };
        },
        animation: function() {
            return function(e3, t7) {
                var n2 = (void 0) !== this.length, r9 = n2 ? this : [
                    this
                ], i15 = this._private.cy || this, a19 = !n2, o14 = !a19;
                if (!i15.styleEnabled()) return this;
                var s12 = i15.style();
                if (e3 = I10({
                }, e3, t7), 0 === Object.keys(e3).length) return new Qn(r9[0], e3);
                switch((void 0) === e3.duration && (e3.duration = 400), e3.duration){
                    case "slow":
                        e3.duration = 600;
                        break;
                    case "fast":
                        e3.duration = 200;
                }
                if (o14 && (e3.style = s12.getPropsList(e3.style || e3.css), e3.css = void 0), o14 && null != e3.renderedPosition) {
                    var l14 = e3.renderedPosition, u11 = i15.pan(), c12 = i15.zoom();
                    e3.position = tt(l14, c12, u11);
                }
                if (a19 && null != e3.panBy) {
                    var d18 = e3.panBy, h12 = i15.pan();
                    e3.pan = {
                        x: h12.x + d18.x,
                        y: h12.y + d18.y
                    };
                }
                var p8 = e3.center || e3.centre;
                if (a19 && null != p8) {
                    var f11 = i15.getCenterPan(p8.eles, e3.zoom);
                    null != f11 && (e3.pan = f11);
                }
                if (a19 && null != e3.fit) {
                    var g10 = e3.fit, y11 = i15.getFitViewport(g10.eles || g10.boundingBox, g10.padding);
                    null != y11 && (e3.pan = y11.pan, e3.zoom = y11.zoom);
                }
                if (a19 && v1(e3.zoom)) {
                    var m6 = i15.getZoomedViewport(e3.zoom);
                    null != m6 ? (m6.zoomed && (e3.zoom = m6.zoom), m6.panned && (e3.pan = m6.pan)) : e3.zoom = null;
                }
                return new Qn(r9[0], e3);
            };
        },
        animate: function() {
            return function(e3, t7) {
                var n2 = (void 0) !== this.length ? this : [
                    this
                ];
                if (!(this._private.cy || this).styleEnabled()) return this;
                t7 && (e3 = I10({
                }, e3, t7));
                for(var r9 = 0; r9 < n2.length; r9++){
                    var i15 = n2[r9], a19 = i15.animated() && ((void 0) === e3.queue || e3.queue);
                    i15.animation(e3, a19 ? {
                        queue: !0
                    } : void 0).play();
                }
                return this;
            };
        },
        stop: function() {
            return function(e3, t7) {
                var n2 = (void 0) !== this.length ? this : [
                    this
                ], r9 = this._private.cy || this;
                if (!r9.styleEnabled()) return this;
                for(var i16 = 0; i16 < n2.length; i16++){
                    for(var a20 = n2[i16]._private, o14 = a20.animation.current, s12 = 0; s12 < o14.length; s12++){
                        var l15 = o14[s12]._private;
                        t7 && (l15.duration = 0);
                    }
                    e3 && (a20.animation.queue = []), t7 || (a20.animation.current = []);
                }
                return r9.notify("draw"), this;
            };
        }
    },
    {
        data: function(e3) {
            return e3 = I10({
            }, {
                field: "data",
                bindingEvent: "data",
                allowBinding: !1,
                allowSetting: !1,
                allowGetting: !1,
                settingEvent: "data",
                settingTriggersEvent: !1,
                triggerFnName: "trigger",
                immutableKeys: {
                },
                updateStyle: !1,
                beforeGet: function(e4) {
                },
                beforeSet: function(e4, t7) {
                },
                onSet: function(e4) {
                },
                canSet: function(e4) {
                    return !0;
                }
            }, e3), function(t7, n2) {
                var r9 = e3, a21 = (void 0) !== this.length, o15 = a21 ? this : [
                    this
                ], s13 = a21 ? this[0] : this;
                if (p(t7)) {
                    var l16;
                    if (r9.allowGetting && (void 0) === n2) return s13 && (r9.beforeGet(s13), l16 = s13._private[r9.field][t7]), l16;
                    if (r9.allowSetting && (void 0) !== n2 && !r9.immutableKeys[t7]) {
                        var u12 = i22({
                        }, t7, n2);
                        r9.beforeSet(this, u12);
                        for(var c13 = 0, d19 = o15.length; c13 < d19; c13++){
                            var h13 = o15[c13];
                            r9.canSet(h13) && (h13._private[r9.field][t7] = n2);
                        }
                        r9.updateStyle && this.updateStyle(), r9.onSet(this), r9.settingTriggersEvent && this[r9.triggerFnName](r9.settingEvent);
                    }
                } else if (r9.allowSetting && v1(t7)) {
                    var g11, y12, m7 = t7, b8 = Object.keys(m7);
                    r9.beforeSet(this, m7);
                    for(var x7 = 0; x7 < b8.length; x7++){
                        if (y12 = m7[g11 = b8[x7]], !r9.immutableKeys[g11]) for(var w9 = 0; w9 < o15.length; w9++){
                            var E10 = o15[w9];
                            r9.canSet(E10) && (E10._private[r9.field][g11] = y12);
                        }
                    }
                    r9.updateStyle && this.updateStyle(), r9.onSet(this), r9.settingTriggersEvent && this[r9.triggerFnName](r9.settingEvent);
                } else if (r9.allowBinding && f(t7)) {
                    var k9 = t7;
                    this.on(r9.bindingEvent, k9);
                } else if (r9.allowGetting && (void 0) === t7) {
                    var C7;
                    return s13 && (r9.beforeGet(s13), C7 = s13._private[r9.field]), C7;
                }
                return this;
            };
        },
        removeData: function(e3) {
            return e3 = I10({
            }, {
                field: "data",
                event: "data",
                triggerFnName: "trigger",
                triggerEvent: !1,
                immutableKeys: {
                }
            }, e3), function(t7) {
                var n2 = e3, r9 = (void 0) !== this.length ? this : [
                    this
                ];
                if (p(t7)) {
                    for(var i16 = t7.split(/\s+/), a21 = i16.length, o15 = 0; o15 < a21; o15++){
                        var s13 = i16[o15];
                        if (!C(s13)) {
                            if (!n2.immutableKeys[s13]) for(var l17 = 0, u13 = r9.length; l17 < u13; l17++)r9[l17]._private[n2.field][s13] = void 0;
                        }
                    }
                    n2.triggerEvent && this[n2.triggerFnName](n2.event);
                } else if ((void 0) === t7) {
                    for(var c14 = 0, d20 = r9.length; c14 < d20; c14++)for(var h14 = r9[c14]._private[n2.field], f12 = Object.keys(h14), g12 = 0; g12 < f12.length; g12++){
                        var v11 = f12[g12];
                        !n2.immutableKeys[v11] && (h14[v11] = void 0);
                    }
                    n2.triggerEvent && this[n2.triggerFnName](n2.event);
                }
                return this;
            };
        }
    },
    {
        eventAliasesOn: function(e3) {
            var t7 = e3;
            t7.addListener = t7.listen = t7.bind = t7.on, t7.unlisten = t7.unbind = t7.off = t7.removeListener, t7.trigger = t7.emit, t7.pon = t7.promiseOn = function(e4, t8) {
                var n2 = this, r9 = Array.prototype.slice.call(arguments, 0);
                return new $n(function(e5, t9) {
                    var i17 = r9.concat([
                        function(t10) {
                            n2.off.apply(n2, a23), e5(t10);
                        }
                    ]), a23 = i17.concat([]);
                    n2.on.apply(n2, i17);
                });
            };
        }
    }
].forEach(function(e3) {
    I10(er, e3);
});
var tr = {
    animate: er.animate(),
    animation: er.animation(),
    animated: er.animated(),
    clearQueue: er.clearQueue(),
    delay: er.delay(),
    delayAnimation: er.delayAnimation(),
    stop: er.stop()
}, nr = {
    classes: function(e3) {
        if ((void 0) === e3) {
            var t7 = [];
            return this[0]._private.classes.forEach(function(e4) {
                return t7.push(e4);
            }), t7;
        }
        g25(e3) || (e3 = (e3 || "").match(/\S+/g) || []);
        for(var n2 = [], r9 = new Ae(e3), i17 = 0; i17 < this.length; i17++){
            for(var a23 = this[i17], o16 = a23._private, s14 = o16.classes, l18 = !1, u14 = 0; u14 < e3.length; u14++){
                var c15 = e3[u14];
                if (!s14.has(c15)) {
                    l18 = !0;
                    break;
                }
            }
            l18 || (l18 = s14.size !== e3.length), l18 && (o16.classes = r9, n2.push(a23));
        }
        return n2.length > 0 && this.spawn(n2).updateStyle().emit("class"), this;
    },
    addClass: function(e3) {
        return this.toggleClass(e3, !0);
    },
    hasClass: function(e3) {
        var t8 = this[0];
        return null != t8 && t8._private.classes.has(e3);
    },
    toggleClass: function(e3, t8) {
        g25(e3) || (e3 = e3.match(/\S+/g) || []);
        for(var n2 = (void 0) === t8, r9 = [], i17 = 0, a24 = this.length; i17 < a24; i17++)for(var o17 = this[i17], s15 = o17._private.classes, l19 = !1, u15 = 0; u15 < e3.length; u15++){
            var c16 = e3[u15], d21 = s15.has(c16), h15 = !1;
            t8 || n2 && !d21 ? (s15.add(c16), h15 = !0) : (!t8 || n2 && d21) && (s15.delete(c16), h15 = !0), !l19 && h15 && (r9.push(o17), l19 = !0);
        }
        return r9.length > 0 && this.spawn(r9).updateStyle().emit("class"), this;
    },
    removeClass: function(e3) {
        return this.toggleClass(e3, !1);
    },
    flashClass: function(e3, t8) {
        var n2 = this;
        if (null == t8) t8 = 250;
        else if (0 === t8) return n2;
        return n2.addClass(e3), setTimeout(function() {
            n2.removeClass(e3);
        }, t8), n2;
    }
};
nr.className = nr.classNames = nr.classes;
var rr = {
    metaChar: "[\\!\\\"\\#\\$\\%\\&\\'\\(\\)\\*\\+\\,\\.\\/\\:\\;\\<\\=\\>\\?\\@\\[\\]\\^\\`\\{\\|\\}\\~]",
    comparatorOp: "=|\\!=|>|>=|<|<=|\\$=|\\^=|\\*=",
    boolOp: "\\?|\\!|\\^",
    string: "\"(?:\\\\\"|[^\"])*\"|'(?:\\\\'|[^'])*'",
    number: _,
    meta: "degree|indegree|outdegree",
    separator: "\\s*,\\s*",
    descendant: "\\s+",
    child: "\\s+>\\s+",
    subject: "\\$",
    group: "node|edge|\\*",
    directedEdge: "\\s+->\\s+",
    undirectedEdge: "\\s+<->\\s+"
};
rr.variable = "(?:[\\w-]|(?:\\\\" + rr.metaChar + "))+", rr.value = rr.string + "|" + rr.number, rr.className = rr.variable, rr.id = rr.variable, (function() {
    var e3, t8, n2;
    for(e3 = rr.comparatorOp.split("|"), n2 = 0; n2 < e3.length; n2++)t8 = e3[n2], rr.comparatorOp += "|@" + t8;
    for(e3 = rr.comparatorOp.split("|"), n2 = 0; n2 < e3.length; n2++)(t8 = e3[n2]).indexOf("!") >= 0 || "=" !== t8 && (rr.comparatorOp += "|\\!" + t8);
})();
var ir = 0, ar = 1, or = 2, sr = 3, lr = 4, ur = 5, cr = 6, dr = 7, hr = 8, pr = 9, fr = 10, gr = 11, vr = 12, yr = 13, mr = 14, br = 15, xr = 16, wr = 17, Er = 18, kr = 19, Cr = 20, Sr = [
    {
        selector: ":selected",
        matches: function(e3) {
            return e3.selected();
        }
    },
    {
        selector: ":unselected",
        matches: function(e3) {
            return !e3.selected();
        }
    },
    {
        selector: ":selectable",
        matches: function(e3) {
            return e3.selectable();
        }
    },
    {
        selector: ":unselectable",
        matches: function(e3) {
            return !e3.selectable();
        }
    },
    {
        selector: ":locked",
        matches: function(e3) {
            return e3.locked();
        }
    },
    {
        selector: ":unlocked",
        matches: function(e3) {
            return !e3.locked();
        }
    },
    {
        selector: ":visible",
        matches: function(e3) {
            return e3.visible();
        }
    },
    {
        selector: ":hidden",
        matches: function(e3) {
            return !e3.visible();
        }
    },
    {
        selector: ":transparent",
        matches: function(e3) {
            return e3.transparent();
        }
    },
    {
        selector: ":grabbed",
        matches: function(e3) {
            return e3.grabbed();
        }
    },
    {
        selector: ":free",
        matches: function(e3) {
            return !e3.grabbed();
        }
    },
    {
        selector: ":removed",
        matches: function(e3) {
            return e3.removed();
        }
    },
    {
        selector: ":inside",
        matches: function(e3) {
            return !e3.removed();
        }
    },
    {
        selector: ":grabbable",
        matches: function(e3) {
            return e3.grabbable();
        }
    },
    {
        selector: ":ungrabbable",
        matches: function(e3) {
            return !e3.grabbable();
        }
    },
    {
        selector: ":animated",
        matches: function(e3) {
            return e3.animated();
        }
    },
    {
        selector: ":unanimated",
        matches: function(e3) {
            return !e3.animated();
        }
    },
    {
        selector: ":parent",
        matches: function(e3) {
            return e3.isParent();
        }
    },
    {
        selector: ":childless",
        matches: function(e3) {
            return e3.isChildless();
        }
    },
    {
        selector: ":child",
        matches: function(e3) {
            return e3.isChild();
        }
    },
    {
        selector: ":orphan",
        matches: function(e3) {
            return e3.isOrphan();
        }
    },
    {
        selector: ":nonorphan",
        matches: function(e3) {
            return e3.isChild();
        }
    },
    {
        selector: ":compound",
        matches: function(e3) {
            return e3.isNode() ? e3.isParent() : e3.source().isParent() || e3.target().isParent();
        }
    },
    {
        selector: ":loop",
        matches: function(e3) {
            return e3.isLoop();
        }
    },
    {
        selector: ":simple",
        matches: function(e3) {
            return e3.isSimple();
        }
    },
    {
        selector: ":active",
        matches: function(e3) {
            return e3.active();
        }
    },
    {
        selector: ":inactive",
        matches: function(e3) {
            return !e3.active();
        }
    },
    {
        selector: ":backgrounding",
        matches: function(e3) {
            return e3.backgrounding();
        }
    },
    {
        selector: ":nonbackgrounding",
        matches: function(e3) {
            return !e3.backgrounding();
        }
    }
].sort(function(e3, t8) {
    return (function(e4, t9) {
        return -1 * N(e4, t9);
    })(e3.selector, t8.selector);
}), Pr = function() {
    for(var e3, t8 = {
    }, n2 = 0; n2 < Sr.length; n2++)t8[(e3 = Sr[n2]).selector] = e3.matches;
    return t8;
}(), Dr = "(" + Sr.map(function(e3) {
    return e3.selector;
}).join("|") + ")", Tr = function(e3) {
    return e3.replace(new RegExp("\\\\(" + rr.metaChar + ")", "g"), function(e4, t8) {
        return t8;
    });
}, Mr = function(e3, t8, n2) {
    e3[e3.length - 1] = n2;
}, Br = [
    {
        name: "group",
        query: !0,
        regex: "(" + rr.group + ")",
        populate: function(e3, t8, n2) {
            var r9 = a22(n2, 1)[0];
            t8.checks.push({
                type: ir,
                value: "*" === r9 ? r9 : r9 + "s"
            });
        }
    },
    {
        name: "state",
        query: !0,
        regex: Dr,
        populate: function(e3, t8, n2) {
            var r9 = a22(n2, 1)[0];
            t8.checks.push({
                type: dr,
                value: r9
            });
        }
    },
    {
        name: "id",
        query: !0,
        regex: "\\#(" + rr.id + ")",
        populate: function(e3, t8, n2) {
            var r9 = a22(n2, 1)[0];
            t8.checks.push({
                type: hr,
                value: Tr(r9)
            });
        }
    },
    {
        name: "className",
        query: !0,
        regex: "\\.(" + rr.className + ")",
        populate: function(e3, t8, n2) {
            var r9 = a22(n2, 1)[0];
            t8.checks.push({
                type: pr,
                value: Tr(r9)
            });
        }
    },
    {
        name: "dataExists",
        query: !0,
        regex: "\\[\\s*(" + rr.variable + ")\\s*\\]",
        populate: function(e3, t8, n2) {
            var r9 = a22(n2, 1)[0];
            t8.checks.push({
                type: lr,
                field: Tr(r9)
            });
        }
    },
    {
        name: "dataCompare",
        query: !0,
        regex: "\\[\\s*(" + rr.variable + ")\\s*(" + rr.comparatorOp + ")\\s*(" + rr.value + ")\\s*\\]",
        populate: function(e3, t8, n2) {
            var r9 = a22(n2, 3), i17 = r9[0], o17 = r9[1], s15 = r9[2];
            s15 = null != new RegExp("^" + rr.string + "$").exec(s15) ? s15.substring(1, s15.length - 1) : parseFloat(s15), t8.checks.push({
                type: sr,
                field: Tr(i17),
                operator: o17,
                value: s15
            });
        }
    },
    {
        name: "dataBool",
        query: !0,
        regex: "\\[\\s*(" + rr.boolOp + ")\\s*(" + rr.variable + ")\\s*\\]",
        populate: function(e3, t8, n2) {
            var r9 = a22(n2, 2), i17 = r9[0], o17 = r9[1];
            t8.checks.push({
                type: ur,
                field: Tr(o17),
                operator: i17
            });
        }
    },
    {
        name: "metaCompare",
        query: !0,
        regex: "\\[\\[\\s*(" + rr.meta + ")\\s*(" + rr.comparatorOp + ")\\s*(" + rr.number + ")\\s*\\]\\]",
        populate: function(e3, t8, n2) {
            var r9 = a22(n2, 3), i17 = r9[0], o17 = r9[1], s15 = r9[2];
            t8.checks.push({
                type: cr,
                field: Tr(i17),
                operator: o17,
                value: parseFloat(s15)
            });
        }
    },
    {
        name: "nextQuery",
        separator: !0,
        regex: rr.separator,
        populate: function(e3, t8) {
            var n2 = e3.currentSubject, r9 = e3.edgeCount, i17 = e3.compoundCount, a24 = e3[e3.length - 1];
            return null != n2 && (a24.subject = n2, e3.currentSubject = null), a24.edgeCount = r9, a24.compoundCount = i17, e3.edgeCount = 0, e3.compoundCount = 0, e3[e3.length++] = {
                checks: []
            };
        }
    },
    {
        name: "directedEdge",
        separator: !0,
        regex: rr.directedEdge,
        populate: function(e3, t8) {
            if (null == e3.currentSubject) {
                var n2 = {
                    checks: []
                }, r9 = t8, i17 = {
                    checks: []
                };
                return n2.checks.push({
                    type: gr,
                    source: r9,
                    target: i17
                }), Mr(e3, 0, n2), e3.edgeCount++, i17;
            }
            var a24 = {
                checks: []
            }, o17 = t8, s15 = {
                checks: []
            };
            return a24.checks.push({
                type: vr,
                source: o17,
                target: s15
            }), Mr(e3, 0, a24), e3.edgeCount++, s15;
        }
    },
    {
        name: "undirectedEdge",
        separator: !0,
        regex: rr.undirectedEdge,
        populate: function(e3, t8) {
            if (null == e3.currentSubject) {
                var n4 = {
                    checks: []
                }, r10 = t8, i18 = {
                    checks: []
                };
                return n4.checks.push({
                    type: fr,
                    nodes: [
                        r10,
                        i18
                    ]
                }), Mr(e3, 0, n4), e3.edgeCount++, i18;
            }
            var a24 = {
                checks: []
            }, o17 = t8, s15 = {
                checks: []
            };
            return a24.checks.push({
                type: mr,
                node: o17,
                neighbor: s15
            }), Mr(e3, 0, a24), s15;
        }
    },
    {
        name: "child",
        separator: !0,
        regex: rr.child,
        populate: function(e3, t8) {
            if (null == e3.currentSubject) {
                var n5 = {
                    checks: []
                }, r11 = {
                    checks: []
                }, i19 = e3[e3.length - 1];
                return n5.checks.push({
                    type: br,
                    parent: i19,
                    child: r11
                }), Mr(e3, 0, n5), e3.compoundCount++, r11;
            }
            if (e3.currentSubject === t8) {
                var a24 = {
                    checks: []
                }, o17 = e3[e3.length - 1], s15 = {
                    checks: []
                }, l19 = {
                    checks: []
                }, u15 = {
                    checks: []
                }, c17 = {
                    checks: []
                };
                return a24.checks.push({
                    type: kr,
                    left: o17,
                    right: s15,
                    subject: l19
                }), l19.checks = t8.checks, t8.checks = [
                    {
                        type: Cr
                    }
                ], c17.checks.push({
                    type: Cr
                }), s15.checks.push({
                    type: wr,
                    parent: c17,
                    child: u15
                }), Mr(e3, 0, a24), e3.currentSubject = l19, e3.compoundCount++, u15;
            }
            var d22 = {
                checks: []
            }, h16 = {
                checks: []
            }, p8 = [
                {
                    type: wr,
                    parent: d22,
                    child: h16
                }
            ];
            return d22.checks = t8.checks, t8.checks = p8, e3.compoundCount++, h16;
        }
    },
    {
        name: "descendant",
        separator: !0,
        regex: rr.descendant,
        populate: function(e3, t8) {
            if (null == e3.currentSubject) {
                var n6 = {
                    checks: []
                }, r12 = {
                    checks: []
                }, i20 = e3[e3.length - 1];
                return n6.checks.push({
                    type: xr,
                    ancestor: i20,
                    descendant: r12
                }), Mr(e3, 0, n6), e3.compoundCount++, r12;
            }
            if (e3.currentSubject === t8) {
                var a25 = {
                    checks: []
                }, o18 = e3[e3.length - 1], s16 = {
                    checks: []
                }, l20 = {
                    checks: []
                }, u16 = {
                    checks: []
                }, c18 = {
                    checks: []
                };
                return a25.checks.push({
                    type: kr,
                    left: o18,
                    right: s16,
                    subject: l20
                }), l20.checks = t8.checks, t8.checks = [
                    {
                        type: Cr
                    }
                ], c18.checks.push({
                    type: Cr
                }), s16.checks.push({
                    type: Er,
                    ancestor: c18,
                    descendant: u16
                }), Mr(e3, 0, a25), e3.currentSubject = l20, e3.compoundCount++, u16;
            }
            var d22 = {
                checks: []
            }, h16 = {
                checks: []
            }, p8 = [
                {
                    type: Er,
                    ancestor: d22,
                    descendant: h16
                }
            ];
            return d22.checks = t8.checks, t8.checks = p8, e3.compoundCount++, h16;
        }
    },
    {
        name: "subject",
        modifier: !0,
        regex: rr.subject,
        populate: function(e3, t8) {
            if (null != e3.currentSubject && e3.currentSubject !== t8) return Ce("Redefinition of subject in selector `" + e3.toString() + "`"), !1;
            e3.currentSubject = t8;
            var n7 = e3[e3.length - 1].checks[0], r13 = null == n7 ? null : n7.type;
            r13 === gr ? n7.type = yr : r13 === fr && (n7.type = mr, n7.node = n7.nodes[1], n7.neighbor = n7.nodes[0], n7.nodes = null);
        }
    }
];
Br.forEach(function(e3) {
    return e3.regexObj = new RegExp("^" + e3.regex);
});
var _r = function(e3) {
    for(var t8, n7, r13, i21 = 0; i21 < Br.length; i21++){
        var a26 = Br[i21], o19 = a26.name, s17 = e3.match(a26.regexObj);
        if (null != s17) {
            n7 = s17, t8 = a26, r13 = o19;
            var l21 = s17[0];
            e3 = e3.substring(l21.length);
            break;
        }
    }
    return {
        expr: t8,
        match: n7,
        name: r13,
        remaining: e3
    };
}, Nr = {
    parse: function(e3) {
        var t8 = this.inputText = e3, n7 = this[0] = {
            checks: []
        };
        for(this.length = 1, t8 = (function(e4) {
            var t9 = e4.match(/^\s+/);
            if (t9) {
                var n8 = t9[0];
                e4 = e4.substring(n8.length);
            }
            return e4;
        })(t8);;){
            var r13 = _r(t8);
            if (null == r13.expr) return Ce("The selector `" + e3 + "`is invalid"), !1;
            var i21 = r13.match.slice(1), a27 = r13.expr.populate(this, n7, i21);
            if (!1 === a27) return !1;
            if (null != a27 && (n7 = a27), (t8 = r13.remaining).match(/^\s*$/)) break;
        }
        var o20 = this[this.length - 1];
        null != this.currentSubject && (o20.subject = this.currentSubject), o20.edgeCount = this.edgeCount, o20.compoundCount = this.compoundCount;
        for(var s18 = 0; s18 < this.length; s18++){
            var l22 = this[s18];
            if (l22.compoundCount > 0 && l22.edgeCount > 0) return Ce("The selector `" + e3 + "` is invalid because it uses both a compound selector and an edge selector"), !1;
            if (l22.edgeCount > 1) return Ce("The selector `" + e3 + "` is invalid because it uses multiple edge selectors"), !1;
            1 === l22.edgeCount && Ce("The selector `" + e3 + "` is deprecated.  Edge selectors do not take effect on changes to source and target nodes after an edge is added, for performance reasons.  Use a class or data selector on edges instead, updating the class or data of an edge when your app detects a change in source or target nodes.");
        }
        return !0;
    },
    toString: function() {
        if (null != this.toStringCache) return this.toStringCache;
        for(var e3 = function(e4) {
            return null == e4 ? "" : e4;
        }, t8 = function(t9) {
            return p(t9) ? '"' + t9 + '"' : e3(t9);
        }, n7 = function(e4) {
            return " " + e4 + " ";
        }, r14 = function(r15, a28) {
            var o20 = r15.type, s18 = r15.value;
            switch(o20){
                case ir:
                    var l23 = e3(s18);
                    return l23.substring(0, l23.length - 1);
                case sr:
                    var u17 = r15.field, c19 = r15.operator;
                    return "[" + u17 + n7(e3(c19)) + t8(s18) + "]";
                case ur:
                    var d22 = r15.operator, h16 = r15.field;
                    return "[" + e3(d22) + h16 + "]";
                case lr:
                    return "[" + r15.field + "]";
                case cr:
                    var p8 = r15.operator;
                    return "[[" + r15.field + n7(e3(p8)) + t8(s18) + "]]";
                case dr:
                    return s18;
                case hr:
                    return "#" + s18;
                case pr:
                    return "." + s18;
                case wr:
                case br:
                    return i23(r15.parent, a28) + n7(">") + i23(r15.child, a28);
                case Er:
                case xr:
                    return i23(r15.ancestor, a28) + " " + i23(r15.descendant, a28);
                case kr:
                    var f13 = i23(r15.left, a28), g13 = i23(r15.subject, a28), v12 = i23(r15.right, a28);
                    return f13 + (f13.length > 0 ? " " : "") + g13 + v12;
                case Cr:
                    return "";
            }
        }, i23 = function(e4, t9) {
            return e4.checks.reduce(function(n9, i24, a28) {
                return n9 + (t9 === e4 && 0 === a28 ? "$" : "") + r14(i24, t9);
            }, "");
        }, a28 = "", o20 = 0; o20 < this.length; o20++){
            var s18 = this[o20];
            a28 += i23(s18, s18.subject), this.length > 1 && o20 < this.length - 1 && (a28 += ", ");
        }
        return this.toStringCache = a28, a28;
    }
}, Ir = function(e3, t8, n7) {
    var r14, i23, a28, o20 = p(e3), s19 = y1(e3), l23 = p(n7), u17 = !1, c19 = !1, d22 = !1;
    switch(t8.indexOf("!") >= 0 && (t8 = t8.replace("!", ""), c19 = !0), t8.indexOf("@") >= 0 && (t8 = t8.replace("@", ""), u17 = !0), (o20 || l23 || u17) && (i23 = o20 || s19 ? "" + e3 : "", a28 = "" + n7), u17 && (e3 = i23 = i23.toLowerCase(), n7 = a28 = a28.toLowerCase()), t8){
        case "*=":
            r14 = i23.indexOf(a28) >= 0;
            break;
        case "$=":
            r14 = i23.indexOf(a28, i23.length - a28.length) >= 0;
            break;
        case "^=":
            r14 = 0 === i23.indexOf(a28);
            break;
        case "=":
            r14 = e3 === n7;
            break;
        case ">":
            d22 = !0, r14 = e3 > n7;
            break;
        case ">=":
            d22 = !0, r14 = e3 >= n7;
            break;
        case "<":
            d22 = !0, r14 = e3 < n7;
            break;
        case "<=":
            d22 = !0, r14 = e3 <= n7;
            break;
        default:
            r14 = !1;
    }
    return !c19 || null == e3 && d22 || (r14 = !r14), r14;
}, zr = function(e3, t8) {
    return e3.data(t8);
}, Lr = [], Ar = function(e3, t8) {
    return e3.checks.every(function(e4) {
        return Lr[e4.type](e4, t8);
    });
};
Lr[ir] = function(e3, t8) {
    var n7 = e3.value;
    return "*" === n7 || n7 === t8.group();
}, Lr[dr] = function(e3, t8) {
    return (function(e4, t9) {
        return Pr[e4](t9);
    })(e3.value, t8);
}, Lr[hr] = function(e3, t8) {
    var n7 = e3.value;
    return t8.id() === n7;
}, Lr[pr] = function(e3, t8) {
    var n7 = e3.value;
    return t8.hasClass(n7);
}, Lr[cr] = function(e3, t8) {
    var n7 = e3.field, r14 = e3.operator, i23 = e3.value;
    return Ir(function(e4, t9) {
        return e4[t9]();
    }(t8, n7), r14, i23);
}, Lr[sr] = function(e3, t8) {
    var n7 = e3.field, r14 = e3.operator, i23 = e3.value;
    return Ir(zr(t8, n7), r14, i23);
}, Lr[ur] = function(e3, t8) {
    var n7 = e3.field, r14 = e3.operator;
    return (function(e4, t9) {
        switch(t9){
            case "?":
                return !!e4;
            case "!":
                return !e4;
            case "^":
                return (void 0) === e4;
        }
    })(zr(t8, n7), r14);
}, Lr[lr] = function(e3, t8) {
    var n7 = e3.field;
    e3.operator;
    return (void 0) !== zr(t8, n7);
}, Lr[fr] = function(e3, t8) {
    var n7 = e3.nodes[0], r14 = e3.nodes[1], i23 = t8.source(), a28 = t8.target();
    return Ar(n7, i23) && Ar(r14, a28) || Ar(r14, i23) && Ar(n7, a28);
}, Lr[mr] = function(e3, t8) {
    return Ar(e3.node, t8) && t8.neighborhood().some(function(t9) {
        return t9.isNode() && Ar(e3.neighbor, t9);
    });
}, Lr[gr] = function(e3, t8) {
    return Ar(e3.source, t8.source()) && Ar(e3.target, t8.target());
}, Lr[vr] = function(e3, t8) {
    return Ar(e3.source, t8) && t8.outgoers().some(function(t9) {
        return t9.isNode() && Ar(e3.target, t9);
    });
}, Lr[yr] = function(e3, t8) {
    return Ar(e3.target, t8) && t8.incomers().some(function(t9) {
        return t9.isNode() && Ar(e3.source, t9);
    });
}, Lr[br] = function(e3, t8) {
    return Ar(e3.child, t8) && Ar(e3.parent, t8.parent());
}, Lr[wr] = function(e3, t8) {
    return Ar(e3.parent, t8) && t8.children().some(function(t9) {
        return Ar(e3.child, t9);
    });
}, Lr[xr] = function(e3, t8) {
    return Ar(e3.descendant, t8) && t8.ancestors().some(function(t9) {
        return Ar(e3.ancestor, t9);
    });
}, Lr[Er] = function(e3, t8) {
    return Ar(e3.ancestor, t8) && t8.descendants().some(function(t9) {
        return Ar(e3.descendant, t9);
    });
}, Lr[kr] = function(e3, t8) {
    return Ar(e3.subject, t8) && Ar(e3.left, t8) && Ar(e3.right, t8);
}, Lr[Cr] = function() {
    return !0;
}, Lr[ar] = function(e3, t8) {
    return e3.value.has(t8);
}, Lr[or] = function(e3, t8) {
    return (0, e3.value)(t8);
};
var Or = function(e3) {
    this.inputText = e3, this.currentSubject = null, this.compoundCount = 0, this.edgeCount = 0, this.length = 0, null == e3 || p(e3) && e3.match(/^\s*$/) || (b1(e3) ? this.addQuery({
        checks: [
            {
                type: ar,
                value: e3.collection()
            }
        ]
    }) : f(e3) ? this.addQuery({
        checks: [
            {
                type: or,
                value: e3
            }
        ]
    }) : p(e3) ? this.parse(e3) || (this.invalid = !0) : Ee("A selector must be created from a string; found "));
}, Rr = Or.prototype;
[
    Nr,
    {
        matches: function(e3) {
            for(var t8 = 0; t8 < this.length; t8++){
                var n7 = this[t8];
                if (Ar(n7, e3)) return !0;
            }
            return !1;
        },
        filter: function(e3) {
            var t8 = this;
            if (1 === t8.length && 1 === t8[0].checks.length && t8[0].checks[0].type === hr) return e3.getElementById(t8[0].checks[0].value).collection();
            var n9 = function(e4) {
                for(var n10 = 0; n10 < t8.length; n10++){
                    var r14 = t8[n10];
                    if (Ar(r14, e4)) return !0;
                }
                return !1;
            };
            return null == t8.text() && (n9 = function() {
                return !0;
            }), e3.filter(n9);
        }
    }
].forEach(function(e3) {
    return I10(Rr, e3);
}), Rr.text = function() {
    return this.inputText;
}, Rr.size = function() {
    return this.length;
}, Rr.eq = function(e3) {
    return this[e3];
}, Rr.sameText = function(e3) {
    return !this.invalid && !e3.invalid && this.text() === e3.text();
}, Rr.addQuery = function(e3) {
    this[this.length++] = e3;
}, Rr.selector = Rr.toString;
var Vr = {
    allAre: function(e3) {
        var t8 = new Or(e3);
        return this.every(function(e4) {
            return t8.matches(e4);
        });
    },
    is: function(e3) {
        var t8 = new Or(e3);
        return this.some(function(e4) {
            return t8.matches(e4);
        });
    },
    some: function(e3, t8) {
        for(var n9 = 0; n9 < this.length; n9++){
            if (t8 ? e3.apply(t8, [
                this[n9],
                n9,
                this
            ]) : e3(this[n9], n9, this)) return !0;
        }
        return !1;
    },
    every: function(e3, t8) {
        for(var n9 = 0; n9 < this.length; n9++){
            if (!(t8 ? e3.apply(t8, [
                this[n9],
                n9,
                this
            ]) : e3(this[n9], n9, this))) return !1;
        }
        return !0;
    },
    same: function(e3) {
        if (this === e3) return !0;
        e3 = this.cy().collection(e3);
        var t8 = this.length;
        return t8 === e3.length && (1 === t8 ? this[0] === e3[0] : this.every(function(t9) {
            return e3.hasElementWithId(t9.id());
        }));
    },
    anySame: function(e3) {
        return e3 = this.cy().collection(e3), this.some(function(t8) {
            return e3.hasElementWithId(t8.id());
        });
    },
    allAreNeighbors: function(e3) {
        e3 = this.cy().collection(e3);
        var t8 = this.neighborhood();
        return e3.every(function(e4) {
            return t8.hasElementWithId(e4.id());
        });
    },
    contains: function(e3) {
        e3 = this.cy().collection(e3);
        var t8 = this;
        return e3.every(function(e4) {
            return t8.hasElementWithId(e4.id());
        });
    }
};
Vr.allAreNeighbours = Vr.allAreNeighbors, Vr.has = Vr.contains, Vr.equal = Vr.equals = Vr.same;
var Fr, qr, jr = function(e3, t8) {
    return function(n9, r15, i23, a28) {
        var o20, s19 = n9;
        if (null == s19 ? o20 = "" : b1(s19) && 1 === s19.length && (o20 = s19.id()), 1 === this.length && o20) {
            var l23 = this[0]._private, u17 = l23.traversalCache = l23.traversalCache || {
            }, c19 = u17[t8] = u17[t8] || [], d22 = de(o20), h16 = c19[d22];
            return h16 || (c19[d22] = e3.call(this, n9, r15, i23, a28));
        }
        return e3.call(this, n9, r15, i23, a28);
    };
}, Yr = {
    parent: function(e3) {
        var t8 = [];
        if (1 === this.length) {
            var n9 = this[0]._private.parent;
            if (n9) return n9;
        }
        for(var r15 = 0; r15 < this.length; r15++){
            var i23 = this[r15]._private.parent;
            i23 && t8.push(i23);
        }
        return this.spawn(t8, !0).filter(e3);
    },
    parents: function(e3) {
        for(var t8 = [], n10 = this.parent(); n10.nonempty();){
            for(var r15 = 0; r15 < n10.length; r15++){
                var i24 = n10[r15];
                t8.push(i24);
            }
            n10 = n10.parent();
        }
        return this.spawn(t8, !0).filter(e3);
    },
    commonAncestors: function(e3) {
        for(var t8, n10 = 0; n10 < this.length; n10++){
            var r16 = this[n10].parents();
            t8 = (t8 = t8 || r16).intersect(r16);
        }
        return t8.filter(e3);
    },
    orphans: function(e3) {
        return this.stdFilter(function(e4) {
            return e4.isOrphan();
        }).filter(e3);
    },
    nonorphans: function(e3) {
        return this.stdFilter(function(e4) {
            return e4.isChild();
        }).filter(e3);
    },
    children: jr(function(e3) {
        for(var t8 = [], n10 = 0; n10 < this.length; n10++)for(var r17 = this[n10]._private.children, i25 = 0; i25 < r17.length; i25++)t8.push(r17[i25]);
        return this.spawn(t8, !0).filter(e3);
    }, "children"),
    siblings: function(e3) {
        return this.parent().children().not(this).filter(e3);
    },
    isParent: function() {
        var e3 = this[0];
        if (e3) return e3.isNode() && 0 !== e3._private.children.length;
    },
    isChildless: function() {
        var e3 = this[0];
        if (e3) return e3.isNode() && 0 === e3._private.children.length;
    },
    isChild: function() {
        var e3 = this[0];
        if (e3) return e3.isNode() && null != e3._private.parent;
    },
    isOrphan: function() {
        var e3 = this[0];
        if (e3) return e3.isNode() && null == e3._private.parent;
    },
    descendants: function(e3) {
        var t8 = [];
        return (function e4(n10) {
            for(var r17 = 0; r17 < n10.length; r17++){
                var i25 = n10[r17];
                t8.push(i25), i25.children().nonempty() && e4(i25.children());
            }
        })(this.children()), this.spawn(t8, !0).filter(e3);
    }
};
function Xr(e3, t8, n10, r17) {
    for(var i26 = [], a28 = new Ae, o20 = e3.cy().hasCompoundNodes(), s19 = 0; s19 < e3.length; s19++){
        var l24 = e3[s19];
        n10 ? i26.push(l24) : o20 && r17(i26, a28, l24);
    }
    for(; i26.length > 0;){
        var u18 = i26.shift();
        t8(u18), a28.add(u18.id()), o20 && r17(i26, a28, u18);
    }
    return e3;
}
function Wr(e3, t8, n10) {
    if (n10.isParent()) for(var r17 = n10._private.children, i26 = 0; i26 < r17.length; i26++){
        var a28 = r17[i26];
        t8.has(a28.id()) || e3.push(a28);
    }
}
function Hr(e3, t8, n10) {
    if (n10.isChild()) {
        var r17 = n10._private.parent;
        t8.has(r17.id()) || e3.push(r17);
    }
}
function Kr(e3, t8, n10) {
    Hr(e3, t8, n10), Wr(e3, t8, n10);
}
Yr.forEachDown = function(e3) {
    var t8 = !(arguments.length > 1 && (void 0) !== arguments[1]) || arguments[1];
    return Xr(this, e3, t8, Wr);
}, Yr.forEachUp = function(e3) {
    var t8 = !(arguments.length > 1 && (void 0) !== arguments[1]) || arguments[1];
    return Xr(this, e3, t8, Hr);
}, Yr.forEachUpAndDown = function(e3) {
    var t8 = !(arguments.length > 1 && (void 0) !== arguments[1]) || arguments[1];
    return Xr(this, e3, t8, Kr);
}, Yr.ancestors = Yr.parents, (Fr = qr = {
    data: er.data({
        field: "data",
        bindingEvent: "data",
        allowBinding: !0,
        allowSetting: !0,
        settingEvent: "data",
        settingTriggersEvent: !0,
        triggerFnName: "trigger",
        allowGetting: !0,
        immutableKeys: {
            id: !0,
            source: !0,
            target: !0,
            parent: !0
        },
        updateStyle: !0
    }),
    removeData: er.removeData({
        field: "data",
        event: "data",
        triggerFnName: "trigger",
        triggerEvent: !0,
        immutableKeys: {
            id: !0,
            source: !0,
            target: !0,
            parent: !0
        },
        updateStyle: !0
    }),
    scratch: er.data({
        field: "scratch",
        bindingEvent: "scratch",
        allowBinding: !0,
        allowSetting: !0,
        settingEvent: "scratch",
        settingTriggersEvent: !0,
        triggerFnName: "trigger",
        allowGetting: !0,
        updateStyle: !0
    }),
    removeScratch: er.removeData({
        field: "scratch",
        event: "scratch",
        triggerFnName: "trigger",
        triggerEvent: !0,
        updateStyle: !0
    }),
    rscratch: er.data({
        field: "rscratch",
        allowBinding: !1,
        allowSetting: !0,
        settingTriggersEvent: !1,
        allowGetting: !0
    }),
    removeRscratch: er.removeData({
        field: "rscratch",
        triggerEvent: !1
    }),
    id: function() {
        var e3 = this[0];
        if (e3) return e3._private.data.id;
    }
}).attr = Fr.data, Fr.removeAttr = Fr.removeData;
var Gr, Zr, Ur = qr, $r = {
};
function Qr(e3) {
    return function(t8) {
        if ((void 0) === t8 && (t8 = !0), 0 !== this.length && this.isNode() && !this.removed()) {
            for(var n10 = 0, r18 = this[0], i26 = r18._private.edges, a29 = 0; a29 < i26.length; a29++){
                var o20 = i26[a29];
                !t8 && o20.isLoop() || (n10 += e3(r18, o20));
            }
            return n10;
        }
    };
}
function Jr(e3, t8) {
    return function(n11) {
        for(var r19, i27 = this.nodes(), a30 = 0; a30 < i27.length; a30++){
            var o21 = i27[a30][e3](n11);
            (void 0) === o21 || (void 0) !== r19 && !t8(o21, r19) || (r19 = o21);
        }
        return r19;
    };
}
I10($r, {
    degree: Qr(function(e3, t8) {
        return t8.source().same(t8.target()) ? 2 : 1;
    }),
    indegree: Qr(function(e3, t8) {
        return t8.target().same(e3) ? 1 : 0;
    }),
    outdegree: Qr(function(e3, t8) {
        return t8.source().same(e3) ? 1 : 0;
    })
}), I10($r, {
    minDegree: Jr("degree", function(e3, t8) {
        return e3 < t8;
    }),
    maxDegree: Jr("degree", function(e3, t8) {
        return e3 > t8;
    }),
    minIndegree: Jr("indegree", function(e3, t8) {
        return e3 < t8;
    }),
    maxIndegree: Jr("indegree", function(e3, t8) {
        return e3 > t8;
    }),
    minOutdegree: Jr("outdegree", function(e3, t8) {
        return e3 < t8;
    }),
    maxOutdegree: Jr("outdegree", function(e3, t8) {
        return e3 > t8;
    })
}), I10($r, {
    totalDegree: function(e3) {
        for(var t8 = 0, n11 = this.nodes(), r19 = 0; r19 < n11.length; r19++)t8 += n11[r19].degree(e3);
        return t8;
    }
});
var ei = function(e3, t8, n11) {
    for(var r19 = 0; r19 < e3.length; r19++){
        var i27 = e3[r19];
        if (!i27.locked()) {
            var a30 = i27._private.position, o22 = {
                x: null != t8.x ? t8.x - a30.x : 0,
                y: null != t8.y ? t8.y - a30.y : 0
            };
            !i27.isParent() || 0 === o22.x && 0 === o22.y || i27.children().shift(o22, n11), i27.dirtyBoundingBoxCache();
        }
    }
}, ti = {
    field: "position",
    bindingEvent: "position",
    allowBinding: !0,
    allowSetting: !0,
    settingEvent: "position",
    settingTriggersEvent: !0,
    triggerFnName: "emitAndNotify",
    allowGetting: !0,
    validKeys: [
        "x",
        "y"
    ],
    beforeGet: function(e3) {
        e3.updateCompoundBounds();
    },
    beforeSet: function(e3, t8) {
        ei(e3, t8, !1);
    },
    onSet: function(e3) {
        e3.dirtyCompoundBoundsCache();
    },
    canSet: function(e3) {
        return !e3.locked();
    }
};
(Gr = Zr = {
    position: er.data(ti),
    silentPosition: er.data(I10({
    }, ti, {
        allowBinding: !1,
        allowSetting: !0,
        settingTriggersEvent: !1,
        allowGetting: !1,
        beforeSet: function(e3, t8) {
            ei(e3, t8, !0);
        },
        onSet: function(e3) {
            e3.dirtyCompoundBoundsCache();
        }
    })),
    positions: function(e3, t8) {
        if (v1(e3)) t8 ? this.silentPosition(e3) : this.position(e3);
        else if (f(e3)) {
            var n11 = e3, r19 = this.cy();
            r19.startBatch();
            for(var i28 = 0; i28 < this.length; i28++){
                var a31, o23 = this[i28];
                (a31 = n11(o23, i28)) && (t8 ? o23.silentPosition(a31) : o23.position(a31));
            }
            r19.endBatch();
        }
        return this;
    },
    silentPositions: function(e3) {
        return this.positions(e3, !0);
    },
    shift: function(e3, t8, n12) {
        var r20;
        if (v1(e3) ? (r20 = {
            x: y1(e3.x) ? e3.x : 0,
            y: y1(e3.y) ? e3.y : 0
        }, n12 = t8) : p(e3) && y1(t8) && ((r20 = {
            x: 0,
            y: 0
        })[e3] = t8), null != r20) {
            var i29 = this.cy();
            i29.startBatch();
            for(var a32 = 0; a32 < this.length; a32++){
                var o24 = this[a32], s19 = o24.position(), l25 = {
                    x: s19.x + r20.x,
                    y: s19.y + r20.y
                };
                n12 ? o24.silentPosition(l25) : o24.position(l25);
            }
            i29.endBatch();
        }
        return this;
    },
    silentShift: function(e3, t8) {
        return v1(e3) ? this.shift(e3, !0) : p(e3) && y1(t8) && this.shift(e3, t8, !0), this;
    },
    renderedPosition: function(e3, t8) {
        var n12 = this[0], r20 = this.cy(), i30 = r20.zoom(), a33 = r20.pan(), o25 = v1(e3) ? e3 : void 0, s20 = (void 0) !== o25 || (void 0) !== t8 && p(e3);
        if (n12 && n12.isNode()) {
            if (!s20) {
                var l26 = n12.position();
                return o25 = et(l26, i30, a33), (void 0) === e3 ? o25 : o25[e3];
            }
            for(var u19 = 0; u19 < this.length; u19++){
                var c20 = this[u19];
                (void 0) !== t8 ? c20.position(e3, (t8 - a33[e3]) / i30) : (void 0) !== o25 && c20.position(tt(o25, i30, a33));
            }
        } else if (!s20) return;
        return this;
    },
    relativePosition: function(e3, t8) {
        var n12 = this[0], r20 = this.cy(), i30 = v1(e3) ? e3 : void 0, a33 = (void 0) !== i30 || (void 0) !== t8 && p(e3), o25 = r20.hasCompoundNodes();
        if (n12 && n12.isNode()) {
            if (!a33) {
                var s20 = n12.position(), l27 = o25 ? n12.parent() : null, u20 = l27 && l27.length > 0, c21 = u20;
                u20 && (l27 = l27[0]);
                var d23 = c21 ? l27.position() : {
                    x: 0,
                    y: 0
                };
                return i30 = {
                    x: s20.x - d23.x,
                    y: s20.y - d23.y
                }, (void 0) === e3 ? i30 : i30[e3];
            }
            for(var h17 = 0; h17 < this.length; h17++){
                var f13 = this[h17], g13 = o25 ? f13.parent() : null, y13 = g13 && g13.length > 0, m8 = y13;
                y13 && (g13 = g13[0]);
                var b9 = m8 ? g13.position() : {
                    x: 0,
                    y: 0
                };
                (void 0) !== t8 ? f13.position(e3, t8 + b9[e3]) : (void 0) !== i30 && f13.position({
                    x: i30.x + b9.x,
                    y: i30.y + b9.y
                });
            }
        } else if (!a33) return;
        return this;
    }
}).modelPosition = Gr.point = Gr.position, Gr.modelPositions = Gr.points = Gr.positions, Gr.renderedPoint = Gr.renderedPosition, Gr.relativePoint = Gr.relativePosition;
var ni, ri, ii = Zr;
ni = ri = {
}, ri.renderedBoundingBox = function(e3) {
    var t8 = this.boundingBox(e3), n12 = this.cy(), r20 = n12.zoom(), i30 = n12.pan(), a33 = t8.x1 * r20 + i30.x, o25 = t8.x2 * r20 + i30.x, s21 = t8.y1 * r20 + i30.y, l28 = t8.y2 * r20 + i30.y;
    return {
        x1: a33,
        x2: o25,
        y1: s21,
        y2: l28,
        w: o25 - a33,
        h: l28 - s21
    };
}, ri.dirtyCompoundBoundsCache = function() {
    var e3 = arguments.length > 0 && (void 0) !== arguments[0] && arguments[0], t8 = this.cy();
    return t8.styleEnabled() && t8.hasCompoundNodes() ? (this.forEachUp(function(t9) {
        if (t9.isParent()) {
            var n12 = t9._private;
            n12.compoundBoundsClean = !1, n12.bbCache = null, e3 || t9.emitAndNotify("bounds");
        }
    }), this) : this;
}, ri.updateCompoundBounds = function() {
    var e3 = arguments.length > 0 && (void 0) !== arguments[0] && arguments[0], t8 = this.cy();
    if (!t8.styleEnabled() || !t8.hasCompoundNodes()) return this;
    if (!e3 && t8.batching()) return this;
    function n13(e4) {
        if (e4.isParent()) {
            var t9 = e4._private, n14 = e4.children(), r20 = "include" === e4.pstyle("compound-sizing-wrt-labels").value, i30 = {
                width: {
                    val: e4.pstyle("min-width").pfValue,
                    left: e4.pstyle("min-width-bias-left"),
                    right: e4.pstyle("min-width-bias-right")
                },
                height: {
                    val: e4.pstyle("min-height").pfValue,
                    top: e4.pstyle("min-height-bias-top"),
                    bottom: e4.pstyle("min-height-bias-bottom")
                }
            }, a33 = n14.boundingBox({
                includeLabels: r20,
                includeOverlays: !1,
                useCache: !1
            }), o25 = t9.position;
            0 !== a33.w && 0 !== a33.h || ((a33 = {
                w: e4.pstyle("width").pfValue,
                h: e4.pstyle("height").pfValue
            }).x1 = o25.x - a33.w / 2, a33.x2 = o25.x + a33.w / 2, a33.y1 = o25.y - a33.h / 2, a33.y2 = o25.y + a33.h / 2);
            var s21 = i30.width.left.value;
            "px" === i30.width.left.units && i30.width.val > 0 && (s21 = 100 * s21 / i30.width.val);
            var l28 = i30.width.right.value;
            "px" === i30.width.right.units && i30.width.val > 0 && (l28 = 100 * l28 / i30.width.val);
            var u21 = i30.height.top.value;
            "px" === i30.height.top.units && i30.height.val > 0 && (u21 = 100 * u21 / i30.height.val);
            var c22 = i30.height.bottom.value;
            "px" === i30.height.bottom.units && i30.height.val > 0 && (c22 = 100 * c22 / i30.height.val);
            var d24 = y14(i30.width.val - a33.w, s21, l28), h18 = d24.biasDiff, p8 = d24.biasComplementDiff, f14 = y14(i30.height.val - a33.h, u21, c22), g14 = f14.biasDiff, v12 = f14.biasComplementDiff;
            t9.autoPadding = (function(e5, t10, n15, r21) {
                if ("%" !== n15.units) return "px" === n15.units ? n15.pfValue : 0;
                switch(r21){
                    case "width":
                        return e5 > 0 ? n15.pfValue * e5 : 0;
                    case "height":
                        return t10 > 0 ? n15.pfValue * t10 : 0;
                    case "average":
                        return e5 > 0 && t10 > 0 ? n15.pfValue * (e5 + t10) / 2 : 0;
                    case "min":
                        return e5 > 0 && t10 > 0 ? e5 > t10 ? n15.pfValue * t10 : n15.pfValue * e5 : 0;
                    case "max":
                        return e5 > 0 && t10 > 0 ? e5 > t10 ? n15.pfValue * e5 : n15.pfValue * t10 : 0;
                    default:
                        return 0;
                }
            })(a33.w, a33.h, e4.pstyle("padding"), e4.pstyle("padding-relative-to").value), t9.autoWidth = Math.max(a33.w, i30.width.val), o25.x = (-h18 + a33.x1 + a33.x2 + p8) / 2, t9.autoHeight = Math.max(a33.h, i30.height.val), o25.y = (-g14 + a33.y1 + a33.y2 + v12) / 2;
        }
        function y14(e5, t10, n15) {
            var r21 = 0, i31 = 0, a34 = t10 + n15;
            return e5 > 0 && a34 > 0 && (r21 = t10 / a34 * e5, i31 = n15 / a34 * e5), {
                biasDiff: r21,
                biasComplementDiff: i31
            };
        }
    }
    for(var r21 = 0; r21 < this.length; r21++){
        var i31 = this[r21], a34 = i31._private;
        a34.compoundBoundsClean && !e3 || (n13(i31), t8.batching() || (a34.compoundBoundsClean = !0));
    }
    return this;
};
var ai = function(e3) {
    return e3 === 1 / 0 || e3 === -1 / 0 ? 0 : e3;
}, oi = function(e3, t8, n13, r21, i32) {
    r21 - t8 != 0 && i32 - n13 != 0 && null != t8 && null != n13 && null != r21 && null != i32 && (e3.x1 = t8 < e3.x1 ? t8 : e3.x1, e3.x2 = r21 > e3.x2 ? r21 : e3.x2, e3.y1 = n13 < e3.y1 ? n13 : e3.y1, e3.y2 = i32 > e3.y2 ? i32 : e3.y2, e3.w = e3.x2 - e3.x1, e3.h = e3.y2 - e3.y1);
}, si = function(e3, t8) {
    return null == t8 ? e3 : oi(e3, t8.x1, t8.y1, t8.x2, t8.y2);
}, li = function(e3, t8, n13) {
    return Ne(e3, t8, n13);
}, ui = function(e3, t8, n13) {
    if (!t8.cy().headless()) {
        var r21, i32, a35 = t8._private, o26 = a35.rstyle, s22 = o26.arrowWidth / 2;
        if ("none" !== t8.pstyle(n13 + "-arrow-shape").value) {
            "source" === n13 ? (r21 = o26.srcX, i32 = o26.srcY) : "target" === n13 ? (r21 = o26.tgtX, i32 = o26.tgtY) : (r21 = o26.midX, i32 = o26.midY);
            var l29 = a35.arrowBounds = a35.arrowBounds || {
            }, u22 = l29[n13] = l29[n13] || {
            };
            u22.x1 = r21 - s22, u22.y1 = i32 - s22, u22.x2 = r21 + s22, u22.y2 = i32 + s22, u22.w = u22.x2 - u22.x1, u22.h = u22.y2 - u22.y1, ft(u22, 1), oi(e3, u22.x1, u22.y1, u22.x2, u22.y2);
        }
    }
}, ci = function(e3, t8, n13) {
    if (!t8.cy().headless()) {
        var r22;
        r22 = n13 ? n13 + "-" : "";
        var i33 = t8._private, a36 = i33.rstyle;
        if (t8.pstyle(r22 + "label").strValue) {
            var o27, s23, l30, u23, c23 = t8.pstyle("text-halign"), d25 = t8.pstyle("text-valign"), h19 = li(a36, "labelWidth", n13), p9 = li(a36, "labelHeight", n13), f15 = li(a36, "labelX", n13), g15 = li(a36, "labelY", n13), v13 = t8.pstyle(r22 + "text-margin-x").pfValue, y14 = t8.pstyle(r22 + "text-margin-y").pfValue, m9 = t8.isEdge(), b10 = t8.pstyle(r22 + "text-rotation"), x8 = t8.pstyle("text-outline-width").pfValue, w10 = t8.pstyle("text-border-width").pfValue / 2, E11 = t8.pstyle("text-background-padding").pfValue, k10 = p9, C8 = h19, S7 = C8 / 2, P8 = k10 / 2;
            if (m9) o27 = f15 - S7, s23 = f15 + S7, l30 = g15 - P8, u23 = g15 + P8;
            else {
                switch(c23.value){
                    case "left":
                        o27 = f15 - C8, s23 = f15;
                        break;
                    case "center":
                        o27 = f15 - S7, s23 = f15 + S7;
                        break;
                    case "right":
                        o27 = f15, s23 = f15 + C8;
                }
                switch(d25.value){
                    case "top":
                        l30 = g15 - k10, u23 = g15;
                        break;
                    case "center":
                        l30 = g15 - P8, u23 = g15 + P8;
                        break;
                    case "bottom":
                        l30 = g15, u23 = g15 + k10;
                }
            }
            o27 += v13 - Math.max(x8, w10) - E11 - 2, s23 += v13 + Math.max(x8, w10) + E11 + 2, l30 += y14 - Math.max(x8, w10) - E11 - 2, u23 += y14 + Math.max(x8, w10) + E11 + 2;
            var D8 = n13 || "main", T9 = i33.labelBounds, M8 = T9[D8] = T9[D8] || {
            };
            M8.x1 = o27, M8.y1 = l30, M8.x2 = s23, M8.y2 = u23, M8.w = s23 - o27, M8.h = u23 - l30;
            var B6 = m9 && "autorotate" === b10.strValue, _6 = null != b10.pfValue && 0 !== b10.pfValue;
            if (B6 || _6) {
                var N3 = B6 ? li(i33.rstyle, "labelAngle", n13) : b10.pfValue, I5 = Math.cos(N3), z4 = Math.sin(N3), L4 = (o27 + s23) / 2, A4 = (l30 + u23) / 2;
                if (!m9) {
                    switch(c23.value){
                        case "left":
                            L4 = s23;
                            break;
                        case "right":
                            L4 = o27;
                    }
                    switch(d25.value){
                        case "top":
                            A4 = u23;
                            break;
                        case "bottom":
                            A4 = l30;
                    }
                }
                var O4 = function(e4, t10) {
                    return {
                        x: (e4 -= L4) * I5 - (t10 -= A4) * z4 + L4,
                        y: e4 * z4 + t10 * I5 + A4
                    };
                }, R4 = O4(o27, l30), V3 = O4(o27, u23), F3 = O4(s23, l30), q3 = O4(s23, u23);
                o27 = Math.min(R4.x, V3.x, F3.x, q3.x), s23 = Math.max(R4.x, V3.x, F3.x, q3.x), l30 = Math.min(R4.y, V3.y, F3.y, q3.y), u23 = Math.max(R4.y, V3.y, F3.y, q3.y);
            }
            var j2 = D8 + "Rot", Y1 = T9[j2] = T9[j2] || {
            };
            Y1.x1 = o27, Y1.y1 = l30, Y1.x2 = s23, Y1.y2 = u23, Y1.w = s23 - o27, Y1.h = u23 - l30, oi(e3, o27, l30, s23, u23), oi(i33.labelBounds.all, o27, l30, s23, u23);
        }
        return e3;
    }
}, di = function(e3) {
    var t8 = 0, n13 = function(e4) {
        return (e4 ? 1 : 0) << t8++;
    }, r23 = 0;
    return r23 += n13(e3.incudeNodes), r23 += n13(e3.includeEdges), r23 += n13(e3.includeLabels), r23 += n13(e3.includeMainLabels), r23 += n13(e3.includeSourceLabels), r23 += n13(e3.includeTargetLabels), r23 += n13(e3.includeOverlays);
}, hi = function(e3) {
    if (e3.isEdge()) {
        var t8 = e3.source().position(), n13 = e3.target().position(), r23 = function(e4) {
            return Math.round(e4);
        };
        return (function(e4, t10) {
            var n15 = {
                value: 0,
                done: !1
            }, r24 = 0, i34 = e4.length;
            return oe({
                next: function() {
                    return r24 < i34 ? n15.value = e4[r24++] : n15.done = !0, n15;
                }
            }, t10);
        })([
            r23(t8.x),
            r23(t8.y),
            r23(n13.x),
            r23(n13.y)
        ]);
    }
    return 0;
}, pi = function(e3, t10) {
    var n15, r24 = e3._private, i34 = e3.isEdge(), a37 = (null == t10 ? gi : di(t10)) === gi, o28 = hi(e3), s24 = r24.bbCachePosKey === o28, l31 = t10.useCache && s24, u24 = function(e4) {
        return null == e4._private.bbCache || e4._private.styleDirty;
    };
    if (!l31 || u24(e3) || i34 && u24(e3.source()) || u24(e3.target()) ? (s24 || e3.recalculateRenderedStyle(l31), n15 = (function(e4, t11) {
        var n16, r25, i35, a38, o29, s25, l32, u25 = e4._private.cy, c24 = u25.styleEnabled(), d26 = u25.headless(), h20 = ht(), p10 = e4._private, f16 = e4.isNode(), g16 = e4.isEdge(), v14 = p10.rstyle, y15 = f16 && c24 ? e4.pstyle("bounds-expansion").pfValue : [
            0
        ], m10 = function(e5) {
            return "none" !== e5.pstyle("display").value;
        }, b11 = !c24 || m10(e4) && (!g16 || m10(e4.source()) && m10(e4.target()));
        if (b11) {
            var x9 = 0;
            c24 && t11.includeOverlays && 0 !== e4.pstyle("overlay-opacity").value && (x9 = e4.pstyle("overlay-padding").value);
            var w11 = 0;
            if (c24 && (w11 = e4.pstyle("width").pfValue / 2), f16 && t11.includeNodes) {
                var E12 = e4.position();
                o29 = E12.x, s25 = E12.y;
                var k11 = e4.outerWidth() / 2, C9 = e4.outerHeight() / 2;
                oi(h20, n16 = o29 - k11, i35 = s25 - C9, r25 = o29 + k11, a38 = s25 + C9);
            } else if (g16 && t11.includeEdges) {
                if (c24 && !d26) {
                    var S8 = e4.pstyle("curve-style").strValue;
                    if (n16 = Math.min(v14.srcX, v14.midX, v14.tgtX), r25 = Math.max(v14.srcX, v14.midX, v14.tgtX), i35 = Math.min(v14.srcY, v14.midY, v14.tgtY), a38 = Math.max(v14.srcY, v14.midY, v14.tgtY), oi(h20, n16 -= w11, i35 -= w11, r25 += w11, a38 += w11), "haystack" === S8) {
                        var P9 = v14.haystackPts;
                        if (P9 && 2 === P9.length) {
                            if (n16 = P9[0].x, i35 = P9[0].y, n16 > (r25 = P9[1].x)) {
                                var D9 = n16;
                                n16 = r25, r25 = D9;
                            }
                            if (i35 > (a38 = P9[1].y)) {
                                var T10 = i35;
                                i35 = a38, a38 = T10;
                            }
                            oi(h20, n16 - w11, i35 - w11, r25 + w11, a38 + w11);
                        }
                    } else if ("bezier" === S8 || "unbundled-bezier" === S8 || "segments" === S8 || "taxi" === S8) {
                        var M9;
                        switch(S8){
                            case "bezier":
                            case "unbundled-bezier":
                                M9 = v14.bezierPts;
                                break;
                            case "segments":
                            case "taxi":
                                M9 = v14.linePts;
                        }
                        if (null != M9) for(var B7 = 0; B7 < M9.length; B7++){
                            var _7 = M9[B7];
                            n16 = _7.x - w11, r25 = _7.x + w11, i35 = _7.y - w11, a38 = _7.y + w11, oi(h20, n16, i35, r25, a38);
                        }
                    }
                } else {
                    var N4 = e4.source().position(), I6 = e4.target().position();
                    if ((n16 = N4.x) > (r25 = I6.x)) {
                        var z5 = n16;
                        n16 = r25, r25 = z5;
                    }
                    if ((i35 = N4.y) > (a38 = I6.y)) {
                        var L5 = i35;
                        i35 = a38, a38 = L5;
                    }
                    oi(h20, n16 -= w11, i35 -= w11, r25 += w11, a38 += w11);
                }
            }
            if (c24 && t11.includeEdges && g16 && (ui(h20, e4, "mid-source"), ui(h20, e4, "mid-target"), ui(h20, e4, "source"), ui(h20, e4, "target")), c24) {
                if ("yes" === e4.pstyle("ghost").value) {
                    var A5 = e4.pstyle("ghost-offset-x").pfValue, O5 = e4.pstyle("ghost-offset-y").pfValue;
                    oi(h20, h20.x1 + A5, h20.y1 + O5, h20.x2 + A5, h20.y2 + O5);
                }
            }
            var R5 = p10.bodyBounds = p10.bodyBounds || {
            };
            vt(R5, h20), gt(R5, y15), ft(R5, 1), c24 && (n16 = h20.x1, r25 = h20.x2, i35 = h20.y1, a38 = h20.y2, oi(h20, n16 - x9, i35 - x9, r25 + x9, a38 + x9));
            var V4 = p10.overlayBounds = p10.overlayBounds || {
            };
            vt(V4, h20), gt(V4, y15), ft(V4, 1);
            var F4 = p10.labelBounds = p10.labelBounds || {
            };
            null != F4.all ? ((l32 = F4.all).x1 = 1 / 0, l32.y1 = 1 / 0, l32.x2 = -1 / 0, l32.y2 = -1 / 0, l32.w = 0, l32.h = 0) : F4.all = ht(), c24 && t11.includeLabels && (t11.includeMainLabels && ci(h20, e4, null), g16 && (t11.includeSourceLabels && ci(h20, e4, "source"), t11.includeTargetLabels && ci(h20, e4, "target")));
        }
        return h20.x1 = ai(h20.x1), h20.y1 = ai(h20.y1), h20.x2 = ai(h20.x2), h20.y2 = ai(h20.y2), h20.w = ai(h20.x2 - h20.x1), h20.h = ai(h20.y2 - h20.y1), h20.w > 0 && h20.h > 0 && b11 && (gt(h20, y15), ft(h20, 1)), h20;
    })(e3, fi), r24.bbCache = n15, r24.bbCachePosKey = o28) : n15 = r24.bbCache, !a37) {
        var c24 = e3.isNode();
        n15 = ht(), (t10.includeNodes && c24 || t10.includeEdges && !c24) && (t10.includeOverlays ? si(n15, r24.overlayBounds) : si(n15, r24.bodyBounds)), t10.includeLabels && (t10.includeMainLabels && (!i34 || t10.includeSourceLabels && t10.includeTargetLabels) ? si(n15, r24.labelBounds.all) : (t10.includeMainLabels && si(n15, r24.labelBounds.mainRot), t10.includeSourceLabels && si(n15, r24.labelBounds.sourceRot), t10.includeTargetLabels && si(n15, r24.labelBounds.targetRot))), n15.w = n15.x2 - n15.x1, n15.h = n15.y2 - n15.y1;
    }
    return n15;
}, fi = {
    includeNodes: !0,
    includeEdges: !0,
    includeLabels: !0,
    includeMainLabels: !0,
    includeSourceLabels: !0,
    includeTargetLabels: !0,
    includeOverlays: !0,
    useCache: !0
}, gi = di(fi), vi = Me(fi);
ri.boundingBox = function(e3) {
    var t10;
    if (1 !== this.length || null == this[0]._private.bbCache || this[0]._private.styleDirty || (void 0) !== e3 && (void 0) !== e3.useCache && !0 !== e3.useCache) {
        t10 = ht();
        var n15 = vi(e3 = e3 || fi);
        if (this.cy().styleEnabled()) for(var r24 = 0; r24 < this.length; r24++){
            var i34 = this[r24], a37 = i34._private, o28 = hi(i34), s24 = a37.bbCachePosKey === o28, l31 = n15.useCache && s24 && !a37.styleDirty;
            i34.recalculateRenderedStyle(l31);
        }
        this.updateCompoundBounds(!e3.useCache);
        for(var u24 = 0; u24 < this.length; u24++){
            var c25 = this[u24];
            si(t10, pi(c25, n15));
        }
    } else e3 = (void 0) === e3 ? fi : vi(e3), t10 = pi(this[0], e3);
    return t10.x1 = ai(t10.x1), t10.y1 = ai(t10.y1), t10.x2 = ai(t10.x2), t10.y2 = ai(t10.y2), t10.w = ai(t10.x2 - t10.x1), t10.h = ai(t10.y2 - t10.y1), t10;
}, ri.dirtyBoundingBoxCache = function() {
    for(var e3 = 0; e3 < this.length; e3++){
        var t10 = this[e3]._private;
        t10.bbCache = null, t10.bbCachePosKey = null, t10.bodyBounds = null, t10.overlayBounds = null, t10.labelBounds.all = null, t10.labelBounds.source = null, t10.labelBounds.target = null, t10.labelBounds.main = null, t10.labelBounds.sourceRot = null, t10.labelBounds.targetRot = null, t10.labelBounds.mainRot = null, t10.arrowBounds.source = null, t10.arrowBounds.target = null, t10.arrowBounds["mid-source"] = null, t10.arrowBounds["mid-target"] = null;
    }
    return this.emitAndNotify("bounds"), this;
}, ri.boundingBoxAt = function(e3) {
    var t11 = this.nodes(), n16 = this.cy(), r25 = n16.hasCompoundNodes(), i35 = n16.collection();
    if (r25 && (i35 = t11.filter(function(e4) {
        return e4.isParent();
    }), t11 = t11.not(i35)), v1(e3)) {
        var a38 = e3;
        e3 = function() {
            return a38;
        };
    }
    n16.startBatch(), t11.forEach(function(t12, n17) {
        return t12._private.bbAtOldPos = e3(t12, n17);
    }).silentPositions(e3), r25 && (i35.dirtyCompoundBoundsCache(), i35.dirtyBoundingBoxCache(), i35.updateCompoundBounds(!0));
    var o29 = function(e4) {
        return {
            x1: e4.x1,
            x2: e4.x2,
            w: e4.w,
            y1: e4.y1,
            y2: e4.y2,
            h: e4.h
        };
    }(this.boundingBox({
        useCache: !1
    }));
    return t11.silentPositions(function(e4) {
        return e4._private.bbAtOldPos;
    }), r25 && (i35.dirtyCompoundBoundsCache(), i35.dirtyBoundingBoxCache(), i35.updateCompoundBounds(!0)), n16.endBatch(), o29;
}, ni.boundingbox = ni.bb = ni.boundingBox, ni.renderedBoundingbox = ni.renderedBoundingBox;
var yi, mi, bi = ri;
yi = mi = {
};
var xi = function(e3) {
    e3.uppercaseName = B(e3.name), e3.autoName = "auto" + e3.uppercaseName, e3.labelName = "label" + e3.uppercaseName, e3.outerName = "outer" + e3.uppercaseName, e3.uppercaseOuterName = B(e3.outerName), yi[e3.name] = function() {
        var t11 = this[0], n16 = t11._private, r25 = n16.cy._private.styleEnabled;
        if (t11) {
            if (!r25) return 1;
            if (t11.isParent()) return t11.updateCompoundBounds(), n16[e3.autoName] || 0;
            var i35 = t11.pstyle(e3.name);
            switch(i35.strValue){
                case "label":
                    return t11.recalculateRenderedStyle(), n16.rstyle[e3.labelName] || 0;
                default:
                    return i35.pfValue;
            }
        }
    }, yi["outer" + e3.uppercaseName] = function() {
        var t11 = this[0], n16 = t11._private.cy._private.styleEnabled;
        if (t11) return n16 ? t11[e3.name]() + t11.pstyle("border-width").pfValue + 2 * t11.padding() : 1;
    }, yi["rendered" + e3.uppercaseName] = function() {
        var t11 = this[0];
        if (t11) return t11[e3.name]() * this.cy().zoom();
    }, yi["rendered" + e3.uppercaseOuterName] = function() {
        var t11 = this[0];
        if (t11) return t11[e3.outerName]() * this.cy().zoom();
    };
};
xi({
    name: "width"
}), xi({
    name: "height"
}), mi.padding = function() {
    var e3 = this[0], t11 = e3._private;
    return e3.isParent() ? (e3.updateCompoundBounds(), (void 0) !== t11.autoPadding ? t11.autoPadding : e3.pstyle("padding").pfValue) : e3.pstyle("padding").pfValue;
}, mi.paddedHeight = function() {
    var e3 = this[0];
    return e3.height() + 2 * e3.padding();
}, mi.paddedWidth = function() {
    var e3 = this[0];
    return e3.width() + 2 * e3.padding();
};
var wi = mi, Ei = {
    controlPoints: {
        get: function(e3) {
            return e3.renderer().getControlPoints(e3);
        },
        mult: !0
    },
    segmentPoints: {
        get: function(e3) {
            return e3.renderer().getSegmentPoints(e3);
        },
        mult: !0
    },
    sourceEndpoint: {
        get: function(e3) {
            return e3.renderer().getSourceEndpoint(e3);
        }
    },
    targetEndpoint: {
        get: function(e3) {
            return e3.renderer().getTargetEndpoint(e3);
        }
    },
    midpoint: {
        get: function(e3) {
            return e3.renderer().getEdgeMidpoint(e3);
        }
    }
}, ki = Object.keys(Ei).reduce(function(e3, t11) {
    var n16 = Ei[t11], r25 = function(e4) {
        return "rendered" + e4[0].toUpperCase() + e4.substr(1);
    }(t11);
    return e3[t11] = function() {
        return (function(e4, t12) {
            if (e4.isEdge()) return t12(e4);
        })(this, n16.get);
    }, n16.mult ? e3[r25] = function() {
        return (function(e4, t12) {
            if (e4.isEdge()) {
                var n17 = e4.cy(), r26 = n17.pan(), i36 = n17.zoom();
                return t12(e4).map(function(e5) {
                    return et(e5, i36, r26);
                });
            }
        })(this, n16.get);
    } : e3[r25] = function() {
        return (function(e4, t12) {
            if (e4.isEdge()) {
                var n18 = e4.cy();
                return et(t12(e4), n18.zoom(), n18.pan());
            }
        })(this, n16.get);
    }, e3;
}, {
}), Ci = I10({
}, ii, bi, wi, ki), Si = function(e3, t11) {
    this.recycle(e3, t11);
};
function Pi() {
    return !1;
}
function Di() {
    return !0;
}
Si.prototype = {
    instanceString: function() {
        return "event";
    },
    recycle: function(e3, t11) {
        if (this.isImmediatePropagationStopped = this.isPropagationStopped = this.isDefaultPrevented = Pi, null != e3 && e3.preventDefault ? (this.type = e3.type, this.isDefaultPrevented = e3.defaultPrevented ? Di : Pi) : null != e3 && e3.type ? t11 = e3 : this.type = e3, null != t11 && (this.originalEvent = t11.originalEvent, this.type = null != t11.type ? t11.type : this.type, this.cy = t11.cy, this.target = t11.target, this.position = t11.position, this.renderedPosition = t11.renderedPosition, this.namespace = t11.namespace, this.layout = t11.layout), null != this.cy && null != this.position && null == this.renderedPosition) {
            var n16 = this.position, r25 = this.cy.zoom(), i37 = this.cy.pan();
            this.renderedPosition = {
                x: n16.x * r25 + i37.x,
                y: n16.y * r25 + i37.y
            };
        }
        this.timeStamp = e3 && e3.timeStamp || Date.now();
    },
    preventDefault: function() {
        this.isDefaultPrevented = Di;
        var e3 = this.originalEvent;
        e3 && e3.preventDefault && e3.preventDefault();
    },
    stopPropagation: function() {
        this.isPropagationStopped = Di;
        var e3 = this.originalEvent;
        e3 && e3.stopPropagation && e3.stopPropagation();
    },
    stopImmediatePropagation: function() {
        this.isImmediatePropagationStopped = Di, this.stopPropagation();
    },
    isDefaultPrevented: Pi,
    isPropagationStopped: Pi,
    isImmediatePropagationStopped: Pi
};
var Ti = /^([^.]+)(\.(?:[^.]+))?$/, Mi = {
    qualifierCompare: function(e3, t11) {
        return e3 === t11;
    },
    eventMatches: function() {
        return !0;
    },
    addEventFields: function() {
    },
    callbackContext: function(e3) {
        return e3;
    },
    beforeEmit: function() {
    },
    afterEmit: function() {
    },
    bubble: function() {
        return !1;
    },
    parent: function() {
        return null;
    },
    context: null
}, Bi = Object.keys(Mi), _i = {
};
function Ni() {
    for(var e3 = arguments.length > 0 && (void 0) !== arguments[0] ? arguments[0] : _i, t11 = arguments.length > 1 ? arguments[1] : void 0, n19 = 0; n19 < Bi.length; n19++){
        var r27 = Bi[n19];
        this[r27] = e3[r27] || Mi[r27];
    }
    this.context = t11 || this.context, this.listeners = [], this.emitting = 0;
}
var Ii = Ni.prototype, zi = function(e3, t11, n19, r28, i38, a39, o29) {
    f(r28) && (i38 = r28, r28 = null), o29 && (a39 = null == a39 ? o29 : I10({
    }, a39, o29));
    for(var s25 = g25(n19) ? n19 : n19.split(/\s+/), l32 = 0; l32 < s25.length; l32++){
        var u25 = s25[l32];
        if (!C(u25)) {
            var c26 = u25.match(Ti);
            if (c26) {
                if (!1 === t11(e3, u25, c26[1], c26[2] ? c26[2] : null, r28, i38, a39)) break;
            }
        }
    }
}, Li = function(e3, t11) {
    return e3.addEventFields(e3.context, t11), new Si(t11.type, t11);
}, Ai = function(e3, t11, n19) {
    if ("event" !== h(n19)) {
        if (v1(n19)) t11(e3, Li(e3, n19));
        else for(var r28 = g25(n19) ? n19 : n19.split(/\s+/), i38 = 0; i38 < r28.length; i38++){
            var a39 = r28[i38];
            if (!C(a39)) {
                var o29 = a39.match(Ti);
                if (o29) {
                    var s25 = o29[1], l32 = o29[2] ? o29[2] : null;
                    t11(e3, Li(e3, {
                        type: s25,
                        namespace: l32,
                        target: e3.context
                    }));
                }
            }
        }
    } else t11(e3, n19);
};
Ii.on = Ii.addListener = function(e3, t11, n19, r29, i39) {
    return zi(this, function(e4, t12, n20, r30, i40, a40, o30) {
        f(a40) && e4.listeners.push({
            event: t12,
            callback: a40,
            type: n20,
            namespace: r30,
            qualifier: i40,
            conf: o30
        });
    }, e3, t11, n19, r29, i39), this;
}, Ii.one = function(e3, t11, n19, r29) {
    return this.on(e3, t11, n19, r29, {
        one: !0
    });
}, Ii.removeListener = Ii.off = function(e3, t11, n19, r29) {
    var i39 = this;
    0 !== this.emitting && (this.listeners = this.listeners.slice());
    for(var a40 = this.listeners, o30 = function(o31) {
        var s26 = a40[o31];
        zi(i39, function(t12, n20, r30, i40, l33, u26) {
            if ((s26.type === r30 || "*" === e3) && (!i40 && ".*" !== s26.namespace || s26.namespace === i40) && (!l33 || t12.qualifierCompare(s26.qualifier, l33)) && (!u26 || s26.callback === u26)) return a40.splice(o31, 1), !1;
        }, e3, t11, n19, r29);
    }, s26 = a40.length - 1; s26 >= 0; s26--)o30(s26);
    return this;
}, Ii.removeAllListeners = function() {
    return this.removeListener("*");
}, Ii.emit = Ii.trigger = function(e3, t11, n19) {
    var r29 = this.listeners, i39 = r29.length;
    return this.emitting++, g25(t11) || (t11 = [
        t11
    ]), Ai(this, function(e4, a40) {
        null != n19 && (r29 = [
            {
                event: a40.event,
                type: a40.type,
                namespace: a40.namespace,
                callback: n19
            }
        ], i39 = r29.length);
        for(var o30 = function(n20) {
            var i40 = r29[n20];
            if (i40.type === a40.type && (!i40.namespace || i40.namespace === a40.namespace || ".*" === i40.namespace) && e4.eventMatches(e4.context, i40, a40)) {
                var o31 = [
                    a40
                ];
                null != t11 && (function(e5, t12) {
                    for(var n21 = 0; n21 < t12.length; n21++){
                        var r30 = t12[n21];
                        e5.push(r30);
                    }
                })(o31, t11), e4.beforeEmit(e4.context, i40, a40), i40.conf && i40.conf.one && (e4.listeners = e4.listeners.filter(function(e5) {
                    return e5 !== i40;
                }));
                var s26 = e4.callbackContext(e4.context, i40, a40), l33 = i40.callback.apply(s26, o31);
                e4.afterEmit(e4.context, i40, a40), !1 === l33 && (a40.stopPropagation(), a40.preventDefault());
            }
        }, s27 = 0; s27 < i39; s27++)o30(s27);
        e4.bubble(e4.context) && !a40.isPropagationStopped() && e4.parent(e4.context).emit(a40, t11);
    }, e3), this.emitting--, this;
};
var Oi = {
    qualifierCompare: function(e3, t11) {
        return null == e3 || null == t11 ? null == e3 && null == t11 : e3.sameText(t11);
    },
    eventMatches: function(e3, t11, n19) {
        var r29 = t11.qualifier;
        return null == r29 || e3 !== n19.target && x(n19.target) && r29.matches(n19.target);
    },
    addEventFields: function(e3, t11) {
        t11.cy = e3.cy(), t11.target = e3;
    },
    callbackContext: function(e3, t11, n19) {
        return null != t11.qualifier ? n19.target : e3;
    },
    beforeEmit: function(e3, t11) {
        t11.conf && t11.conf.once && t11.conf.onceCollection.removeListener(t11.event, t11.qualifier, t11.callback);
    },
    bubble: function() {
        return !0;
    },
    parent: function(e3) {
        return e3.isChild() ? e3.parent() : e3.cy();
    }
}, Ri = function(e3) {
    return p(e3) ? new Or(e3) : e3;
}, Vi = {
    createEmitter: function() {
        for(var e3 = 0; e3 < this.length; e3++){
            var t11 = this[e3], n19 = t11._private;
            n19.emitter || (n19.emitter = new Ni(Oi, t11));
        }
        return this;
    },
    emitter: function() {
        return this._private.emitter;
    },
    on: function(e3, t12, n20) {
        for(var r29 = Ri(t12), i39 = 0; i39 < this.length; i39++){
            this[i39].emitter().on(e3, r29, n20);
        }
        return this;
    },
    removeListener: function(e3, t12, n20) {
        for(var r29 = Ri(t12), i39 = 0; i39 < this.length; i39++){
            this[i39].emitter().removeListener(e3, r29, n20);
        }
        return this;
    },
    removeAllListeners: function() {
        for(var e3 = 0; e3 < this.length; e3++){
            this[e3].emitter().removeAllListeners();
        }
        return this;
    },
    one: function(e3, t12, n20) {
        for(var r29 = Ri(t12), i39 = 0; i39 < this.length; i39++){
            this[i39].emitter().one(e3, r29, n20);
        }
        return this;
    },
    once: function(e3, t12, n20) {
        for(var r29 = Ri(t12), i39 = 0; i39 < this.length; i39++){
            this[i39].emitter().on(e3, r29, n20, {
                once: !0,
                onceCollection: this
            });
        }
    },
    emit: function(e3, t12) {
        for(var n20 = 0; n20 < this.length; n20++){
            this[n20].emitter().emit(e3, t12);
        }
        return this;
    },
    emitAndNotify: function(e3, t12) {
        if (0 !== this.length) return this.cy().notify(e3, this), this.emit(e3, t12), this;
    }
};
er.eventAliasesOn(Vi);
var Fi = {
    nodes: function(e3) {
        return this.filter(function(e4) {
            return e4.isNode();
        }).filter(e3);
    },
    edges: function(e3) {
        return this.filter(function(e4) {
            return e4.isEdge();
        }).filter(e3);
    },
    byGroup: function() {
        for(var e3 = this.spawn(), t12 = this.spawn(), n20 = 0; n20 < this.length; n20++){
            var r29 = this[n20];
            r29.isNode() ? e3.push(r29) : t12.push(r29);
        }
        return {
            nodes: e3,
            edges: t12
        };
    },
    filter: function(e3, t12) {
        if ((void 0) === e3) return this;
        if (p(e3) || b1(e3)) return new Or(e3).filter(this);
        if (f(e3)) {
            for(var n20 = this.spawn(), r31 = 0; r31 < this.length; r31++){
                var i39 = this[r31];
                (t12 ? e3.apply(t12, [
                    i39,
                    r31,
                    this
                ]) : e3(i39, r31, this)) && n20.push(i39);
            }
            return n20;
        }
        return this.spawn();
    },
    not: function(e3) {
        if (e3) {
            p(e3) && (e3 = this.filter(e3));
            for(var t12 = this.spawn(), n21 = 0; n21 < this.length; n21++){
                var r32 = this[n21];
                e3.has(r32) || t12.push(r32);
            }
            return t12;
        }
        return this;
    },
    absoluteComplement: function() {
        return this.cy().mutableElements().not(this);
    },
    intersect: function(e3) {
        if (p(e3)) {
            var t13 = e3;
            return this.filter(t13);
        }
        for(var n22 = this.spawn(), r33 = e3, i40 = this.length < e3.length, a40 = i40 ? this : r33, o30 = i40 ? r33 : this, s27 = 0; s27 < a40.length; s27++){
            var l34 = a40[s27];
            o30.has(l34) && n22.push(l34);
        }
        return n22;
    },
    xor: function(e3) {
        var t14 = this._private.cy;
        p(e3) && (e3 = t14.$(e3));
        var n22 = this.spawn(), r33 = e3, i40 = function(e4, t15) {
            for(var r34 = 0; r34 < e4.length; r34++){
                var i41 = e4[r34], a40 = i41._private.data.id;
                t15.hasElementWithId(a40) || n22.push(i41);
            }
        };
        return i40(this, r33), i40(r33, this), n22;
    },
    diff: function(e3) {
        var t14 = this._private.cy;
        p(e3) && (e3 = t14.$(e3));
        var n22 = this.spawn(), r33 = this.spawn(), i40 = this.spawn(), a41 = e3, o30 = function(e4, t15, n23) {
            for(var r34 = 0; r34 < e4.length; r34++){
                var a42 = e4[r34], o32 = a42._private.data.id;
                t15.hasElementWithId(o32) ? i40.merge(a42) : n23.push(a42);
            }
        };
        return o30(this, a41, n22), o30(a41, this, r33), {
            left: n22,
            right: r33,
            both: i40
        };
    },
    add: function(e3) {
        var t14 = this._private.cy;
        if (!e3) return this;
        if (p(e3)) {
            var n22 = e3;
            e3 = t14.mutableElements().filter(n22);
        }
        for(var r33 = this.spawnSelf(), i40 = 0; i40 < e3.length; i40++){
            var a41 = e3[i40], o30 = !this.has(a41);
            o30 && r33.push(a41);
        }
        return r33;
    },
    merge: function(e3) {
        var t14 = this._private, n23 = t14.cy;
        if (!e3) return this;
        if (e3 && p(e3)) {
            var r33 = e3;
            e3 = n23.mutableElements().filter(r33);
        }
        for(var i40 = t14.map, a43 = 0; a43 < e3.length; a43++){
            var o33 = e3[a43], s27 = o33._private.data.id;
            if (!i40.has(s27)) {
                var l35 = this.length++;
                this[l35] = o33, i40.set(s27, {
                    ele: o33,
                    index: l35
                });
            }
        }
        return this;
    },
    unmergeAt: function(e3) {
        var t14 = this[e3].id(), n23 = this._private.map;
        this[e3] = void 0, n23.delete(t14);
        var r34 = e3 === this.length - 1;
        if (this.length > 1 && !r34) {
            var i40 = this.length - 1, a43 = this[i40], o34 = a43._private.data.id;
            this[i40] = void 0, this[e3] = a43, n23.set(o34, {
                ele: a43,
                index: e3
            });
        }
        return this.length--, this;
    },
    unmergeOne: function(e3) {
        e3 = e3[0];
        var t14 = this._private, n23 = e3._private.data.id, r34 = t14.map.get(n23);
        if (!r34) return this;
        var i42 = r34.index;
        return this.unmergeAt(i42), this;
    },
    unmerge: function(e3) {
        var t14 = this._private.cy;
        if (!e3) return this;
        if (e3 && p(e3)) {
            var n23 = e3;
            e3 = t14.mutableElements().filter(n23);
        }
        for(var r34 = 0; r34 < e3.length; r34++)this.unmergeOne(e3[r34]);
        return this;
    },
    unmergeBy: function(e3) {
        for(var t14 = this.length - 1; t14 >= 0; t14--){
            e3(this[t14]) && this.unmergeAt(t14);
        }
        return this;
    },
    map: function(e3, t14) {
        for(var n24 = [], r34 = 0; r34 < this.length; r34++){
            var i42 = this[r34], a44 = t14 ? e3.apply(t14, [
                i42,
                r34,
                this
            ]) : e3(i42, r34, this);
            n24.push(a44);
        }
        return n24;
    },
    reduce: function(e3, t14) {
        for(var n24 = t14, r34 = 0; r34 < this.length; r34++)n24 = e3(n24, this[r34], r34, this);
        return n24;
    },
    max: function(e3, t14) {
        for(var n24, r34 = -1 / 0, i43 = 0; i43 < this.length; i43++){
            var a45 = this[i43], o35 = t14 ? e3.apply(t14, [
                a45,
                i43,
                this
            ]) : e3(a45, i43, this);
            o35 > r34 && (r34 = o35, n24 = a45);
        }
        return {
            value: r34,
            ele: n24
        };
    },
    min: function(e3, t14) {
        for(var n24, r34 = 1 / 0, i43 = 0; i43 < this.length; i43++){
            var a46 = this[i43], o36 = t14 ? e3.apply(t14, [
                a46,
                i43,
                this
            ]) : e3(a46, i43, this);
            o36 < r34 && (r34 = o36, n24 = a46);
        }
        return {
            value: r34,
            ele: n24
        };
    }
}, qi = Fi;
qi.u = qi["|"] = qi["+"] = qi.union = qi.or = qi.add, qi["\\"] = qi["!"] = qi["-"] = qi.difference = qi.relativeComplement = qi.subtract = qi.not, qi.n = qi["&"] = qi["."] = qi.and = qi.intersection = qi.intersect, qi["^"] = qi["(+)"] = qi["(-)"] = qi.symmetricDifference = qi.symdiff = qi.xor, qi.fnFilter = qi.filterFn = qi.stdFilter = qi.filter, qi.complement = qi.abscomp = qi.absoluteComplement;
var ji = function(e3, t14) {
    var n24 = e3.cy().hasCompoundNodes();
    function r34(e4) {
        var t15 = e4.pstyle("z-compound-depth");
        return "auto" === t15.value ? n24 ? e4.zDepth() : 0 : "bottom" === t15.value ? -1 : "top" === t15.value ? ye : 0;
    }
    var i43 = r34(e3) - r34(t14);
    if (0 !== i43) return i43;
    function a47(e4) {
        return "auto" === e4.pstyle("z-index-compare").value && e4.isNode() ? 1 : 0;
    }
    var o37 = a47(e3) - a47(t14);
    if (0 !== o37) return o37;
    var s28 = e3.pstyle("z-index").value - t14.pstyle("z-index").value;
    return 0 !== s28 ? s28 : e3.poolIndex() - t14.poolIndex();
}, Yi = {
    forEach: function(e3, t14) {
        if (f(e3)) for(var n24 = this.length, r34 = 0; r34 < n24; r34++){
            var i43 = this[r34];
            if (!1 === (t14 ? e3.apply(t14, [
                i43,
                r34,
                this
            ]) : e3(i43, r34, this))) break;
        }
        return this;
    },
    toArray: function() {
        for(var e3 = [], t14 = 0; t14 < this.length; t14++)e3.push(this[t14]);
        return e3;
    },
    slice: function(e3, t14) {
        var n24 = [], r34 = this.length;
        null == t14 && (t14 = r34), null == e3 && (e3 = 0), e3 < 0 && (e3 = r34 + e3), t14 < 0 && (t14 = r34 + t14);
        for(var i44 = e3; i44 >= 0 && i44 < t14 && i44 < r34; i44++)n24.push(this[i44]);
        return this.spawn(n24);
    },
    size: function() {
        return this.length;
    },
    eq: function(e3) {
        return this[e3] || this.spawn();
    },
    first: function() {
        return this[0] || this.spawn();
    },
    last: function() {
        return this[this.length - 1] || this.spawn();
    },
    empty: function() {
        return 0 === this.length;
    },
    nonempty: function() {
        return !this.empty();
    },
    sort: function(e3) {
        if (!f(e3)) return this;
        var t14 = this.toArray().sort(e3);
        return this.spawn(t14);
    },
    sortByZIndex: function() {
        return this.sort(ji);
    },
    zDepth: function() {
        var e3 = this[0];
        if (e3) {
            var t14 = e3._private;
            if ("nodes" === t14.group) {
                var n24 = t14.data.parent ? e3.parents().size() : 0;
                return e3.isParent() ? n24 : ye - 1;
            }
            var r34 = t14.source, i44 = t14.target, a47 = r34.zDepth(), o37 = i44.zDepth();
            return Math.max(a47, o37, 0);
        }
    }
};
Yi.each = Yi.forEach;
"undefined" != ("undefined" == typeof Symbol ? "undefined" : e(Symbol)) && "undefined" != e(Symbol.iterator) && (Yi[Symbol.iterator] = function() {
    var e3 = this, t15 = {
        value: void 0,
        done: !1
    }, n25 = 0, r35 = this.length;
    return i22({
        next: function() {
            return n25 < r35 ? t15.value = e3[n25++] : (t15.value = void 0, t15.done = !0), t15;
        }
    }, Symbol.iterator, function() {
        return this;
    });
});
var Xi = Me({
    nodeDimensionsIncludeLabels: !1
}), Wi = {
    layoutDimensions: function(e3) {
        var t15;
        if (e3 = Xi(e3), this.takesUpSpace()) {
            if (e3.nodeDimensionsIncludeLabels) {
                var n25 = this.boundingBox();
                t15 = {
                    w: n25.w,
                    h: n25.h
                };
            } else t15 = {
                w: this.outerWidth(),
                h: this.outerHeight()
            };
        } else t15 = {
            w: 0,
            h: 0
        };
        return 0 !== t15.w && 0 !== t15.h || (t15.w = t15.h = 1), t15;
    },
    layoutPositions: function(e3, t15, n26) {
        var r35 = this.nodes().filter(function(e4) {
            return !e4.isParent();
        }), i45 = this.cy(), a48 = t15.eles, o38 = function(e4) {
            return e4.id();
        }, s28 = P21(n26, o38);
        e3.emit({
            type: "layoutstart",
            layout: e3
        }), e3.animations = [];
        var l36 = t15.spacingFactor && 1 !== t15.spacingFactor, u26 = function() {
            if (!l36) return null;
            for(var e4 = ht(), t16 = 0; t16 < r35.length; t16++){
                var n27 = r35[t16], i46 = s28(n27, t16);
                pt(e4, i46.x, i46.y);
            }
            return e4;
        }(), c27 = P21(function(e4, n28) {
            var r36 = s28(e4, n28);
            l36 && (r36 = (function(e5, t16, n29) {
                var r37 = t16.x1 + t16.w / 2, i47 = t16.y1 + t16.h / 2;
                return {
                    x: r37 + (n29.x - r37) * e5,
                    y: i47 + (n29.y - i47) * e5
                };
            })(Math.abs(t15.spacingFactor), u26, r36));
            return null != t15.transform && (r36 = t15.transform(e4, r36)), r36;
        }, o38);
        if (t15.animate) {
            for(var d26 = 0; d26 < r35.length; d26++){
                var h20 = r35[d26], p10 = c27(h20, d26);
                if (null == t15.animateFilter || t15.animateFilter(h20, d26)) {
                    var f16 = h20.animation({
                        position: p10,
                        duration: t15.animationDuration,
                        easing: t15.animationEasing
                    });
                    e3.animations.push(f16);
                } else h20.position(p10);
            }
            if (t15.fit) {
                var g16 = i45.animation({
                    fit: {
                        boundingBox: a48.boundingBoxAt(c27),
                        padding: t15.padding
                    },
                    duration: t15.animationDuration,
                    easing: t15.animationEasing
                });
                e3.animations.push(g16);
            } else if ((void 0) !== t15.zoom && (void 0) !== t15.pan) {
                var v14 = i45.animation({
                    zoom: t15.zoom,
                    pan: t15.pan,
                    duration: t15.animationDuration,
                    easing: t15.animationEasing
                });
                e3.animations.push(v14);
            }
            e3.animations.forEach(function(e4) {
                return e4.play();
            }), e3.one("layoutready", t15.ready), e3.emit({
                type: "layoutready",
                layout: e3
            }), $n.all(e3.animations.map(function(e4) {
                return e4.promise();
            })).then(function() {
                e3.one("layoutstop", t15.stop), e3.emit({
                    type: "layoutstop",
                    layout: e3
                });
            });
        } else r35.positions(c27), t15.fit && i45.fit(t15.eles, t15.padding), null != t15.zoom && i45.zoom(t15.zoom), t15.pan && i45.pan(t15.pan), e3.one("layoutready", t15.ready), e3.emit({
            type: "layoutready",
            layout: e3
        }), e3.one("layoutstop", t15.stop), e3.emit({
            type: "layoutstop",
            layout: e3
        });
        return this;
    },
    layout: function(e3) {
        return this.cy().makeLayout(I10({
        }, e3, {
            eles: this
        }));
    }
};
function Hi(e3, t15, n26) {
    var r35, i45 = n26._private, a48 = i45.styleCache = i45.styleCache || [];
    return null != (r35 = a48[e3]) ? r35 : r35 = a48[e3] = t15(n26);
}
function Ki(e3, t15) {
    return e3 = de(e3), function(n26) {
        return Hi(e3, t15, n26);
    };
}
function Gi(e3, t15) {
    e3 = de(e3);
    var n26 = function(e4) {
        return t15.call(e4);
    };
    return function() {
        var t16 = this[0];
        if (t16) return Hi(e3, n26, t16);
    };
}
Wi.createLayout = Wi.makeLayout = Wi.layout;
var Zi = {
    recalculateRenderedStyle: function(e3) {
        var t15 = this.cy(), n26 = t15.renderer(), r35 = t15.styleEnabled();
        return n26 && r35 && n26.recalculateRenderedStyle(this, e3), this;
    },
    dirtyStyleCache: function() {
        var e3, t15 = this.cy(), n26 = function(e4) {
            return e4._private.styleCache = null;
        };
        t15.hasCompoundNodes() ? ((e3 = this.spawnSelf().merge(this.descendants()).merge(this.parents())).merge(e3.connectedEdges()), e3.forEach(n26)) : this.forEach(function(e4) {
            n26(e4), e4.connectedEdges().forEach(n26);
        });
        return this;
    },
    updateStyle: function(e3) {
        var t15 = this._private.cy;
        if (!t15.styleEnabled()) return this;
        if (t15.batching()) return t15._private.batchStyleEles.merge(this), this;
        var n26 = this;
        e3 = !(!e3 && (void 0) !== e3), t15.hasCompoundNodes() && (n26 = this.spawnSelf().merge(this.descendants()).merge(this.parents()));
        var r35 = n26;
        return e3 ? r35.emitAndNotify("style") : r35.emit("style"), n26.forEach(function(e4) {
            return e4._private.styleDirty = !0;
        }), this;
    },
    cleanStyle: function() {
        var e3 = this.cy();
        if (e3.styleEnabled()) for(var t15 = 0; t15 < this.length; t15++){
            var n26 = this[t15];
            n26._private.styleDirty && (n26._private.styleDirty = !1, e3.style().apply(n26));
        }
    },
    parsedStyle: function(e3) {
        var t15 = !(arguments.length > 1 && (void 0) !== arguments[1]) || arguments[1], n28 = this[0], r35 = n28.cy();
        if (r35.styleEnabled() && n28) {
            this.cleanStyle();
            var i45 = n28._private.style[e3];
            return null != i45 ? i45 : t15 ? r35.style().getDefaultProperty(e3) : null;
        }
    },
    numericStyle: function(e3) {
        var t15 = this[0];
        if (t15.cy().styleEnabled() && t15) {
            var n28 = t15.pstyle(e3);
            return (void 0) !== n28.pfValue ? n28.pfValue : n28.value;
        }
    },
    numericStyleUnits: function(e3) {
        var t15 = this[0];
        if (t15.cy().styleEnabled()) return t15 ? t15.pstyle(e3).units : void 0;
    },
    renderedStyle: function(e3) {
        var t15 = this.cy();
        if (!t15.styleEnabled()) return this;
        var n29 = this[0];
        return n29 ? t15.style().getRenderedStyle(n29, e3) : void 0;
    },
    style: function(e3, t15) {
        var n29 = this.cy();
        if (!n29.styleEnabled()) return this;
        var r35 = n29.style();
        if (v1(e3)) {
            var i47 = e3;
            r35.applyBypass(this, i47, !1), this.emitAndNotify("style");
        } else if (p(e3)) {
            if ((void 0) === t15) {
                var a48 = this[0];
                return a48 ? r35.getStylePropertyValue(a48, e3) : void 0;
            }
            r35.applyBypass(this, e3, t15, !1), this.emitAndNotify("style");
        } else if ((void 0) === e3) {
            var o38 = this[0];
            return o38 ? r35.getRawStyle(o38) : void 0;
        }
        return this;
    },
    removeStyle: function(e3) {
        var t15 = this.cy();
        if (!t15.styleEnabled()) return this;
        var n29 = t15.style();
        if ((void 0) === e3) for(var r35 = 0; r35 < this.length; r35++){
            var i48 = this[r35];
            n29.removeAllBypasses(i48, !1);
        }
        else {
            e3 = e3.split(/\s+/);
            for(var a49 = 0; a49 < this.length; a49++){
                var o39 = this[a49];
                n29.removeBypasses(o39, e3, !1);
            }
        }
        return this.emitAndNotify("style"), this;
    },
    show: function() {
        return this.css("display", "element"), this;
    },
    hide: function() {
        return this.css("display", "none"), this;
    },
    effectiveOpacity: function() {
        var e3 = this.cy();
        if (!e3.styleEnabled()) return 1;
        var t15 = e3.hasCompoundNodes(), n29 = this[0];
        if (n29) {
            var r35 = n29._private, i49 = n29.pstyle("opacity").value;
            if (!t15) return i49;
            var a50 = r35.data.parent ? n29.parents() : null;
            if (a50) for(var o40 = 0; o40 < a50.length; o40++){
                i49 *= a50[o40].pstyle("opacity").value;
            }
            return i49;
        }
    },
    transparent: function() {
        if (!this.cy().styleEnabled()) return !1;
        var e3 = this[0], t15 = e3.cy().hasCompoundNodes();
        return e3 ? t15 ? 0 === e3.effectiveOpacity() : 0 === e3.pstyle("opacity").value : void 0;
    },
    backgrounding: function() {
        return !!this.cy().styleEnabled() && !!this[0]._private.backgrounding;
    }
};
function Ui(e3, t15) {
    var n29 = e3._private.data.parent ? e3.parents() : null;
    if (n29) for(var r36 = 0; r36 < n29.length; r36++){
        if (!t15(n29[r36])) return !1;
    }
    return !0;
}
function $i(e3) {
    var t15 = e3.ok, n29 = e3.edgeOkViaNode || e3.ok, r36 = e3.parentOk || e3.ok;
    return function() {
        var e4 = this.cy();
        if (!e4.styleEnabled()) return !0;
        var i50 = this[0], a51 = e4.hasCompoundNodes();
        if (i50) {
            var o41 = i50._private;
            if (!t15(i50)) return !1;
            if (i50.isNode()) return !a51 || Ui(i50, r36);
            var s28 = o41.source, l36 = o41.target;
            return n29(s28) && (!a51 || Ui(s28, n29)) && (s28 === l36 || n29(l36) && (!a51 || Ui(l36, n29)));
        }
    };
}
var Qi = Ki("eleTakesUpSpace", function(e3) {
    return "element" === e3.pstyle("display").value && 0 !== e3.width() && (!e3.isNode() || 0 !== e3.height());
});
Zi.takesUpSpace = Gi("takesUpSpace", $i({
    ok: Qi
}));
var Ji = Ki("eleInteractive", function(e3) {
    return "yes" === e3.pstyle("events").value && "visible" === e3.pstyle("visibility").value && Qi(e3);
}), ea = Ki("parentInteractive", function(e3) {
    return "visible" === e3.pstyle("visibility").value && Qi(e3);
});
Zi.interactive = Gi("interactive", $i({
    ok: Ji,
    parentOk: ea,
    edgeOkViaNode: Qi
})), Zi.noninteractive = function() {
    var e3 = this[0];
    if (e3) return !e3.interactive();
};
var ta = Ki("eleVisible", function(e3) {
    return "visible" === e3.pstyle("visibility").value && 0 !== e3.pstyle("opacity").pfValue && Qi(e3);
}), na = Qi;
Zi.visible = Gi("visible", $i({
    ok: ta,
    edgeOkViaNode: na
})), Zi.hidden = function() {
    var e3 = this[0];
    if (e3) return !e3.visible();
}, Zi.isBundledBezier = Gi("isBundledBezier", function() {
    return !!this.cy().styleEnabled() && !this.removed() && "bezier" === this.pstyle("curve-style").value && this.takesUpSpace();
}), Zi.bypass = Zi.css = Zi.style, Zi.renderedCss = Zi.renderedStyle, Zi.removeBypass = Zi.removeCss = Zi.removeStyle, Zi.pstyle = Zi.parsedStyle;
var ra = {
};
function ia(e3) {
    return function() {
        var t15 = arguments, n29 = [];
        if (2 === t15.length) {
            var r36 = t15[0], i50 = t15[1];
            this.on(e3.event, r36, i50);
        } else if (1 === t15.length && f(t15[0])) {
            var a51 = t15[0];
            this.on(e3.event, a51);
        } else if (0 === t15.length || 1 === t15.length && g25(t15[0])) {
            for(var o42 = 1 === t15.length ? t15[0] : null, s29 = 0; s29 < this.length; s29++){
                var l37 = this[s29], u26 = !e3.ableField || l37._private[e3.ableField], c27 = l37._private[e3.field] != e3.value;
                if (e3.overrideAble) {
                    var d27 = e3.overrideAble(l37);
                    if ((void 0) !== d27 && (u26 = d27, !d27)) return this;
                }
                u26 && (l37._private[e3.field] = e3.value, c27 && n29.push(l37));
            }
            var h21 = this.spawn(n29);
            h21.updateStyle(), h21.emit(e3.event), o42 && h21.emit(o42);
        }
        return this;
    };
}
function aa(e3) {
    ra[e3.field] = function() {
        var t15 = this[0];
        if (t15) {
            if (e3.overrideField) {
                var n29 = e3.overrideField(t15);
                if ((void 0) !== n29) return n29;
            }
            return t15._private[e3.field];
        }
    }, ra[e3.on] = ia({
        event: e3.on,
        field: e3.field,
        ableField: e3.ableField,
        overrideAble: e3.overrideAble,
        value: !0
    }), ra[e3.off] = ia({
        event: e3.off,
        field: e3.field,
        ableField: e3.ableField,
        overrideAble: e3.overrideAble,
        value: !1
    });
}
aa({
    field: "locked",
    overrideField: function(e3) {
        return !!e3.cy().autolock() || void 0;
    },
    on: "lock",
    off: "unlock"
}), aa({
    field: "grabbable",
    overrideField: function(e3) {
        return !e3.cy().autoungrabify() && !e3.pannable() && void 0;
    },
    on: "grabify",
    off: "ungrabify"
}), aa({
    field: "selected",
    ableField: "selectable",
    overrideAble: function(e3) {
        return !e3.cy().autounselectify() && void 0;
    },
    on: "select",
    off: "unselect"
}), aa({
    field: "selectable",
    overrideField: function(e3) {
        return !e3.cy().autounselectify() && void 0;
    },
    on: "selectify",
    off: "unselectify"
}), ra.deselect = ra.unselect, ra.grabbed = function() {
    var e3 = this[0];
    if (e3) return e3._private.grabbed;
}, aa({
    field: "active",
    on: "activate",
    off: "unactivate"
}), aa({
    field: "pannable",
    on: "panify",
    off: "unpanify"
}), ra.inactive = function() {
    var e3 = this[0];
    if (e3) return !e3._private.active;
};
var oa = {
}, sa = function(e3) {
    return function(t15) {
        for(var n30 = [], r37 = 0; r37 < this.length; r37++){
            var i51 = this[r37];
            if (i51.isNode()) {
                for(var a52 = !1, o43 = i51.connectedEdges(), s30 = 0; s30 < o43.length; s30++){
                    var l38 = o43[s30], u27 = l38.source(), c28 = l38.target();
                    if (e3.noIncomingEdges && c28 === i51 && u27 !== i51 || e3.noOutgoingEdges && u27 === i51 && c28 !== i51) {
                        a52 = !0;
                        break;
                    }
                }
                a52 || n30.push(i51);
            }
        }
        return this.spawn(n30, !0).filter(t15);
    };
}, la = function(e3) {
    return function(t15) {
        for(var n30 = [], r37 = 0; r37 < this.length; r37++){
            var i52 = this[r37];
            if (i52.isNode()) for(var a53 = i52.connectedEdges(), o44 = 0; o44 < a53.length; o44++){
                var s31 = a53[o44], l39 = s31.source(), u28 = s31.target();
                e3.outgoing && l39 === i52 ? (n30.push(s31), n30.push(u28)) : e3.incoming && u28 === i52 && (n30.push(s31), n30.push(l39));
            }
        }
        return this.spawn(n30, !0).filter(t15);
    };
}, ua = function(e3) {
    return function(t15) {
        for(var n30 = this, r37 = [], i53 = {
        };;){
            var a54 = e3.outgoing ? n30.outgoers() : n30.incomers();
            if (0 === a54.length) break;
            for(var o45 = !1, s32 = 0; s32 < a54.length; s32++){
                var l40 = a54[s32], u29 = l40.id();
                i53[u29] || (i53[u29] = !0, r37.push(l40), o45 = !0);
            }
            if (!o45) break;
            n30 = a54;
        }
        return this.spawn(r37, !0).filter(t15);
    };
};
function ca(e3) {
    return function(t15) {
        for(var n30 = [], r37 = 0; r37 < this.length; r37++){
            var i53 = this[r37]._private[e3.attr];
            i53 && n30.push(i53);
        }
        return this.spawn(n30, !0).filter(t15);
    };
}
function da(e3) {
    return function(t15) {
        var n30 = [], r37 = this._private.cy, i54 = e3 || {
        };
        p(t15) && (t15 = r37.$(t15));
        for(var a55 = 0; a55 < t15.length; a55++)for(var o46 = t15[a55]._private.edges, s33 = 0; s33 < o46.length; s33++){
            var l41 = o46[s33], u30 = l41._private.data, c29 = this.hasElementWithId(u30.source) && t15.hasElementWithId(u30.target), d28 = t15.hasElementWithId(u30.source) && this.hasElementWithId(u30.target);
            if (c29 || d28) {
                if (i54.thisIsSrc || i54.thisIsTgt) {
                    if (i54.thisIsSrc && !c29) continue;
                    if (i54.thisIsTgt && !d28) continue;
                }
                n30.push(l41);
            }
        }
        return this.spawn(n30, !0);
    };
}
function ha(e3) {
    return e3 = I10({
    }, {
        codirected: !1
    }, e3), function(t15) {
        for(var n30 = [], r37 = this.edges(), i54 = e3, a55 = 0; a55 < r37.length; a55++)for(var o46 = r37[a55]._private, s33 = o46.source, l42 = s33._private.data.id, u31 = o46.data.target, c30 = s33._private.edges, d29 = 0; d29 < c30.length; d29++){
            var h22 = c30[d29], p11 = h22._private.data, f17 = p11.target, g17 = p11.source, v15 = f17 === u31 && g17 === l42, y15 = l42 === f17 && u31 === g17;
            (i54.codirected && v15 || !i54.codirected && (v15 || y15)) && n30.push(h22);
        }
        return this.spawn(n30, !0).filter(t15);
    };
}
oa.clearTraversalCache = function() {
    for(var e3 = 0; e3 < this.length; e3++)this[e3]._private.traversalCache = null;
}, I10(oa, {
    roots: sa({
        noIncomingEdges: !0
    }),
    leaves: sa({
        noOutgoingEdges: !0
    }),
    outgoers: jr(la({
        outgoing: !0
    }), "outgoers"),
    successors: ua({
        outgoing: !0
    }),
    incomers: jr(la({
        incoming: !0
    }), "incomers"),
    predecessors: ua({
        incoming: !0
    })
}), I10(oa, {
    neighborhood: jr(function(e3) {
        for(var t15 = [], n30 = this.nodes(), r37 = 0; r37 < n30.length; r37++)for(var i54 = n30[r37], a55 = i54.connectedEdges(), o46 = 0; o46 < a55.length; o46++){
            var s33 = a55[o46], l42 = s33.source(), u31 = s33.target(), c30 = i54 === l42 ? u31 : l42;
            c30.length > 0 && t15.push(c30[0]), t15.push(s33[0]);
        }
        return this.spawn(t15, !0).filter(e3);
    }, "neighborhood"),
    closedNeighborhood: function(e3) {
        return this.neighborhood().add(this).filter(e3);
    },
    openNeighborhood: function(e3) {
        return this.neighborhood(e3);
    }
}), oa.neighbourhood = oa.neighborhood, oa.closedNeighbourhood = oa.closedNeighborhood, oa.openNeighbourhood = oa.openNeighborhood, I10(oa, {
    source: jr(function(e3) {
        var t15, n30 = this[0];
        return n30 && (t15 = n30._private.source || n30.cy().collection()), t15 && e3 ? t15.filter(e3) : t15;
    }, "source"),
    target: jr(function(e3) {
        var t15, n30 = this[0];
        return n30 && (t15 = n30._private.target || n30.cy().collection()), t15 && e3 ? t15.filter(e3) : t15;
    }, "target"),
    sources: ca({
        attr: "source"
    }),
    targets: ca({
        attr: "target"
    })
}), I10(oa, {
    edgesWith: jr(da(), "edgesWith"),
    edgesTo: jr(da({
        thisIsSrc: !0
    }), "edgesTo")
}), I10(oa, {
    connectedEdges: jr(function(e3) {
        for(var t15 = [], n30 = 0; n30 < this.length; n30++){
            var r37 = this[n30];
            if (r37.isNode()) for(var i54 = r37._private.edges, a55 = 0; a55 < i54.length; a55++){
                var o46 = i54[a55];
                t15.push(o46);
            }
        }
        return this.spawn(t15, !0).filter(e3);
    }, "connectedEdges"),
    connectedNodes: jr(function(e3) {
        for(var t15 = [], n30 = 0; n30 < this.length; n30++){
            var r38 = this[n30];
            r38.isEdge() && (t15.push(r38.source()[0]), t15.push(r38.target()[0]));
        }
        return this.spawn(t15, !0).filter(e3);
    }, "connectedNodes"),
    parallelEdges: jr(ha(), "parallelEdges"),
    codirectedEdges: jr(ha({
        codirected: !0
    }), "codirectedEdges")
}), I10(oa, {
    components: function(e3) {
        var t15 = this, n30 = t15.cy(), r39 = n30.collection(), i55 = null == e3 ? t15.nodes() : e3.nodes(), a56 = [];
        null != e3 && i55.empty() && (i55 = e3.sources());
        var o47 = function(e4, t16) {
            r39.merge(e4), i55.unmerge(e4), t16.merge(e4);
        };
        if (i55.empty()) return t15.spawn();
        var s34 = function() {
            var e4 = n30.collection();
            a56.push(e4);
            var r40 = i55[0];
            o47(r40, e4), t15.bfs({
                directed: !1,
                roots: r40,
                visit: function(t16) {
                    return o47(t16, e4);
                }
            }), e4.forEach(function(n31) {
                n31.connectedEdges().forEach(function(n32) {
                    t15.has(n32) && e4.has(n32.source()) && e4.has(n32.target()) && e4.merge(n32);
                });
            });
        };
        do {
            s34();
        }while (i55.length > 0)
        return a56;
    },
    component: function() {
        var e3 = this[0];
        return e3.cy().mutableElements().components(e3)[0];
    }
}), oa.componentsOf = oa.components;
var pa = function(e3, t15) {
    var n30 = arguments.length > 2 && (void 0) !== arguments[2] && arguments[2];
    if ((void 0) !== e3) {
        var r39 = new ze, i55 = !1;
        if (t15) {
            if (t15.length > 0 && v1(t15[0]) && !x(t15[0])) {
                i55 = !0;
                for(var a56 = [], o47 = new Ae, s34 = 0, l43 = t15.length; s34 < l43; s34++){
                    var u32 = t15[s34];
                    null == u32.data && (u32.data = {
                    });
                    var c31 = u32.data;
                    if (null == c31.id) c31.id = Pe();
                    else if (e3.hasElementWithId(c31.id) || o47.has(c31.id)) continue;
                    var d29 = new Oe(e3, u32, !1);
                    a56.push(d29), o47.add(c31.id);
                }
                t15 = a56;
            }
        } else t15 = [];
        this.length = 0;
        for(var h23 = 0, p12 = t15.length; h23 < p12; h23++){
            var f18 = t15[h23][0];
            if (null != f18) {
                var g18 = f18._private.data.id;
                n30 && r39.has(g18) || (n30 && r39.set(g18, {
                    index: this.length,
                    ele: f18
                }), this[this.length] = f18, this.length++);
            }
        }
        this._private = {
            eles: this,
            cy: e3,
            get map () {
                return null == this.lazyMap && this.rebuildMap(), this.lazyMap;
            },
            set map (e4){
                this.lazyMap = e4;
            },
            rebuildMap: function() {
                for(var e5 = this.lazyMap = new ze, t16 = this.eles, n31 = 0; n31 < t16.length; n31++){
                    var r40 = t16[n31];
                    e5.set(r40.id(), {
                        index: n31,
                        ele: r40
                    });
                }
            }
        }, n30 && (this._private.map = r39), i55 && this.restore();
    } else Ee("A collection must have a reference to the core");
}, fa = Oe.prototype = pa.prototype = Object.create(Array.prototype);
fa.instanceString = function() {
    return "collection";
}, fa.spawn = function(e3, t15) {
    return new pa(this.cy(), e3, t15);
}, fa.spawnSelf = function() {
    return this.spawn(this);
}, fa.cy = function() {
    return this._private.cy;
}, fa.renderer = function() {
    return this._private.cy.renderer();
}, fa.element = function() {
    return this[0];
}, fa.collection = function() {
    return w(this) ? this : new pa(this._private.cy, [
        this
    ]);
}, fa.unique = function() {
    return new pa(this._private.cy, this, !0);
}, fa.hasElementWithId = function(e3) {
    return e3 = "" + e3, this._private.map.has(e3);
}, fa.getElementById = function(e3) {
    e3 = "" + e3;
    var t15 = this._private.cy, n30 = this._private.map.get(e3);
    return n30 ? n30.ele : new pa(t15);
}, fa.$id = fa.getElementById, fa.poolIndex = function() {
    var e3 = this._private.cy._private.elements, t15 = this[0]._private.data.id;
    return e3._private.map.get(t15).index;
}, fa.indexOf = function(e3) {
    var t15 = e3[0]._private.data.id;
    return this._private.map.get(t15).index;
}, fa.indexOfId = function(e3) {
    return e3 = "" + e3, this._private.map.get(e3).index;
}, fa.json = function(e3) {
    var t15 = this.element(), n30 = this.cy();
    if (null == t15 && e3) return this;
    if (null != t15) {
        var r41 = t15._private;
        if (v1(e3)) {
            if (n30.startBatch(), e3.data) {
                t15.data(e3.data);
                var i56 = r41.data;
                if (t15.isEdge()) {
                    var a57 = !1, o48 = {
                    }, s35 = e3.data.source, l44 = e3.data.target;
                    null != s35 && s35 != i56.source && (o48.source = "" + s35, a57 = !0), null != l44 && l44 != i56.target && (o48.target = "" + l44, a57 = !0), a57 && (t15 = t15.move(o48));
                } else {
                    var u33 = "parent" in e3.data, c32 = e3.data.parent;
                    !u33 || null == c32 && null == i56.parent || c32 == i56.parent || ((void 0) === c32 && (c32 = null), null != c32 && (c32 = "" + c32), t15 = t15.move({
                        parent: c32
                    }));
                }
            }
            e3.position && t15.position(e3.position);
            var d30 = function(n31, i57, a58) {
                var o49 = e3[n31];
                null != o49 && o49 !== r41[n31] && (o49 ? t15[i57]() : t15[a58]());
            };
            return d30("removed", "remove", "restore"), d30("selected", "select", "unselect"), d30("selectable", "selectify", "unselectify"), d30("locked", "lock", "unlock"), d30("grabbable", "grabify", "ungrabify"), d30("pannable", "panify", "unpanify"), null != e3.classes && t15.classes(e3.classes), n30.endBatch(), this;
        }
        if ((void 0) === e3) {
            var h24 = {
                data: Se(r41.data),
                position: Se(r41.position),
                group: r41.group,
                removed: r41.removed,
                selected: r41.selected,
                selectable: r41.selectable,
                locked: r41.locked,
                grabbable: r41.grabbable,
                pannable: r41.pannable,
                classes: null
            };
            h24.classes = "";
            var p13 = 0;
            return r41.classes.forEach(function(e4) {
                return h24.classes += 0 == p13++ ? e4 : " " + e4;
            }), h24;
        }
    }
}, fa.jsons = function() {
    for(var e3 = [], t15 = 0; t15 < this.length; t15++){
        var n30 = this[t15].json();
        e3.push(n30);
    }
    return e3;
}, fa.clone = function() {
    for(var e3 = this.cy(), t15 = [], n31 = 0; n31 < this.length; n31++){
        var r42 = this[n31].json(), i57 = new Oe(e3, r42, !1);
        t15.push(i57);
    }
    return new pa(e3, t15);
}, fa.copy = fa.clone, fa.restore = function() {
    for(var e3, t15, n31 = !(arguments.length > 0 && (void 0) !== arguments[0]) || arguments[0], r43 = !(arguments.length > 1 && (void 0) !== arguments[1]) || arguments[1], i58 = this, a58 = i58.cy(), o49 = a58._private, s36 = [], l45 = [], u34 = 0, c33 = i58.length; u34 < c33; u34++){
        var d31 = i58[u34];
        r43 && !d31.removed() || (d31.isNode() ? s36.push(d31) : l45.push(d31));
    }
    e3 = s36.concat(l45);
    var h25 = function() {
        e3.splice(t15, 1), t15--;
    };
    for(t15 = 0; t15 < e3.length; t15++){
        var f19 = e3[t15], g19 = f19._private, v16 = g19.data;
        if (f19.clearTraversalCache(), r43 || g19.removed) {
            if ((void 0) === v16.id) v16.id = Pe();
            else if (y1(v16.id)) v16.id = "" + v16.id;
            else {
                if (C(v16.id) || !p(v16.id)) {
                    Ee("Can not create element with invalid string ID `" + v16.id + "`"), h25();
                    continue;
                }
                if (a58.hasElementWithId(v16.id)) {
                    Ee("Can not create second element with ID `" + v16.id + "`"), h25();
                    continue;
                }
            }
        } else ;
        var m10 = v16.id;
        if (f19.isNode()) {
            var b11 = g19.position;
            null == b11.x && (b11.x = 0), null == b11.y && (b11.y = 0);
        }
        if (f19.isEdge()) {
            for(var x10 = f19, w12 = [
                "source",
                "target"
            ], E13 = w12.length, k12 = !1, S9 = 0; S9 < E13; S9++){
                var P10 = w12[S9], D10 = v16[P10];
                y1(D10) && (D10 = v16[P10] = "" + v16[P10]), null == D10 || "" === D10 ? (Ee("Can not create edge `" + m10 + "` with unspecified " + P10), k12 = !0) : a58.hasElementWithId(D10) || (Ee("Can not create edge `" + m10 + "` with nonexistant " + P10 + " `" + D10 + "`"), k12 = !0);
            }
            if (k12) {
                h25();
                continue;
            }
            var T11 = a58.getElementById(v16.source), M10 = a58.getElementById(v16.target);
            T11.same(M10) ? T11._private.edges.push(x10) : (T11._private.edges.push(x10), M10._private.edges.push(x10)), x10._private.source = T11, x10._private.target = M10;
        }
        g19.map = new ze, g19.map.set(m10, {
            ele: f19,
            index: 0
        }), g19.removed = !1, r43 && a58.addToPool(f19);
    }
    for(var B8 = 0; B8 < s36.length; B8++){
        var _8 = s36[B8], N5 = _8._private.data;
        y1(N5.parent) && (N5.parent = "" + N5.parent);
        var I7 = N5.parent, z6 = null != I7;
        if (z6) {
            var L6 = a58.getElementById(I7);
            if (L6.empty()) N5.parent = void 0;
            else {
                for(var A6 = !1, O6 = L6; !O6.empty();){
                    if (_8.same(O6)) {
                        A6 = !0, N5.parent = void 0;
                        break;
                    }
                    O6 = O6.parent();
                }
                A6 || (L6[0]._private.children.push(_8), _8._private.parent = L6[0], o49.hasCompoundNodes = !0);
            }
        }
    }
    if (e3.length > 0) {
        for(var R6 = e3.length === i58.length ? i58 : new pa(a58, e3), V5 = 0; V5 < R6.length; V5++){
            var F5 = R6[V5];
            F5.isNode() || (F5.parallelEdges().clearTraversalCache(), F5.source().clearTraversalCache(), F5.target().clearTraversalCache());
        }
        (o49.hasCompoundNodes ? a58.collection().merge(R6).merge(R6.connectedNodes()).merge(R6.parent()) : R6).dirtyCompoundBoundsCache().dirtyBoundingBoxCache().updateStyle(n31), n31 ? R6.emitAndNotify("add") : r43 && R6.emit("add");
    }
    return i58;
}, fa.removed = function() {
    var e3 = this[0];
    return e3 && e3._private.removed;
}, fa.inside = function() {
    var e3 = this[0];
    return e3 && !e3._private.removed;
}, fa.remove = function() {
    var e3 = !(arguments.length > 0 && (void 0) !== arguments[0]) || arguments[0], t15 = !(arguments.length > 1 && (void 0) !== arguments[1]) || arguments[1], n31 = this, r43 = [], i58 = {
    }, a58 = n31._private.cy;
    function o49(e4) {
        for(var t16 = e4._private.edges, n32 = 0; n32 < t16.length; n32++)l46(t16[n32]);
    }
    function s36(e4) {
        for(var t16 = e4._private.children, n32 = 0; n32 < t16.length; n32++)l46(t16[n32]);
    }
    function l46(e4) {
        var n32 = i58[e4.id()];
        t15 && e4.removed() || n32 || (i58[e4.id()] = !0, e4.isNode() ? (r43.push(e4), o49(e4), s36(e4)) : r43.unshift(e4));
    }
    for(var u34 = 0, c33 = n31.length; u34 < c33; u34++){
        var d32 = n31[u34];
        l46(d32);
    }
    function h25(e4, t16) {
        var n32 = e4._private.edges;
        Be(n32, t16), e4.clearTraversalCache();
    }
    function p14(e4) {
        e4.clearTraversalCache();
    }
    var f20 = [];
    function g20(e4, t16) {
        t16 = t16[0];
        var n32 = (e4 = e4[0])._private.children, r44 = e4.id();
        Be(n32, t16), t16._private.parent = null, f20.ids[r44] || (f20.ids[r44] = !0, f20.push(e4));
    }
    f20.ids = {
    }, n31.dirtyCompoundBoundsCache(), t15 && a58.removeFromPool(r43);
    for(var v17 = 0; v17 < r43.length; v17++){
        var y16 = r43[v17];
        if (y16.isEdge()) {
            var m11 = y16.source()[0], b12 = y16.target()[0];
            h25(m11, y16), h25(b12, y16);
            for(var x11 = y16.parallelEdges(), w13 = 0; w13 < x11.length; w13++){
                var E14 = x11[w13];
                p14(E14), E14.isBundledBezier() && E14.dirtyBoundingBoxCache();
            }
        } else {
            var k13 = y16.parent();
            0 !== k13.length && g20(k13, y16);
        }
        t15 && (y16._private.removed = !0);
    }
    var C10 = a58._private.elements;
    a58._private.hasCompoundNodes = !1;
    for(var S10 = 0; S10 < C10.length; S10++){
        var P11 = C10[S10];
        if (P11.isParent()) {
            a58._private.hasCompoundNodes = !0;
            break;
        }
    }
    var D11 = new pa(this.cy(), r43);
    D11.size() > 0 && (e3 ? D11.emitAndNotify("remove") : t15 && D11.emit("remove"));
    for(var T12 = 0; T12 < f20.length; T12++){
        var M11 = f20[T12];
        t15 && M11.removed() || M11.updateStyle();
    }
    return D11;
}, fa.move = function(e3) {
    var t15 = this._private.cy, n31 = this, r43 = function(e4) {
        return null == e4 ? e4 : "" + e4;
    };
    if ((void 0) !== e3.source || (void 0) !== e3.target) {
        var i58 = r43(e3.source), a58 = r43(e3.target), o49 = null != i58 && t15.hasElementWithId(i58), s36 = null != a58 && t15.hasElementWithId(a58);
        (o49 || s36) && (t15.batch(function() {
            n31.remove(!1, !1), n31.emitAndNotify("moveout");
            for(var e4 = 0; e4 < n31.length; e4++){
                var t16 = n31[e4], r44 = t16._private.data;
                t16.isEdge() && (o49 && (r44.source = i58), s36 && (r44.target = a58));
            }
            n31.restore(!1, !1);
        }), n31.emitAndNotify("move"));
    } else if ((void 0) !== e3.parent) {
        var l46 = r43(e3.parent);
        if (null === l46 || t15.hasElementWithId(l46)) {
            var u34 = null === l46 ? void 0 : l46;
            t15.batch(function() {
                var e4 = n31.remove(!1, !1);
                e4.emitAndNotify("moveout");
                for(var t17 = 0; t17 < n31.length; t17++){
                    var r45 = n31[t17], i59 = r45._private.data;
                    r45.isNode() && (i59.parent = u34);
                }
                e4.restore(!1, !1);
            }), n31.emitAndNotify("move");
        }
    }
    return this;
}, [
    Xn,
    tr,
    nr,
    Vr,
    Yr,
    Ur,
    $r,
    Ci,
    Vi,
    Fi,
    {
        isNode: function() {
            return "nodes" === this.group();
        },
        isEdge: function() {
            return "edges" === this.group();
        },
        isLoop: function() {
            return this.isEdge() && this.source()[0] === this.target()[0];
        },
        isSimple: function() {
            return this.isEdge() && this.source()[0] !== this.target()[0];
        },
        group: function() {
            var e3 = this[0];
            if (e3) return e3._private.group;
        }
    },
    Yi,
    Wi,
    Zi,
    ra,
    oa
].forEach(function(e3) {
    I10(fa, e3);
});
var ga = {
    add: function(e3) {
        var t15, n31 = this;
        if (b1(e3)) {
            var r43 = e3;
            if (r43._private.cy === n31) t15 = r43.restore();
            else {
                for(var i60 = [], a59 = 0; a59 < r43.length; a59++){
                    var o50 = r43[a59];
                    i60.push(o50.json());
                }
                t15 = new pa(n31, i60);
            }
        } else if (g25(e3)) {
            t15 = new pa(n31, e3);
        } else if (v1(e3) && (g25(e3.nodes) || g25(e3.edges))) {
            for(var s37 = e3, l47 = [], u35 = [
                "nodes",
                "edges"
            ], c33 = 0, d33 = u35.length; c33 < d33; c33++){
                var h25 = u35[c33], p14 = s37[h25];
                if (g25(p14)) for(var f20 = 0, y17 = p14.length; f20 < y17; f20++){
                    var m12 = I10({
                        group: h25
                    }, p14[f20]);
                    l47.push(m12);
                }
            }
            t15 = new pa(n31, l47);
        } else {
            t15 = new Oe(n31, e3).collection();
        }
        return t15;
    },
    remove: function(e3) {
        if (b1(e3)) ;
        else if (p(e3)) {
            var t15 = e3;
            e3 = this.$(t15);
        }
        return e3.remove();
    }
};
var va = function() {
    function e3(e4) {
        return -e4.tension * e4.x - e4.friction * e4.v;
    }
    function t17(t18, n31, r46) {
        var i61 = {
            x: t18.x + r46.dx * n31,
            v: t18.v + r46.dv * n31,
            tension: t18.tension,
            friction: t18.friction
        };
        return {
            dx: i61.v,
            dv: e3(i61)
        };
    }
    function n31(n32, r46) {
        var i61 = {
            dx: n32.v,
            dv: e3(n32)
        }, a60 = t17(n32, 0.5 * r46, i61), o51 = t17(n32, 0.5 * r46, a60), s38 = t17(n32, r46, o51), l48 = 1 / 6 * (i61.dx + 2 * (a60.dx + o51.dx) + s38.dx), u36 = 1 / 6 * (i61.dv + 2 * (a60.dv + o51.dv) + s38.dv);
        return n32.x = n32.x + l48 * r46, n32.v = n32.v + u36 * r46, n32;
    }
    return function e4(t18, r46, i61) {
        var a60, o51, s38, l48 = {
            x: -1,
            v: 0,
            tension: null,
            friction: null
        }, u36 = [
            0
        ], c34 = 0;
        for(t18 = parseFloat(t18) || 500, r46 = parseFloat(r46) || 20, i61 = i61 || null, l48.tension = t18, l48.friction = r46, o51 = (a60 = null !== i61) ? (c34 = e4(t18, r46)) / i61 * 0.016 : 0.016; s38 = n31(s38 || l48, o51), u36.push(1 + s38.x), c34 += 16, Math.abs(s38.x) > 0.0001 && Math.abs(s38.v) > 0.0001;);
        return a60 ? function(e5) {
            return u36[e5 * (u36.length - 1) | 0];
        } : c34;
    };
}(), ya = function(e3, t17, n31, r46) {
    var i61 = function(e4, t18, n32, r47) {
        var i62 = 4, a60 = 0.001, o51 = 0.0000001, s38 = 10, l48 = 11, u36 = 1 / (l48 - 1), c34 = "undefined" != typeof Float32Array;
        if (4 !== arguments.length) return !1;
        for(var d34 = 0; d34 < 4; ++d34)if ("number" != typeof arguments[d34] || isNaN(arguments[d34]) || !isFinite(arguments[d34])) return !1;
        e4 = Math.min(e4, 1), n32 = Math.min(n32, 1), e4 = Math.max(e4, 0), n32 = Math.max(n32, 0);
        var h26 = c34 ? new Float32Array(l48) : new Array(l48);
        function p15(e5, t19) {
            return 1 - 3 * t19 + 3 * e5;
        }
        function f21(e5, t19) {
            return 3 * t19 - 6 * e5;
        }
        function g20(e5) {
            return 3 * e5;
        }
        function v17(e5, t19, n33) {
            return ((p15(t19, n33) * e5 + f21(t19, n33)) * e5 + g20(t19)) * e5;
        }
        function y18(e5, t19, n33) {
            return 3 * p15(t19, n33) * e5 * e5 + 2 * f21(t19, n33) * e5 + g20(t19);
        }
        function m13(t19, r48) {
            for(var a61 = 0; a61 < i62; ++a61){
                var o52 = y18(r48, e4, n32);
                if (0 === o52) return r48;
                r48 -= (v17(r48, e4, n32) - t19) / o52;
            }
            return r48;
        }
        function b13() {
            for(var t19 = 0; t19 < l48; ++t19)h26[t19] = v17(t19 * u36, e4, n32);
        }
        function x12(t19, r48, i63) {
            var a61, l49, u37 = 0;
            do {
                (a61 = v17(l49 = r48 + (i63 - r48) / 2, e4, n32) - t19) > 0 ? i63 = l49 : r48 = l49;
            }while (Math.abs(a61) > o51 && (++u37) < s38)
            return l49;
        }
        function w14(t19) {
            for(var r48 = 0, i63 = 1, o53 = l48 - 1; i63 !== o53 && h26[i63] <= t19; ++i63)r48 += u36;
            --i63;
            var s39 = r48 + (t19 - h26[i63]) / (h26[i63 + 1] - h26[i63]) * u36, c35 = y18(s39, e4, n32);
            return c35 >= a60 ? m13(t19, s39) : 0 === c35 ? s39 : x12(t19, r48, r48 + u36);
        }
        var E15 = !1;
        function k14() {
            E15 = !0, e4 === t18 && n32 === r47 || b13();
        }
        var C10 = function(i63) {
            return E15 || k14(), e4 === t18 && n32 === r47 ? i63 : 0 === i63 ? 0 : 1 === i63 ? 1 : v17(w14(i63), t18, r47);
        };
        C10.getControlPoints = function() {
            return [
                {
                    x: e4,
                    y: t18
                },
                {
                    x: n32,
                    y: r47
                }
            ];
        };
        var S10 = "generateBezier(" + [
            e4,
            t18,
            n32,
            r47
        ] + ")";
        return C10.toString = function() {
            return S10;
        }, C10;
    }(e3, t17, n31, r46);
    return function(e4, t18, n32) {
        return e4 + (t18 - e4) * i61(n32);
    };
}, ma = {
    linear: function(e3, t17, n31) {
        return e3 + (t17 - e3) * n31;
    },
    ease: ya(0.25, 0.1, 0.25, 1),
    "ease-in": ya(0.42, 0, 1, 1),
    "ease-out": ya(0, 0, 0.58, 1),
    "ease-in-out": ya(0.42, 0, 0.58, 1),
    "ease-in-sine": ya(0.47, 0, 0.745, 0.715),
    "ease-out-sine": ya(0.39, 0.575, 0.565, 1),
    "ease-in-out-sine": ya(0.445, 0.05, 0.55, 0.95),
    "ease-in-quad": ya(0.55, 0.085, 0.68, 0.53),
    "ease-out-quad": ya(0.25, 0.46, 0.45, 0.94),
    "ease-in-out-quad": ya(0.455, 0.03, 0.515, 0.955),
    "ease-in-cubic": ya(0.55, 0.055, 0.675, 0.19),
    "ease-out-cubic": ya(0.215, 0.61, 0.355, 1),
    "ease-in-out-cubic": ya(0.645, 0.045, 0.355, 1),
    "ease-in-quart": ya(0.895, 0.03, 0.685, 0.22),
    "ease-out-quart": ya(0.165, 0.84, 0.44, 1),
    "ease-in-out-quart": ya(0.77, 0, 0.175, 1),
    "ease-in-quint": ya(0.755, 0.05, 0.855, 0.06),
    "ease-out-quint": ya(0.23, 1, 0.32, 1),
    "ease-in-out-quint": ya(0.86, 0, 0.07, 1),
    "ease-in-expo": ya(0.95, 0.05, 0.795, 0.035),
    "ease-out-expo": ya(0.19, 1, 0.22, 1),
    "ease-in-out-expo": ya(1, 0, 0, 1),
    "ease-in-circ": ya(0.6, 0.04, 0.98, 0.335),
    "ease-out-circ": ya(0.075, 0.82, 0.165, 1),
    "ease-in-out-circ": ya(0.785, 0.135, 0.15, 0.86),
    spring: function(e3, t17, n31) {
        if (0 === n31) return ma.linear;
        var r46 = va(e3, t17, n31);
        return function(e4, t18, n32) {
            return e4 + (t18 - e4) * r46(n32);
        };
    },
    "cubic-bezier": ya
};
function ba(e3, t17, n31, r46, i61) {
    if (1 === r46) return n31;
    if (t17 === n31) return n31;
    var a60 = i61(t17, n31, r46);
    return null == e3 || ((e3.roundValue || e3.color) && (a60 = Math.round(a60)), (void 0) !== e3.min && (a60 = Math.max(a60, e3.min)), (void 0) !== e3.max && (a60 = Math.min(a60, e3.max))), a60;
}
function xa(e3, t17) {
    return null != e3.pfValue || null != e3.value ? null == e3.pfValue || null != t17 && "%" === t17.type.units ? e3.value : e3.pfValue : e3;
}
function wa(e3, t17, n31, r46, i61) {
    var a60 = null != i61 ? i61.type : null;
    n31 < 0 ? n31 = 0 : n31 > 1 && (n31 = 1);
    var o51 = xa(e3, i61), s38 = xa(t17, i61);
    if (y1(o51) && y1(s38)) return ba(a60, o51, s38, n31, r46);
    if (g25(o51) && g25(s38)) {
        for(var l48 = [], u36 = 0; u36 < s38.length; u36++){
            var c34 = o51[u36], d34 = s38[u36];
            if (null != c34 && null != d34) {
                var h26 = ba(a60, c34, d34, n31, r46);
                l48.push(h26);
            } else l48.push(d34);
        }
        return l48;
    }
}
function Ea(e3, t17, n31, r46) {
    var i61 = !r46, a60 = e3._private, o51 = t17._private, s38 = o51.easing, l49 = o51.startTime, u37 = (r46 ? e3 : e3.cy()).style();
    if (!o51.easingImpl) {
        if (null == s38) o51.easingImpl = ma.linear;
        else {
            var c35, d35, h27;
            if (p(s38)) c35 = u37.parse("transition-timing-function", s38).value;
            else c35 = s38;
            p(c35) ? (d35 = c35, h27 = []) : (d35 = c35[1], h27 = c35.slice(2).map(function(e4) {
                return +e4;
            })), h27.length > 0 ? ("spring" === d35 && h27.push(o51.duration), o51.easingImpl = ma[d35].apply(null, h27)) : o51.easingImpl = ma[d35];
        }
    }
    var f21, g20 = o51.easingImpl;
    if (f21 = 0 === o51.duration ? 1 : (n31 - l49) / o51.duration, o51.applying && (f21 = o51.progress), f21 < 0 ? f21 = 0 : f21 > 1 && (f21 = 1), null == o51.delay) {
        var v17 = o51.startPosition, y18 = o51.position;
        if (y18 && i61 && !e3.locked()) {
            var m13 = {
            };
            ka(v17.x, y18.x) && (m13.x = wa(v17.x, y18.x, f21, g20)), ka(v17.y, y18.y) && (m13.y = wa(v17.y, y18.y, f21, g20)), e3.position(m13);
        }
        var b13 = o51.startPan, x12 = o51.pan, w14 = a60.pan, E15 = null != x12 && r46;
        E15 && (ka(b13.x, x12.x) && (w14.x = wa(b13.x, x12.x, f21, g20)), ka(b13.y, x12.y) && (w14.y = wa(b13.y, x12.y, f21, g20)), e3.emit("pan"));
        var k14 = o51.startZoom, C10 = o51.zoom, S10 = null != C10 && r46;
        S10 && (ka(k14, C10) && (a60.zoom = dt(a60.minZoom, wa(k14, C10, f21, g20), a60.maxZoom)), e3.emit("zoom")), (E15 || S10) && e3.emit("viewport");
        var P12 = o51.style;
        if (P12 && P12.length > 0 && i61) {
            for(var D11 = 0; D11 < P12.length; D11++){
                var T12 = P12[D11], M12 = T12.name, B8 = T12, _9 = o51.startStyle[M12], N6 = wa(_9, B8, f21, g20, u37.properties[_9.name]);
                u37.overrideBypass(e3, M12, N6);
            }
            e3.emit("style");
        }
    }
    return o51.progress = f21, f21;
}
function ka(e3, t17) {
    return null != e3 && null != t17 && (!(!y1(e3) || !y1(t17)) || !(!e3 || !t17));
}
function Ca(e3, t17, n31, r46) {
    var i61 = t17._private;
    i61.started = !0, i61.startTime = n31 - i61.progress * i61.duration;
}
function Sa(e3, t17) {
    var n31 = t17._private.aniEles, r46 = [];
    function i61(t18, n32) {
        var i62 = t18._private, a60 = i62.animation.current, o51 = i62.animation.queue, s38 = !1;
        if (0 === a60.length) {
            var l49 = o51.shift();
            l49 && a60.push(l49);
        }
        for(var u37 = function(e4) {
            for(var t19 = e4.length - 1; t19 >= 0; t19--){
                (0, e4[t19])();
            }
            e4.splice(0, e4.length);
        }, c36 = a60.length - 1; c36 >= 0; c36--){
            var d36 = a60[c36], h28 = d36._private;
            h28.stopped ? (a60.splice(c36, 1), h28.hooked = !1, h28.playing = !1, h28.started = !1, u37(h28.frames)) : (h28.playing || h28.applying) && (h28.playing && h28.applying && (h28.applying = !1), h28.started || Ca(0, d36, e3), Ea(t18, d36, e3, n32), h28.applying && (h28.applying = !1), u37(h28.frames), null != h28.step && h28.step(e3), d36.completed() && (a60.splice(c36, 1), h28.hooked = !1, h28.playing = !1, h28.started = !1, u37(h28.completes)), s38 = !0);
        }
        return n32 || 0 !== a60.length || 0 !== o51.length || r46.push(t18), s38;
    }
    for(var a60 = !1, o51 = 0; o51 < n31.length; o51++){
        var s38 = i61(n31[o51]);
        a60 = a60 || s38;
    }
    var l50 = i61(t17, !0);
    (a60 || l50) && (n31.length > 0 ? t17.notify("draw", n31) : t17.notify("draw")), n31.unmerge(r46), t17.emit("step");
}
var Pa = {
    animate: er.animate(),
    animation: er.animation(),
    animated: er.animated(),
    clearQueue: er.clearQueue(),
    delay: er.delay(),
    delayAnimation: er.delayAnimation(),
    stop: er.stop(),
    addToAnimationPool: function(e3) {
        this.styleEnabled() && this._private.aniEles.merge(e3);
    },
    stopAnimationLoop: function() {
        this._private.animationsRunning = !1;
    },
    startAnimationLoop: function() {
        var e3 = this;
        if (e3._private.animationsRunning = !0, e3.styleEnabled()) {
            var t17 = e3.renderer();
            t17 && t17.beforeRender ? t17.beforeRender(function(t18, n31) {
                Sa(n31, e3);
            }, t17.beforeRenderPriorities.animations) : (function t18() {
                e3._private.animationsRunning && re(function(n31) {
                    Sa(n31, e3), t18();
                });
            })();
        }
    }
}, Da = {
    qualifierCompare: function(e3, t18) {
        return null == e3 || null == t18 ? null == e3 && null == t18 : e3.sameText(t18);
    },
    eventMatches: function(e3, t18, n31) {
        var r46 = t18.qualifier;
        return null == r46 || e3 !== n31.target && x(n31.target) && r46.matches(n31.target);
    },
    addEventFields: function(e3, t18) {
        t18.cy = e3, t18.target = e3;
    },
    callbackContext: function(e3, t18, n31) {
        return null != t18.qualifier ? n31.target : e3;
    }
}, Ta = function(e3) {
    return p(e3) ? new Or(e3) : e3;
}, Ma = {
    createEmitter: function() {
        var e3 = this._private;
        return e3.emitter || (e3.emitter = new Ni(Da, this)), this;
    },
    emitter: function() {
        return this._private.emitter;
    },
    on: function(e3, t18, n31) {
        return this.emitter().on(e3, Ta(t18), n31), this;
    },
    removeListener: function(e3, t18, n31) {
        return this.emitter().removeListener(e3, Ta(t18), n31), this;
    },
    removeAllListeners: function() {
        return this.emitter().removeAllListeners(), this;
    },
    one: function(e3, t18, n31) {
        return this.emitter().one(e3, Ta(t18), n31), this;
    },
    once: function(e3, t18, n31) {
        return this.emitter().one(e3, Ta(t18), n31), this;
    },
    emit: function(e3, t18) {
        return this.emitter().emit(e3, t18), this;
    },
    emitAndNotify: function(e3, t18) {
        return this.emit(e3), this.notify(e3, t18), this;
    }
};
er.eventAliasesOn(Ma);
var Ba = {
    png: function(e3) {
        return e3 = e3 || {
        }, this._private.renderer.png(e3);
    },
    jpg: function(e3) {
        var t18 = this._private.renderer;
        return (e3 = e3 || {
        }).bg = e3.bg || "#fff", t18.jpg(e3);
    }
};
Ba.jpeg = Ba.jpg;
var _a = {
    layout: function(e3) {
        if (null != e3) {
            if (null != e3.name) {
                var t18 = e3.name, n31 = this.extension("layout", t18);
                if (null != n31) {
                    var r46;
                    r46 = p(e3.eles) ? this.$(e3.eles) : null != e3.eles ? e3.eles : this.$();
                    var i61 = new n31(I10({
                    }, e3, {
                        cy: this,
                        eles: r46
                    }));
                    return i61;
                }
                Ee("No such layout `" + t18 + "` found.  Did you forget to import it and `cytoscape.use()` it?");
            } else Ee("A `name` must be specified to make a layout");
        } else Ee("Layout options must be specified to make a layout");
    }
};
_a.createLayout = _a.makeLayout = _a.layout;
var Na = {
    notify: function(e3, t19) {
        var n32 = this._private;
        if (this.batching()) {
            n32.batchNotifications = n32.batchNotifications || {
            };
            var r47 = n32.batchNotifications[e3] = n32.batchNotifications[e3] || this.collection();
            null != t19 && r47.merge(t19);
        } else if (n32.notificationsEnabled) {
            var i62 = this.renderer();
            !this.destroyed() && i62 && i62.notify(e3, t19);
        }
    },
    notifications: function(e3) {
        var t19 = this._private;
        return (void 0) === e3 ? t19.notificationsEnabled : (t19.notificationsEnabled = !!e3, this);
    },
    noNotifications: function(e3) {
        this.notifications(!1), e3(), this.notifications(!0);
    },
    batching: function() {
        return this._private.batchCount > 0;
    },
    startBatch: function() {
        var e3 = this._private;
        return null == e3.batchCount && (e3.batchCount = 0), 0 === e3.batchCount && (e3.batchStyleEles = this.collection(), e3.batchNotifications = {
        }), e3.batchCount++, this;
    },
    endBatch: function() {
        var e3 = this._private;
        if (0 === e3.batchCount) return this;
        if (e3.batchCount--, 0 === e3.batchCount) {
            e3.batchStyleEles.updateStyle();
            var t19 = this.renderer();
            Object.keys(e3.batchNotifications).forEach(function(n32) {
                var r48 = e3.batchNotifications[n32];
                r48.empty() ? t19.notify(n32) : t19.notify(n32, r48);
            });
        }
        return this;
    },
    batch: function(e3) {
        return this.startBatch(), e3(), this.endBatch(), this;
    },
    batchData: function(e3) {
        var t20 = this;
        return this.batch(function() {
            for(var n32 = Object.keys(e3), r48 = 0; r48 < n32.length; r48++){
                var i63 = n32[r48], a60 = e3[i63];
                t20.getElementById(i63).data(a60);
            }
        });
    }
}, Ia = Me({
    hideEdgesOnViewport: !1,
    textureOnViewport: !1,
    motionBlur: !1,
    motionBlurOpacity: 0.05,
    pixelRatio: void 0,
    desktopTapThreshold: 4,
    touchTapThreshold: 8,
    wheelSensitivity: 1,
    debug: !1,
    showFps: !1
}), za = {
    renderTo: function(e3, t20, n32, r48) {
        return this._private.renderer.renderTo(e3, t20, n32, r48), this;
    },
    renderer: function() {
        return this._private.renderer;
    },
    forceRender: function() {
        return this.notify("draw"), this;
    },
    resize: function() {
        return this.invalidateSize(), this.emitAndNotify("resize"), this;
    },
    initRenderer: function(e3) {
        var t20 = this.extension("renderer", e3.name);
        if (null != t20) {
            (void 0) !== e3.wheelSensitivity && Ce("You have set a custom wheel sensitivity.  This will make your app zoom unnaturally when using mainstream mice.  You should change this value from the default only if you can guarantee that all your users will use the same hardware and OS configuration as your current machine.");
            var n32 = Ia(e3);
            n32.cy = this, this._private.renderer = new t20(n32), this.notify("init");
        } else Ee("Can not initialise: No such renderer `".concat(e3.name, "` found. Did you forget to import it and `cytoscape.use()` it?"));
    },
    destroyRenderer: function() {
        this.notify("destroy");
        var e3 = this.container();
        if (e3) for(e3._cyreg = null; e3.childNodes.length > 0;)e3.removeChild(e3.childNodes[0]);
        this._private.renderer = null, this.mutableElements().forEach(function(e4) {
            var t20 = e4._private;
            t20.rscratch = {
            }, t20.rstyle = {
            }, t20.animation.current = [], t20.animation.queue = [];
        });
    },
    onRender: function(e3) {
        return this.on("render", e3);
    },
    offRender: function(e3) {
        return this.off("render", e3);
    }
};
za.invalidateDimensions = za.resize;
var La = {
    collection: function(e3, t20) {
        return p(e3) ? this.$(e3) : b1(e3) ? e3.collection() : g25(e3) ? new pa(this, e3, t20) : new pa(this);
    },
    nodes: function(e3) {
        var t20 = this.$(function(e4) {
            return e4.isNode();
        });
        return e3 ? t20.filter(e3) : t20;
    },
    edges: function(e3) {
        var t20 = this.$(function(e4) {
            return e4.isEdge();
        });
        return e3 ? t20.filter(e3) : t20;
    },
    $: function(e3) {
        var t20 = this._private.elements;
        return e3 ? t20.filter(e3) : t20.spawnSelf();
    },
    mutableElements: function() {
        return this._private.elements;
    }
};
La.elements = La.filter = La.$;
var Aa = {
};
Aa.apply = function(e3) {
    for(var t20 = this._private.cy.collection(), n33 = 0; n33 < e3.length; n33++){
        var r48 = e3[n33], i64 = this.getContextMeta(r48);
        if (!i64.empty) {
            var a61 = this.getContextStyle(i64), o51 = this.applyContextStyle(i64, a61, r48);
            r48._private.appliedInitStyle ? this.updateTransitions(r48, o51.diffProps) : r48._private.appliedInitStyle = !0, this.updateStyleHints(r48) && t20.push(r48);
        }
    }
    return t20;
}, Aa.getPropertiesDiff = function(e3, t20) {
    var n33 = this._private.propDiffs = this._private.propDiffs || {
    }, r49 = e3 + "-" + t20, i65 = n33[r49];
    if (i65) return i65;
    for(var a62 = [], o53 = {
    }, s39 = 0; s39 < this.length; s39++){
        var l50 = this[s39], u37 = "t" === e3[s39], c36 = "t" === t20[s39], d37 = u37 !== c36, h29 = l50.mappedProperties.length > 0;
        if (d37 || c36 && h29) {
            var p15 = void 0;
            d37 && h29 || d37 ? p15 = l50.properties : h29 && (p15 = l50.mappedProperties);
            for(var f21 = 0; f21 < p15.length; f21++){
                for(var g20 = p15[f21], v18 = g20.name, y19 = !1, m14 = s39 + 1; m14 < this.length; m14++){
                    var b14 = this[m14];
                    if ("t" === t20[m14] && (y19 = null != b14.properties[g20.name])) break;
                }
                o53[v18] || y19 || (o53[v18] = !0, a62.push(v18));
            }
        }
    }
    return n33[r49] = a62, a62;
}, Aa.getContextMeta = function(e3) {
    for(var t20, n33 = "", r49 = e3._private.styleCxtKey || "", i65 = 0; i65 < this.length; i65++){
        var a62 = this[i65];
        n33 += a62.selector && a62.selector.matches(e3) ? "t" : "f";
    }
    return t20 = this.getPropertiesDiff(r49, n33), e3._private.styleCxtKey = n33, {
        key: n33,
        diffPropNames: t20,
        empty: 0 === t20.length
    };
}, Aa.getContextStyle = function(e3) {
    var t20 = e3.key, n33 = this._private.contextStyles = this._private.contextStyles || {
    };
    if (n33[t20]) return n33[t20];
    for(var r49 = {
        _private: {
            key: t20
        }
    }, i65 = 0; i65 < this.length; i65++){
        var a63 = this[i65];
        if ("t" === t20[i65]) for(var o53 = 0; o53 < a63.properties.length; o53++){
            var s39 = a63.properties[o53];
            r49[s39.name] = s39;
        }
    }
    return n33[t20] = r49, r49;
}, Aa.applyContextStyle = function(e3, t20, n33) {
    for(var r49 = e3.diffPropNames, i65 = {
    }, a64 = this.types, o54 = 0; o54 < r49.length; o54++){
        var s40 = r49[o54], l51 = t20[s40], u38 = n33.pstyle(s40);
        if (!l51) {
            if (!u38) continue;
            l51 = u38.bypass ? {
                name: s40,
                deleteBypassed: !0
            } : {
                name: s40,
                delete: !0
            };
        }
        if (u38 !== l51) {
            if (l51.mapped === a64.fn && null != u38 && null != u38.mapping && u38.mapping.value === l51.value) {
                var c37 = u38.mapping;
                if ((c37.fnValue = l51.value(n33)) === c37.prevFnValue) continue;
            }
            var d38 = i65[s40] = {
                prev: u38
            };
            this.applyParsedProperty(n33, l51), d38.next = n33.pstyle(s40), d38.next && d38.next.bypass && (d38.next = d38.next.bypassed);
        }
    }
    return {
        diffProps: i65
    };
}, Aa.updateStyleHints = function(e3) {
    var t20 = e3._private, n33 = this, r49 = n33.propertyGroupNames, i65 = n33.propertyGroupKeys, a64 = function(e4, t21, r50) {
        return n33.getPropertiesHash(e4, t21, r50);
    }, o54 = t20.styleKey;
    if (e3.removed()) return !1;
    var s41 = "nodes" === t20.group, l52 = e3._private.style;
    r49 = Object.keys(l52);
    for(var u39 = 0; u39 < i65.length; u39++){
        var c38 = i65[u39];
        t20.styleKeys[c38] = [
            9261,
            5381
        ];
    }
    for(var d39, h30 = function(e4, n34) {
        return t20.styleKeys[n34][0] = se(e4, t20.styleKeys[n34][0]);
    }, p16 = function(e4, n34) {
        return t20.styleKeys[n34][1] = le(e4, t20.styleKeys[n34][1]);
    }, f22 = function(e4, t21) {
        h30(e4, t21), p16(e4, t21);
    }, g21 = function(e4, t21) {
        for(var n34 = 0; n34 < e4.length; n34++){
            var r50 = e4.charCodeAt(n34);
            h30(r50, t21), p16(r50, t21);
        }
    }, v19 = 0; v19 < r49.length; v19++){
        var y20 = r49[v19], m15 = l52[y20];
        if (null != m15) {
            var b15 = this.properties[y20], x13 = b15.type, w15 = b15.groupKey, E16 = void 0;
            null != b15.hashOverride ? E16 = b15.hashOverride(e3, m15) : null != m15.pfValue && (E16 = m15.pfValue);
            var k15 = null == b15.enums ? m15.value : null, C11 = null != E16, S11 = C11 || null != k15, P13 = m15.units;
            if (x13.number && S11 && !x13.multiple) f22(-128 < (d39 = C11 ? E16 : k15) && d39 < 128 && Math.floor(d39) !== d39 ? 2000000000 - (1024 * d39 | 0) : d39, w15), C11 || null == P13 || g21(P13, w15);
            else g21(m15.strValue, w15);
        }
    }
    for(var D12, T13, M13 = [
        9261,
        5381
    ], B9 = 0; B9 < i65.length; B9++){
        var _10 = i65[B9], N7 = t20.styleKeys[_10];
        M13[0] = se(N7[0], M13[0]), M13[1] = le(N7[1], M13[1]);
    }
    t20.styleKey = (D12 = M13[0], T13 = M13[1], 2097152 * D12 + T13);
    var I8 = t20.styleKeys;
    t20.labelDimsKey = ue(I8.labelDimensions);
    var z7 = a64(e3, [
        "label"
    ], I8.labelDimensions);
    if (t20.labelKey = ue(z7), t20.labelStyleKey = ue(ce(I8.commonLabel, z7)), !s41) {
        var L7 = a64(e3, [
            "source-label"
        ], I8.labelDimensions);
        t20.sourceLabelKey = ue(L7), t20.sourceLabelStyleKey = ue(ce(I8.commonLabel, L7));
        var A7 = a64(e3, [
            "target-label"
        ], I8.labelDimensions);
        t20.targetLabelKey = ue(A7), t20.targetLabelStyleKey = ue(ce(I8.commonLabel, A7));
    }
    if (s41) {
        var O7 = t20.styleKeys, R7 = O7.nodeBody, V6 = O7.nodeBorder, F6 = O7.backgroundImage, q4 = O7.compound, j3 = O7.pie, Y2 = [
            R7,
            V6,
            F6,
            q4,
            j3
        ].filter(function(e4) {
            return null != e4;
        }).reduce(ce, [
            9261,
            5381
        ]);
        t20.nodeKey = ue(Y2), t20.hasPie = null != j3 && 9261 !== j3[0] && 5381 !== j3[1];
    }
    return o54 !== t20.styleKey;
}, Aa.clearStyleHints = function(e3) {
    var t20 = e3._private;
    t20.styleCxtKey = "", t20.styleKeys = {
    }, t20.styleKey = null, t20.labelKey = null, t20.labelStyleKey = null, t20.sourceLabelKey = null, t20.sourceLabelStyleKey = null, t20.targetLabelKey = null, t20.targetLabelStyleKey = null, t20.nodeKey = null, t20.hasPie = null;
}, Aa.applyParsedProperty = function(e3, t20) {
    var n33, r49 = this, i65 = t20, a64 = e3._private.style, o54 = r49.types, s41 = r49.properties[i65.name].type, l52 = i65.bypass, u39 = a64[i65.name], c39 = u39 && u39.bypass, d39 = e3._private, h30 = function(e4) {
        return null == e4 ? null : null != e4.pfValue ? e4.pfValue : e4.value;
    }, p16 = function() {
        var t21 = h30(u39), n34 = h30(i65);
        r49.checkTriggers(e3, i65.name, t21, n34);
    };
    if (i65 && "pie" === i65.name.substr(0, 3) && Ce("The pie style properties are deprecated.  Create charts using background images instead."), "curve-style" === t20.name && e3.isEdge() && ("bezier" !== t20.value && e3.isLoop() || "haystack" === t20.value && (e3.source().isParent() || e3.target().isParent())) && (i65 = t20 = this.parse(t20.name, "bezier", l52)), i65.delete) return a64[i65.name] = void 0, p16(), !0;
    if (i65.deleteBypassed) return u39 ? !!u39.bypass && (u39.bypassed = void 0, p16(), !0) : (p16(), !0);
    if (i65.deleteBypass) return u39 ? !!u39.bypass && (a64[i65.name] = u39.bypassed, p16(), !0) : (p16(), !0);
    var f22 = function() {
        Ce("Do not assign mappings to elements without corresponding data (i.e. ele `" + e3.id() + "` has no mapping for property `" + i65.name + "` with data field `" + i65.field + "`); try a `[" + i65.field + "]` selector to limit scope to elements with `" + i65.field + "` defined");
    };
    switch(i65.mapped){
        case o54.mapData:
            for(var g21, v19 = i65.field.split("."), m16 = d39.data, b16 = 0; b16 < v19.length && m16; b16++){
                m16 = m16[v19[b16]];
            }
            if (null == m16) return f22(), !1;
            if (!y1(m16)) return Ce("Do not use continuous mappers without specifying numeric data (i.e. `" + i65.field + ": " + m16 + "` for `" + e3.id() + "` is non-numeric)"), !1;
            var x14 = i65.fieldMax - i65.fieldMin;
            if ((g21 = 0 === x14 ? 0 : (m16 - i65.fieldMin) / x14) < 0 ? g21 = 0 : g21 > 1 && (g21 = 1), s41.color) {
                var w16 = i65.valueMin[0], E17 = i65.valueMax[0], k16 = i65.valueMin[1], C12 = i65.valueMax[1], S12 = i65.valueMin[2], P14 = i65.valueMax[2], D12 = null == i65.valueMin[3] ? 1 : i65.valueMin[3], T13 = null == i65.valueMax[3] ? 1 : i65.valueMax[3], M13 = [
                    Math.round(w16 + (E17 - w16) * g21),
                    Math.round(k16 + (C12 - k16) * g21),
                    Math.round(S12 + (P14 - S12) * g21),
                    Math.round(D12 + (T13 - D12) * g21)
                ];
                n33 = {
                    bypass: i65.bypass,
                    name: i65.name,
                    value: M13,
                    strValue: "rgb(" + M13[0] + ", " + M13[1] + ", " + M13[2] + ")"
                };
            } else {
                if (!s41.number) return !1;
                var B9 = i65.valueMin + (i65.valueMax - i65.valueMin) * g21;
                n33 = this.parse(i65.name, B9, i65.bypass, "mapping");
            }
            if (!n33) return f22(), !1;
            n33.mapping = i65, i65 = n33;
            break;
        case o54.data:
            for(var _11 = i65.field.split("."), N8 = d39.data, I8 = 0; I8 < _11.length && N8; I8++){
                N8 = N8[_11[I8]];
            }
            if (null != N8 && (n33 = this.parse(i65.name, N8, i65.bypass, "mapping")), !n33) return f22(), !1;
            n33.mapping = i65, i65 = n33;
            break;
        case o54.fn:
            var z7 = i65.value, L8 = null != i65.fnValue ? i65.fnValue : z7(e3);
            if (i65.prevFnValue = L8, null == L8) return Ce("Custom function mappers may not return null (i.e. `" + i65.name + "` for ele `" + e3.id() + "` is null)"), !1;
            if (!(n33 = this.parse(i65.name, L8, i65.bypass, "mapping"))) return Ce("Custom function mappers may not return invalid values for the property type (i.e. `" + i65.name + "` for ele `" + e3.id() + "` is invalid)"), !1;
            n33.mapping = Se(i65), i65 = n33;
            break;
        case void 0: break;
        default:
            return !1;
    }
    return l52 ? (i65.bypassed = c39 ? u39.bypassed : u39, a64[i65.name] = i65) : c39 ? u39.bypassed = i65 : a64[i65.name] = i65, p16(), !0;
}, Aa.cleanElements = function(e3, t20) {
    for(var n33 = 0; n33 < e3.length; n33++){
        var r49 = e3[n33];
        if (this.clearStyleHints(r49), r49.dirtyCompoundBoundsCache(), r49.dirtyBoundingBoxCache(), t20) for(var i65 = r49._private.style, a64 = Object.keys(i65), o54 = 0; o54 < a64.length; o54++){
            var s41 = a64[o54], l52 = i65[s41];
            null != l52 && (l52.bypass ? l52.bypassed = null : i65[s41] = null);
        }
        else r49._private.style = {
        };
    }
}, Aa.update = function() {
    this._private.cy.mutableElements().updateStyle();
}, Aa.updateTransitions = function(e3, t20) {
    var n33 = this, r51 = e3._private, i66 = e3.pstyle("transition-property").value, a65 = e3.pstyle("transition-duration").pfValue, o55 = e3.pstyle("transition-delay").pfValue;
    if (i66.length > 0 && a65 > 0) {
        for(var s42 = {
        }, l53 = !1, u39 = 0; u39 < i66.length; u39++){
            var c39 = i66[u39], d39 = e3.pstyle(c39), h30 = t20[c39];
            if (h30) {
                var p16 = h30.prev, f22 = null != h30.next ? h30.next : d39, v19 = !1, m16 = void 0;
                p16 && (y1(p16.pfValue) && y1(f22.pfValue) ? (v19 = f22.pfValue - p16.pfValue, m16 = p16.pfValue + 0.000001 * v19) : y1(p16.value) && y1(f22.value) ? (v19 = f22.value - p16.value, m16 = p16.value + 0.000001 * v19) : g25(p16.value) && g25(f22.value) && (v19 = p16.value[0] !== f22.value[0] || p16.value[1] !== f22.value[1] || p16.value[2] !== f22.value[2], m16 = p16.strValue), v19 && (s42[c39] = f22.strValue, this.applyBypass(e3, c39, m16), l53 = !0));
            }
        }
        if (!l53) return;
        r51.transitioning = !0, new $n(function(t21) {
            o55 > 0 ? e3.delayAnimation(o55).play().promise().then(t21) : t21();
        }).then(function() {
            return e3.animation({
                style: s42,
                duration: a65,
                easing: e3.pstyle("transition-timing-function").value,
                queue: !1
            }).play().promise();
        }).then(function() {
            n33.removeBypasses(e3, i66), e3.emitAndNotify("style"), r51.transitioning = !1;
        });
    } else r51.transitioning && (this.removeBypasses(e3, i66), e3.emitAndNotify("style"), r51.transitioning = !1);
}, Aa.checkTrigger = function(e3, t20, n33, r51, i66, a65) {
    var o55 = this.properties[t20], s43 = i66(o55);
    null != s43 && s43(n33, r51) && a65(o55);
}, Aa.checkZOrderTrigger = function(e3, t20, n33, r51) {
    var i66 = this;
    this.checkTrigger(e3, t20, n33, r51, function(e4) {
        return e4.triggersZOrder;
    }, function() {
        i66._private.cy.notify("zorder", e3);
    });
}, Aa.checkBoundsTrigger = function(e3, t20, n33, r51) {
    this.checkTrigger(e3, t20, n33, r51, function(e4) {
        return e4.triggersBounds;
    }, function(i66) {
        e3.dirtyCompoundBoundsCache(), e3.dirtyBoundingBoxCache(), "curve-style" !== t20 || "bezier" !== n33 && "bezier" !== r51 || !i66.triggersBoundsOfParallelBeziers || e3.parallelEdges().forEach(function(e4) {
            e4.isBundledBezier() && e4.dirtyBoundingBoxCache();
        });
    });
}, Aa.checkTriggers = function(e3, t20, n33, r51) {
    e3.dirtyStyleCache(), this.checkZOrderTrigger(e3, t20, n33, r51), this.checkBoundsTrigger(e3, t20, n33, r51);
};
var Oa = {
    applyBypass: function(e3, t20, n33, r51) {
        var i66 = [];
        if ("*" === t20 || "**" === t20) {
            if ((void 0) !== n33) for(var a65 = 0; a65 < this.properties.length; a65++){
                var o55 = this.properties[a65].name, s43 = this.parse(o55, n33, !0);
                s43 && i66.push(s43);
            }
        } else if (p(t20)) {
            var l54 = this.parse(t20, n33, !0);
            l54 && i66.push(l54);
        } else {
            if (!v1(t20)) return !1;
            var u40 = t20;
            r51 = n33;
            for(var c40 = Object.keys(u40), d40 = 0; d40 < c40.length; d40++){
                var h31 = c40[d40], f23 = u40[h31];
                if ((void 0) === f23 && (f23 = u40[T(h31)]), (void 0) !== f23) {
                    var g21 = this.parse(h31, f23, !0);
                    g21 && i66.push(g21);
                }
            }
        }
        if (0 === i66.length) return !1;
        for(var y21 = !1, m17 = 0; m17 < e3.length; m17++){
            for(var b16 = e3[m17], x14 = {
            }, w17 = void 0, E18 = 0; E18 < i66.length; E18++){
                var k17 = i66[E18];
                if (r51) {
                    var C13 = b16.pstyle(k17.name);
                    w17 = x14[k17.name] = {
                        prev: C13
                    };
                }
                y21 = this.applyParsedProperty(b16, Se(k17)) || y21, r51 && (w17.next = b16.pstyle(k17.name));
            }
            y21 && this.updateStyleHints(b16), r51 && this.updateTransitions(b16, x14, !0);
        }
        return y21;
    },
    overrideBypass: function(e3, t20, n33) {
        t20 = D(t20);
        for(var r51 = 0; r51 < e3.length; r51++){
            var i66 = e3[r51], a66 = i66._private.style[t20], o56 = this.properties[t20].type, s44 = o56.color, l55 = o56.mutiple, u41 = a66 ? null != a66.pfValue ? a66.pfValue : a66.value : null;
            a66 && a66.bypass ? (a66.value = n33, null != a66.pfValue && (a66.pfValue = n33), a66.strValue = s44 ? "rgb(" + n33.join(",") + ")" : l55 ? n33.join(" ") : "" + n33, this.updateStyleHints(i66)) : this.applyBypass(i66, t20, n33), this.checkTriggers(i66, t20, u41, n33);
        }
    },
    removeAllBypasses: function(e3, t20) {
        return this.removeBypasses(e3, this.propertyNames, t20);
    },
    removeBypasses: function(e3, t20, n33) {
        for(var r51 = 0; r51 < e3.length; r51++){
            for(var i67 = e3[r51], a67 = {
            }, o57 = 0; o57 < t20.length; o57++){
                var s45 = t20[o57], l56 = this.properties[s45], u42 = i67.pstyle(l56.name);
                if (u42 && u42.bypass) {
                    var c41 = this.parse(s45, "", !0), d41 = a67[l56.name] = {
                        prev: u42
                    };
                    this.applyParsedProperty(i67, c41), d41.next = i67.pstyle(l56.name);
                }
            }
            this.updateStyleHints(i67), n33 && this.updateTransitions(i67, a67, !0);
        }
    }
}, Ra = {
    getEmSizeInPixels: function() {
        var e3 = this.containerCss("font-size");
        return null != e3 ? parseFloat(e3) : 1;
    },
    containerCss: function(e3) {
        var t20 = this._private.cy.container();
        if (o && t20 && o.getComputedStyle) return o.getComputedStyle(t20).getPropertyValue(e3);
    }
}, Va = {
    getRenderedStyle: function(e3, t20) {
        return t20 ? this.getStylePropertyValue(e3, t20, !0) : this.getRawStyle(e3, !0);
    },
    getRawStyle: function(e3, t20) {
        if (e3 = e3[0]) {
            for(var n33 = {
            }, r51 = 0; r51 < this.properties.length; r51++){
                var i68 = this.properties[r51], a68 = this.getStylePropertyValue(e3, i68.name, t20);
                null != a68 && (n33[i68.name] = a68, n33[T(i68.name)] = a68);
            }
            return n33;
        }
    },
    getIndexedStyle: function(e3, t20, n34, r52) {
        var i69 = e3.pstyle(t20)[n34][r52];
        return null != i69 ? i69 : e3.cy().style().getDefaultProperty(t20)[n34][0];
    },
    getStylePropertyValue: function(e3, t20, n34) {
        if (e3 = e3[0]) {
            var r52 = this.properties[t20];
            r52.alias && (r52 = r52.pointsTo);
            var i69 = r52.type, a69 = e3.pstyle(r52.name);
            if (a69) {
                var o58 = a69.value, s46 = a69.units, l57 = a69.strValue;
                if (n34 && i69.number && null != o58 && y1(o58)) {
                    var u43 = e3.cy().zoom(), c42 = function(e4) {
                        return e4 * u43;
                    }, d42 = function(e4, t21) {
                        return c42(e4) + t21;
                    }, h32 = g25(o58);
                    return (h32 ? s46.every(function(e4) {
                        return null != e4;
                    }) : null != s46) ? h32 ? o58.map(function(e4, t21) {
                        return d42(e4, s46[t21]);
                    }).join(" ") : d42(o58, s46) : h32 ? o58.map(function(e4) {
                        return p(e4) ? e4 : "" + c42(e4);
                    }).join(" ") : "" + c42(o58);
                }
                if (null != l57) return l57;
            }
            return null;
        }
    },
    getAnimationStartStyle: function(e3, t20) {
        for(var n34 = {
        }, r53 = 0; r53 < t20.length; r53++){
            var i70 = t20[r53].name, a70 = e3.pstyle(i70);
            (void 0) !== a70 && (a70 = v1(a70) ? this.parse(i70, a70.strValue) : this.parse(i70, a70)), a70 && (n34[i70] = a70);
        }
        return n34;
    },
    getPropsList: function(e3) {
        var t20 = [], n34 = e3, r53 = this.properties;
        if (n34) for(var i71 = Object.keys(n34), a71 = 0; a71 < i71.length; a71++){
            var o59 = i71[a71], s47 = n34[o59], l58 = r53[o59] || r53[D(o59)], u44 = this.parse(l58.name, s47);
            u44 && t20.push(u44);
        }
        return t20;
    },
    getNonDefaultPropertiesHash: function(e3, t20, n34) {
        var r53, i71, a71, o60, s48, l59, u45 = n34.slice();
        for(s48 = 0; s48 < t20.length; s48++)if (r53 = t20[s48], null != (i71 = e3.pstyle(r53, !1))) {
            if (null != i71.pfValue) u45[0] = se(o60, u45[0]), u45[1] = le(o60, u45[1]);
            else for(a71 = i71.strValue, l59 = 0; l59 < a71.length; l59++)o60 = a71.charCodeAt(l59), u45[0] = se(o60, u45[0]), u45[1] = le(o60, u45[1]);
        }
        return u45;
    }
};
Va.getPropertiesHash = Va.getNonDefaultPropertiesHash;
var Fa = {
    appendFromJson: function(e3) {
        for(var t20 = 0; t20 < e3.length; t20++){
            var n34 = e3[t20], r53 = n34.selector, i71 = n34.style || n34.css, a71 = Object.keys(i71);
            this.selector(r53);
            for(var o60 = 0; o60 < a71.length; o60++){
                var s48 = a71[o60], l59 = i71[s48];
                this.css(s48, l59);
            }
        }
        return this;
    },
    fromJson: function(e3) {
        return this.resetToDefault(), this.appendFromJson(e3), this;
    },
    json: function() {
        for(var e3 = [], t20 = this.defaultLength; t20 < this.length; t20++){
            for(var n35 = this[t20], r54 = n35.selector, i72 = n35.properties, a72 = {
            }, o61 = 0; o61 < i72.length; o61++){
                var s49 = i72[o61];
                a72[s49.name] = s49.strValue;
            }
            e3.push({
                selector: r54 ? r54.toString() : "core",
                style: a72
            });
        }
        return e3;
    }
}, qa = {
    appendFromString: function(e3) {
        var t20, n36, r55, i73 = "" + e3;
        function a73() {
            i73 = i73.length > t20.length ? i73.substr(t20.length) : "";
        }
        function o62() {
            n36 = n36.length > r55.length ? n36.substr(r55.length) : "";
        }
        for(i73 = i73.replace(/[/][*](\s|.)+?[*][/]/g, "");;){
            if (i73.match(/^\s*$/)) break;
            var s50 = i73.match(/^\s*((?:.|\s)+?)\s*\{((?:.|\s)+?)\}/);
            if (!s50) {
                Ce("Halting stylesheet parsing: String stylesheet contains more to parse but no selector and block found in: " + i73);
                break;
            }
            t20 = s50[0];
            var l60 = s50[1];
            if ("core" !== l60) {
                if (new Or(l60).invalid) {
                    Ce("Skipping parsing of block: Invalid selector found in string stylesheet: " + l60), a73();
                    continue;
                }
            }
            var u45 = s50[2], c43 = !1;
            n36 = u45;
            for(var d43 = [];;){
                if (n36.match(/^\s*$/)) break;
                var h33 = n36.match(/^\s*(.+?)\s*:\s*(.+?)\s*;/);
                if (!h33) {
                    Ce("Skipping parsing of block: Invalid formatting of style property and value definitions found in:" + u45), c43 = !0;
                    break;
                }
                r55 = h33[0];
                var p17 = h33[1], f24 = h33[2];
                if (this.properties[p17]) this.parse(p17, f24) ? (d43.push({
                    name: p17,
                    val: f24
                }), o62()) : (Ce("Skipping property: Invalid property definition in: " + r55), o62());
                else Ce("Skipping property: Invalid property name in: " + r55), o62();
            }
            if (c43) {
                a73();
                break;
            }
            this.selector(l60);
            for(var g22 = 0; g22 < d43.length; g22++){
                var v20 = d43[g22];
                this.css(v20.name, v20.val);
            }
            a73();
        }
        return this;
    },
    fromString: function(e3) {
        return this.resetToDefault(), this.appendFromString(e3), this;
    }
}, ja = {
};
!function() {
    var e3 = _, t20 = function(e4) {
        return "^" + e4 + "\\s*\\(\\s*([\\w\\.]+)\\s*\\)$";
    }, n36 = function(t21) {
        var n37 = e3 + "|\\w+|rgb[a]?\\((?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%]?)\\s*,\\s*(?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%]?)\\s*,\\s*(?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%]?)(?:\\s*,\\s*(?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))))?\\)|hsl[a]?\\((?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?)))\\s*,\\s*(?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%])\\s*,\\s*(?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))[%])(?:\\s*,\\s*(?:(?:[-+]?(?:(?:\\d+|\\d*\\.\\d+)(?:[Ee][+-]?\\d+)?))))?\\)|\\#[0-9a-fA-F]{3}|\\#[0-9a-fA-F]{6}";
        return "^" + t21 + "\\s*\\(([\\w\\.]+)\\s*\\,\\s*(" + e3 + ")\\s*\\,\\s*(" + e3 + ")\\s*,\\s*(" + n37 + ")\\s*\\,\\s*(" + n37 + ")\\)$";
    }, r55 = [
        "^url\\s*\\(\\s*['\"]?(.+?)['\"]?\\s*\\)$",
        "^(none)$",
        "^(.+)$"
    ];
    ja.types = {
        time: {
            number: !0,
            min: 0,
            units: "s|ms",
            implicitUnits: "ms"
        },
        percent: {
            number: !0,
            min: 0,
            max: 100,
            units: "%",
            implicitUnits: "%"
        },
        percentages: {
            number: !0,
            min: 0,
            max: 100,
            units: "%",
            implicitUnits: "%",
            multiple: !0
        },
        zeroOneNumber: {
            number: !0,
            min: 0,
            max: 1,
            unitless: !0
        },
        zeroOneNumbers: {
            number: !0,
            min: 0,
            max: 1,
            unitless: !0,
            multiple: !0
        },
        nOneOneNumber: {
            number: !0,
            min: -1,
            max: 1,
            unitless: !0
        },
        nonNegativeInt: {
            number: !0,
            min: 0,
            integer: !0,
            unitless: !0
        },
        position: {
            enums: [
                "parent",
                "origin"
            ]
        },
        nodeSize: {
            number: !0,
            min: 0,
            enums: [
                "label"
            ]
        },
        number: {
            number: !0,
            unitless: !0
        },
        numbers: {
            number: !0,
            unitless: !0,
            multiple: !0
        },
        positiveNumber: {
            number: !0,
            unitless: !0,
            min: 0,
            strictMin: !0
        },
        size: {
            number: !0,
            min: 0
        },
        bidirectionalSize: {
            number: !0
        },
        bidirectionalSizeMaybePercent: {
            number: !0,
            allowPercent: !0
        },
        bidirectionalSizes: {
            number: !0,
            multiple: !0
        },
        sizeMaybePercent: {
            number: !0,
            min: 0,
            allowPercent: !0
        },
        axisDirection: {
            enums: [
                "horizontal",
                "leftward",
                "rightward",
                "vertical",
                "upward",
                "downward",
                "auto"
            ]
        },
        paddingRelativeTo: {
            enums: [
                "width",
                "height",
                "average",
                "min",
                "max"
            ]
        },
        bgWH: {
            number: !0,
            min: 0,
            allowPercent: !0,
            enums: [
                "auto"
            ],
            multiple: !0
        },
        bgPos: {
            number: !0,
            allowPercent: !0,
            multiple: !0
        },
        bgRelativeTo: {
            enums: [
                "inner",
                "include-padding"
            ],
            multiple: !0
        },
        bgRepeat: {
            enums: [
                "repeat",
                "repeat-x",
                "repeat-y",
                "no-repeat"
            ],
            multiple: !0
        },
        bgFit: {
            enums: [
                "none",
                "contain",
                "cover"
            ],
            multiple: !0
        },
        bgCrossOrigin: {
            enums: [
                "anonymous",
                "use-credentials"
            ],
            multiple: !0
        },
        bgClip: {
            enums: [
                "none",
                "node"
            ],
            multiple: !0
        },
        bgContainment: {
            enums: [
                "inside",
                "over"
            ],
            multiple: !0
        },
        color: {
            color: !0
        },
        colors: {
            color: !0,
            multiple: !0
        },
        fill: {
            enums: [
                "solid",
                "linear-gradient",
                "radial-gradient"
            ]
        },
        bool: {
            enums: [
                "yes",
                "no"
            ]
        },
        bools: {
            enums: [
                "yes",
                "no"
            ],
            multiple: !0
        },
        lineStyle: {
            enums: [
                "solid",
                "dotted",
                "dashed"
            ]
        },
        lineCap: {
            enums: [
                "butt",
                "round",
                "square"
            ]
        },
        borderStyle: {
            enums: [
                "solid",
                "dotted",
                "dashed",
                "double"
            ]
        },
        curveStyle: {
            enums: [
                "bezier",
                "unbundled-bezier",
                "haystack",
                "segments",
                "straight",
                "taxi"
            ]
        },
        fontFamily: {
            regex: '^([\\w- \\"]+(?:\\s*,\\s*[\\w- \\"]+)*)$'
        },
        fontStyle: {
            enums: [
                "italic",
                "normal",
                "oblique"
            ]
        },
        fontWeight: {
            enums: [
                "normal",
                "bold",
                "bolder",
                "lighter",
                "100",
                "200",
                "300",
                "400",
                "500",
                "600",
                "800",
                "900",
                100,
                200,
                300,
                400,
                500,
                600,
                700,
                800,
                900
            ]
        },
        textDecoration: {
            enums: [
                "none",
                "underline",
                "overline",
                "line-through"
            ]
        },
        textTransform: {
            enums: [
                "none",
                "uppercase",
                "lowercase"
            ]
        },
        textWrap: {
            enums: [
                "none",
                "wrap",
                "ellipsis"
            ]
        },
        textOverflowWrap: {
            enums: [
                "whitespace",
                "anywhere"
            ]
        },
        textBackgroundShape: {
            enums: [
                "rectangle",
                "roundrectangle",
                "round-rectangle"
            ]
        },
        nodeShape: {
            enums: [
                "rectangle",
                "roundrectangle",
                "round-rectangle",
                "cutrectangle",
                "cut-rectangle",
                "bottomroundrectangle",
                "bottom-round-rectangle",
                "barrel",
                "ellipse",
                "triangle",
                "round-triangle",
                "square",
                "pentagon",
                "round-pentagon",
                "hexagon",
                "round-hexagon",
                "concavehexagon",
                "concave-hexagon",
                "heptagon",
                "round-heptagon",
                "octagon",
                "round-octagon",
                "tag",
                "round-tag",
                "star",
                "diamond",
                "round-diamond",
                "vee",
                "rhomboid",
                "polygon"
            ]
        },
        compoundIncludeLabels: {
            enums: [
                "include",
                "exclude"
            ]
        },
        arrowShape: {
            enums: [
                "tee",
                "triangle",
                "triangle-tee",
                "circle-triangle",
                "triangle-cross",
                "triangle-backcurve",
                "vee",
                "square",
                "circle",
                "diamond",
                "chevron",
                "none"
            ]
        },
        arrowFill: {
            enums: [
                "filled",
                "hollow"
            ]
        },
        display: {
            enums: [
                "element",
                "none"
            ]
        },
        visibility: {
            enums: [
                "hidden",
                "visible"
            ]
        },
        zCompoundDepth: {
            enums: [
                "bottom",
                "orphan",
                "auto",
                "top"
            ]
        },
        zIndexCompare: {
            enums: [
                "auto",
                "manual"
            ]
        },
        valign: {
            enums: [
                "top",
                "center",
                "bottom"
            ]
        },
        halign: {
            enums: [
                "left",
                "center",
                "right"
            ]
        },
        justification: {
            enums: [
                "left",
                "center",
                "right",
                "auto"
            ]
        },
        text: {
            string: !0
        },
        data: {
            mapping: !0,
            regex: t20("data")
        },
        layoutData: {
            mapping: !0,
            regex: t20("layoutData")
        },
        scratch: {
            mapping: !0,
            regex: t20("scratch")
        },
        mapData: {
            mapping: !0,
            regex: n36("mapData")
        },
        mapLayoutData: {
            mapping: !0,
            regex: n36("mapLayoutData")
        },
        mapScratch: {
            mapping: !0,
            regex: n36("mapScratch")
        },
        fn: {
            mapping: !0,
            fn: !0
        },
        url: {
            regexes: r55,
            singleRegexMatchValue: !0
        },
        urls: {
            regexes: r55,
            singleRegexMatchValue: !0,
            multiple: !0
        },
        propList: {
            propList: !0
        },
        angle: {
            number: !0,
            units: "deg|rad",
            implicitUnits: "rad"
        },
        textRotation: {
            number: !0,
            units: "deg|rad",
            implicitUnits: "rad",
            enums: [
                "none",
                "autorotate"
            ]
        },
        polygonPointList: {
            number: !0,
            multiple: !0,
            evenMultiple: !0,
            min: -1,
            max: 1,
            unitless: !0
        },
        edgeDistances: {
            enums: [
                "intersection",
                "node-position"
            ]
        },
        edgeEndpoint: {
            number: !0,
            multiple: !0,
            units: "%|px|em|deg|rad",
            implicitUnits: "px",
            enums: [
                "inside-to-node",
                "outside-to-node",
                "outside-to-node-or-label",
                "outside-to-line",
                "outside-to-line-or-label"
            ],
            singleEnum: !0,
            validate: function(e4, t21) {
                switch(e4.length){
                    case 2:
                        return "deg" !== t21[0] && "rad" !== t21[0] && "deg" !== t21[1] && "rad" !== t21[1];
                    case 1:
                        return p(e4[0]) || "deg" === t21[0] || "rad" === t21[0];
                    default:
                        return !1;
                }
            }
        },
        easing: {
            regexes: [
                "^(spring)\\s*\\(\\s*(" + e3 + ")\\s*,\\s*(" + e3 + ")\\s*\\)$",
                "^(cubic-bezier)\\s*\\(\\s*(" + e3 + ")\\s*,\\s*(" + e3 + ")\\s*,\\s*(" + e3 + ")\\s*,\\s*(" + e3 + ")\\s*\\)$"
            ],
            enums: [
                "linear",
                "ease",
                "ease-in",
                "ease-out",
                "ease-in-out",
                "ease-in-sine",
                "ease-out-sine",
                "ease-in-out-sine",
                "ease-in-quad",
                "ease-out-quad",
                "ease-in-out-quad",
                "ease-in-cubic",
                "ease-out-cubic",
                "ease-in-out-cubic",
                "ease-in-quart",
                "ease-out-quart",
                "ease-in-out-quart",
                "ease-in-quint",
                "ease-out-quint",
                "ease-in-out-quint",
                "ease-in-expo",
                "ease-out-expo",
                "ease-in-out-expo",
                "ease-in-circ",
                "ease-out-circ",
                "ease-in-out-circ"
            ]
        },
        gradientDirection: {
            enums: [
                "to-bottom",
                "to-top",
                "to-left",
                "to-right",
                "to-bottom-right",
                "to-bottom-left",
                "to-top-right",
                "to-top-left",
                "to-right-bottom",
                "to-left-bottom",
                "to-right-top",
                "to-left-top"
            ]
        },
        boundsExpansion: {
            number: !0,
            multiple: !0,
            min: 0,
            validate: function(e4) {
                var t21 = e4.length;
                return 1 === t21 || 2 === t21 || 4 === t21;
            }
        }
    };
    var i73 = {
        zeroNonZero: function(e4, t21) {
            return (null == e4 || null == t21) && e4 !== t21 || 0 == e4 && 0 != t21 || 0 != e4 && 0 == t21;
        },
        any: function(e4, t21) {
            return e4 != t21;
        },
        emptyNonEmpty: function(e4, t21) {
            var n37 = C(e4), r56 = C(t21);
            return n37 && !r56 || !n37 && r56;
        }
    }, a73 = ja.types, o62 = [
        {
            name: "label",
            type: a73.text,
            triggersBounds: i73.any,
            triggersZOrder: i73.emptyNonEmpty
        },
        {
            name: "text-rotation",
            type: a73.textRotation,
            triggersBounds: i73.any
        },
        {
            name: "text-margin-x",
            type: a73.bidirectionalSize,
            triggersBounds: i73.any
        },
        {
            name: "text-margin-y",
            type: a73.bidirectionalSize,
            triggersBounds: i73.any
        }
    ], s51 = [
        {
            name: "source-label",
            type: a73.text,
            triggersBounds: i73.any
        },
        {
            name: "source-text-rotation",
            type: a73.textRotation,
            triggersBounds: i73.any
        },
        {
            name: "source-text-margin-x",
            type: a73.bidirectionalSize,
            triggersBounds: i73.any
        },
        {
            name: "source-text-margin-y",
            type: a73.bidirectionalSize,
            triggersBounds: i73.any
        },
        {
            name: "source-text-offset",
            type: a73.size,
            triggersBounds: i73.any
        }
    ], l61 = [
        {
            name: "target-label",
            type: a73.text,
            triggersBounds: i73.any
        },
        {
            name: "target-text-rotation",
            type: a73.textRotation,
            triggersBounds: i73.any
        },
        {
            name: "target-text-margin-x",
            type: a73.bidirectionalSize,
            triggersBounds: i73.any
        },
        {
            name: "target-text-margin-y",
            type: a73.bidirectionalSize,
            triggersBounds: i73.any
        },
        {
            name: "target-text-offset",
            type: a73.size,
            triggersBounds: i73.any
        }
    ], u46 = [
        {
            name: "font-family",
            type: a73.fontFamily,
            triggersBounds: i73.any
        },
        {
            name: "font-style",
            type: a73.fontStyle,
            triggersBounds: i73.any
        },
        {
            name: "font-weight",
            type: a73.fontWeight,
            triggersBounds: i73.any
        },
        {
            name: "font-size",
            type: a73.size,
            triggersBounds: i73.any
        },
        {
            name: "text-transform",
            type: a73.textTransform,
            triggersBounds: i73.any
        },
        {
            name: "text-wrap",
            type: a73.textWrap,
            triggersBounds: i73.any
        },
        {
            name: "text-overflow-wrap",
            type: a73.textOverflowWrap,
            triggersBounds: i73.any
        },
        {
            name: "text-max-width",
            type: a73.size,
            triggersBounds: i73.any
        },
        {
            name: "text-outline-width",
            type: a73.size,
            triggersBounds: i73.any
        },
        {
            name: "line-height",
            type: a73.positiveNumber,
            triggersBounds: i73.any
        }
    ], c44 = [
        {
            name: "text-valign",
            type: a73.valign,
            triggersBounds: i73.any
        },
        {
            name: "text-halign",
            type: a73.halign,
            triggersBounds: i73.any
        },
        {
            name: "color",
            type: a73.color
        },
        {
            name: "text-outline-color",
            type: a73.color
        },
        {
            name: "text-outline-opacity",
            type: a73.zeroOneNumber
        },
        {
            name: "text-background-color",
            type: a73.color
        },
        {
            name: "text-background-opacity",
            type: a73.zeroOneNumber
        },
        {
            name: "text-background-padding",
            type: a73.size,
            triggersBounds: i73.any
        },
        {
            name: "text-border-opacity",
            type: a73.zeroOneNumber
        },
        {
            name: "text-border-color",
            type: a73.color
        },
        {
            name: "text-border-width",
            type: a73.size,
            triggersBounds: i73.any
        },
        {
            name: "text-border-style",
            type: a73.borderStyle,
            triggersBounds: i73.any
        },
        {
            name: "text-background-shape",
            type: a73.textBackgroundShape,
            triggersBounds: i73.any
        },
        {
            name: "text-justification",
            type: a73.justification
        }
    ], d44 = [
        {
            name: "events",
            type: a73.bool
        },
        {
            name: "text-events",
            type: a73.bool
        }
    ], h34 = [
        {
            name: "display",
            type: a73.display,
            triggersZOrder: i73.any,
            triggersBounds: i73.any,
            triggersBoundsOfParallelBeziers: !0
        },
        {
            name: "visibility",
            type: a73.visibility,
            triggersZOrder: i73.any
        },
        {
            name: "opacity",
            type: a73.zeroOneNumber,
            triggersZOrder: i73.zeroNonZero
        },
        {
            name: "text-opacity",
            type: a73.zeroOneNumber
        },
        {
            name: "min-zoomed-font-size",
            type: a73.size
        },
        {
            name: "z-compound-depth",
            type: a73.zCompoundDepth,
            triggersZOrder: i73.any
        },
        {
            name: "z-index-compare",
            type: a73.zIndexCompare,
            triggersZOrder: i73.any
        },
        {
            name: "z-index",
            type: a73.nonNegativeInt,
            triggersZOrder: i73.any
        }
    ], f25 = [
        {
            name: "overlay-padding",
            type: a73.size,
            triggersBounds: i73.any
        },
        {
            name: "overlay-color",
            type: a73.color
        },
        {
            name: "overlay-opacity",
            type: a73.zeroOneNumber,
            triggersBounds: i73.zeroNonZero
        }
    ], g23 = [
        {
            name: "transition-property",
            type: a73.propList
        },
        {
            name: "transition-duration",
            type: a73.time
        },
        {
            name: "transition-delay",
            type: a73.time
        },
        {
            name: "transition-timing-function",
            type: a73.easing
        }
    ], v21 = function(e4, t21) {
        return "label" === t21.value ? -e4.poolIndex() : t21.pfValue;
    }, y21 = [
        {
            name: "height",
            type: a73.nodeSize,
            triggersBounds: i73.any,
            hashOverride: v21
        },
        {
            name: "width",
            type: a73.nodeSize,
            triggersBounds: i73.any,
            hashOverride: v21
        },
        {
            name: "shape",
            type: a73.nodeShape,
            triggersBounds: i73.any
        },
        {
            name: "shape-polygon-points",
            type: a73.polygonPointList,
            triggersBounds: i73.any
        },
        {
            name: "background-color",
            type: a73.color
        },
        {
            name: "background-fill",
            type: a73.fill
        },
        {
            name: "background-opacity",
            type: a73.zeroOneNumber
        },
        {
            name: "background-blacken",
            type: a73.nOneOneNumber
        },
        {
            name: "background-gradient-stop-colors",
            type: a73.colors
        },
        {
            name: "background-gradient-stop-positions",
            type: a73.percentages
        },
        {
            name: "background-gradient-direction",
            type: a73.gradientDirection
        },
        {
            name: "padding",
            type: a73.sizeMaybePercent,
            triggersBounds: i73.any
        },
        {
            name: "padding-relative-to",
            type: a73.paddingRelativeTo,
            triggersBounds: i73.any
        },
        {
            name: "bounds-expansion",
            type: a73.boundsExpansion,
            triggersBounds: i73.any
        }
    ], m17 = [
        {
            name: "border-color",
            type: a73.color
        },
        {
            name: "border-opacity",
            type: a73.zeroOneNumber
        },
        {
            name: "border-width",
            type: a73.size,
            triggersBounds: i73.any
        },
        {
            name: "border-style",
            type: a73.borderStyle
        }
    ], b17 = [
        {
            name: "background-image",
            type: a73.urls
        },
        {
            name: "background-image-crossorigin",
            type: a73.bgCrossOrigin
        },
        {
            name: "background-image-opacity",
            type: a73.zeroOneNumbers
        },
        {
            name: "background-image-containment",
            type: a73.bgContainment
        },
        {
            name: "background-image-smoothing",
            type: a73.bools
        },
        {
            name: "background-position-x",
            type: a73.bgPos
        },
        {
            name: "background-position-y",
            type: a73.bgPos
        },
        {
            name: "background-width-relative-to",
            type: a73.bgRelativeTo
        },
        {
            name: "background-height-relative-to",
            type: a73.bgRelativeTo
        },
        {
            name: "background-repeat",
            type: a73.bgRepeat
        },
        {
            name: "background-fit",
            type: a73.bgFit
        },
        {
            name: "background-clip",
            type: a73.bgClip
        },
        {
            name: "background-width",
            type: a73.bgWH
        },
        {
            name: "background-height",
            type: a73.bgWH
        },
        {
            name: "background-offset-x",
            type: a73.bgPos
        },
        {
            name: "background-offset-y",
            type: a73.bgPos
        }
    ], x15 = [
        {
            name: "position",
            type: a73.position,
            triggersBounds: i73.any
        },
        {
            name: "compound-sizing-wrt-labels",
            type: a73.compoundIncludeLabels,
            triggersBounds: i73.any
        },
        {
            name: "min-width",
            type: a73.size,
            triggersBounds: i73.any
        },
        {
            name: "min-width-bias-left",
            type: a73.sizeMaybePercent,
            triggersBounds: i73.any
        },
        {
            name: "min-width-bias-right",
            type: a73.sizeMaybePercent,
            triggersBounds: i73.any
        },
        {
            name: "min-height",
            type: a73.size,
            triggersBounds: i73.any
        },
        {
            name: "min-height-bias-top",
            type: a73.sizeMaybePercent,
            triggersBounds: i73.any
        },
        {
            name: "min-height-bias-bottom",
            type: a73.sizeMaybePercent,
            triggersBounds: i73.any
        }
    ], w18 = [
        {
            name: "line-style",
            type: a73.lineStyle
        },
        {
            name: "line-color",
            type: a73.color
        },
        {
            name: "line-fill",
            type: a73.fill
        },
        {
            name: "line-cap",
            type: a73.lineCap
        },
        {
            name: "line-opacity",
            type: a73.zeroOneNumber
        },
        {
            name: "line-dash-pattern",
            type: a73.numbers
        },
        {
            name: "line-dash-offset",
            type: a73.number
        },
        {
            name: "line-gradient-stop-colors",
            type: a73.colors
        },
        {
            name: "line-gradient-stop-positions",
            type: a73.percentages
        },
        {
            name: "curve-style",
            type: a73.curveStyle,
            triggersBounds: i73.any,
            triggersBoundsOfParallelBeziers: !0
        },
        {
            name: "haystack-radius",
            type: a73.zeroOneNumber,
            triggersBounds: i73.any
        },
        {
            name: "source-endpoint",
            type: a73.edgeEndpoint,
            triggersBounds: i73.any
        },
        {
            name: "target-endpoint",
            type: a73.edgeEndpoint,
            triggersBounds: i73.any
        },
        {
            name: "control-point-step-size",
            type: a73.size,
            triggersBounds: i73.any
        },
        {
            name: "control-point-distances",
            type: a73.bidirectionalSizes,
            triggersBounds: i73.any
        },
        {
            name: "control-point-weights",
            type: a73.numbers,
            triggersBounds: i73.any
        },
        {
            name: "segment-distances",
            type: a73.bidirectionalSizes,
            triggersBounds: i73.any
        },
        {
            name: "segment-weights",
            type: a73.numbers,
            triggersBounds: i73.any
        },
        {
            name: "taxi-turn",
            type: a73.bidirectionalSizeMaybePercent,
            triggersBounds: i73.any
        },
        {
            name: "taxi-turn-min-distance",
            type: a73.size,
            triggersBounds: i73.any
        },
        {
            name: "taxi-direction",
            type: a73.axisDirection,
            triggersBounds: i73.any
        },
        {
            name: "edge-distances",
            type: a73.edgeDistances,
            triggersBounds: i73.any
        },
        {
            name: "arrow-scale",
            type: a73.positiveNumber,
            triggersBounds: i73.any
        },
        {
            name: "loop-direction",
            type: a73.angle,
            triggersBounds: i73.any
        },
        {
            name: "loop-sweep",
            type: a73.angle,
            triggersBounds: i73.any
        },
        {
            name: "source-distance-from-node",
            type: a73.size,
            triggersBounds: i73.any
        },
        {
            name: "target-distance-from-node",
            type: a73.size,
            triggersBounds: i73.any
        }
    ], E19 = [
        {
            name: "ghost",
            type: a73.bool,
            triggersBounds: i73.any
        },
        {
            name: "ghost-offset-x",
            type: a73.bidirectionalSize,
            triggersBounds: i73.any
        },
        {
            name: "ghost-offset-y",
            type: a73.bidirectionalSize,
            triggersBounds: i73.any
        },
        {
            name: "ghost-opacity",
            type: a73.zeroOneNumber
        }
    ], k18 = [
        {
            name: "selection-box-color",
            type: a73.color
        },
        {
            name: "selection-box-opacity",
            type: a73.zeroOneNumber
        },
        {
            name: "selection-box-border-color",
            type: a73.color
        },
        {
            name: "selection-box-border-width",
            type: a73.size
        },
        {
            name: "active-bg-color",
            type: a73.color
        },
        {
            name: "active-bg-opacity",
            type: a73.zeroOneNumber
        },
        {
            name: "active-bg-size",
            type: a73.size
        },
        {
            name: "outside-texture-bg-color",
            type: a73.color
        },
        {
            name: "outside-texture-bg-opacity",
            type: a73.zeroOneNumber
        }
    ], S13 = [];
    ja.pieBackgroundN = 16, S13.push({
        name: "pie-size",
        type: a73.sizeMaybePercent
    });
    for(var P15 = 1; P15 <= ja.pieBackgroundN; P15++)S13.push({
        name: "pie-" + P15 + "-background-color",
        type: a73.color
    }), S13.push({
        name: "pie-" + P15 + "-background-size",
        type: a73.percent
    }), S13.push({
        name: "pie-" + P15 + "-background-opacity",
        type: a73.zeroOneNumber
    });
    var D13 = [], T14 = ja.arrowPrefixes = [
        "source",
        "mid-source",
        "target",
        "mid-target"
    ];
    [
        {
            name: "arrow-shape",
            type: a73.arrowShape,
            triggersBounds: i73.any
        },
        {
            name: "arrow-color",
            type: a73.color
        },
        {
            name: "arrow-fill",
            type: a73.arrowFill
        }
    ].forEach(function(e4) {
        T14.forEach(function(t21) {
            var n37 = t21 + "-" + e4.name, r56 = e4.type, i74 = e4.triggersBounds;
            D13.push({
                name: n37,
                type: r56,
                triggersBounds: i74
            });
        });
    }, {
    });
    var M14 = ja.properties = [].concat(d44, g23, h34, f25, E19, c44, u46, o62, s51, l61, y21, m17, b17, S13, x15, w18, D13, k18), B10 = ja.propertyGroups = {
        behavior: d44,
        transition: g23,
        visibility: h34,
        overlay: f25,
        ghost: E19,
        commonLabel: c44,
        labelDimensions: u46,
        mainLabel: o62,
        sourceLabel: s51,
        targetLabel: l61,
        nodeBody: y21,
        nodeBorder: m17,
        backgroundImage: b17,
        pie: S13,
        compound: x15,
        edgeLine: w18,
        edgeArrow: D13,
        core: k18
    }, N8 = ja.propertyGroupNames = {
    };
    (ja.propertyGroupKeys = Object.keys(B10)).forEach(function(e4) {
        N8[e4] = B10[e4].map(function(e5) {
            return e5.name;
        }), B10[e4].forEach(function(t21) {
            return t21.groupKey = e4;
        });
    });
    var I8 = ja.aliases = [
        {
            name: "content",
            pointsTo: "label"
        },
        {
            name: "control-point-distance",
            pointsTo: "control-point-distances"
        },
        {
            name: "control-point-weight",
            pointsTo: "control-point-weights"
        },
        {
            name: "edge-text-rotation",
            pointsTo: "text-rotation"
        },
        {
            name: "padding-left",
            pointsTo: "padding"
        },
        {
            name: "padding-right",
            pointsTo: "padding"
        },
        {
            name: "padding-top",
            pointsTo: "padding"
        },
        {
            name: "padding-bottom",
            pointsTo: "padding"
        }
    ];
    ja.propertyNames = M14.map(function(e4) {
        return e4.name;
    });
    for(var z7 = 0; z7 < M14.length; z7++){
        var L8 = M14[z7];
        M14[L8.name] = L8;
    }
    for(var A8 = 0; A8 < I8.length; A8++){
        var O8 = I8[A8], R8 = M14[O8.pointsTo], V7 = {
            name: O8.name,
            alias: !0,
            pointsTo: R8
        };
        M14.push(V7), M14[O8.name] = V7;
    }
}(), ja.getDefaultProperty = function(e3) {
    return this.getDefaultProperties()[e3];
}, ja.getDefaultProperties = function() {
    var e3 = this._private;
    if (null != e3.defaultProperties) return e3.defaultProperties;
    for(var t20 = I10({
        "selection-box-color": "#ddd",
        "selection-box-opacity": 0.65,
        "selection-box-border-color": "#aaa",
        "selection-box-border-width": 1,
        "active-bg-color": "black",
        "active-bg-opacity": 0.15,
        "active-bg-size": 30,
        "outside-texture-bg-color": "#000",
        "outside-texture-bg-opacity": 0.125,
        events: "yes",
        "text-events": "no",
        "text-valign": "top",
        "text-halign": "center",
        "text-justification": "auto",
        "line-height": 1,
        color: "#000",
        "text-outline-color": "#000",
        "text-outline-width": 0,
        "text-outline-opacity": 1,
        "text-opacity": 1,
        "text-decoration": "none",
        "text-transform": "none",
        "text-wrap": "none",
        "text-overflow-wrap": "whitespace",
        "text-max-width": 9999,
        "text-background-color": "#000",
        "text-background-opacity": 0,
        "text-background-shape": "rectangle",
        "text-background-padding": 0,
        "text-border-opacity": 0,
        "text-border-width": 0,
        "text-border-style": "solid",
        "text-border-color": "#000",
        "font-family": "Helvetica Neue, Helvetica, sans-serif",
        "font-style": "normal",
        "font-weight": "normal",
        "font-size": 16,
        "min-zoomed-font-size": 0,
        "text-rotation": "none",
        "source-text-rotation": "none",
        "target-text-rotation": "none",
        visibility: "visible",
        display: "element",
        opacity: 1,
        "z-compound-depth": "auto",
        "z-index-compare": "auto",
        "z-index": 0,
        label: "",
        "text-margin-x": 0,
        "text-margin-y": 0,
        "source-label": "",
        "source-text-offset": 0,
        "source-text-margin-x": 0,
        "source-text-margin-y": 0,
        "target-label": "",
        "target-text-offset": 0,
        "target-text-margin-x": 0,
        "target-text-margin-y": 0,
        "overlay-opacity": 0,
        "overlay-color": "#000",
        "overlay-padding": 10,
        "transition-property": "none",
        "transition-duration": 0,
        "transition-delay": 0,
        "transition-timing-function": "linear",
        "background-blacken": 0,
        "background-color": "#999",
        "background-fill": "solid",
        "background-opacity": 1,
        "background-image": "none",
        "background-image-crossorigin": "anonymous",
        "background-image-opacity": 1,
        "background-image-containment": "inside",
        "background-image-smoothing": "yes",
        "background-position-x": "50%",
        "background-position-y": "50%",
        "background-offset-x": 0,
        "background-offset-y": 0,
        "background-width-relative-to": "include-padding",
        "background-height-relative-to": "include-padding",
        "background-repeat": "no-repeat",
        "background-fit": "none",
        "background-clip": "node",
        "background-width": "auto",
        "background-height": "auto",
        "border-color": "#000",
        "border-opacity": 1,
        "border-width": 0,
        "border-style": "solid",
        height: 30,
        width: 30,
        shape: "ellipse",
        "shape-polygon-points": "-1, -1,   1, -1,   1, 1,   -1, 1",
        "bounds-expansion": 0,
        "background-gradient-direction": "to-bottom",
        "background-gradient-stop-colors": "#999",
        "background-gradient-stop-positions": "0%",
        ghost: "no",
        "ghost-offset-y": 0,
        "ghost-offset-x": 0,
        "ghost-opacity": 0,
        padding: 0,
        "padding-relative-to": "width",
        position: "origin",
        "compound-sizing-wrt-labels": "include",
        "min-width": 0,
        "min-width-bias-left": 0,
        "min-width-bias-right": 0,
        "min-height": 0,
        "min-height-bias-top": 0,
        "min-height-bias-bottom": 0
    }, {
        "pie-size": "100%"
    }, [
        {
            name: "pie-{{i}}-background-color",
            value: "black"
        },
        {
            name: "pie-{{i}}-background-size",
            value: "0%"
        },
        {
            name: "pie-{{i}}-background-opacity",
            value: 1
        }
    ].reduce(function(e4, t21) {
        for(var n36 = 1; n36 <= ja.pieBackgroundN; n36++){
            var r55 = t21.name.replace("{{i}}", n36), i73 = t21.value;
            e4[r55] = i73;
        }
        return e4;
    }, {
    }), {
        "line-style": "solid",
        "line-color": "#999",
        "line-fill": "solid",
        "line-cap": "butt",
        "line-opacity": 1,
        "line-gradient-stop-colors": "#999",
        "line-gradient-stop-positions": "0%",
        "control-point-step-size": 40,
        "control-point-weights": 0.5,
        "segment-weights": 0.5,
        "segment-distances": 20,
        "taxi-turn": "50%",
        "taxi-turn-min-distance": 10,
        "taxi-direction": "auto",
        "edge-distances": "intersection",
        "curve-style": "haystack",
        "haystack-radius": 0,
        "arrow-scale": 1,
        "loop-direction": "-45deg",
        "loop-sweep": "-90deg",
        "source-distance-from-node": 0,
        "target-distance-from-node": 0,
        "source-endpoint": "outside-to-node",
        "target-endpoint": "outside-to-node",
        "line-dash-pattern": [
            6,
            3
        ],
        "line-dash-offset": 0
    }, [
        {
            name: "arrow-shape",
            value: "none"
        },
        {
            name: "arrow-color",
            value: "#999"
        },
        {
            name: "arrow-fill",
            value: "filled"
        }
    ].reduce(function(e4, t21) {
        return ja.arrowPrefixes.forEach(function(n36) {
            var r56 = n36 + "-" + t21.name, i74 = t21.value;
            e4[r56] = i74;
        }), e4;
    }, {
    })), n36 = {
    }, r56 = 0; r56 < this.properties.length; r56++){
        var i74 = this.properties[r56];
        if (!i74.pointsTo) {
            var a73 = i74.name, o62 = t20[a73], s51 = this.parse(a73, o62);
            n36[a73] = s51;
        }
    }
    return e3.defaultProperties = n36, e3.defaultProperties;
}, ja.addDefaultStylesheet = function() {
    this.selector(":parent").css({
        shape: "rectangle",
        padding: 10,
        "background-color": "#eee",
        "border-color": "#ccc",
        "border-width": 1
    }).selector("edge").css({
        width: 3
    }).selector(":loop").css({
        "curve-style": "bezier"
    }).selector("edge:compound").css({
        "curve-style": "bezier",
        "source-endpoint": "outside-to-line",
        "target-endpoint": "outside-to-line"
    }).selector(":selected").css({
        "background-color": "#0169D9",
        "line-color": "#0169D9",
        "source-arrow-color": "#0169D9",
        "target-arrow-color": "#0169D9",
        "mid-source-arrow-color": "#0169D9",
        "mid-target-arrow-color": "#0169D9"
    }).selector(":parent:selected").css({
        "background-color": "#CCE1F9",
        "border-color": "#aec8e5"
    }).selector(":active").css({
        "overlay-color": "black",
        "overlay-padding": 10,
        "overlay-opacity": 0.25
    }), this.defaultLength = this.length;
};
var Ya = {
    parse: function(e3, t20, n36, r56) {
        if (f(t20)) return this.parseImplWarn(e3, t20, n36, r56);
        var i75, a74 = he(e3, "" + t20, n36 ? "t" : "f", "mapping" === r56 || !0 === r56 || !1 === r56 || null == r56 ? "dontcare" : r56), o63 = this.propCache = this.propCache || [];
        return (i75 = o63[a74]) || (i75 = o63[a74] = this.parseImplWarn(e3, t20, n36, r56)), (n36 || "mapping" === r56) && (i75 = Se(i75)) && (i75.value = Se(i75.value)), i75;
    },
    parseImplWarn: function(e3, t20, n36, r56) {
        var i75 = this.parseImpl(e3, t20, n36, r56);
        return i75 || null == t20 || Ce("The style property `".concat(e3, ": ").concat(t20, "` is invalid")), !i75 || "width" !== i75.name && "height" !== i75.name || "label" !== t20 || Ce("The style value of `label` is deprecated for `" + i75.name + "`"), i75;
    }
};
Ya.parseImpl = function(e3, t20, n36, r56) {
    e3 = D(e3);
    var i75 = this.properties[e3], a74 = t20, o63 = this.types;
    if (!i75) return null;
    if ((void 0) === t20) return null;
    i75.alias && (i75 = i75.pointsTo, e3 = i75.name);
    var s52 = p(t20);
    s52 && (t20 = t20.trim());
    var l61, u46, c44 = i75.type;
    if (!c44) return null;
    if (n36 && ("" === t20 || null === t20)) return {
        name: e3,
        value: t20,
        bypass: !0,
        deleteBypass: !0
    };
    if (f(t20)) return {
        name: e3,
        value: t20,
        strValue: "fn",
        mapped: o63.fn,
        bypass: n36
    };
    if (!s52 || r56 || t20.length < 7 || "a" !== t20[1]) ;
    else {
        if (t20.length >= 7 && "d" === t20[0] && (l61 = new RegExp(o63.data.regex).exec(t20))) {
            if (n36) return !1;
            var d44 = o63.data;
            return {
                name: e3,
                value: l61,
                strValue: "" + t20,
                mapped: d44,
                field: l61[1],
                bypass: n36
            };
        }
        if (t20.length >= 10 && "m" === t20[0] && (u46 = new RegExp(o63.mapData.regex).exec(t20))) {
            if (n36) return !1;
            if (c44.multiple) return !1;
            var h34 = o63.mapData;
            if (!c44.color && !c44.number) return !1;
            var v21 = this.parse(e3, u46[4]);
            if (!v21 || v21.mapped) return !1;
            var m17 = this.parse(e3, u46[5]);
            if (!m17 || m17.mapped) return !1;
            if (v21.pfValue === m17.pfValue || v21.strValue === m17.strValue) return Ce("`" + e3 + ": " + t20 + "` is not a valid mapper because the output range is zero; converting to `" + e3 + ": " + v21.strValue + "`"), this.parse(e3, v21.strValue);
            if (c44.color) {
                var b17 = v21.value, x15 = m17.value;
                if (!(b17[0] !== x15[0] || b17[1] !== x15[1] || b17[2] !== x15[2] || b17[3] !== x15[3] && (null != b17[3] && 1 !== b17[3] || null != x15[3] && 1 !== x15[3]))) return !1;
            }
            return {
                name: e3,
                value: u46,
                strValue: "" + t20,
                mapped: h34,
                field: u46[1],
                fieldMin: parseFloat(u46[2]),
                fieldMax: parseFloat(u46[3]),
                valueMin: v21.value,
                valueMax: m17.value,
                bypass: n36
            };
        }
    }
    if (c44.multiple && "multiple" !== r56) {
        var w18;
        if (w18 = s52 ? t20.split(/\s+/) : g25(t20) ? t20 : [
            t20
        ], c44.evenMultiple && w18.length % 2 != 0) return null;
        for(var E19 = [], k18 = [], C14 = [], S13 = "", P15 = !1, T14 = 0; T14 < w18.length; T14++){
            var M14 = this.parse(e3, w18[T14], n36, "multiple");
            P15 = P15 || p(M14.value), E19.push(M14.value), C14.push(null != M14.pfValue ? M14.pfValue : M14.value), k18.push(M14.units), S13 += (T14 > 0 ? " " : "") + M14.strValue;
        }
        return c44.validate && !c44.validate(E19, k18) ? null : c44.singleEnum && P15 ? 1 === E19.length && p(E19[0]) ? {
            name: e3,
            value: E19[0],
            strValue: E19[0],
            bypass: n36
        } : null : {
            name: e3,
            value: E19,
            pfValue: C14,
            strValue: S13,
            bypass: n36,
            units: k18
        };
    }
    var B10, N8, I8 = function() {
        for(var r57 = 0; r57 < c44.enums.length; r57++){
            if (c44.enums[r57] === t20) return {
                name: e3,
                value: t20,
                strValue: "" + t20,
                bypass: n36
            };
        }
        return null;
    };
    if (c44.number) {
        var L9, A8 = "px";
        if (c44.units && (L9 = c44.units), c44.implicitUnits && (A8 = c44.implicitUnits), !c44.unitless) {
            if (s52) {
                var O9 = "px|em" + (c44.allowPercent ? "|\\%" : "");
                L9 && (O9 = L9);
                var R9 = t20.match("^(" + _ + ")(" + O9 + ")?$");
                R9 && (t20 = R9[1], L9 = R9[2] || A8);
            } else L9 && !c44.implicitUnits || (L9 = A8);
        }
        if (t20 = parseFloat(t20), isNaN(t20) && (void 0) === c44.enums) return null;
        if (isNaN(t20) && (void 0) !== c44.enums) return t20 = a74, I8();
        if (c44.integer && (!y1(N8 = t20) || Math.floor(N8) !== N8)) return null;
        if ((void 0) !== c44.min && (t20 < c44.min || c44.strictMin && t20 === c44.min) || (void 0) !== c44.max && (t20 > c44.max || c44.strictMax && t20 === c44.max)) return null;
        var V8 = {
            name: e3,
            value: t20,
            strValue: "" + t20 + (L9 || ""),
            units: L9,
            bypass: n36
        };
        return c44.unitless || "px" !== L9 && "em" !== L9 ? V8.pfValue = t20 : V8.pfValue = "px" !== L9 && L9 ? this.getEmSizeInPixels() * t20 : t20, "ms" !== L9 && "s" !== L9 || (V8.pfValue = "ms" === L9 ? t20 : 1000 * t20), "deg" !== L9 && "rad" !== L9 || (V8.pfValue = "rad" === L9 ? t20 : (B10 = t20, Math.PI * B10 / 180)), "%" === L9 && (V8.pfValue = t20 / 100), V8;
    }
    if (c44.propList) {
        var F7 = [], q5 = "" + t20;
        if ("none" === q5) ;
        else {
            for(var j4 = q5.split(/\s*,\s*|\s+/), Y3 = 0; Y3 < j4.length; Y3++){
                var X1 = j4[Y3].trim();
                this.properties[X1] ? F7.push(X1) : Ce("`" + X1 + "` is not a valid property name");
            }
            if (0 === F7.length) return null;
        }
        return {
            name: e3,
            value: F7,
            strValue: 0 === F7.length ? "none" : F7.join(" "),
            bypass: n36
        };
    }
    if (c44.color) {
        var W1 = z(t20);
        return W1 ? {
            name: e3,
            value: W1,
            pfValue: W1,
            strValue: "rgb(" + W1[0] + "," + W1[1] + "," + W1[2] + ")",
            bypass: n36
        } : null;
    }
    if (c44.regex || c44.regexes) {
        if (c44.enums) {
            var H1 = I8();
            if (H1) return H1;
        }
        for(var K1 = c44.regexes ? c44.regexes : [
            c44.regex
        ], G2 = 0; G2 < K1.length; G2++){
            var Z1 = new RegExp(K1[G2]).exec(t20);
            if (Z1) return {
                name: e3,
                value: c44.singleRegexMatchValue ? Z1[1] : Z1,
                strValue: "" + t20,
                bypass: n36
            };
        }
        return null;
    }
    return c44.string ? {
        name: e3,
        value: "" + t20,
        strValue: "" + t20,
        bypass: n36
    } : c44.enums ? I8() : null;
};
var Xa = function e3(t20) {
    if (!(this instanceof e3)) return new e3(t20);
    E(t20) ? (this._private = {
        cy: t20,
        coreStyle: {
        }
    }, this.length = 0, this.resetToDefault()) : Ee("A style must have a core reference");
}, Wa = Xa.prototype;
Wa.instanceString = function() {
    return "style";
}, Wa.clear = function() {
    for(var e4 = this._private, t20 = e4.cy.elements(), n36 = 0; n36 < this.length; n36++)this[n36] = void 0;
    return this.length = 0, e4.contextStyles = {
    }, e4.propDiffs = {
    }, this.cleanElements(t20, !0), t20.forEach(function(e5) {
        var t21 = e5[0]._private;
        t21.styleDirty = !0, t21.appliedInitStyle = !1;
    }), this;
}, Wa.resetToDefault = function() {
    return this.clear(), this.addDefaultStylesheet(), this;
}, Wa.core = function(e4) {
    return this._private.coreStyle[e4] || this.getDefaultProperty(e4);
}, Wa.selector = function(e4) {
    var t20 = "core" === e4 ? null : new Or(e4), n36 = this.length++;
    return this[n36] = {
        selector: t20,
        properties: [],
        mappedProperties: [],
        index: n36
    }, this;
}, Wa.css = function() {
    var e4 = this, t20 = arguments;
    if (1 === t20.length) for(var n36 = t20[0], r56 = 0; r56 < e4.properties.length; r56++){
        var i75 = e4.properties[r56], a74 = n36[i75.name];
        (void 0) === a74 && (a74 = n36[T(i75.name)]), (void 0) !== a74 && this.cssRule(i75.name, a74);
    }
    else 2 === t20.length && this.cssRule(t20[0], t20[1]);
    return this;
}, Wa.style = Wa.css, Wa.cssRule = function(e4, t20) {
    var n36 = this.parse(e4, t20);
    if (n36) {
        var r56 = this.length - 1;
        this[r56].properties.push(n36), this[r56].properties[n36.name] = n36, n36.name.match(/pie-(\d+)-background-size/) && n36.value && (this._private.hasPie = !0), n36.mapped && this[r56].mappedProperties.push(n36), !this[r56].selector && (this._private.coreStyle[n36.name] = n36);
    }
    return this;
}, Wa.append = function(e4) {
    return k(e4) ? e4.appendToStyle(this) : g25(e4) ? this.appendFromJson(e4) : p(e4) && this.appendFromString(e4), this;
}, Xa.fromJson = function(e4, t20) {
    var n36 = new Xa(e4);
    return n36.fromJson(t20), n36;
}, Xa.fromString = function(e4, t20) {
    return new Xa(e4).fromString(t20);
}, [
    Aa,
    Oa,
    Ra,
    Va,
    Fa,
    qa,
    ja,
    Ya
].forEach(function(e4) {
    I10(Wa, e4);
}), Xa.types = Wa.types, Xa.properties = Wa.properties, Xa.propertyGroups = Wa.propertyGroups, Xa.propertyGroupNames = Wa.propertyGroupNames, Xa.propertyGroupKeys = Wa.propertyGroupKeys;
var Ha = {
    style: function(e4) {
        e4 && this.setStyle(e4).update();
        return this._private.style;
    },
    setStyle: function(e4) {
        var t20 = this._private;
        return k(e4) ? t20.style = e4.generateStyle(this) : g25(e4) ? t20.style = Xa.fromJson(this, e4) : p(e4) ? t20.style = Xa.fromString(this, e4) : t20.style = Xa(this), t20.style;
    },
    updateStyle: function() {
        this.mutableElements().updateStyle();
    }
}, Ka = {
    autolock: function(e4) {
        return (void 0) === e4 ? this._private.autolock : (this._private.autolock = !!e4, this);
    },
    autoungrabify: function(e4) {
        return (void 0) === e4 ? this._private.autoungrabify : (this._private.autoungrabify = !!e4, this);
    },
    autounselectify: function(e4) {
        return (void 0) === e4 ? this._private.autounselectify : (this._private.autounselectify = !!e4, this);
    },
    selectionType: function(e4) {
        var t20 = this._private;
        return null == t20.selectionType && (t20.selectionType = "single"), (void 0) === e4 ? t20.selectionType : ("additive" !== e4 && "single" !== e4 || (t20.selectionType = e4), this);
    },
    panningEnabled: function(e4) {
        return (void 0) === e4 ? this._private.panningEnabled : (this._private.panningEnabled = !!e4, this);
    },
    userPanningEnabled: function(e4) {
        return (void 0) === e4 ? this._private.userPanningEnabled : (this._private.userPanningEnabled = !!e4, this);
    },
    zoomingEnabled: function(e4) {
        return (void 0) === e4 ? this._private.zoomingEnabled : (this._private.zoomingEnabled = !!e4, this);
    },
    userZoomingEnabled: function(e4) {
        return (void 0) === e4 ? this._private.userZoomingEnabled : (this._private.userZoomingEnabled = !!e4, this);
    },
    boxSelectionEnabled: function(e4) {
        return (void 0) === e4 ? this._private.boxSelectionEnabled : (this._private.boxSelectionEnabled = !!e4, this);
    },
    pan: function() {
        var e4, t20, n36, r57, i76, a75 = arguments, o63 = this._private.pan;
        switch(a75.length){
            case 0:
                return o63;
            case 1:
                if (p(a75[0])) return o63[e4 = a75[0]];
                if (v1(a75[0])) {
                    if (!this._private.panningEnabled) return this;
                    r57 = (n36 = a75[0]).x, i76 = n36.y, y1(r57) && (o63.x = r57), y1(i76) && (o63.y = i76), this.emit("pan viewport");
                }
                break;
            case 2:
                if (!this._private.panningEnabled) return this;
                e4 = a75[0], t20 = a75[1], "x" !== e4 && "y" !== e4 || !y1(t20) || (o63[e4] = t20), this.emit("pan viewport");
        }
        return this.notify("viewport"), this;
    },
    panBy: function(e4, t20) {
        var n36, r57, i76, a75, o63, s52 = arguments, l61 = this._private.pan;
        if (!this._private.panningEnabled) return this;
        switch(s52.length){
            case 1:
                v1(e4) && (a75 = (i76 = s52[0]).x, o63 = i76.y, y1(a75) && (l61.x += a75), y1(o63) && (l61.y += o63), this.emit("pan viewport"));
                break;
            case 2:
                r57 = t20, "x" !== (n36 = e4) && "y" !== n36 || !y1(r57) || (l61[n36] += r57), this.emit("pan viewport");
        }
        return this.notify("viewport"), this;
    },
    fit: function(e4, t20) {
        var n36 = this.getFitViewport(e4, t20);
        if (n36) {
            var r57 = this._private;
            r57.zoom = n36.zoom, r57.pan = n36.pan, this.emit("pan zoom viewport"), this.notify("viewport");
        }
        return this;
    },
    getFitViewport: function(e4, t20) {
        if (y1(e4) && (void 0) === t20 && (t20 = e4, e4 = void 0), this._private.panningEnabled && this._private.zoomingEnabled) {
            var n36, r58;
            if (p(e4)) {
                var i76 = e4;
                e4 = this.$(i76);
            } else if (v1(r58 = e4) && y1(r58.x1) && y1(r58.x2) && y1(r58.y1) && y1(r58.y2)) {
                var a75 = e4;
                (n36 = {
                    x1: a75.x1,
                    y1: a75.y1,
                    x2: a75.x2,
                    y2: a75.y2
                }).w = n36.x2 - n36.x1, n36.h = n36.y2 - n36.y1;
            } else b1(e4) || (e4 = this.mutableElements());
            if (!b1(e4) || !e4.empty()) {
                n36 = n36 || e4.boundingBox();
                var o63, s52 = this.width(), l61 = this.height();
                if (t20 = y1(t20) ? t20 : 0, !isNaN(s52) && !isNaN(l61) && s52 > 0 && l61 > 0 && !isNaN(n36.w) && !isNaN(n36.h) && n36.w > 0 && n36.h > 0) return {
                    zoom: o63 = (o63 = (o63 = Math.min((s52 - 2 * t20) / n36.w, (l61 - 2 * t20) / n36.h)) > this._private.maxZoom ? this._private.maxZoom : o63) < this._private.minZoom ? this._private.minZoom : o63,
                    pan: {
                        x: (s52 - o63 * (n36.x1 + n36.x2)) / 2,
                        y: (l61 - o63 * (n36.y1 + n36.y2)) / 2
                    }
                };
            }
        }
    },
    zoomRange: function(e4, t20) {
        var n37 = this._private;
        if (null == t20) {
            var r59 = e4;
            e4 = r59.min, t20 = r59.max;
        }
        return y1(e4) && y1(t20) && e4 <= t20 ? (n37.minZoom = e4, n37.maxZoom = t20) : y1(e4) && (void 0) === t20 && e4 <= n37.maxZoom ? n37.minZoom = e4 : y1(t20) && (void 0) === e4 && t20 >= n37.minZoom && (n37.maxZoom = t20), this;
    },
    minZoom: function(e4) {
        return (void 0) === e4 ? this._private.minZoom : this.zoomRange({
            min: e4
        });
    },
    maxZoom: function(e4) {
        return (void 0) === e4 ? this._private.maxZoom : this.zoomRange({
            max: e4
        });
    },
    getZoomedViewport: function(e4) {
        var t20, n37, r60 = this._private, i77 = r60.pan, a76 = r60.zoom, o64 = !1;
        if (r60.zoomingEnabled || (o64 = !0), y1(e4) ? n37 = e4 : v1(e4) && (n37 = e4.level, null != e4.position ? t20 = et(e4.position, a76, i77) : null != e4.renderedPosition && (t20 = e4.renderedPosition), null == t20 || r60.panningEnabled || (o64 = !0)), n37 = (n37 = n37 > r60.maxZoom ? r60.maxZoom : n37) < r60.minZoom ? r60.minZoom : n37, o64 || !y1(n37) || n37 === a76 || null != t20 && (!y1(t20.x) || !y1(t20.y))) return null;
        if (null != t20) {
            var s53 = i77, l62 = a76, u46 = n37;
            return {
                zoomed: !0,
                panned: !0,
                zoom: u46,
                pan: {
                    x: -u46 / l62 * (t20.x - s53.x) + t20.x,
                    y: -u46 / l62 * (t20.y - s53.y) + t20.y
                }
            };
        }
        return {
            zoomed: !0,
            panned: !1,
            zoom: n37,
            pan: i77
        };
    },
    zoom: function(e4) {
        if ((void 0) === e4) return this._private.zoom;
        var t20 = this.getZoomedViewport(e4), n37 = this._private;
        return null != t20 && t20.zoomed ? (n37.zoom = t20.zoom, t20.panned && (n37.pan.x = t20.pan.x, n37.pan.y = t20.pan.y), this.emit("zoom" + (t20.panned ? " pan" : "") + " viewport"), this.notify("viewport"), this) : this;
    },
    viewport: function(e4) {
        var t20 = this._private, n37 = !0, r60 = !0, i77 = [], a76 = !1, o64 = !1;
        if (!e4) return this;
        if (y1(e4.zoom) || (n37 = !1), v1(e4.pan) || (r60 = !1), !n37 && !r60) return this;
        if (n37) {
            var s54 = e4.zoom;
            s54 < t20.minZoom || s54 > t20.maxZoom || !t20.zoomingEnabled ? a76 = !0 : (t20.zoom = s54, i77.push("zoom"));
        }
        if (r60 && (!a76 || !e4.cancelOnFailedZoom) && t20.panningEnabled) {
            var l63 = e4.pan;
            y1(l63.x) && (t20.pan.x = l63.x, o64 = !1), y1(l63.y) && (t20.pan.y = l63.y, o64 = !1), o64 || i77.push("pan");
        }
        return i77.length > 0 && (i77.push("viewport"), this.emit(i77.join(" ")), this.notify("viewport")), this;
    },
    center: function(e4) {
        var t20 = this.getCenterPan(e4);
        return t20 && (this._private.pan = t20, this.emit("pan viewport"), this.notify("viewport")), this;
    },
    getCenterPan: function(e4, t20) {
        if (this._private.panningEnabled) {
            if (p(e4)) {
                var n37 = e4;
                e4 = this.mutableElements().filter(n37);
            } else b1(e4) || (e4 = this.mutableElements());
            if (0 !== e4.length) {
                var r60 = e4.boundingBox(), i77 = this.width(), a76 = this.height();
                return {
                    x: (i77 - (t20 = (void 0) === t20 ? this._private.zoom : t20) * (r60.x1 + r60.x2)) / 2,
                    y: (a76 - t20 * (r60.y1 + r60.y2)) / 2
                };
            }
        }
    },
    reset: function() {
        return this._private.panningEnabled && this._private.zoomingEnabled ? (this.viewport({
            pan: {
                x: 0,
                y: 0
            },
            zoom: 1
        }), this) : this;
    },
    invalidateSize: function() {
        this._private.sizeCache = null;
    },
    size: function() {
        var e4, t20, n38 = this._private, r61 = n38.container;
        return n38.sizeCache = n38.sizeCache || (r61 ? (e4 = o.getComputedStyle(r61), t20 = function(t21) {
            return parseFloat(e4.getPropertyValue(t21));
        }, {
            width: r61.clientWidth - t20("padding-left") - t20("padding-right"),
            height: r61.clientHeight - t20("padding-top") - t20("padding-bottom")
        }) : {
            width: 1,
            height: 1
        });
    },
    width: function() {
        return this.size().width;
    },
    height: function() {
        return this.size().height;
    },
    extent: function() {
        var e4 = this._private.pan, t20 = this._private.zoom, n38 = this.renderedExtent(), r61 = {
            x1: (n38.x1 - e4.x) / t20,
            x2: (n38.x2 - e4.x) / t20,
            y1: (n38.y1 - e4.y) / t20,
            y2: (n38.y2 - e4.y) / t20
        };
        return r61.w = r61.x2 - r61.x1, r61.h = r61.y2 - r61.y1, r61;
    },
    renderedExtent: function() {
        var e4 = this.width(), t20 = this.height();
        return {
            x1: 0,
            y1: 0,
            x2: e4,
            y2: t20,
            w: e4,
            h: t20
        };
    }
};
Ka.centre = Ka.center, Ka.autolockNodes = Ka.autolock, Ka.autoungrabifyNodes = Ka.autoungrabify;
var Ga = {
    data: er.data({
        field: "data",
        bindingEvent: "data",
        allowBinding: !0,
        allowSetting: !0,
        settingEvent: "data",
        settingTriggersEvent: !0,
        triggerFnName: "trigger",
        allowGetting: !0,
        updateStyle: !0
    }),
    removeData: er.removeData({
        field: "data",
        event: "data",
        triggerFnName: "trigger",
        triggerEvent: !0,
        updateStyle: !0
    }),
    scratch: er.data({
        field: "scratch",
        bindingEvent: "scratch",
        allowBinding: !0,
        allowSetting: !0,
        settingEvent: "scratch",
        settingTriggersEvent: !0,
        triggerFnName: "trigger",
        allowGetting: !0,
        updateStyle: !0
    }),
    removeScratch: er.removeData({
        field: "scratch",
        event: "scratch",
        triggerFnName: "trigger",
        triggerEvent: !0,
        updateStyle: !0
    })
};
Ga.attr = Ga.data, Ga.removeAttr = Ga.removeData;
var Za = function(e4) {
    var t20 = this, n38 = (e4 = I10({
    }, e4)).container;
    n38 && !m24(n38) && m24(n38[0]) && (n38 = n38[0]);
    var r61 = n38 ? n38._cyreg : null;
    (r61 = r61 || {
    }) && r61.cy && (r61.cy.destroy(), r61 = {
    });
    var i78 = r61.readies = r61.readies || [];
    n38 && (n38._cyreg = r61), r61.cy = t20;
    var a77 = (void 0) !== o && (void 0) !== n38 && !e4.headless, s55 = e4;
    s55.layout = I10({
        name: a77 ? "grid" : "null"
    }, s55.layout), s55.renderer = I10({
        name: a77 ? "canvas" : "null"
    }, s55.renderer);
    var l64 = function(e5, t21, n39) {
        return (void 0) !== t21 ? t21 : (void 0) !== n39 ? n39 : e5;
    }, u47 = this._private = {
        container: n38,
        ready: !1,
        options: s55,
        elements: new pa(this),
        listeners: [],
        aniEles: new pa(this),
        data: s55.data || {
        },
        scratch: {
        },
        layout: null,
        renderer: null,
        destroyed: !1,
        notificationsEnabled: !0,
        minZoom: 0.00000000000000000000000000000000000000000000000001,
        maxZoom: 100000000000000000000000000000000000000000000000000,
        zoomingEnabled: l64(!0, s55.zoomingEnabled),
        userZoomingEnabled: l64(!0, s55.userZoomingEnabled),
        panningEnabled: l64(!0, s55.panningEnabled),
        userPanningEnabled: l64(!0, s55.userPanningEnabled),
        boxSelectionEnabled: l64(!0, s55.boxSelectionEnabled),
        autolock: l64(!1, s55.autolock, s55.autolockNodes),
        autoungrabify: l64(!1, s55.autoungrabify, s55.autoungrabifyNodes),
        autounselectify: l64(!1, s55.autounselectify),
        styleEnabled: (void 0) === s55.styleEnabled ? a77 : s55.styleEnabled,
        zoom: y1(s55.zoom) ? s55.zoom : 1,
        pan: {
            x: v1(s55.pan) && y1(s55.pan.x) ? s55.pan.x : 0,
            y: v1(s55.pan) && y1(s55.pan.y) ? s55.pan.y : 0
        },
        animation: {
            current: [],
            queue: []
        },
        hasCompoundNodes: !1
    };
    this.createEmitter(), this.selectionType(s55.selectionType), this.zoomRange({
        min: s55.minZoom,
        max: s55.maxZoom
    });
    u47.styleEnabled && t20.setStyle([]);
    var c44 = I10({
    }, s55, s55.renderer);
    t20.initRenderer(c44);
    !function(e5, t21) {
        if (e5.some(S19)) return $n.all(e5).then(t21);
        t21(e5);
    }([
        s55.style,
        s55.elements
    ], function(e5) {
        var n39 = e5[0], a78 = e5[1];
        u47.styleEnabled && t20.style().append(n39), (function(e6, n40, r62) {
            t20.notifications(!1);
            var i79 = t20.mutableElements();
            i79.length > 0 && i79.remove(), null != e6 && (v1(e6) || g25(e6)) && t20.add(e6), t20.one("layoutready", function(e7) {
                t20.notifications(!0), t20.emit(e7), t20.one("load", n40), t20.emitAndNotify("load");
            }).one("layoutstop", function() {
                t20.one("done", r62), t20.emit("done");
            });
            var a79 = I10({
            }, t20._private.options.layout);
            a79.eles = t20.elements(), t20.layout(a79).run();
        })(a78, function() {
            t20.startAnimationLoop(), u47.ready = !0, f(s55.ready) && t20.on("ready", s55.ready);
            for(var e6 = 0; e6 < i78.length; e6++){
                var n40 = i78[e6];
                t20.on("ready", n40);
            }
            r61 && (r61.readies = []), t20.emit("ready");
        }, s55.done);
    });
}, Ua = Za.prototype;
I10(Ua, {
    instanceString: function() {
        return "core";
    },
    isReady: function() {
        return this._private.ready;
    },
    destroyed: function() {
        return this._private.destroyed;
    },
    ready: function(e4) {
        return this.isReady() ? this.emitter().emit("ready", [], e4) : this.on("ready", e4), this;
    },
    destroy: function() {
        var e4 = this;
        if (!e4.destroyed()) return e4.stopAnimationLoop(), e4.destroyRenderer(), this.emit("destroy"), e4._private.destroyed = !0, e4;
    },
    hasElementWithId: function(e4) {
        return this._private.elements.hasElementWithId(e4);
    },
    getElementById: function(e4) {
        return this._private.elements.getElementById(e4);
    },
    hasCompoundNodes: function() {
        return this._private.hasCompoundNodes;
    },
    headless: function() {
        return this._private.renderer.isHeadless();
    },
    styleEnabled: function() {
        return this._private.styleEnabled;
    },
    addToPool: function(e4) {
        return this._private.elements.merge(e4), this;
    },
    removeFromPool: function(e4) {
        return this._private.elements.unmerge(e4), this;
    },
    container: function() {
        return this._private.container || null;
    },
    mount: function(e4) {
        if (null != e4) {
            var t20 = this, n38 = t20._private, r61 = n38.options;
            return !m24(e4) && m24(e4[0]) && (e4 = e4[0]), t20.stopAnimationLoop(), t20.destroyRenderer(), n38.container = e4, n38.styleEnabled = !0, t20.invalidateSize(), t20.initRenderer(I10({
            }, r61, r61.renderer, {
                name: "null" === r61.renderer.name ? "canvas" : r61.renderer.name
            })), t20.startAnimationLoop(), t20.style(r61.style), t20.emit("mount"), t20;
        }
    },
    unmount: function() {
        var e4 = this;
        return e4.stopAnimationLoop(), e4.destroyRenderer(), e4.initRenderer({
            name: "null"
        }), e4.emit("unmount"), e4;
    },
    options: function() {
        return Se(this._private.options);
    },
    json: function(e4) {
        var t21 = this, n39 = t21._private, r62 = t21.mutableElements();
        if (v1(e4)) {
            if (t21.startBatch(), e4.elements) {
                var i78 = {
                }, a77 = function(e5, n41) {
                    for(var r63 = [], a78 = [], o64 = 0; o64 < e5.length; o64++){
                        var s55 = e5[o64];
                        if (s55.data.id) {
                            var l64 = "" + s55.data.id, u47 = t21.getElementById(l64);
                            i78[l64] = !0, 0 !== u47.length ? a78.push({
                                ele: u47,
                                json: s55
                            }) : n41 ? (s55.group = n41, r63.push(s55)) : r63.push(s55);
                        } else Ce("cy.json() cannot handle elements without an ID attribute");
                    }
                    t21.add(r63);
                    for(var c44 = 0; c44 < a78.length; c44++){
                        var d45 = a78[c44], h35 = d45.ele, p18 = d45.json;
                        h35.json(p18);
                    }
                };
                if (g25(e4.elements)) a77(e4.elements);
                else for(var o64 = [
                    "nodes",
                    "edges"
                ], s56 = 0; s56 < o64.length; s56++){
                    var l65 = o64[s56], u48 = e4.elements[l65];
                    g25(u48) && a77(u48, l65);
                }
                var c44 = t21.collection();
                r62.filter(function(e5) {
                    return !i78[e5.id()];
                }).forEach(function(e5) {
                    e5.isParent() ? c44.merge(e5) : e5.remove();
                }), c44.forEach(function(e5) {
                    return e5.children().move({
                        parent: null
                    });
                }), c44.forEach(function(e5) {
                    return (function(e6) {
                        return t21.getElementById(e6.id());
                    })(e5).remove();
                });
            }
            e4.style && t21.style(e4.style), null != e4.zoom && e4.zoom !== n39.zoom && t21.zoom(e4.zoom), e4.pan && (e4.pan.x === n39.pan.x && e4.pan.y === n39.pan.y || t21.pan(e4.pan)), e4.data && t21.data(e4.data);
            for(var d46 = [
                "minZoom",
                "maxZoom",
                "zoomingEnabled",
                "userZoomingEnabled",
                "panningEnabled",
                "userPanningEnabled",
                "boxSelectionEnabled",
                "autolock",
                "autoungrabify",
                "autounselectify"
            ], h36 = 0; h36 < d46.length; h36++){
                var p19 = d46[h36];
                null != e4[p19] && t21[p19](e4[p19]);
            }
            return t21.endBatch(), this;
        }
        var f25 = {
        };
        !!e4 ? f25.elements = this.elements().map(function(e5) {
            return e5.json();
        }) : (f25.elements = {
        }, r62.forEach(function(e5) {
            var t22 = e5.group();
            f25.elements[t22] || (f25.elements[t22] = []), f25.elements[t22].push(e5.json());
        })), this._private.styleEnabled && (f25.style = t21.style().json()), f25.data = Se(t21.data());
        var y21 = n39.options;
        return f25.zoomingEnabled = n39.zoomingEnabled, f25.userZoomingEnabled = n39.userZoomingEnabled, f25.zoom = n39.zoom, f25.minZoom = n39.minZoom, f25.maxZoom = n39.maxZoom, f25.panningEnabled = n39.panningEnabled, f25.userPanningEnabled = n39.userPanningEnabled, f25.pan = Se(n39.pan), f25.boxSelectionEnabled = n39.boxSelectionEnabled, f25.renderer = Se(y21.renderer), f25.hideEdgesOnViewport = y21.hideEdgesOnViewport, f25.textureOnViewport = y21.textureOnViewport, f25.wheelSensitivity = y21.wheelSensitivity, f25.motionBlur = y21.motionBlur, f25;
    }
}), Ua.$id = Ua.getElementById, [
    ga,
    Pa,
    Ma,
    Ba,
    _a,
    Na,
    za,
    La,
    Ha,
    Ka,
    Ga
].forEach(function(e4) {
    I10(Ua, e4);
});
var $a = {
    fit: !0,
    directed: !1,
    padding: 30,
    circle: !1,
    grid: !1,
    spacingFactor: 1.75,
    boundingBox: void 0,
    avoidOverlap: !0,
    nodeDimensionsIncludeLabels: !1,
    roots: void 0,
    maximal: !1,
    animate: !1,
    animationDuration: 500,
    animationEasing: void 0,
    animateFilter: function(e4, t21) {
        return !0;
    },
    ready: void 0,
    stop: void 0,
    transform: function(e4, t21) {
        return t21;
    }
}, Qa = function(e4) {
    return e4.scratch("breadthfirst");
}, Ja = function(e4, t21) {
    return e4.scratch("breadthfirst", t21);
};
function eo(e4) {
    this.options = I10({
    }, $a, e4);
}
eo.prototype.run = function() {
    var e4, t21 = this.options, n39 = t21, r62 = t21.cy, i79 = n39.eles, a78 = i79.nodes().filter(function(e5) {
        return !e5.isParent();
    }), o65 = i79, s57 = n39.directed, l66 = n39.maximal || n39.maximalAdjustments > 0, u49 = ht(n39.boundingBox ? n39.boundingBox : {
        x1: 0,
        y1: 0,
        w: r62.width(),
        h: r62.height()
    });
    if (b1(n39.roots)) e4 = n39.roots;
    else if (g25(n39.roots)) {
        for(var c45 = [], d47 = 0; d47 < n39.roots.length; d47++){
            var h37 = n39.roots[d47], f25 = r62.getElementById(h37);
            c45.push(f25);
        }
        e4 = r62.collection(c45);
    } else if (p(n39.roots)) e4 = r62.$(n39.roots);
    else if (s57) e4 = a78.roots();
    else {
        var v22 = i79.components();
        e4 = r62.collection();
        for(var y21 = function(t22) {
            var n41 = v22[t22], r63 = n41.maxDegree(!1), i80 = n41.filter(function(e5) {
                return e5.degree(!1) === r63;
            });
            e4 = e4.add(i80);
        }, m18 = 0; m18 < v22.length; m18++)y21(m18);
    }
    var x16 = [], w19 = {
    }, E20 = function(e5, t22) {
        null == x16[t22] && (x16[t22] = []);
        var n41 = x16[t22].length;
        x16[t22].push(e5), Ja(e5, {
            index: n41,
            depth: t22
        });
    };
    o65.bfs({
        roots: e4,
        directed: n39.directed,
        visit: function(e5, t22, n41, r63, i80) {
            var a79 = e5[0], o66 = a79.id();
            E20(a79, i80), w19[o66] = !0;
        }
    });
    for(var k19 = [], C15 = 0; C15 < a78.length; C15++){
        var S14 = a78[C15];
        w19[S14.id()] || k19.push(S14);
    }
    var P16 = function(e5) {
        for(var t22 = x16[e5], n41 = 0; n41 < t22.length; n41++){
            var r63 = t22[n41];
            null != r63 ? Ja(r63, {
                depth: e5,
                index: n41
            }) : (t22.splice(n41, 1), n41--);
        }
    }, D13 = function() {
        for(var e5 = 0; e5 < x16.length; e5++)P16(e5);
    }, T15 = function(e5, t22) {
        for(var n41 = Qa(e5), r64 = e5.incomers().filter(function(e6) {
            return e6.isNode() && i79.has(e6);
        }), a79 = -1, o66 = e5.id(), s58 = 0; s58 < r64.length; s58++){
            var l67 = r64[s58], u50 = Qa(l67);
            a79 = Math.max(a79, u50.depth);
        }
        return n41.depth <= a79 && (t22[o66] ? null : ((function(e6, t23) {
            var n42 = Qa(e6), r65 = n42.depth, i80 = n42.index;
            x16[r65][i80] = null, E20(e6, t23);
        })(e5, a79 + 1), t22[o66] = !0, !0));
    };
    if (s57 && l66) {
        var M15 = [], B10 = {
        }, _11 = function(e5) {
            return M15.push(e5);
        };
        for(a78.forEach(function(e5) {
            return M15.push(e5);
        }); M15.length > 0;){
            var I8 = M15.shift(), z7 = T15(I8, B10);
            if (z7) I8.outgoers().filter(function(e5) {
                return e5.isNode() && i79.has(e5);
            }).forEach(_11);
            else if (null === z7) {
                Ce("Detected double maximal shift for node `" + I8.id() + "`.  Bailing maximal adjustment due to cycle.  Use `options.maximal: true` only on DAGs.");
                break;
            }
        }
    }
    D13();
    var L10 = 0;
    if (n39.avoidOverlap) for(var A9 = 0; A9 < a78.length; A9++){
        var O10 = a78[A9].layoutDimensions(n39), R10 = O10.w, V9 = O10.h;
        L10 = Math.max(L10, R10, V9);
    }
    for(var F8 = {
    }, q6 = function(e5) {
        if (F8[e5.id()]) return F8[e5.id()];
        for(var t22 = Qa(e5).depth, n41 = e5.neighborhood(), r64 = 0, i80 = 0, o66 = 0; o66 < n41.length; o66++){
            var s58 = n41[o66];
            if (!s58.isEdge() && !s58.isParent() && a78.has(s58)) {
                var l68 = Qa(s58);
                if (null != l68) {
                    var u51 = l68.index, c46 = l68.depth;
                    if (null != u51 && null != c46) {
                        var d48 = x16[c46].length;
                        c46 < t22 && (r64 += u51 / d48, i80++);
                    }
                }
            }
        }
        return r64 /= i80 = Math.max(1, i80), 0 === i80 && (r64 = 0), F8[e5.id()] = r64, r64;
    }, j5 = function(e5, t22) {
        var n41 = q6(e5) - q6(t22);
        return 0 === n41 ? N(e5.id(), t22.id()) : n41;
    }, Y4 = 0; Y4 < x16.length; Y4++)x16[Y4].sort(j5), P16(Y4);
    for(var X2 = [], W2 = 0; W2 < k19.length; W2++)X2.push(k19[W2]);
    x16.unshift(X2), D13();
    for(var H2 = 0, K2 = 0; K2 < x16.length; K2++)H2 = Math.max(x16[K2].length, H2);
    var G3 = u49.x1 + u49.w / 2, Z2 = u49.x1 + u49.h / 2, U1 = x16.reduce(function(e5, t22) {
        return Math.max(e5, t22.length);
    }, 0);
    return i79.nodes().layoutPositions(this, n39, function(e5) {
        var t22 = Qa(e5), r64 = t22.depth, i80 = t22.index, a79 = x16[r64].length, o66 = Math.max(u49.w / ((n39.grid ? U1 : a79) + 1), L10), s59 = Math.max(u49.h / (x16.length + 1), L10), l69 = Math.min(u49.w / 2 / x16.length, u49.h / 2 / x16.length);
        if (l69 = Math.max(l69, L10), n39.circle) {
            var c47 = l69 * r64 + l69 - (x16.length > 0 && x16[0].length <= 3 ? l69 / 2 : 0), d49 = 2 * Math.PI / x16[r64].length * i80;
            return 0 === r64 && 1 === x16[0].length && (c47 = 1), {
                x: G3 + c47 * Math.cos(d49),
                y: Z2 + c47 * Math.sin(d49)
            };
        }
        return {
            x: G3 + (i80 + 1 - (a79 + 1) / 2) * o66,
            y: (r64 + 1) * s59
        };
    }), this;
};
var to = {
    fit: !0,
    padding: 30,
    boundingBox: void 0,
    avoidOverlap: !0,
    nodeDimensionsIncludeLabels: !1,
    spacingFactor: void 0,
    radius: void 0,
    startAngle: 1.5 * Math.PI,
    sweep: void 0,
    clockwise: !0,
    sort: void 0,
    animate: !1,
    animationDuration: 500,
    animationEasing: void 0,
    animateFilter: function(e4, t21) {
        return !0;
    },
    ready: void 0,
    stop: void 0,
    transform: function(e4, t21) {
        return t21;
    }
};
function no(e4) {
    this.options = I10({
    }, to, e4);
}
no.prototype.run = function() {
    var e4 = this.options, t21 = e4, n39 = e4.cy, r62 = t21.eles, i79 = (void 0) !== t21.counterclockwise ? !t21.counterclockwise : t21.clockwise, a78 = r62.nodes().not(":parent");
    t21.sort && (a78 = a78.sort(t21.sort));
    for(var o65, s57 = ht(t21.boundingBox ? t21.boundingBox : {
        x1: 0,
        y1: 0,
        w: n39.width(),
        h: n39.height()
    }), l66 = s57.x1 + s57.w / 2, u49 = s57.y1 + s57.h / 2, c48 = ((void 0) === t21.sweep ? 2 * Math.PI - 2 * Math.PI / a78.length : t21.sweep) / Math.max(1, a78.length - 1), d50 = 0, h38 = 0; h38 < a78.length; h38++){
        var p20 = a78[h38].layoutDimensions(t21), f26 = p20.w, g23 = p20.h;
        d50 = Math.max(d50, f26, g23);
    }
    if (o65 = y1(t21.radius) ? t21.radius : a78.length <= 1 ? 0 : Math.min(s57.h, s57.w) / 2 - d50, a78.length > 1 && t21.avoidOverlap) {
        d50 *= 1.75;
        var v23 = Math.cos(c48) - Math.cos(0), m19 = Math.sin(c48) - Math.sin(0), b18 = Math.sqrt(d50 * d50 / (v23 * v23 + m19 * m19));
        o65 = Math.max(b18, o65);
    }
    return r62.nodes().layoutPositions(this, t21, function(e5, n41) {
        var r64 = t21.startAngle + n41 * c48 * (i79 ? 1 : -1), a79 = o65 * Math.cos(r64), s59 = o65 * Math.sin(r64);
        return {
            x: l66 + a79,
            y: u49 + s59
        };
    }), this;
};
var ro, io = {
    fit: !0,
    padding: 30,
    startAngle: 1.5 * Math.PI,
    sweep: void 0,
    clockwise: !0,
    equidistant: !1,
    minNodeSpacing: 10,
    boundingBox: void 0,
    avoidOverlap: !0,
    nodeDimensionsIncludeLabels: !1,
    height: void 0,
    width: void 0,
    spacingFactor: void 0,
    concentric: function(e4) {
        return e4.degree();
    },
    levelWidth: function(e4) {
        return e4.maxDegree() / 4;
    },
    animate: !1,
    animationDuration: 500,
    animationEasing: void 0,
    animateFilter: function(e4, t21) {
        return !0;
    },
    ready: void 0,
    stop: void 0,
    transform: function(e4, t21) {
        return t21;
    }
};
function ao(e4) {
    this.options = I10({
    }, io, e4);
}
ao.prototype.run = function() {
    for(var e4 = this.options, t21 = e4, n39 = (void 0) !== t21.counterclockwise ? !t21.counterclockwise : t21.clockwise, r62 = e4.cy, i79 = t21.eles, a78 = i79.nodes().not(":parent"), o65 = ht(t21.boundingBox ? t21.boundingBox : {
        x1: 0,
        y1: 0,
        w: r62.width(),
        h: r62.height()
    }), s57 = o65.x1 + o65.w / 2, l66 = o65.y1 + o65.h / 2, u49 = [], c48 = 0, d50 = 0; d50 < a78.length; d50++){
        var h38, p21 = a78[d50];
        h38 = t21.concentric(p21), u49.push({
            value: h38,
            node: p21
        }), p21._private.scratch.concentric = h38;
    }
    a78.updateStyle();
    for(var f27 = 0; f27 < a78.length; f27++){
        var g24 = a78[f27].layoutDimensions(t21);
        c48 = Math.max(c48, g24.w, g24.h);
    }
    u49.sort(function(e5, t22) {
        return t22.value - e5.value;
    });
    for(var v24 = t21.levelWidth(a78), y22 = [
        []
    ], m20 = y22[0], b19 = 0; b19 < u49.length; b19++){
        var x16 = u49[b19];
        if (m20.length > 0) Math.abs(m20[0].value - x16.value) >= v24 && (m20 = [], y22.push(m20));
        m20.push(x16);
    }
    var w19 = c48 + t21.minNodeSpacing;
    if (!t21.avoidOverlap) {
        var E20 = y22.length > 0 && y22[0].length > 1, k19 = (Math.min(o65.w, o65.h) / 2 - w19) / (y22.length + E20 ? 1 : 0);
        w19 = Math.min(w19, k19);
    }
    for(var C15 = 0, S15 = 0; S15 < y22.length; S15++){
        var P16 = y22[S15], D13 = (void 0) === t21.sweep ? 2 * Math.PI - 2 * Math.PI / P16.length : t21.sweep, T15 = P16.dTheta = D13 / Math.max(1, P16.length - 1);
        if (P16.length > 1 && t21.avoidOverlap) {
            var M16 = Math.cos(T15) - Math.cos(0), B11 = Math.sin(T15) - Math.sin(0), _12 = Math.sqrt(w19 * w19 / (M16 * M16 + B11 * B11));
            C15 = Math.max(_12, C15);
        }
        P16.r = C15, C15 += w19;
    }
    if (t21.equidistant) {
        for(var N8 = 0, I9 = 0, z8 = 0; z8 < y22.length; z8++){
            var L10 = y22[z8].r - I9;
            N8 = Math.max(N8, L10);
        }
        I9 = 0;
        for(var A9 = 0; A9 < y22.length; A9++){
            var O11 = y22[A9];
            0 === A9 && (I9 = O11.r), O11.r = I9, I9 += N8;
        }
    }
    for(var R11 = {
    }, V10 = 0; V10 < y22.length; V10++)for(var F8 = y22[V10], q6 = F8.dTheta, j5 = F8.r, Y4 = 0; Y4 < F8.length; Y4++){
        var X2 = F8[Y4], W2 = t21.startAngle + (n39 ? 1 : -1) * q6 * Y4, H2 = {
            x: s57 + j5 * Math.cos(W2),
            y: l66 + j5 * Math.sin(W2)
        };
        R11[X2.node.id()] = H2;
    }
    return i79.nodes().layoutPositions(this, t21, function(e5) {
        var t22 = e5.id();
        return R11[t22];
    }), this;
};
var oo = {
    ready: function() {
    },
    stop: function() {
    },
    animate: !0,
    animationEasing: void 0,
    animationDuration: void 0,
    animateFilter: function(e4, t21) {
        return !0;
    },
    animationThreshold: 250,
    refresh: 20,
    fit: !0,
    padding: 30,
    boundingBox: void 0,
    nodeDimensionsIncludeLabels: !1,
    randomize: !1,
    componentSpacing: 40,
    nodeRepulsion: function(e4) {
        return 2048;
    },
    nodeOverlap: 4,
    idealEdgeLength: function(e4) {
        return 32;
    },
    edgeElasticity: function(e4) {
        return 32;
    },
    nestingFactor: 1.2,
    gravity: 1,
    numIter: 1000,
    initialTemp: 1000,
    coolingFactor: 0.99,
    minTemp: 1
};
function so(e4) {
    this.options = I10({
    }, oo, e4), this.options.layout = this;
}
so.prototype.run = function() {
    var e4 = this.options, t21 = e4.cy, n39 = this;
    n39.stopped = !1, !0 !== e4.animate && !1 !== e4.animate || n39.emit({
        type: "layoutstart",
        layout: n39
    }), ro = !0 === e4.debug;
    var r62 = lo(t21, n39, e4);
    ro && (void 0)(r62), e4.randomize && ho(r62);
    var i79 = ie(), a78 = function() {
        fo(r62, t21, e4), !0 === e4.fit && t21.fit(e4.padding);
    }, o65 = function(t22) {
        return !(n39.stopped || t22 >= e4.numIter) && (go(r62, e4), r62.temperature = r62.temperature * e4.coolingFactor, !(r62.temperature < e4.minTemp));
    }, s57 = function() {
        if (!0 === e4.animate || !1 === e4.animate) a78(), n39.one("layoutstop", e4.stop), n39.emit({
            type: "layoutstop",
            layout: n39
        });
        else {
            var t22 = e4.eles.nodes(), i80 = po(r62, e4, t22);
            t22.layoutPositions(n39, e4, i80);
        }
    }, l66 = 0, u49 = !0;
    if (!0 === e4.animate) {
        !function t23() {
            for(var n41 = 0; u49 && n41 < e4.refresh;)u49 = o65(l66), l66++, n41++;
            u49 ? (ie() - i79 >= e4.animationThreshold && a78(), re(t23)) : (Do(r62, e4), s57());
        }();
    } else {
        for(; u49;)u49 = o65(l66), l66++;
        Do(r62, e4), s57();
    }
    return this;
}, so.prototype.stop = function() {
    return this.stopped = !0, this.thread && this.thread.stop(), this.emit("layoutstop"), this;
}, so.prototype.destroy = function() {
    return this.thread && this.thread.stop(), this;
};
var lo = function(e4, t21, n39) {
    for(var r62 = n39.eles.edges(), i79 = n39.eles.nodes(), a78 = {
        isCompound: e4.hasCompoundNodes(),
        layoutNodes: [],
        idToIndex: {
        },
        nodeSize: i79.size(),
        graphSet: [],
        indexToGraph: [],
        layoutEdges: [],
        edgeSize: r62.size(),
        temperature: n39.initialTemp,
        clientWidth: e4.width(),
        clientHeight: e4.width(),
        boundingBox: ht(n39.boundingBox ? n39.boundingBox : {
            x1: 0,
            y1: 0,
            w: e4.width(),
            h: e4.height()
        })
    }, o65 = n39.eles.components(), s57 = {
    }, l66 = 0; l66 < o65.length; l66++)for(var u49 = o65[l66], c48 = 0; c48 < u49.length; c48++){
        s57[u49[c48].id()] = l66;
    }
    for(l66 = 0; l66 < a78.nodeSize; l66++){
        var d50 = (y22 = i79[l66]).layoutDimensions(n39);
        (I11 = {
        }).isLocked = y22.locked(), I11.id = y22.data("id"), I11.parentId = y22.data("parent"), I11.cmptId = s57[y22.id()], I11.children = [], I11.positionX = y22.position("x"), I11.positionY = y22.position("y"), I11.offsetX = 0, I11.offsetY = 0, I11.height = d50.w, I11.width = d50.h, I11.maxX = I11.positionX + I11.width / 2, I11.minX = I11.positionX - I11.width / 2, I11.maxY = I11.positionY + I11.height / 2, I11.minY = I11.positionY - I11.height / 2, I11.padLeft = parseFloat(y22.style("padding")), I11.padRight = parseFloat(y22.style("padding")), I11.padTop = parseFloat(y22.style("padding")), I11.padBottom = parseFloat(y22.style("padding")), I11.nodeRepulsion = f(n39.nodeRepulsion) ? n39.nodeRepulsion(y22) : n39.nodeRepulsion, a78.layoutNodes.push(I11), a78.idToIndex[I11.id] = l66;
    }
    var h39 = [], p22 = 0, g25 = -1, v24 = [];
    for(l66 = 0; l66 < a78.nodeSize; l66++){
        var y22, m20 = (y22 = a78.layoutNodes[l66]).parentId;
        null != m20 ? a78.layoutNodes[a78.idToIndex[m20]].children.push(y22.id) : (h39[++g25] = y22.id, v24.push(y22.id));
    }
    for(a78.graphSet.push(v24); p22 <= g25;){
        var b19 = h39[p22++], x17 = a78.idToIndex[b19], w19 = a78.layoutNodes[x17].children;
        if (w19.length > 0) {
            a78.graphSet.push(w19);
            for(l66 = 0; l66 < w19.length; l66++)h39[++g25] = w19[l66];
        }
    }
    for(l66 = 0; l66 < a78.graphSet.length; l66++){
        var E21 = a78.graphSet[l66];
        for(c48 = 0; c48 < E21.length; c48++){
            var k20 = a78.idToIndex[E21[c48]];
            a78.indexToGraph[k20] = l66;
        }
    }
    for(l66 = 0; l66 < a78.edgeSize; l66++){
        var C15 = r62[l66], S15 = {
        };
        S15.id = C15.data("id"), S15.sourceId = C15.data("source"), S15.targetId = C15.data("target");
        var P17 = f(n39.idealEdgeLength) ? n39.idealEdgeLength(C15) : n39.idealEdgeLength, D14 = f(n39.edgeElasticity) ? n39.edgeElasticity(C15) : n39.edgeElasticity, T16 = a78.idToIndex[S15.sourceId], M17 = a78.idToIndex[S15.targetId];
        if (a78.indexToGraph[T16] != a78.indexToGraph[M17]) {
            for(var B12 = uo(S15.sourceId, S15.targetId, a78), _13 = a78.graphSet[B12], N9 = 0, I11 = a78.layoutNodes[T16]; -1 === _13.indexOf(I11.id);)I11 = a78.layoutNodes[a78.idToIndex[I11.parentId]], N9++;
            for(I11 = a78.layoutNodes[M17]; -1 === _13.indexOf(I11.id);)I11 = a78.layoutNodes[a78.idToIndex[I11.parentId]], N9++;
            P17 *= N9 * n39.nestingFactor;
        }
        S15.idealLength = P17, S15.elasticity = D14, a78.layoutEdges.push(S15);
    }
    return a78;
}, uo = function(e4, t21, n39) {
    var r62 = co(e4, t21, 0, n39);
    return 2 > r62.count ? 0 : r62.graph;
}, co = function e4(t21, n39, r62, i79) {
    var a78 = i79.graphSet[r62];
    if (-1 < a78.indexOf(t21) && -1 < a78.indexOf(n39)) return {
        count: 2,
        graph: r62
    };
    for(var o65 = 0, s57 = 0; s57 < a78.length; s57++){
        var l66 = a78[s57], u49 = i79.idToIndex[l66], c48 = i79.layoutNodes[u49].children;
        if (0 !== c48.length) {
            var d51 = e4(t21, n39, i79.indexToGraph[i79.idToIndex[c48[0]]], i79);
            if (0 !== d51.count) {
                if (1 !== d51.count) return d51;
                if (2 === ++o65) break;
            }
        }
    }
    return {
        count: o65,
        graph: r62
    };
}, ho = function(e5, t21) {
    for(var n39 = e5.clientWidth, r62 = e5.clientHeight, i79 = 0; i79 < e5.nodeSize; i79++){
        var a78 = e5.layoutNodes[i79];
        0 !== a78.children.length || a78.isLocked || (a78.positionX = Math.random() * n39, a78.positionY = Math.random() * r62);
    }
}, po = function(e5, t21, n39) {
    var r62 = e5.boundingBox, i79 = {
        x1: 1 / 0,
        x2: -1 / 0,
        y1: 1 / 0,
        y2: -1 / 0
    };
    return t21.boundingBox && (n39.forEach(function(t23) {
        var n41 = e5.layoutNodes[e5.idToIndex[t23.data("id")]];
        i79.x1 = Math.min(i79.x1, n41.positionX), i79.x2 = Math.max(i79.x2, n41.positionX), i79.y1 = Math.min(i79.y1, n41.positionY), i79.y2 = Math.max(i79.y2, n41.positionY);
    }), i79.w = i79.x2 - i79.x1, i79.h = i79.y2 - i79.y1), function(n41, a79) {
        var o65 = e5.layoutNodes[e5.idToIndex[n41.data("id")]];
        if (t21.boundingBox) {
            var s57 = (o65.positionX - i79.x1) / i79.w, l69 = (o65.positionY - i79.y1) / i79.h;
            return {
                x: r62.x1 + s57 * r62.w,
                y: r62.y1 + l69 * r62.h
            };
        }
        return {
            x: o65.positionX,
            y: o65.positionY
        };
    };
}, fo = function(e5, t21, n39) {
    var r62 = n39.layout, i79 = n39.eles.nodes(), a79 = po(e5, n39, i79);
    i79.positions(a79), !0 !== e5.ready && (e5.ready = !0, r62.one("layoutready", n39.ready), r62.emit({
        type: "layoutready",
        layout: this
    }));
}, go = function(e5, t21, n39) {
    vo(e5, t21), wo(e5), Eo(e5, t21), ko(e5), Co(e5);
}, vo = function(e5, t21) {
    for(var n39 = 0; n39 < e5.graphSet.length; n39++)for(var r62 = e5.graphSet[n39], i79 = r62.length, a79 = 0; a79 < i79; a79++)for(var o65 = e5.layoutNodes[e5.idToIndex[r62[a79]]], s59 = a79 + 1; s59 < i79; s59++){
        var l70 = e5.layoutNodes[e5.idToIndex[r62[s59]]];
        mo(o65, l70, e5, t21);
    }
}, yo = function(e5) {
    return -e5 + 2 * e5 * Math.random();
}, mo = function(e5, t21, n39, r62) {
    if (e5.cmptId === t21.cmptId || n39.isCompound) {
        var i79 = t21.positionX - e5.positionX, a79 = t21.positionY - e5.positionY;
        0 === i79 && 0 === a79 && (i79 = yo(1), a79 = yo(1));
        var o65 = bo(e5, t21, i79, a79);
        if (o65 > 0) var s59 = (u53 = r62.nodeOverlap * o65) * i79 / (g26 = Math.sqrt(i79 * i79 + a79 * a79)), l71 = u53 * a79 / g26;
        else {
            var u53, c49 = xo(e5, i79, a79), d52 = xo(t21, -1 * i79, -1 * a79), h39 = d52.x - c49.x, p22 = d52.y - c49.y, f27 = h39 * h39 + p22 * p22, g26 = Math.sqrt(f27);
            s59 = (u53 = (e5.nodeRepulsion + t21.nodeRepulsion) / f27) * h39 / g26, l71 = u53 * p22 / g26;
        }
        e5.isLocked || (e5.offsetX -= s59, e5.offsetY -= l71), t21.isLocked || (t21.offsetX += s59, t21.offsetY += l71);
    }
}, bo = function(e5, t21, n39, r62) {
    if (n39 > 0) var i81 = e5.maxX - t21.minX;
    else i81 = t21.maxX - e5.minX;
    if (r62 > 0) var a80 = e5.maxY - t21.minY;
    else a80 = t21.maxY - e5.minY;
    return i81 >= 0 && a80 >= 0 ? Math.sqrt(i81 * i81 + a80 * a80) : 0;
}, xo = function(e5, t21, n39) {
    var r62 = e5.positionX, i81 = e5.positionY, a80 = e5.height || 1, o66 = e5.width || 1, s60 = n39 / t21, l72 = a80 / o66, u54 = {
    };
    return 0 === t21 && 0 < n39 || 0 === t21 && 0 > n39 ? (u54.x = r62, u54.y = i81 + a80 / 2, u54) : 0 < t21 && -1 * l72 <= s60 && s60 <= l72 ? (u54.x = r62 + o66 / 2, u54.y = i81 + o66 * n39 / 2 / t21, u54) : 0 > t21 && -1 * l72 <= s60 && s60 <= l72 ? (u54.x = r62 - o66 / 2, u54.y = i81 - o66 * n39 / 2 / t21, u54) : 0 < n39 && (s60 <= -1 * l72 || s60 >= l72) ? (u54.x = r62 + a80 * t21 / 2 / n39, u54.y = i81 + a80 / 2, u54) : 0 > n39 && (s60 <= -1 * l72 || s60 >= l72) ? (u54.x = r62 - a80 * t21 / 2 / n39, u54.y = i81 - a80 / 2, u54) : u54;
}, wo = function(e5, t21) {
    for(var n39 = 0; n39 < e5.edgeSize; n39++){
        var r62 = e5.layoutEdges[n39], i81 = e5.idToIndex[r62.sourceId], a80 = e5.layoutNodes[i81], o66 = e5.idToIndex[r62.targetId], s60 = e5.layoutNodes[o66], l72 = s60.positionX - a80.positionX, u54 = s60.positionY - a80.positionY;
        if (0 !== l72 || 0 !== u54) {
            var c50 = xo(a80, l72, u54), d53 = xo(s60, -1 * l72, -1 * u54), h40 = d53.x - c50.x, p23 = d53.y - c50.y, f28 = Math.sqrt(h40 * h40 + p23 * p23), g27 = Math.pow(r62.idealLength - f28, 2) / r62.elasticity;
            if (0 !== f28) var v24 = g27 * h40 / f28, y23 = g27 * p23 / f28;
            else v24 = 0, y23 = 0;
            a80.isLocked || (a80.offsetX += v24, a80.offsetY += y23), s60.isLocked || (s60.offsetX -= v24, s60.offsetY -= y23);
        }
    }
}, Eo = function(e5, t21) {
    for(var n39 = 0; n39 < e5.graphSet.length; n39++){
        var r64 = e5.graphSet[n39], i82 = r64.length;
        if (0 === n39) var a81 = e5.clientHeight / 2, o67 = e5.clientWidth / 2;
        else {
            var s61 = e5.layoutNodes[e5.idToIndex[r64[0]]], l73 = e5.layoutNodes[e5.idToIndex[s61.parentId]];
            a81 = l73.positionX, o67 = l73.positionY;
        }
        for(var u55 = 0; u55 < i82; u55++){
            var c51 = e5.layoutNodes[e5.idToIndex[r64[u55]]];
            if (!c51.isLocked) {
                var d54 = a81 - c51.positionX, h41 = o67 - c51.positionY, p24 = Math.sqrt(d54 * d54 + h41 * h41);
                if (p24 > 1) {
                    var f29 = t21.gravity * d54 / p24, g28 = t21.gravity * h41 / p24;
                    c51.offsetX += f29, c51.offsetY += g28;
                }
            }
        }
    }
}, ko = function(e5, t21) {
    var n39 = [], r65 = 0, i83 = -1;
    for(n39.push.apply(n39, e5.graphSet[0]), i83 += e5.graphSet[0].length; r65 <= i83;){
        var a82 = n39[r65++], o68 = e5.idToIndex[a82], s62 = e5.layoutNodes[o68], l74 = s62.children;
        if (0 < l74.length && !s62.isLocked) {
            for(var u56 = s62.offsetX, c52 = s62.offsetY, d55 = 0; d55 < l74.length; d55++){
                var h42 = e5.layoutNodes[e5.idToIndex[l74[d55]]];
                h42.offsetX += u56, h42.offsetY += c52, n39[++i83] = l74[d55];
            }
            s62.offsetX = 0, s62.offsetY = 0;
        }
    }
}, Co = function(e5, t21) {
    for(var n39 = 0; n39 < e5.nodeSize; n39++){
        0 < (i83 = e5.layoutNodes[n39]).children.length && (i83.maxX = void 0, i83.minX = void 0, i83.maxY = void 0, i83.minY = void 0);
    }
    for(n39 = 0; n39 < e5.nodeSize; n39++){
        if (!(0 < (i83 = e5.layoutNodes[n39]).children.length || i83.isLocked)) {
            var r65 = So(i83.offsetX, i83.offsetY, e5.temperature);
            i83.positionX += r65.x, i83.positionY += r65.y, i83.offsetX = 0, i83.offsetY = 0, i83.minX = i83.positionX - i83.width, i83.maxX = i83.positionX + i83.width, i83.minY = i83.positionY - i83.height, i83.maxY = i83.positionY + i83.height, Po(i83, e5);
        }
    }
    for(n39 = 0; n39 < e5.nodeSize; n39++){
        var i83;
        0 < (i83 = e5.layoutNodes[n39]).children.length && !i83.isLocked && (i83.positionX = (i83.maxX + i83.minX) / 2, i83.positionY = (i83.maxY + i83.minY) / 2, i83.width = i83.maxX - i83.minX, i83.height = i83.maxY - i83.minY);
    }
}, So = function(e5, t21, n39) {
    var r66 = Math.sqrt(e5 * e5 + t21 * t21);
    if (r66 > n39) var i84 = {
        x: n39 * e5 / r66,
        y: n39 * t21 / r66
    };
    else i84 = {
        x: e5,
        y: t21
    };
    return i84;
}, Po = function e5(t21, n39) {
    var r66 = t21.parentId;
    if (null != r66) {
        var i84 = n39.layoutNodes[n39.idToIndex[r66]], a83 = !1;
        return (null == i84.maxX || t21.maxX + i84.padRight > i84.maxX) && (i84.maxX = t21.maxX + i84.padRight, a83 = !0), (null == i84.minX || t21.minX - i84.padLeft < i84.minX) && (i84.minX = t21.minX - i84.padLeft, a83 = !0), (null == i84.maxY || t21.maxY + i84.padBottom > i84.maxY) && (i84.maxY = t21.maxY + i84.padBottom, a83 = !0), (null == i84.minY || t21.minY - i84.padTop < i84.minY) && (i84.minY = t21.minY - i84.padTop, a83 = !0), a83 ? e5(i84, n39) : void 0;
    }
}, Do = function(e6, t21) {
    for(var n39 = e6.layoutNodes, r66 = [], i85 = 0; i85 < n39.length; i85++){
        var a84 = n39[i85], o69 = a84.cmptId;
        (r66[o69] = r66[o69] || []).push(a84);
    }
    var s63 = 0;
    for(i85 = 0; i85 < r66.length; i85++){
        if (g29 = r66[i85]) {
            g29.x1 = 1 / 0, g29.x2 = -1 / 0, g29.y1 = 1 / 0, g29.y2 = -1 / 0;
            for(var l75 = 0; l75 < g29.length; l75++){
                var u57 = g29[l75];
                g29.x1 = Math.min(g29.x1, u57.positionX - u57.width / 2), g29.x2 = Math.max(g29.x2, u57.positionX + u57.width / 2), g29.y1 = Math.min(g29.y1, u57.positionY - u57.height / 2), g29.y2 = Math.max(g29.y2, u57.positionY + u57.height / 2);
            }
            g29.w = g29.x2 - g29.x1, g29.h = g29.y2 - g29.y1, s63 += g29.w * g29.h;
        }
    }
    r66.sort(function(e7, t23) {
        return t23.w * t23.h - e7.w * e7.h;
    });
    var c53 = 0, d56 = 0, h43 = 0, p25 = 0, f30 = Math.sqrt(s63) * e6.clientWidth / e6.clientHeight;
    for(i85 = 0; i85 < r66.length; i85++){
        var g29;
        if (g29 = r66[i85]) {
            for(l75 = 0; l75 < g29.length; l75++){
                (u57 = g29[l75]).isLocked || (u57.positionX += c53 - g29.x1, u57.positionY += d56 - g29.y1);
            }
            c53 += g29.w + t21.componentSpacing, h43 += g29.w + t21.componentSpacing, p25 = Math.max(p25, g29.h), h43 > f30 && (d56 += p25 + t21.componentSpacing, c53 = 0, h43 = 0, p25 = 0);
        }
    }
}, To = {
    fit: !0,
    padding: 30,
    boundingBox: void 0,
    avoidOverlap: !0,
    avoidOverlapPadding: 10,
    nodeDimensionsIncludeLabels: !1,
    spacingFactor: void 0,
    condense: !1,
    rows: void 0,
    cols: void 0,
    position: function(e6) {
    },
    sort: void 0,
    animate: !1,
    animationDuration: 500,
    animationEasing: void 0,
    animateFilter: function(e6, t21) {
        return !0;
    },
    ready: void 0,
    stop: void 0,
    transform: function(e6, t21) {
        return t21;
    }
};
function Mo(e6) {
    this.options = I10({
    }, To, e6);
}
Mo.prototype.run = function() {
    var e6 = this.options, t21 = e6, n39 = e6.cy, r66 = t21.eles, i85 = r66.nodes().not(":parent");
    t21.sort && (i85 = i85.sort(t21.sort));
    var a85 = ht(t21.boundingBox ? t21.boundingBox : {
        x1: 0,
        y1: 0,
        w: n39.width(),
        h: n39.height()
    });
    if (0 === a85.h || 0 === a85.w) r66.nodes().layoutPositions(this, t21, function(e7) {
        return {
            x: a85.x1,
            y: a85.y1
        };
    });
    else {
        var o70 = i85.size(), s63 = Math.sqrt(o70 * a85.h / a85.w), l76 = Math.round(s63), u58 = Math.round(a85.w / a85.h * s63), c53 = function(e7) {
            if (null == e7) return Math.min(l76, u58);
            Math.min(l76, u58) == l76 ? l76 = e7 : u58 = e7;
        }, d56 = function(e7) {
            if (null == e7) return Math.max(l76, u58);
            Math.max(l76, u58) == l76 ? l76 = e7 : u58 = e7;
        }, h43 = t21.rows, p25 = null != t21.cols ? t21.cols : t21.columns;
        if (null != h43 && null != p25) l76 = h43, u58 = p25;
        else if (null != h43 && null == p25) l76 = h43, u58 = Math.ceil(o70 / l76);
        else if (null == h43 && null != p25) u58 = p25, l76 = Math.ceil(o70 / u58);
        else if (u58 * l76 > o70) {
            var f30 = c53(), g30 = d56();
            (f30 - 1) * g30 >= o70 ? c53(f30 - 1) : (g30 - 1) * f30 >= o70 && d56(g30 - 1);
        } else for(; u58 * l76 < o70;){
            var v25 = c53(), y24 = d56();
            (y24 + 1) * v25 >= o70 ? d56(y24 + 1) : c53(v25 + 1);
        }
        var m21 = a85.w / u58, b20 = a85.h / l76;
        if (t21.condense && (m21 = 0, b20 = 0), t21.avoidOverlap) for(var x18 = 0; x18 < i85.length; x18++){
            var w20 = i85[x18], E22 = w20._private.position;
            null != E22.x && null != E22.y || (E22.x = 0, E22.y = 0);
            var k21 = w20.layoutDimensions(t21), C16 = t21.avoidOverlapPadding, S16 = k21.w + C16, P18 = k21.h + C16;
            m21 = Math.max(m21, S16), b20 = Math.max(b20, P18);
        }
        for(var D15 = {
        }, T17 = function(e7, t23) {
            return !!D15["c-" + e7 + "-" + t23];
        }, M18 = function(e7, t23) {
            D15["c-" + e7 + "-" + t23] = !0;
        }, B13 = 0, _14 = 0, N10 = function() {
            (++_14) >= u58 && (_14 = 0, B13++);
        }, I12 = {
        }, z9 = 0; z9 < i85.length; z9++){
            var L11 = i85[z9], A10 = t21.position(L11);
            if (A10 && ((void 0) !== A10.row || (void 0) !== A10.col)) {
                var O12 = {
                    row: A10.row,
                    col: A10.col
                };
                if ((void 0) === O12.col) for(O12.col = 0; T17(O12.row, O12.col);)O12.col++;
                else if ((void 0) === O12.row) for(O12.row = 0; T17(O12.row, O12.col);)O12.row++;
                I12[L11.id()] = O12, M18(O12.row, O12.col);
            }
        }
        i85.layoutPositions(this, t21, function(e7, t23) {
            var n41, r67;
            if (e7.locked() || e7.isParent()) return !1;
            var i86 = I12[e7.id()];
            if (i86) n41 = i86.col * m21 + m21 / 2 + a85.x1, r67 = i86.row * b20 + b20 / 2 + a85.y1;
            else {
                for(; T17(B13, _14);)N10();
                n41 = _14 * m21 + m21 / 2 + a85.x1, r67 = B13 * b20 + b20 / 2 + a85.y1, M18(B13, _14), N10();
            }
            return {
                x: n41,
                y: r67
            };
        });
    }
    return this;
};
var Bo = {
    ready: function() {
    },
    stop: function() {
    }
};
function _o(e6) {
    this.options = I10({
    }, Bo, e6);
}
_o.prototype.run = function() {
    var e6 = this.options, t21 = e6.eles;
    e6.cy;
    return this.emit("layoutstart"), t21.nodes().positions(function() {
        return {
            x: 0,
            y: 0
        };
    }), this.one("layoutready", e6.ready), this.emit("layoutready"), this.one("layoutstop", e6.stop), this.emit("layoutstop"), this;
}, _o.prototype.stop = function() {
    return this;
};
var No = {
    positions: void 0,
    zoom: void 0,
    pan: void 0,
    fit: !0,
    padding: 30,
    animate: !1,
    animationDuration: 500,
    animationEasing: void 0,
    animateFilter: function(e6, t21) {
        return !0;
    },
    ready: void 0,
    stop: void 0,
    transform: function(e6, t21) {
        return t21;
    }
};
function Io(e6) {
    this.options = I10({
    }, No, e6);
}
Io.prototype.run = function() {
    var e6 = this.options, t21 = e6.eles.nodes(), n39 = f(e6.positions);
    return t21.layoutPositions(this, e6, function(t23, r66) {
        var i85 = function(t24) {
            if (null == e6.positions) return (function(e7) {
                return {
                    x: e7.x,
                    y: e7.y
                };
            })(t24.position());
            if (n39) return e6.positions(t24);
            var r67 = e6.positions[t24._private.data.id];
            return null == r67 ? null : r67;
        }(t23);
        return !t23.locked() && null != i85 && i85;
    }), this;
};
var zo = {
    fit: !0,
    padding: 30,
    boundingBox: void 0,
    animate: !1,
    animationDuration: 500,
    animationEasing: void 0,
    animateFilter: function(e6, t21) {
        return !0;
    },
    ready: void 0,
    stop: void 0,
    transform: function(e6, t21) {
        return t21;
    }
};
function Lo(e6) {
    this.options = I10({
    }, zo, e6);
}
Lo.prototype.run = function() {
    var e6 = this.options, t21 = e6.cy, n39 = e6.eles, r66 = ht(e6.boundingBox ? e6.boundingBox : {
        x1: 0,
        y1: 0,
        w: t21.width(),
        h: t21.height()
    });
    return n39.nodes().layoutPositions(this, e6, function(e7, t23) {
        return {
            x: r66.x1 + Math.round(Math.random() * r66.w),
            y: r66.y1 + Math.round(Math.random() * r66.h)
        };
    }), this;
};
var Ao = [
    {
        name: "breadthfirst",
        impl: eo
    },
    {
        name: "circle",
        impl: no
    },
    {
        name: "concentric",
        impl: ao
    },
    {
        name: "cose",
        impl: so
    },
    {
        name: "grid",
        impl: Mo
    },
    {
        name: "null",
        impl: _o
    },
    {
        name: "preset",
        impl: Io
    },
    {
        name: "random",
        impl: Lo
    }
];
function Oo(e6) {
    this.options = e6, this.notifications = 0;
}
var Ro = function() {
}, Vo = function() {
    throw new Error("A headless instance can not render images");
};
Oo.prototype = {
    recalculateRenderedStyle: Ro,
    notify: function() {
        this.notifications++;
    },
    init: Ro,
    isHeadless: function() {
        return !0;
    },
    png: Vo,
    jpg: Vo
};
var Fo = {
    arrowShapeWidth: 0.3,
    registerArrowShapes: function() {
        var e6 = this.arrowShapes = {
        }, t21 = this, n39 = function(e7, t23, n41, r66, i85, a85, o71) {
            var s64 = i85.x - n41 / 2 - o71, l77 = i85.x + n41 / 2 + o71, u59 = i85.y - n41 / 2 - o71, c54 = i85.y + n41 / 2 + o71;
            return s64 <= e7 && e7 <= l77 && u59 <= t23 && t23 <= c54;
        }, r66 = function(e7, t23, n41, r67, i85) {
            var a85 = e7 * Math.cos(r67) - t23 * Math.sin(r67), o71 = (e7 * Math.sin(r67) + t23 * Math.cos(r67)) * n41;
            return {
                x: a85 * n41 + i85.x,
                y: o71 + i85.y
            };
        }, i85 = function(e7, t23, n41, i86) {
            for(var a85 = [], o71 = 0; o71 < e7.length; o71 += 2){
                var s64 = e7[o71], l77 = e7[o71 + 1];
                a85.push(r66(s64, l77, t23, n41, i86));
            }
            return a85;
        }, a85 = function(e7) {
            for(var t23 = [], n41 = 0; n41 < e7.length; n41++){
                var r67 = e7[n41];
                t23.push(r67.x, r67.y);
            }
            return t23;
        }, o71 = function(e7) {
            return e7.pstyle("width").pfValue * e7.pstyle("arrow-scale").pfValue * 2;
        }, s65 = function(r68, s66) {
            p(s66) && (s66 = e6[s66]), e6[r68] = I10({
                name: r68,
                points: [
                    -0.15,
                    -0.3,
                    0.15,
                    -0.3,
                    0.15,
                    0.3,
                    -0.15,
                    0.3
                ],
                collide: function(e7, t23, n41, r69, o72, s67) {
                    var l78 = a85(i85(this.points, n41 + 2 * s67, r69, o72));
                    return St(e7, t23, l78);
                },
                roughCollide: n39,
                draw: function(e7, n41, r69, a86) {
                    var o72 = i85(this.points, n41, r69, a86);
                    t21.arrowShapeImpl("polygon")(e7, o72);
                },
                spacing: function(e7) {
                    return 0;
                },
                gap: o71
            }, s66);
        };
        s65("none", {
            collide: be,
            roughCollide: be,
            draw: we,
            spacing: xe,
            gap: xe
        }), s65("triangle", {
            points: [
                -0.15,
                -0.3,
                0,
                0,
                0.15,
                -0.3
            ]
        }), s65("arrow", "triangle"), s65("triangle-backcurve", {
            points: e6.triangle.points,
            controlPoint: [
                0,
                -0.15
            ],
            roughCollide: n39,
            draw: function(e7, n41, a86, o72, s66) {
                var l78 = i85(this.points, n41, a86, o72), u59 = this.controlPoint, c54 = r66(u59[0], u59[1], n41, a86, o72);
                t21.arrowShapeImpl(this.name)(e7, l78, c54);
            },
            gap: function(e7) {
                return 0.8 * o71(e7);
            }
        }), s65("triangle-tee", {
            points: [
                0,
                0,
                0.15,
                -0.3,
                -0.15,
                -0.3,
                0,
                0
            ],
            pointsTee: [
                -0.15,
                -0.4,
                -0.15,
                -0.5,
                0.15,
                -0.5,
                0.15,
                -0.4
            ],
            collide: function(e7, t23, n41, r68, o72, s66, l78) {
                var u59 = a85(i85(this.points, n41 + 2 * l78, r68, o72)), c54 = a85(i85(this.pointsTee, n41 + 2 * l78, r68, o72));
                return St(e7, t23, u59) || St(e7, t23, c54);
            },
            draw: function(e7, n41, r68, a86, o72) {
                var s66 = i85(this.points, n41, r68, a86), l78 = i85(this.pointsTee, n41, r68, a86);
                t21.arrowShapeImpl(this.name)(e7, s66, l78);
            }
        }), s65("circle-triangle", {
            radius: 0.15,
            pointsTr: [
                0,
                -0.15,
                0.15,
                -0.45,
                -0.15,
                -0.45,
                0,
                -0.15
            ],
            collide: function(e7, t23, n41, r68, o72, s66, l78) {
                var u59 = o72, c54 = Math.pow(u59.x - e7, 2) + Math.pow(u59.y - t23, 2) <= Math.pow((n41 + 2 * l78) * this.radius, 2), d57 = a85(i85(this.points, n41 + 2 * l78, r68, o72));
                return St(e7, t23, d57) || c54;
            },
            draw: function(e7, n41, r68, a86, o72) {
                var s66 = i85(this.pointsTr, n41, r68, a86);
                t21.arrowShapeImpl(this.name)(e7, s66, a86.x, a86.y, this.radius * n41);
            },
            spacing: function(e7) {
                return t21.getArrowWidth(e7.pstyle("width").pfValue, e7.pstyle("arrow-scale").value) * this.radius;
            }
        }), s65("triangle-cross", {
            points: [
                0,
                0,
                0.15,
                -0.3,
                -0.15,
                -0.3,
                0,
                0
            ],
            baseCrossLinePts: [
                -0.15,
                -0.4,
                -0.15,
                -0.4,
                0.15,
                -0.4,
                0.15,
                -0.4
            ],
            crossLinePts: function(e7, t23) {
                var n41 = this.baseCrossLinePts.slice(), r68 = t23 / e7;
                return n41[3] = n41[3] - r68, n41[5] = n41[5] - r68, n41;
            },
            collide: function(e7, t23, n41, r68, o72, s66, l78) {
                var u59 = a85(i85(this.points, n41 + 2 * l78, r68, o72)), c54 = a85(i85(this.crossLinePts(n41, s66), n41 + 2 * l78, r68, o72));
                return St(e7, t23, u59) || St(e7, t23, c54);
            },
            draw: function(e7, n41, r68, a86, o72) {
                var s66 = i85(this.points, n41, r68, a86), l78 = i85(this.crossLinePts(n41, o72), n41, r68, a86);
                t21.arrowShapeImpl(this.name)(e7, s66, l78);
            }
        }), s65("vee", {
            points: [
                -0.15,
                -0.3,
                0,
                0,
                0.15,
                -0.3,
                0,
                -0.15
            ],
            gap: function(e7) {
                return 0.525 * o71(e7);
            }
        }), s65("circle", {
            radius: 0.15,
            collide: function(e7, t23, n41, r68, i86, a86, o72) {
                var s66 = i86;
                return Math.pow(s66.x - e7, 2) + Math.pow(s66.y - t23, 2) <= Math.pow((n41 + 2 * o72) * this.radius, 2);
            },
            draw: function(e7, n41, r68, i86, a86) {
                t21.arrowShapeImpl(this.name)(e7, i86.x, i86.y, this.radius * n41);
            },
            spacing: function(e7) {
                return t21.getArrowWidth(e7.pstyle("width").pfValue, e7.pstyle("arrow-scale").value) * this.radius;
            }
        }), s65("tee", {
            points: [
                -0.15,
                0,
                -0.15,
                -0.1,
                0.15,
                -0.1,
                0.15,
                0
            ],
            spacing: function(e7) {
                return 1;
            },
            gap: function(e7) {
                return 1;
            }
        }), s65("square", {
            points: [
                -0.15,
                0,
                0.15,
                0,
                0.15,
                -0.3,
                -0.15,
                -0.3
            ]
        }), s65("diamond", {
            points: [
                -0.15,
                -0.15,
                0,
                -0.3,
                0.15,
                -0.15,
                0,
                0
            ],
            gap: function(e7) {
                return e7.pstyle("width").pfValue * e7.pstyle("arrow-scale").value;
            }
        }), s65("chevron", {
            points: [
                0,
                0,
                -0.15,
                -0.15,
                -0.1,
                -0.2,
                0,
                -0.1,
                0.1,
                -0.2,
                0.15,
                -0.15
            ],
            gap: function(e7) {
                return 0.95 * e7.pstyle("width").pfValue * e7.pstyle("arrow-scale").value;
            }
        });
    }
}, qo = {
    projectIntoViewport: function(e6, t21) {
        var n39 = this.cy, r66 = this.findContainerClientCoords(), i85 = r66[0], a85 = r66[1], o71 = r66[4], s65 = n39.pan(), l78 = n39.zoom();
        return [
            ((e6 - i85) / o71 - s65.x) / l78,
            ((t21 - a85) / o71 - s65.y) / l78
        ];
    },
    findContainerClientCoords: function() {
        if (this.containerBB) return this.containerBB;
        var e6 = this.container, t21 = e6.getBoundingClientRect(), n39 = o.getComputedStyle(e6), r66 = function(e7) {
            return parseFloat(n39.getPropertyValue(e7));
        }, i85 = r66("padding-left"), a85 = r66("padding-right"), s65 = r66("padding-top"), l78 = r66("padding-bottom"), u59 = r66("border-left-width"), c54 = r66("border-right-width"), d57 = r66("border-top-width"), h44 = (r66("border-bottom-width"), e6.clientWidth), p26 = e6.clientHeight, f31 = i85 + a85, g31 = s65 + l78, v26 = u59 + c54, y25 = t21.width / (h44 + v26), m22 = h44 - f31, b21 = p26 - g31, x19 = t21.left + i85 + u59, w21 = t21.top + s65 + d57;
        return this.containerBB = [
            x19,
            w21,
            m22,
            b21,
            y25
        ];
    },
    invalidateContainerClientCoordsCache: function() {
        this.containerBB = null;
    },
    findNearestElement: function(e6, t21, n39, r66) {
        return this.findNearestElements(e6, t21, n39, r66)[0];
    },
    findNearestElements: function(e6, t21, n39, r66) {
        var i85, a85, o71 = this, s65 = this, l78 = s65.getCachedZSortedEles(), u59 = [], c54 = s65.cy.zoom(), d57 = s65.cy.hasCompoundNodes(), h44 = (r66 ? 24 : 8) / c54, p26 = (r66 ? 8 : 2) / c54, f31 = (r66 ? 8 : 2) / c54, g31 = 1 / 0;
        function v26(e7, t23) {
            if (e7.isNode()) {
                if (a85) return;
                a85 = e7, u59.push(e7);
            }
            if (e7.isEdge() && (null == t23 || t23 < g31)) {
                if (i85) {
                    if (i85.pstyle("z-compound-depth").value === e7.pstyle("z-compound-depth").value && i85.pstyle("z-compound-depth").value === e7.pstyle("z-compound-depth").value) for(var n41 = 0; n41 < u59.length; n41++)if (u59[n41].isEdge()) {
                        u59[n41] = e7, i85 = e7, g31 = null != t23 ? t23 : g31;
                        break;
                    }
                } else u59.push(e7), i85 = e7, g31 = null != t23 ? t23 : g31;
            }
        }
        function y25(n42) {
            var r68 = n42.outerWidth() + 2 * p26, i86 = n42.outerHeight() + 2 * p26, a86 = r68 / 2, l79 = i86 / 2, u60 = n42.position();
            if (u60.x - a86 <= e6 && e6 <= u60.x + a86 && u60.y - l79 <= t21 && t21 <= u60.y + l79 && s65.nodeShapes[o71.getNodeShape(n42)].checkPoint(e6, t21, 0, r68, i86, u60.x, u60.y)) return v26(n42, 0), !0;
        }
        function m22(n42) {
            var r68, i86 = n42._private, a86 = i86.rscratch, l79 = n42.pstyle("width").pfValue, c55 = n42.pstyle("arrow-scale").value, p27 = l79 / 2 + h44, f32 = p27 * p27, g32 = 2 * p27, m23 = i86.source, b21 = i86.target;
            if ("segments" === a86.edgeType || "straight" === a86.edgeType || "haystack" === a86.edgeType) {
                for(var x19 = a86.allpts, w21 = 0; w21 + 3 < x19.length; w21 += 2)if (wt(e6, t21, x19[w21], x19[w21 + 1], x19[w21 + 2], x19[w21 + 3], g32) && f32 > (r68 = Ct(e6, t21, x19[w21], x19[w21 + 1], x19[w21 + 2], x19[w21 + 3]))) return v26(n42, r68), !0;
            } else if ("bezier" === a86.edgeType || "multibezier" === a86.edgeType || "self" === a86.edgeType || "compound" === a86.edgeType) for(x19 = a86.allpts, w21 = 0; w21 + 5 < a86.allpts.length; w21 += 4)if (Et(e6, t21, x19[w21], x19[w21 + 1], x19[w21 + 2], x19[w21 + 3], x19[w21 + 4], x19[w21 + 5], g32) && f32 > (r68 = kt(e6, t21, x19[w21], x19[w21 + 1], x19[w21 + 2], x19[w21 + 3], x19[w21 + 4], x19[w21 + 5]))) return v26(n42, r68), !0;
            m23 = m23 || i86.source, b21 = b21 || i86.target;
            var E23 = o71.getArrowWidth(l79, c55), k22 = [
                {
                    name: "source",
                    x: a86.arrowStartX,
                    y: a86.arrowStartY,
                    angle: a86.srcArrowAngle
                },
                {
                    name: "target",
                    x: a86.arrowEndX,
                    y: a86.arrowEndY,
                    angle: a86.tgtArrowAngle
                },
                {
                    name: "mid-source",
                    x: a86.midX,
                    y: a86.midY,
                    angle: a86.midsrcArrowAngle
                },
                {
                    name: "mid-target",
                    x: a86.midX,
                    y: a86.midY,
                    angle: a86.midtgtArrowAngle
                }
            ];
            for(w21 = 0; w21 < k22.length; w21++){
                var C17 = k22[w21], S17 = s65.arrowShapes[n42.pstyle(C17.name + "-arrow-shape").value], P19 = n42.pstyle("width").pfValue;
                if (S17.roughCollide(e6, t21, E23, C17.angle, {
                    x: C17.x,
                    y: C17.y
                }, P19, h44) && S17.collide(e6, t21, E23, C17.angle, {
                    x: C17.x,
                    y: C17.y
                }, P19, h44)) return v26(n42), !0;
            }
            d57 && u59.length > 0 && (y25(m23), y25(b21));
        }
        function b21(e7, t23, n42) {
            return Ne(e7, t23, n42);
        }
        function x20(n42, r68) {
            var i86, a86 = n42._private, o72 = f31;
            i86 = r68 ? r68 + "-" : "", n42.boundingBox();
            var s66 = a86.labelBounds[r68 || "main"], l79 = n42.pstyle(i86 + "label").value;
            if ("yes" === n42.pstyle("text-events").strValue && l79) {
                var u60 = b21(a86.rscratch, "labelX", r68), c55 = b21(a86.rscratch, "labelY", r68), d58 = b21(a86.rscratch, "labelAngle", r68), h45 = n42.pstyle(i86 + "text-margin-x").pfValue, p27 = n42.pstyle(i86 + "text-margin-y").pfValue, g32 = s66.x1 - o72 - h45, y26 = s66.x2 + o72 - h45, m23 = s66.y1 - o72 - p27, x21 = s66.y2 + o72 - p27;
                if (d58) {
                    var w22 = Math.cos(d58), E23 = Math.sin(d58), k22 = function(e7, t23) {
                        return {
                            x: (e7 -= u60) * w22 - (t23 -= c55) * E23 + u60,
                            y: e7 * E23 + t23 * w22 + c55
                        };
                    }, C18 = k22(g32, m23), S18 = k22(g32, x21), P20 = k22(y26, m23), D16 = k22(y26, x21), T18 = [
                        C18.x + h45,
                        C18.y + p27,
                        P20.x + h45,
                        P20.y + p27,
                        D16.x + h45,
                        D16.y + p27,
                        S18.x + h45,
                        S18.y + p27
                    ];
                    if (St(e6, t21, T18)) return v26(n42), !0;
                } else if (mt(s66, e6, t21)) return v26(n42), !0;
            }
        }
        n39 && (l78 = l78.interactive);
        for(var w23 = l78.length - 1; w23 >= 0; w23--){
            var E24 = l78[w23];
            E24.isNode() ? y25(E24) || x20(E24) : m22(E24) || x20(E24) || x20(E24, "source") || x20(E24, "target");
        }
        return u59;
    },
    getAllInBox: function(e6, t21, n39, r66) {
        for(var i85, a85, o71 = this.getCachedZSortedEles().interactive, s65 = [], l78 = Math.min(e6, n39), u59 = Math.max(e6, n39), c54 = Math.min(t21, r66), d57 = Math.max(t21, r66), h44 = ht({
            x1: e6 = l78,
            y1: t21 = c54,
            x2: n39 = u59,
            y2: r66 = d57
        }), p26 = 0; p26 < o71.length; p26++){
            var f31 = o71[p26];
            if (f31.isNode()) {
                var g31 = f31, v26 = g31.boundingBox({
                    includeNodes: !0,
                    includeEdges: !1,
                    includeLabels: !1
                });
                yt(h44, v26) && !bt(v26, h44) && s65.push(g31);
            } else {
                var y25 = f31, m22 = y25._private, b21 = m22.rscratch;
                if (null != b21.startX && null != b21.startY && !mt(h44, b21.startX, b21.startY)) continue;
                if (null != b21.endX && null != b21.endY && !mt(h44, b21.endX, b21.endY)) continue;
                if ("bezier" === b21.edgeType || "multibezier" === b21.edgeType || "self" === b21.edgeType || "compound" === b21.edgeType || "segments" === b21.edgeType || "haystack" === b21.edgeType) {
                    for(var x20 = m22.rstyle.bezierPts || m22.rstyle.linePts || m22.rstyle.haystackPts, w23 = !0, E25 = 0; E25 < x20.length; E25++)if (i85 = h44, a85 = x20[E25], !mt(i85, a85.x, a85.y)) {
                        w23 = !1;
                        break;
                    }
                    w23 && s65.push(y25);
                } else "haystack" !== b21.edgeType && "straight" !== b21.edgeType || s65.push(y25);
            }
        }
        return s65;
    }
}, jo = {
    calculateArrowAngles: function(e6) {
        var t21, n39, r66, i85, a85, o71, s65 = e6._private.rscratch, l78 = "haystack" === s65.edgeType, u59 = "bezier" === s65.edgeType, c54 = "multibezier" === s65.edgeType, d57 = "segments" === s65.edgeType, h44 = "compound" === s65.edgeType, p26 = "self" === s65.edgeType;
        if (l78 ? (r66 = s65.haystackPts[0], i85 = s65.haystackPts[1], a85 = s65.haystackPts[2], o71 = s65.haystackPts[3]) : (r66 = s65.arrowStartX, i85 = s65.arrowStartY, a85 = s65.arrowEndX, o71 = s65.arrowEndY), g33 = s65.midX, v27 = s65.midY, d57) t21 = r66 - s65.segpts[0], n39 = i85 - s65.segpts[1];
        else if (c54 || h44 || p26 || u59) {
            var f32 = s65.allpts;
            t21 = r66 - ut(f32[0], f32[2], f32[4], 0.1), n39 = i85 - ut(f32[1], f32[3], f32[5], 0.1);
        } else t21 = r66 - g33, n39 = i85 - v27;
        s65.srcArrowAngle = rt(t21, n39);
        var g33 = s65.midX, v27 = s65.midY;
        if (l78 && (g33 = (r66 + a85) / 2, v27 = (i85 + o71) / 2), t21 = a85 - r66, n39 = o71 - i85, d57) {
            if ((f32 = s65.allpts).length / 2 % 2 == 0) {
                var y27 = (m25 = f32.length / 2) - 2;
                t21 = f32[m25] - f32[y27], n39 = f32[m25 + 1] - f32[y27 + 1];
            } else {
                y27 = (m25 = f32.length / 2 - 1) - 2;
                var m25, b22 = m25 + 2;
                t21 = f32[m25] - f32[y27], n39 = f32[m25 + 1] - f32[y27 + 1];
            }
        } else if (c54 || h44 || p26) {
            var x22, w24, E26, k23, f32 = s65.allpts;
            if (s65.ctrlpts.length / 2 % 2 == 0) {
                var C19 = (S20 = (P22 = f32.length / 2 - 1) + 2) + 2;
                x22 = ut(f32[P22], f32[S20], f32[C19], 0), w24 = ut(f32[P22 + 1], f32[S20 + 1], f32[C19 + 1], 0), E26 = ut(f32[P22], f32[S20], f32[C19], 0.0001), k23 = ut(f32[P22 + 1], f32[S20 + 1], f32[C19 + 1], 0.0001);
            } else {
                var S20, P22;
                C19 = (S20 = f32.length / 2 - 1) + 2;
                x22 = ut(f32[P22 = S20 - 2], f32[S20], f32[C19], 0.4999), w24 = ut(f32[P22 + 1], f32[S20 + 1], f32[C19 + 1], 0.4999), E26 = ut(f32[P22], f32[S20], f32[C19], 0.5), k23 = ut(f32[P22 + 1], f32[S20 + 1], f32[C19 + 1], 0.5);
            }
            t21 = E26 - x22, n39 = k23 - w24;
        }
        (s65.midtgtArrowAngle = rt(t21, n39), s65.midDispX = t21, s65.midDispY = n39, t21 *= -1, n39 *= -1, d57) && ((f32 = s65.allpts).length / 2 % 2 == 0 || (t21 = -(f32[b22 = (m25 = f32.length / 2 - 1) + 2] - f32[m25]), n39 = -(f32[b22 + 1] - f32[m25 + 1])));
        if (s65.midsrcArrowAngle = rt(t21, n39), d57) t21 = a85 - s65.segpts[s65.segpts.length - 2], n39 = o71 - s65.segpts[s65.segpts.length - 1];
        else if (c54 || h44 || p26 || u59) {
            var D17 = (f32 = s65.allpts).length;
            t21 = a85 - ut(f32[D17 - 6], f32[D17 - 4], f32[D17 - 2], 0.9), n39 = o71 - ut(f32[D17 - 5], f32[D17 - 3], f32[D17 - 1], 0.9);
        } else t21 = a85 - g33, n39 = o71 - v27;
        s65.tgtArrowAngle = rt(t21, n39);
    }
};
jo.getArrowWidth = jo.getArrowHeight = function(e6, t21) {
    var n39 = this.arrowWidthCache = this.arrowWidthCache || {
    }, r66 = n39[e6 + ", " + t21];
    return r66 || (r66 = Math.max(Math.pow(13.37 * e6, 0.9), 29) * t21, n39[e6 + ", " + t21] = r66, r66);
};
var Yo = {
};
function Xo(e6) {
    var t21 = [];
    if (null != e6) {
        for(var n39 = 0; n39 < e6.length; n39 += 2){
            var r66 = e6[n39], i85 = e6[n39 + 1];
            t21.push({
                x: r66,
                y: i85
            });
        }
        return t21;
    }
}
Yo.findHaystackPoints = function(e6) {
    for(var t21 = 0; t21 < e6.length; t21++){
        var n42 = e6[t21], r68 = n42._private, i86 = r68.rscratch;
        if (!i86.haystack) {
            var a85 = 2 * Math.random() * Math.PI;
            i86.source = {
                x: Math.cos(a85),
                y: Math.sin(a85)
            }, a85 = 2 * Math.random() * Math.PI, i86.target = {
                x: Math.cos(a85),
                y: Math.sin(a85)
            };
        }
        var o71 = r68.source, s65 = r68.target, l78 = o71.position(), u59 = s65.position(), c54 = o71.width(), d57 = s65.width(), h44 = o71.height(), p26 = s65.height(), f33 = n42.pstyle("haystack-radius").value / 2;
        i86.haystackPts = i86.allpts = [
            i86.source.x * c54 * f33 + l78.x,
            i86.source.y * h44 * f33 + l78.y,
            i86.target.x * d57 * f33 + u59.x,
            i86.target.y * p26 * f33 + u59.y
        ], i86.midX = (i86.allpts[0] + i86.allpts[2]) / 2, i86.midY = (i86.allpts[1] + i86.allpts[3]) / 2, i86.edgeType = "haystack", i86.haystack = !0, this.storeEdgeProjections(n42), this.calculateArrowAngles(n42), this.recalculateEdgeLabelProjections(n42), this.calculateLabelAngles(n42);
    }
}, Yo.findSegmentsPoints = function(e6, t21) {
    var n43 = e6._private.rscratch, r69 = t21.posPts, i87 = t21.intersectionPts, a86 = t21.vectorNormInverse, o72 = e6.pstyle("edge-distances").value, s66 = e6.pstyle("segment-weights"), l79 = e6.pstyle("segment-distances"), u61 = Math.min(s66.pfValue.length, l79.pfValue.length);
    n43.edgeType = "segments", n43.segpts = [];
    for(var c56 = 0; c56 < u61; c56++){
        var d59 = s66.pfValue[c56], h46 = l79.pfValue[c56], p28 = 1 - d59, f34 = d59, g33 = "node-position" === o72 ? r69 : i87, v27 = {
            x: g33.x1 * p28 + g33.x2 * f34,
            y: g33.y1 * p28 + g33.y2 * f34
        };
        n43.segpts.push(v27.x + a86.x * h46, v27.y + a86.y * h46);
    }
}, Yo.findLoopPoints = function(e6, t21, n43, r69) {
    var i87 = e6._private.rscratch, a86 = t21.dirCounts, o72 = t21.srcPos, s66 = e6.pstyle("control-point-distances"), l79 = s66 ? s66.pfValue[0] : void 0, u61 = e6.pstyle("loop-direction").pfValue, c56 = e6.pstyle("loop-sweep").pfValue, d60 = e6.pstyle("control-point-step-size").pfValue;
    i87.edgeType = "self";
    var h47 = n43, p29 = d60;
    r69 && (h47 = 0, p29 = l79);
    var f35 = u61 - Math.PI / 2, g34 = f35 - c56 / 2, v28 = f35 + c56 / 2, y28 = String(u61 + "_" + c56);
    h47 = (void 0) === a86[y28] ? a86[y28] = 0 : ++a86[y28], i87.ctrlpts = [
        o72.x + 1.4 * Math.cos(g34) * p29 * (h47 / 3 + 1),
        o72.y + 1.4 * Math.sin(g34) * p29 * (h47 / 3 + 1),
        o72.x + 1.4 * Math.cos(v28) * p29 * (h47 / 3 + 1),
        o72.y + 1.4 * Math.sin(v28) * p29 * (h47 / 3 + 1)
    ];
}, Yo.findCompoundLoopPoints = function(e6, t21, n43, r69) {
    var i87 = e6._private.rscratch;
    i87.edgeType = "compound";
    var a86 = t21.srcPos, o72 = t21.tgtPos, s66 = t21.srcW, l79 = t21.srcH, u61 = t21.tgtW, c56 = t21.tgtH, d60 = e6.pstyle("control-point-step-size").pfValue, h47 = e6.pstyle("control-point-distances"), p29 = h47 ? h47.pfValue[0] : void 0, f35 = n43, g34 = d60;
    r69 && (f35 = 0, g34 = p29);
    var v28 = {
        x: a86.x - s66 / 2,
        y: a86.y - l79 / 2
    }, y28 = {
        x: o72.x - u61 / 2,
        y: o72.y - c56 / 2
    }, m26 = {
        x: Math.min(v28.x, y28.x),
        y: Math.min(v28.y, y28.y)
    }, b23 = Math.max(0.5, Math.log(0.01 * s66)), x23 = Math.max(0.5, Math.log(0.01 * u61));
    i87.ctrlpts = [
        m26.x,
        m26.y - (1 + Math.pow(50, 1.12) / 100) * g34 * (f35 / 3 + 1) * b23,
        m26.x - (1 + Math.pow(50, 1.12) / 100) * g34 * (f35 / 3 + 1) * x23,
        m26.y
    ];
}, Yo.findStraightEdgePoints = function(e6) {
    e6._private.rscratch.edgeType = "straight";
}, Yo.findBezierPoints = function(e6, t21, n43, r69, i87) {
    var a86 = e6._private.rscratch, o72 = t21.vectorNormInverse, s66 = t21.posPts, l79 = t21.intersectionPts, u61 = e6.pstyle("edge-distances").value, c56 = e6.pstyle("control-point-step-size").pfValue, d60 = e6.pstyle("control-point-distances"), h47 = e6.pstyle("control-point-weights"), p29 = d60 && h47 ? Math.min(d60.value.length, h47.value.length) : 1, f35 = d60 ? d60.pfValue[0] : void 0, g34 = h47.value[0], v28 = r69;
    a86.edgeType = v28 ? "multibezier" : "bezier", a86.ctrlpts = [];
    for(var y28 = 0; y28 < p29; y28++){
        var m26 = (0.5 - t21.eles.length / 2 + n43) * c56 * (i87 ? -1 : 1), b23 = void 0, x23 = at(m26);
        v28 && (f35 = d60 ? d60.pfValue[y28] : c56, g34 = h47.value[y28]);
        var w25 = (void 0) !== (b23 = r69 ? f35 : (void 0) !== f35 ? x23 * f35 : void 0) ? b23 : m26, E27 = 1 - g34, k24 = g34, C20 = "node-position" === u61 ? s66 : l79, S21 = {
            x: C20.x1 * E27 + C20.x2 * k24,
            y: C20.y1 * E27 + C20.y2 * k24
        };
        a86.ctrlpts.push(S21.x + o72.x * w25, S21.y + o72.y * w25);
    }
}, Yo.findTaxiPoints = function(e6, t21) {
    var n43 = e6._private.rscratch;
    n43.edgeType = "segments";
    var r69 = t21.posPts, i87 = t21.srcW, a86 = t21.srcH, o72 = t21.tgtW, s66 = t21.tgtH, l79 = "node-position" !== e6.pstyle("edge-distances").value, u61 = e6.pstyle("taxi-direction").value, c56 = u61, d60 = e6.pstyle("taxi-turn"), h47 = "%" === d60.units, p29 = d60.pfValue, f35 = p29 < 0, g34 = e6.pstyle("taxi-turn-min-distance").pfValue, v28 = l79 ? (i87 + o72) / 2 : 0, y28 = l79 ? (a86 + s66) / 2 : 0, m27 = r69.x2 - r69.x1, b24 = r69.y2 - r69.y1, x24 = function(e7, t23) {
        return e7 > 0 ? Math.max(e7 - t23, 0) : Math.min(e7 + t23, 0);
    }, w26 = x24(m27, v28), E28 = x24(b24, y28), k25 = !1;
    "auto" === c56 ? u61 = Math.abs(w26) > Math.abs(E28) ? "horizontal" : "vertical" : "upward" === c56 || "downward" === c56 ? (u61 = "vertical", k25 = !0) : "leftward" !== c56 && "rightward" !== c56 || (u61 = "horizontal", k25 = !0);
    var C21, S22 = "vertical" === u61, P23 = S22 ? E28 : w26, D18 = S22 ? b24 : m27, T19 = at(D18), M19 = !1;
    (k25 && (h47 || f35) || !("downward" === c56 && D18 < 0 || "upward" === c56 && D18 > 0 || "leftward" === c56 && D18 > 0 || "rightward" === c56 && D18 < 0) || (P23 = (T19 *= -1) * Math.abs(P23), M19 = !0), h47) ? C21 = (p29 < 0 ? 1 + p29 : p29) * P23 : C21 = (p29 < 0 ? P23 : 0) + p29 * T19;
    var B14 = function(e7) {
        return Math.abs(e7) < g34 || Math.abs(e7) >= Math.abs(P23);
    }, _15 = B14(C21), N11 = B14(Math.abs(P23) - Math.abs(C21));
    if ((_15 || N11) && !M19) {
        if (S22) {
            var I13 = Math.abs(D18) <= a86 / 2, z10 = Math.abs(m27) <= o72 / 2;
            if (I13) {
                var L12 = (r69.x1 + r69.x2) / 2, A11 = r69.y1, O13 = r69.y2;
                n43.segpts = [
                    L12,
                    A11,
                    L12,
                    O13
                ];
            } else if (z10) {
                var R11 = (r69.y1 + r69.y2) / 2, V10 = r69.x1, F8 = r69.x2;
                n43.segpts = [
                    V10,
                    R11,
                    F8,
                    R11
                ];
            } else n43.segpts = [
                r69.x1,
                r69.y2
            ];
        } else {
            var q6 = Math.abs(D18) <= i87 / 2, j5 = Math.abs(b24) <= s66 / 2;
            if (q6) {
                var Y4 = (r69.y1 + r69.y2) / 2, X3 = r69.x1, W3 = r69.x2;
                n43.segpts = [
                    X3,
                    Y4,
                    W3,
                    Y4
                ];
            } else if (j5) {
                var H3 = (r69.x1 + r69.x2) / 2, K2 = r69.y1, G3 = r69.y2;
                n43.segpts = [
                    H3,
                    K2,
                    H3,
                    G3
                ];
            } else n43.segpts = [
                r69.x2,
                r69.y1
            ];
        }
    } else if (S22) {
        var Z2 = r69.y1 + C21 + (l79 ? a86 / 2 * T19 : 0), U1 = r69.x1, $1 = r69.x2;
        n43.segpts = [
            U1,
            Z2,
            $1,
            Z2
        ];
    } else {
        var Q1 = r69.x1 + C21 + (l79 ? i87 / 2 * T19 : 0), J1 = r69.y1, ee1 = r69.y2;
        n43.segpts = [
            Q1,
            J1,
            Q1,
            ee1
        ];
    }
}, Yo.tryToCorrectInvalidPoints = function(e6, t21) {
    var n43 = e6._private.rscratch;
    if ("bezier" === n43.edgeType) {
        var r69 = t21.srcPos, i87 = t21.tgtPos, a86 = t21.srcW, o72 = t21.srcH, s66 = t21.tgtW, l79 = t21.tgtH, u61 = t21.srcShape, c56 = t21.tgtShape, d60 = !y1(n43.startX) || !y1(n43.startY), h47 = !y1(n43.arrowStartX) || !y1(n43.arrowStartY), p29 = !y1(n43.endX) || !y1(n43.endY), f35 = !y1(n43.arrowEndX) || !y1(n43.arrowEndY), g34 = 3 * (this.getArrowWidth(e6.pstyle("width").pfValue, e6.pstyle("arrow-scale").value) * this.arrowShapeWidth), v28 = ot({
            x: n43.ctrlpts[0],
            y: n43.ctrlpts[1]
        }, {
            x: n43.startX,
            y: n43.startY
        }), m27 = v28 < g34, b24 = ot({
            x: n43.ctrlpts[0],
            y: n43.ctrlpts[1]
        }, {
            x: n43.endX,
            y: n43.endY
        }), x24 = b24 < g34, w26 = !1;
        if (d60 || h47 || m27) {
            w26 = !0;
            var E28 = {
                x: n43.ctrlpts[0] - r69.x,
                y: n43.ctrlpts[1] - r69.y
            }, k25 = Math.sqrt(E28.x * E28.x + E28.y * E28.y), C21 = {
                x: E28.x / k25,
                y: E28.y / k25
            }, S22 = Math.max(a86, o72), P23 = {
                x: n43.ctrlpts[0] + 2 * C21.x * S22,
                y: n43.ctrlpts[1] + 2 * C21.y * S22
            }, D18 = u61.intersectLine(r69.x, r69.y, a86, o72, P23.x, P23.y, 0);
            m27 ? (n43.ctrlpts[0] = n43.ctrlpts[0] + C21.x * (g34 - v28), n43.ctrlpts[1] = n43.ctrlpts[1] + C21.y * (g34 - v28)) : (n43.ctrlpts[0] = D18[0] + C21.x * g34, n43.ctrlpts[1] = D18[1] + C21.y * g34);
        }
        if (p29 || f35 || x24) {
            w26 = !0;
            var T19 = {
                x: n43.ctrlpts[0] - i87.x,
                y: n43.ctrlpts[1] - i87.y
            }, M19 = Math.sqrt(T19.x * T19.x + T19.y * T19.y), B14 = {
                x: T19.x / M19,
                y: T19.y / M19
            }, _15 = Math.max(a86, o72), N11 = {
                x: n43.ctrlpts[0] + 2 * B14.x * _15,
                y: n43.ctrlpts[1] + 2 * B14.y * _15
            }, I14 = c56.intersectLine(i87.x, i87.y, s66, l79, N11.x, N11.y, 0);
            x24 ? (n43.ctrlpts[0] = n43.ctrlpts[0] + B14.x * (g34 - b24), n43.ctrlpts[1] = n43.ctrlpts[1] + B14.y * (g34 - b24)) : (n43.ctrlpts[0] = I14[0] + B14.x * g34, n43.ctrlpts[1] = I14[1] + B14.y * g34);
        }
        w26 && this.findEndpoints(e6);
    }
}, Yo.storeAllpts = function(e6) {
    var t21 = e6._private.rscratch;
    if ("multibezier" === t21.edgeType || "bezier" === t21.edgeType || "self" === t21.edgeType || "compound" === t21.edgeType) {
        t21.allpts = [], t21.allpts.push(t21.startX, t21.startY);
        for(var n43 = 0; n43 + 1 < t21.ctrlpts.length; n43 += 2)t21.allpts.push(t21.ctrlpts[n43], t21.ctrlpts[n43 + 1]), n43 + 3 < t21.ctrlpts.length && t21.allpts.push((t21.ctrlpts[n43] + t21.ctrlpts[n43 + 2]) / 2, (t21.ctrlpts[n43 + 1] + t21.ctrlpts[n43 + 3]) / 2);
        var r70;
        t21.allpts.push(t21.endX, t21.endY), t21.ctrlpts.length / 2 % 2 == 0 ? (r70 = t21.allpts.length / 2 - 1, t21.midX = t21.allpts[r70], t21.midY = t21.allpts[r70 + 1]) : (r70 = t21.allpts.length / 2 - 3, t21.midX = ut(t21.allpts[r70], t21.allpts[r70 + 2], t21.allpts[r70 + 4], 0.5), t21.midY = ut(t21.allpts[r70 + 1], t21.allpts[r70 + 3], t21.allpts[r70 + 5], 0.5));
    } else if ("straight" === t21.edgeType) t21.allpts = [
        t21.startX,
        t21.startY,
        t21.endX,
        t21.endY
    ], t21.midX = (t21.startX + t21.endX + t21.arrowStartX + t21.arrowEndX) / 4, t21.midY = (t21.startY + t21.endY + t21.arrowStartY + t21.arrowEndY) / 4;
    else if ("segments" === t21.edgeType) {
        if (t21.allpts = [], t21.allpts.push(t21.startX, t21.startY), t21.allpts.push.apply(t21.allpts, t21.segpts), t21.allpts.push(t21.endX, t21.endY), t21.segpts.length % 4 == 0) {
            var i88 = t21.segpts.length / 2, a87 = i88 - 2;
            t21.midX = (t21.segpts[a87] + t21.segpts[i88]) / 2, t21.midY = (t21.segpts[a87 + 1] + t21.segpts[i88 + 1]) / 2;
        } else {
            var o73 = t21.segpts.length / 2 - 1;
            t21.midX = t21.segpts[o73], t21.midY = t21.segpts[o73 + 1];
        }
    }
}, Yo.checkForInvalidEdgeWarning = function(e6) {
    var t21 = e6[0]._private.rscratch;
    t21.nodesOverlap || y1(t21.startX) && y1(t21.startY) && y1(t21.endX) && y1(t21.endY) ? t21.loggedErr = !1 : t21.loggedErr || (t21.loggedErr = !0, Ce("Edge `" + e6.id() + "` has invalid endpoints and so it is impossible to draw.  Adjust your edge style (e.g. control points) accordingly or use an alternative edge type.  This is expected behaviour when the source node and the target node overlap."));
}, Yo.findEdgeControlPoints = function(e6) {
    var t21 = this;
    if (e6 && 0 !== e6.length) {
        for(var n44 = this, r71 = n44.cy.hasCompoundNodes(), i89 = {
            map: new ze,
            get: function(e7) {
                var t23 = this.map.get(e7[0]);
                return null != t23 ? t23.get(e7[1]) : null;
            },
            set: function(e7, t23) {
                var n45 = this.map.get(e7[0]);
                null == n45 && (n45 = new ze, this.map.set(e7[0], n45)), n45.set(e7[1], t23);
            }
        }, a88 = [], o74 = [], s67 = 0; s67 < e6.length; s67++){
            var l80 = e6[s67], u62 = l80._private, c57 = l80.pstyle("curve-style").value;
            if (!l80.removed() && l80.takesUpSpace()) {
                if ("haystack" !== c57) {
                    var d61 = "unbundled-bezier" === c57 || "segments" === c57 || "straight" === c57 || "taxi" === c57, h48 = "unbundled-bezier" === c57 || "bezier" === c57, p30 = u62.source, f36 = u62.target, g35 = [
                        p30.poolIndex(),
                        f36.poolIndex()
                    ].sort(), v29 = i89.get(g35);
                    null == v29 && (v29 = {
                        eles: []
                    }, i89.set(g35, v29), a88.push(g35)), v29.eles.push(l80), d61 && (v29.hasUnbundled = !0), h48 && (v29.hasBezier = !0);
                } else o74.push(l80);
            }
        }
        for(var m28 = function(e7) {
            var o75 = a88[e7], s68 = i89.get(o75), l81 = void 0;
            if (!s68.hasUnbundled) {
                var u63 = s68.eles[0].parallelEdges().filter(function(e8) {
                    return e8.isBundledBezier();
                });
                _e(s68.eles), u63.forEach(function(e8) {
                    return s68.eles.push(e8);
                }), s68.eles.sort(function(e8, t23) {
                    return e8.poolIndex() - t23.poolIndex();
                });
            }
            var c58 = s68.eles[0], d62 = c58.source(), h49 = c58.target();
            if (d62.poolIndex() > h49.poolIndex()) {
                var p31 = d62;
                d62 = h49, h49 = p31;
            }
            var f37 = s68.srcPos = d62.position(), g36 = s68.tgtPos = h49.position(), v30 = s68.srcW = d62.outerWidth(), m29 = s68.srcH = d62.outerHeight(), b25 = s68.tgtW = h49.outerWidth(), x25 = s68.tgtH = h49.outerHeight(), w27 = s68.srcShape = n44.nodeShapes[t21.getNodeShape(d62)], E29 = s68.tgtShape = n44.nodeShapes[t21.getNodeShape(h49)];
            s68.dirCounts = {
                north: 0,
                west: 0,
                south: 0,
                east: 0,
                northwest: 0,
                southwest: 0,
                northeast: 0,
                southeast: 0
            };
            for(var k26 = 0; k26 < s68.eles.length; k26++){
                var C22 = s68.eles[k26], S23 = C22[0]._private.rscratch, P24 = C22.pstyle("curve-style").value, D19 = "unbundled-bezier" === P24 || "segments" === P24 || "taxi" === P24, T20 = !d62.same(C22.source());
                if (!s68.calculatedIntersection && d62 !== h49 && (s68.hasBezier || s68.hasUnbundled)) {
                    s68.calculatedIntersection = !0;
                    var M20 = w27.intersectLine(f37.x, f37.y, v30, m29, g36.x, g36.y, 0), B15 = s68.srcIntn = M20, _16 = E29.intersectLine(g36.x, g36.y, b25, x25, f37.x, f37.y, 0), N12 = s68.tgtIntn = _16, I15 = s68.intersectionPts = {
                        x1: M20[0],
                        x2: _16[0],
                        y1: M20[1],
                        y2: _16[1]
                    }, z11 = s68.posPts = {
                        x1: f37.x,
                        x2: g36.x,
                        y1: f37.y,
                        y2: g36.y
                    }, L13 = _16[1] - M20[1], A12 = _16[0] - M20[0], O14 = Math.sqrt(A12 * A12 + L13 * L13), R12 = s68.vector = {
                        x: A12,
                        y: L13
                    }, V11 = s68.vectorNorm = {
                        x: R12.x / O14,
                        y: R12.y / O14
                    }, F9 = {
                        x: -V11.y,
                        y: V11.x
                    };
                    s68.nodesOverlap = !y1(O14) || E29.checkPoint(M20[0], M20[1], 0, b25, x25, g36.x, g36.y) || w27.checkPoint(_16[0], _16[1], 0, v30, m29, f37.x, f37.y), s68.vectorNormInverse = F9, l81 = {
                        nodesOverlap: s68.nodesOverlap,
                        dirCounts: s68.dirCounts,
                        calculatedIntersection: !0,
                        hasBezier: s68.hasBezier,
                        hasUnbundled: s68.hasUnbundled,
                        eles: s68.eles,
                        srcPos: g36,
                        tgtPos: f37,
                        srcW: b25,
                        srcH: x25,
                        tgtW: v30,
                        tgtH: m29,
                        srcIntn: N12,
                        tgtIntn: B15,
                        srcShape: E29,
                        tgtShape: w27,
                        posPts: {
                            x1: z11.x2,
                            y1: z11.y2,
                            x2: z11.x1,
                            y2: z11.y1
                        },
                        intersectionPts: {
                            x1: I15.x2,
                            y1: I15.y2,
                            x2: I15.x1,
                            y2: I15.y1
                        },
                        vector: {
                            x: -R12.x,
                            y: -R12.y
                        },
                        vectorNorm: {
                            x: -V11.x,
                            y: -V11.y
                        },
                        vectorNormInverse: {
                            x: -F9.x,
                            y: -F9.y
                        }
                    };
                }
                var q7 = T20 ? l81 : s68;
                S23.nodesOverlap = q7.nodesOverlap, S23.srcIntn = q7.srcIntn, S23.tgtIntn = q7.tgtIntn, r71 && (d62.isParent() || d62.isChild() || h49.isParent() || h49.isChild()) && (d62.parents().anySame(h49) || h49.parents().anySame(d62) || d62.same(h49) && d62.isParent()) ? t21.findCompoundLoopPoints(C22, q7, k26, D19) : d62 === h49 ? t21.findLoopPoints(C22, q7, k26, D19) : "segments" === P24 ? t21.findSegmentsPoints(C22, q7) : "taxi" === P24 ? t21.findTaxiPoints(C22, q7) : "straight" === P24 || !D19 && s68.eles.length % 2 == 1 && k26 === Math.floor(s68.eles.length / 2) ? t21.findStraightEdgePoints(C22) : t21.findBezierPoints(C22, q7, k26, D19, T20), t21.findEndpoints(C22), t21.tryToCorrectInvalidPoints(C22, q7), t21.checkForInvalidEdgeWarning(C22), t21.storeAllpts(C22), t21.storeEdgeProjections(C22), t21.calculateArrowAngles(C22), t21.recalculateEdgeLabelProjections(C22), t21.calculateLabelAngles(C22);
            }
        }, b25 = 0; b25 < a88.length; b25++)m28(b25);
        this.findHaystackPoints(o74);
    }
}, Yo.getSegmentPoints = function(e6) {
    var t21 = e6[0]._private.rscratch;
    if ("segments" === t21.edgeType) return this.recalculateRenderedStyle(e6), Xo(t21.segpts);
}, Yo.getControlPoints = function(e6) {
    var t21 = e6[0]._private.rscratch, n45 = t21.edgeType;
    if ("bezier" === n45 || "multibezier" === n45 || "self" === n45 || "compound" === n45) return this.recalculateRenderedStyle(e6), Xo(t21.ctrlpts);
}, Yo.getEdgeMidpoint = function(e6) {
    var t21 = e6[0]._private.rscratch;
    return this.recalculateRenderedStyle(e6), {
        x: t21.midX,
        y: t21.midY
    };
};
var Wo = {
    manualEndptToPx: function(e6, t21) {
        var n45 = e6.position(), r72 = e6.outerWidth(), i90 = e6.outerHeight();
        if (2 === t21.value.length) {
            var a89 = [
                t21.pfValue[0],
                t21.pfValue[1]
            ];
            return "%" === t21.units[0] && (a89[0] = a89[0] * r72), "%" === t21.units[1] && (a89[1] = a89[1] * i90), a89[0] += n45.x, a89[1] += n45.y, a89;
        }
        var o75 = t21.pfValue[0];
        o75 = -Math.PI / 2 + o75;
        var s68 = 2 * Math.max(r72, i90), l81 = [
            n45.x + Math.cos(o75) * s68,
            n45.y + Math.sin(o75) * s68
        ];
        return this.nodeShapes[this.getNodeShape(e6)].intersectLine(n45.x, n45.y, r72, i90, l81[0], l81[1], 0);
    },
    findEndpoints: function(e6) {
        var t21, n45, r72, i90, a90, o75 = this, s68 = e6.source()[0], l81 = e6.target()[0], u64 = s68.position(), c58 = l81.position(), d62 = e6.pstyle("target-arrow-shape").value, h49 = e6.pstyle("source-arrow-shape").value, p32 = e6.pstyle("target-distance-from-node").pfValue, f37 = e6.pstyle("source-distance-from-node").pfValue, g36 = e6.pstyle("curve-style").value, v30 = e6._private.rscratch, m29 = v30.edgeType, b26 = "self" === m29 || "compound" === m29, x25 = "bezier" === m29 || "multibezier" === m29 || b26, w27 = "bezier" !== m29, E29 = "straight" === m29 || "segments" === m29, k26 = "segments" === m29, C23 = x25 || w27 || E29, S24 = b26 || "taxi" === g36, P25 = e6.pstyle("source-endpoint"), D20 = S24 ? "outside-to-node" : P25.value, T21 = e6.pstyle("target-endpoint"), M21 = S24 ? "outside-to-node" : T21.value;
        if (v30.srcManEndpt = P25, v30.tgtManEndpt = T21, x25) {
            var B16 = [
                v30.ctrlpts[0],
                v30.ctrlpts[1]
            ];
            n45 = w27 ? [
                v30.ctrlpts[v30.ctrlpts.length - 2],
                v30.ctrlpts[v30.ctrlpts.length - 1]
            ] : B16, r72 = B16;
        } else if (E29) {
            var _17 = k26 ? v30.segpts.slice(0, 2) : [
                c58.x,
                c58.y
            ];
            n45 = k26 ? v30.segpts.slice(v30.segpts.length - 2) : [
                u64.x,
                u64.y
            ], r72 = _17;
        }
        if ("inside-to-node" === M21) t21 = [
            c58.x,
            c58.y
        ];
        else if (T21.units) t21 = this.manualEndptToPx(l81, T21);
        else if ("outside-to-line" === M21) t21 = v30.tgtIntn;
        else if ("outside-to-node" === M21 || "outside-to-node-or-label" === M21 ? i90 = n45 : "outside-to-line" !== M21 && "outside-to-line-or-label" !== M21 || (i90 = [
            u64.x,
            u64.y
        ]), t21 = o75.nodeShapes[this.getNodeShape(l81)].intersectLine(c58.x, c58.y, l81.outerWidth(), l81.outerHeight(), i90[0], i90[1], 0), "outside-to-node-or-label" === M21 || "outside-to-line-or-label" === M21) {
            var N13 = l81._private.rscratch, I16 = N13.labelWidth, z12 = N13.labelHeight, L14 = N13.labelX, A13 = N13.labelY, O15 = I16 / 2, R13 = z12 / 2, V12 = l81.pstyle("text-valign").value;
            "top" === V12 ? A13 -= R13 : "bottom" === V12 && (A13 += R13);
            var F10 = l81.pstyle("text-halign").value;
            "left" === F10 ? L14 -= O15 : "right" === F10 && (L14 += O15);
            var q8 = It(i90[0], i90[1], [
                L14 - O15,
                A13 - R13,
                L14 + O15,
                A13 - R13,
                L14 + O15,
                A13 + R13,
                L14 - O15,
                A13 + R13
            ], c58.x, c58.y);
            if (q8.length > 0) {
                var j6 = u64, Y5 = st(j6, nt(t21)), X4 = st(j6, nt(q8)), W4 = Y5;
                if (X4 < Y5 && (t21 = q8, W4 = X4), q8.length > 2) st(j6, {
                    x: q8[2],
                    y: q8[3]
                }) < W4 && (t21 = [
                    q8[2],
                    q8[3]
                ]);
            }
        }
        var H4 = zt(t21, n45, o75.arrowShapes[d62].spacing(e6) + p32), K3 = zt(t21, n45, o75.arrowShapes[d62].gap(e6) + p32);
        if (v30.endX = K3[0], v30.endY = K3[1], v30.arrowEndX = H4[0], v30.arrowEndY = H4[1], "inside-to-node" === D20) t21 = [
            u64.x,
            u64.y
        ];
        else if (P25.units) t21 = this.manualEndptToPx(s68, P25);
        else if ("outside-to-line" === D20) t21 = v30.srcIntn;
        else if ("outside-to-node" === D20 || "outside-to-node-or-label" === D20 ? a90 = r72 : "outside-to-line" !== D20 && "outside-to-line-or-label" !== D20 || (a90 = [
            c58.x,
            c58.y
        ]), t21 = o75.nodeShapes[this.getNodeShape(s68)].intersectLine(u64.x, u64.y, s68.outerWidth(), s68.outerHeight(), a90[0], a90[1], 0), "outside-to-node-or-label" === D20 || "outside-to-line-or-label" === D20) {
            var G4 = s68._private.rscratch, Z3 = G4.labelWidth, U2 = G4.labelHeight, $2 = G4.labelX, Q2 = G4.labelY, J2 = Z3 / 2, ee2 = U2 / 2, te1 = s68.pstyle("text-valign").value;
            "top" === te1 ? Q2 -= ee2 : "bottom" === te1 && (Q2 += ee2);
            var ne1 = s68.pstyle("text-halign").value;
            "left" === ne1 ? $2 -= J2 : "right" === ne1 && ($2 += J2);
            var re1 = It(a90[0], a90[1], [
                $2 - J2,
                Q2 - ee2,
                $2 + J2,
                Q2 - ee2,
                $2 + J2,
                Q2 + ee2,
                $2 - J2,
                Q2 + ee2
            ], u64.x, u64.y);
            if (re1.length > 0) {
                var ie1 = c58, ae1 = st(ie1, nt(t21)), oe1 = st(ie1, nt(re1)), se1 = ae1;
                if (oe1 < ae1 && (t21 = [
                    re1[0],
                    re1[1]
                ], se1 = oe1), re1.length > 2) st(ie1, {
                    x: re1[2],
                    y: re1[3]
                }) < se1 && (t21 = [
                    re1[2],
                    re1[3]
                ]);
            }
        }
        var le1 = zt(t21, r72, o75.arrowShapes[h49].spacing(e6) + f37), ue1 = zt(t21, r72, o75.arrowShapes[h49].gap(e6) + f37);
        v30.startX = ue1[0], v30.startY = ue1[1], v30.arrowStartX = le1[0], v30.arrowStartY = le1[1], C23 && (y1(v30.startX) && y1(v30.startY) && y1(v30.endX) && y1(v30.endY) ? v30.badLine = !1 : v30.badLine = !0);
    },
    getSourceEndpoint: function(e6) {
        var t21 = e6[0]._private.rscratch;
        switch(this.recalculateRenderedStyle(e6), t21.edgeType){
            case "haystack":
                return {
                    x: t21.haystackPts[0],
                    y: t21.haystackPts[1]
                };
            default:
                return {
                    x: t21.arrowStartX,
                    y: t21.arrowStartY
                };
        }
    },
    getTargetEndpoint: function(e6) {
        var t21 = e6[0]._private.rscratch;
        switch(this.recalculateRenderedStyle(e6), t21.edgeType){
            case "haystack":
                return {
                    x: t21.haystackPts[2],
                    y: t21.haystackPts[3]
                };
            default:
                return {
                    x: t21.arrowEndX,
                    y: t21.arrowEndY
                };
        }
    }
}, Ho = {
};
function Ko(e6, t21, n45) {
    for(var r72 = function(e7, t23, n46, r73) {
        return ut(e7, t23, n46, r73);
    }, i90 = t21._private.rstyle.bezierPts, a90 = 0; a90 < e6.bezierProjPcts.length; a90++){
        var o75 = e6.bezierProjPcts[a90];
        i90.push({
            x: r72(n45[0], n45[2], n45[4], o75),
            y: r72(n45[1], n45[3], n45[5], o75)
        });
    }
}
Ho.storeEdgeProjections = function(e6) {
    var t21 = e6._private, n45 = t21.rscratch, r72 = n45.edgeType;
    if (t21.rstyle.bezierPts = null, t21.rstyle.linePts = null, t21.rstyle.haystackPts = null, "multibezier" === r72 || "bezier" === r72 || "self" === r72 || "compound" === r72) {
        t21.rstyle.bezierPts = [];
        for(var i90 = 0; i90 + 5 < n45.allpts.length; i90 += 4)Ko(this, e6, n45.allpts.slice(i90, i90 + 6));
    } else if ("segments" === r72) {
        var a90 = t21.rstyle.linePts = [];
        for(i90 = 0; i90 + 1 < n45.allpts.length; i90 += 2)a90.push({
            x: n45.allpts[i90],
            y: n45.allpts[i90 + 1]
        });
    } else if ("haystack" === r72) {
        var o76 = n45.haystackPts;
        t21.rstyle.haystackPts = [
            {
                x: o76[0],
                y: o76[1]
            },
            {
                x: o76[2],
                y: o76[3]
            }
        ];
    }
    t21.rstyle.arrowWidth = this.getArrowWidth(e6.pstyle("width").pfValue, e6.pstyle("arrow-scale").value) * this.arrowShapeWidth;
}, Ho.recalculateEdgeProjections = function(e6) {
    this.findEdgeControlPoints(e6);
};
var Go = {
    recalculateNodeLabelProjection: function(e6) {
        var t21 = e6.pstyle("label").strValue;
        if (!C(t21)) {
            var n45, r72, i91 = e6._private, a91 = e6.width(), o77 = e6.height(), s68 = e6.padding(), l81 = e6.position(), u64 = e6.pstyle("text-halign").strValue, c58 = e6.pstyle("text-valign").strValue, d62 = i91.rscratch, h49 = i91.rstyle;
            switch(u64){
                case "left":
                    n45 = l81.x - a91 / 2 - s68;
                    break;
                case "right":
                    n45 = l81.x + a91 / 2 + s68;
                    break;
                default:
                    n45 = l81.x;
            }
            switch(c58){
                case "top":
                    r72 = l81.y - o77 / 2 - s68;
                    break;
                case "bottom":
                    r72 = l81.y + o77 / 2 + s68;
                    break;
                default:
                    r72 = l81.y;
            }
            d62.labelX = n45, d62.labelY = r72, h49.labelX = n45, h49.labelY = r72, this.calculateLabelAngles(e6), this.applyLabelDimensions(e6);
        }
    }
}, Zo = function(e6, t21) {
    var n46 = Math.atan(t21 / e6);
    return 0 === e6 && n46 < 0 && (n46 *= -1), n46;
}, Uo = function(e6, t21) {
    var n46 = t21.x - e6.x, r73 = t21.y - e6.y;
    return Zo(n46, r73);
};
Go.recalculateEdgeLabelProjections = function(e6) {
    var t21, n46 = e6._private, r73 = n46.rscratch, i92 = this, a92 = {
        mid: e6.pstyle("label").strValue,
        source: e6.pstyle("source-label").strValue,
        target: e6.pstyle("target-label").strValue
    };
    if (a92.mid || a92.source || a92.target) {
        t21 = {
            x: r73.midX,
            y: r73.midY
        };
        var o78 = function(e7, t23, r74) {
            Ie(n46.rscratch, e7, t23, r74), Ie(n46.rstyle, e7, t23, r74);
        };
        o78("labelX", null, t21.x), o78("labelY", null, t21.y);
        var s69 = Zo(r73.midDispX, r73.midDispY);
        o78("labelAutoAngle", null, s69);
        var l82 = function(s70) {
            var l83, u65 = "source" === s70;
            if (a92[s70]) {
                var c59 = e6.pstyle(s70 + "-text-offset").pfValue;
                switch(r73.edgeType){
                    case "self":
                    case "compound":
                    case "bezier":
                    case "multibezier":
                        for(var d63, h50 = function e7() {
                            if (e7.cache) return e7.cache;
                            for(var t23 = [], a93 = 0; a93 + 5 < r73.allpts.length; a93 += 4){
                                var o79 = {
                                    x: r73.allpts[a93],
                                    y: r73.allpts[a93 + 1]
                                }, s71 = {
                                    x: r73.allpts[a93 + 2],
                                    y: r73.allpts[a93 + 3]
                                }, l84 = {
                                    x: r73.allpts[a93 + 4],
                                    y: r73.allpts[a93 + 5]
                                };
                                t23.push({
                                    p0: o79,
                                    p1: s71,
                                    p2: l84,
                                    startDist: 0,
                                    length: 0,
                                    segments: []
                                });
                            }
                            var u66 = n46.rstyle.bezierPts, c60 = i92.bezierProjPcts.length;
                            function d64(e8, t24, n47, r74, i93) {
                                var a94 = ot(t24, n47), o80 = e8.segments[e8.segments.length - 1], s72 = {
                                    p0: t24,
                                    p1: n47,
                                    t0: r74,
                                    t1: i93,
                                    startDist: o80 ? o80.startDist + o80.length : 0,
                                    length: a94
                                };
                                e8.segments.push(s72), e8.length += a94;
                            }
                            for(var h51 = 0; h51 < t23.length; h51++){
                                var p32 = t23[h51], f37 = t23[h51 - 1];
                                f37 && (p32.startDist = f37.startDist + f37.length), d64(p32, p32.p0, u66[h51 * c60], 0, i92.bezierProjPcts[0]);
                                for(var g36 = 0; g36 < c60 - 1; g36++)d64(p32, u66[h51 * c60 + g36], u66[h51 * c60 + g36 + 1], i92.bezierProjPcts[g36], i92.bezierProjPcts[g36 + 1]);
                                d64(p32, u66[h51 * c60 + c60 - 1], p32.p2, i92.bezierProjPcts[c60 - 1], 1);
                            }
                            return e7.cache = t23;
                        }(), p33 = 0, f38 = 0, g37 = 0; g37 < h50.length; g37++){
                            for(var v30 = h50[u65 ? g37 : h50.length - 1 - g37], y28 = 0; y28 < v30.segments.length; y28++){
                                var m29 = v30.segments[u65 ? y28 : v30.segments.length - 1 - y28], b26 = g37 === h50.length - 1 && y28 === v30.segments.length - 1;
                                if (p33 = f38, (f38 += m29.length) >= c59 || b26) {
                                    d63 = {
                                        cp: v30,
                                        segment: m29
                                    };
                                    break;
                                }
                            }
                            if (d63) break;
                        }
                        var x25 = d63.cp, w27 = d63.segment, E29 = (c59 - p33) / w27.length, k26 = w27.t1 - w27.t0, C23 = u65 ? w27.t0 + k26 * E29 : w27.t1 - k26 * E29;
                        C23 = dt(0, C23, 1), t21 = ct(x25.p0, x25.p1, x25.p2, C23), l83 = (function(e8, t23, n47, r74) {
                            var i93 = dt(0, r74 - 0.001, 1), a93 = dt(0, r74 + 0.001, 1), o80 = ct(e8, t23, n47, i93), s72 = ct(e8, t23, n47, a93);
                            return Uo(o80, s72);
                        })(x25.p0, x25.p1, x25.p2, C23);
                        break;
                    case "straight":
                    case "segments":
                    case "haystack":
                        for(var S24, P25, D20, T21, M21 = 0, B17 = r73.allpts.length, _18 = 0; _18 + 3 < B17 && (u65 ? (D20 = {
                            x: r73.allpts[_18],
                            y: r73.allpts[_18 + 1]
                        }, T21 = {
                            x: r73.allpts[_18 + 2],
                            y: r73.allpts[_18 + 3]
                        }) : (D20 = {
                            x: r73.allpts[B17 - 2 - _18],
                            y: r73.allpts[B17 - 1 - _18]
                        }, T21 = {
                            x: r73.allpts[B17 - 4 - _18],
                            y: r73.allpts[B17 - 3 - _18]
                        }), P25 = M21, !((M21 += S24 = ot(D20, T21)) >= c59)); _18 += 2);
                        var N14 = (c59 - P25) / S24;
                        N14 = dt(0, N14, 1), t21 = (function(e8, t23, n47, r74) {
                            var i93 = t23.x - e8.x, a93 = t23.y - e8.y, o80 = ot(e8, t23), s72 = i93 / o80, l85 = a93 / o80;
                            return n47 = null == n47 ? 0 : n47, r74 = null != r74 ? r74 : n47 * o80, {
                                x: e8.x + s72 * r74,
                                y: e8.y + l85 * r74
                            };
                        })(D20, T21, N14), l83 = Uo(D20, T21);
                }
                o78("labelX", s70, t21.x), o78("labelY", s70, t21.y), o78("labelAutoAngle", s70, l83);
            }
        };
        l82("source"), l82("target"), this.applyLabelDimensions(e6);
    }
}, Go.applyLabelDimensions = function(e6) {
    this.applyPrefixedLabelDimensions(e6), e6.isEdge() && (this.applyPrefixedLabelDimensions(e6, "source"), this.applyPrefixedLabelDimensions(e6, "target"));
}, Go.applyPrefixedLabelDimensions = function(e6, t21) {
    var n46 = e6._private, r73 = this.getLabelText(e6, t21), i92 = this.calculateLabelDimensions(e6, r73), a92 = e6.pstyle("line-height").pfValue, o80 = e6.pstyle("text-wrap").strValue, s70 = Ne(n46.rscratch, "labelWrapCachedLines", t21) || [], l83 = "wrap" !== o80 ? 1 : Math.max(s70.length, 1), u65 = i92.height / l83, c60 = u65 * a92, d64 = i92.width, h51 = i92.height + (l83 - 1) * (a92 - 1) * u65;
    Ie(n46.rstyle, "labelWidth", t21, d64), Ie(n46.rscratch, "labelWidth", t21, d64), Ie(n46.rstyle, "labelHeight", t21, h51), Ie(n46.rscratch, "labelHeight", t21, h51), Ie(n46.rscratch, "labelLineHeight", t21, c60);
}, Go.getLabelText = function(e6, t21) {
    var n46 = e6._private, r73 = t21 ? t21 + "-" : "", i92 = e6.pstyle(r73 + "label").strValue, a92 = e6.pstyle("text-transform").value, o80 = function(e7, r74) {
        return r74 ? (Ie(n46.rscratch, e7, t21, r74), r74) : Ne(n46.rscratch, e7, t21);
    };
    if (!i92) return "";
    "none" == a92 || ("uppercase" == a92 ? i92 = i92.toUpperCase() : "lowercase" == a92 && (i92 = i92.toLowerCase()));
    var s70 = e6.pstyle("text-wrap").value;
    if ("wrap" === s70) {
        var l83 = o80("labelKey");
        if (null != l83 && o80("labelWrapKey") === l83) return o80("labelWrapCachedText");
        for(var u65 = i92.split("\n"), c60 = e6.pstyle("text-max-width").pfValue, d64 = "anywhere" === e6.pstyle("text-overflow-wrap").value, h51 = [], p34 = /[\s\u200b]+/, f39 = d64 ? "" : " ", g38 = 0; g38 < u65.length; g38++){
            var v31 = u65[g38], y29 = this.calculateLabelDimensions(e6, v31).width;
            if (d64) {
                var m30 = v31.split("").join("​");
                v31 = m30;
            }
            if (y29 > c60) {
                for(var b27 = v31.split(p34), x26 = "", w28 = 0; w28 < b27.length; w28++){
                    var E30 = b27[w28], k27 = 0 === x26.length ? E30 : x26 + f39 + E30;
                    this.calculateLabelDimensions(e6, k27).width <= c60 ? x26 += E30 + f39 : (x26 && h51.push(x26), x26 = E30 + f39);
                }
                x26.match(/^[\s\u200b]+$/) || h51.push(x26);
            } else h51.push(v31);
        }
        o80("labelWrapCachedLines", h51), i92 = o80("labelWrapCachedText", h51.join("\n")), o80("labelWrapKey", l83);
    } else if ("ellipsis" === s70) {
        var C24 = e6.pstyle("text-max-width").pfValue, S25 = "", P26 = !1;
        if (this.calculateLabelDimensions(e6, i92).width < C24) return i92;
        for(var D21 = 0; D21 < i92.length; D21++){
            if (this.calculateLabelDimensions(e6, S25 + i92[D21] + "…").width > C24) break;
            S25 += i92[D21], D21 === i92.length - 1 && (P26 = !0);
        }
        return P26 || (S25 += "…"), S25;
    }
    return i92;
}, Go.getLabelJustification = function(e6) {
    var t21 = e6.pstyle("text-justification").strValue, n46 = e6.pstyle("text-halign").strValue;
    if ("auto" !== t21) return t21;
    if (!e6.isNode()) return "center";
    switch(n46){
        case "left":
            return "right";
        case "right":
            return "left";
        default:
            return "center";
    }
}, Go.calculateLabelDimensions = function(e6, t21) {
    var n46 = de(t21, e6._private.labelDimsKey), r73 = this.labelDimCache || (this.labelDimCache = []), i92 = r73[n46];
    if (null != i92) return i92;
    var a92 = e6.pstyle("font-style").strValue, o80 = e6.pstyle("font-size").pfValue, s70 = e6.pstyle("font-family").strValue, l85 = e6.pstyle("font-weight").strValue, u66 = this.labelCalcCanvas, c61 = this.labelCalcCanvasContext;
    if (!u66) {
        u66 = this.labelCalcCanvas = document.createElement("canvas"), c61 = this.labelCalcCanvasContext = u66.getContext("2d");
        var d65 = u66.style;
        d65.position = "absolute", d65.left = "-9999px", d65.top = "-9999px", d65.zIndex = "-1", d65.visibility = "hidden", d65.pointerEvents = "none";
    }
    c61.font = "".concat(a92, " ").concat(l85, " ").concat(o80, "px ").concat(s70);
    for(var h52 = 0, p35 = 0, f40 = t21.split("\n"), g39 = 0; g39 < f40.length; g39++){
        var v32 = f40[g39], y30 = c61.measureText(v32), m31 = Math.ceil(y30.width), b28 = o80;
        h52 = Math.max(m31, h52), p35 += b28;
    }
    return h52 += 0, p35 += 0, r73[n46] = {
        width: h52,
        height: p35
    };
}, Go.calculateLabelAngle = function(e6, t21) {
    var n46 = e6._private.rscratch, r73 = e6.isEdge(), i92 = t21 ? t21 + "-" : "", a92 = e6.pstyle(i92 + "text-rotation"), o80 = a92.strValue;
    return "none" === o80 ? 0 : r73 && "autorotate" === o80 ? n46.labelAutoAngle : "autorotate" === o80 ? 0 : a92.pfValue;
}, Go.calculateLabelAngles = function(e6) {
    var t21 = this, n46 = e6.isEdge(), r73 = e6._private.rscratch;
    r73.labelAngle = t21.calculateLabelAngle(e6), n46 && (r73.sourceLabelAngle = t21.calculateLabelAngle(e6, "source"), r73.targetLabelAngle = t21.calculateLabelAngle(e6, "target"));
};
var $o = {
}, Qo = !1;
$o.getNodeShape = function(e6) {
    var t21 = e6.pstyle("shape").value;
    if ("cutrectangle" === t21 && (e6.width() < 28 || e6.height() < 28)) return Qo || (Ce("The `cutrectangle` node shape can not be used at small sizes so `rectangle` is used instead"), Qo = !0), "rectangle";
    if (e6.isParent()) return "rectangle" === t21 || "roundrectangle" === t21 || "round-rectangle" === t21 || "cutrectangle" === t21 || "cut-rectangle" === t21 || "barrel" === t21 ? t21 : "rectangle";
    if ("polygon" === t21) {
        var n46 = e6.pstyle("shape-polygon-points").value;
        return this.nodeShapes.makePolygon(n46).name;
    }
    return t21;
};
var Jo = {
    registerCalculationListeners: function() {
        var e6 = this.cy, t21 = e6.collection(), n47 = this, r73 = function(e7) {
            var n48 = !(arguments.length > 1 && (void 0) !== arguments[1]) || arguments[1];
            if (t21.merge(e7), n48) for(var r74 = 0; r74 < e7.length; r74++){
                var i92 = e7[r74], a92 = i92._private, o80 = a92.rstyle;
                o80.clean = !1, o80.cleanConnected = !1;
            }
        };
        n47.binder(e6).on("bounds.* dirty.*", function(e7) {
            var t23 = e7.target;
            r73(t23);
        }).on("style.* background.*", function(e7) {
            var t23 = e7.target;
            r73(t23, !1);
        });
        var i93 = function(i94) {
            if (i94) {
                var a93 = n47.onUpdateEleCalcsFns;
                t21.cleanStyle();
                for(var o81 = 0; o81 < t21.length; o81++){
                    var s70 = t21[o81], l85 = s70._private.rstyle;
                    s70.isNode() && !l85.cleanConnected && (r73(s70.connectedEdges()), l85.cleanConnected = !0);
                }
                if (a93) for(var u66 = 0; u66 < a93.length; u66++){
                    (0, a93[u66])(i94, t21);
                }
                n47.recalculateRenderedStyle(t21), t21 = e6.collection();
            }
        };
        n47.flushRenderedStyleQueue = function() {
            i93(!0);
        }, n47.beforeRender(i93, n47.beforeRenderPriorities.eleCalcs);
    },
    onUpdateEleCalcs: function(e6) {
        (this.onUpdateEleCalcsFns = this.onUpdateEleCalcsFns || []).push(e6);
    },
    recalculateRenderedStyle: function(e6, t21) {
        var n47 = function(e7) {
            return e7._private.rstyle.cleanConnected;
        }, r73 = [], i93 = [];
        if (!this.destroyed) {
            (void 0) === t21 && (t21 = !0);
            for(var a94 = 0; a94 < e6.length; a94++){
                var o82 = e6[a94], s72 = o82._private, l86 = s72.rstyle;
                !o82.isEdge() || n47(o82.source()) && n47(o82.target()) || (l86.clean = !1), t21 && l86.clean || o82.removed() || "none" !== o82.pstyle("display").value && ("nodes" === s72.group ? i93.push(o82) : r73.push(o82), l86.clean = !0);
            }
            for(var u67 = 0; u67 < i93.length; u67++){
                var c61 = i93[u67], d66 = c61._private.rstyle, h52 = c61.position();
                this.recalculateNodeLabelProjection(c61), d66.nodeX = h52.x, d66.nodeY = h52.y, d66.nodeW = c61.pstyle("width").pfValue, d66.nodeH = c61.pstyle("height").pfValue;
            }
            this.recalculateEdgeProjections(r73);
            for(var p35 = 0; p35 < r73.length; p35++){
                var f40 = r73[p35]._private, g39 = f40.rstyle, v33 = f40.rscratch;
                g39.srcX = v33.arrowStartX, g39.srcY = v33.arrowStartY, g39.tgtX = v33.arrowEndX, g39.tgtY = v33.arrowEndY, g39.midX = v33.midX, g39.midY = v33.midY, g39.labelAngle = v33.labelAngle, g39.sourceLabelAngle = v33.sourceLabelAngle, g39.targetLabelAngle = v33.targetLabelAngle;
            }
        }
    }
}, es = {
    updateCachedGrabbedEles: function() {
        var e6 = this.cachedZSortedEles;
        if (e6) {
            e6.drag = [], e6.nondrag = [];
            for(var t21 = [], n47 = 0; n47 < e6.length; n47++){
                var r73 = (i93 = e6[n47])._private.rscratch;
                i93.grabbed() && !i93.isParent() ? t21.push(i93) : r73.inDragLayer ? e6.drag.push(i93) : e6.nondrag.push(i93);
            }
            for(n47 = 0; n47 < t21.length; n47++){
                var i93 = t21[n47];
                e6.drag.push(i93);
            }
        }
    },
    invalidateCachedZSortedEles: function() {
        this.cachedZSortedEles = null;
    },
    getCachedZSortedEles: function(e6) {
        if (e6 || !this.cachedZSortedEles) {
            var t23 = this.cy.mutableElements().toArray();
            t23.sort(ji), t23.interactive = t23.filter(function(e7) {
                return e7.interactive();
            }), this.cachedZSortedEles = t23, this.updateCachedGrabbedEles();
        } else t23 = this.cachedZSortedEles;
        return t23;
    }
}, ts = {
};
[
    qo,
    jo,
    Yo,
    Wo,
    Ho,
    Go,
    $o,
    Jo,
    es
].forEach(function(e6) {
    I10(ts, e6);
});
var ns = {
    getCachedImage: function(e6, t24, n48) {
        var r74 = this.imageCache = this.imageCache || {
        }, i94 = r74[e6];
        if (i94) return i94.image.complete || i94.image.addEventListener("load", n48), i94.image;
        var a95 = (i94 = r74[e6] = r74[e6] || {
        }).image = new Image;
        a95.addEventListener("load", n48), a95.addEventListener("error", function() {
            a95.error = !0;
        });
        return "data:" === e6.substring(0, "data:".length).toLowerCase() || (a95.crossOrigin = t24), a95.src = e6, a95;
    }
}, rs = {
    registerBinding: function(e6, t24, n48, r74) {
        var i94 = Array.prototype.slice.apply(arguments, [
            1
        ]), a95 = this.binder(e6);
        return a95.on.apply(a95, i94);
    }
};
rs.binder = function(e6) {
    var t24, n48 = this, r74 = e6 === window || e6 === document || e6 === document.body || (t24 = e6, "undefined" != typeof HTMLElement && t24 instanceof HTMLElement);
    if (null == n48.supportsPassiveEvents) {
        var i94 = !1;
        try {
            var a95 = Object.defineProperty({
            }, "passive", {
                get: function() {
                    return i94 = !0, !0;
                }
            });
            window.addEventListener("test", null, a95);
        } catch (e7) {
        }
        n48.supportsPassiveEvents = i94;
    }
    var o83 = function(t25, i95, a96) {
        var o84 = Array.prototype.slice.call(arguments);
        return r74 && n48.supportsPassiveEvents && (o84[2] = {
            capture: null != a96 && a96,
            passive: !1,
            once: !1
        }), n48.bindings.push({
            target: e6,
            args: o84
        }), (e6.addEventListener || e6.on).apply(e6, o84), this;
    };
    return {
        on: o83,
        addEventListener: o83,
        addListener: o83,
        bind: o83
    };
}, rs.nodeIsDraggable = function(e6) {
    return e6 && e6.isNode() && !e6.locked() && e6.grabbable();
}, rs.nodeIsGrabbable = function(e6) {
    return this.nodeIsDraggable(e6) && e6.interactive();
}, rs.load = function() {
    var e6 = this, t24 = function(e7) {
        return e7.selected();
    }, n48 = function(t25, n49, r74, i95) {
        null == t25 && (t25 = e6.cy);
        for(var a96 = 0; a96 < n49.length; a96++){
            var o83 = n49[a96];
            t25.emit({
                originalEvent: r74,
                type: o83,
                position: i95
            });
        }
    }, r74 = function(e7) {
        return e7.shiftKey || e7.metaKey || e7.ctrlKey;
    }, i95 = function(t25, n49) {
        var r75 = !0;
        if (e6.cy.hasCompoundNodes() && t25 && t25.pannable()) for(var i96 = 0; n49 && i96 < n49.length; i96++){
            if ((t25 = n49[i96]).isNode() && t25.isParent() && !t25.pannable()) {
                r75 = !1;
                break;
            }
        }
        else r75 = !0;
        return r75;
    }, a96 = function(e7) {
        e7[0]._private.rscratch.inDragLayer = !0;
    }, o84 = function(e7) {
        e7[0]._private.rscratch.isGrabTarget = !0;
    }, s73 = function(e7, t25) {
        var n49 = t25.addToList;
        n49.has(e7) || (n49.merge(e7), (function(e8) {
            e8[0]._private.grabbed = !0;
        })(e7));
    }, l87 = function(t25, n49) {
        n49 = n49 || {
        };
        var r75 = t25.cy().hasCompoundNodes();
        n49.inDragLayer && (t25.forEach(a96), t25.neighborhood().stdFilter(function(e7) {
            return !r75 || e7.isEdge();
        }).forEach(a96)), n49.addToList && t25.forEach(function(e7) {
            s73(e7, n49);
        }), (function(e7, t26) {
            if (e7.cy().hasCompoundNodes() && (null != t26.inDragLayer || null != t26.addToList)) {
                var n50 = e7.descendants();
                t26.inDragLayer && (n50.forEach(a96), n50.connectedEdges().forEach(a96)), t26.addToList && t26.addToList.unmerge(n50);
            }
        })(t25, n49), d68(t25, {
            inDragLayer: n49.inDragLayer
        }), e6.updateCachedGrabbedEles();
    }, u68 = l87, c62 = function(t25) {
        t25 && (e6.getCachedZSortedEles().forEach(function(e7) {
            !function(e8) {
                e8[0]._private.grabbed = !1;
            }(e7), (function(e8) {
                e8[0]._private.rscratch.inDragLayer = !1;
            })(e7), (function(e8) {
                e8[0]._private.rscratch.isGrabTarget = !1;
            })(e7);
        }), e6.updateCachedGrabbedEles());
    }, d68 = function(e7, t25) {
        if ((null != t25.inDragLayer || null != t25.addToList) && e7.cy().hasCompoundNodes()) {
            var n49 = e7.ancestors().orphans();
            if (!n49.same(e7)) {
                var r75 = n49.descendants().spawnSelf().merge(n49).unmerge(e7).unmerge(e7.descendants()), i96 = r75.connectedEdges();
                t25.inDragLayer && (i96.forEach(a96), r75.forEach(a96)), t25.addToList && r75.forEach(function(e8) {
                    s73(e8, t25);
                });
            }
        }
    }, h53 = function() {
        null != document.activeElement && null != document.activeElement.blur && document.activeElement.blur();
    }, p36 = "undefined" != typeof MutationObserver, f41 = "undefined" != typeof ResizeObserver;
    p36 ? (e6.removeObserver = new MutationObserver(function(t25) {
        for(var n51 = 0; n51 < t25.length; n51++){
            var r76 = t25[n51].removedNodes;
            if (r76) for(var i97 = 0; i97 < r76.length; i97++){
                if (r76[i97] === e6.container) {
                    e6.destroy();
                    break;
                }
            }
        }
    }), e6.container.parentNode && e6.removeObserver.observe(e6.container.parentNode, {
        childList: !0
    })) : e6.registerBinding(e6.container, "DOMNodeRemoved", function(t25) {
        e6.destroy();
    });
    var g40 = J(function() {
        e6.cy.resize();
    }, 100);
    p36 && (e6.styleObserver = new MutationObserver(g40), e6.styleObserver.observe(e6.container, {
        attributes: !0
    })), e6.registerBinding(window, "resize", g40), f41 && (e6.resizeObserver = new ResizeObserver(g40), e6.resizeObserver.observe(e6.container));
    var v34 = function() {
        e6.invalidateContainerClientCoordsCache();
    };
    !function(e7, t25) {
        for(; null != e7;)t25(e7), e7 = e7.parentNode;
    }(e6.container, function(t25) {
        e6.registerBinding(t25, "transitionend", v34), e6.registerBinding(t25, "animationend", v34), e6.registerBinding(t25, "scroll", v34);
    }), e6.registerBinding(e6.container, "contextmenu", function(e7) {
        e7.preventDefault();
    });
    var m32 = function(t25) {
        for(var n51 = e6.findContainerClientCoords(), r77 = n51[0], i98 = n51[1], a97 = n51[2], o85 = n51[3], s74 = t25.touches ? t25.touches : [
            t25
        ], l88 = !1, u69 = 0; u69 < s74.length; u69++){
            var c63 = s74[u69];
            if (r77 <= c63.clientX && c63.clientX <= r77 + a97 && i98 <= c63.clientY && c63.clientY <= i98 + o85) {
                l88 = !0;
                break;
            }
        }
        if (!l88) return !1;
        for(var d69 = e6.container, h54 = t25.target.parentNode, p37 = !1; h54;){
            if (h54 === d69) {
                p37 = !0;
                break;
            }
            h54 = h54.parentNode;
        }
        return !!p37;
    };
    e6.registerBinding(e6.container, "mousedown", function(t25) {
        if (m32(t25)) {
            t25.preventDefault(), h53(), e6.hoverData.capture = !0, e6.hoverData.which = t25.which;
            var r77 = e6.cy, i98 = [
                t25.clientX,
                t25.clientY
            ], a97 = e6.projectIntoViewport(i98[0], i98[1]), s74 = e6.selection, c64 = e6.findNearestElements(a97[0], a97[1], !0, !1), d69 = c64[0], p37 = e6.dragData.possibleDragElements;
            e6.hoverData.mdownPos = a97, e6.hoverData.mdownGPos = i98;
            if (3 == t25.which) {
                e6.hoverData.cxtStarted = !0;
                var f42 = {
                    originalEvent: t25,
                    type: "cxttapstart",
                    position: {
                        x: a97[0],
                        y: a97[1]
                    }
                };
                d69 ? (d69.activate(), d69.emit(f42), e6.hoverData.down = d69) : r77.emit(f42), e6.hoverData.downTime = (new Date).getTime(), e6.hoverData.cxtDragged = !1;
            } else if (1 == t25.which) {
                if (d69 && d69.activate(), null != d69 && e6.nodeIsGrabbable(d69)) {
                    var g41 = function(e7) {
                        return {
                            originalEvent: t25,
                            type: e7,
                            position: {
                                x: a97[0],
                                y: a97[1]
                            }
                        };
                    };
                    if (o84(d69), d69.selected()) {
                        p37 = e6.dragData.possibleDragElements = r77.collection();
                        var v35 = r77.$(function(t26) {
                            return t26.isNode() && t26.selected() && e6.nodeIsGrabbable(t26);
                        });
                        l87(v35, {
                            addToList: p37
                        }), d69.emit(g41("grabon")), v35.forEach(function(e7) {
                            e7.emit(g41("grab"));
                        });
                    } else p37 = e6.dragData.possibleDragElements = r77.collection(), u68(d69, {
                        addToList: p37
                    }), d69.emit(g41("grabon")).emit(g41("grab"));
                    e6.redrawHint("eles", !0), e6.redrawHint("drag", !0);
                }
                e6.hoverData.down = d69, e6.hoverData.downs = c64, e6.hoverData.downTime = (new Date).getTime(), n48(d69, [
                    "mousedown",
                    "tapstart",
                    "vmousedown"
                ], t25, {
                    x: a97[0],
                    y: a97[1]
                }), null == d69 ? (s74[4] = 1, e6.data.bgActivePosistion = {
                    x: a97[0],
                    y: a97[1]
                }, e6.redrawHint("select", !0), e6.redraw()) : d69.pannable() && (s74[4] = 1), e6.hoverData.tapholdCancelled = !1, clearTimeout(e6.hoverData.tapholdTimeout), e6.hoverData.tapholdTimeout = setTimeout(function() {
                    if (!e6.hoverData.tapholdCancelled) {
                        var n51 = e6.hoverData.down;
                        n51 ? n51.emit({
                            originalEvent: t25,
                            type: "taphold",
                            position: {
                                x: a97[0],
                                y: a97[1]
                            }
                        }) : r77.emit({
                            originalEvent: t25,
                            type: "taphold",
                            position: {
                                x: a97[0],
                                y: a97[1]
                            }
                        });
                    }
                }, e6.tapholdDuration);
            }
            s74[0] = s74[2] = a97[0], s74[1] = s74[3] = a97[1];
        }
    }, !1), e6.registerBinding(window, "mousemove", function(t25) {
        if (e6.hoverData.capture || m32(t25)) {
            var a98 = !1, o85 = e6.cy, s75 = o85.zoom(), u69 = [
                t25.clientX,
                t25.clientY
            ], d70 = e6.projectIntoViewport(u69[0], u69[1]), h54 = e6.hoverData.mdownPos, p38 = e6.hoverData.mdownGPos, f43 = e6.selection, g42 = null;
            e6.hoverData.draggingEles || e6.hoverData.dragging || e6.hoverData.selecting || (g42 = e6.findNearestElement(d70[0], d70[1], !0, !1));
            var v36, b29 = e6.hoverData.last, x27 = e6.hoverData.down, w29 = [
                d70[0] - f43[2],
                d70[1] - f43[3]
            ], E31 = e6.dragData.possibleDragElements;
            if (p38) {
                var k28 = u69[0] - p38[0], C25 = k28 * k28, S26 = u69[1] - p38[1], P27 = C25 + S26 * S26;
                e6.hoverData.isOverThresholdDrag = v36 = P27 >= e6.desktopTapThreshold2;
            }
            var D22 = r74(t25);
            v36 && (e6.hoverData.tapholdCancelled = !0);
            a98 = !0, n48(g42, [
                "mousemove",
                "vmousemove",
                "tapdrag"
            ], t25, {
                x: d70[0],
                y: d70[1]
            });
            var T22 = function() {
                e6.data.bgActivePosistion = void 0, e6.hoverData.selecting || o85.emit({
                    originalEvent: t25,
                    type: "boxstart",
                    position: {
                        x: d70[0],
                        y: d70[1]
                    }
                }), f43[4] = 1, e6.hoverData.selecting = !0, e6.redrawHint("select", !0), e6.redraw();
            };
            if (3 === e6.hoverData.which) {
                if (v36) {
                    var M22 = {
                        originalEvent: t25,
                        type: "cxtdrag",
                        position: {
                            x: d70[0],
                            y: d70[1]
                        }
                    };
                    x27 ? x27.emit(M22) : o85.emit(M22), e6.hoverData.cxtDragged = !0, e6.hoverData.cxtOver && g42 === e6.hoverData.cxtOver || (e6.hoverData.cxtOver && e6.hoverData.cxtOver.emit({
                        originalEvent: t25,
                        type: "cxtdragout",
                        position: {
                            x: d70[0],
                            y: d70[1]
                        }
                    }), e6.hoverData.cxtOver = g42, g42 && g42.emit({
                        originalEvent: t25,
                        type: "cxtdragover",
                        position: {
                            x: d70[0],
                            y: d70[1]
                        }
                    }));
                }
            } else if (e6.hoverData.dragging) {
                if (a98 = !0, o85.panningEnabled() && o85.userPanningEnabled()) {
                    var B18;
                    if (e6.hoverData.justStartedPan) {
                        var _19 = e6.hoverData.mdownPos;
                        B18 = {
                            x: (d70[0] - _19[0]) * s75,
                            y: (d70[1] - _19[1]) * s75
                        }, e6.hoverData.justStartedPan = !1;
                    } else B18 = {
                        x: w29[0] * s75,
                        y: w29[1] * s75
                    };
                    o85.panBy(B18), o85.emit("dragpan"), e6.hoverData.dragged = !0;
                }
                d70 = e6.projectIntoViewport(t25.clientX, t25.clientY);
            } else if (1 != f43[4] || null != x27 && !x27.pannable()) {
                if (x27 && x27.pannable() && x27.active() && x27.unactivate(), x27 && x27.grabbed() || g42 == b29 || (b29 && n48(b29, [
                    "mouseout",
                    "tapdragout"
                ], t25, {
                    x: d70[0],
                    y: d70[1]
                }), g42 && n48(g42, [
                    "mouseover",
                    "tapdragover"
                ], t25, {
                    x: d70[0],
                    y: d70[1]
                }), e6.hoverData.last = g42), x27) {
                    if (v36) {
                        if (o85.boxSelectionEnabled() && D22) x27 && x27.grabbed() && (c62(E31), x27.emit("freeon"), E31.emit("free"), e6.dragData.didDrag && (x27.emit("dragfreeon"), E31.emit("dragfree"))), T22();
                        else if (x27 && x27.grabbed() && e6.nodeIsDraggable(x27)) {
                            var N15 = !e6.dragData.didDrag;
                            N15 && e6.redrawHint("eles", !0), e6.dragData.didDrag = !0;
                            var I17 = o85.collection();
                            e6.hoverData.draggingEles || l87(E31, {
                                inDragLayer: !0
                            });
                            var z13 = {
                                x: 0,
                                y: 0
                            };
                            if (y1(w29[0]) && y1(w29[1]) && (z13.x += w29[0], z13.y += w29[1], N15)) {
                                var L15 = e6.hoverData.dragDelta;
                                L15 && y1(L15[0]) && y1(L15[1]) && (z13.x += L15[0], z13.y += L15[1]);
                            }
                            for(var A14 = 0; A14 < E31.length; A14++){
                                var O16 = E31[A14];
                                e6.nodeIsDraggable(O16) && O16.grabbed() && I17.push(O16);
                            }
                            e6.hoverData.draggingEles = !0, I17.silentShift(z13).emit("position drag"), e6.redrawHint("drag", !0), e6.redraw();
                        }
                    } else !function() {
                        var t26 = e6.hoverData.dragDelta = e6.hoverData.dragDelta || [];
                        0 === t26.length ? (t26.push(w29[0]), t26.push(w29[1])) : (t26[0] += w29[0], t26[1] += w29[1]);
                    }();
                }
                a98 = !0;
            } else if (v36) {
                if (e6.hoverData.dragging || !o85.boxSelectionEnabled() || !D22 && o85.panningEnabled() && o85.userPanningEnabled()) {
                    if (!e6.hoverData.selecting && o85.panningEnabled() && o85.userPanningEnabled()) {
                        i95(x27, e6.hoverData.downs) && (e6.hoverData.dragging = !0, e6.hoverData.justStartedPan = !0, f43[4] = 0, e6.data.bgActivePosistion = nt(h54), e6.redrawHint("select", !0), e6.redraw());
                    }
                } else T22();
                x27 && x27.pannable() && x27.active() && x27.unactivate();
            }
            return f43[2] = d70[0], f43[3] = d70[1], a98 ? (t25.stopPropagation && t25.stopPropagation(), t25.preventDefault && t25.preventDefault(), !1) : void 0;
        }
    }, !1), e6.registerBinding(window, "mouseup", function(i99) {
        if (e6.hoverData.capture) {
            e6.hoverData.capture = !1;
            var a99 = e6.cy, o86 = e6.projectIntoViewport(i99.clientX, i99.clientY), s76 = e6.selection, l88 = e6.findNearestElement(o86[0], o86[1], !0, !1), u70 = e6.dragData.possibleDragElements, d71 = e6.hoverData.down, h55 = r74(i99);
            if (e6.data.bgActivePosistion && (e6.redrawHint("select", !0), e6.redraw()), e6.hoverData.tapholdCancelled = !0, e6.data.bgActivePosistion = void 0, d71 && d71.unactivate(), 3 === e6.hoverData.which) {
                var p39 = {
                    originalEvent: i99,
                    type: "cxttapend",
                    position: {
                        x: o86[0],
                        y: o86[1]
                    }
                };
                if (d71 ? d71.emit(p39) : a99.emit(p39), !e6.hoverData.cxtDragged) {
                    var f44 = {
                        originalEvent: i99,
                        type: "cxttap",
                        position: {
                            x: o86[0],
                            y: o86[1]
                        }
                    };
                    d71 ? d71.emit(f44) : a99.emit(f44);
                }
                e6.hoverData.cxtDragged = !1, e6.hoverData.which = null;
            } else if (1 === e6.hoverData.which) {
                if (n48(l88, [
                    "mouseup",
                    "tapend",
                    "vmouseup"
                ], i99, {
                    x: o86[0],
                    y: o86[1]
                }), e6.dragData.didDrag || e6.hoverData.dragged || e6.hoverData.selecting || e6.hoverData.isOverThresholdDrag || n48(d71, [
                    "click",
                    "tap",
                    "vclick"
                ], i99, {
                    x: o86[0],
                    y: o86[1]
                }), null != d71 || e6.dragData.didDrag || e6.hoverData.selecting || e6.hoverData.dragged || r74(i99) || (a99.$(t24).unselect([
                    "tapunselect"
                ]), u70.length > 0 && e6.redrawHint("eles", !0), e6.dragData.possibleDragElements = u70 = a99.collection()), l88 != d71 || e6.dragData.didDrag || e6.hoverData.selecting || null != l88 && l88._private.selectable && (e6.hoverData.dragging || ("additive" === a99.selectionType() || h55 ? l88.selected() ? l88.unselect([
                    "tapunselect"
                ]) : l88.select([
                    "tapselect"
                ]) : h55 || (a99.$(t24).unmerge(l88).unselect([
                    "tapunselect"
                ]), l88.select([
                    "tapselect"
                ]))), e6.redrawHint("eles", !0)), e6.hoverData.selecting) {
                    var g43 = a99.collection(e6.getAllInBox(s76[0], s76[1], s76[2], s76[3]));
                    e6.redrawHint("select", !0), g43.length > 0 && e6.redrawHint("eles", !0), a99.emit({
                        type: "boxend",
                        originalEvent: i99,
                        position: {
                            x: o86[0],
                            y: o86[1]
                        }
                    });
                    var v37 = function(e7) {
                        return e7.selectable() && !e7.selected();
                    };
                    "additive" === a99.selectionType() || h55 || a99.$(t24).unmerge(g43).unselect(), g43.emit("box").stdFilter(v37).select().emit("boxselect"), e6.redraw();
                }
                if (e6.hoverData.dragging && (e6.hoverData.dragging = !1, e6.redrawHint("select", !0), e6.redrawHint("eles", !0), e6.redraw()), !s76[4]) {
                    e6.redrawHint("drag", !0), e6.redrawHint("eles", !0);
                    var y31 = d71 && d71.grabbed();
                    c62(u70), y31 && (d71.emit("freeon"), u70.emit("free"), e6.dragData.didDrag && (d71.emit("dragfreeon"), u70.emit("dragfree")));
                }
            }
            s76[4] = 0, e6.hoverData.down = null, e6.hoverData.cxtStarted = !1, e6.hoverData.draggingEles = !1, e6.hoverData.selecting = !1, e6.hoverData.isOverThresholdDrag = !1, e6.dragData.didDrag = !1, e6.hoverData.dragged = !1, e6.hoverData.dragDelta = [], e6.hoverData.mdownPos = null, e6.hoverData.mdownGPos = null;
        }
    }, !1);
    var b30, x28, w30, E32, k29, C26, S27, P28, D23, T23, M23, B19, _20, N16 = function(t25) {
        if (!e6.scrollingPage) {
            var n52 = e6.cy, r78 = n52.zoom(), i99 = n52.pan(), a100 = e6.projectIntoViewport(t25.clientX, t25.clientY), o87 = [
                a100[0] * r78 + i99.x,
                a100[1] * r78 + i99.y
            ];
            if (e6.hoverData.draggingEles || e6.hoverData.dragging || e6.hoverData.cxtStarted || 0 !== e6.selection[4]) t25.preventDefault();
            else if (n52.panningEnabled() && n52.userPanningEnabled() && n52.zoomingEnabled() && n52.userZoomingEnabled()) {
                var s77;
                t25.preventDefault(), e6.data.wheelZooming = !0, clearTimeout(e6.data.wheelTimeout), e6.data.wheelTimeout = setTimeout(function() {
                    e6.data.wheelZooming = !1, e6.redrawHint("eles", !0), e6.redraw();
                }, 150), s77 = null != t25.deltaY ? t25.deltaY / -250 : null != t25.wheelDeltaY ? t25.wheelDeltaY / 1000 : t25.wheelDelta / 1000, s77 *= e6.wheelSensitivity, 1 === t25.deltaMode && (s77 *= 33);
                var l89 = n52.zoom() * Math.pow(10, s77);
                "gesturechange" === t25.type && (l89 = e6.gestureStartZoom * t25.scale), n52.zoom({
                    level: l89,
                    renderedPosition: {
                        x: o87[0],
                        y: o87[1]
                    }
                }), n52.emit("gesturechange" === t25.type ? "pinchzoom" : "scrollzoom");
            }
        }
    };
    e6.registerBinding(e6.container, "wheel", N16, !0), e6.registerBinding(window, "scroll", function(t25) {
        e6.scrollingPage = !0, clearTimeout(e6.scrollingPageTimeout), e6.scrollingPageTimeout = setTimeout(function() {
            e6.scrollingPage = !1;
        }, 250);
    }, !0), e6.registerBinding(e6.container, "gesturestart", function(t25) {
        e6.gestureStartZoom = e6.cy.zoom(), e6.hasTouchStarted || t25.preventDefault();
    }, !0), e6.registerBinding(e6.container, "gesturechange", function(t25) {
        e6.hasTouchStarted || N16(t25);
    }, !0), e6.registerBinding(e6.container, "mouseout", function(t25) {
        var n53 = e6.projectIntoViewport(t25.clientX, t25.clientY);
        e6.cy.emit({
            originalEvent: t25,
            type: "mouseout",
            position: {
                x: n53[0],
                y: n53[1]
            }
        });
    }, !1), e6.registerBinding(e6.container, "mouseover", function(t25) {
        var n53 = e6.projectIntoViewport(t25.clientX, t25.clientY);
        e6.cy.emit({
            originalEvent: t25,
            type: "mouseover",
            position: {
                x: n53[0],
                y: n53[1]
            }
        });
    }, !1);
    var I18, z14, L16, A15, O17 = function(e7, t25, n53, r79) {
        return Math.sqrt((n53 - e7) * (n53 - e7) + (r79 - t25) * (r79 - t25));
    }, R14 = function(e7, t25, n53, r79) {
        return (n53 - e7) * (n53 - e7) + (r79 - t25) * (r79 - t25);
    };
    if (e6.registerBinding(e6.container, "touchstart", I18 = function(t25) {
        if (e6.hasTouchStarted = !0, m32(t25)) {
            h53(), e6.touchData.capture = !0, e6.data.bgActivePosistion = void 0;
            var r79 = e6.cy, i100 = e6.touchData.now, a101 = e6.touchData.earlier;
            if (t25.touches[0]) {
                var s78 = e6.projectIntoViewport(t25.touches[0].clientX, t25.touches[0].clientY);
                i100[0] = s78[0], i100[1] = s78[1];
            }
            if (t25.touches[1]) {
                s78 = e6.projectIntoViewport(t25.touches[1].clientX, t25.touches[1].clientY);
                i100[2] = s78[0], i100[3] = s78[1];
            }
            if (t25.touches[2]) {
                s78 = e6.projectIntoViewport(t25.touches[2].clientX, t25.touches[2].clientY);
                i100[4] = s78[0], i100[5] = s78[1];
            }
            if (t25.touches[1]) {
                e6.touchData.singleTouchMoved = !0, c62(e6.dragData.touchDragEles);
                var d72 = e6.findContainerClientCoords();
                D23 = d72[0], T23 = d72[1], M23 = d72[2], B19 = d72[3], b30 = t25.touches[0].clientX - D23, x28 = t25.touches[0].clientY - T23, w30 = t25.touches[1].clientX - D23, E32 = t25.touches[1].clientY - T23, _20 = 0 <= b30 && b30 <= M23 && 0 <= w30 && w30 <= M23 && 0 <= x28 && x28 <= B19 && 0 <= E32 && E32 <= B19;
                var p40 = r79.pan(), f45 = r79.zoom();
                k29 = O17(b30, x28, w30, E32), C26 = R14(b30, x28, w30, E32), P28 = [
                    ((S27 = [
                        (b30 + w30) / 2,
                        (x28 + E32) / 2
                    ])[0] - p40.x) / f45,
                    (S27[1] - p40.y) / f45
                ];
                if (C26 < 40000 && !t25.touches[2]) {
                    var g44 = e6.findNearestElement(i100[0], i100[1], !0, !0), v38 = e6.findNearestElement(i100[2], i100[3], !0, !0);
                    return g44 && g44.isNode() ? (g44.activate().emit({
                        originalEvent: t25,
                        type: "cxttapstart",
                        position: {
                            x: i100[0],
                            y: i100[1]
                        }
                    }), e6.touchData.start = g44) : v38 && v38.isNode() ? (v38.activate().emit({
                        originalEvent: t25,
                        type: "cxttapstart",
                        position: {
                            x: i100[0],
                            y: i100[1]
                        }
                    }), e6.touchData.start = v38) : r79.emit({
                        originalEvent: t25,
                        type: "cxttapstart",
                        position: {
                            x: i100[0],
                            y: i100[1]
                        }
                    }), e6.touchData.start && (e6.touchData.start._private.grabbed = !1), e6.touchData.cxt = !0, e6.touchData.cxtDragged = !1, e6.data.bgActivePosistion = void 0, void e6.redraw();
                }
            }
            if (t25.touches[2]) r79.boxSelectionEnabled() && t25.preventDefault();
            else if (t25.touches[1]) ;
            else if (t25.touches[0]) {
                var y32 = e6.findNearestElements(i100[0], i100[1], !0, !0), N17 = y32[0];
                if (null != N17 && (N17.activate(), e6.touchData.start = N17, e6.touchData.starts = y32, e6.nodeIsGrabbable(N17))) {
                    var I19 = e6.dragData.touchDragEles = r79.collection(), z15 = null;
                    e6.redrawHint("eles", !0), e6.redrawHint("drag", !0), N17.selected() ? (z15 = r79.$(function(t26) {
                        return t26.selected() && e6.nodeIsGrabbable(t26);
                    }), l87(z15, {
                        addToList: I19
                    })) : u68(N17, {
                        addToList: I19
                    }), o84(N17);
                    var L17 = function(e7) {
                        return {
                            originalEvent: t25,
                            type: e7,
                            position: {
                                x: i100[0],
                                y: i100[1]
                            }
                        };
                    };
                    N17.emit(L17("grabon")), z15 ? z15.forEach(function(e7) {
                        e7.emit(L17("grab"));
                    }) : N17.emit(L17("grab"));
                }
                n48(N17, [
                    "touchstart",
                    "tapstart",
                    "vmousedown"
                ], t25, {
                    x: i100[0],
                    y: i100[1]
                }), null == N17 && (e6.data.bgActivePosistion = {
                    x: s78[0],
                    y: s78[1]
                }, e6.redrawHint("select", !0), e6.redraw()), e6.touchData.singleTouchMoved = !1, e6.touchData.singleTouchStartTime = +new Date, clearTimeout(e6.touchData.tapholdTimeout), e6.touchData.tapholdTimeout = setTimeout(function() {
                    !1 !== e6.touchData.singleTouchMoved || e6.pinching || e6.touchData.selecting || n48(e6.touchData.start, [
                        "taphold"
                    ], t25, {
                        x: i100[0],
                        y: i100[1]
                    });
                }, e6.tapholdDuration);
            }
            if (t25.touches.length >= 1) {
                for(var A16 = e6.touchData.startPosition = [], V13 = 0; V13 < i100.length; V13++)A16[V13] = a101[V13] = i100[V13];
                var F11 = t25.touches[0];
                e6.touchData.startGPosition = [
                    F11.clientX,
                    F11.clientY
                ];
            }
        }
    }, !1), e6.registerBinding(window, "touchmove", z14 = function(t25) {
        var r80 = e6.touchData.capture;
        if (r80 || m32(t25)) {
            var a102 = e6.selection, o88 = e6.cy, s79 = e6.touchData.now, u71 = e6.touchData.earlier, d73 = o88.zoom();
            if (t25.touches[0]) {
                var h56 = e6.projectIntoViewport(t25.touches[0].clientX, t25.touches[0].clientY);
                s79[0] = h56[0], s79[1] = h56[1];
            }
            if (t25.touches[1]) {
                h56 = e6.projectIntoViewport(t25.touches[1].clientX, t25.touches[1].clientY);
                s79[2] = h56[0], s79[3] = h56[1];
            }
            if (t25.touches[2]) {
                h56 = e6.projectIntoViewport(t25.touches[2].clientX, t25.touches[2].clientY);
                s79[4] = h56[0], s79[5] = h56[1];
            }
            var p41, f46 = e6.touchData.startGPosition;
            if (r80 && t25.touches[0] && f46) {
                for(var g45 = [], v39 = 0; v39 < s79.length; v39++)g45[v39] = s79[v39] - u71[v39];
                var S28 = t25.touches[0].clientX - f46[0], M24 = S28 * S28, B20 = t25.touches[0].clientY - f46[1];
                p41 = M24 + B20 * B20 >= e6.touchTapThreshold2;
            }
            if (r80 && e6.touchData.cxt) {
                t25.preventDefault();
                var N18 = t25.touches[0].clientX - D23, I20 = t25.touches[0].clientY - T23, z16 = t25.touches[1].clientX - D23, L18 = t25.touches[1].clientY - T23, A17 = R14(N18, I20, z16, L18);
                if (A17 / C26 >= 2.25 || A17 >= 22500) {
                    e6.touchData.cxt = !1, e6.data.bgActivePosistion = void 0, e6.redrawHint("select", !0);
                    var V14 = {
                        originalEvent: t25,
                        type: "cxttapend",
                        position: {
                            x: s79[0],
                            y: s79[1]
                        }
                    };
                    e6.touchData.start ? (e6.touchData.start.unactivate().emit(V14), e6.touchData.start = null) : o88.emit(V14);
                }
            }
            if (r80 && e6.touchData.cxt) {
                V14 = {
                    originalEvent: t25,
                    type: "cxtdrag",
                    position: {
                        x: s79[0],
                        y: s79[1]
                    }
                };
                e6.data.bgActivePosistion = void 0, e6.redrawHint("select", !0), e6.touchData.start ? e6.touchData.start.emit(V14) : o88.emit(V14), e6.touchData.start && (e6.touchData.start._private.grabbed = !1), e6.touchData.cxtDragged = !0;
                var F12 = e6.findNearestElement(s79[0], s79[1], !0, !0);
                e6.touchData.cxtOver && F12 === e6.touchData.cxtOver || (e6.touchData.cxtOver && e6.touchData.cxtOver.emit({
                    originalEvent: t25,
                    type: "cxtdragout",
                    position: {
                        x: s79[0],
                        y: s79[1]
                    }
                }), e6.touchData.cxtOver = F12, F12 && F12.emit({
                    originalEvent: t25,
                    type: "cxtdragover",
                    position: {
                        x: s79[0],
                        y: s79[1]
                    }
                }));
            } else if (r80 && t25.touches[2] && o88.boxSelectionEnabled()) t25.preventDefault(), e6.data.bgActivePosistion = void 0, this.lastThreeTouch = +new Date, e6.touchData.selecting || o88.emit({
                originalEvent: t25,
                type: "boxstart",
                position: {
                    x: s79[0],
                    y: s79[1]
                }
            }), e6.touchData.selecting = !0, e6.touchData.didSelect = !0, a102[4] = 1, a102 && 0 !== a102.length && (void 0) !== a102[0] ? (a102[2] = (s79[0] + s79[2] + s79[4]) / 3, a102[3] = (s79[1] + s79[3] + s79[5]) / 3) : (a102[0] = (s79[0] + s79[2] + s79[4]) / 3, a102[1] = (s79[1] + s79[3] + s79[5]) / 3, a102[2] = (s79[0] + s79[2] + s79[4]) / 3 + 1, a102[3] = (s79[1] + s79[3] + s79[5]) / 3 + 1), e6.redrawHint("select", !0), e6.redraw();
            else if (r80 && t25.touches[1] && !e6.touchData.didSelect && o88.zoomingEnabled() && o88.panningEnabled() && o88.userZoomingEnabled() && o88.userPanningEnabled()) {
                if (t25.preventDefault(), e6.data.bgActivePosistion = void 0, e6.redrawHint("select", !0), ee4 = e6.dragData.touchDragEles) {
                    e6.redrawHint("drag", !0);
                    for(var q9 = 0; q9 < ee4.length; q9++){
                        var j7 = ee4[q9]._private;
                        j7.grabbed = !1, j7.rscratch.inDragLayer = !1;
                    }
                }
                var Y6 = e6.touchData.start, X5 = (N18 = t25.touches[0].clientX - D23, I20 = t25.touches[0].clientY - T23, z16 = t25.touches[1].clientX - D23, L18 = t25.touches[1].clientY - T23, O17(N18, I20, z16, L18)), W5 = X5 / k29;
                if (_20) {
                    var H4 = (N18 - b30 + (z16 - w30)) / 2, K3 = (I20 - x28 + (L18 - E32)) / 2, G5 = o88.zoom(), Z4 = G5 * W5, U3 = o88.pan(), $3 = P28[0] * G5 + U3.x, Q3 = P28[1] * G5 + U3.y, J3 = {
                        x: -Z4 / G5 * ($3 - U3.x - H4) + $3,
                        y: -Z4 / G5 * (Q3 - U3.y - K3) + Q3
                    };
                    if (Y6 && Y6.active()) {
                        var ee4 = e6.dragData.touchDragEles;
                        c62(ee4), e6.redrawHint("drag", !0), e6.redrawHint("eles", !0), Y6.unactivate().emit("freeon"), ee4.emit("free"), e6.dragData.didDrag && (Y6.emit("dragfreeon"), ee4.emit("dragfree"));
                    }
                    o88.viewport({
                        zoom: Z4,
                        pan: J3,
                        cancelOnFailedZoom: !0
                    }), o88.emit("pinchzoom"), k29 = X5, b30 = N18, x28 = I20, w30 = z16, E32 = L18, e6.pinching = !0;
                }
                if (t25.touches[0]) {
                    h56 = e6.projectIntoViewport(t25.touches[0].clientX, t25.touches[0].clientY);
                    s79[0] = h56[0], s79[1] = h56[1];
                }
                if (t25.touches[1]) {
                    h56 = e6.projectIntoViewport(t25.touches[1].clientX, t25.touches[1].clientY);
                    s79[2] = h56[0], s79[3] = h56[1];
                }
                if (t25.touches[2]) {
                    h56 = e6.projectIntoViewport(t25.touches[2].clientX, t25.touches[2].clientY);
                    s79[4] = h56[0], s79[5] = h56[1];
                }
            } else if (t25.touches[0] && !e6.touchData.didSelect) {
                var te2 = e6.touchData.start, ne2 = e6.touchData.last;
                if (e6.hoverData.draggingEles || e6.swipePanning || (F12 = e6.findNearestElement(s79[0], s79[1], !0, !0)), r80 && null != te2 && t25.preventDefault(), r80 && null != te2 && e6.nodeIsDraggable(te2)) {
                    if (p41) {
                        ee4 = e6.dragData.touchDragEles;
                        var re2 = !e6.dragData.didDrag;
                        re2 && l87(ee4, {
                            inDragLayer: !0
                        }), e6.dragData.didDrag = !0;
                        var ie2 = {
                            x: 0,
                            y: 0
                        };
                        if (y1(g45[0]) && y1(g45[1])) {
                            if (ie2.x += g45[0], ie2.y += g45[1], re2) e6.redrawHint("eles", !0), (ae3 = e6.touchData.dragDelta) && y1(ae3[0]) && y1(ae3[1]) && (ie2.x += ae3[0], ie2.y += ae3[1]);
                        }
                        e6.hoverData.draggingEles = !0, ee4.silentShift(ie2).emit("position drag"), e6.redrawHint("drag", !0), e6.touchData.startPosition[0] == u71[0] && e6.touchData.startPosition[1] == u71[1] && e6.redrawHint("eles", !0), e6.redraw();
                    } else {
                        var ae3;
                        0 === (ae3 = e6.touchData.dragDelta = e6.touchData.dragDelta || []).length ? (ae3.push(g45[0]), ae3.push(g45[1])) : (ae3[0] += g45[0], ae3[1] += g45[1]);
                    }
                }
                if (n48(te2 || F12, [
                    "touchmove",
                    "tapdrag",
                    "vmousemove"
                ], t25, {
                    x: s79[0],
                    y: s79[1]
                }), te2 && te2.grabbed() || F12 == ne2 || (ne2 && ne2.emit({
                    originalEvent: t25,
                    type: "tapdragout",
                    position: {
                        x: s79[0],
                        y: s79[1]
                    }
                }), F12 && F12.emit({
                    originalEvent: t25,
                    type: "tapdragover",
                    position: {
                        x: s79[0],
                        y: s79[1]
                    }
                })), e6.touchData.last = F12, r80) for(q9 = 0; q9 < s79.length; q9++)s79[q9] && e6.touchData.startPosition[q9] && p41 && (e6.touchData.singleTouchMoved = !0);
                if (r80 && (null == te2 || te2.pannable()) && o88.panningEnabled() && o88.userPanningEnabled()) {
                    i95(te2, e6.touchData.starts) && (t25.preventDefault(), e6.data.bgActivePosistion || (e6.data.bgActivePosistion = nt(e6.touchData.startPosition)), e6.swipePanning ? (o88.panBy({
                        x: g45[0] * d73,
                        y: g45[1] * d73
                    }), o88.emit("dragpan")) : p41 && (e6.swipePanning = !0, o88.panBy({
                        x: S28 * d73,
                        y: B20 * d73
                    }), o88.emit("dragpan"), te2 && (te2.unactivate(), e6.redrawHint("select", !0), e6.touchData.start = null)));
                    h56 = e6.projectIntoViewport(t25.touches[0].clientX, t25.touches[0].clientY);
                    s79[0] = h56[0], s79[1] = h56[1];
                }
            }
            for(v39 = 0; v39 < s79.length; v39++)u71[v39] = s79[v39];
            r80 && t25.touches.length > 0 && !e6.hoverData.draggingEles && !e6.swipePanning && null != e6.data.bgActivePosistion && (e6.data.bgActivePosistion = void 0, e6.redrawHint("select", !0), e6.redraw());
        }
    }, !1), e6.registerBinding(window, "touchcancel", L16 = function(t25) {
        var n53 = e6.touchData.start;
        e6.touchData.capture = !1, n53 && n53.unactivate();
    }), e6.registerBinding(window, "touchend", A15 = function(r80) {
        var i101 = e6.touchData.start;
        if (e6.touchData.capture) {
            0 === r80.touches.length && (e6.touchData.capture = !1), r80.preventDefault();
            var a103 = e6.selection;
            e6.swipePanning = !1, e6.hoverData.draggingEles = !1;
            var o89, s80 = e6.cy, l90 = s80.zoom(), u72 = e6.touchData.now, d74 = e6.touchData.earlier;
            if (r80.touches[0]) {
                var h57 = e6.projectIntoViewport(r80.touches[0].clientX, r80.touches[0].clientY);
                u72[0] = h57[0], u72[1] = h57[1];
            }
            if (r80.touches[1]) {
                h57 = e6.projectIntoViewport(r80.touches[1].clientX, r80.touches[1].clientY);
                u72[2] = h57[0], u72[3] = h57[1];
            }
            if (r80.touches[2]) {
                h57 = e6.projectIntoViewport(r80.touches[2].clientX, r80.touches[2].clientY);
                u72[4] = h57[0], u72[5] = h57[1];
            }
            if (i101 && i101.unactivate(), e6.touchData.cxt) {
                if (o89 = {
                    originalEvent: r80,
                    type: "cxttapend",
                    position: {
                        x: u72[0],
                        y: u72[1]
                    }
                }, i101 ? i101.emit(o89) : s80.emit(o89), !e6.touchData.cxtDragged) {
                    var p42 = {
                        originalEvent: r80,
                        type: "cxttap",
                        position: {
                            x: u72[0],
                            y: u72[1]
                        }
                    };
                    i101 ? i101.emit(p42) : s80.emit(p42);
                }
                return e6.touchData.start && (e6.touchData.start._private.grabbed = !1), e6.touchData.cxt = !1, e6.touchData.start = null, void e6.redraw();
            }
            if (!r80.touches[2] && s80.boxSelectionEnabled() && e6.touchData.selecting) {
                e6.touchData.selecting = !1;
                var f47 = s80.collection(e6.getAllInBox(a103[0], a103[1], a103[2], a103[3]));
                a103[0] = void 0, a103[1] = void 0, a103[2] = void 0, a103[3] = void 0, a103[4] = 0, e6.redrawHint("select", !0), s80.emit({
                    type: "boxend",
                    originalEvent: r80,
                    position: {
                        x: u72[0],
                        y: u72[1]
                    }
                });
                f47.emit("box").stdFilter(function(e7) {
                    return e7.selectable() && !e7.selected();
                }).select().emit("boxselect"), f47.nonempty() && e6.redrawHint("eles", !0), e6.redraw();
            }
            if (null != i101 && i101.unactivate(), r80.touches[2]) e6.data.bgActivePosistion = void 0, e6.redrawHint("select", !0);
            else if (r80.touches[1]) ;
            else if (r80.touches[0]) ;
            else if (!r80.touches[0]) {
                e6.data.bgActivePosistion = void 0, e6.redrawHint("select", !0);
                var g46 = e6.dragData.touchDragEles;
                if (null != i101) {
                    var v40 = i101._private.grabbed;
                    c62(g46), e6.redrawHint("drag", !0), e6.redrawHint("eles", !0), v40 && (i101.emit("freeon"), g46.emit("free"), e6.dragData.didDrag && (i101.emit("dragfreeon"), g46.emit("dragfree"))), n48(i101, [
                        "touchend",
                        "tapend",
                        "vmouseup",
                        "tapdragout"
                    ], r80, {
                        x: u72[0],
                        y: u72[1]
                    }), i101.unactivate(), e6.touchData.start = null;
                } else {
                    var y33 = e6.findNearestElement(u72[0], u72[1], !0, !0);
                    n48(y33, [
                        "touchend",
                        "tapend",
                        "vmouseup",
                        "tapdragout"
                    ], r80, {
                        x: u72[0],
                        y: u72[1]
                    });
                }
                var m33 = e6.touchData.startPosition[0] - u72[0], b31 = m33 * m33, x29 = e6.touchData.startPosition[1] - u72[1], w31 = (b31 + x29 * x29) * l90 * l90;
                e6.touchData.singleTouchMoved || (i101 || s80.$(":selected").unselect([
                    "tapunselect"
                ]), n48(i101, [
                    "tap",
                    "vclick"
                ], r80, {
                    x: u72[0],
                    y: u72[1]
                })), null != i101 && !e6.dragData.didDrag && i101._private.selectable && w31 < e6.touchTapThreshold2 && !e6.pinching && ("single" === s80.selectionType() ? (s80.$(t24).unmerge(i101).unselect([
                    "tapunselect"
                ]), i101.select([
                    "tapselect"
                ])) : i101.selected() ? i101.unselect([
                    "tapunselect"
                ]) : i101.select([
                    "tapselect"
                ]), e6.redrawHint("eles", !0)), e6.touchData.singleTouchMoved = !0;
            }
            for(var E33 = 0; E33 < u72.length; E33++)d74[E33] = u72[E33];
            e6.dragData.didDrag = !1, 0 === r80.touches.length && (e6.touchData.dragDelta = [], e6.touchData.startPosition = null, e6.touchData.startGPosition = null, e6.touchData.didSelect = !1), r80.touches.length < 2 && (1 === r80.touches.length && (e6.touchData.startGPosition = [
                r80.touches[0].clientX,
                r80.touches[0].clientY
            ]), e6.pinching = !1, e6.redrawHint("eles", !0), e6.redraw());
        }
    }, !1), "undefined" == typeof TouchEvent) {
        var V15 = [], F13 = function(e7) {
            return {
                clientX: e7.clientX,
                clientY: e7.clientY,
                force: 1,
                identifier: e7.pointerId,
                pageX: e7.pageX,
                pageY: e7.pageY,
                radiusX: e7.width / 2,
                radiusY: e7.height / 2,
                screenX: e7.screenX,
                screenY: e7.screenY,
                target: e7.target
            };
        }, q10 = function(e7) {
            V15.push(function(e8) {
                return {
                    event: e8,
                    touch: F13(e8)
                };
            }(e7));
        }, j8 = function(e7) {
            for(var t25 = 0; t25 < V15.length; t25++){
                if (V15[t25].event.pointerId === e7.pointerId) return void V15.splice(t25, 1);
            }
        }, Y7 = function(e7) {
            e7.touches = V15.map(function(e8) {
                return e8.touch;
            });
        }, X6 = function(e7) {
            return "mouse" === e7.pointerType || 4 === e7.pointerType;
        };
        e6.registerBinding(e6.container, "pointerdown", function(e7) {
            X6(e7) || (e7.preventDefault(), q10(e7), Y7(e7), I18(e7));
        }), e6.registerBinding(e6.container, "pointerup", function(e7) {
            X6(e7) || (j8(e7), Y7(e7), A15(e7));
        }), e6.registerBinding(e6.container, "pointercancel", function(e7) {
            X6(e7) || (j8(e7), Y7(e7), L16());
        }), e6.registerBinding(e6.container, "pointermove", function(e7) {
            X6(e7) || (e7.preventDefault(), (function(e8) {
                var t25 = V15.filter(function(t26) {
                    return t26.event.pointerId === e8.pointerId;
                })[0];
                t25.event = e8, t25.touch = F13(e8);
            })(e7), Y7(e7), z14(e7));
        });
    }
};
var is = {
    generatePolygon: function(e6, t24) {
        return this.nodeShapes[e6] = {
            renderer: this,
            name: e6,
            points: t24,
            draw: function(e7, t25, n48, r74, i95) {
                this.renderer.nodeShapeImpl("polygon", e7, t25, n48, r74, i95, this.points);
            },
            intersectLine: function(e7, t25, n48, r74, i95, a96, o84) {
                return It(i95, a96, this.points, e7, t25, n48 / 2, r74 / 2, o84);
            },
            checkPoint: function(e7, t25, n48, r74, i95, a96, o84) {
                return Pt(e7, t25, this.points, a96, o84, r74, i95, [
                    0,
                    -1
                ], n48);
            }
        };
    }
};
is.generateEllipse = function() {
    return this.nodeShapes.ellipse = {
        renderer: this,
        name: "ellipse",
        draw: function(e6, t24, n48, r74, i95) {
            this.renderer.nodeShapeImpl(this.name, e6, t24, n48, r74, i95);
        },
        intersectLine: function(e6, t24, n48, r74, i95, a96, o84) {
            return (function(e7, t25, n53, r80, i101, a104) {
                var o90 = n53 - e7, s73 = r80 - t25;
                o90 /= i101, s73 /= a104;
                var l87 = Math.sqrt(o90 * o90 + s73 * s73), u68 = l87 - 1;
                if (u68 < 0) return [];
                var c62 = u68 / l87;
                return [
                    (n53 - e7) * c62 + e7,
                    (r80 - t25) * c62 + t25
                ];
            })(i95, a96, e6, t24, n48 / 2 + o84, r74 / 2 + o84);
        },
        checkPoint: function(e6, t24, n48, r74, i95, a96, o84) {
            return Mt(e6, t24, r74, i95, a96, o84, n48);
        }
    };
}, is.generateRoundPolygon = function(e6, t24) {
    for(var n48 = new Array(2 * t24.length), r74 = 0; r74 < t24.length / 2; r74++){
        var i95 = 2 * r74, a96 = void 0;
        a96 = r74 < t24.length / 2 - 1 ? 2 * (r74 + 1) : 0, n48[4 * r74] = t24[i95], n48[4 * r74 + 1] = t24[i95 + 1];
        var o84 = t24[a96] - t24[i95], s73 = t24[a96 + 1] - t24[i95 + 1], l87 = Math.sqrt(o84 * o84 + s73 * s73);
        n48[4 * r74 + 2] = o84 / l87, n48[4 * r74 + 3] = s73 / l87;
    }
    return this.nodeShapes[e6] = {
        renderer: this,
        name: e6,
        points: n48,
        draw: function(e7, t25, n53, r80, i101) {
            this.renderer.nodeShapeImpl("round-polygon", e7, t25, n53, r80, i101, this.points);
        },
        intersectLine: function(e7, t25, n53, r80, i101, a104, o90) {
            return (function(e8, t26, n54, r81, i102, a105, o91, s81) {
                for(var l91, u68 = [], c62 = new Array(n54.length), d68 = a105 / 2, h53 = o91 / 2, p36 = Vt(a105, o91), f41 = 0; f41 < n54.length / 4; f41++){
                    var g40, v34 = void 0;
                    v34 = 0 === f41 ? n54.length - 2 : 4 * f41 - 2, g40 = 4 * f41 + 2;
                    var y34 = r81 + d68 * n54[4 * f41], m32 = i102 + h53 * n54[4 * f41 + 1], b30 = -n54[v34] * n54[g40] - n54[v34 + 1] * n54[g40 + 1], x28 = p36 / Math.tan(Math.acos(b30) / 2), w30 = y34 - x28 * n54[v34], E32 = m32 - x28 * n54[v34 + 1], k29 = y34 + x28 * n54[g40], C26 = m32 + x28 * n54[g40 + 1];
                    0 === f41 ? (c62[n54.length - 2] = w30, c62[n54.length - 1] = E32) : (c62[4 * f41 - 2] = w30, c62[4 * f41 - 1] = E32), c62[4 * f41] = k29, c62[4 * f41 + 1] = C26;
                    var S27 = n54[v34 + 1], P28 = -n54[v34];
                    S27 * n54[g40] + P28 * n54[g40 + 1] < 0 && (S27 *= -1, P28 *= -1), 0 !== (l91 = Bt(e8, t26, r81, i102, w30 + S27 * p36, E32 + P28 * p36, p36)).length && u68.push(l91[0], l91[1]);
                }
                for(var D23 = 0; D23 < c62.length / 4; D23++)0 !== (l91 = Nt(e8, t26, r81, i102, c62[4 * D23], c62[4 * D23 + 1], c62[4 * D23 + 2], c62[4 * D23 + 3], !1)).length && u68.push(l91[0], l91[1]);
                if (u68.length > 2) {
                    for(var T23 = [
                        u68[0],
                        u68[1]
                    ], M23 = Math.pow(T23[0] - e8, 2) + Math.pow(T23[1] - t26, 2), B19 = 1; B19 < u68.length / 2; B19++){
                        var _20 = Math.pow(u68[2 * B19] - e8, 2) + Math.pow(u68[2 * B19 + 1] - t26, 2);
                        _20 <= M23 && (T23[0] = u68[2 * B19], T23[1] = u68[2 * B19 + 1], M23 = _20);
                    }
                    return T23;
                }
                return u68;
            })(i101, a104, this.points, e7, t25, n53, r80);
        },
        checkPoint: function(e7, t25, n53, r80, i101, a104, o90) {
            return (function(e8, t26, n54, r81, i102, a105, o91) {
                for(var s81 = new Array(n54.length), l91 = a105 / 2, u68 = o91 / 2, c62 = Vt(a105, o91), d68 = c62 * c62, h53 = 0; h53 < n54.length / 4; h53++){
                    var p36, f41 = void 0;
                    f41 = 0 === h53 ? n54.length - 2 : 4 * h53 - 2, p36 = 4 * h53 + 2;
                    var g47 = r81 + l91 * n54[4 * h53], v41 = i102 + u68 * n54[4 * h53 + 1], y35 = -n54[f41] * n54[p36] - n54[f41 + 1] * n54[p36 + 1], m34 = c62 / Math.tan(Math.acos(y35) / 2), b32 = g47 - m34 * n54[f41], x30 = v41 - m34 * n54[f41 + 1], w32 = g47 + m34 * n54[p36], E34 = v41 + m34 * n54[p36 + 1];
                    s81[4 * h53] = b32, s81[4 * h53 + 1] = x30, s81[4 * h53 + 2] = w32, s81[4 * h53 + 3] = E34;
                    var k30 = n54[f41 + 1], C27 = -n54[f41];
                    k30 * n54[p36] + C27 * n54[p36 + 1] < 0 && (k30 *= -1, C27 *= -1);
                    var S29 = b32 + k30 * c62, P29 = x30 + C27 * c62;
                    if (Math.pow(S29 - e8, 2) + Math.pow(P29 - t26, 2) <= d68) return !0;
                }
                return St(e8, t26, s81);
            })(e7, t25, this.points, a104, o90, r80, i101);
        }
    };
}, is.generateRoundRectangle = function() {
    return this.nodeShapes["round-rectangle"] = this.nodeShapes.roundrectangle = {
        renderer: this,
        name: "round-rectangle",
        points: Lt(4, 0),
        draw: function(e6, t24, n48, r74, i101) {
            this.renderer.nodeShapeImpl(this.name, e6, t24, n48, r74, i101);
        },
        intersectLine: function(e6, t24, n48, r74, i101, a104, o90) {
            return xt(i101, a104, e6, t24, n48, r74, o90);
        },
        checkPoint: function(e6, t24, n48, r74, i101, a104, o90) {
            var s81 = Rt(r74, i101), l91 = 2 * s81;
            return !!Pt(e6, t24, this.points, a104, o90, r74, i101 - l91, [
                0,
                -1
            ], n48) || !!Pt(e6, t24, this.points, a104, o90, r74 - l91, i101, [
                0,
                -1
            ], n48) || !!Mt(e6, t24, l91, l91, a104 - r74 / 2 + s81, o90 - i101 / 2 + s81, n48) || !!Mt(e6, t24, l91, l91, a104 + r74 / 2 - s81, o90 - i101 / 2 + s81, n48) || !!Mt(e6, t24, l91, l91, a104 + r74 / 2 - s81, o90 + i101 / 2 - s81, n48) || !!Mt(e6, t24, l91, l91, a104 - r74 / 2 + s81, o90 + i101 / 2 - s81, n48);
        }
    };
}, is.generateCutRectangle = function() {
    return this.nodeShapes["cut-rectangle"] = this.nodeShapes.cutrectangle = {
        renderer: this,
        name: "cut-rectangle",
        cornerLength: 8,
        points: Lt(4, 0),
        draw: function(e6, t24, n48, r74, i101) {
            this.renderer.nodeShapeImpl(this.name, e6, t24, n48, r74, i101);
        },
        generateCutTrianglePts: function(e6, t24, n48, r74) {
            var i101 = this.cornerLength, a104 = t24 / 2, o90 = e6 / 2, s81 = n48 - o90, l91 = n48 + o90, u68 = r74 - a104, c62 = r74 + a104;
            return {
                topLeft: [
                    s81,
                    u68 + i101,
                    s81 + i101,
                    u68,
                    s81 + i101,
                    u68 + i101
                ],
                topRight: [
                    l91 - i101,
                    u68,
                    l91,
                    u68 + i101,
                    l91 - i101,
                    u68 + i101
                ],
                bottomRight: [
                    l91,
                    c62 - i101,
                    l91 - i101,
                    c62,
                    l91 - i101,
                    c62 - i101
                ],
                bottomLeft: [
                    s81 + i101,
                    c62,
                    s81,
                    c62 - i101,
                    s81 + i101,
                    c62 - i101
                ]
            };
        },
        intersectLine: function(e6, t24, n48, r74, i101, a104, o90) {
            var s81 = this.generateCutTrianglePts(n48 + 2 * o90, r74 + 2 * o90, e6, t24), l91 = [].concat.apply([], [
                s81.topLeft.splice(0, 4),
                s81.topRight.splice(0, 4),
                s81.bottomRight.splice(0, 4),
                s81.bottomLeft.splice(0, 4)
            ]);
            return It(i101, a104, l91, e6, t24);
        },
        checkPoint: function(e6, t24, n48, r74, i101, a104, o90) {
            if (Pt(e6, t24, this.points, a104, o90, r74, i101 - 2 * this.cornerLength, [
                0,
                -1
            ], n48)) return !0;
            if (Pt(e6, t24, this.points, a104, o90, r74 - 2 * this.cornerLength, i101, [
                0,
                -1
            ], n48)) return !0;
            var s81 = this.generateCutTrianglePts(r74, i101, a104, o90);
            return St(e6, t24, s81.topLeft) || St(e6, t24, s81.topRight) || St(e6, t24, s81.bottomRight) || St(e6, t24, s81.bottomLeft);
        }
    };
}, is.generateBarrel = function() {
    return this.nodeShapes.barrel = {
        renderer: this,
        name: "barrel",
        points: Lt(4, 0),
        draw: function(e6, t24, n48, r74, i101) {
            this.renderer.nodeShapeImpl(this.name, e6, t24, n48, r74, i101);
        },
        intersectLine: function(e6, t24, n48, r74, i101, a104, o90) {
            var s81 = this.generateBarrelBezierPts(n48 + 2 * o90, r74 + 2 * o90, e6, t24), l91 = function(e7) {
                var t25 = ct({
                    x: e7[0],
                    y: e7[1]
                }, {
                    x: e7[2],
                    y: e7[3]
                }, {
                    x: e7[4],
                    y: e7[5]
                }, 0.15), n53 = ct({
                    x: e7[0],
                    y: e7[1]
                }, {
                    x: e7[2],
                    y: e7[3]
                }, {
                    x: e7[4],
                    y: e7[5]
                }, 0.5), r80 = ct({
                    x: e7[0],
                    y: e7[1]
                }, {
                    x: e7[2],
                    y: e7[3]
                }, {
                    x: e7[4],
                    y: e7[5]
                }, 0.85);
                return [
                    e7[0],
                    e7[1],
                    t25.x,
                    t25.y,
                    n53.x,
                    n53.y,
                    r80.x,
                    r80.y,
                    e7[4],
                    e7[5]
                ];
            }, u68 = [].concat(l91(s81.topLeft), l91(s81.topRight), l91(s81.bottomRight), l91(s81.bottomLeft));
            return It(i101, a104, u68, e6, t24);
        },
        generateBarrelBezierPts: function(e6, t24, n48, r74) {
            var i101 = t24 / 2, a104 = e6 / 2, o90 = n48 - a104, s81 = n48 + a104, l91 = r74 - i101, u68 = r74 + i101, c62 = Ft(e6, t24), d68 = c62.heightOffset, h53 = c62.widthOffset, p43 = c62.ctrlPtOffsetPct * e6, f48 = {
                topLeft: [
                    o90,
                    l91 + d68,
                    o90 + p43,
                    l91,
                    o90 + h53,
                    l91
                ],
                topRight: [
                    s81 - h53,
                    l91,
                    s81 - p43,
                    l91,
                    s81,
                    l91 + d68
                ],
                bottomRight: [
                    s81,
                    u68 - d68,
                    s81 - p43,
                    u68,
                    s81 - h53,
                    u68
                ],
                bottomLeft: [
                    o90 + h53,
                    u68,
                    o90 + p43,
                    u68,
                    o90,
                    u68 - d68
                ]
            };
            return f48.topLeft.isTop = !0, f48.topRight.isTop = !0, f48.bottomLeft.isBottom = !0, f48.bottomRight.isBottom = !0, f48;
        },
        checkPoint: function(e6, t24, n48, r74, i101, a104, o90) {
            var s81 = Ft(r74, i101), l91 = s81.heightOffset, u68 = s81.widthOffset;
            if (Pt(e6, t24, this.points, a104, o90, r74, i101 - 2 * l91, [
                0,
                -1
            ], n48)) return !0;
            if (Pt(e6, t24, this.points, a104, o90, r74 - 2 * u68, i101, [
                0,
                -1
            ], n48)) return !0;
            for(var c62 = this.generateBarrelBezierPts(r74, i101, a104, o90), d68 = function(e7, t25, n53) {
                var r80, i102, a105 = n53[4], o91 = n53[2], s82 = n53[0], l92 = n53[5], u73 = n53[1], c65 = Math.min(a105, s82), d75 = Math.max(a105, s82), h53 = Math.min(l92, u73), p43 = Math.max(l92, u73);
                if (c65 <= e7 && e7 <= d75 && h53 <= t25 && t25 <= p43) {
                    var f48 = [
                        (r80 = a105) - 2 * (i102 = o91) + s82,
                        2 * (i102 - r80),
                        r80
                    ], g48 = (function(e8, t26, n54, r81) {
                        var i103 = t26 * t26 - 4 * e8 * (n54 -= r81);
                        if (i103 < 0) return [];
                        var a106 = Math.sqrt(i103), o92 = 2 * e8;
                        return [
                            (-t26 + a106) / o92,
                            (-t26 - a106) / o92
                        ];
                    })(f48[0], f48[1], f48[2], e7).filter(function(e8) {
                        return 0 <= e8 && e8 <= 1;
                    });
                    if (g48.length > 0) return g48[0];
                }
                return null;
            }, h53 = Object.keys(c62), p43 = 0; p43 < h53.length; p43++){
                var f49 = c62[h53[p43]], g49 = d68(e6, t24, f49);
                if (null != g49) {
                    var v42 = f49[5], y36 = f49[3], m35 = f49[1], b33 = ut(v42, y36, m35, g49);
                    if (f49.isTop && b33 <= t24) return !0;
                    if (f49.isBottom && t24 <= b33) return !0;
                }
            }
            return !1;
        }
    };
}, is.generateBottomRoundrectangle = function() {
    return this.nodeShapes["bottom-round-rectangle"] = this.nodeShapes.bottomroundrectangle = {
        renderer: this,
        name: "bottom-round-rectangle",
        points: Lt(4, 0),
        draw: function(e6, t24, n48, r74, i101) {
            this.renderer.nodeShapeImpl(this.name, e6, t24, n48, r74, i101);
        },
        intersectLine: function(e6, t24, n48, r74, i101, a104, o90) {
            var s81 = t24 - (r74 / 2 + o90), l91 = Nt(i101, a104, e6, t24, e6 - (n48 / 2 + o90), s81, e6 + (n48 / 2 + o90), s81, !1);
            return l91.length > 0 ? l91 : xt(i101, a104, e6, t24, n48, r74, o90);
        },
        checkPoint: function(e6, t24, n48, r74, i101, a104, o90) {
            var s81 = Rt(r74, i101), l91 = 2 * s81;
            if (Pt(e6, t24, this.points, a104, o90, r74, i101 - l91, [
                0,
                -1
            ], n48)) return !0;
            if (Pt(e6, t24, this.points, a104, o90, r74 - l91, i101, [
                0,
                -1
            ], n48)) return !0;
            var u68 = r74 / 2 + 2 * n48, c62 = i101 / 2 + 2 * n48;
            return !!St(e6, t24, [
                a104 - u68,
                o90 - c62,
                a104 - u68,
                o90,
                a104 + u68,
                o90,
                a104 + u68,
                o90 - c62
            ]) || !!Mt(e6, t24, l91, l91, a104 + r74 / 2 - s81, o90 + i101 / 2 - s81, n48) || !!Mt(e6, t24, l91, l91, a104 - r74 / 2 + s81, o90 + i101 / 2 - s81, n48);
        }
    };
}, is.registerNodeShapes = function() {
    var e6 = this.nodeShapes = {
    }, t24 = this;
    this.generateEllipse(), this.generatePolygon("triangle", Lt(3, 0)), this.generateRoundPolygon("round-triangle", Lt(3, 0)), this.generatePolygon("rectangle", Lt(4, 0)), e6.square = e6.rectangle, this.generateRoundRectangle(), this.generateCutRectangle(), this.generateBarrel(), this.generateBottomRoundrectangle();
    var n48 = [
        0,
        1,
        1,
        0,
        0,
        -1,
        -1,
        0
    ];
    this.generatePolygon("diamond", n48), this.generateRoundPolygon("round-diamond", n48), this.generatePolygon("pentagon", Lt(5, 0)), this.generateRoundPolygon("round-pentagon", Lt(5, 0)), this.generatePolygon("hexagon", Lt(6, 0)), this.generateRoundPolygon("round-hexagon", Lt(6, 0)), this.generatePolygon("heptagon", Lt(7, 0)), this.generateRoundPolygon("round-heptagon", Lt(7, 0)), this.generatePolygon("octagon", Lt(8, 0)), this.generateRoundPolygon("round-octagon", Lt(8, 0));
    var r74 = new Array(20), i101 = Ot(5, 0), a104 = Ot(5, Math.PI / 5), o90 = 0.5 * (3 - Math.sqrt(5));
    o90 *= 1.57;
    for(var s81 = 0; s81 < a104.length / 2; s81++)a104[2 * s81] *= o90, a104[2 * s81 + 1] *= o90;
    for(s81 = 0; s81 < 5; s81++)r74[4 * s81] = i101[2 * s81], r74[4 * s81 + 1] = i101[2 * s81 + 1], r74[4 * s81 + 2] = a104[2 * s81], r74[4 * s81 + 3] = a104[2 * s81 + 1];
    r74 = At(r74), this.generatePolygon("star", r74), this.generatePolygon("vee", [
        -1,
        -1,
        0,
        -0.333,
        1,
        -1,
        0,
        1
    ]), this.generatePolygon("rhomboid", [
        -1,
        -1,
        0.333,
        -1,
        1,
        1,
        -0.333,
        1
    ]), this.nodeShapes.concavehexagon = this.generatePolygon("concave-hexagon", [
        -1,
        -0.95,
        -0.75,
        0,
        -1,
        0.95,
        1,
        0.95,
        0.75,
        0,
        1,
        -0.95
    ]);
    var l91 = [
        -1,
        -1,
        0.25,
        -1,
        1,
        0,
        0.25,
        1,
        -1,
        1
    ];
    this.generatePolygon("tag", l91), this.generateRoundPolygon("round-tag", l91), e6.makePolygon = function(e7) {
        var n53, r80 = "polygon-" + e7.join("$");
        return (n53 = this[r80]) ? n53 : t24.generatePolygon(r80, e7);
    };
};
var as = {
    timeToRender: function() {
        return this.redrawTotalTime / this.redrawCount;
    },
    redraw: function(e6) {
        e6 = e6 || Te();
        var t24 = this;
        (void 0) === t24.averageRedrawTime && (t24.averageRedrawTime = 0), (void 0) === t24.lastRedrawTime && (t24.lastRedrawTime = 0), (void 0) === t24.lastDrawTime && (t24.lastDrawTime = 0), t24.requestedFrame = !0, t24.renderOptions = e6;
    },
    beforeRender: function(e6, t24) {
        if (!this.destroyed) {
            null == t24 && Ee("Priority is not optional for beforeRender");
            var n48 = this.beforeRenderCallbacks;
            n48.push({
                fn: e6,
                priority: t24
            }), n48.sort(function(e7, t25) {
                return t25.priority - e7.priority;
            });
        }
    }
}, os = function(e6, t24, n53) {
    for(var r74 = e6.beforeRenderCallbacks, i101 = 0; i101 < r74.length; i101++)r74[i101].fn(t24, n53);
};
as.startRenderLoop = function() {
    var e6 = this, t24 = e6.cy;
    if (!e6.renderLoopStarted) {
        e6.renderLoopStarted = !0;
        re(function n53(r74) {
            if (!e6.destroyed) {
                if (t24.batching()) ;
                else if (e6.requestedFrame && !e6.skipFrame) {
                    os(e6, !0, r74);
                    var i101 = ie();
                    e6.render(e6.renderOptions);
                    var a104 = e6.lastDrawTime = ie();
                    (void 0) === e6.averageRedrawTime && (e6.averageRedrawTime = a104 - i101), (void 0) === e6.redrawCount && (e6.redrawCount = 0), e6.redrawCount++, (void 0) === e6.redrawTotalTime && (e6.redrawTotalTime = 0);
                    var o90 = a104 - i101;
                    e6.redrawTotalTime += o90, e6.lastRedrawTime = o90, e6.averageRedrawTime = e6.averageRedrawTime / 2 + o90 / 2, e6.requestedFrame = !1;
                } else os(e6, !1, r74);
                e6.skipFrame = !1, re(n53);
            }
        });
    }
};
var ss = function(e6) {
    this.init(e6);
}, ls = ss.prototype;
ls.clientFunctions = [
    "redrawHint",
    "render",
    "renderTo",
    "matchCanvasSize",
    "nodeShapeImpl",
    "arrowShapeImpl"
], ls.init = function(e6) {
    var t24 = this;
    t24.options = e6, t24.cy = e6.cy;
    var n53 = t24.container = e6.cy.container();
    if (o) {
        var r74 = o.document, i102 = r74.head, a105 = "__________cytoscape_container", s81 = null != r74.getElementById("__________cytoscape_stylesheet");
        if (n53.className.indexOf(a105) < 0 && (n53.className = (n53.className || "") + " " + a105), !s81) {
            var l91 = r74.createElement("style");
            l91.id = "__________cytoscape_stylesheet", l91.innerHTML = "." + a105 + " { position: relative; }", i102.insertBefore(l91, i102.children[0]);
        }
        "static" === o.getComputedStyle(n53).getPropertyValue("position") && Ce("A Cytoscape container has style position:static and so can not use UI extensions properly");
    }
    t24.selection = [
        void 0,
        void 0,
        void 0,
        void 0,
        0
    ], t24.bezierProjPcts = [
        0.05,
        0.225,
        0.4,
        0.5,
        0.6,
        0.775,
        0.95
    ], t24.hoverData = {
        down: null,
        last: null,
        downTime: null,
        triggerMode: null,
        dragging: !1,
        initialPan: [
            null,
            null
        ],
        capture: !1
    }, t24.dragData = {
        possibleDragElements: []
    }, t24.touchData = {
        start: null,
        capture: !1,
        startPosition: [
            null,
            null,
            null,
            null,
            null,
            null
        ],
        singleTouchStartTime: null,
        singleTouchMoved: !0,
        now: [
            null,
            null,
            null,
            null,
            null,
            null
        ],
        earlier: [
            null,
            null,
            null,
            null,
            null,
            null
        ]
    }, t24.redraws = 0, t24.showFps = e6.showFps, t24.debug = e6.debug, t24.hideEdgesOnViewport = e6.hideEdgesOnViewport, t24.textureOnViewport = e6.textureOnViewport, t24.wheelSensitivity = e6.wheelSensitivity, t24.motionBlurEnabled = e6.motionBlur, t24.forcedPixelRatio = y1(e6.pixelRatio) ? e6.pixelRatio : null, t24.motionBlur = e6.motionBlur, t24.motionBlurOpacity = e6.motionBlurOpacity, t24.motionBlurTransparency = 1 - t24.motionBlurOpacity, t24.motionBlurPxRatio = 1, t24.mbPxRBlurry = 1, t24.minMbLowQualFrames = 4, t24.fullQualityMb = !1, t24.clearedForMotionBlur = [], t24.desktopTapThreshold = e6.desktopTapThreshold, t24.desktopTapThreshold2 = e6.desktopTapThreshold * e6.desktopTapThreshold, t24.touchTapThreshold = e6.touchTapThreshold, t24.touchTapThreshold2 = e6.touchTapThreshold * e6.touchTapThreshold, t24.tapholdDuration = 500, t24.bindings = [], t24.beforeRenderCallbacks = [], t24.beforeRenderPriorities = {
        animations: 400,
        eleCalcs: 300,
        eleTxrDeq: 200,
        lyrTxrDeq: 150,
        lyrTxrSkip: 100
    }, t24.registerNodeShapes(), t24.registerArrowShapes(), t24.registerCalculationListeners();
}, ls.notify = function(e6, t24) {
    var n53 = this, r80 = n53.cy;
    this.destroyed || ("init" !== e6 ? "destroy" !== e6 ? (("add" === e6 || "remove" === e6 || "move" === e6 && r80.hasCompoundNodes() || "load" === e6 || "zorder" === e6 || "mount" === e6) && n53.invalidateCachedZSortedEles(), "viewport" === e6 && n53.redrawHint("select", !0), "load" !== e6 && "resize" !== e6 && "mount" !== e6 || (n53.invalidateContainerClientCoordsCache(), n53.matchCanvasSize(n53.container)), n53.redrawHint("eles", !0), n53.redrawHint("drag", !0), this.startRenderLoop(), this.redraw()) : n53.destroy() : n53.load());
}, ls.destroy = function() {
    var e6 = this;
    e6.destroyed = !0, e6.cy.stopAnimationLoop();
    for(var t24 = 0; t24 < e6.bindings.length; t24++){
        var n53 = e6.bindings[t24], r80 = n53.target;
        (r80.off || r80.removeEventListener).apply(r80, n53.args);
    }
    if (e6.bindings = [], e6.beforeRenderCallbacks = [], e6.onUpdateEleCalcsFns = [], e6.removeObserver && e6.removeObserver.disconnect(), e6.styleObserver && e6.styleObserver.disconnect(), e6.resizeObserver && e6.resizeObserver.disconnect(), e6.labelCalcDiv) try {
        document.body.removeChild(e6.labelCalcDiv);
    } catch (e7) {
    }
}, ls.isHeadless = function() {
    return !1;
}, [
    Fo,
    ts,
    ns,
    rs,
    is,
    as
].forEach(function(e6) {
    I10(ls, e6);
});
var us = function(e6) {
    return function() {
        var t24 = this, n54 = this.renderer;
        if (!t24.dequeueingSetup) {
            t24.dequeueingSetup = !0;
            var r81 = J(function() {
                n54.redrawHint("eles", !0), n54.redrawHint("drag", !0), n54.redraw();
            }, e6.deqRedrawThreshold), i103 = e6.priority || we;
            n54.beforeRender(function(i104, a106) {
                var o91 = ie(), s82 = n54.averageRedrawTime, l92 = n54.lastRedrawTime, u68 = [], c62 = n54.cy.extent(), d68 = n54.getPixelRatio();
                for(i104 || n54.flushRenderedStyleQueue();;){
                    var h53 = ie(), p43 = h53 - o91, f50 = h53 - a106;
                    if (l92 < 1000 / 60) {
                        var g50 = 1000 / 60 - (i104 ? s82 : 0);
                        if (f50 >= e6.deqFastCost * g50) break;
                    } else if (i104) {
                        if (p43 >= e6.deqCost * l92 || p43 >= e6.deqAvgCost * s82) break;
                    } else if (f50 >= e6.deqNoDrawCost * (1000 / 60)) break;
                    var v43 = e6.deq(t24, d68, c62);
                    if (!(v43.length > 0)) break;
                    for(var y37 = 0; y37 < v43.length; y37++)u68.push(v43[y37]);
                }
                u68.length > 0 && (e6.onDeqd(t24, u68), !i104 && e6.shouldRedraw(t24, u68, d68, c62) && r81());
            }, i103(t24));
        }
    };
}, cs = function() {
    function e6(n54) {
        var r82 = arguments.length > 1 && (void 0) !== arguments[1] ? arguments[1] : be;
        t28(this, e6), this.idsByKey = new ze, this.keyForId = new ze, this.cachesByLvl = new ze, this.lvls = [], this.getKey = n54, this.doesEleInvalidateKey = r82;
    }
    return r84(e6, [
        {
            key: "getIdsFor",
            value: function(e7) {
                null == e7 && Ee("Can not get id list for null key");
                var t24 = this.idsByKey, n54 = this.idsByKey.get(e7);
                return n54 || (n54 = new Ae, t24.set(e7, n54)), n54;
            }
        },
        {
            key: "addIdForKey",
            value: function(e7, t24) {
                null != e7 && this.getIdsFor(e7).add(t24);
            }
        },
        {
            key: "deleteIdForKey",
            value: function(e7, t24) {
                null != e7 && this.getIdsFor(e7).delete(t24);
            }
        },
        {
            key: "getNumberOfIdsForKey",
            value: function(e7) {
                return null == e7 ? 0 : this.getIdsFor(e7).size;
            }
        },
        {
            key: "updateKeyMappingFor",
            value: function(e7) {
                var t24 = e7.id(), n54 = this.keyForId.get(t24), r82 = this.getKey(e7);
                this.deleteIdForKey(n54, t24), this.addIdForKey(r82, t24), this.keyForId.set(t24, r82);
            }
        },
        {
            key: "deleteKeyMappingFor",
            value: function(e7) {
                var t24 = e7.id(), n54 = this.keyForId.get(t24);
                this.deleteIdForKey(n54, t24), this.keyForId.delete(t24);
            }
        },
        {
            key: "keyHasChangedFor",
            value: function(e7) {
                var t24 = e7.id();
                return this.keyForId.get(t24) !== this.getKey(e7);
            }
        },
        {
            key: "isInvalid",
            value: function(e7) {
                return this.keyHasChangedFor(e7) || this.doesEleInvalidateKey(e7);
            }
        },
        {
            key: "getCachesAt",
            value: function(e7) {
                var t24 = this.cachesByLvl, n54 = this.lvls, r82 = t24.get(e7);
                return r82 || (r82 = new ze, t24.set(e7, r82), n54.push(e7)), r82;
            }
        },
        {
            key: "getCache",
            value: function(e7, t24) {
                return this.getCachesAt(t24).get(e7);
            }
        },
        {
            key: "get",
            value: function(e7, t24) {
                var n54 = this.getKey(e7), r82 = this.getCache(n54, t24);
                return null != r82 && this.updateKeyMappingFor(e7), r82;
            }
        },
        {
            key: "getForCachedKey",
            value: function(e7, t24) {
                var n54 = this.keyForId.get(e7.id());
                return this.getCache(n54, t24);
            }
        },
        {
            key: "hasCache",
            value: function(e7, t24) {
                return this.getCachesAt(t24).has(e7);
            }
        },
        {
            key: "has",
            value: function(e7, t24) {
                var n54 = this.getKey(e7);
                return this.hasCache(n54, t24);
            }
        },
        {
            key: "setCache",
            value: function(e7, t24, n54) {
                n54.key = e7, this.getCachesAt(t24).set(e7, n54);
            }
        },
        {
            key: "set",
            value: function(e7, t24, n54) {
                var r82 = this.getKey(e7);
                this.setCache(r82, t24, n54), this.updateKeyMappingFor(e7);
            }
        },
        {
            key: "deleteCache",
            value: function(e7, t24) {
                this.getCachesAt(t24).delete(e7);
            }
        },
        {
            key: "delete",
            value: function(e7, t24) {
                var n54 = this.getKey(e7);
                this.deleteCache(n54, t24);
            }
        },
        {
            key: "invalidateKey",
            value: function(e7) {
                var t24 = this;
                this.lvls.forEach(function(n54) {
                    return t24.deleteCache(e7, n54);
                });
            }
        },
        {
            key: "invalidate",
            value: function(e7) {
                var t24 = e7.id(), n54 = this.keyForId.get(t24);
                this.deleteKeyMappingFor(e7);
                var r82 = this.doesEleInvalidateKey(e7);
                return r82 && this.invalidateKey(n54), r82 || 0 === this.getNumberOfIdsForKey(n54);
            }
        }
    ]), e6;
}(), ds = {
    dequeue: "dequeue",
    downscale: "downscale",
    highQuality: "highQuality"
}, hs = Me({
    getKey: null,
    doesEleInvalidateKey: be,
    drawElement: null,
    getBoundingBox: null,
    getRotationPoint: null,
    getRotationOffset: null,
    isVisible: me,
    allowEdgeTxrCaching: !0,
    allowParentTxrCaching: !0
}), ps = function(e6, t24) {
    this.renderer = e6, this.onDequeues = [];
    var n54 = hs(t24);
    I10(this, n54), this.lookup = new cs(n54.getKey, n54.doesEleInvalidateKey), this.setupDequeueing();
}, fs = ps.prototype;
fs.reasons = ds, fs.getTextureQueue = function(e6) {
    return this.eleImgCaches = this.eleImgCaches || {
    }, this.eleImgCaches[e6] = this.eleImgCaches[e6] || [];
}, fs.getRetiredTextureQueue = function(e6) {
    var t24 = this.eleImgCaches.retired = this.eleImgCaches.retired || {
    };
    return t24[e6] = t24[e6] || [];
}, fs.getElementQueue = function() {
    return this.eleCacheQueue = this.eleCacheQueue || new Fe(function(e6, t24) {
        return t24.reqs - e6.reqs;
    });
}, fs.getElementKeyToQueue = function() {
    return this.eleKeyToCacheQueue = this.eleKeyToCacheQueue || {
    };
}, fs.getElement = function(e6, t24, n54, r82, i104) {
    var a106 = this, o91 = this.renderer, s82 = o91.cy.zoom(), l92 = this.lookup;
    if (!t24 || 0 === t24.w || 0 === t24.h || isNaN(t24.w) || isNaN(t24.h) || !e6.visible() || e6.removed()) return null;
    if (!a106.allowEdgeTxrCaching && e6.isEdge() || !a106.allowParentTxrCaching && e6.isParent()) return null;
    if (null == r82 && (r82 = Math.ceil(it(s82 * n54))), r82 < -4) r82 = -4;
    else if (s82 >= 7.99 || r82 > 3) return null;
    var u68 = Math.pow(2, r82), c62 = t24.h * u68, d68 = t24.w * u68, h58 = o91.eleTextBiggerThanMin(e6, u68);
    if (!this.isVisible(e6, h58)) return null;
    var p44, f51 = l92.get(e6, r82);
    if (f51 && f51.invalidated && (f51.invalidated = !1, f51.texture.invalidatedWidth -= f51.width), f51) return f51;
    if (p44 = c62 <= 25 ? 25 : c62 <= 50 ? 50 : 50 * Math.ceil(c62 / 50), c62 > 1024 || d68 > 1024) return null;
    var g51 = a106.getTextureQueue(p44), v44 = g51[g51.length - 2], y38 = function() {
        return a106.recycleTexture(p44, d68) || a106.addTexture(p44, d68);
    };
    v44 || (v44 = g51[g51.length - 1]), v44 || (v44 = y38()), v44.width - v44.usedWidth < d68 && (v44 = y38());
    for(var m36, b34 = function(e7) {
        return e7 && e7.scaledLabelShown === h58;
    }, x31 = i104 && i104 === ds.dequeue, w33 = i104 && i104 === ds.highQuality, E35 = i104 && i104 === ds.downscale, k31 = r82 + 1; k31 <= 3; k31++){
        var C28 = l92.get(e6, k31);
        if (C28) {
            m36 = C28;
            break;
        }
    }
    var S30 = m36 && m36.level === r82 + 1 ? m36 : null, P30 = function() {
        v44.context.drawImage(S30.texture.canvas, S30.x, 0, S30.width, S30.height, v44.usedWidth, 0, d68, c62);
    };
    if (v44.context.setTransform(1, 0, 0, 1, 0, 0), v44.context.clearRect(v44.usedWidth, 0, d68, p44), b34(S30)) P30();
    else if (b34(m36)) {
        if (!w33) return a106.queueElement(e6, m36.level - 1), m36;
        for(var D23 = m36.level; D23 > r82; D23--)S30 = a106.getElement(e6, t24, n54, D23, ds.downscale);
        P30();
    } else {
        var T24;
        if (!x31 && !w33 && !E35) for(var M25 = r82 - 1; M25 >= -4; M25--){
            var B21 = l92.get(e6, M25);
            if (B21) {
                T24 = B21;
                break;
            }
        }
        if (b34(T24)) return a106.queueElement(e6, r82), T24;
        v44.context.translate(v44.usedWidth, 0), v44.context.scale(u68, u68), this.drawElement(v44.context, e6, t24, h58, !1), v44.context.scale(1 / u68, 1 / u68), v44.context.translate(-v44.usedWidth, 0);
    }
    return f51 = {
        x: v44.usedWidth,
        texture: v44,
        level: r82,
        scale: u68,
        width: d68,
        height: c62,
        scaledLabelShown: h58
    }, v44.usedWidth += Math.ceil(d68 + 8), v44.eleCaches.push(f51), l92.set(e6, r82, f51), a106.checkTextureFullness(v44), f51;
}, fs.invalidateElements = function(e6) {
    for(var t24 = 0; t24 < e6.length; t24++)this.invalidateElement(e6[t24]);
}, fs.invalidateElement = function(e6) {
    var t24 = this.lookup, n54 = [];
    if (t24.isInvalid(e6)) {
        for(var r82 = -4; r82 <= 3; r82++){
            var i104 = t24.getForCachedKey(e6, r82);
            i104 && n54.push(i104);
        }
        if (t24.invalidate(e6)) for(var a106 = 0; a106 < n54.length; a106++){
            var o91 = n54[a106], s82 = o91.texture;
            s82.invalidatedWidth += o91.width, o91.invalidated = !0, this.checkTextureUtility(s82);
        }
        this.removeFromQueue(e6);
    }
}, fs.checkTextureUtility = function(e6) {
    e6.invalidatedWidth >= 0.2 * e6.width && this.retireTexture(e6);
}, fs.checkTextureFullness = function(e6) {
    var t24 = this.getTextureQueue(e6.height);
    e6.usedWidth / e6.width > 0.8 && e6.fullnessChecks >= 10 ? Be(t24, e6) : e6.fullnessChecks++;
}, fs.retireTexture = function(e6) {
    var t24 = e6.height, n54 = this.getTextureQueue(t24), r83 = this.lookup;
    Be(n54, e6), e6.retired = !0;
    for(var i105 = e6.eleCaches, a107 = 0; a107 < i105.length; a107++){
        var o92 = i105[a107];
        r83.deleteCache(o92.key, o92.level);
    }
    _e(i105), this.getRetiredTextureQueue(t24).push(e6);
}, fs.addTexture = function(e6, t24) {
    var n54 = {
    };
    return this.getTextureQueue(e6).push(n54), n54.eleCaches = [], n54.height = e6, n54.width = Math.max(1024, t24), n54.usedWidth = 0, n54.invalidatedWidth = 0, n54.fullnessChecks = 0, n54.canvas = this.renderer.makeOffscreenCanvas(n54.width, n54.height), n54.context = n54.canvas.getContext("2d"), n54;
}, fs.recycleTexture = function(e6, t24) {
    for(var n54 = this.getTextureQueue(e6), r83 = this.getRetiredTextureQueue(e6), i105 = 0; i105 < r83.length; i105++){
        var a107 = r83[i105];
        if (a107.width >= t24) return a107.retired = !1, a107.usedWidth = 0, a107.invalidatedWidth = 0, a107.fullnessChecks = 0, _e(a107.eleCaches), a107.context.setTransform(1, 0, 0, 1, 0, 0), a107.context.clearRect(0, 0, a107.width, a107.height), Be(r83, a107), n54.push(a107), a107;
    }
}, fs.queueElement = function(e6, t24) {
    var n54 = this.getElementQueue(), r83 = this.getElementKeyToQueue(), i105 = this.getKey(e6), a108 = r83[i105];
    if (a108) a108.level = Math.max(a108.level, t24), a108.eles.merge(e6), a108.reqs++, n54.updateItem(a108);
    else {
        var o93 = {
            eles: e6.spawn().merge(e6),
            level: t24,
            reqs: 1,
            key: i105
        };
        n54.push(o93), r83[i105] = o93;
    }
}, fs.dequeue = function(e6) {
    for(var t24 = this.getElementQueue(), n54 = this.getElementKeyToQueue(), r83 = [], i105 = this.lookup, a108 = 0; a108 < 1 && t24.size() > 0; a108++){
        var o94 = t24.pop(), s83 = o94.key, l92 = o94.eles[0], u68 = i105.hasCache(l92, o94.level);
        if (n54[s83] = null, !u68) {
            r83.push(o94);
            var c62 = this.getBoundingBox(l92);
            this.getElement(l92, c62, e6, o94.level, ds.dequeue);
        }
    }
    return r83;
}, fs.removeFromQueue = function(e6) {
    var t24 = this.getElementQueue(), n54 = this.getElementKeyToQueue(), r83 = this.getKey(e6), i105 = n54[r83];
    null != i105 && (1 === i105.eles.length ? (i105.reqs = ye, t24.updateItem(i105), t24.pop(), n54[r83] = null) : i105.eles.unmerge(e6));
}, fs.onDequeue = function(e6) {
    this.onDequeues.push(e6);
}, fs.offDequeue = function(e6) {
    Be(this.onDequeues, e6);
}, fs.setupDequeueing = us({
    deqRedrawThreshold: 100,
    deqCost: 0.15,
    deqAvgCost: 0.1,
    deqNoDrawCost: 0.9,
    deqFastCost: 0.9,
    deq: function(e6, t24, n54) {
        return e6.dequeue(t24, n54);
    },
    onDeqd: function(e6, t24) {
        for(var n54 = 0; n54 < e6.onDequeues.length; n54++){
            (0, e6.onDequeues[n54])(t24);
        }
    },
    shouldRedraw: function(e6, t24, n54, r83) {
        for(var i105 = 0; i105 < t24.length; i105++)for(var a108 = t24[i105].eles, o95 = 0; o95 < a108.length; o95++){
            var s84 = a108[o95].boundingBox();
            if (yt(s84, r83)) return !0;
        }
        return !1;
    },
    priority: function(e6) {
        return e6.renderer.beforeRenderPriorities.eleTxrDeq;
    }
});
var gs = function(e6) {
    var t24 = this, n54 = t24.renderer = e6, r83 = n54.cy;
    t24.layersByLevel = {
    }, t24.firstGet = !0, t24.lastInvalidationTime = ie() - 500, t24.skipping = !1, t24.eleTxrDeqs = r83.collection(), t24.scheduleElementRefinement = J(function() {
        t24.refineElementTextures(t24.eleTxrDeqs), t24.eleTxrDeqs.unmerge(t24.eleTxrDeqs);
    }, 50), n54.beforeRender(function(e7, n55) {
        n55 - t24.lastInvalidationTime <= 250 ? t24.skipping = !0 : t24.skipping = !1;
    }, n54.beforeRenderPriorities.lyrTxrSkip);
    t24.layersQueue = new Fe(function(e7, t25) {
        return t25.reqs - e7.reqs;
    }), t24.setupDequeueing();
}, vs = gs.prototype, ys = 0, ms = Math.pow(2, 53) - 1;
vs.makeLayer = function(e6, t24) {
    var n54 = Math.pow(2, t24), r83 = Math.ceil(e6.w * n54), i105 = Math.ceil(e6.h * n54), a108 = this.renderer.makeOffscreenCanvas(r83, i105), o95 = {
        id: ys = (++ys) % ms,
        bb: e6,
        level: t24,
        width: r83,
        height: i105,
        canvas: a108,
        context: a108.getContext("2d"),
        eles: [],
        elesQueue: [],
        reqs: 0
    }, s85 = o95.context, l93 = -o95.bb.x1, u73 = -o95.bb.y1;
    return s85.scale(n54, n54), s85.translate(l93, u73), o95;
}, vs.getLayers = function(e6, t24, n54) {
    var r83 = this, i105 = r83.renderer.cy.zoom(), a108 = r83.firstGet;
    if (r83.firstGet = !1, null == n54) {
        if ((n54 = Math.ceil(it(i105 * t24))) < -4) n54 = -4;
        else if (i105 >= 3.99 || n54 > 2) return null;
    }
    r83.validateLayersElesOrdering(n54, e6);
    var o95, s85, l93 = r83.layersByLevel, u73 = Math.pow(2, n54), c65 = l93[n54] = l93[n54] || [];
    if (r83.levelIsComplete(n54, e6)) return c65;
    !function() {
        var t25 = function(t26) {
            if (r83.validateLayersElesOrdering(t26, e6), r83.levelIsComplete(t26, e6)) return s85 = l93[t26], !0;
        }, i106 = function(e7) {
            if (!s85) for(var r84 = n54 + e7; -4 <= r84 && r84 <= 2 && !t25(r84); r84 += e7);
        };
        i106(1), i106(-1);
        for(var a109 = c65.length - 1; a109 >= 0; a109--){
            var o96 = c65[a109];
            o96.invalid && Be(c65, o96);
        }
    }();
    var d68 = function(t25) {
        var i106 = (t25 = t25 || {
        }).after;
        if ((function() {
            if (!o95) {
                o95 = ht();
                for(var t26 = 0; t26 < e6.length; t26++)n56 = o95, r85 = e6[t26].boundingBox(), n56.x1 = Math.min(n56.x1, r85.x1), n56.x2 = Math.max(n56.x2, r85.x2), n56.w = n56.x2 - n56.x1, n56.y1 = Math.min(n56.y1, r85.y1), n56.y2 = Math.max(n56.y2, r85.y2), n56.h = n56.y2 - n56.y1;
            }
            var n56, r85;
        })(), o95.w * u73 * (o95.h * u73) > 16000000) return null;
        var a109 = r83.makeLayer(o95, n54);
        if (null != i106) {
            var s86 = c65.indexOf(i106) + 1;
            c65.splice(s86, 0, a109);
        } else ((void 0) === t25.insert || t25.insert) && c65.unshift(a109);
        return a109;
    };
    if (r83.skipping && !a108) return null;
    for(var h58 = null, p44 = e6.length / 1, f51 = !a108, g51 = 0; g51 < e6.length; g51++){
        var v44 = e6[g51], y38 = v44._private.rscratch, m36 = y38.imgLayerCaches = y38.imgLayerCaches || {
        }, b34 = m36[n54];
        if (b34) h58 = b34;
        else {
            if ((!h58 || h58.eles.length >= p44 || !bt(h58.bb, v44.boundingBox())) && !(h58 = d68({
                insert: !0,
                after: h58
            }))) return null;
            s85 || f51 ? r83.queueLayer(h58, v44) : r83.drawEleInLayer(h58, v44, n54, t24), h58.eles.push(v44), m36[n54] = h58;
        }
    }
    return s85 || (f51 ? null : c65);
}, vs.getEleLevelForLayerLevel = function(e6, t24) {
    return e6;
}, vs.drawEleInLayer = function(e6, t24, n54, r83) {
    var i105 = this.renderer, a108 = e6.context, o95 = t24.boundingBox();
    0 !== o95.w && 0 !== o95.h && t24.visible() && (n54 = this.getEleLevelForLayerLevel(n54, r83), i105.setImgSmoothing(a108, !1), i105.drawCachedElement(a108, t24, null, null, n54, !0), i105.setImgSmoothing(a108, !0));
}, vs.levelIsComplete = function(e6, t24) {
    var n54 = this.layersByLevel[e6];
    if (!n54 || 0 === n54.length) return !1;
    for(var r83 = 0, i105 = 0; i105 < n54.length; i105++){
        var a108 = n54[i105];
        if (a108.reqs > 0) return !1;
        if (a108.invalid) return !1;
        r83 += a108.eles.length;
    }
    return r83 === t24.length;
}, vs.validateLayersElesOrdering = function(e6, t24) {
    var n54 = this.layersByLevel[e6];
    if (n54) for(var r83 = 0; r83 < n54.length; r83++){
        for(var i105 = n54[r83], a109 = -1, o95 = 0; o95 < t24.length; o95++)if (i105.eles[0] === t24[o95]) {
            a109 = o95;
            break;
        }
        if (a109 < 0) this.invalidateLayer(i105);
        else {
            var s85 = a109;
            for(o95 = 0; o95 < i105.eles.length; o95++)if (i105.eles[o95] !== t24[s85 + o95]) {
                this.invalidateLayer(i105);
                break;
            }
        }
    }
}, vs.updateElementsInLayers = function(e6, t24) {
    for(var n54 = x(e6[0]), r83 = 0; r83 < e6.length; r83++)for(var i106 = n54 ? null : e6[r83], a110 = n54 ? e6[r83] : e6[r83].ele, o97 = a110._private.rscratch, s87 = o97.imgLayerCaches = o97.imgLayerCaches || {
    }, l93 = -4; l93 <= 2; l93++){
        var u73 = s87[l93];
        u73 && (i106 && this.getEleLevelForLayerLevel(u73.level) !== i106.level || t24(u73, a110, i106));
    }
}, vs.haveLayers = function() {
    for(var e6 = !1, t24 = -4; t24 <= 2; t24++){
        var n54 = this.layersByLevel[t24];
        if (n54 && n54.length > 0) {
            e6 = !0;
            break;
        }
    }
    return e6;
}, vs.invalidateElements = function(e6) {
    var t24 = this;
    0 !== e6.length && (t24.lastInvalidationTime = ie(), 0 !== e6.length && t24.haveLayers() && t24.updateElementsInLayers(e6, function(e7, n56, r83) {
        t24.invalidateLayer(e7);
    }));
}, vs.invalidateLayer = function(e6) {
    if (this.lastInvalidationTime = ie(), !e6.invalid) {
        var t24 = e6.level, n56 = e6.eles, r83 = this.layersByLevel[t24];
        Be(r83, e6), e6.elesQueue = [], e6.invalid = !0, e6.replacement && (e6.replacement.invalid = !0);
        for(var i106 = 0; i106 < n56.length; i106++){
            var a110 = n56[i106]._private.rscratch.imgLayerCaches;
            a110 && (a110[t24] = null);
        }
    }
}, vs.refineElementTextures = function(e6) {
    var t25 = this;
    t25.updateElementsInLayers(e6, function(e7, n57, r85) {
        var i107 = e7.replacement;
        if (i107 || ((i107 = e7.replacement = t25.makeLayer(e7.bb, e7.level)).replaces = e7, i107.eles = e7.eles), !i107.reqs) for(var a111 = 0; a111 < i107.eles.length; a111++)t25.queueLayer(i107, i107.eles[a111]);
    });
}, vs.enqueueElementRefinement = function(e6) {
    this.eleTxrDeqs.merge(e6), this.scheduleElementRefinement();
}, vs.queueLayer = function(e6, t25) {
    var n57 = this.layersQueue, r85 = e6.elesQueue, i107 = r85.hasId = r85.hasId || {
    };
    if (!e6.replacement) {
        if (t25) {
            if (i107[t25.id()]) return;
            r85.push(t25), i107[t25.id()] = !0;
        }
        e6.reqs ? (e6.reqs++, n57.updateItem(e6)) : (e6.reqs = 1, n57.push(e6));
    }
}, vs.dequeue = function(e6) {
    for(var t25 = this.layersQueue, n57 = [], r85 = 0; r85 < 1 && 0 !== t25.size();){
        var i107 = t25.peek();
        if (i107.replacement) t25.pop();
        else if (i107.replaces && i107 !== i107.replaces.replacement) t25.pop();
        else if (i107.invalid) t25.pop();
        else {
            var a111 = i107.elesQueue.shift();
            a111 && (this.drawEleInLayer(i107, a111, i107.level, e6), r85++), 0 === n57.length && n57.push(!0), 0 === i107.elesQueue.length && (t25.pop(), i107.reqs = 0, i107.replaces && this.applyLayerReplacement(i107), this.requestRedraw());
        }
    }
    return n57;
}, vs.applyLayerReplacement = function(e6) {
    var t25 = this.layersByLevel[e6.level], n57 = e6.replaces, r85 = t25.indexOf(n57);
    if (!(r85 < 0 || n57.invalid)) {
        t25[r85] = e6;
        for(var i108 = 0; i108 < e6.eles.length; i108++){
            var a112 = e6.eles[i108]._private, o97 = a112.imgLayerCaches = a112.imgLayerCaches || {
            };
            o97 && (o97[e6.level] = e6);
        }
        this.requestRedraw();
    }
}, vs.requestRedraw = J(function() {
    var e6 = this.renderer;
    e6.redrawHint("eles", !0), e6.redrawHint("drag", !0), e6.redraw();
}, 100), vs.setupDequeueing = us({
    deqRedrawThreshold: 50,
    deqCost: 0.15,
    deqAvgCost: 0.1,
    deqNoDrawCost: 0.9,
    deqFastCost: 0.9,
    deq: function(e6, t25) {
        return e6.dequeue(t25);
    },
    onDeqd: we,
    shouldRedraw: me,
    priority: function(e6) {
        return e6.renderer.beforeRenderPriorities.lyrTxrDeq;
    }
});
var bs, xs = {
};
function ws(e6, t25) {
    for(var n57 = 0; n57 < t25.length; n57++){
        var r85 = t25[n57];
        e6.lineTo(r85.x, r85.y);
    }
}
function Es(e6, t25, n57) {
    for(var r86, i109 = 0; i109 < t25.length; i109++){
        var a113 = t25[i109];
        0 === i109 && (r86 = a113), e6.lineTo(a113.x, a113.y);
    }
    e6.quadraticCurveTo(n57.x, n57.y, r86.x, r86.y);
}
function ks(e6, t25, n57) {
    e6.beginPath && e6.beginPath();
    for(var r86 = t25, i109 = 0; i109 < r86.length; i109++){
        var a114 = r86[i109];
        e6.lineTo(a114.x, a114.y);
    }
    var o98 = n57, s87 = n57[0];
    e6.moveTo(s87.x, s87.y);
    for(i109 = 1; i109 < o98.length; i109++){
        a114 = o98[i109];
        e6.lineTo(a114.x, a114.y);
    }
    e6.closePath && e6.closePath();
}
function Cs(e6, t25, n57, r86, i109) {
    e6.beginPath && e6.beginPath(), e6.arc(n57, r86, i109, 0, 2 * Math.PI, !1);
    var a115 = t25, o98 = a115[0];
    e6.moveTo(o98.x, o98.y);
    for(var s87 = 0; s87 < a115.length; s87++){
        var l93 = a115[s87];
        e6.lineTo(l93.x, l93.y);
    }
    e6.closePath && e6.closePath();
}
function Ss(e6, t25, n57, r86) {
    e6.arc(t25, n57, r86, 0, 2 * Math.PI, !1);
}
xs.arrowShapeImpl = function(e6) {
    return (bs || (bs = {
        polygon: ws,
        "triangle-backcurve": Es,
        "triangle-tee": ks,
        "circle-triangle": Cs,
        "triangle-cross": ks,
        circle: Ss
    }))[e6];
};
var Ps = {
    drawElement: function(e6, t25, n57, r86, i109, a115) {
        t25.isNode() ? this.drawNode(e6, t25, n57, r86, i109, a115) : this.drawEdge(e6, t25, n57, r86, i109, a115);
    },
    drawElementOverlay: function(e6, t25) {
        t25.isNode() ? this.drawNodeOverlay(e6, t25) : this.drawEdgeOverlay(e6, t25);
    },
    drawCachedElementPortion: function(e6, t25, n57, r86, i109, a115, o98, s87) {
        var l94 = this, u74 = n57.getBoundingBox(t25);
        if (0 !== u74.w && 0 !== u74.h) {
            var c65 = n57.getElement(t25, u74, r86, i109, a115);
            if (null != c65) {
                var d68 = s87(l94, t25);
                if (0 === d68) return;
                var h58, p44, f51, g51, v45, y39, m37 = o98(l94, t25), b35 = u74.x1, x31 = u74.y1, w33 = u74.w, E35 = u74.h;
                if (0 !== m37) {
                    var k31 = n57.getRotationPoint(t25);
                    f51 = k31.x, g51 = k31.y, e6.translate(f51, g51), e6.rotate(m37), (v45 = l94.getImgSmoothing(e6)) || l94.setImgSmoothing(e6, !0);
                    var C29 = n57.getRotationOffset(t25);
                    h58 = C29.x, p44 = C29.y;
                } else h58 = b35, p44 = x31;
                1 !== d68 && (y39 = e6.globalAlpha, e6.globalAlpha = y39 * d68), e6.drawImage(c65.texture.canvas, c65.x, 0, c65.width, c65.height, h58, p44, w33, E35), 1 !== d68 && (e6.globalAlpha = y39), 0 !== m37 && (e6.rotate(-m37), e6.translate(-f51, -g51), v45 || l94.setImgSmoothing(e6, !1));
            } else n57.drawElement(e6, t25);
        }
    }
}, Ds = function() {
    return 0;
}, Ts = function(e6, t25) {
    return e6.getTextAngle(t25, null);
}, Ms = function(e6, t25) {
    return e6.getTextAngle(t25, "source");
}, Bs = function(e6, t25) {
    return e6.getTextAngle(t25, "target");
}, _s = function(e6, t25) {
    return t25.effectiveOpacity();
}, Ns = function(e6, t25) {
    return t25.pstyle("text-opacity").pfValue * t25.effectiveOpacity();
};
Ps.drawCachedElement = function(e6, t25, n57, r86, i109, a115) {
    var o98 = this, s87 = o98.data, l94 = s87.eleTxrCache, u74 = s87.lblTxrCache, c66 = s87.slbTxrCache, d75 = s87.tlbTxrCache, h59 = t25.boundingBox(), p45 = !0 === a115 ? l94.reasons.highQuality : null;
    if (0 !== h59.w && 0 !== h59.h && t25.visible() && (!r86 || yt(h59, r86))) {
        var f52 = t25.isEdge(), g52 = t25.element()._private.rscratch.badLine;
        o98.drawCachedElementPortion(e6, t25, l94, n57, i109, p45, Ds, _s), f52 && g52 || o98.drawCachedElementPortion(e6, t25, u74, n57, i109, p45, Ts, Ns), f52 && !g52 && (o98.drawCachedElementPortion(e6, t25, c66, n57, i109, p45, Ms, Ns), o98.drawCachedElementPortion(e6, t25, d75, n57, i109, p45, Bs, Ns)), o98.drawElementOverlay(e6, t25);
    }
}, Ps.drawElements = function(e6, t25) {
    for(var n57 = 0; n57 < t25.length; n57++){
        var r86 = t25[n57];
        this.drawElement(e6, r86);
    }
}, Ps.drawCachedElements = function(e6, t25, n57, r87) {
    for(var i109 = 0; i109 < t25.length; i109++){
        var a115 = t25[i109];
        this.drawCachedElement(e6, a115, n57, r87);
    }
}, Ps.drawCachedNodes = function(e6, t25, n57, r87) {
    for(var i109 = 0; i109 < t25.length; i109++){
        var a116 = t25[i109];
        a116.isNode() && this.drawCachedElement(e6, a116, n57, r87);
    }
}, Ps.drawLayeredElements = function(e6, t25, n57, r87) {
    var i109 = this.data.lyrTxrCache.getLayers(t25, n57);
    if (i109) for(var a117 = 0; a117 < i109.length; a117++){
        var o98 = i109[a117], s87 = o98.bb;
        0 !== s87.w && 0 !== s87.h && e6.drawImage(o98.canvas, s87.x1, s87.y1, s87.w, s87.h);
    }
    else this.drawCachedElements(e6, t25, n57, r87);
};
var Is = {
    drawEdge: function(e6, t25, n57) {
        var r87 = !(arguments.length > 3 && (void 0) !== arguments[3]) || arguments[3], i109 = !(arguments.length > 4 && (void 0) !== arguments[4]) || arguments[4], a117 = !(arguments.length > 5 && (void 0) !== arguments[5]) || arguments[5], o99 = this, s88 = t25._private.rscratch;
        if ((!a117 || t25.visible()) && !s88.badLine && null != s88.allpts && !isNaN(s88.allpts[0])) {
            var l94;
            n57 && (l94 = n57, e6.translate(-l94.x1, -l94.y1));
            var u74 = a117 ? t25.pstyle("opacity").value : 1, c66 = a117 ? t25.pstyle("line-opacity").value : 1, d75 = t25.pstyle("line-style").value, h59 = t25.pstyle("width").pfValue, p45 = t25.pstyle("line-cap").value, f53 = u74 * c66, g53 = u74 * c66, v46 = function() {
                var n58 = arguments.length > 0 && (void 0) !== arguments[0] ? arguments[0] : f53;
                e6.lineWidth = h59, e6.lineCap = p45, o99.eleStrokeStyle(e6, t25, n58), o99.drawEdgePath(t25, e6, s88.allpts, d75), e6.lineCap = "butt";
            }, y40 = function() {
                i109 && o99.drawEdgeOverlay(e6, t25);
            }, m38 = function() {
                var n58 = arguments.length > 0 && (void 0) !== arguments[0] ? arguments[0] : g53;
                o99.drawArrowheads(e6, t25, n58);
            }, b36 = function() {
                o99.drawElementText(e6, t25, null, r87);
            };
            e6.lineJoin = "round";
            var x32 = "yes" === t25.pstyle("ghost").value;
            if (x32) {
                var w34 = t25.pstyle("ghost-offset-x").pfValue, E36 = t25.pstyle("ghost-offset-y").pfValue, k32 = t25.pstyle("ghost-opacity").value, C30 = f53 * k32;
                e6.translate(w34, E36), v46(C30), m38(C30), e6.translate(-w34, -E36);
            }
            v46(), m38(), y40(), b36(), n57 && e6.translate(l94.x1, l94.y1);
        }
    },
    drawEdgeOverlay: function(e6, t25) {
        if (t25.visible()) {
            var n57 = t25.pstyle("overlay-opacity").value;
            if (0 !== n57) {
                var r87 = this, i109 = r87.usePaths(), a117 = t25._private.rscratch, o99 = 2 * t25.pstyle("overlay-padding").pfValue, s88 = t25.pstyle("overlay-color").value;
                e6.lineWidth = o99, "self" !== a117.edgeType || i109 ? e6.lineCap = "round" : e6.lineCap = "butt", r87.colorStrokeStyle(e6, s88[0], s88[1], s88[2], n57), r87.drawEdgePath(t25, e6, a117.allpts, "solid");
            }
        }
    },
    drawEdgePath: function(e6, t25, n58, r88) {
        var i110, a118 = e6._private.rscratch, o100 = t25, s89 = !1, l95 = this.usePaths(), u75 = e6.pstyle("line-dash-pattern").pfValue, c67 = e6.pstyle("line-dash-offset").pfValue;
        if (l95) {
            var d76 = n58.join("$");
            a118.pathCacheKey && a118.pathCacheKey === d76 ? (i110 = t25 = a118.pathCache, s89 = !0) : (i110 = t25 = new Path2D, a118.pathCacheKey = d76, a118.pathCache = i110);
        }
        if (o100.setLineDash) switch(r88){
            case "dotted":
                o100.setLineDash([
                    1,
                    1
                ]);
                break;
            case "dashed":
                o100.setLineDash(u75), o100.lineDashOffset = c67;
                break;
            case "solid":
                o100.setLineDash([]);
        }
        if (!s89 && !a118.badLine) switch(t25.beginPath && t25.beginPath(), t25.moveTo(n58[0], n58[1]), a118.edgeType){
            case "bezier":
            case "self":
            case "compound":
            case "multibezier":
                for(var h60 = 2; h60 + 3 < n58.length; h60 += 4)t25.quadraticCurveTo(n58[h60], n58[h60 + 1], n58[h60 + 2], n58[h60 + 3]);
                break;
            case "straight":
            case "segments":
            case "haystack":
                for(var p46 = 2; p46 + 1 < n58.length; p46 += 2)t25.lineTo(n58[p46], n58[p46 + 1]);
        }
        t25 = o100, l95 ? t25.stroke(i110) : t25.stroke(), t25.setLineDash && t25.setLineDash([]);
    },
    drawArrowheads: function(e6, t25, n58) {
        var r88 = t25._private.rscratch, i110 = "haystack" === r88.edgeType;
        i110 || this.drawArrowhead(e6, t25, "source", r88.arrowStartX, r88.arrowStartY, r88.srcArrowAngle, n58), this.drawArrowhead(e6, t25, "mid-target", r88.midX, r88.midY, r88.midtgtArrowAngle, n58), this.drawArrowhead(e6, t25, "mid-source", r88.midX, r88.midY, r88.midsrcArrowAngle, n58), i110 || this.drawArrowhead(e6, t25, "target", r88.arrowEndX, r88.arrowEndY, r88.tgtArrowAngle, n58);
    },
    drawArrowhead: function(e6, t25, n58, r88, i110, a118, o100) {
        if (!(isNaN(r88) || null == r88 || isNaN(i110) || null == i110 || isNaN(a118) || null == a118)) {
            var s89 = t25.pstyle(n58 + "-arrow-shape").value;
            if ("none" !== s89) {
                var l95 = "hollow" === t25.pstyle(n58 + "-arrow-fill").value ? "both" : "filled", u75 = t25.pstyle(n58 + "-arrow-fill").value, c67 = t25.pstyle("width").pfValue, d77 = t25.pstyle("opacity").value;
                (void 0) === o100 && (o100 = d77);
                var h60 = e6.globalCompositeOperation;
                1 === o100 && "hollow" !== u75 || (e6.globalCompositeOperation = "destination-out", this.colorFillStyle(e6, 255, 255, 255, 1), this.colorStrokeStyle(e6, 255, 255, 255, 1), this.drawArrowShape(t25, e6, l95, c67, s89, r88, i110, a118), e6.globalCompositeOperation = h60);
                var p46 = t25.pstyle(n58 + "-arrow-color").value;
                this.colorFillStyle(e6, p46[0], p46[1], p46[2], o100), this.colorStrokeStyle(e6, p46[0], p46[1], p46[2], o100), this.drawArrowShape(t25, e6, u75, c67, s89, r88, i110, a118);
            }
        }
    },
    drawArrowShape: function(e6, t25, n58, r88, i110, a118, o100, s90) {
        var l96, u76 = this, c68 = this.usePaths() && "triangle-cross" !== i110, d78 = !1, h61 = t25, p47 = {
            x: a118,
            y: o100
        }, f54 = e6.pstyle("arrow-scale").value, g54 = this.getArrowWidth(r88, f54), v47 = u76.arrowShapes[i110];
        if (c68) {
            var y41 = u76.arrowPathCache = u76.arrowPathCache || [], m39 = de(i110), b37 = y41[m39];
            null != b37 ? (l96 = t25 = b37, d78 = !0) : (l96 = t25 = new Path2D, y41[m39] = l96);
        }
        d78 || (t25.beginPath && t25.beginPath(), c68 ? v47.draw(t25, 1, 0, {
            x: 0,
            y: 0
        }, 1) : v47.draw(t25, g54, s90, p47, r88), t25.closePath && t25.closePath()), t25 = h61, c68 && (t25.translate(a118, o100), t25.rotate(s90), t25.scale(g54, g54)), "filled" !== n58 && "both" !== n58 || (c68 ? t25.fill(l96) : t25.fill()), "hollow" !== n58 && "both" !== n58 || (t25.lineWidth = (v47.matchEdgeWidth ? r88 : 1) / (c68 ? g54 : 1), t25.lineJoin = "miter", c68 ? t25.stroke(l96) : t25.stroke()), c68 && (t25.scale(1 / g54, 1 / g54), t25.rotate(-s90), t25.translate(-a118, -o100));
    }
}, zs = {
    safeDrawImage: function(e6, t25, n58, r88, i110, a118, o100, s90, l96, u76) {
        i110 <= 0 || a118 <= 0 || l96 <= 0 || u76 <= 0 || e6.drawImage(t25, n58, r88, i110, a118, o100, s90, l96, u76);
    },
    drawInscribedImage: function(e6, t25, n58, r88, i110) {
        var a118 = this, o100 = n58.position(), s90 = o100.x, l96 = o100.y, u76 = n58.cy().style(), c68 = u76.getIndexedStyle.bind(u76), d78 = c68(n58, "background-fit", "value", r88), h61 = c68(n58, "background-repeat", "value", r88), p47 = n58.width(), f54 = n58.height(), g54 = 2 * n58.padding(), v47 = p47 + ("inner" === c68(n58, "background-width-relative-to", "value", r88) ? 0 : g54), y42 = f54 + ("inner" === c68(n58, "background-height-relative-to", "value", r88) ? 0 : g54), m40 = n58._private.rscratch, b38 = "node" === c68(n58, "background-clip", "value", r88), x33 = c68(n58, "background-image-opacity", "value", r88) * i110, w35 = c68(n58, "background-image-smoothing", "value", r88), E37 = t25.width || t25.cachedW, k33 = t25.height || t25.cachedH;
        null != E37 && null != k33 || (document.body.appendChild(t25), E37 = t25.cachedW = t25.width || t25.offsetWidth, k33 = t25.cachedH = t25.height || t25.offsetHeight, document.body.removeChild(t25));
        var C31 = E37, S30 = k33;
        if ("auto" !== c68(n58, "background-width", "value", r88) && (C31 = "%" === c68(n58, "background-width", "units", r88) ? c68(n58, "background-width", "pfValue", r88) * v47 : c68(n58, "background-width", "pfValue", r88)), "auto" !== c68(n58, "background-height", "value", r88) && (S30 = "%" === c68(n58, "background-height", "units", r88) ? c68(n58, "background-height", "pfValue", r88) * y42 : c68(n58, "background-height", "pfValue", r88)), 0 !== C31 && 0 !== S30) {
            if ("contain" === d78) C31 *= P30 = Math.min(v47 / C31, y42 / S30), S30 *= P30;
            else if ("cover" === d78) {
                var P30;
                C31 *= P30 = Math.max(v47 / C31, y42 / S30), S30 *= P30;
            }
            var D24 = s90 - v47 / 2, T25 = c68(n58, "background-position-x", "units", r88), M26 = c68(n58, "background-position-x", "pfValue", r88);
            D24 += "%" === T25 ? (v47 - C31) * M26 : M26;
            var B22 = c68(n58, "background-offset-x", "units", r88), _21 = c68(n58, "background-offset-x", "pfValue", r88);
            D24 += "%" === B22 ? (v47 - C31) * _21 : _21;
            var N16 = l96 - y42 / 2, I18 = c68(n58, "background-position-y", "units", r88), z14 = c68(n58, "background-position-y", "pfValue", r88);
            N16 += "%" === I18 ? (y42 - S30) * z14 : z14;
            var L16 = c68(n58, "background-offset-y", "units", r88), A15 = c68(n58, "background-offset-y", "pfValue", r88);
            N16 += "%" === L16 ? (y42 - S30) * A15 : A15, m40.pathCache && (D24 -= s90, N16 -= l96, s90 = 0, l96 = 0);
            var O17 = e6.globalAlpha;
            e6.globalAlpha = x33;
            var R14 = a118.getImgSmoothing(e6), V16 = !1;
            if ("no" === w35 && R14 ? (a118.setImgSmoothing(e6, !1), V16 = !0) : "yes" !== w35 || R14 || (a118.setImgSmoothing(e6, !0), V16 = !0), "no-repeat" === h61) b38 && (e6.save(), m40.pathCache ? e6.clip(m40.pathCache) : (a118.nodeShapes[a118.getNodeShape(n58)].draw(e6, s90, l96, v47, y42), e6.clip())), a118.safeDrawImage(e6, t25, 0, 0, E37, k33, D24, N16, C31, S30), b38 && e6.restore();
            else {
                var F14 = e6.createPattern(t25, h61);
                e6.fillStyle = F14, a118.nodeShapes[a118.getNodeShape(n58)].draw(e6, s90, l96, v47, y42), e6.translate(D24, N16), e6.fill(), e6.translate(-D24, -N16);
            }
            e6.globalAlpha = O17, V16 && a118.setImgSmoothing(e6, R14);
        }
    }
}, Ls = {
};
function As(e6, t25, n58, r88, i110) {
    var a118 = arguments.length > 5 && (void 0) !== arguments[5] ? arguments[5] : 5;
    e6.beginPath(), e6.moveTo(t25 + a118, n58), e6.lineTo(t25 + r88 - a118, n58), e6.quadraticCurveTo(t25 + r88, n58, t25 + r88, n58 + a118), e6.lineTo(t25 + r88, n58 + i110 - a118), e6.quadraticCurveTo(t25 + r88, n58 + i110, t25 + r88 - a118, n58 + i110), e6.lineTo(t25 + a118, n58 + i110), e6.quadraticCurveTo(t25, n58 + i110, t25, n58 + i110 - a118), e6.lineTo(t25, n58 + a118), e6.quadraticCurveTo(t25, n58, t25 + a118, n58), e6.closePath(), e6.fill();
}
Ls.eleTextBiggerThanMin = function(e6, t25) {
    if (!t25) {
        var n58 = e6.cy().zoom(), r88 = this.getPixelRatio(), i110 = Math.ceil(it(n58 * r88));
        t25 = Math.pow(2, i110);
    }
    return !(e6.pstyle("font-size").pfValue * t25 < e6.pstyle("min-zoomed-font-size").pfValue);
}, Ls.drawElementText = function(e6, t25, n59, r89, i111) {
    var a118 = !(arguments.length > 5 && (void 0) !== arguments[5]) || arguments[5], o100 = this;
    if (null == r89) {
        if (a118 && !o100.eleTextBiggerThanMin(t25)) return;
    } else if (!1 === r89) return;
    if (t25.isNode()) {
        var s90 = t25.pstyle("label");
        if (!s90 || !s90.value) return;
        var l96 = o100.getLabelJustification(t25);
        e6.textAlign = l96, e6.textBaseline = "bottom";
    } else {
        var u76 = t25.element()._private.rscratch.badLine, c68 = t25.pstyle("label"), d78 = t25.pstyle("source-label"), h61 = t25.pstyle("target-label");
        if (u76 || (!c68 || !c68.value) && (!d78 || !d78.value) && (!h61 || !h61.value)) return;
        e6.textAlign = "center", e6.textBaseline = "bottom";
    }
    var p47, f54 = !n59;
    n59 && (p47 = n59, e6.translate(-p47.x1, -p47.y1)), null == i111 ? (o100.drawText(e6, t25, null, f54, a118), t25.isEdge() && (o100.drawText(e6, t25, "source", f54, a118), o100.drawText(e6, t25, "target", f54, a118))) : o100.drawText(e6, t25, i111, f54, a118), n59 && e6.translate(p47.x1, p47.y1);
}, Ls.getFontCache = function(e6) {
    var t25;
    this.fontCaches = this.fontCaches || [];
    for(var n59 = 0; n59 < this.fontCaches.length; n59++)if ((t25 = this.fontCaches[n59]).context === e6) return t25;
    return t25 = {
        context: e6
    }, this.fontCaches.push(t25), t25;
}, Ls.setupTextStyle = function(e6, t25) {
    var n59 = !(arguments.length > 2 && (void 0) !== arguments[2]) || arguments[2], r89 = t25.pstyle("font-style").strValue, i111 = t25.pstyle("font-size").pfValue + "px", a118 = t25.pstyle("font-family").strValue, o100 = t25.pstyle("font-weight").strValue, s91 = n59 ? t25.effectiveOpacity() * t25.pstyle("text-opacity").value : 1, l97 = t25.pstyle("text-outline-opacity").value * s91, u77 = t25.pstyle("color").value, c69 = t25.pstyle("text-outline-color").value;
    e6.font = r89 + " " + o100 + " " + i111 + " " + a118, e6.lineJoin = "round", this.colorFillStyle(e6, u77[0], u77[1], u77[2], s91), this.colorStrokeStyle(e6, c69[0], c69[1], c69[2], l97);
}, Ls.getTextAngle = function(e6, t25) {
    var n59 = e6._private.rscratch, r89 = t25 ? t25 + "-" : "", i111 = e6.pstyle(r89 + "text-rotation"), a118 = Ne(n59, "labelAngle", t25);
    return "autorotate" === i111.strValue ? e6.isEdge() ? a118 : 0 : "none" === i111.strValue ? 0 : i111.pfValue;
}, Ls.drawText = function(e6, t25, n59) {
    var r89 = !(arguments.length > 3 && (void 0) !== arguments[3]) || arguments[3], i111 = !(arguments.length > 4 && (void 0) !== arguments[4]) || arguments[4], a118 = t25._private, o100 = a118.rscratch, s91 = i111 ? t25.effectiveOpacity() : 1;
    if (!i111 || 0 !== s91 && 0 !== t25.pstyle("text-opacity").value) {
        "main" === n59 && (n59 = null);
        var l97, u77, c69 = Ne(o100, "labelX", n59), d79 = Ne(o100, "labelY", n59), h62 = this.getLabelText(t25, n59);
        if (null != h62 && "" !== h62 && !isNaN(c69) && !isNaN(d79)) {
            this.setupTextStyle(e6, t25, i111);
            var p47, f54 = n59 ? n59 + "-" : "", g54 = Ne(o100, "labelWidth", n59), v47 = Ne(o100, "labelHeight", n59), y42 = t25.pstyle(f54 + "text-margin-x").pfValue, m40 = t25.pstyle(f54 + "text-margin-y").pfValue, b38 = t25.isEdge(), x33 = t25.pstyle("text-halign").value, w35 = t25.pstyle("text-valign").value;
            switch(b38 && (x33 = "center", w35 = "center"), c69 += y42, d79 += m40, 0 !== (p47 = r89 ? this.getTextAngle(t25, n59) : 0) && (l97 = c69, u77 = d79, e6.translate(l97, u77), e6.rotate(p47), c69 = 0, d79 = 0), w35){
                case "top": break;
                case "center":
                    d79 += v47 / 2;
                    break;
                case "bottom":
                    d79 += v47;
            }
            var E37 = t25.pstyle("text-background-opacity").value, k33 = t25.pstyle("text-border-opacity").value, C31 = t25.pstyle("text-border-width").pfValue, S30 = t25.pstyle("text-background-padding").pfValue;
            if (E37 > 0 || C31 > 0 && k33 > 0) {
                var P31 = c69 - S30;
                switch(x33){
                    case "left":
                        P31 -= g54;
                        break;
                    case "center":
                        P31 -= g54 / 2;
                }
                var D25 = d79 - v47 - S30, T26 = g54 + 2 * S30, M27 = v47 + 2 * S30;
                if (E37 > 0) {
                    var B23 = e6.fillStyle, _22 = t25.pstyle("text-background-color").value;
                    e6.fillStyle = "rgba(" + _22[0] + "," + _22[1] + "," + _22[2] + "," + E37 * s91 + ")";
                    var N19 = t25.pstyle("text-background-shape").strValue;
                    0 === N19.indexOf("round") ? As(e6, P31, D25, T26, M27, 2) : e6.fillRect(P31, D25, T26, M27), e6.fillStyle = B23;
                }
                if (C31 > 0 && k33 > 0) {
                    var I21 = e6.strokeStyle, z17 = e6.lineWidth, L19 = t25.pstyle("text-border-color").value, A18 = t25.pstyle("text-border-style").value;
                    if (e6.strokeStyle = "rgba(" + L19[0] + "," + L19[1] + "," + L19[2] + "," + k33 * s91 + ")", e6.lineWidth = C31, e6.setLineDash) switch(A18){
                        case "dotted":
                            e6.setLineDash([
                                1,
                                1
                            ]);
                            break;
                        case "dashed":
                            e6.setLineDash([
                                4,
                                2
                            ]);
                            break;
                        case "double":
                            e6.lineWidth = C31 / 4, e6.setLineDash([]);
                            break;
                        case "solid":
                            e6.setLineDash([]);
                    }
                    if (e6.strokeRect(P31, D25, T26, M27), "double" === A18) {
                        var O18 = C31 / 2;
                        e6.strokeRect(P31 + O18, D25 + O18, T26 - 2 * O18, M27 - 2 * O18);
                    }
                    e6.setLineDash && e6.setLineDash([]), e6.lineWidth = z17, e6.strokeStyle = I21;
                }
            }
            var R15 = 2 * t25.pstyle("text-outline-width").pfValue;
            if (R15 > 0 && (e6.lineWidth = R15), "wrap" === t25.pstyle("text-wrap").value) {
                var V17 = Ne(o100, "labelWrapCachedLines", n59), F15 = Ne(o100, "labelLineHeight", n59), q11 = g54 / 2, j9 = this.getLabelJustification(t25);
                switch("auto" === j9 || ("left" === x33 ? "left" === j9 ? c69 += -g54 : "center" === j9 && (c69 += -q11) : "center" === x33 ? "left" === j9 ? c69 += -q11 : "right" === j9 && (c69 += q11) : "right" === x33 && ("center" === j9 ? c69 += q11 : "right" === j9 && (c69 += g54))), w35){
                    case "top":
                        d79 -= (V17.length - 1) * F15;
                        break;
                    case "center":
                    case "bottom":
                        d79 -= (V17.length - 1) * F15;
                }
                for(var Y8 = 0; Y8 < V17.length; Y8++)R15 > 0 && e6.strokeText(V17[Y8], c69, d79), e6.fillText(V17[Y8], c69, d79), d79 += F15;
            } else R15 > 0 && e6.strokeText(h62, c69, d79), e6.fillText(h62, c69, d79);
            0 !== p47 && (e6.rotate(-p47), e6.translate(-l97, -u77));
        }
    }
};
var Os = {
    drawNode: function(e6, t25, n59) {
        var r89, i111, a118 = !(arguments.length > 3 && (void 0) !== arguments[3]) || arguments[3], o100 = !(arguments.length > 4 && (void 0) !== arguments[4]) || arguments[4], s91 = !(arguments.length > 5 && (void 0) !== arguments[5]) || arguments[5], l98 = this, u78 = t25._private, c70 = u78.rscratch, d80 = t25.position();
        if (y1(d80.x) && y1(d80.y) && (!s91 || t25.visible())) {
            var h63, p48, f55 = s91 ? t25.effectiveOpacity() : 1, g55 = l98.usePaths(), v48 = !1, m41 = t25.padding();
            r89 = t25.width() + 2 * m41, i111 = t25.height() + 2 * m41, n59 && (p48 = n59, e6.translate(-p48.x1, -p48.y1));
            for(var b39 = t25.pstyle("background-image"), x34 = b39.value, w36 = new Array(x34.length), E38 = new Array(x34.length), k34 = 0, C32 = 0; C32 < x34.length; C32++){
                var S31 = x34[C32], P32 = w36[C32] = null != S31 && "none" !== S31;
                if (P32) {
                    var D26 = t25.cy().style().getIndexedStyle(t25, "background-image-crossorigin", "value", C32);
                    k34++, E38[C32] = l98.getCachedImage(S31, D26, function() {
                        u78.backgroundTimestamp = Date.now(), t25.emitAndNotify("background");
                    });
                }
            }
            var T27 = t25.pstyle("background-blacken").value, M28 = t25.pstyle("border-width").pfValue, B24 = t25.pstyle("background-opacity").value * f55, _23 = t25.pstyle("border-color").value, N20 = t25.pstyle("border-style").value, I22 = t25.pstyle("border-opacity").value * f55;
            e6.lineJoin = "miter";
            var z18 = function() {
                var n60 = arguments.length > 0 && (void 0) !== arguments[0] ? arguments[0] : B24;
                l98.eleFillStyle(e6, t25, n60);
            }, L20 = function() {
                var t27 = arguments.length > 0 && (void 0) !== arguments[0] ? arguments[0] : I22;
                l98.colorStrokeStyle(e6, _23[0], _23[1], _23[2], t27);
            }, A19 = t25.pstyle("shape").strValue, O19 = t25.pstyle("shape-polygon-points").pfValue;
            if (g55) {
                e6.translate(d80.x, d80.y);
                var R16 = l98.nodePathCache = l98.nodePathCache || [], V18 = he("polygon" === A19 ? A19 + "," + O19.join(",") : A19, "" + i111, "" + r89), F16 = R16[V18];
                null != F16 ? (h63 = F16, v48 = !0, c70.pathCache = h63) : (h63 = new Path2D, R16[V18] = c70.pathCache = h63);
            }
            var q12 = function() {
                if (!v48) {
                    var n60 = d80;
                    g55 && (n60 = {
                        x: 0,
                        y: 0
                    }), l98.nodeShapes[l98.getNodeShape(t25)].draw(h63 || e6, n60.x, n60.y, r89, i111);
                }
                g55 ? e6.fill(h63) : e6.fill();
            }, j10 = function() {
                for(var n61 = arguments.length > 0 && (void 0) !== arguments[0] ? arguments[0] : f55, r90 = !(arguments.length > 1 && (void 0) !== arguments[1]) || arguments[1], i112 = u78.backgrounding, a119 = 0, o101 = 0; o101 < E38.length; o101++){
                    var s92 = t25.cy().style().getIndexedStyle(t25, "background-image-containment", "value", o101);
                    r90 && "over" === s92 || !r90 && "inside" === s92 ? a119++ : w36[o101] && E38[o101].complete && !E38[o101].error && (a119++, l98.drawInscribedImage(e6, E38[o101], t25, o101, n61));
                }
                u78.backgrounding = !(a119 === k34), i112 !== u78.backgrounding && t25.updateStyle(!1);
            }, Y9 = function() {
                var n61 = arguments.length > 0 && (void 0) !== arguments[0] && arguments[0], a119 = arguments.length > 1 && (void 0) !== arguments[1] ? arguments[1] : f55;
                l98.hasPie(t25) && (l98.drawPie(e6, t25, a119), n61 && (g55 || l98.nodeShapes[l98.getNodeShape(t25)].draw(e6, d80.x, d80.y, r89, i111)));
            }, X7 = function() {
                var t27 = arguments.length > 0 && (void 0) !== arguments[0] ? arguments[0] : f55, n61 = (T27 > 0 ? T27 : -T27) * t27, r90 = T27 > 0 ? 0 : 255;
                0 !== T27 && (l98.colorFillStyle(e6, r90, r90, r90, n61), g55 ? e6.fill(h63) : e6.fill());
            }, W6 = function() {
                if (M28 > 0) {
                    if (e6.lineWidth = M28, e6.lineCap = "butt", e6.setLineDash) switch(N20){
                        case "dotted":
                            e6.setLineDash([
                                1,
                                1
                            ]);
                            break;
                        case "dashed":
                            e6.setLineDash([
                                4,
                                2
                            ]);
                            break;
                        case "solid":
                        case "double":
                            e6.setLineDash([]);
                    }
                    if (g55 ? e6.stroke(h63) : e6.stroke(), "double" === N20) {
                        e6.lineWidth = M28 / 3;
                        var t27 = e6.globalCompositeOperation;
                        e6.globalCompositeOperation = "destination-out", g55 ? e6.stroke(h63) : e6.stroke(), e6.globalCompositeOperation = t27;
                    }
                    e6.setLineDash && e6.setLineDash([]);
                }
            }, H5 = function() {
                o100 && l98.drawNodeOverlay(e6, t25, d80, r89, i111);
            }, K4 = function() {
                l98.drawElementText(e6, t25, null, a118);
            }, G6 = "yes" === t25.pstyle("ghost").value;
            if (G6) {
                var Z5 = t25.pstyle("ghost-offset-x").pfValue, U4 = t25.pstyle("ghost-offset-y").pfValue, $4 = t25.pstyle("ghost-opacity").value, Q4 = $4 * f55;
                e6.translate(Z5, U4), z18($4 * B24), q12(), j10(Q4, !0), L20($4 * I22), W6(), Y9(0 !== T27 || 0 !== M28), j10(Q4, !1), X7(Q4), e6.translate(-Z5, -U4);
            }
            z18(), q12(), j10(f55, !0), L20(), W6(), Y9(0 !== T27 || 0 !== M28), j10(f55, !1), X7(), g55 && e6.translate(-d80.x, -d80.y), K4(), H5(), n59 && e6.translate(p48.x1, p48.y1);
        }
    },
    drawNodeOverlay: function(e6, t25, n59, r89, i111) {
        if (t25.visible()) {
            var a118 = t25.pstyle("overlay-padding").pfValue, o100 = t25.pstyle("overlay-opacity").value, s91 = t25.pstyle("overlay-color").value;
            if (o100 > 0) {
                if (n59 = n59 || t25.position(), null == r89 || null == i111) {
                    var l98 = t25.padding();
                    r89 = t25.width() + 2 * l98, i111 = t25.height() + 2 * l98;
                }
                this.colorFillStyle(e6, s91[0], s91[1], s91[2], o100), this.nodeShapes.roundrectangle.draw(e6, n59.x, n59.y, r89 + 2 * a118, i111 + 2 * a118), e6.fill();
            }
        }
    },
    hasPie: function(e6) {
        return (e6 = e6[0])._private.hasPie;
    },
    drawPie: function(e6, t25, n59, r89) {
        t25 = t25[0], r89 = r89 || t25.position();
        var i111 = t25.cy().style(), a119 = t25.pstyle("pie-size"), o101 = r89.x, s93 = r89.y, l99 = t25.width(), u78 = t25.height(), c70 = Math.min(l99, u78) / 2, d80 = 0;
        this.usePaths() && (o101 = 0, s93 = 0), "%" === a119.units ? c70 *= a119.pfValue : (void 0) !== a119.pfValue && (c70 = a119.pfValue / 2);
        for(var h64 = 1; h64 <= i111.pieBackgroundN; h64++){
            var p49 = t25.pstyle("pie-" + h64 + "-background-size").value, f56 = t25.pstyle("pie-" + h64 + "-background-color").value, g56 = t25.pstyle("pie-" + h64 + "-background-opacity").value * n59, v49 = p49 / 100;
            v49 + d80 > 1 && (v49 = 1 - d80);
            var y43 = 1.5 * Math.PI + 2 * Math.PI * d80, m42 = y43 + 2 * Math.PI * v49;
            0 === p49 || d80 >= 1 || d80 + v49 > 1 || (e6.beginPath(), e6.moveTo(o101, s93), e6.arc(o101, s93, c70, y43, m42), e6.closePath(), this.colorFillStyle(e6, f56[0], f56[1], f56[2], g56), e6.fill(), d80 += v49);
        }
    }
}, Rs = {
};
Rs.getPixelRatio = function() {
    var e6 = this.data.contexts[0];
    if (null != this.forcedPixelRatio) return this.forcedPixelRatio;
    var t25 = e6.backingStorePixelRatio || e6.webkitBackingStorePixelRatio || e6.mozBackingStorePixelRatio || e6.msBackingStorePixelRatio || e6.oBackingStorePixelRatio || e6.backingStorePixelRatio || 1;
    return (window.devicePixelRatio || 1) / t25;
}, Rs.paintCache = function(e6) {
    for(var t25, n59 = this.paintCaches = this.paintCaches || [], r89 = !0, i111 = 0; i111 < n59.length; i111++)if ((t25 = n59[i111]).context === e6) {
        r89 = !1;
        break;
    }
    return r89 && (t25 = {
        context: e6
    }, n59.push(t25)), t25;
}, Rs.createGradientStyleFor = function(e6, t25, n59, r89, i111) {
    var a119, o101 = this.usePaths(), s93 = n59.pstyle(t25 + "-gradient-stop-colors").value, l99 = n59.pstyle(t25 + "-gradient-stop-positions").pfValue;
    if ("radial-gradient" === r89) {
        if (n59.isEdge()) {
            var u78 = n59.sourceEndpoint(), c70 = n59.targetEndpoint(), d80 = n59.midpoint(), h64 = ot(u78, d80), p50 = ot(c70, d80);
            a119 = e6.createRadialGradient(d80.x, d80.y, 0, d80.x, d80.y, Math.max(h64, p50));
        } else {
            var f57 = o101 ? {
                x: 0,
                y: 0
            } : n59.position(), g57 = n59.paddedWidth(), v50 = n59.paddedHeight();
            a119 = e6.createRadialGradient(f57.x, f57.y, 0, f57.x, f57.y, Math.max(g57, v50));
        }
    } else if (n59.isEdge()) {
        var y44 = n59.sourceEndpoint(), m43 = n59.targetEndpoint();
        a119 = e6.createLinearGradient(y44.x, y44.y, m43.x, m43.y);
    } else {
        var b40 = o101 ? {
            x: 0,
            y: 0
        } : n59.position(), x35 = n59.paddedWidth() / 2, w37 = n59.paddedHeight() / 2;
        switch(n59.pstyle("background-gradient-direction").value){
            case "to-bottom":
                a119 = e6.createLinearGradient(b40.x, b40.y - w37, b40.x, b40.y + w37);
                break;
            case "to-top":
                a119 = e6.createLinearGradient(b40.x, b40.y + w37, b40.x, b40.y - w37);
                break;
            case "to-left":
                a119 = e6.createLinearGradient(b40.x + x35, b40.y, b40.x - x35, b40.y);
                break;
            case "to-right":
                a119 = e6.createLinearGradient(b40.x - x35, b40.y, b40.x + x35, b40.y);
                break;
            case "to-bottom-right":
            case "to-right-bottom":
                a119 = e6.createLinearGradient(b40.x - x35, b40.y - w37, b40.x + x35, b40.y + w37);
                break;
            case "to-top-right":
            case "to-right-top":
                a119 = e6.createLinearGradient(b40.x - x35, b40.y + w37, b40.x + x35, b40.y - w37);
                break;
            case "to-bottom-left":
            case "to-left-bottom":
                a119 = e6.createLinearGradient(b40.x + x35, b40.y - w37, b40.x - x35, b40.y + w37);
                break;
            case "to-top-left":
            case "to-left-top":
                a119 = e6.createLinearGradient(b40.x + x35, b40.y + w37, b40.x - x35, b40.y - w37);
        }
    }
    if (!a119) return null;
    for(var E39 = l99.length === s93.length, k35 = s93.length, C33 = 0; C33 < k35; C33++)a119.addColorStop(E39 ? l99[C33] : C33 / (k35 - 1), "rgba(" + s93[C33][0] + "," + s93[C33][1] + "," + s93[C33][2] + "," + i111 + ")");
    return a119;
}, Rs.gradientFillStyle = function(e6, t25, n59, r89) {
    var i111 = this.createGradientStyleFor(e6, "background", t25, n59, r89);
    if (!i111) return null;
    e6.fillStyle = i111;
}, Rs.colorFillStyle = function(e6, t25, n59, r89, i111) {
    e6.fillStyle = "rgba(" + t25 + "," + n59 + "," + r89 + "," + i111 + ")";
}, Rs.eleFillStyle = function(e6, t25, n59) {
    var r89 = t25.pstyle("background-fill").value;
    if ("linear-gradient" === r89 || "radial-gradient" === r89) this.gradientFillStyle(e6, t25, r89, n59);
    else {
        var i111 = t25.pstyle("background-color").value;
        this.colorFillStyle(e6, i111[0], i111[1], i111[2], n59);
    }
}, Rs.gradientStrokeStyle = function(e6, t25, n59, r89) {
    var i112 = this.createGradientStyleFor(e6, "line", t25, n59, r89);
    if (!i112) return null;
    e6.strokeStyle = i112;
}, Rs.colorStrokeStyle = function(e6, t25, n59, r89, i112) {
    e6.strokeStyle = "rgba(" + t25 + "," + n59 + "," + r89 + "," + i112 + ")";
}, Rs.eleStrokeStyle = function(e6, t25, n59) {
    var r89 = t25.pstyle("line-fill").value;
    if ("linear-gradient" === r89 || "radial-gradient" === r89) this.gradientStrokeStyle(e6, t25, r89, n59);
    else {
        var i112 = t25.pstyle("line-color").value;
        this.colorStrokeStyle(e6, i112[0], i112[1], i112[2], n59);
    }
}, Rs.matchCanvasSize = function(e6) {
    var t25 = this, n59 = t25.data, r89 = t25.findContainerClientCoords(), i113 = r89[2], a119 = r89[3], o101 = t25.getPixelRatio(), s93 = t25.motionBlurPxRatio;
    e6 !== t25.data.bufferCanvases[t25.MOTIONBLUR_BUFFER_NODE] && e6 !== t25.data.bufferCanvases[t25.MOTIONBLUR_BUFFER_DRAG] || (o101 = s93);
    var l99, u79 = i113 * o101, c71 = a119 * o101;
    if (u79 !== t25.canvasWidth || c71 !== t25.canvasHeight) {
        t25.fontCaches = null;
        var d81 = n59.canvasContainer;
        d81.style.width = i113 + "px", d81.style.height = a119 + "px";
        for(var h65 = 0; h65 < t25.CANVAS_LAYERS; h65++)(l99 = n59.canvases[h65]).width = u79, l99.height = c71, l99.style.width = i113 + "px", l99.style.height = a119 + "px";
        for(h65 = 0; h65 < t25.BUFFER_COUNT; h65++)(l99 = n59.bufferCanvases[h65]).width = u79, l99.height = c71, l99.style.width = i113 + "px", l99.style.height = a119 + "px";
        t25.textureMult = 1, o101 <= 1 && (l99 = n59.bufferCanvases[t25.TEXTURE_BUFFER], t25.textureMult = 2, l99.width = u79 * t25.textureMult, l99.height = c71 * t25.textureMult), t25.canvasWidth = u79, t25.canvasHeight = c71;
    }
}, Rs.renderTo = function(e6, t25, n59, r89) {
    this.render({
        forcedContext: e6,
        forcedZoom: t25,
        forcedPan: n59,
        drawAllLayers: !0,
        forcedPxRatio: r89
    });
}, Rs.render = function(e6) {
    var t25 = (e6 = e6 || Te()).forcedContext, n59 = e6.drawAllLayers, r89 = e6.drawOnlyNodeLayer, i113 = e6.forcedZoom, a119 = e6.forcedPan, o101 = this, s93 = (void 0) === e6.forcedPxRatio ? this.getPixelRatio() : e6.forcedPxRatio, l99 = o101.cy, u79 = o101.data, c71 = u79.canvasNeedsRedraw, d82 = o101.textureOnViewport && !t25 && (o101.pinching || o101.hoverData.dragging || o101.swipePanning || o101.data.wheelZooming), h66 = (void 0) !== e6.motionBlur ? e6.motionBlur : o101.motionBlur, p51 = o101.motionBlurPxRatio, f58 = l99.hasCompoundNodes(), g58 = o101.hoverData.draggingEles, v51 = !(!o101.hoverData.selecting && !o101.touchData.selecting), y45 = h66 = h66 && !t25 && o101.motionBlurEnabled && !v51;
    t25 || (o101.prevPxRatio !== s93 && (o101.invalidateContainerClientCoordsCache(), o101.matchCanvasSize(o101.container), o101.redrawHint("eles", !0), o101.redrawHint("drag", !0)), o101.prevPxRatio = s93), !t25 && o101.motionBlurTimeout && clearTimeout(o101.motionBlurTimeout), h66 && (null == o101.mbFrames && (o101.mbFrames = 0), o101.mbFrames++, o101.mbFrames < 3 && (y45 = !1), o101.mbFrames > o101.minMbLowQualFrames && (o101.motionBlurPxRatio = o101.mbPxRBlurry)), o101.clearingMotionBlur && (o101.motionBlurPxRatio = 1), o101.textureDrawLastFrame && !d82 && (c71[o101.NODE] = !0, c71[o101.SELECT_BOX] = !0);
    var m44 = l99.style(), b41 = l99.zoom(), x36 = (void 0) !== i113 ? i113 : b41, w38 = l99.pan(), E39 = {
        x: w38.x,
        y: w38.y
    }, k35 = {
        zoom: b41,
        pan: {
            x: w38.x,
            y: w38.y
        }
    }, C33 = o101.prevViewport;
    (void 0) === C33 || k35.zoom !== C33.zoom || k35.pan.x !== C33.pan.x || k35.pan.y !== C33.pan.y || g58 && !f58 || (o101.motionBlurPxRatio = 1), a119 && (E39 = a119), x36 *= s93, E39.x *= s93, E39.y *= s93;
    var S32 = o101.getCachedZSortedEles();
    function P33(e7, t28, n61, r90, i114) {
        var a120 = e7.globalCompositeOperation;
        e7.globalCompositeOperation = "destination-out", o101.colorFillStyle(e7, 255, 255, 255, o101.motionBlurTransparency), e7.fillRect(t28, n61, r90, i114), e7.globalCompositeOperation = a120;
    }
    function D27(e7, r90) {
        var s94, l100, c72, d83;
        o101.clearingMotionBlur || e7 !== u79.bufferContexts[o101.MOTIONBLUR_BUFFER_NODE] && e7 !== u79.bufferContexts[o101.MOTIONBLUR_BUFFER_DRAG] ? (s94 = E39, l100 = x36, c72 = o101.canvasWidth, d83 = o101.canvasHeight) : (s94 = {
            x: w38.x * p51,
            y: w38.y * p51
        }, l100 = b41 * p51, c72 = o101.canvasWidth * p51, d83 = o101.canvasHeight * p51), e7.setTransform(1, 0, 0, 1, 0, 0), "motionBlur" === r90 ? P33(e7, 0, 0, c72, d83) : t25 || (void 0) !== r90 && !r90 || e7.clearRect(0, 0, c72, d83), n59 || (e7.translate(s94.x, s94.y), e7.scale(l100, l100)), a119 && e7.translate(a119.x, a119.y), i113 && e7.scale(i113, i113);
    }
    if (d82 || (o101.textureDrawLastFrame = !1), d82) {
        if (o101.textureDrawLastFrame = !0, !o101.textureCache) {
            o101.textureCache = {
            }, o101.textureCache.bb = l99.mutableElements().boundingBox(), o101.textureCache.texture = o101.data.bufferCanvases[o101.TEXTURE_BUFFER];
            var T28 = o101.data.bufferContexts[o101.TEXTURE_BUFFER];
            T28.setTransform(1, 0, 0, 1, 0, 0), T28.clearRect(0, 0, o101.canvasWidth * o101.textureMult, o101.canvasHeight * o101.textureMult), o101.render({
                forcedContext: T28,
                drawOnlyNodeLayer: !0,
                forcedPxRatio: s93 * o101.textureMult
            }), (k35 = o101.textureCache.viewport = {
                zoom: l99.zoom(),
                pan: l99.pan(),
                width: o101.canvasWidth,
                height: o101.canvasHeight
            }).mpan = {
                x: (0 - k35.pan.x) / k35.zoom,
                y: (0 - k35.pan.y) / k35.zoom
            };
        }
        c71[o101.DRAG] = !1, c71[o101.NODE] = !1;
        var M29 = u79.contexts[o101.NODE], B25 = o101.textureCache.texture;
        k35 = o101.textureCache.viewport;
        M29.setTransform(1, 0, 0, 1, 0, 0), h66 ? P33(M29, 0, 0, k35.width, k35.height) : M29.clearRect(0, 0, k35.width, k35.height);
        var _24 = m44.core("outside-texture-bg-color").value, N21 = m44.core("outside-texture-bg-opacity").value;
        o101.colorFillStyle(M29, _24[0], _24[1], _24[2], N21), M29.fillRect(0, 0, k35.width, k35.height);
        b41 = l99.zoom();
        D27(M29, !1), M29.clearRect(k35.mpan.x, k35.mpan.y, k35.width / k35.zoom / s93, k35.height / k35.zoom / s93), M29.drawImage(B25, k35.mpan.x, k35.mpan.y, k35.width / k35.zoom / s93, k35.height / k35.zoom / s93);
    } else o101.textureOnViewport && !t25 && (o101.textureCache = null);
    var I23 = l99.extent(), z19 = o101.pinching || o101.hoverData.dragging || o101.swipePanning || o101.data.wheelZooming || o101.hoverData.draggingEles || o101.cy.animated(), L21 = o101.hideEdgesOnViewport && z19, A20 = [];
    if (A20[o101.NODE] = !c71[o101.NODE] && h66 && !o101.clearedForMotionBlur[o101.NODE] || o101.clearingMotionBlur, A20[o101.NODE] && (o101.clearedForMotionBlur[o101.NODE] = !0), A20[o101.DRAG] = !c71[o101.DRAG] && h66 && !o101.clearedForMotionBlur[o101.DRAG] || o101.clearingMotionBlur, A20[o101.DRAG] && (o101.clearedForMotionBlur[o101.DRAG] = !0), c71[o101.NODE] || n59 || r89 || A20[o101.NODE]) {
        var O20 = h66 && !A20[o101.NODE] && 1 !== p51;
        D27(M29 = t25 || (O20 ? o101.data.bufferContexts[o101.MOTIONBLUR_BUFFER_NODE] : u79.contexts[o101.NODE]), h66 && !O20 ? "motionBlur" : void 0), L21 ? o101.drawCachedNodes(M29, S32.nondrag, s93, I23) : o101.drawLayeredElements(M29, S32.nondrag, s93, I23), o101.debug && o101.drawDebugPoints(M29, S32.nondrag), n59 || h66 || (c71[o101.NODE] = !1);
    }
    if (!r89 && (c71[o101.DRAG] || n59 || A20[o101.DRAG])) {
        O20 = h66 && !A20[o101.DRAG] && 1 !== p51;
        D27(M29 = t25 || (O20 ? o101.data.bufferContexts[o101.MOTIONBLUR_BUFFER_DRAG] : u79.contexts[o101.DRAG]), h66 && !O20 ? "motionBlur" : void 0), L21 ? o101.drawCachedNodes(M29, S32.drag, s93, I23) : o101.drawCachedElements(M29, S32.drag, s93, I23), o101.debug && o101.drawDebugPoints(M29, S32.drag), n59 || h66 || (c71[o101.DRAG] = !1);
    }
    if (o101.showFps || !r89 && c71[o101.SELECT_BOX] && !n59) {
        if (D27(M29 = t25 || u79.contexts[o101.SELECT_BOX]), 1 == o101.selection[4] && (o101.hoverData.selecting || o101.touchData.selecting)) {
            b41 = o101.cy.zoom();
            var R17 = m44.core("selection-box-border-width").value / b41;
            M29.lineWidth = R17, M29.fillStyle = "rgba(" + m44.core("selection-box-color").value[0] + "," + m44.core("selection-box-color").value[1] + "," + m44.core("selection-box-color").value[2] + "," + m44.core("selection-box-opacity").value + ")", M29.fillRect(o101.selection[0], o101.selection[1], o101.selection[2] - o101.selection[0], o101.selection[3] - o101.selection[1]), R17 > 0 && (M29.strokeStyle = "rgba(" + m44.core("selection-box-border-color").value[0] + "," + m44.core("selection-box-border-color").value[1] + "," + m44.core("selection-box-border-color").value[2] + "," + m44.core("selection-box-opacity").value + ")", M29.strokeRect(o101.selection[0], o101.selection[1], o101.selection[2] - o101.selection[0], o101.selection[3] - o101.selection[1]));
        }
        if (u79.bgActivePosistion && !o101.hoverData.selecting) {
            b41 = o101.cy.zoom();
            var V19 = u79.bgActivePosistion;
            M29.fillStyle = "rgba(" + m44.core("active-bg-color").value[0] + "," + m44.core("active-bg-color").value[1] + "," + m44.core("active-bg-color").value[2] + "," + m44.core("active-bg-opacity").value + ")", M29.beginPath(), M29.arc(V19.x, V19.y, m44.core("active-bg-size").pfValue / b41, 0, 2 * Math.PI), M29.fill();
        }
        var F17 = o101.lastRedrawTime;
        if (o101.showFps && F17) {
            F17 = Math.round(F17);
            var q13 = Math.round(1000 / F17);
            M29.setTransform(1, 0, 0, 1, 0, 0), M29.fillStyle = "rgba(255, 0, 0, 0.75)", M29.strokeStyle = "rgba(255, 0, 0, 0.75)", M29.lineWidth = 1, M29.fillText("1 frame = " + F17 + " ms = " + q13 + " fps", 0, 20);
            M29.strokeRect(0, 30, 250, 20), M29.fillRect(0, 30, 250 * Math.min(q13 / 60, 1), 20);
        }
        n59 || (c71[o101.SELECT_BOX] = !1);
    }
    if (h66 && 1 !== p51) {
        var j11 = u79.contexts[o101.NODE], Y10 = o101.data.bufferCanvases[o101.MOTIONBLUR_BUFFER_NODE], X8 = u79.contexts[o101.DRAG], W7 = o101.data.bufferCanvases[o101.MOTIONBLUR_BUFFER_DRAG], H6 = function(e7, t28, n61) {
            e7.setTransform(1, 0, 0, 1, 0, 0), n61 || !y45 ? e7.clearRect(0, 0, o101.canvasWidth, o101.canvasHeight) : P33(e7, 0, 0, o101.canvasWidth, o101.canvasHeight);
            var r90 = p51;
            e7.drawImage(t28, 0, 0, o101.canvasWidth * r90, o101.canvasHeight * r90, 0, 0, o101.canvasWidth, o101.canvasHeight);
        };
        (c71[o101.NODE] || A20[o101.NODE]) && (H6(j11, Y10, A20[o101.NODE]), c71[o101.NODE] = !1), (c71[o101.DRAG] || A20[o101.DRAG]) && (H6(X8, W7, A20[o101.DRAG]), c71[o101.DRAG] = !1);
    }
    o101.prevViewport = k35, o101.clearingMotionBlur && (o101.clearingMotionBlur = !1, o101.motionBlurCleared = !0, o101.motionBlur = !0), h66 && (o101.motionBlurTimeout = setTimeout(function() {
        o101.motionBlurTimeout = null, o101.clearedForMotionBlur[o101.NODE] = !1, o101.clearedForMotionBlur[o101.DRAG] = !1, o101.motionBlur = !1, o101.clearingMotionBlur = !d82, o101.mbFrames = 0, c71[o101.NODE] = !0, c71[o101.DRAG] = !0, o101.redraw();
    }, 100)), t25 || l99.emit("render");
};
for(var Vs = {
    drawPolygonPath: function(e6, t25, n59, r89, i113, a119) {
        var o101 = r89 / 2, s93 = i113 / 2;
        e6.beginPath && e6.beginPath(), e6.moveTo(t25 + o101 * a119[0], n59 + s93 * a119[1]);
        for(var l99 = 1; l99 < a119.length / 2; l99++)e6.lineTo(t25 + o101 * a119[2 * l99], n59 + s93 * a119[2 * l99 + 1]);
        e6.closePath();
    },
    drawRoundPolygonPath: function(e6, t25, n59, r89, i113, a119) {
        var o101 = r89 / 2, s93 = i113 / 2, l99 = Vt(r89, i113);
        e6.beginPath && e6.beginPath();
        for(var u79 = 0; u79 < a119.length / 4; u79++){
            var c71, d82 = void 0;
            d82 = 0 === u79 ? a119.length - 2 : 4 * u79 - 2, c71 = 4 * u79 + 2;
            var h66 = t25 + o101 * a119[4 * u79], p51 = n59 + s93 * a119[4 * u79 + 1], f58 = -a119[d82] * a119[c71] - a119[d82 + 1] * a119[c71 + 1], g58 = l99 / Math.tan(Math.acos(f58) / 2), v51 = h66 - g58 * a119[d82], y45 = p51 - g58 * a119[d82 + 1], m44 = h66 + g58 * a119[c71], b41 = p51 + g58 * a119[c71 + 1];
            0 === u79 ? e6.moveTo(v51, y45) : e6.lineTo(v51, y45), e6.arcTo(h66, p51, m44, b41, l99);
        }
        e6.closePath();
    },
    drawRoundRectanglePath: function(e6, t25, n59, r89, i113) {
        var a119 = r89 / 2, o101 = i113 / 2, s93 = Rt(r89, i113);
        e6.beginPath && e6.beginPath(), e6.moveTo(t25, n59 - o101), e6.arcTo(t25 + a119, n59 - o101, t25 + a119, n59, s93), e6.arcTo(t25 + a119, n59 + o101, t25, n59 + o101, s93), e6.arcTo(t25 - a119, n59 + o101, t25 - a119, n59, s93), e6.arcTo(t25 - a119, n59 - o101, t25, n59 - o101, s93), e6.lineTo(t25, n59 - o101), e6.closePath();
    },
    drawBottomRoundRectanglePath: function(e6, t25, n59, r89, i113) {
        var a119 = r89 / 2, o101 = i113 / 2, s93 = Rt(r89, i113);
        e6.beginPath && e6.beginPath(), e6.moveTo(t25, n59 - o101), e6.lineTo(t25 + a119, n59 - o101), e6.lineTo(t25 + a119, n59), e6.arcTo(t25 + a119, n59 + o101, t25, n59 + o101, s93), e6.arcTo(t25 - a119, n59 + o101, t25 - a119, n59, s93), e6.lineTo(t25 - a119, n59 - o101), e6.lineTo(t25, n59 - o101), e6.closePath();
    },
    drawCutRectanglePath: function(e6, t25, n59, r89, i113) {
        var a119 = r89 / 2, o101 = i113 / 2;
        e6.beginPath && e6.beginPath(), e6.moveTo(t25 - a119 + 8, n59 - o101), e6.lineTo(t25 + a119 - 8, n59 - o101), e6.lineTo(t25 + a119, n59 - o101 + 8), e6.lineTo(t25 + a119, n59 + o101 - 8), e6.lineTo(t25 + a119 - 8, n59 + o101), e6.lineTo(t25 - a119 + 8, n59 + o101), e6.lineTo(t25 - a119, n59 + o101 - 8), e6.lineTo(t25 - a119, n59 - o101 + 8), e6.closePath();
    },
    drawBarrelPath: function(e6, t25, n59, r89, i113) {
        var a119 = r89 / 2, o101 = i113 / 2, s93 = t25 - a119, l99 = t25 + a119, u79 = n59 - o101, c72 = n59 + o101, d83 = Ft(r89, i113), h67 = d83.widthOffset, p52 = d83.heightOffset, f59 = d83.ctrlPtOffsetPct * h67;
        e6.beginPath && e6.beginPath(), e6.moveTo(s93, u79 + p52), e6.lineTo(s93, c72 - p52), e6.quadraticCurveTo(s93 + f59, c72, s93 + h67, c72), e6.lineTo(l99 - h67, c72), e6.quadraticCurveTo(l99 - f59, c72, l99, c72 - p52), e6.lineTo(l99, u79 + p52), e6.quadraticCurveTo(l99 - f59, u79, l99 - h67, u79), e6.lineTo(s93 + h67, u79), e6.quadraticCurveTo(s93 + f59, u79, s93, u79 + p52), e6.closePath();
    }
}, Fs = Math.sin(0), qs = Math.cos(0), js = {
}, Ys = {
}, Xs = Math.PI / 40, Ws = 0 * Math.PI; Ws < 2 * Math.PI; Ws += Xs)js[Ws] = Math.sin(Ws), Ys[Ws] = Math.cos(Ws);
Vs.drawEllipsePath = function(e6, t25, n59, r89, i113) {
    if (e6.beginPath && e6.beginPath(), e6.ellipse) e6.ellipse(t25, n59, r89 / 2, i113 / 2, 0, 0, 2 * Math.PI);
    else for(var a119, o101, s93 = r89 / 2, l99 = i113 / 2, u79 = 0 * Math.PI; u79 < 2 * Math.PI; u79 += Xs)a119 = t25 - s93 * js[u79] * Fs + s93 * Ys[u79] * qs, o101 = n59 + l99 * Ys[u79] * Fs + l99 * js[u79] * qs, 0 === u79 ? e6.moveTo(a119, o101) : e6.lineTo(a119, o101);
    e6.closePath();
};
var Hs = {
};
function Ks(e6) {
    var t25 = e6.indexOf(",");
    return e6.substr(t25 + 1);
}
function Gs(e6, t25, n59) {
    var r89 = function() {
        return t25.toDataURL(n59, e6.quality);
    };
    switch(e6.output){
        case "blob-promise":
            return new $n(function(r90, i113) {
                try {
                    t25.toBlob(function(e7) {
                        null != e7 ? r90(e7) : i113(new Error("`canvas.toBlob()` sent a null value in its callback"));
                    }, n59, e6.quality);
                } catch (e7) {
                    i113(e7);
                }
            });
        case "blob":
            return (function(e7, t28) {
                for(var n61 = atob(e7), r90 = new ArrayBuffer(n61.length), i113 = new Uint8Array(r90), a119 = 0; a119 < n61.length; a119++)i113[a119] = n61.charCodeAt(a119);
                return new Blob([
                    r90
                ], {
                    type: t28
                });
            })(Ks(r89()), n59);
        case "base64":
            return Ks(r89());
        case "base64uri":
        default:
            return r89();
    }
}
Hs.createBuffer = function(e6, t25) {
    var n59 = document.createElement("canvas");
    return n59.width = e6, n59.height = t25, [
        n59,
        n59.getContext("2d")
    ];
}, Hs.bufferCanvasImage = function(e6) {
    var t25 = this.cy, n59 = t25.mutableElements().boundingBox(), r89 = this.findContainerClientCoords(), i113 = e6.full ? Math.ceil(n59.w) : r89[2], a119 = e6.full ? Math.ceil(n59.h) : r89[3], o101 = y1(e6.maxWidth) || y1(e6.maxHeight), s93 = this.getPixelRatio(), l99 = 1;
    if ((void 0) !== e6.scale) i113 *= e6.scale, a119 *= e6.scale, l99 = e6.scale;
    else if (o101) {
        var u79 = 1 / 0, c72 = 1 / 0;
        y1(e6.maxWidth) && (u79 = l99 * e6.maxWidth / i113), y1(e6.maxHeight) && (c72 = l99 * e6.maxHeight / a119), i113 *= l99 = Math.min(u79, c72), a119 *= l99;
    }
    o101 || (i113 *= s93, a119 *= s93, l99 *= s93);
    var d83 = document.createElement("canvas");
    d83.width = i113, d83.height = a119, d83.style.width = i113 + "px", d83.style.height = a119 + "px";
    var h67 = d83.getContext("2d");
    if (i113 > 0 && a119 > 0) {
        h67.clearRect(0, 0, i113, a119), h67.globalCompositeOperation = "source-over";
        var p52 = this.getCachedZSortedEles();
        if (e6.full) h67.translate(-n59.x1 * l99, -n59.y1 * l99), h67.scale(l99, l99), this.drawElements(h67, p52), h67.scale(1 / l99, 1 / l99), h67.translate(n59.x1 * l99, n59.y1 * l99);
        else {
            var f59 = t25.pan(), g59 = {
                x: f59.x * l99,
                y: f59.y * l99
            };
            l99 *= t25.zoom(), h67.translate(g59.x, g59.y), h67.scale(l99, l99), this.drawElements(h67, p52), h67.scale(1 / l99, 1 / l99), h67.translate(-g59.x, -g59.y);
        }
        e6.bg && (h67.globalCompositeOperation = "destination-over", h67.fillStyle = e6.bg, h67.rect(0, 0, i113, a119), h67.fill());
    }
    return d83;
}, Hs.png = function(e6) {
    return Gs(e6, this.bufferCanvasImage(e6), "image/png");
}, Hs.jpg = function(e6) {
    return Gs(e6, this.bufferCanvasImage(e6), "image/jpeg");
};
var Zs = {
    nodeShapeImpl: function(e6, t25, n59, r89, i113, a119, o101) {
        switch(e6){
            case "ellipse":
                return this.drawEllipsePath(t25, n59, r89, i113, a119);
            case "polygon":
                return this.drawPolygonPath(t25, n59, r89, i113, a119, o101);
            case "round-polygon":
                return this.drawRoundPolygonPath(t25, n59, r89, i113, a119, o101);
            case "roundrectangle":
            case "round-rectangle":
                return this.drawRoundRectanglePath(t25, n59, r89, i113, a119);
            case "cutrectangle":
            case "cut-rectangle":
                return this.drawCutRectanglePath(t25, n59, r89, i113, a119);
            case "bottomroundrectangle":
            case "bottom-round-rectangle":
                return this.drawBottomRoundRectanglePath(t25, n59, r89, i113, a119);
            case "barrel":
                return this.drawBarrelPath(t25, n59, r89, i113, a119);
        }
    }
}, Us = Qs, $s = Qs.prototype;
function Qs(e6) {
    var t25 = this;
    t25.data = {
        canvases: new Array($s.CANVAS_LAYERS),
        contexts: new Array($s.CANVAS_LAYERS),
        canvasNeedsRedraw: new Array($s.CANVAS_LAYERS),
        bufferCanvases: new Array($s.BUFFER_COUNT),
        bufferContexts: new Array($s.CANVAS_LAYERS)
    };
    t25.data.canvasContainer = document.createElement("div");
    var n59 = t25.data.canvasContainer.style;
    t25.data.canvasContainer.style["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", n59.position = "relative", n59.zIndex = "0", n59.overflow = "hidden";
    var r89 = e6.cy.container();
    r89.appendChild(t25.data.canvasContainer), r89.style["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)";
    var i113 = {
        "-webkit-user-select": "none",
        "-moz-user-select": "-moz-none",
        "user-select": "none",
        "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
        "outline-style": "none"
    };
    s && s.userAgent.match(/msie|trident|edge/i) && (i113["-ms-touch-action"] = "none", i113["touch-action"] = "none");
    for(var a119 = 0; a119 < $s.CANVAS_LAYERS; a119++){
        var o101 = t25.data.canvases[a119] = document.createElement("canvas");
        t25.data.contexts[a119] = o101.getContext("2d"), Object.keys(i113).forEach(function(e7) {
            o101.style[e7] = i113[e7];
        }), o101.style.position = "absolute", o101.setAttribute("data-id", "layer" + a119), o101.style.zIndex = String($s.CANVAS_LAYERS - a119), t25.data.canvasContainer.appendChild(o101), t25.data.canvasNeedsRedraw[a119] = !1;
    }
    t25.data.topCanvas = t25.data.canvases[0], t25.data.canvases[$s.NODE].setAttribute("data-id", "layer" + $s.NODE + "-node"), t25.data.canvases[$s.SELECT_BOX].setAttribute("data-id", "layer" + $s.SELECT_BOX + "-selectbox"), t25.data.canvases[$s.DRAG].setAttribute("data-id", "layer" + $s.DRAG + "-drag");
    for(a119 = 0; a119 < $s.BUFFER_COUNT; a119++)t25.data.bufferCanvases[a119] = document.createElement("canvas"), t25.data.bufferContexts[a119] = t25.data.bufferCanvases[a119].getContext("2d"), t25.data.bufferCanvases[a119].style.position = "absolute", t25.data.bufferCanvases[a119].setAttribute("data-id", "buffer" + a119), t25.data.bufferCanvases[a119].style.zIndex = String(-a119 - 1), t25.data.bufferCanvases[a119].style.visibility = "hidden";
    t25.pathsEnabled = !0;
    var l99 = ht(), u80 = function(e7) {
        return {
            x: -e7.w / 2,
            y: -e7.h / 2
        };
    }, c73 = function(e7) {
        return e7.boundingBox(), e7[0]._private.bodyBounds;
    }, d83 = function(e7) {
        return e7.boundingBox(), e7[0]._private.labelBounds.main || l99;
    }, h67 = function(e7) {
        return e7.boundingBox(), e7[0]._private.labelBounds.source || l99;
    }, p53 = function(e7) {
        return e7.boundingBox(), e7[0]._private.labelBounds.target || l99;
    }, f60 = function(e7, t28) {
        return t28;
    }, g60 = function(e7, t28, n61) {
        var r90 = e7 ? e7 + "-" : "";
        return {
            x: t28.x + n61.pstyle(r90 + "text-margin-x").pfValue,
            y: t28.y + n61.pstyle(r90 + "text-margin-y").pfValue
        };
    }, v52 = function(e7, t28, n61) {
        var r90 = e7[0]._private.rscratch;
        return {
            x: r90[t28],
            y: r90[n61]
        };
    }, y46 = t25.data.eleTxrCache = new ps(t25, {
        getKey: function(e7) {
            return e7[0]._private.nodeKey;
        },
        doesEleInvalidateKey: function(e7) {
            var t28 = e7[0]._private;
            return !(t28.oldBackgroundTimestamp === t28.backgroundTimestamp);
        },
        drawElement: function(e7, n61, r90, i114, a120) {
            return t25.drawElement(e7, n61, r90, !1, !1, a120);
        },
        getBoundingBox: c73,
        getRotationPoint: function(e7) {
            return {
                x: ((t29 = c73(e7)).x1 + t29.x2) / 2,
                y: (t29.y1 + t29.y2) / 2
            };
            var t29;
        },
        getRotationOffset: function(e7) {
            return u80(c73(e7));
        },
        allowEdgeTxrCaching: !1,
        allowParentTxrCaching: !1
    }), m45 = t25.data.lblTxrCache = new ps(t25, {
        getKey: function(e7) {
            return e7[0]._private.labelStyleKey;
        },
        drawElement: function(e7, n61, r90, i114, a120) {
            return t25.drawElementText(e7, n61, r90, i114, "main", a120);
        },
        getBoundingBox: d83,
        getRotationPoint: function(e7) {
            return g60("", v52(e7, "labelX", "labelY"), e7);
        },
        getRotationOffset: function(e7) {
            var t29 = d83(e7), n61 = u80(d83(e7));
            if (e7.isNode()) {
                switch(e7.pstyle("text-halign").value){
                    case "left":
                        n61.x = -t29.w;
                        break;
                    case "right":
                        n61.x = 0;
                }
                switch(e7.pstyle("text-valign").value){
                    case "top":
                        n61.y = -t29.h;
                        break;
                    case "bottom":
                        n61.y = 0;
                }
            }
            return n61;
        },
        isVisible: f60
    }), b42 = t25.data.slbTxrCache = new ps(t25, {
        getKey: function(e7) {
            return e7[0]._private.sourceLabelStyleKey;
        },
        drawElement: function(e7, n61, r90, i114, a120) {
            return t25.drawElementText(e7, n61, r90, i114, "source", a120);
        },
        getBoundingBox: h67,
        getRotationPoint: function(e7) {
            return g60("source", v52(e7, "sourceLabelX", "sourceLabelY"), e7);
        },
        getRotationOffset: function(e7) {
            return u80(h67(e7));
        },
        isVisible: f60
    }), x36 = t25.data.tlbTxrCache = new ps(t25, {
        getKey: function(e7) {
            return e7[0]._private.targetLabelStyleKey;
        },
        drawElement: function(e7, n61, r90, i114, a120) {
            return t25.drawElementText(e7, n61, r90, i114, "target", a120);
        },
        getBoundingBox: p53,
        getRotationPoint: function(e7) {
            return g60("target", v52(e7, "targetLabelX", "targetLabelY"), e7);
        },
        getRotationOffset: function(e7) {
            return u80(p53(e7));
        },
        isVisible: f60
    }), w38 = t25.data.lyrTxrCache = new gs(t25);
    t25.onUpdateEleCalcs(function(e7, t29) {
        y46.invalidateElements(t29), m45.invalidateElements(t29), b42.invalidateElements(t29), x36.invalidateElements(t29), w38.invalidateElements(t29);
        for(var n61 = 0; n61 < t29.length; n61++){
            var r90 = t29[n61]._private;
            r90.oldBackgroundTimestamp = r90.backgroundTimestamp;
        }
    });
    var E39 = function(e7) {
        for(var t29 = 0; t29 < e7.length; t29++)w38.enqueueElementRefinement(e7[t29].ele);
    };
    y46.onDequeue(E39), m45.onDequeue(E39), b42.onDequeue(E39), x36.onDequeue(E39);
}
$s.CANVAS_LAYERS = 3, $s.SELECT_BOX = 0, $s.DRAG = 1, $s.NODE = 2, $s.BUFFER_COUNT = 3, $s.TEXTURE_BUFFER = 0, $s.MOTIONBLUR_BUFFER_NODE = 1, $s.MOTIONBLUR_BUFFER_DRAG = 2, $s.redrawHint = function(e6, t25) {
    var n59 = this;
    switch(e6){
        case "eles":
            n59.data.canvasNeedsRedraw[$s.NODE] = t25;
            break;
        case "drag":
            n59.data.canvasNeedsRedraw[$s.DRAG] = t25;
            break;
        case "select":
            n59.data.canvasNeedsRedraw[$s.SELECT_BOX] = t25;
    }
};
var Js = "undefined" != typeof Path2D;
$s.path2dEnabled = function(e6) {
    if ((void 0) === e6) return this.pathsEnabled;
    this.pathsEnabled = !!e6;
}, $s.usePaths = function() {
    return Js && this.pathsEnabled;
}, $s.setImgSmoothing = function(e6, t25) {
    null != e6.imageSmoothingEnabled ? e6.imageSmoothingEnabled = t25 : (e6.webkitImageSmoothingEnabled = t25, e6.mozImageSmoothingEnabled = t25, e6.msImageSmoothingEnabled = t25);
}, $s.getImgSmoothing = function(e6) {
    return null != e6.imageSmoothingEnabled ? e6.imageSmoothingEnabled : e6.webkitImageSmoothingEnabled || e6.mozImageSmoothingEnabled || e6.msImageSmoothingEnabled;
}, $s.makeOffscreenCanvas = function(t25, n59) {
    var r89;
    return "undefined" !== ("undefined" == typeof OffscreenCanvas ? "undefined" : e(OffscreenCanvas)) ? r89 = new OffscreenCanvas(t25, n59) : ((r89 = document.createElement("canvas")).width = t25, r89.height = n59), r89;
}, [
    xs,
    Ps,
    Is,
    zs,
    Ls,
    Os,
    Rs,
    Vs,
    Hs,
    Zs
].forEach(function(e6) {
    I10($s, e6);
});
var el = [
    {
        type: "layout",
        extensions: Ao
    },
    {
        type: "renderer",
        extensions: [
            {
                name: "null",
                impl: Oo
            },
            {
                name: "base",
                impl: ss
            },
            {
                name: "canvas",
                impl: Us
            }
        ]
    }
], tl = {
}, nl = {
};
function rl(e6, t25, n59) {
    var r89 = n59, i113 = function(n61) {
        Ee("Can not register `" + t25 + "` for `" + e6 + "` since `" + n61 + "` already exists in the prototype and can not be overridden");
    };
    if ("core" === e6) {
        if (Za.prototype[t25]) return i113(t25);
        Za.prototype[t25] = n59;
    } else if ("collection" === e6) {
        if (pa.prototype[t25]) return i113(t25);
        pa.prototype[t25] = n59;
    } else if ("layout" === e6) {
        for(var a119 = function(e7) {
            this.options = e7, n59.call(this, e7), v1(this._private) || (this._private = {
            }), this._private.cy = e7.cy, this._private.listeners = [], this.createEmitter();
        }, o102 = a119.prototype = Object.create(n59.prototype), s93 = [], l99 = 0; l99 < s93.length; l99++){
            var u80 = s93[l99];
            o102[u80] = o102[u80] || function() {
                return this;
            };
        }
        o102.start && !o102.run ? o102.run = function() {
            return this.start(), this;
        } : !o102.start && o102.run && (o102.start = function() {
            return this.run(), this;
        });
        var c73 = n59.prototype.stop;
        o102.stop = function() {
            var e7 = this.options;
            if (e7 && e7.animate) {
                var t29 = this.animations;
                if (t29) for(var n61 = 0; n61 < t29.length; n61++)t29[n61].stop();
            }
            return c73 ? c73.call(this) : this.emit("layoutstop"), this;
        }, o102.destroy || (o102.destroy = function() {
            return this;
        }), o102.cy = function() {
            return this._private.cy;
        };
        var d83 = function(e7) {
            return e7._private.cy;
        }, h67 = {
            addEventFields: function(e7, t30) {
                t30.layout = e7, t30.cy = d83(e7), t30.target = e7;
            },
            bubble: function() {
                return !0;
            },
            parent: function(e7) {
                return d83(e7);
            }
        };
        I10(o102, {
            createEmitter: function() {
                return this._private.emitter = new Ni(h67, this), this;
            },
            emitter: function() {
                return this._private.emitter;
            },
            on: function(e7, t30) {
                return this.emitter().on(e7, t30), this;
            },
            one: function(e7, t30) {
                return this.emitter().one(e7, t30), this;
            },
            once: function(e7, t30) {
                return this.emitter().one(e7, t30), this;
            },
            removeListener: function(e7, t30) {
                return this.emitter().removeListener(e7, t30), this;
            },
            removeAllListeners: function() {
                return this.emitter().removeAllListeners(), this;
            },
            emit: function(e7, t30) {
                return this.emitter().emit(e7, t30), this;
            }
        }), er.eventAliasesOn(o102), r89 = a119;
    } else if ("renderer" === e6 && "null" !== t25 && "base" !== t25) {
        var p53 = il("renderer", "base"), f60 = p53.prototype, g60 = n59, y46 = n59.prototype, m45 = function() {
            p53.apply(this, arguments), g60.apply(this, arguments);
        }, b42 = m45.prototype;
        for(var x36 in f60){
            var w38 = f60[x36];
            if (null != y46[x36]) return i113(x36);
            b42[x36] = w38;
        }
        for(var E39 in y46)b42[E39] = y46[E39];
        f60.clientFunctions.forEach(function(e7) {
            b42[e7] = b42[e7] || function() {
                Ee("Renderer does not implement `renderer." + e7 + "()` on its prototype");
            };
        }), r89 = m45;
    }
    return A({
        map: tl,
        keys: [
            e6,
            t25
        ],
        value: r89
    });
}
function il(e6, t25) {
    return O({
        map: tl,
        keys: [
            e6,
            t25
        ]
    });
}
function al(e6, t25, n59, r89, i113) {
    return A({
        map: nl,
        keys: [
            e6,
            t25,
            n59,
            r89
        ],
        value: i113
    });
}
function ol(e6, t25, n59, r89) {
    return O({
        map: nl,
        keys: [
            e6,
            t25,
            n59,
            r89
        ]
    });
}
var sl = function() {
    return 2 === arguments.length ? il.apply(null, arguments) : 3 === arguments.length ? rl.apply(null, arguments) : 4 === arguments.length ? ol.apply(null, arguments) : 5 === arguments.length ? al.apply(null, arguments) : void Ee("Invalid extension access syntax");
};
Za.prototype.extension = sl, el.forEach(function(e6) {
    e6.extensions.forEach(function(t25) {
        rl(e6.type, t25.name, t25.impl);
    });
});
var ll = function e6() {
    if (!(this instanceof e6)) return new e6;
    this.length = 0;
}, ul = ll.prototype;
ul.instanceString = function() {
    return "stylesheet";
}, ul.selector = function(e7) {
    return this[this.length++] = {
        selector: e7,
        properties: []
    }, this;
}, ul.css = function(e7, t25) {
    var n59 = this.length - 1;
    if (p(e7)) this[n59].properties.push({
        name: e7,
        value: t25
    });
    else if (v1(e7)) for(var r89 = e7, i113 = Object.keys(r89), a120 = 0; a120 < i113.length; a120++){
        var o103 = i113[a120], s94 = r89[o103];
        if (null != s94) {
            var l100 = Xa.properties[o103] || Xa.properties[T(o103)];
            if (null != l100) {
                var u81 = l100.name, c74 = s94;
                this[n59].properties.push({
                    name: u81,
                    value: c74
                });
            }
        }
    }
    return this;
}, ul.style = ul.css, ul.generateStyle = function(e7) {
    var t25 = new Xa(e7);
    return this.appendToStyle(t25);
}, ul.appendToStyle = function(e7) {
    for(var t25 = 0; t25 < this.length; t25++){
        var n59 = this[t25], r89 = n59.selector, i113 = n59.properties;
        e7.selector(r89);
        for(var a120 = 0; a120 < i113.length; a120++){
            var o104 = i113[a120];
            e7.css(o104.name, o104.value);
        }
    }
    return e7;
};
var cl = function(e7) {
    return (void 0) === e7 && (e7 = {
    }), v1(e7) ? new Za(e7) : p(e7) ? sl.apply(sl, arguments) : void 0;
};
cl.use = function(e7) {
    var t25 = Array.prototype.slice.call(arguments, 1);
    return t25.unshift(cl), e7.apply(null, t25), this;
}, cl.warnings = function(e7) {
    return ke(e7);
}, cl.version = "3.19.0", cl.stylesheet = cl.Stylesheet = ll;
let renderDataKey = (data, context)=>{
    return context.replace(/\${([^{]+[^}])}/g, (m46, a121)=>{
        return data[a121] || '';
    });
};
let renderDataRepeat = (data, key, context)=>{
    let scope = typeof key === 'undefined' || key === 'data' || key === '' ? data : data[key];
    let items = context.innerHTML.match(/\${[^{]+[^}]}/g);
    if (items && items.length > 0) {
        let html = context.outerHTML;
        let result = '';
        for(let i114 = 0; i114 < scope.length; i114++){
            result += renderDataKey(scope[i114], html);
        }
        return result;
    } else {
        return context.outerHTML;
    }
};
class CPXBranch1 extends HTMLElement {
    static get tag() {
        return 'cpx-branch';
    }
    template;
    _url = '';
    get url() {
        return this._url;
    }
    set url(val) {
        if (this._url === val) return;
        this._url = val;
        this.setAttribute('url', this._url);
        fetch(val).then((resp)=>resp.text()
        ).then((data)=>{
            this.data = data.replaceAll("}\n{", '}|||{').split("|||").map((c75)=>JSON.parse(c75)
            );
        });
    }
    _data;
    get data() {
        if (this.filter !== '' && this.query !== '') {
            return this._data.filter((d84)=>d84[this.filter] === this.query
            ).sort((a121, b43)=>{
                let ret = 0;
                let ord = {
                    desc: 1,
                    asc: -1
                };
                if (this.sort !== '') {
                    ret = a121[this.sort] == b43[this.sort] ? ret : a121[this.sort] < b43[this.sort] ? ord[this.order] : -ord[this.order];
                } else {
                    ret = a121 == b43 ? ret : a121 < b43 ? ord[this.order] : -ord[this.order];
                }
                return ret;
            });
        } else {
            return this._data;
        }
    }
    set data(val) {
        if (this._data === val) return;
        this._data = val;
        this.render();
    }
    _filter = '';
    get filter() {
        return this._filter;
    }
    set filter(val) {
        if (this._filter === val) return;
        this._filter = val;
        this.render();
    }
    _query = '';
    get query() {
        return this._query;
    }
    set query(val) {
        if (this._query === val) return;
        this._query = val;
    }
    _sort = '';
    get sort() {
        return this._sort;
    }
    set sort(val) {
        if (this._sort === val) return;
        this._sort = val;
    }
    _order = 'asc';
    get order() {
        return this._order;
    }
    set order(val) {
        if (this._order === val) return;
        this._order = val;
    }
    _group = '';
    get group() {
        return this._group;
    }
    set group(val) {
        if (this._group === val) return;
        this._group = val;
    }
    cy;
    constructor(url){
        super();
        this.attachShadow({
            mode: "open"
        });
        this.template = this.querySelector('template').cloneNode(true);
    }
    connectedCallback() {
        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
        this.cy = cl({
            container: this.shadowRoot.querySelector('#cy'),
            elements: [
                {
                    data: {
                        id: 'a'
                    }
                },
                {
                    data: {
                        id: 'b'
                    }
                },
                {
                    data: {
                        id: 'ab',
                        source: 'a',
                        target: 'b'
                    }
                }
            ],
            style: [
                {
                    selector: 'node',
                    style: {
                        'background-color': '#666',
                        'label': 'data(id)'
                    }
                },
                {
                    selector: 'edge',
                    style: {
                        'width': 3,
                        'line-color': '#ccc',
                        'target-arrow-color': '#ccc',
                        'target-arrow-shape': 'triangle',
                        'curve-style': 'bezier'
                    }
                }
            ],
            layout: {
                name: 'grid',
                rows: 1
            }
        });
    }
    static get observedAttributes() {
        return [
            'url',
            'filter',
            'query',
            'sort',
            'order',
            'group'
        ];
    }
    attributeChangedCallback(name, oldVal, newVal) {
        this[name] = newVal;
    }
    render() {
        if (this.data) {
            this.template = this.querySelector('template').cloneNode(true);
            this.template.content.querySelectorAll('[data-group]').forEach((el1)=>{
                let group = el1.getAttribute('data-group');
                let groups = this.data.reduce((a121, c75)=>{
                    if (!a121[c75[group]]) {
                        a121[c75[group]] = [
                            c75
                        ];
                    } else {
                        a121[c75[group]].push(c75);
                    }
                    return a121;
                }, {
                });
                el1.innerHTML = el1.innerHTML;
            });
            this.template.content.querySelectorAll('[data-repeat]').forEach((el1)=>{
                let attr = el1.getAttribute('data-repeat');
                el1.parentNode.innerHTML = renderDataRepeat(this.data, attr, el1);
            });
            this.template.content.innerHTML = renderDataKey(this.data, this.template.innerHTML);
            while(this.shadowRoot.firstChild){
                this.shadowRoot.removeChild(this.shadowRoot.firstChild);
            }
            this.shadowRoot.appendChild(this.template.content.cloneNode(true));
            this.cy = cl({
                container: this.shadowRoot.querySelector('#cy'),
                elements: [
                    {
                        data: {
                            id: 'a'
                        }
                    },
                    {
                        data: {
                            id: 'b'
                        }
                    },
                    {
                        data: {
                            id: 'ab',
                            source: 'a',
                            target: 'b'
                        }
                    }
                ],
                style: [
                    {
                        selector: 'node',
                        style: {
                            'background-color': '#666',
                            'label': 'data(id)'
                        }
                    },
                    {
                        selector: 'edge',
                        style: {
                            'width': 3,
                            'line-color': '#ccc',
                            'target-arrow-color': '#ccc',
                            'target-arrow-shape': 'triangle',
                            'curve-style': 'bezier'
                        }
                    }
                ],
                layout: {
                    name: 'grid',
                    rows: 1
                }
            });
        }
    }
}
window.customElements.define(CPXBranch1.tag, CPXBranch1);
export { CPXBranch1 as CPXBranch };
