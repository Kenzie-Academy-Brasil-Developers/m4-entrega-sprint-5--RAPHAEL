import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('addresses')
export class Address {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    district: string

    @Column({ length: 8 })
    zipCode: string

    @Column({ length: 5 })
    number: string

    @Column()
    city: string

    @Column({ length: 2 })
    state: string
}