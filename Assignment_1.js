//variable hoisting
console.log(num); 
var num; // Declaration
num = 6; // Initialization
console.log(num);


//function hoisting
var employeeId;                           // Declaration
function foo() {                          // Declaration
    function employeeId() {               // Declaration (shadows outer `employeeId`)
        console.log(typeof employeeId);
    }

    employeeId();
    return;
}
employeeId = 'abc123';
foo(); 


//call()
var obj1={
    num:2,
};
var obj2={
    f1:function(a,b){
        console.log(this.num+a+b);
    }
};
obj2.f1.call(obj1,2,"hello");


//apply()
var obj1={
    num:2,
};
var obj2={
    f1:function(a,b){
        console.log(this.num+a+b);
    }
};
var arr=[2,"hello"];
obj2.f1.apply(obj1,arr);


//bind()
var obj1={
    num:2,
};
var obj2={
    f1:function(a,b){
        console.log(this.num+a+b);
    }
};
var r=obj2.f1.bind(obj1,2,"hello");
r();
