import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { OurSkillsComponent } from './our-skills/our-skills.component';
import { RealisationsComponent } from './realisations/realisations.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {path:'', component:HomeComponent, title:'Home'},
    {path:'our-services', component:OurServicesComponent, title:'Services'},
    {path:'our-skills', component:OurSkillsComponent, title:'Our Skills'},
    {path:'realisations', component:RealisationsComponent, title:'realisations'},
    {path:'contact', component:ContactComponent, title:'contact'}
];
