import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';
import { Observable} from 'rxjs';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import {StorageService} from '../storage.service';

@Component({
  selector: 'app-menu-popup',
  templateUrl: './menu-popup.component.html',
  styleUrls: ['./menu-popup.component.css']
})
export class MenuPopupComponent implements OnInit {
  id : string;
  constructor(private storageService:StorageService,private route: ActivatedRoute,
  private router: Router) { }

  ngOnInit() {
    this.router.events
       .filter(event => event instanceof NavigationEnd)
       .map(_ => this.router.routerState.root)
       .map(route => {
           while (route.firstChild) route = route.firstChild;
           return route;
       })
       //.flatMap((route: ActivatedRoute) => route.paramMap)
       .subscribe((route:ActivatedRoute) => {
           // code métier
           this.id = route.snapshot.params.id;
           //console.log(route.snapshot.params.id);
       });
  }

  save() : void {
      this.storageService.save(this.id);
  }

  load () : void {
      this.storageService.load();
  }

  sound () : void {
      this.storageService.save('1');
      this.load();
      //this.router.navigate(['id',1]);
  }

}
