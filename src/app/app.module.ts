import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AnimationDriver, ɵNoopAnimationDriver, ɵWebAnimationsDriver } from '@angular/animations/browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { HomeModule } from './shared/components/home/home.module';
import { LazyModule } from './shared/components/lazy/lazy.module';

@NgModule({

    imports: [BrowserModule,
              BrowserAnimationsModule,
              CommonModule,
              ReactiveFormsModule,
              HttpClientModule,
              HomeModule,
              LazyModule,
              routing],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [
     { provide: AnimationDriver, useFactory: function animationFactory(): any {
         if (navigator.userAgent.indexOf("Trident/5.0;") > -1) {
            return new ɵNoopAnimationDriver();
         } else {
            return new ɵWebAnimationsDriver();
         }
     }}
    ]
})

export class AppModule { }
