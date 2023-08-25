let isDarkMode = false;

function toggleDarkMode() {
  const bodyElement = document.querySelector('body');
  const elementsToToggle = [
    'pbtn3',
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
    'skills-title'
  ];

  if (isDarkMode) {
    document.querySelector('.Github').innerHTML = '  <img src="images/github.png" alt="" class="skill-logo">     Github';

    bodyElement.classList.remove('body-darkmode');
    elementsToToggle.forEach(className => {
      const elements = document.querySelectorAll('.' + className);
      elements.forEach(element => {
        element.classList.remove(className + '-darkmode');
        element.style.color = ''; 
      });
    });

  } else {
    document.querySelector('.Github').innerHTML = '<img src="images/Github-w.png" alt="" class="skill-logo">     Github';
    bodyElement.classList.add('body-darkmode');
    elementsToToggle.forEach(className => {
      const elements = document.querySelectorAll('.' + className);
      elements.forEach(element => {
        element.classList.add(className + '-darkmode');
        if (className !== 'hbtn') {
            element.style.color = 'white'; 
          }      
        });
    });

  }

  isDarkMode = !isDarkMode;
}



