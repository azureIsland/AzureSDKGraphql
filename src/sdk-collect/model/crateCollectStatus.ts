import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreatedCollectStatus {
  @Field()
  stopped: boolean;
}
