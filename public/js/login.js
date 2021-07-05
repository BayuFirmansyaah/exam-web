$('.wrap-eye-view').on('click',function(){
    if($('#password').attr('type') == "password"){
        $('#password').attr('type',"text");
        $('.wrap-eye-view').html(`<i class="fas fa-eye-slash"></i>`)
    }else{
        $('#password').attr('type', "password");
        $('.wrap-eye-view').html(`<i class="fas fa-eye"></i>`)
    }
})