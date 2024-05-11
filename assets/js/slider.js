document.addEventListener("DOMContentLoaded", function () {
    var s = document.querySelector(".slider"),
      sWrapper = s.querySelector(".slider-wrapper"),
      sItem = s.querySelectorAll(".slide"),
      btn = s.querySelectorAll(".slider-link"),
      sWidth = sItem[0].offsetWidth,
      sCount = sItem.length,
      slide_date = s.querySelector(".slide-date"),
      slide_title = s.querySelector(".slide-title"),
      slide_text = s.querySelector(".slide-text"),
      slide_more = s.querySelector(".slide-more"),
      slide_image = s.querySelector(".slide-image img"),
      sTotalWidth = sCount * sWidth;
  
    sWrapper.style.width = sTotalWidth + "px";
  
    var clickCount = 0;
  
    btn.forEach(function (button) {
      button.addEventListener("click", function (e) {
        e.preventDefault();
  
        if (button.classList.contains("next")) {
          clickCount < sCount - 1 ? clickCount++ : (clickCount = 0);
        } else if (button.classList.contains("prev")) {
          clickCount > 0 ? clickCount-- : (clickCount = sCount - 1);
        }
        sWrapper.style.transform = "translateX(-" + sWidth * clickCount + "px)";
  
        // CONTENT ANIMATIONS
  
        var fromProperties = { opacity: 0, transform: "translate(-50%, -10%)" };
        var toProperties = { opacity: 0.8, transform: "translate(0, 0)" };
  
        TweenLite.fromTo(
          slide_image,
          1,
          { opacity: 0, transform: "translateY(40px)" },
          { opacity: 1, transform: "translateY(0)" }
        );
        TweenLite.fromTo(slide_date, 0.4, fromProperties, toProperties);
        TweenLite.fromTo(slide_title, 0.6, fromProperties, toProperties);
        TweenLite.fromTo(slide_text, 0.8, fromProperties, toProperties);
        TweenLite.fromTo(slide_more, 1, fromProperties, toProperties);
      });
    });
  });
  
  document.querySelector(".overlay").classList.add("overlay-blue");