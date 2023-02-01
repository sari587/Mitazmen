
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
            switch (tableName)
            {
                case CONSTANTS.APPOINTMENT:
                    Appointment? appointment = data as Appointment;
                    return INSERT(CONSTANTS.APPOINTMENT, CONSTANTS.COL_APPOINTMENT, appointment.valuesToString());

                case CONSTANTS.IMAGE:
                    Common.Image? image = data as Common.Image;
                    return INSERT(CONSTANTS.IMAGE, CONSTANTS.COL_IMAGE, image.valuesToString());

                case CONSTANTS.LOCATION:
                    Location? location = data as Location;
                    return INSERT(CONSTANTS.LOCATION, CONSTANTS.COL_LOCATION, location.valuesToString());

                case CONSTANTS.MESSAGE:
                    Message? message = data as Message;
                    return INSERT(CONSTANTS.MESSAGE, CONSTANTS.COL_MESSAGE, message.valuesToString());

                case CONSTANTS.REVIEW:
                    Review? review = data as Review;
                    return INSERT(CONSTANTS.REVIEW, CONSTANTS.COL_REVIEW, review.valuesToString());

                case CONSTANTS.SERVICE:
                    Service? service = data as Service;
                    return INSERT(CONSTANTS.SERVICE, CONSTANTS.COL_SERVICE, service.valuesToString());

                case CONSTANTS.SERVICE_PROVIDER:
                    Common.ServiceProvider ? serviceProvider = data as Common.ServiceProvider;
                    return INSERT(CONSTANTS.SERVICE_PROVIDER, CONSTANTS.COL_SERVICE_PROVIDER, serviceProvider.valuesToString());

                case CONSTANTS.SUGGESTED_SERVICES:
                    SuggestedServices? suggestedServices = data as SuggestedServices;
                    return INSERT(CONSTANTS.SUGGESTED_SERVICES, CONSTANTS.COL_SUGGESTED_SERVICES, suggestedServices.valuesToString());
                
                case CONSTANTS.USER:
                    User? user = data as User;
                    return INSERT(CONSTANTS.USER, CONSTANTS.COL_USER, user.valuesToString());

            }
            return false;
        }
        public bool INSERT(string tableName, string[] columnList, string data)
        {
            SqlConnection conn = new SqlConnection(CONSTANTS.sqlConnString);
            string colListStr = string.Join(",", columnList);
            string SQLstatement =
                $"INSERT INTO {tableName} ({colListStr}) " +
                $"VALUES ({data});";
            try
            {
                if (conn.State == ConnectionState.Closed)
                {
                    conn.Open();
                }
                _log.Info(":: => Connection open");
                SqlCommand sqlCommand = new SqlCommand(SQLstatement, conn);
                sqlCommand.ExecuteNonQuery();
                _log.Info($":: => Added new entry to \"{tableName}\" table Created");
                return true;
            }
            catch (Exception e)
            {
                _log.Error(e.ToString());

                _log.Info(":: => ! Failed to add entry");
                return false;
            }
            finally
            {
                conn.Close();
                _log.Info(":: => Connection closed");
            }
        }

        public bool SELECT(string tableName)
        {
            return false;
        }

        public bool UPDATE(string tableName)
        {
            return false;
        }
        public bool DELETE(string tableName)
        {
            return false;
        }
    }
}
