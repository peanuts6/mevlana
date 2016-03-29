$.ajax({
  url: '/data/list-data.json',
  dataType: 'json',
  beforeSend: function() {  },
  success: function(user) {
  	var id = getUrl(2).replace(/[^0-9]/g, '');
    document.title = user[id].name;

    $('.name').html(user[id].name);
    $('.id').html(user[id].id);
    $('.age').html(user[id].age);
    $('.sex').html(user[id].sex);
  }
})