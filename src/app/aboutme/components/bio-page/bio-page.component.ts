import { ChangeDetectionStrategy, Component, signal, AfterViewInit } from '@angular/core';
import gsap from 'gsap';

const colores = ['#2680d4', '#1c6ebb', '#1d7fdb'];

@Component({
  selector: 'about-bio-page',
  imports: [],
  templateUrl: './bio-page.component.html',
  styleUrl: './bio-page.component.css'
})
export class BioPageComponent {
  indexColor = 0
  textColor = signal('blue');
  imageProfile = signal('/assets/profile.jpeg')
  ngOnInit ()
  {
    setInterval(() => {
      this.textColor.set(colores[this.indexColor])
      this.indexColor = (this.indexColor + 1) % colores.length
    }, 1000);
  }

  ngAfterViewInit()
  {
    gsap.to(".title", { duration: 1, opacity: 1, y: 0 });
  }

 }
