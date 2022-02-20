import {Pipe} from "@angular/core";
import {StringJoinerPipe} from "./string-joiner.pipe";

@Pipe({
  name: 'stringJoinerImpure',
  pure: false
})

export class StringJoinerImpurePipe extends StringJoinerPipe {}
