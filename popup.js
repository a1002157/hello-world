$(function(){
    $('#name').keyup(function(){
      $('#greet').text('WelcometoSoiree' +$('#name').val())
    })
})
