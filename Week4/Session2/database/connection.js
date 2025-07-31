import { Sequelize } from "sequelize";
export const sequelize = new Sequelize('route1' , 'root' , '' , {
    host:'localhost',
    dialect:'mysql'
});
const connection = async () =>{
    return sequelize.sync({alter:true}).then(()=>{
        console.log("DB Connected");
    }).catch((error) =>{
        console.log("DB Error ", error);
    });
};
sequelize.sync();
export default connection;