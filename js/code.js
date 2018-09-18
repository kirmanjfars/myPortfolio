function age() {
    let d = new Date();
    d = d.getFullYear();
    d = d - 1998;
    $('#age').html(d);
}





$('.images .image img').mouseover(function () {
  
    let p = $(this).closest('div');
    let text = p.find('p');
    console.log(text);
    $(text).css("margin-top", '-50px').css("transition", "all 1s")

    $('.images .image').mouseleave(function () {

        $('.images .image p').css("margin-top", '0px').css("transition", "all 0s")
    });
});





$('form button img').mouseover(function () {
    $('form button img').attr('src', 'images/paper-plane2.png');
});

$('form button img').mouseleave(function () {
    $('form button img').attr('src', 'images/paper-plane.png');
});

age();