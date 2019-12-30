import { Component, OnInit } from '@angular/core';

import { LibService } from '../lib.service';
import { Library } from '../library';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-display-library',
  templateUrl: './display-library.component.html',
  styleUrls: ['./display-library.component.css']
})
export class DisplayLibraryComponent implements OnInit {

  private allLib: Observable<Library[]>;
  public get allLibb(): Observable<Library[]> {
    return this.allLib;
  }
  public set allLibb(value: Observable<Library[]>) {
    this.allLib = value;
  }
  constructor(public libService: LibService) { }

  loadDisplay() {
    this.allLibb = this.libService.GetData();
  }
  deleteData(id: any) {
    this.libService.deleteData(id).subscribe(data => {
      return this.loadDisplay();
    }); /*.pipe(map(data => data.filter(i => i.Id === id)));*/
  }
  ngOnInit() {
    this.loadDisplay();
  }

}
