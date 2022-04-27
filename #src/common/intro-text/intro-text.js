{
    let stickyBtn = document.querySelector('[data-sticky-btn]');
    if(stickyBtn) {
        let cloneBtn = stickyBtn.cloneNode(true);
        let wrapper = document.createElement('div');
        wrapper.className = 'sticky-btn-wrapper container';
        wrapper.append(cloneBtn);
        document.body.append(wrapper);

        const toggleShow = () => {
            let bottom = stickyBtn.getBoundingClientRect().bottom - document.documentElement.clientHeight;
            let breykpoint = -20;
            
            if(document.documentElement.clientWidth < 768) {
                breykpoint = 100;
            }
            if(bottom < -breykpoint) {
                stickyBtn.classList.add('btn--hide');
                wrapper.style.display = 'block';
            } else {
                stickyBtn.classList.remove('btn--hide');
                wrapper.style.display = 'none';
            }

            document.body.style.paddingBottom = wrapper.clientHeight + 'px';
        }

        toggleShow();
        window.addEventListener('scroll', toggleShow);
    }
}