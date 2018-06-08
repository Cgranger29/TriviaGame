//Create triviaGame object

let triviaGame = {
	//questions array. Each question stored as object consisting of question/answer/choices
	questions: [{
		question: "Is this a test question?",
		answer: "Yes",
		choices: ["Yes", "No", "Maybe"]
	}, {
		question: "Was that a test question?",
		answer: "No",
		choices: ["Yes", "No", "I dont know"]
	}, {
		question: "Test 3?",
		answer: "I dont know",
		choices: ["Yes", "No", "I dont know"]
	}, {
		question: "Was that a test question?",
		answer: "Yes",
		choices: ["Yes", "No", "I dont know"]
	}, {
		question: "Was that a test question?",
		answer: "Yes",
		choices: ["Yes", "No", "I dont know"]
	}, {
		question: "Was that a test question?",
		answer: "Yes",
		choices: ["Yes", "No", "I dont know"]
	}, {
		question: "Was that a test question?",
		answer: "Yes",
		choices: ["Yes", "No", "I dont know"]
	}, {
		question: "Was that a test question?",
		answer: "Yes",
		choices: ["Yes", "No", "I dont know"]
	}, {
		question: "Was that a test question?",
		answer: "Yes",
		choices: ["Yes", "No", "I dont know"]
	}, {
		question: "End test?",
		answer: "Yes",
		choices: ["Yes", "No", "I dont know"]
	}], 
	
	timer: 30,
	correct: 0,
	incorrect: 0,
	choicecount: 0,
	questioncount: 0,
	arr: [],
	//function to update the html page with the first question. After the first call it will loop through all question values
	loader: function loader(){
		for(var i = 0; i < document.getElementsByName("choice").length; i++){
			$("#myform").empty();
		};
		$("#myform").append("<button type='button' onclick='checkans()'>Submit</button>");
		$("#question").text(this.questions[this.questioncount].question);
		let lngth = this.questions[this.questioncount].choices.length;
 			for(this.choicecount;this.choicecount < lngth;this.choicecount++){
				
				if(this.choicecount==0){
					$("#myform").prepend("<input type='radio' name='choice' value=" + this.questions[0].choices[0]+ "><p id='choice'>" + this.questions[0].choices[0] +  "</p>");

				} else {
					$("#myform").prepend("<input type='radio' name='choice' value=" + this.questions[this.questioncount].choices[this.choicecount]+ "><p id='choice'>" + this.questions[this.questioncount].choices[this.choicecount] +  "</p>");
			}}
			
			
			this.choicecount = 0;
			this.questioncount +=1;
			
			} };
			


//initial question load
 triviaGame.loader();

 
//answer check function
function checkans() {
 var a= document.getElementsByName("choice");
 for (var i = 0; i < a.length; i++) {
	if (a[i].checked==true) {
		let x = triviaGame.questioncount - 1
		if(a[i].value == triviaGame.questions[x].answer){
			triviaGame.correct += 1;
			$("#correct").text("Correct: " + triviaGame.correct);
			if(triviaGame.questioncount == triviaGame.questions.length){
				console.log("end");
				//put end function for correct / incorrect answers here
			}else {
			triviaGame.loader();
			}
		}else{
			triviaGame.incorrect += 1;
			$("#incorrect").text("Incorrect: " + triviaGame.incorrect);
			if(triviaGame.questioncount == triviaGame.questions.length){
				console.log("end");
				//put end function for correct / incorrect answers here
			}else {			
			triviaGame.loader();
			}
 }}}};





