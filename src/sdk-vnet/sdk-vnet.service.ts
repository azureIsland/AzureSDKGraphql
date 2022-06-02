import { NetworkManagementClient, VirtualNetwork } from '@azure/arm-network';
import { ClientSecretCredential } from '@azure/identity';
import { Injectable } from '@nestjs/common';
import { GetVNetListsArgs } from './dto/args/get-vnetLists.args';
import { CreateVNetInput } from './dto/input/create-vnet.intput';

@Injectable()
export class SdkVNetService {
  // VNet全取得
  async listsVNet(getVNetListsArgs: GetVNetListsArgs) {
    const network_client = new NetworkManagementClient(
      new ClientSecretCredential(
        getVNetListsArgs.tenantId,
        getVNetListsArgs.clientId,
        getVNetListsArgs.clientSecret,
      ),
      getVNetListsArgs.subscriptionId,
    );
    const virtualNetworksLists = network_client.virtualNetworks.listAll();
    const networks: VirtualNetwork[] = [];
    for await (const item of virtualNetworksLists) {
      networks.push(item);
    }
    console.log(networks);
    return networks;
  }

  // VNet作成
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
        addressPrefixes: [createVNet.addresses],
      },
    };

    const virtualNetworks_create_info =
      await network_client.virtualNetworks.beginCreateOrUpdateAndWait(
        createVNet.resourceGroup,
        createVNet.networkName,
        parameter,
      );
    console.log(virtualNetworks_create_info);
    return virtualNetworks_create_info;
  }
}
