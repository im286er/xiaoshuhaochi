'use strict';(function($){jQuery.fn.goTop=function(){var topage_top=$(this);if($(window).scrollTop()<1){topage_top.hide();}
$(window).scroll(function(){if($(this).scrollTop()>1){topage_top.fadeIn();}else{topage_top.fadeOut();}});this.bind('click',function(){$('html,body').animate({scrollTop:0},'slow');return false;});}})(jQuery);(function($){jQuery.fn.center=function(){return this.each(function(){var $this=$(this);$this.css({position:'fixed',top:($(window).height()-$this.height())/2,left:($(window).width()-$this.width())/2});$('.mask').css('height',$('body').height());});}})(jQuery);(function($){$.fn.focusImg=function(options){var opt=$.extend({},$.fn.focusImg.defaults,options);var focus=this;var li=this.children('.imgList').children('li');var li_len=li.length;var btn='';var btn_width=li_len*31;var index=0;var index_prev=li.length-1;var picTimer;btn+='<ul class="countNum" style="width:'+btn_width+'px">';for(var i=0;i<li_len;i++){btn+='<li>'+(i+1)+'</li>';}
btn+="</ul>";focus.append(btn);$(".countNum li").bind(opt.event,function(){index=$(".countNum li").index(this);if(!$(this).hasClass('current')){showPics(index);}}).eq(0).trigger(opt.event);if(opt.speed!=0){this.mouseenter(function(){clearInterval(picTimer);});this.mouseleave(function(){picTimer=setInterval(function(){index++;if(index==li_len){index=0;}
showPics(index);},opt.speed);});}
function showPics(index){li.eq(index_prev).css({'zIndex':1}).stop(false,true).animate({opacity:0},'slow');li.eq(index).css({'zIndex':9}).stop(false,true).animate({opacity:1},'slow');$(".countNum li").removeClass('current').eq(index).addClass('current');index_prev=index;}}
$.fn.focusImg.defaults={speed:3000,event:'mouseover'}})(jQuery);(function($){$.fn.rollImg=function(options){var opt=$.extend({},$.fn.rollImg.defaults,options);var roll=this;var roll_ul=this.children('ul');var roll_li=this.children('ul').children('li');var width=roll_li.width()+10;var len=roll_li.length;var index=0;var ul_width=width*len;var picTimer;roll_ul.width(width*len);$('.rollImg_preNext').hover(function(){$(this).stop(true,false).fadeTo('300',0.6);},function(){$(this).stop(true,false).fadeTo('300',0.4);});$('.rollImg_pre').click(function(){index-=1;if(index<0){index=len-5;}
showPics(index);});$('.rollImg_next').click(function(){index+=1;if(len-index<5){index=0;}
showPics(index);});function showPics(index){var nowLeft=-(index*width);roll_ul.stop(true,false).animate({"left":nowLeft},300);$(".rollImg_btn span").stop(true,false).fadeTo('300',0.4).eq(index).stop(true,false).fadeTo('300',1);}}
$.fn.rollImg.defaults={event:'click'}})(jQuery);