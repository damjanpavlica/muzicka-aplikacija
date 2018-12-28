fetch('https://itunes.apple.com/search?term=bob+marley')
  .then(response => response.json())
  .then(response => console.log(response))

fetch('https://itunes.apple.com/search?term=bob+marley&entity=musicVideo')
  .then(response => response.json())
  .then(response => console.log(response))
