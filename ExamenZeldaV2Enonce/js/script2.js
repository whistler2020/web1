        /*fichier javascript: Script2.js
        Whistler Clermont
        Dernière modification : 22-05-2021 */

function valider(){
    var coderegional = document.forms["formref"]["inputText2"].value;
    if((coderegional == "819") || (coderegional == "418") || (coderegional == "514")){
        return true;
       }
    else{
        alert("Code regional incompatible. il faut que ce soit: 819 ou 418 ou 514");
        return false;
    }
}