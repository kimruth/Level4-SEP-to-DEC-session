import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContactComponent } from "./contact/contact.component";
import { RealisationsComponent } from "./realisations/realisations.component";
import { OurSkillsComponent } from "./our-skills/our-skills.component";
import { OurServicesComponent } from "./our-services/our-services.component";
import { HomeComponent } from "./home/home.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContactComponent, RealisationsComponent, OurSkillsComponent, OurServicesComponent, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'full-portfolio-app';
}
