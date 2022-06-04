import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateOnesecretArgs } from 'src/@generated/prisma-nestjs-graphql/secret/create-onesecret.args';
import { DeleteOnesecretArgs } from 'src/@generated/prisma-nestjs-graphql/secret/delete-onesecret.args';
import { FindFirstsecretArgs } from 'src/@generated/prisma-nestjs-graphql/secret/find-firstsecret.args';
import { FindManysecretArgs } from 'src/@generated/prisma-nestjs-graphql/secret/find-manysecret.args';
import { secret } from 'src/@generated/prisma-nestjs-graphql/secret/secret.model';
import { UpdateOnesecretArgs } from 'src/@generated/prisma-nestjs-graphql/secret/update-onesecret.args';
import { SdkSecretService } from './sdk-secret.service';

@Resolver()
export class SdkSecretResolver {
  constructor(private readonly sdkSecretService: SdkSecretService) {}

  @Query(() => [secret], { name: 'findAllSecret' })
  async findAll(@Args() args: FindManysecretArgs) {
    return this.sdkSecretService.findAll(args);
  }

  @Query(() => secret, { name: 'findOneSecret' })
  async findOne(@Args() args: FindFirstsecretArgs) {
    return this.sdkSecretService.findFirst(args);
  }

  @Mutation(() => secret, { name: 'createSecret' })
  async createSecret(@Args() args: CreateOnesecretArgs) {
    return this.sdkSecretService.createSecret(args);
  }

  @Mutation(() => secret, { name: 'updateSecret' })
  async updateSecret(@Args() args: UpdateOnesecretArgs) {
    return this.sdkSecretService.updateSecret(args);
  }

  @Mutation(() => secret, { name: 'deleteSecret' })
  async deleteSecret(@Args() args: DeleteOnesecretArgs) {
    return this.sdkSecretService.deleteSecret(args);
  }
}
