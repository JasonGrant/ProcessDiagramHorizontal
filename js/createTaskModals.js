

function createTaskModals(data) { 
    
    var modalId = data[0].id;

    var modalContents = '';
    
    modalContents += '<div id="' + modalId + '" class="modal-box">'
    modalContents += '<header><a href="#" class="js-modal-close close">×</a><h3>' + data[1].name + '</h3></header>'
    modalContents += '<div class="modal-body" id="' + modalId + '">'
    
    //Inputs Start
    modalContents += '<div class="container inOutContainer">';
    modalContents += '<div class="titleDiv"><i class="fa fa-level-down fa-lg"> Inputs</i></div>';
    
    $.each(data[2].children, function (i, data) {
        modalContents += '<div class="enteredFields">' + data.input + '</div>';
    });
    
    modalContents += '</div>';
    //Inputs End
    
    modalContents += '<div class="arrowContainer centerWrapper"><i class="fa fa-chevron-right fa-5x center"></i></div>';
    modalContents += '<div class="centerContainer">';
    
    //Title Start
    modalContents += '<div class="container titleContainer"><div id="titleId" class="titleDiv">';
    modalContents += '<i class="fa fa-dropbox fa-lg"> Task, Review or Decision</i>';
    modalContents += '<h1 class="titleH1">' + data[1].name + '</h1>';
    modalContents += '</div></div>';
    //Title End
        
    for (i = 0; i < 4; i++) { 
        raci = i + 4;
        modalContents += '<div class="container raciContainer">';
        modalContents += '<div class="titleDiv"><i class="fa fa-user fa-lg">' + data[raci].type + '</i></div>';
        $.each(data[raci].children, function (i, data) {
            if (data.notes === "") {
                modalContents += '<div class="enteredFields">' + data.role + '</div>';
            }
            else {
                modalContents += '<div class="enteredFields" data-tooltip="' + data.notes + '">' + data.role + '</div>';
            }
        });
        modalContents += '</div>';
        //Responsible End
    }

    modalContents += '</div>';
    
    modalContents += '<div class="arrowContainer centerWrapper"><i class="fa fa-chevron-right fa-5x center"></i></div>';
    
    //Outputs Start
    modalContents += '<div class="container inOutContainer">';
    modalContents += '<div class="titleDiv"><i class="fa fa-level-up fa-lg"> Outputs</i></div>';
    
    $.each(data[3].children, function (i, data) {
        modalContents += '<div class="enteredFields">' + data.output + '</div>';
    });
    
    modalContents += '</div>';
    //Outputs End
    
    modalContents += '</div>';

    $('body').append(modalContents);
    
};
