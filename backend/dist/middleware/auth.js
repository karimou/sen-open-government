"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isUserSigned = void 0;
const isUserSigned = (req, res, next) => {
    var _a, _b;
    if ((_b = (_a = req.session) === null || _a === void 0 ? void 0 : _a.user) === null || _b === void 0 ? void 0 : _b.id) {
        next();
    }
    else {
        res.status(401).send();
    }
};
exports.isUserSigned = isUserSigned;
