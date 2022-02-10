import { format } from "date-fns";
import { Between, Connection, Repository } from "typeorm";

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

  public getEntriesByDate(initialDate: Date, finalDate: Date) {
    const formattedInitialDate = format(initialDate, "yyyy-MM-dd");
    const formattedFinalDate = format(finalDate, "yyyy-MM-dd");
    return this.repository.find({
      where: {
        createdAt: Between(formattedInitialDate, formattedFinalDate),
      },
    });
  }
}
