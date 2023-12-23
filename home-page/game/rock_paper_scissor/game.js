const btn=document.querySelector("#start");
const user=document.querySelector("#user");
const comp=document.querySelector("#comp");
const divs=document.querySelectorAll(".game");
const winorlose=document.querySelector("h3");
const userscore=document.querySelector("#userscore");
const computerscore=document.querySelector("#compscore");
let score=0;
let compscore=0;

//1=rock, 2=paper, 3=scissors
btn.addEventListener("click", ()=>{
    score=0;
    compscore=0;
    btn.innerText="Restart Game!!";
    winorlose.innerText="Your choice will be displayed on the left and the computer's choice displayed on the right. Good Luck!!";
    computerscore.innerText=`Computer Score:${compscore}`;
    userscore.innerText=`Your Score:${score}`;
    comp.style.backgroundImage="url('')";
    user.style.backgroundImage="url('')";
})
function compchoice(){
    let compch=Math.floor(Math.random()*3+1);
    let actualcompchoice="";
    if(compch==1)
    actualcompchoice="rock";
    if(compch==2)
    actualcompchoice="paper";
    if(compch==3)
    actualcompchoice="scissors";
    console.log(actualcompchoice);
    comp.style.backgroundImage=`url('${actualcompchoice}.jpg')`;
    comp.style.backgroundSize="contain";
    return actualcompchoice;
}

//console.log(actualcompchoice);

for(const division of divs){
    division.addEventListener("click", function func(){
        console.log("was clicked")
        let userch=division.getAttribute('id');
        console.log(userch);
        user.style.backgroundImage=`url('${userch}.jpg')`;
        user.style.backgroundSize="contain";
        let actualcompch=compchoice();
        if((userch=="rock" && actualcompch=="paper") || (userch=="paper" && actualcompch=="scissors") || (userch=="scissors" && actualcompch=="rock"))
        {
            console.log("comp wins");
            compscore++;
            computerscore.innerText=`Computer Score:${compscore}`;
            winorlose.innerHTML=`<h3>Computer wins as ${actualcompch} beats ${userch}</h3>`;
        }
        else if((actualcompch=="rock" && userch=="paper") || (actualcompch=="paper" && userch=="scissors") || (actualcompch=="scissors" && userch=="rock"))
        {
            console.log("you win");
            score++;
            userscore.innerText=`Your Score:${score}`;
            winorlose.innerHTML=`<h3>You win as ${userch} beats ${actualcompch}</h3>`;
        }
        else 
        {
            console.log("tied");
            winorlose.innerHTML="<h3>Tied</h3>";
        }
    })
};





/* function rules(userch, actualcompch){
    if((userch=="rock" && actualcompch=="paper") || (userch=="paper" && actualcompch=="scissors") || (userch=="scissors" && actualcompch=="rock"))
    {
        console.log("comp wins");
        winorlose.innerHTML=`<h3>Computer wins as ${actualcompch} beats ${userch}</h3>`;
    }
    else if((actualcompch=="rock" && userch=="paper") || (actualcompch=="paper" && userch=="scissors") || (actualcompch=="scissors" && userch=="rock"))
    {
        console.log("you win");
        winorlose.innerHTML=`<h3>Computer wins as ${userch} beats ${actualcompch}</h3>`;
    }
    else 
    {
        console.log("tied");
        winorlose.innerHTML="<h3>Tied</h3>";
    }
} */

 







