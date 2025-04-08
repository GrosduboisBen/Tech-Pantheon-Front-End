import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CdnService {
  private apiUrl = 'http://localhost:3000'; // ou l'URL de ton CDN Express

  constructor(private http: HttpClient) {}

  register(userId: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { userId, password });
  }

  login(userId: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { userId, password });
  }

  uploadFile(
    userId: string,
    folderPath: string,
    file: File,
    token: string
  ): Observable<any> {
    const formData = new FormData();
    formData.append('file', file);

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.post(
      `${this.apiUrl}/add/${userId}/${folderPath}`,
      formData,
      { headers }
    );
  }

  listFiles(
    userId: string,
    folderPath: string,
    token: string
  ): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get(`${this.apiUrl}/list/${userId}/${folderPath}`, {
      headers,
    });
  }

  downloadFile(
    userId: string,
    filePath: string,
    token: string
  ): Observable<Blob> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });

    return this.http.get(`${this.apiUrl}/download/${userId}/${filePath}`, {
      headers,
      responseType: 'blob',
    });
  }
}
