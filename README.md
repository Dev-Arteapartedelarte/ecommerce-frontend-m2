## ecommerce-frontend-m2

URL del Proyecto: https://github.com/Dev-Arteapartedelarte/ecommerce-frontend-m2.git


#  Arteapartedelarte SpA - E-commerce de Soluciones de Software

## Descripción

E-commerce profesional especializado en la venta de soluciones de software a medida que automatizan tareas de oficina. Desarrollado con HTML5 semántico, Bootstrap 5 y JavaScript vanilla, siguiendo las mejores prácticas de ingeniería de software.

## Características Principales

- **HTML5 Semántico**: Estructura clara con etiquetas semánticas (`header`, `nav`, `main`, `section`, `article`, `footer`)
- **Diseño Responsivo**: Mobile-first con Bootstrap 5 Grid System
- **Interactividad**: Carrito de compras dinámico con JavaScript vanilla
- **Persistencia Local**: Datos del carrito almacenados en localStorage
- **Accesibilidad**: Contrastes adecuados, focus visible, etiquetas ARIA
- **UX Optimizada**: Navegación fluida y feedback visual inmediato

## Objetivos Cumplidos

1. **Estructura HTML5 Semántica** 
   - Uso correcto de etiquetas semánticas
   - Jerarquía clara y lógica
   - Separación de contenido y presentación

2. **Bootstrap y Diseño Responsivo** 
   - Grid system y containers
   - Componentes: navbar, cards, badges, modals
   - Mobile-first (≤420px) y desktop (≥1024px)

3. **JavaScript/DOM** 
   - Manipulación dinámica del DOM
   - Event listeners y delegación de eventos
   - Gestión de estado del carrito

4. **Navegación y UX** 
   - Navbar responsivo con links claros
   - Flujo intuitivo entre páginas
   - Feedback visual en interacciones

5. **Calidad de Código** 
   - Arquitectura modular y organizada
   - Nombres descriptivos y consistentes
   - Comentarios útiles y documentación

## Estructura del Proyecto

```
E-commerce/
├── index.html              # Página principal (Home)
├── detalle.html           # Página de detalle de producto
├── carrito.html           # Página del carrito de compras
├── css/
│   └── styles.css         # Estilos personalizados
├── js/
│   ├── products.js        # Base de datos de productos
│   ├── cart.js            # Lógica del carrito de compras
│   └── main.js            # Inicialización y utilidades
├── assets/
│   └── images/            # Imágenes de productos (placeholder)
└── README.md              # Este archivo
```

## Tecnologías Utilizadas

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| HTML5 | - | Estructura semántica |
| CSS3 | - | Estilos personalizados |
| Bootstrap | 5.3.2 | Framework CSS responsivo |
| JavaScript | ES6+ | Interactividad y lógica |
| Bootstrap Icons | 1.11.2 | Iconografía |
| localStorage | - | Persistencia de datos |

##  Instalación y Uso

### Opción 1: Servidor Local (Recomendado)

```bash
# Clonar o descargar el proyecto

git clone https://github.com/Dev-Arteapartedelarte/ecommerce-frontend-m2.git

# Ingresar a la carpeta del proyecto
cd ecommerce-frontend-m2

# Iniciar servidor local con Live Server
index,html boton derecho Open With Live Server


Visitar: `http://127.0.0.1:5500/index.html`

### Opción 2: Apertura Directa

Simplemente abrir `index.html` en cualquier navegador moderno.

## Funcionalidades del Carrito

### Agregar Productos
```javascript
// Desde la página principal o detalle
addToCart(productId, quantity)
```

### Actualizar Cantidad
```javascript
// Incrementar o decrementar desde el carrito
updateQuantity(productId, newQuantity)
```

### Eliminar Producto
```javascript
// Remover completamente del carrito
removeFromCart(productId)
```

### Persistencia
Los datos del carrito se guardan automáticamente en `localStorage` y se recuperan al recargar la página.

## Productos Incluidos (MVP)

1. **Sistema de Gestión Documental**
   - Automatización de archivo digital
   - OCR integrado
   - Búsqueda avanzada

2. **ERP Empresarial Lite**
   - Gestión de inventario
   - Facturación electrónica
   - Reportes en tiempo real

3. **CRM de Ventas**
   - Seguimiento de leads
   - Pipeline visual
   - Automatización de emails

4. **Software de Contabilidad**
   - Conciliación bancaria
   - Libro mayor digital
   - Declaraciones fiscales

5. **Sistema de Nómina**
   - Cálculo automático
   - Recibos digitales
   - Integración bancaria

6. **Portal de RRHH**
   - Gestión de vacaciones
   - Evaluaciones de desempeño
   - Onboarding digital

## Accesibilidad

-  Contraste de colores WCAG AA
-  Navegación por teclado
-  Etiquetas ARIA para tecnologías asistivas
-  Focus visible en elementos interactivos
-  Texto alternativo en imágenes
-  Formularios con labels asociados

##  Personalización

### Agregar Nuevos Productos

Editar `js/products.js`:

```javascript
const products = [
  {
    id: 7,
    name: "Tu Nuevo Producto",
    category: "Categoría",
    price: 999,
    description: "Descripción detallada...",
    features: ["Feature 1", "Feature 2"],
    image: "url_imagen"
  }
];
```

### Modificar Estilos

Los estilos personalizados están en `css/styles.css`. Las variables CSS permiten cambios globales rápidos:

```css
:root {
  --primary: #tu-color;
  --font-main: 'Tu-Fuente', sans-serif;
}
```

##  Troubleshooting

### El carrito no persiste
- Verificar que el navegador permita localStorage
- Revisar la consola de desarrollador (F12)

### Los estilos no se cargan
- Verificar las rutas de los archivos CSS
- Asegurar conexión a internet (CDN de Bootstrap)

### JavaScript no funciona
- Abrir consola del navegador (F12)
- Verificar que los scripts estén al final del `<body>`

## Futuras Mejoras (v2.0)

- [ ] A requerimiento sewgun Módulo

## 📄 Licencia

Este proyecto es un MVP educativo y puede ser utilizado libremente para aprendizaje y demostración.

## 👨‍💻 Autor

ecommerce-frontend-m2 desarrollado como MVP de aplicando las mejores prácticas de desarrollo web frontend.

---

**Versión**: 1.0.0  
**Última actualización**: Enero 2026  
**Estado**: MVP Completo y Funcional