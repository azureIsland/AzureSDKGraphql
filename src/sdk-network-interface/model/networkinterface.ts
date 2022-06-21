import { NetworkInterface } from '@azure/arm-network';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class NetworkInterfaces implements NetworkInterface {
  @Field()
  id: string;

  @Field()
  name: string;

  @Field()
  etag: string;

  @Field()
  type: string;

  @Field()
  primary: boolean;

  @Field()
  enableAcceleratedNetworking: boolean;

  @Field()
  hostedWorkloads: string[];
}
