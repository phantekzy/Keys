export type KeyStatus = "idle" | "pressed" | "tested";

export interface KeyConfig {
  code: string;
  label: string;
  width?: number;
}

export type KeyboardState = Record<string, KeyStatus>;
