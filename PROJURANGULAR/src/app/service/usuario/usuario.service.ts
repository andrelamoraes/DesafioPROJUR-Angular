import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import GenericService from '../generic.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService extends GenericService<any> {

  constructor(public httpClient: HttpClient) {
    super(httpClient, environment.apiUrl + 'Usuario');
  }
}
