$(function(){
    $('#name').keyup(function(){
        $('#greet').text('Welcome to Soiree ' + $('#name').val())
    })
});
