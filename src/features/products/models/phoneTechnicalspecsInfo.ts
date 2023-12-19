import { Column, Entity, Index, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { MainProductInfo } from './mainProductInfo';

@Index('phone_technicalspecs _info_main_product_id_key', ['mainProductId'], {
  unique: true
})
@Index('phone_technicalspecs _info_pkey', ['phoneId'], { unique: true })
@Entity('phone_technicalspecs _info', { schema: 'public' })
export class PhoneTechnicalspecsInfo {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'phoneId' })
  phoneId: number;

  @Column('integer', { name: 'mainProductId', unique: true })
  mainProductId: number;

  @Column('character varying', { name: 'screenTech', length: 255 })
  screenTech: string;

  @Column('character varying', { name: 'screenResolution ', length: 255 })
  screenResolution: string;

  @Column('character varying', { name: 'screenSize', length: 255 })
  screenSize: string;

  @Column('character varying', { name: 'screenBrightness', length: 255 })
  screenBrightness: string;

  @Column('character varying', { name: 'screenGlass', length: 255 })
  screenGlass: string;

  @Column('character varying', { name: 'rearcameraResolution', length: 255 })
  rearcameraResolution: string;

  @Column('character varying', { name: 'rearcameraVideo', length: 255 })
  rearcameraVideo: string;

  @Column('character varying', { name: 'rearcameraFlash', length: 255 })
  rearcameraFlash: string;

  @Column('character varying', { name: 'rearcameraFeature', length: 255 })
  rearcameraFeature: string;

  @Column('character varying', { name: 'frontcameraResolution', length: 255 })
  frontcameraResolution: string;

  @Column('character varying', { name: 'frontcameraFeature', length: 255 })
  frontcameraFeature: string;

  @Column('character varying', { name: 'cpuSystem', length: 255 })
  cpuSystem: string;

  @Column('character varying', { name: 'cpuName', length: 255 })
  cpuName: string;

  @Column('character varying', { name: 'cpuSpeed', length: 255 })
  cpuSpeed: string;

  @Column('character varying', { name: 'cpuGPU', length: 255 })
  cpuGpu: string;

  @Column('character varying', { name: 'memoryRam', length: 255 })
  memoryRam: string;

  @Column('character varying', { name: 'memoryStorage', length: 255 })
  memoryStorage: string;

  @Column('character varying', { name: 'memoryContact', length: 255 })
  memoryContact: string;

  @Column('character varying', { name: 'connectMobilenetwork', length: 255 })
  connectMobilenetwork: string;

  @Column('character varying', { name: 'connectSim', length: 255 })
  connectSim: string;

  @Column('character varying', { name: 'connectWifi', length: 255 })
  connectWifi: string;

  @Column('character varying', { name: 'connectGps', length: 255 })
  connectGps: string;

  @Column('character varying', { name: 'connectBluetooth', length: 255 })
  connectBluetooth: string;

  @Column('character varying', { name: 'connectCharging', length: 255 })
  connectCharging: string;

  @Column('character varying', { name: 'connectJack', length: 255 })
  connectJack: string;

  @Column('character varying', { name: 'pinType', length: 255 })
  pinType: string;

  @Column('character varying', { name: 'pinCapacity', length: 255 })
  pinCapacity: string;

  @Column('character varying', { name: 'pinMaxcharging', length: 255 })
  pinMaxcharging: string;

  @Column('character varying', { name: 'pinTech', length: 255 })
  pinTech: string;

  @Column('character varying', { name: 'utilitySecurity', length: 255 })
  utilitySecurity: string;

  @Column('character varying', { name: 'utilitySpecial', length: 255 })
  utilitySpecial: string;

  @Column('character varying', { name: 'utilityWaterresistance', length: 255 })
  utilityWaterresistance: string;

  @Column('character varying', { name: 'utilityRecord', length: 255 })
  utilityRecord: string;

  @Column('character varying', { name: 'utilityWatch', length: 255 })
  utilityWatch: string;

  @Column('character varying', { name: 'utilityMusicplayback', length: 255 })
  utilityMusicplayback: string;

  @Column('character varying', { name: 'generalDesgin', length: 255 })
  generalDesgin: string;

  @Column('character varying', { name: 'generalMaterials', length: 255 })
  generalMaterials: string;

  @Column('character varying', { name: 'generalSize', length: 255 })
  generalSize: string;

  @Column('character varying', { name: 'generalReleasedate ', length: 255 })
  generalReleasedate: string;

  @Column('character varying', { name: 'generalBrand', length: 255 })
  generalBrand: string;

  @OneToOne(() => MainProductInfo, (mainProductInfo) => mainProductInfo.phoneTechnicalspecsInfo)
  @JoinColumn([{ name: 'mainProductId', referencedColumnName: 'mainProductId' }])
  mainProduct: MainProductInfo;
}
