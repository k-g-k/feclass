app.displayFriends = function () {
  var friendsHtml = $('#display-friends').html();
  var template = _.template(friendsHtml, {variable: 'm'});

   $.getJSON('/api/friends').done(function(data) {
     $('.output').html(template({friends:data}));
   });

   $('#show-friends-list').click(function () {
     var item = $('.friend-list');
     if (item.hasClass('show-list')) {
       $(item).removeClass('show-list');
     } else {
       $(item).addClass('show-list');
     }
   })
   //
  //  $('#show-friends-list').click(function(){
  //    var item = $('#friend-list');
  //    $(item).addClass('show-list');
  //   });
}

  //
  // if ( $(this).closest('ul').hasClass('.show-hide-list') ) {
  //   $( "#foo" ).hasClass( className );
  // } else {
  //   $( "#foo" ).removeClass( className );
  // }
