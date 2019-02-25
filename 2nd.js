function printaisbigger()
{
 alert("a is bigger")
}
function printbisbigger()
{
  alert("b is bigger")
}
function equal()
{
  alert("equal")
}
var a = parseInt(prompt("please enter number a", 0))
var b = parseInt(prompt("please enter number b", 0))
if (a>=b)
  { if (a>b)
     {
       printaisbigger()
     }
   else {
     equal()
   }
  }
else 
  printbisbigger()
