function showOrNot() {
    var x = document.getElementById("choosePlan");
    if (x.value == 'standard') {
        document.getElementById("forStandard").style.display = "block";
        document.getElementById("forBusiness").style.display = "none";
        document.getElementById("forPro").style.display = "none";
    } else if (x.value == 'pro') {
        document.getElementById("forPro").style.display = "block";
        document.getElementById("forStandard").style.display = "none";
        document.getElementById("forBusiness").style.display = "none";
    } else if (x.value == 'business') {
        document.getElementById("forBusiness").style.display = "block";
        document.getElementById("forPro").style.display = "none";
        document.getElementById("forStandard").style.display = "none";
    } else {
        document.getElementById("forPro").style.display = "none";
        document.getElementById("forStandard").style.display = "none";
        document.getElementById("forBusiness").style.display = "none";
    }
}

function check() {
    var y = document.getElementById("choosePlan");
    if (y.value == 1) {
        alert("Please select a plan.")
    }
}

function termsAndCondCheck() {
    var z = document.getElementById("t&cCheck");
    if (z.checked == false) {
        document.getElementById("submitForm").disabled = true;
    } else if (z.checked == true) {
        document.getElementById("submitForm").disabled = false;
    }
}

setInterval("showOrNot()", 1);
setInterval("termsAndCondCheck()", 1);
document.getElementById("submitForm").addEventListener("click", check);