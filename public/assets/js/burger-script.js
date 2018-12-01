$(document).ready(function(){
    $('.devour-input').on('submit', function(event){
        event.preventDefault();

        var burgerData = {
            burger_id: $(this).children('.burger-id').val(),
            customer: $(this).children('.customer-name').val() || 'Default'
        };

        $.ajax({
            method: 'PUT',
            url: '/burgers/update',
            data: burgerData
        }).then(function(data){
            location.reload();
        });
    });
});