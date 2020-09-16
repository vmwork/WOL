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
              const revenueButton = document.querySelectorAll('.revenue-button')
         
              
              revenueButton.forEach(item => {
                
                item.addEventListener('click', () =>{
               
                  if (item.classList.contains('revenue-nav-year__button')){
                    item.children[2].classList.toggle('hidden');
                    item.parentNode.children[1].children[2].classList.add('hidden');
                  }
                  if (item.classList.contains('revenue-nav-monts__button')){
                    item.children[2].classList.toggle('hidden');
                    item.parentNode.children[0].children[2].classList.add('hidden');
                 }
                })
              })
            }
               openRevenueNav()










               function choseYear() {
                const  revenueChangeYear = document.querySelectorAll('.item--year');
                const yearTitle = document.querySelector('.revenue-nav-year__button span')
                revenueChangeYear.forEach(item => {
                  item.addEventListener('click', (e) => {
                    // console.log(item.parentNode.parentNode.children[1].children[0])
                    item.parentNode.parentNode.children[1].children[0].textContent  = e.target.textContent 
                   
                  })
                })
               } 
               choseYear()
               function choseMonts() {
                const revenueChangeMonts = document.querySelectorAll('.item--monts');
                const montsTitle = document.querySelector('.revenue-nav-monts__button span')
                  revenueChangeMonts.forEach(item => {
                    item.addEventListener('click', (e) => {
                      item.parentNode.parentNode.children[1].children[0].textContent = e.target.textContent 
                     
                    })
                  })
              } 
              choseMonts()

              function scrollTeam(){
                try {
                const buttonScroll = document.querySelector('.employeers-scroll'),
                      scrollLine = document.querySelector('.employeers-scroll-wrapper'),
                      scrollList = document.querySelector('.employeers-list'),
                      employeersWrapper = document.querySelector('.employeers-wrapper'),
                      body = document.querySelector('body');
                    
             
                      
                      
                      let step = 0;
                      if(scrollLine){
                                     scrollList.addEventListener('wheel', (e) => {
                        let scrollListHeigth = scrollList.offsetHeight - employeersWrapper.offsetHeight;
                    
                        if(e.deltaY >  0 ){
                         
                         
                          if(scrollList.style.top.split('px')[0] < scrollListHeigth * -1){
                          
                            buttonScroll.style.top = buttonScroll.style.top
                            buttonScroll.style.top = 800 + 'px';
                      
                          } else {
                            step += 100 * -1;
                            scrollList.style.top = step + 'px';
                            buttonScroll.style.top = -step + 'px';
                            if(buttonScroll.style.top.split('px')[0] >= 800){
                              buttonScroll.style.top = 800 + 'px'; 
                             
                            }
                          }
                         
                        
                        }


                        if(e.deltaY <  0 ){
                          if(scrollList.style.top.split('px')[0] >= 0){
                            scrollList.style.top = 0 + 'px';
                            buttonScroll.style.top = 0 + 'px';
                           
                          } else {
                            console.log(step)
                            step += 100;
                          scrollList.style.top = step + 'px';
                          buttonScroll.style.top += buttonScroll.style.top.split('px')[0] - 200 + 'px';
                          }

                        }
                      });


                      }
         

                      const dataLevelIconButton = document.querySelectorAll('.data-level-icon');
                      
                      dataLevelIconButton.forEach(item => {
                        item.addEventListener('click', (e) => {
                          
                          const openLevelElement = item.parentNode.nextElementSibling;
                         
                          if(openLevelElement != null 
                            && openLevelElement.classList.contains('level')  
                            && openLevelElement.childElementCount > 0){
                            if (openLevelElement.classList.contains('closet')){
                              openLevelElement.classList.remove('closet')
                            item.children[0].children[0].style.transform = 'rotate(-270deg)';
                            item.children[0].children[0].firstElementChild.classList.add('active-cicle')
                            } else {
                              openLevelElement.classList.add('closet')
                              item.children[0].children[0].style.transform = 'rotate(0deg)';
                              item.children[0].children[0].firstElementChild.classList.remove('active-cicle')
                            }
                            

                          } else {
                            console.log(item.children[0])
                            const noLevel = document.createElement('div');
                            noLevel.classList.add('level-is-absent');
                            noLevel.textContent = 'keine Daten verfügbar';
                            item.children[0].appendChild(noLevel);

                          }
                        })
                      })
                    
                    }
                      catch {}
              }
              scrollTeam()

              function showUploadDocument(){
                const uploadFile = document.querySelectorAll('.upload-file');
                
                uploadFile.forEach(item => {
                  item.addEventListener('change', () =>{
                    console.dir(item.nextElementSibling.children[0])
                    console.log(item.nextElementSibling)
                    item.nextElementSibling.children[0].textContent = item.files[0].name.substr(0, 10) + '...'
                  
                  })
                })
                
              }
              showUploadDocument()
             function copyLinkReferal(){
              const copyLinkButton = document.querySelector('.copy-link-button'),
                    copyLinkText = document.querySelector('.copy-link-container'),
                    copyLinkBlock = document.querySelector('.copy-link');
try {
copyLinkButton.addEventListener('click', () =>{
  navigator.clipboard.writeText(copyLinkText.textContent)
  .then(() => {
    const linkIsCopy = document.createElement('div');
    linkIsCopy.classList.add('link-is-copyed');
    
    linkIsCopy.textContent = 'Partner Link kopiert';
     copyLinkBlock.appendChild(linkIsCopy);
     const linkIsCopyed = document.querySelector('.link-is-copyed');
     
     setTimeout(() => {
      copyLinkBlock.removeChild(linkIsCopyed)
     }, 1000)

  })
  .catch(err => {
    console.log('', err);
  });

                    })
}
catch{

}
                    
                    
             }
             copyLinkReferal()
              
        })();