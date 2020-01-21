var subcategorias=[["Cápsulas","0a7298"],["Tostado","fecd0a"],["Soluble","ff0000"],["Infusiones","6ead3c"]];
var segmentos=[
	[["NDG","COMP. NDG","COMP. nespresso","tassimo","resto sist."],"0a7298"],
	[["grano","molido"],"fecd0a"],
	[["cereal soluble","mainstream","alta gama","especialidades"],"ff0000"],
	[["Infusiones"],"6ead3c"]
			  ]

var analisis=[["Tasa de morralla","8a98a4"],["SEGMENTO SOBREDIMENSIONADO","3c84a0"],["SEGMENTO INFRADIMENSIONADO","c42c2e"]]

var submenucatv=false;
function setuphome(){$(".botonhome").bind("click",startapp);}
function startapp(){ $(".teoricoactual").css("display","block");$(".homepage").css("display","none");$(".img").css("display","none").fadeIn("slow");
$(".teoricoactual .botonfooter").click(f_lineal1)				   				   }
function f_lineal1(){$(".lineal1").css("display","block");$(".teoricoactual").css("display","none");$(".img").css("display","none").fadeIn("slow");	$(".lineal1 .botonfooter").unbind("click").click(f_lineal2);}
function f_lineal2(){$(".lineal2").css("display","block");$(".lineal1").css("display","none");$(".img").css("display","none").fadeIn("slow");setupanalisis();}
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

function versubmenu(){$(".topselector").css("display","block");if(submenucatv){$(".submenusubcategoria").animate({opacity:.2})}}
function setupsubcategorias(){

	$(".botonsubcat,.botonsegmento").remove();
	$(".top2").slideDown();
	submenucatv=true;
	$(".hl img").remove();$(".hl").fadeOut();
	$(".top2 .subtitulo").html('PLANO DE MASAS POR SUBCATEGORÍA');
	for(i=0;i<subcategorias.length;i++){
	 $(".submenusubcategoria,.linealimg").css("opacity",1);
				$(".submenusubcategoria").append("<div class='botonsubcat' data-num='"+i+"' onclick='hlcategoria("+i+")'>"+subcategorias[i][0]+"</div>")
		
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
 
	$(".botonsubcat,.botonsegmento").remove();
		 $(".submenusubcategoria").css("opacity",0);
		$(".top2").slideDown();
	$(".hl img").remove();$(".hl").fadeOut();
		$(".top2 .subtitulo").html('PLANO DE MASAS POR SEGMENTOS');
		for(i=0;i<segmentos.length;i++){
			for(j=0;j<segmentos[i][0].length;j++){
	 $(".submenusegmentos,.linealimg").css("opacity",1);
 	$(".submenusegmentos").append("<div class='botonsegmento' data-num='"+i+"-"+j+"' onclick='hlsegmento("+i+","+j+")'>"+segmentos[i][0][j]+"</div>")
			}
	}
	
}

function highlightsubcat(n){
 

	$(".botonsubcat[data-num="+n+"]").css("background-color","#"+subcategorias[n][1]);
	
}

function highlightsegmento(n,m){
 

	$(".botonsegmento[data-num="+n+"-"+m+"]").css("background-color","#"+segmentos[n][1]);
	
}

function highlightanalisis(n){
 

	$(".botonanalisis[data-num="+n+"]").css("background-color","#"+analisis[n][1]);
	
}


function hlcategoria(n){
	if($(".hl"+n).is(":visible")){
		$(".botonsubcat[data-num="+n+"]").css("background-color","#525558");
$(".hl"+n+" img").remove();$(".hl"+n).fadeOut();
		
	}else{
setTimeout(function(){$(".linealimg").animate({opacity:.2});$(".hl"+n).fadeIn().append("<img src='img/info"+n+".png' class='info"+n+"'>");},100);highlightsubcat(n)}
}


function hlsegmento(n,m){
if($(".hl"+n+"-"+m).is(":visible")){
$(".hl"+n+"-"+m+" img").remove();$(".hl"+n+"-"+m).fadeOut();
	 $(".botonsegmento[data-num="+n+"-"+m+"]").css("background-color","#525558");
	   }else{
	
 setTimeout(function(){$(".linealimg").animate({opacity:.2});$(".hl"+n+"-"+m).fadeIn().append("<img src='img/info_"+n+"-"+m+".png' class='info"+n+"-"+m+"'>"); $(".info"+n+"-"+m).css("position","absolute")},100);highlightsegmento(n,m)}

}



function hlanalisis(n){
	if($(".an"+n).is(":visible")){
		$(".botonanalisis[data-num="+n+"]").css("background-color","#525558");
$(".an"+n+" img").remove();$(".an"+n).fadeOut();
		
	}else{
setTimeout(function(){$(".linealimg").animate({opacity:.2});$(".an"+n).fadeIn() ;},100);highlightanalisis(n)}
}


