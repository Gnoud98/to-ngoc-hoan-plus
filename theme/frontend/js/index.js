var FUNCTION = (function () {
    var slide = function () {
        $('.slider').slick({
            infinite: true,
            dots: true,
            arrows: false,
            // autoplay: true,
            autoplaySpeed: 1000,
            fadeSpeed: 1000
        });
        $('.list-feedback-slider').slick({
            infinite: true,
            dots: true,
            // autoplay: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            autoplaySpeed: 1000,
            arrows: true,
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 4
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 4
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    }
    var backToTop = function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > $('.slider').height()) {
                $('.back-top').fadeIn();
            } else {
                $('.back-top').fadeOut();
            }
        });
        $(".back-top").click(function () {
            $("html, body").animate({ scrollTop: 0 }, 500);
        });

    }
    var menuMobile = function () {            
        $('.btn').click(function () {
            $(this).toggleClass("click");
            $(".menu-mb").toggleClass("nav-menu");

        });
        $('.menu-mb').find("ul li").each(function() {
            if($(this).find('ul>li').length > 0){
              $(this).prepend('<i></i>');
            }
          });

        $('.menu-mb').find('li i').click(function(event) {
            var ul=$(this).nextAll("ul");
            if(ul.is(":hidden") === true ){
              $(this).addClass('active');
              ul.slideDown(300);
            }else{
              $(this).removeClass('active');
              ul.slideUp(300);
            }
          });
          $(window).click(function(e){
            if($('.menu-mb').has(e.target).length == 0 && !$('.menu-mb').is(e.target) && $('.btn').has(e.target).length == 0 && !$('.btn').is(e.target)){
                $('.menu-mb').removeClass("nav-menu");
                $('.menu-mb').removeClass("active");
              }
        });
        
    }
    var validForm_dk = function () {
        var registrationForm = $("#registration")
        if (registrationForm.length > 0) {
            registrationForm.validate({
                rules: {
                    username: {
                        required: true,
                        username: true,


                    },
                    email: {
                        required: true,
                        email: true
                    },
                    password: {
                        required: true,
                        minlength: 5,

                    },
                    repass: {
                        required: true,
                        equalTo: '#password '
                    },
                    phone: {
                        required: true,

                    }
                },
                messages: {
                    username: {
                        required: "Bạn chưa nhập tên !",
                        minlength: "Tên từ 5 ký tự trở lên"
                    },
                    email: {
                        required: 'Nhập email !',
                        email: 'Hãy nhập đúng định dạng!'

                    },
                    password: {
                        required: 'Nhập mật khẩu!',
                        minlength: "Mật khẩu từ 5-20 ký tự",

                    },
                    repass: {
                        required: 'Hãy nhập lại mật khẩu!',
                        equalTo: 'Mật khẩu không khớp, hãy nhập lại!',
                        minlength: 5
                    },
                    phone: {
                        required: 'Hãy nhập số điện thoại!'
                    }
                }
            });
        }
    }
    var paddingTop= function(){
        $(document).ready(function(){
            $(".breadcrumb_pd").css('padding-top',
            $(".fixed").innerHeight() + 10);
        })
    }
  
    return {
        _: function () {
            slide();
            backToTop();
            menuMobile();
            validForm_dk();
            paddingTop();
        }
    };

})();
$(function () {
    FUNCTION._()
});


// var modal = document.getElementById("myModal");
// var modaldk=document.getElementById("myModaldk")

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");
// var btn1=document.getElementById("myBtn1");
// var btndk=document.getElementById("btnDk");
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }
// btn1.onclick = function() {
//     modal.style.display = "block";
//   }
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }
// btndk.onclick=function(){
//     modal.style.display="none";
//     modaldk.display="block";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//     modaldk.style.display = "none";
//   }
// }


