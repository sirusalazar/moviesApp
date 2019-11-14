import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  public transform(value, args: string, property: string) {
    if (!value) {
      return;
    }
    if (!args) {
      return value;
    }
    const originalArgs = args;
    args = args.toLowerCase();
    return value.filter(item => item[property].toLowerCase().includes(args));
  }
}
