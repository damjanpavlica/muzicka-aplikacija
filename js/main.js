// https://api.lyrics.ovh/suggest/fraza
const izvodjacInput = document.getElementById('izvodjac')
const pesmaInput = document.getElementById('pesma')
const rezultatElement = document.getElementById('rezultat')
const naslovElement = document.getElementById('naslov')
const forma = document.getElementById('forma-za-tekstove')

function potrazi(e) {
  e.preventDefault()
  const izvodjac = izvodjacInput.value
  const pesma = pesmaInput.value
  const url = `https://api.lyrics.ovh/v1/${izvodjac}/${pesma}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      naslovElement.innerText = izvodjac + ' - ' + pesma
      rezultatElement.innerText = data.lyrics
    })
    .catch(err => alert(err))
}

forma.addEventListener('submit', potrazi)
