	
var all = document.getElementById("container");
var setblock = document.getElementById("popup_settings");
var setbutton = document.getElementById("settings");
var selectElement = document.getElementById('select_empl');
var checkbox = document.getElementById("checkbox_dark_theme");



all.addEventListener("click", function(){
	if (event.target == setbutton && setblock.style.display == "none"){
		  let coords = setbutton.getBoundingClientRect();
		  setblock.style.left = coords.left - 60 + "px";
		  setblock.style.top = coords.bottom + "px";
		  setblock.style.display = "flex";
	} else if (event.target != setblock && !setblock.contains(event.target)){
		setblock.style.display = "none";
	}
});


var selectElement = document.getElementById('select_empl');

selectElement.addEventListener("change", function() {
    drawSecondChart();
});


var send = document.getElementById("send");
var content_block = document.getElementById("content_block");
var sidebar_block = document.getElementById("sidebar_block");
var sidebar_items = document.getElementsByClassName("sidebar-item");
var selects = document.querySelectorAll('select');
var textarea = document.querySelectorAll('textarea');
var content_blocks = document.getElementsByClassName("content-block");
var contacts = document.getElementById("contacts");
var contact_blocks = document.getElementsByClassName("contact");
var message_blocks = document.getElementsByClassName("message");
var checkboxes = document.querySelectorAll("input[type='checkbox']");
var chat = document.getElementById("chat");

//darktheme
checkbox.addEventListener( 'change', function() {
    if(this.checked) {
    	console.log("Switch Light");
        content_block.classList.add("content-wrap-light");
        sidebar_block.classList.add("sidebar-light");
        contacts.classList.add("contacts-light");
        send.classList.add("send-light");
        chat.classList.add("chat-light");
        setblock.classList.add("popup-light");
        for (i = 0; i < sidebar_items.length; i++) {
		  sidebar_items[i].classList.add("sidebar-item-light");
		}
		for (i = 0; i < checkboxes.length; i++) {
		  checkboxes[i].classList.add("check-light");
		}
		for (i = 0; i < content_blocks.length; i++) {
		  content_blocks[i].classList.add("content-block-light");
		}

		for (i = 0; i < message_blocks.length; i++) {
		  message_blocks[i].classList.add("message-light");
		}

		for (i = 0; i < contact_blocks.length; i++) {
		  contact_blocks[i].classList.add("contact-light");
		}

		for (i = 0; i < selects.length; i++) {
		  selects[i].style.backgroundColor = "#cad5d9";
		  selects[i].style.color = "#000";
		}

		for (i = 0; i < textarea.length; i++) {
		  textarea[i].style.backgroundColor = "#fff";
		  textarea[i].style.color = "#000";
		}



    } else {
    	console.log("Switch Dark");
        content_block.classList.remove("content-wrap-light");
        sidebar_block.classList.remove("sidebar-light");
        contacts.classList.remove("contacts-light");
        setblock.classList.remove("popup-light");
        send.classList.remove("send-light");
        for (i = 0; i < sidebar_items.length; i++) {
		  sidebar_items[i].classList.remove("sidebar-item-light");
		}
		for (i = 0; i < checkboxes.length; i++) {
		  checkboxes[i].classList.remove("check-light");
		}
		for (i = 0; i < content_blocks.length; i++) {
		  content_blocks[i].classList.remove("content-block-light");
		}

		for (i = 0; i < message_blocks.length; i++) {
		  message_blocks[i].classList.remove("message-light");
		}

		for (i = 0; i < contact_blocks.length; i++) {
		  contact_blocks[i].classList.remove("contact-light");
		}

		for (i = 0; i < selects.length; i++) {
		  selects[i].style.backgroundColor = "#2c3e50";
		  selects[i].style.color = "#fff";
		}

		for (i = 0; i < textarea.length; i++) {
		  textarea[i].style.backgroundColor = "inherit";
		  textarea[i].style.color = "#fff";
		}
    }
});



//Dialog scrolling
var dialog = document.getElementById("dialog");
dialog.scrollTop = dialog.scrollHeight;

//Message sending

send.addEventListener("click", function(){
	var message = document.getElementById("msg").value;
	var styled;
	if (checkbox.checked){
		styled = "<div class='message message-light'>";
	} else {
		styled = "<div class='message'>";
	}
	var html = "<div class='message-wrap-right'>"+styled+"<span class='message-name'>Jackie Chan</span><span class='message-text'>" + 
	message + "</span></div></div>"	
	var wrapper = document.getElementById("wrapper_msgs");
	wrapper.insertAdjacentHTML("beforeEnd", html);
	var dialog = document.getElementById("dialog");
	dialog.scrollTop = dialog.scrollHeight;
	document.getElementById("msg").value = "";
});