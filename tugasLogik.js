// If else
let umur = 18;
let ketUmur;

if (umur > 21) {
    ketUmur = "Sudah Dewasa";
} else if (umur < 15) {
    ketUmur = "Masih Kecil";
} else {
    ketUmur = "Sudah Remaja";
}

console.log(`Saya ${ketUmur}`);


// Nested If
let nilai = 70;
let hasil;

if (nilai > 60) {
    if (nilai > 85) {
        hasil = "Lulus dengan nilai A";
    } else {
        hasil = "Lulus dengan nilai B";
    }
} else {
    hasil = "Tidak Lulus";
}

console.log(`Saya ${hasil}`);


// Switch Case
let skor = 4;
let resto;

switch (true) {
    case skor > 9:
        resto = "Bintang 5"
        break;
    case skor > 8:
        resto = "Bintang 4"
        break;
    case skor >= 5:
        resto = "Bintang 3"
        break;
    case skor < 5:
        resto = "Bintang 2"
        break;
    default:
        break;
}

console.log(`Restoran ${resto}`);


// for statement
let angka = 20;

for (let index = 0; index <= angka; index += 4) {
    console.log(`Angka ${index}`);
}


// While
let angka2 = 1;
let jumlah = 0;

while (angka2 < 11) {
    jumlah = jumlah + angka2;
    angka2 += 3;
}

console.log(`Hasil penjumlahan = ${jumlah}`); //Seharusnya output 1+4+7+10 = 22 


// Do While
let tampil = 1;

do {
    console.log("Saya Fans Manchester United")
} while (tampil < 1); //Seharusnya tampil 1 kali


// Function
function fans(nama, klub) {
    console.log(`Saya ${nama} dan saya bangga menjadi fans ${klub}`);
}

fans('Khaerul Anam', 'Manchester United');
