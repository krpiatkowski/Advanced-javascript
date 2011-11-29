function showTotal(subtotal, shipping) {
   var total = calculateTotal(subtotal, shipping);
   showAmount(total);
}

function calculateTotal(total, shipping) {
   return total+shipping;
}

function showAmount(total) {
   console.log("$ "+total);
}

showTotal(120, 30);