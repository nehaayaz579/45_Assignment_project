function make_album(artistName, albumTitle) {
    return { artistName: artistName, albumTitle: albumTitle };
}
var firstAlbum = make_album("Ali", "Atitude");
console.log(firstAlbum);
var secondAlbum = make_album("shahzab", "fake love");
console.log(secondAlbum);
var thirdAlbum = make_album("shahmeer", "world is nothing");
console.log(thirdAlbum);
function make_album1(artistName, albumTitle, numberOfNumber) {
    return { artistName: artistName, albumTitle: albumTitle, numberOfNumber: numberOfNumber };
}
var firstAlbum1 = make_album1("Ali", "Atitude", 30);
console.log(firstAlbum1);
var secondAlbum1 = make_album1("shahzab", "fake love", 50);
console.log(secondAlbum1);
var thirdAlbum1 = make_album1("shahmeer", "world is nothing", 90);
console.log(thirdAlbum1);
