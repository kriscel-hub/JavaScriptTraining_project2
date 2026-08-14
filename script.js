
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

//__________________________________________________________________________________________________________________





const submit = document.getElementById('submit');
const customerFormContainer = document.getElementById('customerForm');
const greetingMessage = document.getElementById('greetingMessage'); // lagay ka ng div sa HTML

submit.addEventListener('click', function() {
    // Gumawa ng bagong form element
    const form = document.createElement('form');

    form.innerHTML = `
        <label for="name">Name:</label>
        <input type="text" name="name" id="name" placeholder="Anna O. Torres" required>

        <label for="email">Email:</label>
        <input type="email" name="email" id="email" placeholder="Anna_Torres@gmail.com" required>

        <label for="message">Message:</label>
        <textarea name="message" id="message" rows="4" placeholder="Message Here" required></textarea>

        <button type="submit" id="sendButton">Send</button>
        <button type="reset" id="resetButton">Reset</button>
    `;

    customerFormContainer.appendChild(form);

    // Validation kapag nag-submit
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // para hindi mag-refresh agad

        const nameInput = document.getElementById('name');
        const name = nameInput.value.trim();

        if (name === '') {
            greetingMessage.textContent = 'Please enter your name';
        } else if (!isValidName(name)) {
            greetingMessage.textContent = 'Invalid input. Please use only letters.';
        } else {
            greetingMessage.textContent = `Hello, ${name}! Your order has been submitted.`;
            alert("Form submitted successfully!");

            // Reset form
            form.reset();

            // Tanggalin ang form at bumalik sa original state
            customerFormContainer.innerHTML = '';
        }
    });
});

// Function to check if the input contains only letters
function isValidName(name) {
    const namePattern = /^[a-zA-Z\s]+$/;
    return namePattern.test(name);
}




//________________________________________________________________________________________________________________________________

//Reset Button
const resetButton = document.getElementById('reset');
//Refresh the whole page
resetButton.addEventListener('click', function () {
    location.reload();
});

