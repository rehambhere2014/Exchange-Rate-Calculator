
const currencyOne =document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');
const amountOne = document.getElementById('amount-one');
const amountTwo = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap')
function calculate(){
    const currencyOneEl = currencyOne.value;
    const currencyTwoEl = currencyTwo.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOneEl}`)
    .then(res=>res.json())
    .then(data =>  {

           let rate=  data.rates[currencyTwoEl];

             rateEl.innerText = `1 ${currencyOneEl} = ${rate} ${currencyTwoEl}`;
            amountTwo.value = (amountOne.value*rate).toFixed(2)
    })

 

}

swap.addEventListener('click',()=>{

    let temp = currencyOne.value;
    currencyOne.value = currencyTwo.value
    currencyTwo.value=temp;
    calculate();
})
currencyOne.addEventListener('change',calculate);
amountOne.addEventListener('input', calculate);
currencyTwo.addEventListener('change',calculate);
amountTwo.addEventListener('input', calculate);



calculate();