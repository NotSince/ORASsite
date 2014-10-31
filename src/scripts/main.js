
$(function()
{
    /* all your jquery code goes here */
    
    /* e.g., take element with class .something and change some of its style attributes */
	$ignpile_input = $("#ignpile"); 
	$ignpile_input.hide();
	$secondfc_input = $("#secondfriendcode"); 
	$secondfc_input.hide();
	$notes = $("#notes"); 
	$notes.hide();
	$slidebutton = $("#slidebutton");
	$slidebutton.click(function() { $ignpile_input.slideToggle();}); 
	$slidebutton2 = $("#slidebutton2");
	$slidebutton2.click(function() { $secondfc_input.slideToggle();}); 
	$notesbutton = $("#notesbutton");
	$notesbutton.click(function() { $notes.slideToggle("slow");});

	$('#team').on('change', function() {
		var sel = this.value;
		if (sel == 0) {
			$('#flairpreview').css('display', 'none');
		} else {
			$('#flairpreview').css('display', 'inline-block');
		}

		if (sel == 1) {
			$('#flairpreview').css('background-position', '-96px 0px');
		} else if (sel == 2) {
			$('#flairpreview').css('background-position', '-120px 0px');
		} else if (sel == 3) {
			$('#flairpreview').css('background-position', '-48px 0px');
		} else if (sel == 4) {
			$('#flairpreview').css('background-position', '-72px 0px');
		}
	});

});


function flairsend(){
	user = document.getElementById("user").value;
	fc 	 = document.getElementById("fc").value;
	fc2 = document.getElementById('fc2').value;
	user2 = document.getElementById("user2").value;
	user3 = document.getElementById("user3").value;
	user4 = document.getElementById("user4").value;
	ign2 = "";
	ign3 = "";
	ign4 = "";
	friendcode2 = "";
	type = document.getElementById("gametype").value;
	type2 = document.getElementById("gametype2").value;
	type3 = document.getElementById("gametype3").value;
	type4 = document.getElementById("gametype4").value;
	team = $('#team option:selected').text();
	
	if (fc.length != 14)
		{
		window.alert("You totes messed up the Friend Code");
	    return;
		}
		
	if (user.length > 12)
		{
		window.alert("Your IGN is too long");
	    return;
		}
		
	if (user2.length > 12)
		{
		window.alert("Your second IGN is too long");
	    return;
		}
	
	if (user3.length > 12)
		{
		window.alert("Your third IGN is too long");
	    return;
		}
	
	if (user4.length > 12)
		{
		window.alert("Your fourth IGN is too long");
	    return;
		}
	
	if (user == "IGN")
		{
			window.alert("Your IGN is not IGN");
			return;
		}

	if (fc2 != "0000-0000-0000"){
		friendcode2 = ", " + fc2;
	}

	if (user2 != "IGN") {
		ign2 = ", " + user2;
		if (type2 != "-") {
			ign2 = ign2 + " (" + type2 + ")"
		}
	}
	
	if (user3 != "IGN") {
		ign3 = ", " + user3;
		if (type3 != "-") {
			ign3 = ign3 + " (" + type3 + ")"
		}
	}
	
	if (user4 != "IGN") {
		ign4 = ", " + user4;
		if (type4 != "-") {
			ign4 = ign4 + " (" + type4 + ")"
		}
	}
	
	
	if (type != "-"){
		user = user + " (" + type + ")";
	}
		
	msg = fc + friendcode2 + " || " + user + ign2 + ign3 + ign4
	
	if (msg.length > 64)
		{
		window.alert("Your flair is too long");
	    return;
		}

	console.log(team + ',' + msg);
	
	document.getElementById("message").innerHTML=msg;
	
	window.open("http://www.reddit.com/message/compose/?to=Porygon2-Bot&subject="+team+"&message="+msg);
}

