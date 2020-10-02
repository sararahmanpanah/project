var slide = $(".slide");
var next = $(".next");
var prev = $(".prev");
var dot = $(".dot");
var counter = 0;
var i;

setInterval(function() {
    slider();
}, 5000);

next.click(function() {
    slider();
});

prev.click(function() {
    slider();
});


function slideDisplayNone() {
    for( i=0; i<slide.length; i++) {
        slide[i].style.display = 'none';
    }
}

function noActiv() {
    for( i=0; i<dot.length; i++) {
        dot[i].classList.remove("active");
    }
}

function slider() {
    counter++;
    if( counter>slide.length -1) {
        counter = 0;
    }
    
    slideDisplayNone();
    noActiv();
    slide[counter].style.display = 'block';
    dot[counter].classList.add("active");
}