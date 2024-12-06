import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']  // Changed styleUrl to styleUrls
})
export class FileUploadComponent {
  selectedFile: File | null = null;
  uploadProgress = 0;
  uploadComplete = false;

  constructor(private fileUploadService: FileUploadService) { }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;  // Corrected type from HttpInputElement to HTMLInputElement
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
      this.uploadProgress = 0;
      this.uploadComplete = false;
    }
  }

  uploadFile() {
    if (this.selectedFile) {
      this.fileUploadService.upload(this.selectedFile).subscribe(
        (progress: number) => {
          this.uploadProgress = progress;
          if (progress === 100) {
            this.uploadComplete = true;
          }
        },
        error => {  // Fixed indentation of error handling
          console.error('Upload failed: ', error);
        }
      );
    }
  }
}
