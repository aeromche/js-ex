////////////        bind()        ///////////////////
const Person={
    firstName:"abbas",
    lastName:"elahi",
    fullName:function(){
        return this.firstName+" "+this.lastName;
    },
    sum:function(x,y){
        return x+y;
    },
}
const obj1={
    firstName:"Ali",
    lastName:"sasanfar",
}
let fun1=Person.fullName.bind(obj1)
console.log("fun1:",fun1())//Ali sasanfar
console.log(Person.sum.bind(obj1)(10,20))//output:30
///////////////////////   call()    ////////////////
const personnew = {
    fullNamenew:function(){
        return this.firstNamenew+""+this.lastNamenew
    },
    showInfonew: function(age,city){
        console.log(this.firstNamenew+" "+this.lastNamenew+" "+age+" "+city)
    }
}
const student1={
    firstNamenew:"abbas",
    lastNamenew:"ehi",
}
const student2={
    firstNamenew:"ahamd",
    lastNamenew:"sasanfari",
}
console.log(personnew.fullNamenew.call(student1))
console.log(personnew.fullNamenew.call(student2))
personnew.showInfonew.call(student1,45,"Tehran")
personnew.showInfonew.call(student2,20,"yazd")
///////////////////////   apply()    ////////////////
console.log(personnew.fullNamenew.apply(student1))
console.log(personnew.fullNamenew.apply(student2))
personnew.showInfonew.call(student1,[43,"kashan"])
personnew.showInfonew.call(student2,[28,"yazd"])

