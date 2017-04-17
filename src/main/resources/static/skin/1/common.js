//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ��������� common.js : 2008-05
// �����۾� : ������ ( 208-05-03)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var event = window.event;
function bluring(){ 
	try{
		if(event.srcElement.tagName=="A"||event.srcElement.tagName=="IMG") document.body.focus(); 
	}catch(e){}
} 
document.onfocusin=bluring;
function MM_preloadImages() { 
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
  var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
  if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;}
function MM_findObj(n, d) { 
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}
function MM_swapImage() { var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

//selectbox �̹��� ó��
function setCommonSelectBox(selName){
	sel = eval("document.all."+selName);
	borderColor = sel.bordercolor;
	selWidth = parseInt(sel.width);
	bgColor = sel.bgcolor;
	rectLeft = selWidth-2;
	spanWidth = selWidth;
//span tag
	header  = "<span style='position:relative;margin-bottom:-3px;";
	header += "width:"+spanWidth+";height:18px;border:1px solid "+borderColor+";background-color:"+bgColor+";'>\n";
	header += "<span style='position:absolute;top:-2px;";
	header += "width:"+selWidth+";height:17px;clip:rect(2,"+rectLeft+",18,2);'>\n";
	footer = "</span></span>";
	sel.style.backgroundColor = bgColor;
	sel.style.width = selWidth;
	sel.outerHTML = header+sel.outerHTML+footer;
}

//������ üũ
function BrowserCheck() {
 appname = navigator.appName;
 useragent = navigator.userAgent;
 if(appname == "Microsoft Internet Explorer") appname = "IE";
 IE55 = (useragent.indexOf('MSIE 5.5')>0);  //5.5 ����
 IE6 = (useragent.indexOf('MSIE 6')>0);     //6.0 ����

 if(appname=="IE" && IE55 || IE6) return verchk = 6; //�ͽ��÷η��̸鼭 5.5 or 6.0 �����̸�...
 else return verchk = 7;
}
BrowserCheck()



//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ��������� common.js : 2008-05
// �����۾� : ������ ( 208-05-03)
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function bluring(){ 
	try{
		if(event.srcElement.tagName=="A"||event.srcElement.tagName=="IMG") document.body.focus(); 
	}catch(e){}
} 
document.onfocusin=bluring;
function MM_preloadImages() { 
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
  var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
  if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;}
function MM_findObj(n, d) { 
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}
function MM_swapImage() { var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

//selectbox �̹��� ó��
function setCommonSelectBox(selName){
	sel = eval("document.all."+selName);
	borderColor = sel.bordercolor;
	selWidth = parseInt(sel.width);
	bgColor = sel.bgcolor;
	rectLeft = selWidth-2;
	spanWidth = selWidth;
//span tag
	header  = "<span style='position:relative;margin-bottom:-3px;";
	header += "width:"+spanWidth+";height:18px;border:1px solid "+borderColor+";background-color:"+bgColor+";'>\n";
	header += "<span style='position:absolute;top:-2px;";
	header += "width:"+selWidth+";height:17px;clip:rect(2,"+rectLeft+",18,2);'>\n";
	footer = "</span></span>";
	sel.style.backgroundColor = bgColor;
	sel.style.width = selWidth;
	sel.outerHTML = header+sel.outerHTML+footer;
}

//������ üũ
function BrowserCheck() {
 appname = navigator.appName;
 useragent = navigator.userAgent;
 if(appname == "Microsoft Internet Explorer") appname = "IE";
 IE55 = (useragent.indexOf('MSIE 5.5')>0);  //5.5 ����
 IE6 = (useragent.indexOf('MSIE 6')>0);     //6.0 ����

 if(appname=="IE" && IE55 || IE6) return verchk = 6; //�ͽ��÷η��̸鼭 5.5 or 6.0 �����̸�...
 else return verchk = 7;
}
BrowserCheck()


//#################################################################################################################################
//
//	�÷��� ��ũ��Ʈ
//
//#################################################################################################################################

function flash_logo(src,width,height){
	
	var name = "intro";
	var wid = width;
	var hei = height - 3;

	document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0" width="'+wid+'" height="'+hei+'" id="'+name+'" align="middle">');
	document.write('<param name="allowScriptAccess" value="always">');
	document.write('<param name="movie" value="'+src+'">');
	document.write('<param name="quality" value="high">');
	document.write('<param name="bgcolor" value="#ffffff">');
	document.write('<param name="wmode" value="transparent">');
	document.write('<param name="menu" value="false">');
	document.write('<embed src="'+src+'" quality="high" bgcolor="#ffffff" width="'+wid+'" height="'+hei+'" name="'+name+'" align="middle" allowscriptaccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer">');
	document.write('</object>');
}

function img_logo(src,width,height,id){
	
	var name = "intro";
	var wid = width;
	var hei = height - 3;
	document.write('<img src="'+src+'" name="'+name+'" width="'+wid+'" height="'+hei+'" id="'+id+'" border="0">');
}
