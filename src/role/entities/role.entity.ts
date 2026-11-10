import { User } from "src/user/entities/user.entity";
import { CURRENT_TIMESTAMP } from "src/utils/constant";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: '150', nullable: false})
    type: string;

    @CreateDateColumn({type: 'timestamp' , default: () => CURRENT_TIMESTAMP})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp' , default: () => CURRENT_TIMESTAMP, onUpdate: CURRENT_TIMESTAMP})
    updatedAt: Date;

    @OneToMany(() => User, (user) => user.role)
    users: User[];

}
