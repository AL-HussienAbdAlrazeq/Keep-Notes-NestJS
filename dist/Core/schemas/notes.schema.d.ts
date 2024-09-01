import mongoose from 'mongoose';
export declare class Notes {
    title: String;
    description: String;
    createdBy: String;
}
export declare const NotesSchema: mongoose.Schema<Notes, mongoose.Model<Notes, any, any, any, mongoose.Document<unknown, any, Notes> & Notes & {
    _id: mongoose.Types.ObjectId;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Notes, mongoose.Document<unknown, {}, mongoose.FlatRecord<Notes>> & mongoose.FlatRecord<Notes> & {
    _id: mongoose.Types.ObjectId;
}>;
