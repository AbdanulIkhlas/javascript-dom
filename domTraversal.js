//! Latihan DOM Traversal
/*
* Macam2 method DOM Traversal :
 * parentNode : mengembalikan node
 * parentElement : mengembalikan element
 * nextSibling : mengembalikan node
 * nextElementSibling : mengembalikan element
 * previousSibling : mengembalikan node
 * previousElementSibling : mengembalikan element
 
*/
//* Hanya bisa close 1 kontak
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click',function(){
//     card.style.display = 'none'
// });


//* implementasi DOM Traversal agar yang di klik yang terhapus
const close = document.querySelectorAll('.close');
// for(let i = 0; i < close.length; i++){
//     close[i].addEventListener('click',function(e){       
        // close[i].parentElement.style.display = 'none'; //? parentElement : mengambil parent nya
//         //? atau bisa seperti ini
//         e.target.parentElement.style.display = 'none';
//     });
// }

//? atau bisa seperti ini
close.forEach(function(element) {
    element.addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none';
    });
});


//? Contoh penggunaan method
const nama = document.querySelector('.nama');
console.log(nama.nextElementSibling);





