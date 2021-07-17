var readlineSync = require("readline-sync");
const chalk = require("chalk");
var score = 0;

var userName = readlineSync.question(chalk.greenBright("Enter Your Name: "))


console.log(chalk.cyanBright("How well You know SANDEEP?\n"));
console.log(chalk.redBright("NOTE:")+chalk.greenBright(" For each right answer you get a score of 1point\n"))
console.log(("select '")+chalk.greenBright("a")+("' or '")+chalk.greenBright("b")+("' or '")+chalk.greenBright("c")+("' as you answer\n"))

function play(question,answer){
  var useranswer = readlineSync.question(question)
  if (useranswer === answer){
    console.log(chalk.greenBright("You are right! "))
    score = score +1;
    console.log("Your score: " + chalk.greenBright(score));
  }else{
    console.log(chalk.redBright("You are wrong!"))
 
    console.log("Your score: " + chalk.greenBright(score)); 
  }
  console.log("_____________________________\n")
}



play(chalk.cyanBright("1.What is my nick name?")+("\na.Sandy\nb.Sunny\nc.Sand\n"),"b");
play(chalk.cyanBright("2.What is my Favo Color?")+("\na.Blue\nb.Brown\nc.Black\n"),"c");
play(chalk.cyanBright("3.What  mobile I use?")+("\na.Vivo\nb.Iphone\nc.YourPhone\n"),"a");
play(chalk.cyanBright("4.Where do I live?")+("\na.Hyderabad\nb.Delhi\nc.Mumbai\n"),"c");
play(chalk.cyanBright("5.I'm ?")+("\na.Introvert\nb.Extrovert\nc.Ambivert\n"),"a")
play(chalk.cyanBright("6.What is my favo hobby?")+("\na.Singing\nb.Dancing\nc.Sleeping\n"),"c");
play(chalk.cyanBright("7.What is my favo subject?")+("\na.Maths\nb.Physics\nc.English\n"),"a");


if(score >=4){
  console.log(chalk.greenBright("You Know me well"))
  console.log(("I think you are ") + chalk.greenBright(userName) + (" I know because your my Best friend"))
}else{
  console.log(chalk.redBright("Hoo! No your not my best friend"))
}