$( document ).ready(function() {
	var interval;
	var timer_is_on = 0;
	function startTimer(duration, display) {
		var timer = duration - 1;
		var minutes;
		var seconds;
		var initialOffset = '440';
		var i = 1;
		interval = setInterval(function () {
		  minutes = parseInt(timer / 60, 10)
		  seconds = parseInt(timer % 60, 10);

		  minutes = minutes < 10 ? "0" + minutes : minutes;
		  seconds = seconds < 10 ? "0" + seconds : seconds;

		  display.textContent = minutes + ":" + seconds;
		  console.log(minutes + ":" + seconds);
		  $('.circle_animation').css('stroke-dashoffset', initialOffset-(i*(initialOffset/duration)));
		 if (i == duration) {
			  clearInterval(interval);
		  }
		  i++; timer--;
		  if (timer < 0) {
	     		timer = duration;
		  }
		  
		}, 1000);
	}
	
	function stopTimer(){
		clearTimeout(interval);
	}
	
	$( ".btn-success" ).click(function() {
		var time = $("#time").text();
		var arr = time.split(":");
		
		var val = (parseInt(arr[0],10) * 60) + parseInt(arr[1],10);
		var display = document.querySelector("#time");
		if (!timer_is_on){
			 timer_is_on = 1;
			 startTimer(val, display);
		}
	});
	
	$( ".btn-danger" ).click(function() {
		stopTimer();
		timer_is_on = 0;
	});
	
	$( ".btn-info" ).click(function() {
		clearInterval(interval);
		if ($(".btn-primary").text() === "Break Session"){
			$("#time").text("25:00");	
		}else{
			$("#time").text("05:00");
		}
		
	});
	
	$( ".btn-primary" ).click(function() {
		if ($(".btn-primary").text() === "Break Session"){
			$('body').css("background-color","#286090");
			$( ".bg-danger" ).removeClass( "pomodoro-session" ).addClass( "break-session" ).css("color","#286090");
			$(".bg-danger span").text("Break Session");
			$("#time").text("05:00");
			stopTimer();
			timer_is_on = 0;
			$(".btn-primary").css("background-color","#ad0101");
			$(".btn-primary").text("Pomodoro Session");			
		}
		else {
			$('body').css("background-color","#ad0101");
			$( ".bg-danger" ).removeClass( "break-session" ).addClass( "pomodoro-session" ).css("color","#ad0101");
			$(".bg-danger span").text("Pomodoro Session");
			$("#time").text("25:00");
			stopTimer();
			timer_is_on = 0;
			$(".btn-primary").css("background-color","#286090");
			$(".btn-primary").text("Break Session");
		}
	});
		
	$( "input[value='-']" ).click(function() {
		if (timer_is_on === 1){
			return false;
		}else {
			var time = $("#time").text();
			var arr = time.split(":");
			if (arr[0] > 1) {
				$("#time").text(arr[0]--);
				if (arr[0] < 10){
					arr[0] = "0" + arr[0];
				}
			}
			arr = arr.join(":");
			$("#time").text(arr);
		}
	});
	
	$( "input[value='+']" ).click(function() {
		if (timer_is_on === 1){
			return false;
		}else{
			var time = $("#time").text();
			var arr = time.split(":");
			if (arr[0] > 0) {
				$("#time").text(arr[0]++);
				if (arr[0] < 10){
					arr[0] = "0" + arr[0];
				}
			}
			arr = arr.join(":");
			$("#time").text(arr);
		}
	});
	
	
	
});
