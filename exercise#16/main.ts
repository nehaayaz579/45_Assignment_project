let guestlist:string[] = ["namra","neha","shilpa"];
guestlist.unshift("hassan");
guestlist.splice(Math.floor(guestlist.length)/2,0,'abdullah');
guestlist.push("faiz");
guestlist.forEach(guest =>{
    console.log(`Dear ${guest},you are cordially invited for dinner`)
})