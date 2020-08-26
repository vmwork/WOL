(function () {
const arrowButtonSlider = document.querySelectorAll('.arrow'),
      arrowButtonRight = document.querySelector('.arrow-rigth'),
      arrowButtonLeft = document.querySelector('.arrow-left'),
      sliderContent = document.querySelector('.advantages-list'),
      sliderLineScrolling = document.querySelector('.arrows__line2');

        arrowButtonSlider.forEach(btn => {
            btn.addEventListener('click', (e) => {
                if(btn.classList.contains('arrow-rigth')){
                   sliderContent.style.right = 890 +'px';
                   sliderLineScrolling.style.left = 412 +'px';
                   btn.style.opacity = 0.3;
                   arrowButtonLeft.style.opacity = 1;                
                } else if(btn.classList.contains('arrow-left')){
                    sliderContent.style.right = 0 +'px';
                    sliderLineScrolling.style.left = 0 +'px';
                    btn.style.opacity = 0.3;
                    arrowButtonRight.style.opacity = 1;
                }
                
            })
        })
})();