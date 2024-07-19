var guestlist = ['namra', 'arishay', 'shilpa'];
var unableAttend = guestlist.splice(1, 1)[0];
console.log("Dear ".concat(unableAttend, " not invited for dinner"));
guestlist.push('neha');
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",you are cordially invited to dinner"));
});
