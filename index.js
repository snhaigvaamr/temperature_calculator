function temperature() {
    let inputValue = document.querySelector('#inputValue').value;
    let type1 = document.querySelector('#type1')
    let type2 = document.querySelector('#type2')
    let result = document.querySelector('#result')

    if (inputValue == "") {
        alert("please provide some values as input")
        location.reload();
    }
    else if (type1.value == 'celcius' && type2.value == 'celcius') {
        let celcius = Number.parseInt(inputValue) * 1
        result.innerHTML = celcius.toFixed(3) + `&deg;C`
    }
    else if (type1.value == 'celcius' && type2.value == 'fahrenheit') {
        let fahrenheit = Number.parseInt(inputValue) * (9 / 5) + 32
        result.innerHTML = fahrenheit.toFixed(3) + `&deg;F`
    }
    else if (type1.value == 'celcius' && type2.value == 'kelvin') {
        let kelvin = Number.parseInt(inputValue) + 273.15
        result.innerHTML = kelvin.toFixed(3) + `&deg;K`
    }
    else if (type1.value == "celcius" && type2.value == "rankine") {
        let Rankine = Number.parseInt(inputValue) * (9 / 5) + 491.67
        result.innerHTML = Rankine.toFixed(3) + " R"
    }
    else if (type1.value == 'fahrenheit' && type2.value == 'celcius') {
        let fahrenheit = Number.parseInt(inputValue) - 32 * (5 / 9)
        result.innerHTML = fahrenheit.toFixed(3) + `&deg;F`
    }
    else if (type1.value == "fahrenheit" && type2.value == "fahrenheit") {
        let fahrenheit = Number.parseInt(inputValue) * 1
        result.innerHTML = fahrenheit.toFixed(3) + " F"
    }
    else if (type1.value == "fahrenheit" && type2.value == "kelvin") {
        let kelvin = Number.parseInt(inputValue) - 32 * (5 / 9) + 273.15
        result.innerHTML = kelvin.toFixed(3) + " K"
    }
    else if (type1.value == "fahrenheit" && type2.value == "rankine") {
        let Rankine = Number.parseInt(inputValue) + 459.67
        result.innerHTML = Rankine.toFixed(3) + " R"
    }
    else if (type1.value == "kelvin" && type2.value == "celcius") {
        let celcius = Number.parseInt(inputValue) - 273.15
        result.innerHTML = celcius.toFixed(3) + ` &deg;C`
    }
    else if (type1.value == "kelvin" && type2.value == "fahrenheit") {
        let fahrenheit = Number.parseInt(inputValue) - 273.15 * (9 / 5) + 32
        result.innerHTML = fahrenheit.toFixed(3) + " F"
    }
    else if (type1.value == "kelvin" && type2.value == "kelvin") {
        let kelvin = Number.parseInt(inputValue) * 1
        result.innerHTML = kelvin.toFixed(3) + " K"
    }
    else if (type1.value == "kelvin" && type2.value == "rankine") {
        let Rankine = Number.parseInt(inputValue) * 1.8
        result.innerHTML = Rankine.toFixed(3) + " R"
    }
    else if (type1.value == "rankine" && type2.value == "celcius") {
        let celcius = Number.parseInt(inputValue) - 491.67 * (5 / 9)
        result.innerHTML = celcius.toFixed(3) + ` &deg;C`
    }
    else if (type1.value == "rankine" && type2.value == "fahrenheit") {
        let fahrenheit = Number.parseInt(inputValue) - 495.67
        result.innerHTML = fahrenheit.toFixed(3) + " F"
    }
    else if (type1.value == "rankine" && type2.value == "kelvin") {
        let kelvin = Number.parseInt(inputValue) * (5 / 9)
        result.innerHTML = kelvin.toFixed(3) + " K"
    }
    else if (type1.value == "rankine" && type2.value == "rankine") {
        let Rankine = Number.parseInt(inputValue) * 1
        result.innerHTML = Rankine.toFixed(3) + " R"
    }

}