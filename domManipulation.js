// ! LATIHAN DOM MANIPULATION
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
const p2 = document.querySelector('.p2');

p2.classList // ? menampilkan ada kelas apa aja pada element tersebut
p2.classList.add('label'); // ? menambah value class tanpa menimpa class lama
p2.classList.remove('label') // ? menghapus class
p2.classList.toggle('label'); // ? menambahkan class jika belum ada , dan menghapus jika class sudah ada
p2.classList.item(2) // ? menampilkan class yg ada pada element pada urutan ke 3 (index 2)
p2.classList.contains('label') // ? untuk mengetahui apakah class label ada pada element tersebut
p2.classList.replace('label', 'tanda') // ? replace class label menjadi tanda


