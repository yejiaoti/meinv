$(document).ready(()=>{
    
    $('#gb-ts').click(()=>{
        $('.tishi').fadeOut('slow')
    })
    
    setTimeout(function() {
        $('.tishi').fadeIn('slow')
    }, 10000);
})