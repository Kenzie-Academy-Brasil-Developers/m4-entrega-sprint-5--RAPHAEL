import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Property } from "./properties.entity";

@Entity('categories')

export class Category{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @OneToMany(() => Property, (property) => property.category)
    @JoinColumn()
    properties: Property[]
    
}