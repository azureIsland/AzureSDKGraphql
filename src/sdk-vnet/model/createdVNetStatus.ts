import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CreatedVNetStatus {
  @Field()
  enableDdosProtection: boolean;

  @Field()
  enableVmProtection: boolean;

  @Field()
  status: string;
}
