const root = document.getElementById('container');
const button = document.getElementById('btn');
console.log(root);
const h2 = document.createElement('h2');
const img = document.createElement('img');
const div = document.createElement('div');



function showData() {
    try{
    h2.innerText = 'Welcome to DOM';
    h2.style.color = 'red';
    h2.style.backgroundColor = 'cyan';
    img.src = 'https://in.images.search.yahoo.com/search/images?p=image&fr=mcafee&type=E210IN1589G92001&imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fthumbnails%2F023%2F009%2F485%2Fsmall_2x%2Fabstract-animal-owl-portrait-with-colorful-double-exposure-paint-with-generative-ai-free-photo.jpeg#id=3&iurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fthumbnails%2F023%2F009%2F485%2Fsmall_2x%2Fabstract-animal-owl-portrait-with-colorful-double-exposure-paint-with-generative-ai-free-photo.jpeg&action=click';
    img.setAttribute('height', 200);
    img.setAttribute('width', 200);
    root.appendChild(img);
    root.appendChild(h2);
    removeButton();
    }catch(e){
        console.log(e);
    }
    finally{
        console.log("Request completed");
    }
}
button.addEventListener('click', showData);