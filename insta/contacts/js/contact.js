

window.onload = function()
{
	if(sessionStorage.getItem("users") == null)
	{
		window.location.replace("../index.html");
	}

	else
	{

		//-- start -----------------------
		document.getElementById("new_contact").onclick = function()
			{
				document.getElementById("contact_bg").style.display = "block";
			}

			document.getElementById("close").onclick = function()
			{
				document.getElementById("contact_bg").style.display = "none";
			}

			//- button functions end ----

			var add_btn = document.getElementById("add");
			add_btn.onclick = function()
			{
				var c_name = document.getElementById("c_name");
				var c_number = document.getElementById("c_number");

				if(c_name.value != "" && c_number.value != "")
				{
					var contact_email = sessionStorage.getItem("users");
					var object_data = {contact_name : c_name.value, contact_number : c_number.value};
					var text_data = JSON.stringify(object_data);
					localStorage.setItem(contact_email+"_contacts"+c_name.value,text_data);
				}

				else
				{
					alert("wrong");
				}
			}
	}
}
