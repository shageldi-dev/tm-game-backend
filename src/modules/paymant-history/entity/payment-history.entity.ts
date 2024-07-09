import ClientEntity from 'src/modules/client/entity/client.entity';
import PricingEntity from 'src/modules/pricing/entity/pricing.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class PaymantHistoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column({
    default: false,
  })
  with_key: boolean;

  @ManyToOne(() => ClientEntity, (client) => client.payment)
  client: ClientEntity;

  @ManyToOne(() => PricingEntity, (pricing) => pricing.payment)
  pricing: PricingEntity;
}
