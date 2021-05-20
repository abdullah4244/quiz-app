
let questions = [

 new Question("What is 2+2" , ["2","4","6","8"] ,"4"),
 new Question("What is 4*2" , ["8","12","16","18"] ,"8"),
 new Question("What is true" , ["boolean","Number","Object","String"] ,"boolean"),
 new Question("What is Bootstrap" , ["CSS FRAMEWORK","JS FRAME WORK","Scripting Language","JAVA FRAMEWORK"] ,"CSS FRAMEWORK")

]


let quiz = new Quiz(questions);

let pagination =document.getElementById('pagination');



function render () {

    const quest = document.getElementById('quest');
    if(quiz.isEnded()){
        
        let pass = "";
        if(quiz.getScore()>2) {
          pass="Congratulations you passed";  
        }
        else {
            pass="OOPS !! YOU FAILED";
        }
        options.innerHTML = `<h1 class="text-center">${pass} <br> Your score is ${quiz.getScore()}</h1>`
        pagination.style.display = 'none';
        
        quest.style.display = "none";
    } 
    else {
    let question = quiz.getQuestionIndex();
    quest.textContent = question.text;
    question.choices.forEach((choice,i)=>{


        let btn = document.getElementById(`choice${i+1}`);
      
        btn.textContent = choice;
    })
    pagination.textContent = `${quiz.questionIndex + 1} / ${quiz.questions.length}`
    }
}

render();

const options = document.querySelector('.info-box .options');


function nextOption(choice) {
  
    
        
    quiz.guess(choice);
  


 

    render();
   

}
options.addEventListener('click',function(e){

    if(e.target.classList.contains('opt')){
        nextOption(e.target.textContent);

    }


});
