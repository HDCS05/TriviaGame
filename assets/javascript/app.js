$(function () {

	//array declaration
	var aquestion = ["Nintendo is a consumer electronics and video game company founded in what country?",
							"In 1975 an engineer created the first electronic camera while working for what company?",
							"The first-person shooter video game Doom was first released in what year?",
							"In what year was the first Apple computer released?",
							"What year was Facebook founded?",
							"The companies HP, Microsoft and Apple were all started in a what?",
							"What is the name of the main protagonist in the Legend of Zelda series video games?",
							"Fonts that contain small decorative lines at the end of a stroke are known as what?",
							"When referring to computer memory, what does that acronym RAM stand for?",
							"With over 17 million units produced, what was the highest selling single model of personal computer ever?",
							"Who is credited with inventing the first mechanical computer?",
							"1,024 Gigabytes is equal to one what?",
							"What Harvard dropout co-founded Microsoft?",
							"What was the name of the first electronic general-purpose computer?",
							"When working on Windows, what is the shortcut to paste content copied to the clipboard?",
							"Which of the following is a non-impact printer?",
							"McAfee, the internet security company, became a subsidiary of which of these in 2011?",
							"Algorithms are composed of control structures. Which of these is not a control structure?",
							"Which of the following is the lowest level of computer language?",
							"According to researchers, which of the following letters is pressed most frequently on the computer keyboard?",
							"Which of the following terms does not refer to a potentially harmful computer program?"
							];

	var aanswer = ["Japan", "Kodak", "1993", "1976", "2004",
						"Garage", "Link", "Serif fonts", "Random Access Memory", "The Commodore 64",
						"Charles Babbage", "Terabyte", "Bill Gates", "ENIAC", "Ctrl+V",
						"Ink jet printer", "Intel", "Pseudocode", "Machine Language", "E", "Hardware"
						];

	var atext = ["Nintendo started out as a small Japanese company, founded by Fusajiro Yamauchi on September 23, 1889, as Nintendo Koppai. Based in Kyoto, Japan.",
						"Steven Sasson as an engineer at Eastman Kodak invented and built the first electronic camera using a charge-coupled device image sensor in 1975.",
						"Doom is a 1993 science fiction horror-themed first-person shooter (FPS) video game by id Software. It is considered one of the most significant and influential titles in video game history, for having helped to pioneer the now-ubiquitous first-person shooter.",
						"Apple Computer 1, also known later as the Apple I, or Apple-1, is a desktop computer released by the Apple Computer Company (now Apple Inc.) in 1976. It was designed and hand-built by Steve Wozniak. Wozniak's friend Steve Jobs had the idea of selling the computer.",
						"Facebook is an American for-profit corporation and an online social media and social networking service based in Menlo Park, California. The Facebook website was launched on February 4, 2004, by Mark Zuckerberg, along with fellow Harvard College students and roommates, Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes.",
						"HP, Google, Microsoft, and Apple have one thing in common – apart from the obvious that they are IT companies. They were all started in garages.",
						"Through The Legend of Zelda series, Link is depicted as a child, teenager, or young adult of the Hylian race, originating from the fictional land of Hyrule. Link often travels through Hyrule, defeating creatures, evil forces, and the series' primary antagonist, Ganon, while attempting to save Princess Zelda and Hyrule.",
						"A typeface with serifs is called a serif typeface (or serifed typeface). A typeface without serifs is called sans-serif or sans serif, from the French sans, meaning without.",
						"Random-access memory is a form of computer data storage which stores frequently used program instructions to increase the general speed of a system.",
						"Although it looks like an unimpressive keyboard-like box, the Commodore 64 was incredibly popular.   More C64s have been sold than any other single computer system, even to this day. That's about 17 million systems, according to the Commodore 1993 Annual Report.",
						"A mathematician, philosopher, inventor and mechanical engineer, Babbage originated the concept of a digital programmable computer.  Considered by some to be a father of the computer, Babbage is credited with inventing the first mechanical computer that eventually led to more complex electronic designs, though all the essential ideas of modern computers are to be found in Babbage's analytical engine.",
						"The terabyte is a multiple of the unit byte for digital information. The prefix tera represents the fourth power of 1000, and means 1012 in the International System of Units (SI), and therefore one terabyte is one trillion (short scale) bytes. The unit symbol for the terabyte is TB. 1 TB = 1000000000000bytes = 1012bytes = 1000gigabytes.  A related unit, the tebibyte (TiB), using a binary prefix, is equal to 10244 bytes. One terabyte is about 0.9095 TiB. Despite the introduction of these standardized binary prefixes, the terabyte is still also commonly used in some computer operating systems, primarily Microsoft Windows, to denote 1099511627776 (10244 or 240) bytes for disk drive capacity.",
						"In 1975, Gates and Paul Allen launched Microsoft, which became the world's largest PC software company.",
						"ENIAC was developed and built by the U.S. Army for the purpose of calculating ballistic firing tables by emulating electronically a hand-operated mechanical calculator.  It used a 10-digit decimal system rather than the binary system used by modern computers. It could not store programs, and conditional branching, a basic function of all modern computers, involved clumsy manual programming using wires and plugs.",
						"Both the Ctrl+V and Shift+Insert will paste the text or object that's stored in the clipboard.  On Apple computers, use Cmd+V .",
						"A non-impact printer produces text and images without even touching the paper. An ink-jet printer is a non-impact printer because it just sprays ink onto paper to produce text and images.",
						"McAfee was established in 1987, and swallowed up several other security companies itself, before being taken over by Intel. Its symbol of a white shield on a red background is instantly recognizable.",
						"Pseudocode is a method of algorithm description involving the use of English, as are flowcharts.",
						"A computer programming language consisting of binary or hexadecimal instructions that a computer can respond to directly.",
						"The letter E is the most frequently typed letter in the English language and indeed in most European languages. The twelve most commonly used letters in the English language are E T A O I N S H R D L and U. In fact, over 80% of all words in the English language use at least one of these letters.",
						"Hardware refers to the physical components of a computer system."
					];

	var abad1 = ["China", "Minolta", "1992", "1977", "2005",
					"University", "Yoshi", "Italic fonts", "Random Aleatory Memory", "The Apple II",
					"Alexander Bell", "Megabyte", "Paul Allen", "UNIVAC", "Ctrl+C",
					"Dot matrix printer", "Dell", "Sequence", "Assembler", "T", "Rootkit"
					];

	var abad2 = ["South Korea", "Polaroid", "1995", "1985", "2003",
					"Warehouse", "Zelda", "Decorative fonts", "Real Access Module", "The Timex Sinclair",
					"Isaac Newton", "Petabyte", "Steve Jobs", "BINAC", "Ctrl+X",
					"Daisy-wheel printer", "Microsoft", "Iteration", "Pascal", "A", "Spyware"
					];

	var abad3 = ["Thailand", "Nikon", "1991", "1975", "2002",
					"Mall", "Mario", "Sans serif fonts", "Run Access Memory", "The TRS-80",
					"Nikola Tesla", "Kilobyte", "Steve Wozniak", "EDVAC", "Ctrl+B",
					"Line printer", "IBM", "Selection", "Fortran", "R", "Adware"
					];


	//Variable declaration
	var vrandomquestion = "";
	var vquestused = "";
	var vDispcont = "";
	var vnumtime = 31;
	var vIntervaldown;
	var aprovi = [];
	var vwins = 0;
	var vlosses = 0;
	var vunanswer = 0;
	var vrightans = false;

	fstartbut();
	
	function fstartbut() {
		vwins = 0;
		vlosses = 0;
		vunanswer = 0;
		vDispcont = $("<img>");
		vDispcont.addClass("buttonstart");
		vDispcont.attr("src","assets/images/playbutton.jpg");
		$("#VarContent").append(vDispcont);
		vDispcont = $("<p></p>").text("Click on the play button to start");
		vDispcont.addClass("letterpmarker doublef gcolor");
		$("#VarContent").append(vDispcont);
		$(".buttonstart").on("click", function() {
			fboxes();
		});	
	};

	function fboxes() {
		$("#VarContent").empty();
		vrandomquestion = "";
		fselectquest();
		vDispcont = $("<p></p>").text("Time Remaining: ");
		vDispcont.addClass("letterlobster triplef ocolor");
		vDispcont.attr("id","DecCount");
		$("#VarContent").append(vDispcont);
		$("#VarContent").append("<br/>");
		vDispcont = $("<p></p>").text(vrandomquestion);
		vDispcont.addClass("letterpmarker triplef bcolor");
		vDispcont.attr("id","Questiontx");
		$("#VarContent").append(vDispcont);
		$("#VarContent").append("<br/>");
		$("#VarContent").append("<br/>");
		vDispcont = $("<button />").text(aprovi[0]);
		vDispcont.addClass("btn btn-success lettercourgette doublef");
		vDispcont.attr("id","dbutton1");
		$("#VarContent").append(vDispcont);
		$("#VarContent").append("<br/>");
		vDispcont = $("<button />").text(aprovi[1]);
		vDispcont.addClass("btn btn-success lettercourgette doublef");
		vDispcont.attr("id","dbutton2");
		$("#VarContent").append(vDispcont);
		$("#VarContent").append("<br/>");
		vDispcont = $("<button />").text(aprovi[2]);
		vDispcont.addClass("btn btn-success lettercourgette doublef");
		vDispcont.attr("id","dbutton3");
		$("#VarContent").append(vDispcont);
		$("#VarContent").append("<br/>");
		vDispcont = $("<button />").text(aprovi[3]);
		vDispcont.addClass("btn btn-success lettercourgette doublef");
		vDispcont.attr("id","dbutton4");
		$("#VarContent").append(vDispcont);
		$("#VarContent").append("<br/>");
		$("#Questiontx").text(vrandomquestion);
		vnumtime = 31;
		vIntervaldown = setInterval(function(){ ftimer() }, 1000);
		vrightans = false;
		flistensel();
	};

	function fselectquest() {
		for ( var i = 0; i < 25; i++ ) {
			varrpos = Math.floor(aquestion.length * Math.random());
			if (vquestused.search(varrpos) == -1) {
				vrandomquestion = aquestion[varrpos];
				vquestused = vquestused + ", ";
				i = 27;
			}
		}
		aprovi = [aanswer[varrpos], abad1[varrpos], abad2[varrpos], abad3[varrpos] ];
		aprovi.sort(function(a, b){return 0.5 - Math.random()});
	};

	function flistensel() {
		$("#dbutton1").on("click", function() {
			fstoptime();
			if ($("#dbutton1").text() == aanswer[varrpos] ) {
				vrightans = true;
				vwins++;
			}
				else {
					vrightans = false;
					vlosses++;
				}
			fmessages();
		});
		$("#dbutton2").on("click", function() {
			fstoptime();
			if ($("#dbutton2").text() == aanswer[varrpos] ) {
				vrightans = true;
				vwins++;
			}
				else {
					vrightans = false;
					vlosses++;
				}
			fmessages();
		});
		$("#dbutton3").on("click", function() {
			fstoptime();
			if ($("#dbutton3").text() == aanswer[varrpos] ) {
				vrightans = true;
				vwins++;
			}
				else {
					vrightans = false;
					vlosses++;
				}
			fmessages();
		});
		$("#dbutton4").on("click", function() {
			fstoptime();
			if ($("#dbutton4").text() == aanswer[varrpos] ) {
				vrightans = true;
				vwins++;
			}
				else {
					vrightans = false;
					vlosses++;
				}
			fmessages();
		});
	};

	function fmessages() {
		if (vnumtime == 0) {
			$(".modal-title").text("Out of time!");
			var vmessag = $(".modal-body").text("The right answer was\n \n" + vrandomquestion + "\n \n" + atext[varrpos]);
			vmessag.html(vmessag.html().replace(/\n/g,'<br/>'));
		} else {
			if (vrightans == true) {
				$(".modal-title").text("Correct!");
				var vmessag = $(".modal-body").text(vrandomquestion + "\n" + "\n" + atext[varrpos]);
				vmessag.html(vmessag.html().replace(/\n/g,'<br/>'));
			} else {
				$(".modal-title").text("Wrong!");
				var vmessag = $(".modal-body").text("The right answer was\n \n" + vrandomquestion + "\n \n" + atext[varrpos]);
				vmessag.html(vmessag.html().replace(/\n/g,'<br/>'));
			}
		}
		$("#myModal").modal("show");
	};

	function ftimer() {
		vnumtime--;
		$("#DecCount").text("Time Remaining: " + vnumtime);
		if (vnumtime == 0) {
			fstoptime();
			vunanswer++;
			fmessages();
		}
	};

	function fstoptime(){
		clearInterval(vIntervaldown);
	};

// Pendientes agregar tiempo al mensaje despues de presionar respuesta
// llamar a siguiente pregunta despues de agregar el tiempo del mensaje
// validar si son mas de 5 preguntas terminar el juego y dar mensaje de ganados y perdidos o no contestada a tiempo
// tiempo en ultimo mensaje y reiniciar el juego.



});