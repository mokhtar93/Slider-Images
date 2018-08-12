let imagesArray = document.querySelectorAll(".slide");
let arrowLeft = document.querySelector("#arrow-left");
let arrowRight = document.querySelector("#arrow-right");
localStorage.clear();
var current = 0;
var sliderTimer = 5500;
var slide = false;
var config = false;

// Setting the default time for displaying all the slides
function defaultTime() {
    var input = document.getElementById("myInput").value;
    document.getElementById('pauseSlide').style.visibility = 'visible';
    document.getElementById('startSlide').style.visibility = 'hidden';
    this.sliderTimer = input * 1000;
    this.slide = true;
    localStorage.clear();
    this.autoSlide();

}

// Clear all images before rendering
function clean() {
    for (let i = 0; i < imagesArray.length; i++) {
        imagesArray[i].style.display = "none";
    }
}

// Initiate slider
function startSlide() {
    clean();
    imagesArray[current].style.display = "block";
    this.lazyLoading(imagesArray[current]);
}

function timeSlide(key) {
    var imageTime = localStorage.getItem("image_" + key);
    if (imageTime) {
        console.log(imageTime);
        this.sliderTimer = imageTime * 1000;
    }
    this.playTime = setInterval(this.autoSlide, this.sliderTimer);
}

// Slide to the left
function slideLeft() {
    clean();
    if (current === 0) {
        current = imagesArray.length;
    }
    imagesArray[current - 1].style.display = "block";
    current--;
}

function stopSlide() {
    clearInterval(this.playTime);
}

// Slide to the right
function slideRight() {
    if (current === imagesArray.length - 1) {
        current = -1;
    }
    clean();
    if (this.slide) {
        this.stopSlide();
        this.timeSlide(current + 1);
    }
    this.lazyLoading(imagesArray[current + 1]);
    imagesArray[current + 1].style.display = "block";
    current++;
}

function autoSlide() {
    if (this.slide) {
        this.slideRight();
    }
}
// Start sliding from controls
function play(input) {
    if (input == 1) {
        document.getElementById('pauseSlide').style.visibility = 'visible';
        document.getElementById('startSlide').style.visibility = 'hidden';
        this.slide = true;
        this.config = false;

        this.autoSlide();
    } else {
        document.getElementById('startSlide').style.visibility = 'visible';
        document.getElementById('pauseSlide').style.visibility = 'hidden';
        this.slide = false;
    }
}

function lazyLoading(currentImage) {
    [].forEach.call(currentImage.querySelectorAll('img[data-src]'), function (img) {
        img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = function () {
            img.removeAttribute('data-src');
        };
    });
}

//Save each slide's display time into local storage
function saveTime() {
    var input1 = document.getElementById("input1");
    localStorage.setItem("image_0", input1.value);
    var input2 = document.getElementById("input2");
    localStorage.setItem("image_1", input2.value);
    var input3 = document.getElementById("input3");
    localStorage.setItem("image_2", input3.value);
}

function pause() {
    document.getElementById('startSlide').style.visibility = 'visible';
    document.getElementById('pauseSlide').style.visibility = 'hidden';
    this.slide = false;
}


startSlide();