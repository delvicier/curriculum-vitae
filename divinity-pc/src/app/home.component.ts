import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { PricingComponent } from './pricing.component';

@Component({
  selector: 'app-home',
  imports: [MatIconModule, RouterLink, PricingComponent],
  template: `
    <!-- Hero Section -->
    <section class="pt-8 pb-0 px-4 text-center max-w-5xl mx-auto relative z-10 bg-grid-pattern animate-gradient">
      <img class="flex m-auto" src="https://emprendimiento.ai/wp-content/uploads/2025/03/img_curso_v3.png" alt="transforma">
      <h1 class="text-5xl pt-8 md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
        Transforma tu negocio con <br class="hidden md:block"/>
        <span class="text-brand-blue">Desarrollo a Medida</span>
      </h1>
      <p class="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
        Todo lo que necesitas para digitalizar tu empresa en un solo lugar. Webs, e-commerce, apps móviles, automatizaciones con IA.
      </p>
      
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
        <a routerLink="/" fragment="planes" class="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue-hover text-white px-8 py-3.5 rounded-3xl font-medium transition-colors flex items-center justify-center gap-2 text-lg">
          Transforma tu negocio <mat-icon>rocket_launch</mat-icon>
        </a>
      </div>

      <div class="flex flex-wrap justify-center gap-8 md:gap-16 text-gray-400 text-sm font-medium border-t border-brand-border pt-8">
        <div class="flex items-center gap-2">
          <span class="text-white font-bold text-lg">+50</span> proyectos
        </div>
        <div class="flex items-center gap-2">
          <span class="text-white font-bold text-lg">19</span> Aplicaciones Moviles
        </div>
        <div class="flex items-center gap-2">
          <span class="text-white font-bold text-lg">47</span> Plataformas Web
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="servicios" class="py-12 relative border-y border-brand-border/50 mt-8">
      <!-- Animated Futuristic Background -->
      <div class="absolute inset-0 z-0"></div>
      <div class="absolute inset-0 bg-grid-pattern z-0 mask-image-fade"></div>
      
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="text-center mb-10">
          <h2 class="text-3xl md:text-4xl font-bold mb-12">Servicios</h2>
        </div>

        <div class=" max-w-4xl grid grid-cols-1 md:grid-cols-2 m-auto gap-8">
          <!-- Card 1 -->
          <div class="bg-brand-card/80 backdrop-blur-md border border-brand-border rounded-3xl p-6 flex flex-col hover:border-brand-blue/50 transition-colors group shadow-lg">
            <div class="flex items-center gap-3 mb-4">
              <mat-icon class="text-brand-blue">language</mat-icon>
              <h3 class="text-xl font-bold">Web & E-commerce</h3>
            </div>
            <p class="text-gray-400 text-sm mb-6">
              Plataformas educativas, páginas web, tiendas online y catálogos digitales, Landing Page y más.
            </p>
            
            <!-- Mock UI inside card -->
            <div class="bg-brand-dark rounded-2xl px-6 py-10 border border-brand-border/50 relative overflow-hidden group-hover:border-brand-blue/30 transition-colors mb-6">
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
              <div class="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-brand-dark to-transparent"></div>
            </div>

            <a routerLink="/service/web" class="w-full bg-transparent border border-brand-blue/30 hover:border-brand-blue hover:bg-brand-blue/10 text-brand-blue py-3 rounded-3xl font-medium transition-all flex items-center justify-center gap-2">
              Ver más detalles <mat-icon class="text-[18px] w-4.5 h-4.5">arrow_forward</mat-icon>
            </a>
          </div>

          <!-- Card 2 -->
          <div class="bg-brand-card/80 backdrop-blur-md border border-brand-border rounded-3xl p-6 flex flex-col hover:border-brand-blue/50 transition-colors group shadow-lg">
            <div class="flex items-center gap-3 mb-4">
              <mat-icon class="text-brand-blue">smartphone</mat-icon>
              <h3 class="text-xl font-bold">Apps Android iOS</h3>
            </div>
            <p class="text-gray-400 text-sm mb-6">
              Aplicaciones móviles (iOS y Android) para lo que tu negocio o empresa requiera.
            </p>
            
            <!-- Mock UI inside card -->
            <div class="bg-brand-dark rounded-2xl p-4 border border-brand-border/50 relative overflow-hidden flex justify-center group-hover:border-brand-blue/30 transition-colors mb-6">
              <div class="w-32 h-40 border-4 border-gray-800 rounded-t-2xl border-b-0 relative mt-4">
                <div class="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-gray-800 rounded-full"></div>
                <div class="mt-6 px-2 space-y-2">
                  <div class="h-8 w-full bg-brand-blue/20 rounded"></div>
                  <div class="h-16 w-full bg-gray-800/50 rounded"></div>
                </div>
              </div>
            </div>

            <a routerLink="/service/apps" class="w-full bg-transparent border border-brand-blue/30 hover:border-brand-blue hover:bg-brand-blue/10 text-brand-blue py-3 rounded-3xl font-medium transition-all flex items-center justify-center gap-2">
              Ver más detalles <mat-icon class="text-[18px] w-4.5 h-4.5">arrow_forward</mat-icon>
            </a>
          </div>

          <!-- Card 3 -->
          <div class="bg-brand-card/80 backdrop-blur-md border border-brand-border rounded-3xl p-6 flex flex-col hover:border-brand-blue/50 transition-colors group shadow-lg">
            <div class="flex items-center gap-3 mb-4">
              <mat-icon class="text-brand-blue">smart_toy</mat-icon>
              <h3 class="text-xl font-bold">Automatización & IA</h3>
            </div>
            <p class="text-gray-400 text-sm mb-6">
              Chatbots inteligentes, automatización de procesos repetitivos y digitalización completa de tu flujo de trabajo.
            </p>
            
            <!-- Mock UI inside card -->
            <div class="flex-1 h-full w-full bg-brand-dark rounded-2xl p-4 border border-brand-border/50 relative overflow-hidden group-hover:border-brand-blue/30 transition-colors mb-6">
                <div class="space-y-3">
                  <div class="flex gap-2">
                    <div class="w-6 h-6 rounded-full bg-brand-blue shrink-0"></div>
                    <div class="bg-gray-800 rounded-3xl rounded-tl-none p-2 text-[10px] text-gray-300 w-3/4">
                      ¿En qué puedo ayudarte hoy con tu negocio?
                    </div>
                  </div>
                  <div class="flex gap-2 justify-end">
                    <div class="bg-brand-blue/20 border border-brand-blue/30 rounded-3xl rounded-tr-none p-2 text-[10px] text-blue-100 w-3/4">
                      Necesito automatizar mis ventas.
                    </div>
                  </div>
                  <div class="flex gap-2">
                    <div class="w-6 h-6 rounded-full bg-brand-blue shrink-0"></div>
                    <div class="bg-gray-800 rounded-3xl rounded-tl-none p-2 text-[10px] text-gray-300 w-3/4">
                      ¡Perfecto! Preparando propuesta...
                    </div>
                  </div>
                </div>
              </div>

            <a routerLink="/service/ia" class="w-full bg-transparent border border-brand-blue/30 hover:border-brand-blue hover:bg-brand-blue/10 text-brand-blue py-3 rounded-3xl font-medium transition-all flex items-center justify-center gap-2">
              Ver más detalles <mat-icon class="text-[18px] w-4.5 h-4.5">arrow_forward</mat-icon>
            </a>
          </div>

          <!-- Card 4 -->
          <div class="bg-brand-card/80 backdrop-blur-md border border-brand-border rounded-3xl p-6 flex flex-col hover:border-brand-blue/50 transition-colors group shadow-lg">
            <div class="flex items-center gap-3 mb-4">
              <mat-icon class="text-brand-blue">laptop</mat-icon>
              <h3 class="text-xl font-bold">Aplicaciones de escritorio</h3>
            </div>
            <p class="text-gray-400 text-sm mb-6">
              Aplicaciones para Laptops, PC de escritorio (Windows y Mac) sistemas locales o con integraciones con la nube.
            </p>
            
            <div class="bg-brand-dark rounded-2xl p-4 border border-brand-border/50 relative overflow-hidden flex justify-center group-hover:border-brand-blue/30 transition-colors mb-6">
              
              <div class="flex flex-col items-center mt-2 mb-2 w-full">
                <div class="w-48 h-32 border-[3px] border-gray-800 rounded-t-lg bg-[#050505] flex flex-col relative overflow-hidden shadow-md">
                  <div class="h-3.5 w-full bg-gray-800/80 flex items-center px-2 gap-1 border-b border-gray-700/50">
                    <div class="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                    <div class="w-1.5 h-1.5 rounded-full bg-brand-blue/80"></div>
                  </div>
                  
                  <div class="flex-1 p-1.5 flex gap-1.5">
                    <div class="w-1/4 h-full flex flex-col gap-1.5 border-r border-gray-800/60 pr-1.5 pt-1">
                      <div class="h-1.5 w-full bg-gray-700/50 rounded-sm"></div>
                      <div class="h-1.5 w-3/4 bg-gray-800 rounded-sm"></div>
                      <div class="h-1.5 w-full bg-gray-800 rounded-sm"></div>
                      <div class="h-1.5 w-4/5 bg-gray-800 rounded-sm mt-auto"></div>
                    </div>
                    <div class="flex-1 flex flex-col gap-1.5 pt-0.5">
                      <div class="h-6 w-full bg-brand-blue/20 rounded-md"></div>
                      <div class="flex-1 flex gap-1.5">
                        <div class="flex-1 h-full bg-gray-800/40 rounded-md"></div>
                        <div class="flex-1 h-full bg-gray-800/40 rounded-md"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="w-56 h-3 bg-gray-700 rounded-b-xl rounded-t-xs flex justify-center border-t border-gray-600/30 relative z-10 shadow-lg">
                  <div class="w-10 h-1 bg-gray-900 rounded-b-sm opacity-60"></div>
                </div>
              </div>

            </div>

            <a routerLink="/service/apps" class="w-full bg-transparent border border-brand-blue/30 hover:border-brand-blue hover:bg-brand-blue/10 text-brand-blue py-3 rounded-3xl font-medium transition-all flex items-center justify-center gap-2">
              Ver más detalles <mat-icon class="text-[18px] w-4.5 h-4.5">arrow_forward</mat-icon>
            </a>
          </div>

        </div>
      </div>
    </section>

    <app-pricing highlightedPlan="ecommerce"></app-pricing>
  `
})
export class HomeComponent {}
