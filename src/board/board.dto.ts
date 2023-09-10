
export class CreateBoardDto {

    private boardNo: number
    private title: string
    private content: string
    private regDate: Date = new Date()


    constructor(title: string, content: string,) {
        this.title = title
        this.content = content
    }

    get getBoardNo(): number {
        return this.boardNo
    }


    @setLog
    set setContent(content: string) {
        this.content = content
    }
}


export class BoardEntity {


    @readonly(true)
    boardNo: number
    title: string
    content: string
    regDate: Date


    getBoardNo(): number {
        return this.boardNo
    }

}