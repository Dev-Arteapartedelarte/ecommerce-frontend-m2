/**
 * main.js
 * Funciones de utilidad y renderizado de productos
 * 
 * Contenido:
 * - Renderizado de productos en Home
 * - Manejo de eventos
 * - Utilidades generales
 */

/**
 * Renderiza las tarjetas de productos en la página principal
 */
function renderProducts() {
  const productsContainer = document.getElementById('products-container');
  
  if (!productsContainer) {
    return; // No estamos en la página de productos
  }
  
  const products = getAllProducts();
  
  productsContainer.innerHTML = products.map(product => `
    <div class="col">
      <article class="card h-100 product-card shadow-sm">
        <img src="${product.image}" class="card-img-top product-image" alt="${product.name}" loading="lazy">
        <div class="card-body d-flex flex-column">
          <span class="badge bg-primary mb-2 align-self-start">${product.category}</span>
          <h3 class="card-title h5">${product.name}</h3>
          <p class="card-text text-muted flex-grow-1">${product.description}</p>
          <div class="d-flex justify-content-between align-items-center mt-3">
            <span class="h4 mb-0 text-primary fw-bold">${formatPrice(product.price)}</span>
            <div class="btn-group" role="group">
              <a href="detalle.html?id=${product.id}" class="btn btn-outline-primary btn-sm" aria-label="Ver detalles de ${product.name}">
                <i class="bi bi-eye"></i> Ver
              </a>
              <button 
                class="btn btn-primary btn-sm add-to-cart-btn" 
                data-product-id="${product.id}"
                aria-label="Agregar ${product.name} al carrito">
                <i class="bi bi-cart-plus"></i> Agregar
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  `).join('');
  
  // Agregar event listeners a los botones de agregar al carrito
  attachCartButtonListeners();
}

/**
 * Agrega event listeners a los botones de agregar al carrito
 * Usa delegación de eventos para mejor rendimiento
 */
function attachCartButtonListeners() {
  const productsContainer = document.getElementById('products-container');
  
  if (!productsContainer) {
    return;
  }
  
  // Delegación de eventos: un solo listener en el contenedor
  productsContainer.addEventListener('click', function(e) {
    // Buscar el botón más cercano (puede ser el botón o un hijo del botón como el ícono)
    const button = e.target.closest('.add-to-cart-btn');
    
    if (button) {
      const productId = parseInt(button.dataset.productId);
      addToCart(productId, 1);
      
      // Feedback visual: animar el botón
      button.classList.add('btn-success');
      const originalContent = button.innerHTML;
      button.innerHTML = '<i class="bi bi-check2"></i> Agregado';
      
      setTimeout(() => {
        button.innerHTML = originalContent;
        button.classList.remove('btn-success');
      }, 1000);
    }
  });
}

/**
 * Renderiza los detalles de un producto en la página de detalle
 */
function renderProductDetail() {
  // Obtener el ID del producto desde la URL
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get('id'));
  
  if (!productId) {
    showProductNotFound();
    return;
  }
  
  const product = getProductById(productId);
  
  if (!product) {
    showProductNotFound();
    return;
  }
  
  // Actualizar el título de la página
  document.title = `${product.name} - SoftHub Solutions`;
  
  // Actualizar el contenido
  const detailContainer = document.getElementById('product-detail-container');
  
  if (!detailContainer) {
    return;
  }
  
  detailContainer.innerHTML = `
    <div class="row g-4">
      <!-- Imagen del producto -->
      <div class="col-lg-6">
        <div class="product-detail-image">
          <img src="${product.image}" alt="${product.name}" class="img-fluid rounded shadow-lg">
        </div>
      </div>
      
      <!-- Información del producto -->
      <div class="col-lg-6">
        <div class="product-info">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="index.html">Inicio</a></li>
              <li class="breadcrumb-item active" aria-current="page">${product.name}</li>
            </ol>
          </nav>
          
          <span class="badge bg-primary mb-3">${product.category}</span>
          <h1 class="display-5 fw-bold mb-3">${product.name}</h1>
          <p class="lead text-muted mb-4">${product.description}</p>
          
          <div class="price-section mb-4 p-3 bg-light rounded">
            <p class="text-muted mb-1">Precio de licencia única</p>
            <h2 class="display-4 text-primary fw-bold mb-0">${formatPrice(product.price)}</h2>
            <small class="text-muted">IVA incluido</small>
          </div>
          
          <div class="d-flex gap-2 mb-4">
            <div class="input-group" style="max-width: 150px;">
              <button class="btn btn-outline-secondary" type="button" id="decrease-quantity">
                <i class="bi bi-dash"></i>
              </button>
              <input type="number" class="form-control text-center" id="quantity-input" value="1" min="1" max="10" aria-label="Cantidad">
              <button class="btn btn-outline-secondary" type="button" id="increase-quantity">
                <i class="bi bi-plus"></i>
              </button>
            </div>
            <button class="btn btn-primary btn-lg flex-grow-1" id="add-to-cart-detail">
              <i class="bi bi-cart-plus me-2"></i>Agregar al Carrito
            </button>
          </div>
          
          <div class="features-section mb-4">
            <h3 class="h5 fw-bold mb-3"><i class="bi bi-star text-warning me-2"></i>Características Principales</h3>
            <ul class="list-unstyled">
              ${product.features.map(feature => `
                <li class="mb-2">
                  <i class="bi bi-check-circle-fill text-success me-2"></i>${feature}
                </li>
              `).join('')}
            </ul>
          </div>
          
          <div class="trust-badges d-flex gap-3 text-muted small">
            <div><i class="bi bi-shield-check me-1"></i> Garantía 30 días</div>
            <div><i class="bi bi-headset me-1"></i> Soporte 24/7</div>
            <div><i class="bi bi-arrow-repeat me-1"></i> Actualizaciones gratis</div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Descripción completa -->
    <div class="row mt-5">
      <div class="col-12">
        <div class="detail-tabs">
          <ul class="nav nav-tabs mb-4" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#description" type="button" role="tab">
                Descripción
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" data-bs-toggle="tab" data-bs-target="#benefits" type="button" role="tab">
                Beneficios
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" data-bs-toggle="tab" data-bs-target="#requirements" type="button" role="tab">
                Requisitos
              </button>
            </li>
          </ul>
          
          <div class="tab-content">
            <div class="tab-pane fade show active" id="description" role="tabpanel">
              <p class="lead">${product.fullDescription}</p>
            </div>
            <div class="tab-pane fade" id="benefits" role="tabpanel">
              <ul class="list-unstyled">
                ${product.benefits.map(benefit => `
                  <li class="mb-3">
                    <i class="bi bi-lightning-fill text-warning me-2"></i>
                    <strong>${benefit}</strong>
                  </li>
                `).join('')}
              </ul>
            </div>
            <div class="tab-pane fade" id="requirements" role="tabpanel">
              <div class="alert alert-info">
                <i class="bi bi-info-circle me-2"></i>
                <strong>Requisitos del Sistema:</strong> ${product.requirements}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Agregar event listeners para la página de detalle
  attachDetailPageListeners(product.id);
}

/**
 * Agrega event listeners específicos para la página de detalle
 * @param {number} productId - ID del producto actual
 */
function attachDetailPageListeners(productId) {
  const quantityInput = document.getElementById('quantity-input');
  const decreaseBtn = document.getElementById('decrease-quantity');
  const increaseBtn = document.getElementById('increase-quantity');
  const addToCartBtn = document.getElementById('add-to-cart-detail');
  
  // Botones de cantidad
  if (decreaseBtn) {
    decreaseBtn.addEventListener('click', () => {
      const currentValue = parseInt(quantityInput.value);
      if (currentValue > 1) {
        quantityInput.value = currentValue - 1;
      }
    });
  }
  
  if (increaseBtn) {
    increaseBtn.addEventListener('click', () => {
      const currentValue = parseInt(quantityInput.value);
      if (currentValue < 10) {
        quantityInput.value = currentValue + 1;
      }
    });
  }
  
  // Botón de agregar al carrito
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
      const quantity = parseInt(quantityInput.value);
      addToCart(productId, quantity);
      
      // Feedback visual
      addToCartBtn.classList.add('btn-success');
      const originalText = addToCartBtn.innerHTML;
      addToCartBtn.innerHTML = '<i class="bi bi-check2 me-2"></i>Agregado al Carrito';
      
      setTimeout(() => {
        addToCartBtn.innerHTML = originalText;
        addToCartBtn.classList.remove('btn-success');
      }, 1500);
    });
  }
}

/**
 * Muestra mensaje de producto no encontrado
 */
function showProductNotFound() {
  const container = document.getElementById('product-detail-container');
  if (container) {
    container.innerHTML = `
      <div class="text-center py-5">
        <i class="bi bi-exclamation-triangle display-1 text-warning"></i>
        <h2 class="mt-4">Producto no encontrado</h2>
        <p class="text-muted">El producto que buscas no existe o ha sido eliminado.</p>
        <a href="index.html" class="btn btn-primary mt-3">
          <i class="bi bi-arrow-left me-2"></i>Volver al inicio
        </a>
      </div>
    `;
  }
}

/**
 * Inicialización cuando el DOM está listo
 */
document.addEventListener('DOMContentLoaded', function() {
  // Detectar en qué página estamos y ejecutar la función correspondiente
  const currentPage = window.location.pathname.split('/').pop();
  
  if (currentPage === 'index.html' || currentPage === '') {
    renderProducts();
  } else if (currentPage === 'detalle.html') {
    renderProductDetail();
  }
  
  // Smooth scroll para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});