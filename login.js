function validateform()
{
	var name=document.myform.username.value;
	var pass=document.myform.password.value;
	if(name==null||name=="")
		{
		alert("name field can't be empty");
		return false;
		}
	else if(pass.length<6)
		{
		alert("password should be atleast 6 characters");
		return false;
		}
	var a=document.getElementById("user1");
	var b=a.options[a.selectedIndex].value;
	if(b=="select")
	{
		alert("please select any one");
		return false;
	}
else if(b=="admin")
{
 window.open("book.html");
	
}
else if(b=="student")
{

 window.open("library.html");
}
}
$(function(){
$("h1").toggle(2000);

$("h1").toggle(2000);
$("input[type='text']").css("background-color","MistyRose");
$("input[type='submit']").css("background-color","MediumSlateBlue");

$("input[type='password']").css("background-color","MistyRose");

c
});