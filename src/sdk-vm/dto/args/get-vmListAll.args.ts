import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetVMAllArgs {
  @Field()
  @IsNotEmpty()
  id: number;
}
