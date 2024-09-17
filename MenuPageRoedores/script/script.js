
document.addEventListener("DOMContentLoaded", function() {
	const carrosselItems = document.querySelectorAll('.carousel .img img, .carousel2 .img2 img');
	carrosselItems.forEach(item => {
		item.style.cursor = 'pointer'; 
		item.addEventListener('click', function() {
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

	// Script duplicado para as classes originais
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


document.addEventListener("DOMContentLoaded", function() {
    const carrosselItems = document.querySelectorAll('.carousel .img img, .carousel2 .img2 img');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('rodent-image');
    const modalName = document.getElementById('rodent-name');
    const modalDescription = document.getElementById('rodent-description');
    const modalHistory = document.getElementById('rodent-history');
    const modalGender = document.getElementById('rodent-gender');
    const modalContact = document.getElementById('rodent-contact');
    const modalAge = document.getElementById('rodent-age');
    const modalLocation = document.getElementById('rodent-location');
    const closeModal = document.querySelector('.close');

    // Dados dos roedores
    const rodentData = {
		"beto.png": {
			name: "Beto",
			image: "/MenuPageRoedores/images/beto.png",
			description: "Beto é um roedor muito ativo e curioso!",
			history: "Beto foi encontrado em um jardim e rapidamente se tornou o explorador da casa, sempre descobrindo novos cantos.",
			gender: "Macho",
			contact: "1234-5678",
			age: "1 ano",
			location: "São Paulo",
			carinho: 85,
			energia: 80,
			sociabilidade: 90
		},
		"chamito.png": {
			name: "Chamito",
			image: "/MenuPageRoedores/images/chamito.png",
			description: "Chamito é muito sociável e adora brincar.",
			history: "Chamito viveu em uma família grande e animada, onde sempre teve companhia para brincar. Ele ama estar rodeado de pessoas.",
			gender: "Macho",
			contact: "5678-1234",
			age: "2 anos",
			location: "Curitiba",
			carinho: 90,
			energia: 70,
			sociabilidade: 85
		},
		"hanzo.png": {
			name: "Hanzo",
			image: "/MenuPageRoedores/images/hanzo.png",
			description: "Hanzo é um roedor aventureiro e cheio de energia.",
			history: "Hanzo foi resgatado de uma área florestal, onde vivia livremente. Agora, ele adora simular aventuras pelo quintal.",
			gender: "Macho",
			contact: "8765-4321",
			age: "3 anos",
			location: "Florianópolis",
			carinho: 80,
			energia: 95,
			sociabilidade: 75
		},
		"jujuba.png": {
			name: "Jujuba",
			image: "/MenuPageRoedores/images/jujuba.png",
			description: "Jujuba é muito carinhosa e adora estar com pessoas.",
			history: "Jujuba sempre foi muito amada pela sua antiga dona, que a mimava com muitos brinquedos e petiscos.",
			gender: "Fêmea",
			contact: "3456-7890",
			age: "1 ano",
			location: "Porto Alegre",
			carinho: 95,
			energia: 60,
			sociabilidade: 85
		},
		"marvin.png": {
			name: "Marvin",
			image: "/MenuPageRoedores/images/marvin.png",
			description: "Marvin é um roedor alegre e ativo.",
			history: "Marvin foi adotado em uma feira de adoção e desde então é a alegria da casa, sempre correndo de um lado para o outro.",
			gender: "Macho",
			contact: "2345-6789",
			age: "2 anos",
			location: "Rio de Janeiro",
			carinho: 82,
			energia: 90,
			sociabilidade: 80
		},
		"oreo.webp": {
			name: "Oreo",
			image: "/MenuPageRoedores/images/oreo.webp",
			description: "Oreo é muito curioso e gosta de explorar.",
			history: "Oreo sempre teve o espírito de exploradora. Desde pequena, ela adora vasculhar os cantos mais escondidos da casa.",
			gender: "Fêmea",
			contact: "6789-1234",
			age: "3 anos",
			location: "Salvador",
			carinho: 88,
			energia: 75,
			sociabilidade: 90
		},
		"pituco.png": {
			name: "Pituco",
			image: "/MenuPageRoedores/images/pituco.png",
			description: "Pituco é um roedor muito brincalhão.",
			history: "Pituco adora brincar com qualquer coisa que encontra, desde pedacinhos de papel até brinquedos coloridos.",
			gender: "Macho",
			contact: "3456-1234",
			age: "4 anos",
			location: "Brasília",
			carinho: 85,
			energia: 65,
			sociabilidade: 70
		},
		"ricardo.png": {
			name: "Ricardo",
			image: "/MenuPageRoedores/images/ricardo.png",
			description: "Ricardo é calmo e adora dormir.",
			history: "Ricardo foi criado em um ambiente tranquilo e calmo, o que o tornou um roedor amante de sonecas e momentos relaxantes.",
			gender: "Macho",
			contact: "4567-8901",
			age: "5 anos",
			location: "Curitiba",
			carinho: 80,
			energia: 85,
			sociabilidade: 80
		},
		"sandy.png": {
			name: "Sandy",
			image: "/MenuPageRoedores/images/sandy.png",
			description: "Sandy é um roedor carinhoso e sociável.",
			history: "Sandy sempre foi muito sociável, adorando o contato com pessoas e outros animais. Ela se dá bem com todos.",
			gender: "Fêmea",
			contact: "5678-9012",
			age: "2 anos",
			location: "Florianópolis",
			carinho: 75,
			energia: 90,
			sociabilidade: 85
		},
		"sky.png": {
			name: "Sky",
			image: "/MenuPageRoedores/images/sky.png",
			description: "Sky é muito ativo e gosta de interagir.",
			history: "Sky foi resgatada ainda filhote e logo mostrou seu lado extrovertido, sempre procurando por atenção e brincadeiras.",
			gender: "Fêmea",
			contact: "6789-0123",
			age: "3 anos",
			location: "Porto Alegre",
			carinho: 88,
			energia: 70,
			sociabilidade: 80
		},
		"toddy.png": {
			name: "Toddy",
			image: "/MenuPageRoedores/images/toddy.png",
			description: "Toddy é um roedor independente e curioso.",
			history: "Toddy gosta de explorar e descobrir coisas por conta própria. Ele sempre foi independente, mas muito curioso.",
			gender: "Macho",
			contact: "7890-1234",
			age: "1 ano",
			location: "Rio de Janeiro",
			carinho: 90,
			energia: 75,
			sociabilidade: 90
		},
		"tofu.png": {
			name: "Tofu",
			image: "/MenuPageRoedores/images/tofu.png",
			description: "Tofu é muito carinhoso e adora estar perto das pessoas.",
			history: "Tofu foi criado em um lar cheio de amor e carinho, o que o fez ser um roedor extremamente apegado aos seus tutores.",
			gender: "Fêmea",
			contact: "8901-2345",
			age: "2 anos",
			location: "Salvador",
			carinho: 85,
			energia: 80,
			sociabilidade: 85
		}
	};
	

    // Configura evento de clique para abrir o modal com as informações do roedor correto
    carrosselItems.forEach(item => {
        item.addEventListener('click', function() {
            const rodentFileName = this.src.split('/').pop(); // Pega o nome da imagem

            if (rodentData[rodentFileName]) {
                const rodent = rodentData[rodentFileName];

                // Atualiza as informações do modal
                modalName.textContent = rodent.name;
                modalImage.src = rodent.image;
                modalDescription.textContent = rodent.description;
				modalHistory.textContent = rodent.history;
                modalGender.textContent = rodent.gender;
                modalContact.textContent = rodent.contact;
                modalAge.textContent = rodent.age;
                modalLocation.textContent = rodent.location;

                // Atualiza as barras de skills
                document.getElementById('carinho').value = rodent.carinho;
                document.getElementById('energia').value = rodent.energia;
                document.getElementById('sociabilidade').value = rodent.sociabilidade;

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