
class Parent{
    constructor(){
        this.fatherName="MAzharul";
    }
}

class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
    }
}
const baby1 = new Child('tasin');
console.log(baby1);
const baby2 = new Child('tonoy');
console.log(baby2);

