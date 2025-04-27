const konversiinput = document.getElementById('konversi-input');
const resultinput = document.getElementById('result-input');
const textkalkulasi = document.getElementById('cara-kalkulasi')
const convertBtn = document.getElementById('bg-1');
const resetBtn = document.getElementById("bg-2");
const reverseBtn = document.getElementById('bg-3');

function konversi(){
    const celcius = parseFloat(konversiinput.value);
    if(isNaN(celcius)){
        alert("masukkan angka yang valid!")
        return;
    }
    // hitung konversi
    const fahrenheit = (celcius * 9/5 + 32).toFixed(2);
    resultinput.value = fahrenheit;

    // cara penyelesaian
    textkalkulasi.value = `Untuk mengubah ${celcius} °C ke fahrenheit, kalikan ${celcius} °C dengan 9/5 (hasilnya ${(celcius * 9/5).toFixed(2)}°C), lalu tambahkan 32. Hasil akhirnya adalah ${fahrenheit}°F`;
    // "Untuk mengubah 12°C ke Fahrenheit, kalikan 12 dengan 9/5 (hasilnya 21.6), lalu tambahkan 32. Hasil akhirnya adalah 53.6°F."
}


convertBtn.addEventListener('click',konversi);

konversiinput.addEventListener('keyup',function(e){
    if(e.key ==='Enter'){
        konversi();
    }
});

function resetFields() {
    konversiinput.value = '';
    resultinput.value = '';
    textkalkulasi.value ='';
    konversiinput.focus();
}

resetBtn.addEventListener('click',resetFields);

