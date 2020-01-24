import { Component, OnInit } from '@angular/core';
import { LeavesService } from '../service/leaves.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public leaves = [];
  public errorMsg; 

  constructor(private _leaveService: LeavesService) { }

  ngOnInit() {
    this._leaveService.getleaves()
    .subscribe(data => this.leaves = data,
      error => this.errorMsg = error);
  }

}
