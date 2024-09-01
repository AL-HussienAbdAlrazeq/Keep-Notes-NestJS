import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Notes, NotesSchema } from 'src/Core/schemas/notes.schema';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Notes.name, schema: NotesSchema }]),
  ],
  providers: [NotesService,JwtService],
  controllers: [NotesController],
})
export class NotesModule {}
