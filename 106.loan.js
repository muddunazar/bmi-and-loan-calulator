function AmountChange() {
    document.getElementById("txtAmount").value = document.getElementById("rangeAmount").value;
}
function YearChange() {
    document.getElementById("txtYear").value = document.getElementById("rangeYear").value;
}
function RateChange() {
    document.getElementById("txtRate").value = document.getElementById("rangeRate").value;
}
function CalculateClick() {
    var P = parseInt(document.getElementById("txtAmount").value);
    var r = parseFloat(document.getElementById("txtRate").value) / 100;
    var n = parseInt(document.getElementById("txtYear").value) * 12;

    // princ * intr / (1 - (Math.pow(1/(1 + intr), term)))
    // var emi = p * r / (1 - (1 / (1 + r)) ** n)
    var emi = P * r / (1 - (Math.pow(1 / (1 + r), n)));
    document.getElementById("result").innerHTML = `You will have to pay an installation amount  <br><b>${Math.floor(emi)}</b> <br> --Every Year `;
}