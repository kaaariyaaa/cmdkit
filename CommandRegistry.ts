import {
  system,
  CustomCommandParamType,
  CommandPermissionLevel,
  CustomCommandOrigin,
  CustomCommandResult,
  CustomCommandStatus,
  CustomCommandParameter,
  CustomCommand,
} from "@minecraft/server";

type CommandEnum = {
  name: string;
  values: string[];
};

class CommandRegistry {
  private registry = system.beforeEvents.startup;

  registerCommand(
    customCommand: CustomCommand,
    callback: (origin: CustomCommandOrigin, ...args: any[]) => CustomCommandResult | undefined
  ): void {
    this.registry.subscribe((ev) => {
      ev.customCommandRegistry.registerCommand(customCommand, callback);
    });
  }

  registerEnum(enumDef: CommandEnum): void {
    this.registry.subscribe((ev) => {
      ev.customCommandRegistry.registerEnum(enumDef.name, enumDef.values);
    });
  }
}

export const commandRegistry = new CommandRegistry();
