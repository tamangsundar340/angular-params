import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.fragment.subscribe((res)=>{
      this.JumpTo(res)
    })
  }

  JumpTo(section){
    setTimeout(()=>{
      document.getElementById(section).scrollIntoView({behavior:"smooth"});
    },1000)
  }

}
