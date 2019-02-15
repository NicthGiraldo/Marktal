import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    // en la variable template se esta inyectando el html para que se muestre en la pagina principal
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    title: string = 'app angular'
}