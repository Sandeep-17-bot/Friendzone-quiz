
var readlineSync =  require("readline-sync");

var score = 0;
console.log("NOTE: Don't take it serious If you have common sense")
console.log("\nIts Just for FUN")
var userName = readlineSync.question("Enter is your NAME: ");
console.log("\nhaaa! Whatever, who wants your name. \nAnyway lets start")
console.log("\nEnter 'a' or 'b' or 'c' as your answer \n")
console.log("You get 1 point for each right answer \n")
console.log("Note: I know you wont make it but still  \nTest Your common sense here:)\n")


function play(question,answer){
  var userAnswer =readlineSync.question(question);
  if (userAnswer === answer){
    console.log( "You are right!")
    score = score + 1
    console.log("Your score: " + score )
  }else{
    console.log("You are wrong!")
    score = score - 1
    console.log("Your score: " + score )
  }
  
  console.log("\n----------------------\n")
}
play("1.Who is the bai of bomday?\na.SalmanBai\nb.SharukBai\nc.Mumbai\n","c")
play("2.How many minars does charminar?\na.Ek\nb.Char\nc.teen\n","b")
play("3.What is the Capital of India? \na.I\nb.Delhi\nc.INDIA \n", "b")
play("4.Taj Mahal is In ?\na.Taj Hotel\nb.TajMahal TeaAd\nc.TajBanjara \n","b")
play("5.Golden Temple is madeup of?\na.Gold\nb.Rold Gold\nc.Plastic Gold\n","a")
play("6.How many gates does Indian Gate had?\na.So Many\nb.Not Many\nc.I don't know\n","c")
play("7.Red Fort is in What color?\na.Red\nb.RRed\nc.Green\n","a")
play("8.What is in Lip Stick?\na.Lips\nb.Stick\nc.Taste\n","c")
play("9.Where is India Located?\na.India\nb.Asia\nc.Earth\n","c")
play("10.Earth is in?\na.Maths-Textbook\nb.Biology-TextBook\nc.Social-TextBook\n","c")

console.log("Your score: " + score + "\n")

console.log( "Sandeep scored: 9")
console.log( "Kishor scored: 8")
console.log( "Prasad scored: 7\n" )

if(score > 9){
  console.log("You scored 10 That's Great.\n You have beated Sandeep.\nSend me screen shot I will Updated Your score\n")
}else if(score > 8){
  console.log("You scored: " + score +"You have beaten Kishor. \nSend me screen shot I will Updated Your score " )
}else if(score >7){
  console.log("You scored: " + score + " You have beaten Prasad. Send me screen shot I will Updated Your score")
}else{
  console.log("You scored: " + score + " Better Luck Next Time ")
}
 
if(score>7){
  console.log("Hoo! " + userName + " You have some common sense")
}else{
  console.log("Don't feel bad " + userName +" One day God will get you some common sense")
}








console.log("Share this to your friends and let them check there common sense\n")
console.log("Instagram ID: 17_sunny_beliveit")







