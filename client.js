console.log('js');

$(document).ready(onReady);

function onReady() {
    $('#generateButton').on('click', addDiv);
    $('#swapButton').on('click', changeBackgroundColor);
    $('#deleteButton').on('click', removeNewDiv);
}

function addDiv() {

    $('#mainDiv').append('<div id="newDiv"></div>');
    $('#newDiv').append('<p id="click counter"></p>');//<------ THIS ADDS A PTAG ONLY TO THE FIRST DIV.
    $('#newDiv').append('<button id="swapButton">Swap</button>'); //<------ THIS ADDS BUTTONS ONLY TO THE FIRST DIV.
    $('#newDiv').append('<button id="deleteButton">Delete</button>');//<------ THIS ADDS BUTTONS ONLY TO THE FIRST DIV.
    //DEBUGGING: I need to figure out how to get the buttons & p tag to go into a new div every time instead of the first new div.
    //DEBUGGING: I need to figure out how to track the number of clicks.
    console.log('div was created');

}

//DEBUGGING: I need to figure out how to change the background color when the Swap button is clicked.
let currentColor = 'red';
function changeBackgroundColor() {
    //  if (currentColor == 'red'){
    //  $('#newDiv').css('color', 'yellow');
    //} else {
    //  $('#newDiv').css('color', 'red')
    //}
    if (currentColor == 'red') {
        $('#newDiv').addClass('changeBackgroundColor');
    } else {
        $('#newDiv').removeClass('changeBackgroundColor')
    };
    console.log('It changed!');
}

function removeNewDiv() {
    $(this).parent().remove();
    //DEBUGGING: I need to dig deeper on this and figure out why it's not working becuase I am not sure. 
    //It seems like it should because the new div is the direct parent of the delete button.
}