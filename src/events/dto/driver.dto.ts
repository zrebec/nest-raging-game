/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsIn, Min, Max, Length } from 'class-validator';

export class DriverDto {
  @ApiProperty({description: 'First name of the driver', example: 'Max'})
  @IsString()
  @Length(2, 32)
  readonly firstName: string;

  @ApiProperty({description: 'Last name of the driver', example: 'Verstappen'})
  @IsString()
  @Length(2, 32)
  readonly lastName: string;

  @ApiProperty({description: 'Gender for the driver. Allowed are M or F', example: 'F', default: 'M'})
  @IsIn(['F', 'M'])
  readonly gender: 'M' | 'F';

  @ApiProperty({description: 'Age of driver', example: 20})
  @IsInt()
  @Min(15)
  @Max(100)
  readonly age: number;

  @ApiProperty({description: 'Fearlesness of driver (higher number means more aggressive driving style but also possibility to driver faults', example: 10})
  @IsInt()
  @Min(0)
  @Max(20)
  readonly fearlessness: number;

  @ApiProperty({description: 'Maximum speed of the driver. Is the number how early can this driver push the leg on the gas pedal', example: 10})
  @IsInt()
  @Min(0)
  @Max(20)
  readonly speed: number;

  @ApiProperty({description: 'Experiences and stragety for overtaking. This makes sometimes collisions but higer number doesn\'t means driver error', example: 20})
  @IsInt()
  @Min(0)
  @Max(20)
  readonly overtaking: number;

  @ApiProperty({description: 'Stamina means how long can driver drive in constant performance. In many drivers with lower concentration driving worse times and are can make driver error into end of the race', example: 16})
  @IsInt()
  @Min(0)
  @Max(20)
  readonly stamina: number;

  @ApiProperty({description: 'Concentration is not the same like stamina. Means how driver is concentrating for task. For example for overtaking. If concentration is high and overtake could be same or higher, overtaking has a big change to success. Or the same for defense.', example: 15})
  @IsInt()
  @Min(0)
  @Max(20)
  readonly concentration: number;

  @ApiProperty({description: 'Defense of the possition. Also makes sometimes collisions but this needs contenctration lever as high as possible', example: 10})
  @IsInt()
  @Min(0)
  @Max(20)
  readonly defense: number;

  @ApiProperty({description: 'Smoothness means more "flying" drive. Lower fuel consuption and tire wear. This incase in experienced drivers', example: 16})
  @IsInt()
  @Min(0)
  @Max(20)
  readonly smoothness: number;

  @ApiProperty({description: 'How can your driver makes a cornering? Higher number means probably better speed but it\'s very closer to end of corner. Possibility to driver mistake is smoothness or concentratraion is to too low for this manevre', example: 14})
  @IsInt()
  @Min(0)
  @Max(20)
  readonly cornering: number;

  @ApiProperty({description: 'Feedback is very important into boxes. Means how driver knows his/her car and know what is good or what is bed. The best setup for track is a faster. This attribute has affected but any other attributes or the same, this attribut this attribute doesn\'t affect other attributes. Also no degradade by age, So may ony incrase. ', example: 10})
  @IsInt()
  @Min(0)
  @Max(20)
  readonly feedback: number;

  @ApiProperty({description: 'It\'s rainy day? No proble for your driver. The wet track means +1 or +2 for all most other attributes becuase he/his loves it.', example: 16})
  @IsInt()
  @Min(0)
  @Max(20)
  readonly wetcontrol: number;
}
