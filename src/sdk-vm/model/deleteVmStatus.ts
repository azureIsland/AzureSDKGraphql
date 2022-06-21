import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DeleteVmStatus {
  @Field()
  stopped: boolean;
}
