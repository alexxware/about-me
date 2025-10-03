import { ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component, HostListener, inject, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  menuOpen = false;
  // Propiedad para controlar la clase CSS
  isNavbarHidden: boolean = false;
  // Almacena la posición de scroll anterior
  private lastScrollTop: number = 0;
  // Define un umbral para iniciar la detección (ej: 100px desde arriba)
  private scrollThreshold: number = 100;

  scroller = inject(ViewportScroller)

  ngOnInit(): void {
    // Inicializa la posición de scroll actual
    this.lastScrollTop = window.scrollY || document.documentElement.scrollTop;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  scrollToSection(anchorId: string) {
    this.scroller.scrollToAnchor(anchorId);
  }

    // Escucha el evento de scroll en la ventana (window)
  @HostListener('window:scroll')
  onWindowScroll() {
    // Obtiene la posición de scroll vertical actual
    const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

    // 1. Detección de la Dirección del Scroll
    if (currentScrollTop > this.lastScrollTop && currentScrollTop > this.scrollThreshold) {
      // Deslizando HACIA ABAJO (y ya pasamos el umbral inicial)
      this.isNavbarHidden = true;
    } else if (currentScrollTop < this.lastScrollTop) {
      // Deslizando HACIA ARRIBA
      this.isNavbarHidden = false;
    }

    // 2. Manejo de la Posición Superior (si se llega al tope)
    if (currentScrollTop <= 0) {
      this.isNavbarHidden = false; // Muestra la barra si está en la parte superior
    }

    // 3. Actualiza la última posición conocida
    this.lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
  }
}
