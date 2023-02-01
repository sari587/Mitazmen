using NLog;
using System.Data;
using System.Data.SqlClient;
using Common;
namespace MitazmenServer.DB
{
    public static class DBInitializer
    {
        private static readonly Logger _log = LogManager.GetCurrentClassLogger();

        public static bool CreateTable(string sql_statement)
        {
            SqlConnection conn = new SqlConnection(CONSTANTS.sqlConnString);
            try { 
                if(conn.State == ConnectionState.Closed)
                {
                    conn.Open();
                }
                _log.Info(":: => Connection open");
                SqlCommand sqlCommand = new SqlCommand(sql_statement, conn);
                sqlCommand.ExecuteNonQuery();
                _log.Info(":: => Table Created");
                return true;
            }
            catch(Exception e){
                _log.Error(e.ToString());
                
                _log.Info(":: => ! Failed To create table");
                return false;
            }
            finally
            {
                conn.Close();
                _log.Info(":: => Connection closed");
            }
            
        }
    }
}
