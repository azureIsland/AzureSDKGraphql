import { NetworkManagementClient } from '@azure/arm-network';
import { ClientSecretCredential } from '@azure/identity';
import { Injectable } from '@nestjs/common';
import { CreateSubnetInput } from './dto/input/create-subnet.input';

@Injectable()
export class SdkSubnetService {
  async createSubnet(createSubNetInput: CreateSubnetInput) {
    const networkClient = new NetworkManagementClient(
      new ClientSecretCredential(
        createSubNetInput.tenantId,
        createSubNetInput.clientId,
        createSubNetInput.clientSecret,
      ),
      createSubNetInput.subscriptionId,
    );

    const subNet = await networkClient.subnets.beginCreateOrUpdateAndWait(
      createSubNetInput.resourceGroup,
      createSubNetInput.virtualNetworkName,
      createSubNetInput.subnetName,
      {
        addressPrefix: createSubNetInput.addressPrefix,
      },
    );
    console.log(subNet);
  }
}
