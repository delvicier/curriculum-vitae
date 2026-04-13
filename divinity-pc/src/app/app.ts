import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, MatIconModule],
  template: `
    <div class="min-h-screen relative overflow-hidden flex flex-col">
      <div class="glow-bg"></div>

      <!-- Header -->
      <header class="sticky top-0 z-50 border-b border-brand-border/50 bg-brand-dark/80 backdrop-blur-md">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a routerLink="/" class="flex items-center gap-2">
            <span class="text-xl font-bold tracking-tight">Divinity PC</span>
          </a>
          
          <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a routerLink="/" fragment="servicios" class="hover:text-white transition-colors flex items-center gap-1">
              <mat-icon class="text-[18px] w-4.5 h-4.5">code</mat-icon> Servicios
            </a>
            <a routerLink="/" fragment="planes" class="hover:text-white transition-colors flex items-center gap-1">
              <mat-icon class="text-[18px] w-4.5 h-4.5">sell</mat-icon> Planes
            </a>
          </nav>

          <div class="flex items-center gap-4">
            <button class="bg-brand-blue hover:bg-brand-blue-hover text-white pl-3.5 pr-2 py-1.5 rounded-3xl text-sm font-medium transition-colors flex items-center gap-2">
              Contactar <mat-icon class="text-[18px] w-4.5 h-4.5">arrow_forward</mat-icon>
            </button>
          </div>
        </div>
      </header>

      <main class="grow">
        <router-outlet></router-outlet>
      </main>

      <!-- Footer -->
      <footer class="border-t border-brand-border mt-20 py-12">
        <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-4">
          <p class="text-gray-500 text-sm">© 2026 Divinity PC. Todos los derechos reservados.</p> 
        </div>
      </footer>
    </div>
  `,
  styles: []
})
export class App {}
