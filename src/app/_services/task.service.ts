import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  url: string = "http://localhost:8080/task"
  constructor(private http:HttpClient) { }

  TaskList():Observable<Task[]>{
    return this.http.get<Task[]>(this.url+'/listAll');
  }
}
