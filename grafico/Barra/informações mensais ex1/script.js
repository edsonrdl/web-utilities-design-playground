document.addEventListener('DOMContentLoaded', function() {
    var days = ['day1', 'day2', 'day3', 'day4', 'day5', 'day6', 'day7'];
    var values = [180, 160, 140, 110, 2514, 789, 2954, 180];

    for (var i = 0; i < days.length; i++) {
        var bar = document.querySelector('.' + days[i]);
        bar.style.height = values[i] + 'px';
    }
});