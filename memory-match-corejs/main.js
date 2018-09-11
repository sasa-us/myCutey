const cardImages = [
    'Abby.png',
    'bert.png',
    'bigBird.png',
    'Cookie.png',
    'Count.png',
    'elmo.png',
    'Ernie.png',
    'Oscar.png',
    'Prairie.png'
];
initializeApp();

function initializeApp() {
    createCards(randomizeArray(cardImages));
}

function randomizeArray(array) {
    const newArray = [];
    while(array.length) {
        let randomNum = (Math.random() * array.length) >> 0; // >>0 automatically floor
        newArray[newArray.length] = array.splice(randomNum, 1)[0];
    }
    return newArray;
}

function createCards(imageArray) {
    const totalArray = [...imageArray, ...imageArray];
    console.log(totalArray);

    /*
                                <div class="cardContainer">
                                        <div class="card">
                                            <div class="back"></div>
                                            <div class="front"></div> 
                                        </div>
                                        
                                </div>
    
    */
   totalArray.forEach( image=> {
       console.log('imgae is:', image);
        const cardContainer = document.createElement('DIV');
        cardContainer.classList.add('cardContainer');

        const card = document.createElement('DIV');
        card.classList.add('card');

        const front = document.createElement('DIV');
        front.classList.add('front');
        front.style.backgroundImage = `url(imgaes/${image})`;
        
        const back = document.createElement('DIV');
        back.classList.add('back');
        
        card.appendChild(front);
        card.appendChild(back);
        cardContainer.appendChild(card);
        
        document.querySelector('#game').appendChild(cardContainer);
    });
    

} 