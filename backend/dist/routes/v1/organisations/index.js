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
    .get('/:organisationId', middleware_1.isUserSigned, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let organisation = yield models_1.Organisation
            .getById(req.params.organisationId);
        res.status(200).send(organisation);
    }
    catch (e) {
        return res.status(500).send(e);
    }
}));
router
    .get('/members/:organisationId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let persons = yield models_1.Person.listOrganisationMembers(Number(req.params.organisationId));
        res.status(200).send(persons);
    }
    catch (e) {
        return res.status(500).send(e);
    }
}));
router.route('/members')
    .all(middleware_1.isUserSigned)
    .post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        yield models_1.Organisation.addMember(req.body.organisationId, req.body.personId, req.body.role, (_a = req.session) === null || _a === void 0 ? void 0 : _a.user);
        res.status(200).send();
    }
    catch (e) {
        return res.status(500).send(e);
    }
}))
    .delete((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Promise.all(req.body.pairs.map((pair) => models_1.Organisation.removeMember(pair.organisationId, pair.personId)));
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
        let organisations = yield models_1.Organisation
            .list();
        res.status(200).send(organisations);
    }
    catch (e) {
        return res.status(500).send(e);
    }
}))
    .post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        let organisation = new models_1.Organisation(req.body, (_b = req.session) === null || _b === void 0 ? void 0 : _b.user);
        yield organisation.add();
        res.status(200).send(organisation);
    }
    catch (e) {
        return res.status(500).send(e);
    }
}))
    .put((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    try {
        let organisation = new models_1.Organisation(req.body, (_c = req.session) === null || _c === void 0 ? void 0 : _c.user);
        yield organisation.update();
        res.status(200).send(organisation);
    }
    catch (e) {
        return res.status(500).send(e);
    }
}))
    .delete((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield models_1.Organisation.delete(req.body.ids);
        res.status(200).send();
    }
    catch (e) {
        return res.status(500).send(e);
    }
}));
exports.default = router;
