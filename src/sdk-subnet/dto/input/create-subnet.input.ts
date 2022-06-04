import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateSubnetInput {
  @Field()
  @IsNotEmpty()
  id: number;

  @Field()
  @IsNotEmpty()
  virtualNetworkName: string;

  @Field()
  @IsNotEmpty()
  subnetName: string;

  @Field()
  @IsNotEmpty()
  addressPrefix: string;
}
