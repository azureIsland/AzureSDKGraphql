import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreatedNetInfInput {
  @Field()
  @IsNotEmpty()
  id: number;

  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsNotEmpty()
  vnetName: string;

  @Field()
  @IsNotEmpty()
  subnetName: string;

  @Field()
  @IsNotEmpty()
  interfaceName: string;
}
