let playbox=document.querySelector(".playbox2");
let body=document.querySelector("body");
let scoreboard=document.querySelector("h1");

let score=0;
let flag=1;
let present=0;
let starttimeout=prompt("enter starting timeout in miliseconds");
let decrease=prompt("enter decrease in timeout in miliseconds");
playbox.addEventListener("click", range);

function range(){
    if(flag==1)
    playbox.remove();
    if(body.hasChildNodes==false){
        playbox=document.createElement("button");
        playbox.innerText="Game Over!! Refresh the game !!";
        playbox.classList.add("playbox2");
    }
    /* let score=0;
    let starttimeout=prompt("enter starting timeout in miliseconds");
    let decrease=prompt("enter decrease in timeout in miliseconds");
    scoreboard.innerText="Score:"+score; */
    score=score+1;
    let side=Math.floor(Math.random()*100)+25;
    let smallbox=document.createElement("div");
    present++;
    smallbox.style.height=side+"px";
    smallbox.style.width=side+"px";
    let postop=Math.floor(Math.random()*500)+100;
    let posright=Math.floor(Math.random()*1200)+100;
    smallbox.style.position="absolute";
    smallbox.style.top=postop+"px";
    smallbox.style.left=posright+"px";
    smallbox.style.borderWidth="2px";
    smallbox.style.borderColor="black";
    smallbox.style.backgroundColor="red";
    smallbox.style.borderStyle="solid";
    smallbox.style.borderRadius="50%";
    smallbox.style.backgroundImage="url('giftimage.jpg')";
    smallbox.style.backgroundSize="cover";
    body.append(smallbox);
    setTimeout(()=>{
        smallbox.remove();
        scoreboard.innerText="Score:"+score;
    }, starttimeout);
    starttimeout=starttimeout-decrease;
    smallbox.addEventListener("click", ()=>{
        smallbox.remove();});
    smallbox.addEventListener("click", range);
}