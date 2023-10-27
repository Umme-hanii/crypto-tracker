import { Component, HostBinding, OnInit } from '@angular/core'
import { OverlayContainer } from '@angular/cdk/overlay'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent implements OnInit {
  constructor(private overlay: OverlayContainer) {}

  //Default theme is dark so set it as true here
  toggleControl = new FormControl(true)
  @HostBinding('class') className = ''
  darkClassName = 'theme-dark'
  lightClassName = 'theme-light'

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      this.className = darkMode ? this.darkClassName : this.lightClassName

      if (darkMode) {
        this.overlay.getContainerElement().classList.add(this.darkClassName)
      } else {
        this.overlay.getContainerElement().classList.remove(this.darkClassName)
      }
    })
  }
}
