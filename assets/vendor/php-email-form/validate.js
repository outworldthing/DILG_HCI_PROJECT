/**
* PHP Email Form Validation - v2.0
* URL: https://bootstrapmade.com/php-email-form/
* Author: BootstrapMade.com
*/
<<<<<<< HEAD
!(function ($) {
  "use strict";

  $('form.php-email-form').submit(function (e) {
    e.preventDefault();

=======
!(function($) {
  "use strict";

  $('form.php-email-form').submit(function(e) {
    e.preventDefault();
    
>>>>>>> jeff-branch
    var f = $(this).find('.form-group'),
      ferror = false,
      emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

<<<<<<< HEAD
    f.children('input').each(function () { // run all inputs

=======
    f.children('input').each(function() { // run all inputs
     
>>>>>>> jeff-branch
      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;

          case 'email':
            if (!emailExp.test(i.val())) {
              ferror = ierror = true;
            }
            break;

          case 'checked':
<<<<<<< HEAD
            if (!i.is(':checked')) {
=======
            if (! i.is(':checked')) {
>>>>>>> jeff-branch
              ferror = ierror = true;
            }
            break;

          case 'regexp':
            exp = new RegExp(exp);
            if (!exp.test(i.val())) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validate').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
<<<<<<< HEAD
    f.children('textarea').each(function () { // run all inputs
=======
    f.children('textarea').each(function() { // run all inputs
>>>>>>> jeff-branch

      var i = $(this); // current input
      var rule = i.attr('data-rule');

      if (rule !== undefined) {
        var ierror = false; // error flag for current input
        var pos = rule.indexOf(':', 0);
        if (pos >= 0) {
          var exp = rule.substr(pos + 1, rule.length);
          rule = rule.substr(0, pos);
        } else {
          rule = rule.substr(pos + 1, rule.length);
        }

        switch (rule) {
          case 'required':
            if (i.val() === '') {
              ferror = ierror = true;
            }
            break;

          case 'minlen':
            if (i.val().length < parseInt(exp)) {
              ferror = ierror = true;
            }
            break;
        }
        i.next('.validate').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
      }
    });
    if (ferror) return false;

    var this_form = $(this);
    var action = $(this).attr('action');

<<<<<<< HEAD
    if (!action) {
=======
    if( ! action ) {
>>>>>>> jeff-branch
      this_form.find('.loading').slideUp();
      this_form.find('.error-message').slideDown().html('The form action property is not set!');
      return false;
    }
<<<<<<< HEAD

=======
    
>>>>>>> jeff-branch
    this_form.find('.sent-message').slideUp();
    this_form.find('.error-message').slideUp();
    this_form.find('.loading').slideDown();

<<<<<<< HEAD
    if ($(this).data('recaptcha-site-key')) {
      var recaptcha_site_key = $(this).data('recaptcha-site-key');
      grecaptcha.ready(function () {
        grecaptcha.execute(recaptcha_site_key, { action: 'php_email_form_submit' }).then(function (token) {
          php_email_form_submit(this_form, action, this_form.serialize() + '&recaptcha-response=' + token);
        });
      });
    } else {
      php_email_form_submit(this_form, action, this_form.serialize());
    }

=======
    if ( $(this).data('recaptcha-site-key') ) {
      var recaptcha_site_key = $(this).data('recaptcha-site-key');
      grecaptcha.ready(function() {
        grecaptcha.execute(recaptcha_site_key, {action: 'php_email_form_submit'}).then(function(token) {
          php_email_form_submit(this_form,action,this_form.serialize() + '&recaptcha-response=' + token);
        });
      });
    } else {
      php_email_form_submit(this_form,action,this_form.serialize());
    }
    
>>>>>>> jeff-branch
    return true;
  });

  function php_email_form_submit(this_form, action, data) {
    $.ajax({
      type: "POST",
      url: action,
      data: data,
      timeout: 40000
<<<<<<< HEAD
    }).done(function (msg) {
=======
    }).done( function(msg){
>>>>>>> jeff-branch
      if (msg == 'OK') {
        this_form.find('.loading').slideUp();
        this_form.find('.sent-message').slideDown();
        this_form.find("input:not(input[type=submit]), textarea").val('');
      } else {
        this_form.find('.loading').slideUp();
<<<<<<< HEAD
        if (!msg) {
=======
        if(!msg) {
>>>>>>> jeff-branch
          msg = 'Form submission failed and no error message returned from: ' + action + '<br>';
        }
        this_form.find('.error-message').slideDown().html(msg);
      }
<<<<<<< HEAD
    }).fail(function (data) {
      console.log(data);
      var error_msg = "Form submission failed!<br>";
      if (data.statusText || data.status) {
        error_msg += 'Status:';
        if (data.statusText) {
          error_msg += ' ' + data.statusText;
        }
        if (data.status) {
=======
    }).fail( function(data){
      console.log(data);
      var error_msg = "Form submission failed!<br>";
      if(data.statusText || data.status) {
        error_msg += 'Status:';
        if(data.statusText) {
          error_msg += ' ' + data.statusText;
        }
        if(data.status) {
>>>>>>> jeff-branch
          error_msg += ' ' + data.status;
        }
        error_msg += '<br>';
      }
<<<<<<< HEAD
      if (data.responseText) {
=======
      if(data.responseText) {
>>>>>>> jeff-branch
        error_msg += data.responseText;
      }
      this_form.find('.loading').slideUp();
      this_form.find('.error-message').slideDown().html(error_msg);
    });
  }

})(jQuery);
