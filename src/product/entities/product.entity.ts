import { Cart } from "src/cart/entities/cart.entity";
import { Category } from "src/category/entities/category.entity";
import { Order } from "src/order/entities/order.entity";
import { User } from "src/user/entities/user.entity";
import { CURRENT_TIMESTAMP } from "src/utils/constant";
import {Image} from "src/image/entities/image.entity";
import { Column, CreateDateColumn, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: 'number', nullable: false})
    price: number;

    @Column({type: 'number', nullable: false})
    qty: number;

    @Column({type: 'varchar', nullable: false})
    name: string;

    @CreateDateColumn({type: 'timestamp' , default: () => CURRENT_TIMESTAMP})
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp' , default: () => CURRENT_TIMESTAMP, onUpdate: CURRENT_TIMESTAMP})
    updatedAt: Date;

    @ManyToOne(() => User, (user) => user.products)
    user: User;

    @ManyToMany(() => Order, (orders) => orders.products)
    orders: Order[];

    @ManyToMany(() => Cart, (carts) => carts.products)
    carts: Cart[];

    @ManyToMany(() => Category, (categories) => categories.products)
    categories: Category[];

    @OneToMany(() => Image, (images) => images.product)
    images: Image[];
}
