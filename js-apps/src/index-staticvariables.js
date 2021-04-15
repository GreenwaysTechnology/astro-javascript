class Message {
    static SUCCESS = 'success';
    static WARNING = 'Warning';
    static FAILED = 'Failed'
    constructor() {

    }
    static doStuff(){
        return 'static variables'
    }
}
console.log(Message.SUCCESS,Message.doStuff())