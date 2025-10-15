import { ChangeDetectionStrategy, Component} from '@angular/core';
import { NavbarComponent } from "../../components/shared/navbar/navbar.component";
import { BioPageComponent } from "../../components/bio-page/bio-page.component";
import { AboutExperienceComponent } from "../../components/about-experience/about-experience.component";
import { AboutProjectsComponent } from "../../components/about-projects/about-projects.component";
import { FooterComponent } from "../../components/shared/footer/footer.component";


@Component({
  selector: 'app-abaout-me-page',
  imports: [NavbarComponent, BioPageComponent, AboutExperienceComponent, AboutProjectsComponent, FooterComponent],
  templateUrl: './abaout-me-page.component.html',
})
export class AbaoutMePageComponent
{

}
