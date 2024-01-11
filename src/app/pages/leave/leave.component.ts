import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaveService } from '../../services/leave.service';

@Component({
  selector: 'app-leave',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leave.component.html',
  styleUrl: './leave.component.sass'
})

export class LeaveComponent implements OnInit {
  leaveRequests = [];

  constructor(
    private leaveService: LeaveService
  ){}

  ngOnInit(): void {
      this.getAllRequests();
  }

  getAllRequests(){
    return this.leaveService.getAllLeaveRequests().subscribe((response: any) => {
      this.leaveRequests = response;
    });
  }

  getRequestByID(id: number){
    // const leaveRequest = this.leaveRequests.find(element => element.id === id);
  }
}
