$(document).ready(function () {

  var placeItem = $('.place-list__item');


  // удалить отдельный блок
  $('.remove').click(function () {



    if (confirm('Удалить эту запись ?') == true) {

      $(this).parent().parent().parent().remove();
    }

  });

  // избранные
  $('.favorite').click(function () {
    $(this).parent().parent().parent().toggleClass('border-favorite');
    $(this).toggleClass('colorStar');
  });

  // отмечаем блок
  $('.select').click(function () {
    $(this).parent().parent().parent().toggleClass('checked-bg');
    $(this).toggleClass('checkedItem');
  });

  // удалить все записи
  $('.remove-all').click(function () {

    if (confirm('Это действие безвозвратно удалит ВСЕ записи !!!') == true) {
      placeItem.remove();
    }

  });

  // удалить отмеченные
  $('.remove-сhecked').click(function () {

    var a = $('.checkedItem');
    console.log(a);

    if (a.hasClass('checkedItem') == false) {
      alert('Выберите запись для удаления !');
    } else {
      a.parent().parent().parent().remove();
    }

  });

  // открытие мод окна

  $('.add-new').click(function () {
    $('.modal-window').css('visibility', 'visible');
  });

  // закрытие мод окна
  $('.modal-window__close-icon').click(function () {

    $('.modal-window__close-icon').fadeOut(500,
      function () {
        $('.createNewPost').slideUp(600,
          function () {
            $('.modal-window').fadeOut(300);
          })
      });

  });

// значения полей

var titlePost = [];
  $('.place-list__title').each(function(){
    titlePost.push(this.text);
  });
console.log(titlePost);



});
