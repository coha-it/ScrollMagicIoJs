// init controller
var controller = new ScrollMagic.Controller();

// build scene
var scene = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: 300})
				// animate color and top border in relation to scroll position
				.setTween("#animate2", {borderTop: "30px solid green", backgroundColor: "red", scale: 0.7}) // the tween durtion can be omitted and defaults to 1
				.addIndicators({name: "2 (duration: 300)"}) // add indicators (requires plugin)
				.addTo(controller);