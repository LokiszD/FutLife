function barOpen(){

    let mediaQuery = window.matchMedia('(max-width: 425px)')
    let ulOpen = document.getElementById('nav ul')

    if(mediaQuery.matches){
        if(ulOpen.style.right == '100vh'){
            ulOpen.style.width = '0px'
        }else{
            ulOpen.style.width = '100vh' 
        }
    }

}