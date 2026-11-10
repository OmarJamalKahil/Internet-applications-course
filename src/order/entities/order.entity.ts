import { Cart } from "src/cart/entities/cart.entity";
import { Product } from "src/product/entities/product.entity";
import { Role } from "src/role/entities/role.entity";
import { User } from "src/user/entities/user.entity";
import { CURRENT_TIMESTAMP } from "src/utils/constant";
import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'number', nullable: false})
    total_price: number;

    @CreateDateColumn({type: 'timestamp' , default: () => CURRENT_TIMESTAMP})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp' , default: () => CURRENT_TIMESTAMP, onUpdate: CURRENT_TIMESTAMP})
    updatedAt: Date;

    @ManyToOne(() => User, (user) => user.orders)
    user: User;

    @ManyToMany(()=> Cart, (carts) => carts.orders, {nullable: true})
    carts:Cart[];

    @ManyToMany(()=> Product, (products) => products.orders, {nullable: true})
    products: Product[];

}
