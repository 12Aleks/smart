$(document).ready(function(){
    $('#contact-form').on('submit', function (event) {
        event.preventDefault();

        var formData = new FormData(this);
        formData.append('service_id', 'service_ocq0gmt');
        formData.append('template_id', 'template_gpbIvHiT');
        formData.append('user_id', 'user_kFjNjnFycgYCgyF49YgH0');

        $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false
        }).done(function () {
            alert('Your message has been sent!');
            $('form input[type="email"], form input[type="tel"], form textarea').val('');
        }).fail(function (error) {
            alert('Oops... ' + JSON.stringify(error));
        });
    });
})

