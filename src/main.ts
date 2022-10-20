import { routes } from './app/app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app/app.component';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import 'zone.js';
import { environment } from './environments/environment';
import { bootstrapApplication } from '@angular/platform-browser';

if (environment.production) {
  enableProdMode();
}
bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(routes))
  ]
})
  .catch(err => console.error(err))