$(function () {

	//Variable declaration
	var vDispcont = "";

	startbut();

	begingame();

	
	function startbut() {
		vDispcont = $("<img>");
		vDispcont.addClass("buttonstart");
		vDispcont.attr("src","assets/images/playbutton.jpg");
		$("#VarContent").append(vDispcont);
		vDispcont = $("<p></p>").text("Click on the play button to start");
		vDispcont.addClass("letterpmarker doublef gcolor");
		$("#VarContent").append(vDispcont);
	};

	function begingame() {
		$(".buttonstart").on("click", function() {
			$("#VarContent").empty();
			vDispcont = $("<p></p>").text("");
			vDispcont.attr("id","DecCount");
			$("#VarContent").append(vDispcont);






			
		});	
	};

});