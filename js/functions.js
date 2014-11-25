$(function() {
	
	$('.show-dialog').click(function(){
		setTimeout( "jQuery('.dialog').fadeToggle();",100 );
		$('.inside-dialog').removeClass('fadeOutUp').addClass('fadeInDown');
		
	});
	
	$('.hide-dialog').click(function(){
		$('.inside-dialog').removeClass('fadeIn').addClass('fadeOutUp');
		setTimeout( "jQuery('.dialog').fadeToggle();",100 );
	});
	
	// tooltip fades
	$('ul li a').hover(function() {
		$(this).next('label').removeClass('fadeOut').addClass('animated fadeIn');
	}, function() {
		$(this).next('label').removeClass('fadeIn').addClass('animated fadeOut');
	});
	

	// adds an active state to list item anchors
	$('ul li').click(function(e) {
		var clicked = $(e.target);

		// if this list item is not part of the helper nav, toggle an active class when clicked
		if (!$(clicked).parents('.helper-nav').length){
			$(this).toggleClass('active');
		}
	 });
	
	
	// when a helper nav link is clicked
	$('.helper-nav > ul > li > a').click(function(e) {
		var clicked = $(e.target);
		
		// the helper nav button is coded like: <a href="><span></span></a> - sometimes the user
		// will click on the span, but we want the anchor for easier dom traversal
		if ($(clicked).prop("tagName") === 'SPAN') {
			var clicked = $(clicked).parent();
		}
		
		// if helper button is active when clicked, close current panel and remove active class
		if ($(clicked).closest('li').hasClass('active')) {
			$(clicked).siblings(".flyout-helper").hide();
			$(clicked).parent().removeClass("active");
		} else {
			$('.helper-nav li.active').removeClass("active");
			$('.flyout-helper').hide();
			
			// shows the clicked panel and adds active class to list item
			$(clicked).siblings(".flyout-helper").show();
			$(clicked).parent().addClass("active");
		}
	});	
	
	// showing all drafts content on communications-annotation.html
	
	$('.show-drafts').click(function() {
		var parentPanel = $(this).closest('section');
		
		// hide draft content panel
		$('.draft').toggle();
		
		// add class 'drafts' to parent container panel
		$(parentPanel).toggleClass('drafts');
		
		// show all-drafts panel
		$('.all-drafts').toggle();
		
	});
	

	
	// early look at showing/hiding secondary content
	$('.swimlane-nav ul li').click(function() {
			$('.second-panel .toolbar').toggle();
	        $('.second-panel').toggle({
	        	effect: 'fade'
	        });
			
	});
	
	
	
	
	// contet menu custom highlights
	
	$.contextMenu.types.label = function(item, opt, root) {
	        // this === item.$node

	        $(  '<a class="teal"><span class="dijitIcon tpIconCheck"></span></a>'
	            + '<a class="blue"></a>'
	            + '<a class="green"></a>'
	            + '<a class="yellow"><span class="dijitIcon tpIconCheck"></span></a><br />'
	            + '<a class="purple"></a>'
	            + '<a class="orange"></a>'
	            + '<a class="dark-blue"></a>')
	            .appendTo(this)
	            .on('click', 'li', function() {
	                // do some funky stuff
	                console.log('Clicked on ' + $(this).text());
	                // hide the menu
	                root.$menu.trigger('contextmenu:hide');
	            });
            
	        this.addClass('oom-highlights').on('contextmenu:focus', function(e) {
	            // setup some awesome stuff
	        }).on('contextmenu:blur', function(e) {
	            // tear down whatever you did
	        }).on('keydown', function(e) {
	            // some funky key handling, maybe?
	        });
	    };
		
	// context menu enable
	$.contextMenu({
        selector: '.main-content', 
		animation: { show: "show", hide: "fadeOut" },
        callback: function(key, options) {
            var m = "clicked: " + key + " on " + $(this).text();
            window.console && console.log(m) || alert(m); 
        },
        items: {
            "search": {name: "Search", icon: "edit"},
            "objection": {name: "Objection", icon: "cut"},
            "tag/comment": {name: "Tag/Comment", icon: "copy"},
			"Highlights": {
				"name" : "Highlights",
				"items": {
					label: {type: "label", customName: "Label"}
				}
			},
			"Find in...": {
                "name": "Find in...", 
                "items": {
					entireapplication: {
		                name: "Entire application", 
		                type: 'checkbox', 
		                selected: false
		            },
					claims: {
		                name: "Claims", 
		                type: 'checkbox', 
		                selected: false
		            },
					description: {
		                name: "Description", 
		                type: 'checkbox', 
		                selected: false
		            },
					drawings: {
		                name: "Drawings", 
		                type: 'checkbox', 
		                selected: false
		            },
					tagged: {
		                name: "Tagged", 
		                type: 'checkbox', 
		                selected: false
		            },
					find: {
		                name: "Find..", 
		                callback: $.noop,
						className: "oom-button"
		            }
                }
            },
        }
    });
		
	
	// work manager functions
	
	// intray active clicks
	$('.intray-nav ul li a').click(function(){
		$(this).toggleClass('active');
		$('.intray-nav ul li').removeClass('active');
	});
	
	// active clicks
	$('.workspace-item').click(function(){
		$('.workspace-item.active').toggleClass('active');
		$(this).toggleClass('active');
		
		$('.workspace-preview').fadeToggle().fadeToggle();
	});
	
	// search.html functions
	$('.tpIconLeftArrow').click(function(){
		$('.search-parameters').toggleClass('collapsed');
	});
	
});