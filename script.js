const pageFlip = new St.PageFlip(
document.getElementById("book"),
{
width:380,
height:520,
size:"stretch",
minWidth:280,
maxWidth:800,
minHeight:350,
maxHeight:650,
showCover:true,
mobileScrollSupport:true
}
);

pageFlip.loadFromHTML(
document.querySelectorAll(".page")
);

const music = document.getElementById("bgMusic");

let started = false;

pageFlip.on("flip", () => {

if(!started){
music.play();
started = true;
}

});