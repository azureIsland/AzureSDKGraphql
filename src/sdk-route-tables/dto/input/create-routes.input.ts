import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateRouteInput {
  @Field()
  name: string;

  @Field()
  addressPrefix: string;

  @Field()
  nextHopType:
    | 'VirtualNetworkGateway'
    | 'VnetLocal'
    | 'Internet'
    | 'VirtualAppliance'
    | 'None';
}
