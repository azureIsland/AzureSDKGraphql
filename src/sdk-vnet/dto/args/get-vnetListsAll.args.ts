import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetVNetAllArgs {
  @Field()
  @IsNotEmpty()
  id: number;
}
