import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class NetworkInterface {
  @Field()
  id: string;
}
