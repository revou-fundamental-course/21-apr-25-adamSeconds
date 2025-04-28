const konversiinput = document.getElementById('konversi-input');
const resultinput = document.getElementById('result-input');
const textkalkulasi = document.getElementById('cara-kalkulasi')
const convertBtn = document.getElementById('bg-1');
const resetBtn = document.getElementById("bg-2");
const reverseBtn = document.getElementById('bg-3');

let isReversed = false; //Status arah konversi
let celciusLabel = document.querySelector('label[for="konversi-input"]');
let fahrenheitLabel = document.querySelector('label[for="result-input"]');


function konversi(){
    const nilaiInput = parseFloat(konversiinput.value);
    if(isNaN(nilaiInput)){
        alert("masukkan angka yang valid!")
        return;
    }
    if(isReversed){
        //konversi Fahrenheit ke Celcius
        const celcius = ((nilaiInput - 32)*5/9).toFixed(2);
        resultinput.value = celcius;
        
        //Cara Penyelesaian Fahrenheit ke Celcius
        textkalkulasi.value = `Untuk mengubah ${nilaiInput}°F ke Celcius, kurangi ${nilaiInput}°F dengan 32 (hasilnya ${(nilaiInput - 32).toFixed(2)}°F), lalu kalikan 5/9. Hasil akhirnya adalah ${nilaiInput}°C`
    }else{
        //konversi Celcius ke fahrenheit 
        const fahrenheit = (nilaiInput * 9/5 + 32).toFixed(2);
        resultinput.value = fahrenheit;

        //Cara Penyelesaian Celcius ke fahrenheit
        textkalkulasi.value = `Untuk mengubah ${nilaiInput}°C ke Fahrenheit, kalikan ${nilaiInput}°C dengan 9/5 (hasilnya ${(nilaiInput * 9/5).toFixed(2)}°C), lalu tambahkan 32. Hasil akhirnya adalah ${nilaiInput}°F`;
    }
}

function tukarLabel(){
    isReversed = !isReversed;

    //menukar label
    if(isReversed){
        celciusLabel.innerHTML = 'Fahrenheit (°F):';
        fahrenheitLabel.innerHTML = 'Celcius (°C):';
    }else{
        celciusLabel.innerHTML = 'Celcius (°C):';
        fahrenheitLabel.innerHTML = 'Fahrenheit (°F):';
    }

    // kosongkan konversi input
    fungsiReset();
    
}

function fungsiReset() {
    konversiinput.value = '';
    resultinput.value = '';
    textkalkulasi.value ='';
    konversiinput.focus();
}

// EventListener
convertBtn.addEventListener('click',konversi);
reverseBtn.addEventListener('click',tukarLabel);
resetBtn.addEventListener('click',fungsiReset);


konversiinput.addEventListener('keyup',function(e){
    if(e.key ==='Enter'){
        konversi();
    }
});

