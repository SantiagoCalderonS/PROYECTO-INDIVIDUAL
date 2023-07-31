![HenryLogo](https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png)

# **FOOD** | Proyecto Individual

## **📌 OBJETIVOS**

-  Construir una Single Page Application utlizando las tecnologías: **React**, **Redux**, **Node**, **Express** y **Sequelize**.
-  Poner en práctica recursos básicos de estilos y diseño (UX : UI).
-  Afirmar y conectar los conceptos aprendidos en la carrera.
-  Aprender y practicar el workflow de GIT.

<br />

---

## **DURACIÓN**

El proyecto individual tuvo una duración máxima de tres semanas.

<br />

---

## **PROPÓSITO DEL PROYECTO**

La idea de este proyecto fue construir una aplicación web a partir de la API [**spoonacular**](https://spoonacular.com/food-api) en la que se pueda:

-  Buscar recetas.
-  Visualizar la información de las recetas.
-  Filtrarlas.
-  Ordenarlas.
-  Crear nuevas recetas.

<br />

---

## **📁 ESTRUCTURA**

<br />

### **🖱 BASE DE DATOS**

La base de datos consta dos modelos para tu base de datos. Una es para las recetas y la otra es para los tipos de dietas. La relación entre ambos es de muchos a muchos. A continuación te dejamos las propiedades los modelos.

**MODELO 1 | Recipe**

-  ID. \*
-  Nombre. \*
-  Imagen. \*
-  Resumen del plato. \*
-  Nivel de comida saludable (health score). \*
-  Paso a paso. \*

<br />

**MODELO 2 | Diets**

-  ID. \*
-  Nombre. \*

<br />

---

<br />

### **🖱 BACK-END**

Construí un servidor utilizando **NodeJS** y **Express**. Conectado con la base de datos mediante **Sequelize**.

Las principales rutas son:

#### **GET | /recipes/:idRecipe**

-  Esta ruta obtiene el detalle de una receta específica. Es decir que devuelve un objeto con la información pedida en el detalle de una receta.
-  La receta es recibida por parámetro (ID).
-  Tiene que incluir los datos de los tipos de dietas asociados a la receta.
-  Debe funcionar tanto para las recetas de la API como para las de la base de datos.

#### **GET | /recipes/name?="..."**

-  Esta ruta debe obtener todas aquellas recetas que coincidan con el nombre recibido por query. (No es necesario que sea una coincidencia exacta).
-  Debe poder buscarla independientemente de mayúsculas o minúsculas.
-  Si no existe la receta, debe mostrar un mensaje adecuado.
-  Debe buscar tanto las de la API como las de la base de datos.

#### **POST | /recipes**

-  Esta ruta recibirá todos los datos necesarios para crear una nueva receta y relacionarla con los tipos de dieta solicitados.
-  Toda la información debe ser recibida por body.
-  Debe crear la receta en la base de datos, y esta debe estar relacionada con los tipos de dieta indicados (al menos uno).

#### **GET | /diets**

-  Obtiene un arreglo con todos los tipos de dietas existentes.
-  En una primera instancia, cuando no exista ninguna dieta, deberás precargar la base de datos con las dietas de la [**documentación**](https://spoonacular.com/food-api/docs#Diets).
-  Estas deben ser obtenidas de la API (se evaluará que no haya hardcodeo). Luego de obtenerlas de la API, deben ser guardadas en la base de datos para su posterior consumo desde allí.

<br />

---

<br />

### **🖱 FRONT-END**

La aplicación se desarrolló utilizando **React** y **Redux** y cuenta con las siguientes vistas:

**LANDING PAGE |** página de inicio o bienvenida con:

-  Imagen de fondo.
-  Botón de ingreso a la **`home page`**.

<br />

**📍 HOME PAGE |** Página principal con:

-  SearchBar: un input de búsqueda para encontrar recetas por nombre.
-  Sector en el que se verá un listado de cards con las recetas:
   -  Imagen.
   -  Nombre.
   -  Tipos de dietas.
-  Cuando se le hace click a una Card deberá redirigir al detalle de esa receta específica.
-  Botones/Opciones para **filtrar** por tipo de dieta, y por si su origen es de la API o de la base de datos (creados por nosotros desde el formulario).
-  Botones/Opciones para **ordenar** tanto ascendentemente como descendentemente las recetas por orden alfabético y por "comida saludable" (_health score_).
-  Paginado: el listado de recetas se hace por partes.

<br />

**📍 DETAIL PAGE |** en esta vista se muestra toda la información específica de una receta:

-  ID.
-  Nombre.
-  Resumen del plato.
-  Nivel de comida saludable (health score).
-  Paso a paso.
-  Imagen.
-  Tipos de dieta.

<br />

**FORM PAGE |**: en esta vista se encuentra el formulario para crear una nueva receta.

Este formulario es **controlado completamente con JavaScritp**. Cuenta con los siguientes campos:

-  Nombre.
-  Resumen del plato.
-  Nivel de comida saludable (health score).
-  Paso a paso.
-  Imagen.
-  Posibilidad de seleccionar/agregar varios tipos de dieta en simultáneo.
-  Botón para crear la receta.

<br />

---

<br />


<div align="center">
<img src="./cooking.png" alt="" />
</div>
