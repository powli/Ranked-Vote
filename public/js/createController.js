var id = 1;

/**
 * Copies the prototype option, updates id and name attributes to current index and pastes it
 * into the available options, increases the index afterwards
 */
$('#addButton').click(function () {
    var option = $('#optionPrototype').clone();
    option.find('label').attr('for', function (i, val) {
        return val + id;
    });
    option.find('.form-control').attr('id', function (i, val) {
        return val + id;
    });
    option.find('.form-control').attr('name', function (i, val) {
        return 'option[' + id + '][' + val + ']';
    });
    $('#optionsContainer').append(option.html());
    id++;
});

/**
 * Removes the last added option from the list and decreases the index
 */
$('#removeButton').click(function () {
    /* @TODO: fill with magic */
});

/**
 * Automatically en/disables the password input field depending on the selected access type
 */
$('#access').change(function () {
    if (this.value === 'password') {
        $('#password-group').show();
        $('#password').prop('disabled', false);
    } else {
        $('#password-group').hide();
        $('#password').prop('disabled', true);
    }
});
