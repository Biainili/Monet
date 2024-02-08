{
function openerMenu() {
  const opening = document.getElementById('headMenu');
  opening.style.display = 'flex';
  const opener = document.getElementById('menuOpener');
  opener.style.display = 'none';

  openValue = true;

  document.body.style.setProperty('--overlay-display', 'block');

  document.body.style.overflow = 'hidden';
  document.body.style.position = 'relative';
  document.body.style.zIndex = 100;

  setTimeout(function () {
    const bodyAll = document.body;
    bodyAll.addEventListener('click', clickFunction);
  }, 100);
}

function closeMenu() {
  const opening = document.getElementById('headMenu');
  opening.style.display = 'none';
  const opener = document.getElementById('menuOpener');
  opener.style.display = 'block';

  opening.style.display = window.innerWidth >= 968 ? 'none' : 'none';
  opener.style.display = window.innerWidth <= 968 ? 'block' : 'none';

  document.body.style.setProperty('--overlay-display', 'none');

  document.body.style.overflow = 'auto';

  const bodyAll = document.body;
  bodyAll.removeEventListener('click', clickFunction);

  openValue = false;
}

function clickFunction(event) {
  const opening = document.getElementById('headMenu');

  if (!opening.contains(event.target)) {
    closeMenu();
  }
}

window.onresize = function () {
  closeMenu();
};

}// <= Function to open menu mobile and tools 

{
  function openNewPage(url) {
    window.location.href = url
  }
} // <= Function that open a new page


{
  function openLanguages(childId, imgId, container) {

    let childElement = document.getElementById(childId);
    let isInitiallyHidden = window.getComputedStyle(childElement).display === 'none';
    childElement.style.display = isInitiallyHidden ? 'block' : 'none';

    let arrowImg = document.getElementById(imgId);
    arrowImg.src = childElement.style.display === 'none' ? './img/down.svg' : './img/up-resp.svg';

    let bigDiv = document.querySelector(container);
    bigDiv.onmouseover = function () {
      arrowImg.src = './img/down-black.svg';
      arrowImg.style.transform = childElement.style.display === 'block' ? "rotate(180deg)" : 'none';
    };

    bigDiv.onmouseout = function () {
      arrowImg.src = childElement.style.display === 'none' ? './img/down.svg' : './img/up-resp.svg';
    };
    document.addEventListener('click', function (event) {
      if (!bigDiv.contains(event.target)) {
        childElement.style.display = 'none';
        arrowImg.src = './img/down.svg';
      }
    });
  }
} // <= Functions that open and close the menu 



{
  function openAnswerToQuestion(id, imgID) {
    let element = document.getElementById(id);
    let currentDisplay = window.getComputedStyle(element).display;

    let answerBlockers = document.querySelectorAll('.answer-block');
    answerBlockers.forEach((block) => {
      block.style.display = 'none';
    });

    element.style.display = currentDisplay === 'none' ? 'block' : 'none';

    let arrowImages = document.querySelectorAll('.img-arrow');
    arrowImages.forEach((img) => {
      img.src = './img/arrow-to-down.png';
    });

    let imgElement = document.getElementById(imgID);
    imgElement.src = element.style.display === 'none' ? './img/arrow-to-down.png' : './img/arrow-to-up.png';
  }
} // function for answer





{
  function updateScreenWidth() {
    document.documentElement.style.setProperty('--screen-width', window.innerWidth + 'px');
  }

  updateScreenWidth();
  window.addEventListener('resize', updateScreenWidth);
}








let cirDiv = document.querySelector(".wrapper-steps-main")   //for circles => different movement

document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.itemMain');
  let isScattered = false;

  function scatterAndCome() {
    items.forEach(item => {
      if (isScattered) {
        item.style.transition = 'transform 5s ease-in-out';
        item.style.transform = 'translate(0, 0)';
      } else {
        const randomX = Math.random() * cirDiv.clientWidth;
        const randomY = Math.random() * cirDiv.clientHeight;
        item.style.transition = 'transform 5s ease';
        item.style.transform = `translate(${randomX}px, ${randomY}px)`;
      }
    });
    isScattered = !isScattered;
  }
  setInterval(scatterAndCome, 16000);
});



<<<<<<< HEAD



const circle = document.querySelector('.orangeCircle1');  //mini circlee

function moveCircle() {
  const top = Math.random() * 80 + 10; 
  const left = Math.random() * 80 + 10;

=======
const circle = document.querySelector('.orangeCircle1');


function moveCircle() {
  const top = Math.random() * 80 + 10; 
  const left = Math.random() * 80 + 10; 

>>>>>>> bbdd69d0d4c48b78c44e07bf5ba83deb81e980a0
  circle.style.top = `${top}%`;
  circle.style.left = `${left}%`;
}

setInterval(moveCircle, 2000);


<<<<<<< HEAD








const elements = document.querySelectorAll('.sect2V3, .sect2V4, .itemm, .letter_lines, .letter_content, .class-m, .class-n, .class-e, .class-t, .logo_name_text, .monet_row_symbol, .monet_row_symbol_img, .third-img-element_3, .second-img-element_4, .quarters-img-element_1, .quarters-img-element_7, .quarters-img-element_5, .quarters_left_contant_bg');
=======
{
const elements = document.querySelectorAll('.sect2V3, .sect2V4, .itemm, .letter_lines, .letter_content, .class-m, .class-n, .class-e, .class-t, .logo_name_text, .monet_row_symbol, .monet_row_symbol_img, .third-img-element_3, .second-img-element_4, .quarters-img-element_1, .quarters-img-element_7, .quarters-img-element_5, .quarters_left_contant_bg, .second-img-element_4');
>>>>>>> bbdd69d0d4c48b78c44e07bf5ba83deb81e980a0

const options = {
  threshold: 0.9,
};

const options_A = {
  threshold: 0.4,
};

function handleIntersection(entry, element) {
  if (entry.isIntersecting) {
    element.style.animationPlayState = 'running';
  } else {
    element.style.animationPlayState = 'paused';
  }
}

const observers = Array.from(elements).map((element, index) => {
  const observerOptions = index >= 3 && index <= 18 ? options_A : options;
  const observer = new IntersectionObserver((entries) => {
    handleIntersection(entries[0], element);
  }, observerOptions);

  observer.observe(element);
  return observer;
});


} // => for animation scroll

























// const elementSelectors = [ 
//   '.letter_lines', '.letter_content', '.class-m', '.class-n', '.class-e', 
//   '.class-t', '.logo_name_text', '.monet_row_symbol', '.monet_row_symbol_img', 
//   '.third-img-element_3', '.second-img-element_4', '.quarters-img-element_1', 
//   '.quarters-img-element_7', '.quarters-img-element_5', '.quarters_left_contant_bg'
// ]; 

// const options = { 
//   threshold: 0.9, 
// }; 

// const options_A = { 
//   threshold: 0.4, 
// }; 

// function handleIntersection(entry, element) { 
//   if (entry.isIntersecting) { 
//     element.style.animationPlayState = 'running'; 
//   } else { 
//     element.style.animationPlayState = 'paused'; 
//   } 
// } 

// const observers = elementSelectors.map((selector, index) => { 
//   const element = document.querySelector(selector); 
//   const observerOptions = index === elementSelectors.length - 1 ? options_A : options; 
//   const observer = new IntersectionObserver((entries) => { 
//     handleIntersection(entries[0], element); 
//   }, observerOptions); 

//   observer.observe(element); 
//   return observer; 
// });