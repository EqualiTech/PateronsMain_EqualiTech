// file containing the classes of Pateorn
// and a function to make Paterons
// then store them in an array: myArray

class Pateron {
    constructor(name, time){
        this.name = name;
        this.time = time;
        // this.title = title;

    }
}


let myArray = [];
function newPateron(name, time){
    myArray.push(new Pateron(name, time));
    return myArray;
}