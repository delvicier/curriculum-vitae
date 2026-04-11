import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-root',
  imports: [MatIconModule],
  template: `
    <div class="max-w-3xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-16 md:gap-12">
      
      <!-- Section 1: Hero -->
      <section class="flex flex-col items-center text-center space-y-6">
        <div class="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(139,92,246,0.3)]">
          <img src="/perfil.png" alt="Profile" class="w-full h-full object-cover" referrerpolicy="no-referrer">
          <div class="absolute inset-0 bg-linear-to-t"></div>
        </div>
        
        <div class="space-y-2">
          <h1 class="font-display text-4xl md:text-5xl font-bold tracking-tight text-white">
            Me presento <br/>
            <span class="text-transparent bg-clip-text bg-linear-to-r from-[#5322ce] to-[#6b3ade]">Christopher Delvicier</span>
          </h1>
          <p class="text-xs md:text-sm font-semibold tracking-[0.2em] text-[#b4b6c3] uppercase mt-4">
            Full Stack Developer
          </p>
        </div>
      </section>

      <!-- Section 2: Skills -->
      <section class="space-y-6">
        <div class="flex items-center gap-3">
          <div class="w-6 h-1 bg-[#8b5cf6] rounded-full"></div>
          <h2 class="font-display text-xl font-semibold text-white">Stack Tecnológico</h2>
        </div>
        
        <div class="flex flex-wrap gap-3 justify-center">
          @for (skill of skills; track skill.name) {
            <div class="glass-pill2 flex items-center gap-3 px-4 py-2.5 cursor-default">
              <div class="icon-wrapper2 w-7 h-7">
                <mat-icon class="text-[16px] w-4 h-4">{{skill.icon}}</mat-icon>
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
          <h2 class="font-display text-xl font-semibold text-white">Algunos de mis proyectos</h2>
        </div>
        <!-- Cards -->
        <div class="grid grid-cols-1 justify-items-center md:grid-cols-2 gap-6">
          @for (project of projects; track project.title) {
            <a class="glass-card group w-84 flex flex-col cursor-pointer" [href]="project.link">
              <div class="h-48 overflow-hidden relative rounded-t-3xl -mx-px -mt-px">
                <img [src]="project.image" [alt]="project.title" class="w-full h-full object-container transition-transform duration-500 group-hover:scale-105" referrerpolicy="no-referrer">
                <div class="absolute inset-0 bg-linear-to-t from-[#0d0f1336] to-transparent opacity-90"></div>
              </div>
              <div class="p-6 flex flex-col gap-3">
                <div class="flex items-center justify-between">
                  <h3 class="font-display text-lg font-bold text-white">{{project.title}}</h3>
                  <span class="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 bg-[#1f143d] text-[#6235cc] rounded-lg border border-[#8b5cf6]/30">
                    {{project.type}}
                  </span>
                </div>
                <p class="text-sm text-[#9496a8] leading-relaxed">
                  {{project.description}}
                </p>
              </div>
            </a>
          }
        </div>
      </section>

      <!-- Section 4: About & Contact -->
      <section class="space-y-8">
        <div class="flex items-center gap-3">
          <div class="w-6 h-1 bg-[#8b5cf6] rounded-full"></div>
          <h2 class="font-display text-xl font-semibold text-white">Educación & Contactos</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Education & Current Role -->
          <div class="glass-card2 p-6 space-y-6">
            
            <div class="space-y-4">
              <h3 class="text-xs font-semibold tracking-widest text-[#9496a8] uppercase">Educación</h3>

              <div class="space-y-4">

                <a href="https://storage2.me-qr.com/pdf/e613f762-f015-4805-8b69-3fa17dd86ce8.pdf" class="flex items-center gap-4 py-3 px-4 rounded-4xl glass-card3  hover:border-[#8b5cf6]/40 hover:bg-[#1f143d]/50 transition-all group">
                  <div class="icon-wrapper w-10 h-10 shrink-0 group-hover:scale-110 transition-transform">
                    <mat-icon class="text-[20px] w-5 h-5">school</mat-icon>
                  </div>
                  <div class="grow">
                    <p class="font-medium text-white text-sm">Grado Superior</p>
                    <p class="text-xs text-[#9496a8] mt-0.5">Desarrollo de Aplicaciones</p>
                  </div>
                  <div class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#9496a8] group-hover:text-white group-hover:bg-white/10 transition-all">
                    <mat-icon class="text-[16px] w-4 h-4">arrow_forward</mat-icon>
                  </div>
                </a>

                <a href="https://p13.zdusercontent.com/attachment/9346979/SN5cGkR7WqENBTUnNmQfa1h93?token=eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..yc0lwm_yywH3pXVR64NG4Q.SItCHNBCZPMrz0zHhZ1MkeLNXBq5R7si8TVaE2_KTeDbOI8DnjyXiRqwilsFkRpQSzW1x9jzlw6Qdr86XqudBV46wCgvnvkn5S_QiZQSGlbSOeFLqxMv2HWnG6glfn_9urgMpuyTnNmr9Pyhkg2jmYi9Ib2MgCLyrYfps8A4_Bpmc4GW_3ZgwCgaZQGd_NEGrFPzK9sR9kXSQ4PyUigNpO3DKtkKoG0gjexXICiIMYtLof5CE5whjHq-rJcUnQQQRlMcFHAGApJHQ4Dyn6mnfe_ZaY-QnGcDWK6so8PfqVY.mzxoBrjWM6BylJHmechaTA" class="flex items-center gap-4 py-3 px-4 rounded-4xl glass-card3  hover:border-[#8b5cf6]/40 hover:bg-[#1f143d]/50 transition-all group">
                  <div class="icon-wrapper w-10 h-10 shrink-0 group-hover:scale-110 transition-transform">
                    <mat-icon class="text-[20px] w-5 h-5">school</mat-icon>
                  </div>
                  <div class="grow">
                    <p class="font-medium text-white text-sm">Lenguas Extranjeras</p>
                    <p class="text-xs text-[#9496a8] mt-0.5">CEFR B1 Intermediate</p>
                  </div>
                  <div class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#9496a8] group-hover:text-white group-hover:bg-white/10 transition-all">
                    <mat-icon class="text-[16px] w-4 h-4">arrow_forward</mat-icon>
                  </div>
                </a>

                <a href="https://platzi.com/p/christopher-delvicier/" class="flex items-center gap-4 py-3 px-4 rounded-4xl glass-card3  hover:border-[#8b5cf6]/40 hover:bg-[#1f143d]/50 transition-all group">
                  <div class="icon-wrapper w-10 h-10 shrink-0 group-hover:scale-110 transition-transform">
                    <mat-icon class="text-[20px] w-5 h-5">school</mat-icon>
                  </div>
                  <div class="grow">
                    <p class="font-medium text-white text-sm">Educación continua</p>
                    <p class="text-xs text-[#9496a8] mt-0.5">Platzi, Udemy, Domestika</p>
                  </div>
                  <div class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#9496a8] group-hover:text-white group-hover:bg-white/10 transition-all">
                    <mat-icon class="text-[16px] w-4 h-4">arrow_forward</mat-icon>
                  </div>
                </a>

              </div>
            </div>
          </div>

          <!-- Contact -->
          <div class="glass-card2 p-6 space-y-6">
            <h3 class="text-xs font-semibold tracking-widest text-[#9496a8] uppercase">Contacto</h3>
            <div class="space-y-4">
              <a href="mailto:delvicier@outlook.com" class="flex items-center gap-4 py-3 px-4 rounded-4xl glass-card3  hover:border-[#8b5cf6]/40 hover:bg-[#1f143d]/50 transition-all group">
                <div class="icon-wrapper w-10 h-10 shrink-0 group-hover:scale-110 transition-transform">
                  <mat-icon class="text-[20px] w-5 h-5">email</mat-icon>
                </div>
                <div class="grow">
                  <p class="text-xs text-[#9496a8]">Email</p>
                  <p class="text-sm font-medium text-white mt-0.5">delvicier&#64;outlook.com</p>
                </div>
                <div class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#9496a8] group-hover:text-white group-hover:bg-white/10 transition-all">
                  <mat-icon class="text-[16px] w-4 h-4">arrow_forward</mat-icon>
                </div>
              </a>
              
              <a href="tel:+1234567890" class="flex items-center gap-4 py-3 px-4 glass-card3 transition-all group">
                <div class="icon-wrapper w-10 h-10 shrink-0 group-hover:scale-110 transition-transform">
                  <mat-icon class="text-[20px] w-5 h-5">phone</mat-icon>
                </div>
                <div class="grow">
                  <p class="text-xs text-[#9496a8]">Whatsapp</p>
                  <p class="text-sm font-medium text-white mt-0.5">0999584131</p>
                </div>
                <div class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[#9496a8] group-hover:text-white group-hover:bg-white/10 transition-all">
                  <mat-icon class="text-[16px] w-4 h-4">arrow_forward</mat-icon>
                </div>
              </a>

              <div class="flex items-center gap-4 py-3 px-4 rounded-4xl">
                <div class="icon-wrapper w-10 h-10 shrink-0">
                  <mat-icon class="text-[20px] w-5 h-5">schedule</mat-icon>
                </div>
                <div>
                  <p class="text-xs text-[#9496a8]">Horarios</p>
                  <p class="text-sm font-medium text-white mt-0.5">Lunes - Sabado | 8 AM - 6 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <footer class="pt-4 text-center">
        <p class="text-xs text-[#9496a8]">&copy; 2026 Christopher Delvicier. All rights reserved.</p>
      </footer>
    </div>
  `,
})
export class App {
  skills = [
    { name: 'JAVA', icon: 'code' },
    { name: 'SPRING', icon: 'code' }, 
    { name: 'KOTLIN', icon: 'terminal' },
    { name: 'ANDROID', icon: 'android' },
    { name: 'PYTHON', icon: 'code' },
    { name: 'TypeScript', icon: 'data_object' }, 
    { name: 'PHP', icon: 'php' }, 
    { name: 'POSTGRESQL', icon: 'storage' },
    { name: 'MYSQL', icon: 'storage' },
    { name: 'TAILWIND', icon: 'brush' },
    { name: 'REACT', icon: 'web' },
    { name: 'ANGULAR', icon: 'web' },
  ];

  projects = [
    {
      title: 'Moodle React',
      type: 'React',
      link: 'https://delvicier.github.io/',
      description: 'Plataforma educativa con creador de paginas, examenes y foros. Integraciones con inteligencia artificial (Ollama).',
      image: '/edu-react.png'
    },
    {
      title: 'ASK Angular',
      type: 'Angular',
      link: 'https://asksupernick.netlify.app/',
      description: 'Digitalización de preguntas de examen mediante OCR local y gestión de archivos con indexeddb.',
      image: '/edu-angular.png'
    }
  ];
}
