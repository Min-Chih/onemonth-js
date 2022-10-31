// Step1: Search

let input = document.querySelector('.js-search');
let button = document.querySelector('i');


button.addEventListener('click', getResults);

// When press Enter, event listener works

document.querySelector('input').addEventListener('keypress', function(e) {
  
    // if the key ENTER is pressed
    if(e.key === 'Enter') {
       getResults();
    }
})

// Step2: Fetch Shazam API


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'e030a21df6mshd7affff6fdcf43bp10819ejsnad2fdf4a08d1',
		'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
	}
};

// Step3: Display the cards

async function getInput(userinput) {

    var search = userinput.split(' ').join('%20');
	let url = `https://shazam.p.rapidapi.com/search?term=${search}&locale=en-US&offset=0&limit=5`;
	let response = await fetch(url, options);
	let data = await response.json();
	console.log(data);

	for(let i=0; i < data.tracks.hits.length; i++) {

		// card
		let card = document.createElement('div');
		card.classList.add('card');
	
		// image
		let imageDiv = document.createElement('div');
		imageDiv.classList.add('image');
	
		let image_img = document.createElement('img');
		image_img.classList.add('image_img');
		let imageSrc = data.tracks.hits[i].track.images.coverart;
		image_img.src = imageSrc;
	
		imageDiv.appendChild(image_img);
	
		//content 
		let content = document.createElement('div');
		content.classList.add('content');
	
		let header = document.createElement('div');
		header.classList.add('header');
		header.innerHTML = `<a href=${data.tracks.hits[i].track.url} target="_blank">${data.tracks.hits[i].track.title}</a>`;
	
		// button 
		let addButton = document.createElement('div');
		addButton.classList.add('ui', 'bottom', 'attached', 'button', 'js-button');
	
		let icon = document.createElement('div');
		icon.classList.add('add', 'icon');
	
		let buttonText = document.createElement('span');
		buttonText.innerHTML = 'Add to playlist';
	
		//appendChild
		content.appendChild(header);
	
		addButton.appendChild(icon);
		addButton.appendChild(buttonText);

		addButton.addEventListener('click', function() {
			addToPlaylist(data);
		})
	
		card.appendChild(imageDiv);
		card.appendChild(content);
		card.appendChild(addButton);
	
		let searchResults = document.querySelector('.js-search-results');
		searchResults.appendChild(card);

		//clear(searchResults);

		function addToPlaylist(data) {
			var sideBar = document.querySelector('.js-playlist');
		
			var list = document.createElement('p');
			list.classList.add('list-item');
			list.innerHTML = `<a href=${data.tracks.hits[i].track.url}>• ${data.tracks.hits[i].track.title}</a>;`
			
		
			sideBar.appendChild(list);
		
		}

	}
		

};


// Step4: Add to playlist and direct to the song detail page

// function addToPlaylist(data) {
// 	var sideBar = document.querySelector('.js-playlist');

// 	var list = document.createElement('p');
// 	list.innerHTML = `<a href=${data.tracks.hits[i].track.url}>${data.tracks.hits[i].track.title}</a>;`
// 	//list.innerText = data.tracks.hits[i].track.title;
// 	let spaceLine = document.createElement("hr");

// 	sideBar.appendChild(list, spaceLine);

// }

// Clear search results after every search

function getResults (event) {  

    let newWord = input.value
	let searchResults = document.querySelector('.js-search-results')
    searchResults.innerHTML = "";
    
    getInput(newWord);
}