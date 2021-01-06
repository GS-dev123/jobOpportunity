function smoothScrool(target,duration){
	var target = document.querySelector(target);
	var targerPosition = target.getBoundingClientRect().top;
	var startPosetion = window.pageYOffset;
	var distance = targerPosition - startPosetion;
	var startTime = null;

	function animation(currentTime){
	if (startTime == null) startTime = currentTime;
	var timeElapsed = currentTime - startTime;
	var run = ease(timeElapsed,startPosetion,distance,duration);
	window.scrollTo(0,run);
	if(timeElapsed < duration) requestAnimationFrame(animation);
}
	
	function ease(t, b, c, d){
		t /= d / 2;
		if (t < 1) return c / 2 * t * t + b;
		t--;
		return -c / 2 * (t * (t -2) - 1) + b;
	}


 	requestAnimationFrame(animation);
}



var contacto = document.querySelector('.contacte-nos');
var sobreNos = document.querySelector('.sobreNos');

contacto.addEventListener('click',function(){
	smoothScrool('#contact',1000);
});

sobreNos.addEventListener('click',function(){
	smoothScrool('#team',1000);
});


