function menu() {    
    if (document.getElementById('CF').checked){
        celcius()
    }
    else if (document.getElementById('FC').checked){
        farenheit()
    }
    else{
        alert('Selecione uma opção!')
    }
}


function celcius(){
    let x = document.getElementById("numberBox").value
    let y = (x * 1.8) + 32
    document.getElementById("textBox").innerHTML=y + (" °F");
}

function farenheit(){
    let x = document.getElementById("numberBox").value
    let y = (x - 32) * (5/9)
    document.getElementById("textBox").innerHTML=y.toFixed(2) + (" °C");
}

