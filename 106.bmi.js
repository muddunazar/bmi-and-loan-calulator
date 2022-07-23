
function CalculateBMI() {

    if (document.getElementById("weight").value != "" && document.getElementById("height").value != "") {
        if (document.getElementById("Age").value != "") {
            if (document.getElementById("male").checked || document.getElementById("female").checked) {
                document.getElementById("AltTxt").innerHTML = "";
                var Height = document.getElementById("height").value;
                var Weight = document.getElementById("weight").value;

                var bmi = Math.round(Weight / Math.pow((Height / 100), 2));
                bodytype(bmi);
            } else {
                document.getElementById("AltTxt").innerHTML = "Enter Your Gender".fontcolor("red");
            }

        } else {
            document.getElementById("AltTxt").innerHTML = "Enter Your Age".fontcolor("red");
        }
    } else {
        document.getElementById("AltTxt").innerHTML = "Fill the required fields".fontcolor("red");

    }
};
function ClearClick() {
    document.getElementById("Age").value = "";
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("result1").innerHTML = "";

}

function bodytype(bmi) {

    var bodytype = "";

    if (bmi < 18.5) {
        bodytype = "Under Weight";
    } else if (bmi >= 18.5 && bmi <= 24.5) {
        bodytype = "Healthy Weight".fontcolor("green");
    } else if (bmi > 24.5 && bmi <= 29) {
        bodytype = "over Weight".fontcolor("gold");
    } else if (bmi > 30) {
        bodytype = "obesity".fontcolor("red");
    }
    document.getElementById("result1").innerHTML = `BMI :- ${bmi}, ${bodytype}`;
}
