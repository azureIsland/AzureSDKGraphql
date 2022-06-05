import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class secretScalarWhereWithAggregatesInput {

    @Field(() => [secretScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<secretScalarWhereWithAggregatesInput>;

    @Field(() => [secretScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<secretScalarWhereWithAggregatesInput>;

    @Field(() => [secretScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<secretScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    tenantId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    clientId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    clientSecret?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    subscriptionId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    resourceGroup?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    location?: StringWithAggregatesFilter;
}
