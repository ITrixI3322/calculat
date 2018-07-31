var text = document.getElementById('text');
var equally = document.getElementById('equally');
var clear = document.getElementById('clear');

addElem('1');
addElem('2');
addElem('3');
addElem('4');
addElem('5');
addElem('6');
addElem('7');
addElem('8');
addElem('9');
addElem('0');
addElem('-');
addElem('plus');
addElem('multiply');
addElem('point');
addElem('divide');



function addElem(elem){
	document.getElementById(elem).addEventListener('click',()=>{
	text.value =text.value + document.getElementById(elem).innerHTML;
})
}

equally.addEventListener('click', ()=>{
	text.value = eval(text.value);

})
clear.addEventListener('click', ()=>{
	text.value = '';
})
