let person={
    name:"deva",
    age:18,
    greet(){
        return "Hello "+this.name+"How are you";
    },
    isAdult(){
        if(this.age>18){
            return "Person is adult";
        }
        else{
            return "Person is not adult";
        }
    }
}
console.log(person.isAdult());
