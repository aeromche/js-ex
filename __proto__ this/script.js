// ersbari az valede object be komak e property __proto__:
Person={
    age:20
}
Student={
    __proto__:Person,
    name:"abbas",
    family:"elahi",
    get getName(){
        return this.name
    },
    set setName(n){
        this.name= n;
    },
}
console.log(Student)
console.log(Student.name)
console.log(Student.__proto__)
console.log(Student.age)
Student.age=33
console.log(Student.age)
//1//dastresi be method ha ya fild ha ya yek objectconstructor az khareje 
//mahdudey on be komak this.
//2// afzudan fild ya method be objectconstructor ha be komak prototype
function Person1(name,family){
    this.name=name
    this.family=family
    this.age=33
    this.showInfo=function(){//agar be ozvi khareje constructor khastid dastresi peyda
        //konid hatman mogheye tarf un ghanlesh this bogzarid
        console.log(this.name)
        console.log(this.family)
    }
}
p1=new Person1("abbas","elahi")
p1.showInfo()
console.log(p1.name)
console.log(p1.family)
console.log(p1.age)
Person1.prototype.city="Tehran"
console.log(p1.city)
Person1.prototype.fun1=function(){
    alert(this.name+" "+this.family)
}
p1.fun1()
console.dir(p1)


