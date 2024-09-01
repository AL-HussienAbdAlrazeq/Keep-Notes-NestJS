"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckEmailExistMiddleware = void 0;
const bcrypt = require("bcrypt");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_schema_1 = require("../schemas/user.schema");
const mongoose_2 = require("mongoose");
let CheckEmailExistMiddleware = class CheckEmailExistMiddleware {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async use(req, res, next) {
        let isUserExist = await this.userModel.findOne({ email: req.body.email });
        if (isUserExist)
            throw new common_1.HttpException('Email already exist', common_1.HttpStatus.CONFLICT);
        req.body.password = bcrypt.hashSync(req.body.password, 8);
        req.body.rePassword = bcrypt.hashSync(req.body.password, 8);
        next();
    }
};
exports.CheckEmailExistMiddleware = CheckEmailExistMiddleware;
exports.CheckEmailExistMiddleware = CheckEmailExistMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CheckEmailExistMiddleware);
//# sourceMappingURL=check-email-exist.middleware.js.map