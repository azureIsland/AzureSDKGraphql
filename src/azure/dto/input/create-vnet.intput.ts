import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateVNetInput {
  @Field()
  @IsNotEmpty()
  clientId: string;

  @Field()
  @IsNotEmpty()
  tenantId: string;

  @Field()
  @IsNotEmpty()
  clientSecret: string;

  @Field()
  @IsNotEmpty()
  subscriptionId: string;

  @Field()
  @IsNotEmpty()
  resourceGroup: string;

  @Field()
  @IsNotEmpty()
  location: string;

  @Field()
  @IsNotEmpty()
  networkName: string;

  // @Field()
  // @IsNotEmpty()
  // addresses: string[];
}
