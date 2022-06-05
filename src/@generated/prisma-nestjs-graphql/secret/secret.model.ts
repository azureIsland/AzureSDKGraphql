import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class secret {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    tenantId!: string;

    @Field(() => String, {nullable:false})
    clientId!: string;

    @Field(() => String, {nullable:false})
    clientSecret!: string;

    @Field(() => String, {nullable:false})
    subscriptionId!: string;

    @Field(() => String, {nullable:false})
    resourceGroup!: string;

    @Field(() => String, {nullable:false})
    location!: string;
}
