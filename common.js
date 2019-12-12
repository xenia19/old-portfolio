$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "portfolio/mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Thank you for your message!");
			$("#form").trigger("reset");
		});
		return false;
	});
	
});
