import { Cart } from "src/cart/entities/cart.entity";
import { Order } from "src/order/entities/order.entity";
import { Product } from "src/product/entities/product.entity";
import { Role } from "src/role/entities/role.entity";
import { CURRENT_TIMESTAMP } from "src/utils/constant";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'varchar', length: '150', nullable: false})
    name: string;

    @Column({type: 'varchar', length: '150', nullable: false, unique: true})
    phone: string;

    @Column()
    password: string;

    @Column({default: false})
    isAccountVerified: boolean;

    @Column({ type: 'varchar' , nullable: true, default: null})
    verficationToken: string | null;

    @CreateDateColumn({type: 'timestamp' , default: () => CURRENT_TIMESTAMP})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp' , default: () => CURRENT_TIMESTAMP, onUpdate: CURRENT_TIMESTAMP})
    updatedAt: Date;

    @ManyToOne(() => Role, (role) => role.users)
    role: Role;

    @OneToMany(()=> Order, (order) => order.user)
    orders:Order[];

    @OneToMany(()=> Cart, (cart) => cart.user)
    carts: Cart[];

    @OneToMany(()=> Product, (product) => product.user)
    products: Product[];

}
