import { Connection, Repository } from "typeorm";

import { CreateEntryDto } from "../dtos/entry.dto";
import { EntryModel } from "../models/entry.model";

export class EntryRepository {
  private repository: Repository<EntryModel>;

  constructor(connection: Connection) {
    this.repository = connection.getRepository(EntryModel);
  }

  public createEntry(payload: CreateEntryDto) {
    const newEntry = this.repository.create(payload);
    return this.repository.save(newEntry);
  }
  public getEntries() {
    return this.repository.find();
  }

  // Obtener entradas por día
}
