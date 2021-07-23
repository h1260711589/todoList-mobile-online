import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { NoteService } from './note.service'

let note = [{
    name: '一号便签~~',
    remindTime: '2021-7-20 20:26',
    id: '123'
}]

@Controller('note')
export class NoteController {

    constructor(readonly noteService: NoteService) { }

    @Get()
    getNoteList() {
        return this.noteService.getNoteList()
    }


    @Post('add')
    addNote(@Body() body) {
        this.noteService.addNote(body)
    }

    @Post('edit')
    editNote(@Body() body) {
        this.noteService.editNote(body)
    }

    @Post('delete')
    deleteNote(@Body('id') id) {
        this.noteService.deleteNote(id)
    }
}
