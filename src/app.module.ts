import { Module } from '@nestjs/common';
import { TodoListController } from './todolist/todoList.controller';
import { TodoListService } from './todolist/todoList.service'


@Module({
  imports: [],
  controllers: [TodoListController],
  providers: [TodoListService]
})
export class AppModule { }
