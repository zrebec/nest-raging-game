import { registerDecorator, ValidationOptions } from 'class-validator';
import * as moment from 'moment';

export function IsAtLeast15YearsOld(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      name: 'isAtLeast15YearsOld',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: Date) {
          const birhdate = moment(value, 'YYYY-MM-DD');
          const now = moment();
          const age = now.diff(birhdate, 'years');
          return age >= 15;
        },
      },
    });
  };
}
