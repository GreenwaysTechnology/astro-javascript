'use strict';

const training = {
    teach: function () {

        //inner function of the teach function
        function teachJS() {
            return this;
        }
        //call teach js
        console.log('teachJs Owner ',teachJS())
        //owner binding
        //console.log('teachJs Owner ',training.teachJS())
        console.log('teachJs Owner ', teachJS.call(training))

        //teach return value
        return this;
    }
}
console.log('teach Owner ', training.teach());