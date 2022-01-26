function raffle(element){
    const randomNumber = Math.round(Math.random() * 77);
    const h1 = document.getElementById("h1");
    const thisValue = element.value;

    h1.innerHTML = randomNumber;
    h1.innerHTML += thisValue;
};

