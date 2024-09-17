// Carrossel

document.addEventListener("DOMContentLoaded", function() {
    const carrosselItems = document.querySelectorAll('.carousel .img img, .carousel2 .img2 img');
    carrosselItems.forEach(item => {
        item.style.cursor = 'pointer'; 
        item.addEventListener('click', function() {
            // Adicione o código para manipular o clique, se necessário.
        });
    });
});

document.addEventListener("DOMContentLoaded", function() { 
    const carousel = document.querySelector(".carousel"); 
    const arrowBtns = document.querySelectorAll(".wrapper i"); 
    const wrapper = document.querySelector(".wrapper"); 

    const firstCard = carousel.querySelector(".card"); 
    const firstCardWidth = firstCard.offsetWidth; 

    let isDragging = false, 
        startX, 
        startScrollLeft, 
        timeoutId; 

    const dragStart = (e) => { 
        isDragging = true; 
        carousel.classList.add("dragging"); 
        startX = e.pageX; 
        startScrollLeft = carousel.scrollLeft; 
    }; 

    const dragging = (e) => { 
        if (!isDragging) return; 
    
        // Calculate the new scroll position 
        const newScrollLeft = startScrollLeft - (e.pageX - startX); 
    
        // Check if the new scroll position exceeds 
        // the carousel boundaries 
        if (newScrollLeft <= 0 || newScrollLeft >= 
            carousel.scrollWidth - carousel.offsetWidth) { 
            
            // If so, prevent further dragging 
            isDragging = false; 
            return; 
        } 
    
        // Otherwise, update the scroll position of the carousel 
        carousel.scrollLeft = newScrollLeft; 
    }; 

    const dragStop = () => { 
        isDragging = false; 
        carousel.classList.remove("dragging"); 
    }; 

    const autoPlay = () => { 
    
        // Return if window is smaller than 800 
        if (window.innerWidth < 800) return; 
        
        // Calculate the total width of all cards 
        const totalCardWidth = carousel.scrollWidth; 
        
        // Calculate the maximum scroll position 
        const maxScrollLeft = totalCardWidth - carousel.offsetWidth; 
        
        // If the carousel is at the end, stop autoplay 
        if (carousel.scrollLeft >= maxScrollLeft) return; 
        
        // Autoplay the carousel after every 2500ms 
        timeoutId = setTimeout(() => 
            carousel.scrollLeft += firstCardWidth, 2500); 
    }; 

    carousel.addEventListener("mousedown", dragStart); 
    carousel.addEventListener("mousemove", dragging); 
    document.addEventListener("mouseup", dragStop); 
    wrapper.addEventListener("mouseenter", () => 
        clearTimeout(timeoutId)); 
    wrapper.addEventListener("mouseleave", autoPlay); 

    // Add event listeners for the arrow buttons to 
    // scroll the carousel left and right 
    arrowBtns.forEach(btn => { 
        btn.addEventListener("click", () => { 
            carousel.scrollLeft += btn.id === "left" ? 
                -firstCardWidth : firstCardWidth; 
        }); 
    });
}); 

/*==============================================================================*/

document.addEventListener("DOMContentLoaded", function() {
    // Script original com as classes novas
    const carousel2 = document.querySelector(".carousel2"); 
    const arrowBtns2 = document.querySelectorAll(".wrapper2 i"); 
    const wrapper2 = document.querySelector(".wrapper2"); 

    const firstCard2 = carousel2.querySelector(".card2"); 
    const firstCardWidth2 = firstCard2.offsetWidth; 

    let isDragging2 = false, 
        startX2, 
        startScrollLeft2, 
        timeoutId2; 

    const dragStart2 = (e) => { 
        isDragging2 = true; 
        carousel2.classList.add("dragging"); 
        startX2 = e.pageX; 
        startScrollLeft2 = carousel2.scrollLeft; 
    }; 

    const dragging2 = (e) => { 
        if (!isDragging2) return; 
    
        // Calculate the new scroll position 
        const newScrollLeft2 = startScrollLeft2 - (e.pageX - startX2); 
    
        // Check if the new scroll position exceeds 
        // the carousel boundaries 
        if (newScrollLeft2 <= 0 || newScrollLeft2 >= 
            carousel2.scrollWidth - carousel2.offsetWidth) { 
            
            // If so, prevent further dragging 
            isDragging2 = false; 
            return; 
        } 
    
        // Otherwise, update the scroll position of the carousel 
        carousel2.scrollLeft = newScrollLeft2; 
    }; 

    const dragStop2 = () => { 
        isDragging2 = false; 
        carousel2.classList.remove("dragging"); 
    }; 

    const autoPlay2 = () => { 
    
        // Return if window is smaller than 800 
        if (window.innerWidth < 800) return; 
        
        // Calculate the total width of all cards 
        const totalCardWidth2 = carousel2.scrollWidth; 
        
        // Calculate the maximum scroll position 
        const maxScrollLeft2 = totalCardWidth2 - carousel2.offsetWidth; 
        
        // If the carousel is at the end, stop autoplay 
        if (carousel2.scrollLeft >= maxScrollLeft2) return; 
        
        // Autoplay the carousel after every 2500ms 
        timeoutId2 = setTimeout(() => 
            carousel2.scrollLeft += firstCardWidth2, 2500); 
    }; 

    carousel2.addEventListener("mousedown", dragStart2); 
    carousel2.addEventListener("mousemove", dragging2); 
    document.addEventListener("mouseup", dragStop2); 
    wrapper2.addEventListener("mouseenter", () => 
        clearTimeout(timeoutId2)); 
    wrapper2.addEventListener("mouseleave", autoPlay2); 

    // Add event listeners for the arrow buttons to 
    // scroll the carousel left and right 
    arrowBtns2.forEach(btn => { 
        btn.addEventListener("click", () => { 
            carousel2.scrollLeft += btn.id === "left2" ? 
                -firstCardWidth2 : firstCardWidth2; 
        }); 
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const carrosselItems = document.querySelectorAll('.carousel .img img, .carousel2 .img2 img');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('cat-image');
    const modalName = document.getElementById('cat-name');
    const modalDescription = document.getElementById('cat-description');
    const modalHistory = document.getElementById('cat-history');
    const modalGender = document.getElementById('cat-gender');
    const modalContact = document.getElementById('cat-contact');
    const modalAge = document.getElementById('cat-age');
    const modalLocation = document.getElementById('cat-location');
    const closeModal = document.querySelector('.close');



    // Dados dos gatos
    const catData = {
        "billy.png": {
            name: "Billy",
            image: "/MenuPageGatos/images/billy.png",
            description: "Billy é um gato brincalhão e muito carinhoso!",
            history: "Billy foi encontrado ainda filhote, sozinho e desnutrido. Hoje, ele é um gato doce e sociável.",
            gender: "Macho",
            contact: "1234-5678",
            age: "2 anos",
            location: "São Paulo",
            carinho: 85,
            energia: 80,
            sociabilidade: 90
        },
        "chico.png": {
            name: "Chico",
            image: "/MenuPageGatos/images/chico.png",
            description: "Chico adora se aninhar e é muito calmo.",
            history: "Chico vivia em um abrigo lotado, mas sempre foi calmo e afetuoso, conquistando todos ao seu redor.",
            gender: "Macho",
            contact: "5678-1234",
            age: "4 anos",
            location: "Curitiba",
            carinho: 90,
            energia: 70,
            sociabilidade: 85
        },
        "frajola.png": {
            name: "Frajola",
            image: "/MenuPageGatos/images/frajola.png",
            description: "Frajola é um gato aventureiro e cheio de energia.",
            history: "Frajola sempre teve espírito aventureiro. Foi encontrado explorando a vizinhança e logo encantou a todos.",
            gender: "Macho",
            contact: "8765-4321",
            age: "3 anos",
            location: "Florianópolis",
            carinho: 80,
            energia: 95,
            sociabilidade: 75
        },
        "kami.png": {
            name: "Kami",
            image: "/MenuPageGatos/images/kami.png",
            description: "Kami é uma gata meiga e adora estar perto dos humanos.",
            history: "Kami foi resgatada de uma casa abandonada. Apesar de tímida, é muito brincalhona!",
            gender: "Fêmea",
            contact: "3456-7890",
            age: "1 ano",
            location: "Porto Alegre",
            carinho: 95,
            energia: 60,
            sociabilidade: 85
        },
        "kennedy.png": {
            name: "Kennedy",
            image: "/MenuPageGatos/images/kennedy.png",
            description: "Kennedy é um gato que adora explorar e brincar.",
            history: "Kennedy sempre foi curioso e brincalhão. Encontrado em um parque, ele ama novas aventuras.",
            gender: "Macho",
            contact: "2345-6789",
            age: "2 anos",
            location: "Rio de Janeiro",
            carinho: 82,
            energia: 90,
            sociabilidade: 80
        },
        "luna.png": {
            name: "Luna",
            image: "/MenuPageGatos/images/luna.png",
            description: "Luna é uma gata doce e afetuosa com todos.",
            history: "Luna foi resgatada de um quintal com outros gatos. Ela se destaca pela sua doçura e afeto.",
            gender: "Fêmea",
            contact: "6789-1234",
            age: "3 anos",
            location: "Salvador",
            carinho: 88,
            energia: 75,
            sociabilidade: 90
        },
        "Miel.png": {
            name: "Miel",
            image: "/MenuPageGatos/images/Miel.png",
            description: "Miel é um gato tranquilo e adora descansar ao sol.",
            history: "Miel foi encontrado em um campo, tranquilo e relaxado. Desde então, adora ficar ao sol e descansar.",
            gender: "Macho",
            contact: "3456-1234",
            age: "5 anos",
            location: "Brasília",
            carinho: 85,
            energia: 65,
            sociabilidade: 70
        },
        "mimi.png": {
            name: "Mimi",
            image: "/MenuPageGatos/images/mimi.png",
            description: "Mimi é uma gata muito curiosa e independente.",
            history: "Mimi é extremamente curiosa e sempre explorou por conta própria. Ela adora investigar cada canto da casa.",
            gender: "Fêmea",
            contact: "4567-8901",
            age: "4 anos",
            location: "Curitiba",
            carinho: 80,
            energia: 85,
            sociabilidade: 80
        },
        "quixote.png": {
            name: "Quixote",
            image: "/MenuPageGatos/images/quixote.png",
            description: "Quixote é um gato ativo e muito brincalhão.",
            history: "Quixote foi resgatado após ser abandonado em um parque. Ele ama brincar e correr atrás de brinquedos.",
            gender: "Macho",
            contact: "5678-9012",
            age: "2 anos",
            location: "Florianópolis",
            carinho: 75,
            energia: 90,
            sociabilidade: 85
        },
        "ferrugem.png": {
            name: "Ferrugem",
            image: "/MenuPageGatos/images/ferrugem.png",
            description: "Ferrugem é um gato tranquilo e muito carinhoso.",
            history: "Ferrugem era de uma família que precisou se mudar e não podia levá-lo. Ele é calmo e afetuoso com todos.",
            gender: "Macho",
            contact: "6789-0123",
            age: "3 anos",
            location: "Porto Alegre",
            carinho: 88,
            energia: 70,
            sociabilidade: 80
        },
        "suzy.png": {
            name: "Suzy",
            image: "/MenuPageGatos/images/suzy.png",
            description: "Suzy é uma gata afetuosa e muito sociável.",
            history: "Suzy foi resgatada de um quintal com muitos gatos. Ela sempre se destacou por ser muito sociável e afetuosa.",
            gender: "Fêmea",
            contact: "7890-1234",
            age: "1 ano",
            location: "Rio de Janeiro",
            carinho: 90,
            energia: 75,
            sociabilidade: 90
        },
        "lasanha.png": {
            name: "Lasanha",
            image: "/MenuPageGatos/images/lasanha.png",
            description: "Lasanha é um gato divertido e cheio de energia.",
            history: "Lasanha foi encontrado perto de uma pizzaria e ganhou esse nome por seu amor por comida. Ele é muito brincalhão.",
            gender: "Macho",
            contact: "8901-2345",
            age: "2 anos",
            location: "Salvador",
            carinho: 85,
            energia: 80,
            sociabilidade: 85
        }
    };
    



    // Configura evento de clique para abrir o modal com as informações do gato correto
    carrosselItems.forEach(item => {
        item.addEventListener('click', function() {
            const catFileName = this.src.split('/').pop(); // Pega o nome da imagem

            if (catData[catFileName]) {
                const cat = catData[catFileName];

                // Atualiza as informações do modal
                modalName.textContent = cat.name;
                modalImage.src = cat.image;
                modalDescription.textContent = cat.description;
                modalHistory.textContent = cat.history;
                modalGender.textContent = cat.gender;
                modalContact.textContent = cat.contact;
                modalAge.textContent = cat.age;
                modalLocation.textContent = cat.location;

                // Atualiza as barras de skills
                document.getElementById('carinho').value = cat.carinho;
                document.getElementById('energia').value = cat.energia;
                document.getElementById('sociabilidade').value = cat.sociabilidade;

                modal.style.display = 'block';
            }
        });
    });

    // Fechar o modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Fecha o modal se o usuário clicar fora da área do modal
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
























