/* ANIMACIONES DOCUMENT READY */


$(document).ready(function () {

    $(".hero__h4").addClass('hero__h4--active')
    $(".hero__line--green").addClass('hero__line--green--active')
    $(".hero__h3").addClass('hero__h3--active')
    $(".hero__p").addClass('hero__p--active')
    $(".features__h3").addClass('features__h3--active')
})

/* ANIMACIONES FEATURES SOFTWARE CARD 1 */

$(document).scroll(function scrollSimulador() {

    if (window.scrollY > ($(".features__col--cards--1").offset().top) - (window.innerHeight / 1.1)) {

        $(".features__col--cards--1").addClass('features__col--cards--1--active')

    }
})

/* ANIMACIONES FEATURES SOFTWARE CARD 2 */

$(document).scroll(function scrollSimulador() {

    if (window.scrollY > ($(".features__col--cards--2").offset().top) - (window.innerHeight / 1.1)) {

        $(".features__col--cards--2").addClass('features__col--cards--2--active')

    }
})

/* ANIMACIONES FEATURES SOFTWARE CARD 3 */

$(document).scroll(function scrollSimulador() {

    if (window.scrollY > ($(".features__col--cards--3").offset().top) - (window.innerHeight / 1.1)) {

        $(".features__col--cards--3").addClass('features__col--cards--3--active')

    }
})

/* ANIMACIONES FEATURES SOFTWARE CARD 4 */

$(document).scroll(function scrollSimulador() {

    if (window.scrollY > ($(".features__col--cards--4").offset().top) - (window.innerHeight / 1.1)) {

        $(".features__col--cards--4").addClass('features__col--cards--4--active')

    }
})

/* ANIMACIONES FEATURES SOFTWARE CARD 5 */

$(document).scroll(function scrollSimulador() {

    if (window.scrollY > ($(".features__col--cards--5").offset().top) - (window.innerHeight / 1.1)) {

        $(".features__col--cards--5").addClass('features__col--cards--5--active')

    }
})

/* ANIMACION BTN FEATURES SOFTWARE */

$(document).scroll(function scrollSimulador() {

    if (window.scrollY > ($(".features__btn").offset().top) - (window.innerHeight / 1.2)) {

        $(".features__btn").addClass('features__btn--active')

    }
})

/* ANIMACION LINE LOGISTIC */

$(document).scroll(function scrollSimulador() {

    if (window.scrollY > ($(".logistic").offset().top) - (window.innerHeight / 1.1)) {

        $(".hero__line--green--logistic").addClass('hero__line--green--logistic--active')

    }
})

/* ANIMACION H4 LOGISTIC */

$(document).scroll(function scrollSimulador() {

    if (window.scrollY > ($(".logistic__h4").offset().top) - (window.innerHeight / 1.1)) {

        $(".logistic__h4").addClass('logistic__h4--active')

    }
})

/* ANIMACION H3 LOGISTIC */

$(document).scroll(function scrollSimulador() {

    if (window.scrollY > ($(".logistic__h3").offset().top) - (window.innerHeight / 1.1)) {

        $(".logistic__h3").addClass('logistic__h3--active')

    }
})

/* ANIMACION P LOGISTIC */

$(document).scroll(function scrollSimulador() {

    if (window.scrollY > ($(".logistic__p").offset().top) - (window.innerHeight / 1.1)) {

        $(".logistic__p").addClass('logistic__p--active')

    }
})

/* ANIMACION H3 LOGISTIC */

$(document).scroll(function scrollSimulador() {

    if (window.scrollY > ($(".features__h3__logistic").offset().top) - (window.innerHeight / 1.1)) {

        $(".features__h3__logistic").addClass('features__h3__logistic--active')

    }
})

/* ANIMACION CARD 1-2 LOGISTIC */

$(document).scroll(function scrollSimulador() {

    if (window.scrollY > ($(".features__col--cards--logistic--1").offset().top) - (window.innerHeight / 1.1)) {

        $(".features__col--cards--logistic--1").addClass('card--active')
        $(".features__col--cards--logistic--2").addClass('card--active')

    }
})