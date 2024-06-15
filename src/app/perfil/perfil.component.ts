import { Component } from '@angular/core';
import { ContactComponent } from "../contact/contact.component";

@Component({
    selector: 'app-perfil',
    standalone: true,
    templateUrl: './perfil.component.html',
    styleUrl: './perfil.component.css',
    imports: [ContactComponent]
})
export class PerfilComponent {

}
