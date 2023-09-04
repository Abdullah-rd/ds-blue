const bodyElement = document.querySelector('body');
const elementsToToggle = [
  'title',
  'lightmode',
  'default3bar',
  'content',
  'horline',
  'content2',
  'writer',
  'hbtn',
  'skill-title',
  'percentage',
  'skills-title',
  'article-title',
  'articles-title',
  'footer',
  'articles-hr',
  'mread',
  'categorie',
  'hr-article',
  'article',
  'dropdown',
  'exit',
  'dropdownmenu'
  
];

let isDarkMode = JSON.parse(localStorage.getItem('dark'));

if (isDarkMode === null) {
  isDarkMode = true;
}

isDarkMode ? setDark() : setLight();


function toggleDarkMode() {
  isDarkMode ? setLight() : setDark();
  isDarkMode = !isDarkMode;
  localStorage.setItem('dark', JSON.stringify(isDarkMode));
}

function setDark() {
  document.querySelector('.Github').innerHTML = '<img src="images/Github-w.png" alt="" class="skill-logo">     Github';
  bodyElement.classList.add('body-darkmode');
  elementsToToggle.forEach(className => {
    const elements = document.querySelectorAll('.' + className);
    elements.forEach(element => {
      element.classList.add(className + '-darkmode');
      if (className !== 'hbtn' && className !== 'content' && className !== 'content2' && className !== 'writer' && className !=='mread' && className!=='categorie' ) //not proud of this *-*
       {
        element.style.color = 'white';
      }
    });
  });
}

function setLight() {
  document.querySelector('.Github').innerHTML = '  <img src="images/github.png" alt="" class="skill-logo">     Github';
  bodyElement.classList.remove('body-darkmode');
  elementsToToggle.forEach(className => {
    const elements = document.querySelectorAll('.' + className);
    elements.forEach(element => {
      element.classList.remove(className + '-darkmode');
      element.style.color = '';
    });
  });
}


const menuButton = document.querySelector('.dropdownmenu');
const exitButton = document.querySelector('.exit');

const dropdownMenu = document.querySelector('.dropdown-menu');

menuButton.addEventListener('click', () => {
        dropdownMenu.style.display = 'block';
        document.body.style.overflowY = 'hidden';
});


exitButton.addEventListener('click',() => {
  dropdownMenu.style.display = 'none';
  document.body.style.overflowY = 'auto';
});



