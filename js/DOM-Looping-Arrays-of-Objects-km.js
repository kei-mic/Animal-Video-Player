// get dom elements
const animalPicDiv = document.getElementById('animal-pics');
const videoPlayerDiv= document.getElementById('video-player');
const h2 = document.querySelector('h2');
const p = document.querySelector('p');

// update default animal name and description
h2.textContent = animalsArr[0].name;
p.textContent = animalsArr[0].desc;

// display default video for first animal
let videoPlayerCode = `<iframe width="560" height="315" 
src="https://www.youtube.com/embed/${animalsArr[0].youTube}" 
title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`

videoPlayerDiv.innerHTML = videoPlayerCode;

// go through animal array for data
for (animal of animalsArr) {
    //update and add pics
    let picFile = animal.name.replace(' ', '-').toLowerCase() + '.jpg';
    const pic = new Image();
    pic.src = `images/${picFile}`;
    //add function to update elements
    pic.addEventListener('click', swapAnimal);
    //pull data 
    pic.animalName = animal.name;
    pic.description = animal.desc;
    pic.youTubeCode = animal.youTube;
    //place on DOM
    animalPicDiv.appendChild(pic);
}

// function to update animal when clicked 
function swapAnimal() {
    h2.textContent = this.animalName;
    p.textContent = this.description;

    videoPlayerDiv.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${this.youTubeCode}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`

} //end swapAnimal
