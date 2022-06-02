import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetVNetListsArgs {
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
}
