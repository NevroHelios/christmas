gsap.config({trialWarn: false});
let select = s => document.querySelector(s),
		toArray = s => gsap.utils.toArray(s),
		mainSVG = select('#mainSVG'),
		xmlns = "http://www.w3.org/2000/svg",
		dotArr = toArray('#dotContainer circle'),
		cloneArr = [],
		num = dotArr.length,
		dot = select('.dot'),
		dotContainer = select('#dotContainer'),
		container = select('#container'),
		lineContainer = select('#lineContainer'),
		pt = mainSVG.createSVGPoint(),
		mousePos = {x: 0, y: 0},
		lineArr = [],
		colorArray = ["d6140a","ffb301","082970","fa7204","e33189","ffb501","a49e3b","3d2c74","ce1918","1c9ba2"],
		visibleArea = {
			value: 141,
      offset: 100
		},
		currColor = null,
		baublePosArray = [25, 56, 107, 164, 318, 365, 258, 419, 443],
		defaultColor = "",
		completedArray = [],
		baubleRadius = 14,
		bigBaubleArray = [],
		baubleArray = [],
		woodColor = '#A63C06',
		treeColor = '#0F7173',
    subm1Str = 'MOVE YOUR MOUSE TO FILL',
    subm2Str = 'THE TREE WITH COLOUR!',
		followerVX = 0,
		followerVY = 0
    

colorArray = colorArray.map(x => Array.from(x)[0] == '#' ? x : `#${x}`);


gsap.set('svg', {
	visibility: 'visible'
})

gsap.set('#star', {
	scale: 0,
	rotation: 90,
	transformOrigin: '50% 50%'
})

gsap.set('#whole', {
	y: `+=${visibleArea.offset}`,
	transformOrigin: '50% 50%'
})
gsap.set('#m1', {
	y: `-=${visibleArea.offset}`,
	opacity: 0,
  fill: colorArray[8],
	transformOrigin: '50% 50%'
})

gsap.from('#introText', {
  opacity: 0,
  duration: 0.61,
  ease: 'power2.inOut'
})

function setIntroTextColor () {
  let subMessage1 = subm1Str.split('');
  let subMessage2 = subm2Str.split('');
  let newSubm1Str = '';
  let newSubm2Str = '';
  subMessage1.forEach((char, index) => {
    newSubm1Str+=`<tspan style="fill:${colorArray[index % colorArray.length]}">${char}</tspan>`
  })
  subMessage2.forEach((char, index) => {
    //console.log(char, index);
    newSubm2Str+=`<tspan style="fill:${colorArray[index % colorArray.length]}">${char}</tspan>`
  })
  select('#subm1').innerHTML = newSubm1Str;  
  select('#subm2').innerHTML = newSubm2Str;  
}

// Get point in global SVG space
function cursorPoint(evt){
  pt.x = evt.clientX; 
  pt.y = evt.clientY;
  return pt.matrixTransform(mainSVG.getScreenCTM().inverse());
}


function emptyLineContainer () {
	lineContainer.innerHTML  = "";
}

class Particle {
  constructor(x, y, shape, hasConnection, id, fill, newFill) {		
   	this.x = x;
   	this.y = y;
   	this.shape = shape;
   	this.initX = this.x;
   	this.initY = this.y;
		this.hasConnection = false;
		this.id = id;
		this.fill = fill;
		this.newFill = newFill;
	
    }
  
}
class Line {
  constructor(x1, y1, x2, y2, strokeColor, shape, parent) {		
   	this.x1 = x1;
   	this.y1 = y1;
   	this.x2 = x2;
   	this.y2 = y2;
   	this.strokeColor = strokeColor;
   	this.shape = shape;
   	this.parent = parent;

    }
  
}
let pipeOpacity = gsap.utils.pipe(
	gsap.utils.clamp(0, visibleArea.value),
	gsap.utils.mapRange(0, visibleArea.value, 0.1, 1)

)		
let pipeRadius = gsap.utils.pipe(
	gsap.utils.clamp(0, visibleArea.value),
	gsap.utils.mapRange(0, visibleArea.value, 4, 2)

)		

const checkColor = (id) => {
	if(id >=172 && id < 177 || id >=208 && id < 213 || id >=247 && id < 252 || id >=285 && id < 290) {
		return true
	}	
	return false;
}

const checkBaublePos = (clone, d) => {
	if (baublePosArray.indexOf(clone.id) > -1){
		container.appendChild(clone.shape)
		return baubleRadius;		
	}
	return pipeRadius(d);
}
function showStar(){
	let tl = gsap.timeline();
	tl.to('#star', {
		scale: 1,
		duration: 1,
		transformOrigin: '50% 50%',
		ease: 'elastic(0.5, 0.39)'
}).to('#star', {
		rotation: 0,
		transformOrigin: '50% 50%',
		ease: 'sine'
}, 0)
	
}

function endAnim(){
	gsap.to(lineContainer, {
		opacity: 0,
		onComplete: emptyLineContainer
	})
	
	let endTl = gsap.timeline({onComplete: showStar})
	cloneArr.forEach((clone, cloneCount) => {
		let bigBauble = null;
		let tl = gsap.timeline();
		tl.to(clone.shape, {
			x: clone.initX,
			y: clone.initY,
			duration: 1.2,
			fill: (c, item) => parseInt(item.getAttribute('r')) == baubleRadius ? clone.fill : checkColor(cloneCount) ? woodColor : treeColor,			
			ease: 'elastic(0.486,0.53)'
		}) 		
		endTl.add(tl, cloneCount / num)
 		
	})
	
	endTl.add('message')
		.to('#whole', {
		y: 40,
		duration: 1.6,
		ease: 'expo.inOut'
	}, 'message')
	.to('#m1', {
		y: `+=${visibleArea.offset}`,
		opacity: 1,
		duration: 1.6,
		ease: 'expo.inOut'
	}, 'message')
	gsap.fromTo(bigBaubleArray, {
		rotation:-12, 
		transformOrigin: '50% -0%',
	}, {
		duration: 0.61,
		rotation: 12,
		transformOrigin: '50% -0%',
		stagger: {
			each: 0.21,
			repeat: -1,
			yoyo: true,
			from: 'random'
		},
		ease: 'power1.inOut'
	})

}

for(let i = 0; i < num; i++) {
	let shape = dot.cloneNode(true);
	let clone = new Particle(
		parseInt(dotArr[i].getAttribute('cx')),
		parseInt(dotArr[i].getAttribute('cy')),
		shape,
		false,
		i
	);

	container.appendChild(clone.shape);
	gsap.set(clone.shape, {
		x: clone.x,
		y: clone.y
	})
	cloneArr.push(clone);
	baubleArray.push(clone.shape)
	
}

function checkDistance(a, b) {
	return Math.hypot(a.x - b.x, a.y - b.y) < visibleArea.value * 0.45 ? true : false;
}
function calc () {
	emptyLineContainer();
	let i = num;
	let curr = null;
	while(--i > -1) {

		currColor = colorArray[i % colorArray.length];
		curr = cloneArr[i];
		curr.fill = currColor;
		
    let deltaX = curr.x - mousePos.x;
    let deltaY = curr.y - mousePos.y;
    let angle = Math.atan2(deltaY, deltaX);
    let distance = visibleArea.value*2 / Math.sqrt(deltaX * deltaX + deltaY * deltaY);
  	curr.x += Math.cos(angle) * distance;
    curr.y += Math.sin(angle) * distance;
    curr.x += (curr.initX - curr.x) * 0.16;
    curr.y += (curr.initY - curr.y) * 0.16;
		
		gsap.set(curr.shape, {
			x: curr.x,
			y: curr.y
		})
		
		let d = Math.sqrt(Math.pow(((curr.x ) - mousePos.x),2) + Math.pow(((curr.y) - mousePos.y),2));
	if(checkDistance(curr, mousePos)) {
				let shape = document.createElementNS(xmlns, 'line');
				let strokeColor = currColor
				let line = new Line(curr.x, curr.y, mousePos.x, mousePos.y, strokeColor, shape, lineContainer);
				lineContainer.appendChild(shape);
				lineArr.push(line);
				
				gsap.set(line.shape, {
					attr: {
						x1: line.x1,
						y1: line.y1,
						x2: line.x2,
						y2: line.y2
					},
					stroke: strokeColor,
					opacity: pipeOpacity(d)
				})
				gsap.set(curr.shape, {
					//fill: checkColor(curr.id) ? woodColor : curr.fill,
					fill: curr.fill,
					attr:{
						r: checkBaublePos(curr, d)
					}
				})

				if(completedArray.length == cloneArr.length) {
					completedArray.length = [];
					mainSVG.onmousemove = null;
					gsap.ticker.remove(calc);
					endAnim();
				} else {
					if(!completedArray.includes(curr)) {

						completedArray.push(curr);
					}					
				}		
			}
		
		
	}
}

function setMouseMove () {
  mainSVG.onpointermove = (e) => {
    mousePos.x = cursorPoint(e).x;
    mousePos.y = cursorPoint(e).y - visibleArea.offset;
  }
  gsap.ticker.add(calc);

  bigBaubleArray = baublePosArray.map((i) => baubleArray[i]);  
  mainSVG.onmousedown = null;
}
function init () {
  setIntroTextColor();
  mainSVG.onmousedown = (e) => {
    let tl = gsap.timeline({});
    tl.to('#introText', {
      opacity: 0
    })
    .to('#whole', {
      opacity: 1,
      onComplete: setMouseMove
    })
/*     .to(mousePos, {
      x: 400,
      y: 300,
      duration: 1
    }) */
  }  
}

init()