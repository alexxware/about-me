import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, viewChild } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'about-experience',
  imports: [],
  templateUrl: './about-experience.component.html',
  styleUrl: './about-experience.component.css'
})
export class AboutExperienceComponent implements AfterViewInit {
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
