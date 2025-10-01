import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, signal, viewChild } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SvgWorldComponent } from "../svgs/svg-world/svg-world.component";
import { NgComponentOutlet } from '@angular/common';
import { DynamicSvg } from '../../interfaces/svg.interface';
import { SvgGearComponent } from '../svgs/svg-gear/svg-gear.component';
import { SvgDatabaseComponent } from '../svgs/svg-database/svg-database.component';
import { SvgBranchComponent } from '../svgs/svg-branch/svg-branch.component';
import { SvgListComponent } from "../svgs/svg-list/svg-list.component";
import { SvgGridComponent } from "../svgs/svg-grid/svg-grid.component";
import { SvgComputerComponent } from '../svgs/svg-computer/svg-computer.component';
import { SvgSearchComponent } from '../svgs/svg-search/svg-search.component';

@Component({
  selector: 'about-experience',
  imports: [NgComponentOutlet],
  templateUrl: './about-experience.component.html',
  styleUrl: './about-experience.component.css'
})
export class AboutExperienceComponent implements AfterViewInit {
  tags: DynamicSvg[] = [
    { component: SvgWorldComponent, text: "Desarrollo de aplicaciones frontend con Angular, TypeScript y Bootstrap." },
    { component: SvgGearComponent, text: "Creación y mantenimiento de aplicaciones .NET Framework y Core con arquitectura MVC." },
    { component: SvgDatabaseComponent, text: "Planificación, creación y gestión de bases de datos relacionales con SQL Server." },
    { component: SvgBranchComponent, text: "Administración y gestión de repositorio corporativo, mediante un control de versiones Team Foundation Server." }
  ]

  tagsSmyt: DynamicSvg[] = [
    { component: SvgListComponent, text: "Levantamiento de requerimientos y entrevistas con clientes." },
    { component: SvgGridComponent, text: "Diseño y construcción de bases de datos relacionales con SQL Server." },
    { component: SvgComputerComponent, text: "Desarrollo de aplicación con Windows Forms y .Net Framework." },
    { component: SvgSearchComponent, text: "Análisis de información para identificar oportunidades de mejora." }
  ]

  ngAfterViewInit()
  {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".animAmatech", {
      scrollTrigger: {
        trigger: ".animAmatech",   // el div que dispara la animación
        start: "top 80%",   // cuando el top del div llega al 80% de la pantalla
        toggleActions: "play none none none"
        // play on enter | do nothing on leave | do nothing on enter back | do nothing on leave back
      },
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out"
    });

    gsap.to(".animSmyt", {
      scrollTrigger: {
        trigger: ".animSmyt",   // el div que dispara la animación
        start: "top 80%",   // cuando el top del div llega al 80% de la pantalla
        toggleActions: "play none none none"
        // play on enter | do nothing on leave | do nothing on enter back | do nothing on leave back
      },
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out"
    });
  }


}
