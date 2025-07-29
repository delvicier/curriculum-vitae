import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { LucideAngularModule, Home, Settings, ActivitySquare,BriefcaseBusiness, GraduationCap, UserRoundCheck, Languages, DraftingCompass, Info, ContactRound, PersonStanding, BookMarked, Landmark, Images, ChevronLeft, ChevronRight, Download, LayoutGrid } from 'lucide-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    importProvidersFrom(LucideAngularModule.pick({ Home, Settings, ActivitySquare,BriefcaseBusiness, GraduationCap, UserRoundCheck, Languages, DraftingCompass, Info, ContactRound, PersonStanding, BookMarked, Landmark, Images, ChevronLeft, ChevronRight, Download, LayoutGrid }))
  ]
};
