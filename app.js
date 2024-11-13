let nextBtn = document.querySelector('.next');
let prevBtn = document.querySelector('.prev');

let slider = document.querySelector('.slider');
let sliderList = slider.querySelector('.list');
let thumbnail = slider.querySelector('.thumbnail');
let sliderItems = sliderList.querySelectorAll('.item');
let thumbnailItems = thumbnail.querySelectorAll('.item');

// Set the first item as active
sliderItems[0].classList.add('active');
thumbnailItems[0].classList.add('active');

// Function for next button 
nextBtn.onclick = function() {
    moveSlider('next');
}

// Function for prev button 
prevBtn.onclick = function() {
    moveSlider('prev');
}

function moveSlider(direction) {
    // Get the current active item index
    let activeIndex = Array.from(sliderItems).findIndex(item => item.classList.contains('active'));
    
    if (direction === 'next') {
        // Move to the next item
        let nextIndex = (activeIndex + 1) % sliderItems.length;
        sliderItems[activeIndex].classList.remove('active');
        sliderItems[nextIndex].classList.add('active');
        
        thumbnail.appendChild(thumbnailItems[activeIndex]);
        slider.classList.add('next');
    } else {
        // Move to the previous item
        let prevIndex = (activeIndex - 1 + sliderItems.length) % sliderItems.length;
        sliderItems[activeIndex].classList.remove('active');
        sliderItems[prevIndex].classList.add('active');

        thumbnail.prepend(thumbnailItems[prevIndex]);
        slider.classList.add('prev');
    }

    // Handle animation end
    slider.addEventListener('animationend', function() {
        if (direction === 'next') {
            slider.classList.remove('next');
        } else {
            slider.classList.remove('prev');
        }
    }, { once: true }); // Remove the event listener after it's triggered once
}

// Automatically move to the next slide every 2 seconds
setInterval(() => {
    moveSlider('next');
}, 3000); // 2000 milliseconds = 2 seconds
//***************************************************************** */
  document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.slider .thumbnail .item');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible'); // Add visible class when in view
        } else {
          entry.target.classList.remove('visible'); // Remove visible class when out of view
        }
      });
    });

    items.forEach(item => {
      observer.observe(item); // Observe each item
    });
  });
    window.addEventListener('scroll', function () {
        var homeSection = document.querySelector('.home');
        var content = document.querySelector('.home .content1');
        var mediaIcons = document.querySelector('.home .media-icons');

        var homeBottom = homeSection.getBoundingClientRect().bottom;

        // Check if the home section is out of view
        if (homeBottom <= 0) {
            content.style.display = 'none';
            mediaIcons.style.display = 'none';
        } else {
            content.style.display = 'block';
            mediaIcons.style.display = 'flex'; // Restore the media icons
        }
    });
