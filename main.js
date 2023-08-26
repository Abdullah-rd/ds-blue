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
  'footer'
];

let isDarkMode = JSON.parse(localStorage.getItem('dark')) || false;
if (isDarkMode) setDark();


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
      if (className !== 'hbtn' && className !== 'content' && className !== 'content2' && className !== 'writer') {
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