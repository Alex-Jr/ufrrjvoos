window.addEventListener('load', async () => {
  document.getElementById('form').addEventListener("submit", () => {
    confirm('Reserva feita!')
    parent.fecharConsultas()
  });

  document.getElementById("form__input-nome").addEventListener("input", async (event) => {
    if(event.inputType == "insertReplacementText" || event.inputType == null) {
      const nome = event.data

      const url = `/realizar_reserva/passageiros?NM_PSGR=${nome}`

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const body = await response.json()

      document.getElementById('form__input-cod').value = body.CD_PSGR
      document.getElementById('form__input-sexo').value = body.IC_SEXO_PSGR
      document.getElementById('form__input-pais').value = body.CD_PAIS
      document.getElementById('form__input-nascimento').value = body.DT_NASC_PSGR
      document.getElementById('form__input-civil').value = body.IC_ESTD_CIVIL
      document.getElementById('form__input-responsavel').value = body.CD_PSGR_RESP
    }
  })
})