var foodlist = ["Chef Salad","Buffalo Wing","Salmon","Baked","Pizza"];
  
$(document).ready(function(){
	$("#more").click(function(){
		
		$("#more").hide();
		var food = "";
		for(var i=0; i<foodlist.length; i++){
			food += '<li class="nav-item"><a class="nav-link" href="#">' + foodlist[i] + "</a></li>";
		}
		$("#dishes").html(food);
		var showless = '<li class="nav-item">' + 
							'<a id="showless" class="nav-link" href="#dishes">show less <i class="fas fa-minus-circle"></i></a>' + 
						'</li>';
		$("#dishes").append(showless);
		
		$("#showless").click(function(){
			$("#dishes").html("");
			$("#more").show();
		});

	});
	
	// Default options
	   var options = {
	   animationDuration: 0.5, // in seconds
	   filter: 'all', // Initial filter
	   callbacks: { 
	      onFilteringStart: function() { },
	      onFilteringEnd: function() { },
	      onShufflingStart: function() { },
	      onShufflingEnd: function() { },
	      onSortingStart: function() { },
	      onSortingEnd: function() { }
	   },
	   controlsSelector: '', // Selector for custom controls
	   delay: 0, // Transition delay in ms
	   delayMode: 'progressive', // 'progressive' or 'alternate'
	   easing: 'ease-out',
	   filterOutCss: { // Filtering out animation
	      opacity: 0,
	      transform: 'scale(0.5)'
	   },
	   filterInCss: { // Filtering in animation
	      opacity: 0,
	      transform: 'scale(1)'
	   },
	   layout: 'sameSize', // See layouts
	   multifilterLogicalOperator: 'or',
	   selector: '.filtr-container',
	   setupControls: true // Should be false if controlsSelector is set 
	} 
	// You can override any of these options and then call...
	var filterizd = $('.filtr-container').filterizr(options);
	// If you have already instantiated your Filterizr then call...
	filterizd.filterizr('setOptions', options);
	
	$(".timeline").timeline({
		startIndex: 0,
		mode:"horizontal",
		visibleItems: 3
	});
	
	
	
});
