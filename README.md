# PruebasSofka

Para realizar la ejecución de las pruebas y agregar los métodos, se utilizó Postman para ello se requiere registrarse en una cuenta y realizar el siguiente proceso:

  🚀 Importación de la Colección y Entorno
  
1. Descargar Archivos
Colección: PruebasSofka.postman_collection.json

Entorno: pruebas mascotas sofka.postman_environment.json

2. Importar en Postman
Abre Postman

Haz clic en Import (esquina superior izquierda)

Arrastra ambos archivos o selecciónalos desde tu equipo

Confirma la importación

3. Verificar Importación
La colección "PruebasSofka" aparecerá en el panel izquierdo

El entorno "pruebas mascotas sofka" estará disponible en el selector de entornos (esquina superior derecha)

⚙️ Configuración del Entorno
Selecciona el entorno "pruebas mascotas sofka" en el dropdown superior derecho

Haz clic en el icono 👁️ → Edit

Configura las variables necesarias:

Variable	Valor Ejemplo	Descripción
base_url	http://localhost:3000 o https://api.mascotas.sofka.com	URL base del API
content_type	application/json	Tipo de contenido
📁 Estructura de la Colección
La colección contiene los siguientes endpoints directos:

GET Consulta nombre perrito - Obtiene información de un perrito

POST Agregar nombre perrito - Crea un nuevo registro de perrito

PUT Actualizar nombre perrito - Modifica un registro existente

PruebasSofka (Colección)
└── Perrito (Carpeta)
    ├── GET Consulta nombre perrito
    ├── POST Agregar nombre perrito
    └── PUT Actualizar nombre perrito


🧪 Ejecución de Requests
Para cualquier endpoint:
Selecciona el request deseado en la colección

Verifica que el entorno correcto esté seleccionado

Revisa los parámetros si es necesario:

Headers: Content-Type

Body: Datos en formato JSON (para POST/PUT)

Haz clic en Send

Revisa la respuesta en la parte inferior
