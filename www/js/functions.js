var subcategorias=[["Cápsulas","0a7298"],["Tostado","fecd0a"],["Soluble","ff0000"],["Infusiones","6ead3c"]];
var subcategorias2=[["Cápsulas","0a7298"],["Soluble","ff0000"],["Tostado","fecd0a"],["Infusiones","6ead3c"]];
var segmentos=[
	[["NDG","COMP. NDG","COMP. nespresso","tassimo","resto sist."],"0a7298"],
	[["grano","molido"],"fecd0a"],
	[["cereal soluble","mainstream","alta gama","especialidades"],"ff0000"],
	[["Infusiones"],"6ead3c"]
			  ]
var infradimensionados=["0-0","0-2","0-3","0-4","1-1","2-1"];
var sobredimensionados=["0-1","1-0","2-0","2-2","2-3"];
var morrallatotal=-1037087.75;
var roturastotal=336381.3;
var altastotal=919647.62;

var morrallatotal2=-1037087.75;
var roturastotal2=336381.3;
var altastotal2=919647.62;

var db;
var segmentos2=[
	[["NDG","COMP. NDG","COMP. nespresso","tassimo"],"0a7298"],
	[["grano","molido"],"a97733"],
	[["cereal soluble","mainstream","alta gama","especialidades"],"ff0000"],
	[["Infusiones"],"6ead3c"]
			  ]

var analisis=[["Productos Baja Rotación","8a98a4"],["SEGMENTO SOBREDIMENSIONADO","3c84a0"],["SEGMENTO INFRADIMENSIONADO","c42c2e"]]
//var opcioneseditar=[["Tasa de morralla","7b858e"],["SKU’S SOBREDIMENSIONADAS","c2a633"],["SKU’s INFRADIMENSIONADAS","c32c2d"],["ALTAS","318bad"]]


var submenucatv=false;

 var data=new Array(); //ESTO POR CSV en local dificil debido al crossorigin, así que new Arrays y a cascarla
data.push(new Array("Sistemas","NDG CORTADO MAGNUM (30CAPS)",171696.22,"ALTA","cortadomagnumndg"));
data.push(new Array("Tostado","LAVAZZA MOLIDO CREMA E GUSTO 250G",151735.56,"BAJA","lavazzamolidocremaegusto250g"));
data.push(new Array("Sistemas","NDG GRANDE INTENSO (16CAPS)",146412.53,"ALTA","grandeintensondg"));
data.push(new Array("Sistemas","STARBUCKS BY NESPRESSO VERONA",144111.44,"ALTA","sbuxnespressoverona"));
data.push(new Array("Sistemas","STARBUCKS BY NESPRESSO HOUSE BLEND",126428.33,"ALTA","sbuxnespressohouseblend"));
data.push(new Array("Tostado","LAVAZZA GRANO ESPRESSO 500G",125966.88,"BAJA","lavazzagranocaffeespresso500g"));
data.push(new Array("Tostado","LAVAZZA MOLIDO EXPRESS NATURAL 250G",125237.49,"BAJA","lavazzamolidocaffeespresso250gmolido2"));
data.push(new Array("Soluble","MARCILLA CREME EXPRESS DESCAFEINADO 200G",114174.55,"BAJA","marcillasenseoextrafuerte28uds"));
data.push(new Array("Tostado","BONKA MOLIDO DESCAFEINADO 250G",100140.09,"ALTA","bonkamolidodescafeinado250g"));
data.push(new Array("Sistemas","CAFÉ ROYAL COMP.NDG ESPRESSO FORTE",94310.22,"BAJA","caferoyalespressoforte16capsulesndg"));
data.push(new Array("Soluble","NESCAFÉ GOLD PURO COLOMBIA 100G",90873.94,"ALTA","nescafegoldoriginspurocolombia"));
data.push(new Array("Soluble","NESCAFÉ VITALISSIMO DESCAFEINADO 200G",90576.16,"ALTA","vitalissimodecaf"));
data.push(new Array("Sistemas","MARCILLA COMP.BLANDAS EXTRA FUERTE",87035.22,"BAJA","marcillasenseoextrafuerte28uds"));
data.push(new Array("Sistemas","LAVAZZA A MODO MIO ESPRESSO INTENSO",81423.64,"BAJA","lavazzaespressointenso16capsulas"));
data.push(new Array("Sistemas","LAVAZZA A MODO MIO DEK CREMOSO",69230.62,"BAJA","lavazzaespressodesdekcremoso16capsulas"));
data.push(new Array("Sistemas","TASSIMO L'OR ESPRESSO DECAFFEINATO",60631.54 ,"BAJA","tassimolorespressodecaffeinato16capsulas"));
data.push(new Array("Tostado","BONKA MOLIDO ECOLÓGICO 250G",49408.91 ,"ALTA","bonkaecologico220g"));
data.push(new Array("Sistemas","CAFÉ ROYAL COMP.NDG DECAFFEINATO",48385.86 ,"BAJA","caferoyaldecaffeinato16capsulesndg"));
data.push(new Array("Sistemas","CAFÉ ROYAL COMP.NESPRESSO RISTRETTO INTENSO",40542.45 ,"BAJA","caferoyalristrettointensonespresso"));
data.push(new Array("Sistemas","CAFÉ ROYAL COMP.NDG CAFÉ CON LECHE",38413.72 ,"BAJA","caferoyalcafeaulait16capsulesndg"));



function number_format(amount, decimals) {

if(amount<0){negativo=true;}else{negativo=false;}
    amount += '';  
    amount = parseFloat(amount.replace(/[^0-9\.]/g, '')); // elimino cualquier cosa que no sea numero o punto

    decimals = decimals || 0;  

    
    if (isNaN(amount) || amount === 0) 
        return parseFloat(0).toFixed(decimals);
 
    amount = '' + amount.toFixed(decimals);

    var amount_parts = amount.split('.'),
        regexp = /(\d+)(\d{3})/;

    while (regexp.test(amount_parts[0]))
        amount_parts[0] = amount_parts[0].replace(regexp, '$1' + '.' + '$2');
if(negativo){
    return "-"+amount_parts.join(',');}else{
	  return	amount_parts.join(',');
		
	}
}

function errorCallback(err){
alert(err);
}

document.addEventListener("deviceready", function() {
  db = openDatabase('mydb', '1.0', 'appdb', 2 * 1024 * 1024);



db.transaction(function (tx) {   
	  tx.executeSql('DROP table items',[],function(){},errorCallback); 
 
   tx.executeSql('CREATE TABLE IF NOT EXISTS items (id integer primary key autoincrement,categoria,nombre,precio,tipo,img)',[],function(){},errorCallback); 
	  tx.executeSql('DELETE FROM items',[],function(){},errorCallback);
 
	data.forEach( item =>
 tx.executeSql('INSERT INTO items (id,categoria,nombre,precio,tipo,img) VALUES (null,"'+item[0]+'", "'+item[1]+'",'+item[2]+',"'+item[3]+'","'+item[4]+'")',[],function(){},errorCallback)
 
			 );
});
 
})

  db = openDatabase('mydb', '1.0', 'appdb', 2 * 1024 * 1024);



db.transaction(function (tx) {   
	  tx.executeSql('DROP table items'); 
 
   tx.executeSql('CREATE TABLE IF NOT EXISTS items (id integer primary key autoincrement,categoria,nombre,precio,tipo,img)'); 
	  tx.executeSql('DELETE FROM items');
 
	data.forEach( item =>
 tx.executeSql('INSERT INTO items (id,categoria,nombre,precio,tipo,img) VALUES (null,"'+item[0]+'", "'+item[1]+'",'+item[2]+',"'+item[3]+'","'+item[4]+'")')
 
			 );
});

function setuphome(){$(".botonhome").bind("click",startapp);					}


function startapp(){ $(".teoricoactual").css("display","block");$(".homepage").css("display","none");$(".img").css("display","none").fadeIn("slow");
$(".teoricoactual .botonfooter").click(f_lineal1)				   				   }
function f_lineal1(){$(".lineal1").css("display","block");$(".teoricoactual").css("display","none");$(".img").css("display","none").fadeIn("slow");	$(".lineal1 .botonfooter").unbind("click").click(f_lineal3);}
function f_lineal2(){$(".lineal2").css("display","block");$(".lineal1").css("display","none");$(".img").css("display","none").fadeIn("slow");setupanalisis();
		$(".lineal2 .botonfooter").unbind("click").click(f_lineal3); }
//function f_lineal3(){$(".lineal3").css("display","block");$(".lineal2").css("display","none");$(".img").css("display","none").fadeIn("slow");setupeditar();

//^^paso intermedio que nos comemos, de momento

function f_lineal3(){$(".lineal3").css("display","block");$(".lineal1").css("display","none");$(".img").css("display","none").fadeIn("slow");setupeditar();
 	$(".lineal3 .botonfooter").unbind("click").click(f_lineal4);$(".top2").fadeIn("slow"); }
function f_lineal4(){ $(".lineal4").css("display","block").css("opacity",1);$(".lineal3").css("display","none");$(".img").css("display","none").fadeIn("slow");
/**/	$(".lineal4 .botonfooter").click(f_reparto)	;		   				   }


function redondeo(num){
	 
	if(Math.abs(num)<10){num=0;}
	return(num);
	
}


function updatepg(){
	
	
	
	$(".bloque4 .c21").html(number_format(redondeo(morrallatotal2),2)+"€");
	$(".bloque4 .c22").html(number_format(redondeo(roturastotal2),2)+"€");
$(".bloque4 .c23").html(number_format(redondeo(altastotal2),2)+"€");

 
	$(".bloque4 .porc1").html(number_format(redondeo( parseFloat(morrallatotal2)+parseFloat(roturastotal2)+parseFloat(altastotal2)),2)+"€");
	
}

function calculaplanograma(amount,alta){
console.log(altastotal2+"+"+parseFloat(amount)+"=");
	if(!alta){
		 (morrallatotal2)+=parseFloat(amount);
	
	}
	else{
			altastotal2+=parseFloat(amount);
	 
		
	}
	//console.log(altastotal2);
	//	console.log(amount+"/"+((morrallatotal2)+(roturastotal2)+(altastotal2)))
		updatepg();
}



function clickcheckbox(e){
	console.log($(e.currentTarget).is(":checked"));
	 if($(e.currentTarget).attr("rel-tipo")==1){
		 //bajas
		 if($(e.currentTarget).is(":checked")){
		 calculaplanograma($(e.currentTarget).val()*-1,false);
		 }else{
			  calculaplanograma($(e.currentTarget).val(),false);
			 
		 }
		 //altas
	 }
	else{
		
		 if(!$(e.currentTarget).is(":checked")){
		 calculaplanograma($(e.currentTarget).val()*-1,true);
		 }else{
			  calculaplanograma($(e.currentTarget).val(),true);
			 
		 }
		
	}
	
}


function f_reparto(){

$(".bloque3 .c21").html(number_format(morrallatotal,2)+"€");
	$(".bloque3 .c22").html(number_format(roturastotal,2)+"€");
$(".bloque3 .c23").html(number_format(altastotal,2)+"€");
	$(".bloque3 .porc1").html(number_format(morrallatotal+roturastotal+altastotal,2)+"€");
 updatepg();
	//  alert(db);
 $(".repartowrapper").css("display","block").css("opacity",1);$(".lineal4").css("display","none");$(".img").css("display","none").fadeIn("slow");
 db.transaction(function (tx) { 
            tx.executeSql('SELECT * FROM items WHERE tipo="BAJA" ORDER by precio desc', [], function (tx, results) { 
       alert(";;;;;;;;");
      len=results.rows.length;
               for (i = 0; i < len; i++) { 
         rellenaitems(1,results.rows.item(i))
               } 
            }, errorCallback); 
         });  
	
	
	db.transaction(function (tx) { 
            tx.executeSql('SELECT * FROM items WHERE tipo="ALTA" ORDER by precio desc', [], function (tx, results) { 
        
      len=results.rows.length;
               for (i = 0; i < len; i++) { 
         rellenaitems(2,results.rows.item(i))
               } 
			 
            }, errorCallback); 
         }); 
	
}

function rellenaitems(n,item){
	
		$(".bloque"+n+" .list").append('<div class="listitem"><div class="itemimg"><img src="img/prods/'+item.img+'.png"></div><div class="itemdesc">'+item.nombre+'</div><div class="itemprize">'+number_format(item.precio,2)+' €</div><div class="itemtoggle">	<div class="checkbox-container yellow">		<input type="checkbox"  checked name="toggle'+item.id+'" id="toggle'+item.id+'" value="'+item.precio+'" rel-tipo="'+n+'"/>		<label for="toggle"></label>		<div class="active-circle"></div>	</div></div></div>')
	$("#toggle"+item.id).click(clickcheckbox)
}
			 
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

	$(".lineal1 .botonsubcat,.lineal1 .botonsegmento,.lineal1 .botones2").remove();
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

	$(".lineal4 .botonsubcat,.lineal4 .botonsegmento,.lineal4 .botones2").remove();
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
var segmentoson,infraon,sobreon=false;
function togglesegmentos(){
			if($(".b22").hasClass("selected")){$(".b22").click()}	   
 if($(".b23").hasClass("selected")){$(".b23").click()}	
	 
	if(!segmentoson){
			$(".hl").css("display","none");
	 
		$(".b21").addClass("selected");
	 
	
		$(".botonsegmento").click();
		segmentoson=true;
	}else{
	 
		$(".b21").removeClass("selected");
			$(".botonsegmento").click();
		segmentoson=false;
			}	
}


function toggleinfra(){
	 	
	
	 		if($(".b21").hasClass("selected")){$(".b21").click()}	   
 if($(".b23").hasClass("selected")){$(".b23").click()}	  
	if(!infraon){
		$(".hl").css("display","none");
	 if($(".hl3-0").is(":visible")){$(".botonsegmento[data-num='3-0']").click()}//quitamos infusiones
	  
		$(".b22").addClass("selected");
	
		infradimensionados.forEach(  infra =>
				$(".botonsegmento[data-num='"+infra+"']").click()
	)
		infraon=true;
	}else{
		
		$(".b22").removeClass("selected");
			infradimensionados.forEach(  infra =>
				$(".botonsegmento[data-num='"+infra+"']").click()
	)
		infraon=false;
			}	
}



function togglesobre(){ 

				if($(".b21").hasClass("selected")){$(".b21").click()}	   
 if($(".b22").hasClass("selected")){$(".b22").click()}	  
	if(!sobreon){
	 	$(".hl").css("display","none");
		 if($(".hl3-0").is(":visible")){$(".botonsegmento[data-num='3-0']").click()}//quitamos infusiones
		$(".botonsegmento").css("background-color","#525558");
		$(".boton2").removeClass("selected");
		$(".b23").addClass("selected");
	
		sobredimensionados.forEach(  infra =>
				$(".botonsegmento[data-num='"+infra+"']").click()
	)
		sobreon=true;
	}else{
		$(".b23").removeClass("selected");
			sobredimensionados.forEach(  infra =>
				$(".botonsegmento[data-num='"+infra+"']").click()
	)
		sobreon=false;
			}	
}



function setupsegmentos(){
 
	$(".lineal1 .botonsubcat,.botonsegmento,.lineal1 .botones2").remove();
	
		 $(".lineal1  .submenusubcategoria").css("opacity",0);
		$(".lineal1 .top2").slideDown();
	$(".lineal1 .hl img").remove();$(".lineal1 .hl").fadeOut();
		$(".lineal1 .top2 .subtitulo").html('PLANO DE MASAS POR SEGMENTOS');
		for(i=0;i<segmentos.length;i++){
			for(j=0;j<segmentos[i][0].length;j++){
	 $(".lineal1 .submenusegmentos,.lineal1 .linealimg").css("opacity",1);
 	$(".lineal1 .submenusegmentos").append("<div class='botonsegmento' active='0' data-num='"+i+"-"+j+"' onclick='hlsegmento("+i+","+j+")'>"+segmentos[i][0][j]+"</div>")
			}
	}
		$(".lineal1 .top2").append("<div class='botones2'><div class='boton2 b21'>TODOS</div><div class='boton2 b22'>INFRADIMENSIONADOS</div><div class='boton2 b23'>SOBREDIMENSIONADOS</div></div>");
	$(".lineal1 .b21").click(togglesegmentos);
		$(".lineal1 .b22").click(toggleinfra);
		$(".lineal1 .b23").click(togglesobre);
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
 

	$(".botonsegmento[data-num="+n+"-"+m+"]").css("background-color","#"+segmentos[n][1]).attr("active","1");
	
	}

function highlightsegmento2(n,m){
 

	$(".botonsegmento[data-num="+n+"-"+m+"]").css("background-color","#"+segmentos2[n][1]).attr("active","1");
	
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
	 $(".botonsegmento[data-num="+n+"-"+m+"]").css("background-color","#525558").attr("active","0");
	   }else{
	
 setTimeout(function(){$(".linealimg").animate({opacity:.2});$(".hl"+n+"-"+m).fadeIn().append("<img src='img/info_"+n+"-"+m+".png' class='info info"+n+"-"+m+"'>"); $(".info"+n+"-"+m).css("position","absolute")},100);
			setTimeout(function(){$(".info"+n+"-"+m).toggleClass('animate')},300)
		   ;highlightsegmento(n,m)}

}


function hlsegmento2(n,m){
if($(".hl"+n+"-"+m).is(":visible")){
$(".hl"+n+"-"+m+" img").remove();$(".hl"+n+"-"+m).fadeOut();
	 $(".botonsegmento[data-num="+n+"-"+m+"]").css("background-color","#525558").attr("active","0");
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

function loading(t){	
	var ldr=""
	//if(t.match(/.+Infra.+/g)){ldr="2";} 
	$(".lineal3").append("<div class='loader'><img src='img/5"+ldr+".svg'><div class='loadertxt'>"+t+"</div></div>");}
function quitarloading(){$(".loader").fadeOut('fast','',function(){$(".loader").remove();})}
function vertasamorralla(){$('#canvas1').remove();$(".lineal3 .img").append(canvashtml);$('#canvas1').drawImage({  source: 'img/lineal2.png',width: 1920, x: 960, y: 432,  height: 864});$(".lineal3 .top2 .vaciar").remove();$(".be1").unbind("click");$(".be2").fadeIn().click(verajustar1);}
function verskussobredimensionados(){	$('#canvas1').remove();$(".lineal3 .img").append(canvashtml);$('#canvas1').drawImage({  source: 'img/lineal4.png',width: 1920, x: 960, y: 432,  height: 864});$(".lineal3 .top2 .ajustar").remove();$(".be2").unbind("click");$(".be3").fadeIn().click(verajustar2);}
function verskusinfradimensionados(){	$('#canvas1').remove();$(".lineal3 .img").append(canvashtml);$('#canvas1').drawImage({  source: 'img/lineal6.png',width: 1920, x: 960, y: 432,  height: 864});$(".lineal3 .top2 .ajustar").remove();$(".be3").unbind("click");$(".be4").fadeIn().click(veranadir);
		$(".calctotal").html(number_format((parseFloat(morrallatotal)+parseFloat(roturastotal)),2)+"€");											
									}
function veraltas(){	$('#canvas1').remove();$(".lineal3 .img").append(canvashtml);$('#canvas1').drawImage({  source: 'img/lineal7.png',width: 1920, x: 960, y: 432,  height: 864});$(".lineal3 .top2 .anadir").remove();$(".be4").unbind("click"); }

function vervaciar1(){$(".lineal3 .top2").append("<div class='vaciar'>VACIAR</div>");$(".vaciar").slideDown().click(f_vaciar1);
					 	$('#canvas1').remove();$(".lineal3 .img").append(canvashtml);$('#canvas1').drawImage({  source: 'img/linealc.png',width: 1920, x: 960, y: 432,  height: 864});}
	 
function verajustar1(){$(".lineal3 .top2").append("<div class='ajustar'>AJUSTAR</div>");$(".ajustar").slideDown().click(f_ajustar1);
	$('#canvas1').remove();$(".lineal3 .img").append(canvashtml);$('#canvas1').drawImage({  source: 'img/lineal3.png',width: 1920, x: 960, y: 432,  height: 864});}
function verajustar2(){$(".lineal3 .top2").append("<div class='ajustar ajustar2'>AJUSTAR</div>");$(".ajustar").slideDown().click(f_ajustar2);$('#canvas1').remove();$(".lineal3 .img").append(canvashtml);$('#canvas1').drawImage({  source: 'img/lineal5.png',width: 1920, x: 960, y: 432,  height: 864});}


function veranadir(){$(".lineal3 .top2").append("<div class='anadir'>AÑADIR</div>");$(".anadir").slideDown().click(f_propuestas)}
function f_vaciar1(){loading('Eliminando Productos Baja Rotación');oscurecerlineal('img/lineal2.png');setTimeout(function(){$(".calculadora").fadeIn(); 
		$(".calctotal").html(number_format(morrallatotal,2)+"€");																									  
																												  quitarloading();vertasamorralla();},2000)}
function f_ajustar1(){loading('Ajustando SKU’s Sobredimensionadas');oscurecerlineal('img/lineal3.png');setTimeout(function(){quitarloading();verskussobredimensionados();},2000)}
function f_ajustar2(){loading('Ajustando SKU’s Infradimensionadas');oscurecerlineal('img/lineal5.png');//setTimeout(function()quitarloading();verskusinfradimensionados();},2000)
 setTimeout(function()	{$(".loadertxt").css("display","none");$(".loader").append("<div class='botonreorg' onclick='prereorganizar()'>Reorganizar lineal</div>")	},2000);
			 
					 }
function prereorganizar(){$(".loader img").attr("src","img/52.svg");$(".loadertxt").html("Reorganizando lineal").fadeIn(); $(".loader img").fadeIn(); $(".botonreorg").fadeOut();setTimeout(reorganizar,2500)}
function reorganizar(){quitarloading();verskusinfradimensionados()}

function f_anadir(){loading('Ajustando altas');oscurecerlineal('img/lineal6.png');setTimeout(function(){quitarloading();veraltas();},2000)}
	var categorias=["Sistemas","Soluble","Tostado"];

function f_propuestas(){
	$("body").append("<div class='propuestas' id='propuestas'><h4>Propuestas de alta</h4><div class='pcols'><div class='pcol pcol0'><h5>Cápsulas de Café</h5></div><div class='pcol pcol1'><h5>Café soluble</h5></div><div class='pcol pcol2'><h5>Cápsulas molido y grano</h5></div></div><div class='b_anadir' data-lity-close  onclick='f_anadir()'>Añadir al lineal</div></div>");

 
 	 
	db.transaction(function (tx) { 
 
            tx.executeSql('SELECT * FROM items WHERE tipo="ALTA" AND categoria="Sistemas" ORDER by precio desc', [], function (tx, results) { 
				console.log(results.rows)
                  len=results.rows.length;
               for (i = 0; i < len; i++) { 
				   iitem=results.rows.item(i)
				   console.log(iitem);
        $(".pcol0").append('<div class="listitem"><div class="itemimg"><img src="img/prods/'+iitem.img+'.png"></div><div class="itemdesc">'+iitem.nombre+'</div> </div>')
               } 
            }, null); 
         }); 
 


 
	db.transaction(function (tx) { 
 
            tx.executeSql('SELECT * FROM items WHERE tipo="ALTA" AND categoria="Soluble" ORDER by precio desc', [], function (tx, results) { 
				console.log(results.rows)
                  len=results.rows.length;
               for (i = 0; i < len; i++) { 
				   iitem=results.rows.item(i)
				   console.log(iitem);
        $(".pcol1").append('<div class="listitem"><div class="itemimg"><img src="img/prods/'+iitem.img+'.png"></div><div class="itemdesc">'+iitem.nombre+'</div> </div>')
               } 
            }, null); 
         }); 
 
	
	 
	db.transaction(function (tx) { 
 
            tx.executeSql('SELECT * FROM items WHERE tipo="ALTA" AND categoria="Tostado" ORDER by precio desc', [], function (tx, results) { 
				console.log(results.rows)
                  len=results.rows.length;
               for (i = 0; i < len; i++) { 
				   iitem=results.rows.item(i)
				   console.log(iitem);
        $(".pcol2").append('<div class="listitem"><div class="itemimg"><img src="img/prods/'+iitem.img+'.png"></div><div class="itemdesc">'+iitem.nombre+'</div> </div>')
               } 
            }, null); 
         }); 
 
	
	
	var lightbox = lity('#propuestas');
	//f_anadir
}


function setupeditar(){
canvas = document.getElementById('canvas1');
 ctx = canvas.getContext('2d');	 
$('#canvas1').drawImage({  source: 'img/lineal.png',width: 1920, x: 960, y: 432,  height: 864});
	$(".botoneditar").css("display","none");
 
	$(".be1").fadeIn().click(vervaciar1);
}


