import {Component, Input, OnInit} from '@angular/core';
import {AccountInterface} from "../../../services/pseudo-backend/models/account.interface";

@Component({
  selector: 'app-dumb-account',
  templateUrl: './dumb-account.component.html',
  styleUrls: ['./dumb-account.component.scss']
})
export class DumbAccountComponent implements OnInit {
  @Input() dumbAccout: AccountInterface;
  constructor() { }

  ngOnInit() {
  }

}
