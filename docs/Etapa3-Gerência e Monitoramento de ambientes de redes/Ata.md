# 🌾 Ata de Desenvolvimento da Etapa 3 — Projeto Solo Forte
---
## 👩‍🌾 Atividades Individuais

| Nome do Integrante           | Atividades Realizadas                                              | Carga Horária |
|------------------------------|--------------------------------------------------------------------|----------------------------|
| Matheus Godinho Blaselbauer  | Configuração do Servidor Zabbix + Agentes FTP e PostgreSQL| 4 dias|

| Bruno Alfeu Mendes de Araújo | Instalação e configuração do Zabbix Agent na instância NFS e atualização do documento com evidências e explicações do monitoramento NFS. | 8 horas|


## Detalhamento das atividades

**Matheus Godinho Blaselbauer**: Implementei o servidor Zabbix em uma instância EC2 da AWS e configurei as máquinas hospedando os serviços de FTP e banco de dados PostgreSQL para se conectarem via interface Agent, ou seja, como agentes Zabbix. Para isso, o pacote completo do Zabbix(Servidor+Frontend+Agent) para a versão Ubuntu 24.04 foi devidamente instalado e o firewall tanto no grupo de segurança do Console AWS como no terminal foi configurado para aceitar conexões na porta 10050, padrão para conexões por meio de agentes Zabbix. Posteriormente, instalei o pacote de agente tanto no host do banco de dados como no host FTP e alterei o arquivo de configuração para apontar ao IP do servidor Zabbix, permitir conexões na porta 10050 e alterar o hostname das máquinas. No caso da instância de banco de dados, foi efetuado no terminal o setup específico do template "PostgreSQL by Zabbix Agent" para a identificação dos comandos SQL necessários para rodar os testes de monitoramento necessários. Após isso, o IP elástico das máquinas cliente foram adicionados via interface Agent para estabelecer a conexão, que ocorreu com sucesso.
---

---
