
  (() => {
    const wonders = {
      1: {
        title: "Great Wall of China",
        description: "A series of fortifications built along the historical northern borders of China to protect against invasions.",
        image: "great-wall-china-national-geographic.webp",
        alt: "Great Wall of China",
      },
      2: {
        title: "Christ the Redeemer",
        description: "Iconic statue in Rio de Janeiro, Brazil, symbolizing peace and Christianity, standing 30 meters tall.",
        image: "christ-the-redeemer-statue-rio-1-scaled.webp",
        alt: "Christ the Redeemer",
      },
      3: {
        title: "Machu Picchu",
        description: "An Incan citadel set high in the Andes Mountains in Peru, famous for its sophisticated dry-stone walls.",
        image: "machu-picchu-world-wonder.webp",
        alt: "Machu Picchu",
      },
      4: {
        title: "Taj Mahal",
        description: "A white marble mausoleum built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal.",
        image: "the-taj-mahal-architectural-digest.webp",
        alt: "Taj Mahal",
      },
      5: {
        title: "Colosseum",
        description: "An ancient amphitheater in Rome, Italy, known for gladiatorial contests and public spectacles.",
        image: "colosseum-world-wonder-national-geographic.webp",
        alt: "Colosseum",
      },
      6: {
        title: "Chichen Itza",
        description: "A large pre-Columbian archaeological site built by the Maya civilization in the Yucatán Peninsula, Mexico.",
        image: "chichen-itza-image-1-1.webp",
        alt: "Chichen Itza",
      },
      7: {
        title: "Petra",
        description: "A historical and archaeological city in southern Jordan famous for its rock-cut architecture and water conduit system.",
        image: "petra-jordan-world-wonder-scaled-1.webp",
        alt: "Petra",
      }
    };

    const modalBackdrop = document.querySelector('.modal-backdrop');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-desc');
    const modalClose = document.querySelector('.modal-close');

    function openModal(id) {
      const wonder = wonders[id];
      modalImg.src = wonder.image;
      modalImg.alt = wonder.alt;
      modalTitle.textContent = wonder.title;
      modalDesc.textContent = wonder.description;
      modalBackdrop.classList.add('active');
      modalClose.focus();
    }

    function closeModal() {
      modalBackdrop.classList.remove('active');
      modalImg.src = '';
      modalImg.alt = '';
    }

   
    document.querySelectorAll('.card').forEach(card => {
      card.addEventListener('click', () => {
        openModal(card.dataset.id);
      });
      card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openModal(card.dataset.id);
        }
      });
    });


    modalClose.addEventListener('click', closeModal);

  
    window.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modalBackdrop.classList.contains('active')) {
        closeModal();
      }
    });

    
    modalBackdrop.addEventListener('click', e => {
      if (e.target === modalBackdrop) {
        closeModal();
      }
    });
  })();
