import { Injectable } from '@nestjs/common';
import { NetworkManagementClient, VirtualNetwork } from '@azure/arm-network';
import { CreateVNetInput } from './dto/input/create-vnet.intput';
import { ClientSecretCredential } from '@azure/identity';

@Injectable()
export class AzureService {
  async createVNet(createVNet: CreateVNetInput) {
    const network_client = new NetworkManagementClient(
      new ClientSecretCredential(
        createVNet.tenantId,
        createVNet.clientId,
        createVNet.clientSecret,
      ),
      createVNet.subscriptionId,
    );
    const parameter: VirtualNetwork = {
      location: createVNet.location,
      addressSpace: {
        addressPrefixes: ['10.50.0.0/16'],
      },
    };

    const virtualNetworks_create_info =
      await network_client.virtualNetworks.beginCreateOrUpdateAndWait(
        createVNet.resourceGroup,
        createVNet.networkName,
        parameter,
      );
    console.log('========================');
    console.log(virtualNetworks_create_info);
    return virtualNetworks_create_info;
  }
}
