import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SecretCountAggregate } from './secret-count-aggregate.output';
import { SecretAvgAggregate } from './secret-avg-aggregate.output';
import { SecretSumAggregate } from './secret-sum-aggregate.output';
import { SecretMinAggregate } from './secret-min-aggregate.output';
import { SecretMaxAggregate } from './secret-max-aggregate.output';

@ObjectType()
export class AggregateSecret {

    @Field(() => SecretCountAggregate, {nullable:true})
    _count?: SecretCountAggregate;

    @Field(() => SecretAvgAggregate, {nullable:true})
    _avg?: SecretAvgAggregate;

    @Field(() => SecretSumAggregate, {nullable:true})
    _sum?: SecretSumAggregate;

    @Field(() => SecretMinAggregate, {nullable:true})
    _min?: SecretMinAggregate;

    @Field(() => SecretMaxAggregate, {nullable:true})
    _max?: SecretMaxAggregate;
}
