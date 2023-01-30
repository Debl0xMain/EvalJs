export const ex2 = () => {
    var tablede = prompt('on veut la table des : ');
    var start = prompt('De');
    var end = prompt("jusqu'a");
    var numero = 0;
    var resultat = 0;

    $('#ex2insert').html("");

    const multi = (tablede) => {
        do{
            numero++;
            resultat = start * tablede ;
            var div = document.createElement("div");
            div.className += 'resultat-'+numero;
            var newContent = document.createTextNode(tablede + "*" + start + "=" + resultat );
            div.appendChild(newContent);
            var currentDiv = document.getElementById('div1');
            let insert = document.getElementById("ex2insert");
            insert.insertBefore(div, currentDiv);
            start++;
        }while(start<=end);
    }
    
    multi(start);
}