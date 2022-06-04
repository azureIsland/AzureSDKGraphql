import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateOnesecretArgs } from 'src/@generated/prisma-nestjs-graphql/secret/create-onesecret.args';
import { FindFirstsecretArgs } from 'src/@generated/prisma-nestjs-graphql/secret/find-firstsecret.args';
import { UpdateOnesecretArgs } from 'src/@generated/prisma-nestjs-graphql/secret/update-onesecret.args';
import { DeleteOnesecretArgs } from 'src/@generated/prisma-nestjs-graphql/secret/delete-onesecret.args';
import { FindManysecretArgs } from 'src/@generated/prisma-nestjs-graphql/secret/find-manysecret.args';

@Injectable()
export class SdkSecretService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(args: FindManysecretArgs) {
    return this.prisma.secret.findMany(args);
  }

  async findFirst(args: FindFirstsecretArgs) {
    return this.prisma.secret.findFirst(args);
  }

  async createSecret(args: CreateOnesecretArgs) {
    return this.prisma.secret.create(args);
  }

  async updateSecret(args: UpdateOnesecretArgs) {
    return this.prisma.secret.update(args);
  }

  async deleteSecret(args: DeleteOnesecretArgs) {
    return this.prisma.secret.delete(args);
  }
}
