//! mengubah background dengan klik tombol pertama
const button = document.getElementById('button1');
button.onclick = function(){
    // document.body.style.backgroundColor = 'lightblue'; //? mengubah background menjadi biru
    // document.body.setAttribute('class', 'biru-muda'); //? menambahkan class biru-muda
    document.body.classList.toggle('biru-muda'); //? menambahkan clas biru-muda jika class belum ada, dan menghapus jika sudah ada

}


//! membuat tombol baru
const buttonBaru = document.createElement('button');  
const textButtonBaru = document.createTextNode('Acak Warna');
const br = document.createElement('br');
buttonBaru.setAttribute('class', 'button');
buttonBaru.setAttribute('type', 'button');
buttonBaru.appendChild(textButtonBaru);
button.after(buttonBaru); //? menambahkan elemen yang baru di buat (buttonBaru) setelah elemen button

buttonBaru.addEventListener('click', function(){  //? function acak warna
    const red = Math.round(Math.random() * 255 + 1);  //? membangkitkan angka random 1 - 255 yang di bulatkan 
    const green = Math.round(Math.random() * 255 + 1);  //? membangkitkan angka random 1 - 255 yang di bulatkan 
    const blue = Math.round(Math.random() * 255 + 1);  //? membangkitkan angka random 1 - 255 yang di bulatkan 
    document.body.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
})


//! membuat slider pengganti warna
const sliderMerah = document.querySelector('input[name=sliderMerah]');
const sliderHijau = document.querySelector('input[name=sliderHijau]');
const sliderBiru = document.querySelector('input[name=sliderBiru]');

sliderMerah.addEventListener('input',function(){  //? input = mengetahui nilai ketika slider di geser secara realtime
    const r = sliderMerah.value;  //? untuk mengambil value pada sliderMerah
    const g = sliderHijau.value;  //? untuk mengambil value pada sliderHijau
    const b = sliderBiru.value;   //? untuk mengambil value pada sliderBiru
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
})

sliderHijau.addEventListener('input',function(){  
    const r = sliderHijau.value;  
    const g = sliderHijau.value;
    const b = sliderBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
})

sliderBiru.addEventListener('input',function(){  
    const r = sliderHijau.value;  
    const g = sliderHijau.value;
    const b = sliderBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
})



//! mengganti warna dengan menggerakkan curson
document.body.addEventListener('mousemove', function(event){
    //? posisi mouse 
    // console.log(event.clientX); //? sumbu x
    // console.log(event.clientY); //? sumbuy
    

    //? ukuran browser 
    // console.log(window.innerWidth); //? lebar browser
    // console.log(window.innerHeight); //? tinggi browser

    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +','+ 100 +')';
});
