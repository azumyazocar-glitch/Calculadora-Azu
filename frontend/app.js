
function enviar() {

    var contenido = document.querySelector('#contenido');

    var v1 = document.querySelector('#t1').value;
    var v2 = document.querySelector('#t2').value;

    var url = "";

    // Validar que se ingresen los números
    if (v1 === "") {
        swal("Mensaje", "Ingrese el primer número", "warning");
        return;
    }

    // Suma
    if (document.querySelector('#opcion1').checked) {
        if (v2 === "") {
            swal("Mensaje", "Ingrese el segundo número", "warning");
            return;
        }

        url = 'http://127.0.0.1:5000/' + v1 + '/' + v2;
    }

    // Resta
    else if (document.querySelector('#opcion2').checked) {
        if (v2 === "") {
            swal("Mensaje", "Ingrese el segundo número", "warning");
            return;
        }

        url = 'http://127.0.0.1:5000/resta/' + v1 + '/' + v2;
    }

    // Multiplicación
    else if (document.querySelector('#opcion3').checked) {
        if (v2 === "") {
            swal("Mensaje", "Ingrese el segundo número", "warning");
            return;
        }

        url = 'http://127.0.0.1:5000/multiplicacion/' + v1 + '/' + v2;
    }

    // División
    else if (document.querySelector('#opcion4').checked) {
        if (v2 === "") {
            swal("Mensaje", "Ingrese el segundo número", "warning");
            return;
        }

        if (Number(v2) === 0) {
            swal("Mensaje", "No se puede dividir entre cero", "warning");
            return;
        }

        url = 'http://127.0.0.1:5000/division/' + v1 + '/' + v2;
    }

    // Potenciación
    else if (document.querySelector('#opcion5').checked) {
        if (v2 === "") {
            swal("Mensaje", "Ingrese el segundo número", "warning");
            return;
        }

        url = 'http://127.0.0.1:5000/potenciacion/' + v1 + '/' + v2;
    }

    // Seno
    else if (document.querySelector('#opcion6').checked) {
        url = 'http://127.0.0.1:5000/seno/' + v1;
    }

    // Coseno
    else if (document.querySelector('#opcion7').checked) {
        url = 'http://127.0.0.1:5000/coseno/' + v1;
    }

    // Enviar solicitud al servidor Flask
    fetch(url)

        .then(function(response) {

            if (response.ok) {
                return response.json();
            } else {
                throw "Error en la llamada";
            }

        })

        .then(function(texto) {

            console.log(texto);

            var cadena =
                "<h3>Resultado: " +
                texto.Resultado +
                " | Operación: " +
                texto.Operacion +
                "</h3>";

            contenido.innerHTML = cadena;

        })

        .catch(function(error) {

            console.log(error);

            swal({
                title: "Advertencia",
                text: "Error al realizar la operación",
                icon: "warning",
                buttons: true,
                dangerMode: true
            });

        });

}
