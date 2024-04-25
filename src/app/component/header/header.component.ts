import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  checked = false;
  ngOnInit(): void {
    if(localStorage.getItem('theme')=='dark') this.checked = true;
  }

  toogleTheme(){
    console.log("In change theme");
    document.body.classList.toggle('dark');
    if(document.body.classList.contains('dark')){
      localStorage.setItem('theme','dark');
    }
    else{
      localStorage.setItem('theme','light');
    }
  }
}
