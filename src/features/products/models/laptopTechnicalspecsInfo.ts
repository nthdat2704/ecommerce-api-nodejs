import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { MainProductInfo } from './mainProductInfo';

@Index('laptop_technicalspecs_info_pkey', ['laptopId'], { unique: true })
@Index('laptop_technicalspecs_info_main_product_id_key', ['mainProductId'], {
  unique: true
})
@Entity('laptop_technicalspecs_info', { schema: 'public' })
export class LaptopTechnicalspecsInfo {
  @Column('integer', { primary: true, name: 'laptopId' })
  laptopId: number;

  @Column('integer', { name: 'mainProductId', unique: true })
  mainProductId: number;

  @Column('character varying', { name: 'cpuTech', length: 255 })
  cpuTech: string;

  @Column('character varying', { name: 'cpuCores', length: 255 })
  cpuCores: string;

  @Column('character varying', { name: 'cpuThreads', length: 255 })
  cpuThreads: string;

  @Column('character varying', { name: 'cpuSpeed', length: 255 })
  cpuSpeed: string;

  @Column('character varying', { name: 'cpuMaxspeed', length: 255 })
  cpuMaxspeed: string;

  @Column('character varying', { name: 'cpuCache', length: 255 })
  cpuCache: string;

  @Column('character varying', { name: 'ramSize', length: 255 })
  ramSize: string;

  @Column('character varying', { name: 'ramType', length: 255 })
  ramType: string;

  @Column('character varying', { name: 'ramSpeed', length: 255 })
  ramSpeed: string;

  @Column('character varying', { name: 'ramMaxsupport', length: 255 })
  ramMaxsupport: string;

  @Column('character varying', { name: 'storage', length: 255 })
  storage: string;

  @Column('character varying', { name: 'screenSize', length: 255 })
  screenSize: string;

  @Column('character varying', { name: 'screenResolution', length: 255 })
  screenResolution: string;

  @Column('character varying', { name: 'screenRefreshrate', length: 255 })
  screenRefreshrate: string;

  @Column('character varying', { name: 'screenTech', length: 255 })
  screenTech: string;

  @Column('character varying', { name: 'cardGraphics', length: 255 })
  cardGraphics: string;

  @Column('character varying', { name: 'audioTech', length: 255 })
  audioTech: string;

  @Column('character varying', { name: 'featuresPort', length: 255 })
  featuresPort: string;

  @Column('character varying', { name: 'featuresConnect', length: 255 })
  featuresConnect: string;

  @Column('character varying', { name: 'featuresWebcam', length: 255 })
  featuresWebcam: string;

  @Column('character varying', { name: 'featuresOthers', length: 255 })
  featuresOthers: string;

  @Column('character varying', { name: 'featuresKeyled', length: 255 })
  featuresKeyled: string;

  @Column('character varying', { name: 'productSize', length: 255 })
  productSize: string;

  @Column('character varying', { name: 'productMaterials', length: 255 })
  productMaterials: string;

  @Column('character varying', { name: 'othersPin', length: 255 })
  othersPin: string;

  @Column('character varying', { name: 'othersSystem', length: 255 })
  othersSystem: string;

  @Column('character varying', { name: 'othersReleasedate', length: 255 })
  othersReleasedate: string;

  @OneToOne(() => MainProductInfo, (mainProductInfo) => mainProductInfo.laptopTechnicalspecsInfo)
  @JoinColumn([{ name: 'mainProductId', referencedColumnName: 'mainProductId' }])
  mainProduct: MainProductInfo;
}
