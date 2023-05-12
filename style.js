$('#cc').fadeOut(5000)//affichage esme hanout 

        window.addEventListener('scroll', function(){
            var header =document.querySelector('header');
            header.classList.toggle("sticky", window.scrollY > 400 );//sticky heya tfexi navbar matahebtch
        });
    
       


    var popup = document.getElementById("popup")

    function openPopup () {
        popup.classList.add("open-popup")
    }

    function closePopup () {
        popup.classList.remove("open-popup")
    }