import { ChangeDetectionStrategy, Component, AfterViewInit } from '@angular/core';



@Component({
  selector: 'about-projects',
  imports: [],
  templateUrl: './about-projects.component.html',
  styleUrl: './about-projects.component.css'
})
export class AboutProjectsComponent {

  goToLink(url: string)
  {
    window.open(url);
  }

}
