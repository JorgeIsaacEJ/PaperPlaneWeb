import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FoooterViewComponent } from './views/footer/view/view.component';
import { NavBarViewComponent } from "./views/navbar/view/view.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, FoooterViewComponent, NavBarViewComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PaperPlaneWeb';
}
