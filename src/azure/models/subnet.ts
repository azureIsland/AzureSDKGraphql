import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class SubNet {
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

  @Field(() => [String])
  delegations: string[];

  @Field()
  provisioningState: string;

  @Field()
  privateEndpointNetworkPolicies: string;

  @Field()
  privateLinkServiceNetworkPolicies: string;
}
