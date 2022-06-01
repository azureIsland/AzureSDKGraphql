import { Field, ObjectType } from '@nestjs/graphql';
import { SubNet } from './subnet';

@ObjectType()
export class VNet {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  type: string;

  @Field()
  location: string;

  @Field(() => [String])
  tags: string[];

  @Field()
  etag: string;

  @Field(() => [SubNet])
  subnets: SubNet[];

  @Field(() => [String])
  virtualNetworkPeerings: string[];

  @Field()
  resourceGuid: string;

  @Field()
  provisioningState: string;

  @Field()
  enableDdosProtection: boolean;

  @Field()
  enableVmProtection: boolean;
}
