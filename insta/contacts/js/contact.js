

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
					window.location.href = window.location.href;
				}

				else
				{
					alert("wrong");
				}
			}
	}



//fetch the data from anywhere ----------------------------------
	function allContact()
	{
		var i;
		for(i=0; i<localStorage.length; i++)
		{
			var all_key =  localStorage.key(i);

			if(all_key.match(sessionStorage.getItem("users")+"_contacts"))
			{
				var text_data = localStorage.getItem(all_key);
				var object_data = JSON.parse(text_data);



				// main contact div
				var all_contact = document.createElement("div");
				all_contact.setAttribute("id", "all_contact");

				// contact box
				var contact_box = document.createElement("div");
				contact_box.setAttribute("id", "contact_box");

				// icons box
				var icons = document.createElement("div");
				icons.setAttribute("id", "icons");

				// name
				var name_p = document.createElement("p");
				name_p.innerHTML = object_data.contact_name;

				// number
				var number_p = document.createElement("p");
				number_p.innerHTML = object_data.contact_number;

				// edit icon
				var edit_i = document.createElement("i");
				edit_i.setAttribute("class", "fa-solid fa-pen-to-square");

				// delete icon
				var trash_i = document.createElement("i");
				trash_i.setAttribute("class", "fa-solid fa-trash");

				// append icons
				icons.appendChild(edit_i);
				icons.appendChild(trash_i);

				// append contact box
				contact_box.appendChild(name_p);
				contact_box.appendChild(number_p);

				// append everything
				all_contact.appendChild(contact_box);
				all_contact.appendChild(icons);

				// finally add to body or any container
				document.getElementById("address").appendChild(all_contact)








			}
		}
	}



	allContact();

	//---------------------end -------------
}
