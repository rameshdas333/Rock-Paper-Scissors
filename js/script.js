let button = document.querySelectorAll('.button')
let result = document.querySelector('.result')
let score = document.querySelector('.score')
let main = document.querySelector('.main')

let userScore = 0;
let computerScore = 0;

let computerOption = ["rock","paper","scissors"];
button.forEach((item) => {

    item.addEventListener("click", function(){
        let userChoice = item.getAttribute("data-buttonName").toLocaleLowerCase()
        let computerChoice = computerOption[Math.floor(Math.random()*computerOption.length)].toLowerCase()
        let winner = operation(userChoice,computerChoice);
        result.innerHTML =`Your choice is ${userChoice} - Computer choice is ${computerChoice} - ${winner}`;
        score.innerHTML = `Score: You <b>${userScore}</b> - <b>${computerScore}</b> Computer`

        if(userScore >= 5 ){
            main.innerHTML = `
            
            
                     <div>
                          <p class="text-red-600 text-xl">Game over</p>
                          <p>Score: You <b>${userScore}</b> - <b>${computerScore}</b> Computer</p>
                          <p class="text-green-700 font-bold text-3xl">You won the match</p>
                     </div>
            
            `
        }

        if(computerScore >= 5 ){
            main.innerHTML = `
            
            
                     <div>
                          <p class="text-red-600 text-xl">Game over</p>
                          <p>Score: You <b>${userScore}</b> - <b>${computerScore}</b> Computer</p>
                          <p class="text-green-700 font-bold text-3xl">Computer won the match</p>
                     </div>
            
            `
        }

    })
})

 function operation(user,computer){

   if(user == computer){

    return "Drow the match"

   }

   else if(
    user == "rock" && computer == "scissors" ||
    user == "paper" && computer == "rock" ||
    user == "scissors" && computer == "paper" 

    ){

    userScore++
    return "You Win" 

   }
   else{

    computerScore++
    return "Computer Win"
   }


}