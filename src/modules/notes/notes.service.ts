import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Notes } from 'src/Core/schemas/notes.schema';
import { CreateNotesDto } from './notes.dto';

@Injectable()
export class NotesService {
  constructor(@InjectModel(Notes.name) private notesModel: Model<Notes>) {}
  createNotes = async (note: CreateNotesDto) => {
    const notes = await this.notesModel.insertMany(note);
    return { message: 'Created successfully', notes };
  };

  getAllNotes = async () => {
    const notes = await this.notesModel.find().populate('createdBy');
    if (!notes) {
      throw new HttpException('Notes not found', HttpStatus.NOT_FOUND);
    }
    return { message: 'success', notes };
  };

  updateNotes = async (id: string, note: any) => {
    const newNotes = await this.notesModel.findByIdAndUpdate(id, note, {
      new: true,
    });
    if (!newNotes) {
      throw new HttpException('Notes not found', HttpStatus.NOT_FOUND);
    }
    return { message: 'success', notes: newNotes };
  };

  deleteNotes = async (id: string) => {
    const notes = await this.notesModel.findByIdAndDelete(id);
    if (!notes) {
      throw new HttpException('Notes not found', HttpStatus.NOT_FOUND);
    }
    return { message: 'success', notes };
  };
}
