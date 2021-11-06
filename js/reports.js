function traerReporteStatus(){
    console.log("reporte estados");
    $.ajax({
        url:"http://localhost:8080/api/Reservation/report-status",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaStatus(respuesta);
            alert("Se cargó el reporte correctamente");
        }
    })
}

function pintarRespuestaStatus(respuesta){
    let myTable="<table class='table'>";
    myTable = "<thead>";
    myTable += "<tr>";
        myTable += "<th>Completadas</th>"
        myTable += "<th>Canceladas</th>";
    myTable += "</tr>"
    myTable += "</thead>";
    myTable += "<tr>"
        myTable+="<td>"+respuesta.completed+"</td>";
        myTable+="<td>"+respuesta.cancelled+"</td>";
    myTable += "</tr>";
    myTable+="</table>";
    $("#resultadoStatus").html(myTable);
}

function traerReporteFechas(){
    var fechaInicio = document.getElementById("startDate").value;
    var fechaCierre = document.getElementById("devolutionDate").value;
    console.log(fechaInicio);
    console.log(fechaCierre);
    $.ajax({
        url:"http://localhost:8080/api/Reservation/report-dates/"+fechaInicio+"/"+fechaCierre,
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaDatos(respuesta);
            alert("se cargó correctamente el reporte");
        }
    });

}

function pintarRespuestaDatos(respuesta){
    let myTable="<table class='table'>";
    myTable = "<thead>";
    myTable += "<tr>";
        myTable += "<th>Status</th>"
        myTable += "<th>Fecha Inicio</th>";
        myTable += "<th>Fecha Cierre</th>";
    myTable += "<tr>";
    myTable += "</thead>";
    for(let i=0;i<respuesta.length;i++){
        myTable += "<tr>";
        myTable += "<td>"+respuesta[i].status+"</td>";
        myTable += "<td>"+formatoFecha(respuesta[i].startDate)+"</td>";
        myTable += "<td>"+formatoFecha(respuesta[i].devolutionDate)+"</td>";
        myTable += "</tr>";
    }
    myTable+="</table>";
    $("#resultadoFechas").html(myTable);
}

function formatoFecha(fecha){
    return fecha.substring(0,10)
}

function traerReporteClientes(){
    $.ajax({
        url:"http://localhost:8080/api/Reservation/report-clients",
        type:"GET",
        datatype:"JSON",
        success:function(respuesta){
            console.log(respuesta);
            pintarRespuestaCliente(respuesta);
            alert("se cargó correctamente el reporte")
        }
    });

}

function pintarRespuestaCliente(respuesta){
    let myTable="<table class='table'>";
    myTable = "<thead>";
    myTable += "<tr>";
        myTable += "<th>Total Reservaciones</th>"
        myTable += "<th>Nombre</th>";
        myTable += "<th>Email</th>";
        myTable += "<th>Edad</th>";
    myTable += "</tr>";
    myTable += "</thead>";
    for(let i=0;i<respuesta.length;i++){
        myTable += "<tr>";
        myTable += "<td>"+respuesta[i].total+"</td>";
        myTable += "<td>"+respuesta[i].client.name+"</td>";
        myTable += "<td>"+respuesta[i].client.email+"</td>";
        myTable += "<td>"+respuesta[i].client.age+"</td>";
        myTable += "</tr>";
    }
    myTable+="</table>";
    $("#resultadoClientes").html(myTable);
}


