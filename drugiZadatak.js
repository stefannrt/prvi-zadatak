function matematika(a){
    var string = a;
    var res = new Function("return " + string) 
    alert(res(a));
    }
var i, counter = 0;
//var a = "(2+6) / 3"; //test brojevi
while (true){ //loop koji proverava da li je upisan izraz validan
    
var a = prompt("Upisite matematicki izraz");
    counter = 0
for(i = 0;i<a.length;i++){          //ide kroz ceo string i proverava da li je neki karakter koji nije broj nedozvoljeni operator, mozda postoji bolji nacin da se ovo napise?
    
   if(isNaN(a[i]) && (a[i] != '+' && a[i] != '-' && a[i] != '*' && a[i] != '(' && a[i] != ')' && a[i] != '/')){
       alert("Uneli ste neprihvaceni znak " + a[i]); //prikazuje korisniku nedozvoljeni znak
       counter++; 
   }
}
    if (counter == 0) break; // za slucaj da coutner koji se inkrementuje svakom greskom je na nuli program dozvoljava dalji tok.
}
matematika(a);