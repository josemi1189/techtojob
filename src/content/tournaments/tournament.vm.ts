export interface Tournaments {
  id: string;
  active: boolean;
  state: "upcoming" | "building" | "voting" | "closed" | "completed";
  urlLink: string;
}
