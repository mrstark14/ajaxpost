let patterns={
    e_mail: /[a-z\d_\-\.]+@[A-Za-z]+\.[A-Za-z]{2,6}((\.[A-Za-z]{2,6})+)?/i,
    pass: /^[A-Za-z][\w\.\+@\$\-_]{7,20}$/i
}
document.getElementById("password").addEventListener('keyup', function(event) {
    if (event.code === 'Enter') {
      event.preventDefault();
      document.getElementById("btn").click();
    }
});
function passwords(){
  var password=document.getElementById("password").value;
  if(!patterns.pass.test(password)){
      document.getElementById("password").style.borderColor = "red";
  }
  else{
      document.getElementById("password").style.borderColor = "black";
  }
}
function mail(){
  var email=document.getElementById("email").value;
  if(!patterns.e_mail.test(email)){
      document.getElementById("email").style.borderColor = "red";
  }
  else{
      document.getElementById("email").style.borderColor = "black";
  }
}
function loadDoc() {
  var e_mail=document.getElementById("email").value
  var pass=document.getElementById("password").value
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
    else if(this.readyState == 4 && this.status != 200){
      alert("Invalid email or password")
    }
  };
  xhttp.open("POST", "https://reqres.in/api/login", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(`email=${e_mail}&password=${pass}`);
}