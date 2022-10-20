let yosh = +prompt("Yoshingizni kiriting") ;

if (0 < yosh && yosh <= 18 ) {
    alert("Siz o'qishingiz kerak.");
} else if (18 < yosh && yosh <= 50){
    alert("Siz ishalshingiz kerak.");
}
 else if (50 < yosh && yosh <= 60){
    alert("Siz yaqinda nafaqaga chiqasiz.");
}
 else if (60 < yosh && yosh <= 150){
    alert("Siz tirik bo'lsangiz nafaqa olasiz.");
}else {
    alert("siz tirik emassiz");
}