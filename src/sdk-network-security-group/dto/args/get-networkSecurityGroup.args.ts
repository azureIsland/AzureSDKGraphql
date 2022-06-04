import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetNetworkSecurityGroupArgs {
  @Field()
  @IsNotEmpty()
  id: number;
}
