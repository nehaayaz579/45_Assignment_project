let guestlist:string[] = ['namra','arishay','shilpa']
let unableAttend:string = guestlist.splice(1,1)[0];
console.log(`Dear ${unableAttend} not invited for dinner`);
guestlist.push('neha');

guestlist.forEach(guest =>{
    console.log(`Dear ${guest},you are cordially invited to dinner`);
});