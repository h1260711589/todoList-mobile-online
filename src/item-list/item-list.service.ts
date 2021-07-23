import { Get, Injectable, Post } from '@nestjs/common';

@Injectable()
export class ItemListService {
    // {
    //     noteId
    //     itemList
    // }
    noteItemList
    constructor() {
        this.noteItemList = []
    }

    getItemList(noteId) {
        const list = this.noteItemList
        for (let i = 0; i < list.length; i++) {
            if (list[i].noteId == noteId) {
                return list[i].itemList
            }
        }
    }

    addNote(noteId) {
        let obj = {
            noteId,
            itemList: []
        }
        this.noteItemList.push(obj)
    }

    addItem(noteId, itemObj) {
        const list = this.noteItemList
        for (let i = 0; i < list.length; i++) {
            if (list[i].noteId == noteId) {
                list[i].itemList.push(itemObj)
                break
            }
        }

    }

    changeDone(done, itemId, noteId) {  
        const list = this.noteItemList
        for (let i = 0; i < list.length; i++) {
            if (list[i].noteId == noteId) {
                for (let j = 0; j < list[i].itemList.length; j++) {  
                    if (list[i].itemList[j].id == itemId) {
                        list[i].itemList[j].done=done
                        break
                    }
                }
                break
            }
        }
    }

    deleteItem(noteId,itemId){
        const list = this.noteItemList
        for (let i = 0; i < list.length; i++) {
            if (list[i].noteId == noteId) {
                for (let j = 0; j < list[i].itemList.length; j++) {  
                    if (list[i].itemList[j].id == itemId) {
                        list[i].itemList.splice(j,1)
                        break
                    }
                }
                break
            }
        }
    }
}
