import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OwnerDto } from './../dto/owner.dto';

@Injectable()
export class ViewOwnerService {

  constructor(private httpClient: HttpClient) {

  }

  getOwnerById(ownerId) {
    return this.httpClient.get<OwnerDto>('api/owner/' + ownerId);
  }

}
