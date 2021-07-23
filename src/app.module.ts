import { Module } from '@nestjs/common';
import { NoteController } from './note/note.controller';
import { ItemListController } from './item-list/item-list.controller';
import { NoteService } from './note/note.service'
import { ItemListService } from './item-list/item-list.service'

@Module({
  imports: [],
  controllers: [NoteController, ItemListController],
  providers: [NoteService, ItemListService]
})
export class AppModule { }
