console.log('Here are all the available people:', people);

$(document).ready(onReady);

function onReady() {
    appendPictures()
}

function appendPictures() {
    for (const person of people) {
        console.log(person);
        $('main').append(`<div class="picture"><img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of Chris"></div>`)
    }
}