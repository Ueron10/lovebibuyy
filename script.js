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
mobileScrollSupport:true,
useMouseEvents:true
}
);

pageFlip.loadFromHTML(
document.querySelectorAll(".page")
);

/* MUSIC BUTTON */
const music = document.getElementById("bgMusic");
const btn = document.getElementById("musicBtn");

btn.onclick = ()=>{
if(music.paused){
music.play();
btn.innerText="⏸ Pause Music";
}else{
music.pause();
btn.innerText="🎵 Play Music";
}
};