import { VirtualMachine } from '@azure/arm-compute';
import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class VirtualMachines implements VirtualMachine {
  @Field()
  id: string;

  @Field()
  location: string;

  @Field()
  name: string;

  @Field()
  evictionPolicy: string;

  @Field()
  extensionsTimeBudget: string;

  @Field()
  licenseType: string;

  @Field()
  platformFaultDomain: number;

  @Field()
  priority: string;

  @Field()
  provisioningState: string;

  @Field(() => String)
  tags: { [propertyName: string]: string };

  @Field()
  timeCreated: Date;

  @Field()
  vmId: string;

  @Field()
  type: string;
}
