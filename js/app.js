var readlineSync = require('readline-sync');

const chalk = require('chalk');

//High Score - 1
var hsOne = {
  name:"Bot1",
  score:"10"

}

//High Score - 2
var hsTwo = {
  name:"Bot2",
  score:"9"
}

//Highest Score
var hsScore = 1;

//High Score array
var hsArr = [hsOne,hsTwo];


//Score Variable
var score = 0;

// Update High Score Function
function updateHighScore(scoreObj={name:"",score:""}){

  //Traverse High Score Array and check each entry
  for(var j=0;j<hsScore.length;j++){
    if(scoreObj.score > hsScore[j].score){
      hsScore[j] = scoreObj;
      return true;
    }
  }
  return false;
}

//Array of question,answer,option objects
var varArr = [{
  question:"Who is your Favourite Cricketer?",
  answer:"MSD",
  option:['MSD','Virat','ABD']
},
{
  question:"Where did IPL 2020 occured?",
  answer:"UAE",
  option:['USA','India','UAE']
},
{
  question:"What is Batting Style of Virat Kohli?",
  answer:"Right",
  option:['Left','Right','None']
},
{
  question:"How many times Mumbai Indians won IPL?",
  answer:"6",
  option:['4','5','6']
},
{
  question:"Who is captain of Australia?",
  answer:"Aaron Finch",
  option:['David Warner','Aaron Finch','Steve Smith']
}]

 

var userName = readlineSync.question(chalk.yellow("Please enter your name : "));

//Welcoming user
console.log(chalk.bgMagenta.bold("Welcome to cricket quiz app") + " " + userName);

//Gameplay function
function powerPlay(obj){
  
  console.log(chalk.blue(obj.question));
  index = readlineSync.keyInSelect(obj.option)


  if(obj.option[index]===obj.answer){
    console.log(chalk.green("Correct answer"));
    
    console.log(chalk.yellow("----------------------"));
    
    score = score + 5;
  } else {
    console.log(chalk.red("Wrong Answer"));
    console.log("Right Answer is : " + chalk.green(obj.answer));
  }
}


//Driver Function
for(var i =0;i<varArr.length;i++){
  
  process.stdout.write(chalk.red("Q"+ (i+1) + "." ));
  powerPlay(varArr[i]);
  
  }

console.log(chalk.grey("\nYour Final Score : ") + score)



//====================================

console.log(chalk.grey("Highest Score till now - ") + hsOne.score);

//if(score > hsOne.score)
if(score > hsOne.score){
  //Update 1st High Score //For this take i/p username,
  
  // hsOne.name = userName;
  // hsOne.score = score;

  //Print the message
  console.log(chalk.cyan.italic("Woahh!! You've beaten the high score. Please share the screenshot"));

  //Call the function with updated values
  updateHighScore({userName,score});
  
} else {
  console.log(chalk.red("\nYou didn't make it to the top :("))
  console.log(chalk.red("Try again to beat the highest score!"));
}

