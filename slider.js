const imagesArray = [   'https://gmsrp.cachefly.net/images/20/04/11/cdd5233f8a1f5e37e55ca7e1212dd63b/960.jpg',
'https://gmsrp.cachefly.net/images/19/10/11/ec561ff7cf3054f3bfcaaf393d23adf7/960.jpg',
'https://www.juvefc.com/wp-content/uploads/2019/03/ronaldo-2-940x626.jpg',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPtt4D_bon1O5kiMapr3MC4HsYifjk53VevXY82_sYfYiFJfI&s',
'https://images2.minutemediacdn.com/image/upload/c_fill,w_912,h_516,f_auto,q_auto,g_auto/shape/cover/sport/chelsea-fc-v-west-ham-united-premier-league-5cb238037df23d60a7000001.jpg'

                    ]
var index = 0;
const start = 0;
const end = imagesArray.length -1;
function slide(n) {
    const mainImage = document.getElementById("mainImage");
    // console.log(n);
    if (n > end) {
        index = 0;
    } else if (n < start) {
        index = imagesArray.length;
    }
    mainImage.setAttribute('src', imagesArray[index])
    slideCarousel(index);
}
function slideCarousel(n) {
    let images = document.getElementsByClassName("slider_item");
    let first = index - 2;
    let second = index - 1;
    let beforlast = index + 1;
    let last = index + 2;
    if(index == start) {
        first = end - 2;
        second = end - 1;
    }
    if(index == start + 1) {
        first = end - 1;
    }
    if(index == end) {
        last = start + 2;
        beforlast = start + 1;
    }
    if(index == end - 1) {
        last = start;
    }
    images[0].setAttribute('src',imagesArray[first]);
    images[1].setAttribute('src',imagesArray[second]);
    images[2].setAttribute('src',imagesArray[index]);
    images[3].setAttribute('src',imagesArray[beforlast]);
    images[4].setAttribute('src',imagesArray[last]);
    
}

function slideLeftRight(direction = '+') {
    // console.log(index);
    index = direction ? index + 1 : index - 1;
    slide(index);
}


setInterval(slideLeftRight, 3000);
