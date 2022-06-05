import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { secretUpdateManyMutationInput } from './secret-update-many-mutation.input';
import { Type } from 'class-transformer';
import { secretWhereInput } from './secret-where.input';

@ArgsType()
export class UpdateManysecretArgs {

    @Field(() => secretUpdateManyMutationInput, {nullable:false})
    @Type(() => secretUpdateManyMutationInput)
    data!: secretUpdateManyMutationInput;

    @Field(() => secretWhereInput, {nullable:true})
    @Type(() => secretWhereInput)
    where?: secretWhereInput;
}
