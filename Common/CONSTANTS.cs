using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MitazmenServer.DB
{
    public static class CONSTANTS
    {
        #region MySqlRegion

        public const string mySqlUserName = "root";
        public const string mySqlPassword = "Sa208343970";
        public const string databaseName = "mitazmendb";
        public const string sqlConnString = $"server=localhost;user id={mySqlUserName};password={mySqlPassword};database={databaseName}";

        #endregion

        #region UtilRegion


        public const string ID = "id";
        public const string DESCRIPTION = "Description";
        public const string DATE = "Date";
        public const string TYPE = "Type";
        public const string STATUS = "Status";
        public const string PHONE = "Phone";
        public const string EMAIL = "Email";
        public const string PASSWORD = "Password";
        public const string FIRST_NAME = "FirstName";
        public const string LAST_NAME = "LastName";
        public const string RATING = "Rating";
        public const string AVG_RATING = "AverageRating";
        public const string PRICE = "Price";
        public const string TIME_PERIOD_MINUTES = "TimePeriodInMinutes";
        public const string LONGITUDE = "Longitude";
        public const string LATITUDE = "Latitude";
        public const string USER_TYPE = "UserType";
        public const string SERVICE_TYPE = "ServiceType";
        public const string DAY = "day";
        public const string OPENING = "Opening";
        public const string CLOSED = "Closed";
        public const string GROUP = "Group";
        public const string IMAGE_BASE64 = "Base64";

        public const string LOCATION_ID = "LocationID";
        public const string SERVICE_PROVIDER_ID = "ServiceProviderID";
        public const string SERVICE_ID = "ServiceID";
        public const string USER_ID = "UserID";
        public const string WORKING_HOURS_ID = "WorkingHoursId";
        public const string OWNER_ID = "OwnerID";
        public const string SENDER_ID = "SenderID";
        public const string RECEIVER_ID = "ReceiverID";
        public const string IMAGE_ID = "ImageID";
        public const string HOLDER_ID = "HolderID";

        #endregion

        #region NamesRegion

        public const string APPOINTMENT = "Appointment";
        public const string IMAGE = "Image";
        public const string LOCATION = "Location";
        public const string MESSAGE = "Message";
        public const string REVIEW = "Review";
        public const string SERVICE = "Service";
        public const string SERVICE_PROVIDER = "ServiceProvider";
        public const string SUGGESTED_SERVICES = "SuggestedServices";
        public const string USER = "User";
        public const string WORKING_HOURS = "WorkingHour";

        #endregion

        #region ColoumsNameArrays

        public static readonly string[] COL_APPOINTMENT = { CONSTANTS.ID, CONSTANTS.DESCRIPTION, CONSTANTS.DATE, CONSTANTS.TYPE, CONSTANTS.STATUS, CONSTANTS.SERVICE_PROVIDER_ID, CONSTANTS.SERVICE_ID, CONSTANTS.USER_ID };
        public static readonly string[] COL_USER = { CONSTANTS.ID, CONSTANTS.PHONE, CONSTANTS.EMAIL, CONSTANTS.PASSWORD, CONSTANTS.FIRST_NAME, CONSTANTS.LAST_NAME, CONSTANTS.TYPE, CONSTANTS.STATUS, CONSTANTS.LOCATION_ID, CONSTANTS.SERVICE_PROVIDER_ID };
        public static readonly string[] COL_SERVICE_PROVIDER = { CONSTANTS.ID, CONSTANTS.DESCRIPTION, CONSTANTS.TYPE, CONSTANTS.RATING, CONSTANTS.STATUS, CONSTANTS.PHONE, CONSTANTS.WORKING_HOURS_ID, CONSTANTS.LOCATION_ID, CONSTANTS.OWNER_ID };
        public static readonly string[] COL_SERVICE = { CONSTANTS.ID, CONSTANTS.DESCRIPTION, CONSTANTS.TYPE, CONSTANTS.STATUS, CONSTANTS.PRICE, CONSTANTS.TIME_PERIOD_MINUTES, CONSTANTS.SERVICE_PROVIDER_ID };
        public static readonly string[] COL_LOCATION = { CONSTANTS.ID, CONSTANTS.LONGITUDE, CONSTANTS.LATITUDE, CONSTANTS.USER_TYPE, CONSTANTS.USER_ID };
        public static readonly string[] COL_REVIEW = { CONSTANTS.ID, CONSTANTS.MESSAGE, CONSTANTS.RATING, CONSTANTS.DATE, CONSTANTS.SERVICE_TYPE, CONSTANTS.SERVICE_PROVIDER_ID, CONSTANTS.USER_ID, CONSTANTS.SERVICE_ID };
        public static readonly string[] COL_WORKING_HOURS = { CONSTANTS.DAY, CONSTANTS.OPENING, CONSTANTS.CLOSED, CONSTANTS.SERVICE_PROVIDER_ID };
        public static readonly string[] COL_MESSAGE = { CONSTANTS.ID, CONSTANTS.MESSAGE, CONSTANTS.DATE, CONSTANTS.STATUS, CONSTANTS.SENDER_ID, CONSTANTS.RECEIVER_ID };
        public static readonly string[] COL_SUGGESTED_SERVICES = { CONSTANTS.ID, CONSTANTS.GROUP, CONSTANTS.TYPE, CONSTANTS.DESCRIPTION, CONSTANTS.AVG_RATING };
        public static readonly string[] COL_IMAGE = { CONSTANTS.ID, CONSTANTS.HOLDER_ID, CONSTANTS.IMAGE_BASE64 };
        #endregion

        #region sql_createTableRegion

        public const string sql_CreateAppointmentsTable = "CREATE TABLE " +
            $"{CONSTANTS.APPOINTMENT}(" +
            $"  {CONSTANTS.ID} int primary key " +
            $", {CONSTANTS.DESCRIPTION} varchar(4096) " +
            $", {CONSTANTS.DATE} varchar(64) " +
            $", {CONSTANTS.TYPE} varchar(16)" +
            $", {CONSTANTS.STATUS} varchar(16)" +
            $", {CONSTANTS.SERVICE_PROVIDER_ID} int foreign key" +
            $", {CONSTANTS.SERVICE_ID} int foreign key" +
            $", {CONSTANTS.USER_ID} int foreign key" +
            ")";
        public const string sql_CreateUserTable = "CREATE TABLE " +
            $"{CONSTANTS.USER} (" +
            $"  {CONSTANTS.ID} int primary key " +
            $", {CONSTANTS.PHONE} int" +
            $", {CONSTANTS.EMAIL} varchar(64) " +
            $", {CONSTANTS.PASSWORD} varchar(64) " +
            $", {CONSTANTS.FIRST_NAME} varchar(64) " +
            $", {CONSTANTS.LAST_NAME} varchar(64) " +
            $", {CONSTANTS.TYPE} varchar(16) " +
            $", {CONSTANTS.STATUS} varchar(16) " +
            $", {CONSTANTS.LOCATION_ID} int foreign key " +
            $", {CONSTANTS.SERVICE_PROVIDER_ID} int foreign key" +
            ")";
        public const string sql_CreateServiceProviderTable = "CREATE TABLE " +
            $"{CONSTANTS.SERVICE_PROVIDER} (" +
            $"  {CONSTANTS.ID} int primary key " +
            $", {CONSTANTS.DESCRIPTION} varchar(4096) " +
            $", {CONSTANTS.TYPE} varchar(16)" +
            $", {CONSTANTS.RATING} float" +
            $", {CONSTANTS.STATUS} varchar(16)" +
            $", {CONSTANTS.PHONE} int" +
            $", {CONSTANTS.WORKING_HOURS_ID} int foreign key" +
            $", {CONSTANTS.LOCATION_ID} int foreign key" +
            $", {CONSTANTS.OWNER_ID} int foreign key" +
            ")";
        public const string sql_CreateServicesTable = "CREATE TABLE " +
            $"{CONSTANTS.SERVICE}(" +
            $"  {CONSTANTS.ID} int primary key " +
            $", {CONSTANTS.DESCRIPTION} varchar(4096) " +
            $", {CONSTANTS.TYPE} varchar(16)" +
            $", {CONSTANTS.STATUS} varchar(16)" +
            $", {CONSTANTS.PRICE} float " +
            $", {CONSTANTS.TIME_PERIOD_MINUTES} int" +
            $", {CONSTANTS.SERVICE_PROVIDER_ID} int foreign key" +
            ")";
        public const string sql_CreateLocationsTable = "CREATE TABLE " +
            $"{CONSTANTS.LOCATION}(" +
            $"  {CONSTANTS.ID} int primary key " +
            $", {CONSTANTS.LONGITUDE} varchar(4096) " +
            $", {CONSTANTS.LATITUDE} varchar(64) " +
            $", {CONSTANTS.USER_TYPE} varchar(16)" +
            $", {CONSTANTS.USER_ID} int foreign key" +
            ")";
        public const string sql_CreateReviewsTable = "CREATE TABLE " +
            $"{CONSTANTS.REVIEW}(" +
            $"  {CONSTANTS.ID} int primary key " +
            $", {CONSTANTS.MESSAGE} varchar(4096) " +
            $", {CONSTANTS.RATING} float" +
            $", {CONSTANTS.DATE} varchar(64)" +
            $", {CONSTANTS.SERVICE_TYPE} varchar(16) " +
            $", {CONSTANTS.SERVICE_PROVIDER_ID} int foreign key" +
            $", {CONSTANTS.USER_ID} int foreign key" +
            ")";
        public const string sql_CreateWorkingHoursTable = "CREATE TABLE " +
            $"{CONSTANTS.WORKING_HOURS}(" +
            $"  {CONSTANTS.DAY} varchar(16) " +
            $", {CONSTANTS.OPENING} varchar(8) " +
            $", {CONSTANTS.CLOSED} varchar(8) " +
            $", {CONSTANTS.SERVICE_PROVIDER_ID} int foreign key" +
            ")";
        public const string sql_CreateMessagesTable = "CREATE TABLE " +
            $"{CONSTANTS.MESSAGE}(" +
            $"  {CONSTANTS.ID} int primary key " +
            $", {CONSTANTS.MESSAGE} varchar(Max)" +
            $", {CONSTANTS.DATE} varchar(64)" +
            $", {CONSTANTS.STATUS} varchar(16)" +
            $", {CONSTANTS.SENDER_ID} int foreign key" +
            $", {CONSTANTS.RECEIVER_ID} int foreign key" +
            ")";
        public const string sql_CreateSuggestedServicesTable = "CREATE TABLE " +
            $"{CONSTANTS.SUGGESTED_SERVICES}(" +
            $"  {CONSTANTS.ID} int primary key " +
            $", {CONSTANTS.GROUP} varchar(64) " +
            $", {CONSTANTS.TYPE} varchar(16) " +
            $", {CONSTANTS.DESCRIPTION} varchar(4096) " +
            $", {CONSTANTS.RATING} float" +
            ")";
    }

    #endregion

}


