import { Component, OnInit } from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private aRoute: ActivatedRoute,
    private titleService: Title
  ) { }

  ngOnInit() {
    // Set title page
    this.aRoute.data
      .subscribe(data => this.titleService.setTitle(data.title));
  }

}
