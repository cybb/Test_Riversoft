$(document).ready(function () {

  var placeItem = $('.place-list__item');


  countNewObj();


  // функция подсчета и вставки значения количества
  function countNewObj() {
    var fav = $('.border-favorite').length;
    var newEl = $('.newElem').length;
    var countRemove = $('.history-item__removed').length;

    $('.count-for-history-fav').text(fav);
    $('.count-for-history-new').text(newEl);
    $('.count-for-history-del').text(countRemove);
  };


  // избранные
  $('.place-list').delegate('.favorite', 'click', function () {
    $(this).closest(placeItem).toggleClass('border-favorite');
    $(this).toggleClass('colorStar');
    countNewObj();
  });


  // отмечаем блок
  $('.place-list').delegate('.select', 'click', function () {
    $(this).closest(placeItem).toggleClass('checked-bg');
    $(this).toggleClass('checkedItem');
  });


  // удалить отдельный блок
  $('.place-list').delegate('.remove', 'click', function () {

    if (confirm('Удалить эту запись ?') == true) {
      var a = $(this).closest(placeItem).find('.place-list__title').text();

      $(this).closest(placeItem).remove();

      $('.removed').prepend('<li class="history-item__removed">' + a + '</li>');
    }
    countNewObj();
  });


  // удалить отмеченные
  $('.remove-checked').click(function () {

    var a = $('.checkedItem');
    if (a.hasClass('checkedItem') == false) {
      alert('Выберите запись для удаления !');
    } else {
      a.closest(placeItem).remove();
    }
    countNewObj();
  });


  // удалить все записи
  $('.remove-all').click(function () {

    if (confirm('Это действие безвозвратно удалит ВСЕ записи !!!') == true) {
      placeItem.remove();
    }
    countNewObj();
  });


  // открытие мод окна Новая запись
  $('.add-new').click(function () {
    $('.modal-window').css('visibility', 'visible');
  });


  // закрытие мод окна Новой записи
  $('.modal-window__close-icon').click(function () {

    $('.modal-window__close-icon').fadeOut(500,
      function () {
        $('.createNewPost').slideUp(600,
          function () {
            $('.modal-window').fadeOut(300);
          })
      });

  });


  // открытие модального окна истории добавленных
  $('.history-added').click(function () {

    $('.modal-window__added').css('visibility', 'visible');
  });

  // закрытие мод окна истории добавленных
  $('.modal-window__close-icon').click(function () {

    $('.modal-window__close-icon').fadeOut(500,
      function () {
        $('.history-wrap').slideUp(600,
          function () {
            $('.modal-window__added').fadeOut(300);
          })
      });
  });



  // открытие модального окна истории удаленных
  $('.history-removed').click(function () {
    var countRemove = $('.history-item__removed').length;
    if (countRemove > 0) {
      $('.modal-window__removed').css('visibility', 'visible');
    } else {
      alert('Нет удаленых мест !');
    }

  });

  // закрытие мод окна истории удаленных
  $('.modal-window__close-icon').click(function () {

    $('.modal-window__close-icon').fadeOut(500,
      function () {
        $('.history-wrap').slideUp(600,
          function () {
            $('.modal-window__removed').fadeOut(300);
          })
      });

  });


  // извлечение значений, генерация/вставка нового блока
  $('#send-data').click(function () {

    var title = $('[name="titlePost"]').val();
    var image = $('[name="imagePost"]').val();
    var adress = $('[name="adressPost"]').val();
    var contact = $('[name="contactPost"]').val();
    var tArea = $('textarea').val();

    var markup = '<li class="place-list__item  newElem"><div class="place-list__image"><a href="#"><img src="' + image + ' " alt=""></a></div><div class="place-list__desc"><h2 class="place-list__title">' + title + ' </h2><p class="place-list__adress"><span>адрес: </span>' + adress + ' </p> <p class="place-list__contact">контакты:' + contact + '  </p> <p class="place-list__features">' + tArea + ' </p> <div class="place-list__rate"> <div class="place-list__rate--star"> </div> <div class="create-event"> создать событие </div></div> </div> <div class="item-action"> <ul class="item-action__choise"> <li class="favorite" title="в избранные"></li> <li class="select" title="отметить"></li> <li class="remove" title="удалить"></li> </ul> </div>' + ratingStar + ' </li>';

    $('.place-list').prepend(markup);

    $('.modal-window').css('visibility', 'hidden');
    countNewObj();
  });


  // добаление дублирующей разметки
  $(placeItem).append('<div class="item-action"><ul class="item-action__choise"><li class="favorite" title="в избранные"></li><li class="select" title="отметить"></li><li class="remove" title="удалить"></li></ul></div>');

  // добаление дублирующей разметки
  var ratingStar = '<div id="stars"> <span id="star1" class="stars" data-rating="1" style="font-size:200%;color:#EAE9E6;">&bigstar;</span> <span id="star2" class="stars" data-rating="2"  style="font-size:200%;color:#EAE9E6;">&bigstar;</span> <span id="star3" class="stars" data-rating="3"  style="font-size:200%;color:#EAE9E6;">&bigstar;</span> <span id="star4" class="stars" data-rating="4"  style="font-size:200%;color:#EAE9E6;">&bigstar;</span> <span id="star5" class="stars" data-rating="5"  style="font-size:200%;color:#EAE9E6;">&bigstar;</span></div>';

  var ratioText = $('.place-list__rate--ratio');









  //rating
  $(".stars").click(function () {

    $(this).css("color", "gold");
    $(this).prevAll().css("color", "gold");
    $(this).nextAll().css("color", "#EAE9E6");
  });

  $(".stars").hover(function () {
    $(this).css({
      "color": "gold",
      "cursor": "pointer"
    });
    $(this).prevAll().css("color", "gold");
    $(this).nextAll().css("color", "#EAE9E6");
  });
});
