import { Model } from 'mongoose';
import { Notes } from 'src/Core/schemas/notes.schema';
import { CreateNotesDto } from './notes.dto';
export declare class NotesService {
    private notesModel;
    constructor(notesModel: Model<Notes>);
    createNotes: (note: CreateNotesDto) => Promise<{
        message: string;
        notes: import("mongoose").MergeType<import("mongoose").Document<unknown, {}, Notes> & Notes & {
            _id: import("mongoose").Types.ObjectId;
        }, Omit<CreateNotesDto, "_id">>[];
    }>;
    getAllNotes: () => Promise<{
        message: string;
        notes: (import("mongoose").Document<unknown, {}, Notes> & Notes & {
            _id: import("mongoose").Types.ObjectId;
        })[];
    }>;
    updateNotes: (id: string, note: any) => Promise<{
        message: string;
        notes: import("mongoose").Document<unknown, {}, Notes> & Notes & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
    deleteNotes: (id: string) => Promise<{
        message: string;
        notes: import("mongoose").Document<unknown, {}, Notes> & Notes & {
            _id: import("mongoose").Types.ObjectId;
        };
    }>;
}
