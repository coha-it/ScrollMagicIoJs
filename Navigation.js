// init controller
var controller = new ScrollMagic.Controller();

// Build the Pinned To Top Scene
var scene2 = new ScrollMagic.Scene({triggerHook: 0})
	.setPin("header", {pushFollowers: false})
	// .addIndicators({name: "2 (duration: 0)"})
	.addTo(controller);


// build tween
var tween = TweenMax.to("header", 1, {height: "+50", ease: Linear.easeNone, backgroundColor: "green"});

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: 300, triggerHook: 0})
	.setTween(tween)
	.addIndicators() // add indicators (requires plugin)
	.addTo(controller);

