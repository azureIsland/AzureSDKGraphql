import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { secretWhereUniqueInput } from './secret-where-unique.input';
import { Type } from 'class-transformer';
import { secretCreateInput } from './secret-create.input';
import { secretUpdateInput } from './secret-update.input';

@ArgsType()
export class UpsertOnesecretArgs {

    @Field(() => secretWhereUniqueInput, {nullable:false})
    @Type(() => secretWhereUniqueInput)
    where!: secretWhereUniqueInput;

    @Field(() => secretCreateInput, {nullable:false})
    @Type(() => secretCreateInput)
    create!: secretCreateInput;

    @Field(() => secretUpdateInput, {nullable:false})
    @Type(() => secretUpdateInput)
    update!: secretUpdateInput;
}
