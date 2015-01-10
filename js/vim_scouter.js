(function () {
  var scouter = function (text) {
    return text.split("\n").filter(function (line) {
      return !( /^\s*"/.test(line) || /^\s*$/.test(line) || /^\s*\\/.test(line) );
    }).length.toString();
  };

  Vue.filter('scouter', scouter);

  var vue_data = {
    text: '',
  };

  var app = new Vue({
    el: '#vue-main',
    data: vue_data,
    methods: {
      tweet_url: function () {
        if (!this.text) {
          return 'https://twitter.com/intent/tweet?hashtags=VimScouter&original_referer=&text=Vim%20Scouter&tw_p=tweetbutton&url=http%3A%2F%2Fpocke.github.io%2Fvim_scouter_web%2F';
        }

        var power = scouter(this.text);
        return 'https://twitter.com/intent/tweet?hashtags=VimScouter&original_referer=&text=' + encodeURIComponent('私のVim戦闘力は' + power + 'です。') + '&tw_p=tweetbutton&url=http%3A%2F%2Fpocke.github.io%2Fvim_scouter_web%2F';
      },
    },
  });
})();
