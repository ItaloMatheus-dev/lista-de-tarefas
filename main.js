$(document).ready(function() {

    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('ol').on('click', 'li', function() {
        $(this).toggleClass('feito');
    });

    $('form').on('submit',function(e){
        e.preventDefault();
        const tarefa = $('#nova-tarefa').val();
        const novaTarefa = $(`<li>${tarefa}</li>`);
        $(novaTarefa).appendTo('ol');

        $('#nova-tarefa').val('');
    })
})
