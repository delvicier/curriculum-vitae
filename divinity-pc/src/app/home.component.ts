import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { PricingComponent } from './pricing.component';

@Component({
  selector: 'app-home',
  imports: [MatIconModule, RouterLink, PricingComponent],
  template: `
    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-4 text-center max-w-5xl mx-auto relative z-10">
      <h1 class="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
        Transforma tu negocio con <br class="hidden md:block"/>
        <span class="text-brand-blue">Desarrollo a Medida</span>
      </h1>
      <p class="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
        Todo lo que necesitas para digitalizar tu empresa en un solo lugar. Webs, e-commerce, apps móviles, de escritorio y automatizaciones con IA.
      </p>
      
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <button class="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue-hover text-white px-8 py-3.5 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-lg">
          Cotizar mi proyecto <mat-icon>rocket_launch</mat-icon>
        </button>
        <button class="w-full sm:w-auto bg-transparent border border-gray-700 hover:border-gray-500 hover:bg-gray-800/50 text-white px-8 py-3.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2 text-lg">
          Ver portafolio
        </button>
      </div>

      <div class="flex flex-wrap justify-center gap-8 md:gap-16 text-gray-400 text-sm font-medium border-t border-brand-border pt-8">
        <div class="flex items-center gap-2">
          <span class="text-white font-bold text-lg">+50</span> proyectos
        </div>
        <div class="flex items-center gap-2">
          <span class="text-white font-bold text-lg">100%</span> a medida
        </div>
        <div class="flex items-center gap-2">
          <span class="text-white font-bold text-lg">24/7</span> soporte
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="servicios" class="py-24 relative border-y border-brand-border/50 mt-12">
      <!-- Animated Futuristic Background -->
      <div class="absolute inset-0 futuristic-bg animate-gradient z-0"></div>
      <div class="absolute inset-0 bg-grid-pattern z-0 mask-image-fade"></div>
      
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">Disfruta de las ventajas de<br/>digitalizar tu empresa</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Card 1 -->
          <div class="bg-brand-card/80 backdrop-blur-md border border-brand-border rounded-2xl p-6 flex flex-col hover:border-brand-blue/50 transition-colors group shadow-lg">
            <div class="flex items-center gap-3 mb-4">
              <mat-icon class="text-brand-blue">language</mat-icon>
              <h3 class="text-xl font-bold">Web & E-commerce</h3>
            </div>
            <p class="text-gray-400 text-sm mb-8 flex-grow">
              Plataformas educativas, páginas web corporativas, tiendas online y catálogos digitales optimizados para vender más.
            </p>
            
            <!-- Mock UI inside card -->
            <div class="bg-[#060b14] rounded-xl p-4 border border-brand-border/50 relative overflow-hidden group-hover:border-brand-blue/30 transition-colors mb-6">
              <div class="flex items-center justify-between mb-3">
                <div class="h-2 w-16 bg-gray-700 rounded"></div>
                <div class="h-2 w-8 bg-brand-blue rounded"></div>
              </div>
              <div class="space-y-2">
                <div class="h-12 w-full bg-gray-800/50 rounded flex items-center px-3 gap-3">
                  <div class="w-6 h-6 rounded bg-gray-700"></div>
                  <div class="h-2 w-24 bg-gray-600 rounded"></div>
                </div>
                <div class="h-12 w-full bg-gray-800/50 rounded flex items-center px-3 gap-3">
                  <div class="w-6 h-6 rounded bg-gray-700"></div>
                  <div class="h-2 w-20 bg-gray-600 rounded"></div>
                </div>
              </div>
              <div class="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#060b14] to-transparent"></div>
            </div>

            <a routerLink="/service/web" class="w-full bg-transparent border border-brand-blue/30 hover:border-brand-blue hover:bg-brand-blue/10 text-brand-blue py-2.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2">
              Ver más detalles <mat-icon class="text-[18px] w-[18px] h-[18px]">arrow_forward</mat-icon>
            </a>
          </div>

          <!-- Card 2 -->
          <div class="bg-brand-card/80 backdrop-blur-md border border-brand-border rounded-2xl p-6 flex flex-col hover:border-brand-blue/50 transition-colors group shadow-lg">
            <div class="flex items-center gap-3 mb-4">
              <mat-icon class="text-brand-blue">smartphone</mat-icon>
              <h3 class="text-xl font-bold">Apps a Medida</h3>
            </div>
            <p class="text-gray-400 text-sm mb-8 flex-grow">
              Aplicaciones móviles (iOS y Android) y apps de escritorio robustas para gestionar tu negocio desde cualquier lugar.
            </p>
            
            <!-- Mock UI inside card -->
            <div class="bg-[#060b14] rounded-xl p-4 border border-brand-border/50 relative overflow-hidden flex justify-center group-hover:border-brand-blue/30 transition-colors mb-6">
              <div class="w-32 h-40 border-4 border-gray-800 rounded-t-2xl border-b-0 relative mt-4">
                <div class="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-gray-800 rounded-full"></div>
                <div class="mt-6 px-2 space-y-2">
                  <div class="h-8 w-full bg-brand-blue/20 rounded"></div>
                  <div class="h-16 w-full bg-gray-800/50 rounded"></div>
                </div>
              </div>
            </div>

            <a routerLink="/service/apps" class="w-full bg-transparent border border-brand-blue/30 hover:border-brand-blue hover:bg-brand-blue/10 text-brand-blue py-2.5 rounded-lg font-medium transition-all flex items-center justify-center gap-2">
              Ver más detalles <mat-icon class="text-[18px] w-[18px] h-[18px]">arrow_forward</mat-icon>
            </a>
          </div>

          <!-- Card 3 -->
          <div class="bg-brand-card/80 backdrop-blur-md border border-brand-border rounded-2xl p-6 flex flex-col hover:border-brand-blue/50 transition-colors group shadow-lg md:col-span-2">
            <div class="flex flex-col md:flex-row gap-8 h-full items-center">
              <div class="flex-1 flex flex-col w-full h-full">
                <div class="flex items-center gap-3 mb-4">
                  <mat-icon class="text-brand-blue">smart_toy</mat-icon>
                  <h3 class="text-xl font-bold">Automatización & IA</h3>
                </div>
                <p class="text-gray-400 text-sm mb-8 flex-grow">
                  Chatbots inteligentes, automatización de procesos repetitivos y digitalización completa de tu flujo de trabajo.
                </p>
                <a routerLink="/service/ia" class="w-full md:w-auto mt-auto bg-transparent border border-brand-blue/30 hover:border-brand-blue hover:bg-brand-blue/10 text-brand-blue py-2.5 px-6 rounded-lg font-medium transition-all flex items-center justify-center gap-2">
                  Ver más detalles <mat-icon class="text-[18px] w-[18px] h-[18px]">arrow_forward</mat-icon>
                </a>
              </div>
              
              <!-- Mock UI inside card -->
              <div class="flex-1 w-full bg-[#060b14] rounded-xl p-4 border border-brand-border/50 relative overflow-hidden group-hover:border-brand-blue/30 transition-colors">
                <div class="space-y-3">
                  <div class="flex gap-2">
                    <div class="w-6 h-6 rounded-full bg-brand-blue flex-shrink-0"></div>
                    <div class="bg-gray-800 rounded-lg rounded-tl-none p-2 text-[10px] text-gray-300 w-3/4">
                      ¿En qué puedo ayudarte hoy con tu negocio?
                    </div>
                  </div>
                  <div class="flex gap-2 justify-end">
                    <div class="bg-brand-blue/20 border border-brand-blue/30 rounded-lg rounded-tr-none p-2 text-[10px] text-blue-100 w-3/4">
                      Necesito automatizar mis ventas.
                    </div>
                  </div>
                  <div class="flex gap-2">
                    <div class="w-6 h-6 rounded-full bg-brand-blue flex-shrink-0"></div>
                    <div class="bg-gray-800 rounded-lg rounded-tl-none p-2 text-[10px] text-gray-300 w-3/4">
                      ¡Perfecto! Preparando propuesta...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <app-pricing highlightedPlan="ecommerce"></app-pricing>
  `
})
export class HomeComponent {}
