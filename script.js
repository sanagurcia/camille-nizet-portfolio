/* NAVIGATION */
const pages = document.getElementsByClassName('page');
const navBar = document.querySelector('.home-nav-bar ul');
const up = document.getElementById('up');
const down = document.getElementById('down');

let pageIndex = 0;

/* arrows */
down.addEventListener('click', function() {
    if (pageIndex != 4){
        moveToPage(pageIndex+1);
    }
});

up.addEventListener('click', function(){
    if (pageIndex != 0){
        moveToPage(pageIndex-1);
    }
});


navBar.addEventListener('click', function(e){
  let navElements = Array.from(navBar.children);
  let index = navElements.findIndex(el => el == e.target);
  moveToPage(index+1);
});

function moveToPage(index){
  pages[index].scrollIntoView({behavior: 'smooth'});
  pageIndex = index;
}


/* BOARD POPUPS */
const darkDiv = document.getElementById("dark-div");
const boards = Array.from(document.getElementsByClassName("board"));
const buttons = Array.from(document.getElementsByClassName("button"));
const exit = document.getElementById('exit');
const showVideo = document.getElementById('show-video');
const theVideo = document.getElementById('video');
const credits = Array.from(document.getElementsByClassName('credit'));
const descriptions = Array.from(document.getElementsByClassName('description'));
const showDescription = document.getElementById('show-description');


// assign event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', function(){
        // set dark background active
        darkDiv.classList.toggle('active');
        exit.classList.toggle('active');    

        // activate corresponding board
        let myClass = button.classList[1];
        let myBoard = boards.find(board => board.classList[1] == myClass);
        myBoard.classList.toggle('active');

        // check if sports board
        if (myBoard.classList.contains('sports')){
             showVideo.classList.toggle('active');
        }

        // credit tag
        let myCredit = credits.find(credit => credit.classList[1] == myClass);
        myCredit.classList.toggle('active');

        // check if shower/monty -> add description button
        if (myBoard.classList.contains('monty') || myBoard.classList.contains('shower')){
            showDescription.classList.toggle('active');
        }
    });
});

// exit button
exit.addEventListener('click', function(){
    darkDiv.classList.toggle('active');
    this.classList.toggle('active');

    let activeBoard = boards.find(board => board.classList.contains('active'));
    activeBoard.classList.toggle('active');

    // credit tag
    let activeCredit = credits.find(credit => credit.classList.contains('active'));
    activeCredit.classList.toggle('active');

    // check sports
    if (activeBoard.classList.contains('sports')){
        showVideo.classList.toggle('active');
    }

    // check descriptions
    if (activeBoard.classList.contains('monty') || activeBoard.classList.contains('shower')){
        showDescription.classList.toggle('active');
        descriptions.forEach(des => des.classList.remove('active'))
    }

    // if video showing
    if (theVideo.classList.contains('active')){
        theVideo.pause();
        theVideo.classList.toggle('active');
    }
});

// show video button
showVideo.addEventListener('click', function(){
    theVideo.classList.toggle('active');
})

// show description button
showDescription.addEventListener('click', function(){
    // get active board
    let activeBoard = boards.find(board => board.classList.contains('active'));
    // toggle description active    
    let myDescription = descriptions.find(des => des.classList[1] == activeBoard.classList[1]);
    myDescription.classList.toggle('active');
})


/* OTHER DIRECTIONS BUTTONS  */
const goodGriefButton = document.getElementById('good-grief');
const tinderButton = document.getElementById('tinder');
const goodGriefBoard = document.getElementById('good-grief-board');
const tinderBoard = document.getElementById('tinder-board');
const oDarkDiv = document.getElementById('o-dark-div');
const exit2 = document.getElementById('exit2');
const oBoards = [goodGriefBoard, tinderBoard];

// good grief board
goodGriefButton.addEventListener('click', function(){
    // set dark background active
    oDarkDiv.classList.toggle('active');
    exit2.classList.toggle('active');    

    // activate corresponding board
    goodGriefBoard.classList.toggle('active');
})

// tinder board
tinderButton.addEventListener('click', function(){
    // set dark background active
    oDarkDiv.classList.toggle('active');
    exit2.classList.toggle('active');    

    // activate corresponding board
    tinderBoard.classList.toggle('active');
})

// exit2 button for oDarkDiv & oBoards
exit2.addEventListener('click', function(){
    oDarkDiv.classList.toggle('active');
    this.classList.toggle('active');

    let activeBoard = oBoards.find(board => board.classList.contains('active'));
    activeBoard.classList.toggle('active');
});
