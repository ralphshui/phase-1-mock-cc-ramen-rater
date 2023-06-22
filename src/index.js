let ramenData;

const ramenNavImages = document.getElementById('ramen-menu');

const ramenName = document.querySelector('h2');
const ramenRestaurant = document.querySelector('.restaurant');
const ramenImage = document.querySelector('.detail-image');
const rating = document.getElementById('rating-display');
const comment = document.getElementById('comment-display');

const form = document.getElementById('new-ramen');

const newName = document.getElementById('new-name');
const newRestaurant = document.getElementById('new-restaurant');
const newRamenImage = document.getElementById('new-image');
const newRating = document.getElementById('new-rating');
const newComment = document.getElementById('new-comment');

fetch('http://localhost:3000/ramens')
    .then(resp => resp.json())
    .then(data => {
        ramenData = data;
//      ramenData[0];

        renderPics();
        renderDetails();
        createNewRamen();
    });

const renderPics = () => {
    ramenData.forEach((ramen) => {
        let image = document.createElement('img');
        image.src = ramen.image;
        ramenNavImages.append(image);

        image.addEventListener('click', () => {
            ramenData = ramen;
            renderDetails();
        })
    })
}

const renderDetails = () => {
    ramenName.textContent = ramenData.name;
    ramenRestaurant.textContent = ramenData.restaurant;
    ramenImage.src = ramenData.image;
    ramenImage.alt = `${ramenData.name} Picture`;
    rating.textContent = ramenData.rating;
    comment.textContent = ramenData.comment;
}

const createNewRamen = () => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
               
        let newRamen = {
            'id': ramenData.length+1,
            'name': newName.value,
            'restaurant': newRestaurant.value,
            'image': newRamenImage.value,
            'rating': newRating.value,
            'comment': newComment.value,
        }

        let newImg = document.createElement('img');
        newImg.src = newRamen.image;
        ramenNavImages.append(newImg);

        ramenData.push(newRamen)
        
    form.reset();
    })
}
