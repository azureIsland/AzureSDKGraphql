import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateCollectInput {
  @Field()
  @IsNotEmpty()
  id: number;

  @Field()
  @IsNotEmpty()
  networkName: string;

  @Field()
  @IsNotEmpty()
  addresses: string;

  @Field()
  @IsNotEmpty()
  subnetName: string;

  @Field()
  @IsNotEmpty()
  computerName: string;

  @Field()
  @IsNotEmpty()
  addressPrefix: string;

  @Field()
  @IsNotEmpty()
  name: string;

  @Field()
  @IsNotEmpty()
  netInfName: string;

  @Field()
  @IsNotEmpty()
  adminUserName: string;

  @Field()
  @IsNotEmpty()
  adminPassword: string;

  @Field()
  @IsNotEmpty()
  osDiskName: string;
}
