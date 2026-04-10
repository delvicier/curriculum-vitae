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
            <div class="w-8 h-8 rounded bg-brand-blue flex items-center justify-center text-white font-bold text-xl">
              D
            </div>
            <span class="text-xl font-bold tracking-tight">Divinity PC</span>
          </a>
          
          <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a routerLink="/" fragment="servicios" class="hover:text-white transition-colors flex items-center gap-1">
              <mat-icon class="text-[18px] w-[18px] h-[18px]">code</mat-icon> Servicios
            </a>
            <a routerLink="/" fragment="planes" class="hover:text-white transition-colors flex items-center gap-1">
              <mat-icon class="text-[18px] w-[18px] h-[18px]">sell</mat-icon> Planes
            </a>
          </nav>

          <div class="flex items-center gap-4">
            <button class="hidden md:flex items-center gap-2 text-sm font-medium hover:text-gray-300 transition-colors">
              <mat-icon class="text-[18px] w-[18px] h-[18px]">login</mat-icon> Portal Cliente
            </button>
            <button class="bg-brand-blue hover:bg-brand-blue-hover text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
              Contactar <mat-icon class="text-[18px] w-[18px] h-[18px]">arrow_forward</mat-icon>
            </button>
          </div>
        </div>
      </header>

      <main class="flex-grow">
        <router-outlet></router-outlet>
      </main>

      <!-- Footer -->
      <footer class="border-t border-brand-border mt-20 py-12">
        <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div class="flex items-center gap-2">
            <div class="w-6 h-6 rounded bg-brand-blue flex items-center justify-center text-white font-bold text-xs">
              D
            </div>
            <span class="font-bold">Divinity PC</span>
          </div>
          <p class="text-gray-500 text-sm">© 2026 Divinity PC. Todos los derechos reservados.</p>
          <div class="flex gap-4 text-gray-500">
            <a href="#" class="hover:text-white transition-colors">Twitter</a>
            <a href="#" class="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" class="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  `,
  styles: []
})
export class App {}
