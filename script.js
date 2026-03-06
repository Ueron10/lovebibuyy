const pageFlip = new St.PageFlip(
document.getElementById("book"),
{
width:450,
height:520,

size:"stretch",

minWidth:320,
maxWidth:900,

minHeight:420,
maxHeight:650,

showCover:true,

mobileScrollSupport:true,
useMouseEvents:true
}
);

pageFlip.loadFromHTML(
document.querySelectorAll(".page")
);