var images = ["image0.jpg","image1.jpg","image2.jpg","image3.jpg","image4.jpg"]
var team = [{"img":"person1.jpg","name":"Sam","address":"46 Walker ave","email":"sam@gmail.com","phone":"201-7312391"},{"img":"person2.jpg","name":"Jeremy","address":"22 Walker ave","email":"jermey@gmail.com","phone":"555-2131411"},
				{"img":"person3.jpg","name":"Mike","address":"23 Walker ave","email":"mike@gmail.com","phone":"442-43123432"}];
//json pass the data
teamlist = JSON.stringify(team);
localStorage.setItem("teamdata",teamlist);


function openTeam(i){
	$("#exampleModal").modal("show");
	var img = '<img class="rounded-circle" src="Bootstrap/img/' + team[i].img + '" width="80" height="80" />';
	$(".modal-body #contact-img").html(img);
	$("#contact-name").text(team[i].name);
	$(".modal-body #contact-address").text(team[i].address);
	$(".modal-body #contact-email").text(team[i].email);
	$(".modal-body #contact-phone").text(team[i].phone);
}


$(document).ready(function(){
	$("#btn").click(function(){
		var i = parseInt(Math.random()*(images.length));
		var curimg = images[i];
		$("body").css("background-image","url(Bootstrap/img/" + curimg + ")");
	});
	
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip()
	});
	
	
	var ischange = false;
	$("#btn2").click(function(){
		if(ischange){
			$("#text").text("Hello...");
		}else{
			$("#text").text("SitaCorp");
		}
		ischange = !ischange;
		
	});
	
	var isshow = true;
	$("#btn4").click(function(){
		if(isshow){
			$("#label").hide();
		}else{
			$("#label").show();
		}
		isshow = !isshow;
	});
	
	$("#save").click(function(){
		var fname = $("#fname").val();
		var lname = $("#lname").val();
		var email = $("#email").val();
		var phone = $("#phone").val();
		var male = $("#male").val();
		var female = $("#female").val();
		var other = $("#other").val();
		var info1 = "fullname: " + fname + " " + lname;
		var info2 = "email: " + email + "  phone: " + phone;
		var info3 = null;
		if (male != null){
			info3 = "gender: " + male;
		}else if (female != null){
			info3 = "gender: " + female;
		}else{
			info3 = "gender: " + other;
		}
		$("#info").append("<p>"+info1+"</p><br>");
		$("#info").append("<p>"+info2+"</p><br>");
		$("#info").append("<p>"+info3+"</p>");
		
		
	});
	
	var isaddlist = false;
	var contactlist = [{"name":"yufan","phone":"123-14415"},
	{"name":"dingyi","phone":"452-331312"},{"name":"haisu","phone":"201-144215"},
	{"name":"mengze","phone":"123-14415"},{"name":"qianyu","phone":"412-3114415"}]
	
	$("#add").click(function(){
		if(isaddlist){
			$("#contact-name").html('<a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab" aria-controls="home">Contact Name</a>');
			$("#contact-info").html('<div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">...</div>');
		}else{
			for(var i=0; i<contactlist.length; i++){
			
				var contactname = '<a class="list-group-item list-group-item-action" id="' + "list-" + contactlist[i].name + "-list" + '" data-toggle="list" href="#' + contactlist[i].name + '" role="tab" aria-controls="home">' + contactlist[i].name + "</a>";
				$("#contact-name").append(contactname);
				var contactinfo = '<div class="tab-pane fade" id="' + contactlist[i].name +'" role="tabpanel" aria-labelledby="' + "list-" + contactlist[i].name + "-list" + '">' + "phone: " + contactlist[i].phone + "</div>";
				$("#contact-info").append(contactinfo);
			}
		}
		
		isaddlist = !isaddlist;
	});
	
	var people = [{"name":"yufan","age":"24","phone":"201-7312391"},{"name":"haisu","age":"22","phone":"555-2131411"},
				{"name":"ruihan","age":"23","phone":"442-43123432"}];
	var isaddtbody = false;
	
	$("#addtable").click(function(){
		if(isaddtbody){
			$("#tbody").html("");
		}else{
			var tbody = "";
			for(var i=0;i<people.length;i++){
				tbody += "<tr><td>"+people[i].name+"</td><td>"+people[i].age+"</td><td>" + people[i].phone + "</td></tr>";
			}
			$("#tbody").html(tbody);
		}
		isaddtbody = !isaddtbody;
		
	});
	
//	var offset = $("#aside").offset();
//	$(window).scroll(function(){
//		var scrollTop = $(window).scrollTop();
//		if(offset.top < scrollTop){
//			$("#aside").addClass("fixed");
//		}else{
//			$("#aside").removeClass("fixed");
//		}
//	});
	
	
	$("#exampleModal").on('show.bs.modal', function (event) {
		var button = $(event.relatedTarget);
		var name = button.data('whatever');
		var modal = $(this);
		for(var i=0; i<team.length;i++){
			if(team[i].name == name){
				var img = '<img class="rounded-circle" src="Bootstrap/img/' + team[i].img + '" width="80" height="80" />'
				modal.find(".modal-body #contact-img").html(img);
				modal.find(".modal-body #contact-name").text(team[i].name);
				modal.find(".modal-body #contact-address").text(team[i].address);
				modal.find(".modal-body #contact-email").text(team[i].email);
				modal.find(".modal-body #contact-phone").text(team[i].phone);
			}
		}
	});
	
	$("#local").click(function(){
		for(var i=0; i<team.length;i++){
			var teamlist="<ul>";
			teamlist += "<li><a>" + '<img class="rounded-circle" src="Bootstrap/img/' + team[i].img + '" width="160" height="160" data-toggle="modal" data-target="#exampleModal" data-whatever="' + team[i].name + '" />' + "</a></li>" +
			"<li><a onclick='openTeam(" + i + ")'><h3>" + team[i].name + "</h3></a></li>" +
			"<li><a>" + team[i].address + "</a></li>" +
			"<li><a>" + team[i].email + "</a></li>" +
			"<li><a>" + team[i].phone + "</a></li>";
			
			teamlist += "</ul>";
			var id = "#touxiang" + (i+1).toString();
			$(id).html(teamlist);
		}
	});
	
	
	$(window).resize(function(){
		var width = $(this).width();
//					console.log(width);
		if(width < 786){
			$(".first").css({"background":"blue"});
			$("#text").text("SitaCorp");
		}else{
			$(".first").css({"background":"black"});
			$("#text").text("Hello...");
		}
	});
});