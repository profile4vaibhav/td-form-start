import { Injectable } from "@angular/core";

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  myData = new Subject<string>();
}
