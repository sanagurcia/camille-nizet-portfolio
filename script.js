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