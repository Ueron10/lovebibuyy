const pageFlip = new St.PageFlip(
document.getElementById("book"),
{
width:400,
height:520,

size:"stretch",

minWidth:300,
maxWidth:800,

minHeight:400,
maxHeight:600,

showCover:true,

mobileScrollSupport:true,
useMouseEvents:true
}
);

pageFlip.loadFromHTML(
document.querySelectorAll(".page")
);