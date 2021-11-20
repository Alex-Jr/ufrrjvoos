async function abrirConsultas(path) {
  const body = document.getElementById('index')

  const dimDiv = document.createElement('div')
  dimDiv.className = 'index__dim'
  dimDiv.id = 'dimDiv'
  dimDiv.addEventListener('click', fecharConsultas)

  const consultasIframe = document.createElement('iframe')
  consultasIframe.className = 'index__consultas'
  consultasIframe.id = 'consultasIframe'
  consultasIframe.src = `/consultas_${path}`

  body.appendChild(dimDiv)
  body.appendChild(consultasIframe)
}

function fecharConsultas() {
  document.getElementById('dimDiv').remove();
  document.getElementById('consultasIframe').remove();
}

async function abrirRealizar(path) {
  const body = document.getElementById('index')

  const dimDiv = document.createElement('div')
  dimDiv.className = 'index__dim'
  dimDiv.id = 'dimDiv'
  dimDiv.addEventListener('click', fecharConsultas)

  const consultasIframe = document.createElement('iframe')
  consultasIframe.className = 'index__consultas'
  consultasIframe.id = 'consultasIframe'
  consultasIframe.src = `/realizar_${path}`

  body.appendChild(dimDiv)
  body.appendChild(consultasIframe)
}

function fecharConsultas() {
  document.getElementById('dimDiv').remove();
  document.getElementById('consultasIframe').remove();
}