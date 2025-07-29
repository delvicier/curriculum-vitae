import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Gallery } from '../../layouts/gallery/gallery';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, LucideAngularModule, Gallery],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  correo: string = 'delvicier@outlook.com';

  bolean: boolean = true;

  toggleGallery() {
    this.bolean = !this.bolean;
  }

  print() {
    window.print();
  }
}
