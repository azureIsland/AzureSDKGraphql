import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { GetVMFindOneArgs } from './dto/args/get-vmFindOne.args';
import { GetVMAllArgs } from './dto/args/get-vmListAll.args';
import { CreateVMInput } from './dto/input/create-virtualmachine.input';
import { DeleteVmInput } from './dto/input/delete-virtualmachine.input';
import { CreatedVmStatus } from './model/createVmStatus';
import { DeleteVmStatus } from './model/deleteVmStatus';
import { VirtualMachines } from './model/virtualmachines';
import { SdkVmService } from './sdk-vm.service';

@Resolver()
export class SdkVmResolver {
  constructor(private readonly sdkVmService: SdkVmService) {}

  @Query(() => [VirtualMachines], { name: 'findAllVMachine' })
  async getVMAll(@Args() args: GetVMAllArgs) {
    return this.sdkVmService.getVMAll(args);
  }

  @Query(() => VirtualMachines, { name: 'findOneVMachine' })
  async getVMFindOne(@Args() args: GetVMFindOneArgs) {
    return this.sdkVmService.getVMFindUniqe(args);
  }

  @Mutation(() => CreatedVmStatus, { name: 'createVm' })
  async createVm(@Args('createVm') args: CreateVMInput) {
    return this.sdkVmService.createVirtualMachine(args);
  }

  @Mutation(() => DeleteVmStatus, { name: 'deleteVm' })
  async deleteVm(@Args('deleteVm') args: DeleteVmInput) {
    return this.sdkVmService.deleteVirtulaMachine(args);
  }
}
