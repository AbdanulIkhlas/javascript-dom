// ! BELAJAR DOM EVENT
// ! event referensi : https://developer.mozilla.org/en-US/docs/Web/Events
// ** onclick : jika di klik | lewait oneline di html (event handler)
// const p3 = document.querySelector('.p3');
// function ubahWarnaP3(){
//     p3.style.backgroundColor = 'lightblue';
// }



// ** onclick | lewat java script (event handler)
// function ubahWarnaP2(){
//     p2.style.backgroundColor = 'lightblue';
// }

// const p2 = document.querySelector('.p2');
// p2.onclick = ubahWarnaP2;  // ? ketika di klik maka akan berubah backggroundnya



// ** onclick | menggunakan addEventListener();
// const p4 = document.querySelector('section#b p');
// let i = 0;
// p4.addEventListener('click', function(){
     // ? menambah list item baru di section B
//     i++;
//     const ul = document.querySelector('section#b ul');
//     const liBaru = document.createElement('li');
//     const textLiBaru = document.createTextNode('Item baru ' + i);
//     liBaru.appendChild(textLiBaru);
//     ul.appendChild(liBaru);
// });

// ! Perbedaan event handler dan litener yaitu:
/*
    * jika membuat 2 event handler yang sama, maka yang pertama akan di timpa
    * jika membuat 2 event menggunakan addListener, maka keduanya akan di jalan kan
*/
// * Contoh event handler
const p1 = document.querySelector('.p1')
// p1.onclick = function(){     // ? function ini akan di timpa oleh function setelahnya
//     p1.style.backgroundColor = 'lightgreen';
// }

// p1.onclick = function(){
//     p1.style.color = 'red';
// }

// * conoth event listener
// p1.addEventListener('click', function(){   // ? function tidak akan di timpa / akan di jalankan keduanya
//     p1.style.backgroundColor = 'lightgreen';
// })

// p1.addEventListener('click', function(){
//     p1.style.color = 'red';
// })

// ?? atau bisa juga bgini
p1.addEventListener('click', function(){   // ? function tidak akan di timpa / akan di jalankan keduanya
    p1.style.backgroundColor = 'lightgreen';
    p1.style.color = 'red';
})


