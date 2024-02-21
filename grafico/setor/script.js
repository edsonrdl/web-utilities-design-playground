document.addEventListener('DOMContentLoaded', function() {
    var parts = document.querySelectorAll('.part');
    var values = [40, 20, 10, 15, 15];

    for (var i = 0; i < parts.length; i++) {
        parts[i].style.transform = 'rotate(' + values[i] + 'deg)';
    }
});