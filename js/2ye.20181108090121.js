(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=480){cw++;}if(w>=768){cw++;}if(w>=960){cw++;}if(w>=1200){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=1200){$('.js-519').attr('src', (dpi>1) ? 'images/webwxgetmsgimg-640.jpeg' : 'images/webwxgetmsgimg-320.jpeg');
$('.js-520').attr('src', (dpi>1) ? 'images/webwxgetmsgimg-1-640.jpeg' : 'images/webwxgetmsgimg-1-320.jpeg');}else if($(window).width()>=960){$('.js-519').attr('src', (dpi>1) ? 'images/webwxgetmsgimg-584.jpeg' : 'images/webwxgetmsgimg-292.jpeg');
$('.js-520').attr('src', (dpi>1) ? 'images/webwxgetmsgimg-1-564.jpeg' : 'images/webwxgetmsgimg-1-282.jpeg');}else if($(window).width()>=768){$('.js-519').attr('src', (dpi>1) ? 'images/webwxgetmsgimg-466.jpeg' : 'images/webwxgetmsgimg-233.jpeg');
$('.js-520').attr('src', (dpi>1) ? 'images/webwxgetmsgimg-1-452.jpeg' : 'images/webwxgetmsgimg-1-226.jpeg');}else if($(window).width()>=480){$('.js-519').attr('src', (dpi>1) ? 'images/webwxgetmsgimg-450.jpeg' : 'images/webwxgetmsgimg-225.jpeg');
$('.js-520').attr('src', (dpi>1) ? 'images/webwxgetmsgimg-1-448.jpeg' : 'images/webwxgetmsgimg-1-224.jpeg');}else{$('.js-519').attr('src', (dpi>1) ? 'images/webwxgetmsgimg-300.jpeg' : 'images/webwxgetmsgimg-150.jpeg');
$('.js-520').attr('src', (dpi>1) ? 'images/webwxgetmsgimg-1-298.jpeg' : 'images/webwxgetmsgimg-1-149.jpeg');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}

});