import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Azure {
  @Field()
  Id: string;
}
