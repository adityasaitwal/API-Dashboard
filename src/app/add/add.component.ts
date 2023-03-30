import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Serv3Service } from '../serv3.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {

  usersform: any;
  data: any;
  isEditMode: boolean = false;


  constructor(private postsrc: Serv3Service, private router: Router, private active: ActivatedRoute) {

    const userId = this.active.snapshot.params['id']
    
    if (userId) {

      this.isEditMode = true;
      this.postsrc.getbyData(userId).subscribe(data => {

        this.usersform.patchValue(data);
      })

    }


  }

  ngOnInit(): void {

    this.usersform = new FormGroup(
      {
        id: new FormControl(''),
        name: new FormControl(''),
        email: new FormControl(''),
        phone: new FormControl(''),
        city: new FormControl('')

      }
    )


  }

  adduser() {

    if (this.isEditMode) {

      this.postsrc.updatedata(this.usersform.controls.id.value, this.usersform.value).subscribe(data => {
        console.log(data)

      })

    }
    else {
      console.log(this.usersform.value);
      this.postsrc.postData(this.usersform.value).subscribe(Data => {
        console.log(Data);
        this.router.navigate(['display']);
      })
    }

  }

}