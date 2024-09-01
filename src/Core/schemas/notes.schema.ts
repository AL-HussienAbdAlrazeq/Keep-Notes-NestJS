import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({ timestamps: true, versionKey: false })
export class Notes {
  @Prop({ required: true })
  title: String;

  @Prop({ required: true })
  description: String;

  @Prop({ required: true  , type:mongoose.Schema.Types.ObjectId , ref:'User'})
  createdBy: String;
}


export const NotesSchema = SchemaFactory.createForClass(Notes);