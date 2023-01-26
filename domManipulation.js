// ! LATIHAN DOM MANIPULATION 
// ! Manipulasi Element
// * 1. .innerHTML : mengubah isi/teks dari element yang di tangkap. 
// const judul = document.getElementById('judul');
// judul.innerHTML = "Muhammad Abdanul ikhlas"

 // ? Bisa menambahkan tag html jg
// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = "<div><p>Paragraf 1</p></div>"



// * 2. element.style.<propertyCSS> : memanipulasi seperti css
// const judul = document.getElementById('judul');
// judul.style.backgroundColor = 'lightblue';

// * 3. element.settAttribute('<namaAtribut>', 'value') : bisa menambahkan atribut
// judul.setAttribute('name', 'Klaz');

// * 4. element.getAttribute('<namaatribuite>') : bisa mengetahui isi atribut
// const a = document.querySelector('section#a a');
// a.getAttribute('href'); 

// * 5. element.removeAttribute('<namaatribuite>') :  menghilangkan atribut
//a.removeAttribute('href');

// * 6. element.classList() : menambahkan serta memanipulasi class baru tanpa menimpa class lama
// const p2 = document.querySelector('.p2');

// p2.classList // ? menampilkan ada kelas apa aja pada element tersebut
// p2.classList.add('label'); // ? menambah value class tanpa menimpa class lama
// p2.classList.remove('label') // ? menghapus class
// p2.classList.toggle('label'); // ? menambahkan class jika belum ada , dan menghapus jika class sudah ada
// p2.classList.item(2) // ? menampilkan class yg ada pada element pada urutan ke 3 (index 2)
// p2.classList.contains('label') // ? untuk mengetahui apakah class label ada pada element tersebut
// p2.classList.replace('label', 'tanda') // ? replace class label menjadi tanda




// ! Manipulasi Node
// *** Contoh 1 | Membuat elemen baru yang di simpan di akhir tujuan
// * Membuat element dan text baru 
const pBaru = document.createElement('p'); // ? Membuat element baru
const textPBaru = document.createTextNode('Paragraf Baru'); // ? Membuat text yang akan di masukkan ke dalam element baru diatas

// * menyimpan text ke dalam paragraf/elemen baru
pBaru.appendChild(textPBaru);

// * simpan elemen baru yang sudah dibuat (pBaru) di tempat yang dituju (sectionA)
const sectionA = document.getElementById('a'); // ? mengambil terlebih dahulu tempatnya yang dituju
sectionA.appendChild(pBaru); // ? menyimpan element baru yang sudah (pBaru) di buat ke akhir tempat tujuan (sectionA)



// *** Contoh 2 | Membuat elemen baru dan di sisipkan di tujuan
// ? menyimpan li baru di antara li item 1 dan item 2
const liBaru = document.createElement('li');  // ? membuat li baru
const textLiBaru = document.createTextNode('item baru'); // ? membuat text baru 
liBaru.appendChild(textLiBaru); // ? memasukkan text baru ke li baru

// ? jika ingin menyisipkan maka harus menangkap wadah tujuan dan element yang akan menjadi setelahnya, karena bakal di sisipkan di before element tersebut
const ul = document.querySelector('section#b ul'); // ? menangkap ul di section b
const li2 = ul.querySelector('li:nth-child(2)'); // ? menangkap elemen yang akan menjadi elemen setelah li baru

ul.insertBefore(liBaru, li2); // ? menyisipkan elemen baru sebelum li2




// *** contoh 3 | Remove/menghapus node/elemen
const link = document.getElementsByTagName('a')[0]; // ? Menangkap elemen a
sectionA.removeChild(link); // ? menghapus node/element




// *** Contoh 4 | replace child
const sectionB = document.getElementById('b');     // ? menangkap section b
const p4 = sectionB.querySelector('p');      // ? menangkap paragraf pada section b : p4

const h2Baru = document.createElement('h2');     // ? membuat elemen baru h2 
const textH2Baru = document.createTextNode('Judul Baru');    // ? membuat text baru untuk h2

h2Baru.appendChild(textH2Baru);    // ? memasukkan text baru ke h2

sectionB.replaceChild(h2Baru, p4);  // ? replace p4 pada html dengan elemen baru yang sudah di buat (h2Baru)


pBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';


// *** Macam macam method manipulasi baru
/*
 * parentNode.append();      : memasukkan di akhir wadah
 * parentNode.prepend();     : memasukkan di awal wadah
 * childNode.before();       : menyisipkan sebelum element child
 * childNode.after();        : menyisipkan setelah element child
 * childNode.remove();       : menghapus elemen
 * childNode.replaceWith();  : replace element
*/


// *** Contoh 5 | latihan membuat section baru setelah section B
const container = document.getElementById('container');  // menangkap container
const sectionBaru = document.createElement('section');  // membuat section baru
sectionA.after(sectionBaru);  // menyisipkan section baru setelah section a

const judulSectionBaru = document.createElement('h1');  // membuat elemen judul baru untuk section baru
const textJudulSectionBaru = document.createTextNode('INI JUDUL SECTION YANG BARU DI BUAT');  // membuat text untuk jdul baru
judulSectionBaru.appendChild(textJudulSectionBaru);  // memasukkan text ke wadah judul baru
sectionBaru.appendChild(judulSectionBaru);  // memasukkan judul baru ke section baru

judulSectionBaru.style.backgroundColor = 'coral';


