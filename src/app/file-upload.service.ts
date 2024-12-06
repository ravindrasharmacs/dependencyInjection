// FILEPATH: /d:/Practice/Angular/di/dep-inj/src/app/file-upload.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  constructor(private http: HttpClient) {}

  upload(file: File): Observable<number> {
    // Implement your file upload logic here
    // This is just a placeholder implementation
    return new Observable<number>(observer => {
      const formData = new FormData();
      formData.append('file', file);

      this.http.post('https://api.restful-api.dev/objects', formData, {
        reportProgress: true,
        observe: 'events'
      }).subscribe(event => {
        // Handle the upload progress and completion here
        // This is just a simple example
        observer.next(50); // Simulating 50% progress
        observer.next(100); // Simulating completion
        observer.complete();
      });
    });
  }
}
