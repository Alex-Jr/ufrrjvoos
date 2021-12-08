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

// save é a operação para os formulários de crud, valida o form e envia para a rota certa
async function save(model, id_field, edit, qsParameters) {
  const isEdit = edit === 'true'
  const form = document.forms['form'];
  const values = {};
  const errors = [];

  for (const ipt of form) {
    let name = ipt.name;
    let value = ipt.value;
    if(!name) continue;
    
    if(typeof value === 'string') value = value.toUpperCase()
    if(!ipt.checkValidity()) errors.push(ipt.validationMessage)
    values[name] = value
  }
  
  if(errors.length > 0) return;

  let qs = '';
  if(qsParameters) {
    qsParameters = JSON.parse(qsParameters);
  
    qsParameters.forEach((qsParameter) => {
      qs += `${qsParameter}=${values[qsParameter]}&`
    })

    delete values[qsParameters]
  }
  const url = `/${model}${isEdit ? `/${values[id_field]}` : ''}?${qs}`;
  
  if(isEdit) delete values[id_field]

  const response = await fetch(url, {
    method: isEdit ? 'PATCH': 'POST',
    body: JSON.stringify(values),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if(!response.ok) {
    alert('Erro!');
    return;
  };
  console.log(values);

  window.location.href = `/${model}`;
}