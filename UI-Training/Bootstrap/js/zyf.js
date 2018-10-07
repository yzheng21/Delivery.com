$(document).ready(function(){
//	alert("ready");
//	$("#username").val("yzheng21");
//	$("#password").val("123");
	var usr = "yufan";
	var pass = "123456";
	$("#btn").click(function(){
		var uname = $("#username").val();
		var pwd = $("#password").val();
		if(uname == usr && pwd == pass){
//			console.log("login success");
			$("#fail").addClass("hidden");
			$("#success").removeClass("hidden");
			setTimeout(function(){
				window.location("index.html","_self")
			},2000);
			
			
		}else{
//			console.log("Wrong username or password");
			$("#fail").removeClass("hidden");
			$("#success").addClass("hidden");
		}
	});
});
