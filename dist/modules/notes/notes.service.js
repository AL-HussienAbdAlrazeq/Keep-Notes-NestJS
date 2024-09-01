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
exports.NotesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const notes_schema_1 = require("../../Core/schemas/notes.schema");
let NotesService = class NotesService {
    constructor(notesModel) {
        this.notesModel = notesModel;
        this.createNotes = async (note) => {
            const notes = await this.notesModel.insertMany(note);
            return { message: 'Created successfully', notes };
        };
        this.getAllNotes = async () => {
            const notes = await this.notesModel.find().populate('createdBy');
            if (!notes) {
                throw new common_1.HttpException('Notes not found', common_1.HttpStatus.NOT_FOUND);
            }
            return { message: 'success', notes };
        };
        this.updateNotes = async (id, note) => {
            const newNotes = await this.notesModel.findByIdAndUpdate(id, note, {
                new: true,
            });
            if (!newNotes) {
                throw new common_1.HttpException('Notes not found', common_1.HttpStatus.NOT_FOUND);
            }
            return { message: 'success', notes: newNotes };
        };
        this.deleteNotes = async (id) => {
            const notes = await this.notesModel.findByIdAndDelete(id);
            if (!notes) {
                throw new common_1.HttpException('Notes not found', common_1.HttpStatus.NOT_FOUND);
            }
            return { message: 'success', notes };
        };
    }
};
exports.NotesService = NotesService;
exports.NotesService = NotesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(notes_schema_1.Notes.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], NotesService);
//# sourceMappingURL=notes.service.js.map