var a = parseInt(prompt("enter a value"));
var b = parseInt(prompt("enter a value"));
var c = parseInt(prompt("enter a value"));

if (a>b && a>c)
{
        if (b>c)
        {
            alert(a,b,c);
			alert(c,b,a);
        }
        else
        {
            alert(a,c,b);
		    alert(b,c,a);
        }
}
else if (b>a && b >c)
{
        if (a>c)
        {
             alert(b,a,c);
			 alert(c,a,b);
        }
        else
        {
             alert(b,c,a);
			 alert(a,c,b);
        }
}
else if (c>a && c>b)
{
        if (a>b)
        {
            alert(c,a,b);
			alert(b,a,c);
        }
        else
        {
           alert(c,b,a);
		   alert(a,b,c);
        }
}