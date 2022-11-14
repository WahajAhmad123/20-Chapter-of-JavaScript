alert("Your Password is incorrect please enter your correct password.")
alert("We send login code on your phone please check your phone")

var name = "pakistan" ;
alert(name);
var username = "Wahaj Ahmad" ;
alert (username) ;

var a = 50;
var b = 500;
var c = 44;
var d = a + b - c + a*[a + b];
alert (d);

var num = 10;
var popularnum = num + 200;
var main = popularnum * 23; 
var lastnum  = ++main;
console.log(lastnum);

var a = 10
var b = 20
var c = 30
var d = ++a + --b - ++c - --b + ++a 
console.log(d)

var total = 500
var Math = +prompt("Enter your math marks")
var Physics = +prompt("Enter your Physics marks")
var Computer = +prompt("Enter your computer marks")
var Urdu = +prompt("Enter your Urdu marks")
var English = +prompt("Enter your English marks")
var subtotal = Math + Physics + Computer + Urdu + English 
var per = (subtotal/total)*100
console.log("Math",Math) 
console.log("Physics",Physics) 
console.log("Computer",Computer) 
console.log("Urdu",Urdu) 
console.log("English",English) 
console.log("Obtain marks", subtotal) 
console.log("Percentage", per) 
if (per <100 && per >= 90){
    console.log("Grade A1+")
}
else if (per <90 && per >= 80){
    console.log("Grade A1")
}
else if (per <80 && per >= 70){
    console.log("Grade A")
}
else if (per <70 && per >= 60){
    console.log("Grade B")
}
else  if (per <60 && per >= 50){
    console.log("Grade C")
}
else {
    console.log("FAIL")
}

var num = prompt("Enter any number" )
if (num !=10 ){
    if (num>5){
        console.log("Number is greater than 5")
    }else {
        console.log("Number is less than 5")
    }
}
else{
    console.log("number is 10")
}

a = ["a","b","c","d","e"];
console.log(a);
a.push("x,y");
console.log(a);
a.pop();
console.log(a);
a.shift();
console.log(a);
a.unshift("a");
console.log(a);
var b = a.slice(0,2)
console.log(b)
a.splice(3,0,"x","y","z")
console.log(a)

var i = a.indexOf("e")
console.log(i)
console.log(a[i])
for (var  i = 0 ; i <= 10 ; i++){
    console.log("Wahaj Ahmad" + i)
}
for (var  i = 0 ; i < 10 ; i++){
    console.log(" 7 X " + [i+1] + " = " + 7* [i+1])
}
