
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


function changeLayout(layoutName) {
    const results = document.getElementById('resultsArea');
    results.className = layoutName; 
}

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
            <div class="search-result-item" onclick="goToDetails('${movie}')">
                <div class="movie-card-content">
                    <div class="movie-icon">🎬</div>
                    <div class="movie-info">
                        <span class="movie-title">${movie.toUpperCase()}</span>
                        <p class="movie-desc">Click to see more details and ratings.</p>
                        <button class="view-btn">View Details →</button>
                    </div>
                </div>
            </div>
        `).join('');
    } else {
        results.innerHTML = `<p class="error-text">⚠️ Sorry, "${input}" is not available.</p>`;
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