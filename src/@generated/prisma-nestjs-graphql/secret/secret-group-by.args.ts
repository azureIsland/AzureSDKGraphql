import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { secretWhereInput } from './secret-where.input';
import { Type } from 'class-transformer';
import { secretOrderByWithAggregationInput } from './secret-order-by-with-aggregation.input';
import { SecretScalarFieldEnum } from '../prisma/secret-scalar-field.enum';
import { secretScalarWhereWithAggregatesInput } from './secret-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class secretGroupByArgs {

    @Field(() => secretWhereInput, {nullable:true})
    @Type(() => secretWhereInput)
    where?: secretWhereInput;

    @Field(() => [secretOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<secretOrderByWithAggregationInput>;

    @Field(() => [SecretScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SecretScalarFieldEnum>;

    @Field(() => secretScalarWhereWithAggregatesInput, {nullable:true})
    having?: secretScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
