import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(private route: Router, private dialog: MatDialog) {}

  ngOnInit(): void {}

  navigateHome = () => {
    this.dialog.closeAll();
    this.route.navigate(['/']);
  };
}
