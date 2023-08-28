import {app} from './app'

const port = process.env.PORT || 3005

const server = app.listen(port, () => console.log(`App ouvindo na porta ${port}`))

process.on('SIGINT', () => {
    server.close()
    console.log('app finalizado')
})