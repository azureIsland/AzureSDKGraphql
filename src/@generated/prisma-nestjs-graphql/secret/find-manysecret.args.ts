import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { secretWhereInput } from './secret-where.input';
import { Type } from 'class-transformer';
import { secretOrderByWithRelationInput } from './secret-order-by-with-relation.input';
import { secretWhereUniqueInput } from './secret-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SecretScalarFieldEnum } from '../prisma/secret-scalar-field.enum';

@ArgsType()
export class FindManysecretArgs {

    @Field(() => secretWhereInput, {nullable:true})
    @Type(() => secretWhereInput)
    where?: secretWhereInput;

    @Field(() => [secretOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<secretOrderByWithRelationInput>;

    @Field(() => secretWhereUniqueInput, {nullable:true})
    cursor?: secretWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SecretScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SecretScalarFieldEnum>;
}
