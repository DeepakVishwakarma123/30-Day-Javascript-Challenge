//Activity1:varible declaration
let mynum=2
console.log(mynum);
let myString="hello its Deepak"
console.log(myString);

// Activity2:Const variable Declaration
const boolValue=true
const boolValue2=false

// Activity3:Different Datatypes Checking using tyepof method
let num1=1
let language="javascript"
let bool=true
// for uniqueness
let id=Symbol("first Componenet")
let testArray=[1,2,3,4]
let testObject={Day1:"variable and datatypes",test:"positive"}
console.log("the datatype of num1",typeof num1)
console.log("the datatype of language variable",typeof language)
console.log("the datatype of boolean variable",typeof bool)
console.log("the datatype of id variable",typeof id)
console.log("the datatype of testArray",typeof testArray)
console.log("the datatype of testObject",typeof testObject)

// Activity4:let variable declaration and chanign its value
let change="this gone change"
change="its,changed"
console.log("value changed",change);
// Activity5:Undetstanding const
const password=456778
password=567890
console.log(password);
// Notes:
// typerrror:assignment to constant variable
// const variable value we cannot change its fixded
// always use let it has blocked scope
// var created problem
// array,object has returned fixed datatype called object and others have theri respective type
// specila case null datatype by typeof returned object
// symbol datatype value is unique its use in react to identify individual component uniquelly.

