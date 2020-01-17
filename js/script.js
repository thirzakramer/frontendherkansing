/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console': 0*/         /*bron: veerle beeker*/

var knop = document.querySelector("button");
var bedankt = document.querySelector(".bedankt");
var formulier = document.querySelector(".formulier");

function click() {
//    if (bedankt.style.display === "none") {
//        bedankt.style.display = "block";
//        formulier.style.display = "none";
//    } 
//    else {
//        bedankt.style.display = "none";
//    }
    bedankt.classList.remove('hide');
    bedankt.classList.add('show');
    formulier.classList.remove('show');
    formulier.classList.add('hide');
}

knop.addEventListener('click', click);

/**************/
/*USED SOURCES*/
/**************/
/*
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
*/