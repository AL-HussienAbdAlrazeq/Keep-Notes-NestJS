import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNotesDto, ParamsDto, UpdateNotesDto } from './notes.dto';
import { AuthGuard } from 'src/Core/guards/auth.guard';

@Controller('notes')
@UseGuards(AuthGuard)
export class NotesController {
    constructor(private _NotesService:NotesService){}

    @Post()
    createNotes(@Body() body:CreateNotesDto){
        return this._NotesService.createNotes(body)
    }

    @Get()
    getAllNotes(){
        return this._NotesService.getAllNotes()
    }

    @Put('/:id')
    updateNotes(@Param() param:ParamsDto ,@Body() body:UpdateNotesDto ){
        return this._NotesService.updateNotes(param.id,body)
    }
    @Delete('/:id')
    deleteNotes(@Param() param:ParamsDto){
         return this._NotesService.deleteNotes(param.id)
    }
}
