// https://api.lyrics.ovh/suggest/fraza
const izvodjacInput = document.getElementById('izvodjac')
const pesmaInput = document.getElementById('pesma')
const dugmePotrazi = document.getElementById('potrazi')
const rezultatElement = document.getElementById('rezultat')
const naslovElement = document.getElementById('naslov')

function potrazi() {
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
}

dugmePotrazi.addEventListener('click', potrazi)
