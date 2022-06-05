import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { secretWhereInput } from './secret-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManysecretArgs {

    @Field(() => secretWhereInput, {nullable:true})
    @Type(() => secretWhereInput)
    where?: secretWhereInput;
}
