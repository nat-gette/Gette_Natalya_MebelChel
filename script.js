let mainMenu = document.querySelector('.header__list');
let mainHamburger = document.querySelector('.hamburger');

mainHamburger.addEventListener('click', () => {
    mainMenu.classList.toggle("header__list--active");
})

let menuLinks = document.querySelectorAll('.header__link');
for (let menuLink of menuLinks){
      menuLink.addEventListener('click', (e) => {
          e.preventDefault();
          let scrollToElem = menuLink.getAttribute('href');
          let coordinates = document.querySelector(scrollToElem).offsetTop;
          window.scrollTo({
              top:coordinates -150,
              behavior: 'smooth'
          })
      })
}

let prevArrow = document.querySelector('.slick__prev');
let nextArrow = document.querySelector('.slick__next');

$('.review__list').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: prevArrow,
    nextArrow: nextArrow
  });

  
let orderButtons = document.querySelectorAll('.catalog__button');
orderButtons.forEach(orderButton => {
    orderButton.onclick = () => {
        let modal = document.querySelector('.modal');
        modal.style = "display:flex;justify-content:center;align-items:center;";
        // modal.classList.add('.modal-active');
    };
});

let callMeasurerButton = document.querySelector('.button_primary'); 
callMeasurerButton.onclick = () => { 
    let scrollToElem = "#order"; 
    let coordinates = document.querySelector(scrollToElem).offsetTop; 
    window.scrollTo({ 
        top:coordinates -150, 
        behavior: 'smooth' 
    }) 
}