import {
  NetworkManagementClient,
  NetworkSecurityGroup,
} from '@azure/arm-network';
import { ClientSecretCredential } from '@azure/identity';
import { Injectable } from '@nestjs/common';
import { SdkSecretService } from 'src/sdk-secret/sdk-secret.service';
import { GetNetworkSecurityGroupAllArgs } from './dto/args/get-networkSecurityGroupAll.args';
import { GetNetworkSecurityGroupFindOneArgs } from './dto/args/get-networkSecurityGroupFindOne.args';
import { CreateNetworkSecurityGroupInput } from './dto/input/create-networkSecurityGroup.input';

@Injectable()
export class SdkNetworkSecurityGroupService {
  constructor(private readonly sdkSecretService: SdkSecretService) {}

  // NSGの全取得
  async getNetworkSecurityGroupAll(args: GetNetworkSecurityGroupAllArgs) {
    const secret = await this.sdkSecretService.findFirst({
      where: {
        id: {
          equals: args.id,
        },
      },
    });

    const networkClient = new NetworkManagementClient(
      new ClientSecretCredential(
        secret.tenantId,
        secret.clientId,
        secret.clientSecret,
      ),
      secret.subscriptionId,
    );

    const securityGroupsLists = networkClient.networkSecurityGroups.listAll();
    const securityGroups: NetworkSecurityGroup[] = [];
    for await (const item of securityGroupsLists) {
      securityGroups.push(item);
    }
    return securityGroups;
  }

  // NSGの単体取得
  async getNetworkSecurityGroupFindOne(
    args: GetNetworkSecurityGroupFindOneArgs,
  ) {
    const secret = await this.sdkSecretService.findFirst({
      where: {
        id: {
          equals: args.id,
        },
      },
    });

    const networkClient = new NetworkManagementClient(
      new ClientSecretCredential(
        secret.tenantId,
        secret.clientId,
        secret.clientSecret,
      ),
      secret.subscriptionId,
    );

    const networkSecurityGroup = await networkClient.networkSecurityGroups.get(
      secret.resourceGroup,
      args.networkSecurityGroupName,
    );

    return networkSecurityGroup;
  }

  // NSGの作成
  async createNetworkSecurityGroup(
    createNSGInput: CreateNetworkSecurityGroupInput,
  ) {
    const secret = await this.sdkSecretService.findFirst({
      where: {
        id: {
          equals: createNSGInput.id,
        },
      },
    });

    const networkClient = new NetworkManagementClient(
      new ClientSecretCredential(
        secret.tenantId,
        secret.clientId,
        secret.clientSecret,
      ),
      secret.subscriptionId,
    );

    const newSecurityGroup =
      await networkClient.networkSecurityGroups.beginCreateOrUpdateAndWait(
        secret.resourceGroup,
        createNSGInput.networkSecurityGroupName,
        {
          location: secret.location,
          securityRules: [
            {
              name: 'AllowVNetInBound',
              type: 'Microsoft.Network/networkSecurityGroups/defaultSecurityRules',
              protocol: '*',
              sourcePortRange: '*',
              destinationPortRange: '*',
              sourceAddressPrefix: 'VirtualNetwork',
              sourceAddressPrefixes: [],
              destinationAddressPrefix: 'VirtualNetwork',
              destinationAddressPrefixes: [],
              sourcePortRanges: [],
              destinationPortRanges: [],
              access: 'Deny',
              priority: 4096,
              direction: 'Inbound',
              provisioningState: 'Succeeded',
            },
            {
              name: 'AllowVNetOutBound',
              type: 'Microsoft.Network/networkSecurityGroups/defaultSecurityRules',
              protocol: '*',
              sourcePortRange: '*',
              destinationPortRange: '*',
              sourceAddressPrefix: 'VirtualNetwork',
              sourceAddressPrefixes: [],
              destinationAddressPrefix: 'VirtualNetwork',
              destinationAddressPrefixes: [],
              sourcePortRanges: [],
              destinationPortRanges: [],
              access: 'Deny',
              priority: 4096,
              direction: 'Outbound',
              provisioningState: 'Succeeded',
            },
          ],
        },
      );
    return newSecurityGroup;
  }
}
