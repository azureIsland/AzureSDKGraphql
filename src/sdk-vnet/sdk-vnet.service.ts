import { NetworkManagementClient, VirtualNetwork } from '@azure/arm-network';
import { ClientSecretCredential } from '@azure/identity';
import { Injectable } from '@nestjs/common';
import { SdkSecretService } from 'src/sdk-secret/sdk-secret.service';
import { GetVNetFindOneArgs } from './dto/args/get-vnetFindOne.args';
import { GetVNetAllArgs } from './dto/args/get-vnetListsAll.args';
import { CreateVNetInput } from './dto/input/create-vnet.intput';

@Injectable()
export class SdkVNetService {
  constructor(private readonly sdkSecretService: SdkSecretService) {}

  // VNet全取得
  async getVNetsAll(args: GetVNetAllArgs) {
    const secret = await this.sdkSecretService.findFirst({
      where: { id: { equals: args.id } },
    });

    const networkClient = new NetworkManagementClient(
      new ClientSecretCredential(
        secret.tenantId,
        secret.clientId,
        secret.clientSecret,
      ),
      secret.subscriptionId,
    );
    const virtualNetworksLists = networkClient.virtualNetworks.listAll();
    const networks: VirtualNetwork[] = [];
    for await (const item of virtualNetworksLists) {
      networks.push(item);
    }
    return networks;
  }

  // VNet単体取得
  async getVNetsFindOne(args: GetVNetFindOneArgs) {
    const secret = await this.sdkSecretService.findFirst({
      where: { id: { equals: args.id } },
    });

    const networkClient = new NetworkManagementClient(
      new ClientSecretCredential(
        secret.tenantId,
        secret.clientId,
        secret.clientSecret,
      ),
      secret.subscriptionId,
    );

    const vnet = await networkClient.virtualNetworks.get(
      secret.resourceGroup,
      args.virtualNetworkName,
    );
    return vnet;
  }

  // VNet作成
  async createVNet(args: CreateVNetInput) {
    const secret = await this.sdkSecretService.findFirst({
      where: { id: { equals: args.id } },
    });

    const networkClient = new NetworkManagementClient(
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
        addressPrefixes: [args.addresses],
      },
    };

    const virtualNetworks_create_info =
      await networkClient.virtualNetworks.beginCreateOrUpdateAndWait(
        secret.resourceGroup,
        args.networkName,
        parameter,
      );
    return virtualNetworks_create_info;
  }
}
