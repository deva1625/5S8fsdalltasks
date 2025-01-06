function Student(name,grade){
    this.name=name;
    this.grade=grade;
    this.study=function(){
        return this.name+" is studying very hard";
    };
    this.getGrade=function(){
        return this.name+" got "+this.grade;
    }

}

let st1=new Student("deva",90);
let st2=new Student("siva",80);

console.log(st1.study());

console.log(st2.getGrade());