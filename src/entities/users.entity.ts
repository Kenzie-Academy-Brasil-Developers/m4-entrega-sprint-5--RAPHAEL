import { hashSync } from "bcryptjs";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate, DeleteDateColumn, OneToMany, JoinColumn } from "typeorm";
import { Schedule_User_Property } from "./schdules_users_properties.entity";

@Entity("users")
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column({ default: true })
    isActive: boolean

    @Column({ default: false })
    isAdm: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @DeleteDateColumn()
    deletedAt: Date

    @OneToMany(() => Schedule_User_Property, schedules => schedules.user)
    @JoinColumn()
    schedules: Schedule_User_Property[]

    @BeforeUpdate()
    @BeforeInsert()
    hashPassword() {
        this.password = hashSync(this.password, 10)
    }
}

