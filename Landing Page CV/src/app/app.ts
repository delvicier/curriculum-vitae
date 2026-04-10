import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [MatIconModule],
  template: `
    <div class="max-w-3xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-16 md:gap-24">
      
      <!-- Section 1: Hero -->
      <section class="flex flex-col items-center text-center space-y-6">
        <div class="relative w-32 h-32 md:w-40 md:h-40 rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(139,92,246,0.3)]">
          <img src="https://picsum.photos/seed/developer/400/400" alt="Profile" class="w-full h-full object-cover" referrerpolicy="no-referrer">
          <div class="absolute inset-0 bg-gradient-to-t from-[#0b0c10]/80 to-transparent"></div>
        </div>
        
        <div class="space-y-2">
          <h1 class="font-display text-4xl md:text-5xl font-bold tracking-tight text-white">
            Hola, yo soy <br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] to-indigo-400">Christopher...</span>
          </h1>
          <p class="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#9496a8] uppercase mt-4">
            Full Stack Developer
          </p>
        </div>
      </section>

      <!-- Section 2: Skills -->
      <section class="space-y-6">
        <div class="flex items-center gap-3">
          <div class="w-6 h-1 bg-[#8b5cf6] rounded-full"></div>
          <h2 class="font-display text-xl font-semibold text-white">Technical Arsenal</h2>
        </div>
        
        <div class="flex flex-wrap gap-3">
          @for (skill of skills; track skill.name) {
            <div class="glass-pill flex items-center gap-3 px-4 py-2.5 cursor-default">
              <div class="icon-wrapper w-7 h-7">
                <mat-icon class="text-[16px] w-[16px] h-[16px]">{{skill.icon}}</mat-icon>
              </div>
              <span class="text-sm font-medium text-white">{{skill.name}}</span>
            </div>
          }
        </div>
      </section>

      <!-- Section 3: Projects -->
      <section class="space-y-6">
        <div class="flex items-center gap-3">
          <div class="w-6 h-1 bg-[#8b5cf6] rounded-full"></div>
          <h2 class="font-display text-xl font-semibold text-white">Featured Projects</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          @for (project of projects; track project.title) {
            <div class="glass-card group flex flex-col cursor-pointer">
              <div class="h-48 overflow-hidden relative rounded-t-[24px] -mx-[1px] -mt-[1px]">
                <img [src]="project.image" [alt]="project.title" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerpolicy="no-referrer">
                <div class="absolute inset-0 bg-gradient-to-t from-[#12141a] to-transparent opacity-90"></div>
              </div>
              <div class="p-6 flex flex-col gap-3">
                <div class="flex items-center justify-between">
                  <h3 class="font-display text-lg font-bold text-white">{{project.title}}</h3>
                  <span class="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 bg-[#1f143d] text-[#8b5cf6] rounded-md border border-[#8b5cf6]/30">
                    {{project.type}}
                  </span>
                </div>
                <p class="text-sm text-[#9496a8] leading-relaxed">
                  {{project.description}}
                </p>
              </div>
            </div>
          }
        </div>
      </section>

      <!-- Section 4: About & Contact -->
      <section class="space-y-8">
        <div class="flex items-center gap-3">
          <div class="w-6 h-1 bg-[#8b5cf6] rounded-full"></div>
          <h2 class="font-display text-xl font-semibold text-white">Background & Contact</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Education & Current Role -->
          <div class="glass-card p-6 space-y-6">
            <div class="space-y-4">
              <h3 class="text-xs font-semibold tracking-widest text-[#9496a8] uppercase">Current Role</h3>
              <div class="flex items-center gap-4 p-3 rounded-xl bg-[#12141a] border border-white/5">
                <div class="icon-wrapper w-10 h-10 shrink-0">
                  <mat-icon class="text-[20px] w-[20px] h-[20px]">work</mat-icon>
                </div>
                <div>
                  <p class="font-medium text-white text-sm">Software Engineer</p>
                  <p class="text-xs text-[#9496a8] mt-0.5">Tech Solutions Inc.</p>
                </div>
              </div>
            </div>
            
            <div class="space-y-4">
              <h3 class="text-xs font-semibold tracking-widest text-[#9496a8] uppercase">Education</h3>
              <div class="space-y-3">
                <div class="flex items-center gap-4 p-3 rounded-xl bg-[#12141a] border border-white/5 hover:border-white/10 transition-colors">
                  <div class="icon-wrapper w-10 h-10 shrink-0">
                    <mat-icon class="text-[20px] w-[20px] h-[20px]">school</mat-icon>
                  </div>
                  <div>
                    <p class="font-medium text-white text-sm">Ingeniería en Sistemas</p>
                    <p class="text-xs text-[#9496a8] mt-0.5">Universidad Tecnológica</p>
                  </div>
                </div>
                <div class="flex items-center gap-4 p-3 rounded-xl bg-[#12141a] border border-white/5 hover:border-white/10 transition-colors">
                  <div class="icon-wrapper w-10 h-10 shrink-0">
                    <mat-icon class="text-[20px] w-[20px] h-[20px]">laptop_mac</mat-icon>
                  </div>
                  <div>
                    <p class="font-medium text-white text-sm">Cursos Online</p>
                    <p class="text-xs text-[#9496a8] mt-0.5">Platzi, Udemy, Domestika</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact -->
          <div class="glass-card p-6 space-y-6">
            <h3 class="text-xs font-semibold tracking-widest text-[#9496a8] uppercase">Get in touch</h3>
            <div class="space-y-3">
              <a href="mailto:hello@christopher.dev" class="flex items-center gap-4 p-3 rounded-xl bg-[#12141a] border border-white/5 hover:border-[#8b5cf6]/40 hover:bg-[#1f143d]/50 transition-all group">
                <div class="icon-wrapper w-10 h-10 shrink-0 group-hover:scale-110 transition-transform">
                  <mat-icon class="text-[20px] w-[20px] h-[20px]">email</mat-icon>
                </div>
                <div class="flex-grow">
                  <p class="text-xs text-[#9496a8]">Email</p>
                  <p class="text-sm font-medium text-white mt-0.5">hello&#64;christopher.dev</p>
                </div>
                <div class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#9496a8] group-hover:text-white group-hover:bg-white/10 transition-all">
                  <mat-icon class="text-[16px] w-[16px] h-[16px]">arrow_forward</mat-icon>
                </div>
              </a>
              
              <a href="tel:+1234567890" class="flex items-center gap-4 p-3 rounded-xl bg-[#12141a] border border-white/5 hover:border-[#8b5cf6]/40 hover:bg-[#1f143d]/50 transition-all group">
                <div class="icon-wrapper w-10 h-10 shrink-0 group-hover:scale-110 transition-transform">
                  <mat-icon class="text-[20px] w-[20px] h-[20px]">phone</mat-icon>
                </div>
                <div class="flex-grow">
                  <p class="text-xs text-[#9496a8]">Phone</p>
                  <p class="text-sm font-medium text-white mt-0.5">+1 (234) 567-890</p>
                </div>
                <div class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#9496a8] group-hover:text-white group-hover:bg-white/10 transition-all">
                  <mat-icon class="text-[16px] w-[16px] h-[16px]">arrow_forward</mat-icon>
                </div>
              </a>

              <div class="flex items-center gap-4 p-3 rounded-xl bg-[#12141a] border border-white/5">
                <div class="icon-wrapper w-10 h-10 shrink-0">
                  <mat-icon class="text-[20px] w-[20px] h-[20px]">schedule</mat-icon>
                </div>
                <div>
                  <p class="text-xs text-[#9496a8]">Availability</p>
                  <p class="text-sm font-medium text-white mt-0.5">Mon - Fri, 9am - 6pm EST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer class="pt-8 pb-4 text-center">
        <p class="text-xs text-[#9496a8]">&copy; 2026 Christopher. All rights reserved.</p>
      </footer>
    </div>
  `,
})
export class App {
  skills = [
    { name: 'JAVA', icon: 'code' },
    { name: 'KOTLIN', icon: 'terminal' },
    { name: 'TS', icon: 'data_object' },
    { name: 'JS', icon: 'javascript' },
    { name: 'PHP', icon: 'php' },
    { name: 'PYTHON', icon: 'code' },
    { name: 'POSTGRESQL', icon: 'storage' },
    { name: 'MYSQL', icon: 'storage' },
    { name: 'TAILWIND', icon: 'brush' },
    { name: 'SCSS', icon: 'brush' },
  ];

  projects = [
    {
      title: 'Nexus Analytics',
      type: 'WEB',
      description: 'Plataforma de visualización de datos en tiempo real construida con Kotlin y React.',
      image: 'https://picsum.photos/seed/code/600/400'
    },
    {
      title: 'Cloud Flow',
      type: 'WEB',
      description: 'Arquitectura escalable para gestión de activos digitales usando Python y PostgreSQL.',
      image: 'https://picsum.photos/seed/abstract3/600/400'
    }
  ];
}
