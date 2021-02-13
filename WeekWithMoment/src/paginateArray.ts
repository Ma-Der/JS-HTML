interface Settings {
    paginateArrayIdx: number;
    entriesOnPage: number;
  }
  
  export function paginateArray(
    dataEntries: string[],
    settings: Settings
  ): string[] {
    if (dataEntries.length === 0)
      throw new Error("Array is empty, nothing to paginate.");
  
    const { paginateArrayIdx, entriesOnPage } = settings;
  
    if (isNaN(paginateArrayIdx) || isNaN(entriesOnPage)) {
      throw new Error("Both settings must be numbers.");
    }
    if (!(paginateArrayIdx > 0 && entriesOnPage > 0))
      throw new Error("Both settings variables must be > 0");
  
    const areAvailableEntriesOnPage =
      Math.ceil(dataEntries.length / entriesOnPage) >= paginateArrayIdx;
    if (!areAvailableEntriesOnPage)
      throw new Error(
        "You only can paginate into maximum of " +
          Math.ceil(dataEntries.length / entriesOnPage) +
          " pages."
      );
  
    const indexOfLastPosition = paginateArrayIdx * entriesOnPage;
    const indexOfFirstPosition = indexOfLastPosition - entriesOnPage;
    const entriesOnSelectedPage = dataEntries.slice(
      indexOfFirstPosition,
      indexOfLastPosition
    );
  
    return entriesOnSelectedPage;
  }