async function remove(model, value) {
  const url = `/${model}/${value}`;
  await fetch(url, {
    method: 'DELETE'
  }).then((response) => {
    // TODO ERROR HANDLING
    window.location.href = `/${model}`
  })
}