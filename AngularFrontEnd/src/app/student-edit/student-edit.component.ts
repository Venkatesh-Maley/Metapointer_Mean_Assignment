import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { FormsModule } from '@angular/forms'; // Import FormsModule if ngModel is used in a standalone component

@Component({
  selector: 'app-student-edit',
  standalone: true,
  imports: [FormsModule], // Include FormsModule here for ngModel
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  id: string = '';
  student: any = {};

  constructor(private route: ActivatedRoute, private router: Router, private studentService: StudentService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.studentService.getStudent(this.id).subscribe(data => {
      this.student = data;
    });
  }

  updateStudent() {
    this.studentService.updateStudent(this.id, this.student).subscribe(data => {
      console.log(data);
      this.router.navigate(['/students']);
    });
  }
}
