(function () {
  Vue.filter('scouter', function (text) {
    return text.split("\n").filter(function (line) {
      return !( /^\s*"/.test(line) || /^\s*$/.test(line) || /^\s*\\/.test(line) );
    }).length.toString();
  });

  var vue_data = {
    text: '',
  };

  var app = new Vue({
    el: '#vue-main',
    data: vue_data,
  });
})();
