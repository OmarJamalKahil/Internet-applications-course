import { Order } from "src/order/entities/order.entity";
import { Product } from "src/product/entities/product.entity";
import { Role } from "src/role/entities/role.entity";
import { User } from "src/user/entities/user.entity";
import { CURRENT_TIMESTAMP } from "src/utils/constant";
import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity()
export class Cart {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({type: 'timestamp' , default: () => CURRENT_TIMESTAMP})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp' , default: () => CURRENT_TIMESTAMP, onUpdate: CURRENT_TIMESTAMP})
    updatedAt: Date;

    @ManyToOne(() => User, (user) => user.carts)
    user: User;

    @ManyToMany(() => Order, (orders) => orders.carts)
    orders: Order[];

    @ManyToMany(() => Product, (products) => products.carts)
    products: Product[];

    

}
