/* NAVIGATION */
const pages = document.getElementsByClassName('page');
const navBar = document.querySelector('.home-nav-bar ul');

navBar.addEventListener('click', function(e){
  let navElements = Array.from(navBar.children);
  let index = navElements.findIndex(el => el == e.target);
  moveToPage(index+1);
});

function moveToPage(index){
  pages[index].scrollIntoView({behavior: 'smooth'});
}


/* BOARD POPUPS */
const darkDiv = document.getElementById("dark-div");
const boards = Array.from(document.getElementsByClassName("board"));
const buttons = Array.from(document.getElementsByClassName("button"));
const exit = document.getElementById('exit');
const showVideo = document.getElementById('show-video');
const theVideo = document.getElementById('video');


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

    });
});

// exit button
exit.addEventListener('click', function(){
    darkDiv.classList.toggle('active');
    this.classList.toggle('active');

    let activeBoard = boards.find(board => board.classList.contains('active'));
    activeBoard.classList.toggle('active');

    // check sports
    if (activeBoard.classList.contains('sports')){
        showVideo.classList.toggle('active');
    }

    // if video showing
    if (theVideo.classList.contains('active')){
        theVideo.classList.toggle('active');
    }
});

// show video button
showVideo.addEventListener('click', function(){
    theVideo.classList.toggle('active');
})



/* SCROLLING */

/* 
let scrollPos = 0;

window.addEventListener('scroll', function(e){
  // scroll down into next page 
  if (isScrollDown(this.scrollY)){
    if (notLastPage){
      pageIndex ++;
      pages[pageIndex].scrollIntoView({behaviour: "smooth", block: "top"});
    }
  }
  // scroll up a page 
  else if (notFirstPage){
    pageIndex --;
    pages[pageIndex].scrollIntoView(true);
  }

  // update scroll position 
  scrollPos = this.scrollY;
}); 

function isScrollDown(scrollY){
  return scrollY > scrollPos ? true : false;
}

*/