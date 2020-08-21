alert("SAVED USERNAMES AND PASSWORDS ARE : (username: kunal, password: hello),(username: prakhar,password: speed),(username: gagan,password: welcome)" )



var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("loginbtn");
var arrobj = [
    {
        username: "kunal",
        password: "hello"
    },
    {
        username: "prakhar",
        password: "speed"
    },
    {
        username: "gagan",
        password: "welcome"
    },
] ;
function register() {
    x.style.left = "-450px";
    y.style.left = "30px" ;
    z.style.left = "110px";
    y.style.top = "170px";
}
function login() {
    x.style.left = "20px";
    y.style.left = "410px";
    z.style.left = "0px";
}
function validate(){
    var validity = false ;
    var username = document.getElementById("username").value ;
    var password = document.getElementById("password").value ;
    for(var i=0 ; i < arrobj.length ;i++){
        if(username == arrobj[i].username && password == arrobj[i].password){
            window.location.href="second.html";
            console.log("validated");
            validity = true ;
        }
    }
        if (validity == false ){
        alert("Wrong Username or password") ;
        }
    
}
function regis(){
    var newuser = document.getElementById("newuser").value ;
    var newpass = document.getElementById("newpass").value ;
    arrobj.push({username:newuser,password:newpass});
    alert("You have registered successfully with usename :" + newuser + " and password:" + newpass);
    window.location.href = "second.html" ;
}
