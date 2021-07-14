$(function() {
    function showSuccessMsg() {
        $('#msg').show();
    }

    function hideSuccessMsg() {
        $('#msg').hide();
    }

    hideSuccessMsg();

    $('#productForm').submit(function() {
        const price = $('#price').val();
        const name = $("#name").val();

        $.post('/addToCart', { "price": price, "name": name })
            .done(function(data) {
                showSuccessMsg();
                setTimeout(hideSuccessMsg, 3000);
            }).fail(function(x, s, ex) { console.log(x + s + ex) });

        return false;
    })
})