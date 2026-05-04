
function addToWatchlist(event, movieName) {
    event.stopPropagation();
    let list = JSON.parse(localStorage.getItem('watchlist')) || [];
    if (!list.includes(movieName)) {
        list.push(movieName);
        localStorage.setItem('watchlist', JSON.stringify(list));
        alert(movieName + " Added to Watchlist! ★");
    }
}


const moviesList = [
    "from", "inseption", "lost", "i am mother", 
    "john wick", "equalizer", "game of thrones", "breaking bad",
    "ride along", "mr & mrs.smith", "rush hour", "bullet train",
    "astronaut", "avatar", "passengers", "interstellar"
];

function searchMovie() {
    const input = document.getElementById('searchInput').value.toLowerCase().trim();
    const results = document.getElementById('resultsArea');
    
    if (input === "") {
        results.innerHTML = '<p class="error-text">No results found yet.</p>';
        return;
    }

    const filtered = moviesList.filter(movie => movie.includes(input));

    if (filtered.length > 0) {
        results.innerHTML = filtered.map(movie => `
            <div class="search-result-item" onclick="goToDetails('${movie}')" style="cursor:pointer; padding:10px; 
			    border-bottom:1px solid #cca43b; margin:5px 0;">
                <span style="color:#ffa500; font-size:1.1rem;">🎬 ${movie.toUpperCase()}</span>
                <span style="color:#cca43b; float:right;">View Details →</span>
            </div>
        `).join('');
    } else {
        results.innerHTML = `<p class="error-text">⚠️ Sorry, "${input}" is not available or hasn't been added yet.</p>`;
    }
}

function goToDetails(movieName) {
    localStorage.setItem('selectedMovie', movieName);
    window.location.href = 'details.html';
}

function addToWatchlist(event, movieName) {
    event.stopPropagation();
    let list = JSON.parse(localStorage.getItem('watchlist')) || [];
    if (!list.includes(movieName)) {
        list.push(movieName);
        localStorage.setItem('watchlist', JSON.stringify(list));
        alert(movieName + " Added to Watchlist! ★");
    }
}

function logout() {
    window.location.href = "index.html";
}