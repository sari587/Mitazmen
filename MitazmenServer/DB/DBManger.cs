
using Common;
using NLog;
using NLog.Fluent;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using static System.Net.Mime.MediaTypeNames;

namespace MitazmenServer.DB
{

    internal class DBManger
    {
        private static readonly Logger _log = LogManager.GetCurrentClassLogger();
        public bool InsertToTable(string tableName, Object data)
        {
            if (data == null)
            {
                _log.Info(":: => data object at DBManger.InsertToTable() is null");
                return false;
            }
            switch (tableName)
            {
#pragma warning disable CS8602 // Dereference of a possibly null reference.
                case CONSTANTS.APPOINTMENT:
                    Appointment? appointment = data as Appointment;
                
                    return INSERT(CONSTANTS.APPOINTMENT, CONSTANTS.COL_APPOINTMENT, appointment.ValuesToString());
                case CONSTANTS.IMAGE:
                    Common.Image? image = data as Common.Image;
                    return INSERT(CONSTANTS.IMAGE, CONSTANTS.COL_IMAGE, image.ValuesToString());

                case CONSTANTS.LOCATION:
                    Location? location = data as Location;  
                    return INSERT(CONSTANTS.LOCATION, CONSTANTS.COL_LOCATION, location.ValuesToString());

                case CONSTANTS.MESSAGE:
                    Message? message = data as Message;
                    return INSERT(CONSTANTS.MESSAGE, CONSTANTS.COL_MESSAGE, message.ValuesToString());

                case CONSTANTS.REVIEW:
                    Review? review = data as Review;
                    return INSERT(CONSTANTS.REVIEW, CONSTANTS.COL_REVIEW, review.ValuesToString());

                case CONSTANTS.SERVICE:
                    Service? service = data as Service;
                    return INSERT(CONSTANTS.SERVICE, CONSTANTS.COL_SERVICE, service.ValuesToString());

                case CONSTANTS.SERVICE_PROVIDER:
                    Common.ServiceProvider? serviceProvider = data as Common.ServiceProvider;
                    return INSERT(CONSTANTS.SERVICE_PROVIDER, CONSTANTS.COL_SERVICE_PROVIDER, serviceProvider.ValuesToString());

                case CONSTANTS.SUGGESTED_SERVICES:
                    SuggestedServices? suggestedServices = data as SuggestedServices;
                    return INSERT(CONSTANTS.SUGGESTED_SERVICES, CONSTANTS.COL_SUGGESTED_SERVICES, suggestedServices.ValuesToString());

                case CONSTANTS.USER:
                    User? user = data as User;
                    return INSERT(CONSTANTS.USER, CONSTANTS.COL_USER, user.ValuesToString());
#pragma warning restore CS8602 // Dereference of a possibly null reference.
                default:
                    _log.Info($":: => Table Name {tableName} is not configerd");
                    break;
            }
            return false;
        }

        public bool Execute(string SQLstatement,string tableName,string msg)
        {
            SqlConnection conn = new SqlConnection(CONSTANTS.sqlConnString);
            try
            {
                if (conn.State == ConnectionState.Closed)
                {
                    conn.Open();
                }
                _log.Info(":: => Connection open");
                SqlCommand sqlCommand = new SqlCommand(SQLstatement, conn);
                sqlCommand.ExecuteNonQuery();
                _log.Info($":: => {msg}");
                return true;
            }
            catch (Exception e)
            {
                _log.Error(e.ToString());
                _log.Info(":: => ! Failed to execute SQLstatement");
                return false;
            }
            finally
            {
                conn.Close();
                _log.Info(":: => Connection closed");
            }
        }

        public bool INSERT(string tableName, string[] columnList, string data)
        {
            SqlConnection conn = new SqlConnection(CONSTANTS.sqlConnString);
            string SQLstatement =
                $"INSERT INTO {tableName} ({string.Join(",", columnList)}) " +
                $"VALUES ({data});";

            return Execute(SQLstatement, tableName, $"Added new entry to \"{tableName}\"");
        }

       /* public T? SELECT<T>(string qury)
        {
            return ;
        }*/

        public bool UPDATE(string tableName, string setOfColumns, string condition)
        {
            string SQLstatement =
                $"UPDATE {tableName} " +
                $"SET {setOfColumns}" +
                $"WHERE {condition};";
            return Execute(SQLstatement,tableName,$"Updated \"{tableName}\"");
        }
        public bool DELETE(string tableName,string condition)
        {
            string SQLstatement =
                $"DELETE FROM {tableName} " +
                $"{condition};";
            return Execute(SQLstatement, tableName, $"Deleted entrys from \"{tableName}\"");

        }
    }
}
