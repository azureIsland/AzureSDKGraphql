import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class GetRouteTablesListsAllArgs {
  @Field()
  @IsNotEmpty()
  id: number;
}
