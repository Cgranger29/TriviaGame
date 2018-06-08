//add countdown timer for questions

let count=30;
window.setInterval(timer,1000);

function timer(){
	count-=1;
	$("#timer").text("Time Remaining: " + count);
	
	if(triviaGame.questioncount == triviaGame.questions.length){
		clearInterval(timer);

	}else{
		if(count<=0){
			triviaGame.incorrect+=1;
			$("#incorrect").text("Incorrect: " + triviaGame.incorrect);
			triviaGame.loader();
			count+=30;
			$("#timer").text("Time Remaining: " + count);
		
		};

}};
	

//Create triviaGame object

let triviaGame = {
	//questions array. Each question stored as object consisting of question/answer/choices
	questions: [{
		question: "In the year 1900 in the U.S. what were the most popular first names given to boy and girl babies?",
		answer: "John and Mary",
		choices: ["William and Elizabeth", "Joseph and Catherine", "John and Mary"]
	}, {
		question: "When did the Liberty Bell get its name?",
		answer: "In the 19th century, when it became a symbol of the abolition of slavery",
		choices: ["In the 19th century, when it became a symbol of the abolition of slavery", "When it rang on July 4, 1776", "When it was made, in 1701"]
	}, {
		question: "In the Roy Rogers -Dale Evans Museum, you will find Roy and Dales stuffed horses. Roy's horse was named Trigger, which was Dales horse?",
		answer: "Buttermilk",
		choices: ["Buttermilk", "Daisy", "Scout"]
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
					$("#myform").prepend("<input type='radio' name='choice' value='" + this.questions[this.questioncount].choices[this.choicecount] + "'><p id=choice>"+ this.questions[this.questioncount].choices[this.choicecount] + "</p>");

				} else {
					$("#myform").prepend("<input type='radio' name='choice' value='" + this.questions[this.questioncount].choices[this.choicecount]+ "'><p id=choice>" + this.questions[this.questioncount].choices[this.choicecount] +  "</p>");
			}}
			
			
			this.choicecount = 0;
			this.questioncount +=1;
			
			console.log(triviaGame.questioncount);
			console.log(this.questions[this.questioncount - 1].answer);
			
			} };
			


//initial question load
 triviaGame.loader();

 
//answer check function
function checkans() {
 var a= document.getElementsByName("choice");
 for (var i = 0; i < a.length; i++) {
	if (a[i].checked==true) {
		clearInterval(timer);
		let add = (30 - count) + 1;
		count+=add;
		console.log(triviaGame.questions[triviaGame.questioncount - 1].answer);
		if(a[i].value == triviaGame.questions[triviaGame.questioncount - 1].answer){
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





