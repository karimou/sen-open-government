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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("../../../middleware");
const s3_1 = require("../../../services/s3");
const multer_1 = __importDefault(require("multer"));
const models_1 = require("../../../models");
const upload = (0, multer_1.default)();
const router = (0, express_1.Router)();
router
    .post('/upload', middleware_1.isUserSigned, upload.single('file'), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e;
    if (!req.file)
        res.status(500).send('No file provided');
    let upload = yield (0, s3_1.uploadMultipart)((_a = req.file) === null || _a === void 0 ? void 0 : _a.originalname, (_b = req.file) === null || _b === void 0 ? void 0 : _b.buffer);
    let params = {
        name: (_c = req.file) === null || _c === void 0 ? void 0 : _c.originalname,
        mime_type: (_d = req.file) === null || _d === void 0 ? void 0 : _d.mimetype,
        url: upload === null || upload === void 0 ? void 0 : upload.Location,
    };
    let file = new models_1.MyFile(params, (_e = req.session) === null || _e === void 0 ? void 0 : _e.user);
    yield file.add();
    if (!file.id)
        res.status(500).send('File could not be added to database');
    res.status(200).send(file);
}));
exports.default = router;
