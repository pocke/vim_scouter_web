(function () {



  // Check for the various File API support.
  if (window.File && window.FileReader && window.FileList && window.Blob) {

    var input_file = $('#vimrc_upload');


    var load_vimrc = function (file, callback) {
      var reader = new FileReader();
      // TODO: select file encoding
      reader.onload = callback;

      reader.readAsText(file, 'UTF-8');
    };

    input_file.on('change', function (e) {
      var input = $(this);
      file = input.prop('files')[0];

      load_vimrc(file, function (e) {
        var vimrc_text = e.target.result;

        vim_power = scouter(vimrc_text);
        show_scouter(vim_power);
      });
    });


    //  for dummy input
    $('#upload_dummy_btn,#upload_dummy_input').on('click', function (e) {
      input_file.click();
    });

    input_file.on('change', function (e) {
      $('#upload_dummy_input').val($(this).val());
    });


  } else {
    var upload_nav = $('#upload_nav');
    upload_nav.addClass('disabled');
    upload_nav.children('a').attr('data-toggle', '');
  }


})();
