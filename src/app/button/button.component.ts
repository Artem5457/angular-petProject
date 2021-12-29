import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @HostBinding('class')
  classList = 'app-button';

  @Input() label: string | undefined;
  @Output() onClick = new EventEmitter();

  constructor() {

  }

  onClickButton(event: any) {
    console.log('event', event)
    this.onClick.emit(event);
  }
}
