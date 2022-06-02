import { Injectable } from '@nestjs/common';
import { NetworkManagementClient, VirtualNetwork } from '@azure/arm-network';
import { CreateVNetInput } from './dto/input/create-vnet.intput';
import { ClientSecretCredential } from '@azure/identity';
import { GetVNetListsArgs } from './dto/args/get-vnetLists.args';
import { CreateNetworkSecurityGroupInput } from './dto/input/create-networkSecurityGroup.input';

@Injectable()
export class AzureService {
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

  async listsNetworkSecurityGroup(getVNetListsArgs: GetVNetListsArgs) {
    const network_client = new NetworkManagementClient(
      new ClientSecretCredential(
        getVNetListsArgs.tenantId,
        getVNetListsArgs.clientId,
        getVNetListsArgs.clientSecret,
      ),
      getVNetListsArgs.subscriptionId,
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
