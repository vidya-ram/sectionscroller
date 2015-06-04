$(window).load(function(){ 
	$("#arrow_up").show();
	$("#arrow_down").show();

	var win = $(window);
	var winHeight = win.height();
	var sectionTop = [];	
	var sectionId = [];
	var sectionH = [];
   
  $("section").each(function(){
    sectionTop.push(Math.round($(this).offset().top));	
	  sectionId.push($(this).attr("id")); 
	  sectionH.push(Math.round($(this).height())); 
	});
	
  var noSections = sectionTop.length;
  var lastSection = sectionTop[noSections-1];
  var navHeight = $("nav").height();

  $(window).scroll(function() {
  	var winTop = win.scrollTop();
  	for(var i = 0; i < noSections; i++) {
			if(winTop >= sectionTop[i] && winTop < sectionTop[i+1]) {
				if(winTop >= sectionTop[i] + sectionH[i]/2) {
				  var currentSection = i+1;
				}
				else{
			 		var currentSection = i;
				}
			 	var sectionid = "#" + sectionId[currentSection]
			}
			$(".sectionhighlight").each(function() {
				if ($(this).find('a').attr("href") === sectionid) {
					$(".sectionhighlight.active").removeClass("active");
					$(this).addClass("active");
				}
			});
		}
  });
   
  $("#arrow_up").click(function() {
		var winTop = win.scrollTop();
		var fixedHeader = true;  /* to subtract fixed header height */
		var topSectionHeader = true /* Is header fixed for first section */
		for(var i = 0; i < noSections; i++) {
			if(winTop >= sectionTop[i] && winTop < sectionTop[i+1]) {
				if(i === 0) {
					var toSection = 0;
					// topSectionHeader = false;
				}
				else {
				  if(winTop >= sectionTop[i] + sectionH[i]/2) {
				   	var toSection = i;
				 	}
				 	else {
				   	var toSection = i-1;
				 	}
				 	// if(toSection === 0) {
					 // 	topSectionHeader = false;
				 	// }
				 	break;	
				}
			}
		}
		var sectionid = "#" + sectionId[toSection]
		$(".sectionhighlight").each(function() {
			if ($(this).find('a').attr("href") === sectionid) {
				$(".sectionhighlight.active").removeClass("active");
				$(this).addClass("active");
			}
		});
		if(fixedHeader && topSectionHeader) {		 
		  var section_pos = sectionTop[toSection] - navHeight;
		}
		else {
		  var section_pos = sectionTop[toSection];
		}
		$('html,body').animate({scrollTop:section_pos}, '500');
  });
   
   $("#arrow_down").click(function(){
	    var winTop = win.scrollTop();
	    var fixedHeader = true;  // to subtract fixed height height 
	    var topSectionHeader = true /* Is header fixed for first section */
	    for(var i = 0; i < noSections-1; i++) {
				if(winTop <= sectionTop[i] + sectionH[i]/2) {
				 	var toSection = i+1;
				 	var sectionid = "#" + sectionId[toSection]
					// if(toSection === 0) {
					//		topSectionHeader = false;
					// }
				 break;				   
				}
	    }
	    var sectionid = "#" + sectionId[toSection]
			$(".sectionhighlight").each(function() {
				if ($(this).find('a').attr("href") === sectionid) {
					$(".sectionhighlight.active").removeClass("active");
					$(this).addClass("active");
				}
		  });
			if(i !== noSections-1) {
				if(fixedHeader && topSectionHeader) {		 
					var section_pos = sectionTop[toSection] - navHeight;
				}
				else {
					var section_pos = sectionTop[toSection];
				}
				$('html,body').animate({scrollTop:section_pos}, '500');
			}
  });
});