const ch1=document.querySelector("#ch1");
const content=document.querySelector("#content");
const sending=document.querySelector(".sending");
const sender=document.querySelector(".sender");
const to=document.querySelector(".to");
const from=document.querySelector(".from");
const tofrom=document.querySelector(".tofrom");
const submit=document.querySelector(".submit");
const submit2=document.querySelector(".submit2");
const submit3=document.querySelector(".submit3");
const submit4=document.querySelector(".submit4");
const fontSelector=document.querySelector("#fontSelector");
const fontColorSelector=document.querySelector("#fontColorSelector");
const usermessage=document.querySelector("#usermessage");
const submit5=document.querySelector(".submit5");
const message=document.querySelector(".message");
const messagefontSelector=document.querySelector("#messagefontSelector");
const messagecolorSelector=document.querySelector("#messageColorSelector");
const submit6=document.querySelector(".submit6");
const submit7=document.querySelector(".submit7");
const messageSizeSelector=document.querySelector("#messageSizeSelector");
const submit8=document.querySelector(".submit8");

const arr=["greeting1.png", "greeting2.jpg", "greeting3.jpg", "greeting4.jpg", "greeting5.jpg", "greeting6.jpg", "greeting7.png", "greeting8.jpg", "greeting9.jpg", "greeting10.jpg"];
const right=document.querySelector(".right");
let idx=0;

ch1.addEventListener("click", ()=>{
    ch1.classList.add("change");
})

submit.addEventListener("click", ()=>{
    let getter=to.value.toUpperCase();
    sending.innerHTML=` ${getter} `;
})

submit2.addEventListener("click", ()=>{
    let sendername=from.value.toUpperCase();
    sender.innerHTML=`${sendername} `;
})

submit3.addEventListener("click", ()=>{
    let fontfamily=fontSelector.value;
    tofrom.style.fontFamily=`${fontfamily}`;
    tofrom.style.background=`${fontfamily}`;
})

submit4.addEventListener("click", ()=>{
    let color=fontColorSelector.value;
    if (color=="No gradient"){
    tofrom.style.background="";
    }
    if (color.includes("gradient")) {
    tofrom.style.background = `${color}`;
    }
    else
    tofrom.style.color=`${color}`;
})

right.addEventListener("click", ()=>{
    idx++;
    if(idx==arr.length)
    idx=0;
    content.style.backgroundImage=`url("${arr[idx]}")`;
    content.style.backgroundSize="cover";
})

submit5.addEventListener("click", ()=>{
    if(idx>=5){
        message.innerText=`${usermessage.value}`;
        message.style.color="black";
    }
})

submit6.addEventListener("click", ()=>{
    let fontfamily=messagefontSelector.value;
    message.style.fontFamily=`${fontfamily}`;
    message.style.background=`${fontfamily}`;
})

submit7.addEventListener("click", ()=>{
    let color=messagecolorSelector.value;
    if (color=="No gradient"){
    message.style.background="";
    }
    if (color.includes("gradient")) {
    message.style.background = `${color}`;
    }
    else
    message.style.color=`${color}`;
})

submit8.addEventListener("click", ()=>{
    if(idx>=5){
        message.style.fontSize=`${messageSizeSelector.value}`;
    }
})

/* const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 800, height: 600 });
    await page.goto('http://localhost:3000/'); // Replace with your local server address
    await page.screenshot({ path: 'screenshot.png' });

    await browser.close();
})(); */

/* document.getElementById("shareButton").addEventListener("click", () => {
    const cardElement = document.querySelector("#content");

    // Use html2canvas to capture the card as an image
    html2canvas(cardElement, {
        useCORS: true, // Add this option
    }).then(function (canvas) {
        // Convert the canvas to a data URL
        const imageDataURL = canvas.toDataURL("image/png");

        // Create a temporary link element
        const link = document.createElement('a');
        link.href = imageDataURL;
        link.download = 'flipping-card.png';

        // Trigger a click on the link to initiate the download
        link.click();
    });
});

const express = require('express');
const fetch = require('node-fetch');
const app = express();
const port = 3000;

app.get('/proxy', async (req, res) => {
    const imageUrl = req.query.url;
    const imageResponse = await fetch(imageUrl);
    const imageBuffer = await imageResponse.buffer();

    res.set('Content-Type', 'image/png');
    res.send(imageBuffer);
});

app.listen(port, () => {
    console.log(`Proxy server listening at http://localhost:${port}`);
}); */




