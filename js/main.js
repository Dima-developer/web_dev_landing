$(document).ready(function () {
    $('.portfolio__btn[filter]').click(function () {
        if ($(this).attr('filter') == 'all') {
            if ($(this).attr('val') == 'off') {
                $('.portfolio__btn[filter]').attr('val', 'off');
                $(this).attr('val', 'on');
                $('.portfolio__btn[filter]').removeClass('focused')
                $(this).addClass('focused');
                $('.filter > div').show(300);
            }
        } else
            if ($(this).attr('val') == 'off') {
                $('.portfolio__btn[filter]').attr('val', 'off');
                $(this).attr('val', 'on');
                $('.portfolio__btn[filter]').removeClass('focused');
                $(this).addClass('focused');
                $('.filter > div').hide(300);
                var filter = $(this).attr('filter');
                $('.filter > div[filter=' + filter + ']').show(300);
            }
    });
    $('.portfolio__btn[filter="moc"]').click(function () {
        if ($(this).attr('val') == 'off') {
            $('.portfolio__btn[filter]').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.filter > div').hide(300);
            $('.filter > div[filter="moc"]').show(300);
        }
    });
    $('.portfolio__btn[filter="all"]').click(function () {
        if ($(this).attr('val') == 'off') {
            $('.portfolio__btn[filter]').attr('val', 'off');
            $(this).attr('val', 'on');
            $('.filter > div').show(300);
        }
    });
});
