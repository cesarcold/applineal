var subcategorias=[["Cápsulas","0a7298"],["Tostado","fecd0a"],["Soluble","ff0000"],["Infusiones","6ead3c"]];
var subcategorias2=[["Cápsulas","0a7298"],["Soluble","ff0000"],["Tostado","fecd0a"],["Infusiones","6ead3c"]];
var segmentos=[
	[["NDG","COMP. NDG","COMP. nespresso","tassimo","resto sist."],"0a7298"],
	[["grano","molido"],"fecd0a"],
	[["cereal soluble","mainstream","alta gama","especialidades"],"ff0000"],
	[["Infusiones"],"6ead3c"]
			  ]

var segmentos2=[
	[["NDG","COMP. NDG","COMP. nespresso","tassimo"],"0a7298"],
	[["grano","molido"],"a97733"],
	[["cereal soluble","mainstream","alta gama","especialidades"],"ff0000"],
	[["Infusiones"],"6ead3c"]
			  ]

var analisis=[["Tasa de morralla","8a98a4"],["SEGMENTO SOBREDIMENSIONADO","3c84a0"],["SEGMENTO INFRADIMENSIONADO","c42c2e"]]
//var opcioneseditar=[["Tasa de morralla","7b858e"],["SKU’S SOBREDIMENSIONADAS","c2a633"],["SKU’s INFRADIMENSIONADAS","c32c2d"],["ALTAS","318bad"]]


var submenucatv=false;
function setuphome(){$(".botonhome").bind("click",startapp);}
function startapp(){ $(".teoricoactual").css("display","block");$(".homepage").css("display","none");$(".img").css("display","none").fadeIn("slow");
$(".teoricoactual .botonfooter").click(f_lineal1)				   				   }
function f_lineal1(){$(".lineal1").css("display","block");$(".teoricoactual").css("display","none");$(".img").css("display","none").fadeIn("slow");	$(".lineal1 .botonfooter").unbind("click").click(f_lineal2);}
function f_lineal2(){$(".lineal2").css("display","block");$(".lineal1").css("display","none");$(".img").css("display","none").fadeIn("slow");setupanalisis();
		$(".lineal2 .botonfooter").unbind("click").click(f_lineal3); }
function f_lineal3(){$(".lineal3").css("display","block");$(".lineal2").css("display","none");$(".img").css("display","none").fadeIn("slow");setupeditar();
 	$(".lineal3 .botonfooter").unbind("click").click(f_lineal4); }
function f_lineal4(){ $(".lineal4").css("display","block");$(".lineal3").css("display","none");$(".img").css("display","none").fadeIn("slow");
/*$(".teoricoactual .botonfooter").click(f_lineal1)	*/			   				   }

function select_tipo(t){
	$(".topselector").slideUp()
	switch(t){
		case 1:
			setupsubcategorias();
		break;
		case 2:
			setupsegmentos();
			break;
	}
	
}

function select_tipo2(t){
	$(".topselector").slideUp()
	switch(t){
		case 1:
			setupsubcategorias2();
		break;
		case 2:
			setupsegmentos2();
			break;
	}
	
}


function versubmenu(){$(".topselector").slideDown();if(submenucatv){$(".submenusubcategoria").animate({opacity:.2})}}
function setupsubcategorias(){

	$(".lineal1 .botonsubcat,.teoricoactual .botonsegmento").remove();
	$(".top2").slideDown();
	submenucatv=true;
	$(".hl img").remove();$(".hl").fadeOut();
	$(".lineal1 .top2 .subtitulo").html('PLANO DE MASAS POR SUBCATEGORÍA');
	for(i=0;i<subcategorias.length;i++){
	 $(".lineal1 .submenusubcategoria,.lineal .linealimg").css("opacity",1);
				$(".lineal1 .submenusubcategoria").append("<div class='botonsubcat' data-num='"+i+"' onclick='hlcategoria("+i+")'>"+subcategorias[i][0]+"</div>")
		
	}
	
}


function setupsubcategorias2(){

	$(".lineal4 .botonsubcat,.lineal4 .botonsegmento").remove();
	$(".top2").slideDown();
	submenucatv=true;
	$(".hl img").remove();$(".hl").fadeOut();
	$(".lineal4 .top2 .subtitulo").html('PLANO DE MASAS POR SUBCATEGORÍA');
	for(i=0;i<subcategorias2.length;i++){
	 $(".lineal4 .submenusubcategoria,.lineal4 .linealimg").css("opacity",1);
				$(".lineal4 .submenusubcategoria").append("<div class='botonsubcat' data-num='"+i+"' onclick='hlcategoria2("+i+")'>"+subcategorias2[i][0]+"</div>")
		
	}
	
}




function setupanalisis(){
 $(".top2").slideDown();
		for(i=0;i<analisis.length;i++){
	 $(".submenuanalisis,.linealimg").css("opacity",1);
				$(".submenuanalisis").append("<div class='botonanalisis' data-num='"+i+"' onclick='hlanalisis("+i+")'>"+analisis[i][0]+"</div>")
		
	}
	
}





function setupsegmentos(){
 
	$(".lineal1 .botonsubcat,.botonsegmento").remove();
		 $(".lineal1  .submenusubcategoria").css("opacity",0);
		$(".lineal1 .top2").slideDown();
	$(".lineal1 .hl img").remove();$(".lineal1 .hl").fadeOut();
		$(".lineal1 .top2 .subtitulo").html('PLANO DE MASAS POR SEGMENTOS');
		for(i=0;i<segmentos.length;i++){
			for(j=0;j<segmentos[i][0].length;j++){
	 $(".lineal1 .submenusegmentos,.lineal1 .linealimg").css("opacity",1);
 	$(".lineal1 .submenusegmentos").append("<div class='botonsegmento' data-num='"+i+"-"+j+"' onclick='hlsegmento("+i+","+j+")'>"+segmentos[i][0][j]+"</div>")
			}
	}
	
}


function setupsegmentos2(){
 
	$(".lineal4 .botonsubcat,.botonsegmento").remove();
		 $(".lineal4  .submenusubcategoria").css("opacity",0);
		$(".lineal4 .top2").slideDown();
	$(".lineal4 .hl img").remove();$(".lineal4 .hl").fadeOut();
		$(".lineal4 .top2 .subtitulo").html('PLANO DE MASAS POR SEGMENTOS');
		for(i=0;i<segmentos2.length;i++){
			for(j=0;j<segmentos2[i][0].length;j++){
			 
	 $(".lineal4 .submenusegmentos,.lineal4 .linealimg").css("opacity",1);
 	$(".lineal4 .submenusegmentos").append("<div class='botonsegmento' data-num='"+i+"-"+j+"' onclick='hlsegmento2("+i+","+j+")'>"+segmentos2[i][0][j]+"</div>")
	 
			}
	}
	
}


function highlightsubcat(n){
 

	$(".botonsubcat[data-num="+n+"]").css("background-color","#"+subcategorias[n][1]);
	
}

function highlightsubcat2(n){
 

	$(".botonsubcat[data-num="+n+"]").css("background-color","#"+subcategorias2[n][1]);
	
}

function highlightsegmento(n,m){
 

	$(".botonsegmento[data-num="+n+"-"+m+"]").css("background-color","#"+segmentos[n][1]);
	
	}

function highlightsegmento2(n,m){
 

	$(".botonsegmento[data-num="+n+"-"+m+"]").css("background-color","#"+segmentos2[n][1]);
	
}

 

function highlightanalisis(n){
 

	$(".botonanalisis[data-num="+n+"]").css("background-color","#"+analisis[n][1]);
	
}


function hlcategoria(n){
	if($(".lineal1 .hl"+n).is(":visible")){
		$(".botonsubcat[data-num="+n+"]").css("background-color","#525558");
$(".lineal1 .hl"+n+" img").remove();$(".lineal1 .hl"+n).fadeOut();
		
	}else{
setTimeout(function(){$(".linealimg").animate({opacity:.2});$(".hl"+n).fadeIn().append("<img src='img/info"+n+".png' class='info info"+n+"'>");},100);
		setTimeout(function(){$(".info"+n).toggleClass('animate')},300)
		
	
		highlightsubcat(n)}
}

function hlcategoria2(n){
	if($(".lineal4 .hl"+n).is(":visible")){
		$(".lineal4 .botonsubcat[data-num="+n+"]").css("background-color","#525558");
$(".lineal4 .hl"+n+" img").remove();$(".lineal4 .hl"+n).fadeOut();
		
	}else{
setTimeout(function(){$(".lineal4 .linealimg").animate({opacity:.2}); },100);
		$(".lineal4  .hl"+n).fadeIn()
	 		highlightsubcat2(n)}
}



function hlsegmento(n,m){
if($(".hl"+n+"-"+m).is(":visible")){
$(".hl"+n+"-"+m+" img").remove();$(".hl"+n+"-"+m).fadeOut();
	 $(".botonsegmento[data-num="+n+"-"+m+"]").css("background-color","#525558");
	   }else{
	
 setTimeout(function(){$(".linealimg").animate({opacity:.2});$(".hl"+n+"-"+m).fadeIn().append("<img src='img/info_"+n+"-"+m+".png' class='info info"+n+"-"+m+"'>"); $(".info"+n+"-"+m).css("position","absolute")},100);
			setTimeout(function(){$(".info"+n+"-"+m).toggleClass('animate')},300)
		   ;highlightsegmento(n,m)}

}


function hlsegmento2(n,m){
if($(".hl"+n+"-"+m).is(":visible")){
$(".hl"+n+"-"+m+" img").remove();$(".hl"+n+"-"+m).fadeOut();
	 $(".botonsegmento[data-num="+n+"-"+m+"]").css("background-color","#525558");
	   }else{
	
 setTimeout(function(){$(".linealimg").animate({opacity:.2});$(".hl"+n+"-"+m).fadeIn().append("<img src='img/2info_"+n+"-"+m+".png' class='info info"+n+"-"+m+"'>"); $(".info"+n+"-"+m).css("position","absolute")},100);
			setTimeout(function(){$(".info"+n+"-"+m).toggleClass('animate')},300)
		   ;highlightsegmento2(n,m)}

}




function hlanalisis(n){
	if($(".an"+n).is(":visible")){
		$(".botonanalisis[data-num="+n+"]").css("background-color","#525558");
$(".an"+n+" img").remove();$(".an"+n).fadeOut();
		
	}else{
setTimeout(function(){$(".linealimg").animate({opacity:.2});$(".an"+n).fadeIn() ;},100);highlightanalisis(n)}
}

	var canvas ;
var ctx ;	 
 var canvashtml='<canvas id="canvas1" width="1920" height="894"></div>';

function oscurecerlineal(img){
	canvas = document.getElementById('canvas1');
 ctx = canvas.getContext('2d');	 
	
	imgr=img.split(".png");
	img=imgr.join("b.png");
 
	$('#canvas1').clearCanvas();/*ctx.filter = 'grayscale() brightness(.2)';*/$('#canvas1').drawImage({  source: img,width: 1920, x: 960, y: 432,
  height: 864});}

function loading(t){	$(".lineal3").append("<div class='loader'><img src='img/5.svg'><div class='loadertxt'>"+t+"</div></div>");}
function quitarloading(){$(".loader").fadeOut('fast','',function(){$(".loader").remove();})}
function vertasamorralla(){$('#canvas1').remove();$(".lineal3 .img").append(canvashtml);$('#canvas1').drawImage({  source: 'img/lineal2.png',width: 1920, x: 960, y: 432,  height: 864});$(".lineal3 .top2 .vaciar").remove();$(".be1").unbind("click");$(".be2").fadeIn().click(verajustar1);}
function verskussobredimensionados(){	$('#canvas1').remove();$(".lineal3 .img").append(canvashtml);$('#canvas1').drawImage({  source: 'img/lineal4.png',width: 1920, x: 960, y: 432,  height: 864});$(".lineal3 .top2 .ajustar").remove();$(".be2").unbind("click");$(".be3").fadeIn().click(verajustar2);}
function verskusinfradimensionados(){	$('#canvas1').remove();$(".lineal3 .img").append(canvashtml);$('#canvas1').drawImage({  source: 'img/lineal6.png',width: 1920, x: 960, y: 432,  height: 864});$(".lineal3 .top2 .ajustar").remove();$(".be3").unbind("click");$(".be4").fadeIn().click(veranadir);}
function veraltas(){	$('#canvas1').remove();$(".lineal3 .img").append(canvashtml);$('#canvas1').drawImage({  source: 'img/lineal7.png',width: 1920, x: 960, y: 432,  height: 864});$(".lineal3 .top2 .anadir").remove();$(".be4").unbind("click"); }

function vervaciar1(){$(".lineal3 .top2").append("<div class='vaciar'>VACIAR</div>");$(".vaciar").slideDown().click(f_vaciar1)}
function verajustar1(){$(".lineal3 .top2").append("<div class='ajustar'>AJUSTAR</div>");$(".ajustar").slideDown().click(f_ajustar1);
	$('#canvas1').remove();$(".lineal3 .img").append(canvashtml);$('#canvas1').drawImage({  source: 'img/lineal3.png',width: 1920, x: 960, y: 432,  height: 864});}
function verajustar2(){$(".lineal3 .top2").append("<div class='ajustar ajustar2'>AJUSTAR</div>");$(".ajustar").slideDown().click(f_ajustar2);$('#canvas1').remove();$(".lineal3 .img").append(canvashtml);$('#canvas1').drawImage({  source: 'img/lineal5.png',width: 1920, x: 960, y: 432,  height: 864});}


function veranadir(){$(".lineal3 .top2").append("<div class='anadir'>AÑADIR</div>");$(".anadir").slideDown().click(f_anadir)}
function f_vaciar1(){loading('Eliminando Tasa Morralla');oscurecerlineal('img/lineal2.png');setTimeout(function(){quitarloading();vertasamorralla();},2000)}
function f_ajustar1(){loading('Ajustando SKU’s Sobredimensionadas');oscurecerlineal('img/lineal3.png');setTimeout(function(){quitarloading();verskussobredimensionados();},2000)}
function f_ajustar2(){loading('Ajustando SKU’s Infradimensionadas');oscurecerlineal('img/lineal5.png');setTimeout(function(){quitarloading();verskusinfradimensionados();},2000)}
function f_anadir(){loading('Ajustando altas');oscurecerlineal('img/lineal6.png');setTimeout(function(){quitarloading();veraltas();},2000)}

function setupeditar(){
canvas = document.getElementById('canvas1');
 ctx = canvas.getContext('2d');	 
$('#canvas1').drawImage({  source: 'img/lineal.png',width: 1920, x: 960, y: 432,  height: 864});
	$(".botoneditar").css("display","none");
 
	$(".be1").fadeIn().click(vervaciar1);
}


