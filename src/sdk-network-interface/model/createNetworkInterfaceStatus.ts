import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreateNetInfStatus {
  @Field()
  resourceGuid: string;

  @Field()
  type: string;

  @Field()
  name: string;
}
