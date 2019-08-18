class People{
    constructor(name){
        this.name = name;
    }
    getName(){
        console.log(this.name)
    }
}

var p = new People("huyong");
p.getName();
