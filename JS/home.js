document.addEventListener('DOMContentLoaded', function () {
    const logoutbtn = document.getElementById('logout');
    const loginbtn = document.getElementById('login');
    const signinbtn = document.getElementById('signbtn');
    const themebtn = document.getElementById('theme');
    const body = document.getElementById('body');
    
    
    // Check if signedin key is already set in localStorage
    if (!localStorage.getItem('signedin')) {
        // If not set, set it to 'true'
        localStorage.setItem('signedin', 'true');
    }
    
    const signedin = localStorage.getItem('signedin');
    if (signedin === 'true') {
        logoutbtn.classList.add('active');
        loginbtn.classList.remove('active');
        signinbtn.classList.toggle('disappear');
        


    } else {
        logoutbtn.classList.remove('active');
        loginbtn.classList.add('active');
    
    }

    logoutbtn.addEventListener('click', function () {
        // Perform your action here
        localStorage.setItem('signedin', 'not');


    });
    
    loginbtn.addEventListener('click', function () {
        // Perform your action here
        localStorage.setItem('signedin', 'true');
        


    });

    //change the theme
    themebtn.addEventListener('click', function () {
        // Perform your action here
        body.classList.toggle('dark');
    
        

    });
});
