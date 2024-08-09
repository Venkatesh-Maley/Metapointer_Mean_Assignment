import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router'; 
import { CommonModule } from '@angular/common'; 
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, RouterModule], 
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  students: any;

  constructor(private studentService: StudentService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.studentService.getStudents().subscribe(data => {
      this.students = data;
    });
  }

  deleteStudent(id: string) {
    this.studentService.deleteStudent(id).subscribe(data => {
      console.log(data);
      this.reloadData();
    });
  }
}
