import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class secretUncheckedCreateInput {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: false })
  tenantId!: string;

  @Field(() => String, { nullable: false })
  clientId!: string;

  @Field(() => String, { nullable: false })
  clientSecret!: string;

  @Field(() => String, { nullable: false })
  subscriptionId!: string;

  @Field(() => String, { nullable: false })
  resourceGroup!: string;

  @Field(() => String, { nullable: false })
  location!: string;
}
