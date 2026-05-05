
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

// Variables to control views and pages
let currentViewMode = 'list';
let currentPage = 1;
const itemsPerPage = 4; // Shows 4 movies per page so you can test the pagination
let searchResults = [];

function searchMovie() {
    const input = document.getElementById('searchInput').value.toLowerCase().trim();
    const resultsArea = document.getElementById('resultsArea');
    const paginationArea = document.getElementById('paginationArea');
    const viewControls = document.getElementById('viewControls');

    if (input === "") {
        resultsArea.innerHTML = '<p class="error-text">No results found yet.</p>';
        paginationArea.innerHTML = '';
        viewControls.style.display = 'none';
        return;
    }

    // Filter movies and save to the new array
    searchResults = moviesList.filter(movie => movie.includes(input));
    currentPage = 1; // Reset to page 1 on every new search
    viewControls.style.display = 'block';

    renderResults();
}

function renderResults() {
    const resultsArea = document.getElementById('resultsArea');
    
    if (searchResults.length === 0) {
        resultsArea.innerHTML = `<p class="error-text">⚠️ Sorry, "${document.getElementById('searchInput').value}" is not available.</p>`;
        document.getElementById('paginationArea').innerHTML = '';
        document.getElementById('viewControls').style.display = 'none';
        return;
    }

    // Pagination calculations
    const totalPages = Math.ceil(searchResults.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = searchResults.slice(startIndex, endIndex);

    // Change class name so CSS can style it correctly
    resultsArea.className = currentViewMode + '-view';

    // Draw the HTML based on the selected view mode
    resultsArea.innerHTML = currentItems.map(movie => {
        if (currentViewMode === 'grid') {
            return `
                <div class="search-result-grid" onclick="goToDetails('${movie}')" style="cursor:pointer; background:#111; border:1px solid #cca43b; padding:20px; border-radius:10px; text-align:center;">
                    <h3 style="color:#ffa500; font-size:1.2rem; margin:0;">🎬 ${movie.toUpperCase()}</h3>
                </div>`;
        } else if (currentViewMode === 'details') {
            return `
                <div class="search-result-details" onclick="goToDetails('${movie}')" style="cursor:pointer; background:rgba(255,255,255,0.05); border-left:4px solid #cca43b; padding:15px; margin-bottom:10px; text-align:left;">
                    <h3 style="color:#ffa500; margin: 0 0 10px 0;">🎬 ${movie.toUpperCase()}</h3>
                    <p style="color:#bdc3c7; font-size:0.9rem; margin-bottom:10px;">Click here to view the full storyline, watch the trailer, and see cast details.</p>
                    <button class="btn-main" style="width:auto; padding:5px 15px; font-size:0.8rem;">Watch Trailer</button>
                </div>`;
        } else {
            // Default List View
            return `
                <div class="search-result-item" onclick="goToDetails('${movie}')" style="cursor:pointer; padding:15px; border-bottom:1px solid #cca43b; display:flex; justify-content:space-between; align-items:center;">
                    <span style="color:#ffa500; font-size:1.1rem;">🎬 ${movie.toUpperCase()}</span>
                    <span style="color:#cca43b; font-weight:bold;">View Details →</span>
                </div>`;
        }
    }).join('');

    renderPagination(totalPages);
}

// Function to change the view style
function changeView(viewType) {
    currentViewMode = viewType;
    renderResults();
}

// Function to navigate between pages
function changePage(pageNumber) {
    currentPage = pageNumber;
    renderResults();
}

// Function to draw the page number buttons
function renderPagination(totalPages) {
    const paginationArea = document.getElementById('paginationArea');
    let html = '';
    
    if (totalPages > 1) {
        if (currentPage > 1) {
            html += `<button class="btn-main" style="width:auto; padding:5px 10px;" onclick="changePage(${currentPage - 1})">← Prev</button>`;
        }
        
        for (let i = 1; i <= totalPages; i++) {
            const activeStyle = i === currentPage ? 'background:#d4af37; color:#000;' : 'background:#333; color:#fff;';
            html += `<button class="btn-main" style="width:auto; padding:5px 15px; ${activeStyle}" onclick="changePage(${i})">${i}</button>`;
        }
        
        if (currentPage < totalPages) {
            html += `<button class="btn-main" style="width:auto; padding:5px 10px;" onclick="changePage(${currentPage + 1})">Next →</button>`;
        }
    }
    
    paginationArea.innerHTML = html;
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