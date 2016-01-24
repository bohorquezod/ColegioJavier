var mostrarGrupos = function( data ) {
    var table = document.querySelector("#grupos");

    var length = Object.keys(data).length - 1; // - 1 Por el atributo "val"

    var tbody = table.querySelector("tbody");

    for( var i = 0; i < length; i++ ) {
        var tr = document.createElement("tr");
        var td = document.createElement("td");

        td.innerHTML = i + 1;
        tr.appendChild( td );

        var dataAct = data[i];
        for( var atr in dataAct ) {
            var td = document.createElement("td");
            td.innerHTML = dataAct[ atr ];
            tr.appendChild( td );
        }

        tbody.appendChild( tr );
    }

};

window.addEventListener("load", function() {
    var gruposMostrados = false;
    $("#gruposBtn").click( function() {
        if( window.innerWidth <= 768 )
            $("#wrapper-button").click();

        $(".menu").css("display", "none");

        $("#menuGrupos").css("display", "block");
        if( !gruposMostrados ) {
            sessionStatus( "../server/Views/verGrupos.php", mostrarGrupos, function() {} );
            gruposMostrados = true;
        }
    });
});