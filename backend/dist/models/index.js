"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Opinion = exports.Issue = exports.Person = exports.Organisation = exports.Election = exports.User = void 0;
const user_1 = __importDefault(require("./user"));
exports.User = user_1.default;
const election_1 = __importDefault(require("./election"));
exports.Election = election_1.default;
const organisation_1 = __importDefault(require("./organisation"));
exports.Organisation = organisation_1.default;
const person_1 = __importDefault(require("./person"));
exports.Person = person_1.default;
const issue_1 = __importDefault(require("./issue"));
exports.Issue = issue_1.default;
const opinion_1 = __importDefault(require("./opinion"));
exports.Opinion = opinion_1.default;
