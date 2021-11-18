function handleVooSelect(event) {
  if(!voos) return;

  const dataSelect = document.getElementById('select_data_voo')
  dataSelect.innerHTML = ''
  const value = event.target.value

  for(const voo of voos) {
    if(voo.NR_VOO < value) continue
    if(voo.NR_VOO > value) break;

    const option = document.createElement('option')
    
    option.value = voo.DT_SAIDA_VOO
    option.innerHTML = voo.DT_SAIDA_VOO
    
    dataSelect.appendChild(option)
  }

  dataSelect.disabled = false
}