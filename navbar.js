document.addEventListener('DOMContentLoaded', () => { // When the DOM content loads,
    // If this script is linked from an html page, it will add a navbar to the top
    
    var url = window.location.href; // Get the url of the page
    
    var quarter_1 = '1stQuarter/';
    var quarter_2 = '2ndQuarter/';
    var quarter_3 = '3rdQuarter/';
    var quarter_4 = '4thQuarter/';
    var home = '../';
    
    if (url.includes(quarter_1)) { // If the url contains the string "1stQuarter",
        quarter_1 = '';
        quarter_2 = '../' + quarter_2;
        quarter_3 = '../' + quarter_3;
        quarter_4 = '../' + quarter_4;
        // Set quarter_1 to an empty string and prepend "../" to every other quarter, the same goes for the other quarters
    } else if (url.includes(quarter_2)) {
        quarter_1 = '../' + quarter_1;
        quarter_2 = '';
        quarter_3 = '../' + quarter_3;
        quarter_4 = '../' + quarter_4;
    } else if (url.includes(quarter_3)) {
        quarter_1 = '../' + quarter_1;
        quarter_2 = '../' + quarter_2;
        quarter_3 = '';
        quarter_4 = '../' + quarter_4;
    } else if (url.includes(quarter_4)) {
        quarter_1 = '../' + quarter_1;
        quarter_2 = '../' + quarter_2;
        quarter_3 = '../' + quarter_3;
        quarter_4 = '';
    } else home = '';
    
    var navbar = document.createElement('nav'); // Create a <nav> element
    navbar.className = 'sticky-top mb-3 d-md-flex d-none navbar navbar-expand-sm navbar-dark bg-dark'; // Set the class attribute
    
    navbar.innerHTML = `
        <div class="container-fluid">
            <div class="collapse navbar-collapse d-flex flex-row justify-content-between">
                <ul class="navbar-nav">
                    <div class="navbar-brand bg-info rounded-circle">
                        <img height="48" src="https://www.top-hat.net/images/tophat.png">
                    </div>
                    <li class="nav-item">
                        <a class="nav-link" id="home-mainpage" href="${home}mainpage.html">Home</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">1st Quarter</a>
                        <ul class="dropdown-menu text-muted">
                            <p class="mx-2">HyperText Markup Language</p>
                            <li><a class="dropdown-item" id="quarter_1-exercise1" href="${quarter_1}exercise1.html">Exercise 1</a></li>
                            <li><a class="dropdown-item" id="quarter_1-exercise2" href="${quarter_1}exercise2.html">Exercise 2</a></li>
                            <li><a class="dropdown-item" id="quarter_1-seatwork1" href="${quarter_1}seatwork1.html">Seatwork 1</a></li>
                            <li><a class="dropdown-item" id="quarter_1-seatwork2" href="${quarter_1}seatwork2.html">Seatwork 2</a></li>
                            <li><a class="dropdown-item" id="quarter_1-project" href="${quarter_1}project.html">Project</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">2nd Quarter</a>
                        <ul class="dropdown-menu text-muted">
                            <p class="mx-2">Cascading Style Sheets</p>
                            <li><a class="dropdown-item" id="quarter_2-exercise1" href="${quarter_2}exercise1.html">Exercise 1</a></li>
                            <li><a class="dropdown-item" id="quarter_2-exercise2" href="${quarter_2}exercise2.html">Exercise 2</a></li>
                            <li><a class="dropdown-item" id="quarter_2-seatwork1" href="${quarter_2}seatwork1.html">Seatwork 1</a></li>
                            <li><a class="dropdown-item" id="quarter_2-seatwork2" href="${quarter_2}seatwork2.html">Seatwork 2</a></li>
                            <li><a class="dropdown-item" id="quarter_2-project" href="${quarter_2}project.html">Project</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">3rd Quarter</a>
                        <ul class="dropdown-menu text-muted">
                            <p class="mx-2">Bootstrap 5</p>
                            <li><a class="dropdown-item" id="quarter_3-seatwork1" href="${quarter_3}seatwork1.html">Seatwork 1</a></li>
                            <li><a class="dropdown-item" id="quarter_3-seatwork2" href="${quarter_3}seatwork2.html">Seatwork 2</a></li>
                            <li><a class="dropdown-item" id="quarter_3-quiz1" href="${quarter_3}quiz1.html">Quiz 1</a></li>
                            <li><a class="dropdown-item" id="quarter_3-quiz2" href="${quarter_3}quiz2.html">Quiz 2</a></li>
                            <li><a class="dropdown-item" id="quarter_3-project" href="${quarter_3}project.html">Project</a></li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">4th Quarter</a>
                        <ul class="dropdown-menu text-muted">
                            <p class="mx-2">JavaScript</p>
                            <li><a class="dropdown-item" id="quarter_4-seatwork1" href="${quarter_4}seatwork1.html">Seatwork 1</a></li>
                            <li><a class="dropdown-item" id="quarter_4-seatwork2" href="${quarter_4}seatwork2.html">Seatwork 2</a></li>
                            <li><a class="dropdown-item disabled" href="#">Quiz 1 (Activity)</a></li>
                            <li><a class="dropdown-item" href="https://czosa1.github.io/Q4-Quiz2">Quiz 2</a></li>
                            <li><a class="dropdown-item" href="${home}mainpage.html">Project</a></li>
                        </ul>
                    </li>
                </ul>
                <form class="d-flex gap-2">
                    <input class="rounded-pill form-control" name="q" type="text" placeholder="...">
                    <button class="btn btn-danger rounded-pill" type="submit">Search</button>
                </form>
            </div>
        </div>
    `; // Add the content of the navbar
    
    document.body.prepend(navbar); // Add the navbar to the start body
    
    if (url.includes('mainpage.html')) document.getElementById('home-mainpage').classList.add('active'); // If in the main page, make the main page link active
    
    var path = url.split('?')[0].split('/'); // Get a string of the url without the query parameters then split it by slashes
    var file = path[path.length - 1]; // Get the last item of the path array
    var name = file.substring(0, file.length - 5).split('-')[0]; // Remove the ".html" part from the file string then split it by hyphens then get the first item
    // (x is either "1st" or 1) If url has "xQuarter" then make the quarter_x-name link active
    if (url.includes('1stQuarter')) document.getElementById('quarter_1-' + name).classList.add('active');
    else if (url.includes('2ndQuarter')) document.getElementById('quarter_2-' + name).classList.add('active');
    else if (url.includes('3rdQuarter')) document.getElementById('quarter_3-' + name).classList.add('active');
    else if (url.includes('4thQuarter')) document.getElementById('quarter_4-' + name).classList.add('active');
});