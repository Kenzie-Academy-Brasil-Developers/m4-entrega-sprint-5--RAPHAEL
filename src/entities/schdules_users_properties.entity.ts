import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Property } from "./properties.entity";
import { User } from "./users.entity";

@Entity('schedules_users-properties')
export class Schedule_User_Property {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'date' })
    date: string

    @Column({ type: 'time' })
    hour: string

    @ManyToOne(() => User)
    user: User

    @ManyToOne(() => Property)
    property: Property
}