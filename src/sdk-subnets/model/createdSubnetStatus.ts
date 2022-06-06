import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreatedSubnetStatus {
  @Field()
  privateEndpointNetworkPolicies: string;

  @Field()
  privateLinkServiceNetworkPolicies: string;

  @Field()
  status: string;
}
