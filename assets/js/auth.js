function handleSignup(event) {
    event.preventDefault();
    const name = document.getElementById('username').value;
    const email = document.getElementById('email').value;
	const pass = document.getElementById('password').value;
    localStorage.setItem('uName', name);
    localStorage.setItem('uEmail', email);
	localStorage.setItem('uPass', pass);
    localStorage.setItem('isGuest', 'false');
	alert("Account created successfully!");
    window.location.href = "home.html";
}

function handleLogin(event) {
    event.preventDefault();
	const email=document.getElementById('loginEmail').value;
	const pass=document.getElementById('Loginpass').value;
	const storedEmail = localStorage.getItem('uEmail');
    const storedPass = localStorage.getItem('uPass');
	
	if(email === storedEmail && pass === storedPass){
		  localStorage.setItem('isGuest', 'false');
	      window.location.href = "home.html";}
	else{  alert("Invalid email or password. Please create an account if you don't have one.");}
}

function enterAsGuest() {
    localStorage.setItem('uName', 'Guest User');
    localStorage.setItem('uEmail', 'guest@cinema.com');
    localStorage.setItem('isGuest', 'true');
    window.location.href = "home.html";
}