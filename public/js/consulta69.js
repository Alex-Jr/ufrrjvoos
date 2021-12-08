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

// valida o form e envia para o backend
async function consulta69() {
  const form = document.forms['form'];
  const errors = [];

  let qs = '';
  for (const ipt of form) {
    let name = ipt.name;
    let value = ipt.value;

    if(!name) continue;
    if(typeof value === 'string') value = value.toUpperCase()
    if(!ipt.checkValidity()) errors.push(ipt.validationMessage)

    qs += `${name}=${value}&`
  }
  
  if(errors.length > 0) return;

  const url = `/consultas_voos/69?${qs}`;
  
  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if(!response.ok) {
    alert('Erro!');
    return;
  };

  const { quantidade } = await response.json()

  console.log(quantidade)

  document.getElementById('consulta69__result').innerHTML = `Quantidade de voos: ${quantidade}`
}