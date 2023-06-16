# Cypress_Wingo

<h1>Automatización de Pruebas con Cypress.js - Wingo.com</h1>
<p>Este proyecto contiene pruebas automatizadas utilizando Cypress.js para la automatización de la página web de reservas de viajes Wingo.com.</p>

<h2>Descripción del Proyecto</h2>
<p>El objetivo de este proyecto es automatizar la prueba de diferentes funcionalidades y flujos de reserva en Wingo.com. Utilizamos Cypress.js, un framework de pruebas end-to-end de código abierto, para crear y ejecutar las pruebas automatizadas.</p>

<h2>Requisitos Previos</h2>

<p>Asegúrate de tener instalado lo siguiente en tu máquina:</p>
<ul><li>Node.js (versión 12 o superior)</li><li>NPM (Node Package Manager)</li></ul>

<h2>Configuración del Proyecto</h2>

<ol><li>Clona este repositorio en tu máquina local:</li></ol><pre>

<div class="bg-black rounded-md mb-4">

<div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>shell</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div>

<div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-shell">git clone &lt;https://github.com/narvaezjacome/Cypress_Wingo.git&gt;
</code></div></div></pre><ol start="2"><li>Navega hasta la carpeta del proyecto:</li></ol><pre>

<div class="bg-black rounded-md mb-4">
<div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>shell</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-shell">cd nombre_del_proyecto
</code></div></div></pre><ol start="3"><li>Instala las dependencias del proyecto:</li></ol><pre>


<div class="bg-black rounded-md mb-4">


<div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>shell</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-shell">npm install
</code></div>
</div></pre>


<h2>Ejecución de las Pruebas</h2>

<p>Puedes ejecutar las pruebas automatizadas utilizando los siguientes comandos:</p><ul><li>Ejecutar las pruebas en el modo de interfaz gráfica de Cypress:</li></ul><pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>shell</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div>


<div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-shell">npm run cy:open
</code>
</div>
</div>
</pre><p>Esto abrirá la interfaz de Cypress, donde podrás seleccionar y ejecutar los casos de prueba individualmente.</p><ul><li>Ejecutar las pruebas en el modo headless (en segundo plano):</li></ul><pre>


<div class="bg-black rounded-md mb-4">

<div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>shell</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button>
</div>


<div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-shell">npm run cy:run
</code>
</div>
</div>
</pre>

<p>Esto ejecutará todos los casos de prueba y mostrará los resultados en la línea de comandos.</p>


<h2>Estructura del Proyecto</h2>

<p>El proyecto sigue la siguiente estructura de carpetas y archivos:</p><pre>

<div class="bg-black rounded-md mb-4">
<div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>bash</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button>
</div>


<div class="p-4 overflow-y-auto"><code class="!whitespace-pre hljs language-bash">
├── cypress/
│   ├── e2e/                      <span class="hljs-comment"># Archivos de datos de prueba</span>
│   ├── fixtures/                 <span class="hljs-comment"># Casos de prueba</span>
│   ├── support/                  <span class="hljs-comment"># Scripts de soporte y utilidades</span>
│   ├── cypress.json              <span class="hljs-comment"># Configuración global de Cypress</span>
├── node_modules/                 <span class="hljs-comment"># Dependencias de Node.js (generadas automáticamente)</span>
├── .gitignore                    <span class="hljs-comment"># Archivo de configuración de Git para ignorar archivos y carpetas</span>
├── package.json                  <span class="hljs-comment"># Archivo de configuración de NPM con las dependencias y scripts</span>
├── README.md                     <span class="hljs-comment"># Documentación del proyecto</span>
</code>
</div>
</div>
</pre>


<h2>Contribución</h2>

<p>Siéntete libre de contribuir a este proyecto abriendo un pull request. Puedes agregar nuevas pruebas, mejorar las existentes o proporcionar sugerencias y comentarios.</p>


<h2>Problemas y Soporte</h2>

<p>Si encuentras algún problema o tienes alguna pregunta, no dudes en abrir un "Issue" en el repositorio. Haremos todo lo posible por ayudarte.</p>

