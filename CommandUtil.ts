import { world, CustomCommandOrigin, Entity, Player } from "@minecraft/server";

export class CommandUtil {
  private origin: CustomCommandOrigin;

  constructor(origin: CustomCommandOrigin) {
    this.origin = origin;
  }

  getSourceEntity(): Entity | null {
    return this.origin.sourceEntity ?? null;
  }

  getInitiatorEntity(): Entity | null {
    return this.origin.initiator ?? null;
  }

  getSourcePlayer(): Player | null {
    const entity = this.getSourceEntity();
    for (const player of world.getPlayers()) {
      if (player.nameTag === entity?.nameTag) {
        return player;
      }
    }
    return null;
  }

  getInitiatorPlayer(): Player | null {
    const initiator = this.getInitiatorEntity();
    for (const player of world.getPlayers()) {
      if (player.nameTag === initiator?.nameTag) {
        return player;
      }
    }
    return null;
  }
}
