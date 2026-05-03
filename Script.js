function convert() {
    let value = document.getElementById("inputValue").value;
    let type = document.getElementById("conversionType").value;
    let result = 0;

    if (value === "") {
        document.getElementById("result").innerText = "Enter a value";
        return;
    }

    value = parseFloat(value);

    switch (type) {
        case "cToF":
            result = (value * 9/5) + 32;
            break;
        case "fToC":
            result = (value - 32) * 5/9;
            break;
        case "kgToLb":
            result = value * 2.20462;
            break;
        case "mToKm":
            result = value / 1000;
            break;
    }