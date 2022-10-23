import  express, { request, response }  from "express";
import { PrismaClient } from '@prisma/client';

const app = express();
app.use(express.json())
const prisma = new PrismaClient();

app.get('/matches', async (request, response) => {
    
    const matches = await prisma.match.findMany({
        include: {
            _count: {
                select: {
                    News: true,
                }
            }
        }
    });
    
    return response.json(matches)
});


app.post('/matches', async (request, response) => {
    
    const body: any = request.body;

    const match = await prisma.match.create({
        data: {
            
            timeA: body.timeA,
            timeB: body.timeB,
            placarTimeA: body.placarTimeA,
            placarTimeB: body.placarTimeB,
            imgTimeA: body.imgTimeA,
            imgTimeB: body.imgTimeB
        }
    });

    return response.status(201).json(match);
});



app.get('/matches/:id/news', async (request, response) => {
    const matchId = request.params.id;

    const news = await prisma.news.findMany({
        where: {
            matchId
        }
    })

    return response.json(news)
});


app.post('/matches/:id/news', async (request, response) => {
    
    const matchId = request.params.id;
    
    const body: any = request.body;

    const news = await prisma.news.create({
        data: {
            matchId,
            titulo: body.titulo,
            descricao: body.descricao
        }
    });

    return response.status(201).json(body);
});



app.listen('3333', () => {
    console.log("Server is running")
})