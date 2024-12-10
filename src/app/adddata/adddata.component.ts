import { Component, OnInit } from '@angular/core';
import { InfoService } from '../services/info.service';
import { ReactiveFormsModule ,FormGroup,FormBuilder,AbstractControl,Validators} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import '@angular/compiler';


@Component({
  selector: 'app-adddata',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule],
  providers:[InfoService],
  templateUrl: './adddata.component.html',
  styleUrl: './adddata.component.css'
})
export class AdddataComponent implements OnInit{

  record:any
  constructor(private fb:FormBuilder,private service:InfoService){}
  ngOnInit(): void {
    this.record=this.fb.group({
      fullName:[''],
      email:[''],
      password:[''],
      phoneNumber:[''],
    });
  }
  saveData(){
    this.service.AddDataToApi(this.record.value).subscribe((res)=>{

      console.log(res);

    });
  }

}
