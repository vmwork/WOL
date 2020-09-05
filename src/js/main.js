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
                // плавный скроллинг ----------------------------
                // document.querySelectorAll('a[href^="#"').forEach(link => {
        
                //     link.addEventListener('click', function(e) {
                //         e.preventDefault();
                
                //         let href = this.getAttribute('href').substring(1);
                
                //         const scrollTarget = document.getElementById(href);
                
                //         const topOffset = document.querySelector('.scrollto').offsetHeight;
                //         // const topOffset = 0; // если не нужен отступ сверху 
                //         const elementPosition = scrollTarget.getBoundingClientRect().top;
                //         const offsetPosition = elementPosition - topOffset;
                
                //         window.scrollBy({
                //             top: offsetPosition,
                //             behavior: 'smooth'
                //         });
                //     });
                // });
        // плавный скроллинг END----------------------------
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