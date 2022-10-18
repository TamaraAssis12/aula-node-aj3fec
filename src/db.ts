import { Pool } from 'pg';

const connectionString =
  'postgres://mhlevogq:tcv8UNvm8gAD0yo972XhrNj0Evj-GG03@peanut.db.elephantsql.com/mhlevogq';

const db = new Pool({ connectionString });

export default db;
