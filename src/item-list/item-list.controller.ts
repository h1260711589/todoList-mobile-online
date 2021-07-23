import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ItemListService } from './item-list.service'

@Controller('item-list')
export class ItemListController {
    constructor(readonly itemListService: ItemListService) { }
    @Get()
    getItemList(@Query('noteId') noteId) {
        return this.itemListService.getItemList(noteId)
    }

    @Post('addNote')
    addNote(@Body('noteId') noteId) {
        this.itemListService.addNote(noteId)
    }

    @Post('addItem')
    addItem(@Body() body) {
        this.itemListService.addItem(body.noteId, body.item)
    }

    @Post('changeDone')
    changeDone(@Body() body) {
        this.itemListService.changeDone(body.done, body.itemId, body.noteId)
    }

    @Post('deleteItem')
    deleteItem(@Body() body) {
        this.itemListService.deleteItem(body.noteId, body.itemId)
    }

}
