

    function data() {
        var data = new Date();
        var dia = data.getDate();
        var menos1 = dia - 1;
        var menos2 = dia - 2;
        var mes = data.getMonth();
        var hora = data.getHours();
        var min = data.getMinutes();




        var horasFalta = 23 - hora;
        var minutosFalta = 60 - min;

        document.getElementById('horas').innerHTML = horasFalta;





        if (mes == 0) {
            document.getElementById('dias').innerHTML = ' 1Preço especial válido: ' + menos2 + ',' + menos1 + ' e ' + dia + ' de Janeiro (Isso, termina Hoje)??';
        } else if (mes == 1) {
            document.getElementById('dias').innerHTML = '2Preço especial válido: ' + menos2 + ', ' + menos1 + ' e ' + dia + ' de Fevereiro (Isso, termina Hoje)??';
        } else if (mes == 2) {
            document.getElementById('dias').innerHTML = '3Preço especial válido: ' + menos2 + ', ' + menos1 + ' e ' + dia + ' de Mar�o (Isso, termina Hoje)??';
        } else if (mes == 3) {
            document.getElementById('dias').innerHTML = '4Preço especial válido: ' + menos2 + ', ' + menos1 + ' e ' + dia + ' de Abril (Isso, termina Hoje)??';
        } else if (mes == 4) {
            document.getElementById('dias').innerHTML = '5Preço especial válido: ' + menos2 + ', ' + menos1 + ' e ' + dia + ' de Maio (Isso, termina Hoje)??';
        } else if (mes == 5) {
            document.getElementById('dias').innerHTML = '6Preço especial válido: ' + menos2 + ', ' + menos1 + ' e ' + dia + ' de Junho (Isso, termina Hoje)??';
        } else if (mes == 6) {
            document.getElementById('dias').innerHTML = '7Preço especial válido: ' + menos2 + ', ' + menos1 + ' e ' + dia + ' de Julho (Isso, termina Hoje)??';
        } else if (mes == 7) {
            document.getElementById('dias').innerHTML = '8Preço especial válido: ' + menos2 + ', ' + menos1 + ' e ' + dia + ' de Agosto (Isso, termina Hoje)??';
        } else if (mes == 8) {
            document.getElementById('dias').innerHTML = '9Preço especial válido: ' + menos2 + ', ' + menos1 + ' e ' + dia + ' de Setembro (Isso, termina Hoje)??';
        } else if (mes == 9) {
            document.getElementById('dias').innerHTML = 'Preço especial válido: ' + menos2 + ', ' + menos1 + ' e ' + dia + ' de Outubro (Isso, termina Hoje)??';
        } else if (mes == 10) {
            document.getElementById('dias').innerHTML = 'Preço especial válido: ' + menos2 + ', ' + menos1 + ' e ' + dia + ' de Novembro (Isso, termina Hoje)??';
        } else if (mes == 11) {
            document.getElementById('dias').innerHTML = 'Preço especial válido: ' + menos2 + ', ' + menos1 + ' e ' + dia + ' de Dezembro (Isso, termina Hoje)??';
        }


    }
    data();

    function startTimer(duration, display) {

        var timer = duration,
            minutes, seconds;
        setInterval(function() {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;

            if (--timer < 0) {
                timer = duration;
            }
        }, 1000);
    }

    window.onload = function() {
        var data = new Date();
        var dia = data.getDate();
        var min = data.getMinutes();
        var minutosFalta = 60 - min;
        var fiveMinutes = 60 * minutosFalta,
            display = document.querySelector('#time');
        startTimer(fiveMinutes, display);
    };


    setInterval(function() {
        var valorDaDiv = $("#time").text();


        if (valorDaDiv == '00:00') {




            var horasDiv = $("#horas").text();
            document.getElementById('horas').innerHTML = horasDiv - 1;


        } else {


        };



    }, 1000);

