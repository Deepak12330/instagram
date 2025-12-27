var login = document.getElementById('login');
var signup = document.getElementById("signup");
var login_span =  document.getElementById("login_span");
var singup_span = document.getElementById("singup_span");

singup_span.onclick = function()
{
	login.style.display = "none";
	signup.style.display = "block";	
}

login_span.onclick = function()
{
	signup.style.display = "none";	
	login.style.display = "block";

}