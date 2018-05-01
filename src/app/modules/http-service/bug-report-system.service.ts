import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable()
export class BugReportSystemService {

  private ENDPOINT = "http://localhost:3001/bugs";

  constructor(private http: HttpClient) { }

  getBugs() {
    return this.http.get(this.ENDPOINT).pipe(
      map((data: any[]) => data.map(c => {
        return {titlos: c.title}
      }))
    );
  }

}

export interface Bugs {
  titlos: string;
}
