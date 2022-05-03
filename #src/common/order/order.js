{
    let orderSlider = document.querySelector('[data-order-slider]');
    if(orderSlider) {
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
                    
                },
            }
        });
    }
}