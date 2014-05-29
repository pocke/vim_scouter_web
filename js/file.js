// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
} else {
  var upload_nav = $('#upload_nav');
  upload_nav.addClass('disabled');
  upload_nav.children('a').attr('data-toggle', '');
}
