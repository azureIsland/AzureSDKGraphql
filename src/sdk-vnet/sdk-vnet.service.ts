import { NetworkManagementClient, VirtualNetwork } from '@azure/arm-network';
import { ClientSecretCredential } from '@azure/identity';
import { Injectable } from '@nestjs/common';
import { SdkSecretService } from 'src/sdk-secret/sdk-secret.service';
import { GetVNetListsArgs } from './dto/args/get-vnetLists.args';
import { CreateVNetInput } from './dto/input/create-vnet.intput';

@Injectable()
export class SdkVNetService {
  constructor(private readonly sdkSecretService: SdkSecretService) {}

  // VNet全取得
  async listsVNet(getVNetListsArgs: GetVNetListsArgs) {
    const secret = await this.sdkSecretService.findFirst({
      where: { id: { equals: getVNetListsArgs.id } },
    });

    const network_client = new NetworkManagementClient(
      new ClientSecretCredential(
        secret.tenantId,
        secret.clientId,
        secret.clientSecret,
      ),
      secret.subscriptionId,
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
    const secret = await this.sdkSecretService.findFirst({
      where: { id: { equals: createVNet.id } },
    });

    const network_client = new NetworkManagementClient(
      new ClientSecretCredential(
        secret.tenantId,
        secret.clientId,
        secret.clientSecret,
      ),
      secret.subscriptionId,
    );
    const parameter: VirtualNetwork = {
      location: secret.location,
      addressSpace: {
        addressPrefixes: [createVNet.addresses],
      },
    };

    const virtualNetworks_create_info =
      await network_client.virtualNetworks.beginCreateOrUpdateAndWait(
        secret.resourceGroup,
        createVNet.networkName,
        parameter,
      );
    console.log(virtualNetworks_create_info);
    return virtualNetworks_create_info;
  }
}
