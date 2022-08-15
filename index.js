// $(document).ready(function(){
//     $('.nav_toggle').click(function(){
//         $('.nav_list').toggleClass('show');
//         console.log("123");
//     });
// });


const abc = document.querySelector('.nav_toggle')
const abcD = document.querySelector('.nav_list')
abc.addEventListener('click', function(){
    abcD.classList.toggle("show")
    console.log("123");
    
} )

    // nút search cách 1
// $(document).ready(function(){
//     $('.search-box_btn').click(function(){
//         $('.search-box').toggleClass('open');
//         console.log("123");
//     });
// });

    //  làm nút search cách 2
const btnSearch = document.querySelector('.search-box_btn')
const searchBox = document.querySelector('.search-box')
btnSearch.addEventListener('click', function(){
    searchBox.classList.toggle("open")
    console.log("123");    
} ) 

// var btnSearch = document.querySelector('.search-box_btn')

// btnSearch.addEventListener('click', function(){
//     this.parentElement.classList.toggle('open');
    
// })



/// SLIDER
window.addEventListener("load", function() {
    const slider = document.querySelector(".slider");
    const sliderMain = document.querySelector(".slider-main");
    const sliderItems = document.querySelectorAll(".slider-item");
    const nextBtn = document.querySelector(".slider-next");
    const prevBtn = document.querySelector(".slider-prev");
    const dotItems = document.querySelectorAll(".slider-item");
    const sliderItemWidth = sliderItems[0].offsetWidth;
    // offsetWidth: nói nom na là bạn có thể lấy được kích thước pixel của phần tử HTML. Kích thước được tính bằng cách sử dụng kích thước của nội dung bên trong phần tử HTML bao gôm cả padding, borders, scrollbars nhưng riêng thuộc tính margin thì lại không được offsetWidth và offsetHeight tính toán
    const slidesLength = sliderItems.length;
    let positionX = 0;
    let index = 0;
    console.log("sliderItemWidth", sliderItemWidth);

    nextBtn.addEventListener("click", function() {
        handleChangeSlide(1);
    });

    prevBtn.addEventListener("click", function() {
        handleChangeSlide(-1);
    });
    
    [...dotItems].forEach((item) => 
        item.addEventListener("click", function(e) {
            const slideIndex = parseInt(e.target.dataset.index);
            index = slideIndex;
            console.log(index);
            sliderMain.style = `transform: translateX(${index * sliderItemWidth }px)`;
        })
    );



    function handleChangeSlide(direction) {
        if(direction === 1) {
            index++;
            if(index >= slidesLength ) {
                index = slidesLength;
                return;
            }
            positionX = positionX - sliderItemWidth;
            console.log("handleChangeSlide ~ positionX ",positionX ) ;
            sliderMain.style = `transform: translateX(${positionX}px)`;
            console.log(index);
            console.log("next slide");
        } 
        else if ( direction === -1) {
            index--;
            if(index <= 0) {
                index = 0;
                return;
            }
            positionX = positionX + sliderItemWidth;
            sliderMain.style = `transform: translateX(${positionX}px)`;
            console.log(index);
            console.log("prev slide");
        }
    } 
});