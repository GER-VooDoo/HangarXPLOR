
var HangarXPLOR = HangarXPLOR || {};

// Load a page of pledges from RSI
HangarXPLOR.LoadPage = function(pageNo)
{
  HangarXPLOR.UpdateStatus(pageNo);
  
  var url = '/account/pledges?page=' + pageNo + '&pagesize=100';
  
  if (pageNo == 1 && document.location.search == '?page=1&pagesize=100')
      return HangarXPLOR.ProcessPage(document.body, pageNo);
  
  if (HangarXPLOR.logsEnabled) console.log('Loading', url);
  
  var $page = $('<div>');
  
  $page.load(url + ' .page-wrapper', function( response, status, xhr ) { if (status == "success") { HangarXPLOR.ProcessPage(this, pageNo) } else { console.log('Error loading page ' + pageNo + ' of your hangar - please contact plugins@ddrit.com for further support') } });
}
