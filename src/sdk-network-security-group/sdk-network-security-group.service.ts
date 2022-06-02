import { NetworkManagementClient } from '@azure/arm-network';
import { ClientSecretCredential } from '@azure/identity';
import { Injectable } from '@nestjs/common';
import { GetNetworkSecurityGroupArgs } from './dto/args/get-networkSecurityGroup.args';
import { CreateNetworkSecurityGroupInput } from './dto/input/create-networkSecurityGroup.input';

@Injectable()
export class SdkNetworkSecurityGroupService {
  async listsNetworkSecurityGroup(
    getNetworkSecurityGroupArgs: GetNetworkSecurityGroupArgs,
  ) {
    const network_client = new NetworkManagementClient(
      new ClientSecretCredential(
        getNetworkSecurityGroupArgs.tenantId,
        getNetworkSecurityGroupArgs.clientId,
        getNetworkSecurityGroupArgs.clientSecret,
      ),
      getNetworkSecurityGroupArgs.subscriptionId,
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
    const network_client = new NetworkManagementClient(
      new ClientSecretCredential(
        createNSGInput.tenantId,
        createNSGInput.clientId,
        createNSGInput.clientSecret,
      ),
      createNSGInput.subscriptionId,
    );

    const newSecurityGroup =
      await network_client.networkSecurityGroups.beginCreateOrUpdateAndWait(
        createNSGInput.resourceGroup,
        createNSGInput.networkSecurityGroupName,
        {
          location: createNSGInput.location,
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
