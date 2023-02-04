const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add('right_carousel_show');
        }
        else{
            entry.target.classList.remove('show')
        }
    })
});

const hiddenElemts = document.querySelectorAll('.right_carousel_content');
hiddenElemts.forEach((e1) => observer.observer(e1))