const fireDiv = document.querySelector('.fireworksDiv');
const fireworks = new Fireworks(fireDiv,{
  delay:{min:10, max:15},
  trace: 5,
  speed:0.5,
  particles: 200,
  sound:{
    enable:true,
    files:['https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'],
    volume: {min: 1, max: 2}
  }
})

fireworks.start();

var context = new AudioContext();

// window.onload = () => {
//   context.resume().then(() => {
//     console.log('Playback resumed successfully');
//   });
// }

   document.addEventListener('click', () => {
      context.resume().then(() => {
        console.log('Playback resumed successfully');
      });
    })

// setTimeout(function(){
//   fireworks.stop();
// },10000)