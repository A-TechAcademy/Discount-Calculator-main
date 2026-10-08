function calculateDiscount() {
    let salesPrice = document.getElementById("bill").value
    let discountPercent = document.getElementById('discount').value
    let discountCalculation = (salesPrice * discountPercent) / 100
    let discount = "Your discount is N" + discountCalculation
    let totalPayment = salesPrice - discountCalculation
    let total = "You will pay N" + totalPayment
    document.getElementById('result').innerHTML = discount
    document.getElementById('total').innerHTML = total
}