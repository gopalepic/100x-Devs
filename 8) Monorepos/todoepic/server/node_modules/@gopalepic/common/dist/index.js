"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignupInput = void 0;
const zod_1 = require("zod");
exports.SignupInput = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string()
});
