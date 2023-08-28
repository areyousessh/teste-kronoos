
### Como testar a aplicação


- Clonando ele através do comando git clone
- Execute Yarn para instalar as dependencias utilizadas
- Execute um yarn dev para rodar o backend
- Agora em outra instancia do terminal navegue até o diretório do frontend executando um cd front-test-kronos
- Igualmente ao backend execute um yarn para instalar as dependencias e em seguida um yarn dev para executar a aplicação
- Abrindo a aplicação do frontend no navegador na porta indicada no terminal vai poder ver os dados formatados de acordo com os requisitos do teste


### Observações

- Transformei os dados da planinha csv em uma API REST para consumo no frontend
- Optei por somente utilizar os dados do primeiro objeto do array de dados devido a grande quantidade de dados contidas na planilha
- Todos os dados já estão formatados como mandam os requisitos do teste 
- No caso do valor da parcela já está sendo realizada a validação dos valores corretos e caso eles não estejam corretos na planilha são corrigidos e renderizados na tela


