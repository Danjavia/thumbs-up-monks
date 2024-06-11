export type IVote = {
  id: string;
  type: "positive" | "negative";
};

export type IItem = {
  id: string;
  name: string;
  description: string;
  category: string;
  picture: string;
  lastUpdated: string;
  votes: { positive: number; negative: number };
};
