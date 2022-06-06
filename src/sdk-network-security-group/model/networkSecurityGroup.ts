import { Field, ObjectType } from '@nestjs/graphql';
import { NetworkInterface } from './networkInterface';
import { SecurityRules } from './securityRules';

@ObjectType()
export class NetworkSecurityGroup {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  type: string;

  @Field()
  location: string;

  @Field()
  etag: string;

  @Field(() => [SecurityRules])
  securityRules: SecurityRules[];

  @Field(() => [SecurityRules])
  defaultSecurityRules: SecurityRules[];

  @Field(() => [NetworkInterface])
  networkInterfaces: NetworkInterface[];

  @Field()
  resourceGuid: string;

  @Field()
  provisioningState: string;
}
