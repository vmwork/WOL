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

                function openLanguageList(){
                    const openButtonLanguageList = document.querySelector('.language__arrow-down'),
                          languageList = document.querySelector('.language-list');
                    
        
                          openButtonLanguageList.addEventListener('click', () => {
                            languageList.classList.toggle('hidden')
                          })
                }
                openLanguageList()
                function changeLanguage(){
                    const choseLanguageButton = document.querySelectorAll('.chose-language'),
                          choosenLanguage = document.querySelector('.language__wrap picture source');
                         
                        
                          choseLanguageButton.forEach(item => {
                          item.addEventListener('click', () => {
                          choosenLanguage.srcset = item.previousSibling.srcset;
                          document.querySelector('.language-list').classList.toggle('hidden')
                            })
                          })   
                }
                changeLanguage()
        
                function partnerMode(){
        
                }
                partnerMode()
                function investorMode(){
                    
                }
                investorMode()
        })();