import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { ExtraOptions, provideRouter, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';

// Tus opciones de configuración
const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
  // Si tu navbar es fijo, podrías usar:
  scrollOffset: [0, 60],
  onSameUrlNavigation: 'reload',
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withRouterConfig(routerOptions))
  ]
};
