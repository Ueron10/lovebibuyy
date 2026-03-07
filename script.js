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


/* ====================
   AUTO PLAY MUSIC
==================== */

const music = document.getElementById("bgMusic");

let started = false;

pageFlip.on("flip", () => {

if(!started){
music.play().catch(()=>{});
started = true;
}

});


/* ====================
   RANDOM STICKER
==================== */

document.querySelectorAll(".page").forEach(page => {

const stickers = page.querySelectorAll(".sticker");

stickers.forEach(sticker => {

let side = Math.floor(Math.random()*4);

if(side === 0){
sticker.style.top = "100px";
sticker.style.left = Math.random()*80 + "%";
}

if(side === 1){
sticker.style.bottom = "100px";
sticker.style.left = Math.random()*80 + "%";
}

if(side === 2){
sticker.style.left = "100px";
sticker.style.top = Math.random()*80 + "%";
}

if(side === 3){
sticker.style.right = "100px";
sticker.style.top = Math.random()*80 + "%";
}

});

});