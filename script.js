
//Negative and Positive Button, Quantity display
const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  const quantityDisplay = counter.querySelector('.quantity');
  const negativeButton = counter.querySelector('.negativeButton');
  const positiveButton = counter.querySelector('.positiveButton');

let quantity = 0;

negativeButton.addEventListener('click', function(){
    quantity -=1;
    quantityDisplay.textContent = quantity;
});

positiveButton.addEventListener('click', function(){
    quantity +=1;
    quantityDisplay.textContent = quantity;
});

});


//______________________________________________________________________________________________

//Toggle View description for FloralHandwovenToteBag
const FloralHandwovenToteBagButton = document.getElementById('FloralHandwovenToteBagButton');
const FloralHandwovenToteBagDescription =document.getElementById('FloralHandwovenToteBagDescription');
//View description visibility when the View Description is clicked
FloralHandwovenToteBagButton.addEventListener('click', function() {
    if (FloralHandwovenToteBagDescription.style.display === 'none') {
        FloralHandwovenToteBagDescription.style.display = 'block';
    } else {
       FloralHandwovenToteBagDescription.style.display = 'none'; 
    }
})

//Toggle View description for NaturalMarketBasket
const NaturalMarketBasketButton = document.getElementById('NaturalMarketBasketButton');
const NaturalMarketBasketDescription =document.getElementById('NaturalMarketBasketDescription');
//View description visibility when the View Description is clicked
NaturalMarketBasketButton.addEventListener('click', function() {
    if (NaturalMarketBasketDescription.style.display === 'none') {
        NaturalMarketBasketDescription.style.display = 'block';
    } else {
       NaturalMarketBasketDescription.style.display = 'none'; 
    }
})

//Toggle View description for ClassicStrawToteBag
const ClassicStrawToteBagButton = document.getElementById('ClassicStrawToteBagButton');
const ClassicStrawToteBagDescription = document.getElementById('ClassicStrawToteBagDescription');
//View description visibility when the View Description is clicked
ClassicStrawToteBagButton.addEventListener('click', function() {
    if (ClassicStrawToteBagDescription.style.display === 'none') {
        ClassicStrawToteBagDescription.style.display = 'block';
    } else {
       ClassicStrawToteBagDescription.style.display = 'none'; 
    }
})

//Toggle View description for WovenTravelShoulder
const WovenTravelShoulderBagButton = document.getElementById('WovenTravelShoulderBagButton');
const WovenTravelShoulderBagDescription = document.getElementById('WovenTravelShoulderBagDescription');
//View description visibility when the View Description is clicked
WovenTravelShoulderBagButton.addEventListener('click', function() {
    if (WovenTravelShoulderBagDescription.style.display === 'none') {
        WovenTravelShoulderBagDescription.style.display = 'block';
    } else {
       WovenTravelShoulderBagDescription.style.display = 'none'; 
    }
})

//Toggle View description for BeachWovenToteBag
const BeachWovenToteBagButton = document.getElementById('BeachWovenToteBagButton');
const BeachWovenToteBagDescription = document.getElementById('BeachWovenToteBagDescription');
//View description visibility when the View Description is clicked
BeachWovenToteBagButton.addEventListener('click', function() {
    if (BeachWovenToteBagDescription.style.display === 'none') {
        BeachWovenToteBagDescription.style.display = 'block';
    } else {
       BeachWovenToteBagDescription.style.display = 'none'; 
    }
})

//Toggle View description for MinimalistWovenBasketBag
const MinimalistWovenBasketBagButton = document.getElementById('MinimalistWovenBasketBagButton');
const MinimalistWovenBasketBagDescription = document.getElementById('MinimalistWovenBasketBagDescription');
//View description visibility when the View Description is clicked
MinimalistWovenBasketBagButton.addEventListener('click', function() {
    if (MinimalistWovenBasketBagDescription.style.display === 'none') {
        MinimalistWovenBasketBagDescription.style.display = 'block';
    } else {
       MinimalistWovenBasketBagDescription.style.display = 'none'; 
    }
})



//________________________________________________________________________________________________________________________________


//Refresh Button
const refreshButton = document.getElementById('refresh');

refreshButton.addEventListener('click', function () {
    location.reload();
});






