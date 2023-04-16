let nextBtn = document.getElementById('imageRightSlideBtn'),
prevBtn = document.getElementById('imageLeftSlideBtn'),
images = document.querySelectorAll('.imageList img'),
slider = document.querySelector('.imageList'),
imgCount = images.length;
currentImg = 0;
widthImg = 45;
prevBtn.style.display = 'none';

nextBtn.addEventListener('click', () => {
    currentImg++;
    widthImg -= 23;
    currentImg >= 3 ? widthImg += 0.5 : widthImg = widthImg;
    prevBtn.style.display = 'block';
    if(currentImg >= imgCount - 1)
    {
        nextBtn.style.display = 'none';
    }
    images.forEach(element => {
        element.classList.remove('active');
    });
    slider.style.transform = `translateX(${widthImg}rem)`
    images[currentImg].classList.add('active');
})

prevBtn.addEventListener('click', () => {
    currentImg--;
    widthImg += 23;
    nextBtn.style.display = 'block';
    if(currentImg <= 0)
    {
        prevBtn.style.display = 'none';
    }
    images.forEach(element => {
        element.classList.remove('active');
    });
    slider.style.transform = `translateX(${widthImg}rem)`
    images[currentImg].classList.add('active');
})