// desabilitando submit padrão
window.addEventListener('load', function () {
  const element = document.getElementById('form');

  if (element.addEventListener) {
    element.addEventListener("submit", function(evt) {
      evt.preventDefault();
    }, true);
  } else {
    element.attachEvent('onsubmit', function(evt){
      evt.preventDefault();
    });
  }
})

function lidarPasso2() {
  const form = document.forms['form'];
}

async function next(step) {
  switch(step) {
    case '2':
      return lidarPasso2();
  }
}