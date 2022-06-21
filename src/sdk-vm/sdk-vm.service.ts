import { ComputeManagementClient, VirtualMachine } from '@azure/arm-compute';
import { ClientSecretCredential } from '@azure/identity';
import { Injectable } from '@nestjs/common';
import { SdkSecretService } from 'src/sdk-secret/sdk-secret.service';
import { GetVMFindOneArgs } from './dto/args/get-vmFindOne.args';
import { GetVMAllArgs } from './dto/args/get-vmListAll.args';
import { CreateVMInput } from './dto/input/create-virtualmachine.input';
import { DeleteVmInput } from './dto/input/delete-virtualmachine.input';

@Injectable()
export class SdkVmService {
  constructor(private readonly sdkSecretService: SdkSecretService) {}

  // VirtualMachineの全件取得
  async getVMAll(args: GetVMAllArgs) {
    const secret = await this.sdkSecretService.findFirst({
      where: { id: { equals: args.id } },
    });

    //   Credentialの認証
    const computeClient = new ComputeManagementClient(
      new ClientSecretCredential(
        secret.tenantId,
        secret.clientId,
        secret.clientSecret,
      ),
      secret.subscriptionId,
    );

    const VirtualMachineLists = await computeClient.virtualMachines.listAll();
    const machines: VirtualMachine[] = [];
    for await (const item of VirtualMachineLists) {
      machines.push(item);
    }
    return machines;
  }

  // VirtualMachineの特定検索
  async getVMFindUniqe(args: GetVMFindOneArgs) {
    const secret = await this.sdkSecretService.findFirst({
      where: { id: { equals: args.id } },
    });

    //   Credentialの認証
    const computeClient = new ComputeManagementClient(
      new ClientSecretCredential(
        secret.tenantId,
        secret.clientId,
        secret.clientSecret,
      ),
      secret.subscriptionId,
    );

    const vmachine = await computeClient.virtualMachines.get(
      secret.resourceGroup,
      args.virtualMachineName,
    );
    return vmachine;
  }

  // VirtualMachineを作成
  async createVirtualMachine(args: CreateVMInput) {
    const secret = await this.sdkSecretService.findFirst({
      where: { id: { equals: args.id } },
    });

    //   Credentialの認証
    const computeClient = new ComputeManagementClient(
      new ClientSecretCredential(
        secret.tenantId,
        secret.clientId,
        secret.clientSecret,
      ),
      secret.subscriptionId,
    );

    //   VirtualMachineを作るためのパラメータを設定
    const parameter: VirtualMachine = {
      location: secret.location,
      hardwareProfile: {
        vmSize: 'Standard_D2_v2',
      },
      storageProfile: {
        imageReference: {
          sku: '2016-Datacenter',
          publisher: 'MicrosoftWindowsServer',
          version: 'latest',
          offer: 'WindowsServer',
        },
        osDisk: {
          caching: 'ReadWrite',
          managedDisk: {
            storageAccountType: 'Standard_LRS',
          },
          name: args.osDiskName,
          createOption: 'FromImage',
        },
        dataDisks: [
          {
            diskSizeGB: 1023,
            createOption: 'Empty',
            lun: 0,
          },
          {
            diskSizeGB: 1023,
            createOption: 'Empty',
            lun: 1,
          },
        ],
      },
      osProfile: {
        adminUsername: args.adminUsername,
        computerName: args.computerName,
        adminPassword: args.adminPassword,
        windowsConfiguration: {
          enableAutomaticUpdates: true, // need automatic update for reimage
        },
      },
      networkProfile: {
        networkInterfaces: [
          {
            id:
              '/subscriptions/' +
              secret.subscriptionId +
              '/resourceGroups/' +
              secret.resourceGroup +
              '/providers/Microsoft.Network/networkInterfaces/' +
              args.interfaceName +
              '',
            primary: true,
          },
        ],
      },
    };

    const resCreate = await computeClient.virtualMachines.beginCreateOrUpdate(
      secret.resourceGroup,
      args.computerName,
      parameter,
    );
    return resCreate;
  }

  // VirtualMachineの削除
  async deleteVirtulaMachine(args: DeleteVmInput) {
    const secret = await this.sdkSecretService.findFirst({
      where: { id: { equals: args.id } },
    });

    //   Credentialの認証
    const computeClient = new ComputeManagementClient(
      new ClientSecretCredential(
        secret.tenantId,
        secret.clientId,
        secret.clientSecret,
      ),
      secret.subscriptionId,
    );

    const resDelete = await computeClient.virtualMachines.beginDelete(
      secret.resourceGroup,
      args.virtualMachineName,
    );

    return resDelete;
  }
}
