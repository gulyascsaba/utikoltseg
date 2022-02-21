function Nyom(){
var kilometer = document.getElementById("ossztav").value;
var uzemanyagar = document.getElementById("uzemanyagar").value;
var utikoltseg=8*uzemanyagar*kilometer/100;
document.getElementById("1").innerHTML=utikoltseg;
var amortizacio=kilometer*15;
document.getElementById("2").innerHTML=amortizacio;
var osszkoltseg=amortizacio+utikoltseg;
document.getElementById("3").innerHTML=osszkoltseg;
}