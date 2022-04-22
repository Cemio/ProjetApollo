$(document).ready(function() {

    function nav() {

        $('.nav-toggle').click(function() {

            $('.nav').toggleClass('open');

        });

    }

    /*  function smoothScroll() {

		\\VOIR main.css ligne 19 scroll-behavior:smooth;
	   }
    */


    function fullSlider() {


        let element = document.querySelector('.banner');
        let items = document.querySelectorAll('.image-slide');
        //console.log(items)

        let index = 0;
        let n = items.length - 1;

        function prev(items) {
            if (index === 0) index = n;
            else index = index - 1;
            return index;
        }

        function next(items) {
            if (index !== n) index = index + 1;
            else index = 0;
            return index;
        }

        element.addEventListener('click', function(e) {
            e.preventDefault();
            if (e.target.classList.contains('prev')) {
                items[index].classList.toggle('active');
                prev(items);
                items[index].classList.toggle('active');
            }
            if (e.target.classList.contains('next')) {
                items[index].classList.toggle('active');
                next(items);
                items[index].classList.toggle('active');
            }
        });


    }







    nav();

    //smoothScroll();

    fullSlider();




});