const features = document.querySelectorAll(".feature-item")

features.forEach(function(feature){
    feature.addEventListener("mouseenter", function() {
        feature.querySelector("div").style.display = 'flex'
    })
});

features.forEach(function(feature){
    feature.addEventListener("mouseleave", function() {
        feature.querySelector("div").style.display = 'none'
    })
});

