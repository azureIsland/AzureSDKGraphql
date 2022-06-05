import { Subnet } from '@azure/arm-network';
import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class SubNets implements Subnet {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  etag: string;

  @Field()
  type: string;

  @Field()
  addressPrefix: string;

  @Field()
  provisioningState: string;

  @Field()
  privateEndpointNetworkPolicies: string;

  @Field()
  privateLinkServiceNetworkPolicies: string;
}
