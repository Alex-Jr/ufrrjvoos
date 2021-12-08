// posibilida deletar uma linha
async function remove(model, value) {
  const url = `/${model}/${value}`;

  await fetch(url, {
    method: 'DELETE'
  })

  window.location.href = `/${model}`;
}