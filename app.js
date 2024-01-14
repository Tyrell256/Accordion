let list = document.querySelectorAll('.list .item');

list.forEach((item) => {
    item.addEventListener('click', function(event) {
        if(item.classList.contains('active')){
            item.classList.remove('active');
                if(event.target.classList.contains('dropdown')){
                    event.target.classList.remove('active');
                }
        }else{
            item.classList.add('active');
        }
    })
})