import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  UpdateDateColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import CardEntity from './card.entity';

@Entity({
  schema: ThumbsEntity.tableInfo.schema,
  name: ThumbsEntity.tableInfo.name,
})
class ThumbsEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'text' })
  public description: string;

  @Column({ type: 'text' })
  public path: string;

  @ManyToOne(() => CardEntity, (card) => card.thumbnail)
  public card: CardEntity;

  @UpdateDateColumn()
  public updatedDate?: Date;

  @CreateDateColumn()
  public createAt?: Date;

  static readonly tableInfo = {
    name: 'thumbs',
    schema: 'card',
  };
}

export default ThumbsEntity;
