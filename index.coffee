reviewStatuses = JSON.parse(localStorage.githubPRReview or '{}')

$('div.meta').on('click', ->
  hiddenComment = $(this).siblings('div.data').toggle()
  reviewStatuses[window.location.pathname + '|' + $(this).attr('data-path')] = hiddenComment.is(':visible')
  localStorage.githubPRReview = JSON.stringify(reviewStatuses)
)

for reviewStatus, visible of reviewStatuses
  [ path, file ] = reviewStatus.split('|')
  continue if path isnt location.pathname
  $('div.meta:contains(' + file + ')').siblings('div.data').hide() if not visible
