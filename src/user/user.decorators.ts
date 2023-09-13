// export function readonly(writable: boolean = true) {
//     return function (target: any, decoratedPropertyName: any): any {
//         // console.log('target :::', target); // {}
//         // console.log('decoratedPropertyName :::', decoratedPropertyName); // boardNo
//         // console.log('writable :::', writable)

//         return {
//             writable
//         }
//     }
// }

// export function setLog(target: any, propertyKey: string, descriptor: PropertyDescriptor): any {
//     const originalSetter = descriptor.set;

//     // 원래 getter 메소드 대신 새로운 getter 메소드를 정의
//     descriptor.set = function () {
//         console.log(`Setter ${propertyKey}`);
//         return originalSetter.call(this);
//     };

//     return descriptor;
// }
