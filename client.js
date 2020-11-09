console.log('Here are all the available people:', people);

$(document).ready(onReady);

function onReady() {
    appendPictures()
}

function appendPictures() {
    for (const person of people) {
        console.log(person);
    }
}