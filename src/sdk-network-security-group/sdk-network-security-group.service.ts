import { NetworkManagementClient } from '@azure/arm-network';
import { ClientSecretCredential } from '@azure/identity';
import { Injectable } from '@nestjs/common';
import { SdkSecretService } from 'src/sdk-secret/sdk-secret.service';
import { GetNetworkSecurityGroupArgs } from './dto/args/get-networkSecurityGroup.args';
import { CreateNetworkSecurityGroupInput } from './dto/input/create-networkSecurityGroup.input';

@Injectable()
export class SdkNetworkSecurityGroupService {
  constructor(private readonly sdkSecretService: SdkSecretService) {}

  async listsNetworkSecurityGroup(
    getNetworkSecurityGroupArgs: GetNetworkSecurityGroupArgs,
  ) {
    const secret = await this.sdkSecretService.findFirst({
      where: {
        id: {
          equals: getNetworkSecurityGroupArgs.id,
        },
      },
    });

    const network_client = new NetworkManagementClient(
      new ClientSecretCredential(
        secret.tenantId,
        secret.clientId,
        secret.clientSecret,
      ),
      secret.subscriptionId,
    );

    const securityGroups = network_client.networkSecurityGroups.listAll();
    console.log(securityGroups);
    for await (const item of securityGroups) {
      console.log(item);
    }
  }

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

    const network_client = new NetworkManagementClient(
      new ClientSecretCredential(
        secret.tenantId,
        secret.clientId,
        secret.clientSecret,
      ),
      secret.subscriptionId,
    );

    const newSecurityGroup =
      await network_client.networkSecurityGroups.beginCreateOrUpdateAndWait(
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
    console.log(newSecurityGroup);
  }
}
