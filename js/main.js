/* ===================================
   PARA EMPREENDIMENTOS - JAVASCRIPT
   =================================== */

// ===================================
// MOBILE MENU
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');
    
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Toggle icon between bars and times
            const icon = mobileMenuBtn.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        }
    });
});

// ===================================
// SEARCH FUNCTIONALITY
// ===================================
function realizarBusca() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (searchTerm) {
        // Redirect to imoveis page with search term
        window.location.href = `imoveis.html?busca=${encodeURIComponent(searchTerm)}`;
    } else {
        searchInput.focus();
    }
}

// Allow Enter key to trigger search
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                realizarBusca();
            }
        });
    }
});

// ===================================
// GALLERY FILTER
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.dataset.filter;
            
            galleryItems.forEach(item => {
                if (filter === 'todos' || item.dataset.category === filter) {
                    item.style.display = 'block';
                    item.style.animation = 'fadeIn 0.5s ease';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});

// ===================================
// LIGHTBOX GALLERY
// ===================================
let currentGalleryIndex = 0;
let visibleGalleryItems = [];

document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    
    if (!lightbox) return;
    
    // Update visible items based on current filter
    function updateVisibleItems() {
        visibleGalleryItems = Array.from(galleryItems).filter(item => 
            item.style.display !== 'none'
        );
    }
    
    // Open lightbox when clicking on gallery item
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            updateVisibleItems();
            currentGalleryIndex = visibleGalleryItems.indexOf(item);
            openLightbox();
        });
    });
});

function openLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCategory = document.getElementById('lightbox-category');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxLocation = document.getElementById('lightbox-location');
    
    if (!lightbox || visibleGalleryItems.length === 0) return;
    
    const currentItem = visibleGalleryItems[currentGalleryIndex];
    const img = currentItem.querySelector('img');
    const category = currentItem.querySelector('.gallery-category').textContent;
    const title = currentItem.querySelector('h3').textContent;
    const location = currentItem.querySelector('p').textContent;
    
    lightboxImage.src = img.src;
    lightboxCategory.textContent = category;
    lightboxTitle.textContent = title;
    lightboxLocation.textContent = location;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function prevImage() {
    currentGalleryIndex = (currentGalleryIndex - 1 + visibleGalleryItems.length) % visibleGalleryItems.length;
    openLightbox();
}

function nextImage() {
    currentGalleryIndex = (currentGalleryIndex + 1) % visibleGalleryItems.length;
    openLightbox();
}

// Close lightbox on escape key
document.addEventListener('keydown', function(e) {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox || !lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
        closeLightbox();
    } else if (e.key === 'ArrowLeft') {
        prevImage();
    } else if (e.key === 'ArrowRight') {
        nextImage();
    }
});

// ===================================
// MARKETPLACE FILTERS
// ===================================
function filtrarImoveis() {
    const properties = document.querySelectorAll('.property-item');
    const tipo = document.getElementById('filtroTipo').value;
    const cidade = document.getElementById('filtroCidade').value;
    const bairro = document.getElementById('filtroBairro').value.toLowerCase();
    const areaMin = document.getElementById('filtroAreaMin').value;
    const areaMax = document.getElementById('filtroAreaMax').value;
    const precoMin = document.getElementById('filtroPrecoMin').value;
    const precoMax = document.getElementById('filtroPrecoMax').value;
    const ordenar = document.getElementById('filtroOrdenar').value;
    
    let visibleCount = 0;
    const propertiesArray = Array.from(properties);
    
    properties.forEach(property => {
        const pTipo = property.dataset.tipo;
        const pCidade = property.dataset.cidade;
        const pBairro = property.dataset.bairro.toLowerCase();
        const pArea = parseInt(property.dataset.area);
        const pPreco = parseInt(property.dataset.preco);
        
        let show = true;
        
        // Filter by type
        if (tipo && pTipo !== tipo) show = false;
        
        // Filter by city
        if (cidade && pCidade !== cidade) show = false;
        
        // Filter by neighborhood
        if (bairro && !pBairro.includes(bairro)) show = false;
        
        // Filter by minimum area
        if (areaMin && pArea < parseInt(areaMin)) show = false;
        
        // Filter by maximum area
        if (areaMax && pArea > parseInt(areaMax)) show = false;
        
        // Filter by minimum price
        if (precoMin && pPreco < parseInt(precoMin)) show = false;
        
        // Filter by maximum price
        if (precoMax && pPreco > parseInt(precoMax)) show = false;
        
        property.style.display = show ? 'block' : 'none';
        if (show) visibleCount++;
    });
    
    // Update results count
    const resultsCount = document.getElementById('resultadosCount');
    if (resultsCount) {
        resultsCount.textContent = visibleCount;
    }
    
    // Sort properties
    sortProperties(propertiesArray, ordenar);
}

function sortProperties(properties, ordenar) {
    const container = document.getElementById('propertiesList');
    if (!container) return;
    
    const sorted = properties.sort((a, b) => {
        switch (ordenar) {
            case 'menor-preco':
                return parseInt(a.dataset.preco) - parseInt(b.dataset.preco);
            case 'maior-preco':
                return parseInt(b.dataset.preco) - parseInt(a.dataset.preco);
            case 'maior-area':
                return parseInt(b.dataset.area) - parseInt(a.dataset.area);
            case 'menor-area':
                return parseInt(a.dataset.area) - parseInt(b.dataset.area);
            default:
                return 0;
        }
    });
    
    sorted.forEach(property => {
        if (property.style.display !== 'none') {
            container.appendChild(property);
        }
    });
}

function limparFiltros() {
    document.getElementById('filtroTipo').value = '';
    document.getElementById('filtroCidade').value = '';
    document.getElementById('filtroBairro').value = '';
    document.getElementById('filtroAreaMin').value = '';
    document.getElementById('filtroAreaMax').value = '';
    document.getElementById('filtroPrecoMin').value = '';
    document.getElementById('filtroPrecoMax').value = '';
    document.getElementById('filtroOrdenar').value = 'mais-recentes';
    
    filtrarImoveis();
}

// ===================================
// FAVORITE PROPERTIES
// ===================================
function toggleFavorite(btn) {
    btn.classList.toggle('active');
    const icon = btn.querySelector('i');
    
    if (btn.classList.contains('active')) {
        icon.classList.remove('far');
        icon.classList.add('fas');
        btn.style.background = '#e74c3c';
        btn.style.color = '#white';
    } else {
        icon.classList.remove('fas');
        icon.classList.add('far');
        btn.style.background = '#white';
        btn.style.color = '#333';
    }
}

// ===================================
// PROPERTY MODAL
// ===================================
const propertyData = {
    1: {
        title: 'Loteamento Jardim das Palmeiras',
        type: 'Residencial',
        location: 'Setor Bueno, Goiânia - GO',
        area: '450m²',
        dimensions: '15x30m',
        orientation: 'Norte/Sul',
        price: 'R$ 380.000',
        description: 'Excelente terreno residencial em localização privilegiada no Setor Bueno. Área plana, pronta para construir. Documentação 100% regularizada. Próximo a supermercados, escolas e facilidades.',
        features: ['Água e esgoto', 'Energia elétrica', 'Iluminação pública', 'Asfalto', 'Próximo a transporte']
    },
    2: {
        title: 'Terreno Comercial Av. Goiás',
        type: 'Comercial',
        location: 'Centro, Goiânia - GO',
        area: '600m²',
        dimensions: '20x30m',
        orientation: 'Leste/Oeste',
        price: 'R$ 750.000',
        description: 'Ótima oportunidade de investimento! Terreno comercial em avenida de grande fluxo. Ideal para comércio ou serviços. Alta visibilidade e fácil acesso.',
        features: ['Alto fluxo de pessoas', 'Excelente localização', 'Zoneamento comercial', 'Fácil acesso', 'Próximo ao centro']
    },
    3: {
        title: 'Condomínio Reserva do Lago',
        type: 'Condomínio',
        location: 'Jardim Goiás, Goiânia - GO',
        area: '800m²',
        dimensions: '20x40m',
        orientation: 'Norte/Sul',
        price: 'R$ 1.200.000',
        description: 'Luxuoso terreno em condomínio fechado com infraestrutura completa. Segurança 24h, lago, área de lazer e muito mais. O lugar perfeito para sua casa dos sonhos.',
        features: ['Segurança 24h', 'Portaria blindada', 'Lago', 'Piscina', 'Academia', 'Salão de festas', 'Quadra poliesportiva']
    }
};

function abrirModalProperty(id) {
    const modal = document.getElementById('propertyModal');
    const modalBody = document.getElementById('modalBody');
    
    const data = propertyData[id] || propertyData[1];
    
    modalBody.innerHTML = `
        <div class="modal-header">
            <span class="property-type">${data.type}</span>
            <h2>${data.title}</h2>
            <p class="property-location"><i class="fas fa-map-marker-alt"></i> ${data.location}</p>
        </div>
        <div class="modal-details">
            <div class="detail-item">
                <i class="fas fa-ruler-combined"></i>
                <span>Área: <strong>${data.area}</strong></span>
            </div>
            <div class="detail-item">
                <i class="fas fa-vector-square"></i>
                <span>Dimensões: <strong>${data.dimensions}</strong></span>
            </div>
            <div class="detail-item">
                <i class="fas fa-compass"></i>
                <span>Orientação: <strong>${data.orientation}</strong></span>
            </div>
        </div>
        <div class="modal-description">
            <h3>Descrição</h3>
            <p>${data.description}</p>
        </div>
        <div class="modal-features">
            <h3>Características</h3>
            <ul>
                ${data.features.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('')}
            </ul>
        </div>
        <div class="modal-price">
            <span class="price-label">Valor:</span>
            <span class="price-value">${data.price}</span>
        </div>
        <div class="modal-actions">
            <a href="#" class="btn-whatsapp" onclick="abrirWhatsApp('${data.title}')"><i class="fab fa-whatsapp"></i> WhatsApp</a>
            <button class="btn-details" onclick="fecharModal()">Fechar</button>
        </div>
    `;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function fecharModal() {
    const modal = document.getElementById('propertyModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal on escape key
document.addEventListener('keydown', function(e) {
    const modal = document.getElementById('propertyModal');
    if (modal && modal.classList.contains('active') && e.key === 'Escape') {
        fecharModal();
    }
});

// ===================================
// CONTACT FORM
// ===================================
function enviarFormulario(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    
    // Simulate form submission
    const submitBtn = form.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        form.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }, 2000);
}

function mascararTelefone(input) {
    let value = input.value.replace(/\D/g, '');
    value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    value = value.replace(/(\d)(\d{4})$/, '$1-$2');
    input.value = value.substring(0, 15);
}

// ===================================
// WHATSAPP INTEGRATION
// ===================================
function abrirWhatsApp(propertyTitle) {
    const phone = '5562999999999';
    const message = `Olá! Tenho interesse no terreno "${propertyTitle}". Poderia me fornecer mais informações?`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// ===================================
// NEWSLETTER SUBSCRIPTION
// ===================================
function inscreverNewsletter(event) {
    event.preventDefault();
    
    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;
    
    // Simulate subscription
    alert(`Obrigado! O e-mail ${email} foi cadastrado em nossa newsletter.`);
    form.reset();
}

// ===================================
// FAQ ACCORDION
// ===================================
function toggleFaq(button) {
    const faqItem = button.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// ===================================
// STATS COUNTER ANIMATION
// ===================================
function animateStats() {
    const stats = document.querySelectorAll('.stats-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.dataset.target);
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                stat.textContent = target + '+';
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current);
            }
        }, 16);
    });
}

// Intersection Observer for stats animation
document.addEventListener('DOMContentLoaded', function() {
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(statsSection);
    }
});

// ===================================
// BLOG SEARCH
// ===================================
function buscarBlog(event) {
    event.preventDefault();
    const searchInput = document.getElementById('blogSearch');
    const searchTerm = searchInput.value.trim();
    
    if (searchTerm) {
        alert(`Buscando artigos sobre: "${searchTerm}"`);
        // In a real application, this would filter or search blog posts
    }
}

// ===================================
// VIEW OPTIONS (Grid/List)
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const viewBtns = document.querySelectorAll('.view-btn');
    const propertiesList = document.getElementById('propertiesList');
    
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            viewBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const view = this.dataset.view;
            
            if (propertiesList) {
                if (view === 'list') {
                    propertiesList.style.gridTemplateColumns = '1fr';
                    // Add list view specific styles
                    propertiesList.querySelectorAll('.property-item').forEach(item => {
                        item.style.display = 'flex';
                        item.style.flexDirection = 'row';
                    });
                } else {
                    propertiesList.style.gridTemplateColumns = 'repeat(auto-fill, minmax(300px, 1fr))';
                    propertiesList.querySelectorAll('.property-item').forEach(item => {
                        item.style.display = 'block';
                    });
                }
            }
        });
    });
});

// ===================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ===================================
// SCROLL ANIMATIONS
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.feature-card, .property-card, .team-card, .mvv-card, .blog-post, .gallery-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===================================
// URL PARAMS HANDLING (for search)
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const buscaParam = urlParams.get('busca');
    
    if (buscaParam) {
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.value = buscaParam;
        }
        
        // Auto-filter properties if on imoveis page
        const filtroBairro = document.getElementById('filtroBairro');
        if (filtroBairro) {
            filtroBairro.value = buscaParam;
            filtrarImoveis();
        }
    }
});

// ===================================
// ADD MODAL STYLES DYNAMICALLY
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    const modalStyles = `
        .modal-header {
            margin-bottom: 25px;
        }
        .modal-header .property-type {
            display: inline-block;
            background: var(--light-bg);
            color: var(--primary-color);
            padding: 5px 15px;
            border-radius: 15px;
            font-size: 0.9rem;
            font-weight: 500;
            margin-bottom: 10px;
        }
        .modal-header h2 {
            font-size: 1.8rem;
            margin-bottom: 10px;
        }
        .modal-header .property-location {
            color: var(--text-light);
        }
        .modal-details {
            display: flex;
            gap: 30px;
            padding: 20px;
            background: var(--light-bg);
            border-radius: 10px;
            margin-bottom: 25px;
        }
        .detail-item {
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .detail-item i {
            color: var(--primary-color);
            font-size: 1.2rem;
        }
        .modal-description h3,
        .modal-features h3 {
            font-size: 1.2rem;
            margin-bottom: 15px;
        }
        .modal-description {
            margin-bottom: 25px;
        }
        .modal-description p {
            color: var(--text-light);
            line-height: 1.8;
        }
        .modal-features ul {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
        }
        .modal-features li {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 8px 0;
        }
        .modal-features li i {
            color: var(--primary-color);
        }
        .modal-price {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 20px;
            background: linear-gradient(135deg, var(--primary-color), var(--primary-dark));
            border-radius: 10px;
            margin: 25px 0;
        }
        .price-label {
            color: rgba(255, 255, 255, 0.8);
            font-size: 1.1rem;
        }
        .price-value {
            color: var(--white);
            font-size: 2rem;
            font-weight: 700;
        }
        .modal-actions {
            display: flex;
            gap: 15px;
        }
        .modal-actions .btn-whatsapp,
        .modal-actions .btn-details {
            flex: 1;
            padding: 15px;
            text-align: center;
            border-radius: 8px;
            font-weight: 500;
            cursor: pointer;
            border: none;
            font-family: var(--font-primary);
        }
        .modal-actions .btn-whatsapp {
            background: #25D366;
            color: var(--white);
        }
        .modal-actions .btn-details {
            background: var(--primary-color);
            color: var(--white);
        }
        
        @media (max-width: 768px) {
            .modal-details {
                flex-direction: column;
                gap: 15px;
            }
            .modal-features ul {
                grid-template-columns: 1fr;
            }
            .modal-actions {
                flex-direction: column;
            }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.textContent = modalStyles;
    document.head.appendChild(styleSheet);
});