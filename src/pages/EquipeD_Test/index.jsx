import React from "react";
import UserList from "../../components/UserList";
import User from "../../components/UserList/User";


  {/*Função de Teste do Componente User List- Equipe D*/}
  function EquipeDTest(){
      
      {/*Array de Usuários*/}
          const users =[
            {
              name:"Bonequinha Cinza",
              id:2566789,
              
            },
            {
              name:"Bonequinha Cinza",
              id:2566789,
              
            },
            {
              name:"Bonequinha Cinza",
              id:2566789,
              
            },
            {
              name:"Bonequinha Cinza",
              id:2566789,
              
            },
           
          ]
      return(


      <div>      
        {/*Renderização da lista*/}  
         <UserList userCount={"("+ (users.length.toString()) +")"} user={
          users.map((item,i) =>(<User key={i} name={item.name} id={item.id}/>))}/> 
      </div>

)} export default EquipeDTest;