var a ;
var b ;
var c ;
var d ;
function placed(a) {
    for(var i=1; i<17 ;i++){
        if(i==a){
            document.getElementById(a).innerHTML= "Order status has been changed to PLACED ." ;
            document.getElementById(a).style.color = "blue";
        }
    }
}
function shipped(b) {
    for(var i=1; i<17 ;i++){
        if(i==b){
            document.getElementById(b).innerHTML= "Order status has been changed to SHIPPED ." ;
            document.getElementById(b).style.color = "orange";
        }
    }
}
function delivered(c) {
    for(var i=1; i<17 ;i++){
        if(i==c){
            document.getElementById(c).innerHTML= "Order status has been changed to DELIVERED ." ;
            document.getElementById(c).style.color = "green";
        }
    }
}
function retur(d) {
    for(var i=1; i<17 ;i++){
        if(i==d){
            document.getElementById(d).innerHTML= "Order status has been changed to RETURNED ." ;
            document.getElementById(d).style.color = "red";
        }
    }
}