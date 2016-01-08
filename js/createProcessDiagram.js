function createDiagram(data){    
    var initialCreate = ''; //Holder for all HTML creation of inital Divs
    var leftCreate = ''; //Holder for all HTML creation of Left Div
    var rightCreate = ''; //Holder for all HTML creation of Right Div
    var rayCreate = ''; //Holder for all HTML creation of Rays
    
    //Create Base Divs
	initialCreate += '<div class="gridPrimaryLeft"></div>';
	initialCreate += '<div class="gridPrimaryRight">';
	initialCreate += '<div class="rightRays" style="float:left;width:60px;height:100%;"></div>';
	initialCreate += '<div class="rightRibbon" style="overflow:hidden;height:100%;"></div>';
	initialCreate += '</div>';
	$('#primaryContainer').append(initialCreate);
    
    //Setting Values
    var spacingV = 5;
    var spacingH = 3;
    var widthLv00 = 25;
    var widthLv01 = 25;
    var widthLv02 = 140;
    var widthLv03 = 15;
    var widthFull = widthLv00 + widthLv01 + widthLv02 + widthLv03 + (spacingH * 4);
    var heightFull = 450;
    var barSpaceHeight = 30;
    var barTaskHeight = 80;
    var rayWidth = 60;
    var strokeWidth = .5;
    var rectStyle = ' style="stroke:none;stroke-width:1;"';
    var roundedStyle = ' rx="5" ry="5"';
    
    //Variable Zero Set
    var level01Count = 0;
    var level02Count = 0;
    var level03Count = 0;
    var yLv01 = 0;
    var yLv02 = 0;
    var yLv03 = 0;
    var barTopOffset = heightFull / 2.2;
	var rayStart = 0;
    
	
	
	rayCreate += '<svg width="' + rayWidth + '" height="' + heightFull + '">';
	rayCreate += '<linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">';
	rayCreate += '<stop offset="0%" style="stop-color:rgb(250,250,250);stop-opacity:1" />';
	rayCreate += '<stop offset="100%" style="stop-color:rgb(208,208,208);stop-opacity:1" />';
	rayCreate += '</linearGradient>';
	
    
	//Finds the first class used so diagram appears as if clicked on initial load
    var beginningStateClass = "";
	$.each(data, function (i, data) {
		$.each(data.children, function (i, data) {
			if (i == 0) {
				$.each(data.children, function (i, data) {
					if (i == 0) {
					beginningStateClass = data.name.replace(/\s+/g, '');
					beginningStateClass = "." + beginningStateClass;
					}
				});
			}
		});	
	});
    
    
	
    //LEVEL 00
    $.each(data, function (i, data) {
        
        titleUppercase = data.name.toUpperCase();
        leftCreate += '<svg width="' + (widthFull) + '" height="' + heightFull + '">';
        leftCreate += '<rect class="' + data.level + '" x="0" y="0"' + roundedStyle + ' width="' + widthLv00 + '" height="' + heightFull + '" style="fill:#305986;stroke:none;stroke-width:1;"/>';
        leftCreate += '<text class="level00 gridText" style="text-anchor:middle;fill:white;letter-spacing:5px;" x="' + widthLv00 / 2 + '" y="' + heightFull / 2 + '" transform="rotate(-90 ' + ((widthLv00 / 2) + 5) + ' ' + heightFull / 2 + ')" >' + titleUppercase + '</text>';
        
        level01Count = data.children.length;
        spacingLv01 = spacingV * (level01Count - 1);
        textY = ((heightFull / level01Count) - (spacingLv01 / level01Count)) / 2;
        
        //LEVEL 01
        $.each(data.children, function (i, data) {
            
			titleUppercase = data.name.toUpperCase();
            xLv01 = widthLv00 + spacingH;  
            heightRectLv01 = (heightFull / level01Count) - (spacingLv01 / level01Count);
            textX = (widthLv00 + spacingH + (widthLv01 / 2)) + 5;
			var lv01Child = "";
			
			$.each(data.children, function (i, data) {
				lv01Child += data.name.replace(/\s+/g, '') + ' '
			});

            if (i == 0) {
               leftCreate += '<g class="' + data.level + '">'; //Start Level01 Group     
            }
            
            leftCreate += '<g class="group' + data.name + '">'; //Start Level01 Name Group
            leftCreate += '<rect id="' + data.name + '" class="Level01 ' + lv01Child + '" x="' + xLv01 + '" y="' + yLv01 + '"' + roundedStyle + ' width="' + widthLv01 + '" height="' + heightRectLv01 + '"' + rectStyle + ' stroke-width="' + strokeWidth + '"/>';
            leftCreate += '<text class="Level01 gridText ' + lv01Child + '" style="text-anchor:middle;" x="' + textX + '" y="' + textY + '" transform="rotate(-90 ' + textX + ' ' + textY + ')" >' + titleUppercase + '</text>';
            
            yLv01 = yLv01 + heightRectLv01 + spacingV;
            textY = textY + heightRectLv01 + spacingV;
            heightRectLv02 = heightRectLv01 / level02Count;
            
            level02Count = data.children.length;
            var rayY = (barTopOffset / level02Count) + barSpaceHeight;
            var rayHeight = 0;
            
            //LEVEL 02
            $.each(data.children, function (i, data) {
				
                if (i == 0) {
                    leftCreate += '<g class="' + data.level + '">'; //Start Level02 Group
                }
                
                spacingLv02 = spacingV * (level02Count - 1);
                heightRectLv02 = (heightRectLv01 / level02Count) - (spacingLv02 / level02Count);
                xLv02 = xLv01 + widthLv01 + spacingH;
                xLv02Txt = xLv02 + 5;
                yLv02Txt = yLv02 + (heightRectLv02 / 2) + 6;
                level03Count = data.children.length;
                rayHeight = rayY + barTaskHeight;
                var yLv02Height = yLv02 + heightRectLv02;
				
                leftCreate += '<g class="group' + data.name.replace(/\s+/g, '') + '">'; //Start Level02 Name Group
                leftCreate += '<rect id="' + data.name.replace(/\s+/g, '') + '" class="' + data.level + '" x="' + xLv02 + '" y="' + yLv02 + '"' + roundedStyle + ' width="' + widthLv02 + '" height="' + heightRectLv02 + '"' + rectStyle + ' onclick="svgMouseOnClick(this.id);" onmouseover="svgMouseOver(this)" onmouseout="svgMouseOut(this)" stroke-width="' + strokeWidth + '" />';
                leftCreate += '<text class="' + data.level + ' ' + data.name.replace(/\s+/g, '') + ' gridText" x="' + xLv02Txt + '" y="' + yLv02Txt + '">' + data.name + '</text>';
				
                if (data.children[0].type != "Heading") {
                    rayCreate += '<polyline points="' + rayStart + ',' + (yLv02 + 3) + ' ' + rayWidth + ',' + rayY + ' ' + rayWidth + ',' + rayHeight + ' ' + rayStart + ',' + yLv02Height + '" class="rays ' + data.name.replace(/\s+/g, '') + '" style="fill:url(#grad1)" />';
                }
                
                //Location and Spacing for Level02 Headings
                yLv02 = yLv02 + heightRectLv02 + spacingV;
                
                if (data.children[0].type != "Heading") {
                    //Create Ribbon Task Holders for Level 02 Headings
                    rightCreate += '<div class="barGroup ' + data.name.replace(/\s+/g, '') + '">';
                    rightCreate += '<div class="barSpace" style="height:' + (barTopOffset / level02Count) + 'px;"><p></p></div>';
                    rightCreate += '<div class="barSpace" style="height:' + barSpaceHeight + 'px;"><p>' + data.name + '</p></div>';
                    rightCreate += '<div class="barTasks" style="height:' + barTaskHeight + 'px;">';
                    
                }
                else {
                    rightCreate += '<div class="barGroup ' + data.name.replace(/\s+/g, '') + '">';
                    rightCreate += '<div class="barSpace" style="height:' + ((barTopOffset / level03Count) - (barTaskHeight / 2)) + 'px;"><p></p></div>';
                }
                
                var rayLv03Y1 = (barTopOffset / level03Count) - 10;
                var rayLv03Y2 = rayLv03Y1 + barTaskHeight;
                
                //LEVEL 03
                $.each(data.children, function (i, data) {
                  
					if (data.type == "Heading") {
                        xLv03 = xLv02 + widthLv02 + spacingH;
                        widthRect = widthLv03;
                        spacingLv03 = spacingV * (level03Count - 1);
                        heightRectLv03 = (heightRectLv02 / level03Count) - (spacingLv03 / level03Count);
                        yLv03Height = yLv03 + heightRectLv03;
						lv03Parent = data.parent;

						//Create Level 03 Headings
						leftCreate += '<rect class="' + data.level + ' ' + lv03Parent.replace(/\s+/g, '') + ' ' + data.name.replace(/\s+/g, '') + '" x="' + xLv03 + '" y="' + yLv03 + '"' + roundedStyle + ' width="' + widthRect + '" height="' + heightRectLv03 + '"' + rectStyle + strokeWidth + '" />';
						//Create Rays
						rayCreate += '<polyline points="' + rayStart + ',' + (yLv03 + 3) + ' ' + rayWidth + ',' + rayLv03Y1 + ' ' + rayWidth + ',' + rayLv03Y2 + ' ' + rayStart + ',' + yLv03Height + '" class="rays ' + data.parent.replace(/\s+/g, '') + '" style="fill:url(#grad1)" />';
						
						//Location and Spacing for Level03 Headings
						yLv03 = yLv03 + heightRectLv03 + spacingV;
						
						rayLv03Y1 += barTaskHeight + barSpaceHeight;
						rayLv03Y2 += barTaskHeight + barSpaceHeight;
						
						//Create Ribbon Task Holders for Level 03 Headings
						rightCreate += '<div class="barSpace ' + data.name.replace(/\s+/g, '') + '" style="height:' + barSpaceHeight + 'px;"><p>' + data.name + '</p></div>'
						rightCreate += '<div class="barTasks ' + data.name.replace(/\s+/g, '') + '" style="height:' + barTaskHeight + 'px;">' 
						
						$.each(data.children, function (i, data) {
							//Create Tasks for Level 03 Headings
							if (data.url == "#") {
								if (data.type == "Milestone") {
									rightCreate += '<a class="milestones"><p>' + data.name + '</p></a>';
								}
								else if (data.type == "Review") {
									rightCreate += '<a class="reviews"><p>' + data.name + '</p></a>';
								}
								else {
									rightCreate += '<a class="tasks"><p>' + data.name + '</p></a>';
								}
							}
							else {
								if (data.type == "Milestone") {
                                    rightCreate += '<a class="milestones taskHover" data-modal-id="' + data.url + '"><p>' + data.name + '</p></a>';
								}
								else if (data.type == "Review") {
                                    rightCreate += '<a class="reviews taskHover" data-modal-id="' + data.url + '"><p>' + data.name + '</p></a>';
								}
								else {
                                    rightCreate += '<a class="tasks taskHover" data-modal-id="' + data.url + '"><p>' + data.name + '</p></a>';
								}
							}
						});
						
						rightCreate += '</div>';							
							
					}
                    else {
                        //Location and Spacing for Level03 Headings
							if (data.url == "#") {
								if (data.type == "Milestone") {
									rightCreate += '<a class="milestones"><p>' + data.name + '</p></a>';
								}
								else if (data.type == "Review") {
									rightCreate += '<a class="reviews"><p>' + data.name + '</p></a>';
								}
								else {
									rightCreate += '<a class="tasks"><p>' + data.name + '</p></a>';
								}
							}
							else {
								if (data.type == "Milestone") {
                                    rightCreate += '<a class="milestones taskHover" data-modal-id="' + data.url + '"><p>' + data.name + '</p></a>';
								}
								else if (data.type == "Review") {
                                    rightCreate += '<a class="reviews taskHover" data-modal-id="' + data.url + '"><p>' + data.name + '</p></a>';
								}
								else {
                                    rightCreate += '<a class="tasks taskHover" data-modal-id="' + data.url + '"><p>' + data.name + '</p></a>';
								}
							}					
						yLv03 = yLv02;
                    }
                    if (i == (level03Count - 1)) {
                        rightCreate += '<div class="barSpace" style="' + barSpaceHeight + 'px;"></div></div>';
                    }
                }); //Level03
                rightCreate += '</div>';
                leftCreate += '</g>'; //Close Level02 Name Group
                if (i == (level02Count - 1)) {
                   leftCreate += '</g>'; //Close Level02 Group 				   
                }
            }); //Level02 
            leftCreate += '</g>'; //Close Level01 Name Group
            if (i == (level01Count - 1)) {
               leftCreate += '</g>'; //Close Level01 Group		   
            }
        }); //Level01
    }); //Level00
	rayCreate += '</svg>';
	
    //Create all the HTML in the placeholders    
    $('.gridPrimaryLeft').html(leftCreate);
	$('.rightRays').html(rayCreate);
    $('.rightRibbon').html(rightCreate);

	//Create Legend
	$( ".rightRibbon" ).append( 
		'<div class="keyGroup">' + 
		'<div class="keyColor" style="background-color:#305986"></div>' + 
		'<div class="keyText">Task</div>' +
		'<div class="keyColor" style="background-color:#494949"></div>' + 
		'<div class="keyText">Review</div>' + 
		'<div class="keyColor" style="background-color:#66CD00"></div>' + 
		'<div class="keyText">Milestone</div>' + 
		'</div>' 
		);

    //Set the first level of the process as if clicked
    $('rect').attr('fill', '#d0d0d1');
	$('.barGroup').not(beginningStateClass).hide();
    $('.rays').not(beginningStateClass).hide();
	$('.Level01 rect:first').attr('fill', '#305986');
	$('.Level01 text:first').attr('fill', 'white');
	$('.Level02 rect:first').attr('fill', '#305986');
	$('.Level02 text:first').attr('fill', 'white');
	$('.Level03' + beginningStateClass + '').attr('fill', '#305986');
    
}// end createDiagramFunction