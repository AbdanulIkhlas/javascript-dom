//! Latihan DOM membuat game suwit jawa 2.0
// var ulang = true;
// do{
//     //! Menangkap pilihan player
//     var player = prompt('pilih : batu, gunting, atau kertas!!');
    
//     //! menagkap pilihan komputer
//     var com = Math.random(2); //? fungsi untuk mendapatkan bilangan random
//     if(com < 0.34){
//         com = 'kertas';
//     }else if (com >= 0.34 && com < 0.67){
//         com = 'batu';
//     }else{
//         com = 'gunting';
//     }
    
//     //! menentukan rules
//     if((com == 'kertas' && player == 'batu') || (com == 'batu' && player == 'gunting') || (com == 'gunting' && player == 'kertas')){
//         var hasil = 'Computer menang!!';
//     }else if((player == 'kertas' && com == 'batu') || (player == 'batu' && com == 'gunting') || (player == 'gunting' && com == 'kertas')){
//         var hasil = 'Kamu menang!!';
//     }else if(player == com){
//         var hasil = 'Serii!!';
//     }
    
//     //! tampilkan hasilnya
//     if((player == 'kertas') || (player == 'batu') || (player == 'gunting')){
//         alert(  "Kamu memilih           : " + player + 
//               "\nKomputer memilih    : " + com + 
//               "\nHasilnya                    : " + hasil
//               );
//     }else{
//         alert("Pilihlah sesuai ketentuan eek!!");
//     }
//     ulang = confirm('main lagi?');
// }while(ulang);