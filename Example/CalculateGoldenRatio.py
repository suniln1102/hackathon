import mysql

import functions
try:
    profiles = functions.DataFetch()

    for record in profiles: 
        functions.DataInsert(record)

except mysql.connector.Error as error:
    print("Error in calculation or connection")
