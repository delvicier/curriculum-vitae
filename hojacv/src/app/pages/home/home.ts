import { Component } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-home',
  imports: [LucideAngularModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  correo: string = 'delvicier@outlook.com';
}
