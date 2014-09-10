//Variable Global
var variableGlobal = "Esto es una Variable Global";

//Funciones
miFuncion = function(){
	variableGlobal = "variableGlobal dentro de la función miFuncion";
	var variableLocal = "Esta es Local";
	document.write(variableGlobal + "<br />" + variableLocal + "<br />" + "<br />");
}

otraFuncion = function() {
	document.write(variableGlobal + "<br />" + variableLocal);
}

miFuncion();
otraFuncion();