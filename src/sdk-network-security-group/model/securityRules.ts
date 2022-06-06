import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SecurityRules {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  etag: string;

  @Field()
  type: string;

  @Field()
  description?: string;

  @Field()
  protocol: string;

  @Field()
  sourcePortRange: string;

  @Field()
  destinationPortRange: string;

  @Field()
  sourceAddressPrefix: string;

  @Field(() => [String])
  sourceAddressPrefixes: string[];

  @Field()
  destinationAddressPrefix: string;

  @Field(() => [String])
  destinationAddressPrefixes: string[];

  @Field(() => [String])
  sourcePortRanges: string[];

  @Field(() => [String])
  destinationPortRanges: string[];

  @Field()
  access: string;

  @Field()
  priority: number;

  @Field()
  direction: string;

  @Field()
  provisioningState: string;
}
