//! klaz js
// const gambarUtama = document.querySelector('.gambarUtama');
// const gambarThumbnails = document.querySelectorAll('.gambarThumb');

// gambarThumbnails.forEach(function(gambarThumbnail){
//     gambarThumbnail.addEventListener('click', function(e){
//         let valueSrc = e.target.getAttribute('src');
//         gambarUtama.setAttribute('src', valueSrc);
//     })
// })


//! wpu js
const gambarUtama = document.querySelector('.gambarUtama');
const gambarThumbnails = document.querySelectorAll('.gambarThumb');
const container = document.addEventListener('click', function(e){

    //? mengecek apakah yang di klik adalah gambarThumb
    if(e.target.className == 'gambarThumb'){
        gambarUtama.src = e.target.src;        //? mengubah nilai src pada gambarUtama menjadi src dari gambarThumb yang di klik
        gambarUtama.classList.add('fade');     //? menambahkan kelas
        setTimeout(function() {
            gambarUtama.classList.remove('fade');
        }, 500)  //? 500 milisecond

        //? menghilangkan efek class .active
        gambarThumbnails.forEach(function(gambarThumb){
            //* cara 1
            // if(gambarThumb.classList.contains('active')){  //? constains artinya apakah class ini ada pada element tersebut
            //     gambarThumb.classList.remove('active');
            // }

            //* cara 2 : memaksa semua kelas untuk menghilangkan class .active
            gambarThumb.className = 'gambarThumb';
        })

        //? membuat opacity/tanda bahwa gambar itu yang sedang aktif jika gambarThumb di klik
        e.target.classList.add('active');  
    }
});

