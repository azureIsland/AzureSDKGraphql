import { Field, ObjectType } from '@nestjs/graphql';
import { Route } from './route';

@ObjectType()
export class RouteTable {
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

  @Field(() => [Route])
  routes: Route[];

  @Field()
  disableBgpRoutePropagation: boolean;

  @Field()
  provisioningState: string;

  @Field()
  resourceGuid: string;
}
