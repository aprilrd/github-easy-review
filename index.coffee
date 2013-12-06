key = window.location.pathname

chrome.storage.sync.get(key, (item) ->
  reviewStatuses = item[key] or {}

  $('div.meta').on('click', ->
    hiddenComment = $(this).siblings('div.data').toggle()
    reviewStatuses[$(this).attr('data-path')] = hiddenComment.is(':visible')
    toSave = {}
    toSave[key] = reviewStatuses
    chrome.storage.sync.set(toSave)
  )

  for file, visible of reviewStatuses
    $('div.meta:contains(' + file + ')').siblings('div.data').hide() if not visible
)
