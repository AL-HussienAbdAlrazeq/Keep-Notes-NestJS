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
exports.SigninController = void 0;
const common_1 = require("@nestjs/common");
const signin_service_1 = require("./signin.service");
const auth_dto_1 = require("../DTO/auth.dto");
let SigninController = class SigninController {
    constructor(_SigninService) {
        this._SigninService = _SigninService;
    }
    signin(body) {
        return this._SigninService.signin(body);
    }
};
exports.SigninController = SigninController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.SigninDto]),
    __metadata("design:returntype", void 0)
], SigninController.prototype, "signin", null);
exports.SigninController = SigninController = __decorate([
    (0, common_1.Controller)('auth/signin'),
    __metadata("design:paramtypes", [signin_service_1.SigninService])
], SigninController);
//# sourceMappingURL=signin.controller.js.map