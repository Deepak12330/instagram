var submit_btn = document.getElementById("submit_btn");
var signup_form = document.getElementById("signup_form");


submit_btn.onclick = function (e)

{
	e.preventDefault();
	var username = document.getElementById("username").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;

		if(username != "" && email != "" && password != ""	)
		{
			var object_data = {users:username,email:email,password:password};
			var text_data = JSON.stringify(object_data);

			localStorage.setItem(email,text_data);
			submit_btn.style.backgroundColor = "green";
			submit_btn.innerHTML = "Singup Success";
			submit_btn.setAttribute("disabled", "disabled");
			


			setTimeout(function(){
				submit_btn.innerHTML = "Singup";
				submit_btn.removeAttribute("disabled", "disabled");
				submit_btn.style.backgroundColor = "grey";
				signup_form.reset();



			},3000)



		}
	
}

// email authication 

var email_input = document.getElementById("email");
var email_notice = document.getElementById("notice_email");
email_input.onchange = function()
{
	var email_value = email_input.value;
	var storedValue = localStorage.getItem(email_value);

	if(storedValue !== null)
	{
		email_notice.style.display = "block";
		email_input.style.borderBottom = "1px solid red";
		submit_btn.setAttribute("disabled", "disabled");

		
		var email_input_check = document.getElementById("email");
		email_input_check.onclick = function()
		{
			submit_btn.removeAttribute("disabled", "disabled");
			email_notice.style.display = "none";
			email_input.style.borderBottom = "2px solid #ccc";
			email_input_check.innerHTML = "";

		}


	}

} 


// login authication

var login_frm = document.getElementById("login_frm");
login_frm.onsubmit = function(e)
{
	e.preventDefault();
	var login_email = document.getElementById("login_email").value;
	var login_password = document.getElementById("login_password").value;

	if(localStorage.getItem(login_email) == null)
	{
		alert("email not registrerd");
	}
	else
	{
		var text_data = localStorage.getItem(login_email);
		var object_data = JSON.parse(text_data);

		var correct_email = object_data.email;
		var correct_password = object_data.password;

		if(login_email == correct_email)
		{
			if(login_password == correct_password)
			{
				alert("login success");
			}
			else
		{
			alert("wrong password");
		}

		}

	}
}









 
