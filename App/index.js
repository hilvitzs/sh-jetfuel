const folderSubmit = document.querySelector('.folder-submit')


const addFolder = (folderInput) => {
  fetch('/api/v1/folders', {
    method: 'POST',
    headers: {'Content-Type':  'application/json'},
    body: JSON.stringify({ name: folderInput })
  })
  .catch(error => console.log('There was an error', error ))

  document.querySelector('.folder-input').value = ""

}

folderSubmit.addEventListener("click", (event) => {
  event.preventDefault()
  let folderInput = document.querySelector('.folder-input').value

  addFolder(folderInput)
})
