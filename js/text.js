(function () {



  $('#text_btn').on('click', function (e) {
    var textarea = $('#vimrc_text');
    var vimrc_text = textarea.val();

    var vim_power = scouter(vimrc_text);
    show_scouter(vim_power);
  });



})();
