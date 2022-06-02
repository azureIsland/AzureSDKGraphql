import { Subnet, VirtualNetwork } from '@azure/arm-network';
import { Field, ObjectType } from '@nestjs/graphql';
import { SubNet } from 'src/sdk-subnet/model/subnet';

@ObjectType()
export class VNet implements VirtualNetwork {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  type: string;

  @Field()
  location: string;

  @Field(() => String)
  tags: { [propertyName: string]: string };

  @Field()
  etag: string;

  @Field(() => [SubNet])
  subnets?: Subnet[];

  @Field()
  resourceGuid: string;

  @Field()
  provisioningState: string;

  @Field()
  enableDdosProtection: boolean;

  @Field()
  enableVmProtection: boolean;
}