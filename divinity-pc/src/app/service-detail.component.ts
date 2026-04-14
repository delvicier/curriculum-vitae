import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { toSignal } from '@angular/core/rxjs-interop';
import { SERVICES_DATA } from './services-data';
import { PricingComponent } from './pricing.component';

@Component({
  selector: 'app-service-detail',
  imports: [MatIconModule, RouterLink, PricingComponent],
  template: `
    @if (service()) {
      <div class="pt-12 pb-4 px-4 max-w-5xl mx-auto relative z-10">
        <a routerLink="/" class="inline-flex items-center gap-2 text-brand-blue hover:text-brand-blue-hover mb-8 transition-colors font-medium">
          <mat-icon class="text-[18px] w-4.5 h-4.5">arrow_back</mat-icon> Volver al inicio
        </a>
        
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
            <mat-icon>{{ service()!.icon }}</mat-icon>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold">{{ service()!.title }}</h1>
        </div>
        
        <p class="text-xl text-gray-400 mb-16 max-w-3xl">
          {{ service()!.subtitle }}
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          @for (card of service()!.cards; track card.title) {
            <div class="bg-brand-card border border-brand-border rounded-4xl p-8 hover:border-brand-blue/30 transition-colors">
              <div class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center mb-6">
                <mat-icon class="text-gray-300">check</mat-icon>
              </div>
              <h3 class="text-xl font-bold mb-4">{{ card.title }}</h3>
              <p class="text-gray-400 leading-relaxed">{{ card.desc }}</p>
            </div>
          }
        </div>

        <div class="bg-brand-dark border border-brand-border/50 rounded-4xl p-8 md:p-12 text-center relative overflow-hidden">
          <div class="absolute inset-0 futuristic-bg animate-gradient opacity-30 z-0"></div>
          <div class="relative z-10">
            <h2 class="text-2xl font-bold mb-6">¿Por qué elegirnos para este servicio?</h2>
            <p class="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
              {{ service()!.description }}
            </p>
          </div>
        </div>
      </div>

      <app-pricing [highlightedPlan]="service()!.planId"></app-pricing>
    } @else {
      <div class="pt-32 text-center">
        <h1 class="text-3xl font-bold mb-4">Servicio no encontrado</h1>
        <a routerLink="/" class="text-brand-blue hover:underline">Volver al inicio</a>
      </div>
    }
  `
})
export class ServiceDetailComponent {
  route = inject(ActivatedRoute);
  
  idParam = toSignal(this.route.paramMap);
  
  service = computed(() => {
    const id = this.idParam()?.get('id');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return id ? (SERVICES_DATA as any)[id] : null;
  });
}
