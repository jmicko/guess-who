console.log('Here are all the available people:', people);
// start a variable to hold the correct answer
let answer;

$(document).ready(onReady);

function onReady() {
    // add pictures after page load
    appendPictures();
    // start function that will choose a random person from the list
    startGame();
    // click listener to check if player guessed correctly
    $('main').on('click', '.picture', checkGuess)
}

// pick a random number from 1 to the number of people in the people array
function startGame() {
    console.log('in startGame');
    // get the maximum number to pick
    let totalPeople = people.length;
    console.log(people.length);
    let randomNum = randomNumber(0, totalPeople - 1)
    console.log(randomNum);
    console.log('the answer is', people[randomNum]);
    answer = people[randomNum];
    $('#who').text(`${people[randomNum].name}`)
}

function appendPictures() {
    for (const person of people) {
        console.log(person);
        let profilePic = $(`
            <div class="picture">
                <img src="https://github.com/${person.githubUsername}.png?size=250" alt="Profile image of ${person.name}">
            </div>
        `)
        profilePic.data('person', person)
        $('main').append(profilePic);

    }
}
//  data-username = ${person.githubUsername} was inside of div with class picture tag
function checkGuess() {
    // store the data from the div in a variable
    let guess = $(this).data().person.githubUsername;
    console.log('guess is', guess);
    console.log('answer is', answer);
    if (guess === answer.githubUsername) {
        console.log('correxct');
    }
}

// get a random number
function randomNumber(min, max) {
    // string taken from assignment notes to return a random number within a given range
    return Math.floor(Math.random() * (1 + max - min) + min);
}