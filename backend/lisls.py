import pymysql.cursors
import json

def jog():
    db_host="localhost"
    db_banco='jogador'
    
    listajog =[]
    jsonjog = {}
    
    
    
    connection = pymysql.connect(host=db_host,
                                user='root',
                                password='',
                                database=db_banco,
                                cursorclass=pymysql.cursors.DictCursor)

    with connection:
   
        with connection.cursor() as cursor:
            
            sql = "SELECT nome, score FROM jogador order by score desc"
            cursor.execute(sql)
            registros = cursor.fetchall()
            for jogador in registros:
                listajog.append(jogador["nome"])
                
                listajog.append(jogador["score"])
    
    
    jsonjog["jogador"] = listajog
    json_object = json.dumps(jsonjog, indent=4 ) 
    
    return json_object           