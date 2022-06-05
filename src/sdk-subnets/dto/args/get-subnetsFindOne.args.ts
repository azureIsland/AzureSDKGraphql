import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetSubnetFindOneArgs {
  @Field()
  @IsNotEmpty()
  id: number;

  @Field()
  @IsNotEmpty()
  virtualNetworkName: string;

  @Field()
  @IsNotEmpty()
  subnetName: string;
}
