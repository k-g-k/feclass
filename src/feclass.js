$(function(){

  // function redrawFriends() {
  //   var friendsHtml = $('#display-friends').html();
  //   var template = _.template(friendsHtml, {variable: 'm'});
  //
  //    $.getJSON('/api/friends').done(function(data) {
  //      $('.output').html(template({friends:data}));
  //    });
  //  }


   $('.friend-form').submit(function() {
     var newFriend = {
       name: $('input[name=name]').val(),
       gender: $('input[name=gender]:checked').val(),
       college: $('input[name=college]').val()
     };

     $.ajax({
     type: "POST",
     url: '/api/friends',
     data: JSON.stringify(newFriend),
     contentType : 'application/json',
     dataType: 'json'
   }).done(app.displayFriends);

     return false;

   })

  });
