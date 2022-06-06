import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetNetworkSecurityGroupAllArgs {
  @Field()
  @IsNotEmpty()
  id: number;
}
