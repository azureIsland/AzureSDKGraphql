import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';
import { CreateRouteInput } from './create-routes.input';

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

  @Field(() => [CreateRouteInput])
  routes: CreateRouteInput[];
}
