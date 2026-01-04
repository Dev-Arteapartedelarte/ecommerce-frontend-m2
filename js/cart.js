/**
 * cart.js
 * Gestión del carrito de compras con persistencia en localStorage
 * 
 * Funcionalidades:
 * - Agregar productos al carrito
 * - Actualizar cantidades
 * - Eliminar productos
 * - Calcular totales
 * - Persistir en localStorage
 * - Actualizar UI del contador
 */

// Clave para localStorage
const CART_STORAGE_KEY = 'softhub_cart';

/**
 * Obtiene el carrito desde localStorage
 * @returns {array} - Array de items del carrito
 */
function getCart() {
  const cartData = localStorage.getItem(CART_STORAGE_KEY);
  return cartData ? JSON.parse(cartData) : [];
}

/**
 * Guarda el carrito en localStorage
 * @param {array} cart - Array de items del carrito
 */
function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  updateCartBadge();
}

/**
 * Agrega un producto al carrito
 * @param {number} productId - ID del producto
 * @param {number} quantity - Cantidad a agregar (por defecto 1)
 * @returns {object} - Resultado de la operación
 */
function addToCart(productId, quantity = 1) {
  try {
    const product = getProductById(productId);
    
    if (!product) {
      return { success: false, message: 'Producto no encontrado' };
    }
    
    const cart = getCart();
    const existingItemIndex = cart.findIndex(item => item.productId === productId);
    
    if (existingItemIndex > -1) {
      // El producto ya existe, actualizar cantidad
      cart[existingItemIndex].quantity += quantity;
    } else {
      // Agregar nuevo producto
      cart.push({
        productId: productId,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity
      });
    }
    
    saveCart(cart);
    showNotification('success', `${product.name} agregado al carrito`);
    
    return { success: true, message: 'Producto agregado', cart: cart };
  } catch (error) {
    console.error('Error al agregar producto:', error);
    return { success: false, message: 'Error al agregar producto' };
  }
}

/**
 * Actualiza la cantidad de un producto en el carrito
 * @param {number} productId - ID del producto
 * @param {number} newQuantity - Nueva cantidad
 * @returns {object} - Resultado de la operación
 */
function updateQuantity(productId, newQuantity) {
  try {
    if (newQuantity < 1) {
      return removeFromCart(productId);
    }
    
    const cart = getCart();
    const itemIndex = cart.findIndex(item => item.productId === productId);
    
    if (itemIndex === -1) {
      return { success: false, message: 'Producto no encontrado en el carrito' };
    }
    
    cart[itemIndex].quantity = newQuantity;
    saveCart(cart);
    
    return { success: true, message: 'Cantidad actualizada', cart: cart };
  } catch (error) {
    console.error('Error al actualizar cantidad:', error);
    return { success: false, message: 'Error al actualizar cantidad' };
  }
}

/**
 * Elimina un producto del carrito
 * @param {number} productId - ID del producto
 * @returns {object} - Resultado de la operación
 */
function removeFromCart(productId) {
  try {
    let cart = getCart();
    const itemIndex = cart.findIndex(item => item.productId === productId);
    
    if (itemIndex === -1) {
      return { success: false, message: 'Producto no encontrado en el carrito' };
    }
    
    const removedItem = cart[itemIndex];
    cart = cart.filter(item => item.productId !== productId);
    saveCart(cart);
    
    showNotification('info', `${removedItem.name} eliminado del carrito`);
    
    return { success: true, message: 'Producto eliminado', cart: cart };
  } catch (error) {
    console.error('Error al eliminar producto:', error);
    return { success: false, message: 'Error al eliminar producto' };
  }
}

/**
 * Vacía completamente el carrito
 * @returns {object} - Resultado de la operación
 */
function clearCart() {
  try {
    localStorage.removeItem(CART_STORAGE_KEY);
    updateCartBadge();
    showNotification('info', 'Carrito vaciado');
    return { success: true, message: 'Carrito vaciado' };
  } catch (error) {
    console.error('Error al vaciar carrito:', error);
    return { success: false, message: 'Error al vaciar carrito' };
  }
}

/**
 * Calcula el número total de items en el carrito
 * @returns {number} - Total de items
 */
function getCartItemCount() {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.quantity, 0);
}

/**
 * Calcula el subtotal del carrito
 * @returns {number} - Subtotal
 */
function getCartSubtotal() {
  const cart = getCart();
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

/**
 * Calcula el IVA (19%)
 * @returns {number} - IVA
 */
function getCartTax() {
  return getCartSubtotal() * 0.19;
}

/**
 * Calcula el total del carrito (subtotal + IVA)
 * @returns {number} - Total
 */
function getCartTotal() {
  return getCartSubtotal() + getCartTax();
}

/**
 * Actualiza el badge del carrito en la navbar
 */
function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  if (badge) {
    const count = getCartItemCount();
    badge.textContent = count;
    badge.style.display = count > 0 ? 'inline-block' : 'none';
  }
}

/**
 * Formatea un número como precio en USD
 * @param {number} amount - Cantidad a formatear
 * @returns {string} - Precio formateado
 */
function formatPrice(amount) {
  return `$${amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}

/**
 * Muestra una notificación toast
 * @param {string} type - Tipo de notificación (success, error, info, warning)
 * @param {string} message - Mensaje a mostrar
 */
function showNotification(type, message) {
  // Crear elemento de notificación
  const notification = document.createElement('div');
  notification.className = `alert alert-${type === 'success' ? 'success' : type === 'error' ? 'danger' : type} alert-dismissible fade show position-fixed`;
  notification.style.cssText = 'top: 80px; right: 20px; z-index: 9999; min-width: 300px;';
  notification.setAttribute('role', 'alert');
  
  notification.innerHTML = `
    <i class="bi bi-${type === 'success' ? 'check-circle' : type === 'error' ? 'x-circle' : 'info-circle'} me-2"></i>
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  `;
  
  document.body.appendChild(notification);
  
  // Auto-remover después de 3 segundos
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

/**
 * Inicializa el sistema de carrito
 * Actualiza el badge al cargar la página
 */
document.addEventListener('DOMContentLoaded', function() {
  updateCartBadge();
});