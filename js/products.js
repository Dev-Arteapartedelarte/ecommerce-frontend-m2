/**
 * products.js
 * Base de datos de productos de Arteapartedelarte SpA
 * 
 * Estructura de cada producto:
 * - id: Identificador único
 * - name: Nombre del producto
 * - category: Categoría del software
 * - price: Precio en USD
 * - description: Descripción breve
 * - fullDescription: Descripción detallada
 * - features: Array de características principales
 * - image: URL de la imagen (usando placeholder)
 * - benefits: Beneficios clave
 * - requirements: Requisitos técnicos mínimos
 */

const products = [
  {
    id: 1,
    name: "Sistema de Gestión Documental",
    category: "Gestión de Archivos",
    price: 1299,
    description: "Digitaliza y organiza todos los documentos de tu empresa con búsqueda inteligente y OCR integrado.",
    fullDescription: "Solución completa para la gestión digital de documentos empresariales. Permite digitalizar, clasificar, almacenar y recuperar documentos de forma eficiente. Incluye tecnología OCR para convertir documentos escaneados en texto editable y búsquedas avanzadas para encontrar información en segundos.",
    features: [
      "Digitalización automática con OCR",
      "Búsqueda avanzada multi-criterio",
      "Control de versiones de documentos",
      "Workflow de aprobaciones",
      "Firma digital integrada"
    ],
    benefits: [
      "Reduce el espacio físico de almacenamiento en 90%",
      "Encuentra documentos en menos de 5 segundos",
      "Cumplimiento normativo garantizado",
      "Acceso remoto 24/7"
    ],
    requirements: "Windows 10+, 8GB RAM, 50GB espacio disponible",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    name: "ERP Empresarial Lite",
    category: "Gestión Empresarial",
    price: 2499,
    description: "Sistema ERP completo para PyMEs: inventario, facturación, compras y reportes en tiempo real.",
    fullDescription: "Enterprise Resource Planning diseñado específicamente para pequeñas y medianas empresas. Integra todos los procesos de negocio en una sola plataforma: inventario, ventas, compras, contabilidad y recursos humanos. Dashboards en tiempo real y reportes personalizables.",
    features: [
      "Gestión completa de inventario",
      "Facturación electrónica integrada",
      "Módulo de compras y proveedores",
      "Reportes y analytics en tiempo real",
      "Multi-sucursal y multi-moneda"
    ],
    benefits: [
      "Visión completa del negocio en un solo lugar",
      "Automatiza procesos manuales",
      "Reduce errores de inventario en 95%",
      "Decisiones basadas en datos reales"
    ],
    requirements: "Windows Server 2016+, 16GB RAM, SQL Server",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
  },
  {
    id: 3,
    name: "CRM de Ventas Pro",
    category: "Customer Relationship",
    price: 899,
    description: "Gestiona tus clientes, leads y oportunidades. Pipeline visual y automatización de seguimiento.",
    fullDescription: "Customer Relationship Management enfocado en equipos de ventas. Centraliza toda la información de clientes y prospectos, automatiza seguimientos, y visualiza el pipeline de ventas. Integración con email y calendario para no perder ninguna oportunidad.",
    features: [
      "Gestión de leads y oportunidades",
      "Pipeline visual drag & drop",
      "Automatización de emails y tareas",
      "Scoring de leads automático",
      "Integración con email y calendario"
    ],
    benefits: [
      "Aumenta conversión de ventas 35%",
      "No pierdas ningún seguimiento",
      "Prioriza leads de alto valor",
      "Reportes de rendimiento del equipo"
    ],
    requirements: "Navegador moderno, Conexión a internet",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
  },
  {
    id: 4,
    name: "Software de Contabilidad",
    category: "Finanzas",
    price: 1599,
    description: "Contabilidad completa: libro mayor, conciliación bancaria, estados financieros y declaraciones.",
    fullDescription: "Sistema contable integral que cumple con todas las normativas fiscales locales. Automatiza la conciliación bancaria, genera estados financieros en un clic, y prepara declaraciones fiscales. Ideal para contadores y departamentos financieros.",
    features: [
      "Libro mayor digital completo",
      "Conciliación bancaria automática",
      "Estados financieros automáticos",
      "Generación de declaraciones fiscales",
      "Control de cuentas por pagar y cobrar"
    ],
    benefits: [
      "Ahorra 20 horas mensuales en contabilidad",
      "Reduce errores contables 99%",
      "Cumplimiento fiscal garantizado",
      "Cierre contable en minutos"
    ],
    requirements: "Windows 10+, 8GB RAM, Conexión a internet",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=600&fit=crop"
  },
  {
    id: 5,
    name: "Sistema de Nómina Inteligente",
    category: "Recursos Humanos",
    price: 1099,
    description: "Calcula nóminas automáticamente con deducciones, bonos y prestaciones. Recibos digitales.",
    fullDescription: "Automatiza completamente el proceso de nómina de tu empresa. Calcula sueldos, impuestos, deducciones y bonos automáticamente. Genera recibos digitales con firma electrónica y dispersa pagos mediante integración bancaria.",
    features: [
      "Cálculo automático de nómina",
      "Gestión de deducciones y bonos",
      "Recibos digitales con firma",
      "Dispersión bancaria automática",
      "Cálculo de finiquitos y liquidaciones"
    ],
    benefits: [
      "Procesa nómina en 15 minutos",
      "Cero errores en cálculos",
      "Ahorra costos de papel 100%",
      "Cumplimiento legal automático"
    ],
    requirements: "Windows 10+, 4GB RAM, Conexión a internet",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop"
  },
  {
    id: 6,
    name: "Portal de RRHH 360",
    category: "Recursos Humanos",
    price: 1399,
    description: "Gestión integral de talento: reclutamiento, evaluaciones, capacitación y gestión de ausencias.",
    fullDescription: "Plataforma completa de recursos humanos que cubre todo el ciclo de vida del empleado. Desde reclutamiento y onboarding hasta evaluaciones de desempeño y capacitación. Portal de autoservicio para empleados y analytics de RRHH.",
    features: [
      "Reclutamiento y onboarding digital",
      "Evaluaciones de desempeño 360°",
      "Gestión de vacaciones y permisos",
      "Capacitación y desarrollo",
      "Portal de autoservicio para empleados"
    ],
    benefits: [
      "Reduce tiempo de onboarding 60%",
      "Mejora satisfacción de empleados",
      "Decisiones de RRHH basadas en datos",
      "Automatiza procesos administrativos"
    ],
    requirements: "Navegador moderno, Conexión a internet",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop"
  }
];

/**
 * Obtiene un producto por su ID
 * @param {number} productId - ID del producto a buscar
 * @returns {object|undefined} - Producto encontrado o undefined
 */
function getProductById(productId) {
  return products.find(product => product.id === parseInt(productId));
}

/**
 * Obtiene todos los productos
 * @returns {array} - Array con todos los productos
 */
function getAllProducts() {
  return products;
}

/**
 * Filtra productos por categoría
 * @param {string} category - Categoría a filtrar
 * @returns {array} - Array de productos filtrados
 */
function getProductsByCategory(category) {
  return products.filter(product => product.category === category);
}

/**
 * Obtiene todas las categorías únicas
 * @returns {array} - Array de categorías
 */
function getAllCategories() {
  const categories = products.map(product => product.category);
  return [...new Set(categories)];
}