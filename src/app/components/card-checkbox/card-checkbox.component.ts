import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-checkbox',
  templateUrl: './card-checkbox.component.html',
  styleUrls: ['./card-checkbox.component.scss'],
})
export class CardCheckboxComponent implements OnInit {
  @Input() imgUrl: string | undefined = '';
  @Input() title: string | undefined = '';
  @Input() text: string | undefined = '';
  @Input() linkPath: string = '';
  @Input() active: boolean = false;
  @Input() tabIndex: number = 0;
  @Input() id: string | undefined = '';
  @Input() importancia: number | undefined = 0;

  @Output() values = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  change(e: any, id: any, importancia: any) {
    this.values.emit({
      id_cobertura: id,
      checked: e.target.checked,
      importancia_segurada: importancia,
    });
  }
}
