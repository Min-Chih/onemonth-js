// Step1: Search

let input = document.querySelector('.js-search');
let button = document.querySelector('i');


button.addEventListener('click', function(e){
    let userInput = document.querySelector('input').value;
    getInput(userInput);
	console.log(userInput);
});

// When press Enter, event listener works

document.querySelector('input').addEventListener('keypress', function(e) {
  
    var input = document.querySelector("input").value;
    // if the key ENTER is pressed
    if(e.key === 'Enter') {
        getInput(input);
    }
})

// Step2: Query Soundcloud API

// SC.initialize({
//     client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
// });

// // Find alll sounds of buskers 

// SC.get('/tracks', {
//     q: 'buskers'
// }).then(function(tracks) {
//     console.log(tracks);
// });


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e030a21df6mshd7affff6fdcf43bp10819ejsnad2fdf4a08d1',
		'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
	}
};


function getInput(userinput) {
    var search = userinput.split(' ').join('%20');
	let url = `https://shazam.p.rapidapi.com/search?term=${search}&locale=en-US&offset=0&limit=5`
	fetch(url, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
};

function renderTracks () {

	let card = document.createElement('div');
	card.classList.add('card');
	let searchResults = document.querySelector('.js-search-results');
	searchResults.appendChild(card);

}

renderTracks();


// Step3: Display the cards



// Step4: Add to playlist and play