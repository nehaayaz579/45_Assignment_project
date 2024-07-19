var guestlist = ["namra", "neha", "shilpa"];
guestlist.unshift("hassan");
guestlist.splice(Math.floor(guestlist.length) / 2, 0, 'abdullah');
guestlist.push("faiz");
guestlist.forEach(function (guest) {
    console.log("Dear ".concat(guest, ",you are cordially invited for dinner"));
});
