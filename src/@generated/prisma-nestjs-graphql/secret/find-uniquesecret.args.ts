import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { secretWhereUniqueInput } from './secret-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquesecretArgs {

    @Field(() => secretWhereUniqueInput, {nullable:false})
    @Type(() => secretWhereUniqueInput)
    where!: secretWhereUniqueInput;
}
