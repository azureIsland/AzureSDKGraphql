import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class secretCreateInput {

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
