;(function() {
  var LoginView = (function() {
    return function(auth) {
      $(document).ready(function() {

        var usernameField = $('input[name="username"]');
        var passwordField = $('input[name="password"]');

        $('button').click(function(e) {
          e.preventDefault();
          var username = usernameField.val();
          var password = passwordField.val();
          if (!!username && !!password) {
            auth.login(username, password, function(success) {
              if (!!success)
                window.location.hash = '';
            });
          }
        });
      });
    }
  })();

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = LoginView;
  else
    window.LoginView = LoginView;
})();