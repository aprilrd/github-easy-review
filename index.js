// Generated by CoffeeScript 1.6.3
var key;

key = window.location.pathname;

chrome.storage.sync.get(key, function(item) {
  var file, reviewStatuses, visible, _results;
  reviewStatuses = item[key] || {};
  $('div.meta').on('click', function() {
    var hiddenComment, toSave;
    hiddenComment = $(this).siblings('div.data').toggle();
    reviewStatuses[$(this).attr('data-path')] = hiddenComment.is(':visible');
    toSave = {};
    toSave[key] = reviewStatuses;
    return chrome.storage.sync.set(toSave);
  });
  _results = [];
  for (file in reviewStatuses) {
    visible = reviewStatuses[file];
    if (!visible) {
      _results.push($('div.meta:contains(' + file + ')').siblings('div.data').hide());
    } else {
      _results.push(void 0);
    }
  }
  return _results;
});
