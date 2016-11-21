import { Component } from '@angular/core';
import { RecruitxService } from './app.service';

@Component({
    selector: 'my-app',
    template: `<div>
                <li> Team --> Count </li>
                <li *ngFor="let panelist of panelists">
                    {{ panelist.team }} --> {{ panelist.count }}
                </li>
                </div>`
})
export class AppComponent {
    public panelists: {};

    constructor(public service: RecruitxService) {
        this.service.getPanelists().subscribe(panelists => this.panelists = panelists.json());
    }
}
