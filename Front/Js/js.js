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
  .dropdown()
;
$( 'carouselExampleIndicators').ready(function(){
    $('.carousel').carousel({
      interval: 2000
    })
});
$('.ui.rating')
  .rating({
    initialRating: 3,
    maxRating: 5
  })
;
$('#progeso').progress({
  percent: 22
})

function registro() {
