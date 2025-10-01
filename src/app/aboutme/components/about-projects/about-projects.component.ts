import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'about-projects',
  imports: [],
  templateUrl: './about-projects.component.html',
})
export class AboutProjectsComponent {

  goToLink(url: string)
  {
    window.open(url);
  }
}
