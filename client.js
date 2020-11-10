console.log('Here are all the available people:', people);

$(document).ready(onReady);

function onReady() {
    // add pictures after page load
    appendPictures();
    // start function that will choose a random person from the list
    startGame();
    // click listener to check if player guessed correctly
    $('main').on('click', 'picture', checkGuess)
}

function appendPictures() {
    for (const person of people) {
        console.log(person);
        $('main').append(`
            <div class="picture" data-username = ${person.githubUsername}>
                <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">
            </div>
        `);
    }
}

start