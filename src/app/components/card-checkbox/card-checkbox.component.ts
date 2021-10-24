import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-checkbox',
  templateUrl: './card-checkbox.component.html',
  styleUrls: ['./card-checkbox.component.scss'],
})
export class CardCheckboxComponent implements OnInit {
  @Input() imgUrl: string = '';
  @Input() title: string = '';
  @Input() text: string = '';
  @Input() linkPath: string = '';
  @Input() active: boolean = false;
  @Input() tabIndex: number = 0;
  @Input() id: string = '';

  constructor() {}

  ngOnInit(): void {}
}
