import { Component, input, signal, effect } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pricing',
  imports: [MatIconModule],
  template: `
    <section id="planes" class="py-24 px-4 max-w-[90rem] mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Planes y Servicios</h2>
        <p class="text-gray-400">Selecciona el servicio que necesitas para empezar</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-center">
        <!-- Tier 1: Web -->
        <div (click)="activePlan.set('web')"
             class="bg-brand-card rounded-2xl p-8 flex flex-col transition-all duration-300 cursor-pointer relative"
             [class.border-2]="activePlan() === 'web'"
             [class.border-brand-blue]="activePlan() === 'web'"
             [class.border]="activePlan() !== 'web'"
             [class.border-brand-border]="activePlan() !== 'web'"
             [class.shadow-2xl]="activePlan() === 'web'"
             [class.shadow-brand-blue/20]="activePlan() === 'web'"
             [class.transform]="activePlan() === 'web'"
             [class.md:-translate-y-4]="activePlan() === 'web'"
             [class.z-10]="activePlan() === 'web'">
          
          @if (activePlan() === 'web') {
            <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-xs font-bold px-4 py-1 rounded-full">
              Seleccionado
            </div>
          }

          <div class="flex justify-between items-center mb-4">
            <span class="text-xs font-semibold px-3 py-1 rounded-full"
                  [class.bg-brand-blue/20]="activePlan() === 'web'"
                  [class.text-brand-blue]="activePlan() === 'web'"
                  [class.bg-gray-800]="activePlan() !== 'web'"
                  [class.text-gray-300]="activePlan() !== 'web'">Presencia Digital</span>
          </div>
          <div class="mb-6">
            <span class="text-4xl font-bold">Web</span>
          </div>
          <p class="text-sm text-gray-400 mb-8 flex-grow">Ideal para negocios que empiezan y necesitan visibilidad.</p>
          
          <ul class="space-y-4 mb-8 text-sm text-gray-300">
            <li class="flex items-center gap-2"><mat-icon class="text-brand-blue text-[18px] w-[18px] h-[18px]">check_circle</mat-icon> Landing Page o Web</li>
            <li class="flex items-center gap-2"><mat-icon class="text-brand-blue text-[18px] w-[18px] h-[18px]">check_circle</mat-icon> Diseño Responsive</li>
            <li class="flex items-center gap-2"><mat-icon class="text-brand-blue text-[18px] w-[18px] h-[18px]">check_circle</mat-icon> Formulario de contacto</li>
          </ul>
          <button (click)="openWhatsApp('Desarrollo Web', $event)"
                  class="w-full py-2.5 rounded-lg font-medium transition-colors mt-auto flex items-center justify-center gap-2"
                  [class.bg-brand-blue]="activePlan() === 'web'"
                  [class.text-white]="activePlan() === 'web'"
                  [class.hover:bg-brand-blue-hover]="activePlan() === 'web'"
                  [class.bg-transparent]="activePlan() !== 'web'"
                  [class.border]="activePlan() !== 'web'"
                  [class.border-gray-700]="activePlan() !== 'web'"
                  [class.hover:bg-gray-800]="activePlan() !== 'web'">
            Cotizar Web <mat-icon class="text-[18px] w-[18px] h-[18px]">chat</mat-icon>
          </button>
        </div>

        <!-- Tier 2: E-commerce -->
        <div (click)="activePlan.set('ecommerce')"
             class="bg-brand-card rounded-2xl p-8 flex flex-col transition-all duration-300 cursor-pointer relative"
             [class.border-2]="activePlan() === 'ecommerce'"
             [class.border-brand-blue]="activePlan() === 'ecommerce'"
             [class.border]="activePlan() !== 'ecommerce'"
             [class.border-brand-border]="activePlan() !== 'ecommerce'"
             [class.shadow-2xl]="activePlan() === 'ecommerce'"
             [class.shadow-brand-blue/20]="activePlan() === 'ecommerce'"
             [class.transform]="activePlan() === 'ecommerce'"
             [class.md:-translate-y-4]="activePlan() === 'ecommerce'"
             [class.z-10]="activePlan() === 'ecommerce'">
          
          @if (activePlan() === 'ecommerce') {
            <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-xs font-bold px-4 py-1 rounded-full">
              Seleccionado
            </div>
          }

          <div class="flex justify-between items-center mb-4">
            <span class="text-xs font-semibold px-3 py-1 rounded-full"
                  [class.bg-brand-blue/20]="activePlan() === 'ecommerce'"
                  [class.text-brand-blue]="activePlan() === 'ecommerce'"
                  [class.bg-gray-800]="activePlan() !== 'ecommerce'"
                  [class.text-gray-300]="activePlan() !== 'ecommerce'">Ventas Online</span>
          </div>
          <div class="mb-6">
            <span class="text-4xl font-bold">E-commerce</span>
          </div>
          <p class="text-sm text-gray-400 mb-8 flex-grow">Para tiendas que quieren vender 24/7 de forma automatizada.</p>
          
          <ul class="space-y-4 mb-8 text-sm text-gray-300">
            <li class="flex items-center gap-2"><mat-icon class="text-brand-blue text-[18px] w-[18px] h-[18px]">check_circle</mat-icon> Todo lo de Presencia Digital</li>
            <li class="flex items-center gap-2"><mat-icon class="text-brand-blue text-[18px] w-[18px] h-[18px]">check_circle</mat-icon> Catálogo de productos</li>
            <li class="flex items-center gap-2"><mat-icon class="text-brand-blue text-[18px] w-[18px] h-[18px]">check_circle</mat-icon> Pasarela de pagos</li>
          </ul>
          <button (click)="openWhatsApp('E-commerce', $event)"
                  class="w-full py-2.5 rounded-lg font-medium transition-colors mt-auto flex items-center justify-center gap-2"
                  [class.bg-brand-blue]="activePlan() === 'ecommerce'"
                  [class.text-white]="activePlan() === 'ecommerce'"
                  [class.hover:bg-brand-blue-hover]="activePlan() === 'ecommerce'"
                  [class.bg-transparent]="activePlan() !== 'ecommerce'"
                  [class.border]="activePlan() !== 'ecommerce'"
                  [class.border-gray-700]="activePlan() !== 'ecommerce'"
                  [class.hover:bg-gray-800]="activePlan() !== 'ecommerce'">
            Cotizar E-commerce <mat-icon class="text-[18px] w-[18px] h-[18px]">chat</mat-icon>
          </button>
        </div>

        <!-- Tier 3: Apps -->
        <div (click)="activePlan.set('apps')"
             class="bg-brand-card rounded-2xl p-8 flex flex-col transition-all duration-300 cursor-pointer relative"
             [class.border-2]="activePlan() === 'apps'"
             [class.border-brand-blue]="activePlan() === 'apps'"
             [class.border]="activePlan() !== 'apps'"
             [class.border-brand-border]="activePlan() !== 'apps'"
             [class.shadow-2xl]="activePlan() === 'apps'"
             [class.shadow-brand-blue/20]="activePlan() === 'apps'"
             [class.transform]="activePlan() === 'apps'"
             [class.md:-translate-y-4]="activePlan() === 'apps'"
             [class.z-10]="activePlan() === 'apps'">
          
          @if (activePlan() === 'apps') {
            <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-xs font-bold px-4 py-1 rounded-full">
              Seleccionado
            </div>
          }

          <div class="flex justify-between items-center mb-4">
            <span class="text-xs font-semibold px-3 py-1 rounded-full"
                  [class.bg-brand-blue/20]="activePlan() === 'apps'"
                  [class.text-brand-blue]="activePlan() === 'apps'"
                  [class.bg-gray-800]="activePlan() !== 'apps'"
                  [class.text-gray-300]="activePlan() !== 'apps'">Solución Total</span>
          </div>
          <div class="mb-6">
            <span class="text-4xl font-bold">App + Web</span>
          </div>
          <p class="text-sm text-gray-400 mb-8 flex-grow">Plataformas complejas y gestión a medida.</p>
          
          <ul class="space-y-4 mb-8 text-sm text-gray-300">
            <li class="flex items-center gap-2"><mat-icon class="text-brand-blue text-[18px] w-[18px] h-[18px]">check_circle</mat-icon> App Móvil / Escritorio</li>
            <li class="flex items-center gap-2"><mat-icon class="text-brand-blue text-[18px] w-[18px] h-[18px]">check_circle</mat-icon> Panel de Administración</li>
            <li class="flex items-center gap-2"><mat-icon class="text-brand-blue text-[18px] w-[18px] h-[18px]">check_circle</mat-icon> Sincronización en tiempo real</li>
          </ul>
          <button (click)="openWhatsApp('Aplicación a Medida', $event)"
                  class="w-full py-2.5 rounded-lg font-medium transition-colors mt-auto flex items-center justify-center gap-2"
                  [class.bg-brand-blue]="activePlan() === 'apps'"
                  [class.text-white]="activePlan() === 'apps'"
                  [class.hover:bg-brand-blue-hover]="activePlan() === 'apps'"
                  [class.bg-transparent]="activePlan() !== 'apps'"
                  [class.border]="activePlan() !== 'apps'"
                  [class.border-gray-700]="activePlan() !== 'apps'"
                  [class.hover:bg-gray-800]="activePlan() !== 'apps'">
            Cotizar App <mat-icon class="text-[18px] w-[18px] h-[18px]">chat</mat-icon>
          </button>
        </div>

        <!-- Tier 4: IA & Automatización -->
        <div (click)="activePlan.set('ia')"
             class="bg-brand-card rounded-2xl p-8 flex flex-col transition-all duration-300 cursor-pointer relative"
             [class.border-2]="activePlan() === 'ia'"
             [class.border-brand-blue]="activePlan() === 'ia'"
             [class.border]="activePlan() !== 'ia'"
             [class.border-brand-border]="activePlan() !== 'ia'"
             [class.shadow-2xl]="activePlan() === 'ia'"
             [class.shadow-brand-blue/20]="activePlan() === 'ia'"
             [class.transform]="activePlan() === 'ia'"
             [class.md:-translate-y-4]="activePlan() === 'ia'"
             [class.z-10]="activePlan() === 'ia'">
          
          @if (activePlan() === 'ia') {
            <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-xs font-bold px-4 py-1 rounded-full">
              Seleccionado
            </div>
          }

          <div class="flex justify-between items-center mb-4">
            <span class="text-xs font-semibold px-3 py-1 rounded-full"
                  [class.bg-brand-blue/20]="activePlan() === 'ia'"
                  [class.text-brand-blue]="activePlan() === 'ia'"
                  [class.bg-gray-800]="activePlan() !== 'ia'"
                  [class.text-gray-300]="activePlan() !== 'ia'">Transformación</span>
          </div>
          <div class="mb-6">
            <span class="text-4xl font-bold">Automatización</span>
          </div>
          <p class="text-sm text-gray-400 mb-8 flex-grow">Digitalización de procesos, IA y aparatos inteligentes.</p>
          
          <ul class="space-y-4 mb-8 text-sm text-gray-300">
            <li class="flex items-center gap-2"><mat-icon class="text-brand-blue text-[18px] w-[18px] h-[18px]">check_circle</mat-icon> Chatbots y Agentes IA</li>
            <li class="flex items-center gap-2"><mat-icon class="text-brand-blue text-[18px] w-[18px] h-[18px]">check_circle</mat-icon> Integración de sistemas (IoT)</li>
            <li class="flex items-center gap-2"><mat-icon class="text-brand-blue text-[18px] w-[18px] h-[18px]">check_circle</mat-icon> Automatización de flujos</li>
          </ul>
          <button (click)="openWhatsApp('Automatización e IA', $event)"
                  class="w-full py-2.5 rounded-lg font-medium transition-colors mt-auto flex items-center justify-center gap-2"
                  [class.bg-brand-blue]="activePlan() === 'ia'"
                  [class.text-white]="activePlan() === 'ia'"
                  [class.hover:bg-brand-blue-hover]="activePlan() === 'ia'"
                  [class.bg-transparent]="activePlan() !== 'ia'"
                  [class.border]="activePlan() !== 'ia'"
                  [class.border-gray-700]="activePlan() !== 'ia'"
                  [class.hover:bg-gray-800]="activePlan() !== 'ia'">
            Agendar Consultoría <mat-icon class="text-[18px] w-[18px] h-[18px]">chat</mat-icon>
          </button>
        </div>
      </div>
    </section>
  `
})
export class PricingComponent {
  highlightedPlan = input<string>('ecommerce');
  activePlan = signal<string>('ecommerce');

  constructor() {
    effect(() => {
      const plan = this.highlightedPlan();
      if (plan) {
        this.activePlan.set(plan);
      }
    });
  }

  openWhatsApp(planName: string, event: Event) {
    event.stopPropagation(); // Prevent card click from firing
    const phoneNumber = '593999999999'; // Replace with actual number
    const message = encodeURIComponent(`Hola Divinity PC, estoy interesado en el servicio de ${planName}. ¿Podrían darme más información?`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  }
}
