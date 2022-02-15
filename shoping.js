


function updateProductNumber(product,price,incricing) {
    
    const productInput = document.getElementById(product+'-number');
    let productNumber = productInput.value;
  
    if (incricing == true) {
        productNumber  = Number(productNumber) + 1;
    } else if(productNumber> 0) {
        productNumber = Number(productNumber) - 1;
    }
    productInput.value = productNumber;
    const productTotal= document.getElementById(product+'-total');
    productTotal.innerText = productNumber * price;
   

    calculateTotal();

    
}




function getInputValue(product) {
    const productInput = document.getElementById(product+'-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
};

function calculateTotal () {
  
    const phoneTotal =  getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // update on the subtotal 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('sub-text').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
    
};







// this is descrising part start 
document.getElementById('phone-pluse').addEventListener('click', function () {

    updateProductNumber('phone',1219,true)
    
})

document.getElementById('phone-mainus').addEventListener('click', function () {
    updateProductNumber('phone',1219,false)
})



// this is incrising part 

document.getElementById('case-plus').addEventListener('click', function () {
    
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = Number(caseNumber) + 1;
    updateProductNumber('case',59,true);
});
document.getElementById('case-mainac').addEventListener('click', function () {
   
    // const caseInput = document.getElementById('case-number');
    // const caseNumber = caseInput.value;
    // caseInput.value = Number(caseNumber) - 1;
    updateProductNumber('case',59,false);
    
});