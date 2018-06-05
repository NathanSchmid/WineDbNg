import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic([
  {
    provide: 'API_ENDPOINT',
    useValue: environment.apiEndpoint
  },
  {
    provide: 'LABELS_ENDPOINT',
    useValue: environment.labelsEndpoint
  }
]).bootstrapModule(AppModule)
  .catch(err => console.log(err));
