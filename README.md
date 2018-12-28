# Muzicka aplikacija

Javascript aplikacija koja koristi javni [Lyrics API](https://lyrics.ovh/) za pretragu pesama.

## TODO

- povezati stranice sajta ✓
- dodati obavezna polja na formu i slicne provere ✓
- da radi enter na drugoj formi ✓
- organizovati js i css fajlove ✓
- dodati preload atribut na prvi audio plejer ✓
- handlovati greske ✓
- napredno: prikazati tekst pesme klikom na predlozenu sugestiju

## Bonus: novi API-ji

### API za tablature

Izlistava sve pesme trazenog izvodjaca:

```
https://www.songsterr.com/a/ra/songs/byartists.json?artists=Metallica
```

ili ako su dve reci mora pod navodnicima:

```
https://www.songsterr.com/a/ra/songs/byartists.json?artists="Bob Marley"
```

Link ka stranici sa notama (unosi se id pesme dobijen preko prethodnog poziva):
```
http://www.songsterr.com/a/wa/song?id={id}
```

Moze i bez id-a, npr:

```
http://www.songsterr.com/a/wa/bestMatchForQueryString?s=Fade to black&a=Metallica
```

### API za video

```
https://itunes.apple.com/search?term=bob+marley&entity=musicVideo
```

Rezultati imaju `previewUrl` atribut koji daje video URL od 30 sekundi
