# NexusUI 🚀

NexusUI es una biblioteca de componentes React moderna y flexible que te permite construir interfaces de usuario hermosas y funcionales. Diseñada para ser utilizada tanto como una biblioteca npm tradicional como a través de Module Federation para arquitecturas de micro-frontends.

## Características ✨

- 🎨 Componentes React modernos y reutilizables
- 📦 Disponible como paquete npm
- 🔌 Soporte para Module Federation
- 🎭 Integración con Storybook para documentación y desarrollo
- 🎯 TypeScript para mejor desarrollo y autocompletado
- 💅 TailwindCSS para estilos flexibles y personalizables
- 📱 Diseño responsive y accesible

## Instalación 📥

### Como paquete npm

```bash
npm install nexusui
# o
yarn add nexusui
# o
pnpm add nexusui
```

### Usando Module Federation

1. Configura tu aplicación host para consumir NexusUI:

```javascript
// webpack.config.js
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'host',
      remotes: {
        nexusui: 'nexusui@http://localhost:3000/remoteEntry.js',
      },
      shared: {
        react: { singleton: true },
        'react-dom': { singleton: true }
      },
    }),
  ],
};
```

## Uso 🚀

### Importación básica

```jsx
import { Button, Card } from 'nexusui';

function MyComponent() {
  return (
    <Card>
      <Button variant="primary">¡Hola Mundo!</Button>
    </Card>
  );
}
```

### Usando Module Federation

```jsx
import React, { lazy, Suspense } from 'react';

const Button = lazy(() => import('nexusui/Button'));

function MyComponent() {
  return (
    <Suspense fallback="Cargando...">
      <Button variant="primary">¡Hola desde Module Federation!</Button>
    </Suspense>
  );
}
```

## Desarrollo 🛠️

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/nexusui.git
cd nexusui
```

2. Instala las dependencias:
```bash
yarn install
```

3. Inicia el servidor de desarrollo:
```bash
yarn dev
```

4. Para ver la documentación y los componentes en Storybook:
```bash
yarn storybook
```

## Scripts Disponibles 📜

- `yarn build` - Construye la biblioteca
- `yarn dev` - Inicia el servidor de desarrollo
- `yarn mf-dev` - Inicia el servidor de desarrollo con Module Federation
- `yarn storybook` - Inicia Storybook
- `yarn build-storybook` - Construye la documentación de Storybook

## Contribuir 🤝

Las contribuciones son bienvenidas. Por favor, lee nuestras guías de contribución antes de enviar un pull request.

## Licencia 📄

MIT

## Soporte 💬

Si tienes alguna pregunta o necesitas ayuda, por favor abre un issue en el repositorio.

---

Desarrollado con ❤️ por [Tu Nombre/Organización]

