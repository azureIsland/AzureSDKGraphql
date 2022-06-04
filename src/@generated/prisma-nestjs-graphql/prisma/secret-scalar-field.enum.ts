import { registerEnumType } from '@nestjs/graphql';

export enum SecretScalarFieldEnum {
  id = 'id',
  tenantId = 'tenantId',
  clientId = 'clientId',
  clientSecret = 'clientSecret',
  subscriptionId = 'subscriptionId',
}

registerEnumType(SecretScalarFieldEnum, {
  name: 'SecretScalarFieldEnum',
  description: undefined,
});
