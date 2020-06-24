$(function(){
    $('#name').keyup(function(){
      $('#great').text('Welcome to Soiree' + $('name').val());
    })
})
