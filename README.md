## Visor de noticios

Requisitos de finalización

**Apertura:** jueves, 27 de febrero de 2025, 00:00

**Cierre:** viernes, 7 de marzo de 2025, 00:00

Crea una aplicación web sencilla para mostrar noticias utilizando React, React Router y React-Bootstrap para la interfaz, y consumiendo los datos de un archivo JSON 

### Funcionalidades

1. **Listado de noticias:**
    
    - Muestra una lista de los títulos de las noticias en la página principal.
    - Cada título debe ser un enlace que redirija a la página de detalles de la noticia.
2. **Página de detalles de noticia:**
    
    - Muestra el título, contenido, categoría, autor y fecha de la noticia.
    - Incluye un botón para volver al listado de noticias.
3. **Diseño:**
    
    - Utiliza React-Bootstrap para estilizar la aplicación y hacerla responsive.
    - Crea un diseño limpio y fácil de navegar.

### Componentes

1. **App:**
    
    - Componente principal que renderiza el enrutador y los componentes de las rutas.
2. **NewsList:**
    
    - Componente que muestra la lista de títulos de noticias.
    - Utiliza `react-router-dom` para crear enlaces a las páginas de detalles.
3. **NewsDetail:**
    
    - Componente que muestra los detalles de una noticia específica.
    - Recibe el ID de la noticia como parámetro en la URL.
    - Utiliza `react-router-dom` para obtener el ID y buscar la noticia en el archivo JSON.
4. **NavigationBar:**
    
    - Componente que muestra la barra de navegación con el título de la aplicación.
    - Utiliza componentes de React-Bootstrap para crear la barra de navegación.

### Rutas

1. `/`: Muestra el componente `NewsList`.
2. `/news/:id`: Muestra el componente `NewsDetail` para la noticia con el ID especificado.
