import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AddressPrefixes {
  @Field(() => [String])
  addressPrefixes: [string];
}
