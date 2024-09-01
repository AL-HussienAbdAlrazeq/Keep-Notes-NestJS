import { NotesService } from './notes.service';
import { CreateNotesDto, ParamsDto, UpdateNotesDto } from './notes.dto';
export declare class NotesController {
    private _NotesService;
    constructor(_NotesService: NotesService);
    createNotes(body: CreateNotesDto): Promise<{
        message: string;
        notes: import("mongoose").MergeType<import("mongoose").Document<unknown, {}, import("../../Core/schemas/notes.schema").Notes> & import("../../Core/schemas/notes.schema").Notes & {
            _id: import("mongoose").Types.ObjectId;
        }, Omit<CreateNotesDto, "_id">>[];
    }>;
    getAllNotes(): Promise<{
        message: string;
        notes: (import("mongoose").Document<unknown, {}, import("../../Core/schemas/notes.schema").Notes> & import("../../Core/schemas/notes.schema").Notes & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    updateNotes(param: ParamsDto, body: UpdateNotesDto): Promise<{
        message: string;
        notes: import("mongoose").Document<unknown, {}, import("../../Core/schemas/notes.schema").Notes> & import("../../Core/schemas/notes.schema").Notes & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    deleteNotes(param: ParamsDto): Promise<{
        message: string;
        notes: import("mongoose").Document<unknown, {}, import("../../Core/schemas/notes.schema").Notes> & import("../../Core/schemas/notes.schema").Notes & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
}
