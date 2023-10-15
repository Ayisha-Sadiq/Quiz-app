const questions=
[

{
   question: "What is the smallest country in the world?",
   answers:[
   { text:"nepal" ,correct:false },
   { text:"bhutan" ,correct:false },
   { text:"vatican city" ,correct:true },
   { text:"sri lanka" ,correct:false }
   	]
},
{
   question:"What is the largest animal in the world?",
   answers:[
   { text:"shark" ,correct:false },
   { text:"Giraffee" ,correct:false },
   { text:"Blue whale" ,correct:true },
   { text:"elephant" ,correct:false }
   	]
},
{
   question: "What is the smallest continent in the world?",
   answers:[
   { text:"asia" ,correct:false },
   { text:"australia" ,correct:true },
   { text:"antartica" ,correct:false },
   { text:"africa" ,correct:false }
   	]
},
{
   question: "What is the largest desert in the world?",
   answers:[
   { text:"antartica" ,correct:false },
   { text:"sahara" ,correct:true },
   { text:"Gobi" ,correct:false },
   { text:"kalahari" ,correct:false }
   	]
},
{
   question: "What is called the land of rising sun?",
   answers:[
   { text:"japan" ,correct:true },
   { text:"china" ,correct:false },
   { text:"India" ,correct:false },
   { text:"africa" ,correct:false }
   	]
}

];
const questionElement=document.getElementById('question');
const answerbtns=document.getElementById('answer-buttons');
const nextbtn=document.getElementById('next-btn');
const question=document.getElementById('question');

let currentqnindex=0;
let score=0;

function startQuiz()
{
	currentqnindex=0;
	score=0;
	nextbtn.innerHTML="Next";
	showQuestion();

}
function showQuestion()
{
		resetQn();//to reset the previous question
	let currentQuestion=questions[currentqnindex];
	let questionno=currentqnindex+1;
	questionElement.innerHTML=questionno+"."+currentQuestion.question;
 
 currentQuestion.answers.forEach(answer=>
 {

 	const button=document.createElement("button");
 	button.innerHTML=answer.text;
 	button.classList.add("btn");
 	answerbtns.appendChild(button);
 	if(answer.correct)
 		button.dataset.correct=answer.correct;
 	button.addEventListener("click",selectAnswer);

 });

}

function resetQn()
{
	nextbtn.style.display="none";
	while(answerbtns.firstChild)
	{
		answerbtns.removeChild(answerbtns.firstChild);
	}
}

function selectAnswer(e)
{
	const selectBtn=e.target;
	const isCorrect=selectBtn.dataset.correct=="true";
	if(isCorrect)
	{
		selectBtn.classList.add("correct");
		score++;

	}
	else
	{
		selectBtn.classList.add("incorrect");
		
	}

	Array.from(answerbtns.children).forEach(button=>
	{
		if(button.dataset.correct==="true"){
				button.classList.add("correct");
			}
			button.disabled="true";
	});
	nextbtn.style.display="block";
}

function showScore() {



questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;

nextbtn.innerHTML = "Play Again";
 nextbtn.style.display = "block";
}

function handleNextButton(){
currentqnindex++;
if(currentqnindex < questions.length) { 
showQuestion();
}
else{
showScore();
}

}



nextbtn.addEventListener("click",()=>
{
	if(currentqnindex<questions.length){
		handleNextButton();
	}
	else{
		startQuiz();
	}
})

startQuiz();
