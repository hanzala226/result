 function result(){
    if(eng>100){
        alert("enter numbers below or equal of total numbers ")
    }
    else{
 
     // Subject Enlish
   var eng= document.getElementById("english").value
result = eng
document.getElementById("obteng").innerHTML=result

var en=parseInt(document.getElementById("totaleng").innerHTML=result)
result=eng/100*100+("%")
var a= parseInt( document.getElementById("pereng").innerHTML=result)
   
//  Subject urdu

    var urd=document.getElementById("urdu").value
    result = urd
document.getElementById("obturd").innerHTML=result
var ur=parseInt(document.getElementById("totalurd").innerHTML=result)
result = urd/100*100+("%")
var b=parseInt(document.getElementById("perurd").innerHTML=result)

// Subject Pakistan Studies
var pst=document.getElementById("pst").value
result=pst
document.getElementById("obtpst").innerHTML=result
var ps=parseInt(document.getElementById("totalpst").innerHTML=result)
result= pst/50*100+("%")
var c=parseInt(document.getElementById("perpst").innerHTML=result)

// Subject Physics
var phy=document.getElementById("physics").value
result=phy
document.getElementById("obtphy").innerHTML=result
var phyprac=document.getElementById("phyprac").value
result=phyprac
document.getElementById("obtphyprac").innerHTML=result
result=parseInt( phy)+ parseInt(phyprac)
var phyprac=parseInt(document.getElementById("totalphy").innerHTML=result)
result=phyprac/100*100+("%")
var d=parseInt(document.getElementById("perphy").innerHTML=result)
// Subject Chemistry
var che=document.getElementById("chemistry").value
result=che
document.getElementById("obtche").innerHTML=result
var cheprac=document.getElementById("cheprac").value
result=cheprac

document.getElementById("obtcheprac").innerHTML=result
 document.getElementById("obtcheprac").value
result=cheprac
document.getElementById("cheprac").innerHTML=result

result=parseInt(che)+parseInt(cheprac)
var e=parseInt(document.getElementById("totalche").innerHTML=result)

result=c/100*100+("%")
var f=parseInt(document.getElementById("perche").innerHTML=result)

// subject Mathematics
var math=document.getElementById("math").value
result=math
document.getElementById("obtmath").innerHTML=result
var ma=parseInt(document.getElementById("totalmath").innerHTML=result)
result=math/100*100+("%")
var k=parseInt(document.getElementById("permath").innerHTML=result)}


if(k<33){
    document.getElementById("sr").innerHTML="<span style='color:red'>Fail</span>";
}
else{
    document.getElementById("sr").innerHTML="<span style='color:#292'>Pass</span>"
}
if(a<33){
    document.getElementById("eg").innerHTML="<span style='color:red'>Fail</span>";
}
else{
    document.getElementById("eg").innerHTML="<span style='color:#292'>Pass</span>"
}
if(b<33){
    document.getElementById("ud").innerHTML="<span style='color:red'>Fail</span>";
}
else{
    document.getElementById("ud").innerHTML="<span style='color:#292'>Pass</span>"
}
if(c<33){
    document.getElementById("pt").innerHTML="<span style='color:red'>Fail</span>";
}
else{
    document.getElementById("pt").innerHTML="<span style='color:#292'>Pass</span>"
}
if(d<33){
    document.getElementById("py").innerHTML="<span style='color:red'>Fail</span>";
}
else{
    document.getElementById("py").innerHTML="<span style='color:#292'>Pass</span>"
}
if(e<33){
    document.getElementById("ct").innerHTML="<span style='color:red'>Fail</span>";
}
else{
    document.getElementById("ct").innerHTML="<span style='color:#292'>Pass</span>"
}
result=en+ur+ps+phyprac+e+ma
var total=document.getElementById("obtain").innerHTML=result


result=total/550*100+("%")
var percent=parseInt(document.getElementById("percen").innerHTML=result)


if(percent>=85){
    document.getElementById("grade").innerHTML="A-1"
}
else if(percent>=70){
    document.getElementById("grade").innerHTML="A"
}
else if(percent>=60){
    document.getElementById("grade").innerHTML="B"
}
else if(percent>=50){
    document.getElementById("grade").innerHTML="C"
}
else if(percent>=40){
    document.getElementById("grade").innerHTML="D"
}
else if(percent>=33){
    document.getElementById("grade").innerHTML="E"
}
else if(percent<33){
    document.getElementById("grade").innerHTML="F"
}


if(percent<33){
    document.getElementById("remarks").innerHTML="<span style='color:red;'>Fail</span>"
}
else{
    document.getElementById("remarks").innerHTML="<span style='color:#292;'>Pass</span>"
}







}

