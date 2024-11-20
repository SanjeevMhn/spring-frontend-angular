import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  @Input() expanded = false;
  @Output() toggleSidebar = new EventEmitter();

  onSidebarToggle(){
    this.toggleSidebar.emit();
  }
}
