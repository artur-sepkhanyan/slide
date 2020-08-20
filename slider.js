const imagesArray = [   'car1.jpeg',
                        'car2.jpeg',
                        'car3.jpg',
                        'car4.jpeg',
                        'car5.jpg'
                    ]
var index = 0;

function slide(n) {
    const mainImage = document.getElementById("mainImage");
    console.log(n);
    if (n > imagesArray.length - 1) {
        index = 0;
    } else if (n < 0) {
        index = imagesArray.length
    }
    mainImage.setAttribute('src', imagesArray[index])
    slideCarousel(index);
}
function slideCarousel(n) {
    let images = document.getElementsByClassName("slider_item");
    images[0].setAttribute('src',imagesArray[n-2]);
    images[1].setAttribute('src',imagesArray[n-1]);
    images[2].setAttribute('src',imagesArray[n]);
    images[3].setAttribute('src',imagesArray[n+1]);
    images[4].setAttribute('src',imagesArray[n+2]);
}

function slideLeftRight(direction = '+') {
    console.log(index);
    index = direction ? index + 1 : index - 1;
    slide(index);
}


setInterval(slideLeftRight, 3000);
