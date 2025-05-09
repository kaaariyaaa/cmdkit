type CommandEnumDefinition = {
  name: string;
  values: string[];
};

export const CommandEnums = {} as const;

export type CommandEnum = (typeof CommandEnums)[keyof typeof CommandEnums];
