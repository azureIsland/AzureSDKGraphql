import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateCollectInput } from './dto/input/create-collect.input';
import { CreatedCollectStatus } from './model/crateCollectStatus';
import { SdkCollectService } from './sdk-collect.service';

@Resolver()
export class SdkCollectResolver {
  constructor(private readonly sdkCollectService: SdkCollectService) {}

  @Mutation(() => CreatedCollectStatus, { name: 'createAll' })
  async crateCollect(@Args('crateCollect') args: CreateCollectInput) {
    return this.sdkCollectService.createSdkCollect(args);
  }
}
