/*
* @Author: 新思
* @Date:   2017-01-19 13:51:14
* @Last Modified by:   新思
* @Last Modified time: 2017-01-19 13:55:00
*/

'use strict';

function setFontSize (){
	let gWidth=document.body.clientWidth,gPicWidth=750,gmax=gWidth/gPicWidth * 20;
	if(gmax>14) gmax=14;
	document.body.style.fontSize =gmax+'px';
	document.documentElement.style.fontSize = gmax +'px';
}

setFontSize()

window.addEventListener('resize', setFontSize)