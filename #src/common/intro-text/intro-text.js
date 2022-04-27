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
            if(bottom < -20) {
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