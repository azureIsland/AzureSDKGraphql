import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreatedVmStatus {
  @Field()
  stopped: boolean;
}
