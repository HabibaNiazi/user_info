import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { InfoService } from '../services/info.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editdata',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  providers:[InfoService],
  templateUrl: './editdata.component.html',
  styleUrl: './editdata.component.css'
})
export class EditdataComponent implements OnInit{
  updateRecord:any
  constructor(private fb:FormBuilder,private service:InfoService,private router:ActivatedRoute){}
  ngOnInit(): void {
    this.service.getUserDataFromApi(this.router.snapshot.params['id']).subscribe((res:any)=>{
      console.log(res);
      this.updateRecord=this.fb.group({
        fullName:[res['fullName']],
        email:[res['fullName']],
        password:[res['password']],
        phoneNumber:[res['phoneNumber']],
      });
    });
  }

  updateData(){
    this.service.UpdatedatainApi(this.router.snapshot.params['id'],this.updateRecord.value).subscribe((res)=>{
      console.log(res);
    });
  }
}
