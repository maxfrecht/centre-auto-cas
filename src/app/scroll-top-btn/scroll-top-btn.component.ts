import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-top-btn',
  templateUrl: './scroll-top-btn.component.html',
  styleUrls: ['./scroll-top-btn.component.scss']
})
export class ScrollTopBtnComponent implements OnInit {

  public scrolling = false;

  constructor() {

    window.addEventListener('scroll', () => {
      
      if(window.scrollY > 0) {
        this.scrolling = true;
        console.log(this.scrolling);
        
      } else {
        this.scrolling = false;
      }
    })
  }

  ngOnInit(): void {
  }

  scrollTop() {
    window.scrollTo(0, 0);
  }

  scrollingListener(): void {
  }
}
