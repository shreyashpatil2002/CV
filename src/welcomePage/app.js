let nextBtn = document.getElementById("imageRightSlideBtn"),
  prevBtn = document.getElementById("imageLeftSlideBtn"),
  images = document.querySelectorAll(".imageList img"),
  slider = document.querySelector(".imageList"),
  imgCount = images.length;
currentImg = 0;
widthImg = 45;
prevBtn.style.display = "none";

nextBtn.addEventListener("click", () => {
  currentImg++;
  widthImg -= 23;
  currentImg >= 3 ? (widthImg += 0.5) : (widthImg = widthImg);
  prevBtn.style.display = "block";
  if (currentImg >= imgCount - 1) {
    nextBtn.style.display = "none";
  }
  images.forEach((element) => {
    element.classList.remove("active");
  });
  slider.style.transform = `translateX(${widthImg}rem)`;
  images[currentImg].classList.add("active");
});

prevBtn.addEventListener("click", () => {
  currentImg--;
  widthImg += 23;
  nextBtn.style.display = "block";
  if (currentImg <= 0) {
    prevBtn.style.display = "none";
  }
  images.forEach((element) => {
    element.classList.remove("active");
  });
  slider.style.transform = `translateX(${widthImg}rem)`;
  images[currentImg].classList.add("active");
});

// Pakages animation

let basicBtn = document.getElementById("arrowRight"),
  primiumBtn = document.getElementById("arrowLeft"),
  basicContent = document.querySelector(".basicPakage"),
  primiumContent = document.querySelector(".primiumPakage");
basicContent.classList.add("active");
primiumContent.classList.remove("active");
primiumContent.classList.add("unactive");
basicBtn.style.display = 'none';


basicBtn.addEventListener("click", () => {
    basicContent.classList.remove("unactive")
    basicContent.classList.add("active");
     primiumContent.classList.remove("active");
     primiumContent.classList.add("unactive");
     basicBtn.style.display = 'none';
     primiumBtn.style.display = 'block';
});

primiumBtn.addEventListener("click", () => {
    primiumContent.classList.remove("unactive");
  primiumContent.classList.add("active");
  basicContent.classList.remove("active");
  basicContent.classList.add("unactive");
  primiumBtn.style.display = 'none';
  basicBtn.style.display = 'block';
});
