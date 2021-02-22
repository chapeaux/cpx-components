(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./cpx-user.ts", "https://deno.land/std@0.87.0/testing/asserts.ts"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var cpx_user_ts_1 = require("./cpx-user.ts");
    var asserts_ts_1 = require("https://deno.land/std@0.87.0/testing/asserts.ts");
    Deno.test('Data Test', function () {
        var user = new cpx_user_ts_1.CPXUser();
        asserts_ts_1.assertEquals(user.name, '');
    });
});
