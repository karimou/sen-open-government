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
    .get('/:electionId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let election = yield models_1.Election
            .getById(req.params.electionId);
        if (!election)
            return res.status(404).send();
        let candidates = yield models_1.Person.listElectionCandidates(election.id);
        let opinions = yield models_1.Opinion.listOpinionsByElection(election.id);
        opinions.forEach(opinion => {
            opinion.has_content = !!opinion.content && (opinion.content != '');
            opinion.content = null;
        });
        let allIssues = yield models_1.Issue.list();
        let issueIds = Array.from(new Set(opinions.map(opinion => opinion.issue_id)));
        let issues = allIssues.filter(issue => issueIds.includes(issue.id));
        res.status(200).send(Object.assign(Object.assign({}, election), { candidates, opinions, issues }));
    }
    catch (e) {
        return res.status(500).send(e);
    }
}));
router
    .get('/candidates/:electionId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let persons = yield models_1.Person.listElectionCandidates(Number(req.params.electionId));
        res.status(200).send(persons);
    }
    catch (e) {
        return res.status(500).send(e);
    }
}));
router.route('/candidates')
    .all(middleware_1.isUserSigned)
    .post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        yield models_1.Election.addCandidate(req.body.electionId, req.body.personId, (_a = req.session) === null || _a === void 0 ? void 0 : _a.user);
        res.status(200).send();
    }
    catch (e) {
        return res.status(500).send(e);
    }
}))
    .delete((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Promise.all(req.body.pairs.map((pair) => models_1.Election.removeCandidate(pair.electionId, pair.personId)));
        res.status(200).send();
    }
    catch (e) {
        return res.status(500).send(e);
    }
}));
router
    .get('', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let elections = yield models_1.Election
            .list();
        res.status(200).send(elections);
    }
    catch (e) {
        return res.status(500).send(e);
    }
}));
router.route('')
    .all(middleware_1.isUserSigned)
    .post((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    try {
        let election = new models_1.Election(req.body, (_b = req.session) === null || _b === void 0 ? void 0 : _b.user);
        yield election.add();
        res.status(200).send(election);
    }
    catch (e) {
        return res.status(500).send(e);
    }
}))
    .put((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _c;
    try {
        let election = new models_1.Election(req.body, (_c = req.session) === null || _c === void 0 ? void 0 : _c.user);
        yield election.update();
        res.status(200).send(election);
    }
    catch (e) {
        return res.status(500).send(e);
    }
}))
    .delete((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield models_1.Election.delete(req.body.ids);
        res.status(200).send();
    }
    catch (e) {
        return res.status(500).send(e);
    }
}));
exports.default = router;
