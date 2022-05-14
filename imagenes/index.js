var visitas=localStorage.getItem("visitas");
if(visitas){
  aumento=parseInt(visitas)+1;
  localStorage.setItem("visitas",aumento);
  document.getElementById("visitas").innerHTML=aumento;
}
else{
  localStorage.setItem("visitas",1);
  document.getElementById("visitas").innerHTML=1;
}

let date = new Date();

document.getElementById("fecha").innerHTML=date.toLocaleDateString();

function info1 (id){

document.write("hola");

}

                                                                                                                                                                                                             