import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreatedStatus {
  @Field()
  status: string;
}
