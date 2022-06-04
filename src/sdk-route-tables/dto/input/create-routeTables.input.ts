import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateRouteTablesInput {
  @Field()
  @IsNotEmpty()
  id: number;

  @Field()
  @IsNotEmpty()
  routeTableName: string;

  @Field()
  @IsNotEmpty()
  IsConnectDefaultGateway: boolean;
}
