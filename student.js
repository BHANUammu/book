$(function(){

$("h1").slideUp(500);
$("h1").slideDown(500);
$("input:even").css("background-color","Gainsboro");
$("input[type='text']").css("background-color","Gainsboro");


});
function validateform(){
var id=document.myform.id.value;
var name=document.myform.name.value;
var mob=document.myform.mob.value;
var mywebsite=document.myform.mywebsite.value;
var add=document.myform.add.value;

if(id==null||id==""||name==null||name==""||mob==null||mob==""||mywebsite==null||mywebsite==""||add==null||add==""||aname==null||aname==""||price==null||price=="")
{alert("fields can't be empty");
return false;
}
else if(pass.length<6){
alert("password should be atleast 6 characters");
return false;
}
}

function ondoubleclickdemo(){
alert("you doubleclicked me");
}
$("#submit1").mouseover(function(){
$("#submit1").css("background-color","yellow");
});
$("#submit1").mouseout(function(){
$("#submit1").css("background-color","cyan");
});