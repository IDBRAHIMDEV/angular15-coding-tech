import { Course } from './../models/course';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  title = "List of my courses"

  courses = [
    {id: '1', title: "learn Angular"},
    {id: '2', title: "learn Spring"},
    {id: '3', title: "learn Laravel"},
  ]

  course: Course | null = {
    id: '0',
    title: ""
  }

  edit: boolean = false

  myImage = "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"


  addCourse(){
    
    console.log(this.edit)

    if(this.course) {

      this.courses = [this.course, ...this.courses]
      this.course = {
        id: '0',
        title: ""
      }
      return
    }

    Swal.fire(
      'Field is empty?',
      'Please check your input !',
      'question'
    )

  }

  deleteCourse(id: string) {
    
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.courses = this.courses.filter((course) => id != course.id)
  
        Swal.fire({
            title: 'Deleted!',
            text: "Your Course has been deleted.",
            icon: 'success',
            timer: 3000
          })
      }
    })

  }


  editCourse(course: any) {
    this.course = course
    this.edit = true
  }


  updateCourse() {
    this.course = null

    this.edit = false
  }

}
