
//1.creating an object which takes multiple values
const flightPath = {
//Curviness-Amount of curve of an image to animate 
	//curviness:0 if curviness is zero animation will be a straight line it can be on x-axis or y-axis like a super straight line! it doesnt have any curviness.
	//curviness:1 if curviness is 1 it will have a slight motion 

	curviness: 2,
	autoRotate: true,

	//This takes an array as arguments or these are the points which are necessary to animate like plotting as a graph! x and y are objects ,x-horizontal,y-vertical
	values:[
	 {x:100,y:-20},
	 {x:300,y:10},
	 {x:500,y:100},
	 {x:750,y:-100},
	 {x:350,y:-50},
	 {x:600,y:100},
	 {x:800,y:0},
	 {x:window.innerWidth,y:-250}//this works however the big screen is!
	 ]

};

//creating a timeline
const tween = new TimelineLite();

//adding tweenlite
tween.add(

		//here first parameter will be an object to animate the paper-plane,second parameter will be the duration,third will be defining the properties to animate
		TweenLite.to(".paper-plane",1,{
		//animating using bezier plug-in

		bezier: flightPath,
		ease: Power1.easeInOut
		})

);

//below code is used when it is for scrolling a page,defining a conttroller,this is done with the help of ScrollMagic!

const controller = new ScrollMagic.Controller();

//creating a scene
const scene = new ScrollMagic.Scene({

//creating a trigger element ,which triggers the animation
triggerElement: ".animation",
duration: 2000,
triggerHook: 0  
})

.setTween(tween)
.addIndicators()
//sticks in the same position so we cannot scroll through it
.setPin(".animation")
.addTo(controller);
