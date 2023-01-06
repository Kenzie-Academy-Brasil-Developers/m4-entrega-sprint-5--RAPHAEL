import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Address } from "./address.entity";
import { Category } from "./categories.entity";
import { Schedule_User_Property } from "./schdules_users_properties.entity";

@Entity('properties')
export class Property {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ default: false })
    sold: boolean

    @Column({ type: "decimal", precision: 12, scale: 2 })
    value: number

    @Column()
    size: number

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address

    @OneToMany(() => Schedule_User_Property, schedules => schedules.property)
    schedules: Schedule_User_Property

    @ManyToOne(() => Category)
    category: Category;

}