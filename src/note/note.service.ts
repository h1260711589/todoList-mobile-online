import { Injectable } from '@nestjs/common';

@Injectable()
export class NoteService {
    noteList
    constructor() {
        this.noteList = []
    }

    getNoteList() {
        return this.noteList
    }

    addNote(noteObj) {
        this.noteList.push(noteObj)
    }

    editNote(newNoteObj) {
        for (let i = 0; i < this.noteList.length; i++) {
            if (this.noteList[i].id != newNoteObj.id)
                continue
            else {
                this.noteList[i] = newNoteObj
                break
            }
        }
    }

    deleteNote(id) {
        for (let i = 0; i < this.noteList.length; i++) {
            if (this.noteList[i].id == id) {
                this.noteList.splice(i, 1)
                break
            }
        }
    }
}