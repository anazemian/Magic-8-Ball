
function didUserEnterStop(){
  document.getElementById("user_question").value === "stop";
};

function randomAnswerGenerator(){

  var user_question_string = document.getElementById("user_question").value;

  var answers = ["Yup!", "Fuhgeddaboudit", "Maybe", "What would your mother do?", "What would an Australian do? Do the opposite.", "Your answer here.", "Not a chance", "Absolutely!", "Santa says you have been a good boy", "You'll have a better chance on Shark Tank", "HAHAHAHAHAHAHA", "Let's get a burger and fries", "Go for it!", "You are crazy"]

  var answerString = Math.floor(Math.random()*answers.length)

  document.getElementById("user_question").value = "";

  if (!didUserEnterStop(user_question_string)){
  hello_user.innerHTML = answers[answerString]
}
  if (!didUserEnterStop(user_question_string)){
    the_question.innerHTML = user_question_string;
  }
};
// Output the question with the random answer.
// Put the question and answer into a loop that stops when the user enters STOP.
