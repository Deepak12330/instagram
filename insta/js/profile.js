window.onload = function()
{
	if(sessionStorage.getItem("users") == null)
	{
		window.location.replace("index.html");

	}
	else
	{

		
	

		// fetch username -----------------------------------------
		var user_email = sessionStorage.getItem("users");
		var text_data = localStorage.getItem(user_email);
		var object_data = JSON.parse(text_data);
		var username = atob(object_data.users);
		var profile_image = localStorage.getItem(user_email+"image");
		
		document.getElementById("profile_box").style.backgroundImage = "url("+profile_image+")";
		document.getElementById("profile_box").style.backgroundSize = "cover";

		if(profile_image != null)
		{
			document.getElementById("container").style.display = "none";
			document.getElementById("container_dashboard").style.display ="block";

				
		}

	
		var profile_name = document.getElementById("profile_name");
		var profile_user = document.getElementById("profile_user");
		profile_user.innerHTML = username;
		profile_name.innerHTML = username;

		//--------------------------------------------------




		//start profile pic

		var profile_pic = document.getElementById("profile_pic");
		profile_pic.onchange = function()
		{
			var files =  profile_pic.files[0];
			var reader = new FileReader();

			reader.onload = function()
			{
				var profile = document.getElementById("profile");
				var profile_icon = document.getElementById("profile_icon");

				var url_image = reader.result;
				profile.style.backgroundImage = "url("+url_image+")";
				profile.style.backgroundSize = "cover";
				profile_icon.style.display = "none";
				document.getElementById("next_btn").style.display = "block";

				document.getElementById("next_btn").onclick = function()
				{
					var user_email = object_data.email;
					
					localStorage.setItem(user_email+"image",url_image);
					document.getElementById("container").style.display = "none";
					document.getElementById("container_dashboard").style.display ="block";
					



					
				}



			}

				reader.readAsDataURL(files);


		}








			document.getElementById("logout").onclick = function()
			{
				
				window.location.replace("index.html");
			}

			document.getElementById("contact").onclick = function()
			{
				window.location.href ="./contacts/contact.html";
			}


	

	}

}
