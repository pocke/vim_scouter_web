(function () {
  var scouter = function (text) {
    return text.split("\n").filter(function (line) {
      return !( /^\s*"/.test(line) || /^\s*$/.test(line) || /^\s*\\/.test(line) );
    }).length.toString();
  };

  Vue.filter('scouter', scouter);


  var app = new Vue({
    el: '#vue-main',
    data: {text: ''},
    methods: {
      tweet_url: function () {
        if (!this.text) {
          return 'https://twitter.com/intent/tweet?hashtags=VimScouter&original_referer=&text=Vim%20Scouter&tw_p=tweetbutton&url=http%3A%2F%2Fpocke.github.io%2Fvim_scouter_web%2F';
        }

        var power = scouter(this.text);
        return 'https://twitter.com/intent/tweet?hashtags=VimScouter&original_referer=&text=' + encodeURIComponent('私のVim戦闘力は' + power + 'です。') + '&tw_p=tweetbutton&url=http%3A%2F%2Fpocke.github.io%2Fvim_scouter_web%2F';
      },
      uploadButton: function (e) {
        e.preventDefault();
        $('#vimrc_upload').click();
      },
      onUpload: function (e) {
        this.read_file(e.target.files[0]);
      },
      onDrop: function (e) {
        this.cancelEvent(e);
        this.read_file(e.dataTransfer.files[0]);
      },
      read_file: function (file) {
        var reader = new FileReader();
        var self = this;
        reader.onload = function (x) {
          self.text = x.target.result;
        };
        reader.readAsText(file, 'UTF-8');
      },
      fileSupport: function () {
        return !!(window.File && window.FileReader && window.FileList && window.Blob);
      },
      cancelEvent: function (e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      },
    },
  });
})();
