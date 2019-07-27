var formulario = document.getElementById('formulario'),
	nombre = formulario.nombre,
	correo = formulario.correo,
	sexo = formulario.sexo,
	terminos = formulario.terminos,
	error = document.getElementById('error');

	function validarNombre(e) {
		//Con value accedemos al valor del input
		if (nombre.value == '' || nombre.value == null) {
			console.log('Completa el formulario de contacto');
			error.style.display = 'block';
			//Declaro "error.innerHTML +=" + para que me muestre todos los errores y no solo el último  
			error.innerHTML +='<li>Por favor completa el nombre</li>';
			//para que no recargue la página después de dar click
			e.preventDefault();
		}else{
			error.style.display = 'none';
		}
	}

	function validarCorreo(e) {
		if (correo.value == '' || correo.value == null) {
			console.log('Completa el formulario de contacto');
			error.style.display = 'block';  
			error.innerHTML +='<li>Por favor agrega el correo</li>';
			e.preventDefault();
		}else{
			error.style.display = 'none';
		}
	}

	function validarSexo(e) {
		if (sexo.value == '' || sexo.value == null) {
			console.log('Completa el formulario de contacto');
			error.style.display = 'block';  
			error.innerHTML +='<li>Por favor elige sexo</li>';
			e.preventDefault();
		}else{
			error.style.display = 'none';
		}
	}

	function validarTerminos(e) {
		if (terminos.checked == false) {
			console.log('Completa el formulario de contacto');
			error.style.display = 'block';  
			error.innerHTML +='<li>Por favor completa los terminos y condiciones</li>';
			e.preventDefault();
		}else{
			error.style.display = 'none';
		}
	}

	function validarFormulario(e) {
		//El innerHTML lo pongo para que resetie todo y este en blanco y no se dupliquen los errores cuando la persona intente dar click en enviar de nuevo
		error.innerHTML = '';
		validarNombre(e);
		validarCorreo(e);
		validarSexo(e);
		validarTerminos(e);
	}

	formulario.addEventListener('submit',validarFormulario);