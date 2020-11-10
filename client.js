console.log('Here are all the available people:', people);
// start a variable to hold the correct answer
let answer;

$(document).ready(onReady);

function onReady() {
    // switch up the tiles in a random order
    shuffle(people);
    // add pictures after page load
    appendPictures();
    // start function that will choose a random person from the list
    startGame();
    // click listener to check if player guessed correctly
    $('main').on('click', '.picture', checkGuess)
    $('main').on('click', '.yes', reStartGame)
}

// reset the board and play again
function reStartGame() {
    shuffle(people);
    $('main').empty();
    appendPictures()
    startGame()
}

// this function was taken from https://javascript.info/task/shuffle. array.sort is used to 
// sort the index, in this case, by a randomly generated number. It's an unreliable method, but it works for the game
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

// pick a random number from 1 to the number of people in the people array
function startGame() {
    // get the maximum number to pick from
    let totalPeople = people.length -1;
    // find a ranndom number that we can find an index value for in the array
    let randomNum = randomNumber(0, totalPeople)
    answer = people[randomNum];
    // append the name of the person you are looking for to the dom 
    $('#who').text(`${people[randomNum].name}`)
}

function appendPictures() {
    // loop through the array of people
    for (const person of people) {
        // set a variable for the line of html to show the picture of the person
        let profilePic = $(`
            <div class="picture">
                <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">
            </div>
        `)
        // add the person data to the div for that person
        profilePic.data('person', person)
        // ammend it all to the dom
        $('main').append(profilePic);

    }
}
//  data-username = ${person.githubUsername} was inside of div with class picture tag
function checkGuess() {
    // store the data from the div in a variable
    let guess = $(this).data().person.githubUsername;
    if (guess === answer.githubUsername) {
        // change the div to a green box that asks if player wants to play again
        $(this).html(`<p>CORRECT!</p><h2>Play Again?</h2>`);
        $(this).addClass(`yes`);
    } else {
        // change to red box and say wrong
        $(this).html(`<p>WRONG!</p>`);
        $(this).addClass(`no`);
    }
}

// get a random number
function randomNumber(min, max) {
    // string taken from assignment notes to return a random number within a given range
    return Math.floor(Math.random() * (1 + max - min) + min);
}