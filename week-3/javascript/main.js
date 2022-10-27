// Step1: Search

let input = document.querySelector('.js-search');
let button = document.querySelector('i');


button.addEventListener('click', function(e){
    let userInput = document.querySelector('.js-search').value;
    console.log(userInput);
});

// Step2: Query Soundcloud API

SC.initialize({
    client_id: 'cd9be64eeb32d1741c17cb39e41d254d'
});

// Find alll sounds of buskers 

SC.get('/tracks', {
    q: 'buskers'
}).then(function(tracks) {
    console.log(tracks);
});


// Step3: Display the cards



// Step4: Add to playlist and play