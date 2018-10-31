import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0xB88D21CE83FA1964ff69A84B9fDB37fa2227961A'
);

export default instance;