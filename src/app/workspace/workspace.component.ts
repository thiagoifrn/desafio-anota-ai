import { Component } from '@angular/core';
import { CardComponent } from "./components/card/card.component";

@Component({
    selector: 'app-workspace',
    standalone: true,
    templateUrl: './workspace.component.html',
    styleUrl: './workspace.component.scss',
    imports: [CardComponent]
})
export class WorkspaceComponent {

}
