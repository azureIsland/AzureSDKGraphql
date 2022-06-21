import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateVMInput {
  @Field()
  @IsNotEmpty()
  id: number;

  @Field()
  @IsNotEmpty()
  computerName: string;

  @Field()
  @IsNotEmpty()
  adminUsername: string;

  @Field()
  @IsNotEmpty()
  adminPassword: string;

  @Field()
  @IsNotEmpty()
  osDiskName: string;

  @Field()
  @IsNotEmpty()
  interfaceName: string;
}
