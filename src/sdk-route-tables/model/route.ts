import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Route {
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
  nextHopType: string;

  @Field()
  provisioningState: string;

  @Field()
  hasBgpOverride: boolean;
}
