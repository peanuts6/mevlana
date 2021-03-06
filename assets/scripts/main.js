var options = {
  'default': 'home',
  'root': '/'
};

function initialStart() {
  var link = getUrl();

  if (link == '')
    initRouter();
  else
    initRouter(getUrl());
}

$(window).load(function() {
  initialStart()
})

function initRouter(route = options.default) {
  $('#app').is(function() {
    var _t = $(this),
        r = route.split('/'),
        map = options.root + 'components/' + r[0] + '/' + r[0];

    $.ajax({
      url: map + '.html',
      dataType: 'html',
      success: function(source) {
        _t.html(source);

        $.getScript(map + '.js');
      },
      error: function(xhr, textStatus, errorThrown) {
        $.ajax({
          url: options.root + 'error_pages/' + xhr.status + '.html',
          dataType: 'html',
          success: function(source) {
            _t.html(source);
          }
        })
      }
    })
  })
}

var popped = ('state' in window.history && window.history.state !== null), initialURL = location.href;

$(window).bind('popstate', function (event) {
  var initialPop = !popped && location.href == initialURL

  popped = true

  if (initialPop) return;

  initialStart()
})

function getUrl(sp = '') {
    var all = window.location.href.split('/'),
        new_string = '';

    if (sp == '')
      $.each(all, function(key, val) {
        if (key > 2)
          if (new_string == '')
           new_string = val;
          else
           new_string = new_string + '/' + val;
      })
    else
      new_string = all[parseInt(sp) + 2];

    return new_string;
}

$(document).on('click', '.router', function() {
  var href = $(this).attr('href');

  history.pushState({}, '', href);

  if (href == '/')
    initRouter();
  else
    initRouter(getUrl());

  return false;
})