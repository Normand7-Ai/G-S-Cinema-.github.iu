// إضافة للووتش لست (النجمة)
function addToWatchlist(event, movieName) {
    event.stopPropagation();
    let list = JSON.parse(localStorage.getItem('watchlist')) || [];
    if (!list.includes(movieName)) {
        list.push(movieName);
        localStorage.setItem('watchlist', JSON.stringify(list));
        alert(movieName + " Added to Watchlist! ★");
    }
}

// البحث مع رسالة الخطأ بالانجليزي
function searchMovie() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const results = document.getElementById('resultsArea');
    if (input === "") {
        results.innerHTML = '<p class="error-text">No results found yet.</p>';
    } else {
        results.innerHTML = `<p>Results for: ${input}</p>`;
    }
}

function logout() {
    window.location.href = "login.html";
}