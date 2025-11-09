# 🌾 Ata de Desenvolvimento da Etapa 3 — Projeto Solo Forte
---
## 👩‍🌾 Atividades Individuais

| Nome do Integrante           | Atividades Realizadas                                              | Carga Horária |
|------------------------------|--------------------------------------------------------------------|----------------------------|
| Matheus Godinho Blaselbauer  | Configuração do Servidor Zabbix + Agentes FTP e PostgreSQL| 4 dias|
| Yan GuimarãesMartins | Montagem do dashboard e dos gráficos no frontend do zabbix,seleção de templates, criação dewidgets efiltros, validaçãodas metricas de CPU, memória, rede e status doserviço DHCP,documentação das evidências |12 horas|

| Bruno Alfeu Mendes de Araújo | Instalação e configuração do Zabbix Agent na instância NFS e atualização do documento com evidências e explicações do monitoramento NFS. | 8 horas|

## Detalhamento das atividades

**Matheus Godinho Blaselbauer**: Implementei o servidor Zabbix em uma instância EC2 da AWS e configurei as máquinas hospedando os serviços de FTP e banco de dados PostgreSQL para se conectarem via interface Agent, ou seja, como agentes Zabbix. Para isso, o pacote completo do Zabbix(Servidor+Frontend+Agent) para a versão Ubuntu 24.04 foi devidamente instalado e o firewall tanto no grupo de segurança do Console AWS como no terminal foi configurado para aceitar conexões na porta 10050, padrão para conexões por meio de agentes Zabbix. Posteriormente, instalei o pacote de agente tanto no host do banco de dados como no host FTP e alterei o arquivo de configuração para apontar ao IP do servidor Zabbix, permitir conexões na porta 10050 e alterar o hostname das máquinas. No caso da instância de banco de dados, foi efetuado no terminal o setup específico do template "PostgreSQL by Zabbix Agent" para a identificação dos comandos SQL necessários para rodar os testes de monitoramento necessários. Após isso, o IP elástico das máquinas cliente foram adicionados via interface Agent para estabelecer a conexão, que ocorreu com sucesso.

## Colaboração entre integrantes

- Guilherme auxiliou Yan na definição dos templates, no mapeamento das interfaces dos hosts e na validação de conectividade (agent/SNMP).
- Yan auxiliou Guilherme na criação dos hosts no frontend, na configuração dos itens/trigger para o processo DHCP e na checagem dos “Latest data”.


## Detalhamento das atividades

**Matheus Godinho Blaselbauer**: Implementei o servidor Zabbix em uma instância EC2 da AWS e configurei as máquinas hospedando os serviços de FTP e banco de dados PostgreSQL para se conectarem via interface Agent, ou seja, como agentes Zabbix. Para isso, o pacote completo do Zabbix(Servidor+Frontend+Agent) para a versão Ubuntu 24.04 foi devidamente instalado e o firewall tanto no grupo de segurança do Console AWS como no terminal foi configurado para aceitar conexões na porta 10050, padrão para conexões por meio de agentes Zabbix. Posteriormente, instalei o pacote de agente tanto no host do banco de dados como no host FTP e alterei o arquivo de configuração para apontar ao IP do servidor Zabbix, permitir conexões na porta 10050 e alterar o hostname das máquinas. No caso da instância de banco de dados, foi efetuado no terminal o setup específico do template "PostgreSQL by Zabbix Agent" para a identificação dos comandos SQL necessários para rodar os testes de monitoramento necessários. Após isso, o IP elástico das máquinas cliente foram adicionados via interface Agent para estabelecer a conexão, que ocorreu com sucesso.

##
**Guilherme de Souza Mendonça Silva**
Na terceira etapa do projeto, fui responsável pela implementação e configuração do sistema de monitoramento Zabbix no ambiente on-premise (VirtualBox), voltado para o gerenciamento dos serviços de DHCP configurados na etapa anterior. Minhas contribuições foram:

Implementação do Servidor Zabbix: Realizei a importação do Zabbix Appliance para o VirtualBox e configurei duas placas de rede para permitir o funcionamento adequado do sistema. A primeira interface foi configurada em modo Bridge, obtendo o endereço IP 192.168.1.250 da rede local para acesso à interface web. A segunda interface foi configurada em modo Rede Interna (intnet), com endereço IP estático 192.168.99.10.

Configuração dos Agentes de Monitoramento: Preparei ambos os hosts-alvo para coleta de dados pelo servidor Zabbix. No Servidor Ubuntu DHCP, instalei o pacote zabbix-agent e editei o arquivo de configuração para permitir conexões exclusivamente vindas do IP interno do servidor Zabbix (192.168.99.10). No Cliente Windows Server, habilitei o Protocolo SNMP (Simple Network Management Protocol) nativo do sistema operacional, criei a comunidade public com permissão de READ ONLY e configurei o serviço para aceitar requisições SNMP exclusivamente do IP interno do servidor Zabbix (192.168.99.10).

Configuração dos Hosts na Interface Web: Acessei a interface web do Zabbix através do endpoint /zabbix e realizei login com as credenciais padrão de administrador (usuário "Admin" e senha "zabbix"). Criei os hosts correspondentes ao servidor Ubuntu e ao cliente Windows Server, adicionando os hostnames conforme especificado nos arquivos de configuração dos agentes. Para o servidor Ubuntu, adicionei a interface "Agent" com o template "Linux by Zabbix agent". Para o cliente Windows, configurei a interface "SNMP" com as informações da comunidade criada anteriormente e apliquei o template apropriado para monitoramento via SNMP.

Colaboração e Suporte: Durante toda a etapa, trabalhei em estreita colaboração com o Yan, fornecendo suporte na compreensão da estrutura de dados coletados pelo Zabbix e auxiliando na identificação das métricas mais relevantes para compor o dashboard. Recebi também o apoio do Yan na validação dos templates aplicados e na definição dos períodos de coleta de dados para os gráficos.

Documentação: Fui responsável por documentar todo o processo de implementação do servidor Zabbix e configuração dos agentes para o artigo final do projeto, incluindo a captura de todas as evidências técnicas necessárias.
---

---
