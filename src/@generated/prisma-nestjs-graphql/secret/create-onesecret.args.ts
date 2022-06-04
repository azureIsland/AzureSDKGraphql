import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { secretCreateInput } from './secret-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOnesecretArgs {

    @Field(() => secretCreateInput, {nullable:false})
    @Type(() => secretCreateInput)
    @ValidateNested()
    @Type(() => secretCreateInput)
    data!: secretCreateInput;
}
