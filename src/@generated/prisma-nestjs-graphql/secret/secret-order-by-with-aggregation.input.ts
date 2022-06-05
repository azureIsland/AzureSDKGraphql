import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { secretCountOrderByAggregateInput } from './secret-count-order-by-aggregate.input';
import { secretAvgOrderByAggregateInput } from './secret-avg-order-by-aggregate.input';
import { secretMaxOrderByAggregateInput } from './secret-max-order-by-aggregate.input';
import { secretMinOrderByAggregateInput } from './secret-min-order-by-aggregate.input';
import { secretSumOrderByAggregateInput } from './secret-sum-order-by-aggregate.input';

@InputType()
export class secretOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    tenantId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    clientId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    clientSecret?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    subscriptionId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    resourceGroup?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    location?: keyof typeof SortOrder;

    @Field(() => secretCountOrderByAggregateInput, {nullable:true})
    _count?: secretCountOrderByAggregateInput;

    @Field(() => secretAvgOrderByAggregateInput, {nullable:true})
    _avg?: secretAvgOrderByAggregateInput;

    @Field(() => secretMaxOrderByAggregateInput, {nullable:true})
    _max?: secretMaxOrderByAggregateInput;

    @Field(() => secretMinOrderByAggregateInput, {nullable:true})
    _min?: secretMinOrderByAggregateInput;

    @Field(() => secretSumOrderByAggregateInput, {nullable:true})
    _sum?: secretSumOrderByAggregateInput;
}
