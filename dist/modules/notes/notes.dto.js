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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParamsDto = exports.UpdateNotesDto = exports.CreateNotesDto = void 0;
const class_validator_1 = require("class-validator");
class CreateNotesDto {
}
exports.CreateNotesDto = CreateNotesDto;
__decorate([
    (0, class_validator_1.MaxLength)(200),
    (0, class_validator_1.MinLength)(5),
    __metadata("design:type", String)
], CreateNotesDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(2000),
    (0, class_validator_1.MinLength)(5),
    __metadata("design:type", String)
], CreateNotesDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], CreateNotesDto.prototype, "createdBy", void 0);
class UpdateNotesDto {
}
exports.UpdateNotesDto = UpdateNotesDto;
__decorate([
    (0, class_validator_1.MaxLength)(200),
    (0, class_validator_1.MinLength)(5),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateNotesDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.MaxLength)(2000),
    (0, class_validator_1.MinLength)(5),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateNotesDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateNotesDto.prototype, "createdBy", void 0);
class ParamsDto {
}
exports.ParamsDto = ParamsDto;
__decorate([
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], ParamsDto.prototype, "id", void 0);
//# sourceMappingURL=notes.dto.js.map