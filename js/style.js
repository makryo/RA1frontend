
//menu de hamburguesa responsivo para el navbar
function Menu(){
    var x = document.getElementById("mainNavBar");
    if (x.className === "navBar"){
      x.className += " responsive";
    } else {
      x.className = "navBar";
    }
  }

  //script para recolectar los datos escritos en el form y mostrarlos en consola
  $(document).ready(function() {
    $('#contact_form').bootstrapValidator({
        
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            nombre: {
                validators: {
                        stringLength: {
                        min: 2,
                    },
                        notEmpty: {
                        message: 'Ingrese su nombre'
                    }
                }
            },
             apellido: {
                validators: {
                     stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'ingrese sus apellidos'
                    }
                }
            },
			 direccion: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'ingrese su direccion'
                    }
                }
            },
			 tipoVehiculo: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'ingrese tipo de vehiculo'
                    }
                }
            },
			identifica: {
                validators: {
                     stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'ingrese identificacion del vehiculo'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Ingrese un correo'
                    },
                    emailAddress: {
                        message: 'Ingrese un correo valido'
                    }
                }
            },
            numero: {
                validators: {
                  stringLength: {
                        min: 12, 
                        max: 12,
                    notEmpty: {
                        message: 'Ingrese numero de telefono'
                     }
                }
            },
			 tipo: {
                validators: {
                    notEmpty: {
                        message: 'seleccione tipo de servicio'
                    }
                }
            },
                }
            }
        })
        //script para alertas al form
        .on('success.form.bv', function(e) {
            $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
                $('#contact_form').data('bootstrapValidator').resetForm();

            e.preventDefault();

          
            var $form = $(e.target);

           
            var bv = $form.data('bootstrapValidator');

            //script para ejecutar el metodo post para enviar los datos a la consola.
            $.post($form.attr('action'), $form.serialize(), function(result) {
                console.log(result);
            }, 'json');
        });
});