import { Client } from "./Client";
import { Pricing } from "./Pricing";
export interface Appointment {
  client: Client;
  type: string;
  pricing: Pricing;
}
