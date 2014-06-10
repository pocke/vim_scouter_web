// vim 戦闘力を計算して返す
var scouter = function (vimrc) {
  return vimrc.split('\n').filter(function (line) {
    return !( /^\s*"/.test(line) || /^\s*$/.test(line) || /^\s*\\/.test(line) );
  }).length;
};

// vim 戦闘力を表示
var show_scouter = function (vim_power) {
  var text = 'あなたのVim戦闘力は<strong>' + vim_power + '</strong>です。';
  var tag = $('<h3>').html(text).hide().fadeIn(500);
  $('#result').html(tag);


  //  for tweet button
  var tweet_btn = $('#tweet_btn');
  var url = 'https://twitter.com/intent/tweet?original_referer=&text=' + encodeURIComponent('私のVim戦闘力は' + vim_power + 'です。') + '&tw_p=tweetbutton&url=http%3A%2F%2Fpocke.github.io%2Fvim_scouter_web%2F';
  tweet_btn.attr('href', url);
};
