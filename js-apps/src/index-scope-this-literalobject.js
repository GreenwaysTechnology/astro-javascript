'use strict';

const training = {
    teach: function () {
        // return function teachJS() {
        //     return this;
        // }
        return function () {
            return this;
        }
    }
}
const teachJs = training.teach()
console.log('teachJs owner ', teachJs());
console.log('teachJs changing owner ', teachJs.call(training));

