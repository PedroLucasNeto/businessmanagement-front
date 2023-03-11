import { Client } from "./Client";
import { Pricing } from "./Pricing";
export interface Entrie {
  entrieDate: Date;
  paymentDate: Date;
  description: string;
  entrieType: string;
  client: Client;
  pricing: Pricing;
}
