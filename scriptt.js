function myfunction(){
    document.getElementById("mydropdown").classList.toggle("show");
}
window.onclick=function(event){
    if(!event.target.matches('dropbtn'))
    {
        var dropdowns=document.getElementsByClassName("dropdown-content");
        var i;
        for (i=0;i<dropdowns.length;i++){
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}

//top button
    // Get the button
    let mybutton = document.getElementById("myBtn");
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction()
    };
    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    let image = document.querySelectorAll(".image.loop img");
    let currentImageIndex = 0;
    let interval = setInterval(changeImage, 30);
    function changeImage() {
        let nextImageIndex = (currentImageIndex + 1) % image.length;
        image[currentImageIndex].style.opacity = 0;
        image[nextImageIndex].style.opacity = 1;
        currentImageIndex = nextImageIndex;
    }

    //gallery
    window.addEventListener('load', function () {
        var placeCards = document.querySelectorAll('.place-card');
        placeCards.forEach(function (card) {
            card.addEventListener('click', function () {
                this.classList.toggle('expanded');
            });
        });
    });