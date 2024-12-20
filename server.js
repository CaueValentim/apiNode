import express from 'express'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const app = express();
app.use(express.json())



app.post('/cadastrar', async (req, res) => {

  await prisma.user.create({
    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age
    }

  })

  res.status(201).json({ message: "Usuario cadastrado com sucesso" })

})

app.get('/listar', async (req, res) => {
  const users = await prisma.user.findMany()

  res.status(200).json(users)
})

app.put('/update/:id', async (req, res) => {

  await prisma.user.update({
    where: {
      id: req.params.id
    },

    data: {
      email: req.body.email,
      name: req.body.name,
      age: req.body.age
    }

  })

  res.status(201).json({ message: "Usuario atualizado com sucesso" })

})

app.delete("/deletar/:id", async (req, res) => {
  await prisma.user.delete({
    where: {
      id: req.params.id
    }
  })

  res.status(201).json({ message: "Usuario deletado com sucesso" })
})
app.listen(3000)

/*
  Criar nossa API de Usuarios

  -Criar um usiario
  -Listar todos os usúarios
*/

/*
  1) Tipodede rota/ Metodo HTTP get,put...
  2) Endereço 

  Senha DB: 8557C@ue
*/ 