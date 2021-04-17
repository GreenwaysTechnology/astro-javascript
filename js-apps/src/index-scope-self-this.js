'use strict';

//window.firstName = 'ram'

// const training = {
//     firstName: 'Subramanian',
//     teach: function () {
//         console.log('teach function', this.firstName)
//         //inner function: i need to access firstName inside teachjs
//         let self = this;
//         function teachJs() {
//             //console.log('teachJs function', this.firstName)
//             console.log('teachJs function', self.firstName)
//         }
//         teachJs();
//     }
// }

const training = {
    firstName: 'Subramanian',
    teach: function () {
        console.log('teach function', this.firstName)
        //inner function: i need to access firstName inside teachjs
        let self = this;
        return function () {
            //console.log('teachJs function', this.firstName)
            console.log('teachJs function', self.firstName)
        }
    }
}
const teachJs = training.teach()
teachJs();