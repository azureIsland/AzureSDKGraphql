import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Test {
  @Field()
  Id: string;
}
