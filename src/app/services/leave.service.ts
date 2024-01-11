import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {
  allLeaveRequests = [
    {
      "id": 1,
      "type": "Business Trip",
      "start_date": "2023-11-28",
      "end_date": "2023-11-29",
      "requester": "Steven De Koffi",
      "status": "Pending",
      "created_at": "2023-11-27",
      "updated_at": "2023-11-27"
    },
    {
      "id": 2,
      "type": "Maternity",
      "start_date": "2023-11-29",
      "end_date": "2023-11-30",
      "requester": "Olivia Samey",
      "status": "In Progress",
      "created_at": "2023-11-28",
      "updated_at": "2023-11-28"
    },
    {
      "id": 3,
      "type": "Maternity",
      "start_date": "2023-11-30",
      "end_date": "2023-12-01",
      "requester": "Rachel Ibukun",
      "status": "Completed",
      "created_at": "2023-11-29",
      "updated_at": "2023-11-29"
    }
  ];

  constructor() { }

  getAllLeaveRequests() {
    return of(this.allLeaveRequests);
  }

  getLeaveRequestByID(id: number){
    const leaveRequest = this.allLeaveRequests.find(element => element.id === id);

    return of(leaveRequest);
  }
}
