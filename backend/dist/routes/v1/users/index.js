"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const models_1 = require("../../../models");
const middleware_1 = require("../../../middleware");
const router = (0, express_1.Router)();
router
    .post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let user = new models_1.User(req.body);
    yield user.login()
        .catch(e => console.log(e));
    if (!user.id)
        return res.status(401).send();
    req.session.user = user;
    req.session.save();
    return res.status(200).send(user);
}));
router
    .get('/logout', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    req.session.destroy((err) => { });
    res.status(200).send();
}));
router
    .get('/:userId', middleware_1.isUserSigned, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let user = yield models_1.User
            .getById(req.params.userId);
        res.status(200).send(user);
    }
    catch (e) {
        return res.status(500).send(e);
    }
}));
router.route('')
    .all(middleware_1.isUserSigned)
    .get((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let users = yield models_1.User
            .list();
        res.status(200).send(users);
    }
    catch (e) {
        return res.status(500).send(e);
    }
}))
    .post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        let user = new models_1.User(Object.assign(Object.assign({}, req.body), { password: 'default' }), (_a = req.session) === null || _a === void 0 ? void 0 : _a.user);
        yield user.add();
        res.status(200).send(user);
    }
    catch (e) {
        return res.status(500).send(e);
    }
}))
    .put((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        let user = new models_1.User(req.body, (_b = req.session) === null || _b === void 0 ? void 0 : _b.user);
        yield user.update();
        res.status(200).send(user);
    }
    catch (e) {
        return res.status(500).send(e);
    }
}))
    .delete((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield models_1.User.delete(req.body.ids);
        res.status(200).send();
    }
    catch (e) {
        return res.status(500).send(e);
    }
}));
exports.default = router;
