import { Subnet, VirtualNetwork } from '@azure/arm-network';
import { Field, ObjectType } from '@nestjs/graphql';
import { SubNets } from 'src/sdk-subnets/model/subnets';
import { AddressPrefixes } from './addressPrefixes';

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

  @Field()
  addressSpace: AddressPrefixes;

  @Field(() => [SubNets])
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
