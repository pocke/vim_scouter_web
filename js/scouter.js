// vim 戦闘力を計算して返す
var scouter = function (vimrc) {
  // TODO: 一つ大きくなる?(末尾改行コードの影響?)
  // TODO: 戦闘力を出す
  return vimrc.split('\n').filter(function (line) {
    return !( /^\s*"/.test(line) || /^\s*$/.test(line) || /^\s*\\/.test(line) );
  }).length;
};

// vim 戦闘力を表示
var show_scouter = function (vim_power) {
  var text = 'あなたのVim戦闘力は<strong>' + vim_power + '</strong>です。';
  var tag = $('<h3>').html(text);
  $('#result').html(tag);
};
