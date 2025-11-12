# Sistema de Traducciones Multi-idioma - Documentación

## Descripción General

Se ha implementado un sistema completo de traducciones para la aplicación que soporta:
- **Español (es)**
- **Inglés (en)**
- **Alemán (de)**

El idioma se detecta automáticamente desde el navegador del usuario y puede ser cambiado en cualquier momento mediante un botón en la esquina superior derecha.

## Archivos Creados

### 1. `/src/config/translations.ts`
Archivo central que contiene todas las traducciones organizadas por secciones:
- `navbar` - Navegación
- `home` - Página de inicio
- `features` - Características principales
- `login` - Página de inicio de sesión
- `register` - Página de registro
- `emailVerify` - Verificación de correo
- `confirmSignup` - Confirmación de registro
- `profile` - Página de perfil
- `footer` - Pie de página
- `theme` - Selector de tema
- `language` - Selector de idioma

### 2. `/src/context/language-context.tsx`
Context de React que proporciona:
- `LanguageProvider` - Proveedor que envuelve la aplicación
- `useLanguage()` - Hook para acceder a las traducciones
- Detección automática del idioma del navegador
- Almacenamiento persistente en localStorage
- Fallback a inglés por defecto durante SSR

### 3. `/src/components/navbar/language-toggle.tsx`
Componente cliente que muestra un selector de idioma con:
- Icono de lenguas
- Dropdown menu con las 3 opciones de idioma
- Actualización instantánea de todo el contenido

## Componentes Modificados

### Páginas actualizadas con traducciones:
1. **`/src/app/(main)/(home)/page.tsx`** - Página de inicio
2. **`/src/app/(auth)/login/page.tsx`** - Inicio de sesión
3. **`/src/app/(auth)/register/page.tsx`** - Registro
4. **`/src/app/(auth)/email-verify/page.tsx`** - Verificación de email
5. **`/src/app/(auth)/confirm-signup/page.tsx`** - Confirmación de registro
6. **`/src/components/navbar/index.tsx`** - Incluye el selector de idioma

### Componentes de formularios actualizados:
- **`/src/app/(auth)/login/_components/login-form.tsx`**
- **`/src/app/(auth)/register/_components/register-form.tsx`**
- **`/src/app/(main)/(home)/_components/bento-grid-section.tsx`**

### Root Layout:
- **`/src/app/layout.tsx`** - Envuelto con `LanguageProvider`

## Características Principales

### 1. Detección Automática de Idioma
- Detecta el idioma del navegador automáticamente
- Si el navegador usa `es`, `en` o `de`, se establece ese idioma
- Fallback a inglés si el idioma no es soportado

### 2. Persistencia
- El idioma seleccionado se guarda en `localStorage`
- El idioma persiste entre sesiones
- Se puede cambiar en cualquier momento

### 3. Acceso a Traducciones
```tsx
import { useLanguage } from "@/context/language-context";

function MyComponent() {
  const { t, language, setLanguage } = useLanguage();
  
  return <h1>{t.home.title}</h1>;
}
```

### 4. Selector de Idioma
Un botón pequeño en la barra de navegación que permite cambiar:
- 🌍 Abre un dropdown
- Muestra las 3 opciones: Español, English, Deutsch
- Actualiza la UI instantáneamente

## Cómo Usar

### Para agregar nuevas traducciones:

1. Edita `/src/config/translations.ts`
2. Agrega tu nueva clave en las tres secciones (es, en, de)

```typescript
export const translations = {
  es: {
    newSection: {
      newKey: "Tu traducción en español",
    },
    // ...
  },
  en: {
    newSection: {
      newKey: "Your translation in English",
    },
    // ...
  },
  de: {
    newSection: {
      newKey: "Deine Übersetzung auf Deutsch",
    },
    // ...
  },
};
```

### Para usar las traducciones en un componente:

```tsx
"use client";

import { useLanguage } from "@/context/language-context";

export function MyComponent() {
  const { t, language, setLanguage } = useLanguage();

  return (
    <div>
      <h1>{t.home.title}</h1>
      <button onClick={() => setLanguage("es")}>
        Cambiar a Español
      </button>
    </div>
  );
}
```

## Estructura de Traducciones

```
translations
├── es (Español)
│   ├── navbar
│   ├── home
│   ├── features
│   ├── login
│   ├── register
│   ├── emailVerify
│   ├── confirmSignup
│   ├── profile
│   ├── footer
│   ├── theme
│   └── language
├── en (English)
│   └── [misma estructura]
└── de (Deutsch)
    └── [misma estructura]
```

## Notas Técnicas

- Todas las páginas con traducciones son marcadas como `"use client"` (componentes cliente)
- El hook `useLanguage()` retorna valores por defecto en inglés durante SSR/build
- El `LanguageProvider` es inicializado en el root layout
- Las traducciones son type-safe gracias a TypeScript
- El cambio de idioma es inmediato sin necesidad de recargar la página

## Testing

Para probar las traducciones:

1. Abre la aplicación en `http://localhost:3000`
2. Haz clic en el botón de idioma (esquina superior derecha)
3. Selecciona un idioma
4. Observa cómo toda la UI se actualiza
5. Recarga la página - el idioma debe persistir

## Idiomas Soportados

| Código | Idioma | Detecta automáticamente como |
|--------|--------|------------------------------|
| `es` | Español | `es-ES`, `es-MX`, etc. |
| `en` | English | `en-US`, `en-GB`, etc. |
| `de` | Deutsch | `de-DE`, `de-AT`, etc. |
