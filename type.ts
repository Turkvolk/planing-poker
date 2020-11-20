export interface Room {
  users: Participant[];
  status: Status;
}

export type Status = "in-progress" | "reveal";

export interface Participant {
  socketId: string;
  name: string;
  vote: string;
  hasVoted: boolean;
}
