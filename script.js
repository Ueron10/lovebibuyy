const pageFlip = new St.PageFlip(
document.getElementById("book"),
{
width:400,
height:500,
size:"stretch",
minWidth:300,
maxWidth:800,
minHeight:400,
maxHeight:600,
showCover:true,
mobileScrollSupport:true
}
);

pageFlip.loadFromHTML(
document.querySelectorAll(".page")
);

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