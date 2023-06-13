for i in {1..60};
do
    # try to setup the db
    /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P $SA_PASSWORD -d master -i db-setup.sql   

    # check whether setup completed
    if [ $? -eq 0 ]
    then
        echo "db-setup.sql completed"
        break
    else
        echo "sql server not ready yet..."
        sleep 1s
    fi
done

