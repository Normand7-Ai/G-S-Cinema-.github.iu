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
// فحص الإيميل أثناء الكتابة
function validateEmail() {
    const emailInput = document.getElementById('email') || document.getElementById('loginEmail');
    const emailError = document.getElementById('emailError');
    const emailValue = emailInput.value;

    if (!emailValue.includes('@')) {
        emailError.innerText = "Email must contain @";
    } else {
        emailError.innerText = ""; // يمسح الرسالة لو الشرط تحقق
    }
}

// فحص الباسورد أثناء الكتابة
function validatePass() {
    const passInput = document.getElementById('password') || document.getElementById('Loginpass');
    const passError = document.getElementById('passError');
    const passValue = passInput.value;

    if (passValue.length > 0 && passValue.length < 8) {
        passError.innerText = "Password is too short (min 8 characters)";
    } else {
        passError.innerText = ""; // يمسح الرسالة لو الشرط تحقق
    }
}
// فحص الاسم أثناء الكتابة
function validateName() {
    const nameInput = document.getElementById('username');
    const nameError = document.getElementById('nameError');
    const nameValue = nameInput.value.trim(); // trim عشان نشيل المسافات الزايدة

    if (nameValue === "") {
        nameError.innerText = "Name is required";
    } else if (nameValue.length < 3) {
        nameError.innerText = "Name is too short (min 3 characters)";
    } else {
        nameError.innerText = ""; // يمسح الرسالة لو كله تمام
    }
}