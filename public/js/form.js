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

async function save(model, id_field, edit) {
  const form = document.forms.form;

  const values = {};
  for (const ipt of form) {
    let name = ipt.name;
    let value = ipt.value;
    if(!name) continue;
    
    if(typeof value === 'string') value = value.toUpperCase()
    values[name] = value
  }

  const url = `/${model}` + `${edit ? `/${values[id_field]}` : ''}`;
  delete values[id_field]

  await fetch(url, {
    method: edit ? 'PATCH': 'POST',
    body: JSON.stringify(values),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  window.location.href = `/${model}`;
}