import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {

  constructor(
    private aRoute: ActivatedRoute,
    private titleService: Title,
    private route: Router
  ) { }

  ngOnInit() {
    this.aRoute.data
        .subscribe(data => this.titleService.setTitle(data.title));
  }

}
