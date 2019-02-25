function flip(x)
{
  x = x*(-1)
  return x
}

var y = parseInt(prompt("please enter number", 0))
while (y != 0)
  {
flip(y)
alert(flip(y))
y = parseInt(prompt("please enter number", 0))
  }
alert("0 can't be flipped")
