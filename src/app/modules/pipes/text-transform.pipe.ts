import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTransform'
})
export class TextTransformPipe implements PipeTransform {

  transform(value: string, textCase: "upper" | "lower" = "upper"): any {

    return textCase === "upper"
      ? value.toUpperCase()
      : textCase.toLowerCase();
  }

}
