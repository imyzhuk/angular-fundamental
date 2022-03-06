import {LengthValidator} from "../length-validator/length-validator.directive";
import {PatternValidator} from "../pattern-validator/pattern-validator.directive";

export const EmailLengthValidator = LengthValidator(10);
export const EmailPatternValidator = PatternValidator(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)
