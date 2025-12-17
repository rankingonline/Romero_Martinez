# Romero Martínez Asesores - Sitio Web

Sitio web corporativo para Romero Martínez Asesores, especialistas en asesoría fiscal, contable y laboral.

## 🎨 Diseño

Este proyecto fue implementado directamente desde Figma utilizando el MCP (Model Context Protocol) de Figma Desktop. El diseño original se encuentra en:
- **Figma URL**: `https://www.figma.com/design/b7W5CC7zBBpQ4Ozl6VARfc/RM-Asesores---pagina-web?node-id=4-25`
- **Node ID**: `4:25`

## 🚀 Tecnologías

- **HTML5** - Estructura semántica y accesible
- **CSS3** - Estilos con variables CSS, Grid, Flexbox y animaciones
- **JavaScript (Vanilla)** - Interactividad sin frameworks

## ✨ Características

### Diseño
- ✅ **Diseño Responsivo** - Adaptado para desktop, tablet y móvil
- ✅ **Modo Oscuro** - Tema oscuro moderno con gradientes
- ✅ **Glassmorphism** - Efectos de vidrio esmerilado en navbar y cards
- ✅ **Animaciones Suaves** - Transiciones y micro-animaciones
- ✅ **Efectos Parallax** - En las tarjetas de características

### Funcionalidades
- 📱 **Menú Móvil** - Navegación responsive con toggle animado
- 🎯 **Smooth Scroll** - Desplazamiento suave entre secciones
- 📊 **Contadores Animados** - Estadísticas con animación de conteo
- 👁️ **Intersection Observer** - Animaciones al hacer scroll
- ⌨️ **Accesibilidad** - Navegación por teclado y ARIA labels
- 🔍 **SEO Optimizado** - Meta tags, estructura semántica, Open Graph

## 📁 Estructura del Proyecto

```
romero-martinez-asesores-web/
├── assets/
│   ├── icons/          # Iconos SVG
│   ├── images/         # Imágenes del sitio
│   └── logo/           # Logo y favicon
├── css/
│   └── styles.css      # Estilos principales
├── js/
│   └── main.js         # JavaScript principal
└── index.html          # Página principal
```

## 🎨 Paleta de Colores

### Colores de Marca (Brand)
- **Primary**: `#264091` - Azul corporativo
- **Secondary-Accent**: `#EB6E08` - Naranja vibrante
- **Terceary-Neutral**: `#C6C7C9` - Gris neutral

### Colores de Contexto (Context)
- **Light**: `#F5F9FF` - Blanco azulado claro
- **Dark**: `#04113A` - Azul muy oscuro
- **White**: `#FFFFFF` - Blanco puro
- **Black**: `#000000` - Negro puro
- **Text**: `#4C5263` - Gris texto

## 🔧 Desarrollo Local

### Requisitos
- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Servidor HTTP local (opcional, para desarrollo)

### Inicio Rápido

1. **Abrir directamente el archivo**:
   ```bash
   open index.html
   ```

2. **O usar un servidor local**:
   ```bash
   # Con Python 3
   python3 -m http.server 8000
   
   # Con Node.js (http-server)
   npx http-server -p 8000
   
   # Con PHP
   php -S localhost:8000
   ```

3. Abre tu navegador en `http://localhost:8000`

## 📱 Responsive Breakpoints

- **Desktop**: > 1200px
- **Tablet**: 968px - 1200px
- **Mobile**: < 968px
- **Small Mobile**: < 640px

## 🎯 Secciones

### Hero Section
- Navbar con glassmorphism
- Título principal con gradiente
- CTA buttons (Call-to-Action)
- 3 Feature cards interactivas
- Estadísticas animadas

### Footer
- Información de la empresa
- Enlaces a servicios
- Redes sociales
- Información de contacto
- Enlaces legales

## 🔄 Próximas Mejoras

- [ ] Agregar más secciones (Servicios detallados, Equipo, Testimonios)
- [ ] Implementar formulario de contacto funcional
- [ ] Agregar Blog/Noticias
- [ ] Integrar sistema de citas online
- [ ] Modo claro/oscuro toggle
- [ ] Multi-idioma (ES/EN)
- [ ] Optimización de imágenes (WebP)
- [ ] PWA (Progressive Web App)

## 📝 Licencia

© 2024 Romero Martínez Asesores. Todos los derechos reservados.

## 👨‍💻 Desarrollo

Desarrollado con el MCP de Figma Desktop para importación directa de diseños.

---

**Contacto**: info@rmasesores.es  
**Teléfono**: +34 900 000 000  
**Ubicación**: Madrid, España
