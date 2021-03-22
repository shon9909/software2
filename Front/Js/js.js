$('.ui.dropdown').dropdown('hidden');



function registro() {

    //console.log("entro¡");
    var $accountregistro = $('#bt-registrar'),
        $accountconfirmacion = $('#registrar');

    $accountregistro.on('click', function() {
        $accountconfirmacion[0].show();
    });

    $('#cancel').on('click', function() {
        $accountconfirmacion[0].close();
    });

};
/*(function registro() {
    'use strict';
    console.log("entro¡");
    var $accountregistro = $('#bt-registrar'),
        $accountconfirmacion = $('#confirm-registrar');

    $accountregistro.on('click', function() {
        $accountconfirmacion[0].showModal();
    });

    $('#cancel').on('click', function() {
        $accountDeleteDialog[0].close();
    });

});
/*
var dialogoPregunta = document.getElementById('registrar');
dialogoPregunta.addEventListener('close', () =>
    alert('Has contestado que ' + dialogoPregunta.returnValue)
);*/