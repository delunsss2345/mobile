interface IncludeName {
  name: string;
}

function genericName<T extends IncludeName>(items: T[], keyword: string) {
  return items.filter((i) => i.name.toLowerCase() === keyword);
}
