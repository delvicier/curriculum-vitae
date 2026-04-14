import { Component, input, signal, effect } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pricing',
  imports: [MatIconModule],
  template: `
    <section id="planes" class="pt-12 pb-0 px-4 max-w-460 mx-auto">
      <div class="text-center mb-12 ">
        <h2 class="text-3xl md:text-4xl font-bold mb-4">Planes y Servicios</h2>
        <p class="text-gray-400">Selecciona el servicio que necesitas para empezar</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 items-center m-auto">
        <!-- Tier 1: Web --> 
        <div (click)="activePlan.set('web')"
             (keydown.enter)="activePlan.set('web')"
             (keydown.space)="activePlan.set('web')"
             tabindex="0"
             role="button"
             class="bg-brand-card rounded-4xl p-8 flex flex-col transition-all duration-300 cursor-pointer relative outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
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
 

          <div class="flex justify-between items-center mb-6">
            <span class="text-[24px] text-nowrap overflow-x-hidden truncate font-bold">Web </span>
            <span class="text-[14px] text-nowrap font-semibold px-3 py-1.5 rounded-full"
              [class.bg-brand-blue/20]="activePlan() === 'web'"
              [class.text-brand-blue]="activePlan() === 'web'"
              [class.bg-gray-800]="activePlan() !== 'web'"
              [class.text-gray-300]="activePlan() !== 'web'">Desde $20</span>
          </div>
          <p class="text-sm text-gray-400 mb-8 grow">Ideal para  aumentar tu visibilidad.</p>
          
          <ul class="space-y-4 mb-8 text-sm text-gray-300">
            <li class="flex items-center gap-2"><mat-icon class="text-brand-blue text-[18px] w-4.5 h-4.5">check_circle</mat-icon> Landing Page o Web</li>
            <li class="flex items-center gap-2"><mat-icon class="text-brand-blue text-[18px] w-4.5 h-4.5">check_circle</mat-icon> Posiciona tu marca o negocio</li>
            <li class="flex items-center gap-2"><mat-icon class="text-brand-blue text-[18px] w-4.5 h-4.5">check_circle</mat-icon> Da a conocer tus servicios</li>
            <li class="flex items-center gap-2"><mat-icon class="text-brand-blue text-[18px] w-4.5 h-4.5">check_circle</mat-icon> Diseño responsivo </li>
          </ul>
          <button (click)="openWhatsApp('Desarrollo Web', $event)"
                  class="w-full py-2.5 rounded-3xl font-medium transition-colors mt-auto flex items-center justify-center gap-2"
                  [class.bg-brand-blue]="activePlan() === 'web'"
                  [class.text-white]="activePlan() === 'web'"
                  [class.hover:bg-brand-blue-hover]="activePlan() === 'web'"
                  [class.bg-transparent]="activePlan() !== 'web'"
                  [class.border]="activePlan() !== 'web'"
                  [class.border-gray-700]="activePlan() !== 'web'"
                  [class.hover:bg-gray-800]="activePlan() !== 'web'">
            Cotizar Web<mat-icon class="text-[18px] w-4.5 h-4.5">chat</mat-icon>
          </button>
        </div>

        <div (click)="activePlan.set('ecommerce')"
             (keydown.enter)="activePlan.set('ecommerce')"
             (keydown.space)="activePlan.set('ecommerce')"
             tabindex="0"
             role="button"
             class="bg-brand-card rounded-4xl p-8 flex flex-col transition-all duration-300 cursor-pointer relative outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
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

          <div class="flex justify-between items-center mb-6">
            <span class="text-[24px] font-bold text-nowrap  overflow-x-hidden truncate">E-commerce</span>
            <span class="text-[14px] w-24.5 text-nowrap font-semibold px-3 py-1.5 rounded-full"
                  [class.bg-brand-blue/20]="activePlan() === 'ecommerce'"
                  [class.text-brand-blue]="activePlan() === 'ecommerce'"
                  [class.bg-gray-800]="activePlan() !== 'ecommerce'"
                  [class.text-gray-300]="activePlan() !== 'ecommerce'">Desde $70 </span>
          </div> 
          <p class="text-sm text-gray-400 mb-8 grow">Convierte tu tienda fisica en digital.</p>
          
          <ul class="space-y-4 mb-8 text-sm text-gray-300">
            <li class="flex items-center gap-2"><mat-icon class="text-brand-blue text-[18px] w-4.5 h-4.5">check_circle</mat-icon> Venta de tus servicios</li>
            <li class="flex items-center gap-2"><mat-icon class="text-brand-blue text-[18px] w-4.5 h-4.5">check_circle</mat-icon> Catálogo de productos</li>
            <li class="flex items-center gap-2"><mat-icon class="text-brand-blue text-[18px] w-4.5 h-4.5">check_circle</mat-icon> Recibir y gestionar pedidos</li>
            <li class="flex items-center gap-2"><mat-icon class="text-brand-blue text-[18px] w-4.5 h-4.5">check_circle</mat-icon> Pasarela de pagos online</li>
          </ul>
          <button (click)="openWhatsApp('E-commerce', $event)"
                  class="w-full py-2.5 rounded-3xl font-medium transition-colors mt-auto flex items-center justify-center gap-2"
                  [class.bg-brand-blue]="activePlan() === 'ecommerce'"
                  [class.text-white]="activePlan() === 'ecommerce'"
                  [class.hover:bg-brand-blue-hover]="activePlan() === 'ecommerce'"
                  [class.bg-transparent]="activePlan() !== 'ecommerce'"
                  [class.border]="activePlan() !== 'ecommerce'"
                  [class.border-gray-700]="activePlan() !== 'ecommerce'"
                  [class.hover:bg-gray-800]="activePlan() !== 'ecommerce'">
            Cotizar E-commerce <mat-icon class="text-[18px] w-4.5 h-4.5">chat</mat-icon>
          </button>
        </div>

        <div (click)="activePlan.set('apps')"
             (keydown.enter)="activePlan.set('apps')"
             (keydown.space)="activePlan.set('apps')"
             tabindex="0"
             role="button"
             class="bg-brand-card rounded-4xl p-8 flex flex-col transition-all duration-300 cursor-pointer relative outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
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

          <div class="flex justify-between items-center mb-6">
            <span class="text-[24px] text-nowrap overflow-x-hidden truncate font-bold">Apps</span>
            <span class="text-[14px] text-nowrap font-semibold px-3 py-1.5 rounded-full"
                  [class.bg-brand-blue/20]="activePlan() === 'apps'"
                  [class.text-brand-blue]="activePlan() === 'apps'"
                  [class.bg-gray-800]="activePlan() !== 'apps'"
                  [class.text-gray-300]="activePlan() !== 'apps'">Desde $80</span>
          </div> 
          <p class="text-sm text-gray-400 mb-8 grow">Apps para tu celular o computador.</p>
          
          <ul class="space-y-4 mb-8 text-sm text-gray-300">
            <li class="flex items-center gap-2"><mat-icon class="text-brand-blue text-[18px] w-4.5 h-4.5">check_circle</mat-icon> App Móvil / Android & Mac</li>
            <li class="flex items-center gap-2"><mat-icon class="text-brand-blue text-[18px] w-4.5 h-4.5">check_circle</mat-icon> App Desktop / Windows & Mac</li>
            <li class="flex items-center gap-2"><mat-icon class="text-brand-blue text-[18px] w-4.5 h-4.5">check_circle</mat-icon> Integración local o externa</li>
            <li class="flex items-center gap-2"><mat-icon class="text-brand-blue text-[18px] w-4.5 h-4.5">check_circle</mat-icon> Facil instalación y gestión</li>
          </ul>
          <button (click)="openWhatsApp('Aplicación a Medida', $event)"
                  class="w-full py-2.5 rounded-3xl font-medium transition-colors mt-auto flex items-center justify-center gap-2"
                  [class.bg-brand-blue]="activePlan() === 'apps'"
                  [class.text-white]="activePlan() === 'apps'"
                  [class.hover:bg-brand-blue-hover]="activePlan() === 'apps'"
                  [class.bg-transparent]="activePlan() !== 'apps'"
                  [class.border]="activePlan() !== 'apps'"
                  [class.border-gray-700]="activePlan() !== 'apps'"
                  [class.hover:bg-gray-800]="activePlan() !== 'apps'">
            Cotizar App <mat-icon class="text-[18px] w-4.5 h-4.5">chat</mat-icon>
          </button>
        </div>

        <div (click)="activePlan.set('ia')"
             (keydown.enter)="activePlan.set('ia')"
             (keydown.space)="activePlan.set('ia')"
             tabindex="0"
             role="button"
             class="bg-brand-card rounded-4xl p-8 flex flex-col transition-all duration-300 cursor-pointer relative outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
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
            <span class="text-[24px] font-bold text-nowrap overflow-x-hidden truncate">Automatizar</span>
            <span class="text-[14px] text-nowrap font-semibold px-3 py-1.5 rounded-full"
                  [class.bg-brand-blue/20]="activePlan() === 'ia'"
                  [class.text-brand-blue]="activePlan() === 'ia'"
                  [class.bg-gray-800]="activePlan() !== 'ia'"
                  [class.text-gray-300]="activePlan() !== 'ia'">Desde $90 </span>
          </div>

          <p class="text-sm text-gray-400 mb-8 grow">Digitalización de procesos, IA, IoT.</p>
          
          <ul class="space-y-4 mb-8 text-sm text-gray-300">
            <li class="flex items-center gap-2"><mat-icon class="text-brand-blue text-[18px] w-4.5 h-4.5">check_circle</mat-icon> Chatbots y Agentes IA</li>
            <li class="flex items-center gap-2"><mat-icon class="text-brand-blue text-[18px] w-4.5 h-4.5">check_circle</mat-icon> Integración de sistemas (IoT)</li>
            <li class="flex items-center gap-2"><mat-icon class="text-brand-blue text-[18px] w-4.5 h-4.5">check_circle</mat-icon> Visión artificial (Video vigilancia)</li>
            <li class="flex items-center gap-2"><mat-icon class="text-brand-blue text-[18px] w-4.5 h-4.5">check_circle</mat-icon> Automatización de flujos</li>
          </ul>
          <button (click)="openWhatsApp('Automatización e IA', $event)"
                  class="w-full py-2.5 rounded-3xl font-medium transition-colors mt-auto flex items-center justify-center gap-2"
                  [class.bg-brand-blue]="activePlan() === 'ia'"
                  [class.text-white]="activePlan() === 'ia'"
                  [class.hover:bg-brand-blue-hover]="activePlan() === 'ia'"
                  [class.bg-transparent]="activePlan() !== 'ia'"
                  [class.border]="activePlan() !== 'ia'"
                  [class.border-gray-700]="activePlan() !== 'ia'"
                  [class.hover:bg-gray-800]="activePlan() !== 'ia'">
            Agendar Consultoría <mat-icon class="text-[18px] w-4.5 h-4.5">chat</mat-icon>
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
    event.stopPropagation(); 
    const phoneNumber = '593999584131'; 
    const message = encodeURIComponent(`Muy buenas, estoy interesado en el servicio de ${planName}. ¿Podrían darme más información?`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  }
}
