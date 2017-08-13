$(document).ready(function() {
  $.get('sentence.html', function(res) {
    $('#sentences').html(response)
  })

  $.get('this_doesnt_exist.html', function(data) {
    doSomethingGood()
  }).fail(function(err) {
    console.log('Something is broken: ' + err)
  })
})