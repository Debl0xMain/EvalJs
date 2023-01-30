import {ex1} from '/asset/js/eval1.js';
import {ex2} from '/asset/js/eval2.js';
import {ex3} from '/asset/js/eval3.js';
import {ex4} from '/asset/js/eval4.js';
import {checkform} from '/asset/js/eval5.js';
import {checkreset} from '/asset/js/eval5.js';

document.getElementById("launchex1").addEventListener("click", ex1);
document.getElementById("launchex2").addEventListener("click", ex2);
document.getElementById("launchex3").addEventListener("click", ex3);
document.getElementById("launchex4").addEventListener("click", ex4);
document.getElementById("submit").addEventListener("click", checkform);
document.getElementById("reset").addEventListener("click", checkreset);