function user(){

    let name=prompt("ADINIZ: ")
    let myName=document.querySelector("#myName")//id si myName olanı innerHTML ile sayfaya yazdırdım
    myName.innerHTML=`${name}`

}

function currentTime(){

    let zaman=new Date()
    let saat=zaman.getHours()//saat
    let dakika=zaman.getMinutes()//dakika
    let saniye=zaman.getSeconds()//saniye
    let gun=zaman.getDay()//gun sayı cinsinden getirdiği için alt kisimda string olarak degistirdik

    if(gun==1){
        gun="Pazartesi"
    }
    else if(gun==2){
        gun="Salı"
    }
    else if(gun==3){
        gun="Çarşamba"
    }
    else if(gun==4){
        gun="Perşembe"
    }
    else if(gun==5){
        gun="Cuma"
    }
    else if(gun==6){
        gun="Cumartesi"
    }
    else if(gun==7){
        gun="Pazar"
    }

    saat=saat<10 ? "0" + saat : saat //ternary operatoru ile 10'dan kucuk olanlarin basina 0 ekledim
    dakika=dakika<10 ? "0" + dakika : dakika//ternary operatoru ile 10'dan kucuk olanlarin basina 0 ekledim
    saniye=saniye<10 ? "0" + saniye : saniye//ternary operatoru ile 10'dan kucuk olanlarin basina 0 ekledim
    
    let showTime=saat + ":" + dakika + ":" + saniye + " " + gun // istenilen formatta saat-dakika-saniye ve gun olarak yazdırdım
    let myClock=document.querySelector("#myClock")//id sini aldim
    myClock.innerHTML=`${showTime}`//innerHTML ile sayfaya yazdırdım

setTimeout(currentTime, 1000) // 1000 =>1 saniyeye eşittir. her saniye güncellenmesini sagladim

}

user()
currentTime()