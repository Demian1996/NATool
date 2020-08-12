import mysql from 'mysql';
import config from './config';
import sqlMap from './sqlMap';
import { v4 } from 'uuid';

const connection = mysql.createConnection(config);
connection.connect((err) => {
  if (err) {
    console.error('连接失败');
    return;
  }
  connection.query(sqlMap.role.add, [v4(), '临时侠客', 'male'], (err) => {
    if (err) {
      console.error('插入失败');
      return;
    }
    console.log('插入成功');
    connection.end();
  });
});
