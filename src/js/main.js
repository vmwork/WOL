(function () {



        const arrowButtonSlider = document.querySelectorAll('.arrow'),
              arrowButtonRight = document.querySelector('.arrow-rigth'),
              arrowButtonLeft = document.querySelector('.arrow-left'),
              sliderContent = document.querySelector('.advantages-list'),
              sliderLineScrolling = document.querySelector('.arrows__line2');
        
                arrowButtonSlider.forEach(btn => {
                    btn.addEventListener('click', (e) => {
                      let right = 890;
                      let left = 412;
                      if(window.screen.width < 1025){
                         right = 560;
                         left = 206;
                      }
                    
                        if(btn.classList.contains('arrow-rigth')){
                           sliderContent.style.right = right +'px';
                           sliderLineScrolling.style.left = left +'px';
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

            function openRevenueNav(){
              const revenueButton = document.querySelectorAll('.revenue-button'),
              revenueYearMenu = document.querySelector('.revenue-nav-year__item'),
               revenuemontsMenu = document.querySelector('.revenue-nav-monts__item');
              revenueButton.forEach(item => {
                
                item.addEventListener('click', () =>{
               
                  if (item.classList.contains('revenue-nav-year__button')){
                     revenueYearMenu.classList.toggle('hidden');
                     revenuemontsMenu.classList.add('hidden');
                  }
                  if (item.classList.contains('revenue-nav-monts__button')){
                    revenuemontsMenu.classList.toggle('hidden');
                    revenueYearMenu.classList.add('hidden');
                 }
                })
              })
            }
               openRevenueNav()
               function choseYear() {
                const  revenueChangeYear = document.querySelectorAll('.revenue-nav-year__item');
                const yearTitle = document.querySelector('.revenue-nav-year__button span')
                revenueChangeYear.forEach(item => {
                  item.addEventListener('click', (e) => {
                    yearTitle.textContent = e.target.textContent 
                   
                  })
                })
               } 
               choseYear()
               function choseMonts() {
                const revenueChangeMonts = document.querySelectorAll('.revenue-nav-monts__item');
                const montsTitle = document.querySelector('.revenue-nav-monts__button span')
                  revenueChangeMonts.forEach(item => {
                    item.addEventListener('click', (e) => {
                      montsTitle.textContent = e.target.textContent 
                     
                    })
                  })
              } 
              choseMonts()
            
        })();