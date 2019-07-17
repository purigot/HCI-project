import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor ( 
    private router: Router,
    // private modalService: NgbModal
    ) {}

  ngOnInit() {
  }

  select(index: any) {
    this.router.navigate(['/wordList'], { queryParams: { index: index }});
  }

  // openModal(content:any, index:any) {
  //   this.modalService.open(content, { centered: true });
  // }
}
