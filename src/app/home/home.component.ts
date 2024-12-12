import { InfoService } from './../services/info.service';
import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HttpClientModule,RouterLink],
  providers:[InfoService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  UserData:any

  ngOnInit(): void {
this.service.getDataFromApi().subscribe((res)=>
{
this.UserData=res
});
};
deletedata(proId:any){
  this.service.deleteDataFromApi(proId).subscribe((res)=>{
alert('Are you sure you want to delete this data?');
window.location.reload()
  });
}
constructor(private service:InfoService){}
}
