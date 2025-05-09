import { commandRegistry } from "./CommandRegistry";
import { CommandEnums, CommandEnum } from "./CommandEnums";

export class EnumManager {
  static registerAllEnums(): void {
    (Object.values(CommandEnums) as CommandEnum[]).forEach((enumDef: CommandEnum) => {
      commandRegistry.registerEnum(enumDef);
    });
  }
}
