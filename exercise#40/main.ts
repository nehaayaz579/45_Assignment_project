 function make_album(artistName :string,albumTitle :string){
    return {artistName,albumTitle}
 }
 let firstAlbum = make_album("Ali","Atitude")
 console.log(firstAlbum)

 let secondAlbum = make_album("shahzab","fake love")
 console.log(secondAlbum)

 let thirdAlbum = make_album("shahmeer","world is nothing")
 console.log(thirdAlbum)

 function make_album1(artistName :string,albumTitle :string , numberOfNumber? : number){
    return {artistName,albumTitle,numberOfNumber}
 }
 let firstAlbum1 = make_album1("Ali","Atitude",30)
 console.log(firstAlbum1)

 let secondAlbum1 = make_album1("shahzab","fake love",50)
 console.log(secondAlbum1)

 let thirdAlbum1 = make_album1("shahmeer","world is nothing", 90)
 console.log(thirdAlbum1)