using MitazmenServer.DB;

namespace MitazmenServer.UnitTest
{
    [TestClass]
    public class UnitTest1
    {
        //             CreateTable($"CREATE TABLE Persons (PersonID int,LastName varchar(255),FirstName varchar(255),Address varchar(255),City varchar(255));");

        [TestMethod]
        public void CreateTableTest()
        {
           // bool res = DBInitializer.CreateTable($"CREATE TABLE Persons (PersonID int,LastName varchar(255),FirstName varchar(255),Address varchar(255),City varchar(255));");
           // Assert.IsTrue( res );   
        }
    }
}