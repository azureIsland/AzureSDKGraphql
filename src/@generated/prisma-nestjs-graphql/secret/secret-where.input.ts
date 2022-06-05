import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class secretWhereInput {

    @Field(() => [secretWhereInput], {nullable:true})
    AND?: Array<secretWhereInput>;

    @Field(() => [secretWhereInput], {nullable:true})
    OR?: Array<secretWhereInput>;

    @Field(() => [secretWhereInput], {nullable:true})
    NOT?: Array<secretWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    tenantId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    clientId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    clientSecret?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    subscriptionId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    resourceGroup?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    location?: StringFilter;
}
