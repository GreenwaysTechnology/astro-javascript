'use strict';

const sayHello = () => {
    return this;
}
console.log(sayHello());

const training = {
    firstName: 'Subramanian',
    teach: function () {
        return () => {
            console.log(this.firstName)
        };
    }
}
const teachJs = training.teach();
teachJs();

const video = {
    genere: "Sc fi",
    list: ['a1', 'b1', 'c1'],
    findMovies() {
        var self = this;
        // this.list.forEach(function (movie, index) {
        //     console.log(self.genere, movie)
        // })
        this.list.forEach((movie, index) => {
            console.log(this.genere, movie)
        })
       
    }
};
video.findMovies();