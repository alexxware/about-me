import { ChangeDetectionStrategy, Component, AfterViewInit } from '@angular/core';
import gsap from 'gsap';


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

  ngAfterViewInit()
  {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".animProjects", {
      scrollTrigger: {
        trigger: ".animProjects",   // el div que dispara la animación
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
