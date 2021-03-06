var questions = ["Which pet is your ideal pet?", "On a free afternoon you'd rather be?", "What is your greatest fear?", "Are you brave?","What do you value the most?"];
var options =[["A toad", "Gardening", "A Person", "Not really", "Courage"] ,
             ["A Rat", "Playing Chess", "An Animal", "Somewhat", "Family"] ,
             ["A Cat", "Reading", "Failure" , "Yes" , "Social Justice"] ,
             ["An Owl" ,"Playing Sports","Failure Itself", "Hell Yes", "Friendship"]];
var answers= [];
var selections= [];
var questionNum = 0,
    nevilleCount = 0,
    ronCount = 0,
    hermCount = 0,
    harryCount = 0;

    function displayBtns(){

      if(questionNum === 0){
      //  $('#next').html('<button onclick="next()" type="button" class="btn btn-primary">Next</button>');
      $('#next').show();
      $('#prev').hide();
      $('#submit').hide();
      }

      else if (questionNum === (questions.length - 1)){
      //$('#prev').html('<button onclick="prev()" type="button" class="btn btn-primary">Prev</button>');
      //$('#submit').html('<button type="button" class="btn btn-info">Submit</button>');
      $('#next').hide();
      $('#prev').show();
      $('#submit').show();
      }

    else if(questionNum !== (questions.length - 1) && questionNum !==0){
    //  $('#prev').html('<button onclick="prev()" type="button" class="btn btn-primary">Prev</button>');
    //  $('#next').html('<button onclick="next()" type="button" class="btn btn-primary">Next</button>');
    $('#next').show();
    $('#prev').show();
    $('#submit').hide();
      }
    }

function displayQuestion() {
displayBtns();

var elemString = "";
 elemString = getElemString(questions[questionNum],questionNum);

document.getElementById('quiz').innerHTML = elemString;

}
displayQuestion();

function getElemString(question, idx){
return  '<div>'
  + '<h3>'+question+'</h3>'
  + '<input type="radio" name="answer" value=' + options[0][idx] + ' />' + ' ' + options[0][idx] + '<br/>'
  + '<input type="radio" name="answer" value=' + options[1][idx] + ' />' + ' ' + options[1][idx] + '<br/>'
  + '<input type="radio" name="answer" value=' + options[2][idx] + ' />' + ' ' + options[2][idx] + '<br/>'
  + '<input type="radio" name="answer" value=' + options[3][idx] + ' />' + ' ' + options[3][idx] + '<br/>'
  + '</div>';
}

function next(){
    addAnswer();
    questionNum++;
    displayQuestion();
}

function prev(){
  questionNum--;
  displayQuestion();
}

function addAnswer() {
  answers.push($('input[name="answer"]:checked').val());
}

function submit(){
  addAnswer();
  calcScores();
}
function calcScores(){
  for(var i=0; i< answers.length; i += 1 ){
    for(var k=0; k< questions.length; k += 1){
      selections.push(options[i,k]);
    }
      if(selections[i]=== answers[i] && i === 0){
            nevilleCount++;
          }
    else  if(selections[i]=== answers[i] && i ===1){
            ronCount++;
          }
    else  if(selections[i]=== answers[i] && i ===2){
            hermCount++;
          }
    else  if(selections[i]=== answers[i] && i ===3){
            harryCount++;
         }
  }
  displayOutcome();
}

function displayOutcome(){
  console.log(nevilleCount);
  console.log(ronCount);
  console.log(hermCount);
  console.log(harryCount);
  console.log("answers array contains " + answers);
  console.log("selections array contains " + selections);
}
