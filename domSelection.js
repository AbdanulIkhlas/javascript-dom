// ! DOM SELECTION

// * 1. document.getElementByID()  : mengembalikan element
// const judul = document.getElementById('judul'); // ? menangkap element dengan id : judul 
// judul.style.color = 'blue';
// judul.style.fontFamily = 'georgia';
// judul.style.backgroundColor = 'gray';
// judul.innerHTML = 'Klaz WEB';   // ? mengganti tulisan menjadi klaz web



// * 2. document.getElementsByTagName() : mengembalikan HTMLCollection / array
// const p = document.getElementsByTagName('p');
// p[2].style.backgroundColor = 'lightblue'; // ? harus menggunakan index
// ? untuk semua bisa menggunakan looping
// for(let i = 0; i < p.length; i++){
//     p[i].style.backgroundColor = 'lightblue';
// }

// ? bisa juga seperti ini
// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = '50px';



// * 3. document.getElementsByClassName : mengembalikan HTMLCollection / array
// const p1 = document.getElementsByClassName('p1');
// p1[0].innerHTML = 'Ini diubah dari javascript'; // ? mengubah isi text/tulisan pada html



// * 4. document.querySelector() : mengembalikan element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector("section#b ul li:nth-child(2)");
// li2.style.backgroundColor = 'orange';

// * 5. document.querySelectorAll() : mengembalikan nodeList
// const p = document.querySelectorAll('p');
// for(let i = 0; i < p.length; i++){
//     p[i].style.backgroundColor = 'lightblue';
// }



