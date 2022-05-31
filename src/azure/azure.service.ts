import { Injectable } from '@nestjs/common';

@Injectable()
export class AzureService {
  private users = [];

  public getUser() {
    return this.users;
  }
}
