// Check for the various File API support.
if (window.File && window.FileReader && window.FileList && window.Blob) {

  var load_vimrc = function (file, callback) {
    var reader = new FileReader();
    // TODO: select file encoding
    reader.onload = callback;

    reader.readAsText(file, 'UTF-8');
  };

  $('#vimrc_upload').on('change', function (e) {
    var input = $(this);
    file = input.prop('files')[0];

    load_vimrc(file, function (e) {
      var vimrc_text = e.target.result;

      vim_power = scouter(vimrc_text);
      show_scouter(vim_power);
    });
  });

} else {
  var upload_nav = $('#upload_nav');
  upload_nav.addClass('disabled');
  upload_nav.children('a').attr('data-toggle', '');
}
