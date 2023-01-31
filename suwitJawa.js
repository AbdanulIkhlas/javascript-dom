//! Latihan DOM membuat game suwit jawa 2.0
function getPilihanKomputer(){
    const com = Math.random(2); //? fungsi untuk mendapatkan bilangan random
    if(com < 0.34) return 'gajah';
    if (com >= 0.34 && com < 0.67)return 'orang';
    return 'semut';
}

function getHasil(comp, player){
    if( player == comp ) return'SERI!';
    if( player == 'gajah' ) return( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) return( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'semut' ) return( comp == 'orang' ) ? 'KALAH!' : 'MENANG!';
    
}

function putar(){
    const imgComputer = document.querySelector('.img-komputer');
    const gambar = ['gajah', 'semut', 'orang'];
    let i = 0; //? let : deklarasi variabel yang akan berubah2 isinya
    const waktuMulai = new Date().getTime(); //? untuk mendapatkan waktu saat itu
    setInterval(function(){     //? TIMING FUNCTION
        if(new Date().getTime() - waktuMulai > 1000){
            clearInterval;   //? memberhentikan interval
            return;
        }
        imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
        if(i == gambar.length) i = 0;
    },100) //? fungsi untuk melakukan waktu secara berulang2 | 100 artinya setiap 0.1 detik di putar
}

//* efefktif
const pilihan = document.querySelectorAll('li img');
const scoreComputer = document.querySelector('.score-komputer');
const scorePlayer = document.querySelector('.score-player');
let totalScoreCom = 0;
let totalScorePlayer = 0;
pilihan.forEach(function(pil){  //? pil : merepresentasikan 1 img saja tetapi berulang 3 kali
    pil.addEventListener('click', function(){   //? agar yang tampil cmn yang di click saja
        const pilihanComputer = getPilihanKomputer();
        const pilihanPlayer = pil.className;  //? mengambil nama kelas
        const hasil = getHasil(pilihanComputer, pilihanPlayer);
        putar();
        setTimeout(function(){  //? menunggu fungsi putar selesai trus jalan kan function ini
            const imgComputer = document.querySelector('.img-komputer');
            imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png'); //? mengganti gambar pilihan komputer
    
            const info = document.querySelector('.info');
            info.innerHTML = hasil; //? mengisi tulisan pada class info
            
            if(hasil == 'MENANG!' ){
                totalScorePlayer++;
            }else if(hasil == 'KALAH!'){
                totalScoreCom++;
            }
            scorePlayer.innerHTML = totalScorePlayer;
            scoreComputer.innerHTML = totalScoreCom;
        },1000);  //? 1000 mksdnya selama 1 detik

    })
})








// * kurang efektif
// const playerGajah = document.querySelector('.gajah');
// playerGajah.addEventListener('click', function(){
//     const pilihanComputer = getPilihanKomputer();
//     const pilihanPlayer = playerGajah.className;  //? mengambil nama kelas
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png'); //? mengganti gambar pilihan komputer

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil; //? mengisi tulisan pada class info


// });

// const playerOrang = document.querySelector('.orang');
// playerOrang.addEventListener('click', function(){
//     const pilihanComputer = getPilihanKomputer();
//     const pilihanPlayer = playerOrang.className;  //? mengambil nama kelas
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png'); //? mengganti gambar pilihan komputer

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil; //? mengisi tulisan pada class info


// });

// const playerSemut = document.querySelector('.semut');
// playerSemut.addEventListener('click', function(){
//     const pilihanComputer = getPilihanKomputer();
//     const pilihanPlayer = playerSemut.className;  //? mengambil nama kelas
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComputer = document.querySelector('.img-komputer');
//     imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png'); //? mengganti gambar pilihan komputer

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil; //? mengisi tulisan pada class info


// });


















// var tanya = true;
// while( tanya ) {
//     // menangkap pilihan player
//     var p = prompt('pilih : gajah, semut, orang');

//     // menangkap pilihan computer
//     // membangkitkan bilangan random
//     var comp = Math.random();

//     if( comp < 0.34 ) {
//         comp = 'gajah';
//     } else if( comp >= 0.34 && comp < 0.67 ) {
//         comp = 'orang';
//     } else {
//         comp = 'semut';
//     }

//     // menentukan rules
    

//     // tampilkan hasilnya
//     alert('Kamu memilih : ' + p + ' dan Komputer memilih : ' + comp + '\nMaka hasilnya : Kamu ' + hasil);

//     tanya = confirm('lagi?');
// }

// alert('terimakasih sudah bermain.');
