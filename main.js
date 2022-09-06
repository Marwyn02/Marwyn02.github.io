$(function() {
    $('.pop').on('click', function() {
    $('.imagepreview').attr('src', $(this).find('img').attr('src'));
    $('#imagemodal').modal('show');   
        });     
    });

    $(function() {
        // Show selfportrait list 
        $('#btn1').on('click', function(){
            $('#btn1').removeClass('border-stone-100').addClass('border-stone-500');
            $('#selfportrait').fadeIn(500);
            $('#studiorental').fadeOut(500);
            $('#addson').fadeOut(500);
            $('#btn2').removeClass('border-stone-500').addClass('border-stone-100');
            $('#btn3').removeClass('border-stone-500').addClass('border-stone-100');
            $('#btn3').fadeIn(500);
        });

        // Show studio rental list 
        $('#btn2').on('click', function() {
            $('#btn2').removeClass('border-stone-100').addClass('border-stone-500');
            $('#btn3').fadeOut(500);
            $('#studiorental').fadeIn(500);
            $('#selfportrait').fadeOut(500);
            $('#addson').fadeOut(500);
            $('#btn1').removeClass('border-stone-500').addClass('border-stone-100');
        });

        // Show adds on 
        $('#btn3').on('click', function() {
            $('#btn3').removeClass('border-stone-100').addClass('border-stone-500');
            $('#addson').fadeIn(500);
            $('#selfportrait').fadeOut(500);
            $('#btn1').removeClass('border-stone-500').addClass('border-stone-100');
        })
    });

    $('#studiorental').hide();
    $('#addson').hide();

    window.addEventListener('scroll', function() {
        let header = document.querySelector('nav');
        let windowPosition = window.scrollY > 0;
        header.classList.toggle('nav-scroll', windowPosition);
    });