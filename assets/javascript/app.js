//add countdown timer for questions

let count=30;
let x=setInterval(timer,1000);

function timer(){
	count-=1;
	$("#timer").text("Time Remaining: " + count);
	
	if(triviaGame.questioncount == triviaGame.questions.length){
		clearInterval(x);
		

	}else{
		if(count<=0){
			triviaGame.incorrect+=1;
			alert("Whoops you ran out of time! The correct answer was: " + triviaGame.questions[triviaGame.questioncount - 1].answer +  ".  You will be penalized with one incorrect answer");
			$("#incorrect").text("Incorrect Answers: " + triviaGame.incorrect);
			triviaGame.loader();
			count+=30;
			$("#timer").text("Time Remaining: " + count);
			
		
		};

} return;};
	

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
		question: "Who holds the record for the most victories in a row on the professional golf tour?",
		answer: "Byron Nelson",
		choices: ["Jack Nicklaus", "Byron Nelson", "Arnold Palmer"]
	}, {
		question: "Who is third behind Hank Aaron and Babe Ruth in major league career home runs?",
		answer: "Willie Mays",
		choices: ["Harmon Killebrew", "Willie Mays", "Frank Robinson"]
	}, {
		question: "In 1990, in what percentage of U.S. married couples did the wife earn more money than the husband?",
		answer: "18",
		choices: ["18", "38", "9"]
	}, {
		question: "During the 1980s for six consecutive years what breed of dog was the most popular in the U.S.?",
		answer: "Cocker Spaniel",
		choices: ["German shepherd", "Golden Retriever", "Cocker Spaniel"]
	}, {
		question: "In 1985, five percent of U.S. households had telephone answering machines. By 1990 what percentage of homes had answering machines?",
		answer: "31 percent",
		choices: ["31 percent", "10 percent", "51 percent"]
	}, {
		question: "The first black American pictured on a U.S. postage stamp was who?",
		answer: "Joe Louis",
		choices: ["Louis Armstrong", "Joe Louis", "Booker T. Washington"]
	}, {
		question: "When Mt. St. Helens erupted on May 18, 1980, how many people were killed?",
		answer: "57",
		choices: ["150", "1", "57"]
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
			
			
			} };
			


//initial question load
 triviaGame.loader();

 
//answer check function
function checkans() {
 var a= document.getElementsByName("choice");
 for (var i = 0; i < a.length; i++) {
	if (a[i].checked==true) {
		let add = (30 - count) + 1;
		count+=add;
		if(a[i].value == triviaGame.questions[triviaGame.questioncount - 1].answer){
			triviaGame.correct += 1;
			$("#correct").text("Correct Answers: " + triviaGame.correct);
			alert("Correct!. Great Job!");
			if(triviaGame.questioncount == triviaGame.questions.length){
				$("#myform").empty();
				$("#question").text("You answered " + triviaGame.correct + "questions correctly and " + triviaGame.incorrect + "incorrectly");
				$("#timer").empty();
				$("#correct").empty();
				$("#incorrect").empty();
				//put end function for correct / incorrect answers here
			}else {
			triviaGame.loader();
			}
		}else{
			alert("Incorrect. The correct answer was: " + triviaGame.questions[triviaGame.questioncount - 1].answer);
			triviaGame.incorrect += 1;
			$("#incorrect").text("Incorrect Answers: " + triviaGame.incorrect);
			if(triviaGame.questioncount == triviaGame.questions.length){
				$("#question").text("You answered " + triviaGame.correct + "  questions correctly and " + triviaGame.incorrect + "  incorrectly");
				$("#myform").empty();
				$("#timer").empty();
				$("#correct").empty();
				$("#incorrect").empty();
				//put end function for correct / incorrect answers here
			}else {			
			triviaGame.loader();
			}
 }}}};





