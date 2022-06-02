import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SDKStatus {
  @Field()
  status: string;
}
