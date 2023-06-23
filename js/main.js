var btn =document.getElementById("button");
var chageColor=document.getElementById("color");


btn.addEventListener("click",function(){
    var a=["pink","red","yellow","brown","green","bule","grey","orange","black"];
    var clicks=Math.round(Math.random()*a.length);

    chageColor.style.backgroundColor= a[clicks];
})