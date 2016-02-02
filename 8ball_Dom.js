
//This function determines if the user entered 'stop' as their question. If so, it would stop the loop, but since there is no loop, it doesnt really stop anything, but it keeps the second function working correctly.
function didUserEnterStop(){
  document.getElementById("user_question").value === "stop";
};
//This function is the game itself.
function randomAnswerGenerator(){
//This variable takes the users question and ties it to the input box in the HTML.
  var user_question_string = document.getElementById("user_question").value;
//This variable is an array with all the possible answers the 8 ball will respond with.
  var answers = ["Yup!", "Fuhgeddaboudit", "Maybe", "What would your mother do?", "What would an Australian do? Do the opposite.", "Your answer here.", "Not a chance", "Absolutely!", "Santa says you have been a good boy", "You'll have a better chance on Shark Tank", "HAHAHAHAHAHAHA", "Let's get a burger and fries", "Go for it!", "You are crazy"]
//This variable picks a random answer from the array.
  var answerString = Math.floor(Math.random()*answers.length)
//This will clear the text input box every time the user clicks the ask button.
  document.getElementById("user_question").value = "";
//The if statement will change the the orignial h1 text to the random answer from the array
  if (!didUserEnterStop(user_question_string)){
  hello_user.innerHTML = answers[answerString]
}
//This if statement will display the users question above the answer they recieve. It initially displays "What was it you asked?" but then changes with each question.
  if (!didUserEnterStop(user_question_string)){
    the_question.innerHTML = user_question_string;
  }
};
