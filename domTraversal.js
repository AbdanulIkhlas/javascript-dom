//! Latihan DOM Traversal
/*
* Macam2 method DOM Traversal :
 * parentNode : mengembalikan node
 * parentElement : mengembalikan element
 * nextSibling : mengembalikan node
 * nextElementSibling : mengembalikan element
 * previousSibling : mengembalikan node
 * previousElementSibling : mengembalikan element


 * macam2 aksi :
 * Prevent Deafult : menghentikan aksi default seperti a
 * Event Bubling | stopPropagation();

*/
//* Hanya bisa close 1 kontak
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click',function(){
//     card.style.display = 'none'
// });

//* implementasi DOM Traversal agar yang di klik yang terhapus
// const close = document.querySelectorAll('.close');
// for(let i = 0; i < close.length; i++){
//     close[i].addEventListener('click',function(e){       
        // close[i].parentElement.style.display = 'none'; //? parentElement : mengambil parent nya
//         //? atau bisa seperti ini
//         e.target.parentElement.style.display = 'none';
//     });
// }

//? atau bisa seperti ini  , tetapi masih kurang efektif karena ketika
//? menambahkan elment baru dari web/realtime , element baru tersebut tidak ada event click nya
// close.forEach(function(element) {
//     element.addEventListener('click', function(e){
//         e.target.parentElement.style.display = 'none';
//         e.preventDefault(); //?  menghentikan aksi default a (autorefresh)
//         e.stopPropagation(); //? event bubling : agar ketika klik close , event card tidak jalan
//     });
// });


//? Contoh penggunaan method
// const nama = document.querySelector('.nama');
// console.log(nama.nextElementSibling);


// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card){
//     card.addEventListener('click',function(e){  //? ketika klik card maka mengeluarkan notif ok
//         alert('ok');
//     });
// });




const container = document.querySelector('.container');
container.addEventListener('click', function(e){
    if(e.target.className == 'close'){    //? jika class element yang di klik adalah .close
        e.target.parentElement.style.display = 'none'; //? mengambil parentElement class .close  (.card) untuk di ubah display nya
        e.preventDefault();
    }
})

