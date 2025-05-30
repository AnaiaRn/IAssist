import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @MinLength(3)
    username: string;

    @IsString()
    @MinLength(8)
    password: string;

    @IsEmail()
    email?: string;

    @IsOptional()
    @IsString()
    role?: string;


}