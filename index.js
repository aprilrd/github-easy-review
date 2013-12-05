var file, path, reviewStatuses, reviewStatus, visible, _ref;
reviewStatuses = JSON.parse(localStorage.githubPRReview || '{}');

$('div.meta').on('click', function () {
  var hiddenComment = $(this).siblings('div.data').toggle();
  reviewStatuses[window.location.pathname + '|' + $(this).attr('data-path')] = hiddenComment.is(':visible');
  localStorage.githubPRReview = JSON.stringify(reviewStatuses);
});

for (reviewStatus in reviewStatuses) {
  visible = reviewStatuses[reviewStatus];
  _ref = reviewStatus.split('|'), path = _ref[0], file = _ref[1];
  if (path !== location.pathname) {
    continue;
  }
  if (!visible) {
    $('div.meta:contains(' + file + ')').siblings('div.data').hide();
  }
}