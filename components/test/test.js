$('.degisecek').html('<strong>Armut</strong>');

document.title = 'Test Sayfası';

$('.for-example').is(function() {
  var _t = $(this), original = $.trim(_t.html());

  $.ajax({
    url: '/data/listdata.json',
    dataType: 'json',
    beforeSend: function() { _t.html(''); },
    success: function(source) {
      $.each(source, function(key, val) {
        _t.append(original.replace('{{ val }}', val));
      })
    }
  })
})