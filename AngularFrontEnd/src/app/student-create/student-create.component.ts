import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { Router } from '@angular/router';
import { StudentService } from '../student.service';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule


@Component({
  selector: 'app-student-create',
  standalone: true,
  imports: [FormsModule], // Include FormsModule here
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent {
  student = {
    name: '',
    address: '',
    phone: null
  };

  constructor(private studentService: StudentService, private router: Router) { }

  saveStudent() {
    this.studentService.createStudent(this.student).subscribe(data => {
      console.log(data);
      this.router.navigate(['/students']);
    });
  }
}
