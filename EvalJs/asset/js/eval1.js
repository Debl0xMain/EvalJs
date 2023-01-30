export const ex1 = () => {
    var inf20 = 0;
    var int24 = 0;
    var sup40 = 0;
    var num = 0;
    var centenaire = 0;
    
    const createElement = () => {
        const div = document.getElementById('ex1insert');
        div.innerHTML =  "Nombre d'age rentré : " + num + '<br/>' +
        "Nombre de personne qui ont moins de 20 ans : " + inf20 + '<br/>' +
        "Nombre de personne qui ont entre 20 et 40 ans : " + int24 + '<br/>' +
        "Nombre de personne qui ont plus de 40 ans : " + sup40
        return div
        
    };

    for(centenaire=0;centenaire<1;) {
        num++
        var age = parseInt(prompt("age n°"+num));
        if (age<20){
            inf20++;
        }
        if (age >= 20 && age <= 40){
            int24++;
        }
        if (age>40 && age<100) {
            sup40++;
        }
        else if (age>=100) {
            centenaire++;
            sup40++;
            createElement()
        }
    };
};


