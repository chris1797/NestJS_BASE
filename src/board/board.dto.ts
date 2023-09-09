import { log } from "console";

function readonly(writable: boolean = true) {
    return function (target: any, decoratedPropertyName: any): any {
        // console.log('target :::', target); // {}
        // console.log('decoratedPropertyName :::', decoratedPropertyName); // boardNo
        // console.log('writable :::', writable)

        return {
            writable
        }
    }
}

function setLog(target: any, propertyKey: string, descriptor: PropertyDescriptor): any {
    const originalSetter = descriptor.set;

    // 원래 getter 메소드 대신 새로운 getter 메소드를 정의 
    descriptor.set = function () {
        console.log(`Setter ${propertyKey}`);
        return originalSetter.call(this);
    };

    return descriptor;
}

interface Board {
    boardNo: number
    title: string
    content: string
    regDate: Date
}


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

    // setContent(content: string) {
    //     this.content = content
    // }
}