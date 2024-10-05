$(document).ready(() => {

	$('#documentacao').on('click', () => {
		//$('#pagina').load('documentacao.html')

		/*$.get('documentacao.html', data => {
			$('#pagina').html(data)
		})*/

		$.post('documentacao.html', data => {
			$('#pagina').html(data)
		})
	})

	$('#suporte').on('click', () => {
		//$('#pagina').load('suporte.html')

		/*$.get('suporte.html', data => {
			$('#pagina').html(data)
		})*/

		$.post('suporte.html', data => {
			$('#pagina').html(data)
		})
	})
	
	//ajax
	$('#competencia').on('change', e => {

		$.ajax({
			type: 'GET',
			url: 'app.php',
			data: 'competencia=2018-10&x=10&y=20&z=30', //x-www-form-urlencoded
			success: dados => {console.log(dados)},
			error: erro => {console.log(erro)}
		})

		//método, url, dados, sucesso, erro
	})
})