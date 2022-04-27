{
    let orderSlider = document.querySelector('[data-order-slider]');
    if(orderSlider) {
        let radioItems = orderSlider.querySelectorAll('.order__slider-radio-group input[type="radio"]');

        let sliderData = new Swiper(orderSlider, {
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            autoHeight: true,
            speed: 800,
            pagination: {
            	el: orderSlider.querySelector('.swiper-pagination'),
            	clickable: true,
            },
            on: {
                slideChange: function (e) {
                    radioItems[e.activeIndex].checked = true;
                },
            }
        });
    }
}