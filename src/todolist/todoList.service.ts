import { Injectable } from '@nestjs/common';

@Injectable()
export class TodoListService {

    todoList: { name: string, remindTime: string, id: string, itemList: { done: boolean, name: string, editTime: string, id: string }[] }[]

    constructor() {
        this.todoList = []
    }

    getNote(): { name: string, remindTime: string, id: string }[] {
        const noteList = this.todoList.map((item) => {
            const { name, remindTime, id } = item
            const note = { name, remindTime, id }
            return note
        })
        return noteList
    }

    getItem(noteId: string): { done: boolean, name: string, editTime: string, id: string }[] {
        for (let i = 0; i < this.todoList.length; i++) {
            if (this.todoList[i].id === noteId) {
                return this.todoList[i].itemList
            }
        }
        return []
    }

    addItem(noteId: string, itemObj: { done: boolean, name: string, editTime: string, id: string }) {
        for (let i = 0; i < this.todoList.length; i++) {
            if (this.todoList[i].id === noteId) {
                this.todoList[i].itemList.push(itemObj)
                break
            }
        }
    }

    deleteItem(noteId: string, itemId: string) {
        for (let i = 0; i < this.todoList.length; i++) {
            if (this.todoList[i].id === noteId) {
                const { itemList } = this.todoList[i]
                for (let j = 0; j < itemList.length; j++) {
                    if (itemList[j].id === itemId) {
                        itemList.splice(j, 1)
                        break
                    }
                }
            }
        }
    }

    changeDone(noteId: string, itemId: string) {
        for (let i = 0; i < this.todoList.length; i++) {
            if (this.todoList[i].id === noteId) {
                const { itemList } = this.todoList[i]
                for (let j = 0; j < itemList.length; j++) {
                    if (itemList[j].id === itemId) {
                        itemList[j].done = !itemList[j].done
                        break
                    }
                }
            }
        }
    }

    deleteNote(noteId: string) {
        for (let i = 0; i < this.todoList.length; i++) {
            if (this.todoList[i].id === noteId) {
                this.todoList.splice(i, 1)
            }
        }
    }

    updateNote(noteName: string, remindTime: string, noteId: string) {
        for (let i = 0; i < this.todoList.length; i++) {
            if (this.todoList[i].id === noteId) {
                this.todoList[i].name = noteName
                this.todoList[i].remindTime = remindTime
            }
        }
    }

    addNote(note:{noteName:string,remindTime:string,id:string}){
        const noteObj={name:note.noteName,remindTime:note.remindTime,id:note.id,itemList:[]}
        this.todoList.push(noteObj)
    }
}