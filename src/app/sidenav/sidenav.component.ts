import { Component, inject, Input } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { AsyncPipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [AsyncPipe, RouterLink, RouterLinkActive],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
  domSanitizer = inject(DomSanitizer);
  menuService = inject(MenuService);
  menus$ = this.menuService.getMenus();
  @Input() expanded:boolean = true;
}
