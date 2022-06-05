import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SecretCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    tenantId!: number;

    @Field(() => Int, {nullable:false})
    clientId!: number;

    @Field(() => Int, {nullable:false})
    clientSecret!: number;

    @Field(() => Int, {nullable:false})
    subscriptionId!: number;

    @Field(() => Int, {nullable:false})
    resourceGroup!: number;

    @Field(() => Int, {nullable:false})
    location!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
