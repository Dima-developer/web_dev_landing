$(document).ready(function () {
    $('.portfolio__btn[filter]').click(function () {
        if ($(this).attr('val') == 'off') {
            $('.portfolio__btn[filter]').attr('val', 'off').removeClass('focused');
            $(this).attr('val', 'on').addClass('focused');
            $('.filter > div').hide(300);
            $('.filter > div[filter=' + $(this).attr('filter') + ']').show(300);
            if ($(this).attr('filter') == 'all') {
                $('.portfolio__btn[filter]').attr('val', 'off').removeClass('focused');
                $(this).attr('val', 'on').addClass('focused');
                $('.filter > div').show(300);
            }
        }
    })
})

                // if ($(this).attr('filter') == 'all') {
                //     if ($(this).attr('val') == 'off') {
                //         $('.portfolio__btn[filter]').attr('val', 'off');
                //         $(this).attr('val', 'on');
                //         $('.portfolio__btn[filter]').removeClass('focused')
                //         $(this).addClass('focused');
                //         $('.filter > div').show(300);
                //     }
                // } else
                //     if ($(this).attr('val') == 'off') {
                //         $('.portfolio__btn[filter]').attr('val', 'off');
                //         $(this).attr('val', 'on');
                //         $('.portfolio__btn[filter]').removeClass('focused')
                //         $(this).addClass('focused');
                //         $('.filter > div').hide(300);
                //         var filter = $(this).attr('filter');
                //         $('.filter > div[filter=' + filter + ']').show(300);
//                     }
//             })
// });
