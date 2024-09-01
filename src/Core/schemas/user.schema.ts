import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true, versionKey: false })
export class User {
  @Prop({ required: true })
  name: String;

  @Prop({ required: true })
  email: String;

  @Prop({ required: true })
  password: String;

  @Prop({ required: true })
  rePassword: String;

  @Prop({ required: true })
  age: Number;

  @Prop({ required: true })
  gender: String;
}


export const UserSchema = SchemaFactory.createForClass(User);