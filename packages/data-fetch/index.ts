import superagent from 'superagent';
import cheerio from 'cheerio';

superagent.get('https://wiki.biligame.com/jianghux/%E4%BE%A0%E5%AE%A2').then((res) => {
  const $ = cheerio.load(res.text);

  const table = $('#CardSelectTr');

  const tableHeaderList = table.find('th').map((i, e) => $(e).text());

  const tableBodyList = table.find('tbody tr').map((i, e) =>
    $(e)
      .find('td')
      .map((i, td) => $(td).text())
  );

  console.log(tableHeaderList, tableBodyList);
});
