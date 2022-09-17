import program
import mysql.connector


def DataFetch():
    try:
        connection = mysql.connector.connect(host='localhost',
                                             database='demodb',
                                             user='root',
                                             password='P@ssw0rd')

        sql_select_Query = "select imageId, profileId, imagePath from images"
        cursor = connection.cursor()
        cursor.execute(sql_select_Query)
        # get all records
        records = cursor.fetchall()

        return records
        # for row in records:
        #     result = program.find_golden_ratio(row[2])
        #     return [row[0], row[1], str(result)]

    except mysql.connector.Error as e:
        print("Error reading data from MySQL table", e)
    finally:
        if connection.is_connected():
            connection.close()
            cursor.close()
            print("Data Fetched successfully")


def DataInsert(record):
    try:
        connection = mysql.connector.connect(host='localhost',
                                             database='demodb',
                                             user='root',
                                             password='P@ssw0rd')

        cursor = connection.cursor(prepared=True)
        sql_Delete_query = """insert into jprofile   values(%s, %s, %s);"""

        imageId = record[0]
        profileId = record[1]
        goldenScore = round(program.find_golden_ratio(record[2]), 2)

        cursor.execute(sql_Delete_query, (imageId, profileId, goldenScore))
        connection.commit()
        print("Golden Ratio calculated and inserted into the table")

    except mysql.connector.Error as error:
        print("parameterized query failed {}".format(error))
    finally:
        if connection.is_connected():
            cursor.close()
            connection.close()
            print("Data insertion completed")


# try:
#     DataInsert()
#     print("Data insertion done successfully")
# except mysql.connector.Error as error:
#     print("parameterized query failed {}".format(error))
