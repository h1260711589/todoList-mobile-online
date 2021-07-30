import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { TodoListService } from './todoList.service'


@Controller('/todoList')
export class TodoListController {

    constructor(readonly TodoListService: TodoListService) { }

    @Get('/Notes')
    getNote() {
        return this.TodoListService.getNote()
    }

    @Get('/items')
    getItem(@Query('noteId') noteId: string) {
        return this.TodoListService.getItem(noteId)
    }

    @Post('/items')
    addItem(@Body() data: { noteId: string, itemObj: { done: boolean, name: string, editTime: string, id: string } }) {
        const { noteId, itemObj } = data
        this.TodoListService.addItem(noteId, itemObj)
    }

    @Delete('/items')
    deleteItem(@Body() data: { noteId: string, itemId: string }) {
        const { noteId, itemId } = data
        this.TodoListService.deleteItem(noteId, itemId)
    }

    @Put('/items')
    changeDone(@Body() data: { noteId: string, itemId: string }) {
        const { noteId, itemId } = data
        this.TodoListService.changeDone(noteId, itemId)
    }

    @Delete('/Notes')
    deleteNote(@Body('noteId') noteId: string) {
        this.TodoListService.deleteNote(noteId)
    }

    @Put('/Notes')
    updateNote(@Body() note) {
        this.TodoListService.updateNote(note.noteName, note.remindTime, note.noteId)
    }

    @Post('/Notes')
    addNote(@Body() note:{noteName:string,remindTime:string,id:string}){
        this.TodoListService.addNote(note)
    }

}
