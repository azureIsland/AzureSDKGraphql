import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { secretUpdateInput } from './secret-update.input';
import { Type } from 'class-transformer';
import { secretWhereUniqueInput } from './secret-where-unique.input';

@ArgsType()
export class UpdateOnesecretArgs {

    @Field(() => secretUpdateInput, {nullable:false})
    @Type(() => secretUpdateInput)
    data!: secretUpdateInput;

    @Field(() => secretWhereUniqueInput, {nullable:false})
    @Type(() => secretWhereUniqueInput)
    where!: secretWhereUniqueInput;
}
