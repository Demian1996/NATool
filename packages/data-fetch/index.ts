import superagent from 'superagent';
import cheerio from 'cheerio';

superagent.get('https://wiki.biligame.com/jianghux/%E4%BE%A0%E5%AE%A2').then((res) => {
  console.log(res);
});
