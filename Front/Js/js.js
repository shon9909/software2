$('.ui.dropdown').dropdown('hidden');
$('.ui.form')
    .form({
        fields: {
            correoElectronico: {
                identifier: 'correoElectronico',
                rules: [{
                    type: 'empty',
                    prompt: 'Por favor ingrese su correo electrónico'
                }]
            },
            contraseña: {
                identifier: 'contraseña',
                rules: [{
                        type: 'empty',
                        prompt: 'Por favor ingrese su contraseña'
                    },
                    {
                        type: 'minLength[6]',
                        prompt: 'La contraseña debe ser de minimo {ruleValue} caracteres'
                    }
                ]
            }
        }
    });
$('select.dropdown')
    .dropdown();

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