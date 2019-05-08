// game category data
let citiesCat = [
    { question: 'Current home of the Hawks', answer: 'Atlanta', score: $('#cities-1').text() },
    { question: 'Only NBA city with 2 teams', answer: 'Los Angeles', score: $('#cities-2').text() },
    { question: 'The Sonics played here...', answer: 'Seattle', score: $('#cities-3').text() },
    { question: 'Hometown of the Knickerbockers', answer: 'New York', score: $('#cities-4').text() },
    { question: 'First hometown of the Lakers', answer: 'Minneapolis', score: $('#cities-5').text() },
];
let stadiumsCat = [
    { question: 'The Hawks play at home in this newly named stadium', answer: 'State Farm Arena', score: $('#stadiums-1').text() },
    { question: 'The Chicago Bulls won 6 championships here', answer: 'United Center', score: $('#stadiums-2').text() },
    { question: 'Historic Home of the Boston Celtics', answer: 'TD Garden', score: $('#stadiums-3').text() },
    { question: 'The most iconic venue in sports', answer: 'Madison Square Garden', score: $('#stadiums-4').text() },
    { question: 'Only arena where the home and away team can both have home court advantage', answer: 'Staples Center', score: $('#stadiums-5').text() },
];
let legendsCat = [
    { question: 'He won more championships than anyone ever, 11 rings', answer: 'Bill Russell', score: $('#legends-1').text() },
    { question: 'The only person in NBA history to score 100 points in a single game', answer: 'Wilt Chamberlin', score: $('#legends-2').text() },
    { question: 'The first man to average a triple double', answer: 'Oscar Robertson', score: $('#legends-3').text() },
    { question: "This man has been widely considered the greatest player of all time since the 1990's", answer: 'Michael Jordan', score: $('#legends-4').text() },
    { question: 'He scored the most points in NBA History, 38,387', answer: 'Kareem Abdul-Jabbar', score: $('#legends-5').text() },
];
let onCourtCat = [
    { question: 'The number of players that start the game for each team', answer: '5', score: $('#onCourt-1').text() },
    { question: 'Every game starts with this', answer: 'Tip off', score: $('#onCourt-2').text() },
    { question: 'The basketball is made out of this material', answer: 'Leather', score: $('onCourt-3').text() },
    { question: 'The player makes a shot while being fouled and makes the free throw attempt', answer: 'And one', score: $('#onCourt-4').text() },
    { question: 'The number of feet from the 3 point line to the goal', answer: '23.75', score: $('#onCourt-5').text() },
];
let offCourtCat = [
    { question: "Michael Jordan was selected 3rd overall in this year's draft", answer: '1984', score: $('#offCourt-1').text() },
    { question: "LeBron James made 'the decision' to leave Cleveland to go to this city", answer: 'Miami', score: $('#offCourt-2').text() },
    { question: 'The only player in NBA history to have more than one jersey retired', answer: 'Kobe Bryant', score: $('offCourt-3').text() },
    { question: 'He was the first NBA player to sign a shoe deal (Converse)', answer: 'Julius Erving', score: $('#offCourt-4').text() },
    { question: 'This man signed a 25 year contract with the Lakers for $25M in 1981', answer: 'Magic Johnson', score: $('#offCourt-5').text() },
];
// question constructor
let ansCnt = 0;
class JepQuestion {
    constructor(question, answer, score, cat, value,id) {
        this.question = question;
        this.answer = answer;
        this.score = score;
        this.cat= cat;
        this.value = value;
        this.id = id;
    }
    // click method to reveal answer
    klik() {
        // console.log('test');
        $(this.cat + this.id).html(this.question);
        $(this.cat + this.id).css("font-size", "20px");
        $(this.cat + this.id).css("font-color", "yellow");
        
    }
    // double click method to prompt for answer input
    dblKlik() {
        let answer1 = prompt(this.question, "(Not case sensitive)")
        let answer2 = answer1.toLowerCase();
        ansCnt++
        // end game feature
        if(ansCnt == 25){
            // console.log('test');
            
            if(playerScore > 0){
            swal('Winner! You win $' + playerScore);
            // console.log(ansCnt)
            }else{
                swal("You Lost... Try again!")
            }
            }
        // prevents case sensitivity for answers
        if (answer2 == this.answer.toLowerCase()) {
            
            swal("Correct!", "Way to go!", "success");
            playerScore += Number(this.score)
            $('#scoreBox').text(Number(playerScore))
            // console.log(Number(playerScore));      
          
        }
        
        else {
            
            swal("Incorrect...", "Better luck next time!", "error");
            playerScore -= Number(this.score)
            $('#scoreBox').text(Number(playerScore))
            // console.log(Number(playerScore));
        }
    }

}
// question constructor ends

let playerScore = 0;

// category objects
let citiesObj = [];
for (counter = 0; counter < 5; counter++) {

    let workObj = new JepQuestion(citiesCat[counter].question, citiesCat[counter].answer, citiesCat[counter].score, '#cities-',100,counter + 1)
    citiesObj.push(workObj)
    $('#cities-' + (counter +1)).click(() => workObj.klik())
    $('#cities-' + (counter +1)).dblclick(() => workObj.dblKlik())
    
}

let stadiumsObj = [];
for (counter = 0; counter < 5; counter++) {

    let workObj = new JepQuestion(stadiumsCat[counter].question, stadiumsCat[counter].answer, stadiumsCat[counter].score, '#stadiums-',100,counter + 1)
    stadiumsObj.push(workObj)
    $('#stadiums-' + (counter +1)).click(() => workObj.klik())
    $('#stadiums-' + (counter +1)).dblclick(() => workObj.dblKlik())
}

let legendsObj = [];
for (counter = 0; counter < 5; counter++) {

    let workObj = new JepQuestion(legendsCat[counter].question, legendsCat[counter].answer, legendsCat[counter].score, '#legends-',100,counter + 1)
    legendsObj.push(workObj)
    $('#legends-' + (counter +1)).click(() => workObj.klik())
    $('#legends-' + (counter +1)).dblclick(() => workObj.dblKlik())
}
let onCourtObj = [];
for (counter = 0; counter < 5; counter++) {

    let workObj = new JepQuestion(onCourtCat[counter].question, onCourtCat[counter].answer, onCourtCat[counter].score, '#onCourt-',100,counter + 1)
    onCourtObj.push(workObj)
    $('#onCourt-' + (counter +1)).click(() => workObj.klik())
    $('#onCourt-' + (counter +1)).dblclick(() => workObj.dblKlik())
}
let offCourtObj = [];
for (counter = 0; counter < 5; counter++) {

    let workObj = new JepQuestion(offCourtCat[counter].question, offCourtCat[counter].answer, offCourtCat[counter].score, '#offCourt-',100,counter + 1)
    offCourtObj.push(workObj)
    $('#offCourt-' + (counter +1)).click(() => workObj.klik())
    $('#offCourt-' + (counter +1)).dblclick(() => workObj.dblKlik())
}
// category objects ends

// audio
var sound = document.getElementById("myAudio"); 

function playAudio() { 
  sound.play(); 
} 

function pauseAudio() { 
  sound.stop(); 
}