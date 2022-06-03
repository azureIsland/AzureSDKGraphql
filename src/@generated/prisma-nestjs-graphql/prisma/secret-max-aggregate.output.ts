import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SecretMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    tenantId?: string;

    @Field(() => String, {nullable:true})
    clientId?: string;

    @Field(() => String, {nullable:true})
    clientSecret?: string;

    @Field(() => String, {nullable:true})
    subscriptionId?: string;
}
