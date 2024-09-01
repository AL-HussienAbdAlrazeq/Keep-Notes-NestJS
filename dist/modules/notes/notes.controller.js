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
exports.NotesController = void 0;
const common_1 = require("@nestjs/common");
const notes_service_1 = require("./notes.service");
const notes_dto_1 = require("./notes.dto");
const auth_guard_1 = require("../../Core/guards/auth.guard");
let NotesController = class NotesController {
    constructor(_NotesService) {
        this._NotesService = _NotesService;
    }
    createNotes(body) {
        return this._NotesService.createNotes(body);
    }
    getAllNotes() {
        return this._NotesService.getAllNotes();
    }
    updateNotes(param, body) {
        return this._NotesService.updateNotes(param.id, body);
    }
    deleteNotes(param) {
        return this._NotesService.deleteNotes(param.id);
    }
};
exports.NotesController = NotesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [notes_dto_1.CreateNotesDto]),
    __metadata("design:returntype", void 0)
], NotesController.prototype, "createNotes", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], NotesController.prototype, "getAllNotes", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [notes_dto_1.ParamsDto, notes_dto_1.UpdateNotesDto]),
    __metadata("design:returntype", void 0)
], NotesController.prototype, "updateNotes", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [notes_dto_1.ParamsDto]),
    __metadata("design:returntype", void 0)
], NotesController.prototype, "deleteNotes", null);
exports.NotesController = NotesController = __decorate([
    (0, common_1.Controller)('notes'),
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    __metadata("design:paramtypes", [notes_service_1.NotesService])
], NotesController);
//# sourceMappingURL=notes.controller.js.map