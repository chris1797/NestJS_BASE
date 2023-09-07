function readonly(writable: boolean = true) {
    return function (target: any, decoratedPropertyName: any): any {
        return {
            writable
        }
    }
}


export class CreateBoardDto {

    @readonly(true)
    boardNo: number
    title: string
    content: string
    regDate: Date
}