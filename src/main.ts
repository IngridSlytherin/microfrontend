// import { bootstrapApplication } from '@angular/platform-browser';
// import { AppComponent } from './app/app.component';
// import { importProvidersFrom } from '@angular/core';
// import { AppRoutingModule } from './app/app-routing.module';

// bootstrapApplication(AppComponent, {
//   providers: [
//     importProvidersFrom(AppRoutingModule)
//   ]
// })
// .catch(err => console.error(err));


import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { AppRoutingModule } from './app/app-routing.module';
import { provideHttpClient } from '@angular/common/http';  // Adicionar o HttpClient globalmente

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AppRoutingModule),
    provideHttpClient()  // Adicionar o HttpClient aqui
  ]
})
.catch(err => console.error(err));

