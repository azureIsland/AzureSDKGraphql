import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreatedRouteTable {
  @Field()
  status: string;
}
