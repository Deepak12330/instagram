

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


	function allContact() {
		var i;
		for(i=0;i<localStorage.length;i++)
		{
			var all_keys = localStorage.key(i);
			if(all_keys.match(sessionStorage.getItem("users")+"_contacts"))
			{
				var json_txt = localStorage.getItem(all_keys);
				var obj_data = JSON.parse(json_txt);


				var contact_box = document.createElement("DIV");
				contact_box.setAttribute("id","contact");
				var name_p = document.createElement("P");
				name_p.setAttribute("class","contact_name");
				var name_i = document.createElement("I");
				name_i.setAttribute("class","fas fa-user");
				name_p.appendChild(name_i);
				name_p.innerHTML += obj_data.contact_name;


				var tool = document.createElement("DIV");
				tool.setAttribute("id","tool");
				var edit_i = document.createElement("I");
				edit_i.setAttribute("class","fas fa-edit edit");
				var trash = document.createElement("I");
				trash.setAttribute("class","fas fa-trash del");
				tool.appendChild(edit_i);
				tool.appendChild(trash);

				var line = document.createElement("HR");
				line.setAttribute("width","75%");
				var num_p = document.createElement("P");

				var num_i = document.createElement("I");
				num_i.setAttribute("class","fas fa-mobile-alt");
				num_p.appendChild(num_i);
				num_p.innerHTML += obj_data.contact_number;


				contact_box.appendChild(name_p);
				contact_box.appendChild(tool);
				contact_box.appendChild(line);
				contact_box.appendChild(num_p);

				document.getElementById("all_contact_box").appendChild(contact_box);



			}
		}
	}

	allContact();


		var search =  document.getElementById("search");
		search.oninput = function()
		{
			var all_contact_name = document.getElementsByClassName("contact_name");
			var i;
			for(i=0;i<all_contact_name.length;i++)
			{
				if(all_contact_name[i].innerHTML.match(search.value))
				{
					all_contact_name[i].parentElement.style.display = "block";	
				}
				else
				{
						all_contact_name[i].parentElement.style.display = "none";
				}
			}
		}

		var del = document.getElementsByClassName("del");
		
		
			var i;
			for(i=0;i<del.length;i++)
			{
				del[i].onclick = function()
				{
					var parent = this.parentElement.parentElement;
					var p_ele = parent.getElementsByClassName("contact_name")[0];
					 var username = p_ele.innerHTML.replace('<i class="fas fa-user"></i>', '');
					var current_user =  sessionStorage.getItem("users");
					// alert(current_user + "_contacts"+ username);
					localStorage.removeItem(current_user + "_contacts" + username.trim());

					  parent.className = "animate__animated animate__bounceOut";

					   setTimeout(function () {
			            parent.remove();
			        }, 1000);

				}
			}



			//update code 

			var edit = document.getElementsByClassName("edit");

for (var i = 0; i < edit.length; i++) {

    edit[i].onclick = function () {

        var par_ele = this.parentElement.parentElement;
        var para = par_ele.getElementsByTagName("p");

        // OLD DATA
        var old_name = para[0].innerHTML
            .replace('<i class="fas fa-user"></i>', '')
            .trim();

        var old_num = para[1].innerHTML
            .replace('<i class="fas fa-mobile-alt"></i>', '')
            .trim();

        document.getElementById("contact_bg").style.display = "block";
        document.getElementById("edit_contact").innerHTML = "Update Contact";
        document.getElementById("c_name").value = old_name;
        document.getElementById("c_number").value = old_num;

        document.getElementById("add").innerHTML = "Update";
        document.getElementById("close").style.display = "none";

        document.getElementById("add").onclick = function () {

            var update_name = document.getElementById("c_name").value;
            var update_number = document.getElementById("c_number").value;

            if (update_name !== "" && update_number !== "") {

                var contact_email = sessionStorage.getItem("users");
                localStorage.removeItem(contact_email + "_contacts" + old_name);
                var object_data = {
                    contact_name: update_name,
                    contact_number: update_number
                };

                localStorage.setItem(
                    contact_email + "_contacts" + update_name,
                    JSON.stringify(object_data)
                );


                window.location.reload();
            }
        };
    };
}


		

	
}
