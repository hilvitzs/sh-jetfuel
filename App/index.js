const folderSubmit = document.querySelector('.folder-submit')


folderSubmit.addEventListener("click", (event) => {
  event.preventDefault()
  const folderInput = document.querySelector('.folder-input').value
  console.log(folderInput);

  fetch('/api/v1/folders', {
    method: 'POST',
    headers: {'Content-Type':  'application/json'},
    body: JSON.stringify({ name: folderInput })
  })
  .catch(error => console.log('There was an error', error ))
})
