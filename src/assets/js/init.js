// 统一页面长度控制，针对rem单位   
(function(doc,w){
	var d=doc.documentElement,re='orientationchange' in window?'orientationchange':'resize';
	var r=function(){
		var cw=d.clientWidth;
		if(!cw)
			return;
		d.style.fontSize=(cw/37.5)+'px';
	};
	if(!doc.addEventListener)
		return;
	w.addEventListener(re,r,false);
	doc.addEventListener('DOMContentLoaded',r,false);
})(document,window);
