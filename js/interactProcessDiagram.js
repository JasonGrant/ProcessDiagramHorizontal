


function svgMouseOver(elmnt) { elmnt.style.stroke = "#494949"; }

function svgMouseOut(elmnt) { elmnt.style.stroke = "none"; }

function svgMouseOnClick(elmnt) {
    
    var $button=$(this);
    
    if ($button.data('alreadyclicked')){
        $button.data('alreadyclicked', false); // reset
        
        if ($button.data('alreadyclickedTimeout')){
            clearTimeout($button.data('alreadyclickedTimeout')); // prevent this from happening
        }
		changeDiagram(elmnt);
    }else{
        $button.data('alreadyclicked', true);
        var alreadyclickedTimeout=setTimeout(function(){
            $button.data('alreadyclicked', false); // reset when it happens
			changeDiagram(elmnt);
        },300); // <-- dblclick tolerance here
        $button.data('alreadyclickedTimeout', alreadyclickedTimeout); // store this id to clear if necessary
    }
    return false;
}

function clearProcessHTML() {
	$( ".gridPrimaryLeft" ).remove();
	$( ".gridPrimaryRight" ).remove();
	$( ".rightRays" ).remove();
	$( ".rightRibbon" ).remove();
}

function changeDiagram(elmnt) {
	rayClass = 'polyline.' + elmnt;
    divElmnt = 'div .' + elmnt;
	txtElmnt = 'text.' + elmnt;
	rectElmnt = 'rect.' + elmnt;
	idElmnt = '#' + elmnt;
	groupElmnt = '.group' + elmnt;
	
    $('.rays').show(rayClass);
	$('.barGroup').show(divElmnt);
	$('rect').attr('fill', '#d0d0d1');
	$('text.Level01').attr('fill', '#494949');
	$('text.Level02').attr('fill', '#494949');

    $('.barGroup').not(divElmnt).hide();
    $('.rays').not(rayClass).hide();
	$(idElmnt).attr('fill', '#305986');
	$(txtElmnt).attr('fill', 'white');
	$(rectElmnt).attr('fill', '#305986');	
}