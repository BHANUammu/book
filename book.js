$(function(){

$("input[type='password']").css("background-color","yellow");
$("input[type='email']").css("background-color","pink");
$("input[type='text']").css("background-color","pink");
$("h1").fadeOut(4000);
$("input[type='submit']").css("background-color","MediumOrchid");
});



function focusdemo(){
var mybox=document.getElementById("email");
mybox.style.backgroundColor="green";
}
function radvalidateform(){
var lan=document.getElementsByName("ms");
if(lan[0].checked==true){
alert("you launguage is english");}
else if(lan[1].checked==true){
alert("you launguage is kannada");
}
else{
alert("select any one");
return false;
}
return true;
}