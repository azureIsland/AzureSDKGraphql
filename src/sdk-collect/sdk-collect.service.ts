import { Injectable } from '@nestjs/common';
import { SdkNetworkInterfaceService } from 'src/sdk-network-interface/sdk-network-interface.service';
import { SdkSubnetsService } from 'src/sdk-subnets/sdk-subnets.service';
import { SdkVmService } from 'src/sdk-vm/sdk-vm.service';
import { SdkVNetService } from 'src/sdk-vnet/sdk-vnet.service';
import { CreateCollectInput } from './dto/input/create-collect.input';

@Injectable()
export class SdkCollectService {
  constructor(
    private readonly sdkVNetService: SdkVNetService,
    private readonly sdkSubNetService: SdkSubnetsService,
    private readonly sdkNetInfService: SdkNetworkInterfaceService,
    private readonly sdkVMachineService: SdkVmService,
  ) {}

  async createSdkCollect(args: CreateCollectInput) {
    const vnet = await this.sdkVNetService.createVNet({
      id: args.id,
      networkName: args.networkName,
      addresses: args.addresses,
    });

    const subnet = await this.sdkSubNetService.createSubnet({
      id: args.id,
      virtualNetworkName: args.networkName,
      subnetName: args.subnetName,
      addressPrefix: args.addressPrefix,
    });

    const netinf = await this.sdkNetInfService.createNetworkInterface({
      id: args.id,
      name: args.name,
      vnetName: args.networkName,
      subnetName: args.subnetName,
      interfaceName: args.netInfName,
    });

    const vm = await this.sdkVMachineService.createVirtualMachine({
      id: args.id,
      computerName: args.computerName,
      adminUsername: args.adminUserName,
      adminPassword: args.adminPassword,
      osDiskName: args.osDiskName,
      interfaceName: args.netInfName,
    });

    if (vnet != null && subnet != null && netinf != null && vm != null) {
      return vm;
    }
  }
}
