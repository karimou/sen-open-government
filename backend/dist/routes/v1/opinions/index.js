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
    .get('/:opinionId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let opinion = yield models_1.Opinion
            .getById(req.params.opinionId);
        res.status(200).send(opinion);
    }
    catch (e) {
        return res.status(500).send(e);
    }
}));
router
    .get('/proposals/:opinionId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let proposals = yield models_1.Opinion.listProposals(Number(req.params.opinionId));
        res.status(200).send(proposals);
    }
    catch (e) {
        return res.status(500).send(e);
    }
}));
router.route('/proposals')
    .all(middleware_1.isUserSigned)
    .post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        yield models_1.Opinion.addProposal(req.body.opinionId, req.body.number, req.body.content, (_a = req.session) === null || _a === void 0 ? void 0 : _a.user);
        res.status(200).send();
    }
    catch (e) {
        return res.status(500).send(e);
    }
}))
    .put((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        yield models_1.Opinion.updateProposal(req.body.id, req.body.number, req.body.content, (_b = req.session) === null || _b === void 0 ? void 0 : _b.user);
        res.status(200).send();
    }
    catch (e) {
        return res.status(500).send(e);
    }
}))
    .delete((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield models_1.Opinion.deleteProposals(req.body.ids);
        res.status(200).send();
    }
    catch (e) {
        return res.status(500).send(e);
    }
}));
router.route('')
    .all(middleware_1.isUserSigned)
    .get((_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let opinions = yield models_1.Opinion
            .list();
        res.status(200).send(opinions);
    }
    catch (e) {
        return res.status(500).send(e);
    }
}))
    .post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    try {
        let opinion = new models_1.Opinion(req.body, (_c = req.session) === null || _c === void 0 ? void 0 : _c.user);
        yield opinion.add();
        res.status(200).send(opinion);
    }
    catch (e) {
        return res.status(500).send(e);
    }
}))
    .put((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _d;
    try {
        let opinion = new models_1.Opinion(req.body, (_d = req.session) === null || _d === void 0 ? void 0 : _d.user);
        yield opinion.update();
        res.status(200).send(opinion);
    }
    catch (e) {
        return res.status(500).send(e);
    }
}))
    .delete((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield models_1.Opinion.delete(req.body.ids);
        res.status(200).send();
    }
    catch (e) {
        return res.status(500).send(e);
    }
}));
exports.default = router;
