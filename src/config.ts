import sql from 'mssql';

export const pool = new sql.ConnectionPool("Data Source=LOCALHOST;Database=maquininhas;Encrypt=False;User Id=sa;Password=123;");
const poolConnect = pool.connect();

poolConnect.then((pool) => {
    console.log('Conexão com o SQL Server estabelecida com sucesso!');
  }).catch((err) => {
    console.log('Erro ao conectar-se ao SQL Server:', err);
  });