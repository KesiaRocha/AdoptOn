





//Carrossel


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


// MODAL

document.addEventListener("DOMContentLoaded", function() {
    const carrosselItems = document.querySelectorAll('.carousel .img img, .carousel2 .img2 img');
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('dog-image');
    const modalName = document.getElementById('dog-name');
    const modalDescription = document.getElementById('dog-description');
	const modalHistory = document.getElementById('dog-history');
    const modalGender = document.getElementById('dog-gender');
    const modalContact = document.getElementById('dog-contact');
    const modalAge = document.getElementById('dog-age');
    const modalLocation = document.getElementById('dog-location');
    const closeModal = document.querySelector('.close');

    // Dados dos cachorros
    const dogData = {
		"MAX.png": {
			name: "Max",
			image: "/MenuPageCachorros/images/MAX.png",
			description: "Max é um cachorro amigável e enérgico!",
			history: "Max foi resgatado de um abrigo, onde ele vivia desde filhote. Hoje, ele adora brincar e correr pelos parques da cidade.",
			gender: "Macho",
			contact: "1234-5678",
			age: "2 anos",
			location: "São Paulo",
			carinho: 80,
			energia: 90,
			sociabilidade: 75
		},
		"ZEQUINHA.png": {
			name: "Chocolate",
			image: "/MenuPageCachorros/images/ZEQUINHA.png",
			description: "Chocolate adora correr e brincar.",
			history: "Chocolate foi encontrado em um bairro movimentado e rapidamente conquistou a todos com seu jeito carinhoso.",
			gender: "Macho",
			contact: "5643-8970",
			age: "3 anos",
			location: "Curitiba",
			carinho: 78,
			energia: 88,
			sociabilidade: 85
		},
		"CHOCOLATE.png": {
			name: "Chocolate",
			image: "/MenuPageCachorros/images/CHOCOLATE.png",
			description: "Chocolate adora correr e brincar.",
			history: "Chocolate é o parceiro perfeito para quem adora esportes ao ar livre. Ele está sempre pronto para uma aventura.",
			gender: "Macho",
			contact: "5643-8970",
			age: "3 anos",
			location: "Curitiba",
			carinho: 78,
			energia: 88,
			sociabilidade: 85
		},
		"BIBI.png": {
			name: "Bibi",
			image: "/MenuPageCachorros/images/BIBI.png",
			description: "Bibi é uma cadela dócil e muito protetora.",
			history: "Bibi protegeu sua antiga dona por anos antes de ser colocada para adoção. Agora, ela procura um novo lar para continuar espalhando amor.",
			gender: "Fêmea",
			contact: "4321-5678",
			age: "5 anos",
			location: "Porto Alegre",
			carinho: 92,
			energia: 70,
			sociabilidade: 60
		},
		"MELO.webp": {
			name: "Melo",
			image: "/MenuPageCachorros/images/MELO.webp",
			description: "Melo é muito ativo e adora longas caminhadas.",
			history: "Melo foi resgatado de uma estrada movimentada e desde então se tornou um amante das caminhadas e da natureza.",
			gender: "Macho",
			contact: "5432-7890",
			age: "1 ano",
			location: "Florianópolis",
			carinho: 83,
			energia: 95,
			sociabilidade: 78
		},
		"CAFE.png": {
			name: "Café",
			image: "/MenuPageCachorros/images/CAFE.png",
			description: "Café é um cachorro tranquilo que gosta de companhia.",
			history: "Café é o tipo de cachorro que adora companhia. Ele sempre busca uma boa companhia humana para passar o dia.",
			gender: "Macho",
			contact: "6789-1234",
			age: "6 anos",
			location: "Belo Horizonte",
			carinho: 88,
			energia: 65,
			sociabilidade: 72
		},
		"pituco.jpg": {
			name: "Pituco",
			image: "/MenuPageCachorros/images/PITUCO.png",
			description: "Pituco é um cachorro muito ativo e adora brincar ao ar livre.",
			history: "Pituco é cheio de energia e sempre está pronto para uma boa aventura. Ele ama correr e precisa de espaço para gastar sua energia.",
			gender: "Macho",
			contact: "9876-5432",
			age: "3 anos",
			location: "São Paulo",
			carinho: 70,
			energia: 90,
			sociabilidade: 85
		},
		
		"fred.jpg": {
			name: "Fred",
			image: "/MenuPageCachorros/images/fred.jpg",
			description: "Fred é um cachorro carinhoso que adora ficar no colo e receber carinho.",
			history: "Fred é um cachorro calmo e muito afetuoso. Ele ama receber atenção e sempre está por perto em busca de carinho.",
			gender: "Macho",
			contact: "1234-5678",
			age: "5 anos",
			location: "Rio de Janeiro",
			carinho: 95,
			energia: 50,
			sociabilidade: 80
		},
		
		"carlos.webp": {
			name: "Carlos",
			image: "/MenuPageCachorros/images/carlos.webp",
			description: "Carlos é leal e muito protetor.",
			history: "Carlos sempre foi muito protetor com seus donos anteriores, sendo um cão leal e atento aos seus arredores.",
			gender: "Macho",
			contact: "1234-4321",
			age: "3 anos",
			location: "Rio de Janeiro",
			carinho: 86,
			energia: 80,
			sociabilidade: 65
		},
		"nenem.png": {
			name: "Neném",
			image: "/MenuPageCachorros/images/nenem.png",
			description: "Neném é um cão calmo e adora crianças.",
			history: "Neném cresceu em um ambiente com várias crianças, e por isso adora brincar e ser tratado com carinho.",
			gender: "Macho",
			contact: "5678-8765",
			age: "4 anos",
			location: "Brasília",
			carinho: 92,
			energia: 70,
			sociabilidade: 85
		},
		"caju.png": {
			name: "Caju",
			image: "/MenuPageCachorros/images/caju.png",
			description: "Caju é cheio de energia e adora correr.",
			history: "Caju nunca dispensa uma corrida. Ele foi resgatado de um parque, onde corria solto e feliz.",
			gender: "Macho",
			contact: "8765-5678",
			age: "1 ano",
			location: "Salvador",
			carinho: 74,
			energia: 93,
			sociabilidade: 80
		},
		"sandy.webp": {
			name: "Sandy",
			image: "/MenuPageCachorros/images/sandy.webp",
			description: "Sandy é uma cadela carinhosa e muito sociável.",
			history: "Sandy é a cachorrinha mais sociável de todos. Ela adora conhecer pessoas novas e fazer amizades.",
			gender: "Fêmea",
			contact: "9876-5432",
			age: "2 anos",
			location: "Recife",
			carinho: 90,
			energia: 85,
			sociabilidade: 90
		}
	};
	

    // Configura evento de clique para abrir o modal com as informações do cachorro correto
    carrosselItems.forEach(item => {
        item.addEventListener('click', function() {
            const dogFileName = this.src.split('/').pop(); // Pega o nome da imagem

            if (dogData[dogFileName]) {
                const dog = dogData[dogFileName];

                // Atualiza as informações do modal
                modalName.textContent = dog.name;
                modalImage.src = dog.image;
                modalDescription.textContent = dog.description;
				modalHistory.textContent = dog.history;
                modalGender.textContent = dog.gender;
                modalContact.textContent = dog.contact;
                modalAge.textContent = dog.age;
                modalLocation.textContent = dog.location;

                // Atualiza as barras de skills
                document.getElementById('carinho').value = dog.carinho;
                document.getElementById('energia').value = dog.energia;
                document.getElementById('sociabilidade').value = dog.sociabilidade;

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

