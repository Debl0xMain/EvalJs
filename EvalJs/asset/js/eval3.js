export const ex3 = () => {
    var table = ["Audrey","Aurélien","Flavien","Jérémy"];
    var tablesup = "";
    var insert = prompt(table);
    var select = table.indexOf(insert);
    const sup = table.filter(tablesup = (f) => {return f !== insert});

    const creatediv = () => {
        var div = document.createElement("div");
        div.className += 'tableau';
        var newContent = document.createTextNode(table);
        div.appendChild(newContent);
        var currentDiv = document.getElementById('div');
        let insert = document.getElementById("ex3insert");
        insert.insertBefore(div, currentDiv);
    }

    const creatediv2 = () => {
        var div = document.createElement("table");
        div.className += 'tableau';
        var newContent = document.createTextNode(sup);
        div.appendChild(newContent);
        var currentDiv = document.getElementById('div');
        let insert = document.getElementById("ex3insert");
        insert.insertBefore(div, currentDiv);
    }
    
    const repeat = () => {
        if (insert != table[select]) {
            alert('Le nom rentre n a pas ete trouvé');
            creatediv();
        }
        else {
            alert(insert + " a été trouvé");
            sup.push('*');
            creatediv();
            creatediv2();
        }
    }
    repeat();
}