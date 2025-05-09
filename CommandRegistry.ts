import {
  system,
  CustomCommandParamType,
  CommandPermissionLevel,
  CustomCommandOrigin,
  CustomCommandResult,
  CustomCommandStatus,
} from "@minecraft/server";

type CommandEnum = {
  name: string;
  values: string[];
};

class CommandRegistry {
  private registry = system.beforeEvents.startup;

  registerCommand(
    name: string,
    description: string,
    mandatoryParameters: any[],
    optionalParameters: any[],
    permissionLevel: CommandPermissionLevel,
    callback: (origin: CustomCommandOrigin, ...args: any[]) => CustomCommandResult | undefined
  ): void {
    this.registry.subscribe((ev) => {
      ev.customCommandRegistry.registerCommand(
        {
          name,
          description,
          mandatoryParameters,
          optionalParameters,
          permissionLevel,
        },
        callback
      );
    });
  }

  registerEnum(enumDef: CommandEnum): void {
    this.registry.subscribe((ev) => {
      ev.customCommandRegistry.registerEnum(enumDef.name, enumDef.values);
    });
  }
}

export const commandRegistry = new CommandRegistry();
