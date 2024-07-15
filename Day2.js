//Activity1: basic arithmetic opetations
let nummber1=2
let number2=4
let add=nummber1+number2
let sub=nummber1-number2
let multiplication=nummber1*number2
let division=nummber1/number2
let remainder=nummber1%number2

//using console.table to see all outpus 😅
console.table([`add:${add}`,`sub:${sub}`,`multiplication:${multiplication}`,`divison:${division}`,`Reamilder:${remainder}`])

//Activity2: shorthand assignment operator
let a=1
let b=2
let c=3
let d=4
//old times a=a+2
a+=2
b-=2
c*=2
d/=4
console.table([`a:${a}`,`b:${b}`,`c:${c}`,`d:${d}`])


// Activity3:Comprasion opetator
let num1=3
let num2=3
let num3=2
let num4=4

console.log("the num is greater",num1>num2);
console.log("the num is greater",num1>=num2);
console.log("the num is lesserr",num3<num4);
console.log("the num is lesserr",num3<=num4);
console.log("the num is not equl to",num3!=num4);

// special cases
let rollno=45
let examRollnoinDatabase="45"
console.log(rollno==examRollnoinDatabase);
// value gives true can,t checks datatype ==
console.log(rollno===examRollnoinDatabase);



// Activity4:logical operators And or not(&&,||,!)
// login user case:😙
let userEmail="deepakvishwakarmajs@gmail.com"
let userPassword="356@68"
let userquestion="What is Your name?"
let answer="kingt"
if(userEmail==="deepakvishwakarmajs@gmail.com" && userPassword==="356@678")
{
    console.log("Login Successfull");
}
// user know backup question and answer
else if(userquestion==="What is Your name" || answer==="kingyt")
{
    console.log("login successful via antoher way");
}
else if(userPassword!=="45678")
{
    console.log("plz reset or recover password timer start");
}
else{
    console.log("sending mail to user for 2step verification");
}

// Activity 5:ternary operator
// Restricted platform case:🥰
let userage=56
userage>=18?console.log("user entered succussfully in restricted platform"):console.log("You can,t allowed this is 18+ only!");

