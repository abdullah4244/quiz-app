function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
    this.terminaterender = false;
}



Quiz.prototype.isEnded = function () {
    return this.questionIndex == this.questions.length;
}
Quiz.prototype.getScore = function () {
    return this.score;
}

Quiz.prototype.getQuestionIndex = function () {

    return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {

    
  
    if(this.getQuestionIndex().correctAnswer(answer)) {
        this.questionIndex++;
        this.score++;
    }
    else {
        this.questionIndex++;
    }
}